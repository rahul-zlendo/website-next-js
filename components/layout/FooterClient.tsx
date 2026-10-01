'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { usePathname } from 'next/navigation';

export default function FooterClient({
    hideCTA = false,
    children
}: {
    hideCTA?: boolean;
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const shouldHideCTA = hideCTA || pathname?.includes('/register') || pathname?.includes('/vastu-campaign');

    return (
        <footer className="bg-[#f9fafb] pt-4 md:pt-10 pb-12 border-t border-black/[0.03] relative overflow-hidden font-nunito">
            {/* CTA Section */}
            {!shouldHideCTA && (
                <div className="container-custom px-6 lg:px-12 mb-8 md:mb-20 text-[15px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[40px] p-4 md:p-12 shadow-xl shadow-black/[0.02] border border-black/[0.03] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-zlendo-teal/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10 text-center md:text-left">
                            <h3 className="text-[28px] md:text-[34px] font-black text-zlendo-grey-dark mb-4">Create your account today</h3>
                            <p className="text-[18px] text-zlendo-grey-medium font-bold opacity-60">Experience the future of AI home design for free.</p>
                        </div>
                        <a
                            href={SIGNUP_URL}
                            className="relative z-10 px-10 py-5 bg-zlendo-teal text-white rounded-full font-black text-xl shadow-2xl shadow-zlendo-teal/30 hover:scale-105 transition-all flex items-center gap-3 active:scale-95"
                        >
                            Get Started <ArrowRight className="w-6 h-6" />
                        </a>
                    </motion.div>
                </div>
            )}

            {/* Server-rendered navigation content */}
            {children}
        </footer>
    );
}
