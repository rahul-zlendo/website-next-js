'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    ArrowRight, CheckCircle2, Sparkles, Home, Box, Sofa, Image as ImageIcon, Calculator, MonitorPlay, PencilRuler, Sun, Coins
} from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };
const stagger = { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { staggerChildren: 0.1 } };

export default function HomeownersClient() {
    return (
        <div className="bg-white font-nunito selection:bg-zlendo-teal/20 selection:text-zlendo-teal overflow-hidden border-t border-slate-100">
            {/* HERO SECTION - Soft Glowing Center Aligned */}
            <section className="relative pt-10 pb-10 md:pt-20 md:pb-20 bg-slate-50 overflow-hidden border-b border-slate-200">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-zlendo-teal/10 via-blue-400/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

                <div className="container-custom px-4 relative z-10 max-w-5xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-teal-200 bg-teal-50 shadow-sm mb-8">
                        <Home className="w-4 h-4 text-teal-600" />
                        <span className="text-xs font-black tracking-widest text-teal-700 uppercase">For Homeowners</span>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 mb-8">
                        Design Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-500">Dream Home</span> with AI
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-4xl mx-auto mb-10">
                        Plan your floor layout, visualize interiors and exteriors, estimate costs, optimize for Vastu, and experience your future home in 3D with Zlendo Realty.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="https://app.zlendorealty.com/signup" className="w-full sm:w-auto px-10 py-5 bg-zlendo-teal text-white rounded-2xl font-black text-lg hover:bg-teal-400 hover:scale-105 shadow-[0_10px_30px_rgba(45,212,191,0.25)] transition-all flex items-center justify-center gap-2">
                            Start Designing Your Home <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="/products" className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all shadow-md shadow-slate-200/50 border border-slate-200 flex items-center justify-center gap-2">
                            Explore AI Home Design <Sparkles className="w-5 h-5 text-teal-500" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* INTRO: Plan, Design, Visualize - Split Callout */}
            <section className="py-10 md:py-16 bg-white relative overflow-hidden">
                <div className="container-custom px-4 max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-12 gap-10 items-center">
                        <motion.div {...fadeUp} className="md:col-span-5 relative">
                            <div className="absolute inset-0 bg-teal-100 rounded-[40px] rotate-3 scale-105 opacity-50 transition-transform duration-700" />
                            <div className="relative h-[450px] rounded-[40px] overflow-hidden shadow-2xl border border-white">
                                <Image src="/assets/use-case/modern-indian-home-interior.webp" alt="Visualizing dream home interior" fill className="object-cover" />
                            </div>
                        </motion.div>
                        <motion.div {...fadeUp} className="md:col-span-7 bg-slate-50 p-8 lg:p-12 rounded-[40px] border border-slate-100 shadow-sm">
                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight mb-8">Design, Plan and Visualize Your Dream Home with AI</h2>
                            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                                <p>Building or renovating a home involves many important decisions—from planning the layout and choosing interiors to estimating costs and visualizing the final design. Zlendo Realty helps homeowners simplify this process with AI-powered tools designed to make home planning, designing, and visualization easier.</p>
                                <p>Whether you are building a new home, renovating an existing property, or exploring interior design ideas, Zlendo Realty provides smart solutions to help you make better decisions <strong className="text-teal-600">before construction begins.</strong></p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FEATURE 1: FLOOR PLAN - Architectural Blue Theme */}
            <section className="py-10 md:py-16 bg-slate-900 border-y border-slate-800 relative">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="container-custom px-4 max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div {...fadeUp} className="space-y-8 text-white relative z-10 w-full max-w-xl">
                            <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center border border-blue-500/30">
                                <PencilRuler className="w-7 h-7" />
                            </div>
                            <div>
                                <span className="text-blue-400 font-black tracking-widest uppercase text-sm mb-2 block">Create Your Home Floor Plan</span>
                                <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">Plan Every Room with the AI Floor Planner</h2>
                            </div>
                            <p className="text-xl text-slate-300 font-medium leading-relaxed">Homeowners can use the AI Floor Planner to create and explore home layouts based on their requirements. Plan bedrooms, living rooms, kitchens, bathrooms, and other spaces more efficiently. Experiment with different layouts and organize your space before moving forward.</p>

                            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                                <h4 className="font-bold text-lg mb-4 text-white">Benefits for homeowners:</h4>
                                <ul className="space-y-3">
                                    {["Create customized home layouts", "Plan rooms and available space", "Explore multiple floor plan options", "Improve space utilization", "Make better planning decisions before construction"].map((li, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-300 font-medium text-lg">
                                            <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0" /> {li}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link href="/products/floor-planner" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-black text-lg transition-colors shadow-lg shadow-blue-900/50">
                                Start Planning Your Home <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                        <motion.div {...fadeUp} className="relative h-[450px] lg:h-[600px] w-full bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800">
                            <Image src="/assets/global/india-floor-plan-2d.svg" alt="2D Home Floor Planner" fill className="object-contain p-8 mix-blend-multiply" />
                            <div className="absolute inset-0 bg-blue-900/5 mix-blend-multiply pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FEATURE 2: 2D TO 3D - Floating Right Image */}
            <section className="py-10 md:py-16 bg-teal-50">
                <div className="container-custom px-4 max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div {...fadeUp} className="order-2 lg:order-1 relative h-[400px] lg:h-[550px] w-full">
                            <div className="absolute inset-0 bg-teal-200/50 rounded-3xl translate-x-4 translate-y-4" />
                            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl border-2 border-white bg-white">
                                <Image src="/assets/global/luxury-blueprint.webp" alt="2D to 3D Conversion for Homeowners" fill className="object-cover" />
                            </div>
                        </motion.div>
                        <motion.div {...fadeUp} className="order-1 lg:order-2 space-y-8 w-full max-w-xl">
                            <div className="w-14 h-14 bg-white text-teal-600 rounded-2xl flex items-center justify-center shadow-sm border border-teal-100">
                                <Box className="w-7 h-7" />
                            </div>
                            <div>
                                <span className="text-teal-600 font-black tracking-widest uppercase text-sm mb-2 block">Convert Your 2D Plan</span>
                                <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900">See Your Home Before It Is Built in 3D</h2>
                            </div>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed">A traditional 2D floor plan can sometimes make it difficult to imagine the final home. Zlendo Realty's 2D to 3D Conversion helps homeowners visualize their floor plans in a more realistic way. See how rooms, spaces, and layouts can look before construction begins.</p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {["Visualize your home in 3D", "Understand room layouts", "Explore space flow", "Identify design improvements", "Share with family & architects"].map((li, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-teal-100 shadow-sm text-slate-700 font-bold">
                                        <div className="w-2 h-2 rounded-full bg-teal-500 shrink-0" /> {li}
                                    </div>
                                ))}
                            </div>
                            <Link href="/products/2d-to-3d" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-black text-lg transition-colors shadow-lg">
                                Convert Your Plan to 3D <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FEATURE 3: INTERIORS - Sprawling Visual Grid layout */}
            <section className="py-10 md:py-16 bg-white relative overflow-hidden">
                <div className="container-custom px-4 max-w-7xl mx-auto">
                    <motion.div {...fadeUp} className="text-center max-w-4xl mx-auto mb-16 space-y-6">
                        <div className="w-16 h-16 mx-auto bg-slate-50 text-purple-600 rounded-full flex items-center justify-center shadow-sm border border-slate-100 mb-6">
                            <Sofa className="w-8 h-8" />
                        </div>
                        <span className="text-purple-600 font-black tracking-widest uppercase text-sm block">Design Beautiful Home Interiors</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">Explore Interior Styles for Every Room</h2>
                        <p className="text-xl text-slate-600 font-medium leading-relaxed">Choosing the right interior design can be challenging. With Smart Room Styler, homeowners can explore different interior styles and design ideas for their living spaces without lifting a paintbrush.</p>
                        <Link href="/products/room-styler" className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-black text-lg transition-colors shadow-lg shadow-purple-200">
                            Design Your Home Interior <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: "Living Room", img: "/assets/global/luxury-living-room.webp", delay: 0 },
                            { name: "Kitchen", img: "/assets/global/scandi-kitchen.png", delay: 0.1 },
                            { name: "Home Office", img: "/assets/global/office-lobby.webp", delay: 0.2 },
                        ].map((room, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: room.delay }} className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden group shadow-lg border border-slate-100">
                                <Image src={room.img} alt={`Virtual Styling for ${room.name}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-black">{room.name}</h3>
                                    <p className="text-slate-200 text-sm font-bold flex gap-2 items-center"><Sparkles className="w-3 h-3" /> Visualize instantly</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURE 4: EXTERIORS - Image Right layout */}
            <section className="py-10 md:py-16 bg-slate-900 text-white relative border-y border-slate-800">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="container-custom px-4 max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div {...fadeUp} className="order-2 lg:order-2 relative h-[400px] lg:h-[550px] w-full">
                            <div className="absolute inset-0 bg-yellow-500/20 rounded-3xl translate-x-4 translate-y-4" />
                            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-800">
                                <Image src="/assets/global/villa-night.png" alt="Beautiful exterior home styling at night" fill className="object-cover" />
                            </div>
                        </motion.div>
                        <motion.div {...fadeUp} className="order-1 lg:order-1 space-y-8 max-w-xl relative z-10">
                            <div className="w-14 h-14 bg-yellow-500/20 text-yellow-500 rounded-2xl flex items-center justify-center border border-yellow-500/30">
                                <Sun className="w-7 h-7" />
                            </div>
                            <div>
                                <span className="text-yellow-500 font-black tracking-widest uppercase text-sm mb-2 block">Improve Your Home's Exterior Design</span>
                                <h2 className="text-4xl md:text-5xl lg:text-5xl font-black leading-tight tracking-tight">Visualize a Better-Looking Home</h2>
                            </div>
                            <p className="text-xl text-slate-300 font-medium leading-relaxed">Your home's exterior creates the first impression. Zlendo Realty's Interior & Exterior Design Intelligence can help homeowners explore design possibilities for the outside of their property.</p>
                            <p className="text-lg text-slate-400 font-medium leading-relaxed">Experiment with architectural styles, finishes, and design concepts to create a home that looks modern, functional, and visually appealing before you finalize materials.</p>
                            <Link href="/products/interiors-exteriors" className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white rounded-xl font-black text-lg transition-colors shadow-lg shadow-yellow-900/50">
                                Explore Exterior Design Ideas <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FEATURE 5: COST ESTIMATION - Bento Grid Logic */}
            <section className="py-10 md:py-16 bg-slate-50 border-y border-slate-100">
                <div className="container-custom px-4 max-w-6xl mx-auto">
                    <div className="bg-white rounded-[40px] shadow-xl p-8 lg:p-16 border border-slate-100">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div {...fadeUp} className="space-y-8">
                                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-50 text-emerald-700 font-black text-sm uppercase tracking-widest border border-emerald-100">
                                    <Coins className="w-4 h-4" /> Estimate Construction Costs
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Plan Your Budget More Effectively</h2>
                                <p className="text-xl text-slate-600 font-medium leading-relaxed">One of the biggest challenges for homeowners is understanding potential construction and design costs. Zlendo Realty's Smart Cost Estimator helps users get better insights into their project budget.</p>
                                <ul className="space-y-4">
                                    {["Plan your construction budget", "Understand potential project expenses", "Compare different design options", "Make more informed financial decisions", "Prepare before discussing with professionals"].map((li, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 font-bold text-lg">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full" /> {li}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/products/cost-estimator" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-black text-lg transition-colors shadow-lg shadow-emerald-200">
                                    Estimate Your Home Costs <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>

                            <motion.div {...fadeUp} className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="bg-slate-50 rounded-3xl p-6 h-48 border border-slate-100 flex flex-col justify-between">
                                        <Calculator className="w-8 h-8 text-slate-400" />
                                        <div>
                                            <div className="h-2 w-16 bg-emerald-400 rounded mb-2" />
                                            <p className="font-bold text-slate-900">Total Estimate</p>
                                        </div>
                                    </div>
                                    <div className="bg-slate-900 rounded-3xl p-6 h-64 border border-slate-800 flex flex-col justify-between text-white">
                                        <div className="grid grid-cols-2 gap-2 h-24 items-end pb-4 border-b border-slate-700">
                                            <div className="bg-emerald-500 w-full rounded-t-sm h-full" />
                                            <div className="bg-blue-500 w-full rounded-t-sm h-2/3" />
                                        </div>
                                        <div>
                                            <p className="font-black text-xl">Compare Options</p>
                                            <p className="text-sm font-medium text-slate-400 mt-1">Make informed choices.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="bg-emerald-500 rounded-3xl p-6 h-64 border border-emerald-600 flex flex-col justify-between text-white shadow-xl shadow-emerald-200">
                                        <div className="space-y-2">
                                            <div className="h-2 w-full bg-white/20 rounded" />
                                            <div className="h-2 w-3/4 bg-white/20 rounded" />
                                            <div className="h-2 w-5/6 bg-white/20 rounded" />
                                        </div>
                                        <div>
                                            <p className="font-black text-2xl">Line-item Detail</p>
                                            <p className="font-medium text-emerald-100">Clear breakdowns.</p>
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 rounded-3xl p-6 h-48 border border-slate-100 flex flex-col justify-between">
                                        <div className="text-slate-300">
                                            <Home className="w-8 h-8" />
                                        </div>
                                        <p className="font-bold text-slate-900">Budget Safe</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURE 6: WALKTHROUGHS - New Semantic Side-by-side Dark Layout */}
            <section className="py-10 md:py-16 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
                <div className="container-custom px-4 max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <motion.div {...fadeUp} className="lg:col-span-5 space-y-8">
                            <span className="text-teal-400 font-black tracking-widest uppercase text-sm block">Experience Before Construction</span>
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Take a Virtual Walkthrough of Your Future Home</h2>
                            <p className="text-xl text-slate-300 font-medium leading-relaxed">Imagine being able to experience your home before it is built. With Photorealistic Rendering and 8K Virtual Walkthroughs, you can visualize spaces in greater detail.</p>
                            <ul className="space-y-4 mb-8">
                                {["Visualize rooms realistically", "Understand overall design", "Review decisions before construction", "Communicate ideas clearly"].map((li, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-200 font-bold">
                                        <div className="w-2 h-2 rounded-full bg-teal-400" /> {li}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/products/virtual-walkthrough" className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 text-white rounded-xl font-black hover:bg-teal-400 transition-colors shadow-[0_10px_30px_rgba(45,212,191,0.2)]">
                                Explore Your Future Home <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                        <motion.div {...fadeUp} className="lg:col-span-7 relative h-[400px] md:h-[600px] rounded-[40px] overflow-hidden border border-slate-700 shadow-2xl group">
                            <Image src="/assets/global/interior-design-walkthrough-client.webp" alt="Virtual 8K Walkthrough" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                                <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 cursor-pointer group-hover:bg-white/30 transition-all">
                                    <MonitorPlay className="w-10 h-10 text-white ml-2" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SUMMARY CHECKLIST - Reimagined Asymmetrical Dual Column Layout */}
            <section className="py-10 md:py-16 bg-teal-50 border-y border-teal-100">
                <div className="container-custom px-4 max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        <motion.div {...fadeUp} className="lg:col-span-5 space-y-8">
                            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center border border-teal-200">
                                <Sparkles className="w-8 h-8" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">One Platform for Your Home Design Journey</h2>
                            <p className="text-xl text-teal-700 font-black tracking-wide uppercase">Plan. Design. Visualize. Build.</p>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed">Turn your ideas into a clearer vision. Explore smarter ways to plan, design, and visualize your future home with Zlendo Realty.</p>
                            <Link href="https://app.zlendorealty.com/signup" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-black text-lg hover:bg-slate-800 transition-all shadow-xl">
                                Get Started with Zlendo Realty <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        <motion.div {...fadeUp} className="lg:col-span-7">
                            <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col justify-center relative overflow-hidden">
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-50 rounded-full blur-[40px] pointer-events-none" />
                                <h3 className="text-2xl font-black text-slate-900 mb-8 pb-4 border-b border-slate-100 relative z-10">Zlendo Realty for Homeowners can help you:</h3>
                                <div className="grid md:grid-cols-2 gap-4 relative z-10">
                                    {[
                                        "Create smarter floor plans",
                                        "Convert 2D layouts into 3D designs",
                                        "Explore interior and exterior styles",
                                        "Estimate project costs",
                                        "Consider Vastu principles",
                                        "Generate realistic visualizations",
                                        "Experience virtual walkthroughs"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
                                            <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-500 flex items-center justify-center shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                                                <CheckCircle2 className="w-5 h-5" />
                                            </div>
                                            <span className="text-slate-700 font-bold mt-1 leading-snug">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FINAL SERVICE CTA (Floating Premium Card) */}
            <section className="py-10 md:py-16 bg-white">
                <div className="container-custom px-4 max-w-5xl mx-auto">
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[32px] p-10 md:p-16 text-center shadow-2xl shadow-slate-900/20 relative overflow-hidden border border-slate-700">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-zlendo-teal/20 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />

                        <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
                            <span className="text-teal-400 font-black tracking-widest uppercase text-sm mb-2 block">Get Complete Home Design Support</span>
                            <motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                                One Team for All Your Design Needs
                            </motion.h2>
                            <motion.p {...fadeUp} className="text-lg text-slate-300 font-medium leading-relaxed pb-4">
                                From floor planning and 3D visualization to interiors, exteriors, Vastu, cost estimation, and virtual walkthroughs, the Zlendo Realty team is here to help you at every step. Share your home design requirements with us and let our experts turn your ideas into a home you can visualize and feel confident about.
                            </motion.p>

                            <motion.div {...fadeUp}>
                                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-zlendo-teal text-white rounded-2xl font-black text-lg hover:scale-105 hover:bg-teal-400 shadow-[0_10px_30px_rgba(45,212,191,0.3)] transition-all">
                                    Talk to Our Design Team <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
