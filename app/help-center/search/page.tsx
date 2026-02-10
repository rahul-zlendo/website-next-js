import type { Metadata } from 'next';
import { searchDocs } from '@/lib/helpcenter';
import { HelpBreadcrumb, ArticleCard } from '@/components/helpcenter';
import { Pagination } from '@/components/blog';
import { Search, FileQuestion } from 'lucide-react';

interface PageProps {
    searchParams: Promise<{ q?: string; page?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
    const { q } = await searchParams;
    return {
        title: q ? `Search: "${q}" | Help Center` : 'Search | Help Center',
        description: `Search results for "${q || ''}" in the Zlendo Realty Help Center.`,
    };
}

export default async function HelpSearchPage({ searchParams }: PageProps) {
    const resolvedSearch = await searchParams;
    const query = resolvedSearch.q || '';
    const page = parseInt(resolvedSearch.page || '1', 10);

    const results = query ? await searchDocs(query, page, 12) : null;

    return (
        <>
            {/* Breadcrumb bar */}
            <div className="bg-white border-b border-black/5">
                <div className="container-custom px-6 lg:px-12">
                    <HelpBreadcrumb items={[{ label: `Search: "${query}"` }]} />
                </div>
            </div>

            {/* Results */}
            <section className="py-10 md:py-14">
                <div className="container-custom px-6 lg:px-12">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-zlendo-teal/10 flex items-center justify-center">
                            <Search className="w-5 h-5 text-zlendo-teal" />
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-nunito font-bold text-zlendo-grey-dark">
                                {query ? `Search results for "${query}"` : 'Search Help Center'}
                            </h1>
                            {results && (
                                <p className="text-sm text-zlendo-grey-medium">
                                    {results.totalDocs} {results.totalDocs === 1 ? 'result' : 'results'} found
                                </p>
                            )}
                        </div>
                    </div>

                    {results && results.articles.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {results.articles.map((article) => (
                                    <ArticleCard key={article.id} article={article} />
                                ))}
                            </div>

                            {results.totalPages > 1 && (
                                <div className="mt-12">
                                    <Pagination
                                        currentPage={page}
                                        totalPages={results.totalPages}
                                        basePath={`/help-center/search?q=${encodeURIComponent(query)}`}
                                    />
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-20">
                            <FileQuestion className="w-16 h-16 text-zlendo-grey-medium/20 mx-auto mb-4" />
                            <h2 className="text-xl font-bold text-zlendo-grey-dark mb-2">
                                {query ? 'No results found' : 'Enter a search query'}
                            </h2>
                            <p className="text-zlendo-grey-medium max-w-md mx-auto">
                                {query
                                    ? `We couldn't find any articles matching "${query}". Try different keywords.`
                                    : 'Use the search bar above to find help articles.'}
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
