'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, CheckCircle2, Palette, Layers, Box, Phone, Sparkles, Zap } from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';

const services = [
    'Interior Design', 'Architecture', 'Construction', 'Renovation',
    'Vastu Consultation', 'Landscape Design', 'Electrical & Plumbing',
    'Furniture & Decor'
];

const steps = [
    {
        tag: 'Instant Transformation',
        title: 'Convert 2D plans into immersive 8K walkthroughs.',
        desc: 'Stop imagining. Start experiencing. Turn flat blueprints into photorealistic, interactive 3D worlds in seconds. No technical skills required.',
        img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
        icon: Layers
    },
    {
        tag: 'Smart Customization',
        title: 'Pick materials & get precise budgets instantly.',
        desc: 'Experiment with premium finishes and specific materials. See real-time cost estimates to keep your dream home within budget.',
        img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
        icon: Palette,
        reverse: true
    },
    {
        tag: 'Construction Clarity',
        title: 'Eliminate construction guesswork forever.',
        desc: 'Walk through your design before a single brick is laid. Identify issues early and ensure every corner matches your vision perfectly.',
        img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
        icon: Box
    },
    {
        tag: 'Unmatched Speed',
        title: 'Get 3D walkthroughs in just 30 seconds.',
        desc: 'Why wait weeks? Experience high-fidelity 3D tours in seconds. Complete your entire design review in under 10 minutes.',
        img: 'https://images.unsplash.com/photo-1487958449913-d973b917c2c6?auto=format&fit=crop&q=80&w=1200',
        icon: Zap,
        reverse: true
    }
];

const faqs = [
    { q: "How much does it cost?", a: "Zlendo Realty offers tiered pricing based on project complexity. Individual packages start from ₹19,999 for detailed 3D visualization and BOQ." },
    { q: "What files do I need?", a: "A simple JPEG/PDF of your floor plan or even a hand-drawn sketch with measurements is enough to get started." },
    { q: "How long does it take?", a: "Standard 3D conversion takes 24 hours. Full immersive walkthroughs are delivered within 48-72 hours." },
    { q: "Can I share with my architect?", a: "Yes, Zlendo Realty provides interactive links and standard 3D file exports that any professional can use." }
];

