import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Logo from './Logo';
import Confetti from 'react-confetti';

interface CountdownTimerProps {
    targetDate: string; // ISO string or date string
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const valueProps = [
    "The future of property visualization starts here.",
    "Turn 2D plans into immersive 3D & VR experiences.",
    "From floor plan to reality — instantly.",
    "Smarter planning. Faster decisions. Better buildings.",
    "India's next-gen real estate visualization platform is almost here."
];

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
    const [isExpired, setIsExpired] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showCelebration, setShowCelebration] = useState(false);
    const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () => {
            setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
        };
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    // Slider Logic
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % valueProps.length);
        }, 4000);
        return () => clearInterval(slideInterval);
    }, []);

    // Countdown Logic
    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();

            if (difference > 0) {
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            } else {
                return null;
            }
        };

        const initialTimeLeft = calculateTimeLeft();
        if (!initialTimeLeft) {
            // Already expired on load
            if (!isExpired) {
                setIsExpired(true);
                setShowCelebration(false);
                setTimeout(() => {
                    setShowCelebration(false);
                }, 30000);
            }
            return;
        }
        setTimeLeft(initialTimeLeft);

        const timer = setInterval(() => {
            const timeLeft = calculateTimeLeft();
            if (!timeLeft) {
                // Just turned expired
                clearInterval(timer);
                if (!isExpired) {
                    setIsExpired(true);
                    setShowCelebration(false);
                    setTimeout(() => setShowCelebration(false), 30000);
                }
            } else {
                setTimeLeft(timeLeft);

            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [targetDate, isExpired]);

    if (isExpired && !showCelebration) {
        return null;
    }



    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center mx-1 sm:mx-6">
            <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 min-w-[60px] sm:min-w-[120px] text-center border border-black/[0.04] shadow-[0_10px_40px_rgba(0,0,0,0.05)] group hover:border-zlendo-orange/30 hover:shadow-[0_15px_40px_rgba(255,107,0,0.1)] transition-all duration-300">
                <span className="text-2xl sm:text-6xl font-black text-slate-900 block tabular-nums leading-none tracking-tight group-hover:text-zlendo-orange transition-colors duration-500">
                    {value.toString().padStart(2, '0')}
                </span>
            </div>
            <span className="text-[9px] sm:text-xs font-bold text-zlendo-orange uppercase tracking-[0.2em] sm:tracking-[0.3em] mt-2 sm:mt-4">
                {label}
            </span>
        </div>
    );

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
            className="absolute bottom-0 w-12 h-16 rounded-[50%] z-0 opacity-60 mix-blend-multiply pointer-events-none"
            style={{ backgroundColor: color, left: left }}
        >
            {/* Balloon String */}
            <div className="absolute bottom-[-20px] left-1/2 w-[1px] h-[20px] bg-slate-400 opacity-50 origin-top rotate-12"></div>
        </motion.div>
    );

    // Generate random balloons for celebration
    const celebrationBalloons = Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        color: ['#FF9933', '#FFFFFF', '#138808', '#FF6B00', '#00A884', '#3B82F6', '#EF4444', '#F472B6', '#A78BFA'][Math.floor(Math.random() * 9)],
        delay: Math.random() * 5,
        left: `${Math.random() * 100}%`,
        speed: 5 + Math.random() * 10
    }));

    return (
        <div className="fixed inset-0 z-[9999] bg-[#FDFBF7] flex flex-col font-nunito overflow-y-auto overflow-x-hidden antialiased">
            {showCelebration && (
                <div className="absolute inset-0 pointer-events-none z-50">
                    <Confetti
                        width={windowDimensions.width}
                        height={windowDimensions.height}
                        recycle={true}
                        numberOfPieces={500}
                        gravity={0.2}
                    />
                </div>
            )}

            {/* Background Effects - Light Theme */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,107,0,0.03),transparent_60%)] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,168,132,0.03),transparent_60%)] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] invert pointer-events-none"></div>

            {/* Balloons Animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {showCelebration ? (
                    celebrationBalloons.map(b => (
                        <Balloon key={b.id} color={b.color} delay={b.delay} left={b.left} speed={b.speed} />
                    ))
                ) : (
                    <>
                        <Balloon color="#FF9933" delay={0} left="10%" />
                        <Balloon color="#FFFFFF" delay={2} left="15%" />
                        <Balloon color="#138808" delay={4} left="20%" />

                        <Balloon color="#FF9933" delay={5} left="80%" />
                        <Balloon color="#FFFFFF" delay={7} left="85%" />
                        <Balloon color="#138808" delay={9} left="90%" />
                    </>
                )}
            </div>

            {/* Logo Section - Top, Non-Absolute */}
            <div className="flex-none pt-4 md:pt-6 pb-10 flex justify-center z-20 w-full">
                <div className="bg-white/80 backdrop-blur-md px-8 py-4 rounded-full border border-black/[0.03] shadow-lg">
                    <Logo className="h-20 md:h-24" />
                </div>
            </div>

            {/* Main Content Section */}
            <div className="flex-1 flex flex-col justify-center items-center px-4 z-10 w-full min-h-[400px]">
                {showCelebration ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-zlendo-orange via-yellow-500 to-zlendo-teal mb-6 animate-pulse">
                            The Future of Real Estate Visualization Starts Now
                        </h1>
                        <p className="text-xl md:text-3xl text-slate-600 font-bold">
                            Welcome to the future of real estate.
                        </p>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <h1 className="text-3xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight mb-8 leading-tight">
                            Be First to Experience <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-orange via-orange-400 to-zlendo-teal animate-gradient-x">
                                Zlendo Realty
                            </span>
                        </h1>

                        {/* Text Slider */}
                        <div className="h-16 md:h-20 mb-6 flex items-center justify-center overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={currentSlide}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-lg md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed flex items-center gap-3"
                                >
                                    <ChevronRight className="w-5 h-5 text-zlendo-orange hidden md:block" />
                                    {valueProps[currentSlide]}
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        {/* Timer */}
                        {timeLeft && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap items-center justify-center gap-2 sm:gap-y-8 select-none"
                            >
                                <TimeUnit value={timeLeft.days} label="Days" />
                                <div className="hidden sm:block text-4xl font-light text-slate-300 -mt-8">:</div>
                                <TimeUnit value={timeLeft.hours} label="Hours" />
                                <div className="hidden sm:block text-4xl font-light text-slate-300 -mt-8">:</div>
                                <TimeUnit value={timeLeft.minutes} label="Minutes" />
                                <div className="hidden sm:block text-4xl font-light text-slate-300 -mt-8">:</div>
                                <TimeUnit value={timeLeft.seconds} label="Seconds" />
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </div>

            {/* Footer / CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex-none pb-8 md:pb-12 pt-8 text-center px-4 w-full z-10"
            >
                <p className="text-sm md:text-base font-bold text-slate-800 tracking-wide mb-2">
                    Built in India - Built for India
                </p>
                <p className="text-xs md:text-sm text-slate-400 font-bold uppercase tracking-widest opacity-60">
                    © 2026 Zlendo Realty. All rights reserved.
                </p>
            </motion.div>
        </div>
    );
};

export default CountdownTimer;
