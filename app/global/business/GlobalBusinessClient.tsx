'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, ChevronRight, CheckCircle2,
    Upload, Paintbrush, Eye, ThumbsUp,
    Layers, Clock, Globe2, Zap, Shield, Users,
    Building2, Palette, HardHat,
    Send, Star, Quote,
    TrendingUp, Timer
} from 'lucide-react';
import { useCountry } from '@/lib/context/CountryContext';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { createOrUpdateBusinessInfo, getAllListOfValues, getAllLocations, resetEnterpriseForm } from '@/lib/store/slices/enterpriseSlice';

/* ────────────────────────────────────────────
   ANIMATED COUNTER COMPONENT
──────────────────────────────────────────── */
function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2000 }: { end: number; suffix?: string; prefix?: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    useEffect(() => {
        if (!isInView) return;
        let startTime: number | null = null;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [isInView, end, duration]);

    return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

/* ────────────────────────────────────────────
   WORKFLOW STEP DATA
──────────────────────────────────────────── */
const workflowSteps = [
    { icon: Upload, label: 'Upload Plan', desc: 'DWG, PDF, or image', color: 'from-blue-500 to-cyan-400' },
    { icon: Layers, label: 'Generate 3D', desc: 'AI-powered conversion', color: 'from-violet-500 to-purple-400' },
    { icon: Paintbrush, label: 'Apply Design', desc: 'Materials & styling', color: 'from-amber-500 to-orange-400' },
    { icon: Eye, label: 'Walkthrough', desc: 'Immersive 3D tour', color: 'from-emerald-500 to-teal-400' },
    { icon: ThumbsUp, label: 'Client Approval', desc: 'Share & close deals', color: 'from-rose-500 to-pink-400' },
];

/* ────────────────────────────────────────────
   USE CASE TAB DATA
──────────────────────────────────────────── */
const useCaseTabs = [
    {
        id: 'architects',
        label: 'Architects',
        icon: Building2,
        benefits: [
            'From DWG to client-ready 3D model in under 2 minutes',
            'Render every elevation with physically accurate sunlight angles',
            'Win bids with interactive 3D presentations instead of static PDFs',
        ],
        visual: 'Seamless CAD-to-3D pipeline with real-time rendering',
    },
    {
        id: 'interior',
        label: 'Interior Designers',
        icon: Palette,
        benefits: [
            'Real-time material switching in photorealistic 3D environments',
            'Generate mood board-to-render in a single session',
            'Share interactive client links — no login or app download needed',
        ],
        visual: 'Full material library with drag-and-drop styling tools',
    },
    {
        id: 'developers',
        label: 'Developers & Builders',
        icon: HardHat,
        benefits: [
            'Replace physical sample flats with digital experience centres',
            'Close NRI deals remotely with immersive 8K walkthroughs',
            'Connect design iterations directly to live cost impact analysis',
        ],
        visual: 'Enterprise dashboard with multi-project oversight',
    },
];

/* ────────────────────────────────────────────
   TESTIMONIALS DATA
──────────────────────────────────────────── */
const testimonials = [
    {
        quote: "We cut our pre-pitch preparation time from three days to an afternoon. Our close rate on new projects climbed from 55% to over 80%.",
        name: "Sarah Mitchell",
        role: "Principal Architect",
        company: "Mitchell & Associates, London",
    },
    {
        quote: "Zlendo Realty is the first tool that actually fits a professional workflow. The 60-second render alone justified the entire subscription.",
        name: "Marcus Chen",
        role: "Senior Interior Designer",
        company: "Studio Chen, New York",
    },
    {
        quote: "We used to lose weeks between concept and client approval. Now projects are approved the same day. It fundamentally changed our capacity.",
        name: "Anouk de Vries",
        role: "Design Director",
        company: "DVRS Commercial, Amsterdam",
    },
];

/* ════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════ */
export default function GlobalBusinessClient() {
    const { getPath } = useCountry();
    const dispatch = useAppDispatch();
    const {
        isSubmitting,
        isSubmitted,
        isLoadingIndustries,
        industries,
        Location_type,
        isLoadingLocations,
        locations
    } = useAppSelector((state) => state.enterprise);

    const [activeTab, setActiveTab] = useState('architects');
    const [formData, setFormData] = useState({
        company: '',
        name: '',
        role: '',
        phone: '',
        email: '',
        industry: '',
        description: '',
        teamSize: '',
        city: '',
        timeline: '',
        country: 0,
    });

    useEffect(() => {
        dispatch(resetEnterpriseForm());
        dispatch(getAllListOfValues());
        dispatch(getAllLocations());
    }, [dispatch]);

    const countries = useMemo(() => {
        if (!locations || locations.length === 0) return [];
        const countryLovId = Location_type.find((item: any) =>
            item.lov_Key?.toLowerCase() === 'country'
        )?.lov_Id || 12;

        return locations
            .filter((loc: any) => loc.location_TypeId === countryLovId && loc.isActive !== false)
            .sort((a: any, b: any) => a.location_Name.localeCompare(b.location_Name));
    }, [locations, Location_type]);

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            Id: 0,
            FullName: formData.name,
            EmailAddress: formData.email,
            CompanyName: formData.company,
            PhoneNumber: formData.phone || "",
            State: null,
            country: formData.country,
            BusinessStatus: 0,
            BusinessDescription: parseInt(formData.industry) || 0,
            BusinessChallenge: formData.description,
            IsActive: true,
            ScheduleDate: null,
            ScheduleTime: null,
            RescheduleDate: null,
            RescheduleTime: null,
            Remarks: "",
            AssignedTo: 0,
            ModuleName: "Business Info Master",
            Activity: "Create"
        };

        try {
            await dispatch(createOrUpdateBusinessInfo(payload)).unwrap();
        } catch (error: unknown) {
            console.error('Error submitting form:', error);
            alert(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
        }
    };

    const activeTabData = useMemo(() => useCaseTabs.find(t => t.id === activeTab), [activeTab]);

    return (
        <div className="bg-[#020204] text-white font-nunito overflow-x-hidden selection:bg-zlendo-teal/20 selection:text-zlendo-teal">

            {/* ══════════════════════════════════════
               1. HERO — BUSINESS FOCUSED
            ══════════════════════════════════════ */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                {/* Ambient glow */}
                <div className="absolute top-[-30%] right-[-15%] w-[900px] h-[900px] bg-gradient-to-br from-zlendo-teal/15 to-transparent rounded-full blur-[160px] pointer-events-none" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-tr from-violet-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

                {/* Grid pattern bg */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

                <div className="container-custom px-6 lg:px-12 py-20 lg:py-28 relative z-10">
                    <div className="max-w-5xl">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] backdrop-blur-sm mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-white/60">Enterprise Platform</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-[36px] sm:text-[52px] md:text-[64px] lg:text-[76px] font-black leading-[0.92] tracking-[-0.03em] mb-8"
                        >
                            Close More Clients.{' '}
                            <br className="hidden md:block" />
                            <span className="bg-gradient-to-r from-zlendo-teal via-emerald-300 to-cyan-400 bg-clip-text text-transparent">Deliver Faster.</span>
                            <br />
                            <span className="text-white/40">Scale Your Design Business.</span>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            className="text-lg md:text-xl text-white/50 font-medium leading-relaxed max-w-2xl mb-12"
                        >
                            Zlendo Realty helps teams design, visualize, and present projects in one seamless workflow — from first sketch to signed contract.
                        </motion.p>

                        {/* CTA buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.35 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a
                                href="#demo-form"
                                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-zlendo-teal to-emerald-400 text-white font-black text-lg rounded-2xl shadow-2xl shadow-zlendo-teal/25 hover:shadow-zlendo-teal/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                            >
                                Book a Demo
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-white/[0.05] border border-white/[0.1] text-white font-bold text-lg rounded-2xl hover:bg-white/[0.08] hover:border-white/[0.15] transition-all"
                            >
                                Talk to Sales
                                <ChevronRight className="w-5 h-5" />
                            </a>
                        </motion.div>

                        {/* Floating metric pills */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap gap-3 mt-14"
                        >
                            {[
                                { icon: Zap, label: '3x faster delivery' },
                                { icon: Timer, label: '60s render time' },
                                { icon: Globe2, label: '40+ countries' },
                            ].map((pill, i) => (
                                <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/50 text-sm font-semibold">
                                    <pill.icon className="w-3.5 h-3.5 text-zlendo-teal" />
                                    {pill.label}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
               2. BUSINESS IMPACT — ANIMATED METRICS
            ══════════════════════════════════════ */}
            <section className="py-12 lg:py-16 px-6 lg:px-12 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#020204] via-[#0a0f1a] to-[#020204]" />
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-zlendo-teal/60 mb-4">Measurable Impact</p>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                            Measurable <span className="bg-gradient-to-r from-zlendo-teal to-cyan-400 bg-clip-text text-transparent">Business Impact.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {[
                            { end: 3, suffix: 'x', label: 'More Projects Delivered', icon: Layers, color: 'from-violet-500/20 to-purple-500/10' },
                            { end: 60, suffix: 's', label: 'Render Time', icon: Timer, color: 'from-zlendo-teal/20 to-emerald-500/10' },
                            { end: 80, suffix: '%', label: 'Faster Client Approvals', icon: TrendingUp, color: 'from-amber-500/20 to-orange-500/10' },
                            { end: 40, suffix: '+', label: 'Countries Using Zlendo Realty', icon: Globe2, color: 'from-blue-500/20 to-cyan-500/10' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className={`relative group p-8 lg:p-10 rounded-[28px] bg-gradient-to-br ${stat.color} border border-white/[0.06] hover:border-white/[0.12] transition-all`}
                            >
                                <stat.icon className="w-8 h-8 text-white/20 mb-6 group-hover:text-zlendo-teal/50 transition-colors" />
                                <div className="text-[48px] md:text-[56px] lg:text-[64px] font-black leading-none tracking-tighter mb-2">
                                    <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                                </div>
                                <p className="text-sm font-bold text-white/40 uppercase tracking-wider">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
               3. WORKFLOW VISUAL — KEY DIFFERENTIATOR
            ══════════════════════════════════════ */}
            <section className="py-12 lg:py-16 px-6 lg:px-12 bg-[#060810] relative overflow-hidden">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-zlendo-teal/5 blur-[200px] rounded-full pointer-events-none" />
                <div className="container-custom relative z-10">
                    <div className="text-center mb-20">
                        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-zlendo-teal/60 mb-4">End-to-End Workflow</p>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                            From plan to approval.{' '}
                            <span className="bg-gradient-to-r from-zlendo-teal to-cyan-400 bg-clip-text text-transparent">One platform.</span>
                        </h2>
                    </div>

                    {/* Horizontal flow */}
                    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0 justify-between relative">
                        {/* Connecting line (desktop) */}
                        <div className="hidden lg:block absolute top-1/2 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />

                        {workflowSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                className="flex flex-col items-center text-center relative z-10 group w-full lg:w-1/5"
                            >
                                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                                    <step.icon className="w-9 h-9 text-white" strokeWidth={1.5} />
                                </div>
                                <h4 className="text-lg font-black mb-1">{step.label}</h4>
                                <p className="text-sm text-white/40 font-medium">{step.desc}</p>

                                {/* Arrow connector (desktop) */}
                                {i < workflowSteps.length - 1 && (
                                    <div className="hidden lg:flex absolute -right-4 top-10 text-white/15">
                                        <ChevronRight className="w-8 h-8" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
               4. BEFORE vs AFTER — BUSINESS PAIN
            ══════════════════════════════════════ */}
            <section className="py-12 lg:py-16 px-6 lg:px-12 relative">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-zlendo-teal/60 mb-4">Why Switch</p>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                            What your practice looks like{' '}
                            <span className="bg-gradient-to-r from-zlendo-teal to-cyan-400 bg-clip-text text-transparent">with Zlendo Realty.</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                        {/* Before */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="p-10 rounded-[32px] bg-red-500/[0.04] border border-red-500/10 relative overflow-hidden"
                        >
                            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-[10px] font-black uppercase tracking-widest">Traditional</div>
                            <h3 className="text-2xl font-black mb-8 text-red-300/80">❌ Without Zlendo Realty</h3>
                            <div className="space-y-5">
                                {[
                                    { item: 'Floor plan to 3D model', detail: '2–4 days manual work' },
                                    { item: 'Photorealistic render', detail: '4–8 hours wait time' },
                                    { item: 'Client walkthrough', detail: 'Static PDFs or recorded video' },
                                    { item: 'Cost estimate', detail: 'Manual disconnected spreadsheet' },
                                    { item: 'Project capacity', detail: 'Capped by prep time' },
                                ].map((row, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <span className="text-red-400 text-xs">✕</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white/80">{row.item}</p>
                                            <p className="text-xs text-white/35 font-medium">{row.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* After */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="p-10 rounded-[32px] bg-zlendo-teal/[0.04] border border-zlendo-teal/10 relative overflow-hidden"
                        >
                            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-zlendo-teal/10 text-zlendo-teal text-[10px] font-black uppercase tracking-widest">Zlendo Realty</div>
                            <h3 className="text-2xl font-black mb-8 text-zlendo-teal/80">✅ With Zlendo Realty</h3>
                            <div className="space-y-5">
                                {[
                                    { item: 'Floor plan to 3D model', detail: 'Under 2 minutes, automatic' },
                                    { item: 'Photorealistic render', detail: '60 seconds, instant' },
                                    { item: 'Client walkthrough', detail: 'Live, interactive browser link' },
                                    { item: 'Cost estimate', detail: 'Auto-generated, design-linked' },
                                    { item: 'Project capacity', detail: '3× throughput, same team' },
                                ].map((row, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-lg bg-zlendo-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-zlendo-teal" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white/80">{row.item}</p>
                                            <p className="text-xs text-zlendo-teal/50 font-medium">{row.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
               5. USE CASE SEGMENTS — TABBED UI
            ══════════════════════════════════════ */}
            <section className="py-12 lg:py-16 px-6 lg:px-12 bg-[#060810] relative">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-zlendo-teal/60 mb-4">Built For Your Industry</p>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                            One platform.{' '}
                            <span className="bg-gradient-to-r from-zlendo-teal to-cyan-400 bg-clip-text text-transparent">Every profession.</span>
                        </h2>
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-14">
                        {useCaseTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all ${activeTab === tab.id
                                    ? 'bg-zlendo-teal text-white shadow-lg shadow-zlendo-teal/20'
                                    : 'bg-white/[0.04] text-white/50 border border-white/[0.06] hover:bg-white/[0.07]'
                                    }`}
                            >
                                <tab.icon className="w-4.5 h-4.5" />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab content */}
                    <AnimatePresence mode="wait">
                        {activeTabData && (
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto"
                            >
                                {/* Visual mockup area */}
                                <div className="relative rounded-[32px] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06] p-10 lg:p-14 min-h-[340px] flex flex-col items-center justify-center text-center overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-zlendo-teal/5 to-violet-500/5 rounded-[32px]" />
                                    <activeTabData.icon className="w-20 h-20 text-zlendo-teal/30 mb-6 relative z-10" strokeWidth={1} />
                                    <p className="text-lg font-bold text-white/30 relative z-10 max-w-xs">{activeTabData.visual}</p>
                                </div>

                                {/* Benefits */}
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-black">
                                        For <span className="text-zlendo-teal">{activeTabData.label}</span>
                                    </h3>
                                    <div className="space-y-4">
                                        {activeTabData.benefits.map((benefit, i) => (
                                            <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:border-zlendo-teal/20 transition-colors">
                                                <div className="w-8 h-8 rounded-xl bg-zlendo-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                                                    <CheckCircle2 className="w-4 h-4 text-zlendo-teal" />
                                                </div>
                                                <p className="text-[15px] text-white/70 font-medium leading-relaxed">{benefit}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <a href="#demo-form" className="inline-flex items-center gap-2 text-zlendo-teal font-bold text-sm group mt-2">
                                        See it in action <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* ══════════════════════════════════════
               6. PRODUCT EXPERIENCE — IMMERSIVE
            ══════════════════════════════════════ */}
            <section className="py-12 lg:py-16 px-6 lg:px-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#020204] via-[#0d1117] to-[#020204]" />
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-zlendo-teal/60 mb-4">Immersive Experience</p>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                            Let your clients{' '}
                            <span className="bg-gradient-to-r from-zlendo-teal to-cyan-400 bg-clip-text text-transparent">walk through</span> the design.
                        </h2>
                        <p className="text-lg text-white/40 font-medium mt-4 max-w-2xl mx-auto">
                            Sell the experience, not the feature. Interactive walkthroughs that close deals before the meeting ends.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="relative rounded-[32px] overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/50 bg-[#0a0f1a]">
                            <div className="relative pt-[56.25%] w-full">
                                <iframe
                                    src="https://www.youtube.com/embed/ij_yZ-sNrOY?autoplay=0&mute=1&loop=1&playlist=ij_yZ-sNrOY&controls=0&showinfo=0&rel=0&modestbranding=1"
                                    title="Zlendo Realty Immersive Walkthrough Experience"
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                            {/* Overlay ring */}
                            <div className="absolute inset-0 pointer-events-none ring-1 ring-white/5 rounded-[32px]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
               7. ROI SECTION — VISUAL METRICS
            ══════════════════════════════════════ */}
            <section className="py-12 lg:py-16 px-6 lg:px-12 bg-[#060810] relative">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-zlendo-teal/60 mb-4">Return on Investment</p>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                            The ROI is{' '}
                            <span className="bg-gradient-to-r from-zlendo-teal to-cyan-400 bg-clip-text text-transparent">undeniable.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                metric: '90%',
                                label: 'Reduction in Design Time',
                                before: '3-day turnaround',
                                after: '1-hour delivery',
                                barWidth: '90%',
                                color: 'bg-gradient-to-r from-violet-500 to-purple-400',
                            },
                            {
                                metric: '3×',
                                label: 'Increase in Close Rate',
                                before: '55% close rate',
                                after: '80%+ close rate',
                                barWidth: '80%',
                                color: 'bg-gradient-to-r from-zlendo-teal to-emerald-400',
                            },
                            {
                                metric: '10×',
                                label: 'Presentation Quality',
                                before: 'Static PDF renders',
                                after: 'Interactive 3D tours',
                                barWidth: '95%',
                                color: 'bg-gradient-to-r from-amber-500 to-orange-400',
                            },
                        ].map((roi, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                className="p-8 rounded-[28px] bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-all group"
                            >
                                <div className="text-5xl font-black mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">{roi.metric}</div>
                                <p className="text-sm font-bold text-white/40 uppercase tracking-wider mb-8">{roi.label}</p>

                                {/* Visual bar */}
                                <div className="h-2 rounded-full bg-white/[0.05] mb-6 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: roi.barWidth }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
                                        className={`h-full rounded-full ${roi.color}`}
                                    />
                                </div>

                                <div className="flex items-center gap-3 text-xs font-bold">
                                    <span className="text-red-400/60 line-through">{roi.before}</span>
                                    <ArrowRight className="w-3 h-3 text-white/20" />
                                    <span className="text-zlendo-teal">{roi.after}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
               8. TESTIMONIALS — ENTERPRISE TRUST
            ══════════════════════════════════════ */}
            <section className="py-12 lg:py-16 px-6 lg:px-12 relative">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-zlendo-teal/60 mb-4">Trusted By Leaders</p>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                            What professionals at the{' '}
                            <span className="bg-gradient-to-r from-zlendo-teal to-cyan-400 bg-clip-text text-transparent">top say.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                className="p-8 lg:p-10 rounded-[28px] bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-all relative group"
                            >
                                <Quote className="w-10 h-10 text-zlendo-teal/15 mb-6" strokeWidth={1.5} />
                                <p className="text-[15px] text-white/60 font-medium leading-relaxed mb-8">"{t.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-zlendo-teal/20 to-violet-500/20 flex items-center justify-center text-white font-black text-sm">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-white/80">{t.name}</p>
                                        <p className="text-xs text-white/30 font-medium">{t.role}, {t.company}</p>
                                    </div>
                                </div>
                                {/* Stars */}
                                <div className="flex gap-1 mt-5">
                                    {[...Array(5)].map((_, j) => (
                                        <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
               9. BUSINESS CONTACT FORM — CRITICAL
            ══════════════════════════════════════ */}
            <section id="demo-form" className="py-12 lg:py-16 px-6 lg:px-12 bg-[#060810] relative scroll-mt-24 overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-zlendo-teal/5 blur-[180px] rounded-full pointer-events-none" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-violet-600/5 blur-[140px] rounded-full pointer-events-none" />

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto items-start">
                        {/* Left — Benefits */}
                        <div className="py-4">
                            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-zlendo-teal/60 mb-4">Get Started</p>
                            <h2 className="text-3xl md:text-[44px] font-black tracking-tight leading-tight mb-6">
                                Book your{' '}
                                <span className="bg-gradient-to-r from-zlendo-teal to-cyan-400 bg-clip-text text-transparent">personalized demo.</span>
                            </h2>
                            <p className="text-lg text-white/40 font-medium leading-relaxed mb-10">
                                See how Zlendo Realty fits your specific workflow. Our product experts will walk you through a live demo tailored to your industry.
                            </p>

                            <div className="space-y-5 mb-12">
                                {[
                                    { icon: Clock, text: '30-minute personalized walkthrough' },
                                    { icon: Shield, text: 'No credit card required' },
                                    { icon: Users, text: 'Dedicated enterprise support' },
                                    { icon: Zap, text: 'We respond within 1 business day' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-zlendo-teal/10 flex items-center justify-center shrink-0">
                                            <item.icon className="w-5 h-5 text-zlendo-teal" />
                                        </div>
                                        <p className="text-[15px] text-white/60 font-medium">{item.text}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Trust logos */}
                            <div className="flex items-center gap-4 flex-wrap">
                                {['SOC 2', 'GDPR', 'ISO 27001'].map((badge, i) => (
                                    <div key={i} className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-bold text-white/30">
                                        {badge}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — Form */}
                        <div className="p-8 lg:p-10 rounded-[32px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-16"
                                >
                                    <div className="w-20 h-20 rounded-full bg-zlendo-teal/10 flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-zlendo-teal" />
                                    </div>
                                    <h3 className="text-2xl font-black mb-3">Thank you!</h3>
                                    <p className="text-white/40 font-medium">We&apos;ll reach out within 1 business day to schedule your personalized demo.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleFormSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-bold text-white/30 uppercase tracking-wider mb-2">Full Name *</label>
                                            <input
                                                type="text" name="name" required value={formData.name} onChange={handleFormChange}
                                                className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-white text-[15px] font-medium placeholder:text-white/20 focus:outline-none focus:border-zlendo-teal/30 focus:ring-1 focus:ring-zlendo-teal/20 transition-all font-nunito"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-white/30 uppercase tracking-wider mb-2">Work Email *</label>
                                            <input
                                                type="email" name="email" required value={formData.email} onChange={handleFormChange}
                                                className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-white text-[15px] font-medium placeholder:text-white/20 focus:outline-none focus:border-zlendo-teal/30 focus:ring-1 focus:ring-zlendo-teal/20 transition-all font-nunito"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-bold text-white/30 uppercase tracking-wider mb-2">Country *</label>
                                            <div className="relative">
                                                <select
                                                    name="country" required value={formData.country}
                                                    onChange={(e) => {
                                                        const newVal = parseInt(e.target.value);
                                                        const selected = countries.find((c: any) => c.location_Id === newVal);
                                                        const isInd = selected?.location_Name?.toLowerCase() === 'india';
                                                        setFormData(prev => ({
                                                            ...prev,
                                                            country: newVal,
                                                            phone: isInd ? prev.phone : ''
                                                        }));
                                                    }}
                                                    className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-white text-[15px] font-medium focus:outline-none focus:border-zlendo-teal/30 focus:ring-1 focus:ring-zlendo-teal/20 transition-all appearance-none cursor-pointer font-nunito"
                                                >
                                                    <option value={0} className="bg-[#0a0f1a]">Select country...</option>
                                                    {isLoadingLocations ? (
                                                        <option disabled className="bg-[#0a0f1a]">Loading countries...</option>
                                                    ) : countries.length > 0 ? (
                                                        countries.map((c: any, idx: number) => (
                                                            <option key={idx} value={c.location_Id} className="bg-[#0a0f1a]">
                                                                {c.location_Name}
                                                            </option>
                                                        ))
                                                    ) : (
                                                        <option disabled className="bg-[#0a0f1a]">No countries found</option>
                                                    )}
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-white/30 uppercase tracking-wider mb-2">Company Name *</label>
                                            <input
                                                type="text" name="company" required value={formData.company} onChange={handleFormChange}
                                                className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-white text-[15px] font-medium placeholder:text-white/20 focus:outline-none focus:border-zlendo-teal/30 focus:ring-1 focus:ring-zlendo-teal/20 transition-all font-nunito"
                                                placeholder="Your Company"
                                            />
                                        </div>
                                    </div>

                                    {(() => {
                                        const selected = countries.find((c: any) => c.location_Id === formData.country);
                                        const isIndia = selected?.location_Name?.toLowerCase() === 'india';

                                        return (
                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div className={isIndia ? '' : 'sm:col-span-2'}>
                                                    <label className="block text-xs font-bold text-white/30 uppercase tracking-wider mb-2">Industry *</label>
                                                    <div className="relative">
                                                        <select
                                                            name="industry" required value={formData.industry}
                                                            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                                                            className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-white text-[15px] font-medium focus:outline-none focus:border-zlendo-teal/30 focus:ring-1 focus:ring-zlendo-teal/20 transition-all appearance-none cursor-pointer font-nunito"
                                                        >
                                                            <option value="" className="bg-[#0a0f1a]">Select industry...</option>
                                                            {isLoadingIndustries ? (
                                                                <option disabled className="bg-[#0a0f1a]">Loading industries...</option>
                                                            ) : industries.length > 0 ? (
                                                                industries.map((ind: any, idx: number) => (
                                                                    <option key={idx} value={ind.lov_Value} className="bg-[#0a0f1a]">
                                                                        {ind.description || ind.lov_Key}
                                                                    </option>
                                                                ))
                                                            ) : (
                                                                <option disabled className="bg-[#0a0f1a]">No industries found</option>
                                                            )}
                                                        </select>
                                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                                                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                {isIndia && (
                                                    <div>
                                                        <label className="block text-xs font-bold text-white/30 uppercase tracking-wider mb-2">Phone *</label>
                                                        <input
                                                            type="tel" name="phone" required pattern="[0-9]{10}" maxLength={10} value={formData.phone}
                                                            onChange={(e) => { const value = e.target.value.replace(/\D/g, '').slice(0, 10); setFormData({ ...formData, phone: value }); }}
                                                            className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-white text-[15px] font-medium placeholder:text-white/20 focus:outline-none focus:border-zlendo-teal/30 focus:ring-1 focus:ring-zlendo-teal/20 transition-all font-nunito"
                                                            placeholder="10-digit mobile number"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })()}

                                    <div>
                                        <label className="block text-xs font-bold text-white/30 uppercase tracking-wider mb-2">How can we help? *</label>
                                        <textarea
                                            name="description" required value={formData.description} onChange={handleFormChange} rows={3}
                                            className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-white text-[15px] font-medium placeholder:text-white/20 focus:outline-none focus:border-zlendo-teal/30 focus:ring-1 focus:ring-zlendo-teal/20 transition-all resize-none font-nunito"
                                            placeholder="Tell us about your project requirements or challenges..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-zlendo-teal to-emerald-400 text-white font-black text-lg rounded-2xl shadow-2xl shadow-zlendo-teal/20 hover:shadow-zlendo-teal/30 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-60 font-nunito"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                Book Strategy Call
                                                <ArrowRight className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>

                                    <p className="text-center text-xs text-white/20 font-bold font-nunito">
                                        No credit card required · We respond within 1 business day
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
               10. FINAL CTA — HIGH CONTRAST
            ══════════════════════════════════════ */}
            <section className="py-12 lg:py-16 px-6 lg:px-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zlendo-teal/10 via-[#020204] to-violet-600/10" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-zlendo-teal/8 blur-[200px] rounded-full pointer-events-none" />

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
                            Start transforming how your team{' '}
                            <span className="bg-gradient-to-r from-zlendo-teal via-emerald-300 to-cyan-400 bg-clip-text text-transparent">designs and delivers.</span>
                        </h2>
                        <p className="text-lg text-white/40 font-medium max-w-xl mx-auto mb-12">
                            The only question is whether you&apos;ll have the tools to make your next client say yes in the room.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="#demo-form"
                                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-zlendo-teal to-emerald-400 text-white font-black text-lg rounded-2xl shadow-2xl shadow-zlendo-teal/25 hover:shadow-zlendo-teal/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                            >
                                Book Demo
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-white/[0.05] border border-white/[0.1] text-white font-bold text-lg rounded-2xl hover:bg-white/[0.08] hover:border-white/[0.15] transition-all"
                            >
                                Contact Sales
                                <ChevronRight className="w-5 h-5" />
                            </a>
                        </div>

                        <p className="text-xs text-white/20 font-medium mt-8">
                            No credit card required · Cancel anytime · Works with your existing DWG files · GDPR compliant
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
