'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQProps {
  data: {
    title?: string;
    faqs?: {
      question?: string;
      answer?: string;
    }[];
  };
}

const FAQ: React.FC<FAQProps> = ({ data }) => {
  const { title = 'Frequently Asked Questions', faqs = [] } = data;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white font-nunito border-t border-black/[0.03]">
      <div className="container-custom px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-zlendo-teal/5 border border-zlendo-teal/10 mb-6">
              <HelpCircle className="w-4 h-4 text-zlendo-teal" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zlendo-teal">Support</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-zlendo-grey-dark leading-tight tracking-tighter">
              {title}
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group border rounded-[24px] overflow-hidden transition-all duration-300 ${activeIndex === index
                    ? 'border-zlendo-teal bg-zlendo-teal/[0.02] shadow-xl shadow-zlendo-teal/5'
                    : 'border-black/[0.05] bg-white hover:border-black/10'
                  }`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <h3 className={`m-0 p-0 text-base md:text-lg font-black transition-colors duration-300 ${activeIndex === index ? 'text-zlendo-teal' : 'text-zlendo-grey-dark'
                    }`}>
                    {faq.question}
                  </h3>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'bg-zlendo-teal text-white rotate-180' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'
                    }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-sm md:text-base font-bold text-zlendo-grey-medium leading-relaxed opacity-80">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
