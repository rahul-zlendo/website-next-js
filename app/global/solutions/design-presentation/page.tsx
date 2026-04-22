'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Video, Share2, SplitSquareHorizontal, MonitorPlay } from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';

export default function DesignPresentationPage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState(0);

    // Auto loop the tabs for interactive feel
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % 4);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const challenges = [
        {
            navLabel: "Space flow is hard to show",
            title: "Guide with recorded camera path",
            desc: "Create interactive 3D design proposals for clients to experience your designs immersively.",
            icon: Video,
            img: "/assets/design-presentation/space-flow.webp"
        },
        {
            navLabel: "Too many back-and-forths",
            title: "Share one always-updated 3D link",
            desc: "Always sees the latest version — no files, no resend.",
            icon: Share2,
            img: "/assets/design-presentation/share-link.webp"
        },
        {
            navLabel: "Lose hours jumping software",
            title: "Model, stage & render in one workflow",
            desc: "Stop jumping between software — refine and present in the same workspace.",
            icon: SplitSquareHorizontal,
            img: "/assets/design-presentation/workspace.webp"
        },
        {
            navLabel: "Clients can't visualize",
            title: "Present in real time — on a 2nd screen",
            desc: "Show the space live with instant updates — understanding happens immediately.",
            icon: MonitorPlay,
            img: "/assets/design-presentation/live-presentation.webp"
        }
    ];

    return (
        <div className="min-h-screen bg-white text-[#222222] font-nunito selection:bg-[#FCD884]/40 selection:text-[#111]">
            <main>
                {/* 1. HERO SECTION */}
                <section className="relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden bg-white">
                    <div className="container-custom px-4 md:px-8 relative z-20">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            
                            {/* Left Content */}
                            <div className="max-w-xl space-y-6 lg:pr-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="inline-block px-3 py-1 bg-[#FCD884] rounded-md"
                                >
                                    <span className="text-sm font-bold text-[#5c4405] uppercase tracking-wide">For designers</span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1, duration: 0.5 }}
                                    className="text-[44px] md:text-[56px] lg:text-[64px] tracking-tight font-black leading-[1.1] text-[#111111]"
                                >
                                    Present your design vision perfectly
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="text-lg md:text-xl text-[#555555] font-medium leading-relaxed max-w-md pb-4"
                                >
                                    Transform your design ideas into clear 3D visuals that move projects forward.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    <a
                                        href={SIGNUP_URL}
                                        className="inline-flex items-center justify-center px-12 py-4 bg-[#111111] text-white rounded-[2rem] font-bold text-lg hover:bg-[#333333] hover:scale-[1.02] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
                                    >
                                        Try Free
                                    </a>
                                </motion.div>
                            </div>

                            {/* Right Image Composition */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative lg:h-[600px] w-full mt-12 lg:mt-0"
                            >
                                {/* Floating geometric decorations behind the image */}
                                <div className="absolute top-10 left-10 w-4 h-4 bg-[#ff8855] rounded-full mix-blend-multiply opacity-80 animate-pulse" />
                                <div className="absolute top-32 left-0 w-8 h-8 bg-[#ff8855] rounded-full mix-blend-multiply opacity-90" />
                                <div className="absolute -top-6 left-1/2 w-6 h-6 bg-[#FCD884] rounded-full mix-blend-multiply opacity-90" />
                                
                                <div className="absolute bottom-16 right-4 w-12 h-12 bg-[#faebd4] opacity-80 rounded-lg skew-x-[-10deg]" />
                                <div className="absolute top-40 right-0 w-16 h-16 bg-[#faebd4] opacity-90 rounded-lg skew-y-[10deg]" />
                                <div className="absolute top-20 right-16 w-14 h-14 bg-[#faebd4] opacity-60 rounded-lg" />

                                {/* Main Image wrapper */}
                                <div className="absolute inset-y-12 inset-x-8 lg:inset-x-12 bg-white rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.08)] overflow-hidden border border-black/[0.04] z-10 hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-shadow duration-500">
                                    <img
                                        src="/assets/design-presentation/hero-dashboard.webp"
                                        className="w-full h-full object-cover transition-transform duration-[15s] hover:scale-105"
                                        alt="Design Presentation Dashboard"
                                    />
                                    {/* Subtly colorizing the image to match the warm beige/orange vibe */}
                                    <div className="absolute inset-0 bg-[#FF8855]/5 mix-blend-overlay pointer-events-none" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 2. LOGO SLIDER (Social Proof) */}
                <section className="py-8 bg-white border-b border-black/[0.03]">
                    <div className="container-custom px-4 overflow-hidden relative">
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
                        
                        <div className="flex items-center gap-16 md:gap-24 opacity-40 grayscale min-w-max animate-[scroll_40s_linear_infinite]">
                            {/* Duplicating array to ensure smooth infinite scroll effect visually */}
                            {[...Array(2)].map((_, j) => (
                                <React.Fragment key={j}>
                                    <h4 className="text-2xl font-black italic">HermanMiller</h4>
                                    <h4 className="text-2xl font-black uppercase tracking-widest">Ashley</h4>
                                    <h4 className="text-2xl font-black italic">Steelcase</h4>
                                    <h4 className="text-2xl font-black">Ethan Allen</h4>
                                    <h4 className="text-2xl font-black uppercase tracking-widest">Williams-Sonoma</h4>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. INTERACTIVE TABS SECTION (Dark Mode Contrast) */}
                <section className="py-24 bg-[#111111] text-white">
                    <div className="container-custom px-4 md:px-8">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-black mb-6">Solve design presentation challenges</h2>
                            <p className="text-[#999] text-lg font-medium">Discover how professional tools eliminate friction from your workflow.</p>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                            {/* Tab Navigation (Left) */}
                            <div className="lg:col-span-4 space-y-4">
                                {challenges.map((item, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveTab(i)}
                                        className={`w-full text-left p-6 rounded-2xl transition-all duration-300 flex items-center gap-4 group ${
                                            activeTab === i 
                                            ? 'bg-white/10 shadow-[inset_4px_0_0_#FCD884]' 
                                            : 'hover:bg-white/5 opacity-60 hover:opacity-100'
                                        }`}
                                    >
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                                            activeTab === i ? 'bg-[#FCD884] text-[#715000]' : 'bg-white/5 text-white'
                                        }`}>
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <h3 className={`font-bold text-lg transition-colors ${activeTab === i ? 'text-white' : 'text-[#999]'}`}>
                                            {item.navLabel}
                                        </h3>
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content (Right) */}
                            <div className="lg:col-span-8 relative">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
                                    >
                                        {/* Golden glow matching active tab highlight */}
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FCD884]/10 blur-[100px] pointer-events-none" />

                                        <div className="flex flex-col md:flex-row gap-8 items-center">
                                            <div className="flex-1 space-y-6">
                                                <div className="inline-flex items-center gap-2 text-[#FCD884] font-bold text-sm tracking-wide uppercase">
                                                    {(() => {
                                                        const ActiveIcon = challenges[activeTab].icon;
                                                        return <ActiveIcon className="w-4 h-4" />;
                                                    })()} Solution
                                                </div>
                                                <h3 className="text-3xl lg:text-4xl font-black leading-tight">
                                                    {challenges[activeTab].title}
                                                </h3>
                                                <p className="text-[#999] text-lg leading-relaxed">
                                                    {challenges[activeTab].desc}
                                                </p>
                                                <div className="pt-4">
                                                    <a href={SIGNUP_URL} className="inline-flex items-center text-white font-bold hover:text-[#FCD884] transition-colors gap-2 group">
                                                        Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            <div className="flex-1 w-full relative">
                                                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden glassmorphism border border-white/10 shadow-2xl">
                                                    <img 
                                                        src={challenges[activeTab].img} 
                                                        className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
                                                        alt="Feature spotlight" 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. FEATURE GRID */}
                <section className="py-32 bg-[#FAFAFC]">
                    <div className="container-custom px-4 md:px-8">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-black mb-6 text-[#111]">Unlock professional workflow</h2>
                            <p className="text-[#666] text-lg font-medium max-w-2xl mx-auto">Experience seamless tools tailored for designers and architects looking to deliver perfection.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                            {[
                                { title: "Real-time lighting preview", desc: "See lighting and material changes in real-time." },
                                { title: "Interactive 3D viewing", desc: "Share one link — clients can walk through the space, understand your vision, and respond faster." },
                                { title: "Templates & presets", desc: "Save camera angles, styles, and palettes for a polished look every time." },
                                { title: "Web & mobile access", desc: "View and share your 3D designs seamlessly on desktop, tablet, or mobile — no app needed." }
                            ].map((f, i) => (
                                <div key={i} className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.03)] border border-black/[0.02] hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-300">
                                    <div className="w-14 h-14 rounded-2xl bg-[#FFF6E0] flex items-center justify-center text-[#E5A500] mb-8">
                                        <SplitSquareHorizontal className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-black mb-4 text-[#111]">{f.title}</h3>
                                    <p className="text-[#666] font-medium leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. GRADIENT CTA BLOCK (The Orange-to-Yellow Wow Factor) */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container-custom px-4 md:px-8">
                        <div className="relative rounded-[3rem] bg-gradient-to-br from-[#FF7A00] to-[#FFB800] shadow-[0_30px_60px_rgba(255,122,0,0.3)]">
                            {/* Background texture mix */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png')] opacity-20 mix-blend-overlay rounded-[3rem]"></div>
                            
                            <div className="grid lg:grid-cols-2 items-center p-12 lg:p-20 relative z-10 gap-12">
                                <div className="space-y-8 text-white max-w-lg relative z-20">
                                    <div className="inline-block px-4 py-2 bg-white rounded-full">
                                        <span className="text-sm font-bold text-[#FF7A00] uppercase tracking-wider">Get Started</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white drop-shadow-sm">
                                        Ready to Elevate Your Presentations?
                                    </h2>
                                    <p className="text-xl text-white/90 font-medium">
                                        Join professional designers using Zlendo to create impressive design presentations.
                                    </p>
                                    <div className="pt-4">
                                        <a href={SIGNUP_URL} className="inline-flex items-center px-10 py-5 bg-[#111111] text-white rounded-[2rem] font-bold text-lg hover:bg-black transition-colors hover:-translate-y-1 shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
                                            Try Free Now
                                        </a>
                                    </div>
                                </div>

                                {/* Floating Render Display over the gradient */}
                                <div className="relative lg:absolute lg:-right-10 lg:w-[600px] lg:h-[120%] lg:-top-[10%] drop-shadow-2xl z-10 mt-10 lg:mt-0 opacity-90 hover:opacity-100 transition-opacity">
                                    <img 
                                        src="/assets/design-presentation/final-render.webp" 
                                        className="w-full h-full object-cover rounded-[2rem] shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-700" 
                                        alt="Design Plan Render" 
                                        loading="lazy"
                                    />
                                    {/* Stats Badge floating on the image */}
                                    <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-black/5 animate-[bounce_4s_infinite]">
                                        <div className="text-4xl font-black text-[#FF7A00] mb-1">90%</div>
                                        <div className="text-xs font-bold text-[#666] uppercase tracking-wider">Approval Rate</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. FAQs */}
                <section className="py-32 bg-white">
                    <div className="container-custom px-6 md:px-8 max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-[#111]">Questions & Answers</h2>
                        </div>
                        <div className="space-y-2">
                            {[
                                {
                                    q: "How do clients view the presentation?",
                                    a: "Just share a Zlendo link — it opens in any browser. Everyone sees the latest version instantly. No downloads required."
                                },
                                {
                                    q: "Do my clients need special software?",
                                    a: "No. Clients just need to click your shared link to view designs in any device's browser, including computers, tablets and phones. VR headset viewing is also supported."
                                },
                                {
                                    q: "Can I use my own models and textures?",
                                    a: "Yes — you can upload your own 3D models or textures to keep your presentation authentic."
                                },
                                {
                                    q: "Does this replace traditional rendering video tools?",
                                    a: "Yes. Zlendo lets you generate 360° walkthroughs and short presentation videos interactively so anyone can understand the space easily without technical tools."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="border-b border-[#E5E5E5] last:border-0 group">
                                    <button
                                        onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                        className="w-full py-8 flex items-center justify-between text-left bg-transparent"
                                    >
                                        <span className="text-xl font-bold text-[#111] group-hover:text-[#FF7A00] transition-colors">{faq.q}</span>
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${activeFaq === i ? 'bg-[#FF7A00] text-white' : 'bg-[#FAFAFC] text-[#999] group-hover:bg-[#FF7A00]/10 group-hover:text-[#FF7A00]'}`}>
                                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {activeFaq === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="pb-8 text-[#666] text-lg font-medium leading-relaxed max-w-2xl">
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
