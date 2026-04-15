import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getClient } from '@/lib/sanity/client';
import { siteSettingsQuery } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/image';
import ScrollToTop from '@/components/common/ScrollToTop';
import { CountryProvider } from '@/lib/context/CountryContext';

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
        <Header logoUrl={logoUrl} />
        <main>{children}</main>
        <Footer settings={settings} />
        <ScrollToTop />
      </div>
    </CountryProvider>
  );
}
