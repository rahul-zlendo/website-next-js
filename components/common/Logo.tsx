'use client';

import Link from 'next/link';
import { useCountry } from '@/lib/context/CountryContext';

const Logo = ({ className = "h-12", onClick }: { className?: string, onClick?: () => void }) => {
    const { getPath } = useCountry();

    return (
        <Link
            href={getPath('/')}
            className={`flex items-center gap-2 group cursor-pointer ${className}`}
            onClick={onClick}
        >
            <img
                src="/logo.png"
                alt="Zlendo Realty"
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                loading="eager"
            />
        </Link>
    );
};

export default Logo;

