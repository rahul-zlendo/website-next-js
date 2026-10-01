'use client';

import { useState } from 'react';
import {
    Construction,
    Layers,
    ArrowRight,
    CheckCircle2,
    HelpCircle,
    AlertTriangle,
    TrendingUp,
    ShieldCheck,
    MapPin,
    Hammer,
    FileText,
    ChevronDown,
    Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SIGNUP_URL } from '@/lib/constants/urls';
import CostBreakdownChart from '@/components/charts/CostBreakdownChart';

interface CostEstimatorClientProps {
    cms: any;
    resolvedFaqs: any[];
}

const IconMapper: { [key: string]: any } = {
    MapPin,
    Layers,
    AlertTriangle,
    TrendingUp,
    HelpCircle,
    Construction
};

export default function CostEstimatorClient({ cms, resolvedFaqs }: CostEstimatorClientProps) {
    const [concreteType, setConcreteType] = useState<'M20' | 'M30'>('M20');
    const [brickType, setBrickType] = useState<'RED' | 'AAC'>('RED');
    const [activeTier, setActiveTier] = useState<string>('premium');
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const logicCards = cms?.logicCards || [
        {
            iconName: "MapPin",
            title: "City Material Rates",
            desc: "Labor & material costs vary by 15-20% between cities. We track local market rates daily."
        },
        {
            iconName: "Layers",
            title: "Soil Type Analysis",
            desc: "Sandy, Clay, or Rocky? Soil type dictates foundation depth and budget adjustments."
        },
        {
            iconName: "AlertTriangle",
            title: "Seismic Zones",
            desc: "Building in Zone V requires 25% more steel than Zone II. We factor this in automatically."
        },
        {
            iconName: "TrendingUp",
            title: "Market Fluctuations",
            desc: "Steel & cement prices change weekly. Our AI updates estimates in real-time."
        }
    ];

    const breakdownItems = cms?.breakdownItems || [
        { label: "Footing & Foundation", range: "12-15%" },
        { label: "Super Structure (Columns/Beams)", range: "18-22%" },
        { label: "Brickwork & Plastering", range: "15-18%" },
        { label: "Flooring & Finishing", range: "20-25%" },
        { label: "Electrical & Plumbing", range: "10-12%" },
    ];

    const qualityTiers = cms?.tiers || [
        {
            tierName: 'economy',
            features: [
                'Standard M20 / Red Brick',
                'Standard Vitrified Tiles',
                'Basic CP Fittings',
                'Local Teak / Flush Doors'
            ]
        },
        {
            tierName: 'premium',
            features: [
                'M25 / AAC or Wire Cut',
                'Premium Vitrified / Granite',
                'Branded (Jaquar/Kohler)',
                'Veneer / Teak Finish'
            ]
        },
        {
            tierName: 'luxury',
            features: [
                'M30+ / Porotherm / AAC',
                'Italian Marble / Hardwood',
                'Luxury (Grohe/Toto)',
                'Solid Teak Wood'
            ]
        }
    ];

    const trustStats = cms?.trustStats || [
        { label: "Transparent BOQ", value: "100%" },
        { label: "Hidden Markups", value: "Zero" }
    ];

    const trustMessages = cms?.trustMessages || [
        "Based on your location in Indiranagar, Bangalore, and Sandy Soil conditions, we recommend an isolated footing foundation. This saves approx ₹45,000 vs pile foundation.",
        "Switching to AAC Blocks will reduce structural dead load by 35%, potentially lowering steel reinforcement costs by 5%."
    ];

    return (
        <div className="bg-white font-nunito selection:bg-zlendo-teal/10">
            <main className="pt-8 md:pt-12">

                {/* 1. HERO SECTION */}
                <section className="container-custom px-4 mb-12 md:mb-16 relative">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm mb-8 mx-auto"
                        >
                            <Sparkles className="w-4 h-4 text-zlendo-teal animate-pulse" />
                            <span className="text-xs font-black uppercase tracking-widest text-zlendo-grey-dark">{cms?.heroBadge || 'Engineering-Grade Accuracy'}</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-[28px] md:text-[42px] lg:text-[56px] font-black text-zlendo-grey-dark leading-[1.1]"
                        >
                            {cms?.heroTitle || "You don't need to be a"}<br />
                            {cms?.heroTitleMid || "civil engineer to understand"}<br />
                            <span className="text-zlendo-teal relative inline-block mt-2">
                                {cms?.heroTitleHighlight || 'construction costs.'}
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-zlendo-teal/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-zlendo-grey-medium font-bold opacity-70 max-w-2xl mx-auto leading-relaxed"
                        >
                            {cms?.heroDesc || "Zlendo Realty's AI Estimator uses real-world Indian construction logic—soil type, seismic zones, and material rates—to give you an estimate you can trust."}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <a
                                href={SIGNUP_URL}
                                className="px-8 py-4 bg-zlendo-teal text-white rounded-xl font-black text-lg shadow-xl shadow-zlendo-teal/20 flex items-center gap-2 hover:scale-105 transition-all text-center"
                            >
                                {cms?.heroCtaLabel || 'Estimate My Cost'} <ArrowRight className="w-5 h-5" />
                            </a>
                            <p className="text-sm font-bold text-zlendo-grey-medium opacity-50 text-center">
                                {cms?.heroSubtext || 'Perfect for Homeowners & Architects'}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* 2. HOW IT WORKS - SITE AWARENESS */}
                <section className="bg-zlendo-grey-light/30 py-12 px-4 border-y border-black/5">
                    <div className="container-custom">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-black text-zlendo-grey-dark mb-4">{cms?.logicTitle || 'Real Engineering Logic. Not Just Math.'}</h2>
                            <p className="text-lg text-zlendo-grey-medium font-bold opacity-60">{cms?.logicDesc || 'We calculate costs based on your specific site conditions.'}</p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-6">
                            {logicCards.map((item: any, i: number) => {
                                const Icon = IconMapper[item.iconName] || MapPin;
                                return (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 rounded-full bg-zlendo-teal/10 flex items-center justify-center mb-4 text-zlendo-teal">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-black text-zlendo-grey-dark mb-2">{item.title}</h3>
                                        <p className="text-sm text-zlendo-grey-medium font-bold opacity-60 leading-relaxed">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* 3. COMPONENT BREAKDOWN */}
                <section className="py-12 px-4 container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-100 text-orange-600 font-bold text-xs uppercase">
                                <Construction className="w-4 h-4" />
                                <span>{cms?.breakdownBadge || 'Component Breakdown'}</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-zlendo-grey-dark leading-tight" dangerouslySetInnerHTML={{ __html: cms?.breakdownTitle?.replace(/\n/g, '<br />') || 'Know exactly where <br /> your money goes.' }} />
                            <p className="text-lg text-zlendo-grey-medium font-bold opacity-60 leading-relaxed">
                                {cms?.breakdownDesc || "Most contractors give a single 'Check per sq.ft' rate. Zlendo Realty breaks it down component by component, so you know you aren't overpaying."}
                            </p>

                            <div className="space-y-4">
                                {breakdownItems.map((item: any, i: number) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-zlendo-grey-light/20 border border-black/5">
                                        <span className="font-bold text-zlendo-grey-dark">{item.label}</span>
                                        <span className="font-black text-zlendo-teal">{item.range}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-[40px] bg-gradient-to-br from-zlendo-teal/5 to-zlendo-grey-light/30 border border-black/5 p-8 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center p-6">
                                    <CostBreakdownChart />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. INTERACTIVE MATERIAL COMPARISON */}
                <section className="bg-[#1a1c23] py-16 px-4 text-white">
                    <div className="container-custom">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-5xl font-black mb-4">{cms?.compTitle || 'See Cost Impact Instantly'}</h2>
                            <p className="text-white/60 font-bold text-lg">{cms?.compDesc || 'Make informed decisions on materials. See how choices change your budget.'}</p>
                        </div>

                        {/* Concrete Comparison */}
                        <div className="mb-20">
                            <div className="flex items-center justify-between mb-8 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
                                <h3 className="text-xl md:text-2xl font-bold flex items-center gap-3 shrink-0 mr-4">
                                    <div className="w-1 h-8 bg-zlendo-teal rounded-full" />
                                    {cms?.concreteTitle || 'Concrete Grade'}
                                </h3>
                                <div className="bg-white/10 p-1 rounded-lg flex shrink-0">
                                    <button
                                        onClick={() => setConcreteType('M20')}
                                        className={`px-4 md:px-6 py-2 rounded-md font-bold text-xs md:text-sm transition-all ${concreteType === 'M20' ? 'bg-zlendo-teal text-white shadow-lg' : 'text-white/60 hover:text-white'}`}
                                    >
                                        M20 (Standard)
                                    </button>
                                    <button
                                        onClick={() => setConcreteType('M30')}
                                        className={`px-4 md:px-6 py-2 rounded-md font-bold text-xs md:text-sm transition-all ${concreteType === 'M30' ? 'bg-zlendo-teal text-white shadow-lg' : 'text-white/60 hover:text-white'}`}
                                    >
                                        M30 (High Strength)
                                    </button>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                                    <div className="text-3xl md:text-4xl font-black text-zlendo-teal mb-2">
                                        {concreteType === 'M20' ? '₹ 90 -120 ' : '₹+ 40-60'}
                                        <span className="text-lg text-white/40 font-bold"> / sq.ft</span>
                                    </div>
                                    <p className="text-white/60 font-medium mb-6">Estimated cost impact on structure</p>

                                    <div className="space-y-4">
                                        <h4 className="font-bold text-white">Best Used For:</h4>
                                        <p className="text-white/70 leading-relaxed">
                                            {concreteType === 'M20'
                                                ? "Residential buildings up to G+2 floors. Standard mix for cost-effective construction."
                                                : "High-rise structures (G+3 and above), seismic zones, and heavy load-bearing elements."}
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col justify-center">
                                    <div className="flex items-start gap-4 mb-4">
                                        <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Strength & Durability</h4>
                                            <p className="text-white/60 text-sm">{concreteType === 'M20' ? 'Moderate strength (20MPa). Sufficient for standard homes.' : 'High strength (30MPa). Superior durability and crack resistance.'}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <ShieldCheck className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Recommendation</h4>
                                            <p className="text-white/60 text-sm">{concreteType === 'M20' ? 'Economical choice for independent houses.' : 'Recommended for long-term structural integrity.'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Brick Comparison */}
                        <div>
                            <div className="flex items-center justify-between mb-8 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
                                <h3 className="text-xl md:text-2xl font-bold flex items-center gap-3 shrink-0 mr-4">
                                    <div className="w-1 h-8 bg-orange-500 rounded-full" />
                                    {cms?.brickTitle || 'Wall Material'}
                                </h3>
                                <div className="bg-white/10 p-1 rounded-lg flex shrink-0">
                                    <button
                                        onClick={() => setBrickType('RED')}
                                        className={`px-4 md:px-6 py-2 rounded-md font-bold text-xs md:text-sm transition-all ${brickType === 'RED' ? 'bg-orange-500 text-white shadow-lg' : 'text-white/60 hover:text-white'}`}
                                    >
                                        Red Clay Bricks
                                    </button>
                                    <button
                                        onClick={() => setBrickType('AAC')}
                                        className={`px-4 md:px-6 py-2 rounded-md font-bold text-xs md:text-sm transition-all ${brickType === 'AAC' ? 'bg-orange-500 text-white shadow-lg' : 'text-white/60 hover:text-white'}`}
                                    >
                                        AAC Blocks
                                    </button>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                                    <div className="text-3xl md:text-4xl font-black text-orange-500 mb-2">
                                        {brickType === 'RED' ? '₹ 40-65' : '- ₹25-30'}
                                        <span className="text-lg text-white/40 font-bold"> / sq.ft</span>
                                    </div>
                                    <p className="text-white/60 font-medium mb-6">Estimated cost & speed impact</p>

                                    <div className="space-y-4">
                                        <h4 className="font-bold text-white">Why Choose This?</h4>
                                        <p className="text-white/70 leading-relaxed">
                                            {brickType === 'RED'
                                                ? "Traditional choice. Excellent load-bearing capacity and thermal mass. Naturally cool in summers."
                                                : "Modern, lightweight choice. Faster construction speed, better insulation, and reduces load on the foundation."}
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: 'Construction Speed', val: brickType === 'RED' ? 'Standard' : '2x Faster' },
                                        { label: 'Dead Load', val: brickType === 'RED' ? 'Heavy' : 'Lightweight' },
                                        { label: 'Finish', val: brickType === 'RED' ? 'Rough' : 'Smooth' },
                                        { label: 'Eco-Friendliness', val: brickType === 'RED' ? 'Low' : 'High' }
                                    ].map((s, i) => (
                                        <div key={i} className="bg-white/5 p-4 rounded-xl">
                                            <div className="text-[10px] md:text-sm font-bold text-white/40 uppercase mb-2">{s.label}</div>
                                            <div className="font-bold text-white text-base md:text-lg">{s.val}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* 5. QUALITY TIERS */}
                <section className="py-16 px-4 container-custom">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-black text-zlendo-grey-dark mb-4">{cms?.tiersTitle || 'Choose Your Quality'}</h2>
                        <p className="text-lg text-zlendo-grey-medium font-bold opacity-60">{cms?.tiersDesc || 'From functional to luxurious, define your standard.'}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {qualityTiers.map((tier: any) => (
                            <div
                                key={tier.tierName}
                                onClick={() => setActiveTier(tier.tierName)}
                                className={`cursor-pointer rounded-2xl p-8 border-2 transition-all duration-300 ${activeTier === tier.tierName ? 'border-zlendo-teal bg-zlendo-teal/5 shadow-xl' : 'border-black/5 hover:border-zlendo-teal/30'}`}
                            >
                                <div className="text-sm font-black uppercase tracking-widest text-zlendo-grey-medium opacity-50 mb-2">{tier.tierName}</div>
                                <div className="text-3xl font-black text-zlendo-grey-dark capitalize mb-6">{tier.tierName} Class</div>

                                <ul className="space-y-4">
                                    {tier.features.map((feat: string, i: number) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-zlendo-grey-medium">
                                            <CheckCircle2 className={`w-4 h-4 ${activeTier === tier.tierName ? 'text-zlendo-teal' : 'text-gray-300'}`} />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 6. TRUST & EXPLAINABILITY */}
                <section className="py-12 bg-blue-50/50 border-y border-blue-100/50">
                    <div className="container-custom px-4 flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs uppercase">
                                <HelpCircle className="w-4 h-4" />
                                <span>{cms?.trustBadge || 'Transparency First'}</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-zlendo-grey-dark">{cms?.trustTitle || 'AI that explains, not just calculates.'}</h2>
                            <p className="text-lg text-zlendo-grey-medium font-bold opacity-70 leading-relaxed" dangerouslySetInnerHTML={{ __html: cms?.trustDesc?.replace(/\n/g, '<br />') || "Most estimators give you a number. We tell you <em>why</em>. <br />If your foundation cost is higher, our AI explains: <br /><span className='text-blue-700 italic'>\"Because your soil is soft clay, we accounted for deeper pile foundations.\"</span>" }} />

                            <div className="grid grid-cols-2 gap-6 pt-4">
                                {trustStats.map((stat: any, i: number) => (
                                    <div key={i}>
                                        <h4 className="font-black text-zlendo-grey-dark text-xl mb-1">{stat.value}</h4>
                                        <p className="text-sm font-bold text-zlendo-grey-medium">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="bg-white p-6 rounded-2xl shadow-xl border border-blue-100 relative">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <FileText className="w-24 h-24 text-blue-500" />
                                </div>
                                <div className="space-y-4">
                                    {trustMessages.map((msg: string, i: number) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shrink-0">AI</div>
                                            <div className="bg-blue-50 p-3 rounded-tr-xl rounded-b-xl rounded-tl-sm text-sm font-medium text-blue-900 leading-relaxed">
                                                {msg}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. FINAL CTA */}
                <section className="py-16 px-4 container-custom text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-zlendo-grey-dark mb-6">{cms?.ctaTitle || 'Start building with confidence.'}</h2>
                    <p className="text-lg text-zlendo-grey-medium font-bold opacity-60 mb-10 max-w-2xl mx-auto">
                        {cms?.ctaDesc || 'Get a detailed, engineering-grade cost estimate for your home in minutes. Free for individual homeowners.'}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href={SIGNUP_URL}
                            className="px-10 py-5 bg-zlendo-teal text-white rounded-xl font-black text-lg shadow-xl shadow-zlendo-teal/20 hover:scale-105 transition-all flex items-center justify-center gap-2 text-center"
                        >
                            <Hammer className="w-5 h-5" />
                            {cms?.ctaButtonLabel || 'Start Estimation'}
                        </a>
                    </div>
                </section>

                {/* 8. FAQ */}
                <section className="py-16 bg-white">
                    <div className="container-custom px-6 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-black text-center text-zlendo-grey-dark mb-8">{cms?.faqTitle || 'Frequently Asked Questions'}</h2>
                        <div className="space-y-4">
                            {resolvedFaqs.map((faq, i) => (
                                <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-colors">
                                    <button
                                        onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left bg-transparent"
                                    >
                                        <span className="text-lg font-bold text-zlendo-grey-dark">{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {activeFaq === i && (
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: 'auto' }}
                                                exit={{ height: 0 }}
                                                className="overflow-hidden bg-slate-50"
                                            >
                                                <p className="px-6 pb-6 pt-2 text-slate-600 font-medium leading-relaxed">
                                                    {faq.a}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
