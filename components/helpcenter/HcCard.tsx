'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlogPost } from '@/lib/wordpress/types';

interface HcCardProps {
    post: BlogPost;
    index?: number;
}

export default function HcCard({ post, index = 0 }: HcCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-[32px] bg-white border border-black/[0.05] shadow-lg shadow-black/[0.03] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-zlendo-teal/[0.08] hover:border-zlendo-teal/20"
        >
            <Link href={`/help-center/${post.slug}`} className="block h-full">
                {/* Content */}
                <div className="p-8">
                    {/* Category & Icon */}
                    <div className="flex items-center justify-between mb-6">
                        {post.categories.length > 0 ? (
                            <span
                                className="px-3 py-1 bg-white text-zlendo-teal text-[10px] font-black uppercase tracking-widest rounded-lg border border-zlendo-teal/20 shadow-sm"
                                dangerouslySetInnerHTML={{ __html: post.categories[0].name }}
                            />
                        ) : (
                            <span className="px-4 py-1.5 bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-full">
                                Help Guide
                            </span>
                        )}
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-zlendo-grey-medium group-hover:bg-zlendo-teal group-hover:text-white transition-all duration-500">
                            <FileText className="w-5 h-5" />
                        </div>
                    </div>

                    {/* Title */}
                    <h2
                        className="text-xl font-nunito font-black text-zlendo-grey-dark group-hover:text-zlendo-teal transition-colors duration-300 line-clamp-2 mb-4 leading-snug"
                        dangerouslySetInnerHTML={{ __html: post.title }}
                    />

                    {/* Excerpt */}
                    <p className="text-zlendo-grey-medium opacity-70 line-clamp-3 mb-8 text-sm leading-relaxed">
                        {post.excerpt}
                    </p>

                    {/* Meta & Link */}
                    <div className="flex items-center justify-between pt-6 border-t border-black/[0.03]">
                        <div className="flex items-center gap-4 text-[10px] font-bold text-zlendo-grey-medium uppercase tracking-wider opacity-60">
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-3 h-3" />
                                {post.dateFormatted}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-3 h-3" />
                                {post.readingTime} min read
                            </span>
                        </div>

                        <span className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-zlendo-teal group-hover:text-white transition-all duration-500">
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}
