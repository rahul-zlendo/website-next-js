'use client';

import { useState } from 'react';
import {
    Home,
    TreePine,
    MapPin,
    Users,
    ChevronRight,
    ChevronDown,
    CheckCircle2,
    Sparkles,
    Layers,
    History,
    Heart,
    Box
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { urlFor } from '@/lib/sanity/image';

interface InteriorsExteriorsClientProps {
    cms: any;
    resolvedStates: string[];
    resolvedDetails: Record<string, any>;
    resolvedInteriorCards: any[];
    resolvedLandscapeCards: any[];
    resolvedCulturePoints: any[];
    resolvedFaqs: any[];
}

export default function InteriorsExteriorsClient({
    cms,
    resolvedStates,
    resolvedDetails,
    resolvedInteriorCards,
    resolvedLandscapeCards,
    resolvedCulturePoints,
    resolvedFaqs
}: InteriorsExteriorsClientProps) {
    const [selectedState, setSelectedState] = useState(resolvedStates[0] || 'Tamil Nadu');
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const details = resolvedDetails[selectedState] || {
        climateTitle: 'Climate Aware',
        climateDesc: 'Loading regional details...',
        cultureTitle: 'Culturally-Rich',
        cultureDesc: 'Loading regional details...'
    };

    return (
        <div className="bg-white font-nunito selection:bg-zlendo-teal/10 selection:text-zlendo-teal">
            <main className="pt-8 md:pt-12">

                {/* 1. HERO SECTION */}
                <section className="container-custom px-4 mb-12 md:mb-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-8"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm mb-8"
                                >
                                    <Sparkles className="w-4 h-4 text-zlendo-teal animate-pulse" />
                                    <span className="text-xs font-black uppercase tracking-widest text-zlendo-grey-dark">{cms?.heroBadge || 'Region-Aware Design Platform'}</span>
                                </motion.div>

                                <h1 className="text-[28px] md:text-[42px] lg:text-[56px] font-black text-zlendo-grey-dark leading-[1.1]">
                                    {cms?.heroTitle || 'Indian Homes.'}<br />
                                    <span className="text-zlendo-teal">{cms?.heroTitleHighlight || 'Indian Lifestyles.'}</span><br />
                                    {cms?.heroTitleAfter || 'Designed Smarter.'}
                                </h1>

                                <p className="text-xl text-zlendo-grey-medium font-medium leading-relaxed max-w-xl">
                                    {cms?.heroDesc || 'More than just decoration. Experience design intelligence that respects your culture, climate, and religious preferences across every state in India.'}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href={SIGNUP_URL}
                                        className="px-8 py-4 bg-zlendo-teal text-white rounded-xl font-black text-lg shadow-xl shadow-zlendo-teal/20 hover:scale-105 transition-all flex items-center justify-center gap-2 text-center"
                                    >
                                        {cms?.heroPrimaryCtaLabel || 'Design My Home'} <ChevronRight className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={SIGNUP_URL}
                                        className="px-8 py-4 bg-white text-zlendo-grey-dark border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all text-center"
                                    >
                                        {cms?.heroSecondaryCtaLabel || 'Explore Local Styles'}
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative"
                            >
                                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] md:aspect-square">
                                    <img
                                        src={urlFor(cms?.heroImage).url() || "/assets/interior-exterior/hero-interiors.webp"}
                                        alt={cms?.heroImage?.alt || "Modern Indian Interior"}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8">
                                        <div className="flex items-center gap-3 text-white mb-2">
                                            <MapPin className="w-5 h-5 text-zlendo-orange" />
                                            <span className="font-bold">{cms?.heroImage?.caption || 'Kerala-Style Sustainable Villa'}</span>
                                        </div>
                                        <p className="text-white/80 text-sm font-medium">{cms?.heroImage?.subcaption || 'Auto-suggested for coastal climates and traditional aesthetics.'}</p>
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block max-w-[240px]">
                                    <div className="flex gap-4 items-center mb-3">
                                        <div className="w-10 h-10 rounded-full bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal">
                                            <Heart className="w-5 h-5" />
                                        </div>
                                        <div className="font-black text-zlendo-grey-dark">Culture-Ready</div>
                                    </div>
                                    <p className="text-xs text-zlendo-grey-medium font-medium leading-relaxed">
                                        Vastu-aware layouts with dedicated Pooja spaces integrated from day one.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 2. INTERIOR DESIGN CAPABILITIES */}
                <section className="py-16 bg-slate-50 relative overflow-hidden">
                    <div className="container-custom px-4 relative z-10">
                        <div className="max-w-3xl mb-12">
                            <h2 className="text-3xl md:text-5xl font-black text-zlendo-grey-dark mb-6 ">
                                {cms?.interiorTitle || 'Built for the Way '}
                                <span className="text-zlendo-teal">{cms?.interiorTitleHighlight || 'Indians Live'}</span>
                            </h2>
                            <p className="text-xl text-zlendo-grey-medium font-medium leading-relaxed opacity-80">
                                {cms?.interiorDesc || 'Thousands of design elements that reflect real Indian usage patterns—not just showroom designs. From clever storage to traditional motifs.'}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {resolvedInteriorCards.map((card, i) => (
                                <div key={i} className={`bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group ${i === 1 ? 'lg:translate-y-8' : i === 2 ? 'lg:translate-y-16' : ''}`}>
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${card.colorClass === 'orange' ? 'bg-zlendo-orange/10' : card.colorClass === 'purple' ? 'bg-purple-100' : 'bg-zlendo-teal/10'}`}>
                                        {i === 0 ? <Layers className={`w-7 h-7 text-zlendo-teal`} /> : i === 1 ? <Box className="w-7 h-7 text-zlendo-orange" /> : <Sparkles className="w-7 h-7 text-purple-600" />}
                                    </div>
                                    <h3 className="text-2xl font-black text-zlendo-grey-dark mb-6">{card.title}</h3>
                                    <ul className="space-y-4">
                                        {card.features.map((item: string, j: number) => (
                                            <li key={j} className="flex gap-3 text-zlendo-grey-medium font-medium text-sm">
                                                <CheckCircle2 className={`w-5 h-5 shrink-0 ${card.colorClass === 'orange' ? 'text-zlendo-orange' : card.colorClass === 'purple' ? 'text-purple-500' : 'text-zlendo-teal'}`} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. EXTERIOR DESIGN */}
                <section className="py-20 px-4 container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-lg border-2 border-white">
                                        <img src={urlFor(cms?.exteriorImages?.[0]).url() || "/assets/interior-exterior/exterior-1.webp"} alt="Exterior" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="rounded-3xl overflow-hidden aspect-square shadow-lg border-2 border-white">
                                        <img src={urlFor(cms?.exteriorImages?.[1]).url() || "/assets/interior-exterior/exterior-2.webp"} alt="Exterior Details" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="space-y-4 pt-12">
                                    <div className="rounded-3xl overflow-hidden aspect-square shadow-lg border-2 border-white">
                                        <img src={urlFor(cms?.exteriorImages?.[2]).url() || "/assets/interior-exterior/exterior-3.webp"} alt="Modern Gate" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-lg border-2 border-white">
                                        <img src={urlFor(cms?.exteriorImages?.[3]).url() || "/assets/interior-exterior/exterior-4.webp"} alt="Compound Wall" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-zlendo-orange/10 text-zlendo-orange font-bold text-xs uppercase">
                                <Home className="w-4 h-4" />
                                <span>{cms?.exteriorBadge || 'Functional Aesthetics'}</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-zlendo-grey-dark leading-tight">
                                {cms?.exteriorTitle || 'Exterior Elevation'} <br />
                                <span className="text-zlendo-orange">{cms?.exteriorTitleHighlight || 'That Impresses.'}</span>
                            </h2>
                            <p className="text-xl text-zlendo-grey-medium font-medium leading-relaxed">
                                {cms?.exteriorDesc || 'From compound walls that secure your sanctuary to modern gates and climate-responsive elevation cladding. We design for durability and appearance.'}
                            </p>

                            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                                {cms?.exteriorGrid?.map((item: any, i: number) => (
                                    <div key={i}>
                                        <h4 className="font-black text-zlendo-grey-dark">{item.title}</h4>
                                        <p className="text-xs text-zlendo-grey-medium font-bold opacity-60 uppercase tracking-wider">{item.desc}</p>
                                    </div>
                                )) || [
                                    { title: 'Gates & Entry', desc: 'Sliding, Swing, Traditional' },
                                    { title: 'Cladding', desc: 'Stone, Tile, Wood finish' },
                                    { title: 'Railings', desc: 'Glass, MS, Stainless Steel' },
                                    { title: 'Outdoor Lite', desc: 'Wall & Garden fixtures' },
                                    { title: 'Roofing', desc: 'Pergolas & Sunshades' },
                                    { title: 'Signage', desc: 'Designer Name Boards' }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <h4 className="font-black text-zlendo-grey-dark">{item.title}</h4>
                                        <p className="text-xs text-zlendo-grey-medium font-bold opacity-60 uppercase tracking-wider">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. LANDSCAPING DESIGN */}
                <section className="py-16 bg-emerald-50 relative overflow-hidden">
                    <div className="container-custom px-4 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 font-bold text-xs uppercase mb-6">
                                <TreePine className="w-4 h-4" />
                                <span>{cms?.landscapeBadge || 'Garden & Outdoor'}</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-zlendo-grey-dark mb-6">
                                {cms?.landscapeTitle || 'Living with '}
                                <span className="text-emerald-600">{cms?.landscapeTitleHighlight || 'Nature.'}</span>
                            </h2>
                            <p className="text-xl text-zlendo-grey-medium font-medium leading-relaxed">
                                {cms?.landscapeDesc || 'Landscaping designed for Indian rituals, daily living, and tropical climates. From Tulsi maadams to serene courtyard gardens.'}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {resolvedLandscapeCards.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-emerald-100"
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img src={urlFor(feature.image).url() || feature.img} alt={feature.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-xl font-black text-zlendo-grey-dark mb-2">{feature.title}</h3>
                                        <p className="text-sm text-zlendo-grey-medium font-medium leading-relaxed opacity-70">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. STATE-BASED CUSTOMIZATION */}
                <section className="py-20 px-4">
                    <div className="container-custom">
                        <div className="bg-zlendo-grey-dark rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                            {/* Decorative Background */}
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zlendo-teal/10 to-transparent pointer-events-none" />

                            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                                <div className="space-y-8">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-zlendo-teal/20 text-zlendo-teal font-bold text-xs uppercase">
                                        <MapPin className="w-4 h-4" />
                                        <span>{cms?.regionalBadge || 'Regional Specialization'}</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black leading-tight font-nunito">
                                        {cms?.regionalTitle || 'Designs as Diverse'} <br />
                                        <span className="text-zlendo-teal">{cms?.regionalTitleHighlight || 'as India Itself.'}</span>
                                    </h2>
                                    <p className="text-xl text-slate-400 font-medium leading-relaxed">
                                        {cms?.regionalDesc || "Select your state and watch the platform adapt. From Kerala's sloped roofs to Rajasthani courtyards and Metro city minimalism."}
                                    </p>

                                    <div className="space-y-4">
                                        <label className="text-sm font-black uppercase tracking-widest text-white/40">Select Your Region</label>
                                        <div className="relative group">
                                            <select
                                                value={selectedState}
                                                onChange={(e) => setSelectedState(e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-lg font-bold appearance-none hover:bg-white/10 transition-colors cursor-pointer outline-none focus:border-zlendo-teal"
                                            >
                                                {resolvedStates.map(state => (
                                                    <option key={state} value={state} className="bg-zlendo-grey-dark text-white">{state}</option>
                                                ))}
                                            </select>
                                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-zlendo-teal">
                                                <ChevronRight className="w-6 h-6 rotate-90" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6 pt-4">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={`${selectedState}-climate`}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                className="p-4 rounded-2xl bg-white/5 border border-white/10"
                                            >
                                                <h4 className="font-black text-zlendo-teal mb-1">{details.climateTitle}</h4>
                                                <p className="text-xs text-slate-400 font-medium">{details.climateDesc}</p>
                                            </motion.div>
                                        </AnimatePresence>
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={`${selectedState}-culture`}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                className="p-4 rounded-2xl bg-white/5 border border-white/10"
                                            >
                                                <h4 className="font-black text-zlendo-teal mb-1">{details.cultureTitle}</h4>
                                                <p className="text-xs text-slate-400 font-medium">{details.cultureDesc}</p>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-4">
                                        <div className="bg-white/5 rounded-3xl p-6 border border-white/10 hover:border-zlendo-teal/50 transition-colors">
                                            <h5 className="font-black text-white text-lg mb-2">South Indian</h5>
                                            <p className="text-xs text-slate-400 font-medium">Focus on wood, ventilation, and traditional courtyards.</p>
                                        </div>
                                        <div className="bg-white/5 rounded-3xl p-6 border border-white/10 hover:border-zlendo-teal/50 transition-colors">
                                            <h5 className="font-black text-white text-lg mb-2">North Indian</h5>
                                            <p className="text-xs text-slate-400 font-medium">Expansive open spaces and majestic elevations.</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 pt-12">
                                        <div className="bg-white/5 rounded-3xl p-6 border border-white/10 hover:border-zlendo-teal/50 transition-colors">
                                            <h5 className="font-black text-white text-lg mb-2">Modern Metro</h5>
                                            <p className="text-xs text-slate-400 font-medium">Sleek, space-saving designs for city apartments.</p>
                                        </div>
                                        <div className="bg-white/5 rounded-3xl p-6 border border-white/10 hover:border-zlendo-teal/50 transition-colors">
                                            <h5 className="font-black text-white text-lg mb-2">Coastal Style</h5>
                                            <p className="text-xs text-slate-400 font-medium">Corrosion-resistant materials and airy floor plans.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5.5. DESIGN LIBRARY */}
                <section className="py-20 bg-slate-50 relative overflow-hidden">
                    <div className="container-custom px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-zlendo-teal/10 text-zlendo-teal font-bold text-xs uppercase mb-6">
                                <Box className="w-4 h-4" />
                                <span>3D Design Library</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zlendo-grey-dark mb-6 leading-tight">
                                Instant Interiors. <br />
                                <span className="text-zlendo-teal">Drag. Drop. Done.</span>
                            </h2>
                            <p className="text-xl text-zlendo-grey-medium font-medium leading-relaxed max-w-2xl mx-auto">
                                Skip the modeling phase. Access thousands of ready-to-use 3D assets to create stunning, accurate spaces in minutes instead of hours.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                            {/* Feature 1 */}
                            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow text-center">
                                <div className="w-16 h-16 mx-auto bg-zlendo-teal/10 rounded-2xl flex items-center justify-center mb-6">
                                    <Box className="w-8 h-8 text-zlendo-teal" />
                                </div>
                                <h3 className="text-xl font-black text-zlendo-grey-dark mb-3">10,000+ Assets</h3>
                                <p className="text-zlendo-grey-medium font-medium text-sm leading-relaxed">
                                    From luxury sofas to standard bathroom fixtures. Everything you need to furnish a complete home.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-zlendo-grey-dark rounded-[2rem] p-8 shadow-xl text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-zlendo-teal/20 to-transparent opacity-50" />
                                <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                                    <Sparkles className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-black text-white mb-3 relative z-10">One-Click Styling</h3>
                                <p className="text-white/70 font-medium text-sm leading-relaxed relative z-10">
                                    Drag and drop elements directly into your floorplan. Zero complex 3D modeling required.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow text-center">
                                <div className="w-16 h-16 mx-auto bg-zlendo-orange/10 rounded-2xl flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-8 h-8 text-zlendo-orange" />
                                </div>
                                <h3 className="text-xl font-black text-zlendo-grey-dark mb-3">Instant Budgets</h3>
                                <p className="text-zlendo-grey-medium font-medium text-sm leading-relaxed">
                                    Standard items map directly to real-world costs—generating accurate budget estimates automatically.
                                </p>
                            </div>
                        </div>

                        <div className="text-center">
                            <a
                                href="https://app.zlendorealty.com/design-library"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-10 py-5 bg-zlendo-teal text-white font-black text-lg rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-zlendo-teal/30"
                            >
                                Explore the Library <ChevronRight className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* 6. CULTURE & RELIGION AWARENESS */}
                <section className="py-16 bg-white">
                    <div className="container-custom px-4 text-center">
                        <div className="bg-zlendo-teal/5 inline-flex p-1 rounded-2xl mb-8 border border-zlendo-teal/10">
                            <span className="px-6 py-2 rounded-xl bg-zlendo-teal text-white font-bold text-sm">{cms?.cultureBadge || 'Respecting Beliefs, Not Just Taste.'}</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-zlendo-grey-dark mb-16">
                            {cms?.cultureTitle || 'Religion & Tradition '}
                            <span className="text-zlendo-teal">{cms?.cultureTitleHighlight || 'Sensitive.'}</span>
                        </h2>

                        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                            {resolvedCulturePoints.map((point, i) => (
                                <div key={i} className="space-y-6">
                                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto ${point.colorTheme === 'orange' ? 'bg-zlendo-orange/10' : point.colorTheme === 'purple' ? 'bg-purple-100' : 'bg-zlendo-teal/10'}`}>
                                        {i === 0 ? <Sparkles className="w-8 h-8 text-zlendo-teal" /> : i === 1 ? <History className="w-8 h-8 text-zlendo-orange" /> : <Users className="w-8 h-8 text-purple-600" />}
                                    </div>
                                    <h3 className="font-black text-xl text-zlendo-grey-dark">{point.title}</h3>
                                    <p className="text-zlendo-grey-medium font-medium text-sm leading-relaxed">{point.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. FINAL CTA */}
                <section className="py-20 bg-slate-50 relative overflow-hidden">
                    <div className="container-custom px-4 text-center relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-zlendo-grey-dark mb-8">
                            {cms?.ctaTitle || 'Ready to Design Your '} <br />
                            <span className="text-zlendo-teal">{cms?.ctaTitleHighlight || 'True Indian Home?'}</span>
                        </h2>
                        <p className="text-xl text-zlendo-grey-medium font-medium max-w-2xl mx-auto mb-12 opacity-80">
                            {cms?.ctaDesc || "Don't settle for generic templates. Experience a home that understands your culture, your state, and your lifestyle."}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a
                                href={SIGNUP_URL}
                                className="px-12 py-5 bg-zlendo-teal text-white rounded-2xl font-black text-xl shadow-2xl shadow-zlendo-teal/30 hover:scale-105 transition-all flex items-center justify-center gap-3 text-center"
                            >
                                <Home className="w-6 h-6" /> Design My Home
                            </a>
                            <a
                                href={SIGNUP_URL}
                                className="px-12 py-5 bg-white text-zlendo-grey-dark border-2 border-slate-200 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all text-center"
                            >
                                View 3D Library
                            </a>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-zlendo-teal/10 rounded-full blur-[100px]" />
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-zlendo-orange/10 rounded-full blur-[100px]" />
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
