import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { getPostBySlug, getAllPostSlugs, getPosts } from '@/lib/wordpress/api';
import { generatePostMetadata, generateBlogPostingJsonLd, generateBreadcrumbJsonLd, absoluteUrl, stripHtml } from '@/lib/wordpress';
import { BlogPostBody, BlogBreadcrumb, BlogCard } from '@/components/blog';

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

// Generate static params for all posts
export async function generateStaticParams() {
    const slugs = await getAllPostSlugs();
    return slugs.map((slug) => ({ slug }));
}

// Generate metadata for the post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
            description: 'The requested blog post could not be found.',
        };
    }

    return generatePostMetadata(post);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // Get related posts from same category
    const { posts: relatedPosts } = await getPosts(1, 3);
    const filteredRelatedPosts = relatedPosts
        .filter((p) => p.slug !== post.slug)
        .slice(0, 3);

    // JSON-LD Schemas
    const blogPostingJsonLd = generateBlogPostingJsonLd(post);
    const breadcrumbJsonLd = generateBreadcrumbJsonLd([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: stripHtml(post.title), url: `/blog/${post.slug}` },
    ]);

    const shareUrl = absoluteUrl(`/blog/${post.slug}`);
    const shareText = encodeURIComponent(stripHtml(post.title));

    return (
        <>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <div className="w-full bg-white pt-12">
                <div className="container-custom px-6 lg:px-12">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-black/5 rounded-full text-sm font-semibold text-zlendo-grey-dark hover:bg-white hover:shadow-md transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>
                </div>
            </div>

            <article className="container-custom px-6 lg:px-12 py-8 lg:py-12">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <BlogBreadcrumb
                        items={[
                            { label: 'Blog', href: '/blog' },
                            { label: stripHtml(post.title) },
                        ]}
                    />
                </div>

                {/* Article Header */}
                <header className="max-w-4xl mx-auto mb-12">
                    {/* Categories */}
                    {post.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.categories.map((category) => (
                                <Link
                                    key={category.id}
                                    href={`/blog/category/${category.slug}`}
                                    className="px-4 py-1.5 bg-zlendo-teal/10 text-zlendo-teal text-sm font-semibold rounded-full hover:bg-zlendo-teal hover:text-white transition-all"
                                >
                                    {category.name}
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Title */}
                    <h1
                        className="text-3xl md:text-4xl lg:text-5xl font-nunito font-black text-zlendo-grey-dark leading-tight mb-8"
                        dangerouslySetInnerHTML={{ __html: post.title }}
                    />

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-black/10">
                        {/* Author */}
                        <div className="flex items-center gap-3">
                            {post.author.avatar ? (
                                <Image
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    width={44}
                                    height={44}
                                    className="rounded-full"
                                />
                            ) : (
                                <div className="w-11 h-11 rounded-full bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal font-bold">
                                    <User className="w-5 h-5" />
                                </div>
                            )}
                            <div>
                                <p className="font-semibold text-zlendo-grey-dark">{post.author.name}</p>
                                <p className="text-sm text-zlendo-grey-medium">Author</p>
                            </div>
                        </div>

                        {/* Date */}
                        <div className="flex items-center gap-2 text-zlendo-grey-medium">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={post.date}>{post.dateFormatted}</time>
                        </div>

                        {/* Reading Time */}
                        <div className="flex items-center gap-2 text-zlendo-grey-medium">
                            <Clock className="w-4 h-4" />
                            <span>{post.readingTime} min read</span>
                        </div>

                        {/* Share Buttons */}
                        <div className="flex items-center gap-2 ml-auto">
                            <span className="text-sm text-zlendo-grey-medium mr-2">Share:</span>
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-white border border-black/10 flex items-center justify-center text-zlendo-grey-medium hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all"
                                aria-label="Share on Facebook"
                            >
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a
                                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-white border border-black/10 flex items-center justify-center text-zlendo-grey-medium hover:bg-black hover:text-white hover:border-black transition-all"
                                aria-label="Share on Twitter"
                            >
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a
                                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${shareText}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-white border border-black/10 flex items-center justify-center text-zlendo-grey-medium hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all"
                                aria-label="Share on LinkedIn"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </header>

                {/* Article Content */}
                <div className="max-w-4xl mx-auto mb-16">
                    <BlogPostBody content={post.content} />
                </div>

                {/* Tags */}
                {post.tags.length > 0 && (
                    <div className="max-w-4xl mx-auto mb-16 pb-12 border-b border-black/10">
                        <div className="flex flex-wrap items-center gap-3">
                            <Tag className="w-5 h-5 text-zlendo-grey-medium" />
                            {post.tags.map((tag) => (
                                <Link
                                    key={tag.id}
                                    href={`/blog/tag/${tag.slug}`}
                                    className="px-4 py-2 bg-zlendo-grey-light text-zlendo-grey-dark text-sm font-medium rounded-full hover:bg-zlendo-teal/10 hover:text-zlendo-teal transition-all"
                                >
                                    #{tag.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Related Posts */}
                {filteredRelatedPosts.length > 0 && (
                    <section className="max-w-6xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-nunito font-bold text-zlendo-grey-dark mb-8">
                            Related Articles
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {filteredRelatedPosts.map((relatedPost, index) => (
                                <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
                            ))}
                        </div>
                    </section>
                )}
            </article>

            {/* Back to Blog CTA */}
            <div className="bg-zlendo-mint/30 py-12">
                <div className="container-custom px-6 lg:px-12 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-zlendo-teal text-white font-bold rounded-full shadow-lg shadow-zlendo-teal/30 hover:scale-105 transition-all"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to All Articles
                    </Link>
                </div>
            </div>
        </>
    );
}
