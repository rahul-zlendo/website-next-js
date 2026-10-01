'use client';

import { motion } from 'framer-motion';
import {
    Compass, Home, Briefcase, Layers, CheckCircle2,
    ArrowRight, ChevronDown, Upload, Eye, Shield, Clock,
    Sparkles, Star, Sun, Move, Lightbulb, PaintBucket,
    Building2, MapPin, Zap, Users, Target, FileText
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useCountry } from '@/lib/context/CountryContext';

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function VastuConsultationClient() {
    const { country, getPath } = useCountry();
    const isIndiaSite = typeof country !== "undefined" ? country === "in" : false;
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const heroHighlights = [
        { icon: Target, label: 'Personalized Vastu Analysis' },
        { icon: Sparkles, label: 'AI-Powered Floor Plan Review' },
        { icon: Shield, label: 'Remedies Without Demolition' },
        { icon: Home, label: 'Home, Office & Commercial Vastu' },
        { icon: CheckCircle2, label: 'Trusted Across India' },
    ];

    const benefits = [
        { icon: Compass, title: 'Accurate Direction Analysis', desc: 'Get detailed directional mapping for every room and space.' },
        { icon: Layers, title: 'Floor Plan Optimization', desc: 'Receive practical recommendations to improve energy flow and space balance.' },
        { icon: Shield, title: 'Remedies Without Structural Changes', desc: 'Easy-to-follow corrections for existing homes without demolition.' },
        { icon: Eye, title: '3D Visualization', desc: 'Visualize Vastu-compliant modifications instantly.' },
        { icon: Users, title: 'Expert Consultation', desc: 'Guidance from experienced Vastu professionals.' },
        { icon: Zap, title: 'Faster Decision Making', desc: 'Avoid costly construction mistakes before execution.' },
    ];

    const residentialServices = ['Independent Houses', 'Villas', 'Apartments', 'Duplex Homes', 'Farmhouses'];
    const commercialServices = ['Offices', 'Retail Shops', 'Restaurants', 'Warehouses', 'Factories'];
    const specializedServices = ['Plot Vastu Analysis', 'New Construction Vastu', 'Interior Vastu Planning', 'Office Productivity Vastu', 'Vastu Corrections', 'Entrance & Room Placement Guidance'];

    const steps = [
        { num: '01', icon: Upload, title: 'Submit Your Floor Plan', desc: 'Upload your existing plan, sketch, or property layout.' },
        { num: '02', icon: Compass, title: 'Expert Analysis', desc: 'Our Vastu consultants review directional alignments, room placements, energy zones, and layout balance.' },
        { num: '03', icon: FileText, title: 'Receive Recommendations', desc: 'Get a detailed report with corrections, remedies, and optimized suggestions.' },
        { num: '04', icon: Eye, title: 'Visualize in 3D', desc: 'See your updated Vastu-compliant layout through interactive 3D visualization.' },
    ];

    const deliverables = [
        'Detailed Vastu Report',
        'Directional Energy Mapping',
        'Room Placement Recommendations',
        'Entrance & Kitchen Guidance',
        'Pooja Room Position Suggestions',
        'Color & Interior Recommendations',
        'Practical Remedies',
        '2D + 3D Visualization Support',
    ];

    const trustStats = [
        { value: '5000+', label: 'Design Users' },
        { value: 'AI', label: 'Powered Planning Tools' },
        { value: 'Fast', label: 'Turnaround' },
        { value: '24/7', label: 'Personalized Support' },
    ];

    const existingHomeRemedies = [
        'Furniture repositioning',
        'Entrance balancing',
        'Room energy correction',
        'Interior layout improvements',
        'Color & lighting guidance',
    ];

    const faqs = [
        { q: 'Do I need a complete floor plan?', a: 'No. Even a hand-drawn sketch or basic layout works.' },
        { q: 'Can you help without demolition?', a: 'Yes. We prioritize practical, non-destructive remedies whenever possible.' },
        { q: 'Is this service available online?', a: 'Yes. Consultations can be done remotely across India and internationally.' },
        { q: 'Do you provide Vastu for apartments?', a: 'Yes. We support apartments, villas, independent homes, and offices.' },
        { q: 'Will I receive a detailed report?', a: "Yes. You'll receive a complete consultation report with actionable suggestions." },
    ];

    return (
        <div className="bg-white selection:bg-zlendo-teal/10 font-nunito">
            {/* ═══ HERO SECTION ═══ */}
            <section className="relative overflow-hidden py-8 lg:py-8">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-white pointer-events-none" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zlendo-teal/[0.04] blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="container-custom px-6 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                        <div className="lg:col-span-7 text-left flex flex-col items-start">
                            <motion.div {...fadeUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-zlendo-teal/10 shadow-sm mb-6">
                                <Compass className="w-4 h-4 text-zlendo-teal" />
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-zlendo-teal">Vastu Consultation Services</span>
                            </motion.div>
                            <motion.h1 {...fadeUp} transition={{ delay: 0.1 }} className="text-[32px] md:text-[48px] lg:text-[60px] font-black text-zlendo-grey-dark leading-[1.05] tracking-tight mb-6">
                                Design a Vastu-Compliant Home with{' '}
                                <span className="text-zlendo-teal italic">Expert Guidance</span>
                            {isIndiaSite && <span className="sr-only"> (India)</span>}</motion.h1>
                            <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-zlendo-grey-medium font-medium leading-relaxed mb-8">
                                Get personalized Vastu consultation for your home, apartment, villa, office, or commercial space.
                                Our certified Vastu experts help you create balanced, harmonious, and positive living spaces aligned with traditional Indian architectural principles.
                            </motion.p>
                            <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
                                <Link href={getPath('/services/vastu-consultation/consultation')} className="btn-primary py-4 px-8 text-base md:text-lg rounded-2xl text-center inline-flex items-center justify-center gap-2 font-bold shadow-lg shadow-zlendo-teal/15 hover:shadow-xl hover:shadow-zlendo-teal/25 transition-all">
                                    Book Free Vastu Consultation <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link href={getPath('/contact')} className="btn-orange py-4 px-8 text-base md:text-lg rounded-2xl text-center font-bold shadow-lg shadow-zlendo-orange/10 hover:shadow-xl transition-all">
                                    Contact Our Experts
                                </Link>
                            </motion.div>
                            <motion.div {...fadeUp} transition={{ delay: 0.4 }} className="flex flex-wrap gap-3">
                                {heroHighlights.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-black/[0.04] shadow-sm">
                                        <item.icon className="w-3.5 h-3.5 text-zlendo-teal shrink-0" />
                                        <span className="text-xs font-bold text-zlendo-grey-dark whitespace-nowrap">{item.label}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-5 relative w-full flex justify-center mt-6 lg:mt-0"
                        >
                            <div className="relative w-full max-w-[480px]">
                                <div className="relative rounded-[36px] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/5 bg-white z-10">
                                    <img
                                        src="/assets/global/floor-plan-discussion.webp"
                                        alt="Vastu consultation with floor plan analysis"
                                        className="w-full h-auto object-cover aspect-[4/3] hover:scale-102 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white text-left">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                                            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Certified Experts</p>
                                        </div>
                                        <p className="text-sm font-bold text-gray-200">Align your spaces with Vastu Shastra for harmony and positivity.</p>
                                    </div>
                                </div>
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-zlendo-teal/10 rounded-full blur-xl -z-10" />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-zlendo-orange/15 rounded-full blur-2xl -z-10" />
                                <div className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white rounded-2xl p-4 shadow-xl border border-black/[0.04] z-20 flex items-center gap-3 animate-bounce [animation-duration:5s]">
                                    <div className="w-10 h-10 rounded-xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal">
                                        <Compass className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black uppercase tracking-wider text-gray-400">Direction</p>
                                        <p className="text-xs font-black text-zlendo-grey-dark">Energy Mapping</p>
                                    </div>
                                </div>
                                <div className="absolute -right-6 top-12 bg-white rounded-2xl p-4 shadow-xl border border-black/[0.04] z-20 flex items-center gap-3 animate-bounce [animation-duration:6s]">
                                    <div className="w-10 h-10 rounded-xl bg-zlendo-orange/10 flex items-center justify-center text-zlendo-orange">
                                        <Star className="w-5 h-5 fill-zlendo-orange text-zlendo-orange" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black uppercase tracking-wider text-gray-400">Balance</p>
                                        <p className="text-xs font-black text-zlendo-grey-dark">Harmony & Peace</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ WHY CHOOSE SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-zlendo-teal/[0.03] blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
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
                                    src="/assets/global/floor-plan-consultation.webp"
                                    alt="Traditional Vastu Shastra combined with modern technology"
                                    className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute -inset-4 bg-zlendo-teal/10 rounded-[36px] blur-lg -z-10 animate-pulse" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-7 text-left"
                        >
                            <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight mb-6">
                                Why Choose Zlendo Realty for{' '}
                                <span className="text-zlendo-teal italic">Vastu Consultation?</span>
                            {isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
                            <h3 className="text-lg md:text-xl text-zlendo-teal font-bold mb-4">Traditional Wisdom + Modern Technology</h3>
                            <p className="text-lg md:text-xl text-zlendo-grey-medium font-medium leading-relaxed mb-6">
                                At Zlendo Realty, we combine ancient Vastu Shastra principles with AI-powered floor planning and 3D visualization tools to help you make confident decisions before construction or renovation.
                            </p>
                            <p className="text-base md:text-lg text-zlendo-grey-dark font-bold mb-8">
                                Get expert-backed recommendations that blend tradition with technology.
                            </p>
                            <div>
                                <Link href={getPath('/services/vastu-consultation/consultation')} className="btn-primary py-4 px-10 text-lg rounded-2xl text-center inline-flex items-center gap-2">
                                    Get Free Consultation <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ BENEFITS GRID ═══ */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="container-custom px-6 lg:px-12">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight">
                            Benefits of Our{' '}
                            <span className="text-zlendo-teal italic">Vastu Consultation</span>
                        {isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
                    </motion.div>
                    <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto mb-10">
                        {benefits.map((item, i) => (
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
                        <Link href={getPath('/services/vastu-consultation/consultation')} className="btn-primary py-4 px-10 text-lg rounded-2xl text-center inline-flex items-center gap-2">
                            Book Your Vastu Review Today <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ═══ OUR VASTU SERVICES ═══ */}
            <section className="py-12 lg:py-16 bg-zlendo-mint/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#29b0a1_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />
                <div className="container-custom px-6 lg:px-12 relative z-10">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight mb-6">
                            Our Vastu{' '}<span className="text-zlendo-teal italic">Consultation Services</span>
                        {isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Residential Vastu */}
                        <div className="bg-white rounded-[32px] border border-black/[0.04] shadow-xl shadow-black/[0.02] p-8">
                            <div className="w-14 h-14 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal mb-6">
                                <Home className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black text-zlendo-grey-dark mb-4">Residential Vastu</h3>
                            <p className="text-base text-zlendo-grey-medium font-medium leading-relaxed mb-6">
                                Vastu guidance for homes, apartments, and villas to ensure harmony and positive energy flow.
                            </p>
                            <ul className="space-y-2.5 mb-6">
                                {residentialServices.map((item, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm text-zlendo-grey-dark font-semibold">
                                        <CheckCircle2 className="w-4 h-4 text-zlendo-teal shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Commercial Vastu */}
                        <div className="bg-white rounded-[32px] border border-black/[0.04] shadow-xl shadow-black/[0.02] p-8">
                            <div className="w-14 h-14 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal mb-6">
                                <Briefcase className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black text-zlendo-grey-dark mb-4">Commercial Vastu</h3>
                            <p className="text-base text-zlendo-grey-medium font-medium leading-relaxed mb-6">
                                Optimize commercial spaces for productivity, prosperity, and business growth with Vastu principles.
                            </p>
                            <ul className="space-y-2.5 mb-6">
                                {commercialServices.map((item, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm text-zlendo-grey-dark font-semibold">
                                        <CheckCircle2 className="w-4 h-4 text-zlendo-teal shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Specialized Services */}
                        <div className="bg-white rounded-[32px] border border-black/[0.04] shadow-xl shadow-black/[0.02] p-8">
                            <div className="w-14 h-14 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal mb-6">
                                <Layers className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black text-zlendo-grey-dark mb-4">Specialized Services</h3>
                            <p className="text-base text-zlendo-grey-medium font-medium leading-relaxed mb-6">
                                Targeted Vastu solutions for specific needs including plot analysis, corrections, and new constructions.
                            </p>
                            <ul className="space-y-2.5 mb-6">
                                {specializedServices.map((item, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm text-zlendo-grey-dark font-semibold">
                                        <CheckCircle2 className="w-4 h-4 text-zlendo-teal shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <motion.div {...fadeUp} className="text-center mt-10">
                        <Link href={getPath('/services/vastu-consultation/consultation')} className="btn-primary py-4 px-10 text-lg rounded-2xl text-center inline-flex items-center gap-2">
                            Talk to a Vastu Expert <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ═══ PROCESS SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-[#F8FBFA]">
                <div className="container-custom px-6 lg:px-12">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight">
                            How Our Vastu Consultation{' '}
                            <span className="text-zlendo-teal italic">Works</span>
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
                                    <p className="text-base text-zlendo-grey-medium font-medium leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div {...fadeUp} className="text-center">
                        <Link href={getPath('/services/vastu-consultation/consultation')} className="btn-primary py-4 px-10 text-lg rounded-2xl text-center inline-flex items-center gap-2">
                            Upload Floor Plan Now <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ═══ DELIVERABLES SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="container-custom px-6 lg:px-12">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight">
                            What You&apos;ll{' '}
                            <span className="text-zlendo-teal italic">Receive</span>
                        {isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
                    </motion.div>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {deliverables.map((item, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-4 p-5 bg-slate-50/50 rounded-2xl border border-black/[0.04] shadow-sm hover:shadow-md hover:bg-white hover:border-zlendo-teal/15 transition-all duration-300"
                            >
                                <CheckCircle2 className="w-5 h-5 text-zlendo-teal shrink-0" />
                                <span className="text-base font-bold text-zlendo-grey-dark">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ TRUST / TESTIMONIALS SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-slate-50">
                <div className="container-custom px-6 lg:px-12">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight mb-4">
                            Why Homeowners{' '}
                            <span className="text-zlendo-teal italic">Trust Us</span>
                        {isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
                        <p className="text-lg text-zlendo-grey-medium font-medium">Trusted by Families, Architects & Builders</p>
                    </motion.div>

                    {/* Trust Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                        {trustStats.map((stat, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}
                                className="text-center p-6 bg-white rounded-[24px] border border-black/[0.04] shadow-md"
                            >
                                <p className="text-2xl md:text-3xl font-black text-zlendo-teal mb-1">{stat.value}</p>
                                <p className="text-sm font-bold text-zlendo-grey-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Testimonial */}
                    <motion.div {...fadeUp}
                        className="max-w-3xl mx-auto bg-white rounded-[28px] p-8 md:p-10 border border-black/[0.04] shadow-xl shadow-black/[0.02]"
                    >
                        <div className="flex gap-1 mb-5">
                            {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                        </div>
                        <p className="text-lg text-zlendo-grey-medium font-medium leading-relaxed mb-6 italic">
                            &ldquo;Zlendo Realty helped us redesign our floor plan according to Vastu without changing the entire structure. The recommendations were practical and easy to implement.&rdquo;
                        </p>
                        <p className="text-sm font-black text-zlendo-grey-dark">— Homeowner, Chennai</p>
                    </motion.div>
                </div>
            </section>

            {/* ═══ EXISTING HOMES SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="container-custom px-6 lg:px-12">
                    <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeUp}>
                            <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight mb-4">
                                Vastu Consultation for{' '}
                                <span className="text-zlendo-teal italic">Existing Homes</span>
                            {isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
                            <p className="text-lg text-zlendo-grey-medium font-medium leading-relaxed mb-2">Already living in your home?</p>
                            <p className="text-xl text-zlendo-grey-dark font-bold mb-6">No problem.</p>
                            <p className="text-base text-zlendo-grey-medium font-medium leading-relaxed mb-8">
                                We provide practical Vastu remedies and optimization suggestions without requiring major reconstruction.
                            </p>
                            <Link href={getPath('/services/vastu-consultation/consultation')} className="btn-primary py-4 px-10 text-lg rounded-2xl text-center inline-flex items-center gap-2">
                                Get Remedies for Existing Home <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                        <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                            <div className="space-y-4">
                                <h3 className="text-lg font-black text-zlendo-grey-dark mb-4">Solutions Include:</h3>
                                {existingHomeRemedies.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-slate-50/50 rounded-2xl border border-black/[0.04] shadow-sm hover:shadow-md hover:bg-white hover:border-zlendo-teal/15 transition-all duration-300">
                                        <div className="w-10 h-10 rounded-xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal shrink-0">
                                            <Sparkles className="w-5 h-5" />
                                        </div>
                                        <span className="text-base font-bold text-zlendo-grey-dark">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ FAQ SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-slate-50">
                <div className="container-custom px-6 lg:px-12">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight">
                            Frequently Asked{' '}
                            <span className="text-zlendo-teal italic">Questions</span>
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
                        Build a Home with Balance,{' '}
                        <span className="text-zlendo-teal italic">Positivity & Peace</span>
                    {isIndiaSite && <span className="sr-only"> (India)</span>}</motion.h2>
                    <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-xl text-white/60 font-medium max-w-2xl mx-auto">
                        Get expert Vastu consultation tailored to your property and lifestyle.
                    </motion.p>

                    {/* Contact Highlights */}
                    <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                        {['Online Consultation Available', 'Fast Response', 'Personalized Guidance', 'AI + Expert Powered'].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                                <CheckCircle2 className="w-3.5 h-3.5 text-zlendo-teal" />
                                <span className="text-xs font-bold text-white/80">{item}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={getPath('/services/vastu-consultation/consultation')} className="btn-primary py-5 px-12 text-lg rounded-3xl text-center inline-flex items-center justify-center gap-2">
                            Book Free Consultation <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href={getPath('/contact')} className="btn-orange py-5 px-12 text-lg rounded-3xl text-center">
                            Speak to Expert
                        </Link>
                        {/* <Link href={getPath('/services/vastu-consultation/consultation')} className="py-5 px-12 text-lg rounded-3xl text-center text-white border border-white/20 hover:bg-white/10 transition-all font-bold inline-flex items-center justify-center gap-2">
                            Upload Floor Plan <Upload className="w-5 h-5" />
                        </Link> */}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
