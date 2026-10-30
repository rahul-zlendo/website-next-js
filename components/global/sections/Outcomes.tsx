'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Zap, Globe } from 'lucide-react';

interface OutcomeProps {
  data: {
    outcomes?: {
      value?: string;
      label?: string;
      description?: string;
    }[];
    note?: string;
  };
}

const iconMap = [TrendingUp, Clock, Zap, Globe];

const Outcomes: React.FC<OutcomeProps> = ({ data }) => {
  const { outcomes, note } = data;

  return (
    <section className="py-20 md:py-15 bg-white font-nunito border-y border-black/[0.03] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#00bf9a 1px, transparent 1px), linear-gradient(90deg, #00bf9a 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="container-custom px-4 relative z-10">
        <div className="flex flex-col items-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-16 h-1 bg-zlendo-teal/30 rounded-full mb-6"
          />
          <p className="text-center text-[11px] font-black uppercase tracking-[0.5em] text-zlendo-teal mb-4">
            Validated Professional Impact
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-zlendo-grey-dark text-center">
            Real results for real practices.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes?.map((outcome, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative p-10 rounded-[48px] bg-white border border-black/[0.05] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-15px_rgba(0,191,154,0.15)] transition-all duration-700 overflow-hidden flex flex-col items-center text-center"
              >
                {/* Top Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-zlendo-teal/40 via-zlendo-teal to-zlendo-teal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Animated Light Pulse behind icon */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-20 h-20 bg-zlendo-teal/5 blur-[30px] rounded-full group-hover:bg-zlendo-teal/10 transition-all duration-700" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 mx-auto group-hover:bg-zlendo-teal group-hover:text-white transition-all duration-500 transform group-hover:rotate-[10deg] shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-5xl md:text-6xl font-black text-zlendo-grey-dark mb-4 tracking-tighter group-hover:text-zlendo-teal transition-colors duration-500">
                    {outcome.value}
                  </div>

                  <div className="text-[13px] font-black text-gray-500 uppercase tracking-[0.2em] leading-relaxed px-4">
                    {outcome.label}
                  </div>
                </div>

                {/* Decorative Bottom Bar */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gray-100 group-hover:w-24 group-hover:bg-zlendo-teal/20 transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>

        {note && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-24 max-w-3xl mx-auto flex items-start gap-5 p-8 rounded-[32px] bg-gray-50/50 border border-black/[0.03] backdrop-blur-sm"
          >
            <div className="w-6 h-6 rounded-full bg-zlendo-teal/10 flex items-center justify-center text-[10px] font-black text-zlendo-teal shrink-0 shadow-sm">!</div>
            <p className="text-[11px] font-black text-gray-400 leading-relaxed uppercase tracking-wider">
              {note}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Outcomes;
