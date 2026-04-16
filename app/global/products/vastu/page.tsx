'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, CheckCircle, ArrowRight } from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';

export default function VastuOptimizerPage() {
    return (
        <div className="min-h-screen bg-white text-[#222222] font-nunito selection:bg-orange-500/20 selection:text-orange-600">
            <main>
                <div className="container-custom px-4 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="max-w-xl space-y-8">
                        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-black/5 bg-white shadow-sm">
                            <Compass className="w-4 h-4 text-[#F97316]" />
                            <span className="text-xs font-bold tracking-widest text-[#F97316] uppercase">Ancient Science</span>
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-[44px] md:text-[60px] lg:text-[76px] tracking-tight font-black leading-[1.05] text-[#111]">
                            Perfect Harmony.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-[#FCD884]">
                                Scientific Precision.
                            </span>
                        </motion.h1>

                        <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-[#666] font-medium leading-relaxed">
                            Analyze your 3D floor plans instantly for Vastu Shastra compliance. Balance the five elements and ensure prosperity in every spatial decision.
                        </motion.p>

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="pt-4">
                            <a href={SIGNUP_URL} className="inline-flex items-center justify-center px-10 py-5 bg-[#111111] text-white rounded-xl font-black text-xl hover:bg-[#333] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.1)] gap-3 group">
                                Optimize Plan <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05)_0%,transparent_60%)] pointer-events-none" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                            {[
                                { title: "Directional Zoning", desc: "Automated analysis of entrance, kitchen, and master bedroom placements." },
                                { title: "Vastu Score Matrix", desc: "Real-time compliance percentage out of 100 for your total floor plan." },
                                { title: "Remedy Suggestions", desc: "Non-destructive design tweaks to neutralize geometric doshas." },
                                { title: "Element Balancing", desc: "Visual heatmaps ensuring Earth, Water, Fire, Air, and Space are balanced." }
                            ].map((f, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + (i * 0.1) }} className="bg-white border border-black/[0.05] shadow-[0_10px_20px_rgba(0,0,0,0.02)] p-8 rounded-[2xl] hover:border-orange-500/30 hover:shadow-[0_20px_40px_rgba(249,115,22,0.05)] transition-all">
                                    <CheckCircle className="w-8 h-8 text-orange-500 mb-6" />
                                    <h3 className="text-xl font-black mb-2 text-[#111]">{f.title}</h3>
                                    <p className="text-[#666] font-medium leading-relaxed">{f.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
