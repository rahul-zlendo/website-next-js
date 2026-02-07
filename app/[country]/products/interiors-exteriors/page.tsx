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

const ModernPathwayImg = '/assets/interior-exterior/modern-pathway.png';


const indianStates = [
    'Tamil Nadu', 'Kerala', 'Karnataka', 'Maharashtra', 'Telangana', 'Andhra Pradesh', 'Delhi', 'Rajasthan', 'Punjab', 'West Bengal'
];

export default function InteriorsExteriorsPage() {
    const [selectedState, setSelectedState] = useState('Tamil Nadu');
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

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
                                    <span className="text-xs font-black uppercase tracking-widest text-zlendo-grey-dark">Region-Aware Design Platform</span>
                                </motion.div>

                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-zlendo-grey-dark leading-[1.1]">
                                    Indian Homes.<br />
                                    <span className="text-zlendo-teal">Indian Lifestyles.</span><br />
                                    Designed Smarter.
                                </h1>

                                <p className="text-xl text-zlendo-grey-medium font-medium leading-relaxed max-w-xl">
                                    More than just decoration. Experience design intelligence that respects your culture, climate, and religious preferences across every state in India.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href={SIGNUP_URL}
                                        className="px-8 py-4 bg-zlendo-teal text-white rounded-xl font-black text-lg shadow-xl shadow-zlendo-teal/20 hover:scale-105 transition-all flex items-center justify-center gap-2 text-center"
                                    >
                                        Design My Home <ChevronRight className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={SIGNUP_URL}
                                        className="px-8 py-4 bg-white text-zlendo-grey-dark border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all text-center"
                                    >
                                        Explore Local Styles
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
                                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
                                        alt="Modern Indian Interior"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8">
                                        <div className="flex items-center gap-3 text-white mb-2">
                                            <MapPin className="w-5 h-5 text-zlendo-orange" />
                                            <span className="font-bold">Kerala-Style Sustainable Villa</span>
                                        </div>
                                        <p className="text-white/80 text-sm font-medium">Auto-suggested for coastal climates and traditional aesthetics.</p>
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
                            <h2 className="text-3xl md:text-5xl font-black text-zlendo-grey-dark mb-6">Built for the Way <span className="text-zlendo-teal">Indians Live</span></h2>
                            <p className="text-xl text-zlendo-grey-medium font-medium leading-relaxed opacity-80">
                                Thousands of design elements that reflect real Indian usage patterns—not just showroom designs. From clever storage to traditional motifs.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
                                <div className="w-14 h-14 bg-zlendo-teal/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <Layers className="w-7 h-7 text-zlendo-teal" />
                                </div>
                                <h3 className="text-2xl font-black text-zlendo-grey-dark mb-6">Walls & Finishes</h3>
                                <ul className="space-y-4">
                                    {[
                                        'Regional textures (Stone, Marble)',
                                        'Climate-tested exterior paints',
                                        'Designer wall cladding (PVC/Wood)',
                                        'Indian-inspired decals & murals'
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-zlendo-grey-medium font-medium text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-zlendo-teal shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group lg:translate-y-8">
                                <div className="w-14 h-14 bg-zlendo-orange/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <Box className="w-7 h-7 text-zlendo-orange" />
                                </div>
                                <h3 className="text-2xl font-black text-zlendo-grey-dark mb-6">Essential Furniture</h3>
                                <ul className="space-y-4">
                                    {[
                                        'Custom-fit Wardrobes & TV Units',
                                        'Traditional & Modern Pooja Units',
                                        'Compact Dining & Crockery Units',
                                        'Multipurpose Seating (Diwan/Sofa)'
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-zlendo-grey-medium font-medium text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-zlendo-orange shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group lg:translate-y-16">
                                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <Sparkles className="w-7 h-7 text-purple-600" />
                                </div>
                                <h3 className="text-2xl font-black text-zlendo-grey-dark mb-6">Decorative Touches</h3>
                                <ul className="space-y-4">
                                    {[
                                        'Handpicked Indian Art Frames',
                                        'Custom Lighting (Jhumars/Sconces)',
                                        'Traditional Accent Walls',
                                        'Rugs & Soft Furnishings'
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-zlendo-grey-medium font-medium text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
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
                                        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000" alt="Exterior" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="rounded-3xl overflow-hidden aspect-square shadow-lg border-2 border-white">
                                        <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1000" alt="Exterior Details" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="space-y-4 pt-12">
                                    <div className="rounded-3xl overflow-hidden aspect-square shadow-lg border-2 border-white">
                                        <img src="https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&q=80&w=1000" alt="Modern Gate" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-lg border-2 border-white">
                                        <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000" alt="Compound Wall" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-zlendo-orange/10 text-zlendo-orange font-bold text-xs uppercase">
                                <Home className="w-4 h-4" />
                                <span>Functional Aesthetics</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-zlendo-grey-dark leading-tight">
                                Exterior Elevation <br />
                                <span className="text-zlendo-orange">That Impresses.</span>
                            </h2>
                            <p className="text-xl text-zlendo-grey-medium font-medium leading-relaxed">
                                From compound walls that secure your sanctuary to modern gates and climate-responsive elevation cladding. We design for durability and appearance.
                            </p>

                            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                                {[
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
                                <span>Garden & Outdoor</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-zlendo-grey-dark mb-6">Living with <span className="text-emerald-600">Nature.</span></h2>
                            <p className="text-xl text-zlendo-grey-medium font-medium leading-relaxed">
                                Landscaping designed for Indian rituals, daily living, and tropical climates. From Tulsi maadams to serene courtyard gardens.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: 'Courtyard Zen', desc: 'Indoor-outdoor living with native plants.', img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800' },
                                { title: 'Traditional Elements', desc: 'Tulsi maadam and stone statues.', img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800' },
                                { title: 'Modern Pathways', desc: 'Stone paving and lawn integration.', img: ModernPathwayImg },
                                { title: 'Leisure Spaces', desc: 'Garden swings and custom seating.', img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=800' }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-emerald-100"
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img src={feature.img} alt={feature.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
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
                                        <span>Regional Specialization</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black leading-tight font-nunito">
                                        Designs as Diverse <br />
                                        <span className="text-zlendo-teal">as India Itself.</span>
                                    </h2>
                                    <p className="text-xl text-slate-400 font-medium leading-relaxed">
                                        Select your state and watch the platform adapt. From Kerala's sloped roofs to Rajasthani courtyards and Metro city minimalism.
                                    </p>

                                    <div className="space-y-4">
                                        <label className="text-sm font-black uppercase tracking-widest text-white/40">Select Your Region</label>
                                        <div className="relative group">
                                            <select
                                                value={selectedState}
                                                onChange={(e) => setSelectedState(e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-lg font-bold appearance-none hover:bg-white/10 transition-colors cursor-pointer outline-none focus:border-zlendo-teal"
                                            >
                                                {indianStates.map(state => (
                                                    <option key={state} value={state} className="bg-zlendo-grey-dark text-white">{state}</option>
                                                ))}
                                            </select>
                                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-zlendo-teal">
                                                <ChevronRight className="w-6 h-6 rotate-90" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6 pt-4">
                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                            <h4 className="font-black text-zlendo-teal mb-1">Climate-First</h4>
                                            <p className="text-xs text-slate-400 font-medium">Materials chosen for local weather conditions.</p>
                                        </div>
                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                            <h4 className="font-black text-zlendo-teal mb-1">Cultural Nuance</h4>
                                            <p className="text-xs text-slate-400 font-medium">Layouts that respect regional family dynamics.</p>
                                        </div>
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

                {/* 6. CULTURE & RELIGION AWARENESS */}
                <section className="py-16 bg-white">
                    <div className="container-custom px-4 text-center">
                        <div className="bg-zlendo-teal/5 inline-flex p-1 rounded-2xl mb-8 border border-zlendo-teal/10">
                            <span className="px-6 py-2 rounded-xl bg-zlendo-teal text-white font-bold text-sm">Respecting Beliefs, Not Just Taste.</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-zlendo-grey-dark mb-16">Religion & Tradition <span className="text-zlendo-teal">Sensitive.</span></h2>

                        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                            <div className="space-y-6">
                                <div className="w-20 h-20 bg-zlendo-teal/10 rounded-full flex items-center justify-center mx-auto">
                                    <Sparkles className="w-8 h-8 text-zlendo-teal" />
                                </div>
                                <h3 className="font-black text-xl text-zlendo-grey-dark">Pooja Room Placement</h3>
                                <p className="text-zlendo-grey-medium font-medium text-sm leading-relaxed">
                                    Vastu-compliant directions and specialized units designed for sacred spaces in every home.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="w-20 h-20 bg-zlendo-orange/10 rounded-full flex items-center justify-center mx-auto">
                                    <History className="w-8 h-8 text-zlendo-orange" />
                                </div>
                                <h3 className="font-black text-xl text-zlendo-grey-dark">Traditional Motifs</h3>
                                <p className="text-zlendo-grey-medium font-medium text-sm leading-relaxed">
                                    Integration of religious symbols and cultural art forms that hold deep personal meaning.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                                    <Users className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="font-black text-xl text-zlendo-grey-dark">Regional Rituals</h3>
                                <p className="text-zlendo-grey-medium font-medium text-sm leading-relaxed">
                                    Spatial planning that considers local traditions like swing placement or entry-way rituals.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. FINAL CTA */}
                <section className="py-20 bg-slate-50 relative overflow-hidden">
                    <div className="container-custom px-4 text-center relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-zlendo-grey-dark mb-8">Ready to Design Your <br /><span className="text-zlendo-teal">True Indian Home?</span></h2>
                        <p className="text-xl text-zlendo-grey-medium font-medium max-w-2xl mx-auto mb-12 opacity-80">
                            Don't settle for generic templates. Experience a home that understands your culture, your state, and your lifestyle.
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
                        <h2 className="text-3xl font-black text-center text-zlendo-grey-dark mb-8">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
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

const faqs = [
    {
        q: "What does this feature help with?",
        a: "This feature helps you visualize both interior and exterior aspects of a building through realistic 3D architectural visualization, providing a complete design preview before construction."
    },
    {
        q: "Can I preview the building exterior?",
        a: "Yes. You can view elevations and external appearance using detailed 3D home elevation design and exterior elevation design, helping you make confident design decisions."
    },
    {
        q: "Does it support regional styles?",
        a: "Yes. Designs can be adapted to match local architectural preferences, making it ideal for Indian house plan design and region-specific residential projects."
    },
    {
        q: "Can I try different materials and colors?",
        a: "Yes. You can experiment with finishes, textures, and color combinations using realistic 3D rendering, helping finalize exterior and elevation designs accurately."
    },
    {
        q: "How does this help practically?",
        a: "Early 3D building visualization helps identify design issues in advance, reducing costly changes during construction and improving execution accuracy."
    },
    {
        q: "Can I share visuals with others?",
        a: "Yes. You can easily share design visuals with family members, clients, or stakeholders, making reviews and approvals faster and smoother."
    }
];
