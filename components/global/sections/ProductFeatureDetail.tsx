'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Timer, ArrowRight } from 'lucide-react';
import DualColorHeading from '../DualColorHeading';

interface ProductFeatureDetailProps {
  data: {
    heading: string;
    bullets?: string[];
    statValue?: string;
    statLabel?: string;
    image?: any;
    imageAtRight?: boolean;
  };
}

const ProductFeatureDetail: React.FC<ProductFeatureDetailProps> = ({ data }) => {
  const { heading, bullets = [], statValue, statLabel, image, imageAtRight = true } = data;

  return (
    <section className="py-24 bg-gray-50 font-nunito overflow-hidden">
      <div className="container-custom px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: imageAtRight ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`lg:col-span-6 ${imageAtRight ? '' : 'lg:order-2'}`}
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-zlendo-teal/10 border border-zlendo-teal/20 mb-6">
                <Timer className="w-4 h-4 text-zlendo-teal" />
                <span className="text-[10px] font-black uppercase tracking-widest text-zlendo-teal">Efficiency Breakthrough</span>
              </div>
              <DualColorHeading 
                text={heading} 
                className="text-3xl md:text-[48px] font-black text-zlendo-grey-dark mb-8 leading-tight tracking-tighter"
              />
            </div>

            <div className="space-y-6 mb-12">
              {bullets.map((bullet, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-zlendo-teal flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-base md:text-lg font-bold text-zlendo-grey-medium leading-relaxed opacity-90">
                    {bullet}
                  </p>
                </motion.div>
              ))}
            </div>

            {(statValue || statLabel) && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 rounded-[32px] bg-white border border-black/[0.05] shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-zlendo-teal/5 blur-3xl rounded-full translate-x-12 -translate-y-12" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="text-4xl md:text-5xl font-black text-zlendo-teal tracking-tighter">
                    {statValue}
                  </div>
                  <div className="h-px md:h-12 w-12 md:w-px bg-gray-100" />
                  <div className="text-base md:text-lg font-black text-zlendo-grey-dark leading-tight uppercase tracking-widest opacity-60">
                    {statLabel}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: imageAtRight ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`lg:col-span-6 ${imageAtRight ? '' : 'lg:order-1'}`}
          >
            <div className="relative">
              <div className="absolute -inset-10 bg-zlendo-teal/10 blur-[80px] rounded-full" />
              <div className="relative rounded-[40px] overflow-hidden border-8 border-white shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700">
                {image ? (
                  <img src={image} alt="Feature visual" className="w-full h-auto object-cover" />
                ) : (
                  <div className="aspect-square bg-white flex items-center justify-center">
                    <div className="text-gray-200">
                       {/* Placeholder for feature visual */}
                       <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/></svg>
                    </div>
                  </div>
                )}
                {/* Overlay UI Mockup */}
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Auto-Generation</span>
                    <span className="text-[10px] font-black text-zlendo-teal uppercase tracking-widest">99.8% Accuracy</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-zlendo-teal"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatureDetail;
