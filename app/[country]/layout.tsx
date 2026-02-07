import { notFound } from 'next/navigation';
import { CountryProvider, type CountryCode } from '@/lib/context/CountryContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PromoBanner from '@/components/layout/PromoBanner';
import AuthSync from '@/components/layout/AuthSync';
import ScrollToTop from '@/components/common/ScrollToTop';
import FloatingContactButton from '@/components/common/FloatingContactButton';
import CookieConsent from '@/components/common/CookieConsent';
import LaunchOfferPopup from '@/components/common/LaunchOfferPopup';
import ScrollToTopOnNavigate from '@/components/common/ScrollToTopOnNavigate';

const SUPPORTED_COUNTRIES = ['in', 'us', 'uk', 'eu', 'au'];

export async function generateStaticParams() {
  return SUPPORTED_COUNTRIES.map((country) => ({
    country,
  }));
}

export default async function CountryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;

  // Validate country
  if (!SUPPORTED_COUNTRIES.includes(country)) {
    notFound();
  }

  return (
    <CountryProvider initialCountry={country as CountryCode}>
      <div className="min-h-screen bg-white text-zlendo-grey-dark selection:bg-zlendo-teal/10 selection:text-zlendo-teal">
        <AuthSync />
        <PromoBanner />
        <Header />
        <LaunchOfferPopup />
        <ScrollToTopOnNavigate />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <FloatingContactButton />
        <CookieConsent />
      </div>
    </CountryProvider>
  );
}
