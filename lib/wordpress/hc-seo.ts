import { Metadata } from 'next';
import { BlogPost } from './types';
import { stripHtml } from './api';
import { absoluteUrl, truncateText } from './seo';

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
