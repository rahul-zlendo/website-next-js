import { Metadata } from 'next';
import { BlogPost } from './types';
import { stripHcHtml as stripHtml } from './helpcenter';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://zlendorealty.com';

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

export { stripHtml };

const SITE_NAME = 'Zlendo Realty Help Center';

/**
 * Generate metadata for Help Center listing page
 */
export function generateHcListMetadata(page: number = 1): Metadata {
    const title = page === 1
        ? 'Help Center | Zlendo Realty'
        : `Help Center - Page ${page} | Zlendo Realty`;

    const description = 'Get help with Zlendo Realty. Find guides, tutorials, and answers to your questions about our tools and services.';

    return {
        title,
        description,
        alternates: {
            canonical: absoluteUrl(page === 1 ? '/help-center' : `/help-center?page=${page}`),
            languages: {
                'en-IN': absoluteUrl(page === 1 ? '/help-center' : `/help-center?page=${page}`),
                'x-default': absoluteUrl(page === 1 ? '/help-center' : `/help-center?page=${page}`),
            },
        },
        openGraph: {
            title,
            description,
            url: absoluteUrl('/help-center'),
            siteName: SITE_NAME,
            locale: 'en_US',
            type: 'website',
            images: [
                {
                    url: absoluteUrl('/og-helpcenter.png'),
                    width: 1200,
                    height: 630,
                    alt: 'Zlendo Realty Help Center',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [absoluteUrl('/og-helpcenter.png')],
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

/**
 * Generate metadata for single Help Center post
 */
export function generateHcPostMetadata(post: BlogPost): Metadata {
    const title = `${post.title} | Zlendo Realty Help Center`;
    const description = truncateText(post.excerpt, 160);
    const canonicalUrl = absoluteUrl(`/help-center/${post.slug}`);
    const featuredImage = post.featuredImage?.url || absoluteUrl('/og-helpcenter.png');

    return {
        title,
        description,
        alternates: {
            canonical: canonicalUrl,
            languages: {
                'en-IN': canonicalUrl,
                'x-default': canonicalUrl,
            },
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
    };
}

/**
 * Generate metadata for Help Center category page
 */
export function generateHcCategoryMetadata(
    categoryName: string,
    categorySlug: string,
    page: number = 1
): Metadata {
    const title = page === 1
        ? `${categoryName} | Zlendo Realty Help Center`
        : `${categoryName} - Page ${page} | Zlendo Realty Help Center`;

    const description = `Browse all help articles about ${categoryName}. Guides, tutorials, and documentation from Zlendo Realty Help Center.`;

    return {
        title,
        description,
        alternates: {
            canonical: absoluteUrl(page === 1 ? `/help-center/category/${categorySlug}` : `/help-center/category/${categorySlug}?page=${page}`),
            languages: {
                'en-IN': absoluteUrl(page === 1 ? `/help-center/category/${categorySlug}` : `/help-center/category/${categorySlug}?page=${page}`),
                'x-default': absoluteUrl(page === 1 ? `/help-center/category/${categorySlug}` : `/help-center/category/${categorySlug}?page=${page}`),
            },
        },
        openGraph: {
            title,
            description,
            url: absoluteUrl(`/help-center/category/${categorySlug}`),
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
 * Generate metadata for Help Center tag page
 */
export function generateHcTagMetadata(
    tagName: string,
    tagSlug: string,
    page: number = 1
): Metadata {
    const title = page === 1
        ? `Articles tagged "${tagName}" | Zlendo Realty Help Center`
        : `Articles tagged "${tagName}" - Page ${page} | Zlendo Realty Help Center`;

    const description = `Discover all help articles tagged with ${tagName}. Explore related content from Zlendo Realty Help Center.`;

    return {
        title,
        description,
        alternates: {
            canonical: absoluteUrl(page === 1 ? `/help-center/tag/${tagSlug}` : `/help-center/tag/${tagSlug}?page=${page}`),
            languages: {
                'en-IN': absoluteUrl(page === 1 ? `/help-center/tag/${tagSlug}` : `/help-center/tag/${tagSlug}?page=${page}`),
                'x-default': absoluteUrl(page === 1 ? `/help-center/tag/${tagSlug}` : `/help-center/tag/${tagSlug}?page=${page}`),
            },
        },
        openGraph: {
            title,
            description,
            url: absoluteUrl(`/help-center/tag/${tagSlug}`),
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
 * Generate JSON-LD for Help Center post
 */
export function generateHcPostJsonLd(post: BlogPost): object {
    return {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: post.title,
        description: truncateText(post.excerpt, 160),
        image: post.featuredImage?.url || absoluteUrl('/og-helpcenter.png'),
        datePublished: post.date,
        dateModified: post.modifiedDate,
        author: {
            '@type': 'Organization',
            name: 'Zlendo Realty',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Zlendo Realty',
            logo: {
                '@type': 'ImageObject',
                url: absoluteUrl('/logo.png'),
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': absoluteUrl(`/help-center/${post.slug}`),
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
