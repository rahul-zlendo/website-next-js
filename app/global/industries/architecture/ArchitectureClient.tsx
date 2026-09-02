'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    LayoutDashboard,
    Component,
    Image as ImageIcon,
    Video,
    Box,
    Building2,
    Users2,
    Workflow
} from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };
const fadeRight = { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

export default function ArchitectureClient() {
    return (
        <div className="bg-white font-nunito overflow-hidden selection:bg-teal-500/20 selection:text-teal-600">
            {/* HERO SECTION - Architectural Grid Theme */}
            <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 bg-slate-900 overflow-hidden rounded-b-[32px]">
                {/* Blueprint / Grid overlay */}
                <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:40px_40px] mix-blend-overlay" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-900 to-transparent z-10" />

                <div className="container-custom px-4 relative z-20 mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="text-center lg:text-left">
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-2xl border border-teal-500/30 bg-teal-500/10 mb-6 backdrop-blur-md">
                                <Box className="w-4 h-4 text-teal-400" />
                                <span className="text-sm font-black tracking-[0.15em] text-teal-400 uppercase">AI-Powered Architectural Visualization</span>
                            </motion.div>

                            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="text-4xl md:text-6xl lg:text-[72px] font-black text-white leading-[1.05] tracking-tight mb-6">
                                Faster Design. <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">Smarter Visualization.</span>
                            </motion.h1>

                            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                                Transform architectural drawings and concepts into realistic 3D visual experiences that help clients understand your vision before it is built.
                            </motion.p>

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
                                <Link href="https://app.zlendorealty.com/signup" className="w-full sm:w-auto px-8 py-3.5 bg-teal-600 text-white rounded-2xl font-black text-lg hover:bg-teal-500 transition-colors flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(20,184,166,0.2)]">
                                    Explore AI for Architecture <ArrowRight className="w-5 h-5 transition-transform" />
                                </Link>
                                <Link href="/business#demo-form" className="w-full sm:w-auto px-8 py-3.5 bg-white/5 text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-colors border border-white/10 backdrop-blur-sm flex items-center justify-center gap-3">
                                    Request a Demo
                                </Link>
                            </motion.div>
                        </div>
                        <motion.div initial={{ opacity: 0, x: 20, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="rounded-3xl overflow-hidden shadow-2xl border border-white/5 relative group w-full h-[350px] lg:h-[450px]">
                            <Image src="/assets/global/luxury-blueprint.webp" alt="Zlendo Architecture Platform" fill priority className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PLATFORM SUMMARY */}
            <section className="py-8 bg-teal-50/50">
                <div className="container-custom px-4 max-w-5xl mx-auto text-center">
                    <motion.p {...fadeUp} className="text-lg md:text-[20px] leading-relaxed text-slate-800 font-medium">
                        <strong className="font-black">Zlendo Realty: AI-Powered Design & Visualization.</strong><br />
                        Create smarter designs and bring architectural ideas to life. Design and customize floor plans, transform 2D concepts into 3D visualizations, explore interior and exterior styles, generate high-quality photorealistic renders, and showcase projects through immersive virtual walkthroughs. Whether you're designing a home, apartment, commercial space, or large-scale development, Zlendo Realty helps you visualize, present, and refine your ideas with greater speed and clarity.
                    </motion.p>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="py-12 lg:py-24 bg-white relative">
                <div className="container-custom px-4 max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div {...fadeRight} className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-6">
                                Turn Architectural Ideas Into <span className="text-teal-600">Experiences</span>
                            </h2>
                            <div className="w-16 h-1.5 bg-teal-600 rounded-full mb-8" />
                            <p className="text-[20px] text-slate-700 font-medium leading-relaxed">
                                Architectural drawings communicate structure. Visualization communicates possibility.
                            </p>
                            <div className="pl-6 border-l-4 border-teal-200 rounded-l-sm mt-8">
                                <p className="text-base text-slate-600 font-medium leading-relaxed mb-4">
                                    Clients want to understand how a building will look, how spaces will connect, how materials will appear, and what the finished project will feel like.
                                </p>
                                <p className="text-base text-slate-600 font-medium leading-relaxed mb-4">
                                    <strong className="text-slate-900">Zlendo Realty helps architecture teams move from drawings to visual experiences faster.</strong>
                                </p>
                                <p className="text-base text-slate-600 font-medium leading-relaxed">
                                    Instead of relying exclusively on complex visualization workflows, teams can use AI-powered tools to explore concepts, communicate designs, and present projects with greater clarity.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div {...fadeUp} className="relative h-[400px] lg:h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-slate-100 group">
                            <Image src="/assets/global/floor-plan-consultation.webp" fill alt="Architecture Team" className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PRODUCT FEATURES & BUSINESS ROI */}
            <section className="py-12 lg:py-20 bg-slate-50 relative overflow-hidden rounded-[32px] mx-4 md:mx-8 mb-6 border border-slate-100 shadow-sm">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white skew-x-[-15deg] transform origin-top-left -z-10" />

                <div className="container-custom px-4 max-w-7xl mx-auto z-10 relative">
                    <motion.div {...fadeUp} className="mb-10">
                        <span className="text-teal-600 font-black tracking-widest uppercase text-xs block mb-2">Product Features & Business ROI</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900">Tools for the Modern Architect</h2>
                    </motion.div>

                    <div className="flex flex-wrap justify-center items-stretch gap-6">
                        {/* FEATURE 1 */}
                        <motion.div {...fadeUp} transition={{ delay: 0 }} whileHover={{ y: -8, scale: 1.02 }} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white group p-6 md:p-8 border border-slate-200 hover:border-teal-300 transition-all duration-300 shadow-sm hover:shadow-2xl flex flex-col rounded-[24px]">
                            <div className="w-12 h-12 bg-slate-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6 shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                <LayoutDashboard className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-3">AI Floor Planner</h3>
                            <p className="text-slate-600 font-medium mb-4 text-sm">Create and refine floor plans in 2D and 3D.</p>
                            <div className="space-y-3 mb-6 flex-grow">
                                <strong className="text-xs tracking-wider uppercase text-slate-800">Helps architects:</strong>
                                <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                                    <li className="flex gap-2 items-start"><span className="text-teal-500 font-black">/</span> Explore layouts</li>
                                    <li className="flex gap-2 items-start"><span className="text-teal-500 font-black">/</span> Communicate spatial relationships</li>
                                    <li className="flex gap-2 items-start"><span className="text-teal-500 font-black">/</span> Present concepts clearly</li>
                                    <li className="flex gap-2 items-start"><span className="text-teal-500 font-black">/</span> Accelerate early-stage visualization</li>
                                </ul>
                            </div>
                            <div className="bg-teal-50 p-4 rounded-xl border border-teal-100 mb-6">
                                <p className="text-xs font-bold text-slate-800"><span className="text-teal-600">ROI:</span> Spend less time preparing repetitive visualization assets and more time on design decisions.</p>
                            </div>
                            <Link href="/products/floor-planner" className="inline-flex items-center gap-2 text-teal-600 font-black hover:text-teal-500 transition-colors mt-auto">
                                Explore Floor Planner <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        {/* FEATURE 2 */}
                        <motion.div {...fadeUp} transition={{ delay: 0.1 }} whileHover={{ y: -8, scale: 1.02 }} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white group p-6 md:p-8 border border-slate-200 hover:border-teal-300 transition-all duration-300 shadow-sm hover:shadow-2xl flex flex-col rounded-[24px]">
                            <div className="w-12 h-12 bg-slate-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6 shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                <Component className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-3">2D to 3D Converter</h3>
                            <p className="text-slate-600 font-medium mb-4 text-sm">Transform existing drawings into 3D environments.</p>
                            <div className="space-y-3 mb-6 flex-grow">
                                <strong className="text-xs tracking-wider uppercase text-slate-800">Helps architects:</strong>
                                <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                                    <li className="flex gap-2 items-start"><span className="text-teal-500 font-black">/</span> Reuse existing plans</li>
                                    <li className="flex gap-2 items-start"><span className="text-teal-500 font-black">/</span> Quickly visualize projects</li>
                                    <li className="flex gap-2 items-start"><span className="text-teal-500 font-black">/</span> Create client-ready experiences</li>
                                    <li className="flex gap-2 items-start"><span className="text-teal-500 font-black">/</span> Explore spaces from multiple perspectives</li>
                                </ul>
                            </div>
                            <div className="bg-teal-50 p-4 rounded-xl border border-teal-100 mb-6">
                                <p className="text-xs font-bold text-slate-800"><span className="text-teal-600">ROI:</span> Repurpose existing drawings faster and reduce time spent recreating plans for 3D visualization.</p>
                            </div>
                            <Link href="/products/2d-to-3d" className="inline-flex items-center gap-2 text-teal-600 font-black hover:text-teal-500 transition-colors mt-auto">
                                Explore 2D to 3D <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        {/* FEATURE 3 */}
                        <motion.div {...fadeUp} transition={{ delay: 0.2 }} whileHover={{ y: -8, scale: 1.02 }} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white group p-6 md:p-8 border border-slate-200 hover:border-teal-300 transition-all duration-300 shadow-sm hover:shadow-2xl flex flex-col rounded-[24px]">
                            <div className="w-12 h-12 bg-slate-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6 shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                <Building2 className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-3">Interiors & Exteriors</h3>
                            <p className="text-slate-600 font-medium mb-4 text-sm">Visualize architectural elements from interior spaces to facades and outdoor environments.</p>
                            <div className="space-y-3 mb-6 flex-grow">
                                <strong className="text-xs tracking-wider uppercase text-slate-800">Helps architects:</strong>
                                <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                                    <li className="flex gap-2 items-start"><span className="text-teal-500 font-black">/</span> Explore material choices</li>
                                    <li className="flex gap-2 items-start"><span className="text-teal-500 font-black">/</span> Present exterior concepts</li>
                                    <li className="flex gap-2 items-start"><span className="text-teal-500 font-black">/</span> Visualize landscaping</li>
                                    <li className="flex gap-2 items-start"><span className="text-teal-500 font-black">/</span> Communicate the complete architectural vision</li>
                                </ul>
                            </div>
                            <div className="bg-teal-50 p-4 rounded-xl border border-teal-100 mb-6">
                                <p className="text-xs font-bold text-slate-800"><span className="text-teal-600">ROI:</span> Explore more design options faster and reduce the time and cost of creating multiple visualization concepts.</p>
                            </div>
                            <Link href="/products/interiors-exteriors" className="inline-flex items-center gap-2 text-teal-600 font-black hover:text-teal-500 transition-colors mt-auto">
                                Explore Interiors &amp; Exteriors <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        {/* FEATURE 4 */}
                        <motion.div {...fadeUp} transition={{ delay: 0 }} whileHover={{ y: -8, scale: 1.02 }} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white group p-6 md:p-8 border border-slate-200 hover:border-teal-300 transition-all duration-300 shadow-sm hover:shadow-2xl flex flex-col rounded-[24px]">
                            <div className="w-12 h-12 bg-slate-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6 shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                <ImageIcon className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-3">Realistic Renders</h3>
                            <p className="text-slate-600 font-medium mb-8 flex-grow text-sm">Generate realistic visual representations of architectural concepts.</p>
                            <div className="bg-teal-50 p-4 rounded-xl border border-teal-100 mt-auto mb-6">
                                <p className="text-xs font-bold text-slate-800"><span className="text-teal-600">ROI:</span> Produce more design iterations and presentation visuals without repeating traditional rendering workflows for every variation.</p>
                            </div>
                            <Link href="/products/realistic-renders" className="inline-flex items-center gap-2 text-teal-600 font-black hover:text-teal-500 transition-colors">
                                Explore Realistic Renders <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        {/* FEATURE 5 */}
                        <motion.div {...fadeUp} transition={{ delay: 0.1 }} whileHover={{ y: -8, scale: 1.02 }} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white group p-6 md:p-8 border border-slate-200 hover:border-teal-300 transition-all duration-300 shadow-sm hover:shadow-2xl flex flex-col rounded-[24px]">
                            <div className="w-12 h-12 bg-slate-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6 shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                <Video className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-3">Virtual Walkthrough</h3>
                            <p className="text-slate-600 font-medium mb-8 max-w-lg flex-grow text-sm">Allow clients to experience architectural spaces interactively.</p>
                            <div className="bg-teal-50 p-4 rounded-xl border border-teal-100 mt-auto mb-6">
                                <p className="text-xs font-bold text-slate-800"><span className="text-teal-600">ROI:</span> Improve client understanding and reduce communication gaps during design reviews.</p>
                            </div>
                            <Link href="/products/virtual-walkthrough" className="inline-flex items-center gap-2 text-teal-600 font-black hover:text-teal-500 transition-colors">
                                Explore Virtual Walkthrough <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* PARTNERSHIP */}
            <section className="py-12 lg:py-20 bg-slate-900 relative overflow-hidden text-white rounded-[32px] mx-4 md:mx-8 mb-6 border border-slate-800 shadow-xl group">
                <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none">
                    <Image src="/assets/global/interior-design-walkthrough-client.webp" fill alt="Partnership Architecture Background" className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute w-[600px] h-[600px] border border-teal-300 rounded-full -top-[300px] -right-[150px]" />
                    <div className="absolute w-[800px] h-[800px] border border-emerald-300 rounded-full -top-[400px] -right-[200px]" />
                </div>

                <div className="container-custom px-4 max-w-6xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <motion.div {...fadeRight}>
                            <Users2 className="w-10 h-10 text-teal-400 mb-6" />
                            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6">
                                Partner With Zlendo Realty to Modernize Architectural Visualization
                            </h2>
                            <p className="text-lg text-slate-300 font-medium leading-relaxed mb-8">
                                Work with Zlendo Realty to bring AI-powered visualization into your architecture practice, design platform, or enterprise workflow.
                            </p>
                            <Link href="/partners" className="inline-flex items-center gap-3 px-6 py-3 bg-teal-600 text-white rounded-2xl font-black text-sm hover:bg-teal-500 transition-colors shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                                Explore Partnership Opportunities <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        <motion.div {...fadeUp} className="bg-slate-800/50 p-8 md:p-10 rounded-[28px] border border-slate-700 backdrop-blur-md">
                            <h3 className="text-xl font-black mb-6 text-white">Partnership models:</h3>
                            <ul className="space-y-4">
                                {[
                                    'Architecture firms',
                                    'Design studios',
                                    'Technology providers',
                                    'Enterprise design organizations',
                                    'Educational institutions'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-base font-bold text-slate-300">
                                        <div className="w-2 h-2 bg-teal-400 rounded-full shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SERVICE REQUEST */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="container-custom px-4 max-w-6xl mx-auto">
                    <div className="bg-white border border-slate-100 rounded-[32px] overflow-hidden shadow-xl shadow-slate-200/40 flex flex-col lg:flex-row">
                        <motion.div {...fadeUp} className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-[400px]">
                            <Image src="/assets/use-case/modern-architecture-studio.webp" alt="Architecture team collaborating" fill className="object-cover" />
                        </motion.div>

                        <motion.div {...fadeUp} className="w-full lg:w-1/2 p-8 md:p-12 text-left flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-600 font-bold text-xs uppercase tracking-widest mb-6 w-fit">
                                <Workflow className="w-3 h-3" /> Professional Workflow
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6">Keep Your Design Workflow Moving</h2>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-4">
                                Design revisions shouldn't become visualization bottlenecks.
                            </p>
                            <p className="text-base text-slate-500 font-medium leading-relaxed mb-8">
                                Zlendo Realty helps architectural teams move continuously from concept to presentation by reducing repetitive visualization tasks and connecting planning, styling, rendering, and walkthrough workflows.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
                                <Link href="/business#demo-form" className="inline-flex justify-center items-center gap-2 px-6 py-3.5 bg-slate-900 text-white rounded-2xl font-black text-base hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20 w-full sm:w-auto">
                                    Request Solutions <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link href="/contact" className="inline-flex justify-center items-center gap-2 px-6 py-3.5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-black text-base hover:bg-slate-50 transition-colors w-full sm:w-auto">
                                    Hire a professional <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-16 bg-teal-600 text-white text-center rounded-[32px] mx-4 md:mx-8 mb-8 shadow-2xl">
                <div className="container-custom px-4 max-w-4xl mx-auto">
                    <motion.h2 {...fadeUp} className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6">
                        Your Design Deserves to Be Experienced Before It Is Built.
                    </motion.h2>
                    <motion.p {...fadeUp} className="text-xl text-teal-100 font-bold mb-8">
                        Visualize your next architectural concept with Zlendo Realty.
                    </motion.p>
                    <motion.div {...fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="https://app.zlendorealty.com/signup" className="px-8 py-4 bg-white text-teal-600 rounded-2xl font-black text-base hover:bg-teal-50 transition-colors shadow-xl">
                            Start Designing
                        </Link>
                        <Link href="/business#demo-form" className="px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-2xl font-black text-base hover:bg-white/10 transition-colors backdrop-blur-sm">
                            Request a Demo
                        </Link>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
