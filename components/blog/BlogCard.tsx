'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlogPost } from '@/lib/wordpress/types';

interface BlogCardProps {
    post: BlogPost;
    featured?: boolean;
    index?: number;
}

export default function BlogCard({ post, featured = false, index = 0 }: BlogCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`group relative overflow-hidden rounded-[24px] bg-white border border-black/[0.05] shadow-lg shadow-black/[0.03] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-zlendo-teal/[0.08] hover:border-zlendo-teal/20 ${featured ? 'md:col-span-2 md:row-span-2' : ''
                }`}
        >
            <Link href={`/blog/${post.slug}`} className="block h-full">
                {/* Image Container */}
                <div className={`relative overflow-hidden ${featured ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
                    {post.featuredImage ? (
                        <Image
                            src={post.featuredImage.url}
                            alt={post.featuredImage.alt}
                            fill
                            sizes={featured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            priority={featured}
                        />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-zlendo-teal/20 to-zlendo-orange/20 flex items-center justify-center">
                            <span className="text-6xl opacity-20">📝</span>
                        </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Category Badge */}
                    {post.categories.length > 0 && (
                        <div className="absolute top-4 left-4 z-10">
                            <span className="px-4 py-1.5 bg-white/95 backdrop-blur-sm text-zlendo-teal text-xs font-bold uppercase tracking-wide rounded-full shadow-lg">
                                {post.categories[0].name}
                            </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className={`p-6 ${featured ? 'md:p-8' : ''}`}>
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-zlendo-grey-medium opacity-70">
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.dateFormatted}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readingTime} min read
                        </span>
                    </div>

                    {/* Title */}
                    <h2
                        className={`font-nunito font-bold text-zlendo-grey-dark group-hover:text-zlendo-teal transition-colors duration-300 line-clamp-2 mb-3 ${featured ? 'text-2xl md:text-3xl' : 'text-xl'
                            }`}
                        dangerouslySetInnerHTML={{ __html: post.title }}
                    />

                    {/* Excerpt */}
                    <p
                        className={`text-zlendo-grey-medium opacity-80 line-clamp-3 mb-5 leading-relaxed ${featured ? 'text-base' : 'text-sm'
                            }`}
                    >
                        {post.excerpt}
                    </p>

                    {/* Author & Read More */}
                    <div className="flex items-center justify-between pt-4 border-t border-black/[0.05]">
                        <div className="flex items-center gap-3">
                            {post.author.avatar ? (
                                <Image
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    width={32}
                                    height={32}
                                    className="rounded-full"
                                />
                            ) : (
                                <div className="w-8 h-8 rounded-full bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal text-sm font-bold">
                                    {post.author.name.charAt(0)}
                                </div>
                            )}
                            <span className="text-sm font-semibold text-zlendo-grey-dark">
                                {post.author.name}
                            </span>
                        </div>

                        <span className="flex items-center gap-2 text-sm font-semibold text-zlendo-teal group-hover:gap-3 transition-all">
                            Read More
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}
