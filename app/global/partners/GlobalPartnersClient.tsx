'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
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
    Award,
    Briefcase,
    Globe,
    Home,
    Users,
    Star,
    BarChart3,
    Shield,
    Rocket,
    Target,
    ChevronRight,
    Play,
    ExternalLink
} from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';

type ProgramType = 'affiliate' | 'partner';

/* ═══════════════════════════════════════════
   COUNT-UP ANIMATION HOOK
═══════════════════════════════════════════ */
function useCountUp(target: number, duration: number = 2000, startOnView: boolean = true) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const hasStarted = useRef(false);

    useEffect(() => {
        if (!startOnView || !isInView || hasStarted.current) return;
        hasStarted.current = true;

        const startTime = performance.now();
        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [isInView, target, duration, startOnView]);

    return { count, ref };
}

/* ═══════════════════════════════════════════
   STATIC DATA — GLOBAL CONTENT
═══════════════════════════════════════════ */
const affiliateSteps = [
    { title: 'Apply & Get Approved', desc: 'Quick application. Receive your unique tracking link and marketing assets within 24 hours.', icon: Wallet },
    { title: 'Share & Promote', desc: 'Social media, email campaigns, websites, or direct referrals — use any channel, anywhere in the world.', icon: Share2 },
    { title: 'Earn Commissions', desc: 'Competitive payouts on every qualified lead and successful conversion. No caps.', icon: Coins }
];

const affiliateBenefits = [
    { title: 'Global Commission Tiers', desc: 'Earn more as you scale — uncapped.', icon: TrendingUp },
    { title: 'Last-Click Attribution', desc: 'Fair tracking that credits your influence.', icon: Handshake },
    { title: 'Real-Time Analytics', desc: 'Live dashboard for clicks, leads, and revenue.', icon: LineChart },
    { title: 'Marketing Toolkit', desc: 'Production-ready banners, videos, and copy.', icon: FileText },
    { title: 'Early Feature Access', desc: 'Preview new releases before anyone else.', icon: Zap },
    { title: 'Fast Global Payouts', desc: 'Multiple currencies, reliable monthly payments.', icon: Wallet }
];

const partnerFeatures = [
    { title: 'White-Label Solutions', desc: 'Offer Zlendo Realty under your own brand to enterprise clients.', icon: Building2 },
    { title: 'Regional Exclusivity', desc: 'Optional territory rights for top-performing partners.', icon: Globe },
    { title: 'Revenue Sharing', desc: 'Transparent, long-term profit models that scale.', icon: Wallet },
    { title: 'Certification Program', desc: 'Become a certified Zlendo Realty PropTech specialist.', icon: Award },
    { title: 'Co-Marketing', desc: 'Joint campaigns, case studies, and PR support.', icon: Smartphone },
    { title: 'Dedicated Account Manager', desc: '24/7 priority technical and sales support.', icon: MessageSquare }
];

const whyCards = [
    {
        title: 'For Homeowners',
        icon: Home,
        desc: 'A trusted platform for smart design and planning that eliminates guesswork.',
        badge: 'Trust First',
        stat: '50K+',
        statLabel: 'Projects Visualized'
    },
    {
        title: 'For Designers',
        icon: Layout,
        desc: 'Fast-growing user base across global markets seeking professional expertise.',
        badge: 'High Demand',
        stat: '120+',
        statLabel: 'Countries Active'
    },
    {
        title: 'For Professionals',
        icon: Building2,
        desc: 'A suite of tools buyers love — 8K walkthroughs and hyper-realistic renders.',
        badge: 'Sell Experience',
        stat: '98%',
        statLabel: 'Client Satisfaction'
    }
];

const growthPoints = [
    {
        title: 'Long-Term Growth Partnerships',
        desc: 'We don\'t want affiliates. We want growth partners who build sustainable businesses alongside us.',
        icon: Award
    },
    {
        title: 'Support-First Mindset',
        desc: 'Your success is our success. World-class tools, training, and dedicated support to help you lead.',
        icon: Briefcase
    },
    {
        title: 'Global Infrastructure',
        desc: 'Multi-currency payouts, localized marketing assets, and support across every major timezone.',
        icon: Globe
    },
    {
        title: 'Technology Advantage',
        desc: 'Leverage AI-powered visualization, 3D rendering, and immersive walkthrough technology that sells.',
        icon: Rocket
    }
];

