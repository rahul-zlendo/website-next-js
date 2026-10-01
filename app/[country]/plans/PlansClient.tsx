'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Building2, Crown, Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useCountry } from '@/lib/context/CountryContext';
import { DASHBOARD_URL, SIGNUP_URL } from '@/lib/constants/urls';
import { getAllSubscriptionsService, compareSubscriptionsService, Subscription } from '@/lib/services/subscriptionService';
import { useAppSelector, useAppDispatch } from '@/lib/store/hooks';
import { detectUserCountry } from '@/lib/store/slices/enterpriseSlice';
import ComparePlans from './ComparePlans';
import { FRONTEND_URL } from '@/lib/config/env';

interface PlansClientProps {
    isGlobal?: boolean;
    initialPlans?: Subscription[];
}

const PlansClient = ({ isGlobal = false, initialPlans = [] }: PlansClientProps) => {
    const dispatch = useAppDispatch();
    const { getPath, country } = useCountry();
    const { activeOffer } = useAppSelector((state) => state.offer);
    const { user, isAuthenticated } = useAppSelector((state) => state.auth);
    const { detectedCountryId, isDetectingCountry } = useAppSelector((state) => state.enterprise);
    const [isYearly, setIsYearly] = useState(false);
    const [isSubscriptionChecked, setIsSubscriptionChecked] = useState(false);
    const [plans, setPlans] = useState<Subscription[]>(initialPlans);
    const [compareData, setCompareData] = useState<any[]>([]);
    const [loading, setLoading] = useState(initialPlans.length === 0);
    const [error, setError] = useState<string | null>(null);

    // Generation counter: when the effect re-runs (e.g. auth rehydrates),
    // it increments the counter so any in-flight stale fetch is abandoned.
    const fetchGenRef = useRef(0);

    useEffect(() => {
        const currentGen = ++fetchGenRef.current;

        const fetchData = async () => {
            try {
                // 1. Determine countryId: use profile directly if authenticated, else detect via IP
                let countryId: number | null = null;

                if (isAuthenticated && user?.countryId) {
                    countryId = Number(user.countryId);
                    console.log('Using user country ID:', countryId);
                } else {
                    countryId = await dispatch(detectUserCountry()).unwrap();
                    console.log('Detected country ID:', countryId);
                }

                // If a newer effect run has started while we were awaiting, abandon this stale run
                if (currentGen !== fetchGenRef.current) {
                    console.log('Abandoning stale fetch (gen', currentGen, '), newer fetch is active (gen', fetchGenRef.current, ')');
                    return;
                }

                setLoading(true);

                // 2. Fetch plans using the resolved countryId
                const [plansResponse, compareResponse] = await Promise.all([
                    getAllSubscriptionsService(countryId || undefined),
                    compareSubscriptionsService()
                ]);

                // Check again after the API call in case auth rehydrated during the network request
                if (currentGen !== fetchGenRef.current) {
                    console.log('Abandoning stale fetch after API (gen', currentGen, ')');
                    return;
                }

                // We only show Residential plans (planTypeId === 1) here for end users
                const residentialPlans = plansResponse
                    .filter(p => p.planTypeId === 1 && p.isActive !== false)
                    .sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));

                setPlans(residentialPlans);

                if (Array.isArray(compareResponse)) {
                    setCompareData(compareResponse);
                }

                setError(null);
            } catch (err: any) {
                // Only set error if this is still the latest fetch
                if (currentGen !== fetchGenRef.current) return;
                console.error("Failed to load plans:", err);
                setError(err.message || 'Failed to load subscription plans. Please try again later.');
            } finally {
                if (currentGen === fetchGenRef.current) {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [dispatch, isAuthenticated, user?.countryId]);

    const businessFeatures = [
        'White-label solution',
        'API & SDK Integration',
        'Custom Catalog Creation',
        'Dedicated Account Manager',
        'Team Collaboration Tools',
        'Advanced Analytics',
        'Custom Contracts & SLAs'
    ];

    const getPlanIcon = (name: string) => {
        const lowerName = name.toLowerCase();
        if (lowerName.includes('free')) return Star;
        if (lowerName.includes('plus')) return Crown;
        return Zap;
    };

    const formatPrice = (price?: number | string) => {
        if (!price) return '0';
        const numPrice = typeof price === 'string' ? parseFloat(price.replace(/[^0-9.]/g, "")) : price;
        return numPrice.toLocaleString(isGlobal ? 'en-US' : 'en-IN');
    };

    const AppPlanURL = (period: string, planId: any) => {
        return `${SIGNUP_URL}?planId=${planId}&period=${period}`;
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
                    {!isGlobal && (
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-6">
                            <span className="text-xs font-black uppercase tracking-widest text-orange-600">Built In India, Built For India 🇮🇳</span>
                        </div>
                    )}

                    <h1 className="text-[28px] md:text-[42px] lg:text-[56px] font-black text-zlendo-grey-dark mb-6">
                        Plans for every <span className="text-zlendo-teal">individual.</span>
                        {!isGlobal && <span className="sr-only"> Online</span>}
                    </h1>
                    <p className="text-xl text-zlendo-grey-medium font-bold opacity-60 mb-10 max-w-2xl mx-auto">
                        Whether you are renovating a single room or building a professional portfolio, we have a plan for you.
                    </p>

                    <div className="flex border-2 border-zlendo-teal/10 p-1.5 rounded-full bg-white/50 backdrop-blur-sm shadow-xl shadow-zlendo-teal/5 relative mx-auto w-fit">
                        {[
                            isSubscriptionChecked ? "Monthly" : "Month",
                            isSubscriptionChecked ? "Yearly" : "Year"
                        ].map((label) => {
                            const active = isYearly ? (label === "Year" || label === "Yearly") : (label === "Month" || label === "Monthly");
                            return (
                                <button
                                    key={label}
                                    onClick={() => setIsYearly(label === "Year" || label === "Yearly")}
                                    className={`relative w-[130px] md:w-[160px] py-4 rounded-full text-sm font-black transition-all duration-500 flex items-center justify-center ${active ? 'text-white' : 'text-gray-400 hover:text-zlendo-teal'
                                        }`}
                                >
                                    <span className="relative z-10">
                                        {label}
                                    </span>
                                    {active && (
                                        <motion.div
                                            layoutId="billing-pill"
                                            className="absolute inset-0 bg-zlendo-teal rounded-full shadow-lg shadow-zlendo-teal/30"
                                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </motion.div>
            </div>

            {error && (
                <div className="container-custom px-4 mb-8 text-center">
                    <div className="inline-block bg-red-50 text-red-600 px-6 py-3 rounded-lg border border-red-100 font-bold">
                        {error}
                    </div>
                </div>
            )}

            {loading ? (
                <div className="flex justify-center items-center py-20 min-h-[400px]">
                    <Loader2 className="w-10 h-10 text-zlendo-teal animate-spin" />
                </div>
            ) : (() => {
                const currentPlan = plans.find(p => p.planId === user?.currentPlanId);
                const currentPlanOrder = currentPlan?.displayOrder || 0;

                return (
                    <div className="container-custom px-4 mb-24">
                        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
                            {plans.map((plan: any, index: any) => {
                                const Icon = getPlanIcon(plan.planName || '');
                                const isFree = plan.planName?.toLowerCase().includes('free') || plan.price === 0 || plan.displayOrder === 1;
                                const isProPlus = plan.planName?.toLowerCase().includes('plus');
                                const isPopular = !!plan.popular;
                                const isCurrentPlan = isAuthenticated && user && user.currentPlanId === plan.planId;
                                const isDowngrade = isAuthenticated && user && (plan.displayOrder || 0) < currentPlanOrder;

                                const badge = isCurrentPlan ? 'Current Plan' : isPopular ? 'Most Popular' : isProPlus ? 'Best Value' : null;

                                let normalPrice = 0;
                                let periodLabel = '';

                                if (!isSubscriptionChecked) {
                                    if (!isYearly) {
                                        normalPrice = Number(plan.price) || 0;
                                        periodLabel = 'Month';
                                    } else {
                                        normalPrice = Number(plan.yearPrice) || 0;
                                        periodLabel = 'Year';
                                    }
                                } else {
                                    if (!isYearly) {
                                        normalPrice = Number(plan.monthPrice) || 0;
                                        periodLabel = 'Monthly';
                                    } else {
                                        normalPrice = Number(plan.yearlyPrice) || 0;
                                        periodLabel = 'Yearly';
                                    }
                                }

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
                                        if (rawDiscountedPrice >= 0) {
                                            discountedPrice = rawDiscountedPrice;
                                            hasDiscount = true;
                                            const percentageOff = Math.round((activeOffer.discountValue / normalPrice) * 100);
                                            discountLabel = `${percentageOff}% OFF`;
                                        }
                                    }
                                    discountedPrice = Math.round(discountedPrice);
                                }

                                const displayPrice = discountedPrice.toLocaleString(isGlobal ? 'en-US' : 'en-IN');
                                const originalPriceFormatted = normalPrice.toLocaleString(isGlobal ? 'en-US' : 'en-IN');
                                // periodLabel is already set above

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
                                } else if (plan.features) {
                                    featuresList = Array.isArray(plan.features) ? plan.features.map((f: any) => typeof f === 'string' ? f : f.text) : (plan.features as string).split(',').map((f: string) => f.trim());
                                }

                                return (
                                    <motion.div
                                        key={plan.planId || index}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.4 } }}
                                        whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.2 } }}
                                        className={`relative bg-white rounded-[24px] p-8 border transition-colors transition-shadow duration-300 flex flex-col hover:shadow-xl w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-h-[500px] ${isCurrentPlan || isProPlus
                                            ? 'border-zlendo-teal shadow-[0_20px_40px_-15px_rgba(0,168,132,0.15)] hover:shadow-[0_25px_50px_-12px_rgba(0,168,132,0.25)] z-10'
                                            : 'border-gray-100 shadow-lg shadow-black/[0.02] hover:border-zlendo-teal/30 hover:shadow-black/[0.05]'
                                            }`}
                                    >
                                        {badge && (
                                            <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-md bg-zlendo-orange">
                                                {badge}
                                            </div>
                                        )}

                                        <div className="mb-6">
                                            <h2 className="text-2xl font-black text-zlendo-grey-dark">
                                                {plan.planName}
                                                {country === 'in' && <span className="sr-only"> (India)</span>}
                                            </h2>
                                            <p className="text-sm font-bold text-gray-400 mt-1 line-clamp-2">{plan.description}</p>
                                        </div>

                                        <div className="mb-8 h-20 flex flex-col justify-center">
                                            {isFree ? (
                                                <div className="text-4xl font-black text-zlendo-grey-dark">{plan.symbol || '₹'}0</div>
                                            ) : (
                                                <div className="flex flex-col gap-1">
                                                    {hasDiscount && (
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <span className="text-xl font-bold text-gray-400 line-through opacity-60">
                                                                {plan?.symbol}{originalPriceFormatted}
                                                            </span>
                                                            <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-md text-xs font-black">
                                                                {discountLabel}
                                                            </span>
                                                        </div>
                                                    )}
                                                    <div className="flex items-baseline gap-2 flex-wrap">
                                                        <span className="text-4xl font-black text-zlendo-grey-dark">
                                                            {plan?.symbol}{displayPrice}
                                                        </span>
                                                        <span className="text-sm font-bold text-gray-400 opacity-60">/{periodLabel}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="mb-6 mt-auto">
                                            {(isCurrentPlan || isDowngrade) ? (
                                                <div className="w-full py-4 rounded-full font-black text-base flex items-center justify-center bg-gray-50 text-gray-300 cursor-not-allowed border border-gray-100/50">
                                                    Get Started Now
                                                </div>
                                            ) : (
                                                <Link
                                                    href={isAuthenticated && user ? DASHBOARD_URL : (isFree ? SIGNUP_URL : AppPlanURL(periodLabel.toLowerCase(), plan.planId))}
                                                    className="w-full py-4 rounded-full font-black text-base transition-all active:scale-95 flex items-center justify-center bg-zlendo-teal text-white hover:bg-[#008f72] shadow-lg shadow-zlendo-teal/20"
                                                >
                                                    Get Started Now
                                                </Link>
                                            )}
                                        </div>

                                        {/* Subscription Toggle Switch */}
                                        {!isFree && (
                                            <div className="flex items-center gap-4 mb-4">
                                                <button
                                                    onClick={() => setIsSubscriptionChecked(!isSubscriptionChecked)}
                                                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${isSubscriptionChecked ? 'bg-zlendo-teal' : 'bg-gray-300'
                                                        }`}
                                                >
                                                    <motion.div
                                                        animate={{ x: isSubscriptionChecked ? 26 : 2 }}
                                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                                        className="absolute top-1 left-0 w-4 h-4 bg-white rounded-full shadow-sm"
                                                    />
                                                </button>
                                                <span className="text-sm font-bold text-zlendo-grey-dark">
                                                    {isSubscriptionChecked ? (
                                                        <>
                                                            Subscription <span className="text-zlendo-orange ml-1">SAVE BIG</span>
                                                        </>
                                                    ) : (
                                                        "One time purchase"
                                                    )}
                                                </span>
                                            </div>
                                        )}

                                        <div className="flex-grow">
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
                                                                    {feature}
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

            {!loading && compareData.length > 0 && plans.length > 0 && (
                <div className="container-custom px-4">
                    <ComparePlans
                        compareData={compareData}
                        plansList={plans}
                        billingCycle={isYearly ? 'yearly' : 'monthly'}
                        isSubscriptionChecked={isSubscriptionChecked}
                        activeOffer={activeOffer}
                        isGlobal={isGlobal}
                    />
                </div>
            )}

            <div className="container-custom px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto bg-zlendo-grey-dark rounded-[40px] p-8 md:p-16 relative overflow-hidden text-white shadow-2xl"
                >
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
                                    href={`${getPath('/contact')}`}
                                    className="bg-white text-zlendo-grey-dark px-10 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition-colors flex items-center justify-center font-nunito"
                                >
                                    Contact Sales
                                </Link>
                                <Link href={getPath('/business')} className="px-10 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2 group font-nunito">
                                    Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

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

export default PlansClient;
