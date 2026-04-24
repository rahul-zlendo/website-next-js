'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cpu,
    Play,
    Zap,
    X,
    ChevronDown,
    CheckCircle2,
    ShieldCheck,
    Upload,
    Image as ImageIcon,
    ArrowRight,
    Terminal,
    Code,
    Database,
    Globe,
    Lock,
    BarChart3,
    Cloud,
    MousePointer2,
    Layers,
    Rocket
} from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';

/* ═══════════════════════════════════════════
   DATA STRUCTURES — GLOBAL STANDARDS
═══════════════════════════════════════════ */

const comparisonRows = [
    { feature: 'Conversion Latency', us: '< 30 Seconds', cad: 'Days', agent: 'Weeks' },
    { feature: 'Photorealistic Output', us: 'Uncapped 4K', cad: 'Local GPU limit', agent: 'Variable' },
    { feature: 'Auto-Styling AI', us: 'Advanced Neural', cad: 'Manual Plugin', agent: 'N/A' },
    { feature: 'API Uptime (SLA)', us: '99.99%', cad: 'Manual Sync', agent: 'N/A' },
    { feature: 'Deployment', us: 'Cloud-Native REST', cad: 'On-Premise', agent: 'Manual' }
];

const features = [
    {
        title: 'Neutral Spatial AI',
        desc: 'Advanced neural networks that interpret hand-drawn sketches and architectural blueprints with 99.2% accuracy.',
        icon: Cpu
    },
    {
        title: 'Asset Orchestration',
        desc: 'Sync your custom object catalogs or use our hyper-realistic 100K+ model library via dynamic mapping.',
        icon: Database
    },
    {
        title: 'Whitelabel Delivery',
        desc: 'Serve 3D tours and high-fidelity renders under your own brand with zero reference to Zlendo infrastructure.',
        icon: Layers
    },
    {
        title: 'Global DX CDN',
        desc: 'Low-latency asset delivery through our global edge network, ensuring smooth 3D experiences in 120+ countries.',
        icon: Globe
    }
];

const steps = [
    {
        title: 'Connect the Intelligence',
        desc: 'Obtain your enterprise API keys and authenticate via our secure OAuth 2.0 gateway. Integration takes minutes, not months.',
        image: '/images/global/partner-network.png',
        code: `const engine = new ZlendoClient({
  apiKey: 'zl_live_8kH2...9fB',
  region: 'global-west'
});`
    },
    {
        title: 'Inject Design Jobs',
        desc: 'Submit 2D floor plans, PDFs, or CAD files via simple REST endpoints. Our engine auto-processes geometry and lighting in parallel.',
        image: '/images/global/api-suite-dashboard.png',
        code: `const job = await engine.conversion.create({
  source: 'https://bucket.com/plan.jpg',
  autoStyle: 'modern_luxe'
});`
    },
    {
        title: 'Close the Client',
        desc: 'Receive high-fidelity 3D assets and photorealistic renders. Distribute them through your platform to close enterprise design deals faster.',
        image: '/images/global/partner-interior.png',
        code: `// Finalizing Project
const assets = await job.getAssets();
console.log(assets.renders[0].url);`
    }
];

const faqs = [
    { q: 'Is the API whitelabel ready?', a: 'Yes. All headers, asset URLs, and metadata are fully brand-agnostic, allowing you to present the technology as your own native solution.' },
    { q: 'What file formats are supported?', a: 'We support JPG, PNG, PDF, DWG, and DXF files. Our AI engine can even interpret high-resolution photos of hand-drawn sketches.' },
    { q: 'Can we use our own furniture models?', a: 'Absolutely. Our Enterprise tier includes "Catalog Sync" which allows you to map your own GLB/OBJ models into our smart styling engine.' },
    { q: 'What is the standard SLA?', a: 'We offer a 99.99% uptime SLA for Enterprise partners, backed by priority technical support and dedicated account management.' }
];

/* ═══════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════ */

