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

    let finalKeywords = keywords ? [...keywords] : undefined;
    if (isIndia && finalKeywords) {
        finalKeywords = finalKeywords.map(k => k.toLowerCase().includes('india') || k.toLowerCase().includes(' in ') ? k : `${k} in india`);
    }

    return {
        title,
        description: finalDesc,
        ...(finalKeywords && { keywords: finalKeywords }),
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
 * Build a reciprocal canonical + hreflang cluster for a locale-neutral segment.
 *
 * Every page that exists at both `/<segment>` and `/in/<segment>` MUST emit the
 * same three-entry `languages` map on BOTH URLs, differing only in which one it
 * self-canonicalises to. Google discards a whole hreflang cluster when the
 * annotations aren't reciprocal (or when two URLs both claim `x-default`), and
 * then falls back to picking a canonical itself — which is how `/general-terms`
 * ended up folded into `/in/general-terms` in Search Console.
 *
 * @param segment locale-neutral path, e.g. '/sla' or '/business/commercial-spaces'
 * @param locale  which of the two variants this page is
 */
export function localeAlternates(
    segment: string,
    locale: 'global' | 'in' = 'global'
): NonNullable<Metadata['alternates']> {
    const clean = !segment || segment === '/' ? '' : segment.startsWith('/') ? segment : `/${segment}`;
    const globalUrl = `${BASE_URL}${clean}`;
    const indiaUrl = `${BASE_URL}/in${clean}`;

    return {
        canonical: locale === 'in' ? indiaUrl : globalUrl,
        languages: {
            'en': globalUrl,
            'en-IN': indiaUrl,
            'x-default': globalUrl,
        },
    };
}

/**
 * Alternates for a page that exists ONLY in the India tree (no global twin).
 *
 * These must NOT get the reciprocal cluster from `localeAlternates` — the
 * corresponding global URL either 404s (`/individuals`, `/register`,
 * `/vastu-campaign`) or 301s elsewhere (`/use-cases`, `/business/*` sub-pages),
 * and an hreflang pointing at a redirect or a 404 invalidates the annotation.
 * A single-locale page just self-canonicalises.
 */
export function indiaOnlyAlternates(segment: string): NonNullable<Metadata['alternates']> {
    const clean = !segment || segment === '/' ? '' : segment.startsWith('/') ? segment : `/${segment}`;
    const indiaUrl = `${BASE_URL}/in${clean}`;

    return {
        canonical: indiaUrl,
        languages: {
            'en-IN': indiaUrl,
            'x-default': indiaUrl,
        },
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
