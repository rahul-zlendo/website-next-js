'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, ShieldCheck, Sparkles, Eye, Ruler, Calculator, Box, Image, Video, Palette, Compass, Layers, Calendar, ChevronDown } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCountry } from '@/lib/context/CountryContext';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { getAllTemplates } from '@/lib/store/slices/templateSlice';
import { fetchBlobUrl, BLOB_BASE_URL, BLOB_SAS_TOKEN } from '@/lib/utils/blobUtils';
import { addTemplateViewService } from '@/lib/services/templateService';

// Feature images - using high-quality Unsplash placeholders
const Conv2dTo3dImg = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200';
const AiRoomInspirationImg = 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200';
const ExportToolkitImg = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200';

const features = [
    {
        section: 'Plan & Design',
        tabs: ['2D to 3D Converter', 'AI Room Inspiration', 'Zlendo Realty AR/VR/MR Studio'],
        title: '2D to 3D Converter',
        description: 'Zlendo Realty converts simple floor plans into structured, walkable 3D environments without manual modeling.',
        howItWorks: ['Upload Plan', 'Interpret Layout', 'Generate 3D Model', 'Ready for Exploration'],
        img: Conv2dTo3dImg,
        reverse: false
    },
    {
        section: 'Visualize',
        tabs: ['AI Room Inspiration', 'Immersive Design Preview', 'Zlendo Realty AR/VR/MR Studio'],
        title: 'AI Room Inspiration',
        description: 'Inspiration is generated based on actual room context, not generic templates.',
        howItWorks: ['Understand Room Context', 'Generate Relevant Inspirations', 'Preview in Context', 'Apply Selectively'],
        img: AiRoomInspirationImg,
        reverse: true
    },
    {
        section: 'Share',
        tabs: ['3D Export Toolkit', 'Immersive Design Preview', 'Zlendo Realty AR/VR/MR Studio'],
        title: '3D Export Toolkit',
        description: 'Design outputs are prepared for communication and downstream use.',
        howItWorks: ['Select Design Version', 'Choose Export Format', 'Export or Share', 'Reuse Across Workflows'],
        img: ExportToolkitImg,
        reverse: false
    }
];

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

