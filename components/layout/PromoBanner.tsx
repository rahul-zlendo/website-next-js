'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { getAllOffers } from '@/lib/store/slices/offerSlice';
import { Plans } from '@/lib/config/env';

const PromoBanner = () => {
    const dispatch = useAppDispatch();
    const { activeOffer, isLoading, offers, error } = useAppSelector((state) => state.offer);

    useEffect(() => {
        dispatch(getAllOffers());
    }, [dispatch]);

    // Debug logging
    useEffect(() => {
        console.log('PromoBanner Debug:', {
            isLoading,
            activeOffer,
            offersCount: offers?.length || 0,
            offers,
            error
        });
    }, [isLoading, activeOffer, offers, error]);

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
        : `₹${activeOffer.discountValue} OFF`;

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

            <div className="relative z-10 container-custom flex flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 text-white text-[10px] sm:text-sm font-black tracking-wide overflow-hidden">
                <div className="flex flex-row items-center gap-2 shrink-0">
                    <div className="bg-white/20 px-1.5 sm:px-2 py-0.5 rounded-full flex items-center gap-1 animate-pulse shrink-0">
                        <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-300 fill-yellow-300" />
                        <span className="text-[8px] sm:text-[10px] uppercase whitespace-nowrap">{activeOffer.offerName}</span>
                    </div>
                </div>
                <p className="text-center text-[10px] sm:text-sm leading-tight whitespace-nowrap shrink-0">
                    {activeOffer.offerName} - Get <span className="text-yellow-300 font-black">{discountText}</span> on all Plans.
                </p>
                <a
                    href={Plans}
                    className="flex items-center gap-1 sm:gap-1.5 group hover:text-white/80 transition-all border-b border-white/30 pb-0.5 shrink-0 text-[10px] sm:text-sm whitespace-nowrap"
                >
                    Claim Deal <ArrowRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </motion.div>
    );
};

export default PromoBanner;
