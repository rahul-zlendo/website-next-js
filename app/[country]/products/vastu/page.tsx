'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Ruler, Sparkles,
    CheckCircle2, Play, Zap, Upload, Image as ImageIcon,
    ChevronDown, Star, ShieldCheck, ThumbsUp, X
} from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';

export default function VastuPage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const product = {
        title: 'Vastu Optimizer',
        subtitle: 'Align your home with ancient wisdom',
        headerDesc: 'Combine modern design with Vastu Shastra principles. Our automated analysis ensures your home brings health, wealth, and harmony.',
        icon: Ruler,
        gradient: 'from-amber-500 to-orange-400',
        heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2400',
        features: [
            { title: 'Energy Mapping', desc: 'Visual heatmap of Vastu zones in your floor plan.' },
            { title: 'Remedy Suggestions', desc: 'Non-destructive fixes for existing Vastu defects.' },
            { title: 'Directional Check', desc: 'Precise compass alignment using satellite data.' },
            { title: 'Scorecard', desc: 'Get a Vastu compliance score for every room.' }
        ],
        steps: [
            { title: 'Upload Floor Plan', desc: 'Upload your layout and orient it towards North.', image: '/assets/vastu/upload-plan.png' },
            { title: 'Analyze', desc: 'AI scans the placement of rooms, doors, and furniture.', image: '/assets/floor-planner/3d-sketch.png' },
            { title: 'View Issues', desc: 'Identify problem areas affecting health or wealth.', image: '/assets/floor-planner/2d-sketch.png' },
            { title: 'Apply Remedies', desc: 'Implement suggested changes and improved layout.', image: '/assets/2d-to-3d/dashboard-interface.png' }
        ]
    };

    const faqs = [
        {
            q: "What is the Vastu Optimizer?",
            a: "The Vastu Optimizer provides layout recommendations based on traditional Vastu house plan design principles, helping align home planning with cultural and regional preferences."
        },
        {
            q: "Is it mandatory to use?",
            a: "No. Using Vastu suggestions is completely optional. You decide which recommendations to follow while designing your home."
        },
        {
            q: "What suggestions does it provide?",
            a: "It may suggest entrance direction, room placement, and orientation based on commonly followed Indian house plan design guidelines."
        },
        {
            q: "Can I ignore some suggestions?",
            a: "Yes. All recommendations are advisory only. You retain full control over your final house plan layout."
        },
        {
            q: "Is it useful for apartments?",
            a: "Yes. The Vastu Optimizer works for apartments, villas, and independent homes, adapting to different residential layouts."
        },
        {
            q: "Will it force layout changes?",
            a: "No. The tool never enforces changes. It only provides guidance — final design decisions are always yours."
        }
    ];

    return (
        <div className="bg-white min-h-screen font-nunito pt-4">
            {/* 1. HERO SECTION */}
            <section className="bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
                <div className="container-custom px-6 py-12 lg:py-20">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="max-w-2xl"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm mb-8"
                            >
                                <Sparkles className="w-4 h-4 text-zlendo-teal animate-pulse" />
                                <span className="text-xs font-black uppercase tracking-widest text-zlendo-grey-dark">Vastu-Compliant Design Logic</span>
                            </motion.div>

                            <h1 className="text-4xl lg:text-6xl font-black font-nunito text-zlendo-grey-dark mb-6 leading-[1.1]">
                                {product.subtitle}
                            </h1>
                            <p className="text-xl text-zlendo-grey-medium font-medium mb-10 leading-relaxed max-w-lg">
                                {product.headerDesc}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                <a
                                    href={SIGNUP_URL}
                                    className="px-8 py-4 bg-zlendo-teal hover:bg-zlendo-teal-dark text-white rounded-xl font-black text-lg shadow-xl shadow-zlendo-teal/20 transition-all hover:scale-105 flex items-center justify-center"
                                >
                                    Start for Free
                                </a>
                                <button
                                    onClick={() => setIsVideoOpen(true)}
                                    className="px-8 py-4 bg-white border-2 border-slate-200 text-zlendo-grey-dark rounded-xl font-bold text-lg hover:border-zlendo-teal/30 hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                                >
                                    <Play className="w-5 h-5 fill-current" /> Watch Video
                                </button>
                            </div>

                            <div className="flex items-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                                <div className="flex items-center gap-1">
                                    <ShieldCheck className="w-5 h-5 text-zlendo-teal" />
                                    <span className="font-bold text-sm">Enterprise Ready</span>
                                </div>
                                <div className="h-4 w-px bg-slate-300" />
                                <div className="flex items-center gap-1">
                                    <Star className="w-5 h-5 text-amber-500 fill-current" />
                                    <span className="font-bold text-sm">4.9/5 Rating</span>
                                </div>
                                <div className="h-4 w-px bg-slate-300" />
                                <div className="flex items-center gap-1">
                                    <ThumbsUp className="w-5 h-5 text-blue-500" />
                                    <span className="font-bold text-sm">Modern Wisdom</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/5">
                                <img
                                    src={product.heroImage}
                                    alt={product.title}
                                    className="w-full h-auto object-cover"
                                />
                                {/* Overlay UI Mockups */}
                                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg border border-white/50 animate-bounce-slow hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg bg-gradient-to-br ${product.gradient} text-white`}>
                                            <Zap className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-500 uppercase">Vastu Review</div>
                                            <div className="text-lg font-black text-slate-800">Perfectly Aligned</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative Blurs */}
                            <div className={`absolute -inset-10 bg-gradient-to-tr ${product.gradient} opacity-20 blur-[100px] -z-10`} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. SMART UPLOAD ZONE */}
            <section className="py-16 bg-slate-50 relative overflow-hidden">
                <div className="container-custom px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="group relative cursor-pointer">
                            <a href={SIGNUP_URL} className="absolute inset-0 z-20" />
                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-[2.5rem] opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500" />

                            <div className="relative bg-white rounded-[2rem] border-2 border-dashed border-slate-300 group-hover:border-orange-500 transition-all duration-300 p-10 md:p-16 flex flex-col items-center text-center overflow-hidden">
                                <div className="mb-8 relative w-24 h-24 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-orange-500/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Upload className="w-10 h-10 text-orange-600" />
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-black font-nunito text-zlendo-grey-dark mb-4 group-hover:text-orange-600 transition-colors">
                                    Analyze your floor plan
                                </h2>
                                <p className="text-lg text-slate-500 font-medium mb-8 max-w-lg">
                                    Upload your plan to see a complete heatmap of Vastu energy zones and receive expert layout corrections.
                                </p>

                                <button className="px-8 py-4 bg-orange-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform flex items-center gap-2">
                                    <ImageIcon className="w-5 h-5" /> Select Floor Plan to Analyze
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. ZIG-ZAG STEPS */}
            <section className="py-12 lg:py-20 bg-white">
                <div className="container-custom px-6 text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl font-black text-zlendo-grey-dark mb-4">How It Works</h2>
                    <p className="text-xl text-zlendo-grey-medium font-medium">Four simple steps to a Vastu-compliant home.</p>
                </div>

                <div className="container-custom px-6 space-y-24">
                    {product.steps?.map((step, i) => (
                        <div key={i} className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center group">
                            <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 font-black text-xl mb-6 ring-4 ring-white shadow-lg">
                                    {i + 1}
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-black text-zlendo-grey-dark mb-6">{step.title}</h3>
                                <p className="text-lg text-zlendo-grey-medium leading-relaxed font-medium mb-8">
                                    {step.desc}
                                </p>
                            </div>
                            <div className={`${i % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                                <div className="absolute inset-0 bg-slate-100 rounded-[3rem] transform rotate-3 scale-95 group-hover:rotate-6 transition-transform duration-500" />
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="relative z-10 w-full rounded-[2rem] shadow-xl"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. FEATURES GRID */}
            <section className="py-12 bg-slate-50 border-y border-slate-200">
                <div className="container-custom px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {product.features.map((feature, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white mb-6 shadow-md`}>
                                    <CheckCircle2 className="w-7 h-7" />
                                </div>
                                <h4 className="text-xl font-black text-zlendo-grey-dark mb-3 leading-tight">{feature.title}</h4>
                                <p className="text-slate-500 font-medium leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. FAQ */}
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

            {/* Video Modal Overlay */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsVideoOpen(false)}
                        className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl bg-black rounded-3xl overflow-hidden shadow-2xl aspect-video border border-white/10"
                        >
                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-sm"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/ttZcXOgmrNY?autoplay=1"
                                title="Vastu Demo Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
