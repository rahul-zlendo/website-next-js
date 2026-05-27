'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Sun, Shield, Leaf, ArrowRight, ChevronDown } from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';

export default function InteriorsExteriorsPage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-white text-[#222222] font-nunito selection:bg-zlendo-teal/20 selection:text-zlendo-teal">
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "Zlendo Realty Interiors & Exteriors",
                    "applicationCategory": "DesignApplication",
                    "applicationSubCategory": "AI Interior and Exterior Design Software",
                    "operatingSystem": "Web",
                    "url": "https://zlendorealty.com/products/interiors-exteriors",
                    "description": "AI-powered interior and exterior home design software that helps homeowners, architects, and builders create realistic 3D visualizations, customize layouts, explore materials, generate photorealistic renders, and preview immersive walkthroughs instantly.",
                    "image": "https://zlendorealty.com/favicon.ico",
                    "softwareVersion": "1.0",
                    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Free online AI-powered interior and exterior design platform" },
                    "creator": { "@type": "Organization", "name": "Zlendo Realty", "url": "https://zlendorealty.com" },
                    "publisher": { "@type": "Organization", "name": "Zlendo Realty", "url": "https://zlendorealty.com" },
                    "featureList": ["AI-powered interior design", "Exterior elevation visualization", "2D to 3D conversion", "Photorealistic rendering", "Interactive virtual walkthroughs", "Material and texture customization", "Furniture and decor placement", "Landscape visualization", "Lighting and shadow simulation", "Modern and traditional design themes", "Real-time design previews", "Export-ready architectural visuals"]
                })
            }} />
            <main>
                {/* HERO SECTION */}
                <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#FAFAFC]">
                    <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-zlendo-teal/5 rounded-full blur-[100px] pointer-events-none" />

                    <div className="container-custom px-4 relative z-20">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="max-w-xl space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-black/5 bg-white shadow-sm"
                                >
                                    <span className="text-xs font-bold tracking-widest text-[#00bf9a] uppercase">Adaptive Design</span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-[44px] md:text-[60px] lg:text-[76px] tracking-tight font-black leading-[1.05] text-[#111111]"
                                >
                                    Master the<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-500">
                                        Inside & Out.
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-xl md:text-2xl text-[#666666] font-medium leading-relaxed"
                                >
                                    Region-aware styling intelligence that bridges the gap between stunning interiors and breathtaking exterior landscapes.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <a
                                        href={SIGNUP_URL}
                                        className="inline-flex items-center justify-center px-10 py-5 bg-[#111111] text-white rounded-xl font-bold text-xl hover:bg-[#333333] transition-all gap-3 overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
                                    >
                                        Start Designing <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-black/[0.03] aspect-[4/5] lg:aspect-square bg-white p-2"
                            >
                                <img
                                    src="/images/products/interiors-exteriors.webp"
                                    className="w-full h-full object-cover rounded-[2rem]"
                                    alt="Modern house exterior and interior"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white border-t border-black/5">
                    <div className="container-custom px-4 text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#111111]">Complete property visualization</h2>
                    </div>
                    <div className="container-custom px-4 grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Sun, title: "Dynamic Facades", desc: "Design exteriors with region-specific materials, lighting simulation, and roof styling." },
                            { icon: Layout, title: "Cohesive Interiors", desc: "Blend exterior architecture seamlessly into interior spacing for unified project presentations." },
                            { icon: Leaf, title: "Landscaping Mode", desc: "Add vegetation, pools, and hardscaping to increase property appeal and visualization depth." }
                        ].map((f, i) => (
                            <div key={i} className="bg-white border border-black/[0.05] p-10 rounded-[2rem] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-300">
                                <div className="w-14 h-14 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center mb-6">
                                    <f.icon className="w-7 h-7 text-zlendo-teal" />
                                </div>
                                <h3 className="text-2xl font-black mb-3 text-[#111]">{f.title}</h3>
                                <p className="text-[#666] font-medium leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-24 border-t border-black/5 bg-[#FAFAFC]">
                    <div className="container-custom px-6 max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-black text-center mb-12 text-[#111]">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {[
                                { q: "Can I design both simultaneously?", a: "Yes, our engine allows you to jump between interior wireframes and exterior landscaping in one cohesive environment." },
                                { q: "Are the plants geographically accurate?", a: "We offer region-specific vegetation packs so your exterior renders look authentic to the project location." }
                            ].map((faq, i) => (
                                <div key={i} className="border border-black/[0.05] rounded-2xl overflow-hidden hover:bg-white transition-colors bg-white/50">
                                    <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full px-8 py-6 flex items-center justify-between text-left">
                                        <span className="text-xl font-bold text-[#111]">{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-[#999] transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {activeFaq === i && (
                                            <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}>
                                                <p className="px-8 pb-8 text-[#666] font-medium">{faq.a}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
