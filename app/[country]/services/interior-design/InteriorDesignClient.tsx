'use client';

import { motion } from 'framer-motion';
import {
    PenTool, Box, Sun, Eye, Users, Zap, Home, Layers, CheckCircle2,
    ArrowRight, ChevronDown, Upload, MessageSquare,
    Maximize2, Shield, Clock, Sparkles, Star, Sofa, PaintBucket, Briefcase
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useCountry } from '@/lib/context/CountryContext';

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function InteriorDesignClient() {
    const { getPath } = useCountry();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const trustHighlights = [
        { icon: Sofa, label: 'Customized Space Planning' },
        { icon: Sparkles, label: 'Modern & Functional' },
        { icon: CheckCircle2, label: 'Quality Execution' },
        { icon: Clock, label: 'On-Time Delivery' },
        { icon: Shield, label: 'Transparent Pricing' },
    ];

    const services = [
        { title: 'Living Rooms', icon: Sofa },
        { title: 'Bedrooms', icon: Home },
        { title: 'Modular Kitchens', icon: Box },
        { title: 'Offices', icon: Briefcase },
        { title: 'Commercial', icon: Layers },
    ];

    const whyChoose = [
        { icon: PenTool, title: 'Customized Interior Solutions', desc: 'Every family and business is unique. We create interiors tailored to your specific needs, lifestyle, and brand identity.' },
        { icon: Maximize2, title: 'Smart Space Planning', desc: 'We optimize every square foot for better movement, hidden storage, and overall functionality without feeling cluttered.' },
        { icon: Eye, title: '3D Interior Visualization', desc: 'See your complete interior design with realistic 3D renders before any material is purchased or work begins.' },
        { icon: Users, title: 'Experienced Design Team', desc: 'Work directly with professional interior designers who guide you through material selection and layout decisions.' },
        { icon: Shield, title: 'End-to-End Execution', desc: 'From the first sketch to the final installation, we handle everything for a hassle-free turnkey experience.' },
    ];

    const steps = [
        { num: '01', icon: MessageSquare, title: 'Consultation & Requirement Gathering', items: ['Understand vision & budget', 'Site evaluation', 'Lifestyle & style preferences'] },
        { num: '02', icon: PaintBucket, title: 'Concept & Design Development', items: ['Space planning layouts', 'Mood boards & themes', 'Initial design concepts'] },
        { num: '03', icon: Eye, title: '3D Visualization & Material Selection', items: ['Realistic 3D renders', 'Material & finish selection', 'Lighting & color palettes'] },
        { num: '04', icon: CheckCircle2, title: 'Execution & Final Handover', items: ['Vendor coordination', 'Quality supervision', 'Final styling & handover'] },
    ];

    const testimonials = [
        { text: 'The design team transformed our apartment. The modular kitchen and living room are both stunning and highly practical.', author: 'Homeowner, Pune' },
        { text: 'They managed our entire office interior project seamlessly. The 3D designs looked exactly like the finished space.', author: 'Business Owner, Hyderabad' },
        { text: 'Excellent space planning! They maximized storage in our compact bedroom without compromising on the modern aesthetic.', author: 'Homeowner, Delhi' },
    ];

    const faqs = [
        { q: 'How long does an interior design project take?', a: 'Project timelines depend on the size and scope of work. Most residential interior projects take between 4 to 12 weeks.' },
        { q: 'Do you provide complete turnkey interior solutions?', a: 'Yes, we offer end-to-end interior design and execution services, including planning, material selection, project management, and installation.' },
        { q: 'Can you work within my budget?', a: 'Absolutely. We create customized solutions based on your budget while maintaining quality and functionality.' },
        { q: 'Do you offer 3D interior designs before execution?', a: 'Yes, we provide detailed 3D visualizations and concept designs to help you visualize the final space before execution begins.' },
        { q: 'Can you design a single room instead of a full home?', a: 'Yes, we offer both full-home interior solutions and single-room design services.' },
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
                                <Sofa className="w-4 h-4 text-zlendo-teal" />
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-zlendo-teal">Professional Interior Design</span>
                            </motion.div>
                            <motion.h1 {...fadeUp} transition={{ delay: 0.1 }} className="text-[32px] md:text-[48px] lg:text-[60px] font-black text-zlendo-grey-dark leading-[1.05] tracking-tight mb-6">
                                Modern Interior Design for{' '}
                                <span className="text-zlendo-teal italic">Homes &amp; Commercial Spaces</span>
                            </motion.h1>
                            <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-zlendo-grey-medium font-medium leading-relaxed mb-8">
                                From concept planning to turnkey execution, we create interiors tailored to your lifestyle, vision, and business identity.
                            </motion.p>
                            <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
                                <Link href={getPath('/services/interior-design/consultation')} className="btn-primary py-4 px-8 text-base md:text-lg rounded-2xl text-center inline-flex items-center justify-center gap-2 font-bold shadow-lg shadow-zlendo-teal/15 hover:shadow-xl hover:shadow-zlendo-teal/25 transition-all">
                                    Book Design Consultation <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link href={getPath('/services/interior-design/consultation')} className="btn-orange py-4 px-8 text-base md:text-lg rounded-2xl text-center font-bold shadow-lg shadow-zlendo-orange/10 hover:shadow-xl transition-all">
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

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-5 relative w-full flex justify-center mt-6 lg:mt-0"
                        >
                            <div className="relative w-full max-w-[480px]">
                                <div className="relative rounded-[36px] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/5 bg-white z-10">
                                    <img
                                        src="/assets/global/interior-design-consultation.webp"
                                        alt="Professional interior design consultation"
                                        className="w-full h-auto object-cover aspect-[4/3] hover:scale-102 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white text-left">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                                            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Expert Designers</p>
                                        </div>
                                        <p className="text-sm font-bold text-gray-200">Collaborate directly with professionals to finalize your perfect aesthetic.</p>
                                    </div>
                                </div>
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-zlendo-teal/10 rounded-full blur-xl -z-10" />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-zlendo-orange/15 rounded-full blur-2xl -z-10" />
                                <div className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white rounded-2xl p-4 shadow-xl border border-black/[0.04] z-20 flex items-center gap-3 animate-bounce [animation-duration:5s]">
                                    <div className="w-10 h-10 rounded-xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black uppercase tracking-wider text-gray-400">Support</p>
                                        <p className="text-xs font-black text-zlendo-grey-dark">Dedicated Manager</p>
                                    </div>
                                </div>
                                <div className="absolute -right-6 top-12 bg-white rounded-2xl p-4 shadow-xl border border-black/[0.04] z-20 flex items-center gap-3 animate-bounce [animation-duration:6s]">
                                    <div className="w-10 h-10 rounded-xl bg-zlendo-orange/10 flex items-center justify-center text-zlendo-orange">
                                        <Star className="w-5 h-5 fill-zlendo-orange text-zlendo-orange" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black uppercase tracking-wider text-gray-400">Quality</p>
                                        <p className="text-xs font-black text-zlendo-grey-dark">Premium Finishes</p>
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
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-5 relative order-last lg:order-first"
                        >
                            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/5 group">
                                <img
                                    src="/assets/global/interior-design-walkthrough.webp"
                                    alt="Interior designer walking through a newly designed modern living room with a client"
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
                                Interior Design Services for{' '}
                                <span className="text-zlendo-teal italic">Every Need</span>
                            </h2>
                            <p className="text-lg md:text-xl text-zlendo-grey-medium font-medium leading-relaxed mb-6">
                                Transform your home, office, or commercial space with thoughtfully planned interiors that combine style, comfort, and functionality.
                            </p>
                            <p className="text-base md:text-lg text-zlendo-grey-medium font-medium leading-relaxed mb-6">
                                Our interior design services are tailored to match your lifestyle, space requirements, and aesthetic preferences — from concept development to final execution. Whether you are designing a new property, renovating an existing space, or upgrading a single room, we create interiors that are elegant, practical, and built for everyday living.
                            </p>
                            <p className="text-base md:text-lg text-zlendo-grey-dark font-bold mb-8">
                                Looking for professional interior designers? Contact us today for a customized design solution.
                            </p>
                            <div>
                                <Link href={getPath('/services/interior-design/consultation')} className="btn-primary py-4 px-10 text-lg rounded-2xl text-center inline-flex items-center gap-2">
                                    Get Free Consultation <ArrowRight className="w-5 h-5" />
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
                            Our Core <span className="text-zlendo-teal italic">Interior Expertise</span>
                        </h2>
                    </motion.div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        
                        {/* Service 1 */}
                        <div className="bg-white rounded-[32px] border border-black/[0.04] shadow-xl shadow-black/[0.02] p-8">
                            <div className="w-14 h-14 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal mb-6">
                                <Home className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black text-zlendo-grey-dark mb-4">Residential Interiors</h3>
                            <p className="text-base text-zlendo-grey-medium font-medium leading-relaxed mb-6">
                                We design apartments, villas, and independent homes with personalized themes, optimized layouts, and premium finishes.
                            </p>
                            <ul className="space-y-2.5 mb-6">
                                {['Living & Dining rooms', 'Bedroom & Wardrobe design', 'False ceiling & lighting', 'Balcony seating concepts'].map((item, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm text-zlendo-grey-dark font-semibold">
                                        <CheckCircle2 className="w-4 h-4 text-zlendo-teal shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-white rounded-[32px] border border-black/[0.04] shadow-xl shadow-black/[0.02] p-8">
                            <div className="w-14 h-14 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal mb-6">
                                <Briefcase className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black text-zlendo-grey-dark mb-4">Commercial Interiors</h3>
                            <p className="text-base text-zlendo-grey-medium font-medium leading-relaxed mb-6">
                                We create efficient layouts and visually appealing interiors tailored for high-performance business environments.
                            </p>
                            <ul className="space-y-2.5 mb-6">
                                {['Offices & coworking spaces', 'Retail stores & showrooms', 'Restaurants & cafés', 'Clinics & salons'].map((item, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm text-zlendo-grey-dark font-semibold">
                                        <CheckCircle2 className="w-4 h-4 text-zlendo-teal shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-white rounded-[32px] border border-black/[0.04] shadow-xl shadow-black/[0.02] p-8">
                            <div className="w-14 h-14 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal mb-6">
                                <Box className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black text-zlendo-grey-dark mb-4">Modular Kitchens</h3>
                            <p className="text-base text-zlendo-grey-medium font-medium leading-relaxed mb-6">
                                Stylish and practical modular kitchens and wardrobes that maximize storage while maintaining a clean, modern look.
                            </p>
                            <ul className="space-y-2.5 mb-6">
                                {['L-shaped & U-shaped layouts', 'Island kitchen concepts', 'Smart storage accessories', 'Premium finishes & hardware'].map((item, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm text-zlendo-grey-dark font-semibold">
                                        <CheckCircle2 className="w-4 h-4 text-zlendo-teal shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* ═══ WHY CHOOSE SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="container-custom px-6 lg:px-12">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight">
                            Why Choose Our{' '}
                            <span className="text-zlendo-teal italic">Interior Services?</span>
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
                        <Link href={getPath('/services/interior-design/consultation')} className="btn-primary py-4 px-10 text-lg rounded-2xl text-center inline-flex items-center gap-2">
                            Transform Your Space Today <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ═══ PROCESS SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-[#F8FBFA]">
                <div className="container-custom px-6 lg:px-12">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight">
                            Our Interior Design{' '}
                            <span className="text-zlendo-teal italic">Process</span>
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
                </div>
            </section>

            {/* ═══ TESTIMONIALS SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="container-custom px-6 lg:px-12">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight">
                            Happy <span className="text-zlendo-teal italic">Clients</span>
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
                <div className="absolute inset-0 bg-zlendo-teal/5 blur-[100px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zlendo-teal/[0.08] blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="container-custom px-6 lg:px-12 relative z-10 text-center space-y-10">
                    <motion.h2 {...fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto">
                        Ready to Transform Your{' '}
                        <span className="text-zlendo-teal italic">Space?</span>
                    </motion.h2>
                    <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-xl text-white/60 font-medium max-w-2xl mx-auto">
                        Create interiors that combine elegance, comfort, and functionality with professional solutions tailored to your needs.
                    </motion.p>
                    <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={getPath('/services/interior-design/consultation')} className="btn-primary py-5 px-12 text-lg rounded-3xl text-center inline-flex items-center justify-center gap-2">
                            Book Free Consultation <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href={getPath('/services/interior-design/consultation')} className="btn-orange py-5 px-12 text-lg rounded-3xl text-center">
                            Request a Quote
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
