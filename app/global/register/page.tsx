'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter, useParams } from 'next/navigation';
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
    ChevronDown,
    Ruler,
    Sparkles,
    Upload
} from 'lucide-react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { getAllListOfValues } from '@/lib/store/slices/enterpriseSlice';
import { createPartnershipForm, createTrainingForm, createResourceForm, createVastuForm, resetFormStatus } from '@/lib/store/slices/formSlice';

// Types for the form
type FormType = 'partnership' | 'training' | 'resource' | 'vastu';

interface FormData {
    name: string;
    email: string;
    phone: string;
    website?: string;
    industry: string;
    userType: string;
    comments?: string;
    floorPlan?: File;
}

const RegistrationContent = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const params = useParams();
    const isIndiaSite = params?.country === 'in';
    const [type, setType] = useState<FormType>('partnership');
    const [formState, setFormState] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        website: '',
        industry: '',
        userType: '',
        comments: '',
        floorPlan: undefined
    });
    const [emailError, setEmailError] = useState(false);

    useEffect(() => {
        const t = searchParams.get('type') as FormType;
        if (t === 'vastu') {
            router.push(`/${params.country}/vastu-campaign`);
            return;
        }
        if (t && ['partnership', 'training', 'resource'].includes(t)) {
            setType(t);
        } else if (searchParams.get('referral')) {
            // Logic for referral could go here, defaulting to partnership for now
            setType('partnership');
        }
    }, [searchParams]);

    const dispatch = useAppDispatch();
    const { industries: apiIndustries, userTypes: apiUserTypes, isLoadingIndustries } = useAppSelector((state) => state.enterprise);
    const { isSubmitting, isSubmitted, error: submitError } = useAppSelector((state) => state.form);

    useEffect(() => {
        dispatch(getAllListOfValues());
        return () => {
            dispatch(resetFormStatus());
        };
    }, [dispatch]);

    // Handle success feedback - removed confetti and keep it simple
    useEffect(() => {
        if (isSubmitted) {
            // Success state is handled in the UI below
            console.log("Form submitted successfully");
        }
        if (submitError) {
            console.error(submitError);
        }
    }, [isSubmitted, submitError]);

    // Fallback industries if API fails or is loading
    const industries = apiIndustries.length > 0
        ? apiIndustries.map(item => item.description)
        : [
            'Architect',
            'Designer',
            'Builder',
            'Developer',
            'Civil'
        ];

    const userTypesList = apiUserTypes.length > 0
        ? apiUserTypes.map(item => item.description)
        : ['Student', 'Intern', 'Architect', 'Designer', 'Builder', 'Developer', 'Civil', 'Individual'];

    const trainingUserTypes = userTypesList;
    const resourceUserTypes = userTypesList;

    const getPageContent = () => {
        switch (type) {
            case 'training':
                return {
                    title: "Enroll in Zlendo Realty AI Design Training.",
                    subtitle: "Learn. Design. Build.",
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
            case 'vastu':
                return {
                    title: "AI-Powered Vastu Compliance for Modern Homes and Office",
                    subtitle: "Align your home with ancient Vastu wisdom using intelligent automation.",
                    features: [
                        { icon: Ruler, title: "Upload Your Floor Plan", desc: "Easily upload your 2D layout to begin AI-based Vastu analysis." },
                        { icon: Sparkles, title: "AI Analyzes Energy & Directions", desc: "Smart automation evaluates room placement, zones, and alignment." },
                        { icon: Target, title: "Get Detailed Scorecard & Remedies", desc: "Receive room-wise compliance score and practical corrections." },
                        { icon: CheckCircle2, title: "Precision Vastu Analysis", desc: "Instant results powered by accurate AI evaluation." }
                    ],
                    formTitle: "Get Vastu Analysis",
                    formSubtitle: "Upload your floor plan to get started."
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Manual validation for more specific email requirements
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(formState.email)) {
            alert("Please enter a valid email address with a domain extension (e.g., .com, .in).");
            return;
        }

        if (type === 'partnership') {
            // Find the numeric ID (lov_Value) for the selected industry description
            const selectedIndustry = apiIndustries.find(item => item.description.toLowerCase() === formState.industry.toLowerCase());
            const industryId = selectedIndustry ? selectedIndustry.lov_Value : 0;

            const payload = {
                fullName: formState.name,
                emailId: formState.email,
                mobileNumber: formState.phone,
                industryType: industryId,
                comments: formState.comments || "",
                isActive: true
            };
            dispatch(createPartnershipForm(payload));
        } else if (type === 'training') {
            // Find the numeric ID (lov_Value) for the selected industry description
            const selectedIndustry = apiIndustries.find(item => item.description.toLowerCase() === formState.industry.toLowerCase());
            const industryId = selectedIndustry ? selectedIndustry.lov_Value : 0;

            // Find the numeric ID (lov_Value) for the selected user type description
            const selectedUserType = apiUserTypes.find(item => item.description.toLowerCase() === formState.userType.toLowerCase());
            const userTypeId = selectedUserType ? selectedUserType.lov_Value : 0;

            const payload = {
                fullName: formState.name,
                emailId: formState.email,
                mobileNumber: formState.phone,
                industryType: industryId,
                userType: userTypeId,
                isActive: true
            };
            dispatch(createTrainingForm(payload));
        } else if (type === 'resource') {
            // Find the numeric ID (lov_Value) for the selected industry description
            const selectedIndustry = apiIndustries.find(item => item.description.toLowerCase() === formState.industry.toLowerCase());
            const industryId = selectedIndustry ? selectedIndustry.lov_Value : 0;

            // Find the numeric ID (lov_Value) for the selected user type description (resource uses same user types)
            const selectedUserType = apiUserTypes.find(item => item.description.toLowerCase() === formState.userType.toLowerCase());
            const userTypeId = selectedUserType ? selectedUserType.lov_Value : 0;

            const payload = {
                fullName: formState.name,
                emailId: formState.email,
                mobileNumber: formState.phone,
                industryType: industryId,
                userType: userTypeId,
                isActive: true
            };
            dispatch(createResourceForm(payload));
        } else if (type === 'vastu') {
            // Find the numeric ID (lov_Value) for the selected user type description
            const selectedUserType = apiUserTypes.find(item => item.description.toLowerCase() === formState.userType.toLowerCase());
            const userTypeId = selectedUserType ? selectedUserType.lov_Value : 0;

            const payload = {
                fullName: formState.name,
                emailId: formState.email,
                mobileNumber: formState.phone,
                userType: userTypeId,
                comments: formState.comments || "",
                floorPlan: formState.floorPlan,
                isActive: true
            };
            dispatch(createVastuForm(payload));
        }
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
                        {type === 'training' ? (
                            <div>
                                <h1 className="text-[28px] md:text-[36px] lg:text-[44px] font-black text-[#1a1a1a] leading-[1.1] mb-6 tracking-tight">
                                    Enroll in <span className="text-zlendo-teal">Zlendo Realty{isIndiaSite && <span className="sr-only"> Local</span>}</span> AI Design Training
                                    {isIndiaSite && <span className="sr-only"> Portal</span>}
                                </h1>

                                <div className="space-y-3 mb-8 text-zlendo-grey-medium font-medium">
                                    <h2 className="text-xl font-bold text-[#1a1a1a]">Learn. Design. Build.</h2>
                                    <p className="leading-relaxed">Master AI-powered tools for Home Planning, Interior Design, and 3D Visualization.</p>
                                    <p className="leading-relaxed">Develop industry-ready skills with our hands-on training tailored for students, architects, builders, and entrepreneurs.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    {[
                                        { title: "AI Floor Planning & Pre-Design", desc: "Master 2D to 3D conversion workflows.", icon: Cpu },
                                        { title: "Cloud-Based Learning", desc: "No expensive hardware required—learn anywhere.", icon: Globe },
                                        { title: "Hands-on Experience", desc: "Practical training tailored for pros and students.", icon: Users },
                                        { title: "Certificate of Completion", desc: "Build industry-ready skills and get certified.", icon: CheckCircle2 }
                                    ].map((feature, i) => (
                                        <div key={i} className="bg-white p-5 rounded-[24px] shadow-sm border border-gray-100 flex gap-4 group items-start hover:shadow-md transition-all">
                                            <div className="w-10 h-10 rounded-xl bg-[#f8fbfa] border border-[#eee] flex items-center justify-center text-zlendo-teal shrink-0 group-hover:scale-110 transition-transform">
                                                <feature.icon className="w-5 h-5" />
                                            </div>
                                            <div className="space-y-1 mt-0.5">
                                                <h3 className="font-bold text-[#1a1a1a] text-[15px] leading-tight">{feature.title}</h3>
                                                <p className="text-sm text-zlendo-grey-medium leading-relaxed">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-lg font-bold text-zlendo-teal">Start your AI-powered design journey today!</p>
                            </div>
                        ) : (
                            <>
                                <h1 className="text-[28px] md:text-[42px] lg:text-[56px] font-black text-[#1a1a1a] leading-[1.05] mb-8 tracking-tight">
                                    {content.title.split('.').map((p, i) => (
                                        <span key={i} className={i === 1 ? 'text-zlendo-teal' : ''}>
                                            {p}{i === 0 && '.'}
                                        </span>
                                    ))}
                                    {isIndiaSite && <span className="sr-only"> Portal</span>}
                                </h1>
                                <h2 className="text-xl text-zlendo-grey-medium font-medium mb-12 leading-relaxed">
                                    {content.subtitle}
                                </h2>

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
                            </>
                        )}
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
                    <AnimatePresence mode="wait">
                        {isSubmitted ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <div className="text-center py-10">
                                    <div className="w-20 h-20 bg-zlendo-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-zlendo-teal" />
                                    </div>
                                    <h2 className="text-3xl font-black text-[#1a1a1a] mb-4">Request Submitted!</h2>
                                    <p className="text-zlendo-grey-medium font-medium px-6">
                                        Thank you for your interest in Zlendo Realty. Our team will review your request and get back to you shortly.
                                    </p>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <div className="text-center mb-10">
                                    <h2 className="text-3xl font-black text-[#1a1a1a] mb-2">{content.formTitle}</h2>
                                    <p className="text-zlendo-grey-medium font-medium">{content.formSubtitle}</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {submitError && (
                                        <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm font-bold border border-red-100 flex items-center gap-3">
                                            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                                            {submitError}
                                        </div>
                                    )}
                                    {type === 'vastu' && (
                                        <div className="space-y-1.5">
                                            <label className="text-[11px] font-black uppercase tracking-widest text-zlendo-grey-medium opacity-60 ml-2">Upload Floor Plan *</label>
                                            <div className="relative">
                                                <Upload className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/40" />
                                                <input
                                                    type="file"
                                                    required
                                                    accept=".jpg,.jpeg,.png,.pdf"
                                                    className="w-full bg-[#f9fafb] border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal focus:bg-white transition-all font-normal text-[#1a1a1a]"
                                                    onChange={e => setFormState({ ...formState, floorPlan: e.target.files?.[0] })}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {type !== 'vastu' && (
                                        <div className="space-y-1.5">
                                            <label className="text-[11px] font-medium uppercase tracking-widest text-zlendo-grey-medium opacity-60 ml-2">Full Name *</label>
                                            <div className="relative">
                                                <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/40" />
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full bg-[#f9fafb] border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal focus:bg-white transition-all font-normal text-[#1a1a1a]"
                                                    value={formState.name}
                                                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-medium uppercase tracking-widest text-zlendo-grey-medium opacity-60 ml-2">Email Address *</label>
                                        <div className="relative">
                                            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/40" />
                                            <input
                                                type="email"
                                                required
                                                className={`w-full bg-[#f9fafb] border rounded-2xl py-4 pl-12 pr-6 outline-none transition-all font-normal text-[#1a1a1a] ${emailError ? 'border-red-500 focus:border-red-500' : 'border-[#eee] focus:border-zlendo-teal focus:bg-white'}`}
                                                value={formState.email}
                                                onChange={e => {
                                                    const value = e.target.value.toLowerCase();
                                                    setFormState({ ...formState, email: value });
                                                    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                                                    setEmailError(!emailRegex.test(value) && value.length > 0);
                                                }}
                                            />
                                        </div>
                                        {emailError && (
                                            <p className="mt-1 text-[10px] font-bold text-red-500 ml-2">
                                                Please enter a valid email (e.g., name@company.com)
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-medium uppercase tracking-widest text-zlendo-grey-medium opacity-60 ml-2">Mobile Number *</label>
                                        <div className="relative flex-1">
                                            <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/40" />
                                            <input
                                                type="tel"
                                                required
                                                className="w-full bg-[#f9fafb] border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal focus:bg-white transition-all font-normal text-[#1a1a1a]"
                                                value={formState.phone}
                                                onChange={e => setFormState({ ...formState, phone: e.target.value.replace(/[^\d+\-() ]/g, '') })}
                                            />
                                        </div>
                                    </div>

                                    {type === 'partnership' ? (
                                        <>
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
                                                        <option value="" className="text-[#1a1a1a]/50">
                                                            {isLoadingIndustries ? 'Loading...' : 'Select Industry'}
                                                        </option>
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
                                    ) : type === 'vastu' ? (
                                        <>
                                            {/* <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-zlendo-grey-medium opacity-60 ml-2">Type of User *</label>
                                                <div className="relative">
                                                    <Users className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/40" />
                                                    <select
                                                        required
                                                        className={`w-full bg-[#f9fafb] border border-[#eee] rounded-2xl py-4 pl-12 pr-10 outline-none focus:border-zlendo-teal focus:bg-white transition-all font-normal appearance-none ${!formState.userType ? 'text-[#1a1a1a]/50' : 'text-[#1a1a1a]'}`}
                                                        value={formState.userType}
                                                        onChange={e => setFormState({ ...formState, userType: e.target.value })}
                                                    >
                                                        <option value="" className="text-[#1a1a1a]/50">
                                                            {isLoadingIndustries ? 'Loading...' : 'Select User Type'}
                                                        </option>
                                                        {userTypesList.map(u => (
                                                            <option key={u} value={u.toLowerCase()} className="text-[#1a1a1a]">{u}</option>
                                                        ))}
                                                    </select>
                                                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zlendo-grey-medium/70 pointer-events-none" />
                                                </div>
                                            </div> */}
                                            {/* <div className="space-y-1.5">
                                                <label className="text-[11px] font-black uppercase tracking-widest text-zlendo-grey-medium opacity-60 ml-2">Comments</label>
                                                <div className="relative">
                                                    <MessageSquare className="absolute left-5 top-5 w-4 h-4 text-zlendo-grey-medium/40" />
                                                    <textarea
                                                        className="w-full bg-[#f9fafb] border border-[#eee] rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-zlendo-teal focus:bg-white transition-all font-normal text-[#1a1a1a] h-24 resize-none"
                                                        value={formState.comments}
                                                        onChange={e => setFormState({ ...formState, comments: e.target.value })}
                                                    />
                                                </div>
                                            </div> */}
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
                                                        <option value="" className="text-[#1a1a1a]/50">
                                                            {isLoadingIndustries ? 'Loading...' : 'Select Industry'}
                                                        </option>
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
                                                        <option value="" className="text-[#1a1a1a]/50">
                                                            {isLoadingIndustries ? 'Loading...' : 'Select User Type'}
                                                        </option>
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
                                        disabled={isSubmitting || emailError}
                                        className={`w-full bg-zlendo-teal text-white rounded-[20px] py-5 font-black text-xl shadow-xl shadow-zlendo-teal/20 active:scale-95 hover:bg-zlendo-teal/90 transition-all flex items-center justify-center gap-3 mt-4 ${isSubmitting || emailError ? 'opacity-70 cursor-not-allowed' : ''}`}
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
                            </motion.div>
                        )}
                    </AnimatePresence>
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
