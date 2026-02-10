import type { Metadata } from 'next';
import type { HelpArticle, HelpCategory } from './types';

const SITE_NAME = 'Zlendo Realty';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://zlendorealty.com';

export function absoluteUrl(path: string): string {
    return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '…';
}

// ──────────────────────────────────────────────────
// Metadata generators
// ──────────────────────────────────────────────────

export function generateHelpCenterMetadata(): Metadata {
    const title = `Help Center | ${SITE_NAME}`;
    const description = 'Find answers, tutorials, and guides to help you get the most out of Zlendo Realty\'s AI-powered floor planning, interior design, and home visualization tools.';
    const canonicalUrl = absoluteUrl('/help-center');

    return {
        title,
        description,
        alternates: { canonical: canonicalUrl },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName: SITE_NAME,
            type: 'website',
            locale: 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },
    };
}

export function generateArticleMetadata(article: HelpArticle): Metadata {
    const title = `${article.title} | Help Center`;
    const description = truncateText(article.excerpt, 160);
    const canonicalUrl = absoluteUrl(`/help-center/${article.slug}`);

    return {
        title,
        description,
        alternates: { canonical: canonicalUrl },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName: SITE_NAME,
            type: 'article',
            locale: 'en_US',
            publishedTime: article.date,
            modifiedTime: article.modifiedDate,
            ...(article.featuredImage && {
                images: [{ url: article.featuredImage.url, width: article.featuredImage.width, height: article.featuredImage.height, alt: article.featuredImage.alt }],
            }),
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },
    };
}

export function generateCategoryMetadata(category: HelpCategory): Metadata {
    const title = `${category.name} | Help Center`;
    const description = category.description || `Browse help articles about ${category.name} in the Zlendo Realty Help Center.`;
    const canonicalUrl = absoluteUrl(`/help-center/category/${category.slug}`);

    return {
        title,
        description,
        alternates: { canonical: canonicalUrl },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName: SITE_NAME,
            type: 'website',
            locale: 'en_US',
        },
        twitter: { card: 'summary', title, description },
    };
}

// ──────────────────────────────────────────────────
// JSON-LD generators
// ──────────────────────────────────────────────────

export function generateArticleJsonLd(article: HelpArticle): object {
    return {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: article.title,
        description: truncateText(article.excerpt, 160),
        image: article.featuredImage?.url || absoluteUrl('/logo.png'),
        datePublished: article.date,
        dateModified: article.modifiedDate,
        author: {
            '@type': 'Person',
            name: article.author.name,
        },
        publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            logo: { '@type': 'ImageObject', url: absoluteUrl('/logo.png') },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': absoluteUrl(`/help-center/${article.slug}`),
        },
    };
}

export function generateFaqJsonLd(faqs: { question: string; answer: string }[]): object {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer.replace(/<[^>]*>/g, ''),
            },
        })),
    };
}

export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]): object {
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
