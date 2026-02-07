'use client';

import type { ComponentType } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Quote } from 'lucide-react';
import Link from 'next/link';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { useCountry } from '@/lib/context/CountryContext';
export interface UseCaseData {
    slug: string;
    title: string;
    subtitle: string;
    heroTitle: string;
    heroSubtitle: string;
    category: 'Individual' | 'Business';
    icon: ComponentType<{ className?: string }>;
    challenge: {
        title: string;
        description: string;
    };
    solution: {
        title: string;
        description: string;
    };
    stats: Array<{
        label: string;
        value: string;
    }>;
    image: string;
    accentColor: string;
}

export default function UseCaseLayout({ data }: { data: UseCaseData }) {
    const { paths } = useCountry();
    const isBusiness = data.category === 'Business';
    const accentColorClass = isBusiness ? 'zlendo-orange' : 'zlendo-teal';
    const bgAccentClass = isBusiness ? 'bg-zlendo-orange/5' : 'bg-zlendo-teal/5';

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
                            <span className={`text-xs font-black text-${accentColorClass} uppercase tracking-[0.2em]`}>{data.category} Solution</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl sm:text-7xl font-black font-nunito text-zlendo-grey-dark leading-none tracking-tighter mb-8"
                        >
                            {data.heroTitle.split('.').map((part, i, arr) => (
                                <span key={i}>
                                    {i === 1 ? <><br /><span className={`text-${accentColorClass} italic`}>{part}</span></> : part}
                                    {i === 0 && arr.length > 1 ? '.' : ''}
                                </span>
                            ))}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl text-zlendo-grey-medium font-medium max-w-3xl mx-auto leading-relaxed"
                        >
                            {data.heroSubtitle}
                        </motion.p>
                    </div>
                </section>

                {/* Use Case Detail */}
                <section className="section-padding py-12 relative overflow-hidden">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <div className={`absolute -inset-4 bg-${accentColorClass}/10 rounded-[60px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                                <div className="relative rounded-[60px] overflow-hidden border border-black/5 shadow-2xl shadow-black/[0.05]">
                                    <img
                                        src={data.image}
                                        alt={data.title}
                                        className="w-full h-[500px] object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                                    />
                                    <div className="absolute bottom-10 left-10 py-3 px-6 bg-white/90 backdrop-blur-md rounded-2xl flex items-center gap-3 border border-black/5 shadow-xl">
                                        <data.icon className={`w-4 h-4 text-${accentColorClass}`} />
                                        <span className="text-sm font-black text-zlendo-grey-dark uppercase tracking-widest">{data.title}</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-10"
                            >
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-2xl bg-${accentColorClass}/10 flex items-center justify-center text-${accentColorClass}`}>
                                            <Quote className="w-6 h-6" />
                                        </div>
                                        <span className={`text-sm font-black text-${accentColorClass} uppercase tracking-[0.3em]`}>{data.subtitle}</span>
                                    </div>
                                    <h2 className="text-5xl font-black font-nunito text-zlendo-grey-dark leading-tight tracking-tight">
                                        Addressing the <span className={`text-${accentColorClass} italic`}>Gap.</span>
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className={`p-8 rounded-[40px] ${bgAccentClass} border border-${accentColorClass}/10`}>
                                        <h4 className="text-xs font-black uppercase tracking-widest text-zlendo-grey-medium mb-4">The Challenge</h4>
                                        <p className="text-lg text-zlendo-grey-medium font-medium leading-relaxed">
                                            {data.challenge.description}
                                        </p>
                                    </div>

                                    <div className="p-8 rounded-[40px] bg-white border border-black/5 shadow-xl shadow-black/[0.02]">
                                        <h4 className={`text-xs font-black uppercase tracking-widest text-${accentColorClass} mb-4`}>The Solution</h4>
                                        <p className="text-lg text-zlendo-grey-dark font-medium leading-relaxed">
                                            {data.solution.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    {data.stats.map((stat, idx) => (
                                        <div key={idx} className={`p-6 rounded-3xl ${idx === 0 ? `bg-${accentColorClass} text-white` : 'bg-zlendo-grey-dark text-white'} flex flex-col justify-center`}>
                                            <span className="text-3xl font-black font-nunito">{stat.value}</span>
                                            <span className="text-xs font-bold uppercase tracking-widest opacity-80">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Banner */}
                <section className="section-padding py-12 bg-zlendo-grey-dark relative overflow-hidden rounded-[80px_80px_0_0]">
                    <div className={`absolute inset-0 bg-${accentColorClass}/5 blur-[100px]`} />
                    <div className="container-custom relative z-10 text-center space-y-12">
                        <h2 className="text-5xl sm:text-7xl font-black font-nunito text-white leading-tight tracking-tight max-w-4xl mx-auto">
                            Ready to <span className={`text-${accentColorClass} italic`}>Experience the Future?</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href={SIGNUP_URL}
                                className="btn-primary py-5 px-12 text-lg rounded-3xl text-center"
                            >
                                {isBusiness ? 'Start Business Trial' : 'I am Building a Home'}
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
