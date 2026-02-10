import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getDocBySlug, getAllDocSlugs, getDocsByCategory } from '@/lib/helpcenter';
import { generateArticleMetadata, generateArticleJsonLd, generateBreadcrumbJsonLd } from '@/lib/helpcenter/seo';
import { ArticleBody, HelpBreadcrumb, ArticleCard } from '@/components/helpcenter';
import { Calendar, User, Tag, ArrowLeft, ChevronRight } from 'lucide-react';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = await getDocBySlug(slug);
    if (!article) {
        return { title: 'Article Not Found' };
    }
    return generateArticleMetadata(article);
}

export async function generateStaticParams() {
    const slugs = await getAllDocSlugs();
    return slugs.map((slug) => ({ slug }));
}

export default async function HelpArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const article = await getDocBySlug(slug);

    if (!article) {
        notFound();
    }

    // Get related articles from same category
    let relatedArticles: Awaited<ReturnType<typeof getDocsByCategory>>['articles'] = [];
    if (article.categories.length > 0) {
        const related = await getDocsByCategory(article.categories[0].slug, 1, 5);
        relatedArticles = related.articles.filter((a) => a.slug !== article.slug).slice(0, 4);
    }

    // JSON-LD
    const articleJsonLd = generateArticleJsonLd(article);
    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Help Center', url: '/help-center' },
    ];
    if (article.categories.length > 0) {
        breadcrumbItems.push({
            name: article.categories[0].name,
            url: `/help-center/category/${article.categories[0].slug}`,
        });
    }
    breadcrumbItems.push({ name: article.title, url: `/help-center/${article.slug}` });
    const breadcrumbJsonLd = generateBreadcrumbJsonLd(breadcrumbItems);

    return (
        <>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            {/* Top Bar */}
            <div className="bg-white border-b border-black/5">
                <div className="container-custom px-6 lg:px-12">
                    <HelpBreadcrumb
                        items={
                            article.categories.length > 0
                                ? [
                                    { label: article.categories[0].name, href: `/help-center/category/${article.categories[0].slug}` },
                                    { label: article.title },
                                ]
                                : [{ label: article.title }]
                        }
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="container-custom px-6 lg:px-12 py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
                    {/* Article Column */}
                    <article className="min-w-0">
                        {/* Back link */}
                        <Link
                            href="/help-center"
                            className="inline-flex items-center gap-2 text-sm text-zlendo-grey-medium hover:text-zlendo-teal transition-colors mb-6"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Help Center
                        </Link>

                        {/* Header */}
                        <header className="mb-8 pb-8 border-b border-black/5">
                            {/* Categories */}
                            {article.categories.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {article.categories.map((cat) => (
                                        <Link
                                            key={cat.id}
                                            href={`/help-center/category/${cat.slug}`}
                                            className="px-3 py-1 bg-zlendo-teal/10 text-zlendo-teal text-xs font-bold rounded-full hover:bg-zlendo-teal hover:text-white transition-all"
                                        >
                                            {cat.name}
                                        </Link>
                                    ))}
                                </div>
                            )}

                            <h1 className="text-3xl md:text-4xl font-nunito font-black text-zlendo-grey-dark leading-tight mb-4">
                                {article.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-zlendo-grey-medium">
                                <span className="flex items-center gap-1.5">
                                    <User className="w-4 h-4" />
                                    {article.author.name}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" />
                                    Last updated: {article.dateFormatted}
                                </span>
                            </div>
                        </header>

                        {/* Content */}
                        <ArticleBody content={article.content} />

                        {/* Tags */}
                        {article.tags.length > 0 && (
                            <div className="mt-10 pt-6 border-t border-black/5">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <Tag className="w-4 h-4 text-zlendo-grey-medium" />
                                    {article.tags.map((tag) => (
                                        <span
                                            key={tag.id}
                                            className="px-3 py-1 bg-black/5 text-zlendo-grey-medium text-xs font-medium rounded-full"
                                        >
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </article>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        {/* Related Articles */}
                        {relatedArticles.length > 0 && (
                            <div className="bg-white rounded-2xl border border-black/5 p-6 sticky top-24">
                                <h3 className="text-lg font-bold text-zlendo-grey-dark mb-4 flex items-center gap-2">
                                    Related Articles
                                </h3>
                                <div className="space-y-3">
                                    {relatedArticles.map((related) => (
                                        <Link
                                            key={related.id}
                                            href={`/help-center/${related.slug}`}
                                            className="group flex items-start gap-3 py-2"
                                        >
                                            <ChevronRight className="w-4 h-4 text-zlendo-grey-medium/50 shrink-0 mt-0.5 group-hover:text-zlendo-teal group-hover:translate-x-0.5 transition-all" />
                                            <span className="text-sm text-zlendo-grey-medium group-hover:text-zlendo-teal transition-colors line-clamp-2">
                                                {related.title}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                                {article.categories.length > 0 && (
                                    <Link
                                        href={`/help-center/category/${article.categories[0].slug}`}
                                        className="mt-4 block text-center text-sm font-semibold text-zlendo-teal hover:underline"
                                    >
                                        View all in {article.categories[0].name} →
                                    </Link>
                                )}
                            </div>
                        )}

                        {/* Need help card */}
                        <div className="bg-gradient-to-br from-zlendo-teal/10 to-zlendo-teal/5 rounded-2xl p-6 border border-zlendo-teal/10">
                            <h3 className="text-lg font-bold text-zlendo-grey-dark mb-2">
                                Need more help?
                            </h3>
                            <p className="text-sm text-zlendo-grey-medium mb-4">
                                Can&apos;t find what you need? Reach out to our team.
                            </p>
                            <Link
                                href="/in/contact"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-zlendo-teal text-white text-sm font-bold rounded-xl hover:bg-zlendo-teal/90 transition-all"
                            >
                                Contact Support
                                <ArrowLeft className="w-4 h-4 rotate-180" />
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
