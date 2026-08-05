import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { readClient } from '@/lib/sanity/client';
import { imageUrl } from '@/lib/sanity/image';
import { blogPostsPageQuery, blogPostsCountQuery, POSTS_PER_PAGE } from '@/lib/sanity/queries';
import { BlogHero, Pagination } from '@/components/blog';

export const revalidate = 600; // 10 min ISR

const BASE_URL = 'https://zlendorealty.com';

export const metadata: Metadata = {
  title: 'Blog | Zlendo Realty',
  description:
    'Home design, vastu, interiors, construction and AI design insights from the Zlendo Realty team.',
  alternates: {
    canonical: `${BASE_URL}/blog`,
    languages: {
      'x-default': `${BASE_URL}/blog`,
      'en': `${BASE_URL}/blog`,
    }
  },
  openGraph: {
    title: 'Blog | Zlendo Realty',
    description:
      'Home design, vastu, interiors, construction and AI design insights from the Zlendo Realty team.',
    url: `${BASE_URL}/blog`,
    siteName: 'Zlendo Realty',
    type: 'website',
  },
};

interface PostCard {
  slug: string;
  title: string;
  excerpt?: string;
  publishedAt?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mainImage?: { asset?: any; alt?: string };
  categories?: string[];
  author?: string;
}

function formatDate(d?: string): string {
  if (!d) return '';
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const current = Math.max(1, parseInt(page || '1', 10) || 1);
  const start = (current - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const client = readClient;
  const [posts, total] = await Promise.all([
    client.fetch<PostCard[]>(blogPostsPageQuery, { start, end }),
    client.fetch<number>(blogPostsCountQuery),
  ]);
  const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE));

  return (
    <div className="flex-1 w-full bg-white">
      <BlogHero
        title="The Zlendo Realty Blog"
        subtitle="Home design, vastu, interiors and construction insights — from our team to your next project."
        badge="Our Blog"
      />

      <section className="container-custom px-6 lg:px-12 py-12 md:py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const img = imageUrl(post.mainImage, 800, 450, 'crop');
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-3xl overflow-hidden bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.04] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-zlendo-teal/20 transition-all duration-500"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  {img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={img}
                      alt={post.mainImage?.alt || post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-zlendo-teal/10 to-zlendo-teal/5 flex items-center justify-center">
                      <span className="text-zlendo-teal/30 text-6xl font-black">Z</span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs font-semibold text-zlendo-grey-medium/60 mb-3">
                    {post.categories?.[0] && (
                      <span className="text-zlendo-teal uppercase tracking-wide">{post.categories[0]}</span>
                    )}
                    {post.publishedAt && (
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(post.publishedAt)}
                      </span>
                    )}
                  </div>
                  <h2 className="text-lg font-black font-nunito text-zlendo-grey-dark leading-snug mb-3 group-hover:text-zlendo-teal transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-sm font-medium text-zlendo-grey-medium line-clamp-3 mb-4 flex-1">
                      {post.excerpt}
                    </p>
                  )}
                  <span className="flex items-center gap-2 text-sm font-black text-zlendo-teal group-hover:gap-3 transition-all duration-300 mt-auto">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {posts.length === 0 && (
          <p className="text-center text-zlendo-grey-medium py-20">No posts found.</p>
        )}

        <div className="mt-14">
          <Pagination currentPage={current} totalPages={totalPages} basePath="/blog" />
        </div>
      </section>
    </div>
  );
}
