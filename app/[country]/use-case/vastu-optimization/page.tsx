'use client';

import { motion } from 'framer-motion';
import { Ruler, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { useCountry } from '@/lib/context/CountryContext';
import CaseStudySection from '@/components/common/CaseStudySection';

export default function VastuOptimizationPage() {
    const { paths } = useCountry();
    const accentColorClass = 'zlendo-teal';
    const bgAccentClass = 'bg-zlendo-teal/5';


    const caseStudyAnanya = {
        title: 'Vastu Optimization',
        subtitle: 'Balancing Modern Living with Vastu Beliefs',
        icon: Ruler,
        challenge: {
            title: 'Fixed Layouts & Family Opinions',
            description: 'Ananya, a 31-year-old professional, bought a new apartment with a fixed layout. While she wanted a modern, spacious home, her parents insisted on Vastu compliance for peace and well-being. The lack of visual clarity on pooja space and kitchen alignment led to hesitation and delayed the entire planning process.'
        },
        solution: {
            title: 'Realistic Vastu Planning',
            description: 'Zlendo Realty\'s Vastu Planner reviewed the layout and suggested workable adjustments without structural changes. By optimizing furniture placement and sleep directions, Ananya showed her parents clear visual plans. This alignment of belief with practicality brought confidence and emotional comfort to the whole family.'
        },
        stats: [
            { label: 'Decision Speed', value: '2x Faster' },
            { label: 'Family Consensus', value: '100%' }
        ],
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200'
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
                            Ancient Wisdom. <br /><span className={`text-${accentColorClass} italic`}>Modern Harmony.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl text-zlendo-grey-medium font-medium max-w-3xl mx-auto leading-relaxed"
                        >
                            Ensure your home supports peace, health, and prosperity through data-driven Vastu optimization and visual clarity.
                        </motion.p>
                    </div>
                </section>

                {/* Case Study Ananya */}
                <CaseStudySection
                    data={caseStudyAnanya}
                    accentColorClass={accentColorClass}
                    bgAccentClass={bgAccentClass}
                />


                {/* Final CTA Banner */}
                <section className="section-padding py-12 bg-zlendo-grey-dark relative overflow-hidden rounded-[80px_80px_0_0]">
                    <div className={`absolute inset-0 bg-${accentColorClass}/5 blur-[100px]`} />
                    <div className="container-custom relative z-10 text-center space-y-12">
                        <h2 className="text-5xl sm:text-7xl font-black font-nunito text-white leading-tight tracking-tight max-w-4xl mx-auto">
                            Ready to <span className={`text-${accentColorClass} italic`}>Optimize Your Energy?</span>
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
