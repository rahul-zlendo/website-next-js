'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Feature {
    title: string;
    desc: string;
    image: string;
}

interface FeatureTabContent {
    title: string;
    features: Feature[];
}

export default function BusinessFeatureTabs({ featureContent }: { featureContent: Record<string, FeatureTabContent> }) {
    const [activeTab, setActiveTab] = useState(Object.keys(featureContent)[0]);
    const [activeSubIndex, setActiveSubIndex] = useState(0);

    const scrollToForm = () => {
        const form = document.getElementById('demo-form');
        if (form) form.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="py-12 lg:py-6 px-4 bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <div className="inline-block px-5 py-1.5 border border-gray-200 rounded-lg text-sm font-bold text-gray-500 mb-6 tracking-tight bg-gray-50/50">
                        One Solution
                    </div>
                    <h2 className="text-3xl md:text-[48px] font-black font-nunito text-gray-900 leading-[1.2] tracking-tighter">
                        Everything you need to succeed, <br className="hidden md:block" /> all in one platform
                    </h2>
                </div>

                {/* Tabs Bar */}
                <div className="flex justify-center mb-16 px-4">
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 max-w-5xl">
                        {Object.keys(featureContent).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => { setActiveTab(tab); setActiveSubIndex(0); }}
                                className={`px-8 py-4 rounded-full text-sm md:text-base font-black transition-all duration-300 whitespace-nowrap border-2
                                    ${activeTab === tab
                                        ? 'bg-[#00B18F] border-[#00B18F] text-white shadow-lg shadow-[#00B18F]/20'
                                        : 'bg-white border-gray-300 text-gray-500 hover:border-gray-400 hover:bg-gray-50'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Layout */}
                <div className="grid lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
                    <div className="lg:col-span-4 space-y-6">
                        <div className="flex items-center gap-3 px-2">
                            <div className="w-1.5 h-6 bg-zlendo-orange rounded-full" />
                            <span className="text-sm font-black uppercase tracking-[0.2em] text-gray-500">9D Features</span>
                        </div>
                        <div className="space-y-4">
                            {featureContent[activeTab]?.features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    onClick={() => setActiveSubIndex(idx)}
                                    className={`p-10 rounded-[32px] cursor-pointer transition-all border-2 flex flex-col justify-center min-h-[160px] ${activeSubIndex === idx ? 'bg-zlendo-orange border-zlendo-orange text-white shadow-2xl shadow-zlendo-orange/30' : 'bg-white border-transparent hover:border-gray-100 hover:shadow-lg'}`}
                                    whileHover={activeSubIndex !== idx ? { scale: 1.02 } : {}}
                                >
                                    <h4 className="text-2xl font-black mb-3 leading-tight">{feature.title}</h4>
                                    <p className={`text-base font-bold leading-relaxed ${activeSubIndex === idx ? 'text-white/80' : 'text-gray-400/80'}`}>
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        <motion.div
                            key={activeTab + activeSubIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="relative group shadow-[0_32px_80px_-20px_rgba(0,0,0,0.15)] rounded-[40px] bg-white border border-gray-100"
                        >
                            <div className="relative min-h-[300px] flex items-center justify-center">
                                {featureContent[activeTab]?.features[activeSubIndex]?.image.endsWith('.webm') ? (
                                    <video
                                        key={featureContent[activeTab].features[activeSubIndex].image}
                                        autoPlay loop muted playsInline preload="auto"
                                        className="w-full h-auto block rounded-[38px] object-contain transition-all duration-700"
                                    >
                                        <source src={featureContent[activeTab].features[activeSubIndex].image} type="video/webm" />
                                    </video>
                                ) : (
                                    <div className="aspect-video w-full overflow-hidden rounded-[38px]">
                                        <img
                                            src={featureContent[activeTab]?.features[activeSubIndex]?.image}
                                            alt={featureContent[activeTab]?.features[activeSubIndex]?.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                                        />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <button
                        onClick={scrollToForm}
                        className="group inline-flex items-center gap-3 px-5 py-4 border-2 border-zlendo-orange text-zlendo-orange rounded-full font-black text-xl hover:bg-zlendo-orange hover:text-white transition-all shadow-xl shadow-zlendo-orange/10 hover:shadow-zlendo-orange/20 active:scale-95"
                    >
                        Book a free demo
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}
