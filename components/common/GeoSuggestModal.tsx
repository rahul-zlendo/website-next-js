'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ChevronLeft, ChevronRight, IndianRupee, Compass, Building2, MessageCircle, Globe2 } from 'lucide-react';

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

const features = [
  { label: 'INR pricing', Icon: IndianRupee, bg: 'bg-orange-100', text: 'text-orange-600' },
  { label: 'Vastu-ready', Icon: Compass, bg: 'bg-orange-100', text: 'text-orange-600' },
  { label: 'Indian building standards', Icon: Building2, bg: 'bg-zlendo-teal/10', text: 'text-zlendo-teal-700' },
];

export default function GeoSuggestModal() {
  const pathname = usePathname();
  const router = useRouter();
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

  const close = () => {
    markShown();
    setShow(false);
  };

  const goToIndia = () => {
    document.cookie = 'zl_country_choice=in; path=/; max-age=31536000; samesite=lax';
    markShown();
    setShow(false);
    router.push(indiaHref);
  };

  const continueGlobal = () => {
    document.cookie = 'zl_country_choice=global; path=/; max-age=31536000; samesite=lax';
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
          className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="relative w-full sm:max-w-3xl md:max-w-4xl bg-[#FBF7F0] rounded-t-[32px] sm:rounded-[32px] shadow-2xl overflow-hidden max-h-[92vh] sm:max-h-[90vh] overflow-y-auto md:flex md:flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top bar — desktop only, spans full card width above both columns */}
            <div className="hidden md:flex items-center justify-between px-6 pt-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-black/[0.08] text-[12px] font-bold text-zlendo-grey-dark">
                <Globe2 className="w-3.5 h-3.5 text-zlendo-teal" />
                India &middot; INR
              </span>
              <button
                onClick={close}
                aria-label="Dismiss"
                className="w-8 h-8 rounded-full bg-white border border-black/[0.08] flex items-center justify-center hover:bg-black/[0.03] transition-colors"
              >
                <X className="w-4 h-4 text-zlendo-grey-medium" />
              </button>
            </div>

            <div className="md:flex md:flex-1 md:min-h-0">
              {/* Image showcase — 2D plan / 3D view split */}
              <div className="relative w-full md:w-[40%] h-[190px] sm:h-[230px] md:h-auto shrink-0 bg-zlendo-teal-900 overflow-hidden">
                <div className="absolute inset-0 flex">
                  <div className="relative w-1/2 h-full">
                    <img
                      src="/assets/floor-planner/2d-sketch.webp"
                      alt="2D floor plan"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/60 text-white text-[10px] font-black tracking-wide">
                      2D PLAN
                    </span>
                  </div>
                  <div className="relative w-1/2 h-full">
                    <img
                      src="/assets/floor-planner/3d-sketch.webp"
                      alt="3D render"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 text-white text-[10px] font-black tracking-wide">
                      3D VIEW
                    </span>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center pointer-events-none">
                  <ChevronLeft className="w-3 h-3 text-zlendo-grey-dark -mr-0.5" />
                  <ChevronRight className="w-3 h-3 text-zlendo-grey-dark -ml-0.5" />
                </div>
              </div>

              {/* Content panel */}
              <div className="flex-1 p-6 sm:p-8 md:p-10 md:overflow-y-auto">
                {/* Top bar — mobile only, sits above the headline inside the content panel */}
                <div className="flex md:hidden items-center justify-between mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-black/[0.08] text-[11px] font-bold text-zlendo-grey-dark">
                    <Globe2 className="w-3.5 h-3.5 text-zlendo-teal" />
                    India &middot; INR
                  </span>
                  <button
                    onClick={close}
                    aria-label="Dismiss"
                    className="w-7 h-7 rounded-full bg-white border border-black/[0.08] flex items-center justify-center hover:bg-black/[0.03] transition-colors"
                  >
                    <X className="w-3.5 h-3.5 text-zlendo-grey-medium" />
                  </button>
                </div>

                <div className="flex items-center gap-2.5 mb-3">
                  <img src="/favicon.png" alt="" className="w-8 h-8 rounded-full border border-black/[0.06]" />
                  <span className="text-[15px] font-bold text-zlendo-grey-dark">Namaste!</span>
                </div>

                <h3 className="font-serif text-[26px] sm:text-[30px] font-black text-zlendo-grey-dark leading-[1.15] mb-3">
                  Design your Indian home, faster.
                </h3>
                <p className="text-[14px] text-zlendo-grey-medium font-medium leading-relaxed mb-6">
                  Plans, 3D views and walkthroughs — tailored for India.
                </p>

                <div className="flex flex-wrap gap-2.5 mb-7">
                  {features.map(({ label, Icon, bg, text }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center justify-center gap-1.5 w-[104px] p-3 rounded-2xl border border-black/[0.06] bg-white text-center"
                    >
                      <span className={`w-8 h-8 rounded-full ${bg} flex items-center justify-center`}>
                        <Icon className={`w-4 h-4 ${text}`} />
                      </span>
                      <span className="text-[11px] font-bold text-zlendo-grey-dark leading-tight">{label}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={goToIndia}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-zlendo-teal-800 text-white font-black text-[15px] shadow-lg shadow-zlendo-teal-800/25 hover:bg-zlendo-teal-900 active:scale-[0.98] transition-all mb-3"
                >
                  See my India experience
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={continueGlobal}
                  className="w-full text-center text-[13px] font-bold text-zlendo-teal underline underline-offset-4 hover:text-zlendo-teal-700 transition-colors mb-5"
                >
                  Continue to global site
                </button>

                <a
                  href="https://wa.me/918047135989?text=Hi%2C%20I%27d%20like%20a%20free%20project%20consultation%20for%20my%20home%20design."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-black/[0.08] text-[13px] font-bold text-zlendo-grey-dark hover:bg-black/[0.02] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  Free project consultation on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
