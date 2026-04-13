'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, ZapOff, EyeOff, Scissors } from 'lucide-react';
import DualColorHeading from '../DualColorHeading';

interface ProblemProps {
  data: {
    heading: string;
    subheading?: string;
    problems?: {
      title?: string;
      description?: string;
    }[];
    closeText?: string;
  };
}

const iconMap = [Scissors, EyeOff, ZapOff];

const Problem: React.FC<ProblemProps> = ({ data }) => {
  const { heading, subheading, problems, closeText } = data;

  return (
    <section className="py-12 md:py-16 bg-white font-nunito overflow-hidden relative border-b border-black/[0.03]">
      {/* Subtle Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none grayscale" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/absurd-dad.png")' }} />

      <div className="container-custom px-4 relative z-10">
        <div className="max-w-4xl mb-12 md:mb-16 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 mb-6"
          >
            <AlertCircle className="w-4 h-4 text-red-500" />
            <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.3em]">Industry Friction</span>
          </motion.div>

          <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <DualColorHeading 
            text={heading} 
            className="text-3xl md:text-[48px] font-black text-zlendo-grey-dark mb-6 leading-tight tracking-tighter"
          />
          {subheading && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-base md:text-lg lg:text-xl text-zlendo-grey-medium font-bold leading-relaxed opacity-70"
            >
              {subheading}
            </motion.p>
          )}
        </motion.div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems?.map((item, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                viewport={{ once: true }}
                className="group flex flex-col p-8 rounded-[32px] bg-white border border-black/[0.05] shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:border-red-100/50 transition-all duration-500 overflow-hidden relative"
              >
                {/* Friction indicator accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/[0.02] blur-[40px] rounded-full translate-x-12 -translate-y-12 group-hover:bg-red-500/[0.05] transition-all duration-700" />
                
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-6 border border-black/[0.03] group-hover:bg-red-50 group-hover:text-red-500 transition-all duration-500 shadow-sm relative z-10">
                   <Icon className="w-5 h-5" />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-black text-zlendo-grey-dark mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-base font-bold text-zlendo-grey-medium leading-relaxed opacity-70">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {closeText && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-20 pt-10 border-t border-black/[0.03] text-center mx-auto relative z-10"
          >
            <p className="text-xl md:text-3xl font-black text-zlendo-grey-dark italic tracking-tight opacity-90 max-w-5xl leading-tight mx-auto">
              &ldquo;{closeText}&rdquo;
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Problem;
