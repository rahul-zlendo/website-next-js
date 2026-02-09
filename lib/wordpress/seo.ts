import { Metadata } from 'next';
import { BlogPost } from './types';
import { stripHtml } from './api';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://zlendorealty.com';
const SITE_NAME = 'Zlendo Realty';

/**
 * Generate absolute URL
 */
export function absoluteUrl(path: string): string {
    if (path.startsWith('http')) {
        return path;
    }
    return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, maxLength: number = 160): string {
    const cleaned = stripHtml(text);
    if (cleaned.length <= maxLength) {
        return cleaned;
    }
    return cleaned.substring(0, maxLength - 3).trim() + '...';
}

/**
 * Generate metadata for blog listing page
 */
export function generateBlogListMetadata(page: number = 1): Metadata {
    const title = page === 1
        ? 'Blog | Home Design Tips & Architecture Insights'
        : `Blog - Page ${page} | Home Design Tips & Architecture Insights`;

    const description = 'Discover expert tips on home design, interior styling, architecture trends, Vastu, and AI-powered floor planning. Stay updated with Zlendo Realty blog.';

    return {
        title,
        description,
        keywords: [
            'home design blog',
            'interior design tips',
            'architecture insights',
            'floor planning',
            'vastu tips',
            '3D home design',
            'home renovation',
            'Zlendo Realty',
        ],
        alternates: {
            canonical: absoluteUrl(page === 1 ? '/blog' : `/blog?page=${page}`),
        },
        openGraph: {
            title,
            description,
            url: absoluteUrl('/blog'),
            siteName: SITE_NAME,
            locale: 'en_US',
            type: 'website',
            images: [
                {
                    url: absoluteUrl('/og-blog.png'),
                    width: 1200,
                    height: 630,
                    alt: 'Zlendo Realty Blog',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [absoluteUrl('/og-blog.png')],
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

/**
 * Generate metadata for single blog post
 */
export function generatePostMetadata(post: BlogPost): Metadata {
    const title = `${post.title} | Zlendo Realty Blog`;
    const description = truncateText(post.excerpt, 160);
    const canonicalUrl = absoluteUrl(`/blog/${post.slug}`);
    const featuredImage = post.featuredImage?.url || absoluteUrl('/og-blog.png');

    return {
        title,
        description,
        keywords: [
            ...post.categories.map((c) => c.name.toLowerCase()),
            ...post.tags.map((t) => t.name.toLowerCase()),
            'home design',
            'Zlendo Realty',
        ],
        authors: [{ name: post.author.name }],
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: post.title,
            description,
            url: canonicalUrl,
            siteName: SITE_NAME,
            locale: 'en_US',
            type: 'article',
            publishedTime: post.date,
            modifiedTime: post.modifiedDate,
            authors: [post.author.name],
            section: post.categories[0]?.name || 'Blog',
            tags: post.tags.map((t) => t.name),
            images: [
                {
                    url: featuredImage,
                    width: post.featuredImage?.width || 1200,
                    height: post.featuredImage?.height || 630,
                    alt: post.featuredImage?.alt || post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description,
            images: [featuredImage],
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

/**
 * Generate metadata for category page
 */
export function generateCategoryMetadata(
    categoryName: string,
    categorySlug: string,
    page: number = 1
): Metadata {
    const title = page === 1
        ? `${categoryName} | Zlendo Realty Blog`
        : `${categoryName} - Page ${page} | Zlendo Realty Blog`;

    const description = `Browse all articles about ${categoryName}. Expert tips, guides, and insights on ${categoryName.toLowerCase()} from Zlendo Realty.`;

    return {
        title,
        description,
        alternates: {
            canonical: absoluteUrl(page === 1 ? `/blog/category/${categorySlug}` : `/blog/category/${categorySlug}?page=${page}`),
        },
        openGraph: {
            title,
            description,
            url: absoluteUrl(`/blog/category/${categorySlug}`),
            siteName: SITE_NAME,
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary',
            title,
            description,
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

/**
 * Generate metadata for tag page
 */
export function generateTagMetadata(
    tagName: string,
    tagSlug: string,
    page: number = 1
): Metadata {
    const title = page === 1
        ? `Posts tagged "${tagName}" | Zlendo Realty Blog`
        : `Posts tagged "${tagName}" - Page ${page} | Zlendo Realty Blog`;

    const description = `Discover all articles tagged with ${tagName}. Explore related content from Zlendo Realty.`;

    return {
        title,
        description,
        alternates: {
            canonical: absoluteUrl(page === 1 ? `/blog/tag/${tagSlug}` : `/blog/tag/${tagSlug}?page=${page}`),
        },
        openGraph: {
            title,
            description,
            url: absoluteUrl(`/blog/tag/${tagSlug}`),
            siteName: SITE_NAME,
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary',
            title,
            description,
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

/**
 * Generate JSON-LD BlogPosting schema
 */
export function generateBlogPostingJsonLd(post: BlogPost): object {
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: truncateText(post.excerpt, 160),
        image: post.featuredImage?.url || absoluteUrl('/og-blog.png'),
        datePublished: post.date,
        dateModified: post.modifiedDate,
        author: {
            '@type': 'Person',
            name: post.author.name,
        },
        publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            logo: {
                '@type': 'ImageObject',
                url: absoluteUrl('/logo.png'),
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': absoluteUrl(`/blog/${post.slug}`),
        },
        wordCount: post.content ? stripHtml(post.content).split(/\s+/).length : 0,
        articleSection: post.categories[0]?.name || 'Blog',
        keywords: [...post.categories, ...post.tags].map((t) => t.name).join(', '),
        url: absoluteUrl(`/blog/${post.slug}`),
    };
}

/**
 * Generate JSON-LD Blog schema for listing page
 */
export function generateBlogJsonLd(): object {
    return {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: `${SITE_NAME} Blog`,
        description: 'Expert tips on home design, interior styling, architecture trends, and AI-powered floor planning.',
        url: absoluteUrl('/blog'),
        publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            logo: {
                '@type': 'ImageObject',
                url: absoluteUrl('/logo.png'),
            },
        },
    };
}

/**
 * Generate JSON-LD BreadcrumbList schema
 */
export function generateBreadcrumbJsonLd(
    items: { name: string; url: string }[]
): object {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: absoluteUrl(item.url),
        })),
    };
}
