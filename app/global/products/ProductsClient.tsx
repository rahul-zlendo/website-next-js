'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    PenTool, Cuboid, PaintBucket, Eye, Zap, Image as ImageIcon,
    ArrowRight, Box, Play, LayoutDashboard, MonitorPlay, Users, Building, MousePointerClick, CalendarCheck2
} from 'lucide-react';
import FAQ from '@/components/global/sections/FAQ';

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };
const staggerContainer = { initial: {}, whileInView: { transition: { staggerChildren: 0.1 } }, viewport: { once: true } };

export default function ProductsClient() {
    return (
        <div className="bg-white font-nunito selection:bg-zlendo-teal/20 selection:text-zlendo-teal overflow-hidden border-t border-slate-100">
            {/* HERO SECTION */}
            <section className="relative pt-15 pb-15 md:pt-24 md:pb-24 overflow-hidden bg-slate-50 border-b border-black/5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zlendo-teal/5 via-transparent to-transparent pointer-events-none" />
                <div className="container-custom px-4 relative z-10 text-center max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-zlendo-teal/20 bg-zlendo-teal/5 mb-8">
                        <SparklesIcon className="w-4 h-4 text-zlendo-teal" />
                        <span className="text-xs font-black tracking-widest text-zlendo-teal uppercase">AI Home Design &amp; Visualization Platform</span>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
                        Design. Visualize.<br /> Experience. Sell.
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto mb-10">
                        Turn ideas, floor plans, and property concepts into immersive 3D experiences with AI-powered design and visualization tools.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="https://app.zlendorealty.com/signup" className="w-full sm:w-auto px-8 py-4 bg-zlendo-teal text-white rounded-2xl font-black text-lg hover:scale-105 hover:bg-teal-600 transition-all shadow-[0_10px_30px_rgba(45,212,191,0.3)] flex items-center justify-center gap-2">
                            Start Designing Free <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all shadow-sm border border-slate-200 flex items-center justify-center gap-2">
                            <CalendarCheck2 className="w-5 h-5" /> Request a Demo
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* PIPELINE / WORKFLOW SECTION */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="container-custom px-4 text-center max-w-6xl mx-auto">
                    <motion.div {...fadeUp} className="max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6 mt-4">One AI Platform. <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-500">Every Stage.</span></h2>
                        <p className="text-lg text-slate-600 font-medium leading-relaxed">
                            Designing a property involves more than drawing a floor plan. You need to understand the space, visualize possibilities, communicate ideas, refine designs, and help clients experience the finished result before construction begins. <strong>Zlendo Realty connects these stages in one AI-powered workflow.</strong>
                        </p>
                    </motion.div>

                    <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Plan', desc: 'Create accurate 2D and 3D floor plans and turn spatial ideas into structured designs.', icon: LayoutDashboard },
                            { title: 'Transform', desc: 'Convert existing 2D floor plans into immersive 3D environments without starting from scratch.', icon: Cuboid },
                            { title: 'Style', desc: 'Experiment with furniture, materials, colors, lighting, and interior design styles using AI.', icon: PaintBucket },
                            { title: 'Visualize', desc: 'Create realistic interiors, exteriors, landscapes, materials, and lighting conditions.', icon: Eye },
                            { title: 'Render', desc: 'Transform designs into photorealistic images in seconds for presentations & marketing.', icon: ImageIcon },
                            { title: 'Experience', desc: 'Let clients explore spaces interactively through immersive 360° virtual walkthroughs.', icon: MonitorPlay }
                        ].map((step, idx) => (
                            <motion.div key={idx} variants={fadeUp} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 text-left relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-bl-full -z-10 group-hover:bg-zlendo-teal/[0.05] transition-colors" />
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 mb-6 group-hover:scale-110 transition-transform text-zlendo-teal">
                                    <step.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-800 mb-3">{step.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div {...fadeUp} className="mt-16 text-lg font-bold text-slate-400">
                        One workflow. From the first line on the floor plan to the final client experience.
                    </motion.div>
                </div>
            </section>

            {/* SUITE SHOWCASE (Alternating Blocks) */}
            <section className="py-16 lg:py-20 bg-[#111] text-white">
                <div className="container-custom px-4 max-w-6xl mx-auto space-y-16 lg:space-y-24">
                    <motion.div {...fadeUp} className="text-center">
                        <span className="text-orange-500 font-black tracking-[0.2em] uppercase text-sm mb-4 block">Product Ecosystem</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Explore the Zlendo Realty AI Design Suite</h2>
                    </motion.div>

                    {/* Block 1 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeUp} className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 font-bold text-sm">
                                <LayoutDashboard className="w-4 h-4" /> AI Floor Planner
                            </div>
                            <h3 className="text-4xl font-black leading-tight">Design &amp; Visualize in 3D</h3>
                            <p className="text-slate-400 font-medium text-lg leading-relaxed">
                                Create accurate floor plans online and move seamlessly between 2D layouts and 3D spaces. Start with a blank canvas or an existing sketch. Use intelligent wall snapping, automatic dimensioning, multi-story planning, and drag-and-drop elements to build your layout.
                            </p>
                            <div className="text-sm border-l-2 border-slate-700 pl-4 py-2 mt-4 text-slate-300 font-medium">
                                <span className="text-white font-bold">Best for:</span> Homeowners, architects, interior designers, builders, and real estate professionals.
                            </div>
                            <Link href="/products/floor-planner" className="inline-flex items-center gap-2 text-orange-400 font-black hover:text-orange-300 hover:gap-3 transition-all pt-4">
                                Explore AI Floor Planner <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                        <motion.div {...fadeUp} className="order-1 lg:order-2 h-72 lg:h-[400px] bg-gradient-to-tr from-orange-500/20 to-zinc-800 rounded-[40px] border border-white/5 relative overflow-hidden group shadow-2xl flex items-center justify-center">
                            <span className="text-white/50 font-black text-2xl tracking-widest uppercase">Layout Intelligence</span>
                        </motion.div>
                    </div>

                    {/* Block 2 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeUp} className="h-72 lg:h-[400px] bg-gradient-to-tl from-purple-500/20 to-zinc-800 rounded-[40px] border border-white/5 relative overflow-hidden group shadow-2xl flex items-center justify-center">
                            <span className="text-white/50 font-black text-2xl tracking-widest uppercase">Geometric Conversion</span>
                        </motion.div>
                        <motion.div {...fadeUp} className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 font-bold text-sm">
                                <Cuboid className="w-4 h-4" /> 2D to 3D Converter
                            </div>
                            <h3 className="text-4xl font-black leading-tight">Instant Floor Plan Conversion</h3>
                            <p className="text-slate-400 font-medium text-lg leading-relaxed">
                                Already have a floor plan? Turn it into a structured 3D environment without manually rebuilding the model. Upload a 2D plan and let AI recognize walls, rooms, structure, and spatial relationships — transforming a flat drawing into a presentation-ready 3D experience.
                            </p>
                            <div className="text-sm border-l-2 border-slate-700 pl-4 py-2 mt-4 text-slate-300 font-medium">
                                <span className="text-white font-bold">Best for:</span> Architects, civil engineers, builders, designers, and property professionals.
                            </div>
                            <Link href="/products/2d-to-3d" className="inline-flex items-center gap-2 text-purple-400 font-black hover:text-purple-300 hover:gap-3 transition-all pt-4">
                                Explore 2D to 3D Converter <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Block 3 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeUp} className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 font-bold text-sm">
                                <PaintBucket className="w-4 h-4" /> Smart Room Styler
                            </div>
                            <h3 className="text-4xl font-black leading-tight">AI-Driven Interior Styling</h3>
                            <p className="text-slate-400 font-medium text-lg leading-relaxed">
                                Transform empty or existing rooms into fully styled interiors with AI. Choose a design direction, experiment with furniture arrangements, change materials and finishes, simulate lighting, and explore different visual styles before committing to a design.
                            </p>
                            <div className="text-sm border-l-2 border-slate-700 pl-4 py-2 mt-4 text-slate-300 font-medium">
                                <span className="text-white font-bold">Best for:</span> Interior designers, homeowners, furniture brands, and property professionals.
                            </div>
                            <Link href="/products/room-styler" className="inline-flex items-center gap-2 text-pink-400 font-black hover:text-pink-300 hover:gap-3 transition-all pt-4">
                                Explore Smart Room Styler <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                        <motion.div {...fadeUp} className="order-1 lg:order-2 h-72 lg:h-[400px] bg-gradient-to-tr from-pink-500/20 to-zinc-800 rounded-[40px] border border-white/5 relative overflow-hidden group shadow-2xl flex items-center justify-center">
                            <span className="text-white/50 font-black text-2xl tracking-widest uppercase">Interior Synthesis</span>
                        </motion.div>
                    </div>

                    {/* Block 4 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeUp} className="h-72 lg:h-[400px] bg-gradient-to-tl from-emerald-500/20 to-zinc-800 rounded-[40px] border border-white/5 relative overflow-hidden group shadow-2xl flex items-center justify-center">
                            <span className="text-white/50 font-black text-2xl tracking-widest uppercase">Environmental Design</span>
                        </motion.div>
                        <motion.div {...fadeUp} className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-sm">
                                <Building className="w-4 h-4" /> Interiors &amp; Exteriors
                            </div>
                            <h3 className="text-4xl font-black leading-tight">Region-Aware Design Intelligence</h3>
                            <p className="text-slate-400 font-medium text-lg leading-relaxed">
                                Create cohesive interiors, architectural exteriors, facades, landscapes, and outdoor environments while taking regional materials, lighting, vegetation, and environmental conditions into consideration.
                            </p>
                            <div className="text-sm border-l-2 border-slate-700 pl-4 py-2 mt-4 text-slate-300 font-medium">
                                <span className="text-white font-bold">Best for:</span> Architects, builders, developers, interior designers, and real estate marketers.
                            </div>
                            <Link href="/products/interiors-exteriors" className="inline-flex items-center gap-2 text-emerald-400 font-black hover:text-emerald-300 hover:gap-3 transition-all pt-4">
                                Explore Interiors &amp; Exteriors <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Block 5 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeUp} className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-bold text-sm">
                                <ImageIcon className="w-4 h-4" /> Realistic Renders
                            </div>
                            <h3 className="text-4xl font-black leading-tight">Photorealistic Lighting</h3>
                            <p className="text-slate-400 font-medium text-lg leading-relaxed">
                                Turn your designs into high-quality, photorealistic visuals without lengthy traditional rendering workflows. Upload a 3D model, sketch, or floor plan, choose a visual style, and generate realistic imagery in seconds instead of hours.
                            </p>
                            <div className="text-sm border-l-2 border-slate-700 pl-4 py-2 mt-4 text-slate-300 font-medium">
                                <span className="text-white font-bold">Best for:</span> Architects, interior designers, developers, agencies, and real estate marketing teams.
                            </div>
                            <Link href="/products/realistic-renders" className="inline-flex items-center gap-2 text-cyan-400 font-black hover:text-cyan-300 hover:gap-3 transition-all pt-4">
                                Explore Realistic Renders <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                        <motion.div {...fadeUp} className="order-1 lg:order-2 h-72 lg:h-[400px] bg-gradient-to-tr from-cyan-500/20 to-zinc-800 rounded-[40px] border border-white/5 relative overflow-hidden group shadow-2xl flex items-center justify-center">
                            <span className="text-white/50 font-black text-2xl tracking-widest uppercase">Cloud Rendering GPU</span>
                        </motion.div>
                    </div>

                    {/* Block 6 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeUp} className="h-72 lg:h-[400px] bg-gradient-to-tl from-indigo-500/20 to-zinc-800 rounded-[40px] border border-white/5 relative overflow-hidden group shadow-2xl flex items-center justify-center">
                            <span className="text-white/50 font-black text-2xl tracking-widest uppercase">360° Immersion</span>
                        </motion.div>
                        <motion.div {...fadeUp} className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 font-bold text-sm">
                                <MonitorPlay className="w-4 h-4" /> Virtual Walkthrough
                            </div>
                            <h3 className="text-4xl font-black leading-tight">8K Ultra-Realistic Experiences</h3>
                            <p className="text-slate-400 font-medium text-lg leading-relaxed">
                                Let clients step inside a design before it is built. Create interactive 360° walkthroughs that allow viewers to explore spaces, understand proportions, evaluate materials and lighting, and experience the overall design from different perspectives.
                            </p>
                            <div className="text-sm border-l-2 border-slate-700 pl-4 py-2 mt-4 text-slate-300 font-medium">
                                <span className="text-white font-bold">Best for:</span> Architects, interior designers, builders, developers, and real estate professionals.
                            </div>
                            <Link href="/products/virtual-walkthrough" className="inline-flex items-center gap-2 text-indigo-400 font-black hover:text-indigo-300 hover:gap-3 transition-all pt-4">
                                Explore Virtual Walkthrough <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* AUDIENCE SECTION */}
            <section className="py-16 lg:py-20 bg-slate-50 border-y border-black/5">
                <div className="container-custom px-4 max-w-6xl mx-auto">
                    <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 mb-6 mx-auto"><Users className="w-6 h-6 text-zlendo-teal" /></span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">Built for the Entire Property Design Ecosystem</h2>
                        <p className="text-lg text-slate-600 font-medium leading-relaxed">
                            Whether you're designing a home, developing a property, presenting a project, or helping a client make a decision, Zlendo Realty brings visualization closer to the people who need it.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { t: 'Homeowners', d: 'Explore layouts, furniture, materials, colors, and design possibilities before making expensive decisions.' },
                            { t: 'Architects', d: 'Move faster from drawings to 3D visualization, presentation assets, and immersive client experiences.' },
                            { t: 'Interior Designers', d: 'Generate and compare multiple design concepts without rebuilding every scene manually.' },
                            { t: 'Builders & Contractors', d: 'Help clients understand proposed spaces before construction and reduce ambiguity.' },
                            { t: 'Real Estate Developers', d: 'Create compelling visual experiences that help buyers understand properties before they are built.' },
                            { t: 'Real Estate Professionals', d: 'Turn property plans into visual experiences that are easier for prospects to understand and remember.' }
                        ].map((a, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all">
                                <h3 className="text-xl font-black text-slate-800 mb-3">{a.t}</h3>
                                <p className="text-slate-600 font-medium">{a.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TABLE / SUMMARY SECTION */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="container-custom px-4 max-w-5xl mx-auto">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <h2 className="text-3xl font-black text-slate-900 mb-4">One Platform. Six Powerful Ways to Visualize Property.</h2>
                    </motion.div>
                    <motion.div {...fadeUp} className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
                        <table className="w-full text-left min-w-[700px]">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-5 font-black text-slate-800">Product</th>
                                    <th className="px-6 py-5 font-black text-slate-800">What it does</th>
                                    <th className="px-6 py-5 font-black text-slate-800">Ideal for</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-slate-800">AI Floor Planner</td>
                                    <td className="px-6 py-4">Create and edit 2D &amp; 3D floor plans</td>
                                    <td className="px-6 py-4">Planning &amp; spatial design</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-slate-800">2D to 3D Converter</td>
                                    <td className="px-6 py-4">Transform existing plans into 3D</td>
                                    <td className="px-6 py-4">Fast visualization</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-slate-800">Smart Room Styler</td>
                                    <td className="px-6 py-4">AI-powered interior styling</td>
                                    <td className="px-6 py-4">Interior concepts</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-slate-800">Interiors &amp; Exteriors</td>
                                    <td className="px-6 py-4">Design complete properties</td>
                                    <td className="px-6 py-4">Architecture &amp; landscaping</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-slate-800">Realistic Renders</td>
                                    <td className="px-6 py-4">Generate photorealistic visuals</td>
                                    <td className="px-6 py-4">Presentations &amp; marketing</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-slate-800">Virtual Walkthrough</td>
                                    <td className="px-6 py-4">Create immersive 360° experiences</td>
                                    <td className="px-6 py-4">Client experience &amp; sales</td>
                                </tr>
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-900 to-[#111] text-center text-white border-y border-white/5">
                <div className="container-custom px-4 max-w-4xl mx-auto space-y-8">
                    <motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-black tracking-tight leading-tight">Ready to Bring Your Next Property to Life?</motion.h2>
                    <motion.p {...fadeUp} className="text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
                        Start with a floor plan. Transform it into 3D. Style every space. Create photorealistic visuals. Then let your clients walk through the result. All from one AI-powered design platform.
                    </motion.p>
                    <motion.div {...fadeUp} className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
                        <Link href="https://app.zlendorealty.com/signup" className="px-10 py-5 bg-zlendo-teal text-white rounded-2xl font-black text-xl hover:scale-105 hover:bg-teal-400 shadow-[0_10px_30px_rgba(45,212,191,0.2)] transition-all">
                            Start Designing Free
                        </Link>
                        <Link href="/contact" className="px-10 py-5 bg-white/10 text-white rounded-2xl font-black text-xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10">
                            Book a Demo
                        </Link>
                    </motion.div>
                    <motion.p {...fadeUp} className="text-sm font-bold text-slate-500 pt-6">No credit card required. Explore the future of AI-powered property visualization.</motion.p>
                </div>
            </section>

        </div>
    );
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            <path d="M5 3v4" />
            <path d="M3 5h4" />
            <path d="M19 3v4" />
            <path d="M17 5h4" />
        </svg>
    );
}
