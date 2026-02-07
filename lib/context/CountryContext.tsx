'use client';

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export type CountryCode = 'in' | 'us' | 'uk' | 'eu' | 'au';

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
const SUPPORTED_COUNTRIES: CountryCode[] = ['in', 'us', 'uk', 'eu', 'au'];

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider: React.FC<{ children: React.ReactNode; initialCountry: CountryCode }> = ({ 
    children, 
    initialCountry 
}) => {
    const [country, setCountryState] = useState<CountryCode>(initialCountry);
    const pathname = usePathname();
    const router = useRouter();

    // Update country state when path changes
    useEffect(() => {
        const pathCountry = pathname?.split('/')[1] as CountryCode;
        if (pathCountry && SUPPORTED_COUNTRIES.includes(pathCountry)) {
            setCountryState(pathCountry);
            localStorage.setItem(COUNTRY_COOKIE_NAME, pathCountry);
        }
    }, [pathname]);

    const setCountry = (code: CountryCode) => {
        if (SUPPORTED_COUNTRIES.includes(code)) {
            setCountryState(code);
            localStorage.setItem(COUNTRY_COOKIE_NAME, code);

            // Redirect to the same path but with the new country code
            const currentPathWithoutCountry = pathname?.replace(/^\/[a-z]{2}/, '') || '';
            router.push(`/${code}${currentPathWithoutCountry}`);
        }
    };

    const getPath = (path: string) => {
        const cleanPath = path.startsWith('/') ? path : `/${path}`;
        return `/${country}${cleanPath === '/' ? '' : cleanPath}`;
    };

    // Pre-built paths for commonly used routes
    const paths = useMemo<CountryPaths>(() => ({
        enterpriseDemo: `/${country}/business#demo-form`,
        enterprise: `/${country}/business`,
        plans: `/${country}/plans`,
        contact: `/${country}/contact`,
        helpCenter: `/${country}/help-center`,
        partners: `/${country}/partners`,
    }), [country]);

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
