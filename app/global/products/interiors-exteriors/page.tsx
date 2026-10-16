'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Sun, Shield, Leaf, ArrowRight, ChevronDown } from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';
import JsonLd from '@/components/common/JsonLd';
import { ZLENDO_AGGREGATE_RATING } from '@/lib/utils/structuredData';

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
                    "aggregateRating": ZLENDO_AGGREGATE_RATING,
                    "creator": { "@type": "Organization", "name": "Zlendo Realty", "url": "https://zlendorealty.com" },
                    "publisher": { "@type": "Organization", "name": "Zlendo Realty", "url": "https://zlendorealty.com" },
                    "featureList": ["AI-powered interior design", "Exterior elevation visualization", "2D to 3D conversion", "Photorealistic rendering", "Interactive virtual walkthroughs", "Material and texture customization", "Furniture and decor placement", "Landscape visualization", "Lighting and shadow simulation", "Modern and traditional design themes", "Real-time design previews", "Export-ready architectural visuals"]
                })
            }} />
            <JsonLd schema={{
                "@context": "https://schema.org/",
                "@type": "FAQPage",
                "name": "Interiors & Exteriors - Frequently Asked Questions",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can I design both simultaneously?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, our engine allows you to jump between interior wireframes and exterior landscaping in one cohesive environment."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are the plants geographically accurate?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We offer region-specific vegetation packs so your exterior renders look authentic to the project location."
                        }
                    }
                ]
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

                {/* ADVANCED MATERIAL & LIGHTING */}
                <section className="py-24 px-4 bg-white border-t border-black/5">
                    <div className="container-custom max-w-6xl mx-auto">
                        <div className="text-center mb-20 max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-black text-[#111] mb-6 tracking-tight">
                                Photorealistic Lighting & <br /><span className="text-zlendo-teal">Vast Material Catalog</span>
                            </h2>
                            <p className="text-xl text-[#666] font-medium leading-relaxed">
                                To perfectly conceptualize the feel of a home, the accuracy of natural light and regional materials is paramount. Our engine calculates millions of light paths to reproduce stunning graphical fidelity.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                            <div className="space-y-12">
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-black text-[#111]">Hyper-Localized Material Textures</h3>
                                    <p className="text-[#666] leading-relaxed font-medium text-lg">Elevate your visualization with regionally accurate textures representing real-world materials. Apply 4K resolution textures of authentic Red Oxide flooring, intricate tiles, local Teak and Rosewood variations, or premium Italian marbles. Each material possesses physical rendering properties (PBR), ensuring they react to light organically—reflecting and refracting just as they would in reality.</p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-black text-[#111]">Dynamic Day-Night Cycle & Lighting</h3>
                                    <p className="text-[#666] leading-relaxed font-medium text-lg">Examine how geographical solar alignment interacts with your chosen layout. Zlendo Realty accurately models real-world sun trajectories based on your specific city coordinates. Cycle seamlessly from dawn to dusk to analyze shadow lengths, glare, and ambient occlusion, ensuring your Vastu orientations translate into naturally well-lit and thermally comfortable spaces before investing in construction.</p>
                                </div>
                            </div>
                            <div className="relative p-2 h-full flex flex-col justify-center">
                                <div className="absolute inset-0 bg-gradient-to-tr from-zlendo-teal/10 to-blue-500/10 rounded-[3rem] transform -rotate-3 blur-[2px]"></div>
                                <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-black/5 relative z-10 space-y-8">
                                    <h4 className="font-black text-2xl text-[#111] border-b border-black/5 pb-6">Render Engine Capabilities</h4>
                                    <ul className="space-y-6">
                                        <li className="flex items-start gap-5">
                                            <div className="w-10 h-10 rounded-full bg-zlendo-teal/10 flex items-center justify-center shrink-0">
                                                <Sun className="w-5 h-5 text-zlendo-teal" />
                                            </div>
                                            <div>
                                                <div className="font-black text-[#111] text-lg">Global Illumination (GI)</div>
                                                <div className="text-[#666] font-medium">Accurate indirect light bounce calculation.</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-5">
                                            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                                <Layout className="w-5 h-5 text-blue-500" />
                                            </div>
                                            <div>
                                                <div className="font-black text-[#111] text-lg">Physically Based Rendering (PBR)</div>
                                                <div className="text-[#666] font-medium">True-to-life surface micro-geometry and reflectivity.</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-5">
                                            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                                                <Leaf className="w-5 h-5 text-purple-500" />
                                            </div>
                                            <div>
                                                <div className="font-black text-[#111] text-lg">Volumetric Scattering</div>
                                                <div className="text-[#666] font-medium">Fog, dust, and realistic sky atmospheric coloration.</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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
