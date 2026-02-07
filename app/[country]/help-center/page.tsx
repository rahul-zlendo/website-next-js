'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, PlayCircle, Cpu, Box, Layout, MessageSquare, ArrowRight, HelpCircle, FileText, Zap, Shield, X, Clock, Users } from 'lucide-react';
import { useCountry } from '@/lib/context/CountryContext';

const categories = [
    {
        id: 'getting-started',
        title: 'Getting Started',
        icon: Zap,
        description: 'New to Zlendo? Start here to learn the basics.',
        topics: ['Account Setup', 'Interface Walkthrough', 'Basic Controls', 'File Management']
    },
    {
        id: 'design-build',
        title: 'Design & Build',
        icon: Layout,
        description: 'Master the 2D/3D editor and building tools.',
        topics: ['Drawing Walls', 'Adding Openings', 'Working with Levels', 'Group & Edit']
    },
    {
        id: 'furniture-materials',
        title: 'Catalog & Styling',
        icon: Box,
        description: 'Customize your space with items and textures.',
        topics: ['Browsing Catalog', 'Customizing Textures', 'Grouping Items', 'Search Tips']
    },
    {
        id: 'rendering',
        title: 'Rendering & Export',
        icon: Cpu,
        description: 'Generate photorealistic images and videos.',
        topics: ['Render Settings', 'Lighting Tips', 'Bulk Rendering', 'Export Formats']
    },
    {
        id: 'account-billing',
        title: 'Account & Billing',
        icon: Shield,
        description: 'Manage your subscription and payments.',
        topics: ['Plan Comparison', 'Invoice History', 'Team Management', 'Security']
    },
    {
        id: 'enterprise-api',
        title: 'Enterprise & API',
        icon: MessageSquare,
        description: 'Technical resources for business partners.',
        topics: ['API Integration', 'White-labeling', 'SDK Overview', 'Custom Catalogs']
    }
];

const popularArticles = [
    { title: 'How to convert 2D plans to 3D models', category: 'Design & Build' },
    { title: 'Best settings for photorealistic renders', category: 'Rendering' },
    { title: 'Understanding Vastu optimization tools', category: 'Design & Build' },
    { title: 'Exporting your projects to CAD/DXF', category: 'Rendering' },
    { title: 'How to manage team collaborators', category: 'Account & Billing' },
    { title: 'Using the AI Designer for instant rooms', category: 'Getting Started' }
];

