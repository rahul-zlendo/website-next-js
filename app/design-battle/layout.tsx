import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PromoBanner from '@/components/layout/PromoBanner';
import AuthSync from '@/components/layout/AuthSync';
import ScrollToTop from '@/components/common/ScrollToTop';
import FloatingContactButton from '@/components/common/FloatingContactButton';
import CookieConsent from '@/components/common/CookieConsent';
import { CountryProvider } from '@/lib/context/CountryContext';
import { getClient } from '@/lib/sanity/client';
import { siteSettingsQuery } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/image';

export default async function DesignBattleLayout({ children }: { children: React.ReactNode }) {
  const settings = await getClient().fetch(siteSettingsQuery).catch(() => null);
  const logoUrl = settings?.logoImage ? urlFor(settings.logoImage).url() : undefined;

  return (
    <CountryProvider initialCountry="global">
      <div className="min-h-screen bg-white text-zlendo-grey-dark font-nunito">
        <AuthSync />
        <PromoBanner />
        <Header logoUrl={logoUrl} />
        <main>{children}</main>
        <Footer settings={settings} isGlobal />
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
