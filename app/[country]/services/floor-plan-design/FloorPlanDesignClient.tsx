'use client';

import { motion } from 'framer-motion';
import {
    PenTool, Box, Sun, Eye, Users, Zap, Home, Layers, CheckCircle2,
    ArrowRight, ChevronDown, Upload, MessageSquare,
    Maximize2, Shield, Clock, Sparkles, Star
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useCountry } from '@/lib/context/CountryContext';

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function FloorPlanDesignClient() {
    const { getPath, country } = useCountry();
    const isIndiaSite = typeof country !== "undefined" ? country === "in" : false;
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const trustHighlights = [
        { icon: Home, label: 'Personalized Home Layouts' },
        { icon: Layers, label: '2D + 3D Floor Plans' },
        { icon: Shield, label: 'Vastu-Friendly Design Options' },
        { icon: Users, label: 'Expert Design Assistance' },
        { icon: Zap, label: 'Fast Turnaround' },
    ];

    const services = [
        { title: 'Independent Houses', icon: Home },
        { title: 'Villas', icon: Sparkles },
        { title: 'Duplex Homes', icon: Layers },
        { title: 'Apartments', icon: Box },
        { title: 'Rental Properties', icon: Eye },
    ];

    const whyChoose = [
        { icon: PenTool, title: 'Personalized Design Approach', desc: 'Every family has different needs. We create floor plans tailored to your lifestyle, plot size, and future requirements.' },
        { icon: Maximize2, title: 'Better Space Optimization', desc: 'We help maximize usable space while maintaining comfort, movement flow, and aesthetics.' },
        { icon: Eye, title: 'Visualize Before Construction', desc: 'Avoid expensive construction changes by reviewing your home layout in advance.' },
        { icon: Users, title: 'Expert Guidance Throughout', desc: 'Our team supports you from initial planning to final layout approval.' },
        { icon: Clock, title: 'Faster Planning Process', desc: 'Get professionally designed floor plans without long architectural delays.' },
    ];

    const steps = [
        { num: '01', icon: Upload, title: 'Share Your Requirements', items: ['Plot dimensions', 'Floor requirements', 'Room preferences', 'Budget expectations', 'Vastu needs (optional)'] },
        { num: '02', icon: MessageSquare, title: 'Consultation with Design Experts', items: ['Layout possibilities', 'Optimization ideas', 'Planning recommendations'] },
        { num: '03', icon: PenTool, title: 'Receive Draft Floor Plans', items: ['Customized 2D layouts', 'Review and feedback', 'Iteration support'] },
        { num: '04', icon: Box, title: 'Finalize & Visualize in 3D', items: ['Final layout approval', 'Immersive 3D experience', 'Construction-ready plans'] },
    ];

    const testimonials = [
        { text: 'Zlendo Realty helped us visualize our duplex before construction. The floor planning process was smooth and practical.', author: 'Homeowner, Bangalore' },
        { text: 'Their team optimized our small plot beautifully. We saved space and improved ventilation significantly.', author: 'Homeowner, Chennai' },
        { text: 'Being an NRI, the 3D visualization helped us confidently finalize our house layout remotely.', author: 'NRI Client, Dubai' },
    ];

    const faqs = [
        { q: 'Can you design floor plans for small plots?', a: 'Yes. We specialize in optimizing layouts for compact and irregular plot sizes.' },
        { q: 'Do you provide 3D floor plan visualization?', a: 'Yes. We convert approved layouts into immersive 3D visualizations.' },
        { q: 'Can you help with Vastu-based planning?', a: 'Absolutely. We can incorporate Vastu preferences into your floor plan design.' },
        { q: 'Is this suitable for duplex homes?', a: 'Yes. We design duplex, villa, and multi-floor residential layouts.' },
        { q: 'Can I modify the design later?', a: 'Yes. We provide revision support during the planning phase.' },
    ];

    return (
        <div className="bg-white selection:bg-zlendo-teal/10 font-nunito">

            {/* ═══ HERO SECTION ═══ */}
            <section className="relative overflow-hidden py-8 lg:py-8">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-white pointer-events-none" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zlendo-teal/[0.04] blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="container-custom px-6 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                        {/* Left Column: Copy */}
                        <div className="lg:col-span-7 text-left flex flex-col items-start">
                            <motion.div {...fadeUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-zlendo-teal/10 shadow-sm mb-6">
                                <PenTool className="w-4 h-4 text-zlendo-teal" />
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-zlendo-teal">Professional Floor Planning</span>
                            </motion.div>
                            <motion.h1 {...fadeUp} transition={{ delay: 0.1 }} className="text-[32px] md:text-[48px] lg:text-[60px] font-black text-zlendo-grey-dark leading-[1.05] tracking-tight mb-6">
                                Get Your Dream Home Floor Plan{' '}
                                <span className="text-zlendo-teal italic">Designed by Experts</span>
                            {isIndiaSite && <span className="sr-only"> (India)</span>}</motion.h1>
                            {/* <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-zlendo-grey-medium font-medium leading-relaxed mb-4">
                                From plot planning to complete house layouts, Zlendo Realty helps homeowners create smart, functional, and Vastu-friendly floor plans tailored to their lifestyle and budget.
                            </motion.p> */}
                            <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-zlendo-grey-medium font-medium leading-relaxed mb-8">
                                Whether you&apos;re building a new home, renovating, or planning a duplex, our design experts turn your ideas into professional 2D &amp; 3D floor plans.
                            </motion.p>
                            {/* <motion.p {...fadeUp} transition={{ delay: 0.25 }} className="text-base md:text-lg text-zlendo-grey-medium font-medium mb-8">
                                Whether you&apos;re building a new home, renovating, or planning a duplex, our design experts turn your ideas into professional 2D &amp; 3D floor plans.
                            </motion.p> */}
                            <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
                                <Link href={getPath('/services/floor-plan-design/consultation')} className="btn-primary py-4 px-8 text-base md:text-lg rounded-2xl text-center inline-flex items-center justify-center gap-2 font-bold shadow-lg shadow-zlendo-teal/15 hover:shadow-xl hover:shadow-zlendo-teal/25 transition-all">
                                    Book Free Consultation <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link href={getPath('/contact')} className="btn-orange py-4 px-8 text-base md:text-lg rounded-2xl text-center font-bold shadow-lg shadow-zlendo-orange/10 hover:shadow-xl transition-all">
                                    Contact Our Experts
                                </Link>
                            </motion.div>
                            <motion.div {...fadeUp} transition={{ delay: 0.4 }} className="flex flex-wrap gap-3">
                                {trustHighlights.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-black/[0.04] shadow-sm">
                                        <item.icon className="w-3.5 h-3.5 text-zlendo-teal shrink-0" />
                                        <span className="text-xs font-bold text-zlendo-grey-dark whitespace-nowrap">{item.label}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Right Column: Visual Elements (Human interaction & overlay) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-5 relative w-full flex justify-center mt-6 lg:mt-0"
                        >
                            <div className="relative w-full max-w-[480px]">
                                {/* Main Image Card */}
                                <div className="relative rounded-[36px] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/5 bg-white z-10">
                                    <img
                                        src="/assets/global/floor-plan-consultation.webp"
                                        alt="Floor plan consultation with Zlendo Realty design experts"
                                        className="w-full h-auto object-cover aspect-[4/3] hover:scale-102 transition-transform duration-500"
                                    />
                                    {/* Subtitle overlay */}
                                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white text-left">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                                            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Live 1-on-1 Consultation</p>
                                        </div>
                                        <p className="text-sm font-bold text-gray-200">Our design experts walk you through every layout optimization option.</p>
                                    </div>
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-zlendo-teal/10 rounded-full blur-xl -z-10" />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-zlendo-orange/15 rounded-full blur-2xl -z-10" />

                                {/* Float Badge 1 */}
                                <div className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white rounded-2xl p-4 shadow-xl border border-black/[0.04] z-20 flex items-center gap-3 animate-bounce [animation-duration:5s]">
                                    <div className="w-10 h-10 rounded-xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black uppercase tracking-wider text-gray-400">Support</p>
                                        <p className="text-xs font-black text-zlendo-grey-dark">Expert Guided</p>
                                    </div>
                                </div>

                                {/* Float Badge 2 */}
                                <div className="absolute -right-6 top-12 bg-white rounded-2xl p-4 shadow-xl border border-black/[0.04] z-20 flex items-center gap-3 animate-bounce [animation-duration:6s]">
                                    <div className="w-10 h-10 rounded-xl bg-zlendo-orange/10 flex items-center justify-center text-zlendo-orange">
                                        <Star className="w-5 h-5 fill-zlendo-orange text-zlendo-orange" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black uppercase tracking-wider text-gray-400">Vastu Score</p>
                                        <p className="text-xs font-black text-zlendo-grey-dark">100% Compliant</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ INTRO SECTION ═══ */}
            <section className="py-6 lg:py-6 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-zlendo-teal/[0.03] blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="container-custom px-6 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        {/* Image on the left on desktop */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-5 relative order-last lg:order-first"
                        >
                            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/5 group">
                                <img
                                    src="/assets/global/floor-plan-discussion.webp"
                                    alt="Client discussing floor plan blueprint with expert designer"
                                    className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute -inset-4 bg-zlendo-teal/10 rounded-[36px] blur-lg -z-10 animate-pulse" />
                        </motion.div>

                        {/* Text on the right on desktop */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-7 text-left"
                        >
                            <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight mb-6">
                                Designing a Home Starts with the{' '}
                                <span className="text-zlendo-teal italic">Right Floor Plan</span>
                            {isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
                            <p className="text-lg md:text-xl text-zlendo-grey-medium font-medium leading-relaxed mb-6">
                                A well-designed floor plan improves space utilization, natural lighting, ventilation, privacy, and future functionality.
                            </p>
                            <p className="text-base md:text-lg text-zlendo-grey-medium font-medium leading-relaxed mb-6">
                                At Zlendo Realty, we work directly with homeowners to design practical and visually optimized floor plans that match your family needs and plot dimensions.
                            </p>
                            <p className="text-base md:text-lg text-zlendo-grey-dark font-bold mb-8">
                                We help you visualize your future home before construction begins.
                            </p>
                            <div>
                                <Link href={getPath('/services/floor-plan-design/consultation')} className="btn-primary py-4 px-10 text-lg rounded-2xl text-center inline-flex items-center gap-2">
                                    Talk to a Floor Plan Expert <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ SERVICES SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-zlendo-mint/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#29b0a1_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />
                <div className="container-custom px-6 lg:px-12 relative z-10">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight mb-6">
                            Our Floor Plan <span className="text-zlendo-teal italic">Design Services</span>
                        {isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
                    </motion.div>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-12 gap-8 items-center">
                            {/* Left Image Column */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="lg:col-span-5 relative"
                            >
                                <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/5 group">
                                    <img
                                        src="/assets/2d_hero.webp"
                                        alt="2D Floor Plan Design Layout"
                                        className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="absolute -inset-4 bg-zlendo-orange/5 rounded-[36px] blur-lg -z-10" />
                            </motion.div>

                            {/* Right Content Column */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="lg:col-span-7"
                            >
                                <div className="bg-white rounded-[32px] border border-black/[0.04] shadow-xl shadow-black/[0.02] p-8 lg:p-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal">
                                            <PenTool className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl lg:text-3xl font-black text-zlendo-grey-dark">2D Floor Plan Design</h3>
                                    </div>
                                    <p className="text-lg text-zlendo-grey-medium font-medium leading-relaxed mb-6">
                                        Get professionally designed 2D house plans with accurate room layouts, dimensions, wall placements, and circulation planning.
                                    </p>
                                    <p className="text-sm font-black uppercase tracking-widest text-zlendo-grey-dark/40 mb-4">Perfect For</p>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
                                        {services.map((s, i) => (
                                            <div key={i} className="flex flex-col items-center gap-2.5 p-3 rounded-2xl bg-slate-50/80 border border-black/[0.03] hover:border-zlendo-teal/20 transition-all group">
                                                <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center text-zlendo-teal group-hover:scale-110 transition-transform">
                                                    <s.icon className="w-5 h-5" />
                                                </div>
                                                <span className="text-[11px] font-bold text-zlendo-grey-dark text-center leading-tight">{s.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link href={getPath('/services/floor-plan-design/consultation')} className="btn-primary py-4 px-10 text-lg rounded-2xl text-center inline-flex items-center gap-2">
                                        Get My 2D Plan <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ WHY CHOOSE SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="container-custom px-6 lg:px-12">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight">
                            Why Homeowners Choose{' '}
                            <span className="text-zlendo-teal italic">Zlendo Realty{isIndiaSite && <span className="sr-only"> Local</span>}</span>
                        </h2>
                    </motion.div>
                    <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto mb-10">
                        {whyChoose.map((item, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }}
                                className="bg-slate-50/50 rounded-[28px] p-8 border border-black/[0.04] shadow-lg shadow-black/[0.01] hover:shadow-xl hover:bg-white hover:border-zlendo-teal/15 transition-all duration-300 group flex flex-col items-center text-center w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-black text-zlendo-grey-dark mb-3">{item.title}</h3>
                                <p className="text-base text-zlendo-grey-medium font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div {...fadeUp} className="text-center">
                        <Link href={getPath('/services/floor-plan-design/consultation')} className="btn-primary py-4 px-10 text-lg rounded-2xl text-center inline-flex items-center gap-2">
                            Start My Home Planning <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ═══ PROCESS SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-[#F8FBFA]">
                <div className="container-custom px-6 lg:px-12">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight">
                            How Our Floor Plan Design{' '}
                            <span className="text-zlendo-teal italic">Process Works</span>
                        {isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
                    </motion.div>
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        {steps.map((step, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-[28px] p-8 border border-black/[0.04] shadow-lg shadow-black/[0.02] relative overflow-hidden group hover:border-zlendo-teal/10 transition-all"
                            >
                                <span className="absolute top-4 right-6 text-[80px] font-black text-zlendo-teal/[0.06] leading-none pointer-events-none">{step.num}</span>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal mb-5 group-hover:scale-110 transition-transform">
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-black text-zlendo-grey-dark mb-4">Step {step.num} — {step.title}</h3>
                                    <ul className="space-y-2.5">
                                        {step.items.map((item, j) => (
                                            <li key={j} className="flex items-center gap-3 text-base text-zlendo-grey-medium font-medium">
                                                <CheckCircle2 className="w-4 h-4 text-zlendo-teal shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div {...fadeUp} className="text-center">
                        <Link href={getPath('/services/floor-plan-design/consultation')} className="btn-primary py-4 px-10 text-lg rounded-2xl text-center inline-flex items-center gap-2">
                            Book My Consultation <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ═══ TESTIMONIALS SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="container-custom px-6 lg:px-12">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight">
                            Homeowners Trust{' '}
                            <span className="text-zlendo-teal italic">Zlendo Realty{isIndiaSite && <span className="sr-only"> Local</span>}</span>
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {testimonials.map((t, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}
                                className="bg-slate-50/50 rounded-[28px] p-8 border border-black/[0.04] shadow-lg shadow-black/[0.01] hover:shadow-xl hover:bg-white hover:border-zlendo-teal/15 transition-all duration-300"
                            >
                                <div className="flex gap-1 mb-5">
                                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                                </div>
                                <p className="text-base text-zlendo-grey-medium font-medium leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                                <p className="text-sm font-black text-zlendo-grey-dark">— {t.author}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FAQ SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-slate-50">
                <div className="container-custom px-6 lg:px-12">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight">
                            Frequently Asked <span className="text-zlendo-teal italic">Questions</span>
                        {isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
                    </motion.div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }}
                                className="bg-white rounded-2xl border border-black/[0.04] shadow-sm overflow-hidden"
                            >
                                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="text-lg font-bold text-zlendo-grey-dark pr-4">{faq.q}</span>
                                    <ChevronDown className={`w-5 h-5 text-zlendo-teal shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                                    <p className="px-6 text-base text-zlendo-grey-medium font-medium leading-relaxed">{faq.a}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FINAL CTA SECTION ═══ */}
            <section className="py-16 lg:py-20 bg-zlendo-grey-dark relative overflow-hidden rounded-[80px_80px_0_0]">
                <div className="absolute inset-0 bg-zlendo-teal/5 blur-[100px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zlendo-teal/[0.08] blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="container-custom px-6 lg:px-12 relative z-10 text-center space-y-10">
                    <motion.h2 {...fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto">
                        Plan Your Dream Home with{' '}
                        <span className="text-zlendo-teal italic">Confidence</span>
                    {isIndiaSite && <span className="sr-only"> (India)</span>}</motion.h2>
                    <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-xl text-white/60 font-medium max-w-2xl mx-auto">
                        Get expert-designed floor plans that combine functionality, comfort, and modern living aesthetics.
                    </motion.p>
                    <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={getPath('/services/floor-plan-design/consultation')} className="btn-primary py-5 px-12 text-lg rounded-3xl text-center inline-flex items-center justify-center gap-2">
                            Book Free Consultation <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href={getPath('/contact')} className="btn-orange py-5 px-12 text-lg rounded-3xl text-center">
                            Contact Us Now
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
