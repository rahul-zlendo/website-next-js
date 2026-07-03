'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    publishedAt: string;
    imageUrl: string;
    imageAlt: string;
}

function getReadTime(excerpt: string): string {
    const words = excerpt.split(/\s+/).length;
    const minutes = Math.max(2, Math.ceil(words * 5 / 60)); // estimate full article ~5x excerpt
    return `${minutes} min read`;
}

function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
}

export default function RecentBlogPosts() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await fetch('/api/blog/recent');
                if (!res.ok) throw new Error('Failed to fetch');
                const data: { posts: BlogPost[] } = await res.json();
                setPosts(data.posts);
            } catch (err) {
                console.error('Error fetching blog posts:', err);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    if (loading) {
        return (
            <section className="py-8 md:py-12 bg-gradient-to-b from-white to-slate-50/50">
                <div className="container-custom px-6 max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="h-4 w-32 bg-slate-200 rounded-full mx-auto mb-4 animate-pulse" />
                        <div className="h-10 w-80 bg-slate-200 rounded-2xl mx-auto mb-3 animate-pulse" />
                        <div className="h-5 w-64 bg-slate-100 rounded-xl mx-auto animate-pulse" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="rounded-3xl overflow-hidden bg-white shadow-sm border border-black/[0.04]">
                                <div className="aspect-video bg-slate-200 animate-pulse" />
                                <div className="p-6 space-y-3">
                                    <div className="h-4 w-24 bg-slate-200 rounded-full animate-pulse" />
                                    <div className="h-6 w-full bg-slate-200 rounded-xl animate-pulse" />
                                    <div className="h-4 w-3/4 bg-slate-100 rounded-lg animate-pulse" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (posts.length === 0) return null;

    return (
        <section className="py-8 md:py-12 bg-gradient-to-b from-white to-slate-50/50">
            <div className="container-custom px-6 max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <span className="inline-block text-xs font-black uppercase tracking-[0.3em] text-zlendo-teal bg-zlendo-teal/5 px-5 py-2 rounded-full mb-4">
                        From Our Blog
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black font-nunito text-zlendo-grey-dark mb-3">
                        Latest Insights & Updates
                    </h2>
                    <p className="text-lg font-semibold text-zlendo-grey-medium opacity-60 max-w-xl mx-auto">
                        Design tips, industry news, and product updates from the Zlendo Realty team.
                    </p>
                </motion.div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.a
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="group rounded-3xl overflow-hidden bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.04] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-zlendo-teal/20 transition-all duration-500 flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative aspect-video overflow-hidden bg-slate-100">
                                {post.imageUrl ? (
                                    <img
                                        src={post.imageUrl}
                                        alt={post.imageAlt}
                                        className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-zlendo-teal/10 to-zlendo-teal/5 flex items-center justify-center">
                                        <span className="text-zlendo-teal/30 text-6xl font-black">Z</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                {/* Meta */}
                                <div className="flex items-center gap-4 text-xs font-semibold text-zlendo-grey-medium/60 mb-3">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {formatDate(post.publishedAt)}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5" />
                                        {getReadTime(post.excerpt)}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-black font-nunito text-zlendo-grey-dark leading-snug mb-3 group-hover:text-zlendo-teal transition-colors duration-300 line-clamp-2">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-sm font-medium text-zlendo-grey-medium opacity-60 line-clamp-2 mb-4 flex-1">
                                    {post.excerpt}
                                </p>

                                {/* Read More */}
                                <div className="flex items-center gap-2 text-sm font-black text-zlendo-teal group-hover:gap-3 transition-all duration-300">
                                    Read Article
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center mt-8"
                >
                    <a
                        href="/blog"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-zlendo-teal/5 text-zlendo-teal rounded-2xl font-black text-base hover:bg-zlendo-teal hover:text-white transition-all duration-300 group"
                    >
                        View All Blog Posts
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
