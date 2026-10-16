'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '@/lib/sanity/image';
import DualColorHeading from '../DualColorHeading';

interface SolutionProps {
  data: {
    heading: string;
    intro?: string;
    steps?: {
      number?: string;
      title?: string;
      description?: string;
      image?: any;
    }[];
    closeText?: string;
  };
}

const Solution: React.FC<SolutionProps> = ({ data }) => {
  const { heading, intro, steps, closeText } = data;

  return (
    <section className="py-16 md:py-24 bg-[#0A0A0A] text-white font-nunito overflow-hidden">
      <div className="container-custom px-4">
        <div className="max-w-5xl mb-12 md:mb-20 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-zlendo-teal animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Integrated Platform</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <DualColorHeading 
              text={heading} 
              className="text-3xl md:text-[48px] font-black text-white mb-6 leading-tight tracking-tighter"
            />
          </motion.div>
          
          {intro && (
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-base md:text-lg lg:text-xl text-gray-400 font-bold leading-relaxed max-w-3xl mx-auto"
            >
              {intro}
            </motion.p>
          )}
        </div>

        <div className="space-y-24 md:space-y-32">
          {steps?.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center"
              >
                <div className={`lg:col-span-5 flex flex-col items-start ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="mb-6">
                    <span className="text-[12px] font-black text-zlendo-teal uppercase tracking-[0.4em] px-3 py-1.5 rounded-lg bg-zlendo-teal/10 border border-zlendo-teal/20">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-400 font-bold leading-relaxed opacity-80">
                    {step.description}
                  </p>
                </div>

                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <motion.div 
                    whileHover={{ y: -5 }} 
                    className="relative group transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-zlendo-teal/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="relative bg-[#1A1A1A] rounded-[24px] md:rounded-[32px] border border-white/10 shadow-2xl overflow-hidden p-2">
                      <div className="absolute top-0 left-0 right-0 h-10 bg-[#1A1A1A] border-b border-white/5 flex items-center px-4 gap-2 z-20">
                        <div className="flex gap-1.5 text-white/20">
                          <div className="w-2 h-2 rounded-full bg-current" /><div className="w-2 h-2 rounded-full bg-current" /><div className="w-2 h-2 rounded-full bg-current" />
                        </div>
                      </div>

                      <div className="mt-8 rounded-[16px] md:rounded-[24px] overflow-hidden bg-black/40 aspect-[16/10] relative group-hover:bg-black/20 transition-all duration-500">
                        {step.image ? (
                          <img 
                            src={typeof step.image === 'string' ? step.image : urlFor(step.image).url()} 
                            alt={step.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center relative">
                             <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at center, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                             <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center animate-pulse">
                                <div className="w-8 h-8 rounded-full bg-zlendo-teal/10 blur-[5px]" />
                             </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {closeText && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-32 md:mt-48"
          >
            <div className="max-w-4xl mx-auto p-12 md:p-16 rounded-[40px] md:rounded-[60px] bg-white/5 border border-white/[0.05] text-center relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-zlendo-teal/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
               <p className="text-xl md:text-3xl font-black text-white italic leading-tight tracking-tight relative z-10 opacity-90 mx-auto">
                 &ldquo;{closeText}&rdquo;
               </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Solution;
