'use client';

import { motion } from 'framer-motion';
import { Ruler, TrendingUp, Layout, Home, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { useCountry } from '@/lib/context/CountryContext';
import CaseStudySection from '@/components/common/CaseStudySection';
import { urlFor } from '@/lib/sanity/image';
import FaqAccordion from '../../components/FaqAccordion';
import JsonLd from '@/components/common/JsonLd';
import { ArrowRight, Compass } from 'lucide-react';

interface VastuOptimizationClientProps {
    cms: any;
}

export default function VastuOptimizationClient({ cms }: VastuOptimizationClientProps) {
    const { paths } = useCountry();
    const accentColorClass = 'zlendo-teal';
    const bgAccentClass = 'bg-zlendo-teal/5';

    // Set document title and meta tags for SEO from CMS or defaults
    useEffect(() => {
        let seoTitle = cms?.seoTitle ?? 'Vastu House Plan Design & Vastu Solutions | Zlendo Realty';

        // Clean up brand name duplication if present in the CMS
        if (seoTitle.includes('Zlendo Realty – Design Now | Zlendo Realty') ||
            seoTitle.includes('Zlendo Realty - Design Now | Zlendo Realty') ||
            seoTitle.includes('Design Now | Zlendo Realty')) {
            seoTitle = 'Vastu House Plan Design & Vastu Solutions | Zlendo Realty';
        } else if (seoTitle.includes('Zlendo Realty') && (seoTitle.match(/Zlendo Realty/g) || []).length > 1) {
            // Strip duplicate trailing brand name
            seoTitle = seoTitle.replace(/\s*\|\s*Zlendo Realty\s*$/, '').trim();
        }

        document.title = seoTitle;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', cms?.seoDescription ?? 'Ensure your home supports peace, health, and prosperity through data-driven Vastu optimization and visual clarity. Get expert Vastu layout tips.');
        }
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', cms?.seoKeywords ?? 'vastu optimization, vastu shastra, 3d spatial planning, zlendo realty');
        }
    }, [cms]);

    const iconMap: any = { Ruler, Home, Sparkles, Layout, TrendingUp };
    const CaseStudyIcon = iconMap[cms?.caseStudyIcon] || Ruler;

    const caseStudyData = {
        title: cms?.caseStudyTitle ?? 'Vastu Optimization',
        subtitle: cms?.caseStudySubtitle ?? 'Balancing Modern Living with Vastu Beliefs',
        icon: CaseStudyIcon,
        challenge: {
            title: cms?.challengeTitle ?? 'Fixed Layouts & Family Opinions',
            description: cms?.challengeDescription ?? 'Ananya, a 31-year-old professional, bought a new apartment with a fixed layout. While she wanted a modern, spacious home, her parents insisted on Vastu compliance for peace and well-being. The lack of visual clarity on pooja space and kitchen alignment led to hesitation and delayed the entire planning process.'
        },
        solution: {
            title: cms?.solutionTitle ?? 'Realistic Vastu Planning',
            description: cms?.solutionDescription ?? 'Zlendo Realty\'s Vastu Planner reviewed the layout and suggested workable adjustments without structural changes. By optimizing furniture placement and sleep directions, Ananya showed her parents clear visual plans. This alignment of belief with practicality brought confidence and emotional comfort to the whole family.'
        },
        stats: cms?.stats?.length ? cms.stats : [
            { label: 'Decision Speed', value: '2x Faster' },
            { label: 'Family Consensus', value: '100%' }
        ],
        image: cms?.caseStudyImage ? urlFor(cms.caseStudyImage).url() : '/assets/vastu/vastu-case-study.webp',
        imageAlt: cms?.caseStudyImage?.alt || 'Vastu Compliant House Plan and 3D Optimization rendering'
    };

    const faqs = [
        { q: "Can I optimize an existing home without structural changes?", a: "Yes, Zlendo Realty's Vastu Optimization tool helps you visually test non-structural remedies like mirroring placements, changing color palettes, and repositioning heavy furniture to align with Vastu principles." },
        { q: "Is this suitable for both apartments and independent houses?", a: "Absolutely. Our platform can calculate Vastu zones and energy flows regardless of whether you upload a compact apartment layout or a multi-story villa plan." },
        { q: "Does the AI give directional suggestions?", a: "Yes, by marking your true north on the floor plan, our system automatically overlays a Vastu grid (Shastra Mandala) to highlight optimal zones for bedrooms, kitchens, and pooja rooms." }
    ];

    const faqSchema = {
        "@context": "https://schema.org/",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <div className="bg-white selection:bg-zlendo-teal/10">
            <JsonLd schema={faqSchema} />
            <div className="min-h-screen relative pt-12">
                {/* Global Background Accents */}
                <div className="fixed inset-0 pointer-events-none opacity-[0.02]"
                    style={{ backgroundImage: `radial-gradient(var(--${accentColorClass}) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
                />

                {/* Hero Section */}
                <section className="section-padding py-12 relative overflow-hidden">
                    <div className="container-custom relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${bgAccentClass} border border-${accentColorClass}/10 mb-8`}
                        >
                            <TrendingUp className={`w-4 h-4 text-${accentColorClass}`} />
                            <span className={`text-xs font-black text-${accentColorClass} uppercase tracking-[0.2em]`}>
                                {cms?.heroBadgeText ?? 'Individual Solution'}
                            </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-[28px] md:text-[42px] lg:text-[56px] font-black font-nunito text-zlendo-grey-dark leading-none tracking-tighter mb-8"
                        >
                            {cms?.heroTitle ?? 'Ancient Wisdom.'} <br />
                            <span className={`text-${accentColorClass} italic`}>
                                {cms?.heroTitleHighlight ?? 'Modern Harmony.'}
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl text-zlendo-grey-medium font-medium max-w-3xl mx-auto leading-relaxed"
                        >
                            {cms?.heroParagraph ?? 'Ensure your home supports peace, health, and prosperity through data-driven Vastu optimization and visual clarity.'}
                        </motion.p>
                    </div>
                </section>

                {/* Case Study Section */}
                <CaseStudySection
                    data={caseStudyData}
                    accentColorClass={accentColorClass}
                    bgAccentClass={bgAccentClass}
                />

                {/* Internal Cross-Linking: Integrated Solutions */}
                <section className="py-16 bg-slate-50 relative overflow-hidden">
                    <div className="container-custom px-6 relative z-10">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-black font-nunito text-zlendo-grey-dark mb-4">
                                Perfect Your Vastu Alignment
                            </h2>
                            <p className="text-lg text-zlendo-grey-medium font-medium">
                                Combine these core tools to instantly preview Vastu remedies and spatial changes without altering your structure.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            <Link href="/in/products/vastu" className="group block bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 transition-all">
                                <div className={`w-12 h-12 rounded-xl bg-${accentColorClass}/10 flex items-center justify-center text-${accentColorClass} mb-6`}>
                                    <Compass className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black text-zlendo-grey-dark mb-3 group-hover:text-zlendo-teal transition-colors">Vastu Optimizer</h3>
                                <p className="text-sm font-medium text-slate-500 mb-6">Instantly overlay the Vastu grid on your floor plan to identify zones of harmony.</p>
                                <span className="text-zlendo-teal font-black text-sm uppercase tracking-widest flex items-center gap-2">Optimize Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                            </Link>

                            <Link href="/in/products/floor-planner" className="group block bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 transition-all">
                                <div className={`w-12 h-12 rounded-xl bg-${accentColorClass}/10 flex items-center justify-center text-${accentColorClass} mb-6`}>
                                    <Layout className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black text-zlendo-grey-dark mb-3 group-hover:text-zlendo-teal transition-colors">AI Floor Planner</h3>
                                <p className="text-sm font-medium text-slate-500 mb-6">Modify internal wall placements and rearrange layouts to improve Vastu compliance.</p>
                                <span className="text-zlendo-teal font-black text-sm uppercase tracking-widest flex items-center gap-2">Try Planner <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                            </Link>

                            <Link href="/in/products/room-styler" className="group block bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 transition-all">
                                <div className={`w-12 h-12 rounded-xl bg-${accentColorClass}/10 flex items-center justify-center text-${accentColorClass} mb-6`}>
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black text-zlendo-grey-dark mb-3 group-hover:text-zlendo-teal transition-colors">AI Room Styler</h3>
                                <p className="text-sm font-medium text-slate-500 mb-6">Test specific Vastu-approved color palettes and material combinations instantly.</p>
                                <span className="text-zlendo-teal font-black text-sm uppercase tracking-widest flex items-center gap-2">Style Room <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ Block */}
                <section className="py-16 bg-white">
                    <div className="container-custom px-6 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-black text-center text-zlendo-grey-dark mb-8">Frequently Asked Questions</h2>
                        <FaqAccordion faqs={faqs} />
                    </div>
                </section>

                {/* Final CTA Banner */}
                <section className="section-padding py-12 bg-zlendo-grey-dark relative overflow-hidden rounded-[80px_80px_0_0]">
                    <div className={`absolute inset-0 bg-${accentColorClass}/5 blur-[100px]`} />
                    <div className="container-custom relative z-10 text-center space-y-12">
                        <h2 className="text-5xl sm:text-7xl font-black font-nunito text-white leading-tight tracking-tight max-w-4xl mx-auto">
                            {cms?.ctaTitle ?? 'Ready to '}
                            <span className={`text-${accentColorClass} italic`}>
                                {cms?.ctaTitleHighlight ?? 'Optimize Your Energy?'}
                            </span>
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href={SIGNUP_URL}
                                className="btn-primary py-5 px-12 text-lg rounded-3xl text-center"
                            >
                                {cms?.ctaPrimaryLabel ?? 'Get Started for Free'}
                            </a>
                            <Link
                                href={paths.enterpriseDemo}
                                className="btn-orange py-5 px-12 text-lg rounded-3xl text-center"
                            >
                                {cms?.ctaSecondaryLabel ?? 'Schedule a Demo'}
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

