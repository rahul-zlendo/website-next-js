'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Maximize2 } from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';

// Asset map for the 4 stages
const STAGES = [
    {
        id: '2d-plan',
        image: '/assets/Home-Page/2d-to-3d-convertor.png',
        label: '1. 2D Floor Plan',
        style: { filter: 'none' } // Use native look
    },
    {
        id: '3d-structure',
        image: '/assets/3d_hero.png',
        label: '2. 3D Model',
        style: { filter: 'sepia(30%) hue-rotate(180deg) saturate(50%)' } // Mimic clay render
    },
    {
        id: 'render',
        image: '/assets/3d_hero.png',
        label: '3. Photorealism',
        style: { filter: 'none' } // Full HD render
    },
    {
        id: 'walkthrough',
        image: '/assets/3d_hero.png',
        label: '4. Live Walkthrough',
        style: { scale: 1.15 } // Simulate camera zoom
    }
];

export default function InteractiveGlobalHero() {
    const [currentStage, setCurrentStage] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [progress, setProgress] = useState(0);

    // Auto-progress timeline loop
    useEffect(() => {
        if (isHovering) return; // Pause on hover

        const intervalTime = 3000; // 3 seconds per stage
        const tickRate = 50;
        const tickIncrement = (tickRate / intervalTime) * 100;

        const interval = setInterval(() => {
            setProgress(p => {
                if (p + tickIncrement >= 100) {
                    setCurrentStage(c => (c + 1) % STAGES.length);
                    return 0; // Reset progress bar for next stage
                }
                return p + tickIncrement;
            });
        }, tickRate);

        return () => clearInterval(interval);
    }, [isHovering, currentStage]);

    return (
        <section className="relative min-h-[90vh] flex items-center bg-[#030508] text-white overflow-hidden py-32 lg:py-0 border-b border-white/5">
            {/* Dark Premium Background Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,191,154,0.1)_0%,transparent_70%)] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] rounded-full translate-y-1/3 -translate-x-1/2 pointer-events-none" />

            {/* Grid overlay for 2D feel */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

            <div className="container-custom px-4 relative z-10 w-full">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">

                    {/* Left Side: Content */}
                    <div className="lg:col-span-5 space-y-8 z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 font-bold text-sm tracking-wide uppercase"
                        >
                            <span className="w-2 h-2 rounded-full bg-zlendo-teal animate-pulse" /> Zlendo Realty Core Engine
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight"
                        >
                            From floor plan <br /> to client approval <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-400">— in minutes.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-400 font-medium leading-relaxed max-w-lg"
                        >
                            Design, visualize, and present in one seamless flow. Drag the interface to watch the Zlendo engine build reality instantaneously.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4"
                        >
                            <a
                                href={SIGNUP_URL}
                                className="w-full sm:w-auto px-8 py-4 bg-zlendo-teal text-white font-black text-lg rounded-xl hover:bg-[#00a685] transition-all flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(0,191,154,0.3)] hover:scale-105"
                            >
                                Try it now <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href="/contact"
                                className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md text-white border border-white/10 font-bold text-lg rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                            >
                                <Play className="w-5 h-5" /> Watch demo
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Side: Visual Canvas (Interactive Transformation UI) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="lg:col-span-7 relative h-[400px] md:h-[600px] w-full rounded-[2rem] border border-white/10 bg-[#0a0a0f] shadow-[0_40px_80px_rgba(0,0,0,0.5)] overflow-hidden group"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        {/* The Canvas Images Stack */}
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentStage}
                                src={STAGES[currentStage].image}
                                initial={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
                                animate={{
                                    opacity: 1,
                                    filter: 'blur(0px)',
                                    scale: STAGES[currentStage].style?.scale || 1,
                                    // Inject CSS filters dynamically
                                    ...STAGES[currentStage].style
                                }}
                                exit={{ opacity: 0, filter: 'blur(10px)' }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className={`w-full h-full object-cover absolute inset-0 ${currentStage === 3 ? 'animate-[pulse_10s_ease-in-out_infinite]' : ''}`}
                            />
                        </AnimatePresence>

                        {/* Interactive UI Overlays (Glassmorphism tools) */}
                        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent">

                            {/* Hover Interactions indicator */}
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 text-white text-xs font-bold uppercase tracking-widest">
                                <Maximize2 className="w-3 h-3" /> Interactive Mode
                            </div>

                            {/* State Timeline Buttons */}
                            <div className="flex gap-2 w-full max-w-md mx-auto mb-4 bg-black/40 backdrop-blur-md p-1.5 rounded-2xl border border-white/10">
                                {STAGES.map((stage, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => { setCurrentStage(idx); setProgress(0); }}
                                        className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all relative overflow-hidden ${currentStage === idx ? 'text-white' : 'text-white/40 hover:text-white/80'}`}
                                    >
                                        <span className="relative z-10">{stage.label.split(' ')[1]}</span>
                                        {currentStage === idx && (
                                            <motion.div layoutId="activeTab" className="absolute inset-0 bg-white/20 rounded-xl" />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Progress Bar Line */}
                            <div className="w-full max-w-md mx-auto h-1.5 bg-white/10 rounded-full overflow-hidden flex">
                                {STAGES.map((_, i) => (
                                    <div key={i} className="flex-1 h-full border-r border-black last:border-r-0 relative">
                                        {currentStage === i && (
                                            <div
                                                className="absolute top-0 left-0 bottom-0 bg-zlendo-teal transition-all ease-linear"
                                                style={{ width: `${progress}%` }}
                                            />
                                        )}
                                        {currentStage > i && (
                                            <div className="absolute inset-0 bg-zlendo-teal" />
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-4">
                                <span className="text-white/60 text-xs font-bold tracking-widest uppercase">
                                    {STAGES[currentStage].label}
                                </span>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