export default function HomeClient() {
    const { getPath, paths } = useCountry();
    const router = useRouter();

    const handleTemplateClick = (templateId: number) => {
        // Navigate immediately for instant feedback
        router.push(getPath(`/template-detail?templateId=${templateId}`));

        // Fire analytics in background (non-blocking)
        addTemplateViewService(templateId, "Template", "View").catch((error) => {
            console.error("Error adding template view:", error);
        });
    };
    const dispatch = useAppDispatch();
    const { activeTemplates } = useAppSelector((state) => state.template);
    const [activeDesignFilter, setActiveDesignFilter] = useState("All Spaces");
    const [imageUrls, setImageUrls] = useState<Record<number, string>>({});
    const [multipleImageUrls, setMultipleImageUrls] = useState<Record<number, string[]>>({});
    const [loadingImageUrls, setLoadingImageUrls] = useState<Set<number>>(new Set());
    const [mounted, setMounted] = useState(false); // Prevent hydration mismatch

    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    // Ensure client-side only rendering
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        dispatch(getAllTemplates());
    }, [dispatch]);

    // Helper function to construct full blob URL with SAS token
    const constructFullBlobUrl = (relativeUrl: string): string => {
        if (!relativeUrl) return '';
        if (relativeUrl.startsWith('http') || relativeUrl.startsWith('blob:')) return relativeUrl;

        const BLOB_BASE = 'https://zrealtystoragedev.blob.core.windows.net/';
        const SAS = process.env.NEXT_PUBLIC_BLOB_SAS_TOKEN || '';
        const fullUrl = `${BLOB_BASE}${relativeUrl}`;
        return SAS && !fullUrl.includes('?') ? `${fullUrl}?${SAS}` : fullUrl;
    };

    // Load multiple thumbnails for a template
    const loadMultipleThumbnails = async (templateId: number, thumbnailUrls: string[]) => {
        if (multipleImageUrls[templateId] || loadingImageUrls.has(templateId) || !thumbnailUrls || thumbnailUrls.length === 0) {
            return;
        }

        setLoadingImageUrls((prev) => new Set(prev).add(templateId));

        try {
            const loadPromises = thumbnailUrls.map(async (url) => {
                try {
                    const blobUrl = await fetchBlobUrl(url);
                    // Return blob URL if successful, otherwise return full Azure URL with SAS token
                    return (blobUrl && blobUrl.startsWith('blob:')) ? blobUrl : constructFullBlobUrl(url);
                } catch (error) {
                    console.error(`Failed to load thumbnail for template ${templateId}:`, error);
                    // Always return full blob URL, never relative URL
                    return constructFullBlobUrl(url);
                }
            });

            const loadedUrls = await Promise.all(loadPromises);
            setMultipleImageUrls((prev) => ({
                ...prev,
                [templateId]: loadedUrls,
            }));
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

    // Load images for templates when activeTemplates changes
    useEffect(() => {
        activeTemplates.forEach((template) => {
            // Load main thumbnail
            if (template.thumbnail_Url && !imageUrls[template.template_Id] && !loadingImageUrls.has(template.template_Id)) {
                loadTemplateImage(template.template_Id, template.thumbnail_Url);
            }
            // Load multiple thumbnails
            if (template.multiple_ThumbnailUrls && template.multiple_ThumbnailUrls.length > 0 && !multipleImageUrls[template.template_Id]) {
                loadMultipleThumbnails(template.template_Id, template.multiple_ThumbnailUrls);
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTemplates]);

    // Load template images
    const loadTemplateImage = async (templateId: number, thumbnailUrl: string) => {
        if (imageUrls[templateId] || loadingImageUrls.has(templateId) || !thumbnailUrl) {
            return;
        }

        setLoadingImageUrls((prev) => new Set(prev).add(templateId));

        try {
            const blobUrl = await fetchBlobUrl(thumbnailUrl);
            const urlToUse = (blobUrl && blobUrl.startsWith('blob:')) ? blobUrl : constructFullBlobUrl(thumbnailUrl);

            setImageUrls((prev) => ({
                ...prev,
                [templateId]: urlToUse,
            }));
        } catch (error) {
            console.error(`Failed to load image for template ${templateId}:`, error);
            // Even on error, set the full blob URL as fallback
            setImageUrls((prev) => ({
                ...prev,
                [templateId]: constructFullBlobUrl(thumbnailUrl),
            }));
        } finally {
            setLoadingImageUrls((prev) => {
                const newSet = new Set(prev);
                newSet.delete(templateId);
                return newSet;
            });
        }
    };

    // Transform templates into designInspirationData structure
    const designInspirationData = useMemo(() => {
        if (!activeTemplates || activeTemplates.length === 0) {
            return {
                "All Spaces": [] as DesignInspirationItem[],
                "Full House": [] as DesignInspirationItem[],
            };
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

            const allImages: Array<{
                img: string;
                title: string;
                templateId: number;
                originalUrl?: string;
            }> = [];

            templates.forEach((template: any) => {
                const mainImg = imageUrls[template.template_Id] || template.thumbnail_Url || "";
                if (mainImg) {
                    allImages.push({
                        img: mainImg,
                        title: template.template_Name,
                        templateId: template.template_Id,
                        originalUrl: template.thumbnail_Url
                    });
                }

                const multipleThumbs = multipleImageUrls[template.template_Id] || [];
                const originalMultipleThumbs = template.multiple_ThumbnailUrls || [];

                multipleThumbs.forEach((thumbUrl, idx) => {
                    if (thumbUrl) {
                        allImages.push({
                            img: thumbUrl,
                            title: template.template_Name,
                            templateId: template.template_Id,
                            originalUrl: originalMultipleThumbs[idx]
                        });
                    }
                });
            });

            if (allImages[0]) {
                items.push({
                    title: allImages[0].title,
                    count: `${templates.length}+ Designs`,
                    img: allImages[0].img,
                    colSpan: "md:col-span-2",
                    rowSpan: "md:row-span-2",
                    isLarge: true,
                    templateId: allImages[0].templateId,
                    originalUrl: allImages[0].originalUrl
                });
            }

            if (allImages[1]) {
                items.push({
                    title: allImages[1].title,
                    count: `${templates.length}+ Designs`,
                    img: allImages[1].img,
                    colSpan: "md:col-span-1",
                    rowSpan: "md:row-span-1",
                    isLarge: false,
                    templateId: allImages[1].templateId,
                    originalUrl: allImages[1].originalUrl
                });
            }

            if (allImages[2]) {
                items.push({
                    title: allImages[2].title,
                    count: `${templates.length}+ Designs`,
                    img: allImages[2].img,
                    colSpan: "md:col-span-1",
                    rowSpan: "md:row-span-1",
                    isLarge: false,
                    templateId: allImages[2].templateId,
                    originalUrl: allImages[2].originalUrl
                });
            }

            if (allImages[3]) {
                items.push({
                    title: allImages[3].title,
                    count: `${templates.length}+ Designs`,
                    img: allImages[3].img,
                    colSpan: "md:col-span-2",
                    rowSpan: "md:row-span-1",
                    isLarge: true,
                    templateId: allImages[3].templateId,
                    originalUrl: allImages[3].originalUrl
                });
            }

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

    const intelligenceDimensions = [
        {
            id: '1D',
            title: 'Floor Plan Drafting',
            shortDesc: 'Precision 2D Layouts',
            longDesc: 'Create professional-grade floor plans with exact dimensions. Our intelligent drafting tool auto-corrects alignments and suggests standard room sizes.',
            icon: Ruler,
            color: 'text-blue-500',
            bg: 'bg-blue-500',
            benefit: 'Zero-Error Planning',
            action: { type: 'route', value: getPath('/products/floor-planner') }
        },
        {
            id: '2D',
            title: 'Instant 3D Conversion',
            shortDesc: 'One-Click Transformation',
            longDesc: 'Watch your 2D sketch instantly rise into a 3D structural model. Walls, windows, and doors are automatically generated in seconds.',
            icon: Box,
            color: 'text-indigo-500',
            bg: 'bg-indigo-500',
            benefit: 'Instant Visualization',
            action: { type: 'route', value: getPath('/products/2d-to-3d') }
        },
        {
            id: '3D',
            title: 'Interactive Walkthrough',
            shortDesc: 'Immersive Exploration',
            longDesc: 'Walk through your future home as if you were there. Open doors, inspect corners, and feel the space in first-person view.',
            icon: Eye,
            color: 'text-zlendo-teal',
            bg: 'bg-zlendo-teal',
            benefit: 'True-to-Life Experience',
            action: { type: 'route', value: getPath('/products/virtual-walkthrough') }
        },
        {
            id: '4D',
            title: 'Photorealistic Rendering',
            shortDesc: '4K Visualization',
            longDesc: 'Generate magazine-quality static renders with ray-traced lighting, shadows, and reflections to see the true beauty of your design.',
            icon: Image,
            color: 'text-purple-500',
            bg: 'bg-purple-500',
            benefit: 'Stunning Presentation',
            action: { type: 'route', value: getPath('/products/realistic-renders') }
        },
        {
            id: '5D',
            title: 'Cinematic Video',
            shortDesc: 'Automated Tours',
            longDesc: 'Create smooth, cinematic video tours of your property automatically. Perfect for presentations and social media sharing.',
            icon: Video,
            color: 'text-pink-500',
            bg: 'bg-pink-500',
            benefit: 'Engaging Storytelling',
            action: { type: 'route', value: getPath('/products/realistic-renders') }
        },
        {
            id: '6D',
            title: 'Cost Engine',
            shortDesc: 'Real-Time BOQ',
            longDesc: 'Get an instant Bill of Quantities (BOQ) with local pricing. Know accurately how much cement, steel, and paint you need.',
            icon: Calculator,
            color: 'text-emerald-600',
            bg: 'bg-emerald-600',
            benefit: 'Budget Certainty',
            action: { type: 'route', value: getPath('/products/cost-estimator') }
        },
        {
            id: '7D',
            title: 'Material Library',
            shortDesc: 'Infinite Customization',
            longDesc: 'Access thousands of real-world materials. Swap tiles, paints, and fabrics instantly to find the perfect combination.',
            icon: Palette,
            color: 'text-amber-500',
            bg: 'bg-amber-500',
            benefit: 'Design Freedom',
            action: { type: 'route', value: getPath('/products/material-library') }
        },
        {
            id: '8D',
            title: 'AI Style Inspiration',
            shortDesc: 'Generative Design',
            longDesc: 'Stuck on ideas? Let our AI suggest themes like "Modern Minimalist" or "Traditional Warm" tailored to your room layout.',
            icon: Sparkles,
            color: 'text-rose-500',
            bg: 'bg-rose-500',
            benefit: 'Instant Creativity',
            action: { type: 'route', value: getPath('/products/floor-planner') }
        },
        {
            id: '9D',
            title: 'Vastu Recommendations',
            shortDesc: 'Ancient Wisdom',
            longDesc: 'Get instant AI-driven Vastu compliance scores. Detect energy imbalances and receive corrective suggestions for harmony.',
            icon: Compass,
            color: 'text-orange-500',
            bg: 'bg-orange-500',
            benefit: 'Energy Harmony',
            action: { type: 'route', value: getPath('/products/vastu') }
        }
    ];

    if (!mounted) return null;

    return (
        <div className="bg-white font-nunito selection:bg-zlendo-teal/10">
            <main className="pt-4 md:pt-6">
                {/* Hero */}
                <section className="container-custom text-center mb-2 md:mb-3 px-4 overflow-visible relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-zlendo-teal/10 blur-[120px] rounded-full -z-10" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zlendo-teal/5 border border-zlendo-teal/10 mb-3"
                    >
                        <Sparkles className="w-4 h-4 text-zlendo-teal" />
                        <span className="text-xs font-black text-zlendo-teal uppercase tracking-[0.2em]">Create with Confidence</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[28px] md:text-[42px] lg:text-[56px] font-black font-nunito text-zlendo-grey-dark leading-[1.1] md:leading-[1.05] mb-3 md:mb-4 max-w-5xl mx-auto tracking-tight md:tracking-tighter"
                    >
                        Design Smarter. <span className="text-zlendo-teal italic"> Build Faster.</span> Deliver Better.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-base md:text-lg text-zlendo-grey-medium font-bold max-w-3xl mx-auto mb-5 leading-relaxed opacity-90"
                    >
                        Powerful Civil Plan & Interior Design Software for Professionals and Individuals.
                        Zlendo Realty helps you create accurate 2D plans, stunning 3D designs, and complete interior layouts—all from one easy-to-use platform.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href={SIGNUP_URL}
                            className="bg-zlendo-teal text-white px-8 py-3.5 rounded-[20px] font-black text-base hover:scale-105 transition-all shadow-2xl shadow-zlendo-teal/30 group flex items-center gap-2"
                        >
                            Design Home for Free <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <Link
                            href={paths.enterpriseDemo || '#'}
                            className="bg-white text-zlendo-grey-dark px-8 py-3.5 rounded-[20px] font-black text-base border border-black/10 hover:bg-gray-50 hover:scale-105 transition-all shadow-xl group flex items-center gap-2"
                        >
                            Schedule Your Business Demo <Calendar className="w-6 h-6 text-zlendo-grey-medium group-hover:text-zlendo-teal transition-colors" />
                        </Link>
                    </motion.div>
                </section>

                {/* 9D Intelligence Focus Hub (Horizontal Scroll) */}
                <section className="py-8 md:py-12 relative bg-white overflow-hidden border-b border-black/[0.03]">
                    <div className="container-custom px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zlendo-teal/5 border border-zlendo-teal/10 mb-3"
                            >
                                <div className="w-2 h-2 rounded-full bg-zlendo-teal animate-pulse" />
                                <span className="text-[10px] font-black text-zlendo-teal uppercase tracking-[0.3em]">Proprietary 9D Framework</span>
                            </motion.div>
                            <h2 className="text-3xl md:text-[48px] font-black font-nunito text-zlendo-grey-dark mb-3 md:mb-4 leading-[1] tracking-tighter">
                                The <span className="text-zlendo-teal">Intelligence</span> behind <br />
                                your dream home.
                            </h2>
                            <p className="text-base md:text-lg text-zlendo-grey-medium font-bold opacity-60 leading-relaxed max-w-2xl mx-auto">
                                Swipe to explore how our 9D engine guarantees total peace of mind.
                            </p>
                        </div>

                        {/* Horizontal Scroll Container */}
                        <div className="flex gap-6 overflow-x-auto pb-12 pt-4 px-4 -mx-4 md:px-0 md:mx-0 snap-x snap-mandatory scrollbar-hide">
                            {intelligenceDimensions.map((dim, index) => (
                                <motion.div
                                    key={dim.id}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="min-w-[85vw] md:min-w-[400px] snap-center rounded-[32px] md:rounded-[40px] bg-white border border-black/[0.04] shadow-xl overflow-hidden relative group hover:-translate-y-2 transition-transform duration-500"
                                >
                                    {/* Gradient Header */}
                                    <div className={`h-20 sm:h-40 bg-gradient-to-br ${dim.bg} relative overflow-hidden p-3 sm:p-8`}>
                                        <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-white/20 blur-[40px] rounded-full translate-x-1/2 -translate-y-1/2" />
                                        <div className="relative z-10 flex justify-between items-start">
                                            <div className="bg-white/20 backdrop-blur-md px-1.5 py-0.5 sm:px-4 sm:py-1.5 rounded-full text-white font-black text-[9px] sm:text-xs uppercase tracking-normal sm:tracking-widest border border-white/20">
                                                {dim.id} Dimension
                                            </div>
                                            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-lg sm:rounded-2xl flex items-center justify-center shadow-lg text-zlendo-teal">
                                                {(() => {
                                                    const Icon = dim.icon;
                                                    return <Icon className="w-4 h-4 sm:w-6 sm:h-6" />;
                                                })()}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Body */}
                                    <div className="p-8 relative">
                                        <div className={`absolute -top-14 left-8 text-[80px] font-black leading-none opacity-10 select-none ${dim.color}`}>
                                            {dim.id}
                                        </div>

                                        <div className="relative z-10 mt-2">
                                            <h3 className="text-2xl font-black font-nunito text-zlendo-grey-dark mb-2">{dim.title}</h3>
                                            <div className="text-1xl font-bold text-zlendo-teal uppercase tracking-wider mb-4">{dim.benefit}</div>
                                            <p className="text-zlendo-grey-medium font-medium leading-relaxed mb-8 min-h-[80px]">
                                                {dim.longDesc}
                                            </p>

                                            {dim.action?.type === 'route' ? (
                                                <Link href={dim.action.value} className="w-full py-4 rounded-xl border-2 border-dashed border-black/5 font-bold text-zlendo-grey-medium hover:border-zlendo-teal hover:text-zlendo-teal transition-colors flex items-center justify-center gap-2 group-hover:bg-zlendo-teal/5 text-center">
                                                    Explore <ArrowRight className="w-4 h-4 ml-2 inline" />
                                                </Link>
                                            ) : (
                                                <button onClick={() => console.log('Open modal:', dim.action?.value)} className="w-full py-4 rounded-xl border-2 border-dashed border-black/5 font-bold text-zlendo-grey-medium hover:border-zlendo-teal hover:text-zlendo-teal transition-colors flex items-center justify-center gap-2 group-hover:bg-zlendo-teal/5 text-center">
                                                    Explore <ArrowRight className="w-4 h-4 ml-2 inline" />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            {/* Spacer for right padding scroll */}
                            <div className="min-w-[20px] md:hidden" />
                        </div>
                    </div>
                </section>

                {/* Design Inspiration Section (New) */}
                <section className="container-custom mb-8 md:mb-12 px-4 text-center">
                    <div className="max-w-4xl mx-auto mb-6 md:mb-10">
                        <h2 className="text-3xl md:text-5xl font-black font-nunito text-zlendo-grey-dark mb-3 md:mb-4 leading-tight">
                            A wide range of home design <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-emerald-600">ideas available!</span>
                        </h2>
                        <p className="text-base md:text-lg text-zlendo-grey-medium font-bold opacity-70 mb-6 leading-relaxed max-w-3xl mx-auto">
                            Looking for inspiration for your pooja room, balcony, or open-plan living area?
                            Explore ready-made design templates for living rooms, bedrooms, kitchens, bathrooms, and more — thoughtfully designed for Indian homes and lifestyles.
                        </p>
                        <Link href={getPath('/viewalltemplates')} className="px-10 py-4 bg-zlendo-grey-dark text-white rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 hover:bg-black transition-all shadow-xl flex items-center gap-2 mx-auto inline-flex">
                            View all templates <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12">
                        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 flex-1">
                            {Object.keys(designInspirationData).map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setActiveDesignFilter(item)}
                                    className={`px-6 md:px-8 py-3 rounded-full border text-sm md:text-base font-bold transition-all duration-300 \${activeDesignFilter === item
                    ? 'bg-zlendo-teal text-white border-zlendo-teal shadow-lg shadow-zlendo-teal/20 scale-105'
                    : 'bg-white border-black/10 text-zlendo-grey-medium hover:border-black/30 hover:bg-gray-50'
                    }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Creative Bento Grid - Animated */}
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
                                        className="flex items-center justify-center h-[400px] md:h-[650px]"
                                    >
                                        <div className="text-center">
                                            <p className="text-xl md:text-2xl font-bold text-zlendo-grey-medium opacity-60">
                                                There is no data available
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
                                    className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 h-auto md:h-[650px] text-left"
                                >
                                    {currentData.map((item, index: number) => (
                                        <div
                                            key={index}
                                            onClick={() => item.templateId && handleTemplateClick(item.templateId)}
                                            className={`\${item.colSpan} \${item.rowSpan} relative group rounded-[24px] md:rounded-[32px] overflow-hidden cursor-pointer shadow-lg block h-[260px] md:h-auto`}
                                        >
                                            {item.img ? (
                                                <img
                                                    src={item.img}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                    onError={(e) => {
                                                        const target = e.currentTarget;
                                                        console.error(`[HomePage] Failed to load design inspiration image:`, {
                                                            img: item.img,
                                                            originalUrl: item.originalUrl,
                                                            templateId: item.templateId
                                                        });

                                                        // Fallback logic
                                                        if (item.img?.startsWith('blob:') && item.originalUrl) {
                                                            const directUrl = item.originalUrl.startsWith('http')
                                                                ? item.originalUrl
                                                                : `\${BLOB_BASE_URL}\${item.originalUrl}\${item.originalUrl.includes('?') ? '&' : '?'}\${BLOB_SAS_TOKEN}`;

                                                            if (target.src !== directUrl) {
                                                                console.log(`[HomePage] Falling back to direct URL for design inspiration image`);
                                                                target.src = directUrl;
                                                                return;
                                                            }
                                                        }

                                                        // If already direct URL or no originalUrl, use fallback placeholder
                                                        target.src = "https://via.placeholder.com/600x400?text=Template";
                                                    }}
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                                    <span className="text-gray-400">Loading...</span>
                                                </div>
                                            )}
                                            {/* Gradient Overlay */}
                                            <div className={`absolute inset-0 transition-opacity duration-500 \${item.isLarge ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 md:opacity-0 group-hover:opacity-100' : 'bg-black/40 opacity-0 group-hover:opacity-100'}`} />

                                            {/* Content Info */}
                                            <div className={`absolute left-0 p-6 md:p-8 transition-all duration-500 \${item.isLarge ? 'bottom-0 translate-y-4 md:translate-y-8 group-hover:translate-y-0 opacity-100 md:opacity-0 group-hover:opacity-100' : 'bottom-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100'}`}>
                                                {item.isLarge && <h3 className="text-white text-xl md:text-2xl font-black mb-2">{item.title}</h3>}
                                                <span className={`inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold ring-1 ring-white/30 \${!item.isLarge ? 'mt-2' : ''}`}>
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

                {/* How to design a home online for free */}
                <section className="container-custom mb-6 md:mb-10 px-4 text-center">
                    <div className="max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-black font-nunito text-zlendo-grey-dark mb-6">
                            How to design a home online for free
                        </h2>
                        <p className="text-xl text-zlendo-grey-medium font-bold opacity-80 leading-relaxed">
                            Design your 2BHK, pooja room, or bungalow easily with Zlendo Realty. Get Vastu-friendly plans & realistic 3D views!
                        </p>
                    </div>
                </section>

                {/* Feature Sections - Redesigned */}
                {features.map((feature) => (
                    <section key={feature.section} className="container-custom mb-8 md:mb-12 px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 \${feature.reverse ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Text Visuals */}
                            <div className="flex-1 text-center lg:text-left">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-zlendo-teal/10 text-zlendo-teal font-black text-xs uppercase tracking-widest mb-3 border border-zlendo-teal/20">
                                    {feature.section}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-black font-nunito text-zlendo-grey-dark mb-3 leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-base md:text-lg text-zlendo-grey-medium font-bold opacity-70 mb-5 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                    {feature.description}
                                </p>

                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 text-left max-w-lg mx-auto lg:mx-0">
                                    {feature.howItWorks.map((step) => (
                                        <li key={step} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                                <div className="w-2 h-2 rounded-full bg-zlendo-teal" />
                                            </div>
                                            <span className="text-base font-bold text-zlendo-grey-dark opacity-80">{step}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={SIGNUP_URL}
                                    className="inline-flex items-center gap-2 text-zlendo-teal font-black text-lg group hover:gap-4 transition-all"
                                >
                                    Learn more <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>

                            {/* Creative Stacked Image Visual */}
                            <div className="flex-1 w-full relative perspective-1000">
                                {/* Back Layer Card (Decoration) */}
                                <div className={`absolute top-0 w-full h-full bg-black/[0.03] rounded-[32px] border border-black/[0.05] -translate-x-4 -translate-y-4 md:-translate-x-8 md:-translate-y-8 z-0 transition-transform duration-700 \${feature.reverse ? 'translate-x-4 md:translate-x-8' : ''}`} />

                                {/* Main Image Card */}
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="relative z-10 bg-white rounded-[32px] border border-black/[0.08] shadow-2xl overflow-hidden p-3"
                                >
                                    {/* Browser/App Header Dots */}
                                    <div className="absolute top-0 left-0 right-0 h-14 bg-white border-b border-black/[0.05] flex items-center px-6 gap-2 z-20">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                                        </div>
                                        <div className="mx-auto w-1/3 h-2 rounded-full bg-gray-100" />
                                    </div>

                                    {/* Image Content */}
                                    <div className="mt-12 rounded-2xl overflow-hidden bg-gray-50 aspect-[4/3] group relative">
                                        <img
                                            src={feature.img}
                                            alt={feature.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 transform-gpu"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </section>
                ))}

                {/* Individual Comparison - Replaces "Wins" with "The Journey" */}
                <section className="bg-white py-8 md:py-12 relative rounded-[60px] md:rounded-[100px_100px_0_0] overflow-hidden">
                    {/* Creative Mesh Gradient Background */}
                    <div className="absolute top-0 inset-x-0 h-full bg-[#FAFFFD]" />
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-zlendo-teal/10 to-blue-200/20 blur-[130px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-rose-100 to-orange-100 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

                    <div className="container-custom relative z-10 px-4">
                        <div className="text-center mb-12 md:mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zlendo-teal/5 border border-zlendo-teal/10 mb-6"
                            >
                                <ShieldCheck className="w-4 h-4 text-zlendo-teal" />
                                <span className="text-[10px] font-black text-zlendo-teal uppercase tracking-[0.3em]">Peace of Mind</span>
                            </motion.div>
                            <h2 className="text-4xl md:text-6xl font-black font-nunito text-zlendo-grey-dark mb-8 tracking-tighter leading-[0.9]">
                                Your Dream Design <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-500">made Easy</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-zlendo-grey-medium font-bold max-w-2xl mx-auto leading-relaxed opacity-80 text-center">
                                Why 12,000+ modern homeowners chose Zlendo Realty over traditional guesswork.
                            </p>
                        </div>

                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                                {[
                                    {
                                        title: "Instant Transformation",
                                        trad: "Staring at flat 2D plans",
                                        zlendo: "Immersive 8K Walkthroughs",
                                        img: "from-purple-500 to-pink-400",
                                        icon: Layers
                                    },
                                    {
                                        title: "Smart Customization",
                                        trad: "Vague per-sqft estimates",
                                        zlendo: "Real-time Material & Budget",
                                        img: "from-blue-500 to-cyan-400",
                                        icon: Palette
                                    },
                                    {
                                        title: "Construction Clarity",
                                        trad: "On-site guesswork & errors",
                                        zlendo: "Precision Digital Twin",
                                        img: "from-green-500 to-emerald-400",
                                        icon: Box
                                    },
                                    {
                                        title: "Unmatched Speed",
                                        trad: "Weeks for a single render",
                                        zlendo: "Full 3D Tour in 30 Seconds",
                                        img: "from-orange-500 to-amber-400",
                                        icon: Zap
                                    }
                                ].map((row, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="group relative bg-white rounded-[40px] p-8 md:p-10 border border-black/[0.04] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,168,132,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                                    >
                                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br \${row.img} opacity-10 blur-[40px] rounded-full translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700`} />

                                        <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                                            <div className="flex items-start justify-between">
                                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br \${row.img} flex items-center justify-center text-white shadow-lg shrink-0`}>
                                                    <row.icon className="w-8 h-8" />
                                                </div>
                                                <h4 className="text-2xl font-black font-nunito text-zlendo-grey-dark ml-6 md:ml-0">{row.title}</h4>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="p-4 rounded-2xl bg-red-50 border border-red-100/50">
                                                    <div className="text-[10px] font-black uppercase text-red-500 tracking-widest mb-1 opacity-70">Old Way</div>
                                                    <div className="text-lg font-bold text-red-900/60 line-through decoration-red-300 text-left">{row.trad}</div>
                                                </div>
                                                <div className="relative">
                                                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-zlendo-teal rounded-full" />
                                                    <div className="pl-4 text-left">
                                                        <div className="text-[10px] font-black uppercase text-zlendo-teal tracking-widest mb-1">Zlendo Realty Way</div>
                                                        <div className="text-xl font-black text-zlendo-grey-dark">{row.zlendo}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final High Conversion CTA */}
                <section className="bg-white pt-4 pb-0 -mb-8 md:mb-0 md:pt-20 md:pb-20 px-4">
                    <div className="container-custom max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white border border-gray-100 rounded-[32px] md:rounded-[48px] p-3 md:p-16 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]"
                        >
                            <div className="flex-1 text-center md:text-left space-y-3 md:space-y-8">
                                <h2 className="text-4xl md:text-5xl font-black font-nunito text-zlendo-grey-dark leading-tight">
                                    Start designing your house <br className="hidden md:block" />
                                    with <span className="text-emerald-500">Zlendo Realty</span>
                                </h2>
                                <p className="text-xl font-bold text-zlendo-grey-medium max-w-lg mx-auto md:mx-0 opacity-70">
                                    Draw a floor plan and create a 3D home design in 10 min.
                                </p>
                                <div className="flex justify-center md:justify-start">
                                    <a
                                        href={SIGNUP_URL}
                                        className="bg-[#1AE16C] text-zlendo-grey-dark px-10 py-5 rounded-full font-black text-lg shadow-[0_10px_30px_rgba(26,225,108,0.3)] hover:scale-105 active:scale-95 transition-all inline-block"
                                    >
                                        Get Started For Free
                                    </a>
                                </div>
                            </div>

                            <div className="flex-1 w-full max-w-md">
                                <img
                                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
                                    alt="Zlendo Realty Designer Illustration"
                                    className="w-full h-auto drop-shadow-2xl"
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container-custom px-6 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-center text-zlendo-grey-dark mb-12">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-colors">
                                    <button
                                        onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left bg-transparent"
                                    >
                                        <span className="text-lg font-bold text-zlendo-grey-dark">{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform \${activeFaq === i ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {activeFaq === i && (
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: 'auto' }}
                                                exit={{ height: 0 }}
                                                className="overflow-hidden bg-slate-50"
                                            >
                                                <p className="px-6 pb-6 pt-2 text-zlendo-grey-medium font-medium leading-relaxed">
                                                    {faq.a}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div >
    );
}

const faqs = [
    {
        q: "Who can use Zlendo Realty?",
        a: "Zlendo Realty can be used by homeowners, architects, students, builders, and real estate professionals. It supports both beginners and experienced users involved in home planning and design."
    },
    {
        q: "Is it beginner friendly?",
        a: "Yes. The platform is designed to be easy to use and does not require any technical, architectural, or design background."
    },
    {
        q: "Does it work on mobile?",
        a: "Yes. Zlendo Realty works seamlessly across mobile phones, tablets, and desktop devices, allowing access anytime and anywhere."
    },
    {
        q: "Is my data secure?",
        a: "Yes. Your designs and project data remain private unless you choose to share them. Strong data security measures are maintained."
    },
    {
        q: "Can it be used for professional work?",
        a: "Yes. The platform is suitable for professional projects, client presentations, and real estate planning, and is widely used for architectural design services and project visualization."
    },
    {
        q: "Is support available?",
        a: "Yes. Dedicated customer support is available to assist users whenever help is needed."
    }
];
