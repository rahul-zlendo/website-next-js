'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Wand2,
    PlayCircle,
    Zap,
    Sparkles,
    Layers,
    User,
    Briefcase,
    ArrowRight,
    CheckCircle2,
    Box,
    Rocket,
    ShieldCheck,
    Users,
    Home,
    Download,
    Globe,
    FileEdit,
    MousePointer2
} from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';

export default function AdvancedFeatures() {
    return (
        <section className="py-24 bg-white font-nunito border-y border-black/5">
            <div className="container-custom px-4 md:px-8 max-w-7xl mx-auto">

                {/* AI Interior Highlight Banner */}
                <div className="mb-24">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
                        {/* Left Side: Copy & CTAs */}
                        <div className="space-y-8 pt-4">
                            {/* AI Powered Chip */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zlendo-teal/10 rounded-full text-zlendo-teal font-bold text-sm border border-zlendo-teal/20">
                                <Wand2 className="w-4 h-4" /> AI Powered
                            </div>

                            {/* Headings */}
                            <h2 className="text-4xl md:text-6xl font-black text-[#111] leading-[1.1] tracking-tight">
                                Start Simple.<br />
                                Design <span className="relative text-zlendo-teal inline-block">
                                    Like
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-zlendo-teal opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 0" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                                    </svg>
                                </span> a Pro.
                            </h2>
                            <p className="text-[#666] text-lg font-medium leading-relaxed max-w-lg">
                                From zero knowledge to expert workflows — create floor plans, 3D designs, renders, and AutoCAD-ready files with the power of AI.
                            </p>

                            {/* Personas */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-green-50/50 border border-green-100 rounded-2xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <User className="w-5 h-5 text-green-600" />
                                        <span className="font-bold text-green-800 text-sm">For Homeowners</span>
                                    </div>
                                    <p className="text-xs text-green-700/80 font-medium">Bring your ideas to life with ease.</p>
                                </div>
                                <div className="p-4 bg-purple-50/50 border border-purple-100 rounded-2xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Briefcase className="w-5 h-5 text-purple-600" />
                                        <span className="font-bold text-purple-800 text-sm">For Architects & Builders</span>
                                    </div>
                                    <p className="text-xs text-purple-700/80 font-medium">Powerful tools to boost productivity.</p>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-2">
                                <a href={SIGNUP_URL} className="w-full sm:w-auto px-8 py-4 bg-zlendo-teal text-white font-bold text-lg rounded-xl hover:bg-[#00a685] transition-all flex items-center justify-center gap-2 shadow-lg shadow-zlendo-teal/30 hover:scale-105">
                                    Try It Free <ArrowRight className="w-5 h-5" />
                                </a>
                                <div className="flex items-center gap-2 text-[#666] text-sm font-medium">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" /> No credit card required
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Flow UI (Image Replacement) */}
                        <div className="relative">
                            <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-black/5 overflow-hidden p-2">
                                <img
                                    src="/assets/global/flow-image.webp"
                                    alt="Design Flow"
                                    className="w-full h-auto object-contain rounded-2xl"
                                />
                            </div>

                            {/* Small Feature Cards Below Flow */}
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3 bg-white border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] rounded-2xl p-4">
                                {[
                                    { icon: Sparkles, color: "text-blue-500", bg: "bg-blue-50", title: "AI-Powered", desc: "Smart & fast" },
                                    { icon: Box, color: "text-green-500", bg: "bg-green-50", title: "Complete Solution", desc: "Plan, 3D, Render" },
                                    { icon: Rocket, color: "text-orange-500", bg: "bg-orange-50", title: "Save Time", desc: "From hours to mins" },
                                    { icon: ShieldCheck, color: "text-yellow-500", bg: "bg-yellow-50", title: "Built for Everyone", desc: "Beginners to pros" }
                                ].map((feat, i) => (
                                    <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3">
                                        <div className={`w-8 h-8 rounded-full shrink-0 ${feat.bg} flex items-center justify-center`}>
                                            <feat.icon className={`w-4 h-4 ${feat.color}`} />
                                        </div>
                                        <div>
                                            <div className="text-[11px] sm:text-xs font-bold text-[#111] leading-tight mb-0.5">{feat.title}</div>
                                            <div className="text-[9px] sm:text-[10px] text-[#666] leading-tight max-w-[100px]">{feat.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Trust Stats */}
                    <div className="mt-16 pt-10 border-t border-black/5 max-w-5xl mx-auto">
                        <div className="text-center text-sm font-medium text-[#666] mb-8 flex items-center justify-center gap-4">
                            <svg width="24" height="60" viewBox="0 0 24 60" className="text-green-200" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 60c-6.6-13.2-6.6-46.8 0-60M12 0c2 4 6 8 10 10-4 0-8-4-10-10zM10 10c2 4 6 8 10 10-4 0-8-4-10-10zM8 20c2 4 6 8 10 10-4 0-8-4-10-10zM6 30c2 4 6 8 10 10-4 0-8-4-10-10zM4 40c2 4 6 8 10 10-4 0-8-4-10-10z" />
                            </svg>
                            <span>Trusted by <span className="font-bold text-zlendo-teal">Homeowners, Architects, Interior Designers</span> & <span className="font-bold text-zlendo-teal">Builders</span> worldwide</span>
                            <svg width="24" height="60" viewBox="0 0 24 60" className="text-green-200 scale-x-[-1]" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 60c-6.6-13.2-6.6-46.8 0-60M12 0c2 4 6 8 10 10-4 0-8-4-10-10zM10 10c2 4 6 8 10 10-4 0-8-4-10-10zM8 20c2 4 6 8 10 10-4 0-8-4-10-10zM6 30c2 4 6 8 10 10-4 0-8-4-10-10zM4 40c2 4 6 8 10 10-4 0-8-4-10-10z" />
                            </svg>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { icon: Users, num: "10K+", label: "Happy Users", color: "text-blue-500" },
                                { icon: Home, num: "20K+", label: "Projects Designed", color: "text-indigo-500" },
                                { icon: Download, num: "2K+", label: "CAD Exports", color: "text-purple-500" },
                                { icon: Globe, num: "10+", label: "Countries", color: "text-blue-600" }
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center justify-center gap-3">
                                    <stat.icon className={`w-8 h-8 ${stat.color}`} strokeWidth={1.5} />
                                    <div>
                                        <div className="text-xl font-black text-[#111]">{stat.num}</div>
                                        <div className="text-xs font-medium text-[#666]">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Advanced Features Grid */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black text-[#111]">Advanced features</h2>
                    <p className="text-[#666] font-medium text-lg max-w-2xl mx-auto">
                        Trusted by architects, builders & designers
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1: 2D to 3D */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[1.5rem] p-4 group cursor-pointer hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 border border-black/5 hover:border-[#00bf9a]/30"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-[#1a1a24] border border-black/5">
                            {/* Visual Component */}
                            <div className="relative w-full h-full flex overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                                {/* Left: 2D */}
                                <div className="w-1/2 relative bg-white border-r border-black/10">
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:10px_10px]" />
                                    <img src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=400&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50 grayscale" alt="" />
                                    <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm text-[8px] font-bold text-slate-600 rounded shadow-sm flex items-center gap-1">
                                        <Box className="w-2.5 h-2.5" /> AutoCAD
                                    </div>
                                </div>
                                {/* Right: 3D */}
                                <div className="w-1/2 relative">
                                    <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=400&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="" />
                                    <div className="absolute top-3 right-3 px-2 py-1 bg-[#00bf9a]/90 backdrop-blur-sm text-[8px] font-bold text-white rounded shadow-sm flex items-center gap-1">
                                        <Sparkles className="w-2.5 h-2.5" /> Zlendo
                                    </div>
                                    {/* Subtly darkened right side to pop lighting */}
                                    <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                                </div>
                                {/* Center Arrow Transition */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#111] rounded-full shadow-2xl flex items-center justify-center z-10 border border-white/10 group-hover:bg-[#00bf9a] transition-colors duration-500">
                                    <ArrowRight className="w-4 h-4 text-white" />
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <h3 className="text-xl font-black text-[#111] mb-2 leading-tight">Convert Floor Plans into 3D — Instantly</h3>
                            <p className="text-[#666] font-medium leading-relaxed text-sm">
                                Upload or draw a plan → get a complete 3D model in seconds. No manual modeling.
                            </p>
                        </div>
                    </motion.div>

                    {/* Feature 2: Walkthrough */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-[1.5rem] p-4 group cursor-pointer hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 border border-black/5 hover:border-purple-500/30"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-black/5">
                            <div className="relative w-full h-full overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-90 brightness-110 contrast-125" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                {/* Play UI Overlay */}
                                <div className="absolute inset-0 m-auto w-14 h-14 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                                    <PlayCircle className="w-6 h-6 text-white fill-white/20" />
                                </div>

                                {/* WASD Controls Overlay */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10 shadow-lg opacity-80 group-hover:opacity-100 transition-opacity">
                                    <div className="w-4 h-4 rounded border border-white/40 flex items-center justify-center text-[8px] text-white font-bold bg-white/10">W</div>
                                    <div className="flex gap-0.5">
                                        <div className="w-4 h-4 rounded border border-white/40 flex items-center justify-center text-[8px] text-white font-bold bg-white/5">A</div>
                                        <div className="w-4 h-4 rounded border border-white/40 flex items-center justify-center text-[8px] text-white font-bold bg-white/5">S</div>
                                        <div className="w-4 h-4 rounded border border-white/40 flex items-center justify-center text-[8px] text-white font-bold bg-white/5">D</div>
                                    </div>
                                    <div className="w-px h-3 bg-white/20 mx-1" />
                                    <div className="text-[9px] text-white/90 font-bold tracking-wider uppercase">Walk</div>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <h3 className="text-xl font-black text-[#111] mb-2 leading-tight">Walk Inside Your Design Before It's Built</h3>
                            <p className="text-[#666] font-medium leading-relaxed text-sm">
                                Give clients a real experience — not just static renders.
                            </p>
                        </div>
                    </motion.div>

                    {/* Feature 3: Tool Elimination */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-[1.5rem] p-4 group cursor-pointer hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 border border-black/5 hover:border-blue-500/30"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-50 border border-black/5">
                            <div className="relative w-full h-full overflow-hidden flex items-center justify-center transition-colors duration-700">
                                {/* Faint Render Background */}
                                <img src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-[0.15] blur-sm transition-all duration-700 group-hover:blur-0 group-hover:opacity-40" alt="" />
                                <div className="absolute inset-0 bg-white/40 group-hover:bg-white/10 transition-colors duration-700" />

                                <div className="relative z-10 flex flex-col items-center w-full px-4">
                                    {/* Fading Tools */}
                                    <div className="flex flex-wrap justify-center gap-2 mb-6 w-full opacity-60 group-hover:opacity-0 group-hover:-translate-y-4 transition-all duration-700 absolute top-10">
                                        {['AutoCAD', 'SketchUp', 'Lumion', 'V-Ray', 'D5'].map((tool, i) => (
                                            <div key={tool} className="px-2.5 py-1 bg-white shadow-sm rounded border border-black/5 text-[9px] font-bold text-slate-400 line-through decoration-slate-300" style={{ transitionDelay: `${i * 50}ms` }}>
                                                {tool}
                                            </div>
                                        ))}
                                    </div>

                                    {/* One Platform Core */}
                                    <div className="relative mt-12 group-hover:mt-0 transition-all duration-700">
                                        {/* Glowing Aura */}
                                        <div className="absolute -inset-6 bg-[#00bf9a]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                        <div className="px-5 py-3 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-2xl border border-[#00bf9a]/20 flex items-center gap-3 transform group-hover:scale-110 transition-transform duration-700 relative z-10">
                                            <div className="w-8 h-8 bg-[#00bf9a] rounded-xl flex items-center justify-center shadow-inner">
                                                <Layers className="w-4 h-4 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-black text-[#111]">Zlendo Realty</div>
                                                <div className="text-[9px] text-[#00bf9a] font-bold tracking-widest uppercase mt-0.5">One Solution</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <h3 className="text-xl font-black text-[#111] mb-2 leading-tight">Replace Multiple Tools with One Platform</h3>
                            <p className="text-[#666] font-medium leading-relaxed text-sm">
                                No more switching between SketchUp, Lumion, V-Ray, or D5.
                            </p>
                        </div>
                    </motion.div>

                    {/* Feature 4: Idea to Output */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-[1.5rem] p-4 group cursor-pointer hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 border border-black/5 hover:border-orange-500/30"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-white border border-black/5">
                            <div className="relative w-full h-full overflow-hidden flex items-center justify-center bg-[#fafafc]">
                                {/* Subtle background glow */}
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,191,154,0.04)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="flex items-center justify-between w-full px-6 relative z-10">
                                    {[
                                        { label: "Sketch", icon: FileEdit, color: "text-slate-600", bg: "bg-white border-slate-200" },
                                        { label: "3D Model", icon: Box, color: "text-blue-500", bg: "bg-blue-50 border-blue-100" },
                                        { label: "Render", icon: Sparkles, color: "text-pink-500", bg: "bg-pink-50 border-pink-100" },
                                        { label: "Present", icon: PlayCircle, color: "text-[#00bf9a]", bg: "bg-[#00bf9a]/10 border-[#00bf9a]/20" }
                                    ].map((step, i) => (
                                        <React.Fragment key={i}>
                                            <div className="flex flex-col items-center gap-2 group-hover:-translate-y-1.5 transition-transform duration-500 z-10" style={{ transitionDelay: `${i * 100}ms` }}>
                                                <div className={`w-10 h-10 rounded-full ${step.bg} flex items-center justify-center border shadow-sm group-hover:shadow-md transition-shadow`}>
                                                    <step.icon className={`w-4 h-4 ${step.color}`} />
                                                </div>
                                                <div className={`text-[9px] font-bold ${i === 3 ? 'text-[#00bf9a]' : 'text-slate-500'} uppercase tracking-wider`}>{step.label}</div>
                                            </div>
                                            {i < 3 && (
                                                <div className="flex-1 mx-1 h-px bg-slate-200 relative top-[-10px]">
                                                    <div className="absolute inset-0 bg-[#00bf9a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" style={{ transitionDelay: `${i * 150 + 100}ms` }} />
                                                    <ArrowRight className="absolute -right-2 -top-1.5 w-3 h-3 text-[#00bf9a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: `${i * 150 + 400}ms` }} />
                                                </div>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <h3 className="text-xl font-black text-[#111] mb-2 leading-tight">From Idea to Presentation — In Minutes</h3>
                            <p className="text-[#666] font-medium leading-relaxed text-sm">
                                Design, render, and present — all in one seamless flow.
                            </p>
                        </div>
                    </motion.div>

                    {/* Feature 5: AI Design */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white rounded-[1.5rem] p-4 group cursor-pointer hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 border border-black/5 hover:border-pink-500/30"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-100 border border-black/5">
                            <div className="relative w-full h-full flex overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                                {/* Left: Inspiration Grid */}
                                <div className="w-[35%] p-2 grid grid-cols-1 gap-2 bg-[#f4f4f5] border-r border-black/5 relative z-10">
                                    <div className="text-[7px] font-bold text-slate-400 uppercase tracking-widest text-center">Inspiration</div>
                                    <div className="h-[30%] bg-slate-200 rounded-lg overflow-hidden border border-white/50 shadow-sm"><img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="" /></div>
                                    <div className="h-[30%] bg-slate-200 rounded-lg overflow-hidden border border-white/50 shadow-sm"><img src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="" /></div>
                                    <div className="h-[30%] bg-slate-200 rounded-lg overflow-hidden border border-white/50 shadow-sm"><img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="" /></div>
                                </div>

                                {/* Right: Applied Design */}
                                <div className="w-[65%] relative">
                                    <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                    {/* AI Applied Badge */}
                                    <div className="absolute bottom-3 right-3 px-2.5 py-1.5 bg-black/70 backdrop-blur-md rounded-lg border border-white/10 flex items-center gap-1.5 shadow-xl transform group-hover:-translate-y-1 transition-transform duration-500">
                                        <Wand2 className="w-3.5 h-3.5 text-[#00bf9a]" />
                                        <span className="text-[9px] font-bold text-white uppercase tracking-wider">AI Applied</span>
                                    </div>

                                    {/* Glowing scanline effect */}
                                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#00bf9a] shadow-[0_0_15px_#00bf9a]" />
                                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#00bf9a]/20 to-transparent" />
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <h3 className="text-xl font-black text-[#111] mb-2 leading-tight">Turn Inspiration into Real Designs — Instantly</h3>
                            <p className="text-[#666] font-medium leading-relaxed text-sm">
                                Select a style → apply it to your room with AI.
                            </p>
                        </div>
                    </motion.div>

                    {/* Feature 6: Customization */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="bg-white rounded-[1.5rem] p-4 group cursor-pointer hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 border border-black/5 hover:border-indigo-500/30"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-[#FAF8F5] border border-black/5">
                            <div className="relative w-full h-full overflow-hidden flex items-center justify-center perspective-[1000px]">
                                {/* Pastel 3D Grid Floor */}
                                <div className="absolute inset-0 bg-[#FDFBF9]" />
                                <div className="absolute inset-x-[-50%] bottom-[-20%] h-[80%] bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:2rem_2rem] [transform:rotateX(60deg)_scale(1.5)] origin-top opacity-60" />

                                {/* Floating Object Placeholder */}
                                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-24 h-16 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-xl border border-[#00bf9a]/20 group-hover:-translate-y-4 transition-transform duration-700 flex items-center justify-center z-10">
                                    <Box className="w-8 h-8 text-[#00bf9a]/40" />
                                    {/* Projection shadow on floor */}
                                    <div className="absolute -bottom-10 w-20 h-4 bg-black/5 blur-md rounded-[100%] group-hover:scale-75 transition-transform duration-700" />
                                </div>

                                {/* Drag and Drop Menu (Materials & Furniture) */}
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-2.5 rounded-2xl border border-black/5 shadow-xl transform -rotate-3 group-hover:rotate-0 group-hover:translate-x-2 transition-all duration-500 flex flex-col gap-2 w-32 z-20">
                                    <div className="flex justify-between items-center px-1 mb-1">
                                        <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Library</span>
                                        <Layers className="w-3 h-3 text-slate-400" />
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-10 h-10 rounded-xl bg-[#F0EBE1] border border-[#E3DCCF] flex items-center justify-center cursor-move hover:shadow-md transition-shadow">
                                            <div className="w-4 h-4 rounded-full bg-white/60" />
                                        </div>
                                        <div className="w-10 h-10 rounded-xl bg-white border border-[#00bf9a]/30 shadow-[0_0_15px_rgba(0,191,154,0.1)] flex items-center justify-center cursor-move relative overflow-hidden">
                                            <Box className="w-4 h-4 text-[#00bf9a]" />
                                            <div className="absolute inset-0 bg-[#00bf9a]/10 group-hover:bg-transparent transition-colors" />
                                        </div>
                                    </div>
                                    <div className="w-full h-8 rounded-lg bg-gradient-to-r from-[#D8E4E8] to-[#E8E1D8] border border-black/5 flex items-center px-2 cursor-move hover:shadow-md transition-shadow">
                                        <span className="text-[7px] font-bold text-slate-600">Marble Texture</span>
                                    </div>
                                </div>

                                {/* Drag Cursor */}
                                <div className="absolute bottom-8 right-8 w-10 h-10 bg-[#00bf9a]/10 border border-[#00bf9a]/30 rounded-xl border-dashed flex items-center justify-center group-hover:-translate-y-12 group-hover:-translate-x-12 transition-all duration-700 shadow-sm z-30">
                                    <MousePointer2 className="w-5 h-5 text-[#00bf9a] absolute -right-2 -bottom-2 drop-shadow-md" />
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <h3 className="text-xl font-black text-[#111] mb-2 leading-tight">Design Without Limits</h3>
                            <p className="text-[#666] font-medium leading-relaxed text-sm">
                                Import models, customize layouts, and create exactly what your client imagines.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
