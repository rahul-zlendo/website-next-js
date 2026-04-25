'use client';

import React from 'react';
import {
    PlayCircle,
    Zap,
    Sparkles,
    Layers,
    ArrowRight,
    CheckCircle2,
    Box,
    Cloud,
    RefreshCcw,
    Download,
    Clock
} from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';

export default function InteractiveGlobalHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-[#0B0C10] text-white overflow-hidden py-32 lg:py-24 border-b border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,191,154,0.03)_0%,transparent_70%)]" />

            <div className="container-custom px-4 md:px-8 max-w-[1400px] mx-auto relative z-10 w-full">
                <div className="grid xl:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center">
                    {/* Left Side: Copy & CTAs */}
                    <div className="space-y-8">
                        {/* AI Powered Chip */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full text-white/80 font-bold text-xs border border-white/10 uppercase tracking-widest">
                            <Zap className="w-3.5 h-3.5 text-[#00bf9a] fill-[#00bf9a]/20" /> Zlendo Realty Core Engine
                        </div>
                        
                        {/* Headings */}
                        <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-black text-white leading-[1.05] tracking-tight">
                            What Takes Days<br />Elsewhere,<br />
                            Zlendo Realty Does in <span className="text-[#00bf9a]">Minutes.</span>
                        </h1>
                        
                        <div className="space-y-4">
                            <p className="text-[#00bf9a] font-bold text-lg md:text-xl">One design. All outputs. Instantly.</p>
                            <p className="text-white/60 text-base md:text-lg font-medium leading-relaxed max-w-lg">
                                Stop switching between tools. Zlendo Realty converts your floor plans into 3D, renders & more — at once.<br/>
                                All in one platform, no exports, no rework.
                            </p>
                        </div>

                        {/* 4 Feature Icons grid */}
                        <div className="grid grid-cols-4 gap-2 sm:gap-4 py-4 px-2 sm:px-4 rounded-2xl bg-white/[0.02] border border-white/5">
                            {[
                                {icon: Zap, title: "10X Faster", desc: "From days to minutes"},
                                {icon: Layers, title: "One Platform", desc: "All tools. No switching."},
                                {icon: CheckCircle2, title: "Perfect Consistency", desc: "Every output stays in sync"},
                                {icon: Cloud, title: "Cloud Powered", desc: "Fast. Secure. Reliable."}
                            ].map((feat, i) => (
                                <div key={i} className="flex flex-col items-center text-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#00bf9a]/10 flex items-center justify-center border border-[#00bf9a]/20">
                                        <feat.icon className="w-4 h-4 text-[#00bf9a]" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] sm:text-xs font-bold text-[#00bf9a] mb-0.5">{feat.title}</div>
                                        <div className="text-[9px] sm:text-[10px] text-white/50 leading-tight">{feat.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                            <a href={SIGNUP_URL} className="w-full sm:w-auto px-8 py-4 bg-[#00bf9a] text-white font-bold text-lg rounded-xl hover:bg-[#00a685] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00bf9a]/20 hover:scale-105">
                                Try Zlendo Realty Now <ArrowRight className="w-5 h-5" />
                            </a>
                            <a href="#demo" className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-bold text-lg rounded-xl hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center gap-2">
                                <PlayCircle className="w-5 h-5 fill-white text-[#111]" /> Watch Demo
                            </a>
                        </div>

                        {/* Reviews */}
                        <div className="flex items-center gap-4 pt-2">
                            <div className="flex -space-x-3">
                                {[1,2,3,4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0B0C10] overflow-hidden bg-slate-800">
                                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-1 mb-1">
                                    {[1,2,3,4,5].map(i => <Sparkles key={i} className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />)}
                                </div>
                                <div className="text-[11px] font-medium text-white/60">Trusted by 10,000+ designers, architects & builders</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: The Diagram Engine */}
                    <div className="relative rounded-[2rem] bg-[#121318] border border-white/10 p-6 lg:p-8 flex flex-col gap-8 shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
                        {/* OLD WAY SECTION */}
                        <div className="relative">
                            <div className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold rounded-full mb-6">
                                THE OLD WAY <span className="text-red-500/60 font-medium ml-1">(Days of work)</span>
                            </div>
                            
                            {/* Tool Row */}
                            <div className="flex items-center justify-between mb-4 px-2">
                                {[
                                    {name: "SketchUp", label: "3D MODELING", color: "text-red-500"},
                                    {name: "AutoCAD", label: "DRAFTING", color: "text-red-600"},
                                    {name: "D5 RENDER", label: "RENDERING", color: "text-purple-500"},
                                    {name: "V-Ray", label: "ADV. RENDERING", color: "text-blue-500"},
                                    {name: "Photoshop", label: "POST PRODUCTION", color: "text-blue-400"}
                                ].map((tool, i) => (
                                    <React.Fragment key={i}>
                                        <div className="flex flex-col items-center gap-1.5">
                                            <div className={`font-black text-xs sm:text-sm flex items-center gap-1.5 ${tool.color}`}>
                                                {i === 0 && <Box className="w-3.5 h-3.5" />}
                                                {i === 1 && <span className="text-lg font-serif">A</span>}
                                                {i === 2 && <div className="w-3.5 h-3.5 rounded-full bg-purple-500 text-white flex items-center justify-center text-[8px]">D</div>}
                                                {i === 3 && <div className="w-3.5 h-3.5 rounded-full border border-blue-500 flex items-center justify-center text-[8px]">V</div>}
                                                {i === 4 && <div className="px-1 bg-blue-500 text-[#111] font-bold text-[8px] rounded-sm">Ps</div>}
                                                {tool.name}
                                            </div>
                                            <div className="text-[8px] sm:text-[9px] text-white/40 font-bold tracking-widest">{tool.label}</div>
                                        </div>
                                        {i < 4 && <ArrowRight className="w-3 h-3 text-white/20 shrink-0" />}
                                    </React.Fragment>
                                ))}
                            </div>

                            {/* Image Row */}
                            <div className="flex gap-2 sm:gap-3">
                                {[
                                    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=200&auto=format&fit=crop",
                                    "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=200&auto=format&fit=crop",
                                    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=200&auto=format&fit=crop",
                                    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=200&auto=format&fit=crop",
                                    "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=200&auto=format&fit=crop"
                                ].map((img, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                                        <div className="w-full aspect-[4/3] rounded-lg bg-white/5 border border-white/10 overflow-hidden">
                                            <img src={img} className="w-full h-full object-cover opacity-60 grayscale" alt="" />
                                        </div>
                                        <div className="text-[9px] font-medium text-white/40">{i === 4 ? '1 Day+' : '1-2 Days'}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Red Bar */}
                            <div className="mt-4 bg-[#ef4444]/10 border border-[#ef4444]/20 rounded-xl py-2.5 flex items-center justify-center gap-3 sm:gap-5 text-[10px] sm:text-xs text-[#ef4444] font-medium shadow-inner">
                                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 5-7 Days</div>
                                <div className="w-px h-3.5 bg-[#ef4444]/20" />
                                <div>Multiple Tools</div>
                                <div className="w-px h-3.5 bg-[#ef4444]/20" />
                                <div>Exports</div>
                                <div className="w-px h-3.5 bg-[#ef4444]/20" />
                                <div>Rework</div>
                                <div className="w-px h-3.5 bg-[#ef4444]/20" />
                                <div>Inconsistencies</div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full border-t border-dashed border-white/10" />

                        {/* ZLENDO WAY SECTION */}
                        <div className="relative pt-2">
                            <div className="inline-block px-4 py-1.5 bg-[#00bf9a]/10 border border-[#00bf9a]/20 text-[#00bf9a] text-[10px] font-bold rounded-full mb-8">
                                THE ZLENDO REALTY WAY <span className="text-[#00bf9a]/60 font-medium ml-1">(Minutes, not days)</span>
                            </div>

                            <div className="flex items-stretch gap-4 h-48 sm:h-56">
                                {/* Input */}
                                <div className="w-[22%] flex flex-col items-center">
                                    <div className="text-[9px] sm:text-[10px] text-[#00bf9a] font-bold mb-1">1. UPLOAD / CREATE</div>
                                    <div className="text-[9px] text-white/40 mb-3">Your floor plan</div>
                                    <div className="w-full flex-1 rounded-xl bg-white p-1.5 border border-white/10">
                                        <img src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-contain opacity-90 grayscale" alt="Floor plan input" />
                                    </div>
                                </div>

                                {/* Core Engine Box */}
                                <div className="w-[26%] flex items-center justify-center relative">
                                    {/* Connecting Arrows */}
                                    <div className="absolute left-[-1rem] top-1/2 w-4 h-px border-t-[1.5px] border-dashed border-[#00bf9a]" />
                                    <div className="absolute right-[-1rem] top-1/2 w-4 h-px border-t-[1.5px] border-dashed border-[#00bf9a]" />

                                    <div className="w-full h-[85%] rounded-2xl bg-[#00bf9a]/5 border border-[#00bf9a]/40 flex flex-col items-center justify-center p-3 text-center shadow-[0_0_30px_rgba(0,191,154,0.15)] relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-b from-[#00bf9a]/10 to-transparent" />
                                        {/* Glowing lines */}
                                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00bf9a] to-transparent" />
                                        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00bf9a] to-transparent" />
                                        
                                        <Sparkles className="w-6 h-6 text-[#00bf9a] mb-3" />
                                        <div className="text-sm sm:text-base font-black text-white mb-1">ZLENDO</div>
                                        <div className="text-[8px] sm:text-[9px] text-[#00bf9a] tracking-[0.2em] font-bold mb-4 uppercase">Realty Core Engine</div>
                                        <div className="text-[9px] sm:text-[10px] text-white/80 font-medium leading-relaxed">One Smart Engine.<br/>All Outputs.<br/>Instantly.</div>
                                    </div>
                                </div>

                                {/* Outputs */}
                                <div className="w-[52%] flex flex-col relative border border-[#00bf9a]/20 rounded-xl p-3 bg-gradient-to-b from-[#00bf9a]/10 to-transparent">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#121318] px-3 text-[9px] sm:text-[10px] text-[#00bf9a] font-bold tracking-widest whitespace-nowrap">
                                        2. GET EVERYTHING – IN MINUTES
                                    </div>
                                    <div className="flex gap-1.5 h-[65%] mb-3 mt-1">
                                        {[
                                            {label: "3D MODEL", img: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=150&auto=format&fit=crop"}, 
                                            {label: "RENDER (D5)", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=150&auto=format&fit=crop"}, 
                                            {label: "RENDER (V-RAY)", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=150&auto=format&fit=crop"}, 
                                            {label: "WALKTHROUGH", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=150&auto=format&fit=crop"}, 
                                            {label: "2D PLAN", img: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=150&auto=format&fit=crop"}, 
                                            {label: "SITE PLAN", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=150&auto=format&fit=crop"}
                                        ].map((item, i) => (
                                            <div key={i} className="flex-1 flex flex-col rounded bg-white/5 border border-white/10 overflow-hidden relative group">
                                                <img src={item.img} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" alt={item.label} />
                                                <div className="absolute bottom-0 inset-x-0 bg-black/80 py-1 text-center text-[7px] font-bold text-white tracking-wider truncate px-1">{item.label}</div>
                                                {i === 3 && <PlayCircle className="absolute inset-0 m-auto w-5 h-5 text-white/80 fill-black/40" />}
                                            </div>
                                        ))}
                                    </div>
                                    {/* The white replacement box */}
                                    <div className="bg-white rounded-lg p-2 flex items-center justify-center gap-3 sm:gap-4 mt-auto shadow-xl">
                                        <div className="flex items-center gap-1 text-[8px] font-black text-red-500/50 line-through decoration-red-500"><Box className="w-2.5 h-2.5" /> SketchUp</div>
                                        <div className="flex items-center gap-1 text-[8px] font-black text-red-600/50 line-through decoration-red-600"><span className="font-serif">A</span> AutoCAD</div>
                                        <div className="flex items-center gap-1 text-[8px] font-black text-purple-600/50 line-through decoration-purple-600"><div className="w-2.5 h-2.5 rounded-full bg-purple-500 text-white flex items-center justify-center text-[6px]">D</div> D5 RENDER</div>
                                        <div className="flex items-center gap-1 text-[8px] font-black text-blue-600/50 line-through decoration-blue-600"><div className="w-2.5 h-2.5 rounded-full border border-blue-500 flex items-center justify-center text-[6px]">V</div> V-Ray</div>
                                        <div className="flex items-center gap-1 text-[8px] font-black text-blue-500/50 line-through decoration-blue-500"><div className="px-0.5 bg-blue-500 text-white rounded-[2px] text-[6px]">Ps</div> Photoshop</div>
                                    </div>
                                </div>
                            </div>

                            {/* Cyan Bar */}
                            <div className="mt-6 bg-[#00bf9a]/10 border border-[#00bf9a]/20 rounded-xl py-3 flex items-center justify-center gap-3 sm:gap-6 text-[9px] sm:text-[10px] text-[#00bf9a] font-medium shadow-[0_0_15px_rgba(0,191,154,0.05)]">
                                <div className="flex items-center gap-1.5"><Layers className="w-3.5 h-3.5" /> All Tools. One Platform.</div>
                                <div className="w-px h-3.5 bg-[#00bf9a]/20" />
                                <div className="flex items-center gap-1.5"><Download className="w-3.5 h-3.5" /> No Exports.</div>
                                <div className="w-px h-3.5 bg-[#00bf9a]/20" />
                                <div className="flex items-center gap-1.5"><RefreshCcw className="w-3.5 h-3.5" /> No Switching.</div>
                                <div className="w-px h-3.5 bg-[#00bf9a]/20" />
                                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> 100% Consistent Results.</div>
                                <div className="w-px h-3.5 bg-[#00bf9a]/20" />
                                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Save Hours Every Day.</div>
                            </div>
                        </div>
                        
                        <div className="text-center mt-2 text-[10px] sm:text-[11px] font-medium text-white/40 tracking-[0.25em] uppercase">
                            ONE DESIGN. EVERY OUTPUT. <span className="text-[#00bf9a] font-bold">LIMITLESS POSSIBILITIES.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
