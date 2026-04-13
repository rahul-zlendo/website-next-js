'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import DualColorHeading from '../DualColorHeading';

interface ComparisonProps {
  data: {
    heading: string;
    rows?: {
      feature?: string;
      before?: string;
      after?: string;
    }[];
    footerText?: string;
  };
}

const Comparison: React.FC<ComparisonProps> = ({ data }) => {
  const { heading, rows, footerText } = data;

  return (
    <section className="py-16 md:py-24 bg-white font-nunito border-b border-black/[0.03]">
      <div className="container-custom px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <DualColorHeading 
            text={heading} 
            className="text-3xl md:text-[48px] font-black text-zlendo-grey-dark mb-6 leading-tight tracking-tighter"
          />
        </motion.div>

        <div className="max-w-5xl mx-auto overflow-hidden rounded-[40px] border border-black/[0.05] bg-gray-50/50 shadow-2xl shadow-black/[0.02]">
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-white border-b border-black/[0.05]">
            <div className="lg:col-span-4 p-6 md:p-8 font-black text-[10px] uppercase tracking-[0.3em] text-gray-400">Capability</div>
            <div className="lg:col-span-4 p-6 md:p-8 font-black text-[10px] uppercase tracking-[0.3em] text-red-500 bg-red-50/50">Fragmented Workflow</div>
            <div className="lg:col-span-4 p-6 md:p-8 font-black text-[10px] uppercase tracking-[0.3em] text-zlendo-teal bg-zlendo-teal/5">With Zlendo Realty</div>
          </div>

          {rows?.map((row, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 border-b border-black/[0.03] last:border-0 hover:bg-white transition-colors"
            >
              <div className="lg:col-span-4 p-6 md:p-8 flex items-center">
                <span className="text-sm md:text-base font-black text-zlendo-grey-dark">{row.feature}</span>
              </div>
              <div className="lg:col-span-4 p-6 md:p-8 flex items-center gap-3 bg-red-50/20">
                <X className="w-4 h-4 text-red-400 shrink-0" />
                <span className="text-sm font-bold text-gray-500 leading-relaxed">{row.before}</span>
              </div>
              <div className="lg:col-span-4 p-6 md:p-8 flex items-center gap-3 bg-zlendo-teal/[0.02]">
                <Check className="w-4 h-4 text-zlendo-teal shrink-0" />
                <span className="text-sm font-black text-zlendo-grey-dark leading-relaxed">{row.after}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {footerText && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-16 text-center"
          >
            <p className="text-sm md:text-base font-bold text-gray-400 leading-relaxed max-w-3xl mx-auto uppercase tracking-wide">
              {footerText}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Comparison;
