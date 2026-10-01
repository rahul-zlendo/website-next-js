'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowRight,
    Check,
    Bed,
    BookOpen,
    Gamepad2,
    Package,
    Paintbrush,
    Maximize2,
    Users,
    Briefcase,
    Layers,
    Sparkles,
    PhoneCall,
    UserCheck,
    ChevronRight,
    Sofa
} from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';

export default function KidsRoomLayoutsClient() {
    const [activeTab, setActiveTab] = useState(0);

    const zones = [
        {
            title: 'Sleeping Zone',
            desc: 'Create a comfortable sleeping area with single beds, bunk beds, kids beds or other furniture that fits your room.',
            icon: Bed,
            cta: 'Plan Sleeping Area'
        },
        {
            title: 'Study Zone',
            desc: 'Add a dedicated desk and chair to create a comfortable space for homework, reading and creative activities.',
            icon: BookOpen,
            cta: 'Design Study Zone'
        },
        {
            title: 'Play Zone',
            desc: 'Keep an open area for toys, games and activities so children have room to move and play.',
            icon: Gamepad2,
            cta: 'Create Play Space'
        },
        {
            title: 'Storage Zone',
            desc: 'Plan wardrobes, shelves, cabinets, toy storage and other solutions to keep the room organized.',
            icon: Package,
            cta: 'Organize Storage'
        },
        {
            title: 'Creative Zone',
            desc: 'Personalize the room with colors, décor, artwork, rugs and accessories that reflect your child\'s personality.',
            icon: Paintbrush,
            cta: 'Customize Décor'
        },
        {
            title: 'Relaxation Zone',
            desc: 'Design a cozy corner with soft seating or bean bags where your child can relax, read, and unwind.',
            icon: Sofa,
            cta: 'Design Relaxing Corner'
        }
    ];

    const spaces = [
        { title: 'Small Kids Room Layouts', desc: 'Make the most of limited floor space with smart furniture placement, vertical storage and multifunctional furniture.', icon: Maximize2, image: '/assets/global/kids-room-spaces/small-kids-room.jpg' },
        { title: 'Shared Kids Room Layouts', desc: 'Design comfortable spaces for two children with bunk beds, separate study areas, shared storage and clearly defined personal zones.', icon: Users, image: '/assets/global/kids-room-spaces/shared-kids-room.jpg' },
        { title: 'Bedroom with Study Area', desc: 'Combine sleeping and studying without making the room feel crowded. Position the desk, bed and storage to maintain a practical flow.', icon: Briefcase, image: '/assets/global/kids-room-spaces/study-area-room.jpg' },
        { title: 'Kids Room with Play Area', desc: 'Create an open central area for toys and activities while keeping furniture around the edges of the room.', icon: Gamepad2, image: '/assets/global/kids-room-spaces/play-area-room.jpg' },
        { title: 'Kids Room with Smart Storage', desc: 'Use wardrobes, shelves, cabinets and storage furniture to reduce clutter while keeping everyday items easy to access.', icon: Layers, image: '/assets/global/kids-room-spaces/smart-storage-room.jpg' },
    ];

    const faqs = [
        { q: 'What is a good layout for a kids room?', a: 'A good kids room layout balances sleeping, studying, playing, storage and movement. Position larger furniture first and keep enough open space for comfortable circulation and activities.' },
        { q: 'How can I design a small kids room?', a: 'For a small kids room, consider multifunctional furniture, vertical storage, compact desks and layouts that keep the center of the room open.' },
        { q: 'Can I create a kids room layout in 3D?', a: 'Yes. Zlendo Realty allows you to create and customize room layouts and visualize your design in 3D, helping you understand the final space before implementation.' },
        { q: 'Can I design a shared room for two kids?', a: 'Yes. You can plan shared sleeping, study and storage areas while creating enough personal space for each child.' },
        { q: 'What furniture should I include in a kids room?', a: 'Common essentials include a bed, wardrobe, study desk, chair, storage units, shelves and lighting. Depending on the room size, you can also include a play area, reading corner or additional storage.' },
        { q: 'How do I make a kids room more organized?', a: 'Divide the room into functional zones and provide dedicated storage for clothes, toys, books and school supplies. Using shelves, wardrobes, cabinets and storage furniture can help reduce clutter.' },
        { q: 'Can I customize the colors and décor?', a: 'Yes. You can personalize your room with different furniture, materials, colors and decorative elements to match your child\'s interests and style.' },
        { q: 'Can Zlendo Realty help with kids room floor plans?', a: 'Yes. You can create room layouts using walls and predefined room shapes, add doors and windows, and arrange furniture and décor within the space.' },
    ];

    return (
        <div className="overflow-hidden bg-[#f7f8f6] font-nunito text-slate-900">

            {/* Hero Section */}
            <section className="relative border-b border-slate-200 bg-[#0d1917] px-4 pb-12 pt-12 text-white lg:pb-16 lg:pt-16">
                <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_20%_20%,rgba(41,176,161,.25),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,96,58,.15),transparent_40%)]" />
                <div className="container-custom relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
                    <div>
                        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-teal-200 backdrop-blur">
                            <Sparkles className="h-4 w-4" /> Kids Room Layouts
                        </div>
                        <h1 className="max-w-3xl text-[28px] md:text-[42px] lg:text-[52px] font-black leading-[1.08] tracking-tight md:tracking-tighter">
                            Design a Kids Room <br /><span className="text-teal-300">They’ll Love to Grow Into</span>
                        </h1>
                        <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-slate-300 lg:text-xl">
                            Create a kids room that balances sleep, study, play, storage and creativity with Zlendo Realty.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link href={SIGNUP_URL} className="flex items-center justify-center gap-2 rounded-2xl bg-zlendo-teal px-7 py-4 font-black text-white transition hover:bg-teal-500">
                                Design Your Kids Room <ArrowRight className="h-5 w-5" />
                            </Link>
                            <Link href="/contact" className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-7 py-4 font-black text-white backdrop-blur transition hover:bg-white/10">
                                Hire a Designer
                            </Link>
                        </div>
                    </div>

                    <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-[500px]">
                        {/* Added a placeholder image slot, we can replace with actual later if user provides */}
                        <div className="absolute inset-0 rounded-[32px] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,.4)]">
                            <img src="/assets/global/kids-bedroom-design.jpg" alt="Kids Room Design" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="px-4 py-12 lg:py-16">
                <div className="container-custom mx-auto max-w-5xl text-center">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-zlendo-teal">Plan with Zlendo Realty</p>
                    <h2 className="mt-4 text-3xl md:text-[48px] font-black leading-tight tracking-tighter">Create a Kids Room That Works for Everyday Life</h2>
                    <p className="mt-6 text-lg font-medium leading-relaxed text-slate-600">
                        A great kids room is more than a bed and a few colorful accessories. It needs space for sleeping, studying, playing, storing toys and growing with your child. Zlendo Realty helps you plan every part of the room in one place. Start with your room dimensions, arrange the layout, add furniture and storage, and experiment with different design ideas until everything feels right.
                    </p>
                    <p className="mt-4 text-lg font-medium leading-relaxed text-slate-600 font-semibold text-slate-800">
                        From a compact bedroom to a shared sibling room, create a layout that makes better use of every inch.
                    </p>
                    <div className="mt-10 text-center">
                        <Link href={SIGNUP_URL} className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 font-black text-white hover:bg-slate-800 transition shadow-xl shadow-slate-900/10 hover:-translate-y-0.5">
                            Start Designing Free <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Zones Section */}
            <section className="bg-white px-4 py-12 lg:py-16 border-y border-slate-200">
                <div className="container-custom mx-auto max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-[48px] font-black leading-tight tracking-tighter">Plan Every Zone of Your Kids Room</h2>
                        <p className="mt-5 text-lg font-medium text-slate-600">A well-planned children\'s bedroom should make it easy to move, play, study and stay organized.</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {zones.map((zone, index) => (
                            <div key={index} className="group rounded-[28px] border border-slate-200 bg-slate-50 p-8 flex flex-col justify-between transition hover:-translate-y-1 hover:border-zlendo-teal hover:shadow-[0_20px_55px_rgba(15,23,42,.08)]">
                                <div>
                                    <div className="flex w-14 h-14 items-center justify-center rounded-2xl bg-white text-zlendo-teal shadow-sm group-hover:bg-zlendo-teal group-hover:text-white transition">
                                        <zone.icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="mt-6 text-xl md:text-2xl font-black text-slate-900">{zone.title}</h3>
                                    <p className="mt-4 font-medium leading-relaxed text-slate-600">{zone.desc}</p>
                                </div>
                                <div className="mt-8">
                                    <Link href={SIGNUP_URL} className="inline-flex items-center gap-2 text-sm font-black text-zlendo-teal hover:text-teal-700">
                                        {zone.cta} <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Spaces Layout Section */}
            <section className="px-4 py-12 lg:py-16 bg-zlendo-teal/5">
                <div className="container-custom mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-[48px] font-black leading-tight tracking-tighter text-slate-900 mb-6">Design Kids Room Layouts for Every Space</h2>
                            <div className="space-y-4">
                                {spaces.map((space, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveTab(idx)}
                                        className={`w-full text-left p-5 rounded-2xl border transition-all ${activeTab === idx ? 'border-zlendo-teal bg-white shadow-lg' : 'border-slate-200 bg-white/50 hover:bg-white'} flex gap-4`}
                                    >
                                        <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${activeTab === idx ? 'bg-zlendo-teal text-white' : 'bg-slate-100 text-slate-400'}`}>
                                            <space.icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className={`text-lg font-extrabold ${activeTab === idx ? 'text-zlendo-teal' : 'text-slate-800'}`}>{space.title}</h4>
                                            {activeTab === idx && <p className="mt-2 text-sm font-medium text-slate-600 leading-relaxed">{space.desc}</p>}
                                        </div>
                                    </button>
                                ))}
                            </div>
                            <div className="mt-10">
                                <Link href={SIGNUP_URL} className="inline-flex items-center gap-2 rounded-2xl bg-zlendo-teal px-8 py-4 font-black text-white hover:bg-teal-500 transition shadow-md hover:shadow-lg hover:-translate-y-0.5">
                                    Create My Kids Room Layout <ArrowRight className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="aspect-square w-full rounded-[32px] overflow-hidden bg-slate-200 shadow-2xl relative border-8 border-white">
                                <img src={spaces[activeTab].image} alt={spaces[activeTab].title} className="w-full h-full object-cover transition-opacity duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visualize Before Building Section */}
            <section className="px-4 py-12 lg:py-16 bg-[#0d1917] text-white overflow-hidden relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zlendo-teal/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="container-custom mx-auto max-w-5xl text-center relative z-10">
                    <h2 className="text-3xl md:text-[48px] font-black leading-tight tracking-tighter">Visualize Your Kids Room Before You Build It</h2>
                    <p className="mt-6 text-xl font-medium leading-relaxed text-slate-300">
                        Wondering whether the bed will fit beside the wardrobe? Not sure where the study desk should go? Want to compare two different layouts?
                    </p>
                    <p className="mt-4 text-xl font-extrabold text-teal-300">Instead of imagining the result, see it first.</p>
                    <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
                        Zlendo Realty lets you turn your room plan into a visual design, helping you understand furniture placement, proportions and the overall look of the space before making real-world changes.
                    </p>
                    <div className="mt-10">
                        <Link href={SIGNUP_URL} className="inline-flex items-center gap-2 rounded-2xl bg-zlendo-teal px-8 py-4 font-black text-white hover:bg-teal-500 transition shadow-lg shadow-teal-900/50 hover:scale-105 active:scale-95 text-lg">
                            Visualize Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Experts Section */}
            <section className="px-4 py-12 lg:py-16 border-y border-slate-200 bg-white">
                <div className="container-custom mx-auto max-w-7xl">
                    <div className="bg-slate-50 rounded-[40px] p-10 lg:p-20 border border-slate-200 shadow-xl shadow-slate-200/50">
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                            <div className="text-center lg:text-left">
                                <div className="mx-auto lg:mx-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-zlendo-teal shadow-md mb-6">
                                    <Users className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl md:text-[48px] font-black leading-tight tracking-tighter text-slate-900">Let Our Experts Design Your Kids Room</h2>
                                <p className="mt-6 text-lg font-medium text-slate-600">
                                    From smart furniture placement to study, play, and storage zones, the Zlendo Realty Team helps you create a kids room layout that works for your family.
                                </p>
                                <p className="mt-2 text-lg text-slate-900 font-bold">Talk to our experts and hire a professional designer to bring your kids room vision to life.</p>

                                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                    <Link href="/business#demo-form" className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 font-black text-white transition hover:bg-slate-800">
                                        <PhoneCall className="w-5 h-5" /> Talk to an Expert
                                    </Link>
                                    <Link href="/contact" className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl border-2 border-slate-900 bg-transparent px-8 py-4 font-black text-slate-900 transition hover:bg-slate-50">
                                        <UserCheck className="w-5 h-5" /> Hire a Designer
                                    </Link>
                                </div>
                            </div>
                            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[450px]">
                                <div className="absolute inset-0 rounded-[32px] overflow-hidden border border-slate-200 shadow-lg">
                                    <img src="/assets/global/floor-plan-discussion.webp" alt="Room Design Consultation" className="w-full h-full object-cover" />
                                </div>
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
