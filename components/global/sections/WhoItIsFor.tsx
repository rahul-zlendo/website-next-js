'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import DualColorHeading from '../DualColorHeading';

interface WhoItIsForProps {
  data: {
    heading: string;
    segments?: {
      title?: string;
      features?: string[];
    }[];
  };
}

const WhoItIsFor: React.FC<WhoItIsForProps> = ({ data }) => {
  const { heading, segments } = data;

  return (
    <section className="py-20 md:py-32 bg-white font-nunito border-b border-black/[0.03] overflow-hidden">
      <div className="container-custom px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <DualColorHeading 
            text={heading} 
            className="text-3xl md:text-[48px] font-black text-zlendo-grey-dark mb-6 leading-tight tracking-tighter"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {segments?.map((segment, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[48px] bg-gray-50/50 border border-black/[0.04] hover:bg-white hover:shadow-2xl hover:shadow-black/[0.03] transition-all duration-500"
            >
              <h3 className="text-2xl font-black text-zlendo-grey-dark mb-10 pb-6 border-b border-black/[0.03]">
                {segment.title}
              </h3>
              <ul className="space-y-6">
                {segment.features?.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-4 group">
                    <div className="mt-1.5 w-4 h-4 rounded-full bg-zlendo-teal/10 flex items-center justify-center shrink-0 group-hover:bg-zlendo-teal transition-colors">
                      <Check className="w-2 h-2 text-zlendo-teal group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[13px] font-bold text-gray-500 leading-relaxed group-hover:text-zlendo-grey-dark transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItIsFor;
