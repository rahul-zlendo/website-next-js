import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { getPostsByTag, getTagBySlug, getAllTagSlugs } from '@/lib/wordpress/api';
import { generateTagMetadata, generateBreadcrumbJsonLd } from '@/lib/wordpress/seo';
import { BlogCard, Pagination, BlogBreadcrumb } from '@/components/blog';
import { Hash } from 'lucide-react';

interface TagPageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ page?: string }>;
}

// Don't pre-render tag pages at build time to avoid overwhelming the WordPress API.
export async function generateStaticParams() {
    return [];
}

// Generate metadata for the tag
export async function generateMetadata({ params, searchParams }: TagPageProps): Promise<Metadata> {
    const { slug } = await params;
    const search = await searchParams;
    const page = parseInt(search.page || '1', 10);

    const tag = await getTagBySlug(slug);

    if (!tag) {
        return {
            title: 'Tag Not Found',
            description: 'The requested tag could not be found.',
        };
    }

    return generateTagMetadata(tag.name, tag.slug, page);
}

async function TagPostsGrid({ slug, page }: { slug: string; page: number }) {
    const tag = await getTagBySlug(slug);

    if (!tag) {
        notFound();
    }

    const { posts, totalPages, totalPosts } = await getPostsByTag(slug, page, 9);

    if (posts.length === 0) {
        return (
            <div className="text-center py-20">
                <div className="text-6xl mb-6">🏷️</div>
                <h2 className="text-2xl font-bold text-zlendo-grey-dark mb-4">No posts with this tag</h2>
                <p className="text-zlendo-grey-medium">
                    Check back soon for new content tagged with #{tag.name}!
                </p>
            </div>
        );
    }

    return (
        <>
            {/* Posts Count */}
            <div className="mb-8 flex items-center justify-between">
                <p className="text-zlendo-grey-medium">
                    Showing <span className="font-semibold text-zlendo-grey-dark">{posts.length}</span> of{' '}
                    <span className="font-semibold text-zlendo-grey-dark">{totalPosts}</span> articles
                </p>
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {posts.map((post, index) => (
                    <BlogCard key={post.id} post={post} index={index} />
                ))}
            </div>

            {/* Pagination */}
            <Pagination currentPage={page} totalPages={totalPages} basePath={`/blog/tag/${slug}`} />
        </>
    );
}

function TagPostsSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="rounded-[24px] bg-white border border-black/5 overflow-hidden animate-pulse">
                    <div className="aspect-[16/10] bg-gray-200" />
                    <div className="p-6">
                        <div className="h-6 w-full bg-gray-200 rounded mb-2" />
                        <div className="h-6 w-3/4 bg-gray-200 rounded mb-4" />
                        <div className="h-4 w-full bg-gray-200 rounded mb-2" />
                        <div className="h-4 w-2/3 bg-gray-200 rounded" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default async function TagPage({ params, searchParams }: TagPageProps) {
    const { slug } = await params;
    const search = await searchParams;
    const page = parseInt(search.page || '1', 10);

    const tag = await getTagBySlug(slug);

    if (!tag) {
        notFound();
    }

    // JSON-LD Breadcrumb
    const breadcrumbJsonLd = generateBreadcrumbJsonLd([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: `#${tag.name}`, url: `/blog/tag/${slug}` },
    ]);

    return (
        <>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-zlendo-orange/5 via-white to-zlendo-mint/20 py-16 md:py-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-zlendo-orange/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                <div className="container-custom px-6 lg:px-12 relative z-10">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-zlendo-orange/10 flex items-center justify-center text-zlendo-orange">
                                <Hash className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-wider text-zlendo-orange">Tag</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-nunito font-black text-zlendo-grey-dark mb-4">
                            #{tag.name}
                        </h1>

                        {tag.description && (
                            <p className="text-lg text-zlendo-grey-medium opacity-80">
                                {tag.description}
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="container-custom px-6 lg:px-12 py-6">
                <BlogBreadcrumb
                    items={[
                        { label: 'Blog', href: '/blog' },
                        { label: `#${tag.name}` },
                    ]}
                />
            </div>

            {/* Main Content */}
            <section className="container-custom px-6 lg:px-12 pb-20">
                <Suspense fallback={<TagPostsSkeleton />}>
                    <TagPostsGrid slug={slug} page={page} />
                </Suspense>
            </section>
        </>
    );
}
