'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    ArrowRight, Pickaxe, HardHat, Hammer, FileText, CheckCircle2,
    Eye, Shapes, Compass, Shuffle, MonitorPlay, Users, Building, PenTool, BarChart3
} from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };
const staggerContainer = { initial: {}, whileInView: { transition: { staggerChildren: 0.1 } }, viewport: { once: true } };

export default function BuildersClient() {
    return (
        <div className="bg-white font-nunito selection:bg-zlendo-teal/20 selection:text-zlendo-teal overflow-hidden border-t border-slate-100">
            {/* HERO SECTION */}
            <section className="relative pt-10 pb-10 md:pt-14 md:pb-14 overflow-hidden bg-slate-900 border-b border-black/5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zlendo-teal/20 via-transparent to-transparent pointer-events-none" />
                <div className="container-custom px-4 relative z-10 max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="text-center lg:text-left">
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-zlendo-teal/30 bg-zlendo-teal/10 mb-8 backdrop-blur-md">
                                <HardHat className="w-4 h-4 text-teal-400" />
                                <span className="text-xs font-black tracking-widest text-teal-400 uppercase">AI Visualization Tools</span>
                            </motion.div>

                            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
                                AI Visualization Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-400">Builders & Contractors</span>
                            </motion.h1>

                            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
                                Visualize Projects Before They're Built. Turn floor plans and concepts into 3D designs, renders, and walkthroughs.
                            </motion.p>

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Link href="https://app.zlendorealty.com/signup" className="w-full sm:w-auto px-8 py-4 bg-zlendo-teal text-white rounded-2xl font-black text-lg hover:scale-105 hover:bg-teal-400 transition-all shadow-[0_10px_30px_rgba(45,212,191,0.2)] flex items-center justify-center gap-2">
                                    Visualize Before You Build <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link href="/business#demo-form" className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-all backdrop-blur-sm border border-white/10 flex items-center justify-center gap-2">
                                    Explore Solutions
                                </Link>
                            </motion.div>
                        </div>

                        <motion.div initial={{ opacity: 0, x: 20, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 relative group w-full h-[350px] lg:h-[450px]">
                            <Image src="/assets/business/installation-guide.webp" alt="AI-powered 3D visualization for construction projects" fill priority className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute bottom-6 left-6 text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xs uppercase tracking-widest mb-2">
                                    <Hammer className="w-3 h-3" /> Digital Construction
                                </div>
                                <h3 className="text-xl font-black text-white">Project Visualization Interface</h3>
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
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Turn Plans Into Clear, Realistic Visuals</h2>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed">
                                Builders and contractors work with detailed drawings, multiple stakeholders, changing requirements, and tight project timelines. But not every client or decision-maker can understand a project from 2D plans alone.
                            </p>
                            <div className="bg-white p-6 rounded-2xl border border-teal-100 shadow-sm relative overflow-hidden group hover:shadow-lg transition-shadow">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-teal-400 group-hover:bg-zlendo-teal transition-colors"></div>
                                <span className="font-bold text-slate-800 text-lg leading-relaxed flex items-start gap-4">
                                    <Pickaxe className="w-6 h-6 shrink-0 text-zlendo-teal" />
                                    Zlendo Realty helps builders and contractors transform floor plans and design concepts into 3D visualizations, realistic renders, interior and exterior designs, and virtual walkthroughs.
                                </span>
                            </div>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                Give clients a clearer understanding of the finished project, communicate design changes more effectively, speed up approvals, and create professional visuals for project presentations and marketing.
                            </p>
                        </motion.div>

                        <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.5 }} className="relative h-full flex flex-col justify-center">
                            <div className="rounded-[32px] overflow-hidden shadow-2xl relative mb-8 group h-[300px] border border-slate-100">
                                <Image src="/assets/use-case/modern-indian-home-interior.webp" alt="AI property visualization platform for builders and contractors" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6">
                                    <div className="text-white">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/10 font-bold text-xs uppercase tracking-widest mb-2">
                                            <FileText className="w-3 h-3" /> Make Every Project Easier
                                        </div>
                                        <h3 className="text-lg font-black">From 2D Plans to Realistic Experiences</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-[32px] p-8 md:p-10 text-lg text-slate-700 font-medium leading-relaxed space-y-6 shadow-xl shadow-slate-200/50 relative border border-slate-100 group">
                                <p className="relative z-10">
                                    A successful building project depends on clear communication between builders, contractors, architects, designers, clients, suppliers, and other stakeholders.
                                </p>
                                <p className="relative z-10">
                                    Traditional drawings are essential for execution, but they don't always communicate the complete visual experience of the finished property. <strong className="text-slate-900 border-b-2 border-zlendo-teal/30 pb-0.5">Zlendo Realty bridges that gap.</strong>
                                </p>
                                <p className="relative z-10">
                                    Whether you're building a residential home, apartment, villa, commercial property, or larger development, you can use AI-powered visualization to help everyone see the project before it's physically built.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CHALLENGES SECTION */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container-custom px-4 max-w-6xl mx-auto">
                    <motion.div {...fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-teal-500 font-black tracking-[0.2em] uppercase text-sm mb-4 block">Challenges Addressed</span>
                        <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900">Reduce Misunderstandings Before They Become Problems</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Clients Struggle to Understand 2D Plans",
                                desc: "Many clients find architectural drawings and floor plans difficult to interpret. Give them a realistic 3D view of the proposed space so they can better understand room layouts, proportions, flow, and the overall design.",
                                icon: Shapes
                            },
                            {
                                title: "Design Changes Can Create Confusion",
                                desc: "A change to a layout, material, finish, or exterior design can be difficult to communicate through drawings and verbal explanations alone. Visualize proposed changes so clients and project teams can see the final result.",
                                icon: Shuffle
                            },
                            {
                                title: "Getting Client Approvals Takes Time",
                                desc: "When clients cannot clearly visualize the proposed design, decisions can take longer and lead to repeated discussions. Use realistic visualizations to make design reviews clearer.",
                                icon: CheckCircle2
                            },
                            {
                                title: "Multiple Teams Need to Stay Aligned",
                                desc: "Builders, contractors, architects, interior designers, clients, and suppliers may interpret drawings differently. Create a shared visual reference that helps everyone understand the intended result.",
                                icon: Users
                            },
                            {
                                title: "Marketing Needs Project Visuals First",
                                desc: "Builders often need to showcase projects while they are still under construction. Create realistic renders and virtual walkthroughs that can be used to present and promote future spaces before completion.",
                                icon: BarChart3
                            }
                        ].map((item, idx) => (
                            <motion.div key={idx} {...fadeUp} transition={{ delay: idx * 0.05 }} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-zlendo-teal/30 hover:bg-white hover:shadow-xl hover:shadow-zlendo-teal/5 transition-all text-left">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm text-zlendo-teal flex items-center justify-center mb-6 border border-slate-100">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black text-slate-800 mb-3">{item.title}</h3>
                                <p className="text-slate-600 font-medium text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRODUCT SOLUTIONS GRID */}
            <section className="py-16 lg:py-24 bg-slate-900 text-white">
                <div className="container-custom px-4 max-w-7xl mx-auto">
                    <motion.div {...fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-teal-400 font-black tracking-[0.2em] uppercase text-sm mb-4 block">How Zlendo Realty Helps</span>
                        <h2 className="text-4xl md:text-5xl font-black leading-tight">Visual Tools for Every Stage of Your Project</h2>
                        <p className="text-xl text-slate-400 font-medium mt-6">
                            Convert, style, render, and present directly from your floor plans.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* 1 */}
                        <motion.div {...fadeUp} className="bg-slate-800 border border-slate-700 rounded-[32px] p-8 hover:border-blue-500/50 transition-colors group">
                            <h3 className="text-2xl font-black mb-3">Convert 2D Plans Into 3D</h3>
                            <p className="text-slate-300 font-medium mb-6">
                                Transform existing floor plans into 3D visualizations that are easier for clients and stakeholders to understand. Show the relationship between rooms, layouts, and structures clearly.
                            </p>
                            <div className="mb-8">
                                <div className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-2">Use it for:</div>
                                <ul className="flex flex-wrap gap-2 text-sm font-bold">
                                    <li className="px-3 py-1 bg-slate-700/50 rounded-full text-blue-300">Client discussions</li>
                                    <li className="px-3 py-1 bg-slate-700/50 rounded-full text-blue-300">Layout presentations</li>
                                    <li className="px-3 py-1 bg-slate-700/50 rounded-full text-blue-300">Design reviews</li>
                                    <li className="px-3 py-1 bg-slate-700/50 rounded-full text-blue-300">Project proposals</li>
                                    <li className="px-3 py-1 bg-slate-700/50 rounded-full text-blue-300">Approval meetings</li>
                                </ul>
                            </div>
                            <Link href="/products/2d-to-3d" className="inline-flex items-center gap-2 text-blue-400 font-black hover:text-blue-300 transition-colors">
                                Explore 2D to 3D <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        {/* 2 */}
                        <motion.div {...fadeUp} className="bg-slate-800 border border-slate-700 rounded-[32px] p-8 hover:border-pink-500/50 transition-colors group">
                            <h3 className="text-2xl font-black mb-3">Visualize Interiors Before Construction</h3>
                            <p className="text-slate-300 font-medium mb-6">
                                Show clients what their future interiors could look like before materials are purchased or installation begins. Explore furniture, finishes, styles, and interior layouts.
                            </p>
                            <div className="mb-8">
                                <div className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-2">Use it for:</div>
                                <ul className="flex flex-wrap gap-2 text-sm font-bold">
                                    <li className="px-3 py-1 bg-slate-700/50 rounded-full text-pink-300">Home interiors</li>
                                    <li className="px-3 py-1 bg-slate-700/50 rounded-full text-pink-300">Apartment interiors</li>
                                    <li className="px-3 py-1 bg-slate-700/50 rounded-full text-pink-300">Villa projects</li>
                                    <li className="px-3 py-1 bg-slate-700/50 rounded-full text-pink-300">Custom-built homes</li>
                                    <li className="px-3 py-1 bg-slate-700/50 rounded-full text-pink-300">Design selections</li>
                                </ul>
                            </div>
                            <Link href="/products/room-styler" className="inline-flex items-center gap-2 text-pink-400 font-black hover:text-pink-300 transition-colors">
                                Explore Room Styler <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        {/* 3 */}
                        <motion.div {...fadeUp} className="bg-slate-800 border border-slate-700 rounded-[32px] p-8 hover:border-orange-500/50 transition-colors group">
                            <h3 className="text-2xl font-black mb-3">Visualize Exteriors & Building Designs</h3>
                            <p className="text-slate-300 font-medium mb-6">
                                Give clients a realistic view of the completed building from the outside. Visualize façades, materials, architectural styles, landscaping, and entrances.
                            </p>
                            <div className="mb-8">
                                <div className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-2">Use it for:</div>
                                <ul className="flex flex-wrap gap-2 text-sm font-bold">
                                    <li className="px-3 py-1 bg-slate-700/50 rounded-full text-orange-300">Residential buildings</li>
                                    <li className="px-3 py-1 bg-slate-700/50 rounded-full text-orange-300">Villas</li>
                                    <li className="px-3 py-1 bg-slate-700/50 rounded-full text-orange-300">Apartments</li>
                                    <li className="px-3 py-1 bg-slate-700/50 rounded-full text-orange-300">Commercial properties</li>
                                    <li className="px-3 py-1 bg-slate-700/50 rounded-full text-orange-300">Renovation projects</li>
                                </ul>
                            </div>
                            <Link href="/products/interiors-exteriors" className="inline-flex items-center gap-2 text-orange-400 font-black hover:text-orange-300 transition-colors">
                                Explore Exteriors <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        {/* 4 */}
                        <motion.div {...fadeUp} className="bg-slate-800 border border-slate-700 rounded-[32px] p-8 hover:border-purple-500/50 transition-colors group">
                            <h3 className="text-2xl font-black mb-3">Generate Realistic Project Renders</h3>
                            <p className="text-slate-300 font-medium mb-6">
                                Turn your project concepts into high-quality, photorealistic visuals. Realistic renders help builders present their projects professionally and give a strong sense of the final property.
                            </p>
                            <div className="mb-8">
                                <div className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-2">Use it for:</div>
                                <ul className="flex flex-wrap gap-2 text-sm font-bold">
                                    <li className="px-3 py-1 bg-slate-700/50 rounded-full text-purple-300">Client presentations</li>
                                    <li className="px-3 py-1 bg-slate-700/50 rounded-full text-purple-300">Sales materials</li>
                                    <li className="px-3 py-1 bg-slate-700/50 rounded-full text-purple-300">Brochures & Web</li>
                                    <li className="px-3 py-1 bg-slate-700/50 rounded-full text-purple-300">Marketing campaigns</li>
                                </ul>
                            </div>
                            <Link href="/products/realistic-renders" className="inline-flex items-center gap-2 text-purple-400 font-black hover:text-purple-300 transition-colors">
                                Explore Renders <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        {/* 5 */}
                        <motion.div {...fadeUp} className="bg-slate-800 border border-slate-700 rounded-[32px] p-8 hover:border-emerald-500/50 transition-colors group lg:col-span-2">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-black mb-3">Create Virtual Walkthroughs</h3>
                                    <p className="text-slate-300 font-medium mb-6">
                                        Let clients experience the project before it is completed. Virtual walkthroughs provide a more immersive way to explore rooms, layouts, interiors, and overall spaces instead of relying solely on technical drawings.
                                    </p>
                                    <div className="mb-8">
                                        <div className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-2">Ideal for:</div>
                                        <ul className="flex flex-wrap gap-2 text-sm font-bold">
                                            <li className="px-3 py-1 bg-slate-700/50 rounded-full text-emerald-300">Client presentations</li>
                                            <li className="px-3 py-1 bg-slate-700/50 rounded-full text-emerald-300">Project approvals</li>
                                            <li className="px-3 py-1 bg-slate-700/50 rounded-full text-emerald-300">Property demos</li>
                                            <li className="px-3 py-1 bg-slate-700/50 rounded-full text-emerald-300">Pre-sales & Investor</li>
                                        </ul>
                                    </div>
                                    <Link href="/products/virtual-walkthrough" className="inline-flex items-center gap-2 text-emerald-400 font-black hover:text-emerald-300 transition-colors">
                                        Explore Walkthroughs <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                                <div className="w-full md:w-1/3 relative rounded-2xl overflow-hidden aspect-video border border-slate-600 group">
                                    <Image src="/assets/global/flow-image.webp" alt="Realistic 3D property visualization for contractors" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
                                            <MonitorPlay className="w-5 h-5 text-white ml-0.5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* BUILT FOR THE WAY BUILDERS WORK */}
            <section className="py-12 lg:py-20 bg-white border-y border-slate-100">
                <div className="container-custom px-4 max-w-6xl mx-auto">
                    <motion.div {...fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-teal-500 font-black tracking-widest uppercase text-sm block mb-4">Target Personas</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">One Platform for Project Visualization</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                role: "For Residential Builders",
                                desc: "Show homeowners what their new home can look like before construction begins."
                            },
                            {
                                role: "For General Contractors",
                                desc: "Improve communication between clients, subcontractors, designers, and project stakeholders."
                            },
                            {
                                role: "For Custom Home Builders",
                                desc: "Present personalized layouts, interiors, finishes, and exterior concepts to prospective homeowners."
                            },
                            {
                                role: "For Renovation Contractors",
                                desc: "Visualize proposed changes before renovation work begins and help customers understand the transformation."
                            },
                            {
                                role: "For Commercial Contractors",
                                desc: "Create professional project visuals for presentations, proposals, stakeholders, and marketing."
                            },
                            {
                                role: "For Design-Build Companies",
                                desc: "Bridge the gap between design concepts and construction execution with a shared visual representation."
                            },
                        ].map((item, idx) => (
                            <motion.div key={idx} {...fadeUp} transition={{ delay: idx * 0.05 }} className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-zlendo-teal/50 hover:shadow-lg transition-all text-left">
                                <h3 className="text-xl font-black text-slate-800 mb-3">{item.role}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA SECTION */}
            <section className="">
                <div className="container-custom mx-auto">
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-10 md:p-16 text-center shadow-2xl shadow-slate-900/20 relative overflow-hidden border border-slate-700">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-zlendo-teal/20 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />

                        <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
                            <motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                                Give Clients More Than a Floor Plan.<br />Give Them a Vision.
                            </motion.h2>
                            <motion.p {...fadeUp} className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
                                Your clients aren't buying a floor plan. They're investing in the finished space. Help them see it.
                            </motion.p>
                            <motion.p {...fadeUp} className="text-lg text-slate-400 font-medium leading-relaxed">
                                With Zlendo Realty, builders and contractors can transform technical plans into realistic visual experiences that improve communication, support approvals, strengthen presentations, and help projects stand out.
                            </motion.p>
                            <motion.div {...fadeUp} className="font-bold text-xl py-4 pb-2 italic text-teal-400">
                                Visualize the project. Align the stakeholders. Build with confidence.
                            </motion.div>
                            <motion.div {...fadeUp} className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                                <Link href="https://app.zlendorealty.com/signup" className="px-10 py-5 bg-zlendo-teal text-white rounded-2xl font-black text-lg hover:scale-105 hover:bg-teal-400 shadow-[0_10px_30px_rgba(45,212,191,0.2)] transition-all flex items-center justify-center gap-2">
                                    Visualize Before You Build <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link href="/contact" className="px-10 py-5 bg-white/10 text-white rounded-2xl font-black text-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10 flex items-center justify-center">
                                    Talk to Our Team
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
