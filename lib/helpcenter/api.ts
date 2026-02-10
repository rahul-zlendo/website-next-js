import type {
    WPDoc, WPDocCategory, WPFaq, WPFaqCategory,
    HelpArticle, HelpCategory, FaqItem, FaqCategory, PaginatedDocs,
} from './types';

// ──────────────────────────────────────────────────
// Configuration
// ──────────────────────────────────────────────────

const HC_BASE_URL = process.env.HC_BASE_URL || 'https://helpcenter.zlendorealty.com';
const HC_API_URL = `${HC_BASE_URL}/wp-json/wp/v2`;
const REVALIDATE_SECONDS = parseInt(process.env.HC_REVALIDATE_SECONDS || '3600', 10);

// ──────────────────────────────────────────────────
// Generic fetch helper
// ──────────────────────────────────────────────────

async function hcFetch<T>(endpoint: string): Promise<{ data: T; headers: Headers }> {
    const url = `${HC_API_URL}${endpoint}`;
    try {
        const response = await fetch(url, {
            next: { revalidate: REVALIDATE_SECONDS },
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'ZlendoRealty/1.0 (NextJS; +https://zlendorealty.com)',
                'Referer': 'https://zlendorealty.com',
            },
        });
        if (!response.ok) {
            throw new Error(`HelpCenter API error: ${response.status} ${response.statusText}`);
        }
        const data: T = await response.json();
        return { data, headers: response.headers };
    } catch (error) {
        console.error(`[HC API] Failed to fetch ${url}:`, error);
        throw error;
    }
}

// ──────────────────────────────────────────────────
// Utility helpers
// ──────────────────────────────────────────────────

export function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#8217;/g, "'").replace(/&#8220;|&#8221;/g, '"').replace(/&nbsp;/g, ' ').replace(/&#8211;/g, '–').replace(/&#8230;/g, '…').trim();
}

function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
    });
}

// ──────────────────────────────────────────────────
// Transform helpers
// ──────────────────────────────────────────────────

function transformDoc(doc: WPDoc): HelpArticle {
    const author = doc._embedded?.author?.[0];
    const media = doc._embedded?.['wp:featuredmedia']?.[0];
    const terms = doc._embedded?.['wp:term'] || [];

    const categories = (terms[0] || [])
        .filter((t) => t.taxonomy === 'doc_category')
        .map((t) => ({ id: t.id, name: stripHtml(t.name), slug: t.slug }));

    const tags = (terms[1] || [])
        .filter((t) => t.taxonomy === 'doc_tag')
        .map((t) => ({ id: t.id, name: stripHtml(t.name), slug: t.slug }));

    return {
        id: doc.id,
        slug: doc.slug,
        title: stripHtml(doc.title.rendered),
        excerpt: stripHtml(doc.excerpt.rendered),
        content: doc.content.rendered,
        date: doc.date,
        dateFormatted: formatDate(doc.date),
        modifiedDate: doc.modified,
        author: {
            name: author?.name || 'Zlendo Team',
            avatar: author?.avatar_urls?.['96'] || null,
        },
        categories,
        tags,
        featuredImage: media
            ? {
                url: media.source_url,
                alt: media.alt_text || stripHtml(doc.title.rendered),
                width: media.media_details?.width || 800,
                height: media.media_details?.height || 400,
            }
            : null,
    };
}

function transformDocCategory(cat: WPDocCategory): HelpCategory {
    return {
        id: cat.id,
        name: stripHtml(cat.name),
        slug: cat.slug,
        description: cat.description || '',
        parent: cat.parent,
        count: cat.total_docs_count || cat.count,
        order: parseInt(cat.doc_category_order || '0', 10),
        icon: cat.thumbnail,
        subcategories: [],
    };
}

function transformFaq(faq: WPFaq): FaqItem {
    return {
        id: faq.id,
        question: stripHtml(faq.title.rendered),
        answer: faq.content.rendered,
        slug: faq.slug,
        categoryIds: faq.betterdocs_faq_category || [],
    };
}

// ──────────────────────────────────────────────────
// Docs API functions
// ──────────────────────────────────────────────────

export async function getDocs(page: number = 1, perPage: number = 12): Promise<PaginatedDocs> {
    try {
        const { data, headers } = await hcFetch<WPDoc[]>(
            `/docs?_embed&page=${page}&per_page=${perPage}&orderby=date&order=desc`
        );
        const totalDocs = parseInt(headers.get('X-WP-Total') || '0', 10);
        const totalPages = parseInt(headers.get('X-WP-TotalPages') || '1', 10);
        return {
            articles: data.map(transformDoc),
            totalPages,
            totalDocs,
            currentPage: page,
        };
    } catch {
        return { articles: [], totalPages: 1, totalDocs: 0, currentPage: page };
    }
}

