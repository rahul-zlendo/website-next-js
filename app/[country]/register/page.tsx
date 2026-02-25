'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User,
    Mail,
    Phone,
    Globe,
    Building2,
    MessageSquare,
    CheckCircle2,
    ArrowRight,
    Zap,
    Cpu,
    Target,
    Users,
    ChevronDown
} from 'lucide-react';
import Image from 'next/image';

// Types for the form
type FormType = 'partnership' | 'training' | 'resource';

interface FormData {
    name: string;
    email: string;
    phone: string;
    website?: string;
    industry: string;
    userType: string;
    comments?: string;
}

const RegistrationContent = () => {
    const searchParams = useSearchParams();
    const [type, setType] = useState<FormType>('partnership');
    const [formState, setFormState] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        website: '',
        industry: '',
        userType: '',
        comments: ''
    });

    useEffect(() => {
        const t = searchParams.get('type') as FormType;
        if (t && ['partnership', 'training', 'resource'].includes(t)) {
            setType(t);
        } else if (searchParams.get('referral')) {
            // Logic for referral could go here, defaulting to partnership for now
            setType('partnership');
        }
    }, [searchParams]);

    const industries = [
        'Architect',
        'Designer',
        'Builder',
        'Developer',
        'Civil'
    ];

    const trainingUserTypes = ['Student', 'Intern', 'Architect', 'Designer', 'Builder', 'Developer', 'Civil', 'Individual'];
    const resourceUserTypes = ['Intern', 'Architect', 'Designer', 'Builder', 'Developer', 'Civil', 'Individual'];

    const getPageContent = () => {
        switch (type) {
            case 'training':
                return {
                    title: "Level Up Your Design Career.",
                    subtitle: "Master AI-powered architectural visualization and get certified by Zlendo Realty.",
                    features: [
                        { icon: Cpu, title: "AI Workflows", desc: "Learn to generate layouts in seconds." },
                        { icon: CheckCircle2, title: "Certification", desc: "Official Zlendo certified professional badge." },
                        { icon: Users, title: "Expert Mentorship", desc: "Direct access to top industry designers." },
                        { icon: Target, title: "Job Placements", desc: "Access to our network of 500+ builders." }
                    ],
                    formTitle: "Start Your Training",
                    formSubtitle: "Join 5,000+ students and professionals today."
                };
            case 'resource':
                return {
                    title: "The Ultimate Design Toolkit.",
                    subtitle: "Download premium HD texture packs, Vastu guides, and project estimation templates.",
                    features: [
                        { icon: Zap, title: "HD Assets", desc: "1000+ high-res textures and 3D models." },
                        { icon: CheckCircle2, title: "Free Templates", desc: "Ready-to-use floor plan layouts." },
                        { icon: Target, title: "Market Reports", desc: "Quarterly residential trend analysis." },
                        { icon: Cpu, title: "Calculators", desc: "Advanced cost and material predictors." }
                    ],
                    formTitle: "Get Your Resources",
                    formSubtitle: "Download instantly after registration."
                };
            default:
                return {
                    title: "No Design Skills? No Problem.",
                    subtitle: "Zlendo Realty Makes It Easy.! Design Your Dream Home with Reality - Start Today!",
                    features: [
                        { icon: Cpu, title: "AI Room Designer", desc: "Generate thousands of layouts in seconds." },
                        { icon: Target, title: "Cost Predictor", desc: "Real-time estimates for materials & labor." },
                        { icon: CheckCircle2, title: "Ultra-HD Renders", desc: "Photorealistic visuals up to 16K resolution." },
                        { icon: Users, title: "Immersive VR", desc: "Walk through your home before it's built." }
                    ],
                    formTitle: "Fill the Form",
                    // formSubtitle: "Join 12,000+ homeowners building their dream home."
                };
        }
    };

    const content = getPageContent();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", { ...formState, type });
        alert("Registration submitted! (Mock integration)");
    };

    return (
        <div className="min-h-screen bg-white flex flex-col lg:flex-row font-outfit">
            {/* Left Side: Content */}
            <div className="lg:w-1/2 bg-[#f8fbfa] p-8 lg:p-20 flex flex-col justify-between relative overflow-hidden">
                {/* Grid Pattern Background */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                >

                    <div className="max-w-xl">
                        <h1 className="text-5xl lg:text-7xl font-black text-[#1a1a1a] leading-[1.05] mb-8 tracking-tight">
                            {content.title.split('.').map((p, i) => (
                                <span key={i} className={i === 1 ? 'text-zlendo-teal' : ''}>
                                    {p}{i === 0 && '.'}
                                </span>
                            ))}
                        </h1>
                        <p className="text-xl text-zlendo-grey-medium font-medium mb-12 leading-relaxed">
                            {content.subtitle}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            {content.features.map((feature, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-zlendo-teal shrink-0 group-hover:scale-110 transition-transform">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="font-bold text-[#1a1a1a]">{feature.title}</h3>
                                        <p className="text-sm text-zlendo-grey-medium leading-tight">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* <div className="mt-20 pt-8 border-t border-black/5 relative z-10">
                    <p className="text-sm text-zlendo-grey-medium font-medium">
                        © 2026 Zlendo Technologies. All rights reserved.
                    </p>
                </div> */}

                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-zlendo-teal/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-zlendo-orange/5 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>

            {/* Right Side: Form */}
            <div className="lg:w-1/2 bg-white flex items-center justify-center p-6 lg:p-20 relative overflow-hidden">
                {/* Background blur for contrast */}
                <div className="absolute inset-0 bg-[#f8fbfa]/30" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full max-w-[540px] bg-white rounded-[40px] shadow-2xl shadow-black/[0.04] p-8 lg:p-12 relative z-10 border border-[#f0f0f0]"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-black text-[#1a1a1a] mb-2">{content.formTitle}</h2>
                        <p className="text-zlendo-grey-medium font-medium">{content.formSubtitle}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-medium uppercase tracking-widest text-zlendo-grey-medium opacity-60 ml-2">Full Name *</label>
                            <div className="relative">
                                <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/40" />
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-[#f9fafb] border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal focus:bg-white transition-all font-normal text-[#1a1a1a]"
                                    // placeholder="e.g. Rahul Sharma"
                                    value={formState.name}
                                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[11px] font-medium uppercase tracking-widest text-zlendo-grey-medium opacity-60 ml-2">Email Address *</label>
                            <div className="relative">
                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/40" />
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-[#f9fafb] border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal focus:bg-white transition-all font-normal text-[#1a1a1a]"
                                    value={formState.email}
                                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[11px] font-medium uppercase tracking-widest text-zlendo-grey-medium opacity-60 ml-2">Mobile Number *</label>
                            <div className="flex gap-2">
                                <div className="w-24 bg-[#f9fafb] border border-[#eee] rounded-2xl py-4 px-4 font-normal text-sm flex items-center justify-between text-[#1a1a1a]/60">
                                    +91 <ChevronDown className="w-4 h-4 opacity-50" />
                                </div>
                                <div className="relative flex-1">
                                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/40" />
                                    <input
                                        type="tel"
                                        required
                                        pattern="[0-9]{10}"
                                        maxLength={10}
                                        className="w-full bg-[#f9fafb] border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal focus:bg-white transition-all font-normal text-[#1a1a1a]"
                                        value={formState.phone}
                                        onChange={e => setFormState({ ...formState, phone: e.target.value.replace(/\D/g, '') })}
                                    />
                                </div>
                            </div>
                        </div>

                        {type === 'partnership' ? (
                            <>
                                {/* <div className="space-y-1.5">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-zlendo-grey-medium opacity-60 ml-2">Website (Optional)</label>
                                    <div className="relative">
                                        <Globe className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/40" />
                                        <input
                                            type="url"
                                            className="w-full bg-[#f9fafb] border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal focus:bg-white transition-all font-bold text-[#1a1a1a] placeholder:text-black/20"
                                            placeholder="https://yourwebsite.com"
                                            value={formState.website}
                                            onChange={e => setFormState({ ...formState, website: e.target.value })}
                                        />
                                    </div>
                                </div> */}
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-zlendo-grey-medium opacity-60 ml-2">Type of Industry *</label>
                                    <div className="relative">
                                        <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/40" />
                                        <select
                                            required
                                            className={`w-full bg-[#f9fafb] border border-[#eee] rounded-2xl py-4 pl-12 pr-10 outline-none focus:border-zlendo-teal focus:bg-white transition-all font-normal appearance-none ${!formState.industry ? 'text-[#1a1a1a]/50' : 'text-[#1a1a1a]'}`}
                                            value={formState.industry}
                                            onChange={e => setFormState({ ...formState, industry: e.target.value })}
                                        >
                                            <option value="" className="text-[#1a1a1a]/50">Select Industry</option>
                                            {industries.map(ind => <option key={ind} value={ind.toLowerCase()} className="text-[#1a1a1a]">{ind}</option>)}
                                        </select>
                                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/70 pointer-events-none" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-zlendo-grey-medium opacity-60 ml-2">Comments</label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-5 top-5 w-4 h-4 text-zlendo-grey-medium/40" />
                                        <textarea
                                            className="w-full bg-[#f9fafb] border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal focus:bg-white transition-all font-normal text-[#1a1a1a] h-24 resize-none"
                                            value={formState.comments}
                                            onChange={e => setFormState({ ...formState, comments: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-zlendo-grey-medium opacity-60 ml-2">Industries *</label>
                                    <div className="relative">
                                        <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/40" />
                                        <select
                                            required
                                            className={`w-full bg-[#f9fafb] border border-[#eee] rounded-2xl py-4 pl-12 pr-10 outline-none focus:border-zlendo-teal focus:bg-white transition-all font-normal appearance-none ${!formState.industry ? 'text-[#1a1a1a]/50' : 'text-[#1a1a1a]'}`}
                                            value={formState.industry}
                                            onChange={e => setFormState({ ...formState, industry: e.target.value })}
                                        >
                                            <option value="" className="text-[#1a1a1a]/50">Select Industry</option>
                                            {industries.map(ind => <option key={ind} value={ind.toLowerCase()} className="text-[#1a1a1a]">{ind}</option>)}
                                        </select>
                                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/70 pointer-events-none" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-zlendo-grey-medium opacity-60 ml-2">Type of User *</label>
                                    <div className="relative">
                                        <Users className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/40" />
                                        <select
                                            required
                                            className={`w-full bg-[#f9fafb] border border-[#eee] rounded-2xl py-4 pl-12 pr-10 outline-none focus:border-zlendo-teal focus:bg-white transition-all font-normal appearance-none ${!formState.userType ? 'text-[#1a1a1a]/50' : 'text-[#1a1a1a]'}`}
                                            value={formState.userType}
                                            onChange={e => setFormState({ ...formState, userType: e.target.value })}
                                        >
                                            <option value="" className="text-[#1a1a1a]/50">Select User Type</option>
                                            {(type === 'training' ? trainingUserTypes : resourceUserTypes).map(u => (
                                                <option key={u} value={u.toLowerCase()} className="text-[#1a1a1a]">{u}</option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/70 pointer-events-none" />
                                    </div>
                                </div>
                            </>
                        )}

                        <input type="hidden" name="type" value={type} />

                        <button
                            type="submit"
                            className="w-full bg-zlendo-teal text-white rounded-[20px] py-5 font-black text-xl shadow-xl shadow-zlendo-teal/20 active:scale-95 hover:bg-zlendo-teal/90 transition-all flex items-center justify-center gap-3 mt-4"
                        >
                            {type === 'resource' ? 'Download for Free' : 'Submit'}
                            <ArrowRight className="w-6 h-6" />
                        </button>

                        {/* <div className="mt-8">
                            <div className="text-center pt-2">
                                <p className="text-sm font-bold text-zlendo-grey-medium">
                                    Already have an account? <a href="/signin" className="text-zlendo-teal">Sign In</a>
                                </p>
                            </div>
                        </div> */}
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default function RegisterPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-zlendo-teal border-t-transparent rounded-full animate-spin" />
            </div>
        }>
            <RegistrationContent />
        </Suspense>
    );
}
