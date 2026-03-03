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
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { getAllListOfValues } from '@/lib/store/slices/enterpriseSlice';
import { createVastuForm, resetFormStatus } from '@/lib/store/slices/formSlice';

const VastuRegistrationContent = () => {
    const params = useParams();
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        userType: '',
        comments: '',
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

        const selectedUserType = apiUserTypes.find(item => item.description.toLowerCase() === formState.userType.toLowerCase());
        const userTypeId = selectedUserType ? selectedUserType.lov_Value : 0;

        const payload = {
            fullName: formState.name,
            emailId: formState.email,
            mobileNumber: parseInt(formState.phone, 10),
            userType: userTypeId,
            comments: formState.comments || "",
            floorPlan: formState.floorPlan,
            isActive: true
        };
        dispatch(createVastuForm(payload));
    };

    return (
        <div className="min-h-screen bg-white font-outfit">
            {/* Section 1: Hero */}
            <section className="relative bg-[#F8FBFA] overflow-hidden py-16 lg:py-24">
                <div className="container mx-auto px-6 lg:px-20 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zlendo-teal/10 text-zlendo-teal text-sm font-bold mb-6">
                                    <Sparkles className="w-4 h-4" />
                                    AI-POWERED VASTU
                                </div>
                                <h1 className="text-[28px] md:text-[42px] lg:text-[56px] font-black text-[#1a1a1a] leading-tight mb-6">
                                    AI-Powered Vastu Compliance for <span className="text-zlendo-teal">Modern Homes and Office</span>
                                </h1>
                                <p className="text-xl text-zlendo-grey-medium font-medium mb-8 leading-relaxed max-w-xl">
                                    Align your home with ancient Vastu wisdom using intelligent automation.
                                </p>
                            </motion.div>
                        </div>
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/assets/business/bim-support.png"
                                        alt="AI Vastu Analysis"
                                        width={800}
                                        height={500}
                                        className="w-full h-auto object-cover"
                                    />
                                    {/* Overlay badge like in image 1 */}
                                    <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4">
                                        <div className="w-10 h-10 bg-zlendo-teal rounded-xl flex items-center justify-center text-white">
                                            <Sparkles className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-zlendo-grey-medium/40 uppercase tracking-widest">Processing</p>
                                            <p className="text-lg font-bold text-[#1a1a1a]">Done</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-zlendo-teal/20 rounded-full blur-3xl" />
                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-zlendo-orange/10 rounded-full blur-3xl" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Steps & Form */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        {/* Left: Steps */}
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl lg:text-4xl font-black text-[#1a1a1a] mb-12">
                                Vastu Check in 3 Simple Steps:
                            </h2>
                            <div className="space-y-12">
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
                                        className="flex gap-6 items-start"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-[#F8FBFA] flex items-center justify-center text-zlendo-teal shrink-0 shadow-sm border border-[#eee]">
                                            <item.icon className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                                            <p className="text-zlendo-grey-medium font-medium leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Product Report Summary Section */}
                            <div className="mt-16 p-8 rounded-3xl bg-zlendo-teal/5 border border-zlendo-teal/10">
                                <h3 className="text-xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="w-6 h-6 text-zlendo-teal" />
                                    Product Report Summary
                                </h3>
                                <p className="text-zlendo-grey-medium font-medium mb-6">
                                    Get an instant, professional analysis of your floor plan with actionable insights.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#eee]">
                                        <p className="text-xs font-bold text-zlendo-grey-medium/40 uppercase mb-1">Energy Score</p>
                                        <p className="text-2xl font-black text-zlendo-teal">85/100</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#eee]">
                                        <p className="text-xs font-bold text-zlendo-grey-medium/40 uppercase mb-1">Compliance</p>
                                        <p className="text-2xl font-black text-zlendo-orange">High</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-[#F8FBFA] rounded-[40px] p-8 lg:p-12 border border-[#eee] shadow-xl shadow-black/[0.02]"
                            >
                                <div className="text-center mb-10">
                                    <h2 className="text-3xl font-black text-[#1a1a1a] mb-3">Get Vastu Analysis</h2>
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
                                                <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">Full Name *</label>
                                                <div className="relative">
                                                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/30" />
                                                    <input
                                                        type="text"
                                                        required
                                                        placeholder="John Doe"
                                                        className="w-full bg-white border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal transition-all font-medium text-[#1a1a1a]"
                                                        value={formState.name}
                                                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                                                    />
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

                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">User Type</label>
                                                <div className="relative">
                                                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/30" />
                                                    <select
                                                        className="w-full bg-white border border-[#eee] rounded-2xl py-4 pl-12 pr-10 outline-none focus:border-zlendo-teal transition-all font-medium text-[#1a1a1a] appearance-none"
                                                        value={formState.userType}
                                                        onChange={e => setFormState({ ...formState, userType: e.target.value })}
                                                    >
                                                        <option value="">Select User Type</option>
                                                        {userTypesList.map(type => (
                                                            <option key={type} value={type}>{type}</option>
                                                        ))}
                                                    </select>
                                                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/40 pointer-events-none" />
                                                </div>
                                            </div>

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

            {/* Combined Section: Precision Analysis & Expert Support */}
            <section className="py-20 bg-[#F8FBFA]">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Left: Precision Vastu Analysis */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-[48px] font-black text-[#1a1a1a] mb-12">
                                Precision Vastu <br /> Analysis
                            </h2>
                            <div className="space-y-6">
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

                        {/* Right: Expert Support CTA */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-zlendo-teal rounded-[40px] p-10 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-zlendo-teal/20"
                        >
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                            <div className="relative z-10">
                                <h2 className="text-3xl lg:text-4xl font-black mb-6 leading-tight">
                                    Looking for expert support?
                                </h2>
                                <p className="text-lg lg:text-xl font-medium mb-10 opacity-90">
                                    Get your house or office plan tailored as per your Vastu analysis.
                                </p>
                                <button className="bg-white text-zlendo-teal px-10 py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-opacity-95 transition-all active:scale-95 inline-flex items-center gap-3">
                                    Contact us
                                    <ArrowRight className="w-6 h-6" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
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
