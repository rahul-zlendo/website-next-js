'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Zap, 
    CheckCircle2, 
    ArrowRight, 
    Play, 
    Star, 
    UploadCloud, 
    Layers, 
    Download, 
    MousePointer2, 
    MessageSquare,
    MousePointerClick,
    Plus,
    Minus,
    ChevronDown,
    Laptop,
    Smartphone,
    Monitor
} from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';

export default function RealisticRendersPage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-white text-[#222222] font-nunito selection:bg-zlendo-teal/20 selection:text-zlendo-teal">
            <main>
                {/* 1. HERO SECTION */}
                <section className="relative pt-32 pb-24 overflow-hidden bg-[#FAFAFC]">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zlendo-teal/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

                    <div className="container-custom px-4 relative z-20">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="max-w-2xl space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-1 text-[#F97316]">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                        <span className="ml-2 text-sm font-bold text-[#666]">4.9/5 stars</span>
                                    </div>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-[44px] md:text-[64px] lg:text-[76px] tracking-tight font-black leading-[1.05] text-[#111]"
                                >
                                    Photorealistic AI rendering <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-600">
                                        in under 10 seconds
                                    </span>
                                </motion.h1>

                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="grid sm:grid-cols-2 gap-4 pb-4"
                                >
                                    {[
                                        "Runs in your browser",
                                        "Zero learning curve",
                                        "Compatible with any device",
                                        "One-click realism"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-2 text-lg font-bold text-[#555]">
                                            <CheckCircle2 className="w-5 h-5 text-zlendo-teal" />
                                            {text}
                                        </div>
                                    ))}
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-wrap gap-6"
                                >
                                    <a
                                        href={SIGNUP_URL}
                                        className="inline-flex items-center justify-center px-10 py-5 bg-[#111111] text-white rounded-xl font-bold text-xl hover:bg-[#333] transition-all gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1"
                                    >
                                        Get started for free <ArrowRight className="w-6 h-6" />
                                    </a>
                                </motion.div>
                            </div>

                            {/* Hero Visual - After/Before Style */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group border border-black/[0.03]"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2400"
                                    className="w-full aspect-[4/3] object-cover"
                                    alt="Photorealistic AI Render"
                                />
                                {/* Overlay proof of speed */}
                                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-black/5 flex items-center gap-2 shadow-lg">
                                    <div className="w-2 h-2 rounded-full bg-zlendo-teal animate-pulse" />
                                    <span className="text-sm font-black text-[#111] uppercase tracking-wider">Rendered in 8.2s</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 2. LOGO CLOUD (CAD Compatibility) */}
                <section className="py-12 bg-white border-b border-black/[0.03]">
                    <div className="container-custom px-4 overflow-hidden relative">
                        <div className="flex items-center justify-center flex-wrap gap-12 md:gap-24 opacity-30 grayscale hover:opacity-100 transition-opacity duration-700">
                            {/* Representative names of software as headings for clean look */}
                            <h4 className="text-2xl font-black italic">SketchUp</h4>
                            <h4 className="text-2xl font-black uppercase tracking-widest">Revit</h4>
                            <h4 className="text-2xl font-black italic">Archicad</h4>
                            <h4 className="text-2xl font-black uppercase tracking-widest">Rhino 3D</h4>
                            <h4 className="text-2xl font-black italic">AutoCAD</h4>
                        </div>
                    </div>
                </section>

                {/* 3. COMPARISON SECTION */}
                <section className="py-32 bg-white">
                    <div className="container-custom px-4">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-black text-[#111] mb-6">Traditional Rendering is Dead.</h2>
                            <p className="text-[#666] text-lg font-medium">Legacy software was built for 2005. Zlendo was built for 2026.</p>
                        </div>

                        <div className="max-w-6xl mx-auto overflow-hidden rounded-[2.5rem] border border-black/[0.05] shadow-[0_20px_60px_rgba(0,0,0,0.03)] bg-white">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#FAFAFC] border-b border-black/[0.05]">
                                            <th className="p-10 text-xl font-black text-[#111] w-1/4">Feature</th>
                                            <th className="p-10 text-lg font-bold text-[#999] opacity-60 w-[37.5%]">Traditional Rendering</th>
                                            <th className="p-10 text-lg font-black text-zlendo-teal w-[37.5%] bg-zlendo-teal/[0.02]">
                                                <div className="flex items-center gap-2">
                                                    <Zap className="w-5 h-5 fill-zlendo-teal" />
                                                    The Zlendo Way
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-black/[0.05]">
                                        {[
                                            { f: "Render Time", old: "30 min to 4 hours per view", new: "Average under 10 seconds" },
                                            { f: "Hardware", old: "$3,000+ custom PC needed", new: "Runs on any laptop or tablet" },
                                            { f: "Learning Curve", old: "Months of specialized training", new: "Ready to use in 30 seconds" },
                                            { f: "Edits", old: "Re-model & Re-render (Hours)", new: "Type a prompt to change (Seconds)" },
                                            { f: "Cost", old: "$2,000+ per license + PC", new: "Flat monthly fee, zero upfront" }
                                        ].map((row, i) => (
                                            <tr key={i}>
                                                <td className="p-10 font-black text-[#111] text-lg">{row.f}</td>
                                                <td className="p-10 text-[#999] font-medium leading-relaxed">
                                                    <div className="flex items-start gap-3">
                                                        <span className="mt-1 flex-shrink-0 opacity-30 select-none">✕</span>
                                                        {row.old}
                                                    </div>
                                                </td>
                                                <td className="p-10 text-[#111] font-bold bg-zlendo-teal/[0.01] leading-relaxed">
                                                    <div className="flex items-start gap-3 text-lg">
                                                        <CheckCircle2 className="w-6 h-6 text-zlendo-teal flex-shrink-0 mt-0.5" />
                                                        {row.new}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. WORKFLOW SECTION (Steps) */}
                <section className="py-32 bg-[#FAFAFC] border-y border-black/5">
                    <div className="container-custom px-4 text-center">
                        <h2 className="text-3xl md:text-5xl font-black mb-20 text-[#111]">How it works</h2>
                        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                            {[
                                { icon: UploadCloud, title: "1. Upload", desc: "Drag and drop your 3D model, room sketch, or floor plan." },
                                { icon: Layers, title: "2. Style", desc: "Select a reference style or type a simple text description." },
                                { icon: Download, title: "3. Export", desc: "Download high-resolution 4K renders instantly." }
                            ].map((s, i) => (
                                <div key={i} className="space-y-6 flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center text-zlendo-teal border border-black/[0.02]">
                                        <s.icon className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-black text-[#111]">{s.title}</h3>
                                    <p className="text-[#666] font-medium leading-relaxed max-w-xs">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. INTERACTIVE EDITOR PREVIEW (Value Prop) */}
                <section className="py-32 bg-white">
                    <div className="container-custom px-4 md:px-8">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-10">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-[#111]">
                                    Change your mind? <br />
                                    <span className="text-zlendo-teal">Just type it.</span>
                                </h2>
                                <p className="text-xl text-[#666] font-medium leading-relaxed">
                                    Stop manual modeling for every design tweak. Our AI understands plain English. Swap materials, add sunlight, or change furniture styles instantly.
                                </p>
                                
                                <div className="space-y-6">
                                    {[
                                        "\"Change the floor to dark oak hardwood\"",
                                        "\"Add more warm ambient lighting\"",
                                        "\"Swap the sofa for a modern mid-century style\"",
                                        "\"Make the walls off-white plaster\""
                                    ].map((prompt, i) => (
                                        <div key={i} className="flex items-center gap-4 bg-[#FAFAFC] p-4 rounded-xl border border-black/5">
                                            <div className="w-8 h-8 rounded-lg bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal">
                                                <MessageSquare className="w-4 h-4" />
                                            </div>
                                            <p className="font-bold text-[#111] italic">{prompt}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute -inset-4 bg-zlendo-teal/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative rounded-[2.5rem] overflow-hidden border border-black/5 bg-slate-900 shadow-2xl">
                                    {/* Mock Editor UI Image */}
                                    <img 
                                        src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200" 
                                        className="w-full h-full object-cover" 
                                        alt="AI Inpainting Dashboard" 
                                    />
                                    {/* Virtual Mouse Pointer */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div className="relative">
                                            <div className="w-40 bg-white p-3 rounded-xl shadow-2xl border border-black/5 flex items-center gap-3 animate-bounce">
                                                <div className="w-8 h-8 rounded-md bg-zlendo-teal flex items-center justify-center text-white">
                                                    <MousePointerClick className="w-4 h-4" />
                                                </div>
                                                <span className="text-xs font-black text-[#111] leading-none uppercase tracking-tighter">AI Edit Mode</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. FINAL CTA BLOCK */}
                <section className="py-24 bg-white">
                    <div className="container-custom px-4 md:px-8">
                        <div className="relative rounded-[3rem] bg-[#111] text-white p-12 md:p-24 text-center overflow-hidden">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[150%] bg-[radial-gradient(circle_at_50%_0%,rgba(0,191,154,0.15)_0%,transparent_60%)] pointer-events-none" />
                            
                            <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10 leading-[1.1]">
                                Photorealistic rendering <br className="hidden md:block"/> in seconds, for free.
                            </h2>
                            <p className="text-xl text-[#999] mb-12 relative z-10 font-medium max-w-2xl mx-auto">
                                Join 10,000+ architects and designers who have already saved hundreds of hours.
                            </p>

                            <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                                <a href={SIGNUP_URL} className="w-full sm:w-auto px-12 py-5 bg-zlendo-teal text-white rounded-xl font-black text-xl hover:bg-[#00a685] transition-all hover:scale-105 shadow-[0_10px_30px_rgba(0,191,154,0.3)]">
                                    Get 10 renders free
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. FAQs */}
                <section className="py-24 bg-white">
                    <div className="container-custom px-6 max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-[#111]">Frequently Asked Questions</h2>
                        </div>
                        <div className="space-y-4">
                            {[
                                {
                                    q: "What file formats do you support?",
                                    a: "We support all project designs from our 3D Floor Planner directly, as well as external imports in common formats like JPG, PNG (for sketches), and soon DWG."
                                },
                                {
                                    q: "Do I need a powerful GPU to render?",
                                    a: "No. All rendering is processed on our high-performance cloud servers. You can render studio-quality images even on a basic laptop or an iPad."
                                },
                                {
                                    q: "Can I use the renders for commercial projects?",
                                    a: "Absolutely. All renders generated on professional plans come with full commercial rights for use in client presentations and marketing."
                                },
                                {
                                    q: "Is the lighting physically accurate?",
                                    a: "Yes. Our AI engine is trained on thousands of studio-grade renders and uses proprietary models to ensure shadows, reflections, and global illumination are photorealistic."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="border border-black/[0.05] rounded-3xl overflow-hidden hover:bg-[#FAFAFC] transition-colors">
                                    <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full px-8 py-8 flex items-center justify-between text-left group">
                                        <span className="text-xl font-bold text-[#111] group-hover:text-zlendo-teal transition-colors">{faq.q}</span>
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${activeFaq === i ? 'bg-zlendo-teal text-white' : 'bg-black/5 text-[#999]'}`}>
                                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {activeFaq === i && (
                                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                                                <p className="px-8 pb-8 text-[#666] text-lg font-medium leading-relaxed">
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
