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
    Clock,
    Star
} from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';

export default function InteractiveGlobalHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-[#0B0C10] text-white overflow-hidden py-20 lg:py-24 border-b border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,191,154,0.03)_0%,transparent_70%)]" />

            <div className="container-custom px-4 md:px-8 max-w-[1400px] mx-auto relative z-10 w-full">
                <div className="grid lg:grid-cols-[1fr_1.1fr] xl:grid-cols-[1fr_1.2fr] gap-10 lg:gap-12 items-center">
                    {/* Left Side: Copy & CTAs */}
                    <div className="space-y-8">
                        {/* AI Powered Chip */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full text-white/80 font-bold text-xs border border-white/10 uppercase tracking-widest">
                            <Zap className="w-3.5 h-3.5 text-[#00bf9a] fill-[#00bf9a]/20" /> Zlendo Realty Core Engine
                        </div>

                        {/* Headings */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
                            What Takes Days<br />Elsewhere,<br />
                            Zlendo Realty Does in <span className="text-[#00bf9a]">Minutes.</span>
                        </h1>

                        <div className="space-y-4">
                            <p className="text-[#00bf9a] font-bold text-lg md:text-xl">One design. All outputs. Instantly.</p>
                            <p className="text-white/60 text-base md:text-lg font-medium leading-relaxed max-w-xl">
                                Stop switching between tools. Zlendo Realty converts your floor plans into 3D, renders & more — at once.<br />
                                All in one platform, no exports, no rework.
                            </p>
                        </div>

                        {/* 4 Feature Icons grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 py-4 px-3 sm:px-4 rounded-2xl bg-white/[0.02] border border-white/5">
                            {[
                                { icon: Zap, title: "10X Faster", desc: "From days to minutes" },
                                { icon: Layers, title: "One Platform", desc: "All tools. No switching." },
                                { icon: CheckCircle2, title: "Perfect Consistency", desc: "Every output stays in sync" },
                                { icon: Cloud, title: "Cloud Powered", desc: "Fast. Secure. Reliable." }
                            ].map((feat, i) => (
                                <div key={i} className="flex flex-col items-center text-center gap-2 sm:gap-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#00bf9a]/10 flex items-center justify-center border border-[#00bf9a]/20">
                                        <feat.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00bf9a]" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] sm:text-xs font-bold text-[#00bf9a] mb-0.5">{feat.title}</div>
                                        <div className="text-[9px] sm:text-[10px] text-white/50 leading-tight">{feat.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2">
                            <a href={SIGNUP_URL} className="w-full sm:w-auto px-4 sm:px-8 py-3.5 sm:py-4 bg-[#00bf9a] text-white font-bold text-base sm:text-lg rounded-xl hover:bg-[#00a685] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00bf9a]/20 hover:scale-105 overflow-hidden whitespace-nowrap">
                                Try Zlendo Realty Now <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                            </a>
                            <a href="/business#demo-form" className="w-full sm:w-auto px-4 sm:px-8 py-3.5 sm:py-4 bg-white/5 text-white font-bold text-base sm:text-lg rounded-xl hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                                <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-[#111] shrink-0" /> Watch Demo
                            </a>
                        </div>

                        {/* Capterra Rating Badge */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-2">
                            {/* <div className="flex -space-x-3 shrink-0">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0B0C10] overflow-hidden bg-slate-800 ring-1 ring-white/5 shadow-lg">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="User" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div> */}

                            <div className="flex items-center gap-4 px-5 py-3 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-md group hover:border-[#00bf9a]/30 transition-all duration-300">
                                {/* Capterra Logo Official Image */}
                                <div className="flex items-center">
                                    <img
                                        src="/assets/capterra-logo.webp"
                                        alt="Capterra Official Logo"
                                        className="h-[18px] sm:h-[30px] w-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
                                    />
                                </div>

                                <div className="w-px h-6 bg-white/10" />

                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-[14px] sm:text-[15px] font-black text-white leading-none">Rated 5/5</span>
                                        <div className="flex gap-0.5">
                                            {[1, 2, 3, 4, 5].map(i => (
                                                <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-500 fill-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.4)]" />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="text-[10px] sm:text-[11px] font-bold text-white/30 uppercase tracking-[0.2em] leading-none pt-2">Verified Reviews</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: The Diagram Engine */}
                    <div className="relative rounded-2xl lg:rounded-[2rem] bg-[#121318] border border-white/10 p-4 sm:p-6 lg:p-8 flex flex-col gap-6 lg:gap-8 shadow-[0_40px_80px_rgba(0,0,0,0.5)] overflow-hidden w-full min-w-0">
                        {/* OLD WAY SECTION */}
                        <div className="relative">
                            <div className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold rounded-full mb-6">
                                THE OLD WAY <span className="text-red-500/60 font-medium ml-1">(Days of work)</span>
                            </div>

                            {/* Tool Row */}
                            <div className="overflow-x-auto no-scrollbar pb-4 -mx-1 px-1">
                                <div className="flex items-center justify-between gap-4 lg:gap-6 min-w-[480px] mb-2">
                                    {[
                                        { name: "SketchUp", label: "3D MODELING", color: "text-red-500" },
                                        { name: "AutoCAD", label: "DRAFTING", color: "text-red-600" },
                                        { name: "D5 RENDER", label: "RENDERING", color: "text-purple-500" },
                                        { name: "V-Ray", label: "ADV. RENDERING", color: "text-blue-500" },
                                        { name: "Photoshop", label: "POST PROD.", color: "text-blue-400" }
                                    ].map((tool, i) => (
                                        <React.Fragment key={i}>
                                            <div className="flex flex-col items-center gap-1 shrink-0">
                                                <div className={`font-black text-[10px] sm:text-xs flex items-center gap-1 ${tool.color}`}>
                                                    {i === 0 && <Box className="w-3 h-3" />}
                                                    {i === 1 && <span className="text-base font-serif">A</span>}
                                                    {i === 2 && <div className="w-3 h-3 rounded-full bg-purple-500 text-white flex items-center justify-center text-[7px]">D</div>}
                                                    {i === 3 && <div className="w-3 h-3 rounded-full border border-blue-500 flex items-center justify-center text-[7px]">V</div>}
                                                    {i === 4 && <div className="px-0.5 bg-blue-500 text-[#111] font-bold text-[7px] rounded-sm">Ps</div>}
                                                    {tool.name}
                                                </div>
                                                <div className="text-[7px] sm:text-[8px] text-white/40 font-bold tracking-widest">{tool.label}</div>
                                            </div>
                                            {i < 4 && <ArrowRight className="w-2.5 h-2.5 text-white/20 shrink-0" />}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            {/* Image Row */}
                            <div className="overflow-x-auto no-scrollbar pb-2 -mx-1 px-1">
                                <div className="flex gap-1.5 sm:gap-2 min-w-[400px]">
                                    {[
                                        "/assets/home/plan-blueprint.webp",
                                        "/assets/home/blueprint-hand.webp",
                                        "/assets/home/modern-kitchen.webp",
                                        "/assets/home/modern-kitchen.webp",
                                        "/assets/home/living-room-3d.webp"
                                    ].map((img, i) => (
                                        <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                                            <div className="w-full aspect-[4/3] rounded-lg bg-white/5 border border-white/10 overflow-hidden">
                                                <img src={img} className="w-full h-full object-cover opacity-60 grayscale" alt={`Time-consuming legacy design process example ${i + 1}`} />
                                            </div>
                                            <div className="text-[8px] font-medium text-white/40">{i === 4 ? '1 Day+' : '1-2 Days'}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Red Bar */}
                            <div className="mt-4 bg-[#ef4444]/10 border border-[#ef4444]/20 rounded-xl py-2.5 px-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] sm:text-xs text-[#ef4444] font-medium shadow-inner">
                                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 5-7 Days</div>
                                <div className="w-px h-3.5 bg-[#ef4444]/20 hidden sm:block" />
                                <div>Multiple Tools</div>
                                <div className="w-px h-3.5 bg-[#ef4444]/20 hidden sm:block" />
                                <div>Exports</div>
                                <div className="w-px h-3.5 bg-[#ef4444]/20 hidden sm:block" />
                                <div>Rework</div>
                                <div className="w-px h-3.5 bg-[#ef4444]/20 hidden sm:block" />
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

                            <div className="overflow-x-auto no-scrollbar pb-2 -mx-1 px-1">
                                <div className="flex items-stretch gap-3 lg:gap-4 h-40 sm:h-48 lg:h-56 min-w-[500px]">
                                    {/* Input */}
                                    <div className="w-[18%] flex flex-col items-center">
                                        <div className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#00bf9a] font-bold mb-1">1. UPLOAD / CREATE</div>
                                        <div className="text-[8px] text-white/40 mb-2">Your floor plan</div>
                                        <div className="w-full flex-1 rounded-lg bg-white p-1 border border-white/10">
                                            <img src="/assets/home/blueprint-hand.webp" className="w-full h-full object-contain opacity-90 grayscale" alt="Floor plan input" />
                                        </div>
                                    </div>

                                    {/* Core Engine Box */}
                                    <div className="w-[24%] flex items-center justify-center relative">
                                        {/* Connecting Arrows */}
                                        <div className="absolute left-[-0.75rem] top-1/2 w-3 h-px border-t-[1.5px] border-dashed border-[#00bf9a]" />
                                        <div className="absolute right-[-0.75rem] top-1/2 w-3 h-px border-t-[1.5px] border-dashed border-[#00bf9a]" />

                                        <div className="w-full h-[85%] rounded-xl lg:rounded-2xl bg-[#00bf9a]/5 border border-[#00bf9a]/40 flex flex-col items-center justify-center p-2 lg:p-3 text-center shadow-[0_0_30px_rgba(0,191,154,0.15)] relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-gradient-to-b from-[#00bf9a]/10 to-transparent" />
                                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00bf9a] to-transparent" />
                                            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00bf9a] to-transparent" />

                                            <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-[#00bf9a] mb-2" />
                                            <div className="text-xs sm:text-sm lg:text-base font-black text-white mb-0.5">ZLENDO</div>
                                            <div className="text-[7px] sm:text-[8px] lg:text-[9px] text-[#00bf9a] tracking-[0.15em] lg:tracking-[0.2em] font-bold mb-2 lg:mb-4 uppercase">Realty Core Engine</div>
                                            <div className="text-[8px] sm:text-[9px] lg:text-[10px] text-white/80 font-medium leading-relaxed">One Smart Engine.<br />All Outputs.<br />Instantly.</div>
                                        </div>
                                    </div>

                                    {/* Outputs */}
                                    <div className="w-[58%] flex flex-col relative border border-[#00bf9a]/20 rounded-xl p-2 lg:p-3 bg-gradient-to-b from-[#00bf9a]/10 to-transparent">
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#121318] px-2 text-[8px] sm:text-[9px] lg:text-[10px] text-[#00bf9a] font-bold tracking-widest whitespace-nowrap">
                                            2. GET EVERYTHING – IN MINUTES
                                        </div>
                                        <div className="flex gap-1 lg:gap-1.5 h-[65%] mb-2 lg:mb-3 mt-1">
                                            {[
                                                { label: "3D MODEL", img: "/assets/home/living-room-3d.webp" },
                                                { label: "RENDER (D5)", img: "/assets/home/modern-kitchen.webp" },
                                                { label: "RENDER (V-RAY)", img: "/assets/home/modern-kitchen.webp" },
                                                { label: "WALKTHROUGH", img: "/assets/home/modern-kitchen.webp" },
                                                { label: "2D PLAN", img: "/assets/home/blueprint-hand.webp" },
                                                { label: "SITE PLAN", img: "/assets/home/plan-blueprint.webp" }
                                            ].map((item, i) => (
                                                <div key={i} className="flex-1 flex flex-col rounded bg-white/5 border border-white/10 overflow-hidden relative group">
                                                    <img src={item.img} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" alt={item.label} />
                                                    <div className="absolute bottom-0 inset-x-0 bg-black/80 py-0.5 text-center text-[6px] lg:text-[7px] font-bold text-white tracking-wider truncate px-0.5">{item.label}</div>
                                                    {i === 3 && <PlayCircle className="absolute inset-0 m-auto w-4 h-4 lg:w-5 lg:h-5 text-white/80 fill-black/40" />}
                                                </div>
                                            ))}
                                        </div>
                                        {/* The white replacement box */}
                                        <div className="bg-white rounded-lg p-1.5 lg:p-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-auto shadow-xl">
                                            <div className="flex items-center gap-0.5 text-[7px] lg:text-[8px] font-black text-red-500/50 line-through decoration-red-500"><Box className="w-2 h-2" /> SketchUp</div>
                                            <div className="flex items-center gap-0.5 text-[7px] lg:text-[8px] font-black text-red-600/50 line-through decoration-red-600"><span className="font-serif">A</span> AutoCAD</div>
                                            <div className="flex items-center gap-0.5 text-[7px] lg:text-[8px] font-black text-purple-600/50 line-through decoration-purple-600"><div className="w-2 h-2 rounded-full bg-purple-500 text-white flex items-center justify-center text-[5px]">D</div> D5</div>
                                            <div className="flex items-center gap-0.5 text-[7px] lg:text-[8px] font-black text-blue-600/50 line-through decoration-blue-600"><div className="w-2 h-2 rounded-full border border-blue-500 flex items-center justify-center text-[5px]">V</div> V-Ray</div>
                                            <div className="flex items-center gap-0.5 text-[7px] lg:text-[8px] font-black text-blue-500/50 line-through decoration-blue-500"><div className="px-0.5 bg-blue-500 text-white rounded-[2px] text-[5px]">Ps</div> Ps</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Cyan Bar */}
                            <div className="mt-4 lg:mt-6 bg-[#00bf9a]/10 border border-[#00bf9a]/20 rounded-xl py-2.5 lg:py-3 px-3 flex flex-wrap items-center justify-center gap-x-4 lg:gap-x-6 gap-y-2 text-[8px] sm:text-[9px] lg:text-[10px] text-[#00bf9a] font-medium shadow-[0_0_15px_rgba(0,191,154,0.05)]">
                                <div className="flex items-center gap-1"><Layers className="w-3 h-3" /> All Tools. One Platform.</div>
                                <div className="w-px h-3 bg-[#00bf9a]/20 hidden sm:block" />
                                <div className="flex items-center gap-1"><Download className="w-3 h-3" /> No Exports.</div>
                                <div className="w-px h-3 bg-[#00bf9a]/20 hidden sm:block" />
                                <div className="flex items-center gap-1"><RefreshCcw className="w-3 h-3" /> No Switching.</div>
                                <div className="w-px h-3 bg-[#00bf9a]/20 hidden lg:block" />
                                <div className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> 100% Consistent.</div>
                                <div className="w-px h-3 bg-[#00bf9a]/20 hidden lg:block" />
                                <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> Save Hours.</div>
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