export default function HelpCenterPage() {
    const { getPath } = useCountry();
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="min-h-screen bg-slate-50 font-nunito">
            {/* Hero Section */}
            <section className="bg-zlendo-grey-dark pt-32 pb-24 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zlendo-teal/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

                <div className="container-custom px-6 relative z-10">
                    {/* Breadcrumbs */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest mb-12 justify-center"
                    >
                        <Link href={getPath('/')} className="hover:text-zlendo-teal transition-colors">Home</Link>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-white">Help Center</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight">
                            How can we <span className="text-zlendo-teal">help?</span>
                        </h1>
                        <p className="text-xl text-white/60 font-medium mb-12 max-w-2xl mx-auto">
                            Search our knowledge base or browse categories below to find answers to your questions.
                        </p>

                        <div className="max-w-3xl mx-auto relative group">
                            <div className="absolute inset-0 bg-zlendo-teal/20 blur-2xl rounded-3xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
                            <div className="relative">
                                <Search className="absolute left-7 top-1/2 -translate-y-1/2 w-6 h-6 text-zlendo-grey-medium opacity-40 group-focus-within:text-zlendo-teal group-focus-within:opacity-100 transition-all" />
                                <input
                                    type="text"
                                    placeholder="Search for articles, features, or tutorials..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full h-20 pl-18 pr-40 rounded-[24px] bg-white/5 backdrop-blur-xl border border-white/10 text-white placeholder:text-white/30 focus:bg-white focus:text-zlendo-grey-dark focus:outline-none focus:ring-0 transition-all font-bold text-lg shadow-2xl"
                                />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
                                    {searchQuery && (
                                        <button
                                            onClick={() => setSearchQuery('')}
                                            className="p-3 text-white/40 hover:text-white transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    )}
                                    <button className="bg-zlendo-teal text-white px-10 py-4 rounded-2xl font-black hover:bg-[#008f72] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-zlendo-teal/20">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap justify-center gap-6 items-center">
                            <span className="text-white/30 text-xs font-black uppercase tracking-widest">Popular Searches:</span>
                            {['2D to 3D', 'Rendering', 'AI Styling', 'Billing'].map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => setSearchQuery(tag)}
                                    className="text-sm font-bold text-white/60 hover:text-zlendo-teal transition-all flex items-center gap-1.5 group"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-zlendo-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Support Channels */}
            <div className="container-custom px-6 -mt-16 mb-32 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-10 rounded-[40px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.06)] border border-black/[0.03] flex flex-col items-center text-center gap-6 group cursor-pointer hover:border-zlendo-teal/20 transition-all duration-500 overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 group-hover:bg-blue-500/10 transition-colors" />
                        <div className="w-20 h-20 rounded-[28px] bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                            <FileText className="w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-zlendo-grey-dark mb-2">Documentation</h3>
                            <p className="text-sm font-bold text-zlendo-grey-medium opacity-60 max-w-[180px]">Full API, SDK & Feature technical guides</p>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-zlendo-teal group-hover:text-white transition-all duration-500">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </motion.div>

                    <motion.a
                        href="https://www.youtube.com/playlist?list=PLetnELr5c_JVwUtuFKM9wGjGKrKPrGmsa"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -10 }}
                        className="bg-white p-10 rounded-[40px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.06)] border border-black/[0.03] flex flex-col items-center text-center gap-6 group cursor-pointer hover:border-zlendo-teal/20 transition-all duration-500 overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-zlendo-teal/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 group-hover:bg-zlendo-teal/10 transition-colors" />
                        <div className="w-20 h-20 rounded-[28px] bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal group-hover:bg-zlendo-teal group-hover:text-white transition-all duration-500 shadow-sm">
                            <PlayCircle className="w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-zlendo-grey-dark mb-2">Tutorials</h3>
                            <p className="text-sm font-bold text-zlendo-grey-medium opacity-60 max-w-[180px]">Step-by-step video courses and live demos</p>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-zlendo-teal group-hover:text-white transition-all duration-500">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </motion.a>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-10 rounded-[40px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.06)] border border-black/[0.03] flex flex-col items-center text-center gap-6 group cursor-pointer hover:border-zlendo-teal/20 transition-all duration-500 overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 group-hover:bg-purple-500/10 transition-colors" />
                        <div className="w-20 h-20 rounded-[28px] bg-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 shadow-sm">
                            <MessageSquare className="w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-zlendo-grey-dark mb-2">Community</h3>
                            <p className="text-sm font-bold text-zlendo-grey-medium opacity-60 max-w-[180px]">Join thousands of designers in our discord</p>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-zlendo-teal group-hover:text-white transition-all duration-500">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Categories Grid */}
            <section className="container-custom px-6 mb-32">
                <div className="flex items-end justify-between mb-16">
                    <div>
                        <h2 className="text-4xl font-black text-zlendo-grey-dark mb-3">Browse by Category</h2>
                        <p className="text-xl font-bold text-zlendo-grey-medium opacity-60">Everything you need to master the Zlendo Realty ecosystem</p>
                    </div>
                    <Link href={getPath('/help-center')} className="group flex items-center gap-3 bg-white px-8 py-4 rounded-2xl border border-black/5 font-black text-zlendo-teal hover:bg-zlendo-teal hover:text-white hover:border-zlendo-teal transition-all duration-300 shadow-sm hover:shadow-xl">
                        View all <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-10 rounded-[40px] border border-black/[0.03] hover:border-zlendo-teal/30 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] transition-all group flex flex-col h-full"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-zlendo-grey-dark mb-8 group-hover:bg-zlendo-teal group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm">
                                <cat.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-zlendo-grey-dark mb-4">{cat.title}</h3>
                            <p className="text-base font-bold text-zlendo-grey-medium opacity-60 mb-8 leading-relaxed">
                                {cat.description}
                            </p>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {cat.topics.map(topic => (
                                    <li key={topic}>
                                        <button className="flex items-center gap-3 text-sm font-bold text-zlendo-grey-dark hover:text-zlendo-teal transition-colors group/link w-full text-left">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover/link:bg-zlendo-teal group-hover/link:scale-150 transition-all" />
                                            {topic}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                                <Link href={getPath('/help-center')} className="font-black text-zlendo-teal text-sm flex items-center gap-2 group/btn">
                                    Browse all topics
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{cat.topics.length} Articles</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Popular Articles & FAQ */}
            <section className="bg-white py-32">
                <div className="container-custom px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Popular Articles */}
                        <div>
                            <div className="flex items-center gap-3 mb-12">
                                <div className="p-3 rounded-2xl bg-zlendo-teal/10 text-zlendo-teal">
                                    <HelpCircle className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-black text-zlendo-grey-dark">Popular Articles</h2>
                            </div>
                            <div className="space-y-4">
                                {popularArticles.map((article, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 10, backgroundColor: '#fff' }}
                                        className="p-8 rounded-[32px] bg-slate-50 border border-transparent hover:border-zlendo-teal/10 shadow-sm hover:shadow-xl hover:shadow-black/[0.04] transition-all cursor-pointer group flex items-center justify-between gap-6"
                                    >
                                        <div className="flex items-center gap-6">
                                            <div className="w-12 h-12 rounded-2xl bg-white border border-black/[0.03] flex items-center justify-center text-zlendo-grey-medium group-hover:text-zlendo-teal group-hover:scale-110 transition-all duration-500">
                                                <FileText className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-zlendo-teal">
                                                        {article.category}
                                                    </span>
                                                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                                                    <span className="text-[10px] font-bold text-slate-400">5 min read</span>
                                                </div>
                                                <h4 className="text-lg font-black text-zlendo-grey-dark group-hover:text-zlendo-teal transition-colors">
                                                    {article.title}
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 shadow-sm">
                                            <ArrowRight className="w-4 h-4 text-zlendo-teal" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Support */}
                        <div className="relative bg-zlendo-grey-dark rounded-[48px] p-12 flex flex-col items-center text-center overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-zlendo-teal/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 blur-[60px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="w-20 h-20 rounded-3xl bg-zlendo-teal text-white flex items-center justify-center mb-8 shadow-2xl shadow-zlendo-teal/20 mx-auto">
                                    <MessageSquare className="w-10 h-10" />
                                </div>
                                <h2 className="text-3xl font-black text-white mb-4">Still need help?</h2>
                                <p className="text-xl font-medium text-white/60 mb-10 max-w-sm mx-auto">
                                    Can't find what you're looking for? Our support team is here to assist you 24/7.
                                </p>
                                <div className="flex justify-center">
                                    <Link
                                        href={getPath('/contact')}
                                        className="bg-zlendo-teal text-white px-12 py-5 rounded-full font-black text-lg hover:shadow-2xl hover:shadow-zlendo-teal/40 hover:-translate-y-1 transition-all"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                                <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-zlendo-teal" />
                                        <span className="text-xs font-bold text-white/40">Response: {'<'} 2h</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4 text-zlendo-teal" />
                                        <span className="text-xs font-bold text-white/40">24/7 Support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
