'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HowItWorksProps {
  data: {
    heading: string;
    subheading?: string;
    steps: {
      number: string;
      title: string;
      description: string;
      image?: string;
    }[];
  };
}

const HowItWorks: React.FC<HowItWorksProps> = ({ data }) => {
  const { heading, subheading, steps = [] } = data;

  return (
    <section className="py-20 bg-white font-nunito overflow-hidden">
      <div className="container-custom px-4 text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-[48px] font-black text-zlendo-grey-dark mb-6 leading-tight tracking-tighter"
        >
          {heading}
        </motion.h2>
        {subheading && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg lg:text-xl text-gray-500 font-bold max-w-2xl mx-auto opacity-70"
          >
            {subheading}
          </motion.p>
        )}
      </div>

      <div className="container-custom px-4 space-y-20">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center"
            >
              <motion.div
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className={`lg:col-span-6 flex flex-col items-start ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div className="mb-6">
                  <span className="w-12 h-12 flex items-center justify-center rounded-full bg-zlendo-teal/10 text-zlendo-teal font-black text-xl border border-zlendo-teal/20 shadow-sm">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl md:text-4xl font-black mb-6 leading-tight text-zlendo-grey-dark tracking-tighter">
                  {step.title}
                </h3>
                <p className="text-lg md:text-xl text-zlendo-grey-medium font-bold leading-relaxed opacity-80 max-w-xl">
                  {step.description}
                </p>

                {/* Decorative Line (Optional) */}
                <div className="mt-8 w-12 h-1 bg-zlendo-teal rounded-full" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="relative group">
                  {/* Glassmorphism Background Decor */}
                  <div className="absolute -inset-10 bg-zlendo-teal/5 blur-[80px] rounded-full group-hover:bg-zlendo-teal/10 transition-colors duration-700" />

                  <div className="relative rounded-[40px] overflow-hidden border-8 border-white shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                    {step.image ? (
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-auto object-cover aspect-[4/3]"
                      />
                    ) : (
                      <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center">
                        <div className="text-gray-200">
                          <svg width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                        </div>
                      </div>
                    )}

                    {/* Visual Overlay - Optional detail to feel premium */}
                    <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-xl rounded-full text-[10px] font-black text-gray-400 uppercase tracking-widest border border-white/50 shadow-sm">
                      Step {step.number} Optimized
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
