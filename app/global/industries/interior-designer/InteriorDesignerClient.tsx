'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Sparkles,
    LayoutDashboard,
    PaintBucket,
    Building2,
    ImageIcon,
    MonitorPlay,
    CheckCircle2,
    Briefcase,
    Lightbulb,
    Sofa,
    Monitor,
    Cctv,
    Coffee,
    Scissors,
    ArrowUpFromLine,
    Trees,
    Home,
    Wind,
    DoorOpen,
    Flower2,
    Bath,
    WashingMachine,
    Lamp,
    Box
} from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };
const fadeRight = { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

export default function InteriorDesignerClient() {
    return (
        <div className="bg-white font-nunito overflow-hidden selection:bg-zlendo-teal/20 selection:text-zlendo-teal">
            {/* HERO SECTION */}
            <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 bg-slate-50 overflow-hidden border-b border-slate-200">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zlendo-teal/10 via-transparent to-transparent pointer-events-none" />

                <div className="container-custom px-4 relative z-20 mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="text-center lg:text-left">
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-2xl border border-zlendo-teal/20 bg-zlendo-teal/10 mb-6 backdrop-blur-md">
                                <Sparkles className="w-4 h-4 text-zlendo-teal" />
                                <span className="text-sm font-black tracking-[0.1em] text-zlendo-teal uppercase">AI Interior Visualization</span>
                            </motion.div>

                            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
                                Interior Design Visualization That Brings Concepts to Life
                            </motion.h1>

                            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
                                Create, explore, refine, and present interior concepts faster with AI-powered room styling, visualization, rendering, and walkthroughs.
                            </motion.p>

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
                                <Link href="https://app.zlendorealty.com/signup" className="w-full sm:w-auto px-8 py-4 bg-zlendo-teal text-white rounded-2xl font-black text-lg hover:-translate-y-1 hover:shadow-xl hover:shadow-zlendo-teal/30 transition-all flex items-center justify-center gap-3">
                                    Create an Interior Concept <ArrowRight className="w-5 h-5 transition-transform" />
                                </Link>
                                <Link href="/business#demo-form" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 rounded-2xl font-black text-lg hover:-translate-y-1 hover:shadow-lg transition-all border border-slate-200 flex items-center justify-center gap-3">
                                    Request a Demo
                                </Link>
                            </motion.div>
                        </div>
                        <motion.div initial={{ opacity: 0, x: 20, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="rounded-3xl overflow-hidden shadow-2xl border border-white/5 relative group w-full h-[350px] lg:h-[450px]">
                            <Image src="/assets/global/luxury-living-room.webp" alt="AI Interior Design Concepts" fill priority className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent mix-blend-overlay" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="py-16 lg:py-24 bg-white relative">
                <div className="container-custom px-4 max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div {...fadeRight} className="space-y-6">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] mb-6">
                                Give Clients More Than a <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-500">Mood Board</span>
                            </h2>
                            <div className="w-16 h-1.5 bg-zlendo-teal rounded-full mb-8" />
                            <p className="text-[20px] text-slate-700 font-medium leading-relaxed">
                                Interior design is about helping clients see what is possible.
                            </p>
                            <p className="text-base text-slate-600 font-medium leading-relaxed">
                                But traditional presentations can make it difficult to communicate scale, furniture placement, materials, lighting, and the overall atmosphere of a space.
                            </p>
                            <div className="bg-slate-50 p-6 border-l-4 border-zlendo-teal rounded-r-xl my-6 group hover:bg-slate-100 transition-colors">
                                <p className="text-lg text-slate-800 font-black leading-relaxed">
                                    Zlendo Realty helps interior designers transform ideas into realistic visual experiences.
                                </p>
                            </div>
                            <p className="text-base text-slate-600 font-medium leading-relaxed">
                                Explore multiple concepts, experiment with styles, generate realistic visuals, and let clients experience spaces before implementation.
                            </p>
                        </motion.div>
                        <motion.div {...fadeUp} className="relative h-[400px] lg:h-[500px] w-full rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 group">
                            <Image src="/assets/global/interior-design-consultation.webp" fill alt="Interior Designer consulting with a client" className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PRODUCTS & ROI */}
            <section className="py-16 lg:py-24 bg-slate-900 text-white border-y border-slate-800 relative z-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zlendo-teal via-transparent to-transparent" />
                <div className="container-custom px-4 max-w-7xl mx-auto z-10 relative">
                    <motion.div {...fadeUp} className="mb-16 text-center max-w-3xl mx-auto">
                        <span className="text-zlendo-teal font-black tracking-widest uppercase text-sm block mb-4">Products &amp; ROI</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Elevate Your Design Toolkit</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* FEATURE 1: Smart Room Styler */}
                        <motion.div {...fadeUp} transition={{ delay: 0 }} whileHover={{ y: -8, scale: 1.02 }} className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-zlendo-teal/50 shadow-sm hover:shadow-2xl hover:shadow-zlendo-teal/20 transition-all duration-300 flex flex-col group">
                            <div className="w-14 h-14 bg-slate-700/50 text-zlendo-teal rounded-2xl flex items-center justify-center mb-6 shrink-0 group-hover:bg-zlendo-teal group-hover:text-white transition-colors">
                                <PaintBucket className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-3">Smart Room Styler</h3>
                            <p className="text-slate-400 font-medium mb-6">Create AI-powered room concepts and explore different interior styles.</p>

                            <div className="space-y-3 mb-8 flex-grow">
                                <strong className="text-xs tracking-wider uppercase text-slate-500">Business Benefits:</strong>
                                <ul className="space-y-2 text-slate-300 font-medium text-sm">
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-zlendo-teal shrink-0 mt-0.5" /> Faster concept creation</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-zlendo-teal shrink-0 mt-0.5" /> More design options</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-zlendo-teal shrink-0 mt-0.5" /> Easier client discussions</li>
                                </ul>
                            </div>
                            <div className="bg-zlendo-teal/10 border border-zlendo-teal/20 p-5 rounded-xl mb-6">
                                <p className="text-sm font-bold text-teal-50"><span className="text-zlendo-teal">ROI:</span> Generate more concepts and reduce manual visualization work.</p>
                            </div>
                            <Link href="/products/room-styler" className="inline-flex items-center gap-2 text-zlendo-teal font-black hover:text-teal-400 transition-colors mt-auto">
                                Explore Room Styler <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        {/* FEATURE 2: 2D to 3D Converter */}
                        <motion.div {...fadeUp} transition={{ delay: 0.1 }} whileHover={{ y: -8, scale: 1.02 }} className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-pink-500/50 shadow-sm hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 flex flex-col group">
                            <div className="w-14 h-14 bg-slate-700/50 text-pink-400 rounded-2xl flex items-center justify-center mb-6 shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                                <Box className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-3">2D to 3D Converter</h3>
                            <p className="text-slate-400 font-medium mb-6">Transform existing basic 2D drawings into complete 3D environments.</p>

                            <div className="space-y-3 mb-8 flex-grow">
                                <strong className="text-xs tracking-wider uppercase text-slate-500">Business Benefits:</strong>
                                <ul className="space-y-2 text-slate-300 font-medium text-sm">
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" /> Reuse existing plans</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" /> Quickly visualize projects</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" /> Create client-ready spaces</li>
                                </ul>
                            </div>
                            <div className="bg-pink-500/10 border border-pink-500/20 p-5 rounded-xl mb-6">
                                <p className="text-sm font-bold text-pink-50"><span className="text-pink-400">ROI:</span> Eliminate the need to remodel basic concepts from scratch.</p>
                            </div>
                            <Link href="/products/2d-to-3d" className="inline-flex items-center gap-2 text-pink-400 font-black hover:text-pink-300 transition-colors mt-auto">
                                Explore 2D to 3D <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        {/* FEATURE 3: Realistic Renders */}
                        <motion.div {...fadeUp} transition={{ delay: 0.2 }} whileHover={{ y: -8, scale: 1.02 }} className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-blue-500/50 shadow-sm hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 flex flex-col group">
                            <div className="w-14 h-14 bg-slate-700/50 text-blue-400 rounded-2xl flex items-center justify-center mb-6 shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                <ImageIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-3">Realistic Renders</h3>
                            <p className="text-slate-400 font-medium mb-6">Turn design concepts into presentation-ready visuals.</p>

                            <div className="space-y-3 mb-8 flex-grow">
                                <strong className="text-xs tracking-wider uppercase text-slate-500">Business Benefits:</strong>
                                <ul className="space-y-2 text-slate-300 font-medium text-sm">
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" /> Faster final presentations</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" /> Better material visualization</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" /> Real-time lighting preview</li>
                                </ul>
                            </div>
                            <div className="bg-blue-500/10 border border-blue-500/20 p-5 rounded-xl mb-6">
                                <p className="text-sm font-bold text-blue-50"><span className="text-blue-400">ROI:</span> Produce more design iterations without repeating traditional rendering workflows.</p>
                            </div>
                            <Link href="/products/realistic-renders" className="inline-flex items-center gap-2 text-blue-400 font-black hover:text-blue-300 transition-colors mt-auto">
                                Explore Realistic Renders <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        {/* FEATURE 4: Virtual Walkthrough */}
                        <motion.div {...fadeUp} transition={{ delay: 0 }} whileHover={{ y: -8, scale: 1.02 }} className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-purple-500/50 shadow-sm hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 flex flex-col group">
                            <div className="w-14 h-14 bg-slate-700/50 text-purple-400 rounded-2xl flex items-center justify-center mb-6 shrink-0 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                <MonitorPlay className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-3">Virtual Walkthrough</h3>
                            <p className="text-slate-400 font-medium mb-6">Allow clients to explore designs rather than looking at static images.</p>

                            <div className="space-y-3 mb-8 flex-grow">
                                <strong className="text-xs tracking-wider uppercase text-slate-500">Business Benefits:</strong>
                                <ul className="space-y-2 text-slate-300 font-medium text-sm">
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" /> Engaging client presentations</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" /> Clear spatial understanding</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" /> Reduced communication gaps</li>
                                </ul>
                            </div>
                            <div className="bg-purple-500/10 border border-purple-500/20 p-5 rounded-xl mb-6">
                                <p className="text-sm font-bold text-purple-50"><span className="text-purple-400">ROI:</span> Shorten feedback cycles and help clients make decisions with confidence.</p>
                            </div>
                            <Link href="/products/virtual-walkthrough" className="inline-flex items-center gap-2 text-purple-400 font-black hover:text-purple-300 transition-colors mt-auto">
                                Explore Virtual Walkthrough <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        {/* FEATURE 5: AI Floor Planner */}
                        <motion.div {...fadeUp} transition={{ delay: 0.1 }} whileHover={{ y: -8, scale: 1.02 }} className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-orange-500/50 shadow-sm hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 flex flex-col group">
                            <div className="w-14 h-14 bg-slate-700/50 text-orange-400 rounded-2xl flex items-center justify-center mb-6 shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                <LayoutDashboard className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-3">AI Floor Planner</h3>
                            <p className="text-slate-400 font-medium mb-6">Plan layouts and understand spatial relationships before styling.</p>

                            <div className="space-y-3 mb-8 flex-grow">
                                <strong className="text-xs tracking-wider uppercase text-slate-500">Business Benefits:</strong>
                                <ul className="space-y-2 text-slate-300 font-medium text-sm">
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" /> Create structural clarity</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" /> Organize initial layouts</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" /> Rapid layout prototyping</li>
                                </ul>
                            </div>
                            <div className="bg-orange-500/10 border border-orange-500/20 p-5 rounded-xl mb-6">
                                <p className="text-sm font-bold text-orange-50"><span className="text-orange-400">ROI:</span> Eliminate the need for expensive secondary CAD software for basic layout drafting.</p>
                            </div>
                            <Link href="/products/floor-planner" className="inline-flex items-center gap-2 text-orange-400 font-black hover:text-orange-300 transition-colors mt-auto">
                                Explore Floor Planner <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        {/* FEATURE 6: Interiors & Exteriors */}
                        <motion.div {...fadeUp} transition={{ delay: 0.2 }} whileHover={{ y: -8, scale: 1.02 }} className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-emerald-500/50 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 flex flex-col group">
                            <div className="w-14 h-14 bg-slate-700/50 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                <Building2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-3">Interiors & Exteriors</h3>
                            <p className="text-slate-400 font-medium mb-6">Create cohesive interior and exterior concepts that blend perfectly.</p>

                            <div className="space-y-3 mb-8 flex-grow">
                                <strong className="text-xs tracking-wider uppercase text-slate-500">Business Benefits:</strong>
                                <ul className="space-y-2 text-slate-300 font-medium text-sm">
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> Unify design themes</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> Expand project scope</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> High-impact outdoor setups</li>
                                </ul>
                            </div>
                            <div className="bg-emerald-500/10 border border-emerald-500/20 p-5 rounded-xl mb-6">
                                <p className="text-sm font-bold text-emerald-50"><span className="text-emerald-400">ROI:</span> Capture exterior project upselling directly from within interior design contracts.</p>
                            </div>
                            <Link href="/products/interiors-exteriors" className="inline-flex items-center gap-2 text-emerald-400 font-black hover:text-emerald-300 transition-colors mt-auto">
                                Explore Interiors & Exteriors <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* DESIGN LIBRARY SECTION */}
            <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
                <div className="container-custom px-4 max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
                        <motion.div {...fadeRight} className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1]">
                                Design Faster With an Extensive Interior Design Library
                            </h2>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed">
                                Bring your interior concepts to life with a ready-to-use library of design elements.
                            </p>
                            <p className="text-base text-slate-500 font-medium leading-relaxed">
                                Zlendo Realty's Design Library gives interior designers quick access to a wide range of products and design elements that can be added to projects using an easy drag-and-drop workflow. Select, position, and visualize products faster without creating every element from scratch.
                            </p>
                            <Link href="/products/room-styler" className="inline-flex items-center gap-2 mt-4 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                                Explore the Design Library <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        <motion.div {...fadeUp} className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-zlendo-teal/10 rounded-bl-[100px] -z-10 group-hover:scale-125 transition-transform duration-700" />
                            <h3 className="text-2xl font-black text-slate-900 mb-6">Why Use the Design Library?</h3>
                            <p className="text-slate-600 font-medium mb-8 leading-relaxed">
                                The Design Library helps designers reduce repetitive work, explore more design possibilities, and create concepts faster. Instead of switching between different resources to find individual products, designers can access a wide range of assets within the workflow.
                            </p>
                            <div className="space-y-3">
                                <strong className="text-xs tracking-wider uppercase text-slate-400">Business Benefits:</strong>
                                <ul className="grid sm:grid-cols-2 gap-4 text-slate-700 font-bold text-sm">
                                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-zlendo-teal shrink-0" /> Faster concept creation</li>
                                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-zlendo-teal shrink-0" /> Easy drag-and-drop flow</li>
                                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-zlendo-teal shrink-0" /> More furniture/décor options</li>
                                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-zlendo-teal shrink-0" /> Faster space styling</li>
                                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-zlendo-teal shrink-0" /> Easier client presentations</li>
                                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-zlendo-teal shrink-0" /> Efficient end-to-end workflow</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    {/* CATEGORY GRID */}
                    <div className="text-center mb-10">
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900">Explore Design Elements for Every Space</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {[
                            { name: 'Furniture', icon: Sofa },
                            { name: 'Decor & Lighting', icon: Lamp },
                            { name: 'Kitchens & Appliances', icon: Coffee },
                            { name: 'Bathrooms & Fixtures', icon: Bath },
                            { name: 'Outdoor & Garden', icon: Flower2 },
                            { name: 'Doors', icon: DoorOpen },
                            { name: 'Windows', icon: Wind },
                            { name: 'Roofs', icon: Home },
                            { name: 'Exterior', icon: Trees },
                            { name: 'Stairs & Lift', icon: ArrowUpFromLine },
                            { name: 'Utility Items', icon: Scissors },
                            { name: 'Pantry Area', icon: WashingMachine },
                            { name: 'Security Devices', icon: Cctv },
                            { name: 'Interior', icon: Box },
                            { name: 'Electronics', icon: Monitor }
                        ].map((cat, idx) => (
                            <motion.div key={idx} {...fadeUp} transition={{ delay: idx * 0.05 }} whileHover={{ y: -5, scale: 1.05 }} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center hover:border-zlendo-teal/30 hover:shadow-lg transition-all group cursor-default">
                                <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-zlendo-teal/10 group-hover:text-zlendo-teal transition-colors">
                                    <cat.icon className="w-6 h-6" />
                                </div>
                                <span className="font-bold text-slate-700 text-sm group-hover:text-slate-900 transition-colors">{cat.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PARTNERSHIP & SERVICE REQUEST SPLIT SECTION */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container-custom px-4 max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* PARTNERSHIP */}
                        <motion.div {...fadeUp} className="bg-slate-900 text-white p-8 md:p-12 rounded-[32px] relative overflow-hidden group shadow-2xl">
                            <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none">
                                <Image src="/assets/global/office-lobby.webp" fill alt="Interior Design Partnership" className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                            </div>
                            <div className="relative z-10 flex flex-col h-full">
                                <h3 className="text-3xl md:text-4xl font-black mb-4">Grow Your Interior Design Business With AI</h3>
                                <p className="text-slate-300 font-medium leading-relaxed mb-8">
                                    Partner with Zlendo Realty to bring AI-powered visualization into your design services.
                                </p>

                                <strong className="text-xs tracking-widest uppercase text-slate-500 mb-4 block">Suitable For:</strong>
                                <ul className="space-y-3 mb-10 text-slate-200 font-bold text-lg flex-grow">
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-zlendo-teal" /> Interior design firms</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-zlendo-teal" /> Design consultants</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-zlendo-teal" /> Furniture brands</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-zlendo-teal" /> Hospitality designers</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-zlendo-teal" /> Architecture + interior firms</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-zlendo-teal" /> Design technology companies</li>
                                </ul>

                                <Link href="/partners" className="inline-flex items-center gap-2 px-8 py-4 bg-zlendo-teal text-white rounded-2xl font-black text-base hover:bg-teal-500 transition-colors w-fit">
                                    Become a Zlendo Realty Partner <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* SERVICE REQUEST */}
                        <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="bg-zlendo-teal/10 border border-zlendo-teal/20 p-8 md:p-12 rounded-[32px] flex flex-col justify-center text-center shadow-inner group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                            <div className="w-20 h-20 bg-white shadow-xl shadow-zlendo-teal/20 text-zlendo-teal rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform duration-500">
                                <Briefcase className="w-10 h-10" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Never Let Visualization Slow Down Your Design Business</h3>
                            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-10 max-w-md mx-auto">
                                From the first concept to final presentation, Zlendo Realty helps interior design teams maintain a continuous workflow.
                            </p>

                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-2xl font-black text-lg hover:-translate-y-1 hover:shadow-xl hover:shadow-zlendo-teal/20 transition-all border border-slate-100 w-full sm:w-auto mx-auto">
                                Request Interior Design Support <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA SECTION */}
            <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 to-[#111] text-center text-white border-y border-white/5">
                <div className="container-custom px-4 max-w-4xl mx-auto space-y-8">
                    <motion.h2 {...fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                        Design More Possibilities.<br /> Present With More Confidence.
                    </motion.h2>
                    <motion.p {...fadeUp} className="text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
                        Create your next interior concept with Zlendo Realty.
                    </motion.p>
                    <motion.div {...fadeUp} className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
                        <Link href="https://app.zlendorealty.com/signup" className="px-10 py-5 bg-zlendo-teal text-white rounded-[24px] font-black text-lg hover:scale-105 hover:bg-teal-400 shadow-[0_10px_30px_rgba(45,212,191,0.2)] transition-all">
                            Start Designing
                        </Link>
                        <Link href="/business#demo-form" className="px-10 py-5 bg-white/10 text-white rounded-[24px] font-black text-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10">
                            Book a Demo
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
