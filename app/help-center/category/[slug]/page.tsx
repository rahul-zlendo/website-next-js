import type { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getHcPostsByCategory, getHcCategoryBySlug, getAllHcCategorySlugs } from '@/lib/wordpress/helpcenter';
import { generateCategoryMetadata, generateBreadcrumbJsonLd } from '@/lib/wordpress';
import { HcCard } from '@/components/helpcenter';
import { Pagination, BlogHero, BlogBreadcrumb } from '@/components/blog';

interface CategoryPageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ page?: string }>;
}

export async function generateStaticParams() {
    const slugs = await getAllHcCategorySlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params, searchParams }: CategoryPageProps): Promise<Metadata> {
    const { slug } = await params;
    const { page: pageStr } = await searchParams;
    const page = parseInt(pageStr || '1', 10);
    const category = await getHcCategoryBySlug(slug);

    if (!category) {
        return { title: 'Category Not Found' };
    }

    // Reuse generateCategoryMetadata but for help-center
    const metadata = generateCategoryMetadata(category.name, category.slug, page);
    return {
        ...metadata,
        alternates: {
            canonical: `https://zlendorealty.com/help-center/category/${slug}${page > 1 ? `?page=${page}` : ''}`,
        },
    };
}

async function CategoryPostsGrid({ categorySlug, page }: { categorySlug: string; page: number }) {
    const { posts, totalPages, totalPosts } = await getHcPostsByCategory(categorySlug, page, 9);

    if (posts.length === 0) {
        return (
            <div className="text-center py-20 flex flex-col items-center">
                <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-4xl mb-6">📂</div>
                <h2 className="text-2xl font-black text-zlendo-grey-dark mb-4">No articles in this category</h2>
                <p className="text-zlendo-grey-medium max-w-sm mx-auto font-medium">
                    There are currently no help articles published in this category.
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

            <Pagination currentPage={page} totalPages={totalPages} basePath={`/help-center/category/${categorySlug}`} />
        </>
    );
}

export default async function HcCategoryPage({ params, searchParams }: CategoryPageProps) {
    const { slug } = await params;
    const { page: pageStr } = await searchParams;
    const page = parseInt(pageStr || '1', 10);
    const category = await getHcCategoryBySlug(slug);

    if (!category) {
        notFound();
    }

    const breadcrumbJsonLd = generateBreadcrumbJsonLd([
        { name: 'Home', url: '/' },
        { name: 'Help Center', url: '/help-center' },
        { name: category.name, url: `/help-center/category/${category.slug}` },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <BlogHero
                title={category.name}
                subtitle={`Help guides, tutorials and documentation filtered by: ${category.name}`}
                badge="Help Center"
            />

            <div className="container-custom px-6 lg:px-12 py-6">
                <BlogBreadcrumb
                    items={[
                        { label: 'Help Center', href: '/help-center' },
                        { label: category.name },
                    ]}
                />
            </div>

            <section className="container-custom px-6 lg:px-12 pb-32">
                <Suspense fallback={<div>Loading category articles...</div>}>
                    <CategoryPostsGrid categorySlug={slug} page={page} />
                </Suspense>
            </section>
        </>
    );
}
