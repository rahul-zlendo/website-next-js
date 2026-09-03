'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    ArrowRight, CalendarCheck2, Building2, LayoutDashboard, Component, Sparkles, Building,
    ImageIcon, Headset, CheckCircle2, TrendingUp, Handshake, Users, Briefcase
} from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };
const staggerContainer = { initial: {}, whileInView: { transition: { staggerChildren: 0.1 } }, viewport: { once: true } };

export default function RealEstateClient() {
    return (
        <div className="bg-white font-nunito selection:bg-zlendo-teal/20 selection:text-zlendo-teal overflow-hidden border-t border-slate-100">
            {/* HERO SECTION */}
            <section className="relative pt-10 pb-10 md:pt-14 md:pb-14 overflow-hidden bg-slate-900 border-b border-black/5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zlendo-teal/20 via-transparent to-transparent pointer-events-none" />
                <div className="container-custom px-4 relative z-10 max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="text-center lg:text-left">
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-zlendo-teal/30 bg-zlendo-teal/10 mb-8 backdrop-blur-md">
                                <Building2 className="w-4 h-4 text-teal-400" />
                                <span className="text-xs font-black tracking-widest text-teal-400 uppercase">AI-Powered Property Visualization</span>
                            </motion.div>

                            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
                                Designed for Real Estate.
                            </motion.h1>

                            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
                                Turn floor plans, properties, and concepts into immersive 3D experiences that help buyers understand, engage with, and confidently choose properties.
                            </motion.p>

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Link href="https://app.zlendorealty.com/signup" className="w-full sm:w-auto px-8 py-4 bg-zlendo-teal text-white rounded-2xl font-black text-lg hover:scale-105 hover:bg-teal-400 transition-all shadow-[0_10px_30px_rgba(45,212,191,0.2)] flex items-center justify-center gap-2">
                                    Get Started with Zlendo <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link href="/business#demo-form" className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-all backdrop-blur-sm border border-white/10 flex items-center justify-center gap-2">
                                    <CalendarCheck2 className="w-5 h-5" /> Request a Demo
                                </Link>
                            </motion.div>
                        </div>

                        <motion.div initial={{ opacity: 0, x: 20, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 relative group w-full h-[350px] lg:h-[450px]">
                            <Image src="/assets/global/villa-night.webp" alt="Real Estate Property Visualization" fill priority className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute bottom-6 left-6 text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xs uppercase tracking-widest mb-2">
                                    <Sparkles className="w-3 h-3" /> Photorealistic Rendering
                                </div>
                                <h3 className="text-xl font-black text-white">Luxury Villa Exterior</h3>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="py-16 lg:py-24 bg-slate-50 border-y border-black/5 overflow-hidden">
                <div className="container-custom px-4 max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div {...fadeUp} className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Make Every Property Easier to Visualize</h2>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed">
                                Zlendo Realty helps real estate businesses create AI-powered floor plans, realistic interiors and exteriors, photorealistic renders, and virtual walkthroughs — making property visualization faster, more scalable, and more engaging.
                            </p>
                            <div className="bg-white p-6 rounded-2xl border border-orange-100 shadow-[0_10px_30px_rgba(249,115,22,0.06)] relative overflow-hidden group hover:shadow-[0_15px_40px_rgba(249,115,22,0.12)] transition-shadow">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-400 group-hover:bg-orange-500 transition-colors"></div>
                                <span className="font-bold text-orange-600 text-lg leading-relaxed flex items-start gap-4">
                                    <Sparkles className="w-6 h-6 shrink-0 mt-1" />
                                    From property planning to buyer presentation, visualize every property before your customer steps inside.
                                </span>
                            </div>

                            <div className="p-6 bg-white border border-slate-200 rounded-2xl relative overflow-hidden group/cta shadow-sm">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full -z-10 group-hover/cta:scale-150 transition-transform duration-500" />
                                <h4 className="text-lg font-black text-slate-900 mb-1">Ready to Visualize More Properties?</h4>
                                <p className="text-sm text-slate-600 font-medium mb-4">Explore our plans and choose the right tools for your real estate workflow.</p>
                                <Link href="/plans" className="inline-flex items-center gap-2 text-zlendo-teal font-black hover:text-teal-700 transition-colors">
                                    Subscribe Now <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.5 }} className="relative h-full flex flex-col justify-center">
                            <div className="rounded-[32px] overflow-hidden shadow-2xl relative mb-8 group h-[300px] border border-slate-100">
                                <Image src="/assets/global/interior-design-walkthrough-client.webp" alt="Real Estate Client Walkthrough" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6">
                                    <div className="text-white">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/10 font-bold text-xs uppercase tracking-widest mb-2">
                                            <Headset className="w-3 h-3" /> Immersive Experience
                                        </div>
                                        <h3 className="text-lg font-black">Digital Property Walkthroughs</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-[32px] p-8 md:p-10 text-lg text-slate-700 font-medium leading-relaxed space-y-6 shadow-xl shadow-slate-200/50 relative border border-slate-100 group">
                                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-zlendo-teal to-blue-500 rounded-full opacity-10 blur-3xl pointer-events-none"></div>
                                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-orange-400 to-pink-500 rounded-full opacity-5 blur-3xl pointer-events-none"></div>
                                <p className="relative z-10">
                                    Real estate buyers don't always see what you see. A 2D floor plan may make sense to a professional, but many buyers struggle to understand room dimensions, layouts, furniture placement, finishes, and how a property will actually feel.
                                </p>
                                <p className="relative z-10">
                                    This becomes even more challenging when marketing properties that are under construction or not yet furnished. <strong className="text-slate-900 border-b-2 border-zlendo-teal/30 pb-0.5">Zlendo Realty bridges that visualization gap.</strong>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PRODUCT SOLUTIONS GRID */}
            <section className="py-16 lg:py-24 bg-slate-900 text-white">
                <div className="container-custom px-4 max-w-7xl mx-auto">
                    <motion.div {...fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-emerald-400 font-black tracking-[0.2em] uppercase text-sm mb-4 block">Product Solutions</span>
                        <h2 className="text-4xl md:text-5xl font-black leading-tight">How Zlendo Realty Products Help Your Real Estate Business</h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* 1 */}
                        <motion.div {...fadeUp} className="bg-slate-800 border border-slate-700 rounded-[32px] p-8 md:p-10 hover:border-emerald-500/50 transition-colors group">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-sm mb-6">
                                <LayoutDashboard className="w-4 h-4" /> AI Floor Planner
                            </div>
                            <h3 className="text-3xl font-black mb-4">Create accurate 2D and 3D floor plans.</h3>
                            <div className="space-y-4 mb-8">
                                <div className="font-bold text-slate-400 text-sm uppercase tracking-wider">Business Impact:</div>
                                <ul className="space-y-2 text-slate-300 font-medium">
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Make floor plans easier to understand</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Create presentation-ready layouts</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Reduce manual visualization work</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Support faster property presentations</li>
                                </ul>
                            </div>
                            <div className="bg-emerald-900/30 border border-emerald-800 rounded-2xl p-6 mb-8 text-emerald-200 font-medium">
                                <strong>ROI Opportunity:</strong> Reduce the time your team spends preparing floor-plan presentations and create more visual assets from the same property data.
                            </div>
                            <Link href="/products/floor-planner" className="inline-flex items-center gap-2 text-emerald-400 font-black hover:text-emerald-300 transition-colors">
                                Explore AI Floor Planner <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        {/* 2 */}
                        <motion.div {...fadeUp} className="bg-slate-800 border border-slate-700 rounded-[32px] p-8 md:p-10 hover:border-purple-500/50 transition-colors group">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 font-bold text-sm mb-6">
                                <Component className="w-4 h-4" /> 2D to 3D Converter
                            </div>
                            <h3 className="text-3xl font-black mb-4">Transform existing plans into 3D spaces.</h3>
                            <div className="space-y-4 mb-8">
                                <div className="font-bold text-slate-400 text-sm uppercase tracking-wider">Business Impact:</div>
                                <ul className="space-y-2 text-slate-300 font-medium">
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" /> Reuse existing property plans</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" /> Quickly create 3D representations</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" /> Visualize properties before construction</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" /> Improve buyer presentations</li>
                                </ul>
                            </div>
                            <div className="bg-purple-900/30 border border-purple-800 rounded-2xl p-6 mb-8 text-purple-200 font-medium">
                                <strong>ROI Opportunity:</strong> Convert existing 2D assets into additional marketing and sales assets without rebuilding the property manually.
                            </div>
                            <Link href="/products/2d-to-3d" className="inline-flex items-center gap-2 text-purple-400 font-black hover:text-purple-300 transition-colors">
                                Convert Your Floor Plans <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        {/* 3 */}
                        <motion.div {...fadeUp} className="bg-slate-800 border border-slate-700 rounded-[32px] p-8 md:p-10 hover:border-pink-500/50 transition-colors group">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 font-bold text-sm mb-6">
                                <Sparkles className="w-4 h-4" /> Smart Room Styler
                            </div>
                            <h3 className="text-3xl font-black mb-4">Turn empty rooms into styled interiors.</h3>
                            <div className="space-y-4 mb-8">
                                <div className="font-bold text-slate-400 text-sm uppercase tracking-wider">Business Impact:</div>
                                <ul className="space-y-2 text-slate-300 font-medium">
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0" /> Show furnished possibilities</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0" /> Present different design styles</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0" /> Help buyers imagine living in the property</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0" /> Create multiple design concepts quickly</li>
                                </ul>
                            </div>
                            <div className="bg-pink-900/30 border border-pink-800 rounded-2xl p-6 mb-8 text-pink-200 font-medium">
                                <strong>ROI Opportunity:</strong> Reduce dependence on physical staging and produce multiple visual concepts from the same room.
                            </div>
                            <Link href="/products/room-styler" className="inline-flex items-center gap-2 text-pink-400 font-black hover:text-pink-300 transition-colors">
                                Explore Smart Room Styler <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        {/* 4 */}
                        <motion.div {...fadeUp} className="bg-slate-800 border border-slate-700 rounded-[32px] p-8 md:p-10 hover:border-orange-500/50 transition-colors group">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 font-bold text-sm mb-6">
                                <Building className="w-4 h-4" /> Interiors &amp; Exteriors
                            </div>
                            <h3 className="text-3xl font-black mb-4">Visualize complete property environments.</h3>
                            <div className="space-y-4 mb-8">
                                <div className="font-bold text-slate-400 text-sm uppercase tracking-wider">Business Impact:</div>
                                <ul className="space-y-2 text-slate-300 font-medium">
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" /> Present the complete property experience</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" /> Showcase architectural possibilities</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" /> Visualize different materials and finishes</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" /> Improve development presentations</li>
                                </ul>
                            </div>
                            <div className="bg-orange-900/30 border border-orange-800 rounded-2xl p-6 mb-8 text-orange-200 font-medium">
                                <strong>ROI Opportunity:</strong> Help buyers visualize the complete property faster, reduce presentation costs, and showcase multiple material, finish, and design options from a single space.
                            </div>
                            <Link href="/products/interiors-exteriors" className="inline-flex items-center gap-2 text-orange-400 font-black hover:text-orange-300 transition-colors mt-auto">
                                Explore Interiors &amp; Exteriors <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        {/* 5 */}
                        <motion.div {...fadeUp} className="bg-slate-800 border border-slate-700 rounded-[32px] p-8 md:p-10 hover:border-blue-500/50 transition-colors group">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 font-bold text-sm mb-6">
                                <ImageIcon className="w-4 h-4" /> Realistic Renders
                            </div>
                            <h3 className="text-3xl font-black mb-4">Create photorealistic property visuals.</h3>
                            <div className="space-y-4 mb-8">
                                <div className="font-bold text-slate-400 text-sm uppercase tracking-wider">Business Impact:</div>
                                <ul className="space-y-2 text-slate-300 font-medium">
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Create marketing-ready imagery</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Improve property presentations</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Visualize unbuilt properties</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Support campaigns before completion</li>
                                </ul>
                            </div>
                            <div className="bg-blue-900/30 border border-blue-800 rounded-2xl p-6 mb-8 text-blue-200 font-medium">
                                <strong>ROI Opportunity:</strong> Create more marketing visuals without the time and cost associated with traditional rendering workflows.
                            </div>
                            <Link href="/products/realistic-renders" className="inline-flex items-center gap-2 text-blue-400 font-black hover:text-blue-300 transition-colors mt-auto">
                                Explore Realistic Renders <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        {/* 6 */}
                        <motion.div {...fadeUp} className="bg-slate-800 border border-slate-700 rounded-[32px] p-8 md:p-10 hover:border-cyan-500/50 transition-colors group">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-bold text-sm mb-6">
                                <Headset className="w-4 h-4" /> Virtual Walkthrough
                            </div>
                            <h3 className="text-3xl font-black mb-4">Explore properties virtually anywhere.</h3>
                            <div className="space-y-4 mb-8">
                                <div className="font-bold text-slate-400 text-sm uppercase tracking-wider">Business Impact:</div>
                                <ul className="space-y-2 text-slate-300 font-medium">
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" /> Support remote buyers</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" /> Create immersive property presentations</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" /> Showcase unbuilt properties</li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" /> Improve the digital property experience</li>
                                </ul>
                            </div>
                            <div className="bg-cyan-900/30 border border-cyan-800 rounded-2xl p-6 mb-8 text-cyan-200 font-medium">
                                <strong>ROI Opportunity:</strong> Extend property presentations beyond physical site visits and allow prospects to explore properties from anywhere.
                            </div>
                            <Link href="/products/virtual-walkthrough" className="inline-flex items-center gap-2 text-cyan-400 font-black hover:text-cyan-300 transition-colors mt-auto">
                                Explore Virtual Walkthrough <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE ZLENDO REALTY */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container-custom px-4 max-w-6xl mx-auto">
                    <motion.div {...fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">Visualize More Properties. Engage More Buyers.</h2>
                        <p className="text-lg text-slate-600 font-medium leading-relaxed">
                            Zlendo Realty helps real estate companies move from static property information to immersive visual experiences.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Increase sales conversion', desc: 'Turn compelling property visuals into more qualified leads and faster sales.', icon: TrendingUp },
                            { title: 'Faster visualization', desc: 'Create property visuals without lengthy manual workflows.', icon: TrendingUp },
                            { title: 'Better buyer understanding', desc: 'Help prospects understand spaces before visiting.', icon: Users },
                            { title: 'Scalable marketing', desc: 'Create visual assets across multiple properties and projects.', icon: LayoutDashboard },
                            { title: 'Earlier property marketing', desc: 'Visualize properties before construction or furnishing is complete.', icon: CalendarCheck2 },
                            { title: 'More engaging presentations', desc: 'Give sales teams better tools to communicate value.', icon: Briefcase }
                        ].map((item, idx) => (
                            <motion.div key={idx} {...fadeUp} transition={{ delay: idx * 0.05 }} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-zlendo-teal/30 hover:bg-white hover:shadow-lg transition-all text-left">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-zlendo-teal">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-black text-slate-800 mb-2">{item.title}</h3>
                                <p className="text-slate-600 font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PARTNERSHIP SECTION */}
            <section className="py-16 lg:py-24 bg-teal-900 text-white border-y border-teal-950">
                <div className="container-custom px-4 max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeUp} className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-800 text-teal-300 font-bold text-sm">
                                <Handshake className="w-4 h-4" /> Partnership
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black leading-tight">Build the Future of Real Estate Visualization</h2>
                            <p className="text-xl text-teal-100 font-medium leading-relaxed">
                                Zlendo Realty works with real estate companies, developers, brokerages, property platforms, and technology providers to create scalable visualization solutions.
                            </p>
                            <p className="text-teal-200 font-medium leading-relaxed">
                                Whether you need visualization for a single project or want to integrate AI-powered property experiences into your existing platform, we can work with your business model.
                            </p>
                            <div className="pt-6">
                                <Link href="/partners" className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 rounded-2xl font-black text-lg hover:bg-teal-400 transition-colors shadow-lg shadow-teal-950">
                                    Become a Partner <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div {...fadeUp} className="bg-teal-950/50 border border-teal-800 rounded-[32px] p-8 md:p-12 relative overflow-hidden group shadow-2xl">
                            <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none">
                                <Image src="/assets/use-case/modern-architecture-studio.webp" fill alt="Partnership Background" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <h3 className="text-2xl font-black mb-6 text-teal-100 relative z-10">Partnership Opportunities</h3>
                            <ul className="space-y-4 text-teal-300 font-medium text-lg relative z-10">
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-teal-500" /> Real estate companies</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-teal-500" /> Property developers</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-teal-500" /> Real estate platforms</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-teal-500" /> Brokerages</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-teal-500" /> Property portals</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-teal-500" /> Technology providers</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-teal-500" /> Enterprise organizations</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SERVICE REQUEST SECTION */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container-custom px-4 max-w-5xl mx-auto text-center">
                    <motion.div {...fadeUp} className="mb-12">
                        <span className="text-orange-500 font-black tracking-widest uppercase text-sm block mb-4">Service Request</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">Keep Your Visualization Workflow Uninterrupted</h2>
                        <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto mb-6">
                            Your customers don't wait for visualization — and neither should your business. Zlendo Realty helps businesses maintain a continuous workflow from floor plan creation to final presentation.
                        </p>
                        <p className="text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
                            Our platform is designed to help your teams visualize, revise, present, and communicate properties without unnecessary interruptions.
                        </p>
                    </motion.div>

                    <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 text-left">
                        {[
                            'Faster visualization workflows',
                            'Consistent design output',
                            'Scalable property production',
                            'Support for multiple projects',
                            'Reduced dependency on fragmented tools',
                            'Easier collaboration between teams'
                        ].map((txt, i) => (
                            <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] font-black text-slate-800 text-base sm:text-lg hover:-translate-y-1 hover:border-zlendo-teal/30 hover:shadow-[0_15px_40px_rgba(45,212,191,0.1)] transition-all cursor-default">
                                <CheckCircle2 className="w-6 h-6 text-zlendo-teal shrink-0" /> {txt}
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...fadeUp}>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-slate-800 transition-all shadow-lg hover:-translate-y-1">
                            Talk to an Expert <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* FINAL CTA SECTION */}
            <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 to-[#111] text-center text-white border-y border-white/5">
                <div className="container-custom px-4 max-w-4xl mx-auto space-y-8">
                    <motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-black tracking-tight leading-tight">Make Your Properties More Visual. Make Your Sales Conversations More Powerful.</motion.h2>
                    <motion.p {...fadeUp} className="text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
                        Give your customers a clearer way to understand, experience, and imagine their next property.
                    </motion.p>
                    <motion.div {...fadeUp} className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
                        <Link href="https://app.zlendorealty.com/signup" className="px-10 py-5 bg-zlendo-teal text-white rounded-[24px] font-black text-lg hover:scale-105 hover:bg-teal-400 shadow-[0_10px_30px_rgba(45,212,191,0.2)] transition-all">
                            Start Visualizing Properties
                        </Link>
                        <Link href="/business#demo-form" className="px-10 py-5 bg-white/10 text-white rounded-[24px] font-black text-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10">
                            Request a Demo
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
