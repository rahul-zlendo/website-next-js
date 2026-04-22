'use client';

import { motion } from 'framer-motion';
import { Building2, TrendingUp, Layout, Home, Sparkles, Lightbulb, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { useCountry } from '@/lib/context/CountryContext';
import CaseStudySection from '@/components/common/CaseStudySection';
import { urlFor } from '@/lib/sanity/image';

interface BuilderAndPromoterClientProps {
    cms: any;
}

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
});

export default function BuilderAndPromoterClient({ cms }: BuilderAndPromoterClientProps) {
    const { paths, getPath } = useCountry();
    const accentColorClass = 'zlendo-teal';
    const bgAccentClass = 'bg-zlendo-teal/5';

    // Set document title and meta tags for SEO from CMS or defaults
    useEffect(() => {
        document.title = cms?.seoTitle ?? 'Builder & Promoter Solutions';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', cms?.seoDescription ?? 'Empower your buyers to visualize their future home instantly, reducing sales friction and accelerating your commission cycle.');
        }
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', cms?.seoKeywords ?? 'builder and promoter, real estate sales, 3d property visualization, zlendo realty');
        }
    }, [cms]);

    const iconMap: any = { Building2, TrendingUp, Layout, Home, Sparkles, Lightbulb, Users, ArrowRight };
    const CaseStudyIcon = iconMap[cms?.caseStudyIcon] || Building2;

    const caseStudyData = {
        title: cms?.caseStudyTitle ?? 'Success Story',
        subtitle: cms?.caseStudySubtitle ?? 'Addressing the Sales Gap',
        icon: CaseStudyIcon,
        challenge: {
            title: cms?.challengeTitle ?? 'Difficulty in Visualizing Plans',
            description: cms?.challengeDescription ?? 'Sneha, a mid-sized builder in Hyderabad, faced repeated delays in closing deals. Buyers struggled to understand standard floor plans and couldn\'t visualize how spaces would look once completed. This led to endless design clarifications, delayed approvals, and lost sales opportunities.'
        },
        solution: {
            title: cms?.solutionTitle ?? '3D Visual Confidence',
            description: cms?.solutionDescription ?? 'Sneha started using Zlendo Realty AI Floor Plan & Interior Design Software to present detailed 2D architectural layouts and realistic 3D interior walkthrough views. Now, buyers instantly understand room sizes, layout flow, and furniture fit, resulting in faster approvals and improved sales conversion.'
        },
        stats: cms?.stats?.length ? cms.stats : [
            { label: 'Sales Conversion', value: '+45%' },
            { label: 'Approval Time', value: '2x Faster' }
        ],
        image: cms?.caseStudyImage ? urlFor(cms.caseStudyImage).url() : '/assets/use-cases/builders/builder-visual.webp'
    };

    return (
        <div className="bg-white font-nunito selection:bg-zlendo-teal/10">
            <div className="min-h-screen relative pt-12">
                {/* Global Background Accents */}
                <div className="fixed inset-0 pointer-events-none opacity-[0.02]"
                    style={{ backgroundImage: `radial-gradient(var(--${accentColorClass}) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
                />

                {/* Hero Section */}
                <section className="section-padding py-12 relative overflow-hidden text-center">
                    <div className="container-custom relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${bgAccentClass} border border-${accentColorClass}/10 mb-8`}
                        >
                            <Building2 className={`w-4 h-4 text-${accentColorClass}`} />
                            <span className={`text-xs font-black text-${accentColorClass} uppercase tracking-[0.2em]`}>
                                {cms?.heroBadgeText ?? 'Builder & Promoter'}
                            </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-zlendo-grey-dark leading-none tracking-tighter mb-8 max-w-4xl mx-auto"
                        >
                            {cms?.heroTitle ?? 'Close Deals Faster with'} <br />
                            <span className={`text-${accentColorClass} italic`}>
                                {cms?.heroTitleHighlight ?? 'Visual Confidence.'}
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl text-zlendo-grey-medium font-medium max-w-3xl mx-auto leading-relaxed"
                        >
                            {cms?.heroParagraph ?? 'Empower your buyers to visualize their future home instantly, reducing sales friction and accelerating your commission cycle.'}
                        </motion.p>
                    </div>
                </section>

                {/* Case Study Section */}
                <CaseStudySection
                    data={caseStudyData}
                    accentColorClass={accentColorClass}
                    bgAccentClass={bgAccentClass}
                />

                {/* why builders choose section - CMS driven */}
                <section className="py-16 lg:py-20 px-6 lg:px-12 bg-zlendo-mint/10">
                    <div className="container-custom max-w-5xl mx-auto">
                        <motion.div {...fadeUp()} className="text-center mb-12">
                            <span className="inline-block px-4 py-1.5 bg-zlendo-teal/10 text-zlendo-teal text-xs font-black uppercase tracking-widest rounded-full mb-5">
                                {cms?.featuresBadgeText ?? 'Why Choose Zlendo Realty'}
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black text-zlendo-grey-dark leading-tight">
                                {cms?.featuresTitle ?? 'Why Builders & Developers'}{' '}
                                <span className="text-zlendo-teal">
                                    {cms?.featuresTitleHighlight ?? 'Choose Zlendo Realty'}
                                </span>
                            </h2>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {(cms?.featuresList?.length ? cms.featuresList : [
                                { text: 'Convert inquiries into confirmed bookings faster', iconName: 'TrendingUp' },
                                { text: 'Showcase under-construction projects with clarity', iconName: 'Building2' },
                                { text: 'Sell renovation concepts before starting work', iconName: 'Lightbulb' },
                                { text: 'Reduce site visit dependency', iconName: 'ArrowRight' },
                                { text: 'Improve client confidence and satisfaction', iconName: 'Users' },
                            ]).map((feature: any, i: number) => {
                                const FeatureIcon = iconMap[feature.iconName] || ArrowRight;
                                return (
                                    <motion.div
                                        key={i}
                                        {...fadeUp(i * 0.08)}
                                        className="bg-white rounded-2xl border border-black/5 p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <div className="w-10 h-10 bg-zlendo-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <FeatureIcon className="w-5 h-5 text-zlendo-teal" />
                                        </div>
                                        <p className="text-[15px] font-bold text-zlendo-grey-dark leading-snug mt-1">{feature.text}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Final CTA Banner */}
                <section className="section-padding py-12 bg-zlendo-grey-dark relative overflow-hidden rounded-[80px_80px_0_0]">
                    <div className={`absolute inset-0 bg-${accentColorClass}/5 blur-[100px]`} />
                    <div className="container-custom relative z-10 text-center space-y-12">
                        <h2 className="text-5xl sm:text-7xl font-black font-nunito text-white leading-tight tracking-tight max-w-4xl mx-auto">
                            {cms?.ctaTitle ?? 'Ready to '}
                            <span className={`text-${accentColorClass} italic`}>
                                {cms?.ctaTitleHighlight ?? 'Boost Your Project Sales?'}
                            </span>
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href={SIGNUP_URL}
                                className="btn-primary py-5 px-12 text-lg rounded-3xl text-center"
                            >
                                {cms?.ctaPrimaryLabel ?? 'Start Business Trial'}
                            </a>
                            <Link
                                href={paths.enterpriseDemo || getPath('/contact')}
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
