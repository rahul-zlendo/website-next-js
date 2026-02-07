'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useCountry } from '@/lib/context/CountryContext';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { createOrUpdateBusinessInfo, getAllListOfValues, resetEnterpriseForm } from '@/lib/store/slices/enterpriseSlice';
import {
    Sparkles, CheckCircle2, Video, ArrowRight,
    Briefcase, BarChart3, Layers, TrendingUp, Smartphone
} from 'lucide-react';

export default function EnterprisePage() {
    const { getPath } = useCountry();
    const dispatch = useAppDispatch();
    const {
        isSubmitting,
        isSubmitted,
        isLoadingIndustries,
        industries
    } = useAppSelector((state) => state.enterprise);

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
    });

    useEffect(() => {
        // Reset form when component mounts
        dispatch(resetEnterpriseForm());
        // Fetch industries
        dispatch(getAllListOfValues());
    }, [dispatch]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // const formatTime = (date: Date) =>
    //     date.toTimeString().split(' ')[0];


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            Id: 0,
            FullName: formData.name,
            EmailAddress: formData.email,
            CompanyName: formData.company,
            PhoneNumber: formData.phone,
            State: null,
            Country: null,
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
            alert(error instanceof Error ? error.message : 'Something went wrong');
        }
    };





    const scrollToForm = () => {
        const form = document.getElementById('demo-form');
        if (form) form.scrollIntoView({ behavior: 'smooth' });
    };

    const [activeTab, setActiveTab] = useState('Interior Design Companies');
    const [activeSubIndex, setActiveSubIndex] = useState(0);

    const featureContent: Record<string, {
        title: string;
        features: Array<{
            title: string;
            desc: string;
            image: string;
        }>;
    }> = {
        'Interior Design Companies': {
            title: 'Interior Design Companies',
            features: [
                {
                    title: '2D-3D',
                    desc: 'Convert sketches into editable 3D models instantly with AI-powered precision.',
                    image: '/assets/business/2d-to-3d.webm'
                },
                {
                    title: 'Estimation quote for interiors',
                    desc: 'Generate accurate BOQs and professional quotations in seconds as you design.',
                    image: '/assets/business/cost-estimation.webm'
                },
                {
                    title: '360 Walkthrough',
                    desc: 'Immersive VR experiences that let clients experience their future home before it\'s built.',
                    image: '/assets/business/360-walkthrough.webm'
                }
            ]
        },
        'Architects': {
            title: 'Architects',
            features: [
                {
                    title: 'High-End Visualization',
                    desc: 'Create photo-realistic 8K renders and cinematic walkthroughs for large-scale projects.',
                    image: '/assets/business/image-render.webm'
                },
                {
                    title: 'Detailed BIM Support',
                    desc: 'Integrate architectural details and structural elements into a unified cloud model.',
                    image: '/assets/business/bim-support.webm'
                },
                {
                    title: 'Sunlight & Shadow Analysis',
                    desc: 'Simulate real-world environment conditions to optimize building performance.',
                    image: '/assets/business/sunlight-shadow-analysis.webm'
                }
            ]
        },
        'Realtors for Marketing': {
            title: 'Realtors for Marketing',
            features: [
                {
                    title: 'Marketing Content Packs',
                    desc: 'Generate high-quality images and social media layouts to attract potential buyers.',
                    image: '/assets/business/marketing-content-packs.webm'
                },
                {
                    title: 'Interactive Sales Tool',
                    desc: 'Enable sales teams to customize interiors on-the-fly during client presentations.',
                    image: '/assets/business/interactive-sales-tool.webm'
                },
                {
                    title: 'AR Home Preview',
                    desc: 'Let buyers visualize future homes on empty sites using advanced Augmented Reality.',
                    image: '/assets/business/ar.webm'
                }
            ]
        },
        'Experience Centers': {
            title: 'Experience Centers',
            features: [
                {
                    title: 'Digital Showroom',
                    desc: 'Replace physical sample flats with cost-effective, high-impact digital experiences.',
                    image: '/assets/business/digital-showroom.webm'
                },
                {
                    title: 'Multi-Terminal Sync',
                    desc: 'Synchronize designs across multiple screens and devices for a seamless visitor journey.',
                    image: '/assets/business/multi-terminal-sync.webm'
                },
                {
                    title: 'Visitor Analytics',
                    desc: 'Track which designs and layouts resonate most with your prospects.',
                    image: '/assets/business/visitors-analytics.webm'
                }
            ]
        },
        'Civil Contractors': {
            title: 'Civil Contractors',
            features: [
                {
                    title: 'Production Drawings',
                    desc: 'Auto-generate accurate 2D CAD drawings from your 3D models for site execution.',
                    image: '/assets/business/2d-cad-drawing.webm'
                },
                {
                    title: 'Material Optimization',
                    desc: 'Maximize yield and reduce wastage with intelligent panel nesting and material lists.',
                    image: '/assets/business/material-optimization.webm'
                },
                {
                    title: 'Project Coordination',
                    desc: 'One source of truth for all stakeholders to minimize errors during construction.',
                    image: '/assets/business/project-coordination.webm'
                }
            ]
        },
        'Paint industry': {
            title: 'Paint industry',
            features: [
                {
                    title: 'Color Visualization',
                    desc: 'Accurately simulate thousands of shades and textures in realistic lighting.',
                    image: '/assets/business/color-visualization.webm'
                },
                {
                    title: 'Quantity Calculator',
                    desc: 'Automatically estimate the amount of paint required based on wall area.',
                    image: '/assets/business/quantity-calculator.webm'
                },
                {
                    title: 'Trend Forecasting',
                    desc: 'Showcase seasonal color palettes and design trends to inspire customers.',
                    image: '/assets/business/trend-forecasting.webm'
                }
            ]
        },
        'False Ceiling': {
            title: 'False Ceiling',
            features: [
                {
                    title: 'Ceiling Design Library',
                    desc: 'Access a vast library of modern false ceiling patterns and configurations.',
                    image: '/assets/business/ceiling-design-library.webm'
                },
                {
                    title: 'Lighting Integration',
                    desc: 'Visualize COB lights, strip lights, and chandeliers within your ceiling designs.',
                    image: '/assets/business/lighting-integration.webm'
                },
                {
                    title: 'Installation Guides',
                    desc: 'Generate detailed layout plans for precise on-site installation.',
                    image: '/assets/business/installation-guides.webm'
                }
            ]
        }
    };


    return (
        <div className="bg-white selection:bg-zlendo-orange/10 selection:text-zlendo-orange">
            <div className="min-h-screen relative overflow-hidden">
                {/* Visual Background Elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-zlendo-orange/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 -z-10" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-zlendo-teal/5 blur-[120px] rounded-full translate-y-1/4 -translate-x-1/4 -z-10" />

                {/* Hero Section - Centered Layout matching Home Page */}
                <section className="container-custom text-center mb-8 md:mb-12 px-4 py-8 lg:py-12 overflow-visible relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white shadow-xl shadow-black/5 border border-black/5 mb-8"
                    >
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#FF6820]">Built in India.</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#128807]">Built for India.</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-black font-nunito text-zlendo-teal leading-[0.95] mb-6 md:mb-8 max-w-5xl mx-auto tracking-tighter"
                    >
                        India's Leading <span className="text-zlendo-orange italic">All-in-One Cloud Platform</span> <br />
                        <span className="text-2xl md:text-5xl block mt-2 tracking-normal">for Designers, Architects & Interior Experts</span>
                    </motion.h1>

                    {/* Creative Feature Grid - National Flag Themed Sequence with Chakra Blue */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8 mt-8 relative">
                        {[
                            {
                                icon: Layers,
                                title: "Intelligent 2D Planning",
                                desc: "Sketch floor plans with AI-assisted accuracy.",
                                bg: "bg-[#FF6820]/10",
                                iconColor: "text-[#FF6820]",
                                borderColor: "hover:border-[#FF6820]/30",
                                textColor: "text-zlendo-grey-dark"
                            },
                            {
                                icon: Video,
                                title: "Immersive 3D Mastery",
                                desc: "4K–8K walkthroughs that wow clients instantly.",
                                bg: "bg-white",
                                iconColor: "text-zlendo-grey-medium",
                                borderColor: "hover:border-[#FF6820]/20",
                                textColor: "text-zlendo-grey-dark",
                                isWhite: true
                            },
                            {
                                icon: Smartphone,
                                title: "AR Sales Booster",
                                desc: "Close deals faster with on-the-spot Augmented Realty.",
                                bg: "bg-[#000080]/5",
                                iconColor: "text-[#000080]",
                                borderColor: "hover:border-[#000080]/30",
                                textColor: "text-[#000080]"
                            },
                            {
                                icon: BarChart3,
                                title: "Real-time Costing",
                                desc: "Instant BOQ and dynamic budget estimates.",
                                bg: "bg-[#128807]/10",
                                iconColor: "text-[#128807]",
                                borderColor: "hover:border-[#128807]/30",
                                textColor: "text-[#128807]"
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i + 0.2 }}
                                whileHover={{ y: -5 }}
                                className={`p-6 rounded-[32px] border border-black/[0.03] ${feature.bg} shadow-sm backdrop-blur-sm group ${feature.borderColor} transition-all text-left`}
                            >
                                <div className={`w-12 h-12 ${feature.isWhite ? 'bg-gray-100' : 'bg-white/80'} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-sm`}>
                                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                                </div>
                                <h3 className={`text-lg font-black font-nunito mb-2 ${feature.textColor} leading-tight`}>{feature.title}</h3>
                                <p className={`text-xs font-bold opacity-70 leading-relaxed ${feature.textColor === 'text-[#128807]' ? 'text-[#128807]' : feature.textColor === 'text-[#000080]' ? 'text-[#000080]' : 'text-zlendo-grey-medium'}`}>{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mb-8"
                    >
                        <p className="text-2xl md:text-3xl font-black font-nunito text-zlendo-grey-dark/80 tracking-tight">
                            Design <span className="text-zlendo-orange italic">faster</span>,
                            present <span className="text-zlendo-orange italic">smarter</span>,
                            and build with <span className="text-zlendo-orange italic">confidence</span>.
                        </p>
                        <p className="text-lg font-bold text-zlendo-grey-medium mt-2 opacity-60">Everything you need, right from your browser.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 relative mb-10"
                    >
                        {/* Wave/Pulse Graphic for Attraction */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            {[1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0.8, opacity: 0.6 }}
                                    animate={{
                                        scale: [0.8, 1.8],
                                        opacity: [0.6, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.6,
                                        ease: "easeOut"
                                    }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[60px] md:w-[280px] md:h-[80px] rounded-full border border-zlendo-orange/30"
                                />
                            ))}
                        </div>

                        <button
                            onClick={scrollToForm}
                            className="relative bg-zlendo-orange text-white px-12 py-5 rounded-[24px] font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-zlendo-orange/30 group flex items-center gap-3 active:scale-95 text-center"
                        >
                            <span className="relative z-10">Book your Demo</span>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
                        </button>
                    </motion.div>

                    {/* Feature Checkmarks */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-0 flex flex-wrap justify-center gap-x-12 gap-y-4"
                    >
                        {[
                            'Localized library with Indian furniture brands',
                            'Dedicated support team based in India',
                            'INR Pricing & GST Compliant Billing',
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm font-bold text-zlendo-grey-dark/60">
                                <CheckCircle2 className="w-4 h-4 text-zlendo-orange" />
                                {item}
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* Section 2: "One Platform" Showcase */}
                <section className="py-8 lg:py-12 px-4 sm:px-6 lg:px-8 bg-zlendo-mint/10">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center max-w-4xl mx-auto mb-10"
                        >
                            <h2 className="text-4xl sm:text-6xl font-black font-nunito text-zlendo-grey-dark leading-tight">
                                One Platform. <span className="text-zlendo-teal">Infinite Possibilities.</span>
                            </h2>
                            <p className="text-xl text-zlendo-grey-medium font-medium mt-4 max-w-2xl mx-auto">
                                From first sketch to final finish, Zlendo Realty unifies your entire design and sales workflow.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={scrollToForm}
                                className="mt-8 group relative inline-flex items-center gap-3 px-8 py-3 bg-white border border-zlendo-teal/20 rounded-full shadow-lg shadow-zlendo-teal/10 hover:shadow-xl hover:shadow-zlendo-teal/20 hover:border-zlendo-teal text-zlendo-teal font-black text-lg transition-all"
                            >
                                <span className="relative z-10">Book Free Demo</span>
                                <div className="w-8 h-8 rounded-full bg-zlendo-teal/10 flex items-center justify-center group-hover:bg-zlendo-teal group-hover:text-white transition-colors">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </motion.button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-[30px] md:rounded-[50px] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white max-w-6xl mx-auto bg-black"
                        >
                            <div className="relative pt-[56.25%] w-full">
                                <iframe
                                    src="https://www.youtube.com/embed/ij_yZ-sNrOY?autoplay=1&mute=1&loop=1&playlist=ij_yZ-sNrOY&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
                                    title="Zlendo Realty Enterprise Dashboard"
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            {/* Subtle overlay to unify color tone if needed, currently kept minimal for video clarity */}
                            <div className="absolute inset-0 pointer-events-none ring-1 ring-black/10 rounded-[20px] md:rounded-[38px]" />
                        </motion.div>
                    </div>
                </section>

                {/* Section 3: Tabbed Features "One Solution" - Redesigned to match Coohom Screenshot */}
                <section className="py-12 lg:py-16 px-4 bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-block px-5 py-1.5 border border-gray-200 rounded-lg text-sm font-bold text-gray-500 mb-6 tracking-tight bg-gray-50/50"
                            >
                                One Solution
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-7xl font-black font-nunito text-gray-900 leading-[1.2] tracking-tighter"
                            >
                                Everything you need to succeed, <br className="hidden md:block" /> all in one platform
                            </motion.h2>
                        </div>

                        {/* Tabs Bar - Pill Style Navigation (Two Rows) */}
                        <div className="flex justify-center mb-16 px-4">
                            <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 max-w-5xl">
                                {Object.keys(featureContent).map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => {
                                            setActiveTab(tab);
                                            setActiveSubIndex(0);
                                        }}
                                        className={`
                                            px-8 py-4 rounded-full text-sm md:text-base font-black transition-all duration-300 whitespace-nowrap border-2
                                            ${activeTab === tab
                                                ? 'bg-[#00B18F] border-[#00B18F] text-white shadow-lg shadow-[#00B18F]/20'
                                                : 'bg-white border-gray-300 text-gray-500 hover:border-gray-400 hover:bg-gray-50'
                                            }
                                        `}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Content Layout */}
                        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
                            {/* Left Column: Vertical Selection List */}
                            <div className="lg:col-span-4 space-y-6">
                                <div className="flex items-center gap-3 px-2">
                                    <div className="w-1.5 h-6 bg-zlendo-orange rounded-full" />
                                    <span className="text-sm font-black uppercase tracking-[0.2em] text-gray-500">9D Features</span>
                                </div>
                                <div className="space-y-4">
                                    {featureContent[activeTab].features.map((feature, idx) => (
                                        <motion.div
                                            key={idx}
                                            onClick={() => setActiveSubIndex(idx)}
                                            className={`p-10 rounded-[32px] cursor-pointer transition-all border-2 flex flex-col justify-center min-h-[160px] ${activeSubIndex === idx ? 'bg-zlendo-orange border-zlendo-orange text-white shadow-2xl shadow-zlendo-orange/30' : 'bg-white border-transparent hover:border-gray-100 hover:shadow-lg'}`}
                                            whileHover={activeSubIndex !== idx ? { scale: 1.02 } : {}}
                                        >
                                            <h4 className="text-2xl font-black mb-3 leading-tight">{feature.title}</h4>
                                            <p className={`text-base font-bold leading-relaxed ${activeSubIndex === idx ? 'text-white/80' : 'text-gray-400/80'}`}>
                                                {feature.desc}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column: Visual Spotlight with Browser Frame */}
                            <div className="lg:col-span-8">
                                <motion.div
                                    key={activeTab + activeSubIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="relative group shadow-[0_32px_80px_-20px_rgba(0,0,0,0.15)] rounded-[40px] bg-white border border-gray-100"
                                >
                                    {/* Feature Image/Video Spotlight */}
                                    <div className="relative min-h-[300px] flex items-center justify-center">
                                        {featureContent[activeTab].features[activeSubIndex].image.endsWith('.webm') ? (
                                            <video
                                                key={featureContent[activeTab].features[activeSubIndex].image}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                preload="auto"
                                                className="w-full h-auto block rounded-[38px] object-contain transition-all duration-700"
                                            >
                                                <source src={featureContent[activeTab].features[activeSubIndex].image} type="video/webm" />
                                            </video>
                                        ) : (
                                            <div className="aspect-video w-full overflow-hidden rounded-[38px]">
                                                <motion.img
                                                    src={featureContent[activeTab].features[activeSubIndex].image}
                                                    alt={featureContent[activeTab].features[activeSubIndex].title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Centered CTA */}
                        <div className="text-center mt-20">
                            <motion.button
                                onClick={scrollToForm}
                                whileHover={{ scale: 1.05 }}
                                className="group inline-flex items-center gap-2 text-zlendo-orange font-black text-xl hover:translate-x-1 transition-all"
                            >
                                Book a free demo
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </div>
                    </div>
                </section>

                {/* Section 4: Use Case / ROI Spotlight */}
                <section className="py-8 lg:py-12 px-4 sm:px-6 lg:px-8 bg-zlendo-mint/10">
                    <div className="container-custom">
                        <div className="bg-white rounded-[60px] p-12 md:p-20 border border-black/5 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-zlendo-teal/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />

                            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zlendo-teal/10 text-zlendo-teal font-bold text-sm uppercase tracking-wider mb-8">
                                        <TrendingUp className="w-4 h-4" />
                                        <span>Enterprise Case Study</span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-black font-nunito text-zlendo-grey-dark leading-tight mb-8">
                                        Real Results. <br />
                                        <span className="text-zlendo-teal">Real ROI.</span>
                                    </h3>
                                    <p className="text-xl text-zlendo-grey-medium font-medium leading-relaxed mb-6">
                                        Apex Developers saved ₹15Cr by replacing physical sample flats with Zlendo Realty Digital Experience Centers.
                                    </p>
                                    <p className="text-lg text-zlendo-grey-dark font-medium leading-relaxed mb-10">
                                        With hyper-realistic 8K walkthroughs, they closed 24 units with NRI buyers who never visited the site. This shift eliminated the need for heavy upfront capital and accelerated their sales cycle by 38%.
                                    </p>

                                    <div className="grid grid-cols-3 gap-2 md:gap-6 border-t border-black/5 pt-8">
                                        <div className="space-y-1 text-center md:text-left">
                                            <div className="text-xl md:text-3xl lg:text-4xl font-black font-nunito text-zlendo-grey-dark">38%</div>
                                            <div className="text-[9px] md:text-[10px] lg:text-xs font-bold text-zlendo-grey-medium uppercase tracking-wider">Faster Velocity</div>
                                        </div>
                                        <div className="space-y-1 text-center md:text-left">
                                            <div className="text-xl md:text-3xl lg:text-4xl font-black font-nunito text-zlendo-grey-dark">₹15Cr</div>
                                            <div className="text-[9px] md:text-[10px] lg:text-xs font-bold text-zlendo-grey-medium uppercase tracking-wider">Capex Saved</div>
                                        </div>
                                        <div className="space-y-1 text-center md:text-left">
                                            <div className="text-xl md:text-3xl lg:text-4xl font-black font-nunito text-zlendo-teal">12x</div>
                                            <div className="text-[9px] md:text-[10px] lg:text-xs font-bold text-zlendo-grey-medium uppercase tracking-wider">Digital ROI</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-black/5 group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-zlendo-grey-dark/80 to-transparent opacity-60 z-10" />
                                    <img
                                        src="/assets/business/apex-developer.png"
                                        alt="Apex Developers Dashboard"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-8 left-8 z-20">
                                        <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Project</p>
                                        <p className="text-white text-xl font-black font-nunito">Apex Grandeur, Gurugram</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5: Built for Every Professional */}
                <section className="py-8 lg:py-12 px-4 sm:px-6 lg:px-8 bg-zlendo-grey-dark relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zlendo-teal/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="container-custom relative z-10">
                        <div className="text-center mb-10">
                            <h2 className="text-4xl sm:text-6xl font-black font-nunito text-white leading-tight">
                                Built for <span className="text-zlendo-orange">Every Professional.</span>
                            </h2>
                            <p className="text-xl text-white/60 font-medium mt-4 max-w-2xl mx-auto">
                                Zlendo Realty empowers the entire real estate ecosystem.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: 'Developers', icon: Briefcase, desc: 'Sell units faster directly from the site office without sample flats.', link: getPath('/products/virtual-walkthrough') },
                                { title: 'Architects', icon: Layers, desc: 'Visualize designs instantly and get client approvals in record time.', link: getPath('/products/2d-to-3d') },
                                { title: 'Interior Firms', icon: Sparkles, desc: 'Scale your design capacity with AI-driven layout tools.', link: getPath('/products/floor-planner') },
                                { title: 'Marketing Teams', icon: BarChart3, desc: 'Generate 4K renders and videos for brochures on demand.', link: getPath('/products/realistic-renders') },
                            ].map((persona, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[30px] hover:bg-white/10 transition-colors group"
                                >
                                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-zlendo-orange group-hover:text-white transition-all">
                                        <persona.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-black font-nunito text-white mb-3">{persona.title}</h3>
                                    <p className="text-white/60 font-medium leading-relaxed">
                                        {persona.desc}
                                    </p>
                                    <Link href={persona.link} className="mt-8 flex items-center gap-2 text-zlendo-teal font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all cursor-pointer inline-flex">
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 6: Trust & Bottom CTA (Premium Dark Monochrome) */}
                <section id="demo-form" className="py-8 lg:py-12 px-4 sm:px-6 lg:px-8 bg-[#0f172a] text-white relative overflow-hidden scroll-mt-24">
                    {/* Decorative Background Elements - Subtle & Smoky */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-white/5 blur-[100px] rounded-full" />
                        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-white/5 blur-[100px] rounded-full" />
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="max-w-5xl mx-auto space-y-10">
                            <div className="text-center">
                                <div className="flex justify-center gap-2 items-center text-white/80 font-bold uppercase tracking-widest text-sm mb-4 bg-white/5 w-fit mx-auto px-4 py-1.5 rounded-full border border-white/5">
                                    <CheckCircle2 className="w-5 h-5" /> Trusted by 500+ Indian Enterprises
                                </div>
                                <h2 className="text-4xl sm:text-6xl font-black font-nunito leading-none mb-4 drop-shadow-sm">
                                    See Zlendo Realty in <span className="text-white italic">Action.</span>
                                </h2>
                                <p className="text-xl text-white/50 font-medium max-w-2xl mx-auto leading-relaxed">
                                    Schedule a customized demo to see how you can save costs and accelerate sales.
                                </p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="bg-white rounded-[24px] sm:rounded-[40px] p-5 sm:p-8 md:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden text-left"
                            >
                                {isSubmitted ? (
                                    <div className="text-center py-20 space-y-6">
                                        <div className="w-20 h-20 bg-zlendo-teal/10 rounded-full flex items-center justify-center mx-auto text-zlendo-teal">
                                            <CheckCircle2 className="w-12 h-12" />
                                        </div>
                                        <h3 className="text-3xl font-black font-nunito text-zlendo-grey-dark">Demo Requested!</h3>
                                        <p className="text-xl text-zlendo-grey-medium font-medium">Thanks for your interest in Zlendo Realty Business. Our team will reach out to you soon.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 md:space-y-8 relative z-10">
                                        {/* Personal Info */}
                                        <div className="grid md:grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-6 sm:gap-y-5 md:gap-x-8 md:gap-y-6">
                                            <div className="space-y-1.5 sm:space-y-2">
                                                <label className="text-[10px] sm:text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Full Name</label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-base sm:text-lg font-medium text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-gray-100 transition-all shadow-sm"
                                                    placeholder="Steve Jobs"
                                                />
                                            </div>
                                            <div className="space-y-1.5 sm:space-y-2">
                                                <label className="text-[10px] sm:text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Work Email</label>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-base sm:text-lg font-medium text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-gray-100 transition-all shadow-sm"
                                                    placeholder="name@company.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-6 sm:gap-y-5 md:gap-x-8 md:gap-y-6">
                                            <div className="space-y-1.5 sm:space-y-2">
                                                <label className="text-[10px] sm:text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Phone</label>
                                                <input
                                                    name="phone"
                                                    type="tel"
                                                    required
                                                    pattern="[0-9]{10}"
                                                    maxLength={10}
                                                    value={formData.phone}
                                                    onChange={(e) => {
                                                        const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                                                        setFormData({ ...formData, phone: value });
                                                    }}
                                                    className="w-full bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-base sm:text-lg font-medium text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-gray-100 transition-all shadow-sm"
                                                    placeholder="10-digit mobile number"
                                                    title="Please enter a valid 10-digit mobile number"
                                                />
                                            </div>
                                            <div className="space-y-1.5 sm:space-y-2">
                                                <label className="text-[10px] sm:text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Company</label>
                                                <input
                                                    name="company"
                                                    type="text"
                                                    required
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-base sm:text-lg font-medium text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-gray-100 transition-all shadow-sm"
                                                    placeholder="Apple Inc."
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-1 gap-x-4 gap-y-4 sm:gap-x-6 sm:gap-y-5 md:gap-x-8 md:gap-y-6">
                                            <div className="space-y-1.5 sm:space-y-2">
                                                <label className="text-[10px] sm:text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Industry</label>
                                                <div className="relative">
                                                    <select
                                                        name="industry"
                                                        required
                                                        value={formData.industry}
                                                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                                                        className={`w-full bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 pr-10 sm:pr-12 text-base sm:text-lg font-medium focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-gray-100 transition-all shadow-sm appearance-none cursor-pointer min-h-[44px] sm:min-h-[auto] ${formData.industry ? 'text-gray-900' : 'text-gray-300'}`}
                                                        style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                                                    >
                                                        <option value="" disabled hidden>Select...</option>
                                                        {isLoadingIndustries ? (
                                                            <option disabled>Loading industries...</option>
                                                        ) : industries.length > 0 ? (
                                                            industries.map((industry, index) => (
                                                                <option key={index} value={industry.lov_Value} className="text-gray-900">
                                                                    {industry.description || industry.lov_Key}
                                                                </option>
                                                            ))
                                                        ) : (
                                                            <option disabled>No industries found</option>
                                                        )}
                                                    </select>
                                                    <div className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                                                        <svg className="w-3 h-2 sm:w-3 sm:h-2" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-1.5 sm:space-y-2">
                                                <label className="text-[10px] sm:text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Business Description / Challenges</label>
                                                <textarea
                                                    name="description"
                                                    required
                                                    rows={4}
                                                    value={formData.description}
                                                    onChange={handleChange}
                                                    className="w-full bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-base sm:text-lg font-medium text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-gray-100 transition-all shadow-sm resize-none"
                                                    placeholder="Tell us about your project requirements or the challenges you're looking to solve..."
                                                />
                                            </div>
                                        </div>


                                        <div className="pt-2 sm:pt-4">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`w-full bg-[#29b0a1] text-white py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg md:text-xl hover:scale-[1.01] active:scale-[0.98] transition-all shadow-xl shadow-[#29b0a1]/20 flex items-center justify-center gap-2 sm:gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                            >
                                                {isSubmitting ? 'Submitting...' : 'Book Strategy Call'}
                                                {!isSubmitting && <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />}
                                            </button>
                                            <p className="text-[10px] sm:text-xs text-gray-400 font-bold text-center mt-3 sm:mt-4">No credit card required. Free pilot for qualified teams.</p>
                                        </div>
                                    </form>
                                )}
                            </motion.div>
                        </div>

                        {/* Partner Logos */}
                        {/* <div className="mt-24 pt-16 border-t border-white/10">
                            <p className="text-xs font-black text-white/30 uppercase tracking-[0.2em] mb-12">
                                Proudly partnering with India's industry leaders
                            </p>
                            <div className="flex flex-wrap justify-center gap-16 items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                                <div className="h-10 w-40 bg-white rounded" />
                                <div className="h-10 w-32 bg-white rounded" />
                                <div className="h-10 w-44 bg-white rounded" />
                                <div className="h-10 w-36 bg-white rounded" />
                                <div className="h-10 w-28 bg-white rounded" />
                            </div>
                        </div> */}
                    </div>
                </section>
            </div>
        </div>
    );
}
