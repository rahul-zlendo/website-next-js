'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, Database, ArrowRight } from 'lucide-react';

export default function ApiSuitePage() {
    return (
        <div className="min-h-screen bg-[#FAFAFC] text-[#222] font-mono selection:bg-blue-500/20 selection:text-blue-700">
            <main>
                <div className="container-custom px-4 py-24 sm:py-32">
                    <div className="text-center max-w-4xl mx-auto space-y-8">
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-black/5 text-blue-600 shadow-sm">
                            <Terminal className="w-4 h-4" />
                            <span className="text-xs font-bold tracking-widest uppercase font-nunito">Zlendo For Enterprise</span>
                        </motion.div>
                        
                        <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-black tracking-tighter text-[#111] font-nunito leading-[1.05]">
                            Power your platform with our <span className="text-blue-600">Design Engine.</span>
                        </motion.h1>

                        <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl md:text-2xl text-[#666] max-w-3xl mx-auto font-nunito leading-relaxed font-medium">
                            Integrate our 2D to 3D floor plan conversion, realistic rendering, and spatial intelligence directly into your own app via secure RESTful APIs.
                        </motion.p>

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="pt-8 flex justify-center">
                            <a href="/contact" className="inline-flex items-center gap-3 px-12 py-5 bg-[#111111] text-white rounded-xl font-bold font-nunito hover:bg-[#333] transition-colors group shadow-xl">
                                View Documentation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </div>

                    <div className="mt-32 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Code, title: "RESTful Endpoints", desc: "Easily submit floor plan jobs and retrieve 3D model links via HTTP requests." },
                            { icon: Cpu, title: "White-label Render", desc: "Deliver 4K photorealistic renders directly to your end-users without Zlendo branding." },
                            { icon: Database, title: "Catalog Sync", desc: "Connect your custom 3D furniture models to map against our smart styling system." }
                        ].map((item, i) => (
                            <div key={i} className="border border-black/[0.05] bg-white p-10 rounded-[2rem] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-blue-500/20 transition-all font-nunito">
                                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                                    <item.icon className="w-7 h-7 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-black mb-3 text-[#111]">{item.title}</h3>
                                <p className="text-[#666] font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Mock Code Snippet Block (Kept dark for authentic terminal aesthetics) */}
                    <div className="mt-24 max-w-4xl mx-auto rounded-[2rem] border border-black/5 bg-[#0A0D14] shadow-2xl overflow-hidden font-mono">
                        <div className="flex px-6 py-4 border-b border-white/10 bg-[#05060A] gap-2 items-center">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="ml-4 text-xs tracking-wider text-slate-500 font-bold uppercase">convert-floorplan.js</span>
                        </div>
                        <div className="p-8 text-sm md:text-base text-slate-300 overflow-x-auto leading-loose">
<pre><code><span className="text-blue-400">const</span> response = <span className="text-blue-400">await</span> fetch(<span className="text-green-400">'https://api.zlendorealty.com/v1/convert'</span>, {'{'}
  method: <span className="text-green-400">'POST'</span>,
  headers: {'{'}
    <span className="text-green-400">'Authorization'</span>: <span className="text-green-400">'Bearer YOUR_API_KEY'</span>,
    <span className="text-green-400">'Content-Type'</span>: <span className="text-green-400">'application/json'</span>
  {'}'},
  body: <span className="text-yellow-200">JSON</span>.stringify({'{'}
    imageUrl: <span className="text-green-400">'https://your-bucket.com/floorplan.jpg'</span>,
    generateRenders: <span className="text-blue-400">true</span>
  {'}'})
{'}'});

<span className="text-blue-400">const</span> data = <span className="text-blue-400">await</span> response.json();
<span className="text-slate-500">// Returns: {'{'} modelUrl: "...", renders: [...] {'}'}</span></code></pre>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
