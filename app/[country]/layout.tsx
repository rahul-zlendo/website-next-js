import { notFound, redirect } from 'next/navigation';
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
import { getClient } from '@/lib/sanity/client';
import { siteSettingsQuery } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/image';
import { draftMode } from 'next/headers';

const SUPPORTED_COUNTRIES = ['in'];

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

  // Force all visitors to /in
  if (country !== 'in') {
    redirect('/in');
  }
 
  const { isEnabled: preview } = await draftMode();
  const settings = await getClient(preview).fetch(siteSettingsQuery).catch(() => null);
  const logoUrl = settings?.logoImage ? urlFor(settings.logoImage).url() : undefined;

  return (
    <CountryProvider initialCountry={country as CountryCode}>
      <div className="min-h-screen bg-white text-zlendo-grey-dark selection:bg-zlendo-teal/10 selection:text-zlendo-teal">
        <AuthSync />
        <PromoBanner />
        <header>
          <Header logoUrl={logoUrl} />
        </header>
        {/* <LaunchOfferPopup /> */}
        <ScrollToTopOnNavigate />
        <main>{children}</main>
        <Footer settings={settings} />
        <ScrollToTop />
        <FloatingContactButton />
        <CookieConsent 
          text={settings?.cookieConsentText}
          acceptLabel={settings?.cookieAcceptLabel}
          declineLabel={settings?.cookieDeclineLabel}
        />
      </div>
    </CountryProvider>
  );
}
