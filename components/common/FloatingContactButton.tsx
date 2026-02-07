'use client';

import { Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCountry } from '@/lib/context/CountryContext';

const FloatingContactButton = () => {
    const { paths } = useCountry();
    const router = useRouter();

    return (
        <div
            onClick={(e) => {
                e.preventDefault();
                router.push(paths.contact);
            }}
            className="fixed right-0 top-1/2 -translate-y-1/2 z-[999] bg-zlendo-teal text-white p-3 rounded-l-xl shadow-lg hover:pr-5 transition-all duration-300 group flex items-center gap-2 cursor-pointer"
            aria-label="Contact Us"
        >
            <Mail className="w-6 h-6" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-bold text-sm">
                Contact Us
            </span>
        </div>
    );
};

export default FloatingContactButton;
