import { Metadata } from 'next';

const BASE_URL = 'https://zlendorealty.com';
const OG_IMAGE_URL = `${BASE_URL}/og-image.jpg`;
const SITE_NAME = 'Zlendo Realty';

/**
 * Default OG image configuration — reuse everywhere.
 * Ensures absolute URL + correct dimensions + correct type.
 */
export const defaultOgImage = {
    url: OG_IMAGE_URL,
    width: 1200,
    height: 630,
    alt: `${SITE_NAME} — AI Home & Office Design Software`,
    type: 'image/jpeg' as const,
};

/**
 * Generate page-specific metadata with all required SEO fields.
 * Use this in every page's generateMetadata or static metadata export.
 *
 * This is the Next.js equivalent of Yoast SEO — a single utility that
 * ensures every page has correct OG, Twitter, canonical, and structured data.
 */
export function createPageMetadata({
    title,
    description,
    path,
    ogTitle,
    ogDescription,
    ogImage,
    keywords,
    noIndex = false,
}: {
    title: string;
    description: string;
    path: string; // e.g. '/in/products/vastu'
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: {
        url: string;
        width: number;
        height: number;
        alt: string;
        type: string;
    };
    keywords?: string[];
    noIndex?: boolean;
}): Metadata {
    const canonicalUrl = `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
    const image = ogImage || defaultOgImage;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const isIndia = cleanPath.startsWith('/in');
    const segment = isIndia ? cleanPath.replace(/^\/in/, '') : cleanPath;

    // Ensure segment starts with / unless it's empty
    const normalizedSegment = segment === '/' ? '' : segment;

    const globalUrl = `${BASE_URL}${normalizedSegment}`;
    const indiaUrl = `${BASE_URL}/in${normalizedSegment}`;

    let finalDesc = description;
    if (isIndia) {
        if (!finalDesc.toLowerCase().includes('india')) {
            finalDesc += ' - India region.';
        } else {
            finalDesc += ' (Regional)';
        }
    }

    return {
        title,
        description: finalDesc,
        ...(keywords && { keywords }),
        openGraph: {
            title: ogTitle || title,
            description: ogDescription || finalDesc,
            url: canonicalUrl,
            siteName: SITE_NAME,
            images: [image],
            locale: isIndia ? 'en_IN' : 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: ogTitle || title,
            description: ogDescription || finalDesc,
            images: [image.url],
        },
        alternates: {
            canonical: canonicalUrl,
            languages: {
                'en': globalUrl,
                'en-IN': indiaUrl,
                'x-default': globalUrl,
            },
        },
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}

/**
 * SEO constants for reuse across the app.
 */
export const SEO = {
    BASE_URL,
    OG_IMAGE_URL,
    SITE_NAME,
    DEFAULT_TITLE: 'Zlendo Realty | AI Home & Office Design Software',
    DEFAULT_DESCRIPTION:
        'AI-powered 3D home design and floor planning software for architects, builders, interior designers, and vastu consultants.',
} as const;
