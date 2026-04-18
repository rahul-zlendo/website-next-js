'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AiWorkflowsSection() {
    return (
        <section className="py-24 bg-[#03060C] font-nunito border-t border-white/5">
            <div className="container-custom px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white">Explore Zlendo Realty Workflows</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    
                    {/* LEFT CARD */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-3xl overflow-hidden bg-[#0a0a0f] border border-[#1e293b]/60 group"
                    >
                        {/* Glow / gradient background effect */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-700" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-zlendo-teal/5 blur-[100px] pointer-events-none group-hover:bg-zlendo-teal/10 transition-colors duration-700" />
                        
                        {/* Soft blue outline glow on hover */}
                        <div className="absolute inset-0 border-2 border-blue-500/0 rounded-3xl group-hover:border-blue-400/20 transition-all duration-500 pointer-events-none" />

                        <div className="p-10 md:p-12 relative z-10 h-full flex flex-col">
                            <h3 className="text-3xl font-black text-white leading-tight mb-4 tracking-tight">
                                The Intelligence Engine for <br className="hidden md:block" />Modern Design Teams
                            </h3>
                            <p className="text-slate-400 font-medium leading-relaxed mb-12 max-w-sm">
                                Eliminate bottlenecks by unifying rendering, cost analysis, and client delivery into one AI-powered motion.
                            </p>

                            <div className="mt-auto flex items-end justify-between relative pt-8">
                                {/* Bottom Left Icons Grid */}
                                <div className="grid grid-cols-2 gap-3 w-40 h-40 shrink-0 z-10">
                                    {[
                                        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=200", // Data Intelligence
                                        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200", // Cloud Dashboard
                                        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=200", // Team Collaboration
                                        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=200"  // Design Excellence
                                    ].map((img, i) => (
                                        <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-2 overflow-hidden flex items-center justify-center hover:scale-105 transition-transform">
                                            <img src={img} className="w-full h-full object-cover mix-blend-screen opacity-80" alt="intelligence" />
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Right Isometric Room Image */}
                                <div className="absolute -right-8 -bottom-4 w-[110%] md:w-[130%] max-w-[450px]">
                                    <div className="relative">
                                        {/* Colored border stroke outlining the 3D room block */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-400/30 to-zlendo-teal/30 z-20 pointer-events-none" style={{ clipPath: 'polygon(10% 25%, 90% 15%, 85% 85%, 20% 95%)'}} />
                                        <img 
                                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" 
                                            alt="Enterprise Render" 
                                            className="w-full object-contain"
                                            style={{
                                                clipPath: 'polygon(10% 25%, 90% 15%, 85% 85%, 20% 95%)',
                                                transform: 'perspective(1000px) rotateY(-15deg)',
                                                maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)' // Soft fade edge
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT CARD */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative rounded-3xl overflow-hidden bg-[#0a0a0f] border border-[#1e293b]/60 group"
                    >
                        {/* Glow / gradient background effect */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] pointer-events-none group-hover:bg-orange-500/20 transition-colors duration-700" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FCD884]/5 blur-[100px] pointer-events-none group-hover:bg-[#FCD884]/10 transition-colors duration-700" />
                        
                        {/* Soft yellow/orange outline glow on hover */}
                        <div className="absolute inset-0 border-2 border-orange-500/0 rounded-3xl group-hover:border-orange-400/20 transition-all duration-500 pointer-events-none" />

                        <div className="p-10 md:p-12 relative z-10 h-full flex flex-col">
                            <h3 className="text-3xl font-black text-white leading-tight mb-4 tracking-tight">
                                From Concept to 3D <br className="hidden md:block" />Model in One Click
                            </h3>
                            <p className="text-slate-400 font-medium leading-relaxed mb-12 max-w-sm">
                                Upload a 2D floor plan and watch it come to life in 3D
                            </p>

                            <div className="mt-auto flex items-end justify-between relative pt-8">
                                {/* Bottom Left Icons/Text */}
                                <div className="flex gap-4 items-end z-10 mb-4 opacity-80">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-16 h-16 border border-white/20 p-2 rounded relative">
                                            {/* Minimal wireframe floor plan representation */}
                                            <div className="w-full h-full border border-white/40 flex flex-wrap">
                                                <div className="w-1/2 h-1/2 border-r border-b border-white/40" />
                                                <div className="w-1/2 h-1/2 border-b border-white/40" />
                                                <div className="w-1/2 h-1/2 border-r border-white/40" />
                                            </div>
                                        </div>
                                        <span className="text-[10px] text-white/60 tracking-wider">2D floor plan</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-20 h-16 opacity-60">
                                            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=200" alt="structure" className="w-full h-full object-cover mix-blend-screen grayscale" />
                                        </div>
                                        <span className="text-[10px] text-white/60 tracking-wider text-center">Structure</span>
                                    </div>
                                </div>

                                {/* Bottom Right Isometric Room Image */}
                                <div className="absolute -right-8 -bottom-4 w-[110%] md:w-[130%] max-w-[450px]">
                                    <div className="relative">
                                        {/* Colored border stroke outlining the 3D room block */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-400/30 to-[#FCD884]/30 z-20 pointer-events-none" style={{ clipPath: 'polygon(15% 20%, 85% 15%, 80% 85%, 25% 90%)'}} />
                                        <img 
                                            src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=800" 
                                            alt="Constructed 3D model" 
                                            className="w-full object-contain"
                                            style={{
                                                clipPath: 'polygon(15% 20%, 85% 15%, 80% 85%, 25% 90%)',
                                                transform: 'perspective(1000px) rotateY(-15deg)',
                                                maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)' // Soft fade edge
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    
                </div>
            </div>
        </section>
    );
}
