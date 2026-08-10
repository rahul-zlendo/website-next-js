'use client';

import { useState } from 'react';
import { useCountry } from "@/lib/context/CountryContext";
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cpu, Play, Zap, X, ChevronDown, CheckCircle2, ShieldCheck, Upload, Image as ImageIcon, ArrowRight
} from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { urlFor } from '@/lib/sanity/image';

interface APISuiteClientProps {
    cms: any;
    resolvedFaqs: any[];
    resolvedSteps: any[];
    resolvedFeatures: any[];
}

export default function APISuiteClient({ cms, resolvedFaqs, resolvedSteps, resolvedFeatures }: APISuiteClientProps) {
    const { country } = useCountry();
    const isIndiaSite = typeof country !== "undefined" ? country === "in" : false;
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const defaultComparisonRows = [
        ['Time to Result', '30 Seconds', 'Hours', 'Days'],
        ['Ease of Use', 'Beginner Friendly', 'Expert', 'None'],
        ['Cost', 'Free to Start', '$$$', '$$$$'],
        ['AI Assistance', 'Included', 'Plugin needed', 'N/A'],
        ['Cloud Storage', 'Unlimited', 'Local', 'Mixed']
    ];

    const resolvedComparisonRows = cms?.comparisonRows?.length
        ? cms.comparisonRows.map((r: any) => [r.feature, r.us, r.competitor1, r.competitor2])
        : defaultComparisonRows;

    return (
        <div className="bg-white min-h-screen font-nunito pt-5">
            {/* 1. HERO SECTION */}
            <section className="bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
                <div className="container-custom px-6 py-12 lg:py-20">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm mb-8">
                                <Zap className="w-4 h-4 text-zlendo-teal animate-pulse" />
                                <span className="text-xs font-black uppercase tracking-widest text-zlendo-grey-dark">{cms?.heroSubtitle || "Enterprise API Solutions"}</span>
                            </div>
                            <h1 className="text-[28px] md:text-[42px] lg:text-[56px] font-black text-zlendo-grey-dark mb-6 leading-[1.1]">
                                {cms?.heroTitle || "Power your prop-tech platform"}
                            </h1>
                            <p className="text-xl text-zlendo-grey-medium font-medium mb-10 leading-relaxed max-w-lg">
                                {cms?.heroDesc || "Integrate our core 2D-to-3D, costing, and styling engines directly into your own applications."}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                <a href={SIGNUP_URL} className="px-8 py-4 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-black text-lg transition-all hover:scale-105 flex items-center justify-center">
                                    {cms?.heroCtaLabel || "Get API Key"}
                                </a>
                                <button onClick={() => setIsVideoOpen(true)} className="px-8 py-4 bg-white border-2 border-slate-200 text-zlendo-grey-dark rounded-xl font-bold text-lg hover:border-slate-400 transition-all flex items-center justify-center gap-2">
                                    <Play className="w-5 h-5 fill-current" /> Watch Intro
                                </button>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/5">
                                <img src={cms?.heroImage ? urlFor(cms.heroImage).url() : "/assets/api-suite/hero-api.webp"} alt={cms?.heroImageAlt || "Enterprise-grade API suite for automating massive real estate design workflows"} className="w-full h-auto object-cover" />
                                
                                {/* Status Badge Overlay */}
                                <motion.div 
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="absolute top-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl flex items-center gap-4 border border-white/20"
                                >
                                    <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-white">
                                        <Zap className="w-5 h-5 fill-current" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Processing</div>
                                        <div className="text-xl font-black text-slate-800 leading-none">Done</div>
                                    </div>
                                </motion.div>
                            </div>
                            <div className={`absolute -inset-10 bg-gradient-to-tr ${cms?.heroGradient || 'from-slate-800 to-slate-600'} opacity-20 blur-[100px] -z-10`} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. SMART UPLOAD ZONE */}
            <section className="py-16 bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}
                />
                <div className="container-custom px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
                        <div className="group relative cursor-pointer">
                            <a href={SIGNUP_URL} className="absolute inset-0 z-20" />
                            <div className="absolute -inset-1 bg-gradient-to-r from-zlendo-teal via-blue-500 to-purple-500 rounded-[2.5rem] opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
                            <div className="relative bg-white rounded-[2rem] border-2 border-dashed border-slate-300 group-hover:border-zlendo-teal transition-all duration-300 p-10 md:p-16 flex flex-col items-center text-center overflow-hidden">
                                <motion.div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-zlendo-teal to-transparent opacity-0 group-hover:opacity-100" animate={{ top: ['0%', '100%', '0%'] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
                                <div className="mb-8 relative w-24 h-24 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-zlendo-teal/5 rounded-full animate-ping-slow" />
                                    <div className="w-20 h-20 bg-zlendo-teal/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Upload className="w-10 h-10 text-zlendo-teal" />
                                    </div>
                                    {[
                                        { label: 'JPG', angle: 0, color: 'bg-blue-100 text-blue-600' },
                                        { label: 'PDF', angle: 72, color: 'bg-red-100 text-red-600' },
                                        { label: 'DWG', angle: 144, color: 'bg-yellow-100 text-yellow-700' },
                                        { label: 'PNG', angle: 216, color: 'bg-green-100 text-green-600' },
                                        { label: 'DXF', angle: 288, color: 'bg-purple-100 text-purple-600' }
                                    ].map((file) => (
                                        <motion.div key={file.label} className={`absolute ${file.color} text-[10px] font-black px-2 py-1 rounded-md shadow-sm border border-white/50`} initial={{ x: 0, y: 0 }} animate={{ x: Math.cos(file.angle * (Math.PI / 180)) * 60, y: Math.sin(file.angle * (Math.PI / 180)) * 60 }}>
                                            {file.label}
                                        </motion.div>
                                    ))}
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black text-zlendo-grey-dark mb-4 group-hover:text-zlendo-teal transition-colors">{cms?.uploadTitle || "Upload your floor plan"}{isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
                                <p className="text-lg text-slate-500 font-medium mb-8 max-w-lg">{cms?.uploadSubtitle || "Drag & drop your 2D sketch, image, or CAD file here to instantly generate a 3D model."}</p>
                                <button className="px-8 py-4 bg-zlendo-teal text-white rounded-xl font-bold text-lg shadow-lg group-hover:scale-105 transition-transform flex items-center gap-2">
                                    <ImageIcon className="w-5 h-5" /> Select File to Upload
                                </button>
                                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-slate-400">
                                    <ShieldCheck className="w-4 h-4" /> Secure SSL Encryption
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. DARK 'HOW TO' SECTION */}
            <section className="bg-zlendo-grey-dark text-white py-12 lg:py-20 overflow-hidden">
                <div className="container-custom px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute -inset-10 bg-zlendo-teal opacity-20 blur-[80px] rounded-full" />
                            <img src={cms?.howToImage ? urlFor(cms.howToImage).url() : "/assets/2d-to-3d/dashboard-interface.webp"} alt="Dashboard Interface" className="relative z-10 rounded-2xl shadow-2xl border border-white/10 w-full" />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl md:text-5xl font-black mb-6 whitespace-pre-line">{cms?.howToTitle || "Master your design \n in minutes."}{isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
                            <p className="text-xl text-white/60 mb-10 leading-relaxed font-medium">{cms?.howToDesc || "Our intuitive interface makes complex tasks simple. Whether you are dragging walls or estimating costs, everything happens in real-time."}</p>
                            <a href={SIGNUP_URL} className="px-8 py-4 bg-zlendo-teal text-white rounded-xl font-black hover:bg-white hover:text-zlendo-teal transition-colors inline-block">Create Project Now</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. ZIG-ZAG STEPS */}
            <section className="py-12 lg:py-20 bg-white">
                <div className="container-custom px-6 text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl font-black text-zlendo-grey-dark mb-4">{cms?.stepsSectionTitle || "How It Works"}{isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
                    <p className="text-xl text-zlendo-grey-medium font-medium">{cms?.stepsSectionSubtitle || "Simple steps to integrate."}</p>
                </div>
                <div className="container-custom px-6 space-y-24">
                    {resolvedSteps.map((step: any, i: number) => (
                        <div key={i} className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center group">
                            <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 text-slate-800 font-black text-xl mb-6 shadow-md">{i + 1}</div>
                                <h3 className="text-3xl lg:text-4xl font-black text-zlendo-grey-dark mb-6">{step.title}</h3>
                                <p className="text-lg text-zlendo-grey-medium leading-relaxed font-medium mb-8">{step.desc}</p>
                                {i === 0 && (
                                    <a href={SIGNUP_URL} className="text-zlendo-teal font-black hover:underline flex items-center gap-2">
                                        Learn more <ArrowRight className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                            <div className={`${i % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                                <img src={step.image?.asset ? urlFor(step.image).url() : step.image} alt={step.alt || step.title} className="relative z-10 w-full rounded-[2rem] shadow-xl" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. FEATURES GRID */}
            <section className="py-12 bg-slate-50 border-y border-slate-200">
                <div className="container-custom px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {resolvedFeatures.map((feature: any, i: number) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cms?.heroGradient || 'from-slate-800 to-slate-600'} flex items-center justify-center text-white mb-6 shadow-md`}>
                                    <CheckCircle2 className="w-7 h-7" />
                                </div>
                                <h4 className="text-xl font-black text-zlendo-grey-dark mb-3 leading-tight">{feature.title}</h4>
                                <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. COMPARISON TABLE */}
            <section className="py-16 bg-slate-50">
                <div className="container-custom px-6 max-w-5xl">
                    <h2 className="text-3xl font-black text-center text-zlendo-grey-dark mb-10">{cms?.comparisonTitle || "Compare with others"}{isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th className="p-4 border-b-2 border-slate-200 w-1/3">Features</th>
                                    <th className="p-4 border-b-2 border-zlendo-teal text-zlendo-teal font-black text-xl text-center bg-white rounded-t-xl">Zlendo Realty</th>
                                    <th className="p-4 border-b-2 border-slate-200 text-slate-400 font-bold text-center">Typical CAD</th>
                                    <th className="p-4 border-b-2 border-slate-200 text-slate-400 font-bold text-center">Agencies</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-600 font-medium">
                                {resolvedComparisonRows.map(([feat, us, them1, them2]: any, idx: number) => (
                                    <tr key={idx} className="hover:bg-white transition-colors">
                                        <td className="p-4 border-b border-slate-200 font-bold text-slate-800">{feat}</td>
                                        <td className="p-4 border-b border-slate-200 text-center font-black text-zlendo-teal bg-white border-x border-slate-100">{us}</td>
                                        <td className="p-4 border-b border-slate-200 text-center text-slate-400">{them1}</td>
                                        <td className="p-4 border-b border-slate-200 text-center text-slate-400">{them2}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 8. FAQ */}
            <section className="py-16 bg-white">
                <div className="container-custom px-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-black text-center text-zlendo-grey-dark mb-8">{cms?.faqTitle || "Frequently Asked Questions"}{isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
                    <div className="space-y-4">
                        {resolvedFaqs.map((faq: any, i: number) => (
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

            {/* 9. FINAL CTA */}
            <section className="py-16 bg-white border-t border-slate-100">
                <div className="container-custom px-6 text-center">
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-[3rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden">
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-4xl lg:text-5xl font-black mb-6">{cms?.finalCtaTitle || "Start designing for free"}{isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
                            <p className="text-xl text-white/80 font-medium mb-10">{cms?.finalCtaSubtitle || "Join over 4 million users who are already designing their dream homes with Zlendo Realty."}</p>
                            <a href={SIGNUP_URL} className="px-10 py-5 bg-white text-blue-600 rounded-xl font-black text-xl hover:shadow-lg hover:scale-105 transition-all inline-block">{cms?.finalCtaLabel || "Create Free Account"}</a>
                        </div>
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-400 opacity-20 blur-[80px] rounded-full translate-x-1/2 translate-y-1/2" />
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsVideoOpen(false)} className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-5xl bg-black rounded-3xl overflow-hidden shadow-2xl aspect-video">
                            <button onClick={() => setIsVideoOpen(false)} className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full"><X className="w-6 h-6" /></button>
                            <iframe className="w-full h-full" src={cms?.heroVideoLink || "https://www.youtube.com/embed/ttZcXOgmrNY?autoplay=1"} title="API Intro" allowFullScreen></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
