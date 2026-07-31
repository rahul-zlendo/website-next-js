'use client';

import { motion } from 'framer-motion';
import {
    Box, Layers, Sun, Eye, Users, Zap, Home, CheckCircle2,
    ArrowRight, ChevronDown, Upload, MessageSquare,
    PenTool, Shield, Clock, Sparkles, Star, Building2, Briefcase, Monitor
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useCountry } from '@/lib/context/CountryContext';

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function TwoDToThreeDClient() {
    const { getPath, country } = useCountry();
    const isIndiaSite = typeof country !== "undefined" ? country === "in" : false;
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const trustHighlights = [
        { icon: Box, label: 'Realistic 3D Models' },
        { icon: Layers, label: '2D to 3D Conversion' },
        { icon: Sun, label: 'Photorealistic Renders' },
        { icon: Eye, label: '3D Walkthroughs' },
        { icon: Users, label: 'Expert Design Team' },
    ];

    const services = [
        {
            icon: Home,
            title: 'Residential 3D Visualization',
            desc: 'Transform house plans into immersive 3D models with realistic interiors, exteriors, textures, lighting, and furniture layouts.',
        },
        {
            icon: Building2,
            title: 'Office & Commercial 3D Designs',
            desc: 'Convert office floor plans into professional 3D spaces for presentations, planning, and client approvals.',
        },
        {
            icon: Sun,
            title: 'Interior & Exterior Rendering',
            desc: 'Get photorealistic renders that showcase every detail of your project with modern finishes and architectural precision.',
        },
        {
            icon: Eye,
            title: 'Walkthrough & Presentation Views',
            desc: 'Create engaging 3D walkthroughs and presentation-ready visuals for clients, investors, or marketing purposes.',
        },
        {
            icon: Layers,
            title: 'Furniture & Space Planning',
            desc: 'Visualize layouts, furniture positioning, workspace optimization, and room functionality before execution.',
        },
    ];

    const whyChoose = [
        { icon: Star, title: 'High-Quality Photorealistic 3D Designs', desc: 'Studio-grade renders that look indistinguishable from real photographs.' },
        { icon: Clock, title: 'Fast Turnaround Time', desc: 'Most standard projects are delivered within a few business days.' },
        { icon: PenTool, title: 'Accurate Conversion from 2D Plans', desc: 'Pixel-perfect translation of your blueprints into detailed 3D models.' },
        { icon: Sparkles, title: 'Custom Design & Visualization Support', desc: 'Personalized revisions and styling to match your exact vision.' },
        { icon: Shield, title: 'Affordable Pricing for Homes & Offices', desc: 'Transparent pricing with no hidden costs. Suitable for every budget.' },
        { icon: Users, title: 'Suitable for Architects, Builders & Owners', desc: 'Trusted by professionals and homeowners across residential and commercial projects.' },
    ];

    const perfectFor = [
        { icon: Home, label: 'Homeowners' },
        { icon: PenTool, label: 'Architects & Interior Designers' },
        { icon: Building2, label: 'Builders & Real Estate Developers' },
        { icon: Briefcase, label: 'Office Renovation Projects' },
        { icon: Monitor, label: 'Commercial Space Planning' },
        { icon: Eye, label: 'Property Marketing Presentations' },
    ];

    const steps = [
        { num: '01', icon: Upload, title: 'Share Your 2D Plan', desc: 'Send us your floor plan, sketch, blueprint, or CAD file.' },
        { num: '02', icon: PenTool, title: 'Design & Modeling', desc: 'Our experts create a detailed 3D model with textures, lighting, and layout enhancements.' },
        { num: '03', icon: MessageSquare, title: 'Review & Revisions', desc: 'We refine the design based on your feedback.' },
        { num: '04', icon: Box, title: 'Final Delivery', desc: 'Receive high-resolution renders, walkthroughs, or presentation files ready for use.' },
    ];

    const testimonials = [
        {
            text: 'We shared our house floor plan and received a stunning 3D design within a few days. The detailing, lighting, and interior concepts were exactly what we imagined.',
            title: 'Amazing 3D Visualization Service',
            author: 'Ramesh K., Homeowner',
        },
        {
            text: 'The 3D office visualization helped our team finalize workspace layouts before construction started. Professional service and excellent communication throughout the project.',
            title: 'Perfect for Office Planning',
            author: 'Anita S., Business Owner',
        },
        {
            text: 'Their 2D to 3D conversion quality is exceptional. The renders looked realistic and helped us present our project confidently to clients and investors.',
            title: 'Highly Recommended for Architects & Builders',
            author: 'Vikram R., Architect',
        },
    ];

    const faqs = [
        { q: 'How long does 2D to 3D conversion take?', a: 'Project timelines depend on the complexity and size of the design. Most standard projects are delivered within a few days.' },
        { q: 'What file formats do you accept?', a: 'We accept sketches, PDFs, CAD files, floor plans, and image references.' },
        { q: 'Can you create realistic interior renders?', a: 'Yes, we provide high-quality photorealistic interior and exterior rendering services.' },
        { q: 'Do you offer revisions?', a: 'Yes, revisions are included to ensure the final design meets your expectations.' },
        { q: 'Is this service suitable for office spaces?', a: 'Absolutely. We create professional 3D visualizations for offices, commercial buildings, and retail spaces.' },
    ];

    return (
        <div className="bg-white selection:bg-zlendo-teal/10 font-nunito">

            {/* ═══ HERO SECTION ═══ */}
            <section className="relative overflow-hidden py-8 lg:py-8">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-white pointer-events-none" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/[0.04] blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="container-custom px-6 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                        {/* Left Column: Copy */}
                        <div className="lg:col-span-7 text-left flex flex-col items-start">
                            <motion.div {...fadeUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-blue-500/10 shadow-sm mb-6">
                                <Box className="w-4 h-4 text-blue-600" />
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">2D to 3D Conversion</span>
                            </motion.div>
                            <motion.h1 {...fadeUp} transition={{ delay: 0.1 }} className="text-[32px] md:text-[48px] lg:text-[60px] font-black text-zlendo-grey-dark leading-[1.05] tracking-tight mb-6">
                                Transform Your 2D House &amp; Office Plans Into{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-600">Stunning 3D Designs</span>
                            </motion.h1>
                            <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-zlendo-grey-medium font-medium leading-relaxed mb-8">
                                Bring your architectural ideas to life with realistic 3D visualization, interior rendering, and professional design conversion services for residential and commercial spaces.
                            </motion.p>
                            <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
                                <Link href={getPath('/services/2d-to-3d/consultation')} className="btn-primary py-4 px-8 text-base md:text-lg rounded-2xl text-center inline-flex items-center justify-center gap-2 font-bold shadow-lg shadow-zlendo-teal/15 hover:shadow-xl hover:shadow-zlendo-teal/25 transition-all">
                                    Start Your Project <ArrowRight className="w-5 h-5" />
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

                        {/* Right Column: Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-5 relative w-full flex justify-center mt-6 lg:mt-0"
                        >
                            <div className="relative w-full max-w-[480px]">
                                <div className="relative rounded-[36px] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/5 bg-white z-10">
                                    <img
                                        src="/assets/Home-Page/2d-to-3d-convertor.webp"
                                        alt="2D floor plan converted to stunning 3D visualization"
                                        className="w-full h-auto object-cover aspect-[4/3] hover:scale-102 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white text-left">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                                            <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">Instant 3D Conversion</p>
                                        </div>
                                        <p className="text-sm font-bold text-gray-200">See your future space before construction begins.</p>
                                    </div>
                                </div>

                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl -z-10" />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-zlendo-teal/15 rounded-full blur-2xl -z-10" />

                                <div className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white rounded-2xl p-4 shadow-xl border border-black/[0.04] z-20 flex items-center gap-3 animate-bounce [animation-duration:5s]">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                                        <Layers className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black uppercase tracking-wider text-gray-400">Output</p>
                                        <p className="text-xs font-black text-zlendo-grey-dark">4K Renders</p>
                                    </div>
                                </div>

                                <div className="absolute -right-6 top-12 bg-white rounded-2xl p-4 shadow-xl border border-black/[0.04] z-20 flex items-center gap-3 animate-bounce [animation-duration:6s]">
                                    <div className="w-10 h-10 rounded-xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal">
                                        <Star className="w-5 h-5 fill-zlendo-teal text-zlendo-teal" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black uppercase tracking-wider text-gray-400">Quality</p>
                                        <p className="text-xs font-black text-zlendo-grey-dark">Photorealistic</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ INTRO SECTION ═══ */}
            <section className="py-6 lg:py-6 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-500/[0.03] blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="container-custom px-6 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-5 relative order-last lg:order-first"
                        >
                            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/5 group">
                                <img
                                    src="/assets/floor-planner/3d-sketch.webp"
                                    alt="3D house visualization from 2D blueprint"
                                    className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute -inset-4 bg-blue-500/10 rounded-[36px] blur-lg -z-10 animate-pulse" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-7 text-left"
                        >
                            <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight mb-6">
                                Bring Your House &amp; Office{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-600">Designs to Life</span>
                            </h2>
                            <p className="text-lg md:text-xl text-zlendo-grey-medium font-medium leading-relaxed mb-6">
                                Have a floor plan, sketch, or CAD drawing? We convert your 2D architectural plans into realistic, high-quality 3D visualizations that help you see the final space before construction begins.
                            </p>
                            <p className="text-base md:text-lg text-zlendo-grey-medium font-medium leading-relaxed mb-6">
                                Whether it&apos;s a modern home, apartment, villa, office, retail space, or commercial project — our 2D to 3D conversion services make your ideas easy to visualize, present, and approve.
                            </p>
                            <p className="text-base md:text-lg text-zlendo-grey-dark font-bold mb-8">
                                See your future space before a single brick is laid.
                            </p>
                            <div>
                                <Link href={getPath('/services/2d-to-3d/consultation')} className="btn-primary py-4 px-10 text-lg rounded-2xl text-center inline-flex items-center gap-2">
                                    Get a Free 3D Preview <ArrowRight className="w-5 h-5" />
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
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight mb-4">
                            Our 2D to 3D <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-600">Conversion Services</span>
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
                        {services.map((s, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }}
                                className="bg-white rounded-[28px] p-8 border border-black/[0.04] shadow-lg shadow-black/[0.01] hover:shadow-xl hover:border-zlendo-teal/15 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal mb-6 group-hover:scale-110 transition-transform">
                                    <s.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-black text-zlendo-grey-dark mb-3">{s.title}</h3>
                                <p className="text-base text-zlendo-grey-medium font-medium leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div {...fadeUp} className="text-center">
                        <Link href={getPath('/services/2d-to-3d/consultation')} className="btn-primary py-4 px-10 text-lg rounded-2xl text-center inline-flex items-center gap-2">
                            Get Free Quote <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ═══ WHY CHOOSE SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="container-custom px-6 lg:px-12">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight">
                            Why Choose{' '}
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
                </div>
            </section>

            {/* ═══ PERFECT FOR SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-slate-50">
                <div className="container-custom px-6 lg:px-12">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight">
                            Perfect <span className="text-zlendo-teal italic">For</span>
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
                        {perfectFor.map((item, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.06 }}
                                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white border border-black/[0.04] shadow-sm hover:shadow-lg hover:border-zlendo-teal/20 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <span className="text-sm font-bold text-zlendo-grey-dark text-center leading-tight">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ PROCESS SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-[#F8FBFA]">
                <div className="container-custom px-6 lg:px-12">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight">
                            Our <span className="text-zlendo-teal italic">Process</span>
                        </h2>
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
                                    <h3 className="text-xl font-black text-zlendo-grey-dark mb-3">Step {step.num} — {step.title}</h3>
                                    <p className="text-base text-zlendo-grey-medium font-medium leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div {...fadeUp} className="text-center">
                        <Link href={getPath('/services/2d-to-3d/consultation')} className="btn-primary py-4 px-10 text-lg rounded-2xl text-center inline-flex items-center gap-2">
                            Get Started Now <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ═══ TESTIMONIALS SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="container-custom px-6 lg:px-12">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight">
                            What Our Clients <span className="text-zlendo-teal italic">Say</span>
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {testimonials.map((t, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}
                                className="bg-slate-50/50 rounded-[28px] p-8 border border-black/[0.04] shadow-lg shadow-black/[0.01] hover:shadow-xl hover:bg-white hover:border-zlendo-teal/15 transition-all duration-300"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                                </div>
                                <h4 className="text-lg font-black text-zlendo-grey-dark mb-3">&ldquo;{t.title}&rdquo;</h4>
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
                        </h2>
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
                <div className="absolute inset-0 bg-blue-500/5 blur-[100px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zlendo-teal/[0.08] blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="container-custom px-6 lg:px-12 relative z-10 text-center space-y-10">
                    <motion.h2 {...fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto">
                        Turn Your Vision Into{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-400">Reality</span>
                    </motion.h2>
                    <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-xl text-white/60 font-medium max-w-2xl mx-auto">
                        See your future home or office before construction starts. Our professional 2D to 3D conversion services help you make smarter design decisions with confidence.
                    </motion.p>
                    <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={getPath('/services/2d-to-3d/consultation')} className="btn-primary py-5 px-12 text-lg rounded-3xl text-center inline-flex items-center justify-center gap-2">
                            Get Free Quote <ArrowRight className="w-5 h-5" />
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
