'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Quote, ArrowRight } from 'lucide-react';
import DualColorHeading from '../DualColorHeading';

interface SocialProofProps {
  data: {
    heading: string;
    testimonials?: {
      quote?: string;
      author?: string;
    }[];
    caseStudies?: {
      city?: string;
      result?: string;
      description?: string;
      linkText?: string;
      linkUrl?: string;
    }[];
  };
}

const SocialProof: React.FC<SocialProofProps> = ({ data }) => {
  const { heading, testimonials, caseStudies } = data;

  return (
    <section className="py-16 md:py-24 bg-[#0A0A0A] text-white font-nunito overflow-hidden">
      <div className="container-custom px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="flex justify-center mb-6">
             <div className="w-12 h-1 bg-zlendo-teal/40 rounded-full" />
          </div>
          <DualColorHeading 
            text={heading} 
            className="text-3xl md:text-[48px] font-black leading-tight tracking-tighter"
          />
        </motion.div>

        {/* Testimonials Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-10 ${caseStudies && caseStudies.length > 0 ? 'mb-24' : 'mb-0'}`}>
          {testimonials?.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-500 group"
            >
              <Quote className="w-10 h-10 text-zlendo-teal/20 mb-8 transform -translate-x-2 group-hover:text-zlendo-teal/40 transition-colors" />
              <p className="text-xl md:text-2xl font-black italic leading-tight mb-8 opacity-90">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="pt-8 border-t border-white/10">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zlendo-teal">
                  {item.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies?.map((study, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative p-12 rounded-[48px] bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-zlendo-teal/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">Case Study</span>
                  <div className="w-6 h-[1px] bg-white/10" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{study.city}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-zlendo-teal mb-6">
                  {study.result}
                </h3>
                <p className="text-lg font-bold text-gray-400 mb-10 leading-relaxed max-w-sm">
                  {study.description}
                </p>
              </div>

              <div className="relative z-10 pt-10 border-t border-white/5">
                <Link 
                  href={study.linkUrl || '#'} 
                  className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-white hover:text-zlendo-teal transition-colors group/link"
                >
                  {study.linkText || 'Read Case Study'}
                  <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
