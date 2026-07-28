'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles, Zap, Laptop, Calculator, ShieldCheck, Image as ImageIcon,
    Cpu, Layers, Clock, Tv, CheckCircle2, X, ChevronDown,
    ArrowRight, ChevronRight, Play, Star, ShieldAlert
} from 'lucide-react';
import { SIGNUP_URL } from '@/lib/config/env';
import { comparisonData } from './comparisonData';
import { useCountry } from '@/lib/context/CountryContext';

// Map icon name string to Lucide icon component
const iconMap: Record<string, any> = {
    Sparkles,
    Zap,
    Laptop,
    Calculator,
    ShieldCheck,
    Image: ImageIcon,
    Cpu,
    Layers,
    Clock,
    Tv
};

interface ComparisonClientProps {
    competitor: 'coohom' | 'planner5d' | 'sketchup';
}

export default function ComparisonClient({ competitor }: ComparisonClientProps) {
    const data = comparisonData[competitor];
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const { getPath } = useCountry();

    if (!data) return null;

    return (
        <div className="bg-slate-50 min-h-screen font-nunito overflow-hidden selection:bg-zlendo-teal/10 selection:text-zlendo-teal">
            {/* 1. HERO SECTION WITH NEON GLOWS */}
            <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-white border-b border-slate-100 overflow-hidden">
                {/* Decorative background vectors */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-zlendo-teal/10 to-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 -z-10" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-emerald-500/10 to-cyan-400/10 rounded-full blur-[80px] translate-y-1/3 -z-10" />
                <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                <div className="container-custom px-6 relative z-10 text-center max-w-4xl mx-auto">
                    {/* Glowing VS Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200/80 shadow-sm mb-8"
                    >
                        <span className="text-xs font-black uppercase tracking-widest text-zlendo-teal">Zlendo Realty</span>
                        <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[9px] font-black text-slate-500">VS</div>
                        <span className="text-xs font-black uppercase tracking-widest text-slate-500">{data.competitorName}</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.05] mb-6"
                    >
                        {data.title}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto mb-10"
                    >
                        {data.subtitle}
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
                    >
                        <a
                            href={SIGNUP_URL}
                            id="hero-signup-btn"
                            className="w-full sm:w-auto px-8 py-4 bg-zlendo-teal hover:bg-teal-700 text-white rounded-xl font-black text-lg shadow-xl shadow-zlendo-teal/20 transition-all hover:scale-105 flex items-center justify-center gap-2 group"
                        >
                            Start Designing Free
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href="/business#demo-form"
                            id="hero-demo-btn"
                            className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-200 text-slate-800 rounded-xl font-bold text-lg hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center"
                        >
                            Request Business Demo
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* 2. DYNAMIC VISUAL METRIC MATRIX */}
            <section className="py-20 bg-slate-50 relative overflow-hidden">
                <div className="container-custom px-6 max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
                            Performance & Capability Index
                        </h2>
                        <p className="text-lg text-slate-500 font-semibold max-w-2xl mx-auto">
                            How Zlendo Realty stacks up against {data.competitorName} across key operational benchmarks.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Summary Card */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-sm mb-6">
                                    <Star className="w-4 h-4 fill-current" /> Executive Summary
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 leading-snug">
                                    Why professionals choose Zlendo Realty
                                </h3>
                                <p className="text-slate-600 font-medium text-base leading-relaxed mb-6">
                                    {data.summaryText}
                                </p>
                            </div>
                            <div className="border-t border-slate-100 pt-6 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full bg-slate-200 border border-white flex items-center justify-center font-bold text-xs">J</div>
                                        <div className="w-8 h-8 rounded-full bg-zlendo-teal text-white border border-white flex items-center justify-center font-bold text-xs">A</div>
                                        <div className="w-8 h-8 rounded-full bg-blue-500 text-white border border-white flex items-center justify-center font-bold text-xs">R</div>
                                    </div>
                                    <span className="text-xs font-bold text-slate-500">Joined by 12,000+ designers</span>
                                </div>
                                <a href={SIGNUP_URL} className="text-zlendo-teal font-black text-sm hover:underline flex items-center gap-1 group">
                                    Try it now <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                                </a>
                            </div>
                        </div>

                        {/* Interactive Metrics Bars */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm space-y-6">
                            <h4 className="text-xl font-black text-slate-900 mb-6">Benchmark Breakdown</h4>
                            {data.metrics.map((metric, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="font-bold text-slate-800">{metric.label}</span>
                                        <span className="font-medium text-xs text-slate-400">
                                            {metric.zlendoValue} vs {metric.competitorValue}
                                        </span>
                                    </div>
                                    {/* Progress Comparison Bars */}
                                    <div className="space-y-1">
                                        {/* Zlendo Bar */}
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-bold text-zlendo-teal w-12 uppercase shrink-0">Zlendo</span>
                                            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden relative">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${metric.zlendoScore}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.8, delay: i * 0.1 }}
                                                    className="bg-zlendo-teal h-full rounded-full"
                                                />
                                            </div>
                                            <span className="text-xs font-black text-slate-700 w-8 text-right shrink-0">{metric.zlendoScore}%</span>
                                        </div>
                                        {/* Competitor Bar */}
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-bold text-slate-400 w-12 uppercase shrink-0">{data.competitorName.substring(0, 6)}</span>
                                            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden relative">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${metric.competitorScore}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.8, delay: i * 0.1 }}
                                                    className="bg-slate-300 h-full rounded-full"
                                                />
                                            </div>
                                            <span className="text-xs font-bold text-slate-400 w-8 text-right shrink-0">{metric.competitorScore}%</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. VALUE PROPOSITION CARDS (Why Zlendo Realty Wins) */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="container-custom px-6 max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
                            The Zlendo Realty Edge
                        </h2>
                        <p className="text-lg text-slate-500 font-semibold max-w-2xl mx-auto">
                            Four foundational pillars that make Zlendo Realty the most advanced Design-to-Sales engine on the market.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {data.valueProps.map((prop, i) => {
                            const IconComponent = iconMap[prop.iconName] || Sparkles;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="bg-slate-50 p-8 rounded-3xl border border-slate-200/50 hover:bg-white hover:border-slate-300/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-zlendo-teal mb-6 shadow-sm group-hover:bg-zlendo-teal group-hover:text-white transition-colors duration-300">
                                        <IconComponent className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">
                                        {prop.title}
                                    </h3>
                                    <p className="text-slate-600 font-medium leading-relaxed">
                                        {prop.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. COMPREHENSIVE SIDE-BY-SIDE FEATURE MATRIX */}
            <section className="py-20 bg-slate-50">
                <div className="container-custom px-6 max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
                            Feature Comparison Matrix
                        </h2>
                        <p className="text-lg text-slate-500 font-semibold max-w-2xl mx-auto">
                            A granular feature-by-feature evaluation showing where the differences lie.
                        </p>
                    </div>

                    {/* Table Container */}
                    <div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[700px]">
                                <thead>
                                    <tr className="bg-slate-50/70 border-b border-slate-200/80">
                                        <th className="p-6 font-black text-slate-800 w-[30%]">Feature Capabilities</th>
                                        <th className="p-6 font-black text-zlendo-teal bg-teal-50/30 text-center w-[30%] border-x border-slate-100">
                                            <div className="flex flex-col items-center gap-1">
                                                <span className="text-xs uppercase tracking-wider text-zlendo-teal/80 font-black">Recommended</span>
                                                <span className="text-lg">Zlendo Realty</span>
                                            </div>
                                        </th>
                                        <th className="p-6 font-black text-slate-400 text-center w-[30%]">{data.competitorName}</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-600 font-medium text-[15px] divide-y divide-slate-100">
                                    {data.tableData.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                                            {/* Feature Name & Description */}
                                            <td className="p-6">
                                                <div className="font-bold text-slate-900 mb-1">{row.featureName}</div>
                                                <div className="text-xs text-slate-400 leading-normal font-medium">{row.description}</div>
                                            </td>

                                            {/* Zlendo Value */}
                                            <td className="p-6 text-center bg-teal-50/10 border-x border-slate-100 font-black text-slate-800">
                                                {typeof row.zlendoValue === 'boolean' ? (
                                                    <div className="flex items-center justify-center text-emerald-600">
                                                        <CheckCircle2 className="w-5 h-5 fill-emerald-50" />
                                                    </div>
                                                ) : (
                                                    <span className="text-zlendo-teal font-black">{row.zlendoValue}</span>
                                                )}
                                            </td>

                                            {/* Competitor Value */}
                                            <td className="p-6 text-center font-bold text-slate-400">
                                                {typeof row.competitorValue === 'boolean' ? (
                                                    row.competitorValue ? (
                                                        <div className="flex items-center justify-center text-slate-400">
                                                            <CheckCircle2 className="w-5 h-5 fill-slate-50" />
                                                        </div>
                                                    ) : (
                                                        <div className="flex items-center justify-center text-slate-300">
                                                            <X className="w-5 h-5" />
                                                        </div>
                                                    )
                                                ) : (
                                                    <span className="text-slate-400 text-sm font-semibold">{row.competitorValue}</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. DYNAMIC INTERACTIVE FAQ ACCORDION */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="container-custom px-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-black text-center text-slate-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-slate-500 font-semibold text-center max-w-xl mx-auto mb-12">
                        Common queries from designers and businesses when migrating to Zlendo Realty.
                    </p>

                    <div className="space-y-4">
                        {data.faqs.map((faq, i) => (
                            <div key={i} className="border border-slate-200/80 rounded-2xl overflow-hidden hover:border-slate-300 transition-all duration-300">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left bg-transparent"
                                >
                                    <span className="text-lg font-bold text-slate-800">{faq.question}</span>
                                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${activeFaq === i ? 'rotate-180 text-zlendo-teal' : ''}`} />
                                </button>
                                <AnimatePresence initial={false}>
                                    {activeFaq === i && (
                                        <motion.div
                                            key="content"
                                            initial="collapsed"
                                            animate="open"
                                            exit="collapsed"
                                            variants={{
                                                open: { opacity: 1, height: "auto" },
                                                collapsed: { opacity: 0, height: 0 }
                                            }}
                                            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            className="overflow-hidden bg-slate-50/50"
                                        >
                                            <p className="px-6 pb-6 pt-2 text-slate-600 font-medium leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CONVERTING CALL TO ACTION BANNER */}
            <section className="py-20 bg-white">
                <div className="container-custom px-6 max-w-5xl mx-auto">
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
                        {/* Modern geometric overlay gradients */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-zlendo-teal/30 to-blue-500/30 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3 -z-0" />
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-br from-emerald-500/20 to-teal-400/20 rounded-full blur-[70px] -translate-x-1/4 translate-y-1/4 -z-0" />

                        <div className="relative z-10 max-w-3xl text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-between gap-10">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black font-nunito tracking-tight mb-4">
                                    Ready to design the future?
                                </h2>
                                <p className="text-lg text-slate-300 font-semibold leading-relaxed max-w-xl">
                                    Skip the complexity of {data.competitorName} and join over 12,000 designers building on Zlendo Realty. Get started for free today.
                                </p>
                            </div>
                            <div className="shrink-0 flex flex-col items-center gap-3">
                                <a
                                    href={SIGNUP_URL}
                                    id="cta-signup-btn"
                                    className="px-10 py-5 bg-zlendo-teal hover:bg-teal-500 text-white rounded-xl font-black text-lg hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2 group"
                                >
                                    Try Zlendo Free
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </a>
                                <div className="text-xs font-bold text-slate-400">No credit card required</div>
                                <a href={getPath('/compare')} className="mt-2 text-xs font-bold text-slate-400 hover:text-white transition-colors underline underline-offset-4">
                                    See all comparisons →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
