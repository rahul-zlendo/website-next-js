'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
            <section className="relative pt-8 pb-8 md:pt-16 md:pb-16 overflow-hidden bg-slate-50 border-b border-black/5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zlendo-teal/10 via-transparent to-transparent pointer-events-none" />
                <div className="container-custom px-4 relative z-10 max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="text-center lg:text-left">
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-zlendo-teal/20 bg-zlendo-teal/5 mb-8">
                                <SparklesIcon className="w-4 h-4 text-zlendo-teal" />
                                <span className="text-xs font-black tracking-widest text-zlendo-teal uppercase">AI Home Design &amp; Visualization</span>
                            </motion.div>

                            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
                                Design. Visualize.<br /> Experience. Sell.
                            </motion.h1>

                            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-xl text-slate-600 font-medium leading-relaxed mb-10 mx-auto lg:mx-0 max-w-xl">
                                Turn ideas, floor plans, and property concepts into immersive 3D experiences with AI-powered design and visualization tools.
                            </motion.p>

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Link href="https://app.zlendorealty.com/signup" className="w-full sm:w-auto px-8 py-4 bg-zlendo-teal text-white rounded-2xl font-black text-lg hover:scale-105 hover:bg-teal-600 transition-all shadow-[0_10px_30px_rgba(45,212,191,0.3)] flex items-center justify-center gap-2">
                                    Start Designing Free <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link href="/business#demo-form" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all shadow-sm border border-slate-200 flex items-center justify-center gap-2">
                                    <CalendarCheck2 className="w-5 h-5" /> Request a Demo
                                </Link>
                            </motion.div>
                        </div>

                        {/* Hero Image */}
                        <motion.div initial={{ opacity: 0, x: 20, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="rounded-3xl overflow-hidden shadow-2xl border border-black/5 relative group w-full">
                            <Image src="/assets/global/floor-plan-consultation.webp" alt="Zlendo AI Floor Planner Drafting tool" width={1200} height={800} priority className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </motion.div>
                    </div>
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

            {/* SUITE SHOWCASE (Cards Layout) */}
            <section className="py-16 lg:py-20 bg-[#111] text-white">
                <div className="container-custom px-4 max-w-7xl mx-auto space-y-16">
                    <motion.div {...fadeUp} className="text-center">
                        <span className="text-zlendo-teal font-black tracking-[0.2em] uppercase text-sm mb-4 block">Product Ecosystem</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Explore the AI Design Suite</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'AI Floor Planner', desc: 'Accurate 2D & 3D space planning with intelligent wall snapping, and smart drag-and-drop elements.', icon: LayoutDashboard, img: '/assets/global/floor-plan-discussion.webp', link: '/products/floor-planner', color: 'text-orange-400', bg: 'bg-orange-500/10' },
                            { title: '2D to 3D Converter', desc: 'Upload a flat drawing and instantly turn it into a presentation-ready 3D experience.', icon: Cuboid, img: '/assets/Home-Page/2d-to-3d-convertor.webp', link: '/products/2d-to-3d', color: 'text-purple-400', bg: 'bg-purple-500/10' },
                            { title: 'Smart Room Styler', desc: 'Instantly restyle rooms with AI precision, experiment with materials and layouts rapidly.', icon: PaintBucket, img: '/assets/use-case/modern-architecture-studio.jpg', link: '/products/room-styler', color: 'text-pink-400', bg: 'bg-pink-500/10' },
                            { title: 'Interiors & Exteriors', desc: 'Robust region-aware design generation optimized for any lighting or environment condition.', icon: Building, img: '/assets/use-case/modern-indian-home-interior.webp', link: '/products/interiors-exteriors', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                            { title: 'Realistic Renders', desc: 'Bypass heavy local rendering software. Photorealistic cloud visualization in seconds.', icon: ImageIcon, img: '/assets/design-presentation/hero-dashboard.webp', link: '/products/realistic-renders', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
                            { title: 'Virtual Walkthrough', desc: 'Deliver immersive 360° experiences bridging the gap before properties are even built.', icon: MonitorPlay, img: '/assets/global/interior-design-walkthrough-client.webp', link: '/products/virtual-walkthrough', color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
                        ].map((prod, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-zinc-900 border border-white/10 rounded-[32px] overflow-hidden group hover:border-white/20 transition-all flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                                <div className="h-48 md:h-56 relative overflow-hidden bg-zinc-800">
                                    <Image src={prod.img} alt={prod.title} fill className="object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${prod.bg} ${prod.color} font-bold text-sm w-fit mb-4`}>
                                        <prod.icon className="w-4 h-4" /> {prod.title}
                                    </div>
                                    <h3 className="text-2xl font-black mb-3 group-hover:text-zlendo-teal transition-colors">{prod.title}</h3>
                                    <p className="text-slate-400 font-medium leading-relaxed mb-6 flex-grow">{prod.desc}</p>
                                    <Link href={prod.link} className={`inline-flex items-center gap-2 ${prod.color} border border-white/5 bg-zinc-800/50 py-3 rounded-2xl justify-center font-black hover:bg-zinc-800 transition-all mt-auto group/btn`}>
                                        Explore <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div {...fadeUp} className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-teal-500 text-white rounded-xl font-black text-lg hover:bg-teal-400 transition-colors shadow-[0_10px_30px_rgba(45,212,191,0.2)] flex items-center justify-center gap-2">
                            Enrol in Training <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="/partners" className="w-full sm:w-auto px-8 py-4 bg-zinc-800 border border-zinc-700 text-white rounded-xl font-black text-lg hover:bg-zinc-700 transition-colors shadow-sm flex items-center justify-center gap-2">
                            Become a Certified Professional
                        </Link>
                    </motion.div>
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
                            { t: 'Homeowners', d: 'Explore layouts, furniture, materials, colors, and design possibilities before making expensive decisions.', linkText: 'Explore Home Design', linkUrl: '/solutions/ai-home-design-for-homeowners' },
                            { t: 'Architects', d: 'Move faster from drawings to 3D visualization, presentation assets, and immersive client experiences.', linkText: 'Explore Architect Solutions', linkUrl: '/industries/architecture' },
                            { t: 'Interior Designers', d: 'Generate and compare multiple design concepts without rebuilding every scene manually.', linkText: 'Explore Design Solutions', linkUrl: '/industries/interior-designer' },
                            { t: 'Builders & Contractors', d: 'Help clients understand proposed spaces before construction and reduce ambiguity.', linkText: 'Explore Contractor Solutions', linkUrl: '/industries/builders-and-contractors' },
                            { t: 'Real Estate Developers', d: 'Create compelling visual experiences that help buyers understand properties before they are built.', linkText: 'Explore Developer Solutions', linkUrl: '/industries/real-estate' },
                            { t: 'Real Estate Professionals', d: 'Turn property plans into visual experiences that are easier for prospects to understand and remember.', linkText: 'Explore Real Estate Solutions', linkUrl: '/industries/real-estate-professionals' }
                        ].map((a, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:border-zlendo-teal/30 hover:bg-zlendo-teal/5 transition-all duration-300 relative overflow-hidden group flex flex-col h-full"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50/50 rounded-bl-[100px] -z-10 group-hover:bg-zlendo-teal/10 transition-colors duration-500" />
                                <h3 className="text-xl font-black text-slate-800 mb-3 group-hover:text-zlendo-teal transition-colors duration-300">{a.t}</h3>
                                <p className="text-slate-600 font-medium mb-6 group-hover:text-slate-700 transition-colors duration-300 flex-grow">{a.d}</p>
                                <Link href={a.linkUrl} className="inline-flex items-center gap-2 text-teal-600 font-black hover:text-teal-700 mt-auto transition-colors">
                                    {a.linkText} <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div {...fadeUp} className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-black text-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2">
                            Hire a Designer <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="/partners" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-xl font-black text-lg hover:bg-slate-50 border border-slate-200 transition-colors shadow-sm flex items-center justify-center gap-2">
                            Become a Partner
                        </Link>
                    </motion.div>
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

                    <motion.div {...fadeUp} className="mt-12 flex justify-center">
                        <Link href="/plans" className="px-10 py-5 bg-slate-900 text-white rounded-xl font-black text-lg hover:bg-slate-800 transition-colors shadow-xl flex items-center justify-center gap-2">
                            View Price and Plans <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* CTA SECTION */}
            < section className="py-16 lg:py-20 bg-gradient-to-br from-slate-900 to-[#111] text-center text-white border-y border-white/5" >
                <div className="container-custom px-4 max-w-4xl mx-auto space-y-8">
                    <motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-black tracking-tight leading-tight">Ready to Bring Your Next Property to Life?</motion.h2>
                    <motion.p {...fadeUp} className="text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
                        Start with a floor plan. Transform it into 3D. Style every space. Create photorealistic visuals. Then let your clients walk through the result. All from one AI-powered design platform.
                    </motion.p>
                    <motion.div {...fadeUp} className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
                        <Link href="https://app.zlendorealty.com/signup" className="px-10 py-5 bg-zlendo-teal text-white rounded-2xl font-black text-xl hover:scale-105 hover:bg-teal-400 shadow-[0_10px_30px_rgba(45,212,191,0.2)] transition-all">
                            Start Designing Free
                        </Link>
                        <Link href="/business#demo-form" className="px-10 py-5 bg-white/10 text-white rounded-2xl font-black text-xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10">
                            Book a Demo
                        </Link>
                    </motion.div>
                    <motion.p {...fadeUp} className="text-sm font-bold text-slate-500 pt-6">No credit card required. Explore the future of AI-powered property visualization.</motion.p>
                </div>
            </section >

        </div >
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
