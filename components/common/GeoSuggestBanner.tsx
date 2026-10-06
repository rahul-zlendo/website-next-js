'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, X } from 'lucide-react';

/**
 * Dismissible suggestion banner shown to visitors whose IP resolves to India
 * while they are on a global (non-/in) page. It REPLACES the old 307 geo
 * redirect: the site now serves the requested URL at 200 for everyone, and
 * simply *suggests* the India site instead of forcing it. Rendered purely on
 * the client, so server HTML (what crawlers see) stays global — no cloaking.
 *
 * Cookies (all client-readable):
 *  - zl_geo               ('in' | 'global')  — IP signal, set by middleware.
 *  - zl_country_choice    ('in' | 'global')  — the user's manual choice.
 *  - zl_geo_banner_dismissed ('1')           — suppress after dismiss.
 */
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export default function GeoSuggestBanner() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const geo = getCookie('zl_geo');
    const choice = getCookie('zl_country_choice');
    const dismissed = getCookie('zl_geo_banner_dismissed');
    const onIndiaSite = pathname === '/in' || pathname.startsWith('/in/');

    // Suggest India only when: IP says India, they're on a global page, they
    // haven't dismissed it, and they haven't explicitly chosen Global.
    // Explicitly hide on all /blog paths.
    setShow(geo === 'in' && !onIndiaSite && dismissed !== '1' && choice !== 'global' && !pathname.startsWith('/blog'));
  }, [pathname]);

  // Build the /in equivalent of the current path (root and clean paths both
  // map correctly; a path already under /in never reaches here).
  const indiaHref = pathname === '/' ? '/in' : `/in${pathname}`;

  const choose = () => {
    document.cookie = 'zl_country_choice=in; path=/; max-age=31536000; samesite=lax';
    setShow(false);
  };

  const dismiss = () => {
    document.cookie = 'zl_geo_banner_dismissed=1; path=/; max-age=31536000; samesite=lax';
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="relative z-[109] bg-zlendo-grey-dark text-white overflow-hidden"
        >
          <div className="container-custom flex flex-row items-center justify-center gap-3 sm:gap-4 py-2.5 px-3 sm:px-4">
            <MapPin className="w-4 h-4 text-zlendo-teal shrink-0" />
            <p className="text-[12px] sm:text-sm font-semibold text-center leading-tight">
              You appear to be in India — visit the India site for INR pricing, Vastu tools &amp; local support.
            </p>
            <Link
              href={indiaHref}
              onClick={choose}
              className="flex items-center gap-1 shrink-0 text-[12px] sm:text-sm font-black text-zlendo-teal hover:text-white transition-colors whitespace-nowrap group"
            >
              Go to India site
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={dismiss}
              aria-label="Dismiss"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4 text-white/70" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
