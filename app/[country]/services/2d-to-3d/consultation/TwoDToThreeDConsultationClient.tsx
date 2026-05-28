'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User, Mail, Phone, Building2, Upload, FileText,
    CheckCircle2, ArrowRight, Sparkles, Box, Layers,
    Eye, Shield, Clock, ChevronDown
} from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const PROJECT_TYPES = [
    'Residential Home',
    'Apartment / Flat',
    'Villa / Duplex',
    'Office Space',
    'Commercial / Retail',
    'Other',
];

export default function TwoDToThreeDConsultationClient() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        organization: '',
        projectType: '',
        projectDetails: '',
        planFile: undefined as File | undefined,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const highlights = [
        { icon: Box, label: '3D Floor Plan Conversion' },
        { icon: Eye, label: 'Interior & Exterior Visualization' },
        { icon: Sparkles, label: 'Realistic 3D Renders' },
        { icon: Layers, label: 'House & Office Design Support' },
        { icon: Clock, label: 'Fast Delivery & Expert Assistance' },
    ];

    const whyChoose = [
        'Professional Design Team',
        'Affordable Pricing',
        'Quick Turnaround',
        'Residential & Commercial Projects',
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
            const FORM_ID = "d29f5649-295e-4718-9b7a-b7e0a79a4c11";

            let planFileUrl = "";

            if (formState.planFile instanceof File) {
                const fileData = new FormData();
                fileData.append("file", formState.planFile);
                fileData.append("folderPath", "/2d-to-3d-plans");
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
                planFileUrl = uploadData.url;
            }

            const fields: { name: string; value: string }[] = [
                { name: "firstname", value: formState.name },
                { name: "email", value: formState.email },
                { name: "phone", value: formState.phone },
                { name: "company", value: formState.organization },
                { name: "project_type", value: formState.projectType },
                { name: "requirements", value: formState.projectDetails },
            ];

            if (planFileUrl) {
                fields.push({ name: "site_photo_url", value: planFileUrl });
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
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/[0.04] blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="container mx-auto px-6 lg:px-20 relative z-10">
                    <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

                        {/* Left Content */}
                        <div className="lg:w-1/2 lg:sticky lg:top-24">
                            <motion.div {...fadeUp}>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-500/10 shadow-sm mb-8">
                                    <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
                                    <span className="text-xs font-black uppercase tracking-widest text-blue-600">2D to 3D Conversion</span>
                                </div>
                                <h1 className="text-3xl md:text-[44px] font-black text-zlendo-grey-dark leading-tight mb-6">
                                    Convert Your 2D Floor Plan Into{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-600">Stunning 3D Designs</span>
                                </h1>
                                <p className="text-lg text-zlendo-grey-medium font-medium mb-4 leading-relaxed">
                                    Upload your house or office floor plan and get realistic 3D visualizations, walkthroughs, and high-quality renders for better planning and presentation.
                                </p>

                                <p className="text-sm font-black uppercase tracking-widest text-zlendo-grey-dark/40 mb-4">What You Get</p>
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

                                <p className="text-sm font-black uppercase tracking-widest text-zlendo-grey-dark/40 mb-4">Why Choose Us</p>
                                <div className="space-y-3 mb-10">
                                    {whyChoose.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-zlendo-teal shrink-0" />
                                            <span className="text-sm font-bold text-zlendo-grey-dark">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-zlendo-teal/5 border border-zlendo-teal/10">
                                    <Shield className="w-5 h-5 text-zlendo-teal shrink-0" />
                                    <p className="text-sm font-bold text-zlendo-grey-dark">Your project details are safe and confidential.</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Form */}
                        <div className="lg:w-1/2 w-full">
                            <motion.div {...fadeUp} transition={{ delay: 0.2 }}
                                className="bg-[#F8FBFA] rounded-[40px] p-6 lg:p-10 border border-[#eee] shadow-xl shadow-black/[0.02]"
                            >
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl lg:text-3xl font-black text-zlendo-grey-dark mb-3">Request Free 2D to 3D Consultation</h2>
                                    <p className="text-zlendo-grey-medium font-medium">Fill out the form and upload your floor plan to get started.</p>
                                </div>

                                <AnimatePresence mode="wait">
                                    {isSubmitted ? (
                                        <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                                            <div className="w-20 h-20 bg-zlendo-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <CheckCircle2 className="w-10 h-10 text-zlendo-teal" />
                                            </div>
                                            <h3 className="text-2xl font-black text-[#1a1a1a] mb-4">Request Submitted!</h3>
                                            <p className="text-zlendo-grey-medium font-medium">Our design team will review your requirements and reach out within 24 hours.</p>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            {/* Name */}
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
                                            {/* Email */}
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
                                            {/* Phone */}
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">Phone Number *</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/30" />
                                                    <input type="tel" required placeholder="Mobile number" maxLength={15}
                                                        className="w-full bg-white border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal transition-all font-medium text-[#1a1a1a]"
                                                        value={formState.phone}
                                                        onChange={e => setFormState({ ...formState, phone: e.target.value.replace(/[^\d+\-() ]/g, '').slice(0, 15) })}
                                                    />
                                                </div>
                                            </div>
                                            {/* Organization */}
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">Organization / Company Name</label>
                                                <div className="relative">
                                                    <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/30" />
                                                    <input type="text" placeholder="Company or organization name"
                                                        className="w-full bg-white border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal transition-all font-medium text-[#1a1a1a]"
                                                        value={formState.organization} onChange={e => setFormState({ ...formState, organization: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            {/* Project Type */}
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">Project Type *</label>
                                                <div className="relative">
                                                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/30 pointer-events-none" />
                                                    <select required
                                                        className="w-full bg-white border border-[#eee] rounded-2xl py-4 pl-6 pr-12 outline-none focus:border-zlendo-teal transition-all font-medium text-[#1a1a1a] appearance-none"
                                                        value={formState.projectType}
                                                        onChange={e => setFormState({ ...formState, projectType: e.target.value })}
                                                    >
                                                        <option value="">Select project type</option>
                                                        {PROJECT_TYPES.map((type) => (
                                                            <option key={type} value={type}>{type}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            {/* Project Details */}
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">Project Details</label>
                                                <div className="relative">
                                                    <FileText className="absolute left-5 top-5 w-4 h-4 text-zlendo-grey-medium/30" />
                                                    <textarea rows={4} placeholder="Describe your project requirements, room preferences, style preferences..."
                                                        className="w-full bg-white border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal transition-all font-medium text-[#1a1a1a] resize-none"
                                                        value={formState.projectDetails} onChange={e => setFormState({ ...formState, projectDetails: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            {/* Upload */}
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">Upload Your 2D Plan</label>
                                                <div className="relative">
                                                    <Upload className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/30" />
                                                    <input type="file" accept=".jpg,.jpeg,.png,.pdf,.dwg"
                                                        className="w-full bg-white border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal transition-all font-medium text-[#1a1a1a] file:hidden"
                                                        onChange={e => setFormState({ ...formState, planFile: e.target.files?.[0] })}
                                                    />
                                                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-bold text-zlendo-teal">
                                                        {formState.planFile ? 'File Selected' : 'PDF, JPG, PNG, DWG'}
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Submit */}
                                            <button type="submit" disabled={isSubmitting}
                                                className="w-full bg-zlendo-teal text-white rounded-2xl py-5 font-black text-xl shadow-xl shadow-zlendo-teal/20 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-2xl"
                                            >
                                                {isSubmitting ? (
                                                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                ) : (
                                                    <>Book My Consultation <ArrowRight className="w-6 h-6" /></>
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
