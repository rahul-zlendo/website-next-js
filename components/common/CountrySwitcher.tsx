'use client';

import { useState, useRef, useEffect } from 'react';
import { useCountry, type CountryCode } from '@/lib/context/CountryContext';
import { ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const countries: { code: CountryCode; name: string; flag: string }[] = [
    { code: 'in', name: 'India', flag: '🇮🇳' },
    { code: 'global', name: 'Global', flag: '🌐' },
];

const CountrySwitcher = () => {
    const { country, setCountry } = useCountry();
    const [isOpen, setIsOpen] = useState(false);
    const [detectedRegion, setDetectedRegion] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentCountry = countries.find(c => c.code === country) || countries[1];

    // Auto-detect region on mount via lightweight IP lookup
    useEffect(() => {
        const detectRegion = async () => {
            try {
                // Use a free, lightweight geo-IP service
                const res = await fetch('https://ipapi.co/json/', { 
                    signal: AbortSignal.timeout(3000) // 3s timeout
                });
                if (res.ok) {
                    const data = await res.json();
                    const countryCode = data.country_code?.toLowerCase();
                    setDetectedRegion(data.country_name || null);
                    
                    // If user hasn't manually chosen a region (no stored preference),
                    // auto-set based on IP
                    const stored = localStorage.getItem('zl_country_pref');
                    if (!stored) {
                        if (countryCode === 'in') {
                            setCountry('in');
                        } else {
                            setCountry('global');
                        }
                    }
                }
            } catch {
                // Silently fail — middleware handles the redirect anyway
            }
        };

        detectRegion();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-black/[0.03] transition-all text-[13px] font-bold text-zlendo-grey-dark"
            >
                <span className="text-base">{currentCountry.flag}</span>
                <span className="uppercase">{currentCountry.code === 'global' ? 'Global' : currentCountry.code}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-full mb-2 right-0 w-52 bg-white rounded-2xl shadow-2xl border border-black/[0.05] p-2 z-[110]"
                    >
                        <div className="text-[10px] font-black uppercase tracking-widest text-zlendo-grey-medium opacity-40 px-3 py-2">
                            Select Region
                        </div>

                        {/* Show detected region hint */}
                        {detectedRegion && (
                            <div className="flex items-center gap-1.5 px-3 py-1.5 mb-1 text-[10px] text-zlendo-teal font-medium bg-zlendo-teal/5 rounded-lg">
                                <Globe className="w-3 h-3" />
                                Detected: {detectedRegion}
                            </div>
                        )}

                        {countries.map((c) => (
                            <button
                                key={c.code}
                                onClick={() => {
                                    setCountry(c.code);
                                    setIsOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${country === c.code ? 'bg-zlendo-teal/10 text-zlendo-teal' : 'hover:bg-slate-50 text-zlendo-grey-dark'}`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-lg">{c.flag}</span>
                                    <span className="font-bold text-[13px]">{c.name}</span>
                                </div>
                                {country === c.code && <div className="w-1.5 h-1.5 rounded-full bg-zlendo-teal" />}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CountrySwitcher;
