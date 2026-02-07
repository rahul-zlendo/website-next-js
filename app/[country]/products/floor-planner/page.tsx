'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
    Layout, Upload, PenTool, Home, ArrowRight, Play,
    CheckCircle2, Sparkles, Zap, Layers, User, Briefcase,
    ChevronDown
} from 'lucide-react';
import Link from 'next/link';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { useCountry } from '@/lib/context/CountryContext';
const ThreeDSketchImg = '/assets/floor-planner/3d-sketch.png';
const TwoDSketchImg = '/assets/floor-planner/2d-sketch.png';

export default function FloorPlannerPage() {
    const { getPath, paths } = useCountry();
    const { scrollYProgress } = useScroll();
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const opacityY = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <div className="bg-white min-h-screen font-nunito pt-4 selection:bg-zlendo-teal/20 selection:text-zlendo-teal">
{/* SEOHead removed - metadata handled by layout.tsx */}
            {/* 1. IMMERSIVE HERO SECTION */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#fafafa]">
                {/* Abstract Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-gradient-to-bl from-zlendo-teal/10 via-purple-100 to-transparent rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-gradient-to-tr from-orange-100 via-pink-100 to-transparent rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4" />
                    <div className="absolute inset-0 opacity-[0.4]"
                        style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                    />
                </div>

                <div className="container-custom px-6 relative z-10 w-full pt-4">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm mb-8"
                        >
                            <Sparkles className="w-4 h-4 text-zlendo-teal animate-pulse" />
                            <span className="text-xs font-black uppercase tracking-widest text-zlendo-grey-dark">AI-First Design Engine</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                            className="text-5xl md:text-7xl font-black font-nunito text-zlendo-grey-dark mb-8 leading-[1.05] tracking-tight"
                        >
                            Design. Visualize.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-600">Experience.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-xl md:text-2xl text-zlendo-grey-medium font-medium mb-12 max-w-3xl mx-auto leading-relaxed"
                        >
                            Your Home — Before a Single Brick Is Laid.<br />
                            <span className="opacity-60 text-base md:text-lg">Experience the world's most advanced AI floor planner, built for Indian homes.</span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                        >
                            <a
                                href={SIGNUP_URL}
                                className="px-10 py-5 bg-zlendo-teal text-white rounded-2xl font-black text-xl shadow-[0_20px_40px_-10px_rgba(13,148,136,0.3)] hover:scale-105 hover:shadow-xl transition-all flex items-center gap-2 group text-center"
                            >
                                Design Your Home <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <Link
                                href={paths.enterpriseDemo}
                                className="px-10 py-5 bg-white text-zlendo-grey-dark border border-black/5 rounded-2xl font-bold text-xl hover:bg-slate-50 hover:border-black/10 transition-all flex items-center gap-2 text-center"
                            >
                                <Play className="w-5 h-5 fill-current" /> Watch Demo
                            </Link>
                        </motion.div>

                        {/* Floating Dashboard Preview */}
                        <motion.div
                            style={{ y: heroY, opacity: opacityY }}
                            className="relative mx-auto max-w-6xl"
                        >
                            <div className="relative rounded-t-[32px] overflow-hidden shadow-2xl border-x-8 border-t-8 border-white bg-slate-900 aspect-[16/9] mx-4 md:mx-0 ring-1 ring-black/10">
                                <img
                                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2400"
                                    alt="Zlendo Realty Floor Planner Interface"
                                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                                />
                                {/* UI Overlays simulating interface */}
                                <div className="absolute top-8 left-8 flex gap-4">
                                    {/* <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl border border-white/20" />
                                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl border border-white/20" />
                                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl border border-white/20" /> */}
                                </div>
                                {/* <div className="absolute top-8 right-8 w-64 h-16 bg-white/10 backdrop-blur-md rounded-xl border border-white/20" /> */}

                                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. STORY FLOW - THE JOURNEY */}
            <section className="pt-20 pb-8 md:py-20 bg-white relative z-20">
                <div className="container-custom px-6">
                    <div className="text-center mb-12 max-w-2xl mx-auto">
                        <span className="text-zlendo-teal font-black uppercase tracking-widest text-xs mb-4 block">The Workflow</span>
                        <h2 className="text-3xl md:text-5xl font-black font-nunito text-zlendo-grey-dark mb-6">From Imagination to Realty</h2>
                        <p className="text-xl text-zlendo-grey-medium font-medium">A seamless journey powered by artificial intelligence.</p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-4 relative">

                        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-100 -z-10" />

                        {[
                            { step: '01', title: 'Imagine', desc: 'Concept', icon: Sparkles },
                            { step: '02', title: 'Design', desc: 'Layout', icon: PenTool },
                            { step: '03', title: 'Convert', desc: 'AI Processing', icon: Zap },
                            { step: '04', title: 'Customize', desc: 'Personalize', icon: Layers },
                            { step: '05', title: 'Experience', desc: 'Live Immersive', icon: Home },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center mb-6 group-hover:border-zlendo-teal group-hover:scale-110 transition-all duration-300 relative z-10">
                                    <item.icon className="w-8 h-8 text-zlendo-grey-medium group-hover:text-zlendo-teal transition-colors" />
                                </div>
                                <h3 className="text-xl font-black text-zlendo-grey-dark mb-2">{item.title}</h3>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. START FROM SCRATCH */}
            <section className="py-20 bg-slate-50 overflow-hidden relative">
                <div className="container-custom px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-bold text-xs uppercase tracking-widest mb-6">
                                <PenTool className="w-3 h-3" /> Precision Tools
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black font-nunito text-zlendo-grey-dark mb-6 leading-tight">
                                Draw like a pro.<br />No degree required.
                            </h2>
                            <p className="text-xl text-zlendo-grey-medium font-medium mb-10 leading-relaxed">
                                Our intelligent snapping system and AI-assisted drafting make drawing floor plans as easy as sketching on a napkin. Define exact dimensions to the millimeter.
                            </p>

                            <ul className="space-y-6 mb-12">
                                {[
                                    'Intelligent Wall Snapping',
                                    'Auto-Dimensioning',
                                    'Drag & Drop Doors/Windows',
                                    'Multi-Story Support'
                                ].map((feat, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-4 text-lg font-bold text-slate-700"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        {feat}
                                    </motion.li>
                                ))}
                            </ul>

                            <a href={SIGNUP_URL} className="text-blue-600 font-black text-lg underline decoration-2 underline-offset-4 hover:text-blue-700">
                                Try Drafting Now
                            </a>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-20 blur-3xl rounded-full" />
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                            >
                                <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=1200" alt="Drafting Tool" className="w-full h-auto" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. MAGIC MOMENT - UPLOAD */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zlendo-teal opacity-20 blur-[120px] rounded-full" />

                <div className="container-custom px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zlendo-teal/20 text-zlendo-teal border border-zlendo-teal/30 font-bold text-xs uppercase tracking-widest mb-6">
                            <Zap className="w-3 h-3" /> The Magic
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black font-nunito mb-8">
                            Don't draw.<br />Just <span className="text-zlendo-teal">upload.</span>
                        </h2>
                        <p className="text-2xl text-slate-300 font-medium leading-relaxed">
                            Our proprietary Vision AI understands your hand-drawn sketches or architect PDFs and converts them into editable 3D models in seconds.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        {/* Input */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-3xl"
                        >
                            <div className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">Input</div>
                            <img src={TwoDSketchImg} alt="Sketch" className="rounded-xl w-full opacity-80" />
                            <div className="mt-4 text-center font-black text-xl">Your Sketch</div>
                        </motion.div>

                        {/* Process */}
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="w-1 bg-gradient-to-b from-transparent via-zlendo-teal to-transparent h-24 md:h-1" />
                            <div className="w-20 h-20 rounded-full bg-zlendo-teal flex items-center justify-center shadow-[0_0_40px_rgba(13,148,136,0.6)] animate-pulse">
                                <Upload className="w-8 h-8 text-white" />
                            </div>
                            <div className="mt-4 font-black text-zlendo-teal text-xl">AI Processing</div>
                            <div className="text-sm font-bold text-slate-500">~0.8 Seconds</div>
                        </div>

                        {/* Output */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-3xl"
                        >
                            <div className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">Result</div>
                            <img src={ThreeDSketchImg} alt="3D Model" className="rounded-xl w-full" />
                            <div className="mt-4 text-center font-black text-xl">Interactive 3D</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5. ARCHITECT TEMPLATES (INDIA CONTEXT) */}
            <section className="py-20 bg-white">
                <div className="container-custom px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="grid grid-cols-2 gap-4">
                                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-lg mt-12 w-full" alt="Indian Home 1" />
                                <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-lg w-full" alt="Indian Home 2" />
                            </div>
                            {/* Floating Vastu Badge */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl border border-orange-100 flex items-center gap-3">
                                <div className="p-3 bg-orange-100 rounded-xl text-orange-600">
                                    <Layout className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <div className="font-black text-zlendo-grey-dark">Vastu Compliant</div>
                                    <div className="text-xs font-bold text-slate-400">100+ Templates</div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 font-bold text-xs uppercase tracking-widest mb-6">
                                <Home className="w-3 h-3" /> Built for India
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black font-nunito text-zlendo-grey-dark mb-6 leading-tight">
                                Ready-made templates for <span className="text-orange-500">Indian Families.</span>
                            </h2>
                            <p className="text-xl text-zlendo-grey-medium font-medium mb-10 leading-relaxed">
                                Don't start from scratch. Choose from thousands of pre-designed layouts optimized for 2BHK, 3BHK, and Villa configurations standard in Indian real estate.
                            </p>
                            <div className="flex flex-wrap gap-4 mb-10">
                                {['3BHK North Facing', '2BHK Compact', 'Luxury Villa', 'Pooja Room Added'].map(tag => (
                                    <span key={tag} className="px-5 py-2 rounded-full border border-slate-200 text-slate-600 font-bold hover:border-orange-200 hover:text-orange-600 hover:bg-orange-50 transition-colors cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Link href={getPath('/viewalltemplates')} className="px-8 py-4 bg-zlendo-grey-dark text-white rounded-xl font-bold hover:bg-black transition-colors inline-block text-center">
                                Explore Templates
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. SPLIT CTA - INDIVIDUAL VS ENTERPRISE */}
            <section className="pt-24 pb-4 md:py-24 bg-slate-50">
                <div className="container-custom px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-zlendo-grey-dark mb-4">Choose your path</h2>
                        <p className="text-xl text-slate-500 font-medium">Tailored experiences for every need.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Individual Card */}
                        <div className="bg-white p-10 rounded-[40px] shadow-xl border border-slate-100 hover:border-zlendo-teal/30 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <User className="w-32 h-32" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-zlendo-teal/10 text-zlendo-teal flex items-center justify-center mb-6">
                                    <User className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-black text-zlendo-grey-dark mb-4">Homeowners</h3>
                                <p className="text-slate-500 font-medium mb-8 min-h-[80px]">
                                    Design your dream home, visualize renovations, and get cost estimates in minutes.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center gap-3 font-bold text-slate-700"><CheckCircle2 className="w-5 h-5 text-zlendo-teal" /> Free for personal use</li>
                                    <li className="flex items-center gap-3 font-bold text-slate-700"><CheckCircle2 className="w-5 h-5 text-zlendo-teal" /> 1 Project included</li>
                                    <li className="flex items-center gap-3 font-bold text-slate-700"><CheckCircle2 className="w-5 h-5 text-zlendo-teal" /> Basic 4K Renders</li>
                                </ul>
                                <a
                                    href={SIGNUP_URL}
                                    className="w-full py-4 rounded-xl bg-zlendo-teal text-white font-black text-lg hover:bg-zlendo-teal-dark transition-colors inline-block text-center"
                                >
                                    Start Designing Free
                                </a>
                            </div>
                        </div>

                        {/* Enterprise Card */}
                        <div className="bg-slate-900 text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Briefcase className="w-32 h-32" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6 border border-white/10">
                                    <Briefcase className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-black text-white mb-4">Architects & Builders</h3>
                                <p className="text-slate-400 font-medium mb-8 min-h-[80px]">
                                    Scale your business with high-speed rendering, white-labeled client portals, and collaborative tools.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center gap-3 font-bold text-slate-300"><CheckCircle2 className="w-5 h-5 text-blue-400" /> Unlimited Projects</li>
                                    <li className="flex items-center gap-3 font-bold text-slate-300"><CheckCircle2 className="w-5 h-5 text-blue-400" /> 8K & VR Walkthroughs</li>
                                    <li className="flex items-center gap-3 font-bold text-slate-300"><CheckCircle2 className="w-5 h-5 text-blue-400" /> Team Collaboration</li>
                                </ul>
                                <Link
                                    href={paths.enterpriseDemo}
                                    className="w-full py-4 rounded-xl bg-white text-slate-900 font-black text-lg hover:bg-slate-200 transition-colors inline-block text-center"
                                >
                                    Request Enterprise Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FAQ */}
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
        </div>
    );
}

const faqs = [
    {
        q: "What is the AI Floor Planner used for?",
        a: "The AI Floor Planner helps create accurate house plans and residential home plans digitally. Using professional floor plan design services, you can design rooms, walls, doors, and windows while visualizing the layout through realistic 3D house design and 3D architectural visualization."
    },
    {
        q: "Do I need architectural knowledge to use it?",
        a: "No. Our platform is designed as a home plan designer online, making it easy for beginners to create layouts using intuitive online home plan services without any architectural background."
    },
    {
        q: "Can I change the layout after creating the plan?",
        a: "Yes. You can modify your 2D house plan design anytime by resizing rooms, moving walls, or adjusting layouts. All changes are updated instantly, helping finalize accurate residential building plans."
    },
    {
        q: "Does it show a real-time 3D preview?",
        a: "Yes. The design updates instantly with a live 3D floor plan design, allowing you to experience realistic space planning through advanced 3D architectural visualization."
    },
    {
        q: "Can I share this with architects or contractors?",
        a: "Yes. You can save and share your architectural house plans and 3D layouts with architects, engineers, or contractors, supporting smooth coordination during civil and architectural design services."
    },
    {
        q: "Can I save multiple design options?",
        a: "Yes. You can store multiple versions of your custom floor plans online and compare layouts before finalizing the most suitable option for your modern custom home plans or residential project."
    }
];
