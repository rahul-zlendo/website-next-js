'use client';

import { motion } from 'framer-motion';
import { Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { useCountry } from '@/lib/context/CountryContext';
import CaseStudySection from '@/components/common/CaseStudySection';

export default function RealEstateBrokersPage() {
    const { paths } = useCountry();
    const accentColorClass = 'zlendo-orange';
    const bgAccentClass = 'bg-zlendo-orange/5';

    const caseStudySneha = {
        title: 'Real Estate Brokers',
        subtitle: 'Senior Broker Story',
        icon: Users,
        challenge: {
            title: 'Long Sales Cycles & Buyer Doubt',
            description: 'Sneha, a senior broker in Hyderabad, struggled with buyers who found floor plans difficult to understand. They couldn\'t imagine actual room sizes or furniture fit, leading to repeated questions and a slow decision-making process. Some buyers even lost interest due to a lack of spatial clarity, forcing Sneha to spend excessive time on follow-ups.'
        },
        solution: {
            title: 'Visual Trust & Rapid Closures',
            description: 'Sneha began using Zlendo Realty to share clear 2D layouts and realistic 3D views with buyers. This provided instant clarity on room proportions and layout flow. Even remote buyers could review properties with confidence, making sales discussions shorter, focused, and significantly more efficient.'
        },
        stats: [
            { label: 'Booking Speed', value: '2.5x Faster' },
            { label: 'Follow-up Time', value: '-60%' }
        ],
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200'
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
                            <span className={`text-xs font-black text-${accentColorClass} uppercase tracking-[0.2em]`}>Business Solution</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl sm:text-7xl font-black font-nunito text-zlendo-grey-dark leading-none tracking-tighter mb-8"
                        >
                            Close Deals Faster with <br /><span className={`text-${accentColorClass} italic`}>Visual Confidence.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl text-zlendo-grey-medium font-medium max-w-3xl mx-auto leading-relaxed"
                        >
                            Empower your buyers to visualize their future home instantly, reducing sales friction and accelerating your commission cycle.
                        </motion.p>
                    </div>
                </section>

                {/* Case Study Sneha */}
                <CaseStudySection
                    data={caseStudySneha}
                    accentColorClass={accentColorClass}
                    bgAccentClass={bgAccentClass}
                />

                {/* Final CTA Banner */}
                <section className="section-padding py-12 bg-zlendo-grey-dark relative overflow-hidden rounded-[80px_80px_0_0]">
                    <div className={`absolute inset-0 bg-${accentColorClass}/5 blur-[100px]`} />
                    <div className="container-custom relative z-10 text-center space-y-12">
                        <h2 className="text-5xl sm:text-7xl font-black font-nunito text-white leading-tight tracking-tight max-w-4xl mx-auto">
                            Ready to <span className={`text-${accentColorClass} italic`}>Boost Your Sales?</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href={SIGNUP_URL}
                                className="btn-primary py-5 px-12 text-lg rounded-3xl text-center"
                            >
                                Start Business Trial
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
