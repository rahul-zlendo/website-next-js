'use client';

import { motion } from 'framer-motion';
import { Cpu, TrendingUp, Layout, Home, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect, Fragment } from 'react';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { useCountry } from '@/lib/context/CountryContext';
import CaseStudySection from '@/components/common/CaseStudySection';
import { urlFor } from '@/lib/sanity/image';

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
        imageAlt: 'Innovative prop-tech solution addressing gaps in home and office design workflows'
    };

    return (
        <div className="bg-white selection:bg-zlendo-orange/10">
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
                                image: cs.image ? urlFor(cs.image).url() : '/assets/use-cases/developers/office-meeting.webp'
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
                                image: '/assets/use-cases/developers/developer-visual.webp'
                            }}
                            accentColorClass={accentColorClass}
                            bgAccentClass={bgAccentClass}
                            reverse={true}
                        />
                    </Fragment>
                )}

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

