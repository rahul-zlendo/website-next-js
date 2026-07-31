'use client';

import { SIGNUP_URL } from '@/lib/config/env';
import { motion } from 'framer-motion';
import {
    Building2, BrainCircuit, Target, Lightbulb,
    Users, Compass, TrendingUp, Cpu, PenTool,
    Briefcase, LayoutDashboard, Globe, Blocks, Eye,
    CheckCircle2, ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };
const stagger = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
};

export default function AboutClient() {
    const pathname = usePathname();
    const isIndia = pathname?.startsWith('/in');

    return (
        <div className="bg-white font-nunito selection:bg-zlendo-teal/10 selection:text-zlendo-teal">
            {/* ═══ HERO SECTION ═══ */}
            <section className="relative overflow-hidden pt-12 pb-10 lg:pt-20 lg:pb-16 bg-gradient-to-b from-slate-50 to-white">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zlendo-teal/[0.04] blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-zlendo-teal/[0.03] blur-[100px] rounded-full pointer-events-none" />
                <div className="container-custom px-6 lg:px-12 relative z-10 text-center max-w-4xl mx-auto">
                    <motion.div {...fadeUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-zlendo-teal/10 shadow-sm mb-6">
                        <Users className="w-4 h-4 text-zlendo-teal" />
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-zlendo-teal">About Zlendo Realty</span>
                    </motion.div>
                    <motion.h1 {...fadeUp} transition={{ delay: 0.1 }} className="text-[28px] md:text-[42px] lg:text-[56px] font-black text-zlendo-grey-dark leading-[1.05] tracking-tight mb-8">
                        Building the Future of Real Estate Design with{' '}
                        <span className="text-zlendo-teal italic">AI & Innovation</span>
                        {isIndia && <span className="sr-only"> Platform</span>}
                    </motion.h1>
                    <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-zlendo-grey-medium font-medium leading-relaxed mb-6">
                        Zlendo Realty is an AI-powered real estate design and visualization platform created by <span className="font-bold text-zlendo-teal">Zlendo Technologies</span> to make architectural planning, 3D visualization, photorealistic rendering, Vastu analysis, and cost estimation faster, smarter, and easier for everyone.
                    </motion.p>
                    <motion.p {...fadeUp} transition={{ delay: 0.3 }} className="text-base md:text-lg text-zlendo-grey-medium font-medium leading-relaxed">
                        Our journey began in 2020 with a clear vision: to simplify the way architects, civil engineers, builders, interior designers, and homeowners create and present property designs. Today, after completing 6 successful years and stepping into our 7th year, Zlendo Realty continues to innovate at the intersection of real estate, design, construction technology, and artificial intelligence.
                    </motion.p>
                </div>
            </section>

            {/* ═══ WHY WE CREATED SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-white relative">
                <div className="container-custom px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div {...fadeUp} className="order-2 lg:order-1 relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-zlendo-teal/20 to-transparent rounded-[40px] blur-3xl -z-10" />
                            <div className="bg-white rounded-[40px] p-8 lg:p-12 border border-black/[0.04] shadow-2xl shadow-black/[0.02] relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-zlendo-teal/5 rounded-bl-[100px]" />
                                <h3 className="text-2xl font-black text-zlendo-grey-dark mb-6">The Workflow Shift</h3>
                                <div className="space-y-6 relative z-10">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl opacity-60">
                                            <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center shrink-0"><PenTool className="w-5 h-5 text-slate-500" /></div>
                                            <span className="font-bold line-through text-slate-500">2D Floor Plan</span>
                                        </div>
                                        <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl opacity-60">
                                            <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center shrink-0"><Blocks className="w-5 h-5 text-slate-500" /></div>
                                            <span className="font-bold line-through text-slate-500">3D Model & Renders</span>
                                        </div>
                                        <div className="text-center text-sm font-bold text-slate-400">Multiple Disconnected Tools</div>
                                    </div>
                                    <div className="flex justify-center my-2">
                                        <ArrowRight className="w-8 h-8 text-zlendo-teal rotate-90" />
                                    </div>
                                    <div className="bg-gradient-to-br from-zlendo-teal to-[#1a9a8d] p-6 rounded-3xl text-white shadow-xl shadow-zlendo-teal/20">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Cpu className="w-6 h-6 text-emerald-200" />
                                            <span className="font-black text-xl">Zlendo Realty Ecosystem</span>
                                        </div>
                                        <p className="text-sm text-emerald-50 font-medium">
                                            2D Floor Plan → 3D Model → AI Interior Inspiration → Photorealistic Render → Virtual Walkthrough → Vastu Analysis → Cost Estimation
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div {...fadeUp} className="order-1 lg:order-2">
                            <h2 className="text-[28px] md:text-[40px] font-black text-zlendo-grey-dark leading-tight mb-6">
                                Why We Created Zlendo Realty
                            </h2>
                            <p className="text-lg text-zlendo-grey-medium font-medium leading-relaxed mb-6">
                                We started with one strong belief: real estate design should not be complicated, time-consuming, or dependent on multiple disconnected tools.
                            </p>
                            <p className="text-base text-zlendo-grey-medium/90 font-medium leading-relaxed mb-6">
                                Real estate design involves many stages. A simple 2D floor plan has to be converted into a 3D structure, then visualized with materials, interiors, furniture, lighting, elevation, and realistic rendering. After that, clients often want a walkthrough, Vastu review, and construction cost estimation.
                            </p>
                            <p className="text-base text-zlendo-grey-medium/90 font-medium leading-relaxed mb-6">
                                This process usually requires multiple experts and multiple software tools such as AutoCAD, SketchUp, Lumion, D5 Render, V-Ray, Excel-based estimation sheets, and manual design references.
                            </p>
                            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-zlendo-teal/10 border border-zlendo-teal/20">
                                <CheckCircle2 className="w-5 h-5 text-zlendo-teal" />
                                <span className="font-bold text-zlendo-grey-dark">Built to make this complex workflow simple.</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ MISSION & VISION SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#29b0a1_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />
                <div className="container-custom px-6 lg:px-12 relative z-10">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                        <motion.div {...fadeUp} className="bg-white rounded-[32px] p-10 lg:p-12 border border-black/[0.04] shadow-xl shadow-black/[0.02] group hover:border-zlendo-teal/20 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Target className="w-8 h-8 text-zlendo-teal" />
                            </div>
                            <h3 className="text-3xl font-black text-zlendo-grey-dark mb-4">Our Mission</h3>
                            <p className="text-lg text-zlendo-grey-medium font-medium leading-relaxed">
                                Our mission is to make real estate design, visualization, and planning simple, intelligent, and accessible. We want to help professionals and homeowners move from imagination to visualization faster.
                            </p>
                        </motion.div>
                        <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="bg-white rounded-[32px] p-10 lg:p-12 border border-black/[0.04] shadow-xl shadow-black/[0.02] group hover:border-zlendo-teal/20 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Lightbulb className="w-8 h-8 text-zlendo-teal" />
                            </div>
                            <h3 className="text-3xl font-black text-zlendo-grey-dark mb-4">Our Vision</h3>
                            <p className="text-lg text-zlendo-grey-medium font-medium leading-relaxed">
                                To become a leading AI-powered real estate design platform that connects floor planning, 3D visualization, rendering, walkthroughs, Vastu analysis, and cost estimation in one seamless experience.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ AUDIENCE SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="container-custom px-6 lg:px-12">
                    <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-[28px] md:text-[40px] font-black text-zlendo-grey-dark leading-tight mb-4">
                            Designed for Industry Professionals & Homeowners
                        </h2>
                        <p className="text-lg text-zlendo-grey-medium font-medium">
                            Zlendo Realty is built for everyone involved in property design and construction.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {[
                            { icon: Building2, title: 'For Architects', desc: 'Create better visual presentations, convert ideas into 3D outputs, explore interior themes, and present concepts faster.' },
                            { icon: LayoutDashboard, title: 'For Civil Engineers', desc: 'Explain floor plans clearly, generate visual outputs, improve proposal quality, and support clients with cost estimation.' },
                            { icon: Briefcase, title: 'For Builders', desc: 'Showcase projects more professionally, impress clients with renders and walkthroughs, and reduce time explaining layouts.' },
                            { icon: PenTool, title: 'For Interior Designers', desc: 'Use AI inspiration, themes, rendering, and room adaptation features to explore multiple design styles quickly.' },
                            { icon: Compass, title: 'For Homeowners', desc: 'Visualize spaces, compare themes, review Vastu, and understand project cost direction before construction starts.' },
                        ].map((item, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className={`bg-slate-50 rounded-3xl p-8 border border-black/[0.04] flex gap-6 ${i === 4 ? 'md:col-span-2 md:max-w-xl md:mx-auto w-full' : ''}`}>
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-black/[0.02]">
                                    <item.icon className="w-6 h-6 text-zlendo-teal" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-zlendo-grey-dark mb-2">{item.title}</h3>
                                    <p className="text-base text-zlendo-grey-medium font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ AI DIRECTION SECTION ═══ */}
            <section className="py-16 lg:py-20 bg-[#111827] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-zlendo-teal/10 blur-[120px] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-zlendo-teal/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                <div className="container-custom px-6 lg:px-12 relative z-10 text-center max-w-4xl mx-auto">
                    <motion.div {...fadeUp} className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-8 border border-white/10">
                        <BrainCircuit className="w-8 h-8 text-emerald-400" />
                    </motion.div>
                    <motion.h2 {...fadeUp} className="text-[32px] md:text-[48px] font-black leading-tight mb-8">
                        AI Everywhere: Our Innovation Direction
                    </motion.h2>
                    <motion.p {...fadeUp} className="text-xl text-gray-300 font-medium leading-relaxed mb-6">
                        At Zlendo Realty, AI is not treated as just a feature. It is part of our long-term innovation strategy. Our vision is to make AI a creative assistant for every architect, civil engineer, builder, designer, and homeowner.
                    </motion.p>
                    <motion.p {...fadeUp} className="text-xl text-gray-300 font-medium leading-relaxed mb-12">
                        <span className="font-bold text-emerald-400 italic">AI should not replace professionals. It should empower them.</span>
                    </motion.p>

                    <motion.div variants={stagger} initial="initial" whileInView="whileInView" className="flex flex-wrap justify-center gap-3">
                        {[
                            'Floor Plan Understanding', 'Interior Design Inspiration', 'Theme-Based Room Transformation',
                            'Photorealistic Rendering', 'Vastu Insights', 'Cost Estimation Intelligence'
                        ].map((item, i) => (
                            <motion.div key={i} variants={fadeUp} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                <span className="text-sm font-bold text-white/90">{item}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══ JOURNEY & EXPERT BACKING ═══ */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="container-custom px-6 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        <motion.div {...fadeUp}>
                            <h3 className="text-sm font-black uppercase tracking-widest text-zlendo-teal mb-3">Our History</h3>
                            <h2 className="text-3xl lg:text-4xl font-black text-zlendo-grey-dark leading-tight mb-6">
                                Our Journey: 2020 to 2026
                            </h2>
                            <p className="text-base text-zlendo-grey-medium font-medium leading-relaxed mb-4">
                                Zlendo Realty started with a mission to simplify real estate design. Over the years, we have continuously improved our platform by listening to users, collaborating with industry experts, and investing in modern technology.
                            </p>
                            <p className="text-base text-zlendo-grey-medium font-medium leading-relaxed mb-6">
                                Now, as we complete 6 years and step into our 7th year, we are more focused than ever on AI-powered innovation. This journey has helped us build a platform that is practical, visual, intelligent, and future-ready.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Real-world feedback from builders',
                                    'Deep technical research & development',
                                    'Focus on AI-driven automation',
                                    'Inputs from structural engineering experts'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-zlendo-grey-dark">
                                        <div className="w-2 h-2 rounded-full bg-zlendo-teal" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
                            <h3 className="text-sm font-black uppercase tracking-widest text-zlendo-teal mb-3">Collaboration</h3>
                            <h2 className="text-3xl lg:text-4xl font-black text-zlendo-grey-dark leading-tight mb-6">
                                Expert-Backed Innovation
                            </h2>
                            <p className="text-base text-zlendo-grey-medium font-medium leading-relaxed mb-4">
                                Innovation is not based on assumptions. We work closely with domain experts, builders, architects, civil engineers, and structural engineering experts to make sure our platform solves real-world problems.
                            </p>
                            <p className="text-base text-zlendo-grey-medium font-medium leading-relaxed mb-4">
                                For our floor plan editor and cost estimation system, we collaborated with PhD-level structural engineering experts to better understand construction logic and estimation workflows.
                            </p>
                            <p className="text-base text-zlendo-grey-medium font-medium leading-relaxed">
                                This expert-backed approach allows Zlendo Realty to combine <span className="font-bold text-zlendo-grey-dark">technology + real construction knowledge + AI innovation</span>.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ CTA SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-slate-50 relative border-t border-black/[0.03]">
                <div className="container-custom px-6 lg:px-12 text-center max-w-4xl mx-auto">
                    <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-black text-zlendo-grey-dark mb-6">
                        The Future of Real Estate Design Starts Here
                    </motion.h2>
                    <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-lg text-zlendo-grey-medium font-medium mb-10 leading-relaxed">
                        From a simple floor plan to a complete visual experience, Zlendo Realty helps users design, visualize, estimate, and present with confidence. Choose a platform that brings together technology, expert knowledge, and AI innovation.
                    </motion.p>
                    <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                        <a href={SIGNUP_URL} className="btn-primary py-4 px-10 text-lg rounded-2xl inline-flex items-center gap-3">
                            Start Designing for Free <ArrowRight className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
