'use client';

import { useState } from 'react';
import { useCountry } from "@/lib/context/CountryContext";
import { motion, AnimatePresence } from 'framer-motion';
import {
    User, Mail, Phone, MapPin, Upload, FileText,
    CheckCircle2, ArrowRight, Sparkles, Compass, Home,
    Eye, Shield, Building2, Layers, Target, ChevronDown
} from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const PROPERTY_TYPES = [
    'Apartment',
    'Villa',
    'Independent House',
    'Office',
    'Commercial Space',
    'Plot',
];

const PROJECT_STAGES = [
    'Planning',
    'Under Construction',
    'Existing Property',
    'Renovation',
];

export default function VastuConsultationFormClient() {
    const { country } = useCountry();
    const isIndiaSite = typeof country !== "undefined" ? country === "in" : false;
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        propertyType: '',
        projectStage: '',
        requirements: '',
        floorPlan: undefined as File | undefined,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const highlights = [
        { icon: Target, label: 'Personalized Vastu Analysis' },
        { icon: Layers, label: 'Floor Plan Review' },
        { icon: Shield, label: 'Remedies Without Demolition' },
        { icon: Eye, label: 'AI-Powered Visualization Support' },
        { icon: Compass, label: 'Online Consultation Across India' },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(formState.email)) {
            setEmailError(true);
            return;
        }

        setIsSubmitting(true);

        try {
            const PORTAL_ID = "245231518";
            const FORM_ID = "c6193114-34fc-4e1d-b15a-ba4f08f09dea";

            let floorPlanUrl = "";

            if (formState.floorPlan instanceof File) {
                const fileData = new FormData();
                fileData.append("file", formState.floorPlan);
                fileData.append("folderPath", "/vastu-floor-plans");
                fileData.append(
                    "options",
                    JSON.stringify({
                        access: "PUBLIC_INDEXABLE",
                        overwrite: false,
                    })
                );

                const uploadRes = await fetch("/api/hubspot/upload", {
                    method: "POST",
                    body: fileData,
                });

                if (!uploadRes.ok) throw new Error("File upload failed");

                const uploadData = await uploadRes.json();
                floorPlanUrl = uploadData.url;
            }

            const fields: { name: string; value: string }[] = [
                { name: "firstname", value: formState.name },
                { name: "email", value: formState.email },
                { name: "phone", value: formState.phone },
                { name: "city", value: formState.city },
                { name: "property_type", value: formState.propertyType },
                { name: "project_stage", value: formState.projectStage },
                { name: "requirements", value: formState.requirements },
            ];

            if (floorPlanUrl) {
                fields.push({ name: "floor_plan_url", value: floorPlanUrl });
            }

            const payload = {
                fields,
                context: {
                    pageUri: window.location.href,
                    pageName: document.title,
                },
            };

            const res = await fetch(
                `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                }
            );

            if (!res.ok) throw new Error("HubSpot submission failed");

            setIsSubmitted(true);

        } catch (error) {
            console.error("Form error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="min-h-screen bg-white font-nunito">
            <section className="relative bg-gradient-to-b from-slate-50 to-white overflow-hidden py-16 lg:py-20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zlendo-teal/[0.04] blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="container mx-auto px-6 lg:px-20 relative z-10">
                    <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

                        {/* Left Content */}
                        <div className="lg:w-1/2 lg:sticky lg:top-24">
                            <motion.div {...fadeUp}>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zlendo-teal/10 shadow-sm mb-8">
                                    <Sparkles className="w-4 h-4 text-zlendo-teal animate-pulse" />
                                    <span className="text-xs font-black uppercase tracking-widest text-zlendo-teal">Expert Vastu Guidance</span>
                                </div>
                                <h1 className="text-3xl md:text-[44px] font-black text-zlendo-grey-dark leading-tight mb-6">
                                    Expert Vastu Consultation for{' '}
                                    <span className="text-zlendo-teal italic">Your Home & Office</span>
                                {isIndiaSite && <span className="sr-only"> (India)</span>}</h1>
                                <p className="text-lg text-zlendo-grey-medium font-medium mb-4 leading-relaxed">
                                    Get personalized Vastu guidance for apartments, villas, independent homes, offices, and commercial spaces.
                                </p>
                                <p className="text-base text-zlendo-grey-medium/80 font-medium mb-10 leading-relaxed">
                                    Our experts analyze your floor plan and provide practical Vastu recommendations to improve harmony, positivity, and space balance.
                                </p>

                                <h3 className="text-lg font-black text-zlendo-grey-dark mb-4">Why Choose Us?</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                    {highlights.map((item, i) => (
                                        <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.06 }}
                                            className="flex items-center gap-3 group"
                                        >
                                            <div className="w-9 h-9 rounded-xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal shrink-0 group-hover:scale-110 transition-transform">
                                                <item.icon className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-bold text-zlendo-grey-dark">{item.label}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-zlendo-teal/5 border border-zlendo-teal/10">
                                    <CheckCircle2 className="w-5 h-5 text-zlendo-teal shrink-0" />
                                    <p className="text-sm font-bold text-zlendo-grey-dark">Trusted by homeowners across India for Vastu-compliant planning</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Form */}
                        <div className="lg:w-1/2 w-full">
                            <motion.div {...fadeUp} transition={{ delay: 0.2 }}
                                className="bg-[#F8FBFA] rounded-[40px] p-6 lg:p-10 border border-[#eee] shadow-xl shadow-black/[0.02]"
                            >
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl lg:text-3xl font-black text-zlendo-grey-dark mb-3">Request Free Consultation{isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
                                    <p className="text-zlendo-grey-medium font-medium">Fill the form to get personalized Vastu guidance.</p>
                                </div>

                                <AnimatePresence mode="wait">
                                    {isSubmitted ? (
                                        <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                                            <div className="w-20 h-20 bg-zlendo-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <CheckCircle2 className="w-10 h-10 text-zlendo-teal" />
                                            </div>
                                            <h3 className="text-2xl font-black text-[#1a1a1a] mb-4">Request Submitted!</h3>
                                            <p className="text-zlendo-grey-medium font-medium">Our Vastu experts will review your requirements and reach out within 24 hours.</p>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            {/* Full Name */}
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">Full Name *</label>
                                                <div className="relative">
                                                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/30" />
                                                    <input type="text" required placeholder="Your full name"
                                                        className="w-full bg-white border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal transition-all font-medium text-[#1a1a1a]"
                                                        value={formState.name} onChange={e => setFormState({ ...formState, name: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            {/* Mobile Number */}
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">Mobile Number *</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/30" />
                                                    <input type="tel" required placeholder="Mobile number" maxLength={15}
                                                        className="w-full bg-white border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal transition-all font-medium text-[#1a1a1a]"
                                                        value={formState.phone}
                                                        onChange={e => setFormState({ ...formState, phone: e.target.value.replace(/[^\d+\-() ]/g, '').slice(0, 15) })}
                                                    />
                                                </div>
                                            </div>
                                            {/* Email Address */}
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">Email Address *</label>
                                                <div className="relative">
                                                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/30" />
                                                    <input type="email" required placeholder="john@example.com"
                                                        className={`w-full bg-white border rounded-2xl py-4 pl-12 pr-6 outline-none transition-all font-medium text-[#1a1a1a] ${emailError ? 'border-red-500' : 'border-[#eee] focus:border-zlendo-teal'}`}
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
                                            {/* City */}
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">City *</label>
                                                <div className="relative">
                                                    <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/30" />
                                                    <input type="text" required placeholder="Your city"
                                                        className="w-full bg-white border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal transition-all font-medium text-[#1a1a1a]"
                                                        value={formState.city} onChange={e => setFormState({ ...formState, city: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            {/* Property Details Header */}
                                            <div className="pt-2">
                                                <p className="text-xs font-black uppercase tracking-widest text-zlendo-teal ml-2">Property Details</p>
                                            </div>

                                            {/* Property Type */}
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">Property Type *</label>
                                                <div className="relative">
                                                    <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/30" />
                                                    <select required
                                                        className="w-full bg-white border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal transition-all font-medium text-[#1a1a1a] appearance-none cursor-pointer"
                                                        value={formState.propertyType}
                                                        onChange={e => setFormState({ ...formState, propertyType: e.target.value })}
                                                    >
                                                        <option value="">Select property type</option>
                                                        {PROPERTY_TYPES.map(type => (
                                                            <option key={type} value={type}>{type}</option>
                                                        ))}
                                                    </select>
                                                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/50 pointer-events-none" />
                                                </div>
                                            </div>

                                            {/* Project Stage */}
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">Project Stage *</label>
                                                <div className="relative">
                                                    <Layers className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/30" />
                                                    <select required
                                                        className="w-full bg-white border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal transition-all font-medium text-[#1a1a1a] appearance-none cursor-pointer"
                                                        value={formState.projectStage}
                                                        onChange={e => setFormState({ ...formState, projectStage: e.target.value })}
                                                    >
                                                        <option value="">Select project stage</option>
                                                        {PROJECT_STAGES.map(stage => (
                                                            <option key={stage} value={stage}>{stage}</option>
                                                        ))}
                                                    </select>
                                                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/50 pointer-events-none" />
                                                </div>
                                            </div>

                                            {/* Upload Floor Plan */}
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">Upload Floor Plan / Layout</label>
                                                <div className="relative">
                                                    <Upload className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/30" />
                                                    <input type="file" accept=".jpg,.jpeg,.png,.pdf"
                                                        className="w-full bg-white border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal transition-all font-medium text-[#1a1a1a] file:hidden"
                                                        onChange={e => setFormState({ ...formState, floorPlan: e.target.files?.[0] })}
                                                    />
                                                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-bold text-zlendo-teal">
                                                        {formState.floorPlan ? 'File Selected' : 'Browse'}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Requirements */}
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">Vastu Requirements</label>
                                                <div className="relative">
                                                    <FileText className="absolute left-5 top-5 w-4 h-4 text-zlendo-grey-medium/30" />
                                                    <textarea rows={4} placeholder="Tell us about your Vastu requirements..."
                                                        className="w-full bg-white border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal transition-all font-medium text-[#1a1a1a] resize-none"
                                                        value={formState.requirements} onChange={e => setFormState({ ...formState, requirements: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            {/* Submit */}
                                            <button type="submit" disabled={isSubmitting}
                                                className="w-full bg-zlendo-teal text-white rounded-2xl py-5 font-black text-xl shadow-xl shadow-zlendo-teal/20 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-2xl"
                                            >
                                                {isSubmitting ? (
                                                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                ) : (
                                                    <>Get Free Vastu Consultation <ArrowRight className="w-6 h-6" /></>
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
        </div>
    );
}
