import { NextResponse } from 'next/server';
import { readClient } from '@/lib/sanity/client';
import { imageUrl } from '@/lib/sanity/image';
import { groq } from 'next-sanity';

const recentBlogPostsQuery = groq`
  *[_type == "post" && section == "blog"] | order(publishedAt desc) [0...3]{
    "slug": slug.current,
    title,
    excerpt,
    publishedAt,
    "mainImage": { "asset": mainImage.asset, "alt": mainImage.alt }
  }
`;

export const revalidate = 600; // matches the /blog listing's ISR window

export async function GET() {
  try {
    const posts = await readClient.fetch(recentBlogPostsQuery);
    const shaped = posts.map((post: any) => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt || '',
      publishedAt: post.publishedAt,
      imageUrl: imageUrl(post.mainImage, 600, 400, 'crop'),
      imageAlt: post.mainImage?.alt || post.title,
    }));
    return NextResponse.json({ posts: shaped });
  } catch (err) {
    console.error('Failed to fetch recent blog posts from Sanity', err);
    return NextResponse.json({ posts: [] }, { status: 200 });
  }
}
