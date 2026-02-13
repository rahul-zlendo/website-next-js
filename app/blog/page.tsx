import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getPosts, getTotalPostPages } from '@/lib/wordpress/api';
import { generateBlogListMetadata, generateBlogJsonLd, generateBreadcrumbJsonLd } from '@/lib/wordpress/seo';
import { BlogCard, Pagination, BlogHero, BlogBreadcrumb } from '@/components/blog';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://zlendorealty.com';

interface BlogPageProps {
    searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ searchParams }: BlogPageProps): Promise<Metadata> {
    const params = await searchParams;
    const page = parseInt(params.page || '1', 10);
    const baseMetadata = await generateBlogListMetadata(page);

    // Get total pages for rel next/prev
    const { totalPages } = await getTotalPostPages(9);

    // Build canonical and pagination link tags
    const canonicalUrl = page === 1 ? `${BASE_URL}/blog` : `${BASE_URL}/blog?page=${page}`;

    const alternates: Metadata['alternates'] = {
        canonical: canonicalUrl,
    };

    // Build rel prev/next links for crawlers
    const otherMeta: Array<{ rel: string; href: string }> = [];
    if (page > 1) {
        const prevUrl = page === 2 ? `${BASE_URL}/blog` : `${BASE_URL}/blog?page=${page - 1}`;
        otherMeta.push({ rel: 'prev', href: prevUrl });
    }
    if (page < totalPages) {
        otherMeta.push({ rel: 'next', href: `${BASE_URL}/blog?page=${page + 1}` });
    }

    return {
        ...baseMetadata,
        alternates,
        other: {
            ...(baseMetadata as Record<string, unknown>).other as Record<string, string> | undefined,
            // These will be rendered as <link> tags by Next.js
            ...(otherMeta.length > 0 ? {
                'link-prev': page > 1 ? (page === 2 ? `${BASE_URL}/blog` : `${BASE_URL}/blog?page=${page - 1}`) : '',
                'link-next': page < totalPages ? `${BASE_URL}/blog?page=${page + 1}` : '',
            } : {}),
        },
    };
}

async function BlogPostsGrid({ page }: { page: number }) {
    const { posts, totalPages, totalPosts } = await getPosts(page, 9);

    if (posts.length === 0) {
        return (
            <div className="text-center py-20">
                <div className="text-6xl mb-6">📝</div>
                <h2 className="text-2xl font-bold text-zlendo-grey-dark mb-4">No posts yet</h2>
                <p className="text-zlendo-grey-medium">
                    Check back soon for exciting content about home design and architecture!
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
                    <BlogCard
                        key={post.id}
                        post={post}
                        featured={page === 1 && index === 0}
                        index={index}
                    />
                ))}
            </div>

            {/* Pagination */}
            <Pagination currentPage={page} totalPages={totalPages} basePath="/blog" />
        </>
    );
}

function BlogPostsSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="rounded-[24px] bg-white border border-black/5 overflow-hidden animate-pulse">
                    <div className="aspect-[16/10] bg-gray-200" />
                    <div className="p-6">
                        <div className="flex gap-4 mb-4">
                            <div className="h-4 w-24 bg-gray-200 rounded" />
                            <div className="h-4 w-20 bg-gray-200 rounded" />
                        </div>
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

export default async function BlogPage({ searchParams }: BlogPageProps) {
    const params = await searchParams;
    const page = parseInt(params.page || '1', 10);

    // Get total pages for rel prev/next links
    const { totalPages } = await getTotalPostPages(9);

    // JSON-LD Schemas
    const blogJsonLd = generateBlogJsonLd();
    const breadcrumbJsonLd = generateBreadcrumbJsonLd([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
    ]);

    // Build rel prev/next URLs
    const prevUrl = page > 1 ? (page === 2 ? `${BASE_URL}/blog` : `${BASE_URL}/blog?page=${page - 1}`) : null;
    const nextUrl = page < totalPages ? `${BASE_URL}/blog?page=${page + 1}` : null;

    return (
        <>
            {/* Rel prev/next link tags for search engine pagination */}
            {prevUrl && <link rel="prev" href={prevUrl} />}
            {nextUrl && <link rel="next" href={nextUrl} />}

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            {/* Hero Section */}
            <BlogHero
                title="Insights & Inspiration"
                subtitle="Expert tips on home design, interior styling, architecture trends, and AI-powered floor planning to help you create your dream space."
            />

            {/* Breadcrumb */}
            <div className="container-custom px-6 lg:px-12 py-6">
                <BlogBreadcrumb items={[{ label: 'Blog' }]} />
            </div>

            {/* Main Content */}
            <section className="container-custom px-6 lg:px-12 pb-20">
                <Suspense fallback={<BlogPostsSkeleton />}>
                    <BlogPostsGrid page={page} />
                </Suspense>
            </section>
        </>
    );
}
