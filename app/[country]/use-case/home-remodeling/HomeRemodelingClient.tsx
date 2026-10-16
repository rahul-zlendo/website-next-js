'use client';

import { motion } from 'framer-motion';
import { Layout, TrendingUp, Home, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { useCountry } from '@/lib/context/CountryContext';
import CaseStudySection from '@/components/common/CaseStudySection';
import { urlFor } from '@/lib/sanity/image';
import FaqAccordion from '../../components/FaqAccordion';
import JsonLd from '@/components/common/JsonLd';
import { ArrowRight } from 'lucide-react';

interface HomeRemodelingClientProps {
    cms: any;
}

export default function HomeRemodelingClient({ cms }: HomeRemodelingClientProps) {
    const { country, paths } = useCountry();
    const isIndiaSite = typeof country !== "undefined" ? country === "in" : false;
    const accentColorClass = 'zlendo-teal';
    const bgAccentClass = 'bg-zlendo-teal/5';

    // Set document title and meta tags for SEO from CMS or defaults
    useEffect(() => {
        document.title = cms?.seoTitle ?? 'Home Remodeling Use Cases';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', cms?.seoDescription ?? 'Visualize renovations in photorealistic 3D before you start building. See how Zlendo Realty helps homeowners avoid costly changes and rework.');
        }
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', cms?.seoKeywords ?? 'home remodeling, renovation visualization, 3d home design, spatial planning, zlendo realty');
        }
    }, [cms]);

    const iconMap: any = { Layout, Home, Sparkles, TrendingUp };
    const CaseStudyIcon = iconMap[cms?.caseStudyIcon] || Layout;

    const caseStudyData = {
        title: cms?.caseStudyTitle ?? 'Home Remodeling',
        subtitle: cms?.caseStudySubtitle ?? 'Homeowner Story',
        icon: CaseStudyIcon,
        challenge: {
            title: cms?.challengeTitle ?? 'Costly Late-Stage Changes',
            description: cms?.challengeDescription ?? 'Ravi, a 36-year-old IT employee, planned to remodel his 12-year-old apartment including a modular kitchen and wardrobes. However, he struggled to visualize cabinet depth and walking space from 2D drawings. Once renovation started, wardrobe shutters blocked movement and the kitchen felt narrow, leading to increased costs, wasted materials, and significant stress.'
        },
        solution: {
            title: cms?.solutionTitle ?? '3D Spatial Verification',
            description: cms?.solutionDescription ?? 'Ravi used Zlendo Realty to convert his home into accurate 2D plans and realistic 3D views. He reviewed furniture placement and walking clearance digitally, testing multiple layout options before continuing work. This ensured smooth execution, predictable costs, and improved timelines.'
        },
        stats: cms?.stats?.length ? cms.stats : [
            { label: 'Rework Costs Saved', value: '100%' },
            { label: 'Decision Speed', value: '2x Faster' }
        ],
        image: urlFor(cms?.caseStudyImage).url() || '/assets/remodeling/remodeling-case-study.webp',
        imageAlt: cms?.caseStudyImage?.alt || 'Before and After Photorealistic 3D Render of Home Remodeling Project in India'
    };

    const faqs = [
        { q: "Can I visualize structural changes like removing walls?", a: "Yes, Zlendo Realty's 3D spatial planning allows you to visualize structural modifications instantly. Our AI highlights load-bearing constraints and estimates how opening a wall impacts lighting and living space." },
        { q: "Do I need accurate blueprints to start?", a: "No, you can upload rough hand-drawn sketches with basic room dimensions. Our proprietary AI will automatically convert it into a precise 2D layout and an immersive 3D walkthrough." },
        { q: "Can I estimate renovation costs?", a: "Absolutely. Integrated directly into the platform, our Cost Estimator maps real-world Indian market rates to the materials and dimensions defined in your 3D remodel, giving you an itemized BOQ." }
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
        "name": cms?.seoTitle ?? 'Home Remodeling 3D Visualization Use Case',
        "description": cms?.seoDescription ?? 'Visualize your home renovations in photorealistic 3D. Save costs on rework with intelligent spatial planning.'
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
                            {cms?.heroTitle ?? 'Breathe New Life into '} <br />
                            <span className={`text-${accentColorClass} italic`}>
                                {cms?.heroTitleHighlight ?? 'Your Home.'}
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl text-zlendo-grey-medium font-medium max-w-3xl mx-auto leading-relaxed"
                        >
                            {cms?.heroParagraph ?? 'Visualize renovations in photorealistic 3D before you start building, ensuring your new space perfectly integrates with the old.'}
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
                                Empower Your Remodeling Journey
                            {isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
                            <p className="text-lg text-zlendo-grey-medium font-medium">
                                Combine these core tools to achieve zero-rework renovations and photorealistic confidence before construction starts.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            <Link href="/in/products/floor-planner" className="group block bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 transition-all">
                                <div className={`w-12 h-12 rounded-xl bg-${accentColorClass}/10 flex items-center justify-center text-${accentColorClass} mb-6`}>
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black text-zlendo-grey-dark mb-3 group-hover:text-zlendo-teal transition-colors">AI Floor Planner</h3>
                                <p className="text-sm font-medium text-slate-500 mb-6">Convert your rough renovation concepts into exact digital floor plans effortlessly.</p>
                                <span className="text-zlendo-teal font-black text-sm uppercase tracking-widest flex items-center gap-2">Try Planner <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                            </Link>

                            <Link href="/in/products/realistic-renders" className="group block bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 transition-all">
                                <div className={`w-12 h-12 rounded-xl bg-${accentColorClass}/10 flex items-center justify-center text-${accentColorClass} mb-6`}>
                                    <Home className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black text-zlendo-grey-dark mb-3 group-hover:text-zlendo-teal transition-colors">Realistic Renders</h3>
                                <p className="text-sm font-medium text-slate-500 mb-6">Test different color palettes, tiles, and furniture layouts in stunning 8K detail.</p>
                                <span className="text-zlendo-teal font-black text-sm uppercase tracking-widest flex items-center gap-2">View Tool <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                            </Link>

                            <Link href="/in/products/cost-estimator" className="group block bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 transition-all">
                                <div className={`w-12 h-12 rounded-xl bg-${accentColorClass}/10 flex items-center justify-center text-${accentColorClass} mb-6`}>
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black text-zlendo-grey-dark mb-3 group-hover:text-zlendo-teal transition-colors">Cost Estimator</h3>
                                <p className="text-sm font-medium text-slate-500 mb-6">Generate real-time BoQ insights aligned with your renovation choices.</p>
                                <span className="text-zlendo-teal font-black text-sm uppercase tracking-widest flex items-center gap-2">Calculate Cost <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
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
                                {cms?.ctaTitleHighlight ?? 'Experience the Future?'}
                            </span>
                        {isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href={SIGNUP_URL}
                                className="btn-primary py-5 px-12 text-lg rounded-3xl text-center"
                            >
                                {cms?.ctaPrimaryLabel ?? 'I am Building a Home'}
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

