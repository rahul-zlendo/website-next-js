import React from 'react';
import PromoBanner from '@/components/layout/PromoBanner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getClient } from '@/lib/sanity/client';
import { siteSettingsQuery } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/image';
import ScrollToTop from '@/components/common/ScrollToTop';
import { CountryProvider } from '@/lib/context/CountryContext';
import AuthSync from '@/components/layout/AuthSync';
import CookieConsent from '@/components/common/CookieConsent';
import FloatingContactButton from '@/components/common/FloatingContactButton';
import DynamicBreadcrumb from '@/components/common/DynamicBreadcrumb';
import GeoSuggestBanner from '@/components/common/GeoSuggestBanner';

export default async function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Reuse existing site settings for now, or we can create 'globalSiteSettings' later
  const settings = await getClient().fetch(siteSettingsQuery).catch(() => null);
  const logoUrl = settings?.logoImage ? urlFor(settings.logoImage).url() : undefined;

  return (
    <CountryProvider initialCountry="global">
      <div className="min-h-screen bg-white text-zlendo-grey-dark selection:bg-zlendo-teal/10 selection:text-zlendo-teal font-nunito">
        <DynamicBreadcrumb />
        <AuthSync />
        <GeoSuggestBanner />
        <PromoBanner />
        <Header logoUrl={logoUrl} />
        <main>{children}</main>
        <Footer settings={settings} isGlobal={true} />
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
