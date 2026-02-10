import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CountryProvider, type CountryCode } from '@/lib/context/CountryContext';
import ScrollToTop from '@/components/common/ScrollToTop';
import FloatingContactButton from '@/components/common/FloatingContactButton';
import CookieConsent from '@/components/common/CookieConsent';

export const metadata: Metadata = {
    title: {
        default: 'Help Center | Zlendo Realty',
        template: '%s | Zlendo Realty Help Center',
    },
    description: 'Find answers, tutorials, and guides for Zlendo Realty\'s AI-powered floor planning, interior design, and home visualization tools.',
};

const DEFAULT_COUNTRY: CountryCode = 'in';

export default function HelpCenterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <CountryProvider initialCountry={DEFAULT_COUNTRY}>
            <div className="min-h-screen bg-[#fafbfc] text-zlendo-grey-dark selection:bg-zlendo-teal/10 selection:text-zlendo-teal">
                <Header />
                <main>{children}</main>
                <Footer />
                <ScrollToTop />
                <FloatingContactButton />
                <CookieConsent />
            </div>
        </CountryProvider>
    );
}
