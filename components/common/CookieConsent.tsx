'use client';

import { useState, useEffect, useRef } from 'react';
import { useCountry } from '@/lib/context/CountryContext';
import Link from 'next/link';
import { X } from 'lucide-react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [height, setHeight] = useState(0);
    const bannerRef = useRef<HTMLDivElement>(null);
    const { getPath } = useCountry();

    useEffect(() => {
        const consent = localStorage.getItem('zlendo_cookie_consent');
        if (!consent) {
            // Show popup after a small delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        if (isVisible && bannerRef.current) {
            const updateHeight = () => {
                if (bannerRef.current) {
                    setHeight(bannerRef.current.offsetHeight);
                }
            };

            updateHeight();
            window.addEventListener('resize', updateHeight);
            return () => window.removeEventListener('resize', updateHeight);
        }
    }, [isVisible]);

    const handleAccept = () => {
        localStorage.setItem('zlendo_cookie_consent', 'accepted');
        setIsVisible(false);
        window.dispatchEvent(new Event('cookie-consent-changed'));
    };

    const handleDecline = () => {
        localStorage.setItem('zlendo_cookie_consent', 'declined');
        setIsVisible(false);
        window.dispatchEvent(new Event('cookie-consent-changed'));
    };

    if (!isVisible) return null;

    return (
        <>
            <div
                ref={bannerRef}
                className="fixed bottom-0 left-0 right-0 z-[5000] bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.1)] p-3 md:p-4 animate-slide-up"
            >
                <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 pr-8 md:pr-0">
                    <div className="flex-1 text-left">
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic.
                            By clicking "Accept All", you consent to our use of cookies.
                            Read our <Link href={getPath('/cookie-policy')} className="text-zlendo-teal font-bold hover:underline">Cookie Policy</Link> to learn more.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
                        <button
                            onClick={handleDecline}
                            className="flex-1 px-4 py-2.5 rounded-full border border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition-colors text-xs md:text-sm whitespace-nowrap"
                        >
                            Decline
                        </button>
                        <button
                            onClick={handleAccept}
                            className="flex-1 px-4 py-2.5 rounded-full bg-zlendo-teal text-white font-bold hover:bg-zlendo-teal-dark transition-colors shadow-lg hover:shadow-xl text-xs md:text-sm whitespace-nowrap"
                        >
                            Accept All
                        </button>
                    </div>

                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 md:hidden"
                        aria-label="Close"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>
            {/* Spacer to prevent footer overlap */}
            <div style={{ height: `${height}px` }} aria-hidden="true" />
        </>
    );
};

export default CookieConsent;
