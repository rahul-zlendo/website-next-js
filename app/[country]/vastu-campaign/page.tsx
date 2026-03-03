'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User,
    Mail,
    Phone,
    CheckCircle2,
    ArrowRight,
    Upload,
    ChevronDown,
    Ruler,
    Sparkles,
    Target
} from 'lucide-react';
import Link from 'next/link';
import { useCountry } from '@/lib/context/CountryContext';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { getAllListOfValues } from '@/lib/store/slices/enterpriseSlice';
import { createVastuForm, resetFormStatus } from '@/lib/store/slices/formSlice';

const VastuRegistrationContent = () => {
    const params = useParams();
    const { getPath } = useCountry();
    const [formState, setFormState] = useState({
        email: '',
        phone: '',
        floorPlan: undefined as File | undefined
    });

    const dispatch = useAppDispatch();
    const { userTypes: apiUserTypes } = useAppSelector((state) => state.enterprise);
    const { isSubmitting, isSubmitted, error: submitError } = useAppSelector((state) => state.form);

    useEffect(() => {
        dispatch(getAllListOfValues());
        return () => {
            dispatch(resetFormStatus());
        };
    }, [dispatch]);

    const userTypesList = apiUserTypes.length > 0
        ? apiUserTypes.map(item => item.description)
        : ['Individual', 'Architect', 'Builder', 'Interior Designer'];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formState, e, "formState");

        const payload = {
            emailId: formState.email,
            mobileNumber: parseInt(formState.phone, 10),
            floorPlan: formState.floorPlan,
            isActive: true
        };
        dispatch(createVastuForm(payload));
    };

    return (
        <div className="min-h-screen bg-white font-nunito">
            {/* Section 1: Hero */}
            <section className="relative bg-gradient-to-b from-slate-50 to-white overflow-hidden py-16">
                <div className="container mx-auto px-6 lg:px-20 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm mb-8">
                                    <Sparkles className="w-4 h-4 text-zlendo-teal animate-pulse" />
                                    <span className="text-xs font-black uppercase tracking-widest text-zlendo-grey-dark">AI-POWERED VASTU</span>
                                </div>
                                <h1 className="text-3xl md:text-[48px] font-black font-nunito text-zlendo-grey-dark leading-tight mb-6">
                                    AI-Powered Vastu Compliance for Modern Homes and Office
                                </h1>
                                <p className="text-xl text-zlendo-grey-medium font-medium mb-8 leading-relaxed max-w-xl">
                                    Align your home with ancient Vastu wisdom using intelligent automation.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-8 mt-12">
                                    {[
                                        { step: 1, icon: Ruler, title: "Upload Your Floor Plan", desc: "Easily upload your 2D layout to begin AI-based Vastu analysis." },
                                        { step: 2, icon: Sparkles, title: "AI Analyzes Energy & Directions", desc: "Smart automation evaluates room placement, zones, and alignment." },
                                        { step: 3, icon: Target, title: "Get Detailed Scorecard & Remedies", desc: "Receive room-wise compliance score and practical corrections." }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.2 }}
                                            viewport={{ once: true }}
                                            className="flex flex-col md:flex-row lg:flex-row items-center md:items-start lg:items-start gap-4 text-center md:text-left lg:text-left group"
                                        >
                                            <div className="w-12 h-12 rounded-2xl bg-white shadow-lg shadow-zlendo-teal/5 flex items-center justify-center text-zlendo-teal shrink-0 border border-zlendo-teal/10 group-hover:scale-110 transition-transform">
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-zlendo-grey-dark mb-1">{item.title}</h3>
                                                <p className="text-sm text-zlendo-grey-medium font-medium leading-relaxed max-w-[280px] mx-auto md:mx-0">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-[#F8FBFA] rounded-[40px] p-6 lg:p-10 border border-[#eee] shadow-xl shadow-black/[0.02]"
                            >
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-black text-zlendo-grey-dark mb-3">Get Vastu Analysis</h2>
                                    <p className="text-zlendo-grey-medium font-medium">Upload your floor plan to get started.</p>
                                </div>

                                <AnimatePresence mode="wait">
                                    {isSubmitted ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-12"
                                        >
                                            <div className="w-20 h-20 bg-zlendo-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <CheckCircle2 className="w-10 h-10 text-zlendo-teal" />
                                            </div>
                                            <h3 className="text-2xl font-black text-[#1a1a1a] mb-4">Request Submitted!</h3>
                                            <p className="text-zlendo-grey-medium font-medium">
                                                Our AI is analyzing your plan. We'll send the report to your email shortly.
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            {submitError && (
                                                <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm font-bold border border-red-100">
                                                    {submitError}
                                                </div>
                                            )}

                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">Upload Floor Plan *</label>
                                                <div className="relative">
                                                    <Upload className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/30" />
                                                    <input
                                                        type="file"
                                                        required
                                                        accept=".jpg,.jpeg,.png,.pdf"
                                                        className="w-full bg-white border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal transition-all font-medium text-[#1a1a1a] file:hidden"
                                                        onChange={e => setFormState({ ...formState, floorPlan: e.target.files?.[0] })}
                                                    />
                                                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-bold text-zlendo-teal">
                                                        {formState.floorPlan ? 'File Selected' : 'Browse'}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">Email Address *</label>
                                                <div className="relative">
                                                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/30" />
                                                    <input
                                                        type="email"
                                                        required
                                                        placeholder="john@example.com"
                                                        className="w-full bg-white border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal transition-all font-medium text-[#1a1a1a]"
                                                        value={formState.email}
                                                        onChange={e => setFormState({ ...formState, email: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">Mobile Number *</label>
                                                <div className="flex gap-2">
                                                    <div className="w-20 bg-white border border-[#eee] rounded-2xl py-4 flex items-center justify-center font-bold text-sm text-[#1a1a1a]/40">
                                                        +91
                                                    </div>
                                                    <div className="relative flex-1">
                                                        <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/30" />
                                                        <input
                                                            type="tel"
                                                            required
                                                            pattern="[0-9]{10}"
                                                            maxLength={10}
                                                            placeholder="9876543210"
                                                            className="w-full bg-white border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal transition-all font-medium text-[#1a1a1a]"
                                                            value={formState.phone}
                                                            onChange={e => setFormState({ ...formState, phone: e.target.value.replace(/\D/g, '') })}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-zlendo-teal text-white rounded-2xl py-5 font-black text-xl shadow-xl shadow-zlendo-teal/20 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70"
                                            >
                                                {isSubmitting ? (
                                                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                ) : (
                                                    <>
                                                        Submit
                                                        <ArrowRight className="w-6 h-6" />
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Section: Precision Vastu Analysis */}
            <section className="py-10 bg-[#F8FBFA]">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl font-black pointer-events-none text-zlendo-grey-dark mb-12 leading-[1.1]">
                            Precision Vastu Analysis
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
                            {[
                                "Instant Results",
                                "Easy Plan Upload",
                                "AI Accuracy",
                                "Suitable for Homes & Apartments",
                                "Ideal for Buyers, Builders & Architects"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-4 text-left group">
                                    <div className="w-3 h-3 rounded-full bg-zlendo-teal group-hover:scale-125 transition-transform shrink-0" />
                                    <span className="text-lg lg:text-xl font-bold text-[#1a1a1a]">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section: Create Account CTA */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[40px] p-10 relative overflow-hidden shadow-2xl shadow-black/5 border border-[#eee]"
                    >
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-center md:text-left">
                                <h2 className="text-2xl lg:text-4xl font-black text-zlendo-grey-dark mb-4 leading-tight">
                                    Looking for expert support
                                </h2>
                                <p className="text-base lg:text-xl font-medium text-zlendo-grey-medium opacity-80">
                                    Get your house or office plan tailored as per your Vastu analysis
                                </p>
                            </div>
                            <Link
                                href="https://zlendorealty.com/in/contact"
                                className="bg-zlendo-teal text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-opacity-95 transition-all active:scale-95 inline-flex items-center gap-3"
                            >
                                Contact us
                                <ArrowRight className="w-6 h-6" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default function VastuPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-zlendo-teal border-t-transparent rounded-full animate-spin" />
            </div>
        }>
            <VastuRegistrationContent />
        </Suspense>
    );
}
