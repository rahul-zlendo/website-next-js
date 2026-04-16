'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
    Clock, 
    TrendingUp, 
    CheckCircle2, 
    ArrowRight, 
    Play, 
    Building2, 
    HardHat, 
    Hammer, 
    Home, 
    MousePointerClick,
    Quote
} from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';

// Helper component for the Before/After Slider
const BeforeAfterSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (clientX: number) => {
        if (!containerRef.current || !isDragging) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
    };

    return (
        <div 
            ref={containerRef}
            className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden bg-[#FAFAFC] cursor-ew-resize select-none border border-black/5 shadow-2xl"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={(e) => handleMove(e.clientX)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        >
            {/* Base Image (3D Render - After) */}
            <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2400" 
                    alt="3D Render After" 
                    className="w-full h-full object-cover pointer-events-none"
                />
            </div>
            
            {/* Overlay Image (2D Plan - Before) with Clip Path */}
            <div 
                className="absolute inset-0 border-r-2 border-white/80"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <div className="absolute inset-0 bg-white">
                    <img 
                        src="https://images.unsplash.com/photo-1579725942502-c51ef6dbb18e?auto=format&fit=crop&q=80&w=2400" 
                        alt="2D Floor Plan Before" 
                        className="w-full h-full object-cover opacity-60 mix-blend-multiply pointer-events-none grayscale"
                    />
                    {/* Add Blueprint-style grid underneath to simulate 2D mapping */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-darken" />
                </div>
            </div>

            {/* Slider Handle */}
            <div 
                className="absolute top-0 bottom-0 w-1 bg-white flex items-center justify-center -ml-0.5"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl border border-black/10">
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-black/40 rounded-full" />
                        <div className="w-1.5 h-1.5 bg-black/40 rounded-full" />
                    </div>
                </div>
            </div>
            
            {/* Labels */}
            <div className="absolute top-6 left-6 px-4 py-2 bg-black/70 backdrop-blur-md rounded-full text-white font-bold text-sm tracking-wider uppercase pointer-events-none">
                2D Floor Plan
            </div>
            <div className="absolute top-6 right-6 px-4 py-2 bg-zlendo-teal text-white font-bold text-sm tracking-wider uppercase pointer-events-none shadow-[0_4px_20px_rgba(0,191,154,0.3)]">
                3D Live Presentation
            </div>
        </div>
    );
};

export default function TwoDToThreeDPage() {
    const { scrollYProgress } = useScroll();
    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);

    const [activeUseCase, setActiveUseCase] = useState(0);
    const useCases = [
        { title: 'Architects', icon: Building2, img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200', outcome: 'Stop rendering. Start presenting.' },
        { title: 'Civil Engineers', icon: HardHat, img: 'https://images.unsplash.com/photo-1541888081622-493e874f63c3?auto=format&fit=crop&q=80&w=1200', outcome: 'Bridge the gap between blueprints and reality instantly.' },
        { title: 'Builders', icon: Hammer, img: 'https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80&w=1200', outcome: 'Show clients exactly what they are paying for to eliminate disputes.' },
        { title: 'Homeowners', icon: Home, img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200', outcome: 'Visualize your dream home clearly before the first brick is laid.' }
    ];

    return (
        <div className="min-h-screen bg-white text-[#111] font-nunito selection:bg-zlendo-teal/20 selection:text-zlendo-teal">
            <main>
                {/* 1. HERO (Visual Impact First) */}
                <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-black">
                    <motion.div style={{ y: heroY }} className="absolute inset-0 opacity-60">
                        {/* Simulated cinematic sequence: 2D plan morphing into 3D walkthrough */}
                        {/* We use a high quality video background to show speed + wow factor */}
                        <img 
                            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2400" 
                            className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite]"
                            alt="Cinematic Architectural Render"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    </motion.div>
                    
                    <div className="relative z-10 container-custom px-4 text-center mt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                                Upload a 2D Plan. <br className="hidden md:block"/>
                                Present in <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-400">3D Reality.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-white/80 font-medium max-w-2xl mx-auto drop-shadow-xl">
                                From flat sketch to immersive client presentation in under 60 seconds.
                            </p>
                            <div className="pt-8">
                                <a 
                                    href={SIGNUP_URL}
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black text-xl rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                                >
                                    Try Instantly <ArrowRight className="w-6 h-6" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 2. LIVE TRANSFORMATION SECTION (The Slider) */}
                <section className="py-32 bg-white relative -mt-10 rounded-t-[3rem] z-20">
                    <div className="container-custom px-4 max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-black text-[#111] mb-6">See the transformation live</h2>
                        <p className="text-xl text-[#666] font-medium mb-16">Drag the slider to watch flat diagrams become emotional spaces instantly.</p>
                        
                        <BeforeAfterSlider />
                    </div>
                </section>

                {/* 3. FEATURE-AS-EXPERIENCE (No Text Blocks) */}
                <section className="py-24 bg-[#FAFAFC] overflow-hidden">
                    <div className="container-custom px-4 space-y-32">
                        {/* UX Feature 1: AI Floor Plan Detection */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-100px", once: true }}
                                className="order-2 lg:order-1 relative rounded-[2.5rem] bg-white p-8 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-black/5"
                            >
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,191,154,0.05)_0%,transparent_70%)] rounded-[2.5rem]" />
                                <img src="https://images.unsplash.com/photo-1541888081622-493e874f63c3?auto=format&fit=crop&q=80&w=1200" className="w-full rounded-2xl grayscale opacity-80" alt="Blueprint" />
                                {/* Scanning animation line */}
                                <div className="absolute top-8 bottom-8 w-1 bg-zlendo-teal shadow-[0_0_20px_#00bf9a] animate-[scan_3s_ease-in-out_infinite]" style={{ left: '50%' }} />
                            </motion.div>
                            <div className="order-1 lg:order-2 space-y-6">
                                <h2 className="text-4xl md:text-6xl font-black text-[#111] leading-tight">Drop a PDF.<br/>We read the walls.</h2>
                                <p className="text-2xl text-[#666] font-bold">100% automated layout recognition.</p>
                            </div>
                        </div>

                        {/* UX Feature 2: Instant 3D + Walkthrough */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-6xl font-black text-[#111] leading-tight">Close the deal.<br/>Inside the model.</h2>
                                <p className="text-2xl text-[#666] font-bold">Generate a stunning presentation link instantly.</p>
                            </div>
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-100px", once: true }}
                                className="relative rounded-[2.5rem] bg-slate-900 p-4 shadow-2xl overflow-hidden aspect-video group"
                            >
                                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover rounded-[1.5rem] transition-transform duration-[10s] group-hover:scale-110" alt="3D Presentation" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                                        <Play className="w-8 h-8 text-white fill-white ml-2" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        
                        {/* UX Feature 3: Live Cost Estimation (Business ROI) */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-100px", once: true }}
                                className="order-2 lg:order-1 relative rounded-[2.5rem] bg-gradient-to-br from-[#111] to-[#222] p-8 shadow-2xl"
                            >
                                <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-xl transform rotate-3">
                                    <div className="flex justify-between items-end border-b border-black/10 pb-4 mb-4">
                                        <div>
                                            <div className="text-sm font-bold text-[#666] uppercase tracking-wider mb-1">Live BOQ Total</div>
                                            <div className="text-4xl font-black text-[#111]">$245,680</div>
                                        </div>
                                        <TrendingUp className="w-8 h-8 text-zlendo-teal" />
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-bold text-[#111]">
                                        <CheckCircle2 className="w-5 h-5 text-zlendo-teal" /> Wall finishes updated manually
                                    </div>
                                </div>
                            </motion.div>
                            <div className="order-1 lg:order-2 space-y-6">
                                <h2 className="text-4xl md:text-6xl font-black text-[#111] leading-tight">Edit the design.<br/>Watch the budget update.</h2>
                                <p className="text-2xl text-[#666] font-bold">Never open an Excel spreadsheet again.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. BEFORE vs AFTER (High Conversion Metric Showdown) */}
                <section className="py-32 bg-black text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-zlendo-teal/10 rounded-full blur-[150px] pointer-events-none" />
                    
                    <div className="container-custom px-4 text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black mb-6">The old way is bleeding your profit.</h2>
                    </div>

                    <div className="container-custom px-4 max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-0 relative">
                            {/* VS Badge in Middle on Desktop */}
                            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full items-center justify-center z-20 shadow-2xl">
                                <span className="font-black text-[#111] text-xl italic">VS</span>
                            </div>

                            {/* Before */}
                            <div className="bg-white/5 border border-white/10 p-12 md:rounded-l-[3rem] md:rounded-r-none rounded-[2.5rem]">
                                <h3 className="text-2xl font-bold text-slate-400 mb-8">Manual CAD + Rendering</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                        <span className="text-lg font-medium">Draw Floorplan</span>
                                        <span className="text-xl font-black text-red-400">4 Hours</span>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                        <span className="text-lg font-medium">Model 3D Extrusions</span>
                                        <span className="text-xl font-black text-red-400">8 Hours</span>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                        <span className="text-lg font-medium">Render Engine Wait</span>
                                        <span className="text-xl font-black text-red-400">12 Hours</span>
                                    </div>
                                    <div className="pt-4 text-left">
                                        <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Time to Client Presentation</div>
                                        <div className="text-5xl font-black text-white opacity-50">3 Days</div>
                                    </div>
                                </div>
                            </div>

                            {/* After (Zlendo) */}
                            <div className="bg-zlendo-teal border border-zlendo-teal p-12 md:rounded-r-[3rem] md:rounded-l-none rounded-[2.5rem] relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px]" />
                                <h3 className="text-2xl font-black text-white mb-8">The Zlendo Workflow</h3>
                                <div className="space-y-6 relative z-10">
                                    <div className="flex items-center justify-between border-b border-black/10 pb-4">
                                        <span className="text-lg font-bold">Upload PDF</span>
                                        <span className="text-xl font-black text-[#013f33]">10 Sec</span>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-black/10 pb-4">
                                        <span className="text-lg font-bold">AI Extrusion</span>
                                        <span className="text-xl font-black text-[#013f33]">30 Sec</span>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-black/10 pb-4">
                                        <span className="text-lg font-bold">Auto Photorealism</span>
                                        <span className="text-xl font-black text-[#013f33]">Instant</span>
                                    </div>
                                    <div className="pt-4 text-left">
                                        <div className="text-sm font-bold text-[#013f33] uppercase tracking-widest mb-1">Time to Client Presentation</div>
                                        <div className="text-5xl font-black text-white drop-shadow-md">Under 1 Min</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. USE CASE SEGMENTS */}
                <section className="py-24 bg-white">
                    <div className="container-custom px-4 max-w-6xl mx-auto">
                        <div className="flex flex-wrap justify-center gap-4 mb-16">
                            {useCases.map((uc, i) => (
                                <button 
                                    key={i} 
                                    onClick={() => setActiveUseCase(i)}
                                    className={`px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-3 ${activeUseCase === i ? 'bg-[#111] text-white shadow-xl scale-105' : 'bg-[#FAFAFC] text-[#666] hover:bg-black/5 border border-black/5'}`}
                                >
                                    <uc.icon className="w-5 h-5" />
                                    {uc.title}
                                </button>
                            ))}
                        </div>
                        
                        <div className="relative rounded-[3rem] overflow-hidden bg-black aspect-[21/9]">
                            <AnimatePresence mode="wait">
                                <motion.div 
                                    key={activeUseCase}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                >
                                    <img src={useCases[activeUseCase].img} alt={useCases[activeUseCase].title} className="w-full h-full object-cover opacity-60" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-end p-12 md:p-20">
                                        <h3 className="text-4xl md:text-6xl font-black text-white max-w-2xl leading-tight">
                                            {useCases[activeUseCase].outcome}
                                        </h3>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                {/* 6. WALKTHROUGH EXPERIENCE (Emotion & Space) */}
                <section className="py-32 bg-[#FAFAFC] border-y border-black/5 overflow-hidden">
                    <div className="container-custom px-4 text-center">
                        <h2 className="text-4xl md:text-6xl font-black text-[#111] mb-6">Don't show flat images. <br/>Show them their future home.</h2>
                        <div className="relative w-full max-w-5xl mx-auto mt-16 rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.1)] border border-white group aspect-video">
                            {/* Simulated Walkthrough Video */}
                            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2400" className="w-full h-full object-cover animate-[pulse_10s_ease-in-out_infinite]" alt="Walkthrough" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="w-24 h-24 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform shadow-2xl">
                                    <Play className="w-10 h-10 text-white fill-white ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. ROI SECTION (Critical Business Value) */}
                <section className="py-32 bg-white">
                    <div className="container-custom px-4 text-center max-w-6xl mx-auto">
                        <h2 className="text-3xl font-black text-zlendo-teal uppercase tracking-widest mb-4">The Business Impact</h2>
                        <h3 className="text-4xl md:text-6xl font-black text-[#111] leading-tight mb-20">
                            Stop selling design.<br/>Start selling certainty.
                        </h3>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-10 rounded-[2.5rem] bg-[#FAFAFC] border border-black/5">
                                <div className="text-6xl font-black text-[#111] mb-4">60%</div>
                                <div className="text-xl font-bold text-[#111] mb-2">Faster Approvals</div>
                                <p className="text-[#666] font-medium">Clients say "yes" faster when they can virtually experience the space.</p>
                            </div>
                            <div className="p-10 rounded-[2.5rem] bg-[#FAFAFC] border border-black/5">
                                <div className="text-6xl font-black text-[#111] mb-4">3x</div>
                                <div className="text-xl font-bold text-[#111] mb-2">Project Capacity</div>
                                <p className="text-[#666] font-medium">Automate rendering to free up your architects for high-value design work.</p>
                            </div>
                            <div className="p-10 rounded-[2.5rem] bg-[#FAFAFC] border border-black/5">
                                <div className="text-6xl font-black text-[#111] mb-4">20%</div>
                                <div className="text-xl font-bold text-[#111] mb-2">Higher Bump in Fees</div>
                                <p className="text-[#666] font-medium">Premium presentations allow you to command premium prices effortlessly.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. SOCIAL PROOF */}
                <section className="py-24 bg-[#FAFAFC] border-t border-black/5">
                    <div className="container-custom px-4 text-center max-w-4xl mx-auto">
                        <Quote className="w-16 h-16 text-zlendo-teal/30 mx-auto mb-8" />
                        <h2 className="text-3xl md:text-5xl font-black text-[#111] leading-snug mb-12">
                            "Zlendo Realty is the first tool that actually fits into a professional workflow. We win bids on the spot now."
                        </h2>
                        <div className="flex items-center justify-center gap-4">
                            <img src="https://i.pravatar.cc/150?img=32" alt="Sarah J" className="w-16 h-16 rounded-full grayscale opacity-80" />
                            <div className="text-left">
                                <div className="font-black text-[#111] text-lg">Sarah Jenkins</div>
                                <div className="text-[#666] font-medium">Principal Architect, DesignStudio NY</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. FINAL CTA */}
                <section className="py-32 bg-[#111] text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,191,154,0.15)_0%,transparent_70%)]" />
                    <div className="container-custom px-4 text-center relative z-10">
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-8">
                            Design. Render.<br/>Close Clients — in Minutes.
                        </h2>
                        <p className="text-xl text-slate-400 font-medium mb-12 max-w-xl mx-auto">
                            Join the fastest-growing professional design platform today.
                        </p>
                        <a 
                            href={SIGNUP_URL}
                            className="inline-flex items-center gap-3 px-12 py-6 bg-zlendo-teal text-white font-black text-2xl rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_40px_rgba(0,191,154,0.3)] hover:scale-105"
                        >
                            Start Free Trial
                        </a>
                        <p className="mt-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
                            No credit card required. Cancel anytime.
                        </p>
                    </div>
                </section>

            </main>
        </div>
    );
}
