'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    Check,
    Droplet,
    Bath,
    Sparkles,
    Layout,
    PencilRuler,
    Maximize2,
    Palette,
    Eye,
    Sun,
    Users,
    BedDouble,
    Bed,
    Accessibility,
    Building2,
    ShieldCheck,
    Smartphone,
    TrendingUp,
    Wrench,
    HeartHandshake,
    PhoneCall,
    UserCheck,
    ChevronRight,
    Map
} from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';

export default function BathroomDesignClient() {
    const [activeTab, setActiveTab] = useState(0);

    const steps = [
        {
            title: 'Start With the Space You Have',
            desc: 'Whether you have a new floor plan, an existing bathroom, or simply an idea, start building your concept around the actual space.',
            icon: Maximize2,
            cta: 'Start My Bathroom Plan'
        },
        {
            title: 'Create Your Fixture Layout',
            desc: 'Find the right arrangement for your shower, bathtub, toilet, vanity, sink, cabinets, and other essentials.',
            icon: Layout,
            cta: 'Arrange My Bathroom'
        },
        {
            title: 'Bring Your Style Into the Space',
            desc: 'Choose the look you want with tiles, flooring, wall finishes, colors, mirrors, lighting, fixtures, and materials.',
            icon: Palette,
            cta: 'Style My Bathroom'
        },
        {
            title: 'See the Transformation',
            desc: 'Turn your bathroom concept into a 3D visual and experience how the finished space could look.',
            icon: Eye,
            cta: 'See My Bathroom in 3D'
        }
    ];

    const useCases = [
        { title: 'Morning Routine', desc: 'Plan practical access between the vanity, mirror, shower, and storage.', icon: Sun, image: '/assets/global/bathroom-usecases/morning-routine.jpg' },
        { title: 'Family Bathroom', desc: 'Create enough functionality and storage for everyone in the household.', icon: Users, image: '/assets/global/bathroom-usecases/family-bathroom.jpg' },
        { title: 'Master Bathroom', desc: 'Design a more spacious and relaxing environment with premium fixtures and finishes.', icon: BedDouble, image: '/assets/global/bathroom-usecases/master-bathroom.jpg' },
        { title: 'Guest Bathroom', desc: 'Create a compact, stylish, and welcoming space.', icon: Bed, image: '/assets/global/bathroom-usecases/guest-bathroom.png' },
        { title: 'Accessible Bathroom', desc: 'Plan layouts with comfort, movement, and accessibility requirements in mind.', icon: Accessibility, image: '/assets/global/bathroom-usecases/accessible-bathroom.jpg' }
    ];

    const benefits = [
        { title: 'Design Around Your Space', desc: 'Create a bathroom layout based on your actual room dimensions and requirements.', icon: PencilRuler },
        { title: 'Visualize Before Construction', desc: 'See your design in 3D before making major decisions.', icon: Eye },
        { title: 'Explore Different Possibilities', desc: 'Compare layouts, fixtures, materials, colors, and styles.', icon: Map },
        { title: 'Improve Functionality', desc: 'Design around storage, movement, daily routines, and practical needs.', icon: TrendingUp },
        { title: 'Renovate With Confidence', desc: 'Visualize your new bathroom before removing the old one.', icon: Wrench },
        { title: 'Get Professional Support', desc: 'Work with Zlendo Realty\'s design professionals when you want expert guidance.', icon: HeartHandshake }
    ];

    const faqs = [
        { q: 'What can I design with Zlendo Realty\'s Bathroom Design Tool?', a: 'You can plan your bathroom layout and explore fixtures, vanities, showers, bathtubs, storage, tiles, colors, materials, lighting, and other design elements.' },
        { q: 'Can I design a small bathroom?', a: 'Yes. You can explore different layouts, fixture arrangements, storage options, and finishes to make better use of a compact space.' },
        { q: 'Can I redesign my existing bathroom?', a: 'Yes. You can use your existing bathroom as a starting point and explore a new layout, style, fixtures, and finishes for renovation.' },
        { q: 'Can I see my bathroom design in 3D?', a: 'Yes. Zlendo Realty can turn your design concept into a 3D visualization so you can better understand the finished space.' },
        { q: 'Can Zlendo Realty help design a new bathroom?', a: 'Yes. Our professional design team can help plan a new bathroom based on your space, requirements, lifestyle, and preferred design style.' },
        { q: 'Can your team help with bathroom renovation?', a: 'Yes. Our professionals can help you rethink your existing bathroom layout, materials, fixtures, storage, and overall design before renovation.' },
        { q: 'Can I create a luxury or spa-style bathroom?', a: 'Yes. You can explore different design directions, including luxury, contemporary, minimalist, and spa-inspired bathroom concepts.' },
        { q: 'Can I plan bathroom storage?', a: 'Yes. You can explore vanities, cabinets, shelves, and other storage solutions as part of your bathroom design.' }
    ];

    return (
        <div className="overflow-hidden bg-[#f7f8f6] font-nunito text-slate-900">

            {/* Hero Section */}
            <section className="relative border-b border-slate-200 bg-[#0d1917] px-4 pb-12 pt-12 text-white lg:pb-16 lg:pt-16">
                <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_20%_20%,rgba(41,176,161,.25),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,96,58,.15),transparent_40%)]" />
                <div className="container-custom relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
                    <div>
                        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-teal-200 backdrop-blur">
                            <Droplet className="h-4 w-4" /> Bathroom Design Tool
                        </div>
                        <h1 className="max-w-3xl text-[28px] md:text-[42px] lg:text-[52px] font-black leading-[1.08] tracking-tight md:tracking-tighter">
                            Turn Your Bathroom Space <br /><span className="text-teal-300">Into a Design You’ll Love</span>
                        </h1>
                        <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-slate-300 lg:text-xl">
                            Plan every detail and visualize the transformation in 3D. Whether you're upgrading a master bath or renovating an old space, Zlendo Realty's Design Tool helps you arrange fixtures and explore materials before construction begins.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link href={SIGNUP_URL} className="flex items-center justify-center gap-2 rounded-2xl bg-zlendo-teal px-7 py-4 font-black text-white transition hover:bg-teal-500">
                                Design My Bathroom <ArrowRight className="h-5 w-5" />
                            </Link>
                            <Link href="/business#demo-form" className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-7 py-4 font-black text-white backdrop-blur transition hover:bg-white/10">
                                Talk to a Bathroom Designer
                            </Link>
                        </div>
                    </div>

                    <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-[500px]">
                        <div className="absolute inset-0 rounded-[32px] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,.4)]">
                            <img src="/assets/global/modern-bathroom-design.jpg" alt="Bathroom Design" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transform Space Section */}
            <section className="bg-white px-4 py-12 lg:py-16 border-y border-slate-200">
                <div className="container-custom mx-auto max-w-7xl">
                    <div className="text-center mx-auto mb-16">
                        <h2 className="text-3xl md:text-[48px] font-black leading-tight tracking-tighter text-slate-900">Turn Your Space into a Beautiful, Functional Bathroom</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, index) => (
                            <div key={index} className="group rounded-[28px] border border-slate-200 bg-slate-50 p-8 flex flex-col justify-between transition hover:-translate-y-1 hover:border-zlendo-teal hover:shadow-[0_20px_55px_rgba(15,23,42,.08)]">
                                <div>
                                    <div className="flex w-14 h-14 items-center justify-center rounded-2xl bg-white text-zlendo-teal shadow-sm group-hover:bg-zlendo-teal group-hover:text-white transition">
                                        <step.icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="mt-6 text-xl md:text-2xl font-black text-slate-900">{step.title}</h3>
                                    <p className="mt-4 font-medium leading-relaxed text-slate-600">{step.desc}</p>
                                </div>
                                <div className="mt-8">
                                    <Link href={SIGNUP_URL} className="inline-flex items-center gap-2 text-sm font-black text-zlendo-teal hover:text-teal-700">
                                        {step.cta} <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="px-4 py-12 lg:py-16 bg-zlendo-teal/5">
                <div className="container-custom mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-[48px] font-black leading-tight tracking-tighter text-slate-900 mb-6">Create a Bathroom Around the Way You Live</h2>
                            <p className="mt-4 mb-8 text-lg font-medium text-slate-600">Your bathroom should work for your everyday routine—not just look good.</p>
                            <div className="space-y-4">
                                {useCases.map((useCase, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveTab(idx)}
                                        className={`w-full text-left p-5 rounded-2xl border transition-all ${activeTab === idx ? 'border-zlendo-teal bg-white shadow-lg' : 'border-slate-200 bg-white/50 hover:bg-white'} flex gap-4`}
                                    >
                                        <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${activeTab === idx ? 'bg-zlendo-teal text-white' : 'bg-slate-100 text-slate-400'}`}>
                                            <useCase.icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className={`text-lg font-extrabold ${activeTab === idx ? 'text-zlendo-teal' : 'text-slate-800'}`}>{useCase.title}</h4>
                                            {activeTab === idx && <p className="mt-2 text-sm font-medium text-slate-600 leading-relaxed">{useCase.desc}</p>}
                                        </div>
                                    </button>
                                ))}
                            </div>
                            <div className="mt-10">
                                <Link href={SIGNUP_URL} className="inline-flex items-center gap-2 rounded-2xl bg-zlendo-teal px-8 py-4 font-black text-white hover:bg-teal-500 transition shadow-md hover:shadow-lg hover:-translate-y-0.5">
                                    Create My Bathroom Layout <ArrowRight className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="aspect-square w-full rounded-[32px] overflow-hidden bg-slate-200 shadow-2xl relative border-8 border-white">
                                <img src={useCases[activeTab].image} alt={useCases[activeTab].title} className="w-full h-full object-cover transition-opacity duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="px-4 py-12 lg:py-16 bg-white border-y border-slate-200">
                <div className="container-custom mx-auto max-w-7xl">
                    <div className="text-center mx-auto mb-16">
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-zlendo-teal">Discover the Advantages</p>
                        <h2 className="mt-4 text-3xl md:text-[48px] font-black leading-tight tracking-tighter text-slate-900">Why Use Zlendo Realty for Bathroom Design?</h2>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {benefits.map((item, index) => (
                            <div key={item.title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-7 hover:border-slate-300 transition">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-zlendo-teal shadow-sm"><item.icon className="h-6 w-6" /></div>
                                <h3 className="mt-6 text-xl md:text-2xl font-black text-slate-900">{item.title}</h3>
                                <p className="mt-3 font-medium leading-relaxed text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link href={SIGNUP_URL} className="inline-flex items-center gap-2 rounded-2xl bg-zlendo-teal px-8 py-4 font-black text-white hover:bg-teal-500 transition shadow-md">
                            Start My Bathroom Design <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Experts Section */}
            <section className="px-4 py-12 lg:py-16 bg-[#0d1917] text-white overflow-hidden relative">
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zlendo-teal/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="container-custom mx-auto max-w-7xl relative z-10">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div className="text-center lg:text-left">
                            <div className="mx-auto lg:mx-0 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-teal-300 shadow-md backdrop-blur">
                                <HeartHandshake className="h-8 w-8" />
                            </div>
                            <h2 className="text-3xl md:text-[48px] font-black leading-tight tracking-tighter">Need Help With Your Bathroom Design?</h2>
                            <p className="mt-6 text-xl font-medium leading-relaxed text-slate-300">
                                From floor plan to 3D design and renovation, our professional team can help you create a bathroom that fits your space, style, and needs.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Link href="/business#demo-form" className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-zlendo-teal px-8 py-4 font-black text-white transition hover:bg-teal-500">
                                    <PhoneCall className="w-5 h-5" /> Talk to Our Team
                                </Link>
                                <Link href="/contact" className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-transparent px-8 py-4 font-black text-white transition hover:bg-white/10">
                                    <UserCheck className="w-5 h-5" /> Plan Renovation
                                </Link>
                            </div>
                        </div>
                        <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[450px]">
                            <div className="absolute inset-0 rounded-[32px] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,.4)]">
                                <img src="/assets/global/floor-plan-consultation.webp" alt="Bathroom Design Consultation" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="px-4 py-12 lg:py-16 bg-[#f7f8f6]">
                <div className="container-custom mx-auto max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-[48px] font-black leading-tight tracking-tighter">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <details key={index} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                                <summary className="flex items-center justify-between font-black text-slate-800 text-lg">
                                    {faq.q}
                                    <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 transition group-open:rotate-180 group-open:bg-zlendo-teal group-open:text-white">
                                        <ChevronRight className="h-5 w-5 rotate-90 transition-transform" />
                                    </span>
                                </summary>
                                <p className="mt-4 font-medium leading-relaxed text-slate-600">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
