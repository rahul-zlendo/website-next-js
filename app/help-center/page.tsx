import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getHcPosts, getTotalHcPostPages } from '@/lib/wordpress/helpcenter';
import { generateHcListMetadata } from '@/lib/wordpress/hc-seo';
import { HcCard } from '@/components/helpcenter';
import { Pagination, BlogHero, BlogBreadcrumb } from '@/components/blog';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://zlendorealty.com';

interface HcPageProps {
    searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ searchParams }: HcPageProps): Promise<Metadata> {
    const params = await searchParams;
    const page = parseInt(params.page || '1', 10);
    return generateHcListMetadata(page);
}

async function HcPostsGrid({ page }: { page: number }) {
    const { posts, totalPages, totalPosts } = await getHcPosts(page, 9);

    if (posts.length === 0) {
        return (
            <div className="text-center py-20 flex flex-col items-center">
                <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-4xl mb-6">🔍</div>
                <h2 className="text-2xl font-black text-zlendo-grey-dark mb-4">No articles found</h2>
                <p className="text-zlendo-grey-medium max-w-sm mx-auto font-medium">
                    We couldn't find any help articles at the moment. Please check back later or contact our support team.
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

            <Pagination currentPage={page} totalPages={totalPages} basePath="/help-center" />
        </>
    );
}

export default async function HelpCenterPage({ searchParams }: HcPageProps) {
    const params = await searchParams;
    const page = parseInt(params.page || '1', 10);

    return (
        <>
            <BlogHero
                title="Help Center"
                subtitle="Everything you need to know about using Zlendo Realty. Browse our guides, tutorials, and technical documentation."
                badge="Help Center"
            />

            <div className="container-custom px-6 lg:px-12 py-6">
                <BlogBreadcrumb items={[{ label: 'Help Center' }]} />
            </div>

            <section className="container-custom px-6 lg:px-12 pb-32">
                <Suspense fallback={<div>Loading help articles...</div>}>
                    <HcPostsGrid page={page} />
                </Suspense>
            </section>

            {/* Support CTA */}
            <section className="bg-zlendo-grey-dark py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-zlendo-teal/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="container-custom px-6 lg:px-12 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Still need assistance?</h2>
                    <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-medium">
                        Our support team is available 24/7 to help you with any questions or technical issues.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-zlendo-teal text-white font-black rounded-full hover:scale-105 transition-all shadow-xl shadow-zlendo-teal/20"
                    >
                        Contact Support
                    </a>
                </div>
            </section>
        </>
    );
}
