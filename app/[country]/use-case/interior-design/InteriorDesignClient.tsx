'use client';

import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Layout, Home } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { useCountry } from '@/lib/context/CountryContext';
import CaseStudySection from '@/components/common/CaseStudySection';
import { urlFor } from '@/lib/sanity/image';
import FaqAccordion from '../../components/FaqAccordion';
import JsonLd from '@/components/common/JsonLd';
import { ArrowRight, Box } from 'lucide-react';

interface InteriorDesignClientProps {
    cms: any;
}

export default function InteriorDesignClient({ cms }: InteriorDesignClientProps) {
    const { country, paths } = useCountry();
    const isIndiaSite = typeof country !== "undefined" ? country === "in" : false;
    const accentColorClass = 'zlendo-teal';
    const bgAccentClass = 'bg-zlendo-teal/5';

    // Set document title and meta tags for SEO from CMS or defaults
    useEffect(() => {
        document.title = cms?.seoTitle ?? 'Interior Design Use Cases';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', cms?.seoDescription ?? 'From first-time homebuyers to remote professionals, see how we transform spatial uncertainty into design confidence.');
        }
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', cms?.seoKeywords ?? 'interior design, spatial planning, 3d visualization, zlendo realty');
        }
    }, [cms]);

    const iconMap: any = { Sparkles, TrendingUp, Layout, Home };

    // Initial fallbacks for the original content
    const caseStudy1Fallback = {
        title: 'Interior Design',
        subtitle: 'First-Time Homebuyer',
        icon: Sparkles,
        challenge: {
            title: 'The Uncertainty of First-Time Ownership',
            description: 'Ramesh, a 29-year-old professional, struggled with flat, technical builder plans. He couldn\'t visualize if a sofa would block movement or if wardrobes would make bedrooms feel cramped. This lack of spatial clarity led to hesitation and the fear of making expensive, permanent mistakes.'
        },
        solution: {
            title: '3D Visualization & Space Planning',
            description: 'Using Zlendo Realty, Ramesh transformed his 2D plan into a realistic 3D apartment. He explored layout options, checked walking clearance, and rearranged furniture instantly. This removed the guesswork, allowing him to finalize his plan with complete peace of mind before execution.'
        },
        stats: [
            { label: 'Spatial Errors Avoided', value: '100%' },
            { label: 'Planning Time Reduced', value: '60%' }
        ],
        image: '/assets/interior-design/interior-case-study-1.webp',
        imageAlt: 'Interior Design Layout planning rendering with smart space utilization'
    };

    const caseStudy2Fallback = {
        title: 'Interior Design',
        subtitle: 'Compact WFH Living',
        icon: Sparkles,
        challenge: {
            title: 'The Work-From-Home Struggle',
            description: 'A young professional couple in a compact 2BHK found their home cluttered and stressful after transitioning to full-time remote work. Desks in the living room caused noise issues, while work equipment in the bedroom affected rest. They feared losing comfort while trying to improve productivity in their limited space.'
        },
        solution: {
            title: 'Digital Layout Optimization',
            description: 'With Zlendo Realty, the couple digitally tested multiple layout possibilities. They analyzed desk placements for movement and lighting, and reviewed storage options through realistic walkthroughs. This created a dedicated work zone without sacrificing the openness or comfort of their daily living space.'
        },
        stats: [
            { label: 'Productivity Lift', value: '40%' },
            { label: 'Space Utilization', value: '100%' }
        ],
        image: '/assets/interior-design/interior-case-study-2.webp',
        imageAlt: 'Compact Work from Home Interior Design 3D visualization'
    };

    const faqs = [
        { q: "Can I try out different interior design styles?", a: "Yes, our Room Styler feature allows you to seamlessly switch between Minimalist, Scandinavian, Modern Contemporary, and other popular Indian interior styles with a single click." },
        { q: "What if my room has an unusual layout?", a: "No problem. Our 3D floor planner allows you to drag, drop, and resize walls to exactly match your floor plan, including irregular angles or curved walls." },
        { q: "Are the furniture items in the 3D viewer accurately sized?", a: "Yes, all assets in our 10,000+ item library are modeled using standard dimensions. You can also customize dimensions to ensure the sofa or bed you intend to buy fits perfectly." }
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
        "name": cms?.seoTitle ?? 'Interior Design 3D Spatial Planning Use Case',
        "description": cms?.seoDescription ?? 'Transform spatial uncertainty into design confidence with fotorealistic 3D interior design previews.'
    };

    // Primary case study from top-level fields
    const primaryCaseStudy = {
        title: cms?.caseStudyTitle ?? caseStudy1Fallback.title,
        subtitle: cms?.caseStudySubtitle ?? caseStudy1Fallback.subtitle,
        icon: iconMap[cms?.caseStudyIcon] || caseStudy1Fallback.icon,
        challenge: {
            title: cms?.challengeTitle ?? caseStudy1Fallback.challenge.title,
            description: cms?.challengeDescription ?? caseStudy1Fallback.challenge.description
        },
        solution: {
            title: cms?.solutionTitle ?? caseStudy1Fallback.solution.title,
            description: cms?.solutionDescription ?? caseStudy1Fallback.solution.description
        },
        stats: cms?.stats?.length ? cms.stats : caseStudy1Fallback.stats,
        image: cms?.caseStudyImage ? urlFor(cms.caseStudyImage).url() : caseStudy1Fallback.image,
        imageAlt: cms?.caseStudyImage?.alt || caseStudy1Fallback.imageAlt
    };

    // Optional additional case studies
    const additionalResults = cms?.additionalCaseStudies?.map((cs: any) => ({
        ...cs,
        icon: iconMap[cs.iconName] || Sparkles,
        image: cs.image ? urlFor(cs.image).url() : caseStudy2Fallback.image,
        imageAlt: cs.image?.alt || caseStudy2Fallback.imageAlt,
        challenge: { title: cs.challengeTitle, description: cs.challengeDescription },
        solution: { title: cs.solutionTitle, description: cs.solutionDescription }
    })) || (cms?.caseStudyTitle ? [] : [caseStudy2Fallback]); // Only show fallback if CMS is empty

    const allCaseStudies = [primaryCaseStudy, ...additionalResults];

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
                            {cms?.heroTitle ?? 'Curate Your Perfect'} <br />
                            <span className={`text-${accentColorClass} italic`}>
                                {cms?.heroTitleHighlight ?? 'Interior Lifestyle.'}
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl text-zlendo-grey-medium font-medium max-w-3xl mx-auto leading-relaxed"
                        >
                            {cms?.heroParagraph ?? 'From first-time homebuyers to remote professionals, see how we transform spatial uncertainty into design confidence.'}
                        </motion.p>
                    </div>
                </section>

                {/* Case Studies */}
                {allCaseStudies.map((cs: any, index: number) => (
                    <div key={index}>
                        <CaseStudySection
                            data={cs}
                            accentColorClass={accentColorClass}
                            bgAccentClass={bgAccentClass}
                            reverse={index % 2 !== 0}
                        />
                        {index < allCaseStudies.length - 1 && (
                            <div className="container-custom">
                                <div className="h-px bg-black/5 mx-auto w-full max-w-4xl" />
                            </div>
                        )}
                    </div>
                ))}

                {/* Internal Cross-Linking: Integrated Solutions */}
                <section className="py-16 bg-slate-50 relative overflow-hidden">
                    <div className="container-custom px-6 relative z-10">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-black font-nunito text-zlendo-grey-dark mb-4">
                                Bring Your Interior Designs to Life
                            {isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
                            <p className="text-lg text-zlendo-grey-medium font-medium">
                                Combine these core tools to instantly transform empty rooms into beautifully furnished virtual homes.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            <Link href="/in/products/room-styler" className="group block bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 transition-all">
                                <div className={`w-12 h-12 rounded-xl bg-${accentColorClass}/10 flex items-center justify-center text-${accentColorClass} mb-6`}>
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black text-zlendo-grey-dark mb-3 group-hover:text-zlendo-teal transition-colors">AI Room Styler</h3>
                                <p className="text-sm font-medium text-slate-500 mb-6">Automatically furnish rooms in distinct themes using our intelligent algorithm.</p>
                                <span className="text-zlendo-teal font-black text-sm uppercase tracking-widest flex items-center gap-2">Design Room <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                            </Link>

                            <Link href="/in/products/interiors-exteriors" className="group block bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 transition-all">
                                <div className={`w-12 h-12 rounded-xl bg-${accentColorClass}/10 flex items-center justify-center text-${accentColorClass} mb-6`}>
                                    <Home className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black text-zlendo-grey-dark mb-3 group-hover:text-zlendo-teal transition-colors">Interiors & Exteriors</h3>
                                <p className="text-sm font-medium text-slate-500 mb-6">Harmonize the inside of your home with stunning exterior architectural finishes.</p>
                                <span className="text-zlendo-teal font-black text-sm uppercase tracking-widest flex items-center gap-2">View Tool <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                            </Link>

                            <Link href="/in/products/2d-to-3d" className="group block bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 transition-all">
                                <div className={`w-12 h-12 rounded-xl bg-${accentColorClass}/10 flex items-center justify-center text-${accentColorClass} mb-6`}>
                                    <Box className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black text-zlendo-grey-dark mb-3 group-hover:text-zlendo-teal transition-colors">2D to 3D Converts</h3>
                                <p className="text-sm font-medium text-slate-500 mb-6">Upload a flat 2D blueprint and watch it become a living 3D space instantly.</p>
                                <span className="text-zlendo-teal font-black text-sm uppercase tracking-widest flex items-center gap-2">Convert Plan <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
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

