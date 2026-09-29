'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Network, Globe, Building, Layers } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function PropTechOverview() {
  return (
    <section aria-label="Zlendo Realty PropTech platform overview" className="py-18 lg:py-24 bg-white overflow-hidden relative border-y border-black/5">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute -left-40 top-20 w-80 h-80 bg-zlendo-teal/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -right-40 bottom-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom max-w-7xl px-6 mx-auto relative z-10">

        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm mb-6 shadow-sm">
            <Building className="w-4 h-4 text-zlendo-teal" /> The Future of PropTech
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
            Connecting Design with <br className="hidden sm:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-600">Decision Making</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Core Workflow Text */}
          <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.6 }} className="space-y-8">
            <div className="bg-slate-50 p-8 md:p-10 rounded-[32px] border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-bl-[100px] opacity-70 transition-transform duration-700 group-hover:scale-110" />

              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 mb-6 relative z-10">
                <Network className="w-6 h-6 text-zlendo-teal" />
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-4 relative z-10">One Browser-Based Workflow</h3>
              <p className="text-slate-600 text-lg font-medium leading-relaxed relative z-10">
                Modern PropTech should connect design decisions with the information needed to approve and deliver a space. Zlendo Realty brings floor planning, 2D-to-3D conversion, interior visualization, rendering, Vastu analysis, and cost estimation into a singular connected model.
              </p>

              <div className="mt-8 pt-8 border-t border-slate-200 relative z-10">
                <p className="text-slate-600 font-medium leading-relaxed">
                  Avoid rebuilding projects in separate applications. Discuss layout, appearance, and budget from the same unified context instead of reconciling disconnected files after every revision.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Global & Indian Context */}
          <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.6 }} className="space-y-6">

            {/* Feature 1 */}
            <div className="flex gap-6 p-6 rounded-3xl hover:bg-slate-50 transition-colors duration-500 border border-transparent hover:border-slate-100 group">
              <div className="w-12 h-12 shrink-0 bg-blue-50/80 text-blue-600 border border-blue-100 rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Global & Local Delivery</h4>
                <p className="text-slate-600 font-medium leading-relaxed sm:text-lg">
                  Applies perfectly whether accommodating Vastu preferences and local construction-cost expectations for Indian professionals, or powering remote reviews and distributed collaboration for global studios.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-6 p-6 rounded-3xl hover:bg-slate-50 transition-colors duration-500 border border-transparent hover:border-slate-100 group">
              <div className="w-12 h-12 shrink-0 bg-teal-50/80 text-zlendo-teal border border-teal-100 rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">The Complete Toolset</h4>
                <p className="text-slate-600 font-medium leading-relaxed sm:text-lg">
                  Move beyond pure visual experimentation. Zlendo Realty provides end-to-end drawing control, render output, walkthrough delivery, and client handoff—giving creators consistency before construction begins.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
