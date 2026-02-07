'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Building2, Crown, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useCountry } from '@/lib/context/CountryContext';
import { LOGIN_URL } from '@/lib/constants/urls';


const PricingPage = () => {
    const { getPath, paths } = useCountry();
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');



    // Plans Data - India Focused
    const plans = [
        {
            id: 'free',
            name: 'Free',
            status: 'active',
            badge: null,
            icon: Star,
            description: 'For beginners starting their design journey.',
            price: { monthly: 0, yearly: 0 },
            features: [
                'Project Creation* - Start From Scratch / Upload Floor Plan / Template Based Design / Wizard',
                'AI Inspiration* - Inspiration',
                'Walk Through* - 360 Panorama / 360 Walkthrough',
                'Image Rendering* - AI Image/ Draft Image / HD Image / 4K',
                'Video Rendering* - 420p Video',
                'Estimation* - Cost Estimation and Vastu',
                '*Limits and Conditions Apply'
            ],
            missing: ['Advanced Team Collaboration', 'Texture customization', 'AI Plan Recognition'],
            cta: 'Start Designing',
            ctaStyle: 'outline'
        },
        {
            id: 'pro',
            name: 'Pro',
            status: 'coming-soon',
            badge: 'Popular',
            icon: Zap,
            description: 'Unlock the full catalog and AI tools.',
            price: { monthly: 1499, yearly: 15290 }, // ₹1,499/mo or ₹15,290/year (15% off ₹17,988)
            originalYearly: 17988, // Original yearly price before discount
            features: [
                // 'All Free features',
                // 'Full Catalog Access (8,000+ items)',
                // '5 High-Quality Renders / mo',
                // 'AI Plan Recognition',
                // 'Texture & Material Customization',
                // 'No Watermarks',
                // 'Priority Support'
            ],
            missing: ['Full 4K Renders', '360° Panoramas', 'Custom 3D Model Upload'],
            cta: 'Start Now',
            ctaStyle: 'disabled'
        },
        {
            id: 'pro-plus',
            name: 'Pro Plus',
            status: 'coming-soon',
            badge: 'Best Value',
            icon: Crown,
            description: 'For professionals needing top-tier visuals.',
            price: { monthly: 3999, yearly: 40790 }, // ₹3,999/mo or ₹40,790/year (15% off ₹47,988)
            originalYearly: 47988, // Original yearly price before discount
            features: [
                // 'Everything in Pro',
                // 'All 4K Photorealistic Renders',
                // '360° Panorama Tours',
                // 'Custom 3D Model Upload (OBJ/FBX)',
                // 'Create multi-concept Moodboards',
                // 'Commercial Usage Rights',
                // 'Export to CAD/DXF'
            ],
            missing: [],
            cta: 'Start Now',
            ctaStyle: 'disabled'
        }
    ];

    const businessFeatures = [
        'White-label solution',
        'API & SDK Integration',
        'Custom Catalog Creation',
        'Dedicated Account Manager',
        'Team Collaboration Tools',
        'Advanced Analytics',
        'Custom Contracts & SLAs'
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-nunito pt-12 pb-20">
            {/* Header Section */}
            <div className="container-custom px-4 text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* India Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-6">
                        <span className="text-xs font-black uppercase tracking-widest text-orange-600">Built In India, Built For India 🇮🇳</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-zlendo-grey-dark mb-6">
                        Plans for every <span className="text-zlendo-teal">individual.</span>
                    </h1>
                    <p className="text-xl text-zlendo-grey-medium font-bold opacity-60 mb-10 max-w-2xl mx-auto">
                        Whether you are renovating a single room or building a professional portfolio, we have a plan for you.
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex bg-white p-1.5 rounded-full border border-gray-200 shadow-sm relative">
                        {['monthly', 'yearly'].map((cycle) => (
                            <button
                                key={cycle}
                                onClick={() => setBillingCycle(cycle as 'monthly' | 'yearly')}
                                className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-black transition-colors duration-300 flex items-center justify-center gap-2 ${billingCycle === cycle ? 'text-white' : 'text-zlendo-grey-medium hover:text-zlendo-teal'}`}
                            >
                                {cycle === 'monthly' ? 'Monthly' : 'Yearly'}
                                {cycle === 'yearly' && (
                                    <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold whitespace-nowrap">
                                        SAVE 15%
                                    </span>
                                )}
                                {billingCycle === cycle && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-zlendo-teal rounded-full shadow-md"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        style={{ zIndex: -1 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Plans Grid */}
            <div className="container-custom px-4 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative bg-white rounded-[24px] p-6 border transition-all duration-300 flex flex-col
                                ${plan.status === 'coming-soon' ? 'opacity-70 grayscale-[0.5] pointer-events-none' : 'hover:-translate-y-1'}
                                ${plan.id === 'pro-plus' && plan.status === 'active'
                                    ? 'border-zlendo-teal shadow-[0_20px_40px_-15px_rgba(0,168,132,0.15)] z-10'
                                    : 'border-gray-100 shadow-lg shadow-black/[0.02]'
                                }`}
                        >
                            {plan.badge && (
                                <div className={`absolute top-0 right-6 -translate-y-1/2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-md ${plan.id === 'pro-plus' ? 'bg-gradient-to-r from-zlendo-teal to-blue-500' : 'bg-zlendo-teal'}`}>
                                    {plan.badge}
                                </div>
                            )}

                            {plan.status === 'coming-soon' && (
                                <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
                                    <div className="bg-zlendo-grey-dark/90 text-white px-6 py-5 rounded-full text-sm font-black uppercase tracking-widest rotate-[-10deg] shadow-2xl border border-white/20">
                                        Launching Soon
                                    </div>
                                </div>
                            )}

                            {/* Header */}
                            <div className="mb-4">
                                <h3 className="text-2xl font-black text-zlendo-grey-dark">{plan.name}</h3>
                            </div>

                            {/* Price */}
                            <div className="mb-4">
                                {plan.id === 'free' ? (
                                    <div className="text-4xl font-black text-zlendo-grey-dark">₹0</div>
                                ) : (
                                    <>
                                        {billingCycle === 'monthly' ? (
                                            <>
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-3xl font-black text-zlendo-grey-dark">
                                                        {plan.status === 'coming-soon' ? '₹XXXX' : `₹${plan.price.monthly.toLocaleString('en-IN')}`}
                                                    </span>
                                                    <span className="text-sm font-bold text-zlendo-grey-medium opacity-60">/mo</span>
                                                </div>
                                                <p className="text-xs font-bold text-zlendo-grey-medium opacity-60 mt-1">
                                                    {plan.status === 'coming-soon' ? 'Revealing Soon' : `Pay ₹${plan.price.monthly.toLocaleString('en-IN')} per month`}
                                                </p>
                                            </>
                                        ) : (
                                            <>
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex items-baseline gap-2 flex-wrap">
                                                        <span className="text-3xl font-black text-zlendo-grey-dark">
                                                            {plan.status === 'coming-soon' ? '₹XXXXX' : `₹${plan.price.yearly.toLocaleString('en-IN')}`}
                                                        </span>
                                                        <span className="text-sm font-bold text-zlendo-grey-medium opacity-60">/year</span>
                                                        {plan.originalYearly && plan.status !== 'coming-soon' && (
                                                            <>
                                                                <span className="text-lg font-bold text-zlendo-grey-medium opacity-40 line-through">
                                                                    ₹{plan.originalYearly.toLocaleString('en-IN')}
                                                                </span>
                                                            </>
                                                        )}
                                                    </div>
                                                    {plan.originalYearly && plan.status !== 'coming-soon' && (
                                                        <div className="flex items-center gap-2 flex-wrap">
                                                            <span className="bg-gradient-to-r from-green-100 to-emerald-50 text-green-700 text-[11px] px-3 py-1.5 rounded-full font-black uppercase tracking-wider border border-green-200 shadow-sm">
                                                                Save ₹{(plan.originalYearly - plan.price.yearly).toLocaleString('en-IN')} (15% OFF)
                                                            </span>
                                                        </div>
                                                    )}
                                                    <div className="flex items-center gap-2 mt-0.5">
                                                        <span className="text-xs font-bold text-zlendo-grey-medium opacity-70">
                                                            {plan.status === 'coming-soon'
                                                                ? 'Revealing Soon'
                                                                : `Just ₹${Math.round(plan.price.yearly / 12).toLocaleString('en-IN')}/mo`
                                                            }
                                                        </span>
                                                        {plan.status !== 'coming-soon' && (
                                                            <span className="text-[10px] font-bold text-zlendo-grey-medium opacity-50">
                                                                (Billed ₹{plan.price.yearly.toLocaleString('en-IN')} annually)
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </>
                                )}
                                {plan.id === 'free' && (
                                    <p className="text-xs font-bold text-zlendo-grey-medium opacity-60 mt-1">
                                        Access to Project Plans
                                    </p>
                                )}
                            </div>

                            {/* CTA Button moved up */}
                            <div className="mb-8">
                                {plan.status === 'active' ? (
                                    <a
                                        href={LOGIN_URL}
                                        className={`w-full py-3.5 rounded-full font-black text-base transition-all active:scale-95 flex items-center justify-center ${plan.ctaStyle === 'solid-teal'
                                            ? 'bg-zlendo-teal text-white hover:bg-[#008f72] shadow-lg shadow-zlendo-teal/20'
                                            : plan.ctaStyle === 'gradient'
                                                ? 'bg-gradient-to-r from-zlendo-teal to-blue-500 text-white hover:shadow-lg shadow-blue-500/20'
                                                : 'bg-[#e6fcf5] text-zlendo-teal hover:bg-[#d3f9ed]'
                                            }`}
                                    >
                                        {plan.cta}
                                    </a>
                                ) : (
                                    <button
                                        disabled
                                        className={`w-full py-3.5 rounded-full font-black text-base bg-gray-100 text-gray-400 cursor-not-allowed`}
                                    >
                                        {plan.cta}
                                    </button>
                                )}
                            </div>

                            {/* Features */}
                            <div className="flex-grow">
                                {plan.id === 'free' && (
                                    <p className="text-xs font-black text-zlendo-grey-dark/40 uppercase tracking-widest mb-4">
                                        What's included
                                    </p>
                                )}
                                <ul className="space-y-3">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2.5">
                                            {feature.startsWith('*') ? (
                                                <span className="text-[10px] font-bold text-zlendo-grey-medium opacity-50 italic mt-2 ml-1">
                                                    {feature}
                                                </span>
                                            ) : (
                                                <>
                                                    <Check className="w-4 h-4 text-zlendo-teal shrink-0 mt-0.5" />
                                                    <span className="text-sm font-bold text-zlendo-grey-dark opacity-80 leading-tight">
                                                        {feature}
                                                    </span>
                                                </>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Business Plan Section */}
            <div className="container-custom px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto bg-zlendo-grey-dark rounded-[40px] p-8 md:p-16 relative overflow-hidden text-white shadow-2xl"
                >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zlendo-teal/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                                <Building2 className="w-4 h-4 text-zlendo-teal" />
                                <span className="text-xs font-black uppercase tracking-widest text-white">Zlendo Realty For Business</span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-black leading-tight">
                                Enterprise-grade custom solutions.
                            </h2>
                            <p className="text-xl text-gray-400 font-bold max-w-xl">
                                Need white-labeling, API access, or custom catalog integration? We build tailored solutions for retailers and developers.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href={paths.enterpriseDemo}
                                    className="bg-white text-zlendo-grey-dark px-10 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
                                >
                                    Contact Sales
                                </Link>
                                <Link href={getPath('/business')} className="px-10 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2 group">
                                    Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Business Features Grid */}
                        <div className="flex-1 w-full lg:max-w-md">
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">

                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-zlendo-teal" />
                                    Enterprise Features
                                </h3>
                                <ul className="space-y-4">
                                    {businessFeatures.map(item => (
                                        <li key={item} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-zlendo-teal/20 flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-zlendo-teal" />
                                            </div>
                                            <span className="font-bold text-gray-300 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PricingPage;
