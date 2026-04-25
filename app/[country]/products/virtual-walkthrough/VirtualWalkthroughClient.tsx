'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    Video,
    Eye,
    Smartphone,
    Share2,
    CheckCircle2,
    Monitor,
    Layout,
    ArrowRight,
    Sparkles,
    Box,
    Globe,
    Zap,
    Building2,
    Home,
    ChevronDown,
    Camera,
    PlayCircle,
    X
} from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';

interface VirtualWalkthroughClientProps {
    cms: any;
    resolvedFaqs: any[];
    country: string;
}

export default function VirtualWalkthroughClient({ cms, resolvedFaqs, country }: VirtualWalkthroughClientProps) {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <div className="bg-white text-[#222222] font-nunito selection:bg-zlendo-teal/20 selection:text-zlendo-teal">
            <main>
                {/* 1. HERO SECTION */}
                <section className="relative min-h-[95vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#FAFAFC]">
                    {/* Background glows */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-zlendo-teal/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

                    <div className="container-custom px-4 relative z-20">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="max-w-2xl space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-black/5 bg-white shadow-sm"
                                >
                                    <div className="w-2 h-2 rounded-full bg-zlendo-teal shadow-[0_0_10px_rgba(0,191,154,0.3)] animate-pulse" />
                                    <span className="text-xs font-bold tracking-widest text-zlendo-teal uppercase">360° Walkthroughs</span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1, duration: 0.6 }}
                                    className="text-[28px] md:text-[42px] lg:text-[56px] tracking-tight font-black leading-[1.1] md:leading-[1.05] text-[#111]"
                                >
                                    Professional 360° <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-500">
                                        Virtual Walkthroughs
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                    className="text-base md:text-lg text-[#666] font-bold opacity-80 leading-relaxed"
                                >
                                    Immerse your clients in a realistic and interactive tour of your projects, allowing them to explore every detail from the comfort of their own space.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                    className="flex flex-wrap gap-6 pt-4"
                                >
                                    <a
                                        href={SIGNUP_URL}
                                        className="px-10 py-5 bg-zlendo-teal text-white rounded-xl font-bold text-xl shadow-[0_10px_30px_rgba(0,191,154,0.2)] hover:scale-[1.02] hover:bg-[#00a685] transition-all flex items-center justify-center gap-3"
                                    >
                                        Try now <ArrowRight className="w-5 h-5" />
                                    </a>
                                    <button
                                        onClick={() => setIsVideoOpen(true)}
                                        className="px-8 py-5 bg-white border border-black/5 text-[#111] rounded-xl font-bold text-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3 group shadow-sm"
                                    >
                                        <PlayCircle className="w-6 h-6 text-[#111] group-hover:scale-110 transition-transform" />
                                        Watch Video
                                    </button>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="relative lg:h-[580px] rounded-[2.5rem] overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-black/[0.03]"
                            >
                                <img
                                    src="/assets/virtual-walkthrough/hero-walkthrough.webp"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[15s] group-hover:scale-105"
                                    alt="360 Virtual Walkthrough preview"
                                />

                                <div className="absolute bottom-10 left-10 p-6 bg-white/90 backdrop-blur-xl border border-black/5 rounded-2xl shadow-xl">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="w-10 h-10 rounded-full bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal">
                                            <Globe className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[#111] font-bold text-lg">Interactive 3D Mode</p>
                                            <p className="text-[#666] text-sm font-medium">Drag to explore</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 2. THREE PILLARS */}
                <section className="py-24 relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,191,154,0.02)_0%,transparent_70%)] pointer-events-none" />

                    <div className="container-custom px-4 relative z-10">
                        <div className="grid md:grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-white p-12 rounded-[2.5rem] border border-black/[0.05] hover:border-zlendo-teal/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <Camera className="w-8 h-8 text-zlendo-teal" />
                                </div>
                                <h3 className="text-2xl font-black mb-4 text-[#111]">Intelligent Camera Generation</h3>
                                <p className="text-[#666] font-medium leading-relaxed">
                                    Our system employs an advanced and intelligent algorithm to autonomously generate cameras for the 360º Walkthroughs.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="bg-white p-12 rounded-[2.5rem] border border-black/[0.05] hover:border-blue-400/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <Globe className="w-8 h-8 text-blue-500" />
                                </div>
                                <h3 className="text-2xl font-black mb-4 text-[#111]">Seamless Virtual Tours</h3>
                                <p className="text-[#666] font-medium leading-relaxed">
                                    The interactive experience provides a genuine feel for the space, fostering a stronger emotional connection to your designs.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white p-12 rounded-[2.5rem] border border-black/[0.05] hover:border-purple-400/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <Sparkles className="w-8 h-8 text-purple-500" />
                                </div>
                                <h3 className="text-2xl font-black mb-4 text-[#111]">Realistic Visualization</h3>
                                <p className="text-[#666] font-medium leading-relaxed">
                                    Clients can view realistic lighting, textures, and spatial arrangements, enabling them to make well-informed decisions.
                                </p>
                            </motion.div>
                        </div>

                        <div className="text-center mt-16">
                            <a href={SIGNUP_URL} className="inline-flex items-center gap-2 text-zlendo-teal font-black hover:text-[#00a685] transition-colors group">
                                Try now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* 3. SCROLLING FEATURES LIST */}
                <section className="py-20 md:py-32 relative bg-[#FAFAFC] border-t border-black/5">
                    <div className="container-custom px-4">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                            <div className="lg:sticky lg:top-32 space-y-6 md:space-y-8">
                                <h2 className="text-3xl md:text-[48px] font-black leading-[1.1] text-[#111] tracking-tighter">
                                    Experience the future of <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-[#111]">interior design.</span>
                                </h2>
                                <p className="text-lg md:text-xl text-[#666] font-medium leading-relaxed">
                                    Empower yourself to showcase your designs with unparalleled realism and interactivity. Reveal the true potential of your concepts.
                                </p>
                            </div>

                            <div className="space-y-8 md:space-y-12">
                                {[
                                    {
                                        step: "1",
                                        title: "Detailed Design Assessment",
                                        desc: "Analyze designs from every angle with 360 Walkthroughs, identifying potential areas for improvement. Evaluate spatial flow, furniture placement, and overall aesthetics to refine your work to perfection."
                                    },
                                    {
                                        step: "2",
                                        title: "Enhance Client Communication",
                                        desc: "Eliminate misunderstandings and bridge the gap between imagination and reality. Clearly communicate design intent with 360 Walkthroughs, leaving clients impressed and confident in your abilities."
                                    },
                                    {
                                        step: "3",
                                        title: "Time and Cost Efficiency",
                                        desc: "Minimize the need for physical prototypes or lengthy presentations. 360 Walkthroughs reduce unnecessary revisions, saving valuable time and resources. Focus more on your creativity and less on cumbersome processes."
                                    },
                                    {
                                        step: "4",
                                        title: "Intelligent Camera Arrangement",
                                        desc: "Optimize the viewer's experience with automatically arranged cameras in 360 Walkthroughs. Our intelligent algorithm ensures that the cameras are strategically placed to showcase your designs effectively."
                                    },
                                    {
                                        step: "5",
                                        title: "Futuristic Design Showcase",
                                        desc: "Experience the future of interior design visualization with 360 Walkthroughs. Elevate your professional journey, impress clients, and revolutionize the way you bring ideas to life."
                                    }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6 }}
                                        className="bg-white border border-black/[0.04] shadow-sm p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all"
                                    >
                                        <div className="absolute top-0 right-0 p-4 sm:p-8 text-7xl sm:text-8xl font-black text-black/[0.03] group-hover:text-zlendo-teal/10 transition-colors pointer-events-none">
                                            {item.step}
                                        </div>
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6 relative z-10 text-[#111] pr-10">{item.title}</h3>
                                        <p className="text-base sm:text-lg text-[#666] font-medium leading-relaxed relative z-10">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. COMPARISON TABLE SECTION */}
                <section className="py-24 bg-white">
                    <div className="container-custom px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-[#111] mb-6">Stop wasting time. Start creating.</h2>
                            <p className="text-[#666] text-lg font-medium">Why top designers are ditching legacy tools for Zlendo Realty AI workflow.</p>
                        </div>

                        <div className="max-w-6xl mx-auto overflow-hidden rounded-[2.5rem] border border-black/[0.05] shadow-[0_20px_60px_rgba(0,0,0,0.03)] bg-white">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#FAFAFC] border-b border-black/[0.05]">
                                            <th className="p-8 text-xl font-black text-[#111] w-1/4">Step</th>
                                            <th className="p-8 text-lg font-bold text-[#999] opacity-60 w-[37.5%]">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-gray-300" />
                                                    The Traditional Way
                                                </div>
                                            </th>
                                            <th className="p-8 text-lg font-black text-zlendo-teal w-[37.5%] bg-zlendo-teal/[0.02]">
                                                <div className="flex items-center gap-2">
                                                    <Zap className="w-5 h-5 fill-zlendo-teal" />
                                                    The Zlendo Realty Way
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-black/[0.05]">
                                        {[
                                            {
                                                step: "Setup",
                                                old: "Install heavy software on expensive workstations",
                                                new: "Open a browser on any device. No installs needed."
                                            },
                                            {
                                                step: "Realism",
                                                old: "Hours tweaking textures, lighting, and materials",
                                                new: "Automatic photorealism handled by AI"
                                            },
                                            {
                                                step: "Render time",
                                                old: "30 min to several hours per image",
                                                new: "Under 10 seconds per image"
                                            },
                                            {
                                                step: "Getting unstuck",
                                                old: "Post on forums, hope for a reply one day",
                                                new: "Instant live chat and expert email support"
                                            },
                                            {
                                                step: "Edits",
                                                old: "Change the model, re-render the whole scene",
                                                new: "Type \"change siding to bleached oak\""
                                            },
                                            {
                                                step: "Post-processing",
                                                old: "Hours spent in Photoshop for touch-ups",
                                                new: "Professional enhancement in one click"
                                            },
                                            {
                                                step: "Animation",
                                                old: "Hours setting up complex camera paths",
                                                new: "Select camera presets, ready in 90s"
                                            }
                                        ].map((row, i) => (
                                            <tr key={i} className="group hover:bg-[#FAFAFC]/50 transition-colors">
                                                <td className="p-8 font-black text-[#111] text-lg">{row.step}</td>
                                                <td className="p-8 text-[#999] font-medium">
                                                    <div className="flex items-start gap-3">
                                                        <span className="mt-1.5 flex-shrink-0 text-gray-300 select-none">✕</span>
                                                        {row.old}
                                                    </div>
                                                </td>
                                                <td className="p-8 text-[#111] font-bold bg-zlendo-teal/[0.01]">
                                                    <div className="flex items-start gap-3">
                                                        <CheckCircle2 className="w-6 h-6 text-zlendo-teal flex-shrink-0 mt-0.5" />
                                                        {row.new}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. FINAL CTA Section */}
                <section className="py-32 relative overflow-hidden bg-white border-t border-black/5">
                    <div className="container-custom px-4 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-b from-zlendo-teal/10 to-transparent border border-zlendo-teal/20 max-w-5xl mx-auto rounded-[3rem] p-16 md:p-24 relative overflow-hidden"
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 relative z-10 text-[#111] leading-tight">
                                Start creating stunning <br className="hidden md:block" />visual representations of your ideas today!
                            </h2>
                            <div className="flex justify-center relative z-10 pt-4">
                                <a
                                    href={SIGNUP_URL}
                                    className="px-12 py-5 bg-[#111] text-white rounded-xl font-bold text-xl hover:bg-[#333] transition-all flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1"
                                >
                                    Try now
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 5. FAQ INFO BLOCKS */}
                <section className="py-24 bg-[#FAFAFC] border-t border-black/5">
                    <div className="container-custom px-6 max-w-4xl mx-auto">
                        <div className="space-y-12 text-[#666] font-medium leading-relaxed">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <h3 className="text-2xl font-black text-[#111]">What is a virtual tour?</h3>
                                <p>A virtual tour is an interactive digital experience that simulates visiting a physical location. It allows users to explore a space remotely, providing a sense of the environment and its layout. This technology is widely used in various fields, including real estate, interior design, tourism, and museums, to offer a realistic view of a location or design without the need for physical presence.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <h3 className="text-2xl font-black text-[#111]">How to create a virtual tour?</h3>
                                <p>To create a virtual tour, especially with our PRO toolset, you would first design your interior concepts using the platform's tools. Once the design is complete, you can use the 360 Walkthrough feature to generate an immersive tour. This feature allows clients to navigate through the virtual space, experiencing the design from every angle and getting a realistic feel of the proposed layout and aesthetics.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <h3 className="text-2xl font-black text-[#111]">How do 360 Walkthroughs work?</h3>
                                <p>360 Walkthroughs work by using high-resolution 360-degree renders and advanced technology to create an immersive virtual environment. Users can navigate through this environment, exploring every corner of the designed space. The system uses an intelligent algorithm to generate camera placements automatically, making the creation of these walkthroughs seamless and efficient. This allows designers and their clients to assess and experience the design in a comprehensive and realistic manner, facilitating better communication and decision-making.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Video Modal */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsVideoOpen(false)}
                        className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl bg-black rounded-3xl overflow-hidden shadow-2xl aspect-video"
                        >
                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <iframe
                                className="w-full h-full"
                                src={cms?.heroVideoLink || "https://www.youtube.com/embed/ttZcXOgmrNY?autoplay=1"}
                                title="Product Demo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
