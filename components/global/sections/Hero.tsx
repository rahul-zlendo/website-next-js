'use client';

import React from 'react';
import Link from 'next/link';
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
  };
}

const PremiumHero: React.FC<HeroProps> = ({ data }) => {
  const { 
    badge, heading, subheading, 
    ctaText, ctaLink, ctaSubtext,
    secondaryCtaText, secondaryCtaLink, secondaryCtaSubtext,
    socialProofText 
  } = data;

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-[#0A0A0A] overflow-hidden pt-20 pb-16 md:pb-24">
      {/* Absolute Minimalist Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      
      {/* Subtle Ambient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,191,154,0.12)_0%,transparent_50%)] pointer-events-none" />

      <div className="container-custom relative z-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {badge && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-zlendo-teal shadow-[0_0_10px_#00bf9a]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                {badge}
              </span>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h1 className="text-[28px] md:text-[42px] lg:text-[56px] font-black text-white leading-[1.1] md:leading-[1.05] mb-4 tracking-tight md:tracking-tighter max-w-5xl mx-auto">
              <PortableText 
                value={heading} 
                components={{
                  marks: {
                    strong: ({ children }) => <span className="text-zlendo-teal">{children}</span>,
                  },
                }}
              />
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            {subheading && (
              <p className="text-base md:text-lg text-gray-400 font-bold leading-relaxed mb-8 opacity-90">
                {subheading}
              </p>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
              {/* Primary CTA */}
              <div className="flex flex-col gap-3">
                <Link
                  href={ctaLink || '#'}
                  className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-zlendo-teal text-white font-black text-base hover:bg-[#008f72] transition-all transform hover:scale-[1.05] shadow-2xl shadow-zlendo-teal/20"
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
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 text-white font-black text-base border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.05] group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-zlendo-teal transition-colors">
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

            {/* Social Proof Bar */}
            {socialProofText && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 pt-8 border-t border-white/5 text-[12px] font-bold text-gray-500 leading-relaxed max-w-2xl mx-auto"
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
