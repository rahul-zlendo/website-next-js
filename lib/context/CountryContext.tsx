'use client';

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export type CountryCode = 'in' | 'global';

interface CountryPaths {
    enterpriseDemo: string;
    enterprise: string;
    plans: string;
    contact: string;
    helpCenter: string;
    partners: string;
}

interface CountryContextType {
    country: CountryCode;
    setCountry: (code: CountryCode) => void;
    getPath: (path: string) => string;
    paths: CountryPaths;
}

const COUNTRY_COOKIE_NAME = 'zl_country_pref';
const SUPPORTED_COUNTRIES: CountryCode[] = ['in', 'global'];

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider: React.FC<{ children: React.ReactNode; initialCountry: CountryCode }> = ({
    children,
    initialCountry
}) => {
    const [country, setCountryState] = useState<CountryCode>(initialCountry);
    const pathname = usePathname();
    const router = useRouter();

    // Update country state when path changes.
    // NOTE: We intentionally do NOT write to localStorage here.
    // localStorage is only updated on explicit user action (setCountry)
    // to prevent path-based navigation from creating stale geo preferences
    // that persist across VPN/network changes.
    useEffect(() => {
        const pathParts = pathname?.split('/') || [];
        const pathCountry = pathParts[1] as CountryCode;
        if (pathCountry && SUPPORTED_COUNTRIES.includes(pathCountry)) {
            setCountryState(pathCountry);
        } else if (pathParts.length > 0) {
            // If no country prefix, it's global
            setCountryState('global');
        }
    }, [pathname]);

    const setCountry = (code: CountryCode) => {
        if (SUPPORTED_COUNTRIES.includes(code)) {
            setCountryState(code);
            localStorage.setItem(COUNTRY_COOKIE_NAME, code);

            // Redirect to the same path but with the new country code
            const currentPathWithoutCountry = pathname?.replace(/^\/in/, '') || '';
            const newPath = code === 'global' ? (currentPathWithoutCountry || '/') : `/${code}${currentPathWithoutCountry}`;
            router.push(newPath);
        }
    };

    const getPath = (path: string) => {
        // If it's an absolute URL, return it as is
        if (path.startsWith('http://') || path.startsWith('https://')) {
            return path;
        }
        
        const cleanPath = path.startsWith('/') ? path : `/${path}`;

        // Global country doesn't use prefixes
        if (country === 'global') {
            return cleanPath;
        }

        // Prevent duplicate country prefix if already present (e.g., /in/...)
        if (cleanPath.startsWith(`/${country}/`) || cleanPath === `/${country}`) {
            return cleanPath;
        }

        // Homepage uses the region-specific URL
        if (cleanPath === '/') return `/${country}`;
        return `/${country}${cleanPath}`;
    };

    // Pre-built paths for commonly used routes
    const paths = useMemo<CountryPaths>(() => {
        const prefix = country === 'global' ? '' : `/${country}`;
        return {
            enterpriseDemo: `${prefix}/business#demo-form`,
            enterprise: `${prefix}/business`,
            plans: `${prefix}/plans`,
            contact: `${prefix}/contact`,
            helpCenter: `${prefix}/help-center`,
            partners: `${prefix}/partners`,
        };
    }, [country]);

    return (
        <CountryContext.Provider value={{ country, setCountry, getPath, paths }}>
            {children}
        </CountryContext.Provider>
    );
};

export const useCountry = () => {
    const context = useContext(CountryContext);
    if (context === undefined) {
        throw new Error('useCountry must be used within a CountryProvider');
    }
    return context;
};
