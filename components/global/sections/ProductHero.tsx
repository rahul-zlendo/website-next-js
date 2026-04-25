'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ShieldCheck, Star, ThumbsUp, X, Zap } from 'lucide-react';
import { PortableText } from '@portabletext/react';

interface ProductHeroProps {
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
    image?: string;
    videoUrl?: string;
  };
}

const ProductHero: React.FC<ProductHeroProps> = ({ data }) => {
  const {
    badge = 'Product',
    heading,
    subheading,
    ctaText = 'Start for Free',
    ctaLink = '/register',
    ctaSubtext,
    secondaryCtaText = 'Watch Video',
    secondaryCtaLink,
    secondaryCtaSubtext,
    image,
    videoUrl = "https://www.youtube.com/embed/ttZcXOgmrNY"
  } = data;

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // ── Mouse-follow parallax (same technique as global Hero) ──
  const sectionRef = useRef<HTMLElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      if (e.clientY < rect.top || e.clientY > rect.bottom) return;
      mousePos.current = {
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      };
    };
    window.addEventListener('mousemove', onMove);

    let cx = 0, cy = 0;
    const tick = () => {
      cx += (mousePos.current.x - cx) * 0.07;
      cy += (mousePos.current.y - cy) * 0.07;
      if (orb1Ref.current) orb1Ref.current.style.transform = `translate(${cx * 100}px, ${cy * 70}px)`;
      if (orb2Ref.current) orb2Ref.current.style.transform = `translate(${cx * -130}px, ${cy * -90}px)`;
      if (orb3Ref.current) orb3Ref.current.style.transform = `translate(${cx * 180}px, ${cy * 120}px)`;
      if (spotRef.current) spotRef.current.style.background =
        `radial-gradient(700px circle at ${(mousePos.current.x + 0.5) * 100}% ${(mousePos.current.y + 0.5) * 100}%, rgba(0,191,154,0.12), transparent 60%)`;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* ────────────────────────────────── DARK HERO ──────────────────────────── */}
      <section
        ref={sectionRef}
        className="relative bg-[#050505] pt-16 pb-20 overflow-hidden font-nunito"
      >
        {/* === Cinematic Background (Global Standard) === */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Teal orb – top-left, parallax slow */}
          <div
            ref={orb1Ref}
            className="absolute w-[550px] h-[550px] rounded-full opacity-20 will-change-transform"
            style={{ background: 'radial-gradient(circle, #00bf9a 0%, transparent 70%)', top: '-15%', left: '-8%' }}
          />
          {/* Indigo orb – bottom-right, reverse parallax */}
          <div
            ref={orb2Ref}
            className="absolute w-[450px] h-[450px] rounded-full opacity-10 will-change-transform"
            style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', bottom: '-15%', right: '-8%' }}
          />
          {/* Small teal orb – center-right, fastest parallax */}
          <div
            ref={orb3Ref}
            className="absolute w-[260px] h-[260px] rounded-full opacity-15 will-change-transform"
            style={{ background: 'radial-gradient(circle, #00bf9a 0%, transparent 70%)', top: '35%', right: '18%' }}
          />
          {/* Mouse spotlight */}
          <div ref={spotRef} className="absolute inset-0 will-change-[background]" />
          {/* Architectural grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: 'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          {/* Radial vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,5,5,0.85)_100%)]" />
          {/* Top ambient teal */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[55%] bg-[radial-gradient(circle_at_50%_0%,rgba(0,191,154,0.1)_0%,transparent_60%)]" />
        </div>

        {/* ── Content ── */}
        <div className="container-custom px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── Left: Text ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Badge */}
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

              {/* Heading */}
              <h1 className="text-[28px] md:text-[42px] lg:text-[52px] font-black text-white mb-5 leading-[1.08] tracking-tight md:tracking-tighter drop-shadow-2xl">
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

              {/* Subheading */}
              {subheading && (
                <p className="text-base md:text-lg text-gray-300 font-bold mb-8 leading-relaxed max-w-lg opacity-90">
                  {subheading}
                </p>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 mb-12">
                {/* Primary */}
                <div className="flex flex-col gap-2">
                  <Link
                    href={ctaLink}
                    className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#00bf9a] text-white font-black text-base hover:bg-[#008f72] transition-all transform hover:scale-[1.05] shadow-2xl shadow-[#00bf9a]/30 min-w-[200px]"
                  >
                    {ctaText}
                  </Link>
                  {ctaSubtext && (
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest text-center">
                      {ctaSubtext}
                    </span>
                  )}
                </div>

                {/* Secondary */}
                <div className="flex flex-col gap-2">
                  <Link
                    href="/business#demo-form"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/10 text-white font-black text-base border border-white/20 hover:bg-white/20 transition-all hover:scale-[1.05] backdrop-blur-sm group min-w-[200px]"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#00bf9a] transition-colors">
                      <Zap className="w-3 h-3 fill-current" />
                    </div>
                    Request Your Demo
                  </Link>
                  {secondaryCtaSubtext && (
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest text-center">
                      {secondaryCtaSubtext}
                    </span>
                  )}
                </div>
              </div>

              {/* Trust Row */}
              <div className="flex flex-wrap items-center gap-5 opacity-40 hover:opacity-70 transition-opacity duration-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#00bf9a]" />
                  <span className="font-black text-[10px] uppercase tracking-widest text-gray-300">Enterprise Ready</span>
                </div>
                <div className="h-3 w-px bg-white/20" />
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="font-black text-[10px] uppercase tracking-widest text-gray-300">4.9 / 5 Rating</span>
                </div>
                <div className="h-3 w-px bg-white/20" />
                <div className="flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4 text-blue-400" />
                  <span className="font-black text-[10px] uppercase tracking-widest text-gray-300">Industry Leader</span>
                </div>
              </div>
            </motion.div>

            {/* ── Right: Image ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative"
            >
              {/* Glow halo behind image */}
              <div className="absolute inset-0 rounded-[40px] bg-[#00bf9a]/10 blur-[60px] scale-105" />

              {/* Image card */}
              <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)] ring-1 ring-white/5">
                <img
                  src={image || '/assets/products/premium_3d_architecture_hero.png'}
                  alt="Product Visualization"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />

                {/* Subtle bottom gradient on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Floating AI badge */}
                <motion.div
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute top-5 left-5 bg-black/60 backdrop-blur-xl rounded-2xl px-4 py-3 border border-white/10 flex items-center gap-3 shadow-2xl"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#00bf9a] flex items-center justify-center shadow-lg shadow-[#00bf9a]/30">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">AI Engine</div>
                    <div className="text-sm font-black text-white leading-tight">
                      Processing… <span className="text-[#00bf9a]">Done ✓</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ────────────────────── Video Modal ────────────────────── */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            {/* Close button — outside the clipped container */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 z-[10000] p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all backdrop-blur-md border border-white/10 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-[20px] overflow-hidden shadow-2xl border border-white/10"
            >
              <iframe
                className="w-full h-full"
                src={`${videoUrl}${videoUrl.includes('?') ? '&' : '?'}autoplay=1`}
                title="Product Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductHero;
