'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface HelpHeroProps {
    title?: string;
    subtitle?: string;
}

export default function HelpHero({
    title = 'How can we help you?',
    subtitle = 'Search our knowledge base or browse categories below'
}: HelpHeroProps) {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/help-center/search?q=${encodeURIComponent(query.trim())}`);
        }
    };

    return (
        <section className="relative bg-gradient-to-br from-zlendo-teal via-[#0a8a7a] to-[#065f54] py-16 md:py-24 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-zlendo-orange/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }} />
            </div>

            <div className="container-custom px-6 lg:px-12 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    {/* Badge */}
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold text-white/90 mb-6">
                        <span className="w-2 h-2 rounded-full bg-zlendo-orange animate-pulse" />
                        Zlendo Help Center
                    </span>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-nunito font-black text-white leading-tight mb-4">
                        {title}
                    </h1>

                    <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                        {subtitle}
                    </p>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-focus-within:bg-white/30 transition-all" />
                            <div className="relative flex items-center bg-white rounded-2xl shadow-2xl shadow-black/20 overflow-hidden">
                                <Search className="w-5 h-5 text-zlendo-grey-medium ml-5 shrink-0" />
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search for articles, tutorials, FAQs..."
                                    className="flex-1 px-4 py-4 md:py-5 text-base md:text-lg text-zlendo-grey-dark placeholder:text-zlendo-grey-medium/60 focus:outline-none bg-transparent"
                                />
                                <button
                                    type="submit"
                                    className="px-6 md:px-8 py-3 md:py-4 mr-2 bg-zlendo-teal text-white font-bold rounded-xl hover:bg-zlendo-teal/90 transition-all shrink-0"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
