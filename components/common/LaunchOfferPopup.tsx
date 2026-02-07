'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, PartyPopper, ArrowRight, Check } from 'lucide-react';
import Cookies from 'js-cookie';
import { SIGNUP_URL } from '@/lib/constants/urls';
import Logo from './Logo';

export default function LaunchOfferPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [isExploding, setIsExploding] = useState(false);

    useEffect(() => {
        // Check if user has already dismissed the offer
        const hasDismissed = Cookies.get('launch_offer_dismissed');

        if (!hasDismissed) {
            // Delay for dramatic effect after page load
            const timer = setTimeout(() => {
                setIsVisible(true);
                setIsExploding(true);
                // Stop the intense confetti animation after entrance
                setTimeout(() => setIsExploding(false), 2000);
            }, 1000); // 1-second delay
            return () => clearTimeout(timer);
        }
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        // Save dismissal preference for 1 day
        Cookies.set('launch_offer_dismissed', 'true', { expires: 1 });
    };

    // Balloon Component
    const Balloon = ({ color, delay, left, speed = 15 }: { color: string, delay: number, left: string, speed?: number }) => (
        <motion.div
            initial={{ y: '110vh', opacity: 0.8 }}
            animate={{
                y: '-20vh',
                x: [0, 20, -20, 0] // Swaying motion
            }}
            transition={{
                y: { duration: speed, repeat: Infinity, ease: 'linear', delay: delay },
                x: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="fixed bottom-0 w-12 h-16 rounded-[50%] z-[9997] opacity-60 mix-blend-multiply pointer-events-none"
            style={{ backgroundColor: color, left: left }}
        >
            {/* Balloon String */}
            <div className="absolute bottom-[-20px] left-1/2 w-[1px] h-[20px] bg-slate-400 opacity-50 origin-top rotate-12"></div>
        </motion.div>
    );

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Balloons Container */}
                    <div className="fixed inset-0 pointer-events-none z-[9997] overflow-hidden">
                        <Balloon color="#FF9933" delay={0} left="5%" />
                        <Balloon color="#3B82F6" delay={1} left="12%" />
                        <Balloon color="#138808" delay={2.5} left="85%" />
                        <Balloon color="#FF6B00" delay={4} left="92%" />
                    </div>

                    {/* Container - No Overlay Background */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9998] flex items-center justify-center p-4 pointer-events-none"
                    >
                        {/* Confetti / Particle Effects Layer */}
                        {isExploding && (
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                {[...Array(20)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{
                                            opacity: 1,
                                            scale: 0,
                                            x: window.innerWidth / 2,
                                            y: window.innerHeight / 2
                                        }}
                                        animate={{
                                            opacity: 0,
                                            scale: Math.random() * 1 + 0.5,
                                            x: Math.random() * window.innerWidth,
                                            y: Math.random() * window.innerHeight
                                        }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="absolute text-2xl"
                                        style={{ color: ['#FF603A', '#29B0A1', '#FFD700'][i % 3] }}
                                    >
                                        {['★', '●', '▲', '■'][i % 4]}
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {/* Creative Popup Card */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, rotateX: 20 }}
                            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                            exit={{ scale: 0.8, opacity: 0, rotateX: -20 }}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                            className="relative w-full max-w-lg z-[9999] pointer-events-auto"
                        >
                            {/* Rich Radiant Glow Behind */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF0080] via-[#FF8C00] to-[#40E0D0] rounded-[36px] blur-xl opacity-60 animate-pulse-slow" />

                            {/* Main Card Container */}
                            <div className="relative bg-[#0f1014] rounded-[32px] overflow-hidden border border-white/20 shadow-2xl">

                                {/* Hero Section with Vibrant Mesh Gradient */}
                                <div className="h-44 relative overflow-hidden flex flex-col items-center justify-center">
                                    {/* Animated Mesh Background */}
                                    <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-rose-500 via-fuchsia-500 to-indigo-500 animate-spin-slow opacity-80" />
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0f1014_100%)]" />

                                    {/* Logo */}
                                    <motion.div
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="relative z-10 bg-white/90 backdrop-blur-xl border border-white/30 px-6 py-3 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] mb-4"
                                    >
                                        <Logo className="h-10" />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="relative z-10"
                                    >
                                        <h2 className="text-4xl font-black text-white drop-shadow-md flex items-center justify-center gap-3">
                                            WE ARE LIVE! <PartyPopper className="w-8 h-8 text-yellow-300 animate-bounce" />
                                        </h2>
                                    </motion.div>
                                </div>

                                {/* Content Body - Deep Dark Glass */}
                                <div className="px-8 pb-8 pt-2 text-center relative z-10 bg-gradient-to-b from-[#0f1014]/0 to-[#0f1014]">

                                    <p className="text-lg text-white/80 font-medium mb-6 leading-relaxed">
                                        Unlock the full power of Zlendo Realty with <br /> our <span className="text-fuchsia-400 font-bold">Launch Celebration Offer</span>.
                                    </p>

                                    {/* Offer Ticket Style Box */}
                                    <div className="relative group overflow-hidden rounded-2xl p-[2px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 mb-8 shadow-[0_0_20px_rgba(192,38,211,0.3)]">
                                        <div className="bg-[#181822] rounded-2xl p-5 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/20 blur-[50px] rounded-full" />
                                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/20 blur-[50px] rounded-full" />

                                            <div className="relative z-10">
                                                <div className="text-xs font-black uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 mb-2">Exclusive Access</div>
                                                <div className="text-5xl font-black text-white mb-2 tracking-tighter drop-shadow-lg">
                                                    15 DAYS <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">FREE</span>
                                                </div>
                                                <div className="flex flex-wrap justify-center gap-3 mt-3">
                                                    <span className="flex items-center gap-1.5 text-xs font-bold text-white/70 bg-white/5 px-2 py-1 rounded-full border border-white/5">
                                                        <Sparkles className="w-3 h-3 text-yellow-400" /> Premium Features
                                                    </span>
                                                    <span className="flex items-center gap-1.5 text-xs font-bold text-white/70 bg-white/5 px-2 py-1 rounded-full border border-white/5">
                                                        <Check className="w-3 h-3 text-green-400" /> No Credit Card
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* High Contrast CTA */}
                                    <div className="space-y-4">
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.open(SIGNUP_URL, '_self');
                                                // We don't dismiss here necessarily, because we might want them to come back and see the video? 
                                                // Actually standard flow for "Sign Up" usually dismisses popup. 
                                                // But let's assume if they click "Start Trial", they go to sign up, but we still want them to see the video if they come back?
                                                // Or maybe we treat "Start Trial" as interacting and thus we show video?
                                                // The prompt says "After the popup we need to play...". Dismissing usually means closing.
                                                // I will treat clicking "Start Trial" as a "dismiss" action too if it navigates away? 
                                                // If it navigates away, we can't show the video.
                                                // Let's assume the user dismisses the popup via "X" or "No thanks", THEN we show video.
                                                // OR if they click "Start free trial", maybe we should show video first? 
                                                // Standard pattern: "After the popup" usually implies the sequence of user experience on THIS page.
                                                // Since SIGNUP_URL likely navigates away, we can't show video after that unless we redirect.
                                                // So I will apply video logic to the "Dismiss / Close" actions.
                                                handleDismiss();
                                            }}
                                            className="group relative w-full block"
                                        >
                                            <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-cyan-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-200" />
                                            <div className="relative py-4 bg-white text-black font-black text-lg rounded-xl overflow-hidden flex items-center justify-center gap-2 transform transition-transform group-hover:scale-[1.01] active:scale-[0.99]">
                                                Start My Free Trial <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </button>

                                        <button
                                            onClick={handleDismiss}
                                            className="text-xs font-bold text-white/30 hover:text-white/80 transition-colors uppercase tracking-widest"
                                        >
                                            No thanks, I'll pay later
                                        </button>
                                    </div>
                                </div>

                                {/* Close Button */}
                                <button
                                    onClick={handleDismiss}
                                    className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white/60 hover:text-white hover:bg-white/20 hover:scale-110 transition-all z-20 backdrop-blur-md border border-white/10"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
