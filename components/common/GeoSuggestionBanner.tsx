'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { X } from 'lucide-react';

/**
 * GeoSuggestionBanner
 * --------------------
 * SEO-safe replacement for IP-based redirects. The middleware no longer forces
 * visitors between the global site and /in based on their IP (forced geo
 * redirects block users + crawlers from reaching the other locale and are a
 * known SEO/AEO liability). Instead it just records the detected region in the
 * `zl_geo` cookie, and this component shows a gentle, dismissible suggestion to
 * switch — leaving the visitor on the exact URL they landed on.
 *
 * Why this is SEO-friendly:
 *  - It is client-only, so crawlers never see it and content stays identical
 *    for every visitor and bot (no cloaking).
 *  - Every locale URL stays directly reachable; hreflang/canonical decide which
 *    version Google surfaces per region.
 *  - The switch is a real, crawlable <Link> the user clicks — not an automatic
 *    redirect.
 */

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

// Persisted so we don't nag: set when the user explicitly dismisses the banner
// or clicks the switch link. Intentionally separate from zl_country_manual —
// that key gated the old auto-redirect and may already exist in localStorage
// from previous sessions; we don't want stale state silencing the banner.
const DISMISS_KEY = 'zl_geo_banner_dismissed';

export default function GeoSuggestionBanner() {
  const pathname = usePathname() || '/';
  const [suggestion, setSuggestion] = useState<'in' | 'global' | null>(null);

  useEffect(() => {
    // Only suppress if the user has previously dismissed this banner.
    if (localStorage.getItem(DISMISS_KEY) === 'true') return;

    const geo = getCookie('zl_geo'); // 'in' | 'global', set by middleware
    if (!geo) return;

    const onIndia = pathname === '/in' || pathname.startsWith('/in/');

    // Only suggest when the detected region differs from the locale being viewed.
    if (geo === 'in' && !onIndia) setSuggestion('in');
    else if (geo === 'global' && onIndia) setSuggestion('global');
    else setSuggestion(null);
  }, [pathname]);

  if (!suggestion) return null;

  // Map the current URL to its counterpart locale (mirrors CountrySwitcher).
  const target =
    suggestion === 'in'
      ? `/in${pathname === '/' ? '' : pathname}`
      : pathname.replace(/^\/in/, '') || '/';

  const copy =
    suggestion === 'in'
      ? { flag: '🇮🇳', text: 'Looks like you’re in India.', cta: 'Visit Zlendo Realty India' }
      : { flag: '🌐', text: 'Prefer our global site?', cta: 'Go to Global site' };

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, 'true');
    } catch {
      /* ignore storage failures (private mode etc.) */
    }
    setSuggestion(null);
  };

  // Dismiss the banner once the user actively follows the link — they've made
  // their choice, no need to keep suggesting.
  const onSwitch = () => {
    try {
      localStorage.setItem(DISMISS_KEY, 'true');
    } catch {
      /* ignore */
    }
  };

  return (
    <div
      role="region"
      aria-label="Region suggestion"
      className="w-full bg-zlendo-teal/10 border-b border-zlendo-teal/20 text-zlendo-grey-dark"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2 text-[13px] font-medium">
        <span className="flex items-center gap-2">
          <span className="text-base leading-none">{copy.flag}</span>
          {copy.text}
        </span>
        <Link
          href={target}
          onClick={onSwitch}
          className="font-bold text-zlendo-teal underline-offset-2 hover:underline"
        >
          {copy.cta} →
        </Link>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss region suggestion"
          className="ml-auto rounded-full p-1 text-zlendo-grey-medium transition-colors hover:bg-black/[0.05] hover:text-zlendo-grey-dark"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
