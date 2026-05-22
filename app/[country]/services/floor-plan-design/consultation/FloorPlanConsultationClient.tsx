'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User, Mail, Phone, MapPin, Upload, FileText,
    CheckCircle2, ArrowRight, Sparkles, Home, Layers,
    Eye, Shield, Clock, PenTool
} from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function FloorPlanConsultationClient() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        requirements: '',
        sitePhotos: undefined as File | undefined,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const highlights = [
        { icon: PenTool, label: 'Customized Floor Plan Design' },
        { icon: Home, label: 'Smart Space Optimization' },
        { icon: Layers, label: '2D + 3D Visualization' },
        { icon: Shield, label: 'Vastu-Friendly Layouts' },
        { icon: Eye, label: 'Expert Design Consultation' },
        { icon: Clock, label: 'Fast Design Turnaround' },
    ];

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //     if (!emailRegex.test(formState.email)) {
    //         setEmailError(true);
    //         return;
    //     }
    //     setIsSubmitting(true);
    //     // Simulate API call
    //     await new Promise(resolve => setTimeout(resolve, 1500));
    //     setIsSubmitting(false);
    //     setIsSubmitted(true);
    // };

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formState, "inputs");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formState.email)) {
        setEmailError(true);
        return;
    }

    setIsSubmitting(true);

    try {
        const PORTAL_ID = "YOUR_PORTAL_ID";        // 🔁 Replace this
        const FORM_ID = "YOUR_FORM_GUID";           // 🔁 Replace this
        const HS_ACCESS_TOKEN = "YOUR_PRIVATE_APP_TOKEN"; // 🔁 Replace this

        // ── Step 1: Upload file if selected ──────────────────────────────
        let sitePhotoUrl = "";

        if (formState.sitePhotos instanceof File) {
            const fileData = new FormData();
            fileData.append("file", formState.sitePhotos);
            fileData.append("folderPath", "/site-photos");
            fileData.append(
                "options",
                JSON.stringify({
                    access: "PUBLIC_INDEXABLE",
                    overwrite: false,
                })
            );

            const uploadRes = await fetch("https://api.hubapi.com/files/v3/files", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${HS_ACCESS_TOKEN}`,
                },
                body: fileData,
            });

            if (!uploadRes.ok) throw new Error("File upload failed");

            const uploadData = await uploadRes.json();
            sitePhotoUrl = uploadData.url;
            console.log("File uploaded:", sitePhotoUrl);
        }

        // ── Step 2: Build fields array ────────────────────────────────────
        const fields: { name: string; value: string }[] = [
            { name: "firstname", value: formState.name },
            { name: "email",     value: formState.email },
            { name: "phone",     value: formState.phone },
            { name: "city",      value: formState.location },
            { name: "message",   value: formState.requirements },
        ];

        if (sitePhotoUrl) {
            fields.push({ name: "site_photo_url", value: sitePhotoUrl });
        }

        // ── Step 3: Submit to HubSpot form ────────────────────────────────
        const payload = {
            fields,
            context: {
                pageUri: window.location.href,
                pageName: document.title,
            },
        };

        console.log(payload, "Submitting to HubSpot");

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
                                    <span className="text-xs font-black uppercase tracking-widest text-zlendo-teal">Expert Floor Planning</span>
                                </div>
                                <h1 className="text-3xl md:text-[44px] font-black text-zlendo-grey-dark leading-tight mb-6">
                                    Design Your Dream Home with{' '}
                                    <span className="text-zlendo-teal italic">Expert Floor Planning</span>
                                </h1>
                                <p className="text-lg text-zlendo-grey-medium font-medium mb-4 leading-relaxed">
                                    Get customized 2D &amp; 3D floor plans tailored to your plot, lifestyle, and family needs.
                                </p>
                                <p className="text-base text-zlendo-grey-medium/80 font-medium mb-10 leading-relaxed">
                                    We help homeowners create smart, spacious, and Vastu-friendly home layouts before construction begins.
                                </p>

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
                                    <p className="text-sm font-bold text-zlendo-grey-dark">Trusted by homeowners for modern home planning solutions</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Form */}
                        <div className="lg:w-1/2 w-full">
                            <motion.div {...fadeUp} transition={{ delay: 0.2 }}
                                className="bg-[#F8FBFA] rounded-[40px] p-6 lg:p-10 border border-[#eee] shadow-xl shadow-black/[0.02]"
                            >
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl lg:text-3xl font-black text-zlendo-grey-dark mb-3">Get Floor Plan Consultation</h2>
                                    <p className="text-zlendo-grey-medium font-medium">Fill the form to get a personalized floor planning consultation.</p>
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
                                            {/* Location */}
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">Location / Address</label>
                                                <div className="relative">
                                                    <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/30" />
                                                    <input type="text" placeholder="City, State or Full Address"
                                                        className="w-full bg-white border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal transition-all font-medium text-[#1a1a1a]"
                                                        value={formState.location} onChange={e => setFormState({ ...formState, location: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            {/* Upload */}
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">Upload Site Photos</label>
                                                <div className="relative">
                                                    <Upload className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/30" />
                                                    <input type="file" accept=".jpg,.jpeg,.png,.pdf"
                                                        className="w-full bg-white border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal transition-all font-medium text-[#1a1a1a] file:hidden"
                                                        onChange={e => setFormState({ ...formState, sitePhotos: e.target.files?.[0] })}
                                                    />
                                                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-bold text-zlendo-teal">
                                                        {formState.sitePhotos ? 'File Selected' : 'Browse'}
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Requirements */}
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]/40 ml-2">Requirements</label>
                                                <div className="relative">
                                                    <FileText className="absolute left-5 top-5 w-4 h-4 text-zlendo-grey-medium/30" />
                                                    <textarea rows={4} placeholder="Describe your plot dimensions, room preferences, budget, Vastu needs..."
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
