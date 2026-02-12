'use client';

import { Suspense, useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Copy, Check, ArrowRight, Maximize2,
    X, Share2, Heart, Eye,
    Bookmark, ThumbsUp, ThumbsDown, Trash2, UserPlus
} from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCountry } from '@/lib/context/CountryContext';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { PROJECT_DETAILS_URL } from '@/lib/config/env';
import { getAllTemplates } from '@/lib/store/slices/templateSlice';
import { fetchBlobUrl, BLOB_BASE_URL, BLOB_SAS_TOKEN } from '@/lib/utils/blobUtils';
import { likeTemplateService, favoriteTemplateService, addTemplateViewService, getUserTemplateInteractionsService, getTemplateCommentsService, addCommentService, likeCommentService, deleteCommentService, type TemplateComment, type TemplateCommentsResponse } from '@/lib/services/templateService';
import { followOrUnfollowUserService, getFollowByUserIdService } from '@/lib/services/followService';
import { LOGIN_URL } from '@/lib/constants/urls';
import { encryptProjectId, extractProjectIdFromParam } from '@/lib/utils/encryptionUtils';

interface CommentItemProps {
    comment: TemplateComment;
    templateId: number;
    user: any;
    isAuthenticated: boolean;
    replyingTo: number | null;
    setReplyingTo: (id: number | null) => void;
    replyText: Record<number, string>;
    setReplyText: (updater: (prev: Record<number, string>) => Record<number, string>) => void;
    handlePostReply: (parentCommentId: number) => void;
    handleLikeComment: (templateCommentId: number) => void;
    handleDeleteComment: (templateCommentId: number) => void;
    formatDate: (dateString: string) => string;
    router: any;
    LOGIN_URL: string;
}

