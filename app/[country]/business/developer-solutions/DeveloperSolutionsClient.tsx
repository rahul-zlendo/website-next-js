'use client';

import { motion } from 'framer-motion';
import { Cpu, TrendingUp, Layout, Home, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect, Fragment } from 'react';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { useCountry } from '@/lib/context/CountryContext';
import CaseStudySection from '@/components/common/CaseStudySection';
import { urlFor } from '@/lib/sanity/image';
import FaqAccordion from '@/app/[country]/components/FaqAccordion';
import JsonLd from '@/components/common/JsonLd';

interface DeveloperSolutionsClientProps {
    cms: any;
}

export default function DeveloperSolutionsClient({ cms }: DeveloperSolutionsClientProps) {
    const { paths } = useCountry();
    const accentColorClass = 'zlendo-orange';
    const bgAccentClass = 'bg-zlendo-orange/5';

    // Set document title and meta tags for SEO from CMS or defaults
    useEffect(() => {
        document.title = cms?.seoTitle ?? 'Developer Solutions';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', cms?.seoDescription ?? 'Transform complex design concepts into hyper-realistic visual experiences that eliminate confusion and accelerate project lifecycles.');
        }
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', cms?.seoKeywords ?? 'developer solutions, real estate marketing, 3d property visualization, architectural renders, zlendo realty');
        }
    }, [cms]);

    const iconMap: any = { Cpu, TrendingUp, Layout, Home, Sparkles };
    const CaseStudyIcon = iconMap[cms?.caseStudyIcon] || Cpu;

    const primaryCaseStudy = {
        title: cms?.caseStudyTitle ?? 'Developer Solutions',
        subtitle: cms?.caseStudySubtitle ?? 'Realistic Renders for Design Presentation',
        icon: CaseStudyIcon,
        challenge: {
            title: cms?.challengeTitle ?? 'The Presentation Gap',
            description: cms?.challengeDescription ?? 'A marketing and design business struggled to present design ideas to clients in a clear and convincing way. Traditional 2D drawings and basic 3D diagrams took days to prepare yet failed to show colors, lighting, and textures. This lack of clarity led to repeated explanations, misunderstood intent, and long revision cycles that slowed down project delivery.'
        },
        solution: {
            title: cms?.solutionTitle ?? 'High-Impact Visual Storytelling',
            description: cms?.solutionDescription ?? 'By adopting Zlendo Realty\'s Realistic Renders, the team created lifelike interior and exterior visuals in record time. These renders clearly showcased finishes and spatial mood from the first presentation. Clients understood the final look instantly, which minimized back-and-forth discussions, limited unnecessary revisions, and significantly accelerated project approvals.'
        },
        stats: cms?.stats?.length ? cms.stats : [
            { label: 'Approval Speed', value: '3x Faster' },
            { label: 'Revision Reduction', value: '75%' }
        ],
        image: cms?.caseStudyImage ? urlFor(cms.caseStudyImage).url() : '/assets/use-cases/developers/developer-visual.webp',
        imageAlt: 'Zlendo Realty 3D rendering for property development marketing and sales'
    };

    const faqs = [
        { q: "Can we integrate 3D models onto our developer website?", a: "Yes, Zlendo Realty offers embeddable web-links and iFrames that allow potential buyers to explore the 3D property directly on your marketing site." },
        { q: "Do you offer bulk project processing for multi-tower projects?", a: "We provide dedicated enterprise tools that allow developers to upload and batch process multiple unit layouts simultaneously." },
        { q: "How does this reduce buyer hesitation?", a: "By replacing technical 2D floor plans with photo-realistic, interactive 3D, buyers gain complete spatial awareness of the property layout, removing guesswork." },
        { q: "Are daylight and shadows accurately simulated?", a: "Yes, our engine calculates physically accurate daylight exposure, allowing buyers to see real-world sunlight penetration at any time of day." }
    ];

    const developerSchema = {
        '@context': 'https://schema.org/',
        '@type': 'WebPage',
        'name': 'Zlendo Realty for Real Estate Developers',
        'description': 'Transform complex design concepts into hyper-realistic visual experiences that eliminate confusion and accelerate project lifecycles.',
        'mainEntity': {
            '@type': 'FAQPage',
            'mainEntity': faqs.map(faq => ({
                '@type': 'Question',
                'name': faq.q,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': faq.a
                }
            }))
        }
    };

    return (
        <div className="bg-white selection:bg-zlendo-orange/10">
            <JsonLd schema={developerSchema} />
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
                                {cms?.heroBadgeText ?? 'Business Solution'}
                            </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl sm:text-7xl font-black font-nunito text-zlendo-grey-dark leading-none tracking-tighter mb-8"
                        >
                            {cms?.heroTitle ?? 'Present with Clarity.'} <br />
                            <span className={`text-${accentColorClass} italic`}>
                                {cms?.heroTitleHighlight ?? 'Sell with Confidence.'}
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl text-zlendo-grey-medium font-medium max-w-3xl mx-auto leading-relaxed"
                        >
                            {cms?.heroParagraph ?? 'Transform complex design concepts into hyper-realistic visual experiences that eliminate confusion and accelerate project lifecycles.'}
                        </motion.p>
                    </div>
                </section>

                {/* Primary Case Study */}
                <CaseStudySection
                    data={primaryCaseStudy}
                    accentColorClass={accentColorClass}
                    bgAccentClass={bgAccentClass}
                />

                {/* Additional Case Studies */}
                {cms?.additionalCaseStudies?.map((cs: any, index: number) => (
                    <Fragment key={index}>
                        <div className="container-custom">
                            <div className="h-px bg-black/5 mx-auto w-full max-w-4xl" />
                        </div>
                        <CaseStudySection
                            data={{
                                title: cs.title,
                                subtitle: cs.subtitle,
                                icon: iconMap[cs.iconName] || Cpu,
                                challenge: {
                                    title: cs.challengeTitle,
                                    description: cs.challengeDescription
                                },
                                solution: {
                                    title: cs.solutionTitle,
                                    description: cs.solutionDescription
                                },
                                stats: cs.stats,
                                image: cs.image ? urlFor(cs.image).url() : '/assets/use-cases/developers/office-meeting.webp',
                                imageAlt: cs.image?.alt || 'Zlendo Realty Developer Project Visualization'
                            }}
                            accentColorClass={accentColorClass}
                            bgAccentClass={bgAccentClass}
                            reverse={index % 2 === 0} // Alt between reverse and normal
                        />
                    </Fragment>
                )) || (
                        /* Default Second Case Study if none in CMS */
                        <Fragment>
                            <div className="container-custom">
                                <div className="h-px bg-black/5 mx-auto w-full max-w-4xl" />
                            </div>
                            <CaseStudySection
                                data={{
                                    title: 'Developer Solutions',
                                    subtitle: 'Speeding Up Sales Through Buyer Understanding',
                                    icon: Cpu,
                                    challenge: {
                                        title: 'The Visualization Barrier',
                                        description: 'A real estate developer marketing under-construction apartments found that technical floor plans and brochures were difficult for buyers to understand. Buyers struggled to visualize room sizes, furniture fit, and practicality. This uncertainty led to long verbal explanations from sales teams, hesitant buyers, and slowed booking decisions.'
                                    },
                                    solution: {
                                        title: 'Immersive Sales Walkthroughs',
                                        description: 'The developer used Zlendo Realty to create clear 2D layouts and realistic 3D views. Sales teams used visual walkthroughs to show exactly how furniture, storage, and movement would work in real life. This visual clarity reduced confusion, focused sales conversations, and allowed buyers to make confident booking decisions much faster.'
                                    },
                                    stats: [
                                        { label: 'Booking Timeline', value: '2x Faster' },
                                        { label: 'Buyer Confidence', value: '100%' }
                                    ],
                                    image: '/assets/use-cases/developers/developer-visual.webp',
                                    imageAlt: 'Interactive Prop-tech real estate developer visualization'
                                }}
                                accentColorClass={accentColorClass}
                                bgAccentClass={bgAccentClass}
                                reverse={true}
                            />
                        </Fragment>
                    )}

                {/* Helpful Links Section */}
                <section className="py-10 bg-white relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-zlendo-orange/[0.02] to-transparent pointer-events-none" />
                    <div className="container-custom max-w-6xl mx-auto px-6 relative z-10">
                        <div className="text-center mb-14">
                            <span className="inline-block px-4 py-1.5 bg-zlendo-orange/10 text-zlendo-orange text-xs font-black uppercase tracking-[0.2em] rounded-full mb-5">
                                End-to-End Capabilities
                            </span>
                            <h3 className="text-3xl md:text-5xl font-black text-zlendo-grey-dark leading-tight tracking-tight">
                                Maximize Your <span className="text-zlendo-orange italic">Project Value</span>
                            </h3>
                            <p className="text-lg text-zlendo-grey-medium font-medium mt-4 max-w-2xl mx-auto">
                                Use our comprehensive design suite to market projects faster and secure early bookings.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                { title: 'AI Floor Planner', desc: 'Convert blueprints to interactive 3D homes instantly.', link: '/in/products/floor-planner', bg: 'from-orange-50 to-white', icon: Layout },
                                { title: 'Realistic Renders', desc: 'Produce high-quality marketing visuals for your brochures.', link: '/in/products/realistic-renders', bg: 'from-amber-50 to-white', icon: Sparkles },
                                { title: 'Exterior Design', desc: 'Present majestic building facades and landscapes.', link: '/in/products/interiors-exteriors', bg: 'from-yellow-50 to-white', icon: Home }
                            ].map((item, i) => (
                                <Link key={i} href={item.link} className="group relative block overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-xl shadow-black/[0.03] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-50 group-hover:opacity-100 transition-opacity`} />
                                    <div className="relative p-10 h-full flex flex-col justify-between">
                                        <div>
                                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-black/5 mb-8 group-hover:scale-110 transition-transform duration-500">
                                                <item.icon className="w-6 h-6 text-zlendo-orange" />
                                            </div>
                                            <h4 className="text-2xl font-black text-zlendo-grey-dark mb-3">{item.title}</h4>
                                            <p className="text-zlendo-grey-medium font-medium leading-relaxed mb-8">{item.desc}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-10 md:py-14 bg-zlendo-grey-light/30">
                    <div className="container-custom max-w-3xl mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-black text-center text-zlendo-grey-dark mb-10 leading-tight">Common Questions</h2>
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
                                {cms?.ctaTitleHighlight ?? 'Standardize Excellence?'}
                            </span>
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href={SIGNUP_URL}
                                className="btn-orange py-5 px-12 text-lg rounded-3xl text-center"
                            >
                                {cms?.ctaPrimaryLabel ?? 'Start Business Trial'}
                            </a>
                            <Link
                                href={paths.enterpriseDemo}
                                className="btn-primary py-5 px-12 text-lg rounded-3xl text-center"
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

