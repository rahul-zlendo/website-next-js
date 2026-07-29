'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, X } from 'lucide-react';

/**
 * One-time welcome popup for visitors whose IP resolves to India, shown
 * alongside (not instead of) GeoSuggestBanner's persistent ribbon. Fires once
 * per browser — a separate `zl_geo_modal_shown` cookie tracks that, distinct
 * from the ribbon's own dismissed/choice cookies so closing the popup never
 * suppresses the ribbon and vice versa. Pure client render, so server HTML
 * stays global for crawlers — no cloaking.
 */
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export default function GeoSuggestModal() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

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

  const choose = () => {
    document.cookie = 'zl_country_choice=in; path=/; max-age=31536000; samesite=lax';
    markShown();
    setShow(false);
  };

  const dismiss = () => {
    markShown();
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={dismiss}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
            className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={dismiss}
              aria-label="Dismiss"
              className="absolute right-4 top-4 p-1.5 rounded-full hover:bg-black/[0.05] transition-colors"
            >
              <X className="w-4 h-4 text-zlendo-grey-medium" />
            </button>

            <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-zlendo-teal" />
            </div>

            <h3 className="text-[20px] font-black text-zlendo-grey-dark mb-2">
              Looks like you&apos;re in India
            </h3>
            <p className="text-[14px] text-zlendo-grey-medium font-medium leading-relaxed mb-7">
              Visit the India site for INR pricing, Vastu tools &amp; local support — tailored for Indian homes and builders.
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href={indiaHref}
                onClick={choose}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-zlendo-teal text-white font-black text-[15px] shadow-lg shadow-zlendo-teal/30 hover:scale-[1.02] transition-all group"
              >
                Go to India site
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={dismiss}
                className="w-full py-3 rounded-full text-zlendo-grey-medium font-bold text-[14px] hover:bg-black/[0.03] transition-colors"
              >
                Stay on Global site
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
