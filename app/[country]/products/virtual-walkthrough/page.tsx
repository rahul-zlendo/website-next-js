'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
    Video,
    Eye,
    // Maximize,
    Smartphone,
    Share2,
    CheckCircle2,
    // Play,
    Monitor,
    Layout,
    ArrowRight,
    Sparkles,
    Box,
    Globe,
    Zap,
    Building2,
    Home,
    ChevronDown
} from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';

// Placeholder image paths - replace with actual images when available
const VRWalkthroughImg = 'https://images.unsplash.com/photo-1622519407650-3df9883f76a6?auto=format&fit=crop&q=80&w=2000';
const VRImg = 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=2000';

/**
 * Virtual Walkthrough Page - Client Component
 * 
 * Note: SEO metadata should be handled in a parent layout.tsx file since this is a client component.
 * For reference, the metadata should include:
 * - title: "3D Virtual Walkthrough for Homes | Zlendo Realty – Free Demo"
 * - description: "Experience immersive 3D virtual walkthroughs that showcase space, flow, and finishes..."
 * - keywords: "interactive virtual tour services, 3d walkthrough rendering, architectural walkthrough services..."
 */

export default function VirtualWalkthroughPage() {
    const params = useParams();
    const country = params?.country as string || 'in';
    
    // Build paths based on country
    const paths = {
        enterpriseDemo: `/${country}/business#demo-form`,
        enterprise: `/${country}/business`,
        plans: `/${country}/plans`,
        contact: `/${country}/contact`,
    };
    
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    return (
        <div className="bg-slate-950 text-white font-nunito selection:bg-zlendo-teal/20 selection:text-zlendo-teal">
            <main>
                {/* 1. HERO SECTION - CINEMATIC & ASPIRATIONAL */}
                <section className="relative min-h-screen flex items-center pt-8 overflow-hidden">
                    {/* Background Visual - Video Placeholder or Motion Effect */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950 z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2400"
                            className="w-full h-full object-cover opacity-60 scale-105 animate-soft-pulse"
                            alt="Cinematic Interior Walkthrough"
                        />
                    </div>

                    <div className="container-custom px-4 relative z-20">
                        <div className="max-w-4xl space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm mb-8"
                            >
                                <Sparkles className="w-4 h-4 text-zlendo-teal animate-pulse" />
                                <span className="text-xs font-black uppercase tracking-widest text-zlendo-grey-dark">Next-Gen Real Estate Visualization</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] font-nunito"
                            >
                                People don't buy plans.<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-400">
                                    They buy experiences.
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl md:text-2xl text-slate-300 font-medium max-w-2xl leading-relaxed"
                            >
                                Turn static floor plans into hyper-realistic 8K virtual walkthroughs. Increase buyer confidence and close deals faster with immersive cinematic storytelling.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col sm:flex-row items-center gap-6"
                            >
                                <Link
                                    href={paths.enterpriseDemo}
                                    className="px-12 py-5 bg-white text-zlendo-teal rounded-full font-black text-xl shadow-2xl shadow-zlendo-teal/20 hover:scale-105 transition-all flex items-center justify-center gap-3 group"
                                >
                                    Schedule Business Demo <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a
                                    href={SIGNUP_URL}
                                    className="px-12 py-5 bg-white text-zlendo-teal rounded-full font-black text-xl shadow-2xl shadow-zlendo-teal/20 hover:scale-105 transition-all flex items-center justify-center gap-3 group"
                                >
                                    Create My 3D Tour
                                </a>
                            </motion.div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
                            <div className="w-1 h-2 bg-white rounded-full" />
                        </div>
                    </div>
                </section>

                {/* 2. EXPERIENCE THE SPACE - 360 WALKTHROUGH */}
                <section className="py-20 bg-slate-900 overflow-hidden">
                    <div className="container-custom px-4">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400">
                                    <Eye className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-nunito">
                                    Step inside.<br />
                                    <span className="text-blue-400">Before it exists.</span>
                                </h2>
                                <div className="space-y-6 text-slate-300 text-lg font-medium leading-relaxed">
                                    <p>
                                        Our 360° virtual walkthroughs allow you to walk through the entire home virtually. Move room to room like a real person, exploring spaces from an eye-level perspective.
                                    </p>
                                    <ul className="space-y-4 pt-4">
                                        {[
                                            'Seamless room-to-room navigation',
                                            'Real-world scale and proportions',
                                            'Eye-level perspective for true immersion',
                                            'Available on web, mobile & VR'
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-white font-bold">
                                                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 bg-slate-800 aspect-video">
                                    <img
                                        src={VRWalkthroughImg}
                                        className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
                                        alt="VR Walkthrough Simulation"
                                    />
                                    {/* <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-20 h-20 rounded-full bg-zlendo-teal border-4 border-white flex items-center justify-center animate-pulse">
                                            <Play className="w-8 h-8 fill-white ml-1" />
                                        </div>
                                    </div> */}

                                    {/* Simulated Navigation UI */}
                                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end pointer-events-none">
                                        <div className="bg-black/60 backdrop-blur px-6 py-3 rounded-2xl border border-white/10">
                                            <div className="text-[10px] font-black uppercase text-white/40 mb-1">Current View</div>
                                            <div className="font-bold text-sm">Master Bedroom - Sunset View</div>
                                        </div>
                                        {/* <div className="flex gap-2">
                                            <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center border border-white/20"><Maximize className="w-5 h-5" /></div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-zlendo-teal opacity-20 blur-[100px]" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 3. VISUAL QUALITY - 8K REALISM */}
                <section className="py-20 relative">
                    <div className="container-custom px-4 text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-4xl md:text-6xl font-black font-nunito mb-8">Visual Quality <br /><span className="text-zlendo-teal">That Sells.</span></h2>
                        <p className="text-xl text-slate-400 font-medium">Why settle for fuzzy renders? Our 8K ultra-high-resolution output brings every detail to life—from the weave of the fabric to the subtle shadows of sunset.</p>
                    </div>

                    <div className="container-custom px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: '8K Ultra Resolution', desc: 'Crystal clear details for large format displays and high-end marketing.', icon: Monitor },
                            { title: 'Cinematic Lighting', desc: 'True-to-life shadows and reflections that evoke emotion.', icon: Sparkles },
                            { title: 'Material Accuracy', desc: 'Realistic textures for marble, wood, and fabrics that look touchable.', icon: Box }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5 hover:bg-white/10 transition-colors group"
                            >
                                <div className="w-14 h-14 bg-zlendo-teal/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-7 h-7 text-zlendo-teal" />
                                </div>
                                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                                <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Comparison Slider Concept Placeholder */}
                    <div className="mt-32 container-custom px-4">
                        <div className="relative rounded-[3rem] overflow-hidden aspect-[21/9] border border-white/10 bg-black">
                            {/* In a real app, this would be an interactive slider */}
                            <div className="absolute inset-0 flex">
                                <div className="w-1/2 relative overflow-hidden group">
                                    <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover grayscale opacity-40" alt="SD" />
                                    <div className="absolute top-8 left-8 bg-black/50 px-4 py-2 rounded-lg font-black text-xs uppercase tracking-widest border border-white/10">Standard View</div>
                                </div>
                                <div className="w-1/2 relative overflow-hidden group border-l border-zlendo-teal/50 shadow-[-10px_0_40px_-10px_rgba(0,168,132,0.4)]">
                                    <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover" alt="8K" />
                                    <div className="absolute top-8 right-8 bg-zlendo-teal px-4 py-2 rounded-lg font-black text-xs uppercase tracking-widest text-white shadow-lg">8K Cinematic</div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-zlendo-teal z-20" />
                        </div>
                    </div>
                </section>

                {/* 4. VR, AR & PANORAMA - EXPLAINED */}
                <section className="py-20 bg-slate-900">
                    <div className="container-custom px-4 text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-black font-nunito mb-6">Immersive Selling Tools</h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">One project. Multiple ways to experience it. Choose the right medium for your audience.</p>
                    </div>

                    <div className="container-custom px-4 grid lg:grid-cols-3 gap-8">
                        <div className="bg-slate-950 p-12 rounded-[3rem] border border-white/5 space-y-8">
                            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400">
                                <Video className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-black">VR Headset</h3>
                            <p className="text-slate-400 font-medium leading-relaxed italic">"The closest experience to visiting a completed home."</p>
                            <p className="text-slate-300 font-medium leading-relaxed">Walk through spaces at real scale using VR headsets. Perfect for client presentations and high-stakes sales demos.</p>
                        </div>

                        <div className="bg-slate-950 p-12 rounded-[3rem] border border-white/5 space-y-8 lg:-translate-y-8">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400">
                                <Smartphone className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-black">AR Design</h3>
                            <p className="text-slate-400 font-medium leading-relaxed italic">"Design meet reality."</p>
                            <p className="text-slate-300 font-medium leading-relaxed">Overlay designs onto real environments on-site. Preview furniture and layouts in real scale through your phone.</p>
                        </div>

                        <div className="bg-slate-950 p-12 rounded-[3rem] border border-white/5 space-y-8">
                            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400">
                                <Globe className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-black">360° Panorama</h3>
                            <p className="text-slate-400 font-medium leading-relaxed italic">"See the full picture."</p>
                            <p className="text-slate-300 font-medium leading-relaxed">Immersive, interactive spins of any room. Send links to clients that work in any browser without special hardware.</p>
                        </div>
                    </div>
                </section>

                {/* 5. DESIGNED FOR SALES & MARKETING */}
                <section className="py-20">
                    <div className="container-custom px-4 grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-nunito">
                                Turn designs into <br />
                                <span className="text-zlendo-teal">marketing assets.</span>
                            </h2>
                            <div className="space-y-8">
                                {[
                                    { title: 'Cinematic Storytelling', desc: 'Auto-generated walkthrough videos perfect for social media.' },
                                    { title: 'Project Landing Pages', desc: 'Host your 3D views on dedicated, branded web pages.' },
                                    { title: 'Digital Sales Pitches', desc: 'Impress clients with live interactive walkthroughs during meetings.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="w-12 h-12 rounded-xl bg-zlendo-teal/10 flex items-center justify-center shrink-0 border border-zlendo-teal/20">
                                            <Zap className="w-6 h-6 text-zlendo-teal" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black mb-2">{item.title}</h4>
                                            <p className="text-slate-400 font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="h-64 rounded-3xl overflow-hidden bg-slate-800"><img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Property" /></div>
                                    <div className="h-48 rounded-3xl overflow-hidden bg-slate-800"><img src={VRImg} className="w-full h-full object-cover" alt="VR" /></div>
                                </div>
                                <div className="space-y-4 mt-12">
                                    <div className="h-48 rounded-3xl overflow-hidden bg-slate-800"><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Interior" /></div>
                                    <div className="h-64 rounded-3xl overflow-hidden bg-slate-800"><img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Luxury" /></div>
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zlendo-teal p-10 rounded-full shadow-2xl shadow-zlendo-teal/40">
                                <Share2 className="w-10 h-10 text-white" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. BUSINESS IMPACT & WHO THIS IS FOR */}
                <section className="py-20 bg-slate-900/50">
                    <div className="container-custom px-4">
                        <div className="text-center mb-12 max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-black mb-8">Maximize ROI with Visualization</h2>
                            <p className="text-xl text-slate-400 font-medium">Immersive experiences reduce imagination gaps, leading to faster decisions and higher perceived project value.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: 'Homeowners', desc: 'Gain 100% confidence in your design before a single brick is laid.', icon: Home, highlight: 'Fewer Revisions' },
                                { title: 'Architects', desc: 'Present concepts that win clients immediately with hyper-realistic clarity.', icon: Layout, highlight: 'Instant Approvals' },
                                { title: 'Real Estate Builders', desc: 'Sell pre-construction units faster with cinematic marketing assets.', icon: Building2, highlight: 'Faster Conversions' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    className="bg-slate-950 p-12 rounded-[3rem] border border-white/5 text-center flex flex-col items-center"
                                >
                                    <div className="w-20 h-20 bg-zlendo-teal/10 rounded-full flex items-center justify-center mb-8 border border-zlendo-teal/20 text-zlendo-teal">
                                        <item.icon className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-3xl font-black mb-4">{item.title}</h3>
                                    <p className="text-slate-400 font-medium mb-8 leading-relaxed">{item.desc}</p>
                                    <div className="mt-auto px-6 py-2 rounded-full bg-zlendo-teal/20 text-zlendo-teal font-black text-xs uppercase tracking-widest border border-zlendo-teal/30">
                                        {item.highlight}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. FINAL CTA */}
                <section className="py-16 relative overflow-hidden">
                    {/* Background Noise/Gradient */}
                    <div className="absolute inset-0 bg-zlendo-teal opacity-10 blur-[150px] pointer-events-none" />

                    <div className="container-custom px-4 text-center relative z-10">
                        <div className="max-w-4xl mx-auto space-y-12">
                            <h2 className="text-4xl md:text-7xl font-black font-nunito leading-tight">
                                Sell the Experience, <br />
                                <span className="text-zlendo-teal">Not Just the Space.</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-2xl mx-auto">
                                Ready to transform your projects with 8K cinematic walkthroughs? Let’s build something extraordinary together.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
                                <Link
                                    href={paths.enterpriseDemo}
                                    className="px-12 py-6 bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-[2rem] font-black text-2xl hover:bg-white/10 transition-all text-center"
                                >
                                    Get Business Demo
                                </Link>
                                <a
                                    href={SIGNUP_URL}
                                    className="px-12 py-6 bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-[2rem] font-black text-2xl hover:bg-white/10 transition-all text-center"
                                >
                                    Watch 8K Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 8. FAQ */}
                <section className="py-16 bg-slate-900/30 border-t border-white/5">
                    <div className="container-custom px-6 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-black text-center mb-8">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <div key={i} className="border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors bg-slate-900/50">
                                    <button
                                        onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left bg-transparent"
                                    >
                                        <span className="text-lg font-bold text-white">{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {activeFaq === i && (
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: 'auto' }}
                                                exit={{ height: 0 }}
                                                className="overflow-hidden bg-white/5"
                                            >
                                                <p className="px-6 pb-6 pt-2 text-slate-400 font-medium leading-relaxed">
                                                    {faq.a}
                                                </p>
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

const faqs = [
    {
        q: "What is a virtual walkthrough?",
        a: "A virtual walkthrough allows you to experience the design as if you are walking inside the space, offering an immersive 3D walkthrough visualization before construction."
    },
    {
        q: "Do I need VR equipment?",
        a: "No. The walkthrough works on normal mobile phones, tablets, and computers. No special VR devices are required."
    },
    {
        q: "Can I explore all rooms?",
        a: "Yes. You can move freely through the entire layout using an interactive 3D walkthrough, giving a complete understanding of space and flow."
    },
    {
        q: "Can I share the walkthrough?",
        a: "Yes. You can easily share the virtual walkthrough link with family members, clients, or stakeholders to support reviews and approvals."
    },
    {
        q: "How does it help before construction?",
        a: "Early 3D walkthrough rendering helps identify layout and circulation issues in advance, reducing design mistakes and rework during construction."
    },
    {
        q: "Does it update with design changes?",
        a: "Yes. The virtual walkthrough design updates automatically whenever changes are made, ensuring you always view the latest version."
    }
];
