import JsonLd from '@/components/common/JsonLd';
import {
    generatePersonSchema,
    generateWebPageSchemaWithDates,
    type PersonInput,
} from '@/lib/utils/structuredData';

interface CmsLike {
    seoTitle?: string;
    seoDescription?: string;
    updatedAt?: string;
    author?: PersonInput | null;
    reviewedBy?: PersonInput | null;
}

interface Props {
    /** Any Sanity document that exposes seoTitle/seoDescription/updatedAt/author/reviewedBy. */
    cms?: CmsLike | null;
    /** Absolute URL of the page (e.g. https://zlendorealty.com/in/products/vastu). */
    url: string;
    /** Fallback name when CMS provides no seoTitle. */
    fallbackName: string;
    /** Fallback description when CMS provides no seoDescription. */
    fallbackDescription: string;
}

/**
 * Emits EEAT structured data — Person (author + reviewer) and WebPage with dateModified.
 * Safe no-op when the CMS document has no author/reviewer/updatedAt: nothing renders.
 *
 * Drop next to any page that already calls Sanity. Example:
 *
 *     <PageMetaSchemas
 *       cms={cms}
 *       url={`https://zlendorealty.com/${country}/products/floor-planner`}
 *       fallbackName="AI Floor Planner"
 *       fallbackDescription="Create 2D and 3D floor plans in minutes."
 *     />
 */
export default function PageMetaSchemas({ cms, url, fallbackName, fallbackDescription }: Props) {
    const author = generatePersonSchema(cms?.author);
    const reviewer = generatePersonSchema(cms?.reviewedBy);
    const hasFreshness = Boolean(cms?.updatedAt || author || reviewer);

    if (!hasFreshness) return null;

    const webPage = generateWebPageSchemaWithDates({
        name: cms?.seoTitle || fallbackName,
        description: cms?.seoDescription || fallbackDescription,
        url,
        dateModified: cms?.updatedAt,
        author: author ?? undefined,
        reviewedBy: reviewer ?? undefined,
    });

    // The author + reviewer Person nodes are nested inside the WebPage, so a
    // single JSON-LD block carries all the EEAT + freshness signals.
    return <JsonLd schema={webPage} />;
}
