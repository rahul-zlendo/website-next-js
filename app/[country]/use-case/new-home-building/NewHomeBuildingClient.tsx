'use client';

import { motion } from 'framer-motion';
import { Home, TrendingUp, Layout, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { useCountry } from '@/lib/context/CountryContext';
import CaseStudySection from '@/components/common/CaseStudySection';
import { urlFor } from '@/lib/sanity/image';

interface NewHomeBuildingClientProps {
    cms: any;
}

export default function NewHomeBuildingClient({ cms }: NewHomeBuildingClientProps) {
    const { paths } = useCountry();
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
        image: cms?.caseStudyImage ? urlFor(cms.caseStudyImage).url() : 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
    };

    return (
        <div className="bg-white selection:bg-zlendo-teal/10">
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

                {/* Final CTA Banner */}
                <section className="section-padding py-12 bg-zlendo-grey-dark relative overflow-hidden rounded-[80px_80px_0_0]">
                    <div className={`absolute inset-0 bg-${accentColorClass}/5 blur-[100px]`} />
                    <div className="container-custom relative z-10 text-center space-y-12">
                        <h2 className="text-5xl sm:text-7xl font-black font-nunito text-white leading-tight tracking-tight max-w-4xl mx-auto">
                            {cms?.ctaTitle ?? 'Ready to '} 
                            <span className={`text-${accentColorClass} italic`}>
                                {cms?.ctaTitleHighlight ?? 'Build with Confidence?'}
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

