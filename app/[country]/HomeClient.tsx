'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, Zap, ShieldCheck, Sparkles, Eye, Ruler, Calculator,
    Box, Image, Video, Palette, Compass, Layers, Calendar,
    CheckCircle2, Building2, HardHat, PenTool, Users
} from 'lucide-react';
import { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCountry } from '@/lib/context/CountryContext';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { getAllTemplates } from '@/lib/store/slices/templateSlice';
import { fetchBlobUrl, BLOB_BASE_URL, BLOB_SAS_TOKEN } from '@/lib/utils/blobUtils';
import { addTemplateViewService } from '@/lib/services/templateService';
import { encryptProjectId } from '@/lib/utils/encryptionUtils';
import { urlFor } from '@/lib/sanity/image';
import FaqAccordion from './components/FaqAccordion';
import { detectUserRegion } from '@/lib/store/slices/enterpriseSlice';
import RecentBlogPosts from '@/components/common/RecentBlogPosts';

interface HomeClientProps {
    cms: any;
    resolvedFaqs: any[];
    resolvedFeatures: any[];
    resolvedComparisonRows: any[];
    resolvedIntelligence: any[];
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

export default function HomeClient({
    cms,
    resolvedFaqs,
    resolvedFeatures,
    resolvedComparisonRows,
    resolvedIntelligence
}: HomeClientProps) {
    const { getPath, paths } = useCountry();
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { activeTemplates } = useAppSelector((state) => state.template);

    const [activeDesignFilter, setActiveDesignFilter] = useState("All Spaces");
    const [resolvedTemplateImages, setResolvedTemplateImages] = useState<Record<string, string>>({});
    const resolvedTemplateImagesRef = useRef<Record<string, string>>({});
    const loadingTemplateImages = useRef<Set<string>>(new Set());
    const [mounted, setMounted] = useState(false);
    const [activeAudienceTab, setActiveAudienceTab] = useState(0);

    // Resolve labels from CMS or defaults
    const heroBadge = cms?.heroBadgeText ?? 'Create with Confidence';
    const heroTitle = cms?.heroTitle ?? 'Design Smarter.';
    const heroHighlight = cms?.heroTitleHighlight ?? 'Build Faster.';
    const heroAfter = cms?.heroTitleAfter ?? 'Deliver Better.';
    const heroSubtitleText = cms?.heroSubtitle ?? 'Powerful Civil Plan & Interior Design Software for Professionals and Individuals. Zlendo Realty helps you create accurate 2D plans, stunning 3D designs, and complete interior layouts—all from one easy-to-use platform.';
    const heroPrimaryLabel = cms?.heroPrimaryCtaLabel ?? 'Design Home for Free';
    const heroSecondaryLabel = cms?.heroSecondaryCtaLabel ?? 'Schedule Your Business Demo';
    const heroPrimaryLink = cms?.heroPrimaryCtaLink ?? SIGNUP_URL;
    const heroSecondaryLink = cms?.heroSecondaryCtaLink ?? paths.enterpriseDemo;

    const intelligenceBadge = cms?.intelligenceBadgeText ?? 'Proprietary 9D Framework';
    const intelligenceTitle = cms?.intelligenceSectionTitle ?? 'The Intelligence';
    const intelligenceHighlight = cms?.intelligenceSectionTitleHighlight ?? 'behind';
    const intelligenceAfter = cms?.intelligenceSectionTitleAfter ?? 'your dream home.';
    const intelligenceSubtitle = cms?.intelligenceSectionSubtitle ?? 'Swipe to explore how our 9D engine guarantees total peace of mind.';

    const howToTitle = cms?.howToSectionTitle ?? 'How to design a home online for free';
    const howToSubtitle = cms?.howToSectionSubtitle ?? 'Design your 2BHK, pooja room, or bungalow easily with Zlendo Realty. Get Vastu-friendly plans & realistic 3D views!';

    const comparisonBadge = cms?.comparisonBadgeText ?? 'Peace of Mind';
    const comparisonTitle = cms?.comparisonTitle ?? 'Your Dream Design';
    const comparisonHighlight = cms?.comparisonTitleHighlight ?? 'made Easy';
    const comparisonSubtitle = cms?.comparisonSubtitle ?? 'Why 12,000+ modern homeowners chose Zlendo Realty over traditional guesswork.';
    const comparisonOldWayLabel = cms?.comparisonOldWayLabel ?? 'Old Way';
    const comparisonNewWayLabel = cms?.comparisonNewWayLabel ?? 'Zlendo Realty Way';
    const dimensionSuffix = cms?.dimensionSuffix ?? 'Dimension';

    const ctaTitle = cms?.ctaTitle ?? 'Start designing your house with Zlendo Realty';
    const ctaSubtitle = cms?.ctaSubtitle ?? 'Draw a floor plan and create a 3D home design in 10 min.';
    const ctaButtonLabel = cms?.ctaButtonLabel ?? 'Get Started For Free';
    const ctaImageUrl = urlFor(cms?.ctaImageUrl).url() || '/assets/Home-Page/cta-home.webp';
    const ctaLink = cms?.ctaButtonLink ?? SIGNUP_URL;

    const faqTitle = cms?.faqSectionTitle ?? 'Frequently Asked Questions';

    const iconMap: any = {
        Ruler, Box, Eye, Image, Video, Calculator, Palette, Sparkles, Compass, Layers, Zap
    };

    useEffect(() => {
        setMounted(true);
        const fetchInitialData = async () => {
            try {
                // 1. Detect user region first
                const regionId = await dispatch(detectUserRegion()).unwrap();
                // 2. Load templates filtered by region
                dispatch(getAllTemplates(regionId || undefined));
            } catch (error) {
                // console.error("Error loading initial data:", error);
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
        if (relativeUrl.startsWith('http') || relativeUrl.startsWith('blob:') || relativeUrl.startsWith('/')) {
            if (relativeUrl.includes('blob.core.windows.net') && !relativeUrl.includes('sig=') && BLOB_SAS_TOKEN) {
                return relativeUrl.includes('?') ? `${relativeUrl}&${BLOB_SAS_TOKEN}` : `${relativeUrl}?${BLOB_SAS_TOKEN}`;
            }
            return relativeUrl;
        }
        const fullUrl = `${BLOB_BASE_URL}${relativeUrl}`;
        return BLOB_SAS_TOKEN ? (fullUrl.includes('?') ? `${fullUrl}&${BLOB_SAS_TOKEN}` : `${fullUrl}?${BLOB_SAS_TOKEN}`) : fullUrl;
    };

    // Resolve only the four image sources visible in the active gallery. The
    // previous implementation downloaded every image for every template on
    // mount, even though the grid can display only four cards.
    const visibleTemplateImageSources = useMemo(() => {
        const templates = activeDesignFilter === 'All Spaces'
            ? activeTemplates
            : activeDesignFilter === 'Full House'
                ? activeTemplates.filter((template) => template.template_TypeName === 'Full House')
                : activeTemplates.filter((template) => template.room_TypeName === activeDesignFilter);

        const sources: string[] = [];
        for (const template of templates) {
            if (template.thumbnail_Url) sources.push(template.thumbnail_Url);
            for (const thumbnailUrl of template.multiple_ThumbnailUrls || []) {
                if (thumbnailUrl) sources.push(thumbnailUrl);
                if (sources.length >= 4) break;
            }
            if (sources.length >= 4) break;
        }
        return sources.slice(0, 4);
    }, [activeTemplates, activeDesignFilter]);

    useEffect(() => {
        let cancelled = false;

        visibleTemplateImageSources.forEach(async (sourceUrl) => {
            if (resolvedTemplateImagesRef.current[sourceUrl] || loadingTemplateImages.current.has(sourceUrl)) return;
            loadingTemplateImages.current.add(sourceUrl);

            try {
                const blobUrl = await fetchBlobUrl(sourceUrl);
                if (!cancelled) {
                    const resolvedUrl = blobUrl?.startsWith('blob:') ? blobUrl : constructFullBlobUrl(sourceUrl);
                    resolvedTemplateImagesRef.current[sourceUrl] = resolvedUrl;
                    setResolvedTemplateImages((prev) => ({
                        ...prev,
                        [sourceUrl]: resolvedUrl,
                    }));
                }
            } catch {
                if (!cancelled) {
                    const fallbackUrl = constructFullBlobUrl(sourceUrl);
                    resolvedTemplateImagesRef.current[sourceUrl] = fallbackUrl;
                    setResolvedTemplateImages((prev) => ({
                        ...prev,
                        [sourceUrl]: fallbackUrl,
                    }));
                }
            } finally {
                loadingTemplateImages.current.delete(sourceUrl);
            }
        });

        return () => {
            cancelled = true;
        };
    }, [visibleTemplateImageSources]);

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

            const visibleImages = allImages.slice(0, 4).map((item, index) => ({
                ...item,
                img: resolvedTemplateImages[item.originalUrl] || fallbackImages[index],
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
    }, [activeTemplates, resolvedTemplateImages]);

    return (
        <div className="bg-white font-nunito selection:bg-zlendo-teal/10">
            <main className="pt-8 md:pt-14">

                {/* HERO SECTION */}
                <section className="container-custom text-center mb-10 md:mb-16 px-4 overflow-visible relative">
                    <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-zlendo-teal/10 blur-[120px] rounded-full -z-10" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zlendo-teal/5 border border-zlendo-teal/10 mb-3"
                    >
                        <Sparkles className="w-4 h-4 text-zlendo-teal" />
                        <span className="text-xs font-black text-zlendo-teal uppercase tracking-[0.2em]">{heroBadge}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[28px] md:text-[42px] lg:text-[56px] font-black font-nunito text-zlendo-grey-dark leading-[1.1] md:leading-[1.05] mb-3 md:mb-4 max-w-5xl mx-auto tracking-tight md:tracking-tighter"
                    >
                        {heroTitle} <span className="text-zlendo-teal italic"> {heroHighlight}</span> {heroAfter}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-base md:text-lg text-zlendo-grey-medium font-bold max-w-3xl mx-auto mb-5 leading-relaxed opacity-90"
                    >
                        {heroSubtitleText}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href={getPath(heroPrimaryLink)}
                            className="bg-zlendo-teal text-white px-8 py-3.5 rounded-[20px] font-black text-base hover:scale-105 transition-all shadow-2xl shadow-zlendo-teal/30 group flex items-center gap-2"
                        >
                            {heroPrimaryLabel} <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <Link
                            href={getPath(heroSecondaryLink) || '#'}
                            className="bg-white text-zlendo-grey-dark px-8 py-3.5 rounded-[20px] font-black text-base border border-black/10 hover:bg-gray-50 hover:scale-105 transition-all shadow-xl group flex items-center gap-2"
                        >
                            {heroSecondaryLabel} <Calendar className="w-6 h-6 text-zlendo-grey-medium group-hover:text-zlendo-teal transition-colors" />
                        </Link>
                    </motion.div>
                </section>

                {/* 9D INTELLIGENCE HUB */}
                <section className="py-16 md:py-24 relative bg-white overflow-hidden border-b border-black/[0.03]">
                    <div className="container-custom px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zlendo-teal/5 border border-zlendo-teal/10 mb-3"
                            >
                                <div className="w-2 h-2 rounded-full bg-zlendo-teal animate-pulse" />
                                <span className="text-[10px] font-black text-zlendo-teal uppercase tracking-[0.3em]">{intelligenceBadge}</span>
                            </motion.div>
                            <h2 className="text-3xl md:text-[48px] font-black font-nunito text-zlendo-grey-dark mb-3 md:mb-4 leading-[1] tracking-tighter">
                                {intelligenceTitle} <span className="text-zlendo-teal">{intelligenceHighlight}</span> <br /> {intelligenceAfter}
                            </h2>
                            <p className="text-base md:text-lg text-zlendo-grey-medium font-bold opacity-60 leading-relaxed max-w-2xl mx-auto">
                                {intelligenceSubtitle}
                            </p>
                        </div>

                        <div className="flex gap-6 overflow-x-auto pb-12 pt-4 px-4 -mx-4 md:px-0 md:mx-0 snap-x snap-mandatory scrollbar-hide">
                            {resolvedIntelligence.map((dim, index) => {
                                const Icon = iconMap[dim.iconName] || Sparkles;
                                return (
                                    <motion.div
                                        key={dim.id}
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="min-w-[85vw] md:min-w-[400px] snap-center rounded-[32px] md:rounded-[40px] bg-white border border-black/[0.04] shadow-xl overflow-hidden relative group hover:-translate-y-2 transition-transform duration-500"
                                    >
                                        <div className={`h-20 sm:h-40 bg-gradient-to-br ${dim.bg} relative overflow-hidden p-3 sm:p-8`}>
                                            <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-white/20 blur-[40px] rounded-full translate-x-1/2 -translate-y-1/2" />
                                            <div className="relative z-10 flex justify-between items-start">
                                                <div className="bg-white/20 backdrop-blur-md px-1.5 py-0.5 sm:px-4 sm:py-1.5 rounded-full text-white font-black text-[9px] sm:text-xs uppercase tracking-normal sm:tracking-widest border border-white/20">
                                                    {dim.id} {dimensionSuffix}
                                                </div>
                                                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-lg sm:rounded-2xl flex items-center justify-center shadow-lg text-zlendo-teal">
                                                    <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-8 relative">
                                            <div className="relative z-10 mt-2">
                                                <h3 className="text-2xl font-black font-nunito text-zlendo-grey-dark mb-2">{dim.title}</h3>
                                                <div className="text-1xl font-bold text-zlendo-teal uppercase tracking-wider mb-4">{dim.benefit}</div>
                                                <p className="text-zlendo-grey-medium font-medium leading-relaxed mb-8 min-h-[80px]">
                                                    {dim.longDesc}
                                                </p>
                                                <Link href={getPath(dim.link)} className="w-full py-4 rounded-xl border-2 border-dashed border-black/5 font-bold text-zlendo-grey-medium hover:border-zlendo-teal hover:text-zlendo-teal transition-colors flex items-center justify-center gap-2 group-hover:bg-zlendo-teal/5 text-center">
                                                    {dim.cta} <ArrowRight className="w-4 h-4 ml-2 inline" />
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                            <div className="min-w-[20px] md:hidden" />
                        </div>
                    </div>
                </section>

                {/* TEMPLATES / INSPIRATION */}
                <section className="container-custom mt-16 mb-16 md:mt-24 md:mb-24 px-4 text-center">
                    <div className="max-w-4xl mx-auto mb-6 md:mb-10">
                        <h2 className="text-3xl md:text-5xl font-black font-nunito text-zlendo-grey-dark mb-3 md:mb-4 leading-tight">
                            A wide range of home design <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-emerald-600">ideas available!</span>
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
                                    ? 'bg-zlendo-teal text-white border-zlendo-teal shadow-lg shadow-zlendo-teal/20 scale-105'
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
                                            className={`${item.colSpan} ${item.rowSpan} relative group rounded-[24px] md:rounded-[32px] overflow-hidden cursor-pointer shadow-lg block h-[260px] md:h-full`}
                                        >
                                            <img
                                                src={item.img}
                                                alt={`${item.title} - Zlendo Realty 3D Design`}
                                                width={1200}
                                                height={800}
                                                loading="lazy"
                                                decoding="async"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                onError={(event) => {
                                                    event.currentTarget.onerror = null;
                                                    event.currentTarget.src = '/assets/home/living-room-3d.webp';
                                                }}
                                            />
                                            <div className={`absolute inset-0 transition-opacity duration-500 ${item.isLarge ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 md:opacity-0 group-hover:opacity-100' : 'bg-black/40 opacity-0 group-hover:opacity-100'}`} />
                                            <div className={`absolute left-0 p-6 md:p-8 transition-all duration-500 ${item.isLarge ? 'bottom-0 translate-y-4 md:translate-y-8 group-hover:translate-y-0 opacity-100 md:opacity-0 group-hover:opacity-100' : 'bottom-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100'}`}>
                                                {item.isLarge && <h3 className="text-white text-xl md:text-2xl font-black mb-2">{item.title}</h3>}
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

                {/* HOW TO SECTION */}
                <section className="container-custom mb-10 md:mb-16 px-4 text-center">
                    <div className="max-w-4xl mx-auto mb-6">
                        <h2 className="text-4xl md:text-5xl font-black font-nunito text-zlendo-grey-dark mb-6">{howToTitle}</h2>
                        <p className="text-xl text-zlendo-grey-medium font-bold opacity-80 leading-relaxed">{howToSubtitle}</p>
                    </div>
                </section>

                {/* FEATURE SECTIONS */}
                {resolvedFeatures.map((feature, idx) => (
                    <section key={idx} className="container-custom mb-16 md:mb-24 px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${feature.reverse ? 'lg:flex-row-reverse' : ''}`}
                        >
                            <div className="flex-1 text-center lg:text-left">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-zlendo-teal/10 text-zlendo-teal font-black text-xs uppercase tracking-widest mb-3 border border-zlendo-teal/20">
                                    {feature.section}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-black font-nunito text-zlendo-grey-dark mb-3 leading-tight">{feature.title}</h3>
                                <p className="text-base md:text-lg text-zlendo-grey-medium font-bold opacity-70 mb-5 leading-relaxed max-w-xl mx-auto lg:mx-0">{feature.description}</p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 text-left max-w-lg mx-auto lg:mx-0">
                                    {feature.howItWorks.map((step: string) => (
                                        <li key={step} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                                <div className="w-2 h-2 rounded-full bg-zlendo-teal" />
                                            </div>
                                            <span className="text-base font-bold text-zlendo-grey-dark opacity-80">{step}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href={getPath(feature.ctaLink || SIGNUP_URL)} className="inline-flex items-center gap-2 text-zlendo-teal font-black text-lg group hover:gap-4 transition-all">
                                    {feature.cta} <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                            <div className="flex-1 w-full relative perspective-1000">
                                <div className={`absolute top-0 w-full h-full bg-black/[0.03] rounded-[32px] border border-black/[0.05] -translate-x-4 -translate-y-4 md:-translate-x-8 md:-translate-y-8 z-0 transition-transform duration-700 ${feature.reverse ? 'translate-x-4 md:translate-x-8' : ''}`} />
                                <motion.div whileHover={{ y: -10 }} className="relative z-10 bg-white rounded-[32px] border border-black/[0.08] shadow-2xl overflow-hidden p-3">
                                    <div className="absolute top-0 left-0 right-0 h-14 bg-white border-b border-black/[0.05] flex items-center px-6 gap-2 z-20">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" /><div className="w-3 h-3 rounded-full bg-[#FFBD2E]" /><div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                                        </div>
                                    </div>
                                    <div className="mt-12 rounded-2xl overflow-hidden bg-gray-50 aspect-[4/3] group relative">
                                        <img
                                            src={feature.imageUrl ? urlFor(feature.imageUrl).url() : constructFullBlobUrl(feature.img)}
                                            alt={`${feature.title} - Zlendo Realty 3D Home Design Feature`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 transform-gpu"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </section>
                ))}

                {/* COMPARISON SECTION */}
                <section className="bg-white py-16 md:py-28 relative rounded-[60px] md:rounded-[100px_100px_0_0] overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-full bg-[#FAFFFD]" />
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-zlendo-teal/10 to-blue-200/20 blur-[130px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-rose-100 to-orange-100 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
                    <div className="container-custom relative z-10 px-4">
                        <div className="text-center mb-12 md:mb-16">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zlendo-teal/5 border border-zlendo-teal/10 mb-6">
                                <ShieldCheck className="w-4 h-4 text-zlendo-teal" />
                                <span className="text-[10px] font-black text-zlendo-teal uppercase tracking-[0.3em]">{comparisonBadge}</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black font-nunito text-zlendo-grey-dark mb-8 tracking-tighter leading-[0.9]">
                                {comparisonTitle} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-500">{comparisonHighlight}</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-zlendo-grey-medium font-bold max-w-2xl mx-auto leading-relaxed opacity-80 text-center">{comparisonSubtitle}</p>
                        </div>
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                                {resolvedComparisonRows.map((row, i) => (
                                    <div key={i} className="group relative bg-white rounded-[40px] p-8 md:p-10 border border-black/[0.04] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,168,132,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${row.img} opacity-10 blur-[40px] rounded-full translate-x-8 -translate-y-8 transition-transform duration-700`} />
                                        <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                                            <div className="flex items-start justify-between">
                                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${row.img} flex items-center justify-center text-white shadow-lg shrink-0`}>
                                                    {(() => {
                                                        const RowIcon = iconMap[row.iconName] || Zap;
                                                        return <RowIcon className="w-8 h-8" />;
                                                    })()}
                                                </div>
                                                <h4 className="text-2xl font-black font-nunito text-zlendo-grey-dark ml-6 md:ml-0">{row.title}</h4>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="p-4 rounded-2xl bg-red-50 border border-red-100/50">
                                                    <div className="text-[10px] font-black uppercase text-red-500 tracking-widest mb-1 opacity-70">{comparisonOldWayLabel}</div>
                                                    <div className="text-lg font-bold text-red-900/60 line-through decoration-red-300 text-left">{row.trad}</div>
                                                </div>
                                                <div className="relative">
                                                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-zlendo-teal rounded-full" />
                                                    <div className="pl-4 text-left">
                                                        <div className="text-[10px] font-black uppercase text-zlendo-teal tracking-widest mb-1">{comparisonNewWayLabel}</div>
                                                        <div className="text-xl font-black text-zlendo-grey-dark">{row.zlendo}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHO IT'S FOR — AUDIENCE SEGMENTATION */}
                {(() => {
                    const audienceSegments = [
                        {
                            title: "Homeowners",
                            icon: Users,
                            gradient: "from-emerald-500 to-teal-600",
                            lightGradient: "from-emerald-50 to-teal-50",
                            accentColor: "text-emerald-600",
                            features: [
                                "Visualize your dream home in 3D before construction begins",
                                "Vastu-compliant floor plans with instant scoring",
                                "Realistic interior views for every room — bedroom, kitchen, pooja room",
                                "Accurate cost estimation to plan your budget confidently"
                            ]
                        },
                        {
                            title: "Architects",
                            icon: PenTool,
                            gradient: "from-blue-500 to-indigo-600",
                            lightGradient: "from-blue-50 to-indigo-50",
                            accentColor: "text-blue-600",
                            features: [
                                "Convert DWG & 2D plans to client-ready 3D in minutes",
                                "Render every elevation with accurate sun & shadow angles",
                                "Share interactive browser walkthroughs — no client login needed",
                                "Integrates seamlessly with your existing CAD workflow"
                            ]
                        },
                        {
                            title: "Interior Designers",
                            icon: Palette,
                            gradient: "from-purple-500 to-fuchsia-600",
                            lightGradient: "from-purple-50 to-fuchsia-50",
                            accentColor: "text-purple-600",
                            features: [
                                "Real-time material and texture switching in 3D preview",
                                "Go from mood board to photorealistic render in one session",
                                "10,000+ shoppable catalog items for modern Indian homes",
                                "Shareable presentation links for instant client approvals"
                            ]
                        },
                        {
                            title: "Builders & Developers",
                            icon: HardHat,
                            gradient: "from-amber-500 to-orange-600",
                            lightGradient: "from-amber-50 to-orange-50",
                            accentColor: "text-amber-600",
                            features: [
                                "Showcase units with virtual walkthroughs before breaking ground",
                                "Connect design changes to live cost impact instantly",
                                "Win bids with interactive 3D presentations clients can explore",
                                "Reduce revision disputes with clear visual documentation"
                            ]
                        },
                        {
                            title: "Promoters",
                            icon: Building2,
                            gradient: "from-rose-500 to-pink-600",
                            lightGradient: "from-rose-50 to-pink-50",
                            accentColor: "text-rose-600",
                            features: [
                                "Create compelling 3D visuals for real estate and resale marketing",
                                "Showcase remodeling potential with dynamic before/after views",
                                "Boost sales conversions with interactive property walkthroughs",
                                "Enhance property listings with professional-grade renders instantly"
                            ]
                        }
                    ];

                    const active = audienceSegments[activeAudienceTab];
                    const ActiveIcon = active.icon;

                    return (
                        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
                            {/* Background decorations */}
                            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-zlendo-teal/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-100/30 blur-[100px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

                            <div className="container-custom px-4 relative z-10">
                                {/* Header */}
                                <div className="text-center mb-10 md:mb-16">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zlendo-teal/5 border border-zlendo-teal/10 mb-6"
                                    >
                                        <Users className="w-4 h-4 text-zlendo-teal" />
                                        <span className="text-[10px] font-black text-zlendo-teal uppercase tracking-[0.3em]">Built For You</span>
                                    </motion.div>
                                    <h2 className="text-4xl md:text-6xl font-black font-nunito text-zlendo-grey-dark mb-6 tracking-tighter leading-[0.9]">
                                        Built for every <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-500">dreamer & creator</span>
                                    </h2>
                                    <p className="text-xl md:text-2xl text-zlendo-grey-medium font-bold max-w-2xl mx-auto leading-relaxed opacity-80">
                                        Whether you&apos;re planning your first home or managing large-scale projects — Zlendo Realty fits your workflow.
                                    </p>
                                </div>

                                {/* Tab Navigation */}
                                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12 md:mb-16">
                                    {audienceSegments.map((segment, idx) => {
                                        const SegIcon = segment.icon;
                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveAudienceTab(idx)}
                                                className={`flex items-center gap-2.5 px-6 md:px-8 py-3.5 rounded-full border text-sm md:text-base font-black transition-all duration-300 ${activeAudienceTab === idx
                                                    ? `bg-gradient-to-r ${segment.gradient} text-white border-transparent shadow-xl scale-105`
                                                    : 'bg-white border-black/10 text-zlendo-grey-medium hover:border-black/20 hover:bg-gray-50'
                                                    }`}
                                            >
                                                <SegIcon className="w-4 h-4" />
                                                {segment.title}
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Content Panel */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeAudienceTab}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="max-w-6xl mx-auto"
                                    >
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[40px] md:rounded-[48px] overflow-hidden border border-black/[0.04] shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
                                            {/* Left — Gradient Hero Panel */}
                                            <div className={`bg-gradient-to-br ${active.gradient} p-10 md:p-16 flex flex-col justify-center relative overflow-hidden min-h-[280px] md:min-h-[420px]`}>
                                                {/* Abstract decorative shapes */}
                                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2" />
                                                <div className="absolute bottom-0 left-0 w-60 h-60 bg-black/10 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3" />
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-white/10 rounded-full" />
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-white/5 rounded-full" />

                                                <div className="relative z-10">
                                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mb-8 border border-white/20 shadow-xl">
                                                        <ActiveIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                                                    </div>
                                                    <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-[1.1] tracking-tight">
                                                        {active.title}
                                                    </h3>
                                                    <p className="text-base md:text-lg text-white/70 font-bold leading-relaxed max-w-sm">
                                                        Tailored tools and workflows designed specifically for {active.title.toLowerCase()}.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Right — Feature Checklist */}
                                            <div className={`bg-gradient-to-br ${active.lightGradient} p-10 md:p-16 flex flex-col justify-center`}>
                                                <div className="mb-8">
                                                    <div className={`text-[11px] font-black uppercase tracking-[0.3em] ${active.accentColor} mb-2`}>Key Capabilities</div>
                                                    <div className="w-12 h-1 bg-zlendo-teal rounded-full" />
                                                </div>
                                                <ul className="space-y-6">
                                                    {active.features.map((feature, fIdx) => (
                                                        <motion.li
                                                            key={`${activeAudienceTab}-${fIdx}`}
                                                            initial={{ opacity: 0, x: 30 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: fIdx * 0.1, duration: 0.4 }}
                                                            className="flex items-start gap-4 group"
                                                        >
                                                            <div className={`mt-0.5 w-7 h-7 rounded-xl bg-gradient-to-br ${active.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                                                                <CheckCircle2 className="w-4 h-4 text-white" />
                                                            </div>
                                                            <span className="text-base md:text-lg font-bold text-zlendo-grey-dark leading-relaxed group-hover:text-black transition-colors">
                                                                {feature}
                                                            </span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                                <div className="mt-10">
                                                    <a
                                                        href={getPath(SIGNUP_URL)}
                                                        className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${active.gradient} text-white rounded-2xl font-black text-base shadow-xl hover:scale-105 transition-all group`}
                                                    >
                                                        Get Started as {active.title}
                                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </section>
                    );
                })()}

                {/* RECENT BLOG POSTS */}
                <RecentBlogPosts />

                {/* FINAL CTA */}
                <section className="bg-white pt-12 pb-8 md:pt-18 md:pb-18 px-4">
                    <div className="container-custom max-w-6xl">
                        <div className="bg-white border border-gray-100 rounded-[32px] md:rounded-[48px] p-3 md:p-16 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
                            <div className="flex-1 text-center md:text-left space-y-3 md:space-y-8">
                                <h2 className="text-4xl md:text-5xl font-black font-nunito text-zlendo-grey-dark leading-tight">{ctaTitle}</h2>
                                <p className="text-xl font-bold text-zlendo-grey-medium max-w-lg mx-auto md:mx-0 opacity-70">{ctaSubtitle}</p>
                                <div className="flex justify-center md:justify-start">
                                    <a href={getPath(ctaLink)} className="bg-[#1AE16C] text-zlendo-grey-dark px-10 py-5 rounded-full font-black text-lg shadow-[0_10px_30px_rgba(26,225,108,0.3)] hover:scale-105 transition-all inline-block">
                                        {ctaButtonLabel}
                                    </a>
                                </div>
                            </div>
                            <div className="flex-1 w-full max-w-md">
                                <img src={ctaImageUrl.startsWith('http') ? ctaImageUrl : constructFullBlobUrl(ctaImageUrl)} alt={ctaSubtitle || "Start designing your house with Zlendo Realty 3D Platform"} className="w-full h-auto drop-shadow-2xl" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="py-18 md:py-24 bg-white">
                    <div className="container-custom px-6 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-center text-zlendo-grey-dark mb-12">{faqTitle}</h2>
                        <FaqAccordion faqs={resolvedFaqs} />
                    </div>
                </section>

            </main>
        </div>
    );
}
