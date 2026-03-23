'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCountry } from '@/lib/context/CountryContext';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { getAllTemplates } from '@/lib/store/slices/templateSlice';
import { fetchBlobUrl, BLOB_BASE_URL, BLOB_SAS_TOKEN } from '@/lib/utils/blobUtils';
import { addTemplateViewService } from '@/lib/services/templateService';
import { encryptProjectId } from '@/lib/utils/encryptionUtils';

interface DesignInspirationItem {
    title: string;
    count: string;
    img: string;
    colSpan: string;
    rowSpan: string;
    isLarge: boolean;
    templateId: number;
    originalUrl?: string;
}

interface DesignTemplateGalleryProps {
    title?: string;
    titleHighlight?: string;
    subtitle?: string;
    buttonLabel?: string;
    noDataText?: string;
}

export default function DesignTemplateGallery({
    title = "A wide range of home design",
    titleHighlight = "ideas available!",
    subtitle = "Looking for inspiration for your pooja room, balcony, or open-plan living area? Explore ready-made design templates for living rooms, bedrooms, kitchens, bathrooms, and more — thoughtfully designed for Indian homes and lifestyles.",
    buttonLabel = "View all templates",
    noDataText = "No designs available for this category."
}: DesignTemplateGalleryProps) {
    const { getPath } = useCountry();
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { activeTemplates } = useAppSelector((state) => state.template);
    const [activeDesignFilter, setActiveDesignFilter] = useState("All Spaces");
    const [imageUrls, setImageUrls] = useState<Record<number, string>>({});
    const [multipleImageUrls, setMultipleImageUrls] = useState<Record<number, string[]>>({});
    const [loadingImageUrls, setLoadingImageUrls] = useState<Set<number>>(new Set());

    const handleTemplateClick = (templateId: number) => {
        const encryptedId = encryptProjectId(templateId);
        router.push(getPath(`/template-detail?templateId=${encryptedId}`));
        addTemplateViewService(templateId, "Template", "View").catch((error) => {
            console.error("Error adding template view:", error);
        });
    };

    useEffect(() => {
        dispatch(getAllTemplates());
    }, [dispatch]);

    const constructFullBlobUrl = (relativeUrl: string): string => {
        if (!relativeUrl) return '';
        if (relativeUrl.startsWith('http') || relativeUrl.startsWith('blob:')) {
            if (relativeUrl.includes('blob.core.windows.net') && !relativeUrl.includes('sig=') && BLOB_SAS_TOKEN) {
                return relativeUrl.includes('?')
                    ? `${relativeUrl}&${BLOB_SAS_TOKEN}`
                    : `${relativeUrl}?${BLOB_SAS_TOKEN}`;
            }
            return relativeUrl;
        }
        const fullUrl = `${BLOB_BASE_URL}${relativeUrl}`;
        return BLOB_SAS_TOKEN
            ? (fullUrl.includes('?') ? `${fullUrl}&${BLOB_SAS_TOKEN}` : `${fullUrl}?${BLOB_SAS_TOKEN}`)
            : fullUrl;
    };

    const loadMultipleThumbnails = async (templateId: number, thumbnailUrls: string[]) => {
        if (multipleImageUrls[templateId] || loadingImageUrls.has(templateId) || !thumbnailUrls || thumbnailUrls.length === 0) {
            return;
        }
        setLoadingImageUrls((prev) => new Set(prev).add(templateId));
        try {
            const loadPromises = thumbnailUrls.map(async (url) => {
                try {
                    const blobUrl = await fetchBlobUrl(url);
                    return (blobUrl && blobUrl.startsWith('blob:')) ? blobUrl : constructFullBlobUrl(url);
                } catch {
                    return constructFullBlobUrl(url);
                }
            });
            const loadedUrls = await Promise.all(loadPromises);
            setMultipleImageUrls((prev) => ({ ...prev, [templateId]: loadedUrls }));
        } catch (error) {
            console.error(`Failed to load multiple images for template ${templateId}:`, error);
        } finally {
            setLoadingImageUrls((prev) => {
                const newSet = new Set(prev);
                newSet.delete(templateId);
                return newSet;
            });
        }
    };

    const loadTemplateImage = async (templateId: number, thumbnailUrl: string) => {
        if (imageUrls[templateId] || loadingImageUrls.has(templateId) || !thumbnailUrl) return;
        setLoadingImageUrls((prev) => new Set(prev).add(templateId));
        try {
            const blobUrl = await fetchBlobUrl(thumbnailUrl);
            const urlToUse = (blobUrl && blobUrl.startsWith('blob:')) ? blobUrl : constructFullBlobUrl(thumbnailUrl);
            setImageUrls((prev) => ({ ...prev, [templateId]: urlToUse }));
        } catch {
            setImageUrls((prev) => ({ ...prev, [templateId]: constructFullBlobUrl(thumbnailUrl) }));
        } finally {
            setLoadingImageUrls((prev) => {
                const newSet = new Set(prev);
                newSet.delete(templateId);
                return newSet;
            });
        }
    };

    useEffect(() => {
        activeTemplates.forEach((template) => {
            if (template.thumbnail_Url && !imageUrls[template.template_Id] && !loadingImageUrls.has(template.template_Id)) {
                loadTemplateImage(template.template_Id, template.thumbnail_Url);
            }
            if (template.multiple_ThumbnailUrls && template.multiple_ThumbnailUrls.length > 0 && !multipleImageUrls[template.template_Id]) {
                loadMultipleThumbnails(template.template_Id, template.multiple_ThumbnailUrls);
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTemplates]);

    const designInspirationData = useMemo(() => {
        if (!activeTemplates || activeTemplates.length === 0) {
            return { "All Spaces": [] as DesignInspirationItem[], "Full House": [] as DesignInspirationItem[] };
        }

        const getTemplatesByRoomType = (roomTypeName: string | null) => {
            return activeTemplates.filter(t => t.room_TypeName === roomTypeName);
        };
        const getFullHouseTemplates = () => {
            return activeTemplates.filter(t => t.template_TypeName === "Full House");
        };

        const createGridItems = (templates: typeof activeTemplates): DesignInspirationItem[] => {
            if (templates.length === 0) return [];
            const items: DesignInspirationItem[] = [];
            const allImages: Array<{ img: string; title: string; templateId: number; originalUrl?: string }> = [];

            templates.forEach((template: any) => {
                const mainImg = imageUrls[template.template_Id] || template.thumbnail_Url || "";
                if (mainImg) {
                    allImages.push({ img: mainImg, title: template.template_Name, templateId: template.template_Id, originalUrl: template.thumbnail_Url });
                }
                const multipleThumbs = multipleImageUrls[template.template_Id] || [];
                const originalMultipleThumbs = template.multiple_ThumbnailUrls || [];
                multipleThumbs.forEach((thumbUrl, idx) => {
                    if (thumbUrl) {
                        allImages.push({ img: thumbUrl, title: template.template_Name, templateId: template.template_Id, originalUrl: originalMultipleThumbs[idx] });
                    }
                });
            });

            const gridConfig = [
                { colSpan: "md:col-span-2", rowSpan: "md:row-span-2", isLarge: true },
                { colSpan: "md:col-span-1", rowSpan: "md:row-span-1", isLarge: false },
                { colSpan: "md:col-span-1", rowSpan: "md:row-span-1", isLarge: false },
                { colSpan: "md:col-span-2", rowSpan: "md:row-span-1", isLarge: true },
            ];

            gridConfig.forEach((config, idx) => {
                if (allImages[idx]) {
                    items.push({
                        title: allImages[idx].title,
                        count: `${templates.length}+ Designs`,
                        img: allImages[idx].img,
                        ...config,
                        templateId: allImages[idx].templateId,
                        originalUrl: allImages[idx].originalUrl,
                    });
                }
            });
            return items;
        };

        const uniqueRoomTypes = new Set<string>();
        activeTemplates.forEach((template) => {
            if (template.room_TypeName && template.room_TypeName.trim() !== '') {
                uniqueRoomTypes.add(template.room_TypeName);
            }
        });
        const sortedRoomTypes = Array.from(uniqueRoomTypes).sort();

        const data: Record<string, DesignInspirationItem[]> = {
            "All Spaces": createGridItems(activeTemplates),
            "Full House": createGridItems(getFullHouseTemplates()),
        };
        sortedRoomTypes.forEach(roomType => {
            data[roomType] = createGridItems(getTemplatesByRoomType(roomType));
        });
        return data;
    }, [activeTemplates, imageUrls, multipleImageUrls]);

    return (
        <section className="container-custom mt-16 mb-16 md:mt-24 md:mb-24 px-4 text-center">
            <div className="max-w-4xl mx-auto mb-6 md:mb-10">
                <h2 className="text-3xl md:text-5xl font-black font-nunito text-zlendo-grey-dark mb-3 md:mb-4 leading-tight">
                    {title} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-emerald-600">{titleHighlight}</span>
                </h2>
                <p className="text-base md:text-lg text-zlendo-grey-medium font-bold opacity-70 mb-6 leading-relaxed max-w-3xl mx-auto">
                    {subtitle}
                </p>
                <Link href={getPath('/viewalltemplates')} className="px-10 py-4 bg-zlendo-grey-dark text-white rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 hover:bg-black transition-all shadow-xl flex items-center gap-2 mx-auto inline-flex">
                    {buttonLabel} <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-6">
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 flex-1">
                    {Object.keys(designInspirationData).map((item) => (
                        <button
                            key={item}
                            onClick={() => setActiveDesignFilter(item)}
                            className={`px-6 md:px-8 py-3 rounded-full border text-sm md:text-base font-bold transition-all duration-300 ${activeDesignFilter === item
                                ? 'bg-zlendo-teal text-white border-zlendo-teal shadow-lg shadow-zlendo-teal/20 scale-105'
                                : 'bg-white border-black/10 text-zlendo-grey-medium hover:border-black/30 hover:bg-gray-50'
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                {(() => {
                    const currentData = designInspirationData[activeDesignFilter as keyof typeof designInspirationData] || [];
                    if (!currentData || currentData.length === 0) {
                        return (
                            <motion.div
                                key={activeDesignFilter}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="flex items-center justify-center py-8"
                            >
                                <div className="text-center">
                                    <p className="text-base font-bold text-zlendo-grey-medium opacity-50">
                                        {noDataText}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    }
                    return (
                        <motion.div
                            key={activeDesignFilter}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-[300px_300px] gap-4 md:gap-6 h-auto text-left"
                        >
                            {currentData.map((item, index: number) => (
                                <div
                                    key={index}
                                    onClick={() => item.templateId && handleTemplateClick(item.templateId)}
                                    className={`${item.colSpan} ${item.rowSpan} relative group rounded-[24px] md:rounded-[32px] overflow-hidden cursor-pointer shadow-lg block h-[260px] md:h-full`}
                                >
                                    {item.img ? (
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            onError={(e) => {
                                                const target = e.currentTarget;
                                                if (item.img?.startsWith('blob:') && item.originalUrl) {
                                                    const directUrl = item.originalUrl.startsWith('http')
                                                        ? item.originalUrl
                                                        : `${BLOB_BASE_URL}${item.originalUrl}${item.originalUrl.includes('?') ? '&' : '?'}${BLOB_SAS_TOKEN}`;
                                                    if (target.src !== directUrl) {
                                                        target.onerror = null;
                                                        target.src = directUrl;
                                                        return;
                                                    }
                                                }
                                                target.onerror = null;
                                                target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%2394a3b8'%3EImage unavailable%3C/text%3E%3C/svg%3E`;
                                            }}
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                            <span className="text-gray-400">Loading...</span>
                                        </div>
                                    )}
                                    <div className={`absolute inset-0 transition-opacity duration-500 ${item.isLarge ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 md:opacity-0 group-hover:opacity-100' : 'bg-black/40 opacity-0 group-hover:opacity-100'}`} />
                                    <div className={`absolute left-0 p-6 md:p-8 transition-all duration-500 ${item.isLarge ? 'bottom-0 translate-y-4 md:translate-y-8 group-hover:translate-y-0 opacity-100 md:opacity-0 group-hover:opacity-100' : 'bottom-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100'}`}>
                                        {item.isLarge && <h3 className="text-white text-xl md:text-2xl font-black mb-2">{item.title}</h3>}
                                        <span className={`inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold ring-1 ring-white/30 ${!item.isLarge ? 'mt-2' : ''}`}>
                                            <Image className="w-3 h-3" /> {item.isLarge ? item.count : item.title}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    );
                })()}
            </AnimatePresence>
        </section>
    );
}
