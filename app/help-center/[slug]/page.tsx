import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin, HelpCircle } from 'lucide-react';
import { getHcPostBySlug, getAllHcPostSlugs, getHcPosts } from '@/lib/wordpress/helpcenter';
import { generateHcPostMetadata, generateHcPostJsonLd, generateBreadcrumbJsonLd, absoluteUrl, stripHtml } from '@/lib/wordpress';
import { BlogPostBody, BlogBreadcrumb } from '@/components/blog';
import { HcCard } from '@/components/helpcenter';

interface HcPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = await getAllHcPostSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: HcPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getHcPostBySlug(slug);

    if (!post) {
        return {
            title: 'Article Not Found',
            description: 'The requested help article could not be found.',
        };
    }

    return generateHcPostMetadata(post);
}

export default async function HcPostPage({ params }: HcPostPageProps) {
    const { slug } = await params;
    const post = await getHcPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // Get related articles
    const { posts: relatedPosts } = await getHcPosts(1, 3);
    const filteredRelatedPosts = relatedPosts
        .filter((p) => p.slug !== post.slug)
        .slice(0, 3);

    // JSON-LD Schemas
    const hcPostJsonLd = generateHcPostJsonLd(post);
    const breadcrumbJsonLd = generateBreadcrumbJsonLd([
        { name: 'Home', url: 'https://zlendorealty.com/' },
        { name: 'Help Center', url: '/help-center' },
        { name: stripHtml(post.title), url: `/help-center/${post.slug}` },
    ]);

    const shareUrl = absoluteUrl(`/help-center/${post.slug}`);
    const shareText = encodeURIComponent(stripHtml(post.title));

    return (
        <>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(hcPostJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <article className="container-custom px-6 lg:px-12 py-12 lg:py-20">
                {/* Breadcrumb */}
                <div className="mb-12">
                    <BlogBreadcrumb
                        items={[
                            { label: 'Help Center', href: '/help-center' },
                            { label: stripHtml(post.title) },
                        ]}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Content Column */}
                    <div className="lg:col-span-8">
                        {/* Article Header */}
                        <header className="mb-12">
                            {post.categories.length > 0 && (
                                <div className="flex flex-wrap gap-2.5 mb-8">
                                    {post.categories.map((category) => (
                                        <Link
                                            key={category.id}
                                            href={`/help-center/category/${category.slug}`}
                                            className="px-3 py-1 bg-white text-zlendo-teal text-[10px] font-black uppercase tracking-widest rounded-lg border border-zlendo-teal/20 shadow-sm hover:bg-zlendo-teal hover:text-white hover:border-zlendo-teal transition-all duration-300"
                                            dangerouslySetInnerHTML={{ __html: category.name }}
                                        />
                                    ))}
                                </div>
                            )}

                            <h1
                                className="text-3xl md:text-5xl lg:text-6xl font-nunito font-black text-zlendo-grey-dark leading-tight mb-8"
                                dangerouslySetInnerHTML={{ __html: post.title }}
                            />

                            <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-black/5">
                                <div className="flex items-center gap-2 text-sm font-bold text-zlendo-grey-medium uppercase tracking-wider">
                                    <Calendar className="w-4 h-4" />
                                    <time dateTime={post.date}>{post.dateFormatted}</time>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold text-zlendo-grey-medium uppercase tracking-wider">
                                    <Clock className="w-4 h-4" />
                                    <span>{post.readingTime} min read</span>
                                </div>
                            </div>
                        </header>

                        {/* Article Content */}
                        <div className="mb-16">
                            <BlogPostBody content={post.content} />
                        </div>

                        {/* Tags */}
                        {post.tags.length > 0 && (
                            <div className="pt-8 border-t border-black/5">
                                <div className="flex flex-wrap items-center gap-3">
                                    <Tag className="w-5 h-5 text-zlendo-grey-medium" />
                                    {post.tags.map((tag) => (
                                        <Link
                                            key={tag.id}
                                            href={`/help-center/tag/${tag.slug}`}
                                            className="px-4 py-2 bg-slate-50 text-zlendo-grey-dark text-xs font-bold rounded-full hover:bg-zlendo-teal/10 hover:text-zlendo-teal transition-all uppercase tracking-wider"
                                        >
                                            #{tag.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar / Sidebar Info */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 space-y-4">
                            {/* Share Box */}
                            <div className="bg-slate-50 rounded-[32px] p-6 border border-black/[0.03]">
                                <h3 className="text-lg font-black text-zlendo-grey-dark mb-4 flex items-center gap-3">
                                    <Share2 className="w-5 h-5 text-zlendo-teal" />
                                    Share Article
                                </h3>
                                <div className="flex gap-2">
                                    <a
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-xl bg-white border border-black/[0.05] flex items-center justify-center text-zlendo-grey-medium hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all"
                                    >
                                        <Facebook className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-xl bg-white border border-black/[0.05] flex items-center justify-center text-zlendo-grey-medium hover:bg-black hover:text-white hover:border-black transition-all"
                                    >
                                        <Twitter className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${shareText}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-xl bg-white border border-black/[0.05] flex items-center justify-center text-zlendo-grey-medium hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>

                            {/* Need More Help Box */}
                            <div className="bg-zlendo-teal rounded-[32px] p-6 text-white shadow-xl shadow-zlendo-teal/20">
                                <HelpCircle className="w-8 h-8 mb-4 opacity-60" />
                                <h3 className="text-xl font-black mb-3">Need more help?</h3>
                                <p className="text-white/80 mb-8 font-medium leading-relaxed">
                                    Can't find the answer you're looking for? Our team is here to help you.
                                </p>
                                <Link
                                    href="/contact"
                                    className="block w-full py-4 bg-white text-zlendo-teal text-center font-black rounded-2xl hover:bg-zlendo-grey-dark hover:text-white transition-all shadow-lg"
                                >
                                    Contact Support
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Articles */}
                {filteredRelatedPosts.length > 0 && (
                    <section className="mt-24 pt-24 border-t border-black/5">
                        <h2 className="text-3xl font-black text-zlendo-grey-dark mb-12">
                            Related Articles
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {filteredRelatedPosts.map((relatedPost, index) => (
                                <HcCard key={relatedPost.id} post={relatedPost} index={index} />
                            ))}
                        </div>
                    </section>
                )}
            </article>

            {/* Back to HC CTA */}
            <div className="bg-slate-50 py-16">
                <div className="container-custom px-6 lg:px-12 text-center">
                    <Link
                        href="/help-center"
                        className="inline-flex items-center gap-3 text-zlendo-teal font-black hover:gap-5 transition-all"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Help Center
                    </Link>
                </div>
            </div>
        </>
    );
}
