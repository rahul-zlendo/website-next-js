import type { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getHcPostsByTag, getHcTagBySlug, getAllHcTagSlugs } from '@/lib/wordpress/helpcenter';
import { generateTagMetadata, generateBreadcrumbJsonLd } from '@/lib/wordpress';
import { HcCard } from '@/components/helpcenter';
import { Pagination, BlogHero, BlogBreadcrumb } from '@/components/blog';

interface TagPageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ page?: string }>;
}

export async function generateStaticParams() {
    const slugs = await getAllHcTagSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params, searchParams }: TagPageProps): Promise<Metadata> {
    const { slug } = await params;
    const { page: pageStr } = await searchParams;
    const page = parseInt(pageStr || '1', 10);
    const tag = await getHcTagBySlug(slug);

    if (!tag) {
        return { title: 'Tag Not Found' };
    }

    // Reuse generateTagMetadata but for help-center
    const metadata = generateTagMetadata(tag.name, tag.slug, page);
    return {
        ...metadata,
        alternates: {
            canonical: `https://zlendorealty.com/help-center/tag/${slug}${page > 1 ? `?page=${page}` : ''}`,
        },
    };
}

async function TagPostsGrid({ tagSlug, page }: { tagSlug: string; page: number }) {
    const { posts, totalPages, totalPosts } = await getHcPostsByTag(tagSlug, page, 9);

    if (posts.length === 0) {
        return (
            <div className="text-center py-20 flex flex-col items-center">
                <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-4xl mb-6">🏷️</div>
                <h2 className="text-2xl font-black text-zlendo-grey-dark mb-4">No articles with this tag</h2>
                <p className="text-zlendo-grey-medium max-w-sm mx-auto font-medium">
                    There are currently no help articles published with this tag.
                </p>
            </div>
        );
    }

    return (
        <>
            <div className="mb-12 flex items-center justify-between">
                <p className="text-sm font-bold text-zlendo-grey-medium uppercase tracking-widest opacity-60">
                    Showing <span className="text-zlendo-teal">{posts.length}</span> of {totalPosts} Guides
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {posts.map((post, index) => (
                    <HcCard
                        key={post.id}
                        post={post}
                        index={index}
                    />
                ))}
            </div>

            <Pagination currentPage={page} totalPages={totalPages} basePath={`/help-center/tag/${tagSlug}`} />
        </>
    );
}

export default async function HcTagPage({ params, searchParams }: TagPageProps) {
    const { slug } = await params;
    const { page: pageStr } = await searchParams;
    const page = parseInt(pageStr || '1', 10);
    const tag = await getHcTagBySlug(slug);

    if (!tag) {
        notFound();
    }

    const breadcrumbJsonLd = generateBreadcrumbJsonLd([
        { name: 'Home', url: '/' },
        { name: 'Help Center', url: '/help-center' },
        { name: `Tag: ${tag.name}`, url: `/help-center/tag/${tag.slug}` },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <BlogHero
                title={`Tag: ${tag.name}`}
                subtitle={`Help guides and documentation related to: ${tag.name}`}
                badge="Help Center"
            />

            <div className="container-custom px-6 lg:px-12 py-6">
                <BlogBreadcrumb
                    items={[
                        { label: 'Help Center', href: '/help-center' },
                        { label: `Tag: ${tag.name}` },
                    ]}
                />
            </div>

            <section className="container-custom px-6 lg:px-12 pb-32">
                <Suspense fallback={<div>Loading tagged articles...</div>}>
                    <TagPostsGrid tagSlug={slug} page={page} />
                </Suspense>
            </section>
        </>
    );
}
