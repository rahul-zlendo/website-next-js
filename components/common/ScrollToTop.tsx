'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasConsent, setHasConsent] = useState(true);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        const consent = localStorage.getItem('zlendo_cookie_consent');
        setHasConsent(!!consent);

        // Also listen for storage changes in case user accepts in another tab or same page
        const handleStorage = () => {
            const currentConsent = localStorage.getItem('zlendo_cookie_consent');
            setHasConsent(!!currentConsent);
        };

        window.addEventListener('scroll', toggleVisibility);
        window.addEventListener('storage', handleStorage);

        // Custom event for same-window changes from CookieConsent
        window.addEventListener('cookie-consent-changed', handleStorage);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            window.removeEventListener('storage', handleStorage);
            window.removeEventListener('cookie-consent-changed', handleStorage);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className={`fixed right-8 z-[6000] w-14 h-14 bg-zlendo-teal text-white rounded-full flex items-center justify-center shadow-2xl shadow-zlendo-teal/30 border border-white/20 backdrop-blur-sm group transition-all duration-300 ${!hasConsent ? 'bottom-32 md:bottom-24' : 'bottom-8'
                        }`}
                    aria-label="Scroll to top"
                >
                    <ChevronUp className="w-7 h-7 group-hover:-translate-y-1 transition-transform duration-300" />

                    {/* Ring animation */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/20 scale-100 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
 