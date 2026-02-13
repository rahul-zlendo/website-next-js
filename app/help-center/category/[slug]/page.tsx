import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDocCategoryBySlug, getDocsByCategory, getAllDocCategorySlugs } from '@/lib/helpcenter';
import { generateCategoryMetadata, generateBreadcrumbJsonLd } from '@/lib/helpcenter/seo';
import { HelpBreadcrumb, ArticleCard } from '@/components/helpcenter';
import { Pagination } from '@/components/blog';
import { BookOpen } from 'lucide-react';

interface PageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const category = await getDocCategoryBySlug(slug);
    if (!category) return { title: 'Category Not Found' };
    return generateCategoryMetadata(category);
}

export async function generateStaticParams() {
    const slugs = await getAllDocCategorySlugs();
    return slugs.map((slug) => ({ slug }));
}

export default async function HelpCategoryPage({ params, searchParams }: PageProps) {
    const { slug } = await params;
    const resolvedSearch = await searchParams;
    const page = parseInt(resolvedSearch.page || '1', 10);

    const [category, docsData] = await Promise.all([
        getDocCategoryBySlug(slug),
        getDocsByCategory(slug, page, 12),
    ]);

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

            {/* Breadcrumb bar */}
            <div className="bg-white border-b border-black/5">
                <div className="container-custom px-6 lg:px-12">
                    <HelpBreadcrumb items={[{ label: category.name }]} />
                </div>
            </div>

            {/* Category Header */}
            <section className="bg-gradient-to-br from-zlendo-teal/5 to-transparent py-12 md:py-16">
                <div className="container-custom px-6 lg:px-12">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center">
                            <BookOpen className="w-7 h-7 text-zlendo-teal" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-nunito font-black text-zlendo-grey-dark">
                                {category.name}
                            </h1>
                            {category.description && (
                                <p className="text-zlendo-grey-medium mt-1">
                                    {category.description}
                                </p>
                            )}
                        </div>
                    </div>
                    <p className="text-sm text-zlendo-grey-medium">
                        {docsData.totalDocs} {docsData.totalDocs === 1 ? 'article' : 'articles'} found
                    </p>
                </div>
            </section>

            {/* Articles */}
            <section className="py-10 md:py-14">
                <div className="container-custom px-6 lg:px-12">
                    {docsData.articles.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {docsData.articles.map((article) => (
                                    <ArticleCard key={article.id} article={article} showCategory={false} />
                                ))}
                            </div>

                            {docsData.totalPages > 1 && (
                                <div className="mt-12">
                                    <Pagination
                                        currentPage={page}
                                        totalPages={docsData.totalPages}
                                        basePath={`/help-center/category/${slug}`}
                                    />
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-16">
                            <BookOpen className="w-12 h-12 text-zlendo-grey-medium/30 mx-auto mb-4" />
                            <p className="text-lg text-zlendo-grey-medium">
                                No articles found in this category yet.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
