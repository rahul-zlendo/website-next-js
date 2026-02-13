// ──────────────────────────────────────────────────
// WordPress BetterDocs REST API Types
// ──────────────────────────────────────────────────

// Raw WP REST API response types (docs custom post type)
export interface WPDoc {
    id: number;
    date: string;
    modified: string;
    slug: string;
    status: string;
    type: string;
    title: { rendered: string };
    content: { rendered: string; protected: boolean };
    excerpt: { rendered: string; protected: boolean };
    author: number;
    featured_media: number;
    doc_category: number[];
    doc_tag: number[];
    _embedded?: {
        author?: WPDocAuthor[];
        'wp:featuredmedia'?: WPDocMedia[];
        'wp:term'?: WPDocTerm[][];
    };
}

export interface WPDocAuthor {
    id: number;
    name: string;
    slug: string;
    avatar_urls: { [key: string]: string };
}

export interface WPDocMedia {
    id: number;
    source_url: string;
    alt_text: string;
    media_details: {
        width: number;
        height: number;
        sizes?: { [key: string]: { source_url: string; width: number; height: number } };
    };
}

export interface WPDocTerm {
    id: number;
    name: string;
    slug: string;
    taxonomy: string;
}

// BetterDocs doc_category taxonomy
export interface WPDocCategory {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
    parent: number;
    doc_category_order: string;
    thumbnail: string | null;
    subcategories_count: number;
    total_docs_count: number;
}

// BetterDocs FAQ
export interface WPFaq {
    id: number;
    date: string;
    modified: string;
    slug: string;
    title: { rendered: string };
    content: { rendered: string; protected: boolean };
    excerpt: { rendered: string; protected: boolean };
    author: number;
    betterdocs_faq_category: number[];
}

// BetterDocs FAQ category
export interface WPFaqCategory {
    id: number;
    count: number;
    name: string;
    slug: string;
    description: string;
}

// ──────────────────────────────────────────────────
// Transformed types for internal use
// ──────────────────────────────────────────────────

export interface HelpArticle {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    dateFormatted: string;
    modifiedDate: string;
    author: {
        name: string;
        avatar: string | null;
    };
    categories: { id: number; name: string; slug: string }[];
    tags: { id: number; name: string; slug: string }[];
    featuredImage: {
        url: string;
        alt: string;
        width: number;
        height: number;
    } | null;
}

export interface HelpCategory {
    id: number;
    name: string;
    slug: string;
    description: string;
    parent: number;
    count: number;
    order: number;
    icon: string | null;
    subcategories: HelpCategory[];
}

export interface FaqItem {
    id: number;
    question: string;
    answer: string;
    slug: string;
    categoryIds: number[];
}

export interface FaqCategory {
    id: number;
    name: string;
    slug: string;
    description: string;
    count: number;
    faqs: FaqItem[];
}

export interface PaginatedDocs {
    articles: HelpArticle[];
    totalPages: number;
    totalDocs: number;
    currentPage: number;
}