export async function getDocBySlug(slug: string): Promise<HelpArticle | null> {
    try {
        const { data } = await hcFetch<WPDoc[]>(`/docs?slug=${slug}&_embed`);
        if (!data || data.length === 0) return null;
        return transformDoc(data[0]);
    } catch {
        return null;
    }
}

export async function getAllDocSlugs(): Promise<string[]> {
    const slugs: string[] = [];
    let page = 1;
    const perPage = 100;
    try {
        while (true) {
            const { data, headers } = await hcFetch<WPDoc[]>(
                `/docs?per_page=${perPage}&page=${page}&_fields=slug`
            );
            slugs.push(...data.map((d) => d.slug));
            const totalPages = parseInt(headers.get('X-WP-TotalPages') || '1', 10);
            if (page >= totalPages) break;
            page++;
        }
    } catch {
        // return what we have
    }
    return slugs;
}

export async function getDocsByCategory(categorySlug: string, page: number = 1, perPage: number = 12): Promise<PaginatedDocs> {
    try {
        // First get the category ID
        const { data: categories } = await hcFetch<WPDocCategory[]>(
            `/doc_category?slug=${categorySlug}`
        );
        if (!categories || categories.length === 0) {
            return { articles: [], totalPages: 1, totalDocs: 0, currentPage: page };
        }
        const categoryId = categories[0].id;
        const { data, headers } = await hcFetch<WPDoc[]>(
            `/docs?_embed&doc_category=${categoryId}&page=${page}&per_page=${perPage}&orderby=date&order=desc`
        );
        const totalDocs = parseInt(headers.get('X-WP-Total') || '0', 10);
        const totalPages = parseInt(headers.get('X-WP-TotalPages') || '1', 10);
        return {
            articles: data.map(transformDoc),
            totalPages,
            totalDocs,
            currentPage: page,
        };
    } catch {
        return { articles: [], totalPages: 1, totalDocs: 0, currentPage: page };
    }
}

export async function searchDocs(query: string, page: number = 1, perPage: number = 12): Promise<PaginatedDocs> {
    try {
        const { data, headers } = await hcFetch<WPDoc[]>(
            `/docs?_embed&search=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`
        );
        const totalDocs = parseInt(headers.get('X-WP-Total') || '0', 10);
        const totalPages = parseInt(headers.get('X-WP-TotalPages') || '1', 10);
        return {
            articles: data.map(transformDoc),
            totalPages,
            totalDocs,
            currentPage: page,
        };
    } catch {
        return { articles: [], totalPages: 1, totalDocs: 0, currentPage: page };
    }
}

// ──────────────────────────────────────────────────
// Category API functions
// ──────────────────────────────────────────────────

export async function getDocCategories(): Promise<HelpCategory[]> {
    try {
        const { data } = await hcFetch<WPDocCategory[]>(`/doc_category?per_page=100`);
        const flat = data.map(transformDocCategory);

        // Build hierarchy
        const topLevel = flat.filter((c) => c.parent === 0).sort((a, b) => a.order - b.order);
        for (const parent of topLevel) {
            parent.subcategories = flat
                .filter((c) => c.parent === parent.id)
                .sort((a, b) => a.order - b.order);
        }

        return topLevel;
    } catch {
        return [];
    }
}

export async function getDocCategoryBySlug(slug: string): Promise<HelpCategory | null> {
    try {
        const { data } = await hcFetch<WPDocCategory[]>(`/doc_category?slug=${slug}`);
        if (!data || data.length === 0) return null;
        return transformDocCategory(data[0]);
    } catch {
        return null;
    }
}

export async function getAllDocCategorySlugs(): Promise<string[]> {
    try {
        const { data } = await hcFetch<WPDocCategory[]>(`/doc_category?per_page=100&_fields=slug`);
        return data.map((c) => c.slug);
    } catch {
        return [];
    }
}

// ──────────────────────────────────────────────────
// FAQ API functions
// ──────────────────────────────────────────────────

export async function getFaqs(): Promise<FaqItem[]> {
    try {
        const allFaqs: FaqItem[] = [];
        let page = 1;
        while (true) {
            const { data, headers } = await hcFetch<WPFaq[]>(
                `/betterdocs_faq?per_page=100&page=${page}`
            );
            allFaqs.push(...data.map(transformFaq));
            const totalPages = parseInt(headers.get('X-WP-TotalPages') || '1', 10);
            if (page >= totalPages) break;
            page++;
        }
        return allFaqs;
    } catch {
        return [];
    }
}

export async function getFaqCategories(): Promise<FaqCategory[]> {
    try {
        const { data: categories } = await hcFetch<WPFaqCategory[]>(
            `/betterdocs_faq_category?per_page=100`
        );
        const allFaqs = await getFaqs();

        return categories.map((cat) => ({
            id: cat.id,
            name: stripHtml(cat.name),
            slug: cat.slug,
            description: cat.description || '',
            count: cat.count,
            faqs: allFaqs.filter((faq) => faq.categoryIds.includes(cat.id)),
        }));
    } catch {
        return [];
    }
}
