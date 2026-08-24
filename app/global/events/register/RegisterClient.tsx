'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User, Mail, Phone, Briefcase, ChevronLeft,
    CheckCircle2, ArrowRight, Sparkles, Building2,
    CalendarDays, Video, CircleCheck, Info
} from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function RegisterClient() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const highlights = [
        { icon: CalendarDays, label: 'Exclusive Live Sessions' },
        { icon: Video, label: 'Event Recordings Sent' },
        { icon: Building2, label: 'Industry Insights' },
        { icon: Sparkles, label: 'Live Q&A with Experts' },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(formState.email)) {
            setEmailError(true);
            return;
        }
        setIsSubmitting(true);
        // Simulate API completion
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-white font-nunito">
            <section className="relative bg-gradient-to-b from-slate-50 to-white overflow-hidden py-10 lg:py-16">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zlendo-teal/[0.04] blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="container mx-auto px-6 lg:px-20 relative z-10">

                    <Link href="/events" className="inline-flex items-center gap-2 text-slate-500 font-bold hover:text-slate-900 transition-colors mb-10 text-sm">
                        <ChevronLeft className="w-4 h-4" /> Back to Upcoming Events
                    </Link>

                    <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

                        {/* Left Content */}
                        <div className="lg:w-1/2 lg:sticky lg:top-32">
                            <motion.div {...fadeUp}>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zlendo-teal/10 shadow-sm mb-8">
                                    <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
                                    <span className="text-xs font-black uppercase tracking-widest text-orange-500">Save Your Seat</span>
                                </div>
                                <h1 className="text-3xl md:text-[44px] font-black text-zlendo-grey-dark leading-tight mb-6">
                                    Join the Future of{' '}
                                    <span className="text-orange-500 italic">Design Collaboration</span>
                                </h1>
                                <p className="text-lg text-zlendo-grey-medium font-medium mb-4 leading-relaxed">
                                    Fill out the registration form to secure your spot.
                                </p>
                                <p className="text-base text-zlendo-grey-medium/80 font-medium mb-10 leading-relaxed">
                                    Once approved, you'll receive a calendar invite with the join link to our exclusive PropTech sessions. Space is limited, so reserve your spot early.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                    {highlights.map((item, i) => (
                                        <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.06 }}
                                            className="flex items-center gap-3 group"
                                        >
                                            <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 group-hover:scale-110 transition-transform">
                                                <item.icon className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-bold text-zlendo-grey-dark">{item.label}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-orange-50 border border-orange-100">
                                    <Info className="w-5 h-5 text-orange-500 shrink-0" />
                                    <p className="text-sm font-bold text-zlendo-grey-dark">Approvals are processed manually and may take up to 24 hours.</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Form */}
                        <div className="lg:w-1/2 w-full">
                            <motion.div {...fadeUp} transition={{ delay: 0.2 }}
                                className="bg-[#F8FBFA] rounded-[40px] p-6 lg:p-10 border border-[#eee] shadow-xl shadow-black/[0.02]"
                            >
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl lg:text-3xl font-black text-zlendo-grey-dark mb-3">Event Registration</h2>
                                    <p className="text-zlendo-grey-medium font-medium">Please enter exact details connecting to your Zoom account.</p>
                                </div>

                                <AnimatePresence mode="wait">
                                    {isSubmitted ? (
                                        <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                                            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <CheckCircle2 className="w-10 h-10 text-green-500" />
                                            </div>
                                            <h3 className="text-2xl font-black text-[#1a1a1a] mb-4">Registration Received!</h3>
                                            <p className="text-zlendo-grey-medium font-medium mb-8">We've sent a preliminary confirmation receipt to your email address.</p>
                                            <button onClick={() => setIsSubmitted(false)} className="text-orange-500 font-bold hover:text-orange-600 transition-colors">
                                                Submit another registration
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            {/* Name */}
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">Full Name *</label>
                                                <div className="relative">
                                                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/30" />
                                                    <input type="text" required placeholder="Your full name"
                                                        className="w-full bg-white border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-orange-500 transition-all font-medium text-[#1a1a1a]"
                                                        value={formState.name} onChange={e => setFormState({ ...formState, name: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            {/* Email */}
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">Work Email *</label>
                                                <div className="relative">
                                                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/30" />
                                                    <input type="email" required placeholder="name@company.com"
                                                        className={`w-full bg-white border rounded-2xl py-4 pl-12 pr-6 outline-none transition-all font-medium text-[#1a1a1a] ${emailError ? 'border-red-500' : 'border-[#eee] focus:border-orange-500'}`}
                                                        value={formState.email}
                                                        onChange={e => {
                                                            const v = e.target.value.toLowerCase();
                                                            setFormState({ ...formState, email: v });
                                                            setEmailError(false);
                                                        }}
                                                    />
                                                </div>
                                                {emailError && <p className="mt-1 text-[10px] font-bold text-red-500 ml-2">Please enter a valid email address</p>}
                                            </div>
                                            {/* Phone */}
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">Phone Number *</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/30" />
                                                    <input type="tel" required placeholder="Mobile number" maxLength={15}
                                                        className="w-full bg-white border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-orange-500 transition-all font-medium text-[#1a1a1a]"
                                                        value={formState.phone}
                                                        onChange={e => setFormState({ ...formState, phone: e.target.value.replace(/[^\d+\-() ]/g, '').slice(0, 15) })}
                                                    />
                                                </div>
                                            </div>
                                            {/* Company & Job */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                <div className="space-y-1.5">
                                                    <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">Company *</label>
                                                    <div className="relative">
                                                        <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/30" />
                                                        <input type="text" required placeholder="Organization"
                                                            className="w-full bg-white border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-orange-500 transition-all font-medium text-[#1a1a1a]"
                                                            value={formState.company} onChange={e => setFormState({ ...formState, company: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">Job Title *</label>
                                                    <div className="relative">
                                                        <Briefcase className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/30" />
                                                        <input type="text" required placeholder="e.g. Architect"
                                                            className="w-full bg-white border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-orange-500 transition-all font-medium text-[#1a1a1a]"
                                                            value={formState.jobTitle} onChange={e => setFormState({ ...formState, jobTitle: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-4">
                                                <button type="submit" disabled={isSubmitting}
                                                    className="w-full bg-orange-500 text-white rounded-2xl py-5 font-black text-xl shadow-xl shadow-orange-500/20 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-2xl hover:bg-orange-600"
                                                >
                                                    {isSubmitting ? (
                                                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                    ) : (
                                                        <>Complete Registration <ArrowRight className="w-6 h-6" /></>
                                                    )}
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
