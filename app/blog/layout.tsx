import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CountryProvider, type CountryCode } from '@/lib/context/CountryContext';
import ScrollToTop from '@/components/common/ScrollToTop';
import FloatingContactButton from '@/components/common/FloatingContactButton';
import CookieConsent from '@/components/common/CookieConsent';

export const metadata: Metadata = {
    title: {
        default: 'Blog | Home Design Tips & Insights',
        template: '%s | Zlendo Realty Blog',
    },
    description: 'Discover expert tips on home design, interior styling, architecture trends, Vastu, and AI-powered floor planning.',
};

// Default country for blog (not country-segmented)
const DEFAULT_COUNTRY: CountryCode = 'in';

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <CountryProvider initialCountry={DEFAULT_COUNTRY}>
            <div className="min-h-screen bg-white text-zlendo-grey-dark selection:bg-zlendo-teal/10 selection:text-zlendo-teal">
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
