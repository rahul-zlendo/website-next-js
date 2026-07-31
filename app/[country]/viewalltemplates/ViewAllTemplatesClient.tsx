'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Eye, Heart } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { getAllTemplates } from '@/lib/store/slices/templateSlice';
import { getAllRoomStyles } from '@/lib/store/slices/roomStyleSlice';
import { detectUserRegion } from '@/lib/store/slices/enterpriseSlice';
import { useCountry } from '@/lib/context/CountryContext';
import { fetchBlobUrl, BLOB_BASE_URL, BLOB_SAS_TOKEN } from '@/lib/utils/blobUtils';
import { addTemplateViewService } from '@/lib/services/templateService';
import { encryptProjectId } from '@/lib/utils/encryptionUtils';

interface Template {
    template_Id: number;
    template_Name: string;
    thumbnail_Url?: string;
    room_TypeName?: string | null;
    room_Type?: number;
    template_Style?: number;
    template_StyleName?: string;
    template_TypeName?: string;
    description?: string;
    viewCount?: number;
    likeCount?: number;
    userName?: string;
    profileUrl?: string | null;
}

type FilterType = 'all' | 'fullhouse' | string;

// Helper function to normalize Google image URLs
const normalizeGoogleImageUrl = (url: string): string => {
    if (!url || typeof url !== 'string') return url;
    if (url.includes('lh3.googleusercontent.com') || url.includes('googleusercontent.com')) {
        return url.replace(/=s\d+-c$/, '=s400').replace(/=s\d+-c\//, '/');
    }
    return url;
};

// Helper function to get valid URL
const getValidUrl = (url: string | null | undefined): string | null => {
    if (!url || typeof url !== 'string') return null;
    const trimmed = url.trim();
    return trimmed.length > 0 ? trimmed : null;
};

// Helper function to process profile URL with SAS token
const processProfileUrl = (profileUrl: string | null | undefined): string | null => {
    const rawUrl = getValidUrl(profileUrl);
    if (!rawUrl) return null;

    const normalizedUrl = normalizeGoogleImageUrl(rawUrl);

    if (normalizedUrl.startsWith('http://') || normalizedUrl.startsWith('https://')) {
        if (normalizedUrl.includes('blob.core.windows.net')) {
            if (!normalizedUrl.includes('sig=')) {
                return `${normalizedUrl}${normalizedUrl.includes('?') ? '&' : '?'}${BLOB_SAS_TOKEN}`;
            }
            return normalizedUrl;
        }
        return normalizedUrl;
    }

    const fullUrl = `${BLOB_BASE_URL}${normalizedUrl}`;
    return `${fullUrl}${fullUrl.includes('?') ? '&' : '?'}${BLOB_SAS_TOKEN}`;
};

export default function ViewAllTemplatesClient({ cms }: { cms: any }) {
    const { getPath, country } = useCountry();
    const isIndiaSite = country === 'in';
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { activeTemplates, isLoading, error } = useAppSelector((state) => state.template);

    const [imageUrls, setImageUrls] = useState<Record<number, string>>({});
    const [loadingImageUrls, setLoadingImageUrls] = useState<Set<number>>(new Set());
    const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');
    const [selectedRoomStyle, setSelectedRoomStyle] = useState<number | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { activeRoomStyles } = useAppSelector((state) => state.roomStyle);

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                // 1. Detect user region first
                const regionId = await dispatch(detectUserRegion()).unwrap();
                // 2. Load templates filtered by region
                dispatch(getAllTemplates(regionId || undefined));
            } catch (error) {
                console.error("Error loading initial data:", error);
                // Fallback to load all templates if region detection fails
                dispatch(getAllTemplates());
            }
            // Load room styles independently
            dispatch(getAllRoomStyles());
        };

        fetchInitialData();
    }, [dispatch]);

    const uniqueRoomTypes = useMemo(() => {
        const roomTypes = new Set<string>();
        activeTemplates.forEach((template) => {
            if (template.room_TypeName && template.room_TypeName.trim() !== '') {
                roomTypes.add(template.room_TypeName);
            }
        });
        return Array.from(roomTypes).sort();
    }, [activeTemplates]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const filteredTemplates = useMemo(() => {
        let filtered = activeTemplates;

        if (selectedFilter === 'all') {
            filtered = activeTemplates;
        } else if (selectedFilter === 'fullhouse') {
            filtered = activeTemplates.filter((template) => {
                return template.template_TypeName === 'Full House';
            });
        } else {
            filtered = activeTemplates.filter((template) => {
                return template.room_TypeName === selectedFilter;
            });
        }

        if (selectedRoomStyle !== null) {
            filtered = filtered.filter((template) => {
                return template.template_Style === selectedRoomStyle;
            });
        }

        return filtered;
    }, [activeTemplates, selectedFilter, selectedRoomStyle]);

    const isValidUrl = (url: string): boolean => {
        if (!url || typeof url !== 'string') return false;
        try {
            if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/')) {
                new URL(url, url.startsWith('/') ? window.location.origin : undefined);
                return true;
            }
            return url.startsWith('blob:') || url.length > 0;
        } catch {
            return false;
        }
    };

    const loadTemplateImage = async (template: Template) => {
        if (
            !template.thumbnail_Url ||
            imageUrls[template.template_Id] ||
            loadingImageUrls.has(template.template_Id)
        ) {
            return;
        }

        if (!isValidUrl(template.thumbnail_Url)) {
            return;
        }

        setLoadingImageUrls((prev) => new Set(prev).add(template.template_Id));

        try {
            const blobUrl = await fetchBlobUrl(template.thumbnail_Url);

            if (blobUrl && blobUrl.startsWith('blob:')) {
                setImageUrls((prev) => ({
                    ...prev,
                    [template.template_Id]: blobUrl,
                }));
            }
        } catch (error) {
            console.error(`Failed to load image for template ${template.template_Name}:`, error);
        } finally {
            setLoadingImageUrls((prev) => {
                const newSet = new Set(prev);
                newSet.delete(template.template_Id);
                return newSet;
            });
        }
    };

    useEffect(() => {
        if (filteredTemplates.length === 0) return;

        filteredTemplates.forEach((template) => {
            if (template.thumbnail_Url && isValidUrl(template.thumbnail_Url)) {

                const normalizedTemplate = {
                    ...template,
                    template_StyleName: template.template_StyleName ?? undefined,
                    description: template.description ?? undefined
                };

                if (
                    !imageUrls[template.template_Id] &&
                    !loadingImageUrls.has(template.template_Id)
                ) {
                    loadTemplateImage(normalizedTemplate);
                }
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filteredTemplates]);

    const handleTemplateClick = (templateId: number) => {
        const encryptedId = encryptProjectId(templateId);
        router.push(getPath(`/template-detail?templateId=${encryptedId}`));
        addTemplateViewService(templateId, "Template", "View").catch(console.error);
    };

    return (
        <div className="min-h-screen bg-white font-nunito pt-20">
            <main className="container-custom px-6 lg:px-12 py-12">
                {/* Header Section */}
                <div className="mb-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[28px] md:text-[42px] lg:text-[56px] font-black text-zlendo-grey-dark mb-4"
                    >
                        {cms?.heroTitle || "All Design"}{' '}
                        <span className="text-zlendo-teal">{cms?.heroTitleHighlight || "Templates"}</span>
                        {isIndiaSite && <span className="sr-only"> Gallery</span>}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-zlendo-grey-medium font-medium opacity-70 max-w-2xl mx-auto mb-8"
                    >
                        {cms?.heroDesc || "Explore our complete collection of professionally designed templates for every room in your home."}
                    </motion.p>
                </div>

                {/* Filter Pills */}
                {!isLoading && activeTemplates.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="mb-12 flex flex-wrap items-center justify-center gap-3 px-4 relative"
                    >
                        <div className="flex flex-wrap items-center justify-center gap-3 flex-1">
                            <button
                                onClick={() => setSelectedFilter('all')}
                                className={`px-6 py-2.5 rounded-full font-black text-sm uppercase tracking-wider transition-all duration-200 ${selectedFilter === 'all'
                                    ? 'bg-zlendo-teal text-white shadow-lg shadow-zlendo-teal/30 scale-105'
                                    : 'bg-gray-100 text-zlendo-grey-medium hover:bg-gray-200 hover:text-zlendo-grey-dark'
                                    }`}
                            >
                                All Spaces
                            </button>
                            <button
                                onClick={() => setSelectedFilter('fullhouse')}
                                className={`px-6 py-2.5 rounded-full font-black text-sm uppercase tracking-wider transition-all duration-200 ${selectedFilter === 'fullhouse'
                                    ? 'bg-zlendo-teal text-white shadow-lg shadow-zlendo-teal/30 scale-105'
                                    : 'bg-gray-100 text-zlendo-grey-medium hover:bg-gray-200 hover:text-zlendo-grey-dark'
                                    }`}
                            >
                                Full House
                            </button>
                            {uniqueRoomTypes.map((roomType) => (
                                <button
                                    key={roomType}
                                    onClick={() => setSelectedFilter(roomType)}
                                    className={`px-6 py-2.5 rounded-full font-black text-sm uppercase tracking-wider transition-all duration-200 ${selectedFilter === roomType
                                        ? 'bg-zlendo-teal text-white shadow-lg shadow-zlendo-teal/30 scale-105'
                                        : 'bg-gray-100 text-zlendo-grey-medium hover:bg-gray-200 hover:text-zlendo-grey-dark'
                                        }`}
                                >
                                    {roomType}
                                </button>
                            ))}
                        </div>

                        {/* Room Style Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className={`px-6 py-2.5 rounded-full font-black text-sm uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${selectedRoomStyle !== null
                                    ? 'bg-zlendo-teal text-white shadow-lg shadow-zlendo-teal/30 scale-105'
                                    : 'bg-gray-100 text-zlendo-grey-medium hover:bg-gray-200 hover:text-zlendo-grey-dark'
                                    }`}
                            >
                                <span>{selectedRoomStyle !== null ? activeRoomStyles.find(s => s.roomStyleId === selectedRoomStyle)?.roomStyleName || 'Style' : 'Style'}</span>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {isDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-black/5 p-2 z-50 max-h-64 overflow-y-auto"
                                    >
                                        <div className="text-[10px] font-black uppercase tracking-widest text-zlendo-grey-medium opacity-40 px-3 py-2">
                                            Select Style
                                        </div>
                                        <button
                                            onClick={() => {
                                                setSelectedRoomStyle(null);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`w-full text-left px-3 py-2 rounded-xl text-sm font-bold transition-colors ${selectedRoomStyle === null
                                                ? 'bg-zlendo-teal/10 text-zlendo-teal'
                                                : 'text-zlendo-grey-dark hover:bg-gray-100'
                                                }`}
                                        >
                                            All Styles
                                        </button>
                                        {activeRoomStyles.map((style) => (
                                            <button
                                                key={style.roomStyleId}
                                                onClick={() => {
                                                    setSelectedRoomStyle(style.roomStyleId);
                                                    setIsDropdownOpen(false);
                                                }}
                                                className={`w-full text-left px-3 py-2 rounded-xl text-sm font-bold transition-colors ${selectedRoomStyle === style.roomStyleId
                                                    ? 'bg-zlendo-teal/10 text-zlendo-teal'
                                                    : 'text-zlendo-grey-dark hover:bg-gray-100'
                                                    }`}
                                            >
                                                {style.roomStyleName}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}

                {/* Loading State */}
                {isLoading && (
                    <div className="flex flex-col items-center justify-center py-24">
                        <div className="w-16 h-16 border-4 border-zlendo-teal border-t-transparent rounded-full animate-spin"></div>
                        <p className="mt-6 text-xl text-zlendo-grey-medium font-bold animate-pulse">
                            Loading amazing designs...
                        </p>
                    </div>
                )}

                {/* Templates Grid */}
                {!isLoading && !error && filteredTemplates.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {filteredTemplates.map((template) => {
                            const processedImageUrl = imageUrls[template.template_Id] || template.thumbnail_Url || undefined;
                            const isLoadingImage = loadingImageUrls.has(template.template_Id);

                            return (
                                <motion.div
                                    key={template.template_Id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    whileHover={{ y: -6 }}
                                    className="group relative rounded-2xl overflow-visible cursor-pointer shadow-lg hover:shadow-xl transition-all bg-white"
                                    onClick={() => handleTemplateClick(template.template_Id)}
                                >
                                    {/* Image Container */}
                                    <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative rounded-[18px] m-1.5 w-[calc(100%-12px)]">
                                        {isLoadingImage ? (
                                            <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-[16px]">
                                                <div className="w-8 h-8 border-4 border-zlendo-teal border-t-transparent rounded-full animate-spin"></div>
                                            </div>
                                        ) : (
                                            <>
                                                {processedImageUrl ? (
                                                    <img
                                                        src={processedImageUrl}
                                                        alt={template.template_Name ? `Design Template: ${template.template_Name}` : "Template Thumbnail"}
                                                        loading="lazy"
                                                        style={{
                                                            position: "absolute",
                                                            top: 0,
                                                            left: 0,
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover",
                                                            borderRadius: "14px",
                                                            transition: "transform 0.5s ease",
                                                        }}
                                                        className="group-hover:scale-105"
                                                        onError={(e) => {
                                                            const target = e.currentTarget;
                                                            if (processedImageUrl.startsWith('blob:') && template.thumbnail_Url) {
                                                                const directUrl = template.thumbnail_Url.startsWith('http')
                                                                    ? template.thumbnail_Url
                                                                    : `${BLOB_BASE_URL}${template.thumbnail_Url}${template.thumbnail_Url.includes('?') ? '&' : '?'}${BLOB_SAS_TOKEN}`;
                                                                if (target.src !== directUrl) {
                                                                    target.src = directUrl;
                                                                    return;
                                                                }
                                                            }
                                                            target.src = 'data:image/svg+xml,%3Csvg width="400" height="300"%3E%3Crect fill="%23f1f5f9" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%2394a3b8" font-family="Arial" font-size="16"%3EImage not available%3C/text%3E%3C/svg%3E';
                                                        }}
                                                    />
                                                ) : null}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[14px] pointer-events-none" />
                                            </>
                                        )}
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-4 flex flex-col gap-1">
                                        <h2 className="text-zlendo-grey-dark font-black text-base leading-tight line-clamp-2 min-h-[2.5rem] mb-0">
                                            {template.template_Name || "Untitled Template"}
                                        </h2>

                                        <div className="flex items-center justify-between mt-auto pt-1">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                {template.room_TypeName && (
                                                    <span className="px-2 py-1 bg-zlendo-teal/10 text-zlendo-teal font-bold text-[10px] uppercase tracking-widest rounded-md">
                                                        {template.room_TypeName}
                                                    </span>
                                                )}
                                                {template.template_StyleName && (
                                                    <span className="px-2 py-1 bg-gray-100 text-zlendo-grey-medium font-bold text-[10px] uppercase tracking-widest rounded-md">
                                                        {template.template_StyleName}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center gap-1.5 text-zlendo-grey-medium opacity-60 text-xs font-bold bg-gray-50 px-2.5 py-1.5 rounded-lg border border-black/5">
                                                    <Heart className="w-3.5 h-3.5" />
                                                    <span>{template.likeCount || 0}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-zlendo-grey-medium opacity-60 text-xs font-bold bg-gray-50 px-2.5 py-1.5 rounded-lg border border-black/5">
                                                    <Eye className="w-3.5 h-3.5" />
                                                    <span>{template.viewCount || 0}</span>
                                                </div>
                                                <span className="text-zlendo-teal font-black text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                                    View <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                </span>
                                            </div>
                                        </div>

                                        {template.userName && (
                                            <div className="flex items-center gap-2 mt-1">
                                                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                                                    {(() => {
                                                        const displayProfileUrl = template.profileUrl ? processProfileUrl(template.profileUrl) : null;
                                                        return displayProfileUrl ? (
                                                            <img
                                                                src={displayProfileUrl}
                                                                alt={template.userName || "User profile"}
                                                                className="w-full h-full object-cover"
                                                                onError={(e) => {
                                                                    const target = e.currentTarget;
                                                                    target.src = 'data:image/svg+xml,%3Csvg width="24" height="24"%3E%3Crect fill="%23e2e8f0" width="24" height="24"/%3E%3C/svg%3E';
                                                                }}
                                                            />
                                                        ) : (
                                                            <div className="w-full h-full bg-zlendo-teal/20 flex items-center justify-center">
                                                                <span className="text-zlendo-teal font-black text-[10px]">
                                                                    {template.userName.charAt(0).toUpperCase()}
                                                                </span>
                                                            </div>
                                                        );
                                                    })()}
                                                </div>
                                                <span className="text-zlendo-grey-medium font-bold text-xs">
                                                    {template.userName}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                )}

                {/* Empty State */}
                {!isLoading && !error && filteredTemplates.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-20 bg-gray-50/50 rounded-[32px] border-2 border-dashed border-gray-100"
                    >
                        <p className="text-base font-bold text-zlendo-grey-medium opacity-50">
                            No designs available for this category.
                        </p>
                    </motion.div>
                )}

                {/* Back to Home Link */}
                <div className="mt-12 text-center">
                    <Link
                        href={getPath('')}
                        className="inline-flex items-center gap-2 text-zlendo-teal font-black hover:underline"
                    >
                        <ArrowRight className="w-4 h-4 rotate-180" />
                        {cms?.backToHomeLabel || "Back to Home"}
                    </Link>
                </div>
            </main>
        </div>
    );
}