export default function IndividualsPage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <div className="bg-white font-nunito selection:bg-zlendo-teal/10">
            <main className="pt-8 md:pt-12">
                {/* Hero Section - Tighter & More Integrated */}
                <section
                    className="container-custom px-4 mb-12 relative z-10"
                >
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div className="space-y-6 md:space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zlendo-teal/10 border border-zlendo-teal/10"
                            >
                                <Sparkles className="w-3 h-3 text-zlendo-teal animate-pulse" />
                                <span className="text-[10px] md:text-xs font-black text-zlendo-teal uppercase tracking-widest">Experience the Future</span>
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-3xl md:text-5xl lg:text-6xl font-black font-nunito text-zlendo-grey-dark leading-[1.05]"
                            >
                                See your space <br />
                                <span className="text-zlendo-teal italic relative">
                                    before it's built.
                                </span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-lg md:text-xl text-zlendo-grey-medium font-bold opacity-60 leading-relaxed max-w-lg"
                            >
                                Experience your future home in 8K immersive 3D visualization. Accurate estimates, zero guesswork.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-3 max-w-lg"
                            >
                                <div className="relative flex-1">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zlendo-teal/50" />
                                    <input
                                        type="tel"
                                        required
                                        pattern="[0-9]{10}"
                                        maxLength={10}
                                        onInput={(e) => {
                                            (e.target as HTMLInputElement).value = (e.target as HTMLInputElement).value.replace(/\D/g, '').slice(0, 10);
                                        }}
                                        placeholder="10-digit mobile number"
                                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-black/[0.08] shadow-lg shadow-black/[0.02] outline-none focus:border-zlendo-teal transition-all font-bold text-zlendo-grey-dark"
                                        title="Please enter a valid 10-digit mobile number"
                                    />
                                </div>
                                <a
                                    href={SIGNUP_URL}
                                    className="px-8 py-4 bg-zlendo-teal text-white rounded-xl font-black text-lg shadow-xl shadow-zlendo-teal/20 flex items-center justify-center gap-2 whitespace-nowrap hover:scale-[1.02] active:scale-[0.98] transition-all"
                                >
                                    Start Tour <ArrowRight className="w-5 h-5" />
                                </a>
                            </motion.div>
                        </div>

                        <div className="relative mt-8 lg:mt-0">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="rounded-[32px] overflow-hidden shadow-2xl border border-black/5"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
                                    alt="Platform Preview"
                                    className="w-full h-auto object-cover"
                                />
                            </motion.div>
                            {/* Floating Badge - Tighter */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -left-6 md:-left-8 bg-white p-4 rounded-2xl shadow-xl border border-black/5 hidden md:block"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase text-zlendo-grey-medium opacity-40">Accuracy</div>
                                        <div className="text-sm font-black text-zlendo-grey-dark">99.8% Precise</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Services - Connected Background */}
                <section className="bg-zlendo-teal/[0.02] py-12 md:py-16 border-y border-black/[0.03]">
                    <div className="container-custom px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-black font-nunito text-zlendo-grey-dark mb-8 opacity-80">Everything you need to build better</h2>
                        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                            {services.map((service) => (
                                <div key={service} className="px-5 py-2.5 bg-white rounded-full border border-black/[0.05] shadow-sm text-sm md:text-base font-bold text-zlendo-grey-dark hover:border-zlendo-teal/30 hover:text-zlendo-teal transition-colors cursor-default">
                                    {service}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* The Journey - Tighter Grid */}
                <section className="py-12 md:py-20 bg-white relative overflow-hidden">
                    <div className="container-custom px-4 relative z-10">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="text-3xl md:text-5xl font-black font-nunito text-zlendo-grey-dark mb-4">From Plan to Perfection</h2>
                            <p className="text-lg text-zlendo-grey-medium font-bold opacity-60">Your simplified roadmap.</p>
                        </div>

                        <div className="grid gap-12 md:gap-24 relative">
                            {/* Connected Line for Desktop */}
                            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-zlendo-teal/10 -translate-x-1/2 hidden md:block" />

                            {steps.map((step, index) => (
                                <div key={step.tag} className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-center ${index % 2 !== 0 ? 'md:bg-transparent' : ''}`}>
                                    {/* Content Side */}
                                    <div className={`${index % 2 !== 0 ? 'md:order-2 md:pl-12' : 'md:text-right md:pr-12'}`}>
                                        <div className={`inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-lg bg-zlendo-teal/5 text-zlendo-teal font-black text-[10px] uppercase tracking-wider ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                            <step.icon className="w-3.5 h-3.5" />
                                            {step.tag}
                                        </div>
                                        <h3 className="text-2xl md:text-4xl font-black text-zlendo-grey-dark mb-3 leading-tight">{step.title}</h3>
                                        <p className="text-base md:text-lg text-zlendo-grey-medium font-bold opacity-60 leading-relaxed">{step.desc}</p>
                                    </div>

                                    {/* Image Side */}
                                    <div className={`${index % 2 !== 0 ? 'md:order-1' : ''} relative`}>
                                        <div className="aspect-[4/3] rounded-[32px] overflow-hidden shadow-lg border border-black/5 group">
                                            <img src={step.img} alt={step.tag} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                        {/* Center Dot */}
                                        <div className="absolute top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-zlendo-teal shadow-lg z-20" style={{ [index % 2 === 0 ? 'left' : 'right']: '-32px', transform: 'translateX(32px) translateX(-50%)' }}>
                                            <div className="w-2.5 h-2.5 rounded-full bg-zlendo-teal" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tighter FAQs */}
                <section className="py-12 md:py-20 bg-zlendo-grey-light/50">
                    <div className="container-custom px-4 max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-black text-center text-zlendo-grey-dark mb-8">Common Questions</h2>
                        <div className="space-y-3">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-white rounded-2xl border border-black/5 overflow-hidden">
                                    <button
                                        onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-black/[0.01] transition-colors"
                                    >
                                        <span className="text-base md:text-lg font-bold text-zlendo-grey-dark">{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-zlendo-grey-medium transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {activeFaq === i && (
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: 'auto' }}
                                                exit={{ height: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="px-6 pb-6 pt-0 text-sm md:text-base text-zlendo-grey-medium font-medium leading-relaxed">
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

                {/* Compact CTA */}
                <section className="py-12 md:py-20 px-4 container-custom">
                    <div className="bg-zlendo-grey-dark rounded-[40px] md:rounded-[60px] p-8 md:p-16 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-zlendo-teal/20 to-transparent opacity-30" />
                        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                            <h2 className="text-3xl md:text-5xl font-black font-nunito text-white leading-tight">Ready to verify your dream home?</h2>
                            <p className="text-white/60 font-bold text-lg">Detailed consultation + 3D Preview in 24 hours.</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a
                                    href={SIGNUP_URL}
                                    className="px-10 py-4 bg-zlendo-teal text-white rounded-xl font-black text-lg shadow-xl shadow-zlendo-teal/20 hover:scale-105 transition-all text-center"
                                >
                                    Get Started
                                </a>
                                <button className="px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/10 rounded-xl font-black text-lg hover:bg-white/20 transition-colors">
                                    View Samples
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
