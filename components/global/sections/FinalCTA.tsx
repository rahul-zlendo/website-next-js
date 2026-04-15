'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, Users, Zap } from 'lucide-react';
import DualColorHeading from '../DualColorHeading';

interface CTAData {
  text?: string;
  subtext?: string;
  link?: string;
}

interface FinalCTAProps {
  data: {
    heading: string;
    subheading?: string;
    primaryCta?: CTAData;
    secondaryCta?: CTAData;
    tertiaryCta?: CTAData;
    frictionLine?: string;
  };
}

const FinalCTA: React.FC<FinalCTAProps> = ({ data }) => {
  const { heading, subheading, primaryCta, secondaryCta, tertiaryCta, frictionLine } = data;

  return (
    <section className="py-24 bg-[#0A0A0A] text-white font-nunito overflow-hidden relative">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at center, #00bf9a 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,191,154,0.08)_0%,transparent_50%)] pointer-events-none" />

      <div className="container-custom px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <DualColorHeading
              text={heading}
              className="text-3xl md:text-[56px] font-black leading-[1.1] mb-8 tracking-tighter"
            />
            {subheading && (
              <p className="text-xl md:text-2xl font-bold text-gray-400 max-w-3xl mx-auto leading-relaxed">
                {subheading}
              </p>
            )}
          </motion.div>

          {/* CTA Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 lg:mb-14">
            {/* Primary */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={primaryCta?.link || '#'} className="flex flex-col items-center justify-center h-full p-6 rounded-[40px] bg-zlendo-teal text-white hover:bg-[#008f72] transition-all transform hover:scale-[1.02] shadow-2xl shadow-zlendo-teal/20 text-center">
                <Zap className="w-6 h-6 text-white mb-4 fill-current" />
                <div className="text-xl font-black mb-2">{primaryCta?.text || 'Start your free trial'}</div>
                <div className="text-[10px] font-black uppercase tracking-widest opacity-80">{primaryCta?.subtext || '14 days. No card.'}</div>
              </Link>
            </motion.div>

            {/* Secondary */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={secondaryCta?.link || '#'} className="flex flex-col items-center justify-center h-full p-6 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all transform hover:scale-[1.02] text-center">
                <Play className="w-6 h-6 text-zlendo-teal mb-4" />
                <div className="text-xl font-black mb-2">{secondaryCta?.text || 'Book a studio demo'}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">{secondaryCta?.subtext || '30 min walkthrough'}</div>
              </Link>
            </motion.div>

            {/* Tertiary */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={tertiaryCta?.link || '#'} className="flex flex-col items-center justify-center h-full p-6 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all transform hover:scale-[1.02] text-center">
                <Users className="w-6 h-6 text-zlendo-teal mb-4" />
                <div className="text-xl font-black mb-2">{tertiaryCta?.text || 'Talk to our team'}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">{tertiaryCta?.subtext || 'For larger studios'}</div>
              </Link>
            </motion.div>
          </div>

          {/* Friction Line */}
          {frictionLine && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-white/5"
            >
              <p className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] leading-relaxed">
                {frictionLine}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
