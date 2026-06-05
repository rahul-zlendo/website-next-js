'use client';

import { motion } from 'framer-motion';
import {
    Video, Home, Briefcase, Layers, CheckCircle2,
    ArrowRight, ChevronDown, Upload, Eye, Shield,
    Sparkles, Star, Building2, MapPin, Zap, Users,
    Target, FileText, PenTool, Box, Monitor, Camera,
    Play, Compass, Lightbulb, Image
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useCountry } from '@/lib/context/CountryContext';

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function VirtualWalkthroughClient() {
    const { getPath } = useCountry();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const heroHighlights = [
        { icon: Video, label: 'Immersive Virtual Tours' },
        { icon: Box, label: '2D/3D to Walkthrough' },
        { icon: Home, label: 'Residential & Commercial' },
        { icon: Camera, label: 'Realistic Visualization' },
        { icon: CheckCircle2, label: 'Professional Quality' },
    ];

    const benefits = [
        { icon: Users, title: 'Professional Visualization Team', desc: 'Our specialists create high-quality walkthroughs that accurately represent your project.' },
        { icon: Zap, title: 'Faster Client Approvals', desc: 'Help clients understand designs clearly and make decisions faster.' },
        { icon: Shield, title: 'Cost-Effective Design Validation', desc: 'Identify potential issues before construction begins.' },
        { icon: Eye, title: 'Realistic Presentation Quality', desc: 'Deliver immersive walkthroughs with realistic materials, textures, lighting, and navigation.' },
        { icon: Layers, title: 'Flexible Project Support', desc: "Whether it's a single home or a large commercial development, we support projects of all sizes." },
        { icon: Target, title: 'Competitive Advantage', desc: 'Impress clients with immersive visual presentations that stand out from traditional drawings.' },
    ];

    const services = [
        { icon: PenTool, title: '2D Floor Plan to Virtual Walkthrough', desc: 'Convert basic floor plans into immersive virtual walkthroughs that help clients understand the complete design.' },
        { icon: FileText, title: 'CAD Drawings to Virtual Walkthrough', desc: 'Transform architectural drawings into engaging virtual experiences with accurate dimensions and realistic details.' },
        { icon: Box, title: '3D Model to Virtual Walkthrough', desc: 'Already have a 3D model? We can create professional walkthrough animations and interactive virtual tours.' },
        { icon: Home, title: 'Residential Virtual Walkthroughs', desc: 'Showcase houses, villas, apartments, duplexes, and residential developments.' },
        { icon: Building2, title: 'Commercial Virtual Walkthroughs', desc: 'Present offices, retail stores, hotels, healthcare facilities, and commercial properties professionally.' },
        { icon: Sparkles, title: 'Interior Design Walkthroughs', desc: 'Help clients visualize furniture, décor, finishes, materials, and lighting before implementation.' },
    ];

    const steps = [
        { num: '01', icon: Upload, title: 'Share Your Project Files', desc: 'Send floor plans, CAD drawings, PDFs, sketches, or 3D models.' },
        { num: '02', icon: Eye, title: 'Project Review', desc: 'Our experts review your requirements and recommend the best walkthrough approach.' },
        { num: '03', icon: Monitor, title: '3D Visualization Development', desc: 'We create detailed models, environments, and walkthrough paths.' },
        { num: '04', icon: Play, title: 'Client Review & Final Delivery', desc: 'Provide feedback, request refinements, and receive your professional virtual walkthrough.' },
    ];

    const showcaseItems = [
        'Interior and exterior spaces',
        'Room layouts and circulation',
        'Furniture arrangements',
        'Lighting and material finishes',
        'Architectural details',
        'Landscape elements',
    ];

    const industries = [
        { icon: Building2, title: 'Real Estate Developers', desc: 'Market projects before construction completion.' },
        { icon: Compass, title: 'Architects', desc: 'Present design concepts in a more engaging way.' },
        { icon: Sparkles, title: 'Interior Designers', desc: 'Showcase design ideas with realistic visualizations.' },
        { icon: Briefcase, title: 'Builders & Contractors', desc: 'Improve communication with clients and stakeholders.' },
        { icon: Image, title: 'Property Marketing Agencies', desc: 'Create powerful marketing assets that attract buyers.' },
    ];

    const benefitsList = [
        'Improve client understanding',
        'Increase buyer confidence',
        'Accelerate project approvals',
        'Enhance marketing presentations',
        'Reduce design revisions',
        'Improve stakeholder communication',
        'Showcase projects before construction',
        'Create premium client experiences',
    ];

    const trustStats = [
        { value: '500+', label: 'Projects Delivered' },
        { value: 'HD', label: 'Quality Output' },
        { value: 'Fast', label: 'Turnaround' },
        { value: '24/7', label: 'Client Support' },
    ];

    const faqs = [
        { q: 'What is a virtual walkthrough?', a: 'A virtual walkthrough is a realistic digital experience that allows viewers to explore a property or design before it is built.' },
        { q: 'Can you create a walkthrough from a floor plan?', a: 'Yes. We can convert 2D floor plans, CAD drawings, architectural plans, and sketches into realistic virtual walkthroughs.' },
        { q: 'What file formats do you accept?', a: 'We accept PDF, DWG, DXF, CAD files, images, sketches, and 3D model formats.' },
        { q: 'How long does the process take?', a: 'Project timelines vary based on size and complexity. We provide a detailed schedule after reviewing your files.' },
        { q: "Who uses virtual walkthroughs?", a: 'Architects, builders, developers, interior designers, homeowners, and real estate professionals regularly use virtual walkthroughs.' },
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
                                <Video className="w-4 h-4 text-zlendo-teal" />
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-zlendo-teal">Virtual Walkthrough Services</span>
                            </motion.div>
                            <motion.h1 {...fadeUp} transition={{ delay: 0.1 }} className="text-[32px] md:text-[48px] lg:text-[60px] font-black text-zlendo-grey-dark leading-[1.05] tracking-tight mb-6">
                                Transform Your Floor Plans into{' '}
                                <span className="text-zlendo-teal italic">Immersive Virtual Walkthroughs</span>
                            </motion.h1>
                            <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-zlendo-grey-medium font-medium leading-relaxed mb-8">
                                Bring your designs to life with professional Virtual Walkthrough Services. Whether you have a 2D floor plan, CAD file, or 3D model, our visualization experts create realistic virtual walkthroughs that help clients experience the space before construction begins.
                            </motion.p>
                            <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
                                <Link href={getPath('/services/virtual-walkthrough/consultation')} className="btn-primary py-4 px-8 text-base md:text-lg rounded-2xl text-center inline-flex items-center justify-center gap-2 font-bold shadow-lg shadow-zlendo-teal/15 hover:shadow-xl hover:shadow-zlendo-teal/25 transition-all">
                                    Request a Free Quote <ArrowRight className="w-5 h-5" />
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
                                        src="/assets/global/interior-design-walkthrough.webp"
                                        alt="Virtual walkthrough visualization"
                                        className="w-full h-auto object-cover aspect-[4/3] hover:scale-102 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white text-left">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                                            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Professional Quality</p>
                                        </div>
                                        <p className="text-sm font-bold text-gray-200">Experience your project before construction begins.</p>
                                    </div>
                                </div>
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-zlendo-teal/10 rounded-full blur-xl -z-10" />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-zlendo-orange/15 rounded-full blur-2xl -z-10" />
                                <div className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white rounded-2xl p-4 shadow-xl border border-black/[0.04] z-20 flex items-center gap-3 animate-bounce [animation-duration:5s]">
                                    <div className="w-10 h-10 rounded-xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal">
                                        <Play className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black uppercase tracking-wider text-gray-400">Immersive</p>
                                        <p className="text-xs font-black text-zlendo-grey-dark">3D Walkthrough</p>
                                    </div>
                                </div>
                                <div className="absolute -right-6 top-12 bg-white rounded-2xl p-4 shadow-xl border border-black/[0.04] z-20 flex items-center gap-3 animate-bounce [animation-duration:6s]">
                                    <div className="w-10 h-10 rounded-xl bg-zlendo-orange/10 flex items-center justify-center text-zlendo-orange">
                                        <Star className="w-5 h-5 fill-zlendo-orange text-zlendo-orange" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black uppercase tracking-wider text-gray-400">Realistic</p>
                                        <p className="text-xs font-black text-zlendo-grey-dark">HD Quality</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ SHOWCASE SECTION ═══ */}
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
                                    alt="Floor plan to virtual walkthrough conversion"
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
                                Turn Your Floor Plan into a{' '}
                                <span className="text-zlendo-teal italic">Realistic Virtual Experience</span>
                            </h2>
                            <p className="text-lg md:text-xl text-zlendo-grey-medium font-medium leading-relaxed mb-6">
                                Traditional floor plans often make it difficult for clients to understand space, flow, and design intent. Virtual walkthroughs bridge this gap by transforming technical drawings into immersive visual experiences.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                {showcaseItems.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-bold text-zlendo-grey-dark">
                                        <CheckCircle2 className="w-4 h-4 text-zlendo-teal shrink-0" /> {item}
                                    </div>
                                ))}
                            </div>
                            <Link href={getPath('/services/virtual-walkthrough/consultation')} className="btn-primary py-4 px-10 text-lg rounded-2xl text-center inline-flex items-center gap-2">
                                Upload Your Floor Plan <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ OUR SERVICES ═══ */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="container-custom px-6 lg:px-12">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight">
                            Our Virtual Walkthrough{' '}
                            <span className="text-zlendo-teal italic">Services</span>
                        </h2>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-10">
                        {services.map((item, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }}
                                className="bg-slate-50/50 rounded-[28px] p-8 border border-black/[0.04] shadow-lg shadow-black/[0.01] hover:shadow-xl hover:bg-white hover:border-zlendo-teal/15 transition-all duration-300 group"
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
                        <Link href={getPath('/services/virtual-walkthrough/consultation')} className="btn-primary py-4 px-10 text-lg rounded-2xl text-center inline-flex items-center gap-2">
                            Talk to a Visualization Expert <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ═══ WHY CHOOSE SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-zlendo-mint/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#29b0a1_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />
                <div className="container-custom px-6 lg:px-12 relative z-10">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight">
                            Why Choose Zlendo Realty for{' '}
                            <span className="text-zlendo-teal italic">Virtual Walkthroughs?</span>
                        </h2>
                    </motion.div>
                    <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto mb-10">
                        {benefits.map((item, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }}
                                className="bg-white rounded-[28px] p-8 border border-black/[0.04] shadow-lg shadow-black/[0.01] hover:shadow-xl hover:border-zlendo-teal/15 transition-all duration-300 group flex flex-col items-center text-center w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
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

            {/* ═══ PROCESS SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-[#F8FBFA]">
                <div className="container-custom px-6 lg:px-12">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight">
                            Our Simple{' '}
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
                                    <p className="text-base text-zlendo-grey-medium font-medium leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div {...fadeUp} className="text-center">
                        <Link href={getPath('/services/virtual-walkthrough/consultation')} className="btn-primary py-4 px-10 text-lg rounded-2xl text-center inline-flex items-center gap-2">
                            Get Started Now <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ═══ INDUSTRIES SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="container-custom px-6 lg:px-12">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight">
                            Industries We{' '}
                            <span className="text-zlendo-teal italic">Serve</span>
                        </h2>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {industries.map((item, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }}
                                className={`flex items-start gap-5 p-6 bg-slate-50/50 rounded-2xl border border-black/[0.04] shadow-sm hover:shadow-md hover:bg-white hover:border-zlendo-teal/15 transition-all duration-300 ${i === 4 ? 'lg:col-start-2' : ''}`}
                            >
                                <div className="w-12 h-12 rounded-xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal shrink-0">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-black text-zlendo-grey-dark mb-1">{item.title}</h3>
                                    <p className="text-sm text-zlendo-grey-medium font-medium">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ BENEFITS LIST SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-slate-50">
                <div className="container-custom px-6 lg:px-12">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight mb-4">
                            Benefits of{' '}
                            <span className="text-zlendo-teal italic">Virtual Walkthroughs</span>
                        </h2>
                    </motion.div>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {benefitsList.map((item, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-black/[0.04] shadow-sm hover:shadow-md hover:border-zlendo-teal/15 transition-all duration-300"
                            >
                                <CheckCircle2 className="w-5 h-5 text-zlendo-teal shrink-0" />
                                <span className="text-base font-bold text-zlendo-grey-dark">{item}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Trust Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {trustStats.map((stat, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}
                                className="text-center p-6 bg-white rounded-[24px] border border-black/[0.04] shadow-md"
                            >
                                <p className="text-2xl md:text-3xl font-black text-zlendo-teal mb-1">{stat.value}</p>
                                <p className="text-sm font-bold text-zlendo-grey-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FAQ SECTION ═══ */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="container-custom px-6 lg:px-12">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-black text-zlendo-grey-dark leading-tight tracking-tight">
                            Frequently Asked{' '}
                            <span className="text-zlendo-teal italic">Questions</span>
                        </h2>
                    </motion.div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }}
                                className="bg-slate-50 rounded-2xl border border-black/[0.04] shadow-sm overflow-hidden"
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
                        Ready to Convert Your Floor Plan into a{' '}
                        <span className="text-zlendo-teal italic">Virtual Walkthrough?</span>
                    </motion.h2>
                    <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-xl text-white/60 font-medium max-w-2xl mx-auto">
                        Get started in 3 easy steps: Submit your floor plan, receive a project estimate, and get your custom virtual walkthrough.
                    </motion.p>

                    <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                        {['No Obligation Quote', 'Expert Project Review', 'Fast Turnaround Options'].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                                <CheckCircle2 className="w-3.5 h-3.5 text-zlendo-teal" />
                                <span className="text-xs font-bold text-white/80">{item}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={getPath('/services/virtual-walkthrough/consultation')} className="btn-primary py-5 px-12 text-lg rounded-3xl text-center inline-flex items-center justify-center gap-2">
                            Get a Free Quote <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href={getPath('/contact')} className="btn-orange py-5 px-12 text-lg rounded-3xl text-center">
                            Talk to an Expert
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