export default function GlobalApiSuiteClient() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <div className="bg-white font-nunito selection:bg-zlendo-teal/20 selection:text-zlendo-teal overflow-x-hidden">

            {/* 1. HERO — LIGHT AIRY */}
            <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
                <div className="absolute top-[-30%] right-[-15%] w-[800px] h-[800px] bg-gradient-to-br from-zlendo-teal/10 to-transparent rounded-full blur-[160px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-gradient-to-tr from-violet-100/50 to-transparent rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

                <div className="container-custom px-6 lg:px-12 py-12 lg:py-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 backdrop-blur-sm mb-8">
                                <Terminal className="w-4 h-4 text-zlendo-teal animate-pulse" />
                                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-500">Global Enterprise API</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0A0B] mb-8 leading-[1.05] tracking-tight">
                                The Engine For{' '}
                                <br />
                                <span className="bg-gradient-to-r from-zlendo-teal via-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                                    Modern Design.
                                </span>
                            </h1>

                            <p className="text-xl text-slate-600 font-bold leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 tracking-tight">
                                Integrate our core 2D-to-3D, photorealistic rendering, and spatial intelligence directly into your app. Built for scale.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a href={SIGNUP_URL} className="px-10 py-5 bg-zlendo-teal text-white rounded-2xl font-black text-lg shadow-xl shadow-zlendo-teal/20 hover:scale-[1.03] transition-all flex items-center justify-center gap-3">
                                    Get API Keys <Zap className="w-5 h-5" />
                                </a>
                                <button onClick={() => setIsVideoOpen(true)} className="px-10 py-5 bg-slate-50 text-slate-700 border border-slate-200 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                                    <Play className="w-5 h-5 fill-current" /> Technical Intro
                                </button>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative group">
                            <div className="absolute -inset-4 bg-zlendo-teal/10 blur-3xl opacity-30 group-hover:opacity-50 transition duration-1000" />
                            <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-2xl bg-[#0a0a0c]">
                                <img src="/images/global/api-suite-dashboard.png" alt="API Suite Dashboard" className="w-full h-auto opacity-95 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. CORE CAPABILITIES — DARK */}
            <section className="py-12 lg:py-20 bg-[#020204] text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                <div className="container-custom px-6 text-center mb-16 relative z-10">
                    <p className="text-[11px] font-black uppercase tracking-[0.4em] text-zlendo-teal/60 mb-4">Core Technology</p>
                    <h2 className="text-3xl md:text-[52px] font-black tracking-[-0.04em] mb-4">
                        Enterprise-Grade <span className="bg-gradient-to-r from-zlendo-teal to-cyan-400 bg-clip-text text-transparent">Design Infrastructure.</span>
                    </h2>
                </div>

                <div className="container-custom px-6 relative z-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/[0.02] border border-white/[0.08] p-8 rounded-[28px] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal mb-6 group-hover:bg-zlendo-teal group-hover:text-white transition-all">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-black mb-4">{item.title}</h3>
                                <p className="text-white/40 font-medium text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. INTEGRATION STEPS — LIGHT */}
            <section className="py-12 lg:py-24 bg-white overflow-hidden">
                <div className="container-custom px-6">
                    <div className="text-center mb-20">
                        <p className="text-[11px] font-black uppercase tracking-[0.4em] text-zlendo-teal mb-4">Integration Flow</p>
                        <h2 className="text-3xl md:text-5xl font-black tracking-[-0.04em] text-[#0A0A0B]">
                            Developer-First <span className="text-zlendo-teal italic">Deployment.</span>
                        </h2>
                    </div>

                    <div className="space-y-32">
                        {steps.map((step, i) => (
                            <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="flex-1 space-y-8">
                                    <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center font-black text-2xl text-[#0A0A0B] shadow-sm">
                                        0{i + 1}
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-black text-[#0A0A0B] tracking-tight">{step.title}</h3>
                                    <p className="text-lg text-slate-600 font-bold tracking-tight leading-relaxed">{step.desc}</p>

                                    <div className="rounded-2xl border border-slate-200 bg-[#0A0D14] overflow-hidden shadow-xl lg:max-w-md">
                                        <div className="px-4 py-2 border-b border-white/5 bg-white/5 flex gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-red-400" />
                                            <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                            <div className="w-2 h-2 rounded-full bg-green-400" />
                                        </div>
                                        <div className="p-6 font-mono text-xs text-white/70 leading-relaxed overflow-x-auto whitespace-pre">
                                            {step.code}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 relative group">
                                    <div className="absolute -inset-4 bg-zlendo-teal/10 blur-3xl opacity-20 group-hover:opacity-40 transition duration-1000" />
                                    <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-2xl">
                                        <img src={step.image} alt={step.title} className="w-full h-64 lg:h-96 object-cover hover:scale-105 transition-transform duration-1000" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. COMPARISON — DARK */}
            <section className="py-20 bg-[#020204] text-white relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                <div className="container-custom px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-[42px] font-black tracking-[-0.04em] mb-4">
                            Global <span className="text-zlendo-teal italic">Performance Metrics.</span>
                        </h2>
                    </div>

                    <div className="overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.02]">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/[0.08]">
                                    <th className="p-6 text-[11px] font-black uppercase tracking-[0.2em] text-white/30">Intelligence Layer</th>
                                    <th className="p-6 text-[11px] font-black uppercase tracking-[0.2em] text-zlendo-teal text-center">Zlendo Engine</th>
                                    <th className="p-6 text-[11px] font-black uppercase tracking-[0.2em] text-white/50 text-center">Legacy CAD</th>
                                    <th className="p-6 text-[11px] font-black uppercase tracking-[0.2em] text-white/50 text-center">Manual Agency</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map((row, i) => (
                                    <tr key={i} className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors">
                                        <td className="p-6 font-bold text-white/80">{row.feature}</td>
                                        <td className="p-6 text-center font-black text-zlendo-teal bg-white/[0.02]">{row.us}</td>
                                        <td className="p-6 text-center text-white/40 font-medium">{row.cad}</td>
                                        <td className="p-6 text-center text-white/40 font-medium">{row.agent}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 5. FAQ — LIGHT */}
            <section className="py-20 bg-white">
                <div className="container-custom px-6 max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-[11px] font-black uppercase tracking-[0.4em] text-zlendo-teal mb-4">Support & FAQ</p>
                        <h2 className="text-4xl font-black text-[#0A0A0B] tracking-tight">Everything about the <span className="text-zlendo-teal">Stack.</span></h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden hover:border-slate-200 transition-colors bg-slate-50/50">
                                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full px-8 py-6 flex items-center justify-between text-left transition-all">
                                    <span className="text-lg font-black text-[#0A0A0B] tracking-tight">{faq.q}</span>
                                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {activeFaq === i && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                            <p className="px-8 pb-8 text-slate-600 font-bold leading-relaxed tracking-tight">{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FINAL CTA — DARK */}
            <section className="py-12 lg:py-24 px-6 lg:px-12 relative overflow-hidden bg-[#020204]">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-zlendo-teal/5 blur-[180px] rounded-full pointer-events-none" />

                <div className="container-custom relative z-10 text-center">
                    <div className="max-w-4xl mx-auto space-y-10">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
                            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-zlendo-teal/60 mb-4">Enterprise Ready</p>
                            <h2 className="text-4xl md:text-[64px] font-black tracking-[-0.05em] leading-[0.9] text-white">
                                Power your platform with <br /> <span className="bg-gradient-to-r from-zlendo-teal via-emerald-300 to-cyan-400 bg-clip-text text-transparent italic">Design Intelligence.</span>
                            </h2>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href={SIGNUP_URL} className="px-10 py-5 bg-white text-[#020204] rounded-2xl font-black text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center gap-3">
                                Get API Keys <ArrowRight className="w-5 h-5" />
                            </a>
                            <a href="/business#demo-form" className="px-10 py-5 bg-zlendo-teal text-white rounded-2xl font-black text-lg shadow-2xl shadow-zlendo-teal/40 hover:scale-[1.03] transition-all flex items-center justify-center gap-3">
                                Book Enterprise Demo <Rocket className="w-5 h-5" />
                            </a>
                        </motion.div>

                        <div className="flex flex-wrap justify-center gap-8 pt-12">
                            {[{ l: 'High Capacity', i: Zap }, { l: 'Global SLB', i: Globe }, { l: 'Bank-Grade Security', i: Lock }].map((badge, i) => (
                                <div key={i} className="flex items-center gap-2 text-white/30 font-bold text-xs uppercase tracking-widest">
                                    <badge.i className="w-4 h-4" /> {badge.l}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsVideoOpen(false)} className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-5xl bg-black rounded-3xl overflow-hidden shadow-2xl aspect-video">
                            <button onClick={() => setIsVideoOpen(false)} className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full"><X className="w-6 h-6" /></button>
                            <iframe className="w-full h-full" src="https://www.youtube.com/embed/ttZcXOgmrNY?autoplay=1" title="API Intro" allowFullScreen></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
