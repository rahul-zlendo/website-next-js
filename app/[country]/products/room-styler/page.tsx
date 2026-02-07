'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles,
    CheckCircle2, Play, Zap,
    ChevronDown, Star, ShieldCheck, ThumbsUp, X
} from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';

const ScandinavianImg = '/assets/room-styler/scandinavian.jpg';
const UploadRoomImg = '/assets/2d-to-3d/upload-floorplan.png';
const AIInspirationImg = '/assets/Home-Page/ai-room-inspirtion.png';
const FinalRenderImg = '/assets/Home-Page/living-room/scandinavian-style.jpg';

// Metadata is handled by layout.tsx in Next.js App Router

export default function RoomStylerPage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const product = {
        title: 'Smart Room Styler',
        subtitle: 'AI-driven interior design at your fingertips',
        headerDesc: 'Visualize different styles, furniture layouts, and color palettes instantly. Let AI be your personal interior designer.',
        icon: Sparkles,
        gradient: 'from-purple-500 to-pink-400',
        heroImage: ScandinavianImg,
        features: [
            { title: 'Style Transfer', desc: 'Apply "Modern", "Boho", or "Industrial" themes with one click.' },
            { title: 'Furniture Catalog', desc: 'Access 10,000+ real-world furniture items to place in your room.' },
            { title: 'Lighting Simulation', desc: 'See how your room looks at sunrise, sunset, or night.' },
            { title: 'Material Swapping', desc: 'Instantly change flooring, wall paints, and textures.' }
        ],
        steps: [
            {
                title: 'Select Room',
                desc: 'Choose an existing room model or upload a photo of your empty space.',
                image: UploadRoomImg
            },
            {
                title: 'Choose Style',
                desc: 'Select from our curated list of interior design styles or create your own custom mood board.',
                image: ScandinavianImg
            },
            {
                title: 'AI Composition',
                desc: 'Our AI engine arranges furniture and decor to match the selected style perfectly.',
                image: AIInspirationImg
            },
            {
                title: 'Finalize Look',
                desc: 'Adjust individual items and generate a high-quality photorealistic image.',
                image: FinalRenderImg
            }
        ]
    };

    const faqs = [
        {
            q: "What does Smart Room Styler do?",
            a: "Smart Room Styler automatically suggests furniture layouts, colors, lighting, and décor to help you visualize beautiful interiors using realistic interior 3D design services and advanced 3D architectural visualization."
        },
        {
            q: "Can I choose the design style?",
            a: "Yes. You can select from multiple styles such as modern, traditional, minimal, and contemporary. The system adapts the design to match your preferred interior theme."
        },
        {
            q: "Can I change the suggested furniture?",
            a: "Yes. All elements remain fully customizable. You can modify furniture placement, décor, and layout to create a personalized interior using custom 3D house design tools."
        },
        {
            q: "Does it work for all rooms?",
            a: "Yes. Smart Room Styler supports living rooms, bedrooms, kitchens, home offices, and more, making it suitable for complete residential 3D design services."
        },
        {
            q: "Does it force me to buy products?",
            a: "No. The tool is purely for visual inspiration and planning. It helps you explore interior ideas through 3D design visualization without any purchase obligation."
        },
        {
            q: "Is it useful if I already have ideas?",
            a: "Yes. It helps refine, compare, and validate your ideas visually using realistic 3D rendering, improving clarity before final execution."
        }
    ];

    return (
        <div className="bg-white min-h-screen font-nunito pt-4">
            {/* 1. HERO SECTION */}
            <section className="bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
                <div className="container-custom px-6 py-12 lg:py-20">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
                                <span className="text-xs font-black uppercase tracking-widest text-zlendo-grey-dark">AI-Powered Interior Styling</span>
                            </motion.div>

                            <h1 className="text-4xl lg:text-6xl font-black font-nunito text-zlendo-grey-dark mb-6 leading-[1.1]">
                                {product.subtitle}
                            </h1>
                            <p className="text-xl text-zlendo-grey-medium font-medium mb-10 leading-relaxed max-w-lg">
                                {product.headerDesc}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                <a href={SIGNUP_URL} className="px-8 py-4 bg-zlendo-teal hover:bg-zlendo-teal-dark text-white rounded-xl font-black text-lg shadow-xl shadow-zlendo-teal/20 transition-all hover:scale-105 flex items-center justify-center">
                                    Start for Free
                                </a>
                                <button onClick={() => setIsVideoOpen(true)} className="px-8 py-4 bg-white border-2 border-slate-200 text-zlendo-grey-dark rounded-xl font-bold text-lg hover:border-zlendo-teal/30 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
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
                                    <span className="font-bold text-sm">Interior Master</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/5">
                                <img src={product.heroImage} alt={product.title} className="w-full h-auto object-cover" />
                                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg border border-white/50 hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg bg-gradient-to-br ${product.gradient} text-white`}>
                                            <Zap className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-500 uppercase">AI Styling</div>
                                            <div className="text-lg font-black text-slate-800">Complete</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`absolute -inset-10 bg-gradient-to-tr ${product.gradient} opacity-20 blur-[100px] -z-10`} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. ZIG-ZAG STEPS */}
            <section className="py-12 lg:py-20 bg-white">
                <div className="container-custom px-6 text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl font-black text-zlendo-grey-dark mb-4">How It Works</h2>
                    <p className="text-xl text-zlendo-grey-medium font-medium">Four simple steps to your dream result.</p>
                </div>
                <div className="container-custom px-6 space-y-24">
                    {product.steps.map((step, i) => (
                        <div key={i} className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center group">
                            <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zlendo-teal/10 text-zlendo-teal font-black text-xl mb-6 ring-4 ring-white shadow-lg">{i + 1}</div>
                                <h3 className="text-3xl lg:text-4xl font-black text-zlendo-grey-dark mb-6">{step.title}</h3>
                                <p className="text-lg text-zlendo-grey-medium leading-relaxed font-medium mb-8">{step.desc}</p>
                            </div>
                            <div className={`${i % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                                <img src={step.image} alt={step.title} className="relative z-10 w-full rounded-[2rem] shadow-xl" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. FEATURES GRID */}
            <section className="py-12 bg-slate-50 border-y border-slate-200">
                <div className="container-custom px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {product.features.map((feature, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white mb-6 shadow-md`}>
                                    <CheckCircle2 className="w-7 h-7" />
                                </div>
                                <h4 className="text-xl font-black text-zlendo-grey-dark mb-3 leading-tight">{feature.title}</h4>
                                <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. FAQ */}
            <section className="py-16 bg-white">
                <div className="container-custom px-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-black text-center text-zlendo-grey-dark mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-colors">
                                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full px-6 py-5 flex items-center justify-between text-left bg-transparent">
                                    <span className="text-lg font-bold text-zlendo-grey-dark">{faq.q}</span>
                                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {activeFaq === i && (
                                        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden bg-slate-50">
                                            <p className="px-6 pb-6 pt-2 text-slate-600 font-medium leading-relaxed">{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsVideoOpen(false)} className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-5xl bg-black rounded-3xl overflow-hidden shadow-2xl aspect-video">
                            <button onClick={() => setIsVideoOpen(false)} className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full">
                                <X className="w-6 h-6" />
                            </button>
                            <iframe className="w-full h-full" src="https://www.youtube.com/embed/ttZcXOgmrNY?autoplay=1" title="Product Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
