'use client';

import { motion } from 'framer-motion';
import { Home, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { useCountry } from '@/lib/context/CountryContext';
import CaseStudySection from '@/components/common/CaseStudySection';

export default function NewHomeBuildingPage() {
    const { paths } = useCountry();
    const accentColorClass = 'zlendo-teal';
    const bgAccentClass = 'bg-zlendo-teal/5';

    const caseStudyMeena = {
        title: 'New Home Building',
        subtitle: 'First-Time Builder Story',
        icon: Home,
        challenge: {
            title: 'The Blueprint Barrier',
            description: 'Meena, a 31-year-old school teacher, planned to build her first independent house. While she had layout drawings, she found it hard to imagine room sizes, furniture placement, or walking flow. She feared that once construction started, correcting spatial errors would be extremely costly and stressful, leading to delayed approvals and slowed progress.'
        },
        solution: {
            title: 'Full Visual Clarity',
            description: 'Using Zlendo Realty, Meena converted her floor plans into clear 2D layouts and realistic 3D views before construction began. She could see room flow, walking space, and storage placement in advance. Sharing these visuals with her family helped everyone agree on the layout quickly, reducing the need for future changes and allowing construction to start with complete confidence.'
        },
        stats: [
            { label: 'Decision Speed', value: '2x Faster' },
            { label: 'Construction Rework', value: '0%' }
        ],
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
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
                            <span className={`text-xs font-black text-${accentColorClass} uppercase tracking-[0.2em]`}>Individual Solution</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl sm:text-7xl font-black font-nunito text-zlendo-grey-dark leading-none tracking-tighter mb-8"
                        >
                            Build Your Dream from the <br /><span className={`text-${accentColorClass} italic`}>Ground Up.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl text-zlendo-grey-medium font-medium max-w-3xl mx-auto leading-relaxed"
                        >
                            From foundation to final finishes, visualize every detail of your new home construction to ensure a perfect build.
                        </motion.p>
                    </div>
                </section>

                {/* Case Study Meena */}
                <CaseStudySection
                    data={caseStudyMeena}
                    accentColorClass={accentColorClass}
                    bgAccentClass={bgAccentClass}
                />

                {/* Final CTA Banner */}
                <section className="section-padding py-12 bg-zlendo-grey-dark relative overflow-hidden rounded-[80px_80px_0_0]">
                    <div className={`absolute inset-0 bg-${accentColorClass}/5 blur-[100px]`} />
                    <div className="container-custom relative z-10 text-center space-y-12">
                        <h2 className="text-5xl sm:text-7xl font-black font-nunito text-white leading-tight tracking-tight max-w-4xl mx-auto">
                            Ready to <span className={`text-${accentColorClass} italic`}>Build with Confidence?</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href={SIGNUP_URL}
                                className="btn-primary py-5 px-12 text-lg rounded-3xl text-center"
                            >
                                Get Started for Free
                            </a>
                            <Link
                                href={paths.enterpriseDemo}
                                className="btn-orange py-5 px-12 text-lg rounded-3xl text-center"
                            >
                                Schedule a Demo
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
