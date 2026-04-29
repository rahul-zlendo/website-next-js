'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
    Wand2, Play, CheckCircle2, XCircle, ArrowRight, TrendingUp,
    Building2, HardHat, PenTool, Quote, Zap, ArrowDown, Upload, MonitorPlay, Box
} from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';

// --- Sub-Components ---

const AiTransformation = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (clientX: number) => {
        if (!containerRef.current || !isDragging) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        setSliderPosition((x / rect.width) * 100);
    };

    return (
        <section className="py-24 bg-white relative">
            <div className="container-custom px-4 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-[#111] mb-6 tracking-tight">Turn Floor Plans into Experiences.</h2>
                    <p className="text-lg text-[#666] font-medium max-w-2xl mx-auto">Drag to see instantaneous AI 2D-to-3D transformation in action.</p>
                </div>

                <div
                    ref={containerRef}
                    className="relative w-full aspect-[3/2] rounded-[2.5rem] overflow-hidden bg-slate-100 cursor-ew-resize select-none shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-black/5"
                    onMouseDown={() => setIsDragging(true)}
                    onMouseUp={() => setIsDragging(false)}
                    onMouseLeave={() => setIsDragging(false)}
                    onMouseMove={(e) => handleMove(e.clientX)}
                    onTouchStart={() => setIsDragging(true)}
                    onTouchEnd={() => setIsDragging(false)}
                    onTouchMove={(e) => handleMove(e.touches[0].clientX)}
                >
                    <div className="absolute inset-0">
                        <img src="/assets/global/luxury-living-room.png" className="w-full h-full object-cover pointer-events-none" alt="3D Render" />
                    </div>
                    <div className="absolute inset-0 border-r-4 border-white/90" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
                        <img src="/assets/global/luxury-blueprint.png" className="w-full h-full object-cover pointer-events-none" alt="2D Plan" />
                    </div>
                    <div className="absolute top-0 bottom-0 w-1 flex items-center justify-center -ml-0.5 pointer-events-none" style={{ left: `${sliderPosition}%` }}>
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl border border-black/10">
                            <ArrowRight className="w-5 h-5 text-[#111]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ImmersiveFeatures = () => {
    const features = [
        {
            title: "Instantly Walk Inside.",
            desc: "Don't send flat PDFs. Send live 3D browser links instantly.",
            img: "/assets/Home-Page/3d-export-toolkit.png",
            icon: Play
        },
        {
            title: "Photorealism in Seconds.",
            desc: "Cloud-based 4K rendering that runs on any laptop.",
            img: "/assets/global/office-lobby.png",
            icon: Zap
        },
        {
            title: "AI Design Assistant.",
            desc: "Type 'Modern Scandinavian' and watch the entire room restyle.",
            img: "/assets/Home-Page/ai-room-inspirtion.png",
            icon: Wand2
        }
    ];

    return (
        <section className="py-24 bg-[#FAFAFC] overflow-hidden">
            <div className="container-custom px-4 space-y-32">
                {features.map((feat, i) => (
                    <div key={i} className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ margin: "-100px", once: true }}
                            transition={{ duration: 0.6 }}
                            className={`relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video group ${i % 2 !== 0 ? 'order-1 lg:order-2' : 'order-2 lg:order-1'}`}
                        >
                            <img src={feat.img} className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" alt={feat.title} />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40">
                                    <feat.icon className={`w-10 h-10 text-white ${feat.icon === Play ? 'fill-white ml-2' : ''}`} />
                                </div>
                            </div>
                        </motion.div>
                        <div className={`space-y-6 ${i % 2 !== 0 ? 'order-2 lg:order-1' : 'order-1 lg:order-2'}`}>
                            <h2 className="text-3xl md:text-5xl font-black text-[#111] leading-tight tracking-tight">{feat.title}</h2>
                            <p className="text-xl text-[#666] font-medium leading-relaxed">{feat.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const AnimatedMetrics = () => {
    // Simple mock counter animation using Framer Motion
    const Counter = ({ value, label }: { value: string, label: string }) => (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-white/10 last:border-0"
        >
            <div className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 tracking-tighter mb-4 pr-2 pb-1">{value}</div>
            <div className="text-base text-slate-400 font-bold uppercase tracking-widest text-center">{label}</div>
        </motion.div>
    );

    return (
        <section className="py-24 bg-[#111] border-y border-white/5">
            <div className="container-custom px-4">
                <div className="grid md:grid-cols-3 bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden backdrop-blur-sm">
                    <Counter value="3x" label="More Projects Closed" />
                    <Counter value="60s" label="Average Render Time" />
                    <Counter value="82%" label="Fewer Revision Cycles" />
                </div>
            </div>
        </section>
    );
};

const VisualWorkflowComparison = () => {
    return (
        <section className="py-32 bg-white">
            <div className="container-custom px-4 max-w-6xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-black text-[#111] mb-6">The tools haven't kept up with the work.</h2>
                    <p className="text-lg text-[#666] font-medium max-w-2xl mx-auto">Stop paying the fragmentation tax. Consolidate your entire pipeline.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 relative">
                    {/* The Old Workflow */}
                    <div className="bg-[#FAFAFC] rounded-[3rem] p-12 border border-black/5 opacity-60 hover:opacity-100 transition-opacity">
                        <div className="text-xl font-bold text-[#111] mb-8 flex items-center justify-between">
                            <span>The Traditional Workflow</span>
                            <XCircle className="text-red-400 w-6 h-6" />
                        </div>
                        <div className="space-y-4">
                            {[
                                "Draw in AutoCAD",
                                "Export to 3ds Max / SketchUp",
                                "Wait for V-Ray to render",
                                "Edit in Photoshop",
                                "Create separate Excel budget"
                            ].map((step, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="w-full bg-white p-6 rounded-2xl border border-black/5 text-[#111] font-bold text-center shadow-sm">
                                        {step}
                                    </div>
                                    {i < 4 && <ArrowDown className="w-5 h-5 text-gray-300 my-4" />}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* The Zlendo Workflow */}
                    <div className="bg-gradient-to-b from-zlendo-teal/10 to-transparent rounded-[3rem] p-12 border border-zlendo-teal/20 relative shadow-[0_20px_60px_rgba(0,191,154,0.1)]">
                        <div className="text-xl font-black text-zlendo-teal mb-8 flex items-center justify-between">
                            <span>The Zlendo Reality Flow</span>
                            <CheckCircle2 className="text-zlendo-teal w-8 h-8" />
                        </div>
                        <div className="h-full flex flex-col justify-center gap-6">
                            <motion.div whileHover={{ scale: 1.05 }} className="w-full bg-white p-6 rounded-2xl border border-zlendo-teal/20 text-[#111] font-black text-center shadow-lg text-lg">
                                Upload 2D Floor Plan
                            </motion.div>
                            <ArrowDown className="w-8 h-8 text-zlendo-teal mx-auto" />
                            <motion.div whileHover={{ scale: 1.05 }} className="w-full bg-[#111] p-8 rounded-3xl text-white text-center shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,191,154,0.3)_0%,transparent_70%)]" />
                                <div className="relative z-10 space-y-3">
                                    <h3 className="text-2xl md:text-3xl font-black">All-in-One Engine</h3>
                                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm font-bold text-slate-300">
                                        <span>3D Generation</span>
                                        <span>•</span>
                                        <span>Live Rendering</span>
                                        <span>•</span>
                                        <span>Cost Estimating</span>
                                    </div>
                                </div>
                            </motion.div>
                            <ArrowDown className="w-8 h-8 text-zlendo-teal mx-auto" />
                            <motion.div whileHover={{ scale: 1.05 }} className="w-full bg-zlendo-teal p-6 rounded-2xl text-white font-black text-center shadow-xl text-lg tracking-wide uppercase">
                                Present to Client
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const DarkProductFlow = () => {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-zlendo-teal/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-custom px-4 text-center mb-20 relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">One seamless motion.</h2>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-4 relative z-10">
                {[
                    { icon: Upload, title: "1. Upload", desc: "Drag & drop floor plan" },
                    { icon: Box, title: "2. Generate 3D", desc: "AI builds walls & doors" },
                    { icon: Zap, title: "3. Auto-Render", desc: "Studio lighting applied" },
                    { icon: MonitorPlay, title: "4. Walkthrough", desc: "Send presentation link" }
                ].map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                        className="bg-white/5 border border-white/10 rounded-[2rem] p-8 text-center hover:bg-white/10 transition-colors cursor-default"
                    >
                        <step.icon className="w-12 h-12 text-zlendo-teal mx-auto mb-6" />
                        <h3 className="text-2xl font-black text-white mb-2">{step.title}</h3>
                        <p className="text-slate-400 font-medium">{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const AnimatedComparisonTable = () => {
    const rows = [
        { feature: 'Plan to 3D model', before: '2-4 days', after: 'Under 2 min' },
        { feature: 'Photorealistic render', before: '4-8 hours', after: '60 seconds' },
        { feature: 'Client walkthrough', before: 'Static PDFs', after: 'Interactive Browser Link' },
        { feature: 'Project capacity', before: 'Capped by prep time', after: '3x throughput' }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container-custom px-4 max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-[#111]">The Competitive Advantage</h2>
                </div>

                <div className="bg-[#FAFAFC] rounded-[3rem] p-8 md:p-12 border border-black/5 shadow-[0_20px_40px_rgba(0,0,0,0.03)]">
                    {/* Table Header */}
                    <div className="hidden md:flex items-center justify-between pb-8 border-b border-black/10 mb-4 px-4">
                        <div className="w-1/3 text-[13px] font-black uppercase tracking-[0.3em] text-[#111]">Capability</div>
                        <div className="w-1/3 text-[13px] font-black uppercase tracking-[0.3em] text-[#111]">Competitor</div>
                        <div className="w-1/3 text-[13px] font-black uppercase tracking-[0.3em] text-zlendo-teal">Zlendo Realty</div>
                    </div>

                    {rows.map((row, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 border-b border-black/5 last:border-0 gap-4 md:gap-0"
                        >
                            <div className="w-full md:w-1/3 text-xl font-black text-[#111]">{row.feature}</div>
                            <div className="w-full md:w-1/3 flex items-center gap-3 text-[#999] font-bold text-lg">
                                <XCircle className="w-6 h-6 shrink-0 opacity-50" /> {row.before}
                            </div>
                            <div className="w-full md:w-1/3 flex items-center gap-3 text-[#00a685] font-black text-xl bg-zlendo-teal/10 px-4 py-2 rounded-xl">
                                <CheckCircle2 className="w-6 h-6 shrink-0" /> {row.after}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TabbedUseCases = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        {
            name: "Architects",
            img: "/assets/2d_hero.png",
            benefits: ["Convert DWG to 3D instantly", "Accurate sun/shadow simulation", "Client-ready presentations"]
        },
        {
            name: "Interior Designers",
            img: "/assets/Home-Page/ai-room-inspirtion.png",
            benefits: ["Real-time material swapping", "10k+ Shoppable catalog items", "Instantly render mood variations"]
        },
        {
            name: "Builders & Devs",
            img: "/assets/global/villa-night.png",
            benefits: ["Showcase units before breaking ground", "Live cost-estimation tracking", "Reduce client disputes significantly"]
        }
    ];

    return (
        <section className="py-24 bg-[#FAFAFC] border-y border-black/5">
            <div className="container-custom px-4 max-w-6xl mx-auto">
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {tabs.map((tab, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(i)}
                            className={`px-8 py-4 rounded-full font-black text-lg transition-all ${activeTab === i ? 'bg-[#111] text-white shadow-xl scale-105' : 'bg-white text-[#666] border border-black/5 hover:bg-black/5'}`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border border-black/10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0"
                            >
                                <img src={tabs[activeTab].img} className="w-full h-full object-cover" alt={tabs[activeTab].name} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="order-1 lg:order-2 space-y-6">
                        <h3 className="text-3xl md:text-4xl font-black text-[#111] leading-tight">Built specifically for <br /><span className="text-zlendo-teal">{tabs[activeTab].name}</span></h3>
                        <div className="space-y-4">
                            {tabs[activeTab].benefits.map((benefit, i) => (
                                <motion.div
                                    key={`${activeTab}-${i}`}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 text-lg font-bold text-[#555]"
                                >
                                    <div className="w-10 h-10 rounded-full bg-zlendo-teal/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-zlendo-teal" />
                                    </div>
                                    {benefit}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const VisualTestimonials = () => {
    return (
        <section className="py-32 bg-white">
            <div className="container-custom px-4 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-[#111] text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                        <Quote className="absolute top-8 right-8 w-16 h-16 text-white/5 -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-400 mb-6">"One Tool That Turned Our Dream Home into Reality"</div>
                            <p className="text-lg text-slate-300 font-medium leading-relaxed mb-10">"The biggest advantage with Zlendo Realty is that I was able to combine multiple floor plan ideas and visualize them with realistic rendering. This made it much easier for my family to understand and agree on the final design."</p>
                            <div className="mt-auto flex items-center gap-4">
                                <img src="/assets/global/rahul.webp" alt="Rahul R." className="w-16 h-16 rounded-full object-cover border-2 border-white/20 shadow-lg" />
                                <div>
                                    <div className="font-black text-lg">Rahul R.</div>
                                    <div className="text-slate-400 font-bold text-sm uppercase tracking-wider">Product Manager, Computer & Network Security</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#FAFAFC] text-[#111] p-10 rounded-[2.5rem] border border-black/5 shadow-xl group">
                        <Quote className="absolute top-8 right-8 w-16 h-16 text-black/5 -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="text-3xl md:text-4xl font-black text-[#111] mb-6">"Saved Weeks of Confusion During My House Planning"</div>
                            <p className="text-lg text-[#666] font-medium leading-relaxed mb-10">"Zlendo helped me try multiple floor plans quickly and visualize everything in 3D. The walkthrough made it easy to explain to my parents and finalize one design without arguments. The cost estimation also gave me confidence."</p>
                            <div className="mt-auto flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center border-2 border-black/10 font-black text-slate-600">MB</div>
                                <div>
                                    <div className="font-black text-lg">Madhu B.</div>
                                    <div className="text-[#666] font-bold text-sm uppercase tracking-wider">Design, Information Technology and Services</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const HighContrastCTA = () => {
    return (
        <section className="py-24 bg-[#050505] text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/assets/global/luxury-living-room.png')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

            <div className="container-custom px-4 text-center relative z-10 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 drop-shadow-2xl">
                    Close your next client in one meeting.
                </h2>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
                    <a href={SIGNUP_URL} className="w-full sm:w-auto px-10 py-5 bg-zlendo-teal text-white font-black text-xl rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_40px_rgba(0,191,154,0.3)] hover:scale-105">
                        Start your free trial
                    </a>
                    <a href="/business#demo-form" className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 font-black text-xl rounded-full hover:bg-white/20 transition-all duration-300">
                        Book a demo
                    </a>
                </div>
            </div>
        </section>
    );
};


// --- Main Component Export ---

export default function GlobalRedesignBlocks() {
    return (
        <div className="relative z-20 overflow-hidden bg-white">
            <AiTransformation />
            <ImmersiveFeatures />
            <AnimatedMetrics />
            <AnimatedComparisonTable />
            <DarkProductFlow />
            <TabbedUseCases />
            <VisualTestimonials />
            <HighContrastCTA />
        </div>
    );
}
