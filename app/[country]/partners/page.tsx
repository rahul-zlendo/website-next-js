'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    Handshake,
    TrendingUp,
    Coins,
    Layout,
    MessageSquare,
    Share2,
    Building2,
    CheckCircle2,
    ArrowRight,
    Wallet,
    LineChart,
    Smartphone,
    FileText,
    Zap,
    Download,
    Award,
    Briefcase,
    Globe,
    Home
} from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { useCountry } from '@/lib/context/CountryContext';

type ProgramType = 'affiliate' | 'partner';

export default function PartnersPage() {
    const { paths } = useCountry();
    const [activeProgram, setActiveProgram] = useState<ProgramType>('affiliate');

    const scrollToProgram = (type: ProgramType) => {
        setActiveProgram(type);
        const element = document.getElementById('program-section');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-white selection:bg-zlendo-teal/10 selection:text-zlendo-teal overflow-x-hidden">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex items-center pt-4 overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-zlendo-teal/5 blur-[120px] rounded-full" />
                    <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-zlendo-orange/5 blur-[120px] rounded-full" />
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>

                <div className="container-custom px-4 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zlendo-grey-dark text-white mb-8 shadow-xl"
                        >
                            <Zap className="w-4 h-4 text-zlendo-orange animate-pulse" />
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">The Future of PropTech is Collaborative</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black font-nunito text-zlendo-grey-dark leading-[0.9] mb-8 tracking-tighter"
                        >
                            Share. Earn.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-600 italic">Grow with Zlendo Realty.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-zlendo-grey-medium font-medium mb-12 max-w-3xl mx-auto leading-relaxed"
                        >
                            Turn your network into revenue. Help others design, visualize, and sell better — while you build a sustainable income stream.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
                        >
                            <button
                                onClick={() => scrollToProgram('affiliate')}
                                className="w-full sm:w-auto px-10 py-5 bg-zlendo-teal text-white rounded-[24px] font-black text-xl shadow-2xl shadow-zlendo-teal/30 hover:scale-105 transition-all flex items-center justify-center gap-3"
                            >
                                Start as Affiliate <ArrowRight className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => scrollToProgram('partner')}
                                className="w-full sm:w-auto px-10 py-5 bg-white text-zlendo-grey-dark border-2 border-black/5 rounded-[24px] font-black text-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
                            >
                                Become a Partner <Handshake className="w-6 h-6" />
                            </button>
                        </motion.div>

                        {/* Floating Dashboard Preview */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="relative max-w-6xl mx-auto group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-zlendo-teal/20 to-blue-600/20 blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                            <div className="relative bg-slate-900 rounded-[40px] p-2 shadow-2xl overflow-hidden border border-white/10">
                                <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
                                    alt="Zlendo Realty Earnings Dashboard"
                                    className="w-full h-auto rounded-[32px] opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                                />
                                {/* Glass Overlay UI elements */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. TWO CLEAR PATHS - TOGGLE */}
            <section id="program-section" className="py-16 bg-zlendo-mint/10">
                <div className="container-custom px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-black font-nunito text-zlendo-grey-dark mb-4">Choose Your Growth Path</h2>
                        <p className="text-lg text-zlendo-grey-medium font-bold opacity-60">Whether you're an individual creator or a professional studio, we have a place for you.</p>
                    </div>

                    <div className="flex justify-center mb-12">
                        <div className="bg-white p-2 rounded-full border border-black/5 shadow-xl flex gap-2 relative">
                            <motion.div
                                className="absolute h-[calc(100%-1rem)] bg-zlendo-grey-dark rounded-full z-0"
                                initial={false}
                                animate={{
                                    x: activeProgram === 'affiliate' ? 0 : '100%',
                                    width: activeProgram === 'affiliate' ? '50%' : '50%',
                                    left: activeProgram === 'affiliate' ? '0.5rem' : '-0.5rem'
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                            <button
                                onClick={() => setActiveProgram('affiliate')}
                                className={`relative z-10 px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-colors duration-300 ${activeProgram === 'affiliate' ? 'text-white' : 'text-zlendo-grey-medium hover:text-zlendo-grey-dark'}`}
                            >
                                Affiliate Program
                            </button>
                            <button
                                onClick={() => setActiveProgram('partner')}
                                className={`relative z-10 px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-colors duration-300 ${activeProgram === 'partner' ? 'text-white' : 'text-zlendo-grey-medium hover:text-zlendo-grey-dark'}`}
                            >
                                Partner Program
                            </button>
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        {activeProgram === 'affiliate' ? (
                            <motion.div
                                key="affiliate"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5 }}
                                className="grid lg:grid-cols-12 gap-12 items-start"
                            >
                                <div className="lg:col-span-12">
                                    <div className="bg-white rounded-[50px] p-8 md:p-16 border border-black/5 shadow-2xl relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-zlendo-teal/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />

                                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                                            <div className="space-y-8">
                                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zlendo-teal/10 text-zlendo-teal font-black text-xs uppercase tracking-widest">
                                                    <Share2 className="w-4 h-4" /> Affiliate Program
                                                </div>
                                                <h3 className="text-4xl md:text-5xl font-black font-nunito text-zlendo-grey-dark leading-tight">
                                                    Earn by sharing <span className="text-zlendo-teal italic">the future.</span>
                                                </h3>
                                                <p className="text-xl text-zlendo-grey-medium font-medium leading-relaxed">
                                                    Best for creators, influencers, consultants, and marketers who want to monetize their network through simple referrals.
                                                </p>

                                                <div className="space-y-6">
                                                    <h4 className="text-sm font-black uppercase tracking-widest text-zlendo-grey-medium opacity-40">How it works</h4>
                                                    <div className="grid gap-6">
                                                        {[
                                                            { step: '01', title: 'Sign Up', desc: 'Free & quick application. Get your tracking link instantly.', icon: Wallet },
                                                            { step: '02', title: 'Share Link', desc: 'WhatsApp, Social, Email, or Website. Use our high-res assets.', icon: Share2 },
                                                            { step: '03', title: 'Earn Commission', desc: 'Get paid for every qualified lead and successful conversion.', icon: Coins }
                                                        ].map((item, i) => (
                                                            <div key={i} className="flex gap-4 items-start p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                                                                <div className="w-12 h-12 rounded-xl bg-zlendo-teal text-white flex items-center justify-center font-black text-xl shrink-0 shadow-lg shadow-zlendo-teal/20">
                                                                    {item.step}
                                                                </div>
                                                                <div>
                                                                    <h5 className="font-black text-zlendo-grey-dark text-lg">{item.title}</h5>
                                                                    <p className="text-zlendo-grey-medium font-medium text-sm">{item.desc}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-10">
                                                <div className="bg-slate-50 rounded-[40px] p-8 md:p-12 border border-black/5 shadow-inner">
                                                    <h4 className="text-xl font-black font-nunito text-zlendo-grey-dark mb-8">What Affiliates Get</h4>
                                                    <div className="grid gap-4">
                                                        {[
                                                            { title: 'Competitive Commissions', desc: 'Industry-leading payouts on every sale.', icon: TrendingUp },
                                                            { title: 'Last-click Attribution', desc: 'Fair tracking that rewards your influence.', icon: Handshake },
                                                            { title: 'Real-time Dashboard', desc: 'Track clicks, leads, and earnings live.', icon: LineChart },
                                                            { title: 'Promotional Assets', desc: 'Ready-to-use banners, videos, and copy.', icon: FileText },
                                                            { title: 'Priority Feature Access', desc: 'See what we build before the world does.', icon: Zap },
                                                            { title: 'Monthly Payouts', desc: 'Fast, reliable payments directly to your account.', icon: Wallet }
                                                        ].map((benefit, i) => (
                                                            <div key={i} className="flex items-center gap-4 group">
                                                                <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-zlendo-teal group-hover:bg-zlendo-teal group-hover:text-white transition-colors">
                                                                    <benefit.icon className="w-4 h-4" />
                                                                </div>
                                                                <div>
                                                                    <span className="font-bold text-zlendo-grey-dark text-sm block leading-tight">{benefit.title}</span>
                                                                    <span className="text-[11px] font-medium text-zlendo-grey-medium opacity-60">{benefit.desc}</span>
                                                                </div>
                                                                <div className="ml-auto">
                                                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="text-center bg-zlendo-teal/5 p-8 rounded-[40px] border border-zlendo-teal/10">
                                                    <h5 className="font-black text-zlendo-grey-dark mb-4">Who This Is Perfect For</h5>
                                                    <div className="flex flex-wrap justify-center gap-3">
                                                        {['Influencers', 'Bloggers', 'Property Reviewers', 'Startup Leaders', 'Design Enthusiasts'].map(tag => (
                                                            <span key={tag} className="px-4 py-2 bg-white rounded-full text-xs font-black text-zlendo-teal shadow-sm border border-zlendo-teal/10">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <p className="mt-6 text-sm italic font-bold text-zlendo-grey-medium">"If you influence decisions, you can earn."</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-16 pt-12 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-8">
                                            <div className="text-left">
                                                <div className="text-2xl font-black font-nunito text-zlendo-grey-dark">4.2%</div>
                                                <div className="text-xs font-bold text-zlendo-grey-medium uppercase tracking-widest">Avg Conversion Rate</div>
                                            </div>
                                            <div className="text-center">
                                                <a
                                                    href={SIGNUP_URL}
                                                    className="px-12 py-5 bg-zlendo-teal text-white rounded-2xl font-black text-xl shadow-xl shadow-zlendo-teal/20 hover:scale-105 transition-all text-center inline-block"
                                                >
                                                    Apply to Become an Affiliate
                                                </a>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-black font-nunito text-zlendo-grey-dark">₹45k+</div>
                                                <div className="text-xs font-bold text-zlendo-grey-medium uppercase tracking-widest">Monthly Peer Avg Earnings</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="partner"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="grid lg:grid-cols-12 gap-12"
                            >
                                <div className="lg:col-span-12">
                                    <div className="bg-slate-900 rounded-[50px] p-8 md:p-16 border border-white/10 shadow-2xl relative overflow-hidden text-white">
                                        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />

                                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                                            <div className="space-y-8">
                                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 font-black text-xs uppercase tracking-widest border border-blue-500/20">
                                                    <Handshake className="w-4 h-4" /> Partner Program
                                                </div>
                                                <h3 className="text-4xl md:text-5xl font-black font-nunito text-white leading-tight">
                                                    Go beyond referrals. <br /><span className="text-blue-400 italic">Build recurring revenue.</span>
                                                </h3>
                                                <p className="text-xl text-white/60 font-medium leading-relaxed">
                                                    Best for agencies, interior designers, architects, and real estate consultants who want to build a business with Zlendo.
                                                </p>

                                                <div className="grid sm:grid-cols-2 gap-6">
                                                    {[
                                                        { title: 'Reseller Ops', desc: 'Scale in Tier 1–3 cities with tiered margins.', icon: Building2 },
                                                        { title: 'Exclusive Rights', desc: 'Optional regional exclusivity for top performers.', icon: Globe },
                                                        { title: 'Revenue Sharing', desc: 'Transparent, long-term profit sharing models.', icon: Wallet },
                                                        { title: 'Training & Cert', desc: 'Become a certified Zlendo proptech expert.', icon: Award },
                                                        { title: 'Co-Branded Marketing', desc: 'Leverage our brand for your local growth.', icon: Smartphone },
                                                        { title: 'Dedicated Support', desc: 'Priority technical & sales assistance 24/7.', icon: MessageSquare }
                                                    ].map((item, i) => (
                                                        <div key={i} className="flex gap-4 items-start group">
                                                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-400 group-hover:text-white transition-all">
                                                                <item.icon className="w-5 h-5" />
                                                            </div>
                                                            <div>
                                                                <h5 className="font-bold text-white text-sm">{item.title}</h5>
                                                                <p className="text-white/40 text-xs mt-1">{item.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="relative">
                                                <div className="absolute -inset-4 bg-blue-600/20 blur-3xl opacity-50 rounded-full animate-pulse" />
                                                <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-black aspect-square">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
                                                        alt="Partner Collaboration"
                                                        className="w-full h-full object-cover opacity-80"
                                                    />
                                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10">
                                                        <div className="text-sm font-black text-blue-400 uppercase tracking-widest mb-2">Use Case</div>
                                                        <div className="text-xl font-bold leading-tight">Design studios bundling Zlendo walkthroughs with premium interior packages.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-16 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                                            <div className="flex gap-4">
                                                <div className="text-center px-6">
                                                    <div className="text-2xl font-black font-nunito text-white">500+</div>
                                                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Active Partners</div>
                                                </div>
                                                <div className="text-center px-6 border-x border-white/10">
                                                    <div className="text-2xl font-black font-nunito text-white">₹15Cr+</div>
                                                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Partner Payouts</div>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <Link
                                                    href={paths.enterpriseDemo}
                                                    className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black text-xl hover:bg-slate-200 transition-all flex items-center gap-3 text-center inline-block"
                                                >
                                                    Join as a Partner <Handshake className="w-6 h-6" />
                                                </Link>
                                            </div>
                                            <button className="flex items-center gap-2 py-3 px-6 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-sm font-bold">
                                                <Download className="w-4 h-4" /> Download Partner Deck
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* 3. WHY PARTNER WITH ZLENDO (TRUST) */}
            <section className="py-20 relative overflow-hidden">
                <div className="container-custom px-4 text-center">
                    <div className="max-w-4xl mx-auto mb-12 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black font-nunito text-zlendo-grey-dark">Why Take Zlendo to Your Network?</h2>
                        <p className="text-xl text-zlendo-grey-medium font-medium opacity-60">Success in partnerships is built on product quality. Zlendo is India's most trusted home-tech platform.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'For Homeowners',
                                icon: Home,
                                desc: 'A trusted platform for smart design and planning that eliminates guesswork.',
                                badge: 'Trust First'
                            },
                            {
                                title: 'For Designers',
                                icon: Layout,
                                desc: 'Fast-growing user base across India and global markets seeking professional expertise.',
                                badge: 'High Demand'
                            },
                            {
                                title: 'For Professionals',
                                icon: Building2,
                                desc: 'A suite of tools buyers actually love—8K walkthroughs and hyper-realistic renders.',
                                badge: 'Sell Experience'
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-white p-12 rounded-[50px] border border-black/5 shadow-xl shadow-black/[0.02] text-center group"
                            >
                                <div className="w-20 h-20 bg-zlendo-mint/30 rounded-full flex items-center justify-center mb-8 mx-auto group-hover:bg-zlendo-teal group-hover:text-white transition-all duration-500">
                                    <item.icon className="w-10 h-10" />
                                </div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zlendo-teal/10 text-zlendo-teal text-[10px] font-black uppercase tracking-widest mb-4">
                                    {item.badge}
                                </div>
                                <h3 className="text-3xl font-black font-nunito text-zlendo-grey-dark mb-4">{item.title}</h3>
                                <p className="text-lg text-zlendo-grey-medium font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 p-8 rounded-[40px] bg-zlendo-grey-dark text-white max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Zap className="w-32 h-32" />
                        </div>
                        <div className="text-left relative z-10">
                            <h4 className="text-2xl font-black font-nunito mb-2">Built in India. Built for India.</h4>
                            <p className="text-white/60 font-medium">Standardizing excellence in the world's fastest growing residential economy.</p>
                        </div>
                        <CheckCircle2 className="w-12 h-12 text-zlendo-teal shrink-0 relative z-10" />
                    </div>
                </div>
            </section>

            {/* 4. GROWTH & VISION SECTION */}
            <section className="py-20 relative bg-slate-50 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/5 to-transparent" />

                <div className="container-custom px-4 text-center">
                    <div className="max-w-4xl mx-auto space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-16 rounded-[60px] border border-black/5 shadow-2xl relative"
                        >
                            <div className="mb-8">
                                <h2 className="text-5xl md:text-7xl font-black font-nunito text-zlendo-grey-dark mb-6">Let's Grow Together.</h2>
                                <p className="text-xl md:text-2xl text-zlendo-grey-medium font-medium max-w-2xl mx-auto leading-relaxed">
                                    Zlendo isn't just a tool; it's a movement toward digital-first construction and interiors. We have a long-term partnership mindset.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-10 text-left pt-8 border-t border-black/5">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-xl bg-zlendo-orange/10 flex items-center justify-center text-zlendo-orange">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <h5 className="text-2xl font-black font-nunito text-zlendo-grey-dark leading-tight">Growth Partnerships</h5>
                                    <p className="text-zlendo-grey-medium font-medium leading-relaxed">We don't just want affiliates. We want growth partners who are with us for the long haul.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal">
                                        <Briefcase className="w-6 h-6" />
                                    </div>
                                    <h5 className="text-2xl font-black font-nunito text-zlendo-grey-dark leading-tight">Support First Mindset</h5>
                                    <p className="text-zlendo-grey-medium font-medium leading-relaxed">Your success is our success. We provide the tools, training, and trust you need to lead.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5. CTA SECTION (FINAL PUSH) */}
            <section className="py-20 relative overflow-hidden bg-white">
                <div className="container-custom px-4 text-center">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-7xl font-black font-nunito leading-tight text-zlendo-grey-dark">
                                Turn Influence Into <span className="text-zlendo-teal italic">Income.</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-zlendo-grey-medium font-medium leading-relaxed max-w-2xl mx-auto">
                                Start today. Grow with India’s most innovative home tech platform.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link
                                href={paths.enterpriseDemo}
                                className="px-12 py-6 bg-zlendo-grey-dark text-white rounded-[2rem] font-black text-2xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 text-center inline-block"
                            >
                                Apply to Become a Partner <ArrowRight className="w-6 h-6" />
                            </Link>
                            <a
                                href={SIGNUP_URL}
                                className="px-12 py-6 bg-zlendo-teal text-white rounded-[2rem] font-black text-2xl shadow-2xl shadow-zlendo-teal/40 hover:scale-105 transition-all flex items-center justify-center gap-3 text-center inline-block"
                            >
                                Join as Affiliate <Zap className="w-6 h-6" />
                            </a>
                        </div>

                        <div className="pt-12 text-zlendo-grey-medium font-bold text-sm opacity-40 uppercase tracking-[0.3em]">
                            Free Training • High Commissions • 24/7 Support
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
