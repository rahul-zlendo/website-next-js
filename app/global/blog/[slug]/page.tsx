import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Calendar, Clock } from 'lucide-react';
import { readClient } from '@/lib/sanity/client';
import { imageUrl } from '@/lib/sanity/image';
import { portableToHtml } from '@/lib/sanity/portableToHtml';
import { blogPostBySlugQuery, blogPostSlugsQuery } from '@/lib/sanity/queries';
import { BlogBreadcrumb, BlogPostBody } from '@/components/blog';
import JsonLd from '@/components/common/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/utils/structuredData';

export const revalidate = 600; // 10 min ISR
export const dynamicParams = true;

const BASE_URL = 'https://zlendorealty.com';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Post = any;

async function getPost(slug: string): Promise<Post | null> {
  return readClient.fetch(blogPostBySlugQuery, { slug });
}

export async function generateStaticParams() {
  const slugs = await readClient.fetch<string[]>(blogPostSlugsQuery);
  return slugs.map((slug) => ({ slug }));
}

function formatDate(d?: string): string {
  if (!d) return '';
  return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function readingTime(html: string): number {
  const words = html.replace(/<[^>]*>/g, ' ').trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: 'Post not found | Zlendo Realty' };

  const url = `${BASE_URL}/blog/${post.slug}`;
  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt || '';
  const ogImg = imageUrl(post.mainImage, 1200, 630, 'crop') || `${BASE_URL}/og-image.jpg`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: post.ogTitle || title,
      description: post.ogDescription || description,
      url,
      siteName: 'Zlendo Realty',
      images: [{ url: ogImg, width: 1200, height: 630 }],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.ogTitle || title,
      description: post.ogDescription || description,
      images: [ogImg],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const url = `${BASE_URL}/blog/${post.slug}`;
  const html = portableToHtml(post.body);
  const heroImg = imageUrl(post.mainImage, 1600);
  const ogImg = imageUrl(post.mainImage, 1200, 630, 'crop') || `${BASE_URL}/og-image.jpg`;

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.seoDescription || post.excerpt || '',
    url,
    image: ogImg,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: post.author,
    section: 'blog',
  });
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: `${BASE_URL}/` },
    { name: 'Blog', url: `${BASE_URL}/blog` },
    { name: post.title, url },
  ]);

  return (
    <main>
      <JsonLd schema={articleSchema} />
      <JsonLd schema={breadcrumbSchema} />

      <article className="max-w-3xl mx-auto px-6 lg:px-0 py-10 md:py-16">
        <div className="mb-8">
          <BlogBreadcrumb
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.categories?.[0]?.title || post.title },
            ]}
          />
        </div>

        {post.categories?.[0]?.title && (
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-zlendo-teal bg-zlendo-teal/5 px-4 py-1.5 rounded-full mb-5">
            {post.categories[0].title}
          </span>
        )}

        <h1 className="text-3xl md:text-5xl font-nunito font-black text-zlendo-grey-dark leading-tight mb-6">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-5 text-sm font-semibold text-zlendo-grey-medium/70 mb-8">
          {post.author?.name && <span>By {post.author.name}</span>}
          {post.publishedAt && (
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.publishedAt)}
            </span>
          )}
          {html && (
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {readingTime(html)} min read
            </span>
          )}
        </div>

        {heroImg && (
          <div className="rounded-3xl overflow-hidden mb-10 shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={heroImg} alt={post.mainImage?.alt || post.title} className="w-full h-auto" />
          </div>
        )}

        <BlogPostBody content={html} />

        {post.author?.name && (post.author.bio || post.author.role) && (
          <div className="mt-14 pt-8 border-t border-black/10 flex items-start gap-4">
            {post.author.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.author.image}
                alt={post.author.name}
                className="w-14 h-14 rounded-full object-cover shrink-0"
              />
            )}
            <div>
              <p className="font-bold text-zlendo-grey-dark">{post.author.name}</p>
              {post.author.role && (
                <p className="text-sm text-zlendo-teal font-semibold">{post.author.role}</p>
              )}
              {post.author.bio && (
                <p className="text-sm text-zlendo-grey-medium mt-1 leading-relaxed">{post.author.bio}</p>
              )}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
