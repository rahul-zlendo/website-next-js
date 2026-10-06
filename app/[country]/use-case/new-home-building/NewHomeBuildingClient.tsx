'use client';

import { motion } from 'framer-motion';
import { Home, TrendingUp, Layout, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { useCountry } from '@/lib/context/CountryContext';
import CaseStudySection from '@/components/common/CaseStudySection';
import { urlFor } from '@/lib/sanity/image';
import FaqAccordion from '../../components/FaqAccordion';
import JsonLd from '@/components/common/JsonLd';
import { ArrowRight, Box } from 'lucide-react';

interface NewHomeBuildingClientProps {
    cms: any;
}

export default function NewHomeBuildingClient({ cms }: NewHomeBuildingClientProps) {
    const { country, paths } = useCountry();
    const isIndiaSite = typeof country !== "undefined" ? country === "in" : false;
    const accentColorClass = 'zlendo-teal';
    const bgAccentClass = 'bg-zlendo-teal/5';

    // Set document title and meta tags for SEO from CMS or defaults
    useEffect(() => {
        document.title = cms?.seoTitle ?? 'New Home Building Use Cases';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', cms?.seoDescription ?? 'From foundation to final finishes, visualize every detail of your new home construction to ensure a perfect build.');
        }
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', cms?.seoKeywords ?? 'new home building, construction visualization, 3d house design, zlendo realty');
        }
    }, [cms]);

    const iconMap: any = { Home, Layout, Sparkles, TrendingUp };
    const CaseStudyIcon = iconMap[cms?.caseStudyIcon] || Home;

    const caseStudyData = {
        title: cms?.caseStudyTitle ?? 'New Home Building',
        subtitle: cms?.caseStudySubtitle ?? 'First-Time Builder Story',
        icon: CaseStudyIcon,
        challenge: {
            title: cms?.challengeTitle ?? 'The Blueprint Barrier',
            description: cms?.challengeDescription ?? 'Meena, a 31-year-old school teacher, planned to build her first independent house. While she had layout drawings, she found it hard to imagine room sizes, furniture placement, or walking flow. She feared that once construction started, correcting spatial errors would be extremely costly and stressful, leading to delayed approvals and slowed progress.'
        },
        solution: {
            title: cms?.solutionTitle ?? 'Full Visual Clarity',
            description: cms?.solutionDescription ?? 'Using Zlendo Realty, Meena converted her floor plans into clear 2D layouts and realistic 3D views before construction began. She could see room flow, walking space, and storage placement in advance. Sharing these visuals with her family helped everyone agree on the layout quickly, reducing the need for future changes and allowing construction to start with complete confidence.'
        },
        stats: cms?.stats?.length ? cms.stats : [
            { label: 'Decision Speed', value: '2x Faster' },
            { label: 'Construction Rework', value: '0%' }
        ],
        image: cms?.caseStudyImage ? urlFor(cms.caseStudyImage).url() : '/assets/new-home/new-home-case-study.webp',
        imageAlt: cms?.caseStudyImage?.alt || 'Visualizing a New Home Construction in 3D to Avoid Blueprint Errors'
    };

    const faqs = [
        { q: "Can I visualize real-world sunlight in my new home?", a: "Yes, our Realistic Renders tool allows you to simulate natural sunlight at different times of the day based on your exact geographical location and window placements." },
        { q: "How do I know if my planned furniture will fit?", a: "By using our Floor Planner, you can drop standard-sized furniture models directly into your 3D layout to accurately gauge walking clearance and room proportionality before construction." },
        { q: "Will this help me communicate with my contractor?", a: "Absolutely. Providing your contractor with a photorealistic 3D render eliminates the ambiguity of 2D plans, ensuring you both share the exact same vision for materials, finishes, and layout." }
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

    const webPageSchema = {
        "@context": "https://schema.org/",
        "@type": "WebPage",
        "name": cms?.seoTitle ?? 'New Home Building 3D Visualization Use Case',
        "description": cms?.seoDescription ?? 'From foundation to final finishes, visualize every detail of your new home construction. Ensure zero rework and perfect alignment with contractors.'
    };

    return (
        <div className="bg-white selection:bg-zlendo-teal/10">
            <JsonLd schema={faqSchema} />
            <JsonLd schema={webPageSchema} />
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
                            {cms?.heroTitle ?? 'Build Your Dream from the'} <br />
                            <span className={`text-${accentColorClass} italic`}>
                                {cms?.heroTitleHighlight ?? 'Ground Up.'}
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl text-zlendo-grey-medium font-medium max-w-3xl mx-auto leading-relaxed"
                        >
                            {cms?.heroParagraph ?? 'From foundation to final finishes, visualize every detail of your new home construction to ensure a perfect build.'}
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
                                Empower Your New Build
                            {isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
                            <p className="text-lg text-zlendo-grey-medium font-medium">
                                Eliminate construction rework by pairing these tools to secure approvals and finalize materials proactively.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            <Link href="/in/products/floor-planner" className="group block bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 transition-all">
                                <div className={`w-12 h-12 rounded-xl bg-${accentColorClass}/10 flex items-center justify-center text-${accentColorClass} mb-6`}>
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black text-zlendo-grey-dark mb-3 group-hover:text-zlendo-teal transition-colors">AI Floor Planner</h3>
                                <p className="text-sm font-medium text-slate-500 mb-6">Convert manual architectural blueprints directly into interactive 3D floor plans.</p>
                                <span className="text-zlendo-teal font-black text-sm uppercase tracking-widest flex items-center gap-2">Try Planner <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                            </Link>

                            <Link href="/in/products/realistic-renders" className="group block bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 transition-all">
                                <div className={`w-12 h-12 rounded-xl bg-${accentColorClass}/10 flex items-center justify-center text-${accentColorClass} mb-6`}>
                                    <Home className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black text-zlendo-grey-dark mb-3 group-hover:text-zlendo-teal transition-colors">Realistic Renders</h3>
                                <p className="text-sm font-medium text-slate-500 mb-6">Give your contractor an 8K visual reference for paint colors and floor tiles.</p>
                                <span className="text-zlendo-teal font-black text-sm uppercase tracking-widest flex items-center gap-2">View Tool <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                            </Link>

                            <Link href="/in/products/interiors-exteriors" className="group block bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 transition-all">
                                <div className={`w-12 h-12 rounded-xl bg-${accentColorClass}/10 flex items-center justify-center text-${accentColorClass} mb-6`}>
                                    <Box className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black text-zlendo-grey-dark mb-3 group-hover:text-zlendo-teal transition-colors">Interiors & Exteriors</h3>
                                <p className="text-sm font-medium text-slate-500 mb-6">Ensure your building's exterior elevation matches your interior styling.</p>
                                <span className="text-zlendo-teal font-black text-sm uppercase tracking-widest flex items-center gap-2">View Tool <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ Block */}
                <section className="py-16 bg-white">
                    <div className="container-custom px-6 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-black text-center text-zlendo-grey-dark mb-8">Frequently Asked Questions{isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
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
                                {cms?.ctaTitleHighlight ?? 'Build with Confidence?'}
                            </span>
                        {isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
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

