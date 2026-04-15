'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import { Play } from 'lucide-react';

interface HeroProps {
  data: {
    badge?: string;
    heading: any[];
    subheading?: string;
    ctaText?: string;
    ctaLink?: string;
    ctaSubtext?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
    secondaryCtaSubtext?: string;
    socialProofText?: string;
    videoUrl?: string;
  };
}

// ─── Construction dual-image reveal effect ────────────────────────────────────
// Image A (section bg → revealed through mouse lens):
//   Photorealistic FINISHED luxury house — glowing warm interior, clean facade
// Image B (cover div → default visible state):
//   Under-construction blueprint / concrete shell scene
//
// ⚠️  AI image quota exhausted (resets 2026-04-22). Using high-quality Unsplash
//     URLs as placeholders — swap with generated images once quota resets.
const IMAGE_FINISHED = '/assets/3d_hero.png';
const IMAGE_CONSTRUCTION = '/assets/2d_hero.png';

const PremiumHero: React.FC<HeroProps> = ({ data }) => {
  const {
    badge, heading, subheading,
    ctaText, ctaLink, ctaSubtext,
    secondaryCtaText, secondaryCtaLink, secondaryCtaSubtext,
    socialProofText,
  } = data;

  const sectionRef = useRef<HTMLElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const blendRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const mousePos = useRef({ x: 50, y: 50 });

  // ── Mobile detection (no mouse on touch devices) ──────────────────────────
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // ── Desktop-only: mouse-follow parallax reveal ────────────────────────────
  useEffect(() => {
    if (isMobile) return; // skip entirely on mobile

    const section = sectionRef.current;
    const cover = coverRef.current;
    if (!section || !cover) return;

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      if (e.clientY < rect.top || e.clientY > rect.bottom) return;
      mousePos.current = {
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      };
    };
    window.addEventListener('mousemove', onMove);

    let cx = 50, cy = 50;
    const tick = () => {
      cx += (mousePos.current.x - cx) * 0.08;
      cy += (mousePos.current.y - cy) * 0.08;

      // Mask: transparent circle reveals Image A → opaque ring shows Image B
      const mask = `radial-gradient(340px at ${cx}% ${cy}%, transparent 180px, rgba(0,0,0,0.08) 240px, black 340px)`;
      if (cover) {
        cover.style.maskImage = mask;
        cover.style.webkitMaskImage = mask;
      }
      // Blend div also gets same mask so the lens stays unobscured
      const blend = blendRef.current;
      if (blend) {
        blend.style.maskImage = mask;
        blend.style.webkitMaskImage = mask;
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-16 md:pb-24 bg-[#050505]"
    >
      {/* ── Layer 0: Image A (finished house) — desktop only, revealed via mouse lens ── */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src={IMAGE_FINISHED}
            alt="Finished Luxury House"
            fill
            sizes="100vw"
            quality={85}
            loading="lazy"
            className="object-cover object-center"
          />
        </div>
      )}

      {/* ── Layer 2: Image B (2D blueprint) — always visible
            Mobile: full solid cover | Desktop: masked with mouse-reveal hole ── */}
      <div
        ref={coverRef}
        id="hero-cover"
        className="absolute inset-0 z-[2] overflow-hidden"
        style={isMobile ? {} : {
          maskImage:
            'radial-gradient(340px at 50% 50%, transparent 180px, rgba(0,0,0,0.08) 240px, black 340px)',
          WebkitMaskImage:
            'radial-gradient(340px at 50% 50%, transparent 180px, rgba(0,0,0,0.08) 240px, black 340px)',
        }}
      >
        <Image
          src={IMAGE_CONSTRUCTION}
          alt="2D Blueprint"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-center pointer-events-none"
        />
      </div>

      {/* ── Layer 3: Dark blend — also masked on desktop, solid on mobile ─── */}
      <div
        ref={blendRef}
        id="hero-cover-blend"
        className="absolute inset-0 z-[3] bg-[#050505]/45"
        style={isMobile ? {} : {
          maskImage:
            'radial-gradient(340px at 50% 50%, transparent 180px, rgba(0,0,0,0.08) 240px, black 340px)',
          WebkitMaskImage:
            'radial-gradient(340px at 50% 50%, transparent 180px, rgba(0,0,0,0.08) 240px, black 340px)',
        }}
      />

      {/* ── Fine architectural grid on top ───────────────────────────────────── */}
      <div
        className="absolute inset-0 z-[4] opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Radial vignette (lighter so images remain vivid) ──────────────── */}
      <div className="absolute inset-0 z-[4] bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(5,5,5,0.55)_100%)] pointer-events-none" />

      {/* ── Top ambient teal glow ─────────────────────────────────────────────── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[55%] z-[4] bg-[radial-gradient(circle_at_50%_0%,rgba(0,191,154,0.1)_0%,transparent_60%)] pointer-events-none" />

      {/* ── Content ─── z-[10] sits above all background layers ──────────────── */}
      <div className="container-custom relative z-10 px-4">
        <div className="max-w-6xl mx-auto text-center">

          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#00bf9a] shadow-[0_0_10px_#00bf9a] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">
                {badge}
              </span>
            </motion.div>
          )}

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h1 className="text-[28px] md:text-[42px] lg:text-[56px] font-black text-white leading-[1.1] md:leading-[1.05] mb-4 tracking-tight md:tracking-tighter max-w-5xl mx-auto drop-shadow-2xl">
              <PortableText
                value={heading}
                components={{
                  marks: {
                    strong: ({ children }) => (
                      <span className="text-[#00bf9a]">{children}</span>
                    ),
                  },
                }}
              />
            </h1>
          </motion.div>

          {/* Subheading + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            {subheading && (
              <p className="text-base md:text-lg text-gray-300 font-bold leading-relaxed mb-8 opacity-90 drop-shadow">
                {subheading}
              </p>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
              {/* Primary CTA */}
              <div className="flex flex-col gap-3">
                <Link
                  href={ctaLink || '#'}
                  className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#00bf9a] text-white font-black text-base hover:bg-[#008f72] transition-all transform hover:scale-[1.05] shadow-2xl shadow-[#00bf9a]/30"
                >
                  {ctaText || 'Start your free trial'}
                </Link>
                {ctaSubtext && (
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                    {ctaSubtext}
                  </span>
                )}
              </div>

              {/* Secondary CTA */}
              <div className="flex flex-col gap-3">
                <Link
                  href={secondaryCtaLink || '#'}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 text-white font-black text-base border border-white/20 hover:bg-white/20 transition-all hover:scale-[1.05] group backdrop-blur-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#00bf9a] transition-colors">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                  {secondaryCtaText || 'Watch walkthrough'}
                </Link>
                {secondaryCtaSubtext && (
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                    {secondaryCtaSubtext}
                  </span>
                )}
              </div>
            </div>

            {/* Social Proof */}
            {socialProofText && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 pt-8 border-t border-white/10 text-[12px] font-bold text-gray-500 leading-relaxed max-w-2xl mx-auto"
              >
                {socialProofText}
              </motion.p>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PremiumHero;
