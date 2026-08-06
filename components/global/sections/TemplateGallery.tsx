'use client';

import React, { useState, useEffect, useMemo } from 'react';
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
import { detectUserRegion } from '@/lib/store/slices/enterpriseSlice';

interface TemplateGalleryProps {
    data?: any;
}

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

const TemplateGallery: React.FC<TemplateGalleryProps> = () => {
    const { getPath } = useCountry();
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { activeTemplates } = useAppSelector((state) => state.template);

    const [activeDesignFilter, setActiveDesignFilter] = useState("All Spaces");
    const [imageUrls, setImageUrls] = useState<Record<number, string>>({});
    const [multipleImageUrls, setMultipleImageUrls] = useState<Record<number, string[]>>({});
    const [loadingImageUrls, setLoadingImageUrls] = useState<Set<number>>(new Set());
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
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
        };

        fetchInitialData();
    }, [dispatch]);

    const handleTemplateClick = (templateId: number) => {
        const encryptedId = encryptProjectId(templateId);
        router.push(getPath(`/template-detail?templateId=${encryptedId}`));
        addTemplateViewService(templateId, "Template", "View").catch(console.error);
    };

    const constructFullBlobUrl = (relativeUrl: string): string => {
        if (!relativeUrl) return '';
        if (relativeUrl.startsWith('http') || relativeUrl.startsWith('blob:')) {
            if (relativeUrl.includes('blob.core.windows.net') && !relativeUrl.includes('sig=') && BLOB_SAS_TOKEN) {
                return relativeUrl.includes('?') ? `${relativeUrl}&${BLOB_SAS_TOKEN}` : `${relativeUrl}?${BLOB_SAS_TOKEN}`;
            }
            return relativeUrl;
        }
        const fullUrl = `${BLOB_BASE_URL}${relativeUrl}`;
        return BLOB_SAS_TOKEN ? (fullUrl.includes('?') ? `${fullUrl}&${BLOB_SAS_TOKEN}` : `${fullUrl}?${BLOB_SAS_TOKEN}`) : fullUrl;
    };

    const loadTemplateImage = async (templateId: number, thumbnailUrl: string) => {
        if (imageUrls[templateId] || loadingImageUrls.has(templateId) || !thumbnailUrl) return;
        setLoadingImageUrls((prev) => new Set(prev).add(templateId));
        try {
            const blobUrl = await fetchBlobUrl(thumbnailUrl);
            const urlToUse = (blobUrl && blobUrl.startsWith('blob:')) ? blobUrl : constructFullBlobUrl(thumbnailUrl);
            setImageUrls((prev) => ({ ...prev, [templateId]: urlToUse }));
        } catch (error) {
            setImageUrls((prev) => ({ ...prev, [templateId]: constructFullBlobUrl(thumbnailUrl) }));
        } finally {
            setLoadingImageUrls((prev) => {
                const newSet = new Set(prev);
                newSet.delete(templateId);
                return newSet;
            });
        }
    };

    const loadMultipleThumbnails = async (templateId: number, thumbnailUrls: string[]) => {
        if (multipleImageUrls[templateId] || loadingImageUrls.has(templateId) || !thumbnailUrls || thumbnailUrls.length === 0) return;
        setLoadingImageUrls((prev) => new Set(prev).add(templateId));
        try {
            const loadPromises = thumbnailUrls.map(async (url) => {
                try {
                    const blobUrl = await fetchBlobUrl(url);
                    return (blobUrl && blobUrl.startsWith('blob:')) ? blobUrl : constructFullBlobUrl(url);
                } catch (error) {
                    return constructFullBlobUrl(url);
                }
            });
            const loadedUrls = await Promise.all(loadPromises);
            setMultipleImageUrls((prev) => ({ ...prev, [templateId]: loadedUrls }));
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
    }, [activeTemplates]);

    const designInspirationData = useMemo(() => {
        if (!activeTemplates || activeTemplates.length === 0) {
            // SEO Fallback: Provide Googlebot & first paint with actual imagery before JS fetch
            return {
                "All Spaces": [
                    { title: "Modern Living Room Experience", count: "120+ Designs", img: "/assets/home/living-room-3d.webp", colSpan: "md:col-span-2", rowSpan: "md:row-span-2", isLarge: true, templateId: 0 },
                    { title: "Cozy Master Bedroom", count: "75+ Designs", img: "/assets/home/bedroom-cozy.webp", colSpan: "md:col-span-1", rowSpan: "md:row-span-1", isLarge: false, templateId: 0 },
                    { title: "Modular Kitchen Layout", count: "90+ Designs", img: "/assets/home/modern-kitchen.webp", colSpan: "md:col-span-1", rowSpan: "md:row-span-1", isLarge: false, templateId: 0 },
                    { title: "Luxury Office & Lounge", count: "50+ Designs", img: "/assets/home/modern-lounge.webp", colSpan: "md:col-span-2", rowSpan: "md:row-span-1", isLarge: true, templateId: 0 }
                ],
                "Full House": []
            };
        }

        const createGridItems = (templates: typeof activeTemplates): DesignInspirationItem[] => {
            if (templates.length === 0) return [];

            const fallbackImages = [
                '/assets/home/living-room-3d.webp',
                '/assets/home/bedroom-cozy.webp',
                '/assets/home/modern-kitchen.webp',
                '/assets/home/modern-lounge.webp',
            ];

            const allImages: any[] = [];
            templates.forEach((template: any) => {
                if (template.thumbnail_Url) allImages.push({ title: template.template_Name, templateId: template.template_Id, originalUrl: template.thumbnail_Url });
                (template.multiple_ThumbnailUrls || []).forEach((thumbnailUrl: string) => {
                    if (thumbnailUrl) allImages.push({ title: template.template_Name, templateId: template.template_Id, originalUrl: thumbnailUrl });
                });
            });

            // The API returns thumbnail_Url as a relative blob path
            // (e.g. "prod-templates/119/render.webp"). constructFullBlobUrl
            // turns it into the full SAS-signed URL the private container
            // requires. Use it directly — the fetchBlobUrl/blob: approach is
            // unreliable here (blob: URLs fail to render), so we skip it.
            const visibleImages = allImages.slice(0, 4).map((item, index) => ({
                ...item,
                img: constructFullBlobUrl(item.originalUrl) || fallbackImages[index],
            }));

            const items: DesignInspirationItem[] = [];
            if (visibleImages[0]) items.push({ title: visibleImages[0].title, count: `${templates.length}+ Designs`, img: visibleImages[0].img, colSpan: "md:col-span-2", rowSpan: "md:row-span-2", isLarge: true, templateId: visibleImages[0].templateId, originalUrl: visibleImages[0].originalUrl });
            if (visibleImages[1]) items.push({ title: visibleImages[1].title, count: `${templates.length}+ Designs`, img: visibleImages[1].img, colSpan: "md:col-span-1", rowSpan: "md:row-span-1", isLarge: false, templateId: visibleImages[1].templateId, originalUrl: visibleImages[1].originalUrl });
            if (visibleImages[2]) items.push({ title: visibleImages[2].title, count: `${templates.length}+ Designs`, img: visibleImages[2].img, colSpan: "md:col-span-1", rowSpan: "md:row-span-1", isLarge: false, templateId: visibleImages[2].templateId, originalUrl: visibleImages[2].originalUrl });
            if (visibleImages[3]) items.push({ title: visibleImages[3].title, count: `${templates.length}+ Designs`, img: visibleImages[3].img, colSpan: "md:col-span-2", rowSpan: "md:row-span-1", isLarge: true, templateId: visibleImages[3].templateId, originalUrl: visibleImages[3].originalUrl });
            return items;
        };

        const uniqueRoomTypes = Array.from(new Set(activeTemplates.map(t => t.room_TypeName).filter(Boolean))).sort();
        const data: any = {
            "All Spaces": createGridItems(activeTemplates),
            "Full House": createGridItems(activeTemplates.filter(t => t.template_TypeName === "Full House")),
        };
        uniqueRoomTypes.forEach(rt => { data[rt as string] = createGridItems(activeTemplates.filter(t => t.room_TypeName === rt)); });
        return data;
    }, [activeTemplates, imageUrls, multipleImageUrls]);


    return (
        <section className="container-custom mt-12 mb-10 px-4 text-center">
            <div className="max-w-4xl mx-auto mb-6 md:mb-10">
                <h2 className="text-3xl md:text-[48px] font-black font-nunito text-zlendo-grey-dark mb-3 md:mb-4 leading-tight tracking-tighter">
                    A wide range of home design <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00bf9a] to-emerald-600">ideas available!</span>
                </h2>
                <p className="text-base md:text-lg text-zlendo-grey-medium font-bold opacity-70 mb-6 leading-relaxed max-w-3xl mx-auto">
                    Zlendo Realty provides thousands of ready-made design templates for living rooms, bedrooms, kitchens, and more — thoughtfully designed for modern Indian homes.
                </p>
                <Link href={getPath('/viewalltemplates')} className="px-10 py-4 bg-zlendo-grey-dark text-white rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 hover:bg-black transition-all shadow-xl flex items-center gap-2 mx-auto inline-flex">
                    View all templates <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-6">
                {Object.keys(designInspirationData).map((item) => (
                    <button
                        key={item}
                        onClick={() => setActiveDesignFilter(item)}
                        className={`px-6 md:px-8 py-3 rounded-full border text-sm md:text-base font-bold transition-all duration-300 ${activeDesignFilter === item
                            ? 'bg-[#00bf9a] text-white border-[#00bf9a] shadow-lg shadow-[#00bf9a]/20 scale-105'
                            : 'bg-white border-black/10 text-zlendo-grey-medium hover:border-black/30 hover:bg-gray-50'
                            }`}
                    >
                        {item}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeDesignFilter}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="w-full"
                >
                    {designInspirationData[activeDesignFilter]?.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-[300px_300px] gap-4 md:gap-6 h-auto text-left">
                            {designInspirationData[activeDesignFilter].map((item: any, idx: number) => (
                                <div
                                    key={idx}
                                    onClick={() => item.templateId && handleTemplateClick(item.templateId)}
                                    className={`${item.colSpan} ${item.rowSpan} relative group rounded-[24px] md:rounded-[32px] overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-2xl hover:shadow-[#00bf9a]/20 transition-all block h-[260px] md:h-full`}
                                >
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        onError={(e) => {
                                            const target = e.currentTarget;
                                            if (item.img?.startsWith('blob:') && item.originalUrl) {
                                                const directUrl = item.originalUrl.startsWith('http')
                                                    ? item.originalUrl
                                                    : `${process.env.NEXT_PUBLIC_AZURE_BLOB_URL || 'https://zlendoappstorage.blob.core.windows.net/'}${item.originalUrl}${item.originalUrl.includes('?') ? '&' : '?'}${process.env.NEXT_PUBLIC_AZURE_SAS_TOKEN || ''}`;
                                                if (target.src !== directUrl) {
                                                    target.onerror = null;
                                                    target.src = directUrl;
                                                    return;
                                                }
                                            }
                                            target.onerror = null;
                                            target.src = '/assets/home/living-room-3d.webp';
                                        }}
                                    />
                                    <div className={`absolute inset-0 transition-opacity duration-500 ${item.isLarge ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 md:opacity-0 group-hover:opacity-100' : 'bg-black/40 opacity-0 group-hover:opacity-100'}`} />
                                    <div className={`absolute left-0 p-6 md:p-8 transition-all duration-500 ${item.isLarge ? 'bottom-0 translate-y-4 md:translate-y-8 group-hover:translate-y-0 opacity-100 md:opacity-0 group-hover:opacity-100' : 'bottom-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100'}`}>
                                        {item.isLarge && <h3 className="text-white text-xl md:text-2xl font-black mb-2 drop-shadow-md">{item.title}</h3>}
                                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold ring-1 ring-white/30">
                                            <Image className="w-3 h-3" /> {item.isLarge ? item.count : item.title}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-gray-50/50 rounded-[32px] border-2 border-dashed border-gray-100">
                            <p className="text-base font-bold text-zlendo-grey-medium opacity-50">
                                No designs available for this category.
                            </p>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </section>
    );
};

export default TemplateGallery;