const stats = [
    { value: 500, suffix: '+', label: 'Active Partners' },
    { value: 120, suffix: '+', label: 'Countries' },
    { value: 98, suffix: '%', label: 'Partner Retention' },
    { value: 2, prefix: '$', suffix: 'M+', label: 'Commissions Paid' }
];

const affiliateTags = ['Content Creators', 'Design Influencers', 'Tech Bloggers', 'Real Estate Agents', 'Architecture Students', 'SaaS Reviewers'];

/* ═══════════════════════════════════════════
   STAT CARD COMPONENT
═══════════════════════════════════════════ */
function StatCard({ value, suffix, prefix, label, dark = false }: { value: number; suffix?: string; prefix?: string; label: string; dark?: boolean }) {
    const { count, ref } = useCountUp(value, 2200);
    return (
        <div ref={ref} className="text-center px-6">
            <div className={`text-3xl md:text-4xl font-black font-nunito ${dark ? 'text-white' : 'text-[#020204]'}`}>
                {prefix || ''}{count}{suffix || ''}
            </div>
            <div className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${dark ? 'text-white/40' : 'text-slate-400'}`}>
                {label}
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════ */
export default function GlobalPartnersClient() {
    const [activeProgram, setActiveProgram] = useState<ProgramType>('affiliate');

    const scrollToProgram = (type: ProgramType) => {
        setActiveProgram(type);
        const element = document.getElementById('program-section');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-white text-zlendo-grey-dark font-nunito overflow-x-hidden selection:bg-zlendo-teal/20 selection:text-zlendo-teal">

            {/* ══════════════════════════════════════
               1. HERO — LIGHT PREMIUM
            ══════════════════════════════════════ */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
                <div className="absolute top-[-30%] right-[-15%] w-[800px] h-[800px] bg-gradient-to-br from-zlendo-teal/10 to-transparent rounded-full blur-[160px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-gradient-to-tr from-violet-200/40 to-transparent rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

                <div className="container-custom px-6 lg:px-12 py-12 lg:py-16 relative z-10">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 backdrop-blur-sm mb-8"
                            >
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-500">Global Partner Program</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-8 text-[#0A0A0B]"
                            >
                                Share. Earn.{' '}
                                <br />
                                <span className="bg-gradient-to-r from-zlendo-teal via-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                                    Grow Globally.
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.25 }}
                                className="text-lg text-slate-600 font-bold leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 tracking-tight"
                            >
                                Build your professional network into a global revenue stream. Join our ecosystem of high-earning partners worldwide.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.35 }}
                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                            >
                                <button
                                    onClick={() => scrollToProgram('affiliate')}
                                    className="w-full sm:w-auto px-10 py-5 bg-zlendo-teal text-white rounded-2xl font-black text-lg shadow-xl shadow-zlendo-teal/20 hover:scale-[1.03] transition-all flex items-center justify-center gap-3"
                                >
                                    Start Now <ArrowRight className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => scrollToProgram('partner')}
                                    className="w-full sm:w-auto px-10 py-5 bg-slate-50 text-slate-700 border border-slate-200 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all"
                                >
                                    View Programs
                                </button>
                            </motion.div>
                        </div>

                        {/* Floating Dashboard Visual */}
                        <motion.div
                            initial={{ opacity: 0, x: 40, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex-1 relative group"
                        >
                            <div className="absolute -inset-4 bg-zlendo-teal/10 blur-3xl opacity-30 group-hover:opacity-50 transition duration-1000" />
                            <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-2xl bg-[#0a0a0c]">
                                <img
                                    src="/images/global/partner-dashboard.png"
                                    alt="Partner Dashboard Preview"
                                    className="w-full h-auto opacity-95 hover:opacity-100 transition duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Stats Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="relative max-w-4xl mx-auto mt-16"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-zlendo-teal/10 to-violet-100 blur-2xl opacity-40 rounded-3xl" />
                        <div className="relative bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200 p-8 md:p-10 shadow-sm">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                                {stats.map((stat, i) => (
                                    <StatCard key={i} {...stat} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════
               2. PROGRAM TOGGLE — DARK SECTION
            ══════════════════════════════════════ */}
            <section id="program-section" className="py-12 lg:py-16 px-6 lg:px-12 relative bg-[#020204] text-white">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                <div className="container-custom">
                    <div className="text-center mb-10">
                        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-zlendo-teal/60 mb-4">Choose Your Path</p>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white">
                            Two ways to{' '}
                            <span className="bg-gradient-to-r from-zlendo-teal to-cyan-400 bg-clip-text text-transparent">grow with us.</span>
                        </h2>
                        <p className="text-lg text-white/40 font-medium max-w-2xl mx-auto">
                            Whether you're an individual creator or a professional agency, we have a program designed for your scale.
                        </p>
                    </div>

                    {/* Toggle */}
                    <div className="flex justify-center mb-10">
                        <div className="bg-white/[0.04] p-1.5 rounded-2xl border border-white/[0.06] flex gap-1.5 relative">
                            <motion.div
                                className="absolute h-[calc(100%-0.75rem)] bg-zlendo-teal rounded-xl z-0"
                                initial={false}
                                animate={{
                                    x: activeProgram === 'affiliate' ? 0 : '100%',
                                    width: '50%',
                                    left: activeProgram === 'affiliate' ? '0.375rem' : '-0.375rem'
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                            <button
                                onClick={() => setActiveProgram('affiliate')}
                                className={`relative z-10 px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest transition-colors duration-300 ${activeProgram === 'affiliate' ? 'text-white' : 'text-white/40 hover:text-white/60'}`}
                            >
                                Affiliate Program
                            </button>
                            <button
                                onClick={() => setActiveProgram('partner')}
                                className={`relative z-10 px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest transition-colors duration-300 ${activeProgram === 'partner' ? 'text-white' : 'text-white/40 hover:text-white/60'}`}
                            >
                                Partner Program
                            </button>
                        </div>
                    </div>

                    {/* Program Content */}
                    <AnimatePresence mode="wait">
                        {activeProgram === 'affiliate' ? (
                            <motion.div
                                key="affiliate"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 30 }}
                                transition={{ duration: 0.5 }}
                                className="rounded-[28px] bg-white/[0.02] border border-white/[0.06] p-8 md:p-12 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-zlendo-teal/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
                                    {/* Left */}
                                    <div className="space-y-8">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zlendo-teal/10 text-zlendo-teal font-black text-xs uppercase tracking-widest border border-zlendo-teal/20">
                                            <Share2 className="w-4 h-4" /> Affiliate Program
                                        </div>
                                        <h3 className="text-3xl md:text-[40px] font-black tracking-tight leading-tight">
                                            Earn by sharing{' '}
                                            <span className="bg-gradient-to-r from-zlendo-teal to-cyan-400 bg-clip-text text-transparent italic">the future.</span>
                                        </h3>
                                        <p className="text-lg text-white/40 font-medium leading-relaxed">
                                            Best for creators, influencers, and marketers who want to monetize their network through simple referrals.
                                        </p>

                                        <div className="space-y-6">
                                            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-white/20">How It Works</h4>
                                            <div className="space-y-4">
                                                {affiliateSteps.map((item, i) => (
                                                    <div key={i} className="flex gap-4 items-start p-4 rounded-2xl hover:bg-white/[0.02] transition-colors group">
                                                        <div className="w-10 h-10 rounded-xl bg-zlendo-teal text-white flex items-center justify-center font-black text-lg shrink-0 shadow-lg shadow-zlendo-teal/20">
                                                            0{i + 1}
                                                        </div>
                                                        <div>
                                                            <h5 className="font-black text-white text-[15px]">{item.title}</h5>
                                                            <p className="text-white/40 font-medium text-sm mt-0.5">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right */}
                                    <div className="space-y-8">
                                        <div className="bg-white/[0.03] overflow-hidden rounded-[24px] border border-white/[0.06] relative group">
                                            <img
                                                src="/images/global/partner-network.png"
                                                alt="Global Network"
                                                className="w-full h-44 object-cover opacity-60 group-hover:opacity-80 transition duration-500"
                                            />
                                            <div className="p-8">
                                                <h4 className="text-lg font-black text-white mb-6">Affiliate Benefits</h4>
                                                <div className="space-y-4">
                                                    {affiliateBenefits.map((benefit, i) => (
                                                        <div key={i} className="flex items-center gap-4 group">
                                                            <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-zlendo-teal group-hover:bg-zlendo-teal group-hover:text-white transition-colors shrink-0">
                                                                <benefit.icon className="w-4 h-4" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <span className="font-bold text-white text-xs block leading-tight">{benefit.title}</span>
                                                                <span className="text-[10px] font-medium text-white/30">{benefit.desc}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-zlendo-teal/5 p-6 rounded-[24px] border border-zlendo-teal/10 text-center">
                                            <h5 className="font-black text-white mb-4 text-sm">Perfect For</h5>
                                            <div className="flex flex-wrap justify-center gap-2">
                                                {affiliateTags.slice(0, 4).map((tag) => (
                                                    <span key={tag} className="px-3 py-1.5 bg-white/[0.04] rounded-full text-[10px] font-bold text-zlendo-teal border border-zlendo-teal/10">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-10 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div className="text-left">
                                        <div className="text-2xl font-black text-white">4.2%</div>
                                        <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Avg Conversion</div>
                                    </div>
                                    <a
                                        href="/global/business#demo-form"
                                        className="px-10 py-4 bg-zlendo-teal text-white rounded-2xl font-black text-lg shadow-xl shadow-zlendo-teal/20 hover:scale-[1.03] transition-all"
                                    >
                                        Apply as Affiliate
                                    </a>
                                    <div className="text-right">
                                        <div className="text-2xl font-black text-white">$1,200+</div>
                                        <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Peak Earnings</div>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="partner"
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.5 }}
                                className="rounded-[28px] bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] p-8 md:p-12 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-600/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
                                    <div className="space-y-8">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 font-black text-xs uppercase tracking-widest border border-violet-500/20">
                                            <Handshake className="w-4 h-4" /> Partner Program
                                        </div>
                                        <h3 className="text-3xl md:text-[40px] font-black tracking-tight leading-tight">
                                            Go beyond referrals.
                                            <br />
                                            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent italic">Build recurring revenue.</span>
                                        </h3>
                                        <p className="text-lg text-white/40 font-medium leading-relaxed">
                                            Best for agencies and interior designers looking to bundle Zlendo Realty with their services.
                                        </p>

                                        <div className="grid sm:grid-cols-2 gap-5">
                                            {partnerFeatures.map((item, i) => (
                                                <div key={i} className="flex gap-3.5 items-start group">
                                                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-all shrink-0">
                                                        <item.icon className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <h5 className="font-bold text-white text-sm">{item.title}</h5>
                                                        <p className="text-white/30 text-[10px] mt-0.5">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-violet-600/15 blur-3xl opacity-40 rounded-full" />
                                        <div className="relative rounded-[28px] overflow-hidden border border-white/[0.08] bg-[#0a0a0c] group">
                                            <img
                                                src="/images/global/partner-interior.png"
                                                alt="Partner Visualization"
                                                className="w-full h-52 object-cover opacity-70 group-hover:opacity-90 transition duration-700"
                                            />
                                            <div className="p-8 space-y-6">
                                                <div className="text-xs font-black text-violet-400 uppercase tracking-widest">Partner Story</div>
                                                <div className="text-base font-bold text-white/80 leading-relaxed italic">
                                                    "Studios bundling Zlendo Realty see 3x higher close rates."
                                                </div>
                                                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500/30 to-blue-500/30 flex items-center justify-center text-white text-[10px] font-black">
                                                        AK
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold text-white/80">Alex Kim</p>
                                                        <p className="text-[10px] text-white/30 font-medium">Design Partner</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-10 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div className="flex gap-8">
                                        <div className="text-center">
                                            <div className="text-2xl font-black text-white">500+</div>
                                            <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Partners</div>
                                        </div>
                                        <div className="text-center border-l border-white/[0.06] pl-8">
                                            <div className="text-2xl font-black text-white">$2M+</div>
                                            <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Payouts</div>
                                        </div>
                                    </div>
                                    <a
                                        href="/global/business#demo-form"
                                        className="px-10 py-4 bg-white text-[#020204] rounded-2xl font-black text-lg hover:bg-white/90 transition-all flex items-center gap-3"
                                    >
                                        Join as Partner <Handshake className="w-5 h-5" />
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* ══════════════════════════════════════
               3. WHY PARTNER WITH ZLENDO — LIGHT BREAK
            ══════════════════════════════════════ */}
            <section className="py-12 lg:py-16 px-6 lg:px-12 relative overflow-hidden bg-[#F9FAFB] text-zlendo-grey-dark">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-zlendo-teal/5 blur-[160px] rounded-full pointer-events-none" />

                <div className="container-custom relative z-10">
                    <div className="text-center mb-12">
                        <p className="text-[11px] font-black uppercase tracking-[0.4em] text-zlendo-teal mb-4">Why Zlendo Realty</p>
                        <h2 className="text-3xl md:text-5xl font-black tracking-[-0.04em] mb-4 text-[#0A0A0B]">
                            Why take Zlendo Realty to{' '}
                            <span className="bg-gradient-to-r from-zlendo-teal to-emerald-600 bg-clip-text text-transparent">your network?</span>
                        </h2>
                        <p className="text-lg text-slate-600 font-bold max-w-2xl mx-auto tracking-tight">
                            Zlendo Realty is the world's most trusted home-tech platform. Quality is the foundation of our success.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {whyCards.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                className="p-8 lg:p-10 rounded-[28px] bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-zlendo-teal/30 transition-all group text-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-zlendo-teal/5 flex items-center justify-center mb-6 mx-auto group-hover:bg-zlendo-teal group-hover:text-white transition-all duration-500">
                                    <item.icon className="w-7 h-7 text-zlendo-teal group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-black text-[#020204] mb-3">{item.title}</h3>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">{item.desc}</p>
                                <div className="pt-4 border-t border-slate-100">
                                    <div className="text-2xl font-black text-zlendo-teal">{item.stat}</div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.statLabel}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 p-8 rounded-[24px] bg-white border border-slate-200 shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
                    >
                        <div className="text-left relative z-10">
                            <h4 className="text-xl font-black text-[#020204] mb-2">Built for global scale.</h4>
                            <p className="text-slate-500 font-medium text-sm">Standardizing excellence in design tech across 120+ countries.</p>
                        </div>
                        <CheckCircle2 className="w-10 h-10 text-zlendo-teal shrink-0 relative z-10" />
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════
               4. GROWTH & VISION — DARK SECTION
            ══════════════════════════════════════ */}
            <section className="py-12 lg:py-16 px-6 lg:px-12 relative overflow-hidden bg-[#020204] text-white">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-violet-600/5 blur-[140px] rounded-full pointer-events-none" />

                <div className="container-custom relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/[0.02] p-10 md:p-14 rounded-[28px] border border-white/[0.06]"
                        >
                            <div className="text-center mb-10">
                                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-zlendo-teal/60 mb-4">Our Vision</p>
                                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white">
                                    Let's <span className="bg-gradient-to-r from-zlendo-teal to-cyan-400 bg-clip-text text-transparent">grow together.</span>
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 pt-10 border-t border-white/[0.06]">
                                {growthPoints.map((point, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="space-y-3"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal">
                                            <point.icon className="w-5 h-5" />
                                        </div>
                                        <h5 className="text-lg font-black text-white leading-tight">{point.title}</h5>
                                        <p className="text-white/40 font-medium leading-relaxed text-sm">{point.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
               5. FINAL CTA — DARK SECTION
            ══════════════════════════════════════ */}
            <section className="py-12 lg:py-16 px-6 lg:px-12 relative overflow-hidden bg-[#020204] text-white">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-zlendo-teal/5 blur-[180px] rounded-full pointer-events-none" />

                <div className="container-custom relative z-10 text-center">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-zlendo-teal/60 mb-4 text-white/60">Get Started</p>
                            <h2 className="text-3xl md:text-[50px] font-black tracking-tight leading-tight text-white">
                                Turn Influence Into <span className="bg-gradient-to-r from-zlendo-teal via-emerald-300 to-cyan-400 bg-clip-text text-transparent italic">Income.</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="flex flex-col sm:flex-row justify-center gap-4"
                        >
                            <a
                                href="/global/business#demo-form"
                                className="px-10 py-5 bg-white text-[#020204] rounded-2xl font-black text-lg hover:bg-white/90 transition-all flex items-center justify-center gap-3"
                            >
                                Apply as Partner <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href={SIGNUP_URL}
                                className="px-10 py-5 bg-zlendo-teal text-white rounded-2xl font-black text-lg shadow-2xl shadow-zlendo-teal/40 hover:scale-[1.03] transition-all flex items-center justify-center gap-3"
                            >
                                Start Earning <Zap className="w-5 h-5" />
                            </a>
                        </motion.div>

                        <div className="pt-8 text-white/20 font-bold text-xs uppercase tracking-[0.3em]">
                            Free Training • High Commissions • 24/7 Support
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
