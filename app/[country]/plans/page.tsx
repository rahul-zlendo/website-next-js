'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Building2, Crown, Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useCountry } from '@/lib/context/CountryContext';
import { DASHBOARD_URL, LOGIN_URL, SIGNUP_URL } from '@/lib/constants/urls';
import { getAllSubscriptionsService, compareSubscriptionsService, Subscription } from '@/lib/services/subscriptionService';
import { useAppSelector } from '@/lib/store/hooks';
import ComparePlans from './ComparePlans';

const PricingPage = () => {
    const { getPath } = useCountry();
    const { activeOffer } = useAppSelector((state) => state.offer);
    const { user, isAuthenticated } = useAppSelector((state) => state.auth);
    const [billingCycle, setBillingCycle] = useState<'month' | 'monthly'>('month');
    const [plans, setPlans] = useState<Subscription[]>([]);
    const [compareData, setCompareData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    console.log(user, isAuthenticated, "user");
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [plansResponse, compareResponse] = await Promise.all([
                    getAllSubscriptionsService(),
                    compareSubscriptionsService()
                ]);

                // We only show Residential plans (planTypeId === 1) here for end users
                // Sorting them by displayOrder
                const residentialPlans = plansResponse
                    .filter(p => p.planTypeId === 1 && p.isActive !== false)
                    .sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));

                setPlans(residentialPlans);
                
                // Set comparison data directly
                if (Array.isArray(compareResponse)) {
                    setCompareData(compareResponse);
                }
                
                setError(null);
            } catch (err: any) {
                console.error("Failed to load plans:", err);
                setError(err.message || 'Failed to load subscription plans. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const businessFeatures = [
        'White-label solution',
        'API & SDK Integration',
        'Custom Catalog Creation',
        'Dedicated Account Manager',
        'Team Collaboration Tools',
        'Advanced Analytics',
        'Custom Contracts & SLAs'
    ];

    // Helper to extract icons based on plan name
    const getPlanIcon = (name: string) => {
        const lowerName = name.toLowerCase();
        if (lowerName.includes('free')) return Star;
        if (lowerName.includes('plus')) return Crown;
        return Zap;
    };

    const formatPrice = (price?: number | string) => {
        if (!price) return 0;
        const numPrice = typeof price === 'string' ? parseFloat(price.replace(/[^0-9.]/g, "")) : price;
        return numPrice.toLocaleString('en-IN');
    };

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

                    <h1 className="text-[28px] md:text-[42px] lg:text-[56px] font-black text-zlendo-grey-dark mb-6">
                        Plans for every <span className="text-zlendo-teal">individual.</span>
                    </h1>
                    <p className="text-xl text-zlendo-grey-medium font-bold opacity-60 mb-10 max-w-2xl mx-auto">
                        Whether you are renovating a single room or building a professional portfolio, we have a plan for you.
                    </p>

                    <div className="flex border-2 border-zlendo-teal/10 p-1.5 rounded-full bg-white/50 backdrop-blur-sm shadow-xl shadow-zlendo-teal/5 relative mx-auto w-fit">
                        {['month'/*, 'monthly'*/].map((cycle) => (
                            <button
                                key={cycle}
                                onClick={() => setBillingCycle(cycle as 'month' | 'monthly')}
                                className={`relative w-[130px] md:w-[160px] py-4 rounded-full text-sm font-black transition-all duration-500 flex items-center justify-center ${
                                    billingCycle === cycle ? 'text-white' : 'text-gray-400 hover:text-zlendo-teal'
                                }`}
                            >
                                <span className="relative z-10">
                                    {cycle === 'month' ? 'One Time' : 'Monthly'}
                                </span>
                                {billingCycle === cycle && (
                                    <motion.div
                                        layoutId="billing-pill"
                                        className="absolute inset-0 bg-zlendo-teal rounded-full shadow-lg shadow-zlendo-teal/30"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="container-custom px-4 mb-8 text-center">
                    <div className="inline-block bg-red-50 text-red-600 px-6 py-3 rounded-lg border border-red-100 font-bold">
                        {error}
                    </div>
                </div>
            )}

            {/* Loading Indicator */}
            {loading ? (
                <div className="flex justify-center items-center py-20 min-h-[400px]">
                    <Loader2 className="w-10 h-10 text-zlendo-teal animate-spin" />
                </div>
            ) : (() => {
                const currentPlan = plans.find(p => p.planId === user?.currentPlanId);
                const currentPlanOrder = currentPlan?.displayOrder || 0;
                
                return (
                    <div className="container-custom px-4 mb-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                            {plans.map((plan, index) => {
                                const Icon = getPlanIcon(plan.planName || '');
                                const isFree = plan.planName?.toLowerCase().includes('free');
                                const isProPlus = plan.planName?.toLowerCase().includes('Designer Plus') || plan.planName?.toLowerCase().includes('plus');
                                const isPopular = !!plan.popular;
                                const isCurrentPlan = isAuthenticated && user && user.currentPlanId === plan.planId;
                                const isDowngrade = isAuthenticated && user && (plan.displayOrder || 0) < currentPlanOrder;
                                
                                const badge = isCurrentPlan ? 'Current Plan' : isPopular ? 'Most Popular' : isProPlus ? 'Best Value' : null;
                            
                            // Period mapping: month -> price, monthly -> monthPrice
                            const period = billingCycle; 

                            const rawPrice = Number(plan.price) || 0;
                            const normalPrice = period === 'month' ? rawPrice : (Number(plan.monthPrice) || rawPrice);
                            
                            let discountedPrice = normalPrice;
                            let hasDiscount = false;
                            let discountLabel = '';

                            if (activeOffer && !isFree) {
                                if (activeOffer.offerType === 'Percentage') {
                                    discountedPrice = normalPrice * (1 - (activeOffer.discountValue / 100));
                                    hasDiscount = true;
                                    discountLabel = `${activeOffer.discountValue}% OFF`;
                                } else if (activeOffer.offerType === 'Flat') {
                                    const rawDiscountedPrice = normalPrice - activeOffer.discountValue;
                                    // Safety check: Skip offer if it results in a negative price
                                    if (rawDiscountedPrice >= 0) {
                                        discountedPrice = rawDiscountedPrice;
                                        hasDiscount = true;
                                        // Calculate what percentage the flat discount represents
                                        const percentageOff = Math.round((activeOffer.discountValue / normalPrice) * 100);
                                        discountLabel = `${percentageOff}% OFF`;
                                    }
                                }
                                discountedPrice = Math.round(discountedPrice);
                            }

                            const displayPrice = discountedPrice.toLocaleString('en-IN');
                            const originalPriceFormatted = normalPrice.toLocaleString('en-IN');
                            const periodLabel = period === 'month' ? 'Month' : 'mo';
                            
                            // Map features from mainFeatures or featureName
                            let featuresList: string[] = [];
                            if (plan.mainFeatures && Array.isArray(plan.mainFeatures)) {
                                featuresList = plan.mainFeatures
                                    .sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0))
                                    .map(mf => {
                                        let text = mf.featureName;
                                        if (mf.subFeatures && mf.subFeatures.length > 0) {
                                            const subNames = mf.subFeatures
                                                .sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0))
                                                .map(sf => sf.featureName)
                                                .join(' / ');
                                            text = `${mf.featureName} - ${subNames}`;
                                        }
                                        return text;
                                    });
                            } else if (plan.featureName && Array.isArray(plan.featureName)) {
                                featuresList = plan.featureName;
                            } else if (plan.features) {
                                if (Array.isArray(plan.features)) {
                                    featuresList = plan.features.map((f: any) => typeof f === 'string' ? f : f.text);
                                } else if (typeof plan.features === 'string') {
                                    try {
                                        const pFeatures = JSON.parse(plan.features);
                                        if (Array.isArray(pFeatures)) {
                                            featuresList = pFeatures.map((f: any) => typeof f === 'string' ? f : f.text);
                                        }
                                    } catch(e) {
                                        featuresList = (plan.features as string).split(',').map((f: string) => f.trim());
                                    }
                                }
                            }

                            return (
                                <motion.div
                                    key={plan.planId || index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.4 } }}
                                    whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.2 } }}
                                    className={`relative bg-white rounded-[24px] p-8 border transition-colors transition-shadow duration-300 flex flex-col hover:shadow-xl ${
                                        isCurrentPlan || isProPlus
                                            ? 'border-zlendo-teal shadow-[0_20px_40px_-15px_rgba(0,168,132,0.15)] hover:shadow-[0_25px_50px_-12px_rgba(0,168,132,0.25)] z-10'
                                            : 'border-gray-100 shadow-lg shadow-black/[0.02] hover:border-zlendo-teal/30 hover:shadow-black/[0.05]'
                                    }`}
                                >
                                    {badge && (
                                        <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-md bg-zlendo-orange">
                                            {badge}
                                        </div>
                                    )}

                                    {/* Header */}
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-black text-zlendo-grey-dark">{plan.planName}</h3>
                                        <p className="text-sm font-bold text-gray-400 mt-1 line-clamp-2">{plan.description}</p>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-8 h-20 flex flex-col justify-center">
                                        {isFree ? (
                                            <div className="text-4xl font-black text-zlendo-grey-dark">₹0</div>
                                        ) : (
                                            <div className="flex flex-col gap-1">
                                                {hasDiscount && (
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-xl font-bold text-gray-400 line-through opacity-60">
                                                            ₹{originalPriceFormatted}
                                                        </span>
                                                        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-md text-xs font-black">
                                                            {discountLabel}
                                                        </span>
                                                    </div>
                                                )}
                                                <div className="flex items-baseline gap-2 flex-wrap">
                                                    <span className="text-4xl font-black text-zlendo-grey-dark">
                                                        ₹{displayPrice}
                                                    </span>
                                                    <span className="text-sm font-bold text-gray-400 opacity-60">/{periodLabel}</span>
                                                </div>
                                            </div>
                                        )}
                                        {isFree && (
                                            <p className="text-xs font-bold text-zlendo-grey-medium opacity-60 mt-1">
                                                Access to Project Plans
                                            </p>
                                        )}
                                    </div>

                                    {/* CTA Button */}
                                    <div className="mb-8 mt-auto">
                                        {(isCurrentPlan || isDowngrade) ? (
                                            <div className={`w-full py-4 rounded-full font-black text-base flex items-center justify-center border-2 ${isCurrentPlan ? 'border-zlendo-teal/20 bg-zlendo-teal/5 text-zlendo-teal' : 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'}`}>
                                                {isCurrentPlan ? 'Current Plan' : 'Higher Plan Active'}
                                            </div>
                                        ) : (
                                            isAuthenticated && user ? (
                                                <Link
                                                    href={DASHBOARD_URL}
                                                    className="w-full py-4 rounded-full font-black text-base transition-all active:scale-95 flex items-center justify-center bg-zlendo-teal text-white hover:bg-[#008f72] shadow-lg shadow-zlendo-teal/20"
                                                >
                                                    Get Started Now
                                                </Link>
                                            ) : (
                                                <Link
                                                    href={SIGNUP_URL}
                                                    className="w-full py-4 rounded-full font-black text-base transition-all active:scale-95 flex items-center justify-center bg-zlendo-teal text-white hover:bg-[#008f72] shadow-lg shadow-zlendo-teal/20"
                                                >
                                                    Get Started Now
                                                </Link>
                                            )
                                        )}
                                    </div>

                                    {/* Features */}
                                    <div className="flex-grow">
                                        {isFree && (
                                            <p className="text-xs font-black text-zlendo-grey-dark/40 uppercase tracking-widest mb-4">
                                                What's included
                                            </p>
                                        )}
                                        <ul className="space-y-4">
                                            {featuresList.map((feature, fIndex) => (
                                                <li key={fIndex} className="flex items-start gap-3">
                                                    {feature.startsWith('*') ? (
                                                        <span className="text-[10px] font-bold text-zlendo-grey-medium opacity-50 italic mt-2 ml-1">
                                                            {feature}
                                                        </span>
                                                    ) : (
                                                        <>
                                                            <Check className="w-4 h-4 text-zlendo-teal shrink-0 mt-0.5" />
                                                            <div className="text-sm font-bold text-zlendo-grey-dark opacity-80 leading-tight">
                                                                {feature.includes(' - ') ? (
                                                                    <>
                                                                        <span className="font-black">{feature.split(' - ')[0]}</span>
                                                                        <span className="opacity-70"> - {feature.split(' - ').slice(1).join(' - ')}</span>
                                                                    </>
                                                                ) : feature}
                                                            </div>
                                                        </>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            );
                        })}
                        </div>
                    </div>
                );
            })()}

            {/* Compare Plans Section */}
            {!loading && compareData.length > 0 && plans.length > 0 && (
                <div className="container-custom px-4">
                    <ComparePlans 
                        compareData={compareData} 
                        plansList={plans} 
                        billingCycle={billingCycle}
                        activeOffer={activeOffer}
                    />
                </div>
            )}

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
                                    href={`${getPath('/contact')}?business=enterprise-grade-custom-solutions`}
                                    className="bg-white text-zlendo-grey-dark px-10 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition-colors flex items-center justify-center font-nunito"
                                >
                                    Contact Sales
                                </Link>
                                <Link href={getPath('/business')} className="px-10 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2 group font-nunito">
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
