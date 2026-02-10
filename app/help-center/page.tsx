import type { Metadata } from 'next';
import { getDocCategories, getDocs, getFaqCategories } from '@/lib/helpcenter';
import { generateHelpCenterMetadata, generateBreadcrumbJsonLd, generateFaqJsonLd } from '@/lib/helpcenter/seo';
import { HelpHero, CategoryGrid, ArticleCard, FaqAccordion } from '@/components/helpcenter';
import Link from 'next/link';
import { ArrowRight, BookOpen, MessageCircleQuestion } from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
    return generateHelpCenterMetadata();
}

export default async function HelpCenterPage() {
    const [categories, recentDocs, faqCategories] = await Promise.all([
        getDocCategories(),
        getDocs(1, 6),
        getFaqCategories(),
    ]);

    // Breadcrumb JSON-LD
    const breadcrumbJsonLd = generateBreadcrumbJsonLd([
        { name: 'Home', url: '/' },
        { name: 'Help Center', url: '/help-center' },
    ]);

    // FAQ JSON-LD (flatten all FAQs)
    const allFaqs = faqCategories.flatMap((cat) => cat.faqs);
    const faqJsonLd = allFaqs.length > 0 ? generateFaqJsonLd(allFaqs) : null;

    return (
        <>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            {faqJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
            )}

            {/* Hero */}
            <HelpHero />

            {/* Categories */}
            <section className="py-16 md:py-20">
                <div className="container-custom px-6 lg:px-12">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-zlendo-teal/10 flex items-center justify-center">
                            <BookOpen className="w-5 h-5 text-zlendo-teal" />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-nunito font-bold text-zlendo-grey-dark">
                                Browse by Category
                            </h2>
                            <p className="text-zlendo-grey-medium text-sm">
                                Find what you need organized by topic
                            </p>
                        </div>
                    </div>

                    <CategoryGrid categories={categories} />
                </div>
            </section>

            {/* Recent Articles */}
            {recentDocs.articles.length > 0 && (
                <section className="py-12 md:py-16 bg-white border-y border-black/5">
                    <div className="container-custom px-6 lg:px-12">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-zlendo-orange/10 flex items-center justify-center">
                                    <BookOpen className="w-5 h-5 text-zlendo-orange" />
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-nunito font-bold text-zlendo-grey-dark">
                                        Recent Articles
                                    </h2>
                                    <p className="text-zlendo-grey-medium text-sm">
                                        Latest documentation and guides
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {recentDocs.articles.map((article) => (
                                <ArticleCard key={article.id} article={article} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ Section */}
            {faqCategories.length > 0 && (
                <section className="py-16 md:py-20">
                    <div className="container-custom px-6 lg:px-12">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                                <MessageCircleQuestion className="w-5 h-5 text-violet-600" />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-nunito font-bold text-zlendo-grey-dark">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-zlendo-grey-medium text-sm">
                                    Quick answers to common questions
                                </p>
                            </div>
                        </div>

                        <FaqAccordion faqCategories={faqCategories} />
                    </div>
                </section>
            )}

            {/* Contact CTA */}
            <section className="py-16 bg-gradient-to-r from-zlendo-teal to-[#065f54]">
                <div className="container-custom px-6 lg:px-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-nunito font-bold text-white mb-4">
                        Still need help?
                    </h2>
                    <p className="text-white/70 mb-8 max-w-lg mx-auto">
                        Can&apos;t find what you&apos;re looking for? Our support team is here to help.
                    </p>
                    <Link
                        href="/in/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zlendo-teal font-bold rounded-xl hover:bg-white/90 hover:shadow-xl transition-all"
                    >
                        Contact Support
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
