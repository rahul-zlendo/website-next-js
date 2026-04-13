'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '@/lib/sanity/image';

interface LogoStripProps {
  data: {
    title?: string;
    logos?: {
      name?: string;
      image?: any;
    }[];
  };
}

const LogoStrip: React.FC<LogoStripProps> = ({ data }) => {
  const { title, logos } = data;

  // Duplicate logos for infinite marquee effect
  const marqueeLogos = logos && logos.length > 0 
    ? [...logos, ...logos, ...logos, ...logos, ...logos, ...logos] 
    : [];

  if (marqueeLogos.length === 0) return null;

  return (
    <section className="py-12 md:py-20 bg-[#0A0A0A] border-y border-white/[0.08] overflow-hidden relative">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at center, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container-custom px-4 relative z-10">
        {title && (
          <div className="flex flex-col items-center mb-10 md:mb-14">
             <div className="w-12 h-[2px] bg-zlendo-teal/40 mb-5" />
             <p className="text-center text-xs md:text-sm font-black uppercase tracking-[0.4em] text-gray-400">
               {title}
             </p>
          </div>
        )}
      </div>

      <div className="relative flex items-center group">
        {/* Side Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex items-center gap-20 md:gap-32 whitespace-nowrap"
          animate={{
            x: [0, -2000]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {marqueeLogos.map((logo, index) => (
            <div 
              key={index}
              className="px-6 opacity-50 grayscale contrast-125 brightness-150 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 flex items-center justify-center min-w-[150px]"
            >
              {logo.image ? (
                <img 
                  src={urlFor(logo.image).url()} 
                  alt={logo.name || 'Partner Logo'} 
                  className="h-6 md:h-10 w-auto object-contain"
                />
              ) : (
                <span className="text-lg md:text-2xl font-black text-gray-300 uppercase tracking-[0.2em] leading-none select-none italic">
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoStrip;
