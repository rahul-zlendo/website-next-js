'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check, ChevronRight, X } from 'lucide-react';

/**
 * One-time region-picker popup for visitors whose IP resolves to India, shown
 * alongside (not instead of) GeoSuggestBanner's persistent ribbon. Fires once
 * per browser — a separate `zl_geo_modal_shown` cookie tracks that, distinct
 * from the ribbon's own dismissed/choice cookies so closing the popup never
 * suppresses the ribbon and vice versa. Pure client render, so server HTML
 * stays global for crawlers — no cloaking.
 *
 * Desktop: centered modal, two side-by-side cards each with its own CTA.
 * Mobile: bottom sheet, tap a row to select then hit the single Continue CTA.
 */
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

const indiaFeatures = ['INR Pricing', 'AI Vastu Tools', 'Local Building Codes', 'Indian Vendors', 'Local Support'];
const globalFeatures = ['USD Pricing', 'International Standards', 'Global Architecture', 'Worldwide Services', 'International Support'];

export default function GeoSuggestModal() {
  const pathname = usePathname();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState<'in' | 'global'>('in');
  const [remember, setRemember] = useState(true);

  useEffect(() => {
    const geo = getCookie('zl_geo');
    const choice = getCookie('zl_country_choice');
    const modalShown = getCookie('zl_geo_modal_shown');
    const onIndiaSite = pathname === '/in' || pathname.startsWith('/in/');

    if (geo === 'in' && !onIndiaSite && choice !== 'global' && modalShown !== '1') {
      const timer = setTimeout(() => setShow(true), 800);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const indiaHref = pathname === '/' ? '/in' : `/in${pathname}`;

  const markShown = () => {
    document.cookie = 'zl_geo_modal_shown=1; path=/; max-age=31536000; samesite=lax';
  };

  const setChoiceCookie = (code: 'in' | 'global') => {
    const maxAge = remember ? `max-age=${31536000}` : '';
    document.cookie = `zl_country_choice=${code}; path=/;${maxAge ? ` ${maxAge};` : ''} samesite=lax`;
  };

  const close = () => {
    markShown();
    setShow(false);
  };

  const continueTo = (code: 'in' | 'global') => {
    setChoiceCookie(code);
    markShown();
    setShow(false);
    if (code === 'in') router.push(indiaHref);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center"
          onClick={close}
        >
          {/* ===== Mobile: bottom sheet ===== */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="sm:hidden relative w-full bg-white rounded-t-3xl shadow-2xl p-6 pb-8 max-h-[88vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              aria-label="Dismiss"
              className="absolute right-4 top-4 p-1.5 rounded-full hover:bg-black/[0.05] transition-colors"
            >
              <X className="w-4 h-4 text-zlendo-grey-medium" />
            </button>

            <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center">
              <Globe className="w-6 h-6 text-zlendo-teal" />
            </div>
            <h3 className="text-[19px] font-black text-zlendo-grey-dark text-center mb-1.5">Welcome to Zlendo Realty</h3>
            <p className="text-[13px] text-zlendo-grey-medium font-medium text-center leading-relaxed mb-6">
              We noticed you&apos;re browsing from India. Choose your preferred experience.
            </p>

            <div className="space-y-3 mb-5">
              <button
                onClick={() => setSelected('in')}
                className={`w-full flex items-center gap-3 p-4 rounded-2xl border-2 text-left transition-colors ${selected === 'in' ? 'border-zlendo-teal bg-zlendo-teal/5' : 'border-black/[0.08]'}`}
              >
                <span className="text-2xl shrink-0">🇮🇳</span>
                <span className="flex-1 min-w-0">
                  <span className="block text-[14px] font-black text-zlendo-grey-dark">India Experience</span>
                  <span className="block text-[12px] text-zlendo-grey-medium font-medium truncate">
                    INR Pricing &middot; Vastu Tools &middot; Local Support
                  </span>
                </span>
                <ChevronRight className="w-4 h-4 text-zlendo-grey-medium shrink-0" />
              </button>

              <button
                onClick={() => setSelected('global')}
                className={`w-full flex items-center gap-3 p-4 rounded-2xl border-2 text-left transition-colors ${selected === 'global' ? 'border-blue-600 bg-blue-50' : 'border-black/[0.08]'}`}
              >
                <Globe className="w-6 h-6 text-blue-600 shrink-0" />
                <span className="flex-1 min-w-0">
                  <span className="block text-[14px] font-black text-zlendo-grey-dark">Global Experience</span>
                  <span className="block text-[12px] text-zlendo-grey-medium font-medium truncate">
                    USD Pricing &middot; International Standards
                  </span>
                </span>
                <ChevronRight className="w-4 h-4 text-zlendo-grey-medium shrink-0" />
              </button>
            </div>

            <label className="flex items-center gap-2.5 mb-5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 rounded accent-zlendo-teal"
              />
              <span className="text-[13px] font-medium text-zlendo-grey-medium">Remember my choice</span>
            </label>

            <button
              onClick={() => continueTo(selected)}
              className="w-full py-3.5 rounded-full bg-zlendo-teal text-white font-black text-[15px] shadow-lg shadow-zlendo-teal/30 active:scale-[0.98] transition-all"
            >
              Continue
            </button>
          </motion.div>

          {/* ===== Desktop: centered modal ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
            className="hidden sm:block relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              aria-label="Dismiss"
              className="absolute right-5 top-5 p-1.5 rounded-full hover:bg-black/[0.05] transition-colors"
            >
              <X className="w-4 h-4 text-zlendo-grey-medium" />
            </button>

            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center">
              <Globe className="w-7 h-7 text-zlendo-teal" />
            </div>
            <h3 className="text-[22px] font-black text-zlendo-grey-dark mb-1.5">Welcome to Zlendo Realty</h3>
            <p className="text-[14px] text-zlendo-grey-medium font-medium mb-1">
              We noticed you&apos;re browsing from India.
            </p>
            <p className="text-[14px] text-zlendo-grey-medium font-medium mb-6">
              Choose the experience that&apos;s right for you.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-5 text-left">
              <div className="rounded-2xl border-2 border-zlendo-teal bg-zlendo-teal/5 p-5 flex flex-col">
                <span className="text-2xl mb-2">🇮🇳</span>
                <h4 className="text-[15px] font-black text-zlendo-teal mb-3">India Experience</h4>
                <ul className="space-y-2 mb-5 flex-1">
                  {indiaFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[12.5px] font-medium text-zlendo-grey-dark">
                      <Check className="w-3.5 h-3.5 text-zlendo-teal shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => continueTo('in')}
                  className="w-full py-2.5 rounded-full bg-zlendo-teal text-white font-black text-[13px] hover:bg-zlendo-teal-700 transition-colors"
                >
                  Continue to India
                </button>
              </div>

              <div className="rounded-2xl border-2 border-black/[0.08] p-5 flex flex-col">
                <Globe className="w-6 h-6 text-blue-600 mb-2" />
                <h4 className="text-[15px] font-black text-blue-600 mb-3">Global Experience</h4>
                <ul className="space-y-2 mb-5 flex-1">
                  {globalFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[12.5px] font-medium text-zlendo-grey-dark">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => continueTo('global')}
                  className="w-full py-2.5 rounded-full bg-blue-600 text-white font-black text-[13px] hover:bg-blue-700 transition-colors"
                >
                  Continue Global
                </button>
              </div>
            </div>

            <label className="flex items-center justify-center gap-2.5 mb-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 rounded accent-zlendo-teal"
              />
              <span className="text-[13px] font-medium text-zlendo-grey-medium">Remember my choice</span>
            </label>
            <p className="text-[11px] text-zlendo-grey-medium/70 font-medium">
              You can change your region anytime from the top menu.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