function CommentItem({
    comment,
    templateId,
    user,
    isAuthenticated,
    replyingTo,
    setReplyingTo,
    replyText,
    setReplyText,
    handlePostReply,
    handleLikeComment,
    handleDeleteComment,
    formatDate,
    router,
    LOGIN_URL
}: CommentItemProps) {
    const isReplying = replyingTo === comment.templateCommentId;
    const currentReplyText = replyText[comment.templateCommentId] || '';

    return (
        <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm">
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                    {comment.profileUrl ? (
                        <img
                            src={comment.profileUrl}
                            alt={comment.userName}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Crect fill="%23e2e8f0" width="40" height="40"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%2394a3b8" font-family="Arial" font-size="14"%3E%3C/text%3E%3C/svg%3E';
                            }}
                        />
                    ) : (
                        <div className="w-full h-full bg-zlendo-teal/20 flex items-center justify-center">
                            <span className="text-zlendo-teal font-black text-sm">
                                {comment.userName.charAt(0).toUpperCase()}
                            </span>
                        </div>
                    )}
                </div>
                <div className="flex-1">
                    <div className="mb-2">
                        <span className="text-sm font-bold text-zlendo-grey-dark">{comment.userName}</span>
                    </div>
                    <p className="text-zlendo-grey-medium font-medium mb-3 leading-relaxed">{comment.text}</p>
                    <div className="flex items-center gap-4 text-xs font-bold text-zlendo-grey-medium opacity-60">
                        <span>{formatDate(comment.createdOn)}</span>
                        <div className="flex items-center gap-2">
                            <button
                                className={`flex items-center gap-1 transition-all ${
                                    comment.isLikedByLoggedUser 
                                        ? 'text-zlendo-teal' 
                                        : 'text-zlendo-grey-medium hover:text-zlendo-teal'
                                }`}
                                onClick={() => handleLikeComment(comment.templateCommentId)}
                                disabled={!isAuthenticated}
                                title={comment.isLikedByLoggedUser ? 'Unlike' : 'Like'}
                            >
                                <ThumbsUp className={`w-4 h-4 transition-all ${
                                    comment.isLikedByLoggedUser 
                                        ? 'fill-current text-zlendo-teal' 
                                        : ''
                                }`} />
                            </button>
                            <span className={comment.isLikedByLoggedUser ? 'text-zlendo-teal font-bold' : ''}>
                                {comment.totalLikes}
                            </span>
                        </div>
                        <button
                            onClick={() => {
                                if (!isAuthenticated) {
                                    router.push(LOGIN_URL);
                                    return;
                                }
                                setReplyingTo(isReplying ? null : comment.templateCommentId);
                            }}
                            className="text-zlendo-teal hover:underline font-bold"
                        >
                            Reply
                        </button>
                        {/* Show delete button only for comment owner */}
                        {isAuthenticated && user && comment.userId === user.userId && (
                            <button
                                onClick={() => handleDeleteComment(comment.templateCommentId)}
                                className="text-red-500 hover:text-red-600 transition-colors flex items-center gap-1"
                                title="Delete comment"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    {/* Reply Form */}
                    {isReplying && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-zlendo-teal/20 flex items-center justify-center flex-shrink-0">
                                    {isAuthenticated && user?.userName ? (
                                        <span className="text-zlendo-teal font-black text-xs">
                                            {user.userName.charAt(0).toUpperCase()}
                                        </span>
                                    ) : (
                                        <span className="text-zlendo-teal font-black text-xs">U</span>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <textarea
                                        value={currentReplyText}
                                        onChange={(e) => setReplyText((prev) => ({ ...prev, [comment.templateCommentId]: e.target.value }))}
                                        placeholder="Write a reply..."
                                        className="w-full min-h-[80px] p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-zlendo-teal/20 focus:border-zlendo-teal font-medium text-zlendo-grey-dark text-sm"
                                        maxLength={400}
                                    />
                                    <div className="flex items-center justify-end gap-3 mt-2">
                                        <button
                                            onClick={() => {
                                                setReplyingTo(null);
                                                setReplyText((prev) => ({ ...prev, [comment.templateCommentId]: '' }));
                                            }}
                                            className="px-4 py-1.5 text-sm font-bold text-zlendo-grey-medium hover:text-zlendo-grey-dark transition-colors"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={() => handlePostReply(comment.templateCommentId)}
                                            disabled={!currentReplyText.trim() || currentReplyText.trim().length > 400}
                                            className="px-4 py-1.5 bg-zlendo-teal text-white rounded-lg font-black text-sm hover:bg-zlendo-teal/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Post Reply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Nested Replies */}
                    {comment.replies && comment.replies.length > 0 && (
                        <div className="mt-4 pl-6 border-l-2 border-gray-100 space-y-4">
                            {comment.replies.map((reply) => (
                                <CommentItem
                                    key={reply.templateCommentId}
                                    comment={reply}
                                    templateId={templateId}
                                    user={user}
                                    isAuthenticated={isAuthenticated}
                                    replyingTo={replyingTo}
                                    setReplyingTo={setReplyingTo}
                                    replyText={replyText}
                                    setReplyText={setReplyText}
                                    handlePostReply={handlePostReply}
                                    handleLikeComment={handleLikeComment}
                                    handleDeleteComment={handleDeleteComment}
                                    formatDate={formatDate}
                                    router={router}
                                    LOGIN_URL={LOGIN_URL}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function TemplateDetailContent() {
    const { getPath } = useCountry();
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isCopied, setIsCopied] = useState(false);
    const dispatch = useAppDispatch();
    const { activeTemplates, isLoading } = useAppSelector((state) => state.template);

    const [mainImageUrl, setMainImageUrl] = useState<string | null>(null);
    const [thumbnailUrls, setThumbnailUrls] = useState<string[]>([]);
    const [multipleThumbnailUrls, setMultipleThumbnailUrls] = useState<string[]>([]);
    const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState<number>(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [loadingMainImage, setLoadingMainImage] = useState(false);
    const [loadingThumbnails, setLoadingThumbnails] = useState<Record<number, boolean>>({});
    const [similarTemplateImageUrls, setSimilarTemplateImageUrls] = useState<Record<number, string>>({});
    const { user, isAuthenticated } = useAppSelector((state) => state.auth);
    const [isLiked, setIsLiked] = useState(false);
    const [isLiking, setIsLiking] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isFavoriting, setIsFavoriting] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);
    const [isCopiedFromModal, setIsCopiedFromModal] = useState(false);
    const [comments, setComments] = useState<TemplateComment[]>([]);
    const [loadingComments, setLoadingComments] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [isPostingComment, setIsPostingComment] = useState(false);
    const [replyingTo, setReplyingTo] = useState<number | null>(null);
    const [replyText, setReplyText] = useState<Record<number, string>>({});
    const [followers, setFollowers] = useState(0);
    const [followings, setFollowings] = useState(0);
    const [isFollowing, setIsFollowing] = useState(false);
    const [isFollowingLoading, setIsFollowingLoading] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [commentToDelete, setCommentToDelete] = useState<number | null>(null);

    // Get template ID from URL searchParams
    const templateId = useMemo(() => {
        const id = searchParams.get('templateId');
        return id ? extractProjectIdFromParam(id) : '';
    }, [searchParams]);

    // Find the selected template (templateId from URL is string; template_Id is number)
    const selectedTemplate = useMemo(() => {
        if (!templateId) return null;
        const idNum = Number(templateId);
        return activeTemplates.find(t => t.template_Id === idNum) || null;
    }, [templateId, activeTemplates]);

    // Fetch templates if not loaded
    useEffect(() => {
        if (activeTemplates.length === 0 && !isLoading) {
            dispatch(getAllTemplates());
        }
    }, [dispatch, activeTemplates.length, isLoading]);

    // Check if user has already liked/favorited this template
    useEffect(() => {
        const checkUserInteractions = async () => {
            if (isAuthenticated && user?.userId && templateId) {
                // Reset state while loading
                setIsLiked(false);
                setIsFavorite(false);

                try {
                    const response = await getUserTemplateInteractionsService(user.userId, Number(templateId));
                    if (response) {
                        const interaction = Array.isArray(response) ? response[0] : response;
                        if (interaction) {
                            setIsLiked(!!interaction.isLiked);
                            setIsFavorite(!!interaction.isFavorited);
                        }
                    }
                } catch (error) {
                    console.error('Error fetching user interactions:', error);
                }
            } else {
                // If not logged in, reset states
                setIsLiked(false);
                setIsFavorite(false);
            }
        };

        checkUserInteractions();
    }, [isAuthenticated, user?.userId, templateId]);

    // Fetch comments when templateId changes
    useEffect(() => {
        const fetchComments = async () => {
            if (!templateId) return;

            setLoadingComments(true);
            try {
                const response = await getTemplateCommentsService(Number(templateId));
                if (response && response.comments) {
                    setComments(response.comments);
                }
            } catch (error) {
                console.error('Error fetching comments:', error);
                setComments([]);
            } finally {
                setLoadingComments(false);
            }
        };

        fetchComments();
    }, [templateId]);

    // Fetch follow data for template owner
    useEffect(() => {
        const fetchFollowData = async () => {
            if (!selectedTemplate?.userId) return;

            try {
                const followData = await getFollowByUserIdService(selectedTemplate.userId);
                setFollowers(followData.followerCount);
                setFollowings(followData.followingCount);
            } catch (error) {
                console.error('Error fetching follow data:', error);
            }
        };

        fetchFollowData();
        // Reset follow state when template changes
        setIsFollowing(false);
    }, [selectedTemplate?.userId]);

    // Reset selected thumbnail index when template changes
    useEffect(() => {
        setSelectedThumbnailIndex(0);
    }, [templateId]);

    // Load main thumbnail image
    useEffect(() => {
        if (selectedTemplate?.thumbnail_Url) {
            setLoadingMainImage(true);
            fetchBlobUrl(selectedTemplate.thumbnail_Url)
                .then((url) => {
                    setMainImageUrl(url);
                    setThumbnailUrls([url]);
                    setLoadingMainImage(false);
                })
                .catch((error) => {
                    console.error('Failed to load main thumbnail:', error);
                    setMainImageUrl(selectedTemplate.thumbnail_Url);
                    setThumbnailUrls(selectedTemplate.thumbnail_Url ? [selectedTemplate.thumbnail_Url] : []);
                    setLoadingMainImage(false);
                });
        }
    }, [selectedTemplate]);

    // Load multiple thumbnail images
    useEffect(() => {
        if (selectedTemplate?.multiple_ThumbnailUrls && selectedTemplate.multiple_ThumbnailUrls.length > 0) {
            const loadMultipleThumbnails = async () => {
                const loadedUrls: string[] = [];
                const loadingStates: Record<number, boolean> = {};

                // Initialize loading states
                selectedTemplate.multiple_ThumbnailUrls!.forEach((_, index) => {
                    loadingStates[index] = true;
                });
                setLoadingThumbnails(loadingStates);

                // Load all thumbnails
                const loadPromises = selectedTemplate.multiple_ThumbnailUrls!.map(async (url, index) => {
                    try {
                        const blobUrl = await fetchBlobUrl(url);
                        loadedUrls[index] = blobUrl;
                        setLoadingThumbnails((prev) => ({ ...prev, [index]: false }));
                        return blobUrl;
                    } catch (error) {
                        console.error(`Failed to load thumbnail ${index}:`, error);
                        loadedUrls[index] = url; // Fallback to original URL
                        setLoadingThumbnails((prev) => ({ ...prev, [index]: false }));
                        return url;
                    }
                });

                await Promise.all(loadPromises);
                setMultipleThumbnailUrls(loadedUrls);
            };

            loadMultipleThumbnails();
        } else {
            setMultipleThumbnailUrls([]);
            setLoadingThumbnails({});
        }
    }, [selectedTemplate]);

    // Get similar templates based on room type (exclude current template)
    const similarTemplates = useMemo(() => {
        if (!selectedTemplate) return [];

        const currentRoomType = selectedTemplate.room_TypeName;

        // First, get templates with the same room type
        const sameRoomTypeTemplates = activeTemplates.filter(
            t => t.template_Id !== selectedTemplate.template_Id &&
                t.room_TypeName === currentRoomType &&
                t.room_TypeName !== null &&
                t.room_TypeName.trim() !== ''
        );

        // If we have enough templates with same room type, use them
        if (sameRoomTypeTemplates.length >= 4) {
            return sameRoomTypeTemplates
                .slice(0, 4)
                .map(t => ({
                    id: t.template_Id,
                    title: t.template_Name || 'Untitled Template',
                    img: t.thumbnail_Url || '',
                    originalImg: t.thumbnail_Url || '',
                }));
        }

        // Otherwise, fill remaining slots with other templates
        const otherTemplates = activeTemplates.filter(
            t => t.template_Id !== selectedTemplate.template_Id &&
                (t.room_TypeName !== currentRoomType || !currentRoomType)
        );

        const combinedTemplates = [...sameRoomTypeTemplates, ...otherTemplates].slice(0, 4);

        return combinedTemplates.map(t => ({
            id: t.template_Id,
            title: t.template_Name || 'Untitled Template',
            img: t.thumbnail_Url || '',
            originalImg: t.thumbnail_Url || '',
        }));
    }, [activeTemplates, selectedTemplate]);

    // Load images for similar templates
    useEffect(() => {
        similarTemplates.forEach((template) => {
            if (template.originalImg && !similarTemplateImageUrls[template.id]) {
                fetchBlobUrl(template.originalImg)
                    .then((url) => {
                        setSimilarTemplateImageUrls((prev) => ({
                            ...prev,
                            [template.id]: url,
                        }));
                    })
                    .catch((error) => {
                        console.error(`Failed to load image for similar template ${template.id}:`, error);
                        // Fallback to original URL
                        setSimilarTemplateImageUrls((prev) => ({
                            ...prev,
                            [template.id]: template.originalImg,
                        }));
                    });
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [similarTemplates]);

    // Redirect if template not found
    useEffect(() => {
        if (!isLoading && activeTemplates.length > 0 && !selectedTemplate && templateId) {
            router.push(getPath('/viewalltemplates'));
        }
    }, [isLoading, activeTemplates, selectedTemplate, templateId, router, getPath]);

    // Prepare template data for display
    const templateData = useMemo(() => {
        if (!selectedTemplate) {
            return {
                title: "Template Not Found",
                category: "",
                style: "",
                description: "",
                mainImage: "",
                thumbnails: [],
                tags: [],
            };
        }

        const tags: string[] = [];
        if (selectedTemplate.room_TypeName) tags.push(selectedTemplate.room_TypeName);
        if (selectedTemplate.template_StyleName) tags.push(selectedTemplate.template_StyleName);
        if (selectedTemplate.template_TypeName) tags.push(selectedTemplate.template_TypeName);

        // Combine main thumbnail with multiple thumbnails
        const allThumbnails = [
            ...(thumbnailUrls.length > 0 ? thumbnailUrls : (selectedTemplate.thumbnail_Url ? [selectedTemplate.thumbnail_Url] : [])),
            ...multipleThumbnailUrls
        ];

        // Determine the main image to display (selected thumbnail or first one)
        const displayImage = allThumbnails[selectedThumbnailIndex] || mainImageUrl || selectedTemplate.thumbnail_Url || "";

        return {
            title: selectedTemplate.template_Name || "Untitled Template",
            category: selectedTemplate.room_TypeName || "",
            style: selectedTemplate.template_StyleName || "",
            description: selectedTemplate.description || "",
            mainImage: displayImage,
            thumbnails: allThumbnails,
            tags: tags,
        };
    }, [selectedTemplate, mainImageUrl, thumbnailUrls, multipleThumbnailUrls, selectedThumbnailIndex]);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    const handleSimilarTemplateClick = async (id: number) => {
        try {
            await addTemplateViewService(id, "Template", "View");
        } catch (error) {
            console.error("Error adding template view:", error);
        }
        // Navigate to template detail page with template ID
        const encryptedId = encryptProjectId(id);
        router.push(getPath(`/template-detail?templateId=${encryptedId}`));
        // Scroll to top
        window.scrollTo(0, 0);
    };

    const handleOpenFullscreen = () => {
        setIsFullscreen(true);
    };

    const handleCloseFullscreen = () => {
        setIsFullscreen(false);
    };

    // Close fullscreen on ESC key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isFullscreen) {
                setIsFullscreen(false);
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isFullscreen]);

    const handleLike = async () => {
        if (!isAuthenticated || !user) {
            router.push(LOGIN_URL);
            return;
        }

        if (!templateId || isLiking) return;

        setIsLiking(true);
        try {
            const nextLikedState = !isLiked;
            await likeTemplateService(
                Number(templateId),
                user.userId,
                nextLikedState,
                nextLikedState,
                "Template",
                nextLikedState ? "Like" : "Unlike"
            );
            setIsLiked(nextLikedState);
        } catch (error) {
            console.error('Error liking template:', error);
        } finally {
            setIsLiking(false);
        }
    };

    const handleFavorite = async () => {
        if (!isAuthenticated) {
            router.push(LOGIN_URL);
            return;
        }

        if (!templateId || !user) return;

        setIsFavoriting(true);
        try {
            // We want to set it to the opposite of the current state
            const newIsFavorite = !isFavorite;
            await favoriteTemplateService(
                Number(templateId),
                user.userId,
                newIsFavorite,
                "Template",
                newIsFavorite ? "AddFavorite" : "RemoveFavorite"
            );
            setIsFavorite(newIsFavorite);
        } catch (error) {
            console.error('Error favoriting template:', error);
        } finally {
            setIsFavoriting(false);
        }
    };

    const handleSocialShare = (platform: string) => {
        const url = window.location.href;
        const text = `Check out this amazing design: ${templateData.title}`;
        const media = templateData.mainImage;

        let shareUrl = '';
        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case 'x':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
                break;
            case 'pinterest':
                shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(media)}&description=${encodeURIComponent(text)}`;
                break;
            case 'whatsapp':
                shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`;
                break;
        }

        if (shareUrl) {
            window.open(shareUrl, '_blank', 'noopener,noreferrer');
        }
    };

    const handleCopyLinkFromModal = () => {
        navigator.clipboard.writeText(window.location.href);
        setIsCopiedFromModal(true);
        setTimeout(() => setIsCopiedFromModal(false), 2000);
    };

    const handlePostComment = async () => {
        if (!isAuthenticated || !user) {
            router.push(LOGIN_URL);
            return;
        }

        if (!templateId || !newComment.trim() || newComment.trim().length < 1 || newComment.trim().length > 400) {
            return;
        }

        setIsPostingComment(true);
        try {
            // parentCommentId = null for top-level comments
            await addCommentService(Number(templateId), user.userId, newComment.trim(), null);
            setNewComment('');
            // Refresh comments
            const response = await getTemplateCommentsService(Number(templateId));
            if (response && response.comments) {
                setComments(response.comments);
            }
        } catch (error) {
            console.error('Error posting comment:', error);
        } finally {
            setIsPostingComment(false);
        }
    };

    const handlePostReply = async (parentCommentId: number) => {
        if (!isAuthenticated || !user) {
            router.push(LOGIN_URL);
            return;
        }

        const reply = replyText[parentCommentId]?.trim();
        if (!templateId || !reply || reply.length < 1 || reply.length > 400) {
            return;
        }

        setIsPostingComment(true);
        try {
            await addCommentService(Number(templateId), user.userId, reply, parentCommentId);
            setReplyText((prev) => ({ ...prev, [parentCommentId]: '' }));
            setReplyingTo(null);
            // Refresh comments
            const response = await getTemplateCommentsService(Number(templateId));
            if (response && response.comments) {
                setComments(response.comments);
            }
        } catch (error) {
            console.error('Error posting reply:', error);
        } finally {
            setIsPostingComment(false);
        }
    };

    const handleLikeComment = async (templateCommentId: number) => {
        if (!isAuthenticated || !user) {
            router.push(LOGIN_URL);
            return;
        }

        try {
            await likeCommentService(templateCommentId, user.userId);
            // Refresh comments to get updated like count
            const response = await getTemplateCommentsService(Number(templateId));
            if (response && response.comments) {
                setComments(response.comments);
            }
        } catch (error) {
            console.error('Error liking comment:', error);
        }
    };

    const handleDeleteComment = (templateCommentId: number) => {
        if (!isAuthenticated || !user) {
            router.push(LOGIN_URL);
            return;
        }
        // Show confirmation modal
        setCommentToDelete(templateCommentId);
        setShowDeleteConfirm(true);
    };

    const confirmDeleteComment = async () => {
        if (!commentToDelete || !user) return;

        try {
            await deleteCommentService(commentToDelete, user.userId);
            // Refresh comments after deletion
            const response = await getTemplateCommentsService(Number(templateId));
            if (response && response.comments) {
                setComments(response.comments);
            }
            setShowDeleteConfirm(false);
            setCommentToDelete(null);
        } catch (error) {
            console.error('Error deleting comment:', error);
            alert('Failed to delete comment. You can only delete your own comments.');
            setShowDeleteConfirm(false);
            setCommentToDelete(null);
        }
    };

    const cancelDeleteComment = () => {
        setShowDeleteConfirm(false);
        setCommentToDelete(null);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const getTotalCommentsCount = (comments: TemplateComment[]): number => {
        let count = comments.length;
        comments.forEach(comment => {
            if (comment.replies && comment.replies.length > 0) {
                count += getTotalCommentsCount(comment.replies);
            }
        });
        return count;
    };

    const handleFollow = async () => {
        if (!isAuthenticated || !user) {
            router.push(LOGIN_URL);
            return;
        }

        if (!selectedTemplate?.userId) return;

        setIsFollowingLoading(true);
        try {
            await followOrUnfollowUserService({
                followerUserId: user.userId,
                followingUserId: selectedTemplate.userId,
                isActive: !isFollowing
            });
            setIsFollowing(!isFollowing);
            
            // Refresh follow data
            const followData = await getFollowByUserIdService(selectedTemplate.userId);
            setFollowers(followData.followerCount);
            setFollowings(followData.followingCount);
        } catch (error) {
            console.error('Error following/unfollowing user:', error);
        } finally {
            setIsFollowingLoading(false);
        }
    };

    // Show loading state
    if (isLoading) {
        return (
            <div className="min-h-screen bg-white font-nunito pt-20 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-zlendo-teal border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    // Show not found if template ID is provided but template not found
    if (templateId && !selectedTemplate && activeTemplates.length > 0) {
        return (
            <div className="min-h-screen bg-white font-nunito pt-20 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-black text-zlendo-grey-dark mb-4">Template Not Found</h1>
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
                    <span className="text-zlendo-grey-dark opacity-100 line-clamp-1">{templateData.title}</span>
                </div>
            </div>

            <main className="container-custom px-4 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12">

                    {/* Left Column: Visuals */}
                    <div className="space-y-6">
                        {/* Main Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative group rounded-[32px] overflow-hidden bg-gray-100 aspect-[4/3] md:aspect-[16/9] shadow-lg border border-black/5"
                        >
                            {loadingMainImage ? (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-12 h-12 border-4 border-zlendo-teal border-t-transparent rounded-full animate-spin"></div>
                                </div>
                            ) : templateData.mainImage ? (
                                <>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={selectedThumbnailIndex}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="w-full h-full"
                                        >
                                            <img
                                                src={templateData.mainImage}
                                                alt={templateData.title}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    const target = e.currentTarget;
                                                    console.error(`[TemplateDetailPage] Failed to load main image:`, {
                                                        imageUrl: templateData.mainImage,
                                                        templateId: selectedTemplate?.template_Id,
                                                        index: selectedThumbnailIndex
                                                    });

                                                    // Fallback logic based on current index
                                                    const originalUrl = selectedThumbnailIndex === 0
                                                        ? selectedTemplate?.thumbnail_Url
                                                        : selectedTemplate?.multiple_ThumbnailUrls?.[selectedThumbnailIndex - 1];

                                                    if (templateData.mainImage?.startsWith('blob:') && originalUrl) {
                                                        const directUrl = originalUrl.startsWith('http')
                                                            ? originalUrl
                                                            : `${BLOB_BASE_URL}${originalUrl}${originalUrl.includes('?') ? '&' : '?'}${BLOB_SAS_TOKEN}`;

                                                        if (target.src !== directUrl) {
                                                            console.log(`[TemplateDetailPage] Falling back to direct URL for main image (index ${selectedThumbnailIndex})`);
                                                            target.src = directUrl;
                                                            return;
                                                        }
                                                    }

                                                    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23f1f5f9" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%2394a3b8" font-family="Arial" font-size="16"%3EImage not available%3C/text%3E%3C/svg%3E';
                                                }}
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                    <button
                                        onClick={handleOpenFullscreen}
                                        className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                                    >
                                        <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-2 font-black text-zlendo-grey-dark shadow-xl hover:bg-white transition-colors">
                                            <Maximize2 className="w-5 h-5" /> View Fullscreen
                                        </div>
                                    </button>
                                </>
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-zlendo-grey-medium">
                                    <p>Image not available</p>
                                </div>
                            )}
                        </motion.div>

                        {/* Thumbnails Grid - Main thumbnail + Multiple thumbnails */}
                        {templateData.thumbnails.length > 0 && (
                            <div className="grid grid-cols-4 gap-4">
                                {templateData.thumbnails.map((thumb, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedThumbnailIndex(idx)}
                                        className={`relative rounded-2xl overflow-hidden aspect-square border-2 transition-all ${selectedThumbnailIndex === idx
                                            ? 'border-zlendo-teal ring-2 ring-zlendo-teal/30 scale-105'
                                            : 'border-black/5 hover:border-zlendo-teal/50 hover:ring-2 hover:ring-zlendo-teal/20'
                                            }`}
                                    >
                                        {loadingThumbnails[idx] ? (
                                            <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                                <div className="w-6 h-6 border-2 border-zlendo-teal border-t-transparent rounded-full animate-spin"></div>
                                            </div>
                                        ) : (
                                            <img
                                                src={thumb}
                                                alt={`View ${idx + 1}`}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    const target = e.currentTarget;
                                                    console.error(`[TemplateDetailPage] Failed to load thumbnail ${idx + 1}:`, {
                                                        imageUrl: thumb,
                                                        templateId: selectedTemplate?.template_Id,
                                                    });

                                                    // Fallback logic
                                                    const originalUrl = idx === 0
                                                        ? selectedTemplate?.thumbnail_Url
                                                        : selectedTemplate?.multiple_ThumbnailUrls?.[idx - 1]; // idx 0 is main thumbnail, others are multiple_ThumbnailUrls

                                                    if (thumb.startsWith('blob:') && originalUrl) {
                                                        const directUrl = originalUrl.startsWith('http')
                                                            ? originalUrl
                                                            : `${BLOB_BASE_URL}${originalUrl}${originalUrl.includes('?') ? '&' : '?'}${BLOB_SAS_TOKEN}`;

                                                        if (target.src !== directUrl) {
                                                            console.log(`[TemplateDetailPage] Falling back to direct URL for thumbnail ${idx + 1}`);
                                                            target.src = directUrl;
                                                            return;
                                                        }
                                                    }

                                                    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23f1f5f9" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%2394a3b8" font-family="Arial" font-size="12"%3EImage not available%3C/text%3E%3C/svg%3E';
                                                }}
                                            />
                                        )}
                                        {selectedThumbnailIndex === idx && (
                                            <div className="absolute inset-0 bg-zlendo-teal/10 flex items-center justify-center">
                                                <div className="w-3 h-3 rounded-full bg-zlendo-teal"></div>
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right Column: Info & Actions */}
                    <div className="lg:sticky lg:top-32 h-fit">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white border border-gray-100 rounded-[32px] p-6 md:p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]"
                        >
                            <div className="flex items-center gap-4 mb-6 flex-wrap">
                                {templateData.category && (
                                    <span className="px-3 py-1 bg-zlendo-teal/10 text-zlendo-teal font-black text-xs uppercase tracking-widest rounded-full">
                                        {templateData.category}
                                    </span>
                                )}
                                {templateData.style && (
                                    <span className="px-3 py-1 bg-gray-100 text-zlendo-grey-medium font-bold text-xs uppercase tracking-widest rounded-full">
                                        {templateData.style}
                                    </span>
                                )}
                                <div className="flex items-center gap-1.5 text-zlendo-grey-medium opacity-60 text-xs font-bold ml-auto px-1">
                                    <div className="flex items-center gap-1">
                                        <Heart className="w-4 h-4" />
                                        <span>{selectedTemplate?.likeCount || 0}</span>
                                    </div>
                                    <div className="flex items-center gap-1 ml-2">
                                        <Eye className="w-4 h-4" />
                                        <span>{selectedTemplate?.viewCount || 0}</span>
                                    </div>
                                </div>
                            </div>

                            {/* User Profile Section */}
                            {selectedTemplate?.userName && (
                                <div className="mb-6 pb-6 border-b border-gray-100">
                                    <div className="flex items-center gap-3 justify-between">
                                        <Link 
                                            href={getPath(`/user-profile?userId=${encryptProjectId(selectedTemplate.userId)}`)}
                                            className="flex items-center gap-3 flex-1 hover:opacity-80 transition-opacity"
                                        >
                                            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                                                {selectedTemplate.profileUrl ? (
                                                    <img
                                                        src={selectedTemplate.profileUrl}
                                                        alt={selectedTemplate.userName}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => {
                                                            const target = e.currentTarget;
                                                            target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Crect fill="%23e2e8f0" width="40" height="40"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%2394a3b8" font-family="Arial" font-size="14"%3E%3C/text%3E%3C/svg%3E';
                                                        }}
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-zlendo-teal/20 flex items-center justify-center">
                                                        <span className="text-zlendo-teal font-black text-sm">
                                                            {selectedTemplate.userName.charAt(0).toUpperCase()}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-zlendo-grey-dark">
                                                    {selectedTemplate.userName}
                                                </span>
                                                {/* <div className="flex items-center gap-3 text-xs font-bold text-zlendo-grey-medium opacity-60">
                                                    <span>{followers} Followers</span>
                                                    <span>{followings} Followings</span>
                                                </div> */}
                                            </div>
                                        </Link>
                                        {/* {isAuthenticated && user?.userId !== selectedTemplate.userId && (
                                            <button
                                                onClick={handleFollow}
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
                                        )} */}
                                    </div>
                                </div>
                            )}

                            <h1 className="text-3xl font-black text-zlendo-grey-dark leading-tight mb-4">
                                {templateData.title}
                            </h1>

                            <p className="text-lg text-zlendo-grey-medium font-medium opacity-80 leading-relaxed mb-8">
                                {templateData.description}
                            </p>

                            {templateData.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {templateData.tags.map(tag => (
                                        <span key={tag} className="text-sm font-bold text-zlendo-grey-medium opacity-50 before:content-['#']">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div className="space-y-4">
                                <button
                                    onClick={() => {
                                        if (templateId) {
                                            const encryptedId = encryptProjectId(templateId);
                                            window.open(`${PROJECT_DETAILS_URL}?type=designfromtemplate&templateId=${encryptedId}`, '_blank', 'noopener,noreferrer');
                                        }
                                    }}
                                    disabled={!templateId}
                                    className="block w-full text-center py-5 bg-zlendo-teal text-white rounded-2xl font-black text-lg shadow-xl shadow-zlendo-teal/20 hover:scale-[1.02] active:scale-98 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    Customize this Design
                                </button>

                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        onClick={handleCopyLink}
                                        className="flex items-center justify-center gap-2 py-3 bg-gray-50 border border-black/5 rounded-xl font-bold text-zlendo-grey-dark hover:bg-gray-100 transition-colors"
                                    >
                                        {isCopied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                        {isCopied ? "Copied" : "Copy Link"}
                                    </button>
                                    <button
                                        onClick={() => setShowShareModal(true)}
                                        className="flex items-center justify-center gap-2 py-3 bg-gray-50 border border-black/5 rounded-xl font-bold text-zlendo-grey-dark hover:bg-gray-100 transition-colors"
                                    >
                                        <Share2 className="w-4 h-4" /> Share
                                    </button>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        onClick={handleLike}
                                        disabled={isLiking}
                                        className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${isLiked
                                            ? 'bg-red-50 text-red-500 border border-red-100'
                                            : 'bg-gray-50 text-zlendo-grey-dark border border-black/5 hover:bg-gray-100'
                                            }`}
                                    >
                                        <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                                        {isLiked ? 'Liked' : 'Like'}
                                    </button>
                                    <button
                                        onClick={handleFavorite}
                                        disabled={isFavoriting}
                                        className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${isFavorite
                                            ? 'bg-zlendo-teal/10 text-zlendo-teal border border-zlendo-teal/20'
                                            : 'bg-gray-50 text-zlendo-grey-dark border border-black/5 hover:bg-gray-100'
                                            }`}
                                    >
                                        <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
                                        {isFavorite ? 'Favorited' : 'Favorite'}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="mt-20">
                    <h2 className="text-2xl md:text-3xl font-black text-zlendo-grey-dark mb-8">
                        Comments {comments.length > 0 ? getTotalCommentsCount(comments) : 0}
                    </h2>

                    {/* Add Comment Form */}
                    <div className="bg-white border border-gray-100 rounded-[32px] p-6 md:p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] mb-8">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-zlendo-teal/20 flex items-center justify-center flex-shrink-0">
                                {isAuthenticated && user?.userName ? (
                                    <span className="text-zlendo-teal font-black text-sm">
                                        {user.userName.charAt(0).toUpperCase()}
                                    </span>
                                ) : (
                                    <span className="text-zlendo-teal font-black text-sm">U</span>
                                )}
                            </div>
                            <div className="flex-1">
                                <div className="mb-2">
                                    <span className="text-sm font-bold text-zlendo-grey-dark">
                                        {isAuthenticated && user?.userName ? user.userName : 'Guest'}
                                    </span>
                                </div>
                                <textarea
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="Leave a comment in 1 to 400 characters"
                                    className="w-full min-h-[120px] p-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-zlendo-teal/20 focus:border-zlendo-teal font-medium text-zlendo-grey-dark"
                                    maxLength={400}
                                    disabled={!isAuthenticated || isPostingComment}
                                />
                                <div className="flex items-center justify-between mt-3">
                                    <div className="text-xs font-bold text-zlendo-grey-medium opacity-60">
                                        {newComment.length}/400
                                    </div>
                                    <button
                                        onClick={handlePostComment}
                                        disabled={!isAuthenticated || isPostingComment || newComment.trim().length < 1 || newComment.trim().length > 400}
                                        className="px-6 py-2 bg-zlendo-teal text-white rounded-xl font-black text-sm hover:bg-zlendo-teal/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isPostingComment ? 'Posting...' : 'Post'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Comments List */}
                    {loadingComments ? (
                        <div className="flex items-center justify-center py-12">
                            <div className="w-12 h-12 border-4 border-zlendo-teal border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : comments.length > 0 ? (
                        <div className="space-y-6">
                            {comments.map((comment) => (
                                <CommentItem
                                    key={comment.templateCommentId}
                                    comment={comment}
                                    templateId={Number(templateId)}
                                    user={user}
                                    isAuthenticated={isAuthenticated}
                                    replyingTo={replyingTo}
                                    setReplyingTo={setReplyingTo}
                                    replyText={replyText}
                                    setReplyText={setReplyText}
                                    handlePostReply={handlePostReply}
                                    handleLikeComment={handleLikeComment}
                                    handleDeleteComment={handleDeleteComment}
                                    formatDate={formatDate}
                                    router={router}
                                    LOGIN_URL={LOGIN_URL}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 text-zlendo-grey-medium font-medium">
                            No comments yet. Be the first to comment!
                        </div>
                    )}
                </div>

                {/* Similar Ideas Section */}
                {similarTemplates.length > 0 && (
                    <div className="mt-20">
                        <h2 className="text-2xl md:text-3xl font-black text-zlendo-grey-dark mb-8">Similar Design Ideas</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {similarTemplates.map(item => (
                                <div
                                    key={item.id}
                                    onClick={() => handleSimilarTemplateClick(item.id)}
                                    className="group block bg-white rounded-[24px] overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
                                >
                                    <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                                        {similarTemplateImageUrls[item.id] || item.img ? (
                                            <img
                                                src={similarTemplateImageUrls[item.id] || item.img}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                onError={(e) => {
                                                    const target = e.currentTarget;
                                                    const currentUrl = similarTemplateImageUrls[item.id] || item.img;
                                                    console.error(`Failed to load image for similar template ${item.id}:`, {
                                                        imageUrl: currentUrl,
                                                    });

                                                    // Fallback logic
                                                    if (currentUrl?.startsWith('blob:') && item.originalImg) {
                                                        const directUrl = item.originalImg.startsWith('http')
                                                            ? item.originalImg
                                                            : `${BLOB_BASE_URL}${item.originalImg}${item.originalImg.includes('?') ? '&' : '?'}${BLOB_SAS_TOKEN}`;

                                                        if (target.src !== directUrl) {
                                                            console.log(`[TemplateDetailPage] Falling back to direct URL for similar template ${item.id}`);
                                                            target.src = directUrl;
                                                            return;
                                                        }
                                                    }

                                                    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f1f5f9" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%2394a3b8" font-family="Arial" font-size="16"%3EImage not available%3C/text%3E%3C/svg%3E';
                                                }}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-zlendo-grey-medium">
                                                <div className="w-8 h-8 border-4 border-zlendo-teal border-t-transparent rounded-full animate-spin"></div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-black text-lg text-zlendo-grey-dark mb-2">{item.title}</h3>
                                        <span className="text-sm font-bold text-zlendo-teal flex items-center gap-1">
                                            View Design <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>

            {/* Fullscreen Image Modal */}
            <AnimatePresence>
                {isFullscreen && templateData.mainImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={handleCloseFullscreen}
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleCloseFullscreen}
                            className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition-all group"
                            aria-label="Close fullscreen"
                        >
                            <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                        </button>

                        {/* Image Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative max-w-[95vw] max-h-[95vh] w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={selectedThumbnailIndex}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    src={templateData.mainImage}
                                    alt={templateData.title}
                                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                    onError={(e) => {
                                        const target = e.currentTarget;
                                        console.error(`[TemplateDetailPage] Failed to load fullscreen image:`, {
                                            imageUrl: templateData.mainImage,
                                            templateId: selectedTemplate?.template_Id,
                                            index: selectedThumbnailIndex
                                        });

                                        // Fallback logic
                                        const originalUrl = selectedThumbnailIndex === 0
                                            ? selectedTemplate?.thumbnail_Url
                                            : selectedTemplate?.multiple_ThumbnailUrls?.[selectedThumbnailIndex - 1];

                                        if (templateData.mainImage?.startsWith('blob:') && originalUrl) {
                                            const directUrl = originalUrl.startsWith('http')
                                                ? originalUrl
                                                : `${BLOB_BASE_URL}${originalUrl}${originalUrl.includes('?') ? '&' : '?'}${BLOB_SAS_TOKEN}`;

                                            if (target.src !== directUrl) {
                                                console.log(`[TemplateDetailPage] Falling back to direct URL for fullscreen image (index ${selectedThumbnailIndex})`);
                                                target.src = directUrl;
                                                return;
                                            }
                                        }

                                        target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23f1f5f9" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%2394a3b8" font-family="Arial" font-size="16"%3EImage not available%3C/text%3E%3C/svg%3E';
                                    }}
                                />
                            </AnimatePresence>
                        </motion.div>

                        {/* Thumbnail Navigation in Fullscreen */}
                        {templateData.thumbnails.length > 1 && (
                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-50">
                                {templateData.thumbnails.map((thumb, idx) => (
                                    <button
                                        key={idx}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedThumbnailIndex(idx);
                                        }}
                                        className={`rounded-lg overflow-hidden border-2 transition-all ${selectedThumbnailIndex === idx
                                            ? 'border-zlendo-teal ring-2 ring-zlendo-teal/50 scale-110'
                                            : 'border-white/30 hover:border-white/60'
                                            }`}
                                    >
                                        <img
                                            src={thumb}
                                            alt={`Thumbnail ${idx + 1}`}
                                            className="w-16 h-16 object-cover"
                                            onError={(e) => {
                                                const target = e.currentTarget;
                                                const originalUrl = idx === 0
                                                    ? selectedTemplate?.thumbnail_Url
                                                    : selectedTemplate?.multiple_ThumbnailUrls?.[idx - 1];

                                                if (thumb?.startsWith('blob:') && originalUrl) {
                                                    const directUrl = originalUrl.startsWith('http')
                                                        ? originalUrl
                                                        : `${BLOB_BASE_URL}${originalUrl}${originalUrl.includes('?') ? '&' : '?'}${BLOB_SAS_TOKEN}`;

                                                    if (target.src !== directUrl) {
                                                        console.log(`[TemplateDetailPage] Falling back to direct URL for fullscreen thumbnail ${idx + 1}`);
                                                        target.src = directUrl;
                                                        return;
                                                    }
                                                }

                                                target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="64" height="64"%3E%3Crect fill="%23f1f5f9" width="64" height="64"/%3E%3C/svg%3E';
                                            }}
                                        />
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Navigation Arrows (if multiple images) */}
                        {templateData.thumbnails.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedThumbnailIndex((prev) =>
                                            prev > 0 ? prev - 1 : templateData.thumbnails.length - 1
                                        );
                                    }}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition-all group"
                                    aria-label="Previous image"
                                >
                                    <ArrowRight className="w-6 h-6 text-white rotate-180 group-hover:scale-110 transition-transform" />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedThumbnailIndex((prev) =>
                                            prev < templateData.thumbnails.length - 1 ? prev + 1 : 0
                                        );
                                    }}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition-all group"
                                    aria-label="Next image"
                                >
                                    <ArrowRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                                </button>
                            </>
                        )}

                        {/* Image Counter */}
                        {templateData.thumbnails.length > 1 && (
                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
                                <span className="text-white font-bold text-sm">
                                    {selectedThumbnailIndex + 1} / {templateData.thumbnails.length}
                                </span>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Share Modal */}
            <AnimatePresence>
                {showShareModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[10000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setShowShareModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            className="bg-white rounded-[32px] overflow-hidden w-full max-w-[500px] shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Preview Image */}
                            <div className="aspect-video w-full bg-gray-100 p-4">
                                <img
                                    src={templateData.mainImage}
                                    alt={templateData.title}
                                    className="w-full h-full object-cover rounded-2xl shadow-sm"
                                    onError={(e) => {
                                        const target = e.currentTarget;
                                        const originalUrl = selectedThumbnailIndex === 0
                                            ? selectedTemplate?.thumbnail_Url
                                            : selectedTemplate?.multiple_ThumbnailUrls?.[selectedThumbnailIndex - 1];

                                        if (templateData.mainImage?.startsWith('blob:') && originalUrl) {
                                            const directUrl = originalUrl.startsWith('http')
                                                ? originalUrl
                                                : `${BLOB_BASE_URL}${originalUrl}${originalUrl.includes('?') ? '&' : '?'}${BLOB_SAS_TOKEN}`;

                                            if (target.src !== directUrl) {
                                                console.log(`[TemplateDetailPage] Falling back to direct URL for share modal preview (index ${selectedThumbnailIndex})`);
                                                target.src = directUrl;
                                                return;
                                            }
                                        }

                                        target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f1f5f9" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%2394a3b8" font-family="Arial" font-size="16"%3EImage not available%3C/text%3E%3C/svg%3E';
                                    }}
                                />
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-center mb-8">
                                    <h2 className="text-[22px] font-black text-zlendo-grey-dark">Share this with your social community</h2>
                                    <button
                                        onClick={() => setShowShareModal(false)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <X className="w-6 h-6 text-zlendo-grey-medium opacity-40 hover:opacity-100" />
                                    </button>
                                </div>

                                <div className="grid grid-cols-5 gap-4">
                                    {/* Facebook */}
                                    <div className="flex flex-col items-center gap-2">
                                        <button
                                            onClick={() => handleSocialShare('facebook')}
                                            className="w-14 h-14 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-[#1877F2]/20"
                                        >
                                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                        </button>
                                        <span className="text-[11px] font-bold text-zlendo-grey-medium">Facebook</span>
                                    </div>

                                    {/* X (Twitter) */}
                                    <div className="flex flex-col items-center gap-2">
                                        <button
                                            onClick={() => handleSocialShare('x')}
                                            className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-black/10"
                                        >
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                        </button>
                                        <span className="text-[11px] font-bold text-zlendo-grey-medium">X</span>
                                    </div>

                                    {/* Pinterest */}
                                    <div className="flex flex-col items-center gap-2">
                                        <button
                                            onClick={() => handleSocialShare('pinterest')}
                                            className="w-14 h-14 rounded-full bg-[#E60023] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-[#E60023]/20"
                                        >
                                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.966 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.033-1.002 2.324-1.492 3.121C10.587 23.83 11.288 24 12.017 24c6.622 0 12-5.378 12-12S18.639 0 12.017 0z" /></svg>
                                        </button>
                                        <span className="text-[11px] font-bold text-zlendo-grey-medium">Pinterest</span>
                                    </div>

                                    {/* WhatsApp */}
                                    <div className="flex flex-col items-center gap-2">
                                        <button
                                            onClick={() => handleSocialShare('whatsapp')}
                                            className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-[#25D366]/20"
                                        >
                                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.298A11.715 11.715 0 0012.03 0C5.439 0 .074 5.365.072 11.957c0 2.105.548 4.16 1.591 5.969L0 24l6.182-1.622a11.742 11.742 0 005.844 1.556h.005c6.59 0 11.956-5.365 11.958-11.958a11.707 11.707 0 00-3.579-8.479z" /></svg>
                                        </button>
                                        <span className="text-[11px] font-bold text-zlendo-grey-medium">WhatsApp</span>
                                    </div>

                                    {/* Copy Link */}
                                    <div className="flex flex-col items-center gap-2">
                                        <button
                                            onClick={handleCopyLinkFromModal}
                                            className={`w-14 h-14 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg ${isCopiedFromModal ? 'bg-green-500 shadow-green-500/20' : 'bg-[#FF7A00] shadow-[#FF7A00]/20'}`}
                                        >
                                            {isCopiedFromModal ? <Check className="w-6 h-6" /> : <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M10.158 12L10.518 11.64C10.741 11.417 11.082 11.417 11.305 11.64L14.475 14.81C14.698 15.033 14.698 15.374 14.475 15.597L13.035 17.037C11.59 18.482 9.245 18.482 7.8 17.037L6.36 15.597C4.915 14.152 4.915 11.807 6.36 10.362L7.8 8.922C8.023 8.699 8.364 8.699 8.587 8.922L8.947 9.282M13.842 12L13.482 12.36C13.259 12.583 12.918 12.583 12.695 12.36L9.525 9.19C9.302 8.967 9.302 8.626 9.525 8.403L10.965 6.963C12.41 5.518 14.755 5.518 16.2 6.963L17.64 8.403C19.085 9.848 19.085 12.193 17.64 13.638L16.2 15.078C15.977 15.301 15.636 15.301 15.413 15.078L15.053 14.718" /></svg>}
                                        </button>
                                        <span className="text-[11px] font-bold text-zlendo-grey-medium">{isCopiedFromModal ? 'Copied!' : 'Copy Link'}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Delete Comment Confirmation Modal */}
            <AnimatePresence>
                {showDeleteConfirm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[10000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={cancelDeleteComment}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            className="bg-white rounded-[32px] overflow-hidden w-full max-w-[400px] shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-[22px] font-black text-zlendo-grey-dark">Delete Comment</h2>
                                    <button
                                        onClick={cancelDeleteComment}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <X className="w-6 h-6 text-zlendo-grey-medium opacity-40 hover:opacity-100" />
                                    </button>
                                </div>

                                <p className="text-zlendo-grey-medium font-medium mb-8">
                                    Are you sure you want to delete this comment? This action cannot be undone.
                                </p>

                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={cancelDeleteComment}
                                        className="flex-1 px-6 py-3 bg-gray-100 text-zlendo-grey-dark rounded-xl font-black text-sm hover:bg-gray-200 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={confirmDeleteComment}
                                        className="flex-1 px-6 py-3 bg-red-500 text-white rounded-xl font-black text-sm hover:bg-red-600 transition-colors"
                                    >
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

function TemplateDetailFallback() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-zlendo-teal border-t-transparent rounded-full animate-spin" />
        </div>
    );
}

export default function TemplateDetailPage() {
    return (
        <Suspense fallback={<TemplateDetailFallback />}>
            <TemplateDetailContent />
        </Suspense>
    );
}
