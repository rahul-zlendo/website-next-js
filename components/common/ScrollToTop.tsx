'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ChevronUp } from 'lucide-react';
import ChatWidget from './ChatWidget';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasConsent, setHasConsent] = useState(true);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const hasInteractedRef = useRef<boolean>(false);

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

        const handleStorage = () => {
            const currentConsent = localStorage.getItem('zlendo_cookie_consent');
            setHasConsent(!!currentConsent);
        };

        window.addEventListener('scroll', toggleVisibility);
        window.addEventListener('storage', handleStorage);
        window.addEventListener('cookie-consent-changed', handleStorage);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            window.removeEventListener('storage', handleStorage);
            window.removeEventListener('cookie-consent-changed', handleStorage);
        };
    }, []);

    // Auto-open chat bot for 10 seconds on first visit (session based), except on mobile
    useEffect(() => {
        const hasAutoOpened = sessionStorage.getItem('zlendo_chat_auto_opened');

        // Don't auto-open on mobile devices (width < 768px)
        const isMobile = window.innerWidth < 768;

        if (!hasAutoOpened && !isMobile) {
            const openTimer = setTimeout(() => {
                setIsChatOpen(true);
                sessionStorage.setItem('zlendo_chat_auto_opened', 'true');

                setTimeout(() => {
                    setIsChatOpen((prev) => {
                        if (hasInteractedRef.current) return prev;
                        if (prev) return false;
                        return prev;
                    });
                }, 15000);
            }, 1000);

            return () => clearTimeout(openTimer);
        } else if (!hasAutoOpened && isMobile) {
            // Mark as opened so we don't open it if the user resizes the window later
            sessionStorage.setItem('zlendo_chat_auto_opened', 'true');
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div className="fixed right-8 z-[6000] flex flex-col gap-4 items-center transition-all duration-300"
                style={{ bottom: !hasConsent ? '160px' : '32px' }}>
                <AnimatePresence>
                    {/* Chat Bot Button (Toggles Widget) */}
                    <motion.button
                        key="chat-btn"
                        onClick={() => {
                            hasInteractedRef.current = true;
                            setIsChatOpen(!isChatOpen);
                        }}
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 10 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 border-2 group ${isChatOpen
                            ? 'bg-zlendo-grey-dark text-white border-white/10'
                            : 'bg-[#f97316] text-white border-[#f97316] shadow-[#f97316]/30'
                            }`}
                        aria-label="Chat with us"
                    >
                        {!isChatOpen && (
                            <div className="absolute inset-0 rounded-full bg-[#f97316] animate-ping opacity-75" />
                        )}
                        <MessageCircle
                            className={`relative z-10 w-8 h-8 group-hover:scale-110 transition-transform duration-300 ${isChatOpen ? 'text-white' : 'text-white'}`}
                            fill="currentColor"
                            strokeWidth={0}
                        />

                        {/* Tooltip */}
                        <span className="absolute right-full mr-5 px-4 py-2 bg-zlendo-grey-dark text-white text-xs font-black rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-white/10">
                            Chat Assistant
                        </span>

                        {/* Badge */}
                        {!isChatOpen && (
                            <span className="absolute top-1 right-2 w-3.5 h-3.5 bg-[#ff6b6b] rounded-full border-2 border-white" />
                        )}
                    </motion.button>

                    {/* Scroll To Top Button */}
                    {isVisible && (
                        <motion.button
                            key="scroll-btn"
                            initial={{ opacity: 0, scale: 0.5, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.5, y: 20 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={scrollToTop}
                            className="w-14 h-14 bg-zlendo-teal text-white rounded-full flex items-center justify-center shadow-2xl shadow-zlendo-teal/30 border border-white/20 group transition-all duration-300"
                            aria-label="Scroll to top"
                        >
                            <ChevronUp className="w-7 h-7 group-hover:-translate-y-1 transition-transform duration-300" />

                            {/* Ring animation */}
                            <div className="absolute inset-0 rounded-full border-2 border-white/20 scale-100 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            {/* Chat Widget Modal */}
            <div
                onMouseEnter={() => { hasInteractedRef.current = true; }}
                onClickCapture={() => { hasInteractedRef.current = true; }}
                onFocusCapture={() => { hasInteractedRef.current = true; }}
                onTouchStartCapture={() => { hasInteractedRef.current = true; }}
            >
                <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
            </div>
        </>
    );
};

export default ScrollToTop;

