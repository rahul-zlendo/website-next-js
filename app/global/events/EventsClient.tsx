'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import axiosInstance from '../../../lib/services/config/axiosConfig';

const eventsData = [
    {
        id: 1,
        type: 'Webinar',
        title: 'AI-Driven Floor Planning',
        date: 'October 15, 2026',
        time: '10:00 AM PDT / 1:00 PM EDT',
        image: '',
        link: '/events/register'
    }
];

export default function EventsClient() {
    const [filter, setFilter] = useState<'All' | 'Events' | 'Webinars'>('All');
    const [events, setEvents] = useState<any[]>(eventsData);

    React.useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axiosInstance.get('/api/v1/Event/GetAllEvents');
                if (response.data && Array.isArray(response.data.data ? response.data.data : response.data)) {
                    const fetchedEvents = (response.data.data ? response.data.data : response.data).map((evt: any) => ({
                        id: evt.event_Id,
                        type: evt.typeId === 1 ? 'Event' : 'Webinar', // naive mapping
                        title: evt.event_Name,
                        date: evt.event_Date,
                        time: evt.event_Time,
                        image: evt.image,
                        link: '/events/register'
                    }));
                    setEvents(fetchedEvents);
                }
            } catch (error) {
                console.error('Failed to fetch events:', error);
            }
        };
        fetchEvents();
    }, []);

    const filteredEvents = events.filter(evt => {
        if (filter === 'All') return true;
        return evt.type === filter.slice(0, -1) || evt.type === filter; // basic plural check
    });

    return (
        <div className="min-h-screen bg-[#F6F7F9] font-nunito">

            {/* HEADER SECTION */}
            <section className="bg-white py-10 md:py-16 text-center border-b border-black/5">
                <div className="container-custom px-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-zlendo-grey-dark tracking-tight mb-8">
                        Live and Upcoming <span className="text-zlendo-teal">Events/Webinars</span>
                    </h1>

                    <div className="flex flex-wrap items-center justify-center gap-3 mx-auto mt-4">
                        {['All', 'Events', 'Webinars'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setFilter(tab as any)}
                                className={`px-8 py-2.5 md:px-12 md:py-3.5 rounded-full text-sm md:text-base font-black transition-all border ${filter === tab
                                    ? 'bg-zlendo-teal border-zlendo-teal text-white shadow-[0_8px_20px_rgba(26,188,156,0.3)] scale-105'
                                    : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* EVENT GRID SECTION */}
            <section className="py-16 md:py-20 lg:py-24">
                <div className="container-custom px-4 max-w-7xl mx-auto">
                    <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {filteredEvents.map((evt) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    key={evt.id}
                                    className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300 group"
                                >
                                    <div className="relative h-56 md:h-64 overflow-hidden bg-slate-900">
                                        {/* Fallback pattern if image is missing */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-zlendo-teal to-blue-600 opacity-20 group-hover:scale-105 transition-transform duration-700" />
                                        {evt.image && evt.image !== '/assets/global/default-event.webp' ? (
                                            <Image
                                                src={evt.image}
                                                alt={evt.title}
                                                fill
                                                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                                                <span className="text-3xl md:text-4xl font-black text-white/50 tracking-widest uppercase group-hover:scale-105 transition-transform duration-700 drop-shadow-md">
                                                    {evt.type}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-start gap-4 mb-6">
                                            <Calendar className="w-6 h-6 text-slate-400 flex-shrink-0 mt-1" />
                                            <div>
                                                <div className="font-bold text-slate-800 text-base">{evt.date}</div>
                                                <div className="text-sm font-bold text-slate-500 mt-1">{evt.time}</div>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-black text-zlendo-grey-dark leading-tight mb-8">
                                            {evt.title}
                                        </h3>

                                        <div className="mt-auto">
                                            <Link
                                                href={`${evt.link}?event=${encodeURIComponent(evt.title)}&eventId=${evt.id}`}
                                                className="inline-flex items-center gap-2 font-bold text-slate-600 hover:text-zlendo-teal transition-colors group/link text-lg"
                                            >
                                                Register for the {evt.type}
                                                <ArrowRight className="w-5 h-5 text-zlendo-teal group-hover/link:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                    {filteredEvents.length === 0 && (
                        <div className="text-center py-20 text-slate-500 font-bold text-lg">No events found for this category.</div>
                    )}
                </div>
            </section>

            {/* ON-DEMAND REDIRECTION SECTION (Dark Theme based on screenshot) */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-[#1D2128]">
                {/* Background Image mimicking server room / abstract tech */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/use-case/modern-architecture-studio.jpg"
                        alt="Servers Background"
                        fill
                        className="object-cover grayscale opacity-20 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D2128] via-[#1D2128]/80 to-[#1D2128]/30" />
                </div>

                <div className="relative z-10 container-custom px-4 text-center max-w-4xl mx-auto text-white">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight shadow-sm text-white drop-shadow-md">
                        On-Demand Webinars
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-200 font-medium leading-relaxed mb-10 max-w-3xl mx-auto drop-shadow-md">
                        Watch Zlendo Realty recorded webinars for in-depth discussions of current architectural workflows, AI-assisted planning issues and best practices.
                    </p>
                    <Link
                        href="/events/on-demand"
                        className="inline-block px-10 py-5 bg-zlendo-teal text-white font-black text-xl rounded-full hover:bg-teal-600 hover:scale-105 shadow-xl transition-all duration-300"
                    >
                        Browse On-Demand Webinars
                    </Link>
                </div>
            </section>

        </div>
    );
}
