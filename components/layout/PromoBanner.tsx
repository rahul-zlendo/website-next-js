'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { getAllOffers } from '@/lib/store/slices/offerSlice';
import { detectUserCountry } from '@/lib/store/slices/enterpriseSlice';
import { Plans } from '@/lib/config/env';

const PromoBanner = () => {
    const dispatch = useAppDispatch();
    const { activeOffer, isLoading } = useAppSelector((state) => state.offer);
    const { detectedCountryId } = useAppSelector((state) => state.enterprise);

    useEffect(() => {
        const fetchPromoData = async () => {
            // First ensure we have country detected for filtering offers
            if (!detectedCountryId) {
                try {
                    await dispatch(detectUserCountry()).unwrap();
                } catch (e) {
                    console.error("PromoBanner country detection failed:", e);
                }
            }
            dispatch(getAllOffers());
        };

        fetchPromoData();
    }, [dispatch, detectedCountryId]);

    // Don't render if still loading
    if (isLoading) {
        return null;
    }

    // Don't render if no active offer
    if (!activeOffer) {
        return null;
    }

    // Format discount value
    const discountText = activeOffer.offerType === 'Percentage'
        ? `${activeOffer.discountValue}% OFF`
        : `${activeOffer.symbol}${activeOffer.discountValue} OFF`;

    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="relative z-[110] bg-gradient-to-r from-zlendo-teal via-[#00C29A] to-zlendo-teal py-2.5 sm:py-3 px-3 sm:px-4 overflow-hidden"
        >
            {/* Animated background patterns */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,#fff_1px,transparent_1px)] bg-[length:20px_20px]" />
            </div>

            <div className="relative z-10 container-custom flex flex-row items-center justify-center gap-2 sm:gap-4 text-white w-full">
                <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 w-full">
                    {/* Hide pill on mobile to save space, show normally on sm+ */}
                    <div className="hidden sm:flex bg-white/20 px-2.5 py-1 rounded-full items-center gap-1.5 animate-pulse shrink-0">
                        <Sparkles className="w-3 h-3 text-yellow-300 fill-yellow-300" />
                        <span className="text-[10px] font-black uppercase tracking-wider whitespace-nowrap">{activeOffer.offerName}</span>
                    </div>

                    <p className="text-center text-[11px] sm:text-sm leading-tight font-bold shrink">
                        {/* Show offer name cleanly as inline text on mobile */}
                        <span className="sm:hidden font-black uppercase mr-1.5">{activeOffer.offerName} •</span>
                        Get <span className="text-yellow-300 font-black">{discountText}</span> on all Plans.
                    </p>

                    <a
                        href={Plans}
                        className="flex items-center gap-1 group hover:text-white/80 transition-all border-b border-white/30 pb-0.5 shrink-0 text-[11px] sm:text-sm font-black whitespace-nowrap"
                    >
                        Claim <span className="hidden sm:inline">Deal</span> <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default PromoBanner;
