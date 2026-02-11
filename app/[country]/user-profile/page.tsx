'use client';

import { Suspense, useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Heart, Eye, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCountry } from '@/lib/context/CountryContext';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { getAllTemplates } from '@/lib/store/slices/templateSlice';
import { fetchBlobUrl, BLOB_BASE_URL, BLOB_SAS_TOKEN } from '@/lib/utils/blobUtils';
import { addTemplateViewService } from '@/lib/services/templateService';
import { followOrUnfollowUserService, getFollowByUserIdService } from '@/lib/services/followService';
import { LOGIN_URL } from '@/lib/constants/urls';
import { encryptProjectId, extractProjectIdFromParam } from '@/lib/utils/encryptionUtils';

function UserProfileContent() {
    const { getPath } = useCountry();
    const router = useRouter();
    const searchParams = useSearchParams();
    const dispatch = useAppDispatch();
    const { activeTemplates, isLoading } = useAppSelector((state) => state.template);
    const { user, isAuthenticated } = useAppSelector((state) => state.auth);

    const [profileUserId, setProfileUserId] = useState<number | null>(null);
    const [userTemplates, setUserTemplates] = useState<any[]>([]);
    const [templateImageUrls, setTemplateImageUrls] = useState<Record<number, string>>({});
    const [followers, setFollowers] = useState(0);
    const [followings, setFollowings] = useState(0);
    const [isFollowing, setIsFollowing] = useState(false);
    const [isFollowingLoading, setIsFollowingLoading] = useState(false);
    const [profileData, setProfileData] = useState<{ userName?: string; profileUrl?: string | null } | null>(null);

    // Get userId from URL (decrypt if encrypted)
    useEffect(() => {
        const userIdParam = searchParams.get('userId');
        if (userIdParam) {
            const decryptedId = extractProjectIdFromParam(userIdParam);
            if (decryptedId) {
                setProfileUserId(Number(decryptedId));
            }
        }
    }, [searchParams]);

    // Fetch templates if not loaded
    useEffect(() => {
        if (activeTemplates.length === 0 && !isLoading) {
            dispatch(getAllTemplates());
        }
    }, [dispatch, activeTemplates.length, isLoading]);

    // Filter templates by userId
    useEffect(() => {
        if (profileUserId && activeTemplates.length > 0) {
            const filtered = activeTemplates.filter(t => t.userId === profileUserId);
            setUserTemplates(filtered);
            
            // Get profile data from first template
            if (filtered.length > 0) {
                setProfileData({
                    userName: filtered[0].userName,
                    profileUrl: filtered[0].profileUrl
                });
            }
        }
    }, [profileUserId, activeTemplates]);

    // Fetch follow data
    useEffect(() => {
        const fetchFollowData = async () => {
            if (!profileUserId) return;

            try {
                const followData = await getFollowByUserIdService(profileUserId);
                setFollowers(followData.followerCount);
                setFollowings(followData.followingCount);
            } catch (error) {
                console.error('Error fetching follow data:', error);
            }
        };

        fetchFollowData();
        // Reset follow state when profile user changes
        setIsFollowing(false);
    }, [profileUserId]);

    // Load template images
    useEffect(() => {
        userTemplates.forEach((template) => {
            if (template.thumbnail_Url && !templateImageUrls[template.template_Id]) {
                fetchBlobUrl(template.thumbnail_Url)
                    .then((url) => {
                        setTemplateImageUrls((prev) => ({
                            ...prev,
                            [template.template_Id]: url,
                        }));
                    })
                    .catch((error) => {
                        console.error(`Failed to load image for template ${template.template_Id}:`, error);
                        setTemplateImageUrls((prev) => ({
                            ...prev,
                            [template.template_Id]: template.thumbnail_Url,
                        }));
                    });
            }
        });
    }, [userTemplates]);

    const handleFollow = async () => {
        if (!isAuthenticated || !user) {
            router.push(LOGIN_URL);
            return;
        }

        if (!profileUserId) return;

        setIsFollowingLoading(true);
        try {
            await followOrUnfollowUserService({
                followerUserId: user.userId,
                followingUserId: profileUserId,
                isActive: !isFollowing
            });
            setIsFollowing(!isFollowing);
            
            // Refresh follow data
            const followData = await getFollowByUserIdService(profileUserId);
            setFollowers(followData.followerCount);
            setFollowings(followData.followingCount);
        } catch (error) {
            console.error('Error following/unfollowing user:', error);
        } finally {
            setIsFollowingLoading(false);
        }
    };

    const handleTemplateClick = async (templateId: number) => {
        try {
            await addTemplateViewService(templateId, "Template", "View");
        } catch (error) {
            console.error("Error adding template view:", error);
        }
        const encryptedId = encryptProjectId(templateId);
        router.push(getPath(`/template-detail?templateId=${encryptedId}`));
        window.scrollTo(0, 0);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-white font-nunito pt-20 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-zlendo-teal border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!profileUserId || !profileData) {
        return (
            <div className="min-h-screen bg-white font-nunito pt-20 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-black text-zlendo-grey-dark mb-4">User Not Found</h1>
                    <Link href={getPath('/viewalltemplates')} className="text-zlendo-teal font-bold hover:underline">
                        Back to Templates
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white font-nunito pt-3">
            {/* Breadcrumbs */}
            <div className="container-custom px-4 py-6">
                <div className="flex items-center gap-2 text-sm font-bold text-zlendo-grey-medium opacity-60">
                    <Link href={getPath('/')} className="hover:text-zlendo-teal transition-colors">Home</Link>
                    <span>/</span>
                    <Link href={getPath('/viewalltemplates')} className="hover:text-zlendo-teal transition-colors">Templates</Link>
                    <span>/</span>
                    <span className="text-zlendo-grey-dark opacity-100">{profileData.userName}</span>
                </div>
            </div>

            <main className="container-custom px-4 pb-20">
                {/* User Profile Section */}
                <div className="bg-white border border-gray-100 rounded-[32px] p-6 md:p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] mb-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                            {profileData.profileUrl ? (
                                <img
                                    src={profileData.profileUrl}
                                    alt={profileData.userName}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const target = e.currentTarget;
                                        target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="64" height="64"%3E%3Crect fill="%23e2e8f0" width="64" height="64"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%2394a3b8" font-family="Arial" font-size="20"%3E%3C/text%3E%3C/svg%3E';
                                    }}
                                />
                            ) : (
                                <div className="w-full h-full bg-zlendo-teal/20 flex items-center justify-center">
                                    <span className="text-zlendo-teal font-black text-xl">
                                        {profileData.userName?.charAt(0).toUpperCase() || 'U'}
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-5 mb-2">
                                <h1 className="text-2xl font-black text-zlendo-grey-dark">
                                    {profileData.userName}
                                </h1>
                                {isAuthenticated && user?.userId === profileUserId ? null : (
                                    <button
                                        onClick={() => {
                                            if (!isAuthenticated) {
                                                router.push(LOGIN_URL);
                                                return;
                                            }
                                            handleFollow();
                                        }}
                                        disabled={isFollowingLoading}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-xl font-black text-sm transition-all flex-shrink-0 ${
                                            isFollowing
                                                ? 'bg-gray-100 text-zlendo-grey-dark hover:bg-gray-200'
                                                : 'bg-zlendo-teal text-white hover:bg-zlendo-teal/90'
                                        } disabled:opacity-50 disabled:cursor-not-allowed`}
                                    >
                                        <UserPlus className="w-4 h-4" />
                                        {isFollowing ? 'Following' : 'Follow'}
                                    </button>
                                )}
                            </div>
                            <div className="flex items-center gap-6 text-sm font-bold text-zlendo-grey-medium">
                                <span>{followers} Followers</span>
                                <span>{followings} Followings</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shared Templates Section */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-black text-zlendo-grey-dark mb-8">
                        Shared {userTemplates.length}
                    </h2>
                    {userTemplates.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {userTemplates.map((template) => (
                                <div
                                    key={template.template_Id}
                                    onClick={() => handleTemplateClick(template.template_Id)}
                                    className="group block bg-white rounded-xl overflow-hidden border border-black/5 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
                                >
                                    <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                                        {templateImageUrls[template.template_Id] || template.thumbnail_Url ? (
                                            <img
                                                src={templateImageUrls[template.template_Id] || template.thumbnail_Url}
                                                alt={template.template_Name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                onError={(e) => {
                                                    const target = e.currentTarget;
                                                    const currentUrl = templateImageUrls[template.template_Id] || template.thumbnail_Url;
                                                    
                                                    if (currentUrl?.startsWith('blob:') && template.thumbnail_Url) {
                                                        const directUrl = template.thumbnail_Url.startsWith('http')
                                                            ? template.thumbnail_Url
                                                            : `${BLOB_BASE_URL}${template.thumbnail_Url}${template.thumbnail_Url.includes('?') ? '&' : '?'}${BLOB_SAS_TOKEN}`;
                                                        
                                                        if (target.src !== directUrl) {
                                                            target.src = directUrl;
                                                            return;
                                                        }
                                                    }
                                                    
                                                    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f1f5f9" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%2394a3b8" font-family="Arial" font-size="16"%3EImage not available%3C/text%3E%3C/svg%3E';
                                                }}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-zlendo-grey-medium">
                                                <div className="w-6 h-6 border-3 border-zlendo-teal border-t-transparent rounded-full animate-spin"></div>
                                            </div>
                                        )}
                                        <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Heart className="w-3 h-3 text-white" />
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <h3 className="font-black text-sm text-zlendo-grey-dark mb-1.5 line-clamp-2">{template.template_Name}</h3>
                                        <div className="flex items-center gap-3 text-[10px] font-bold text-zlendo-grey-medium opacity-60">
                                            <div className="flex items-center gap-1">
                                                <Heart className="w-3 h-3" />
                                                <span>{template.likeCount || 0}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Eye className="w-3 h-3" />
                                                <span>{template.viewCount || 0}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 text-zlendo-grey-medium font-medium">
                            No templates shared yet.
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

function UserProfileFallback() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-zlendo-teal border-t-transparent rounded-full animate-spin" />
        </div>
    );
}

export default function UserProfilePage() {
    return (
        <Suspense fallback={<UserProfileFallback />}>
            <UserProfileContent />
        </Suspense>
    );
}
