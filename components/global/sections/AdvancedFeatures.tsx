'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Wand2,
    PlayCircle,
    TrendingUp,
    Zap,
    Sparkles,
    Layers
} from 'lucide-react';

export default function AdvancedFeatures() {
    return (
        <section className="py-24 bg-white font-nunito border-y border-black/5">
            <div className="container-custom px-4 md:px-8 max-w-7xl mx-auto">

                {/* AI Interior Highlight Banner (Bento style header) */}
                <div className="mb-24 bg-[#FAFAFC] rounded-[2.5rem] border border-black/5 p-8 md:p-12 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,191,154,0.05)_0%,transparent_60%)]" />

                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zlendo-teal/10 rounded-full text-zlendo-teal font-bold text-sm">
                                <Wand2 className="w-4 h-4" /> AI Powered
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-[#111] leading-tight">
                                Design Complete Homes with AI — in Minutes
                            </h2>
                            <p className="text-[#666] text-lg font-medium leading-relaxed max-w-md">
                                Describe your space, generate a floor plan, and instantly apply AI-inspired designs tailored to your needs.
                            </p>

                            {/* Micro Flow UI */}
                            <div className="flex flex-wrap items-center gap-2 pt-4">
                                {['Describe', 'Generate Plan', 'Apply Inspiration', 'Customize', 'Present'].map((step, i) => (
                                    <React.Fragment key={i}>
                                        <div className="px-3 py-1.5 bg-white border border-black/5 rounded-lg text-xs font-bold text-[#111] shadow-sm">
                                            {step}
                                        </div>
                                        {i < 4 && <div className="text-black/20 text-xs">→</div>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden glassmorphism shadow-2xl border border-white/50 aspect-square lg:aspect-video bg-white p-4">
                            <div className="absolute inset-0 bg-gradient-to-br from-zlendo-teal/5 to-transparent pointer-events-none" />

                            {/* Wizard UI Simulation */}
                            <div className="h-full flex flex-col space-y-4">
                                {/* Prompt Input Sim */}
                                <div className="p-4 bg-[#FAFAFC] border border-black/5 rounded-2xl shadow-inner">
                                    <div className="text-[10px] uppercase font-bold text-black/40 mb-2 tracking-widest">Input Prompt</div>
                                    <div className="text-sm font-bold text-[#111] flex items-center gap-2">
                                        <span className="w-1.5 h-4 bg-zlendo-teal rounded-full animate-pulse" />
                                        Modern 3BHK with open kitchen...
                                    </div>
                                </div>

                                {/* Transformation Sim */}
                                <div className="flex-1 relative rounded-2xl overflow-hidden bg-slate-100 group">
                                    <img
                                        src="/assets/3d_hero.png"
                                        alt="AI Interior Design"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-2xl border border-white flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full border-2 border-zlendo-teal border-t-transparent animate-spin" />
                                            <span className="text-sm font-bold text-[#111]">AI generating plan...</span>
                                        </div>
                                    </div>

                                    {/* Style Applied Overlay (Simulated) */}
                                    <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-white shadow-xl flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-zlendo-teal/10 flex items-center justify-center">
                                                <Sparkles className="w-5 h-5 text-zlendo-teal" />
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-bold text-black/40 uppercase tracking-tight">AI Style Selected</div>
                                                <div className="text-xs font-black text-[#111]">Scandinavian Modern</div>
                                            </div>
                                        </div>
                                        <div className="px-3 py-1.5 bg-zlendo-teal text-white text-[10px] font-black rounded-lg uppercase tracking-widest">Applied</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Advanced Features Grid */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-[#111]">Advanced features</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Instantly Convert 2D Plans into 3D Experiences",
                            desc: "Upload or draw a floor plan → Zlendo generates a complete 3D design in seconds.",
                            icon: Wand2,
                            color: "text-blue-500",
                            bg: "bg-blue-50",
                            img: "/assets/features/convert-3d.webp"
                        },
                        {
                            title: "Walk Inside Your Design Before It's Built",
                            desc: "Create cinematic walkthroughs that help clients experience, not just see.",
                            icon: PlayCircle,
                            color: "text-purple-500",
                            bg: "bg-purple-50",
                            img: "/assets/features/walkthrough.webp"
                        },
                        {
                            title: "Design with Cost Clarity from Day One",
                            desc: "Automatically generate real-time cost estimates while designing — from budget to premium.",
                            icon: TrendingUp,
                            color: "text-green-600",
                            bg: "bg-green-50",
                            img: "/assets/features/cost-clarity.webp"
                        },
                        {
                            title: "From Idea to Presentation in Minutes",
                            desc: "Skip switching between tools — design, render, and present in one seamless flow.",
                            icon: Zap,
                            color: "text-orange-500",
                            bg: "bg-orange-50",
                            img: "/assets/features/presentation.webp"
                        },
                        {
                            title: "Turn Inspiration into Real Designs Instantly",
                            desc: "Use AI to transform ideas into complete, build-ready layouts.",
                            icon: Sparkles,
                            color: "text-pink-500",
                            bg: "bg-pink-50",
                            img: "/assets/features/inspiration.webp"
                        },
                        {
                            title: "Unlimited Design Freedom with Custom Elements",
                            desc: "Import models, customize layouts, and create exactly what your client imagines.",
                            icon: Layers,
                            color: "text-indigo-500",
                            bg: "bg-indigo-50",
                            img: "/assets/features/custom-elements.webp"
                        }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white rounded-[1.5rem] p-4 group cursor-pointer hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 border border-transparent hover:border-black/5"
                        >
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-[#FAFAFC] border border-black/5">
                                <img
                                    src={feature.img}
                                    alt={feature.title}
                                    loading='lazy'
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute top-4 right-4">
                                    <div className={`w-10 h-10 rounded-xl ${feature.bg} flex items-center justify-center backdrop-blur-sm shadow-sm`}>
                                        <feature.icon className={`w-5 h-5 ${feature.color}`} />
                                    </div>
                                </div>
                            </div>
                            <div className="px-2">
                                <h3 className="text-xl font-bold text-[#111] mb-2">{feature.title}</h3>
                                <p className="text-[#666] font-medium leading-relaxed text-[15px]">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
