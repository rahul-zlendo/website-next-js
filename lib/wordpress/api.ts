import {
    WPPost,
    WPCategory,
    WPTag,
    BlogPost,
    PaginatedPosts,
} from './types';

// Environment configuration
const WP_BASE_URL = process.env.WP_BASE_URL || 'https://blog.zlendorealty.com';
const WP_API_URL = `${WP_BASE_URL}/wp-json/wp/v2`;
const REVALIDATE_SECONDS = parseInt(process.env.WP_REVALIDATE_SECONDS || '3600', 10);

/**
 * Helper to wait for a specified duration
 */
function wait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Generic fetch helper with error handling, caching, and retry logic
 */
async function wpFetch<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<{ data: T; headers: Headers }> {
    const url = `${WP_API_URL}${endpoint}`;
    const MAX_RETRIES = 5;
    const BASE_DELAY = 1500; // 1.5 seconds

    for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
        try {
            const response = await fetch(url, {
                ...options,
                next: { revalidate: REVALIDATE_SECONDS },
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'ZlendoRealty/1.0 (NextJS; +https://zlendorealty.com)',
                    'Referer': 'https://zlendorealty.com',
                    ...options.headers,
                },
            });

            // Retry on rate limit or server errors
            if (response.status === 429 || response.status >= 500) {
                const retryAfter = response.headers.get('Retry-After');
                const delay = retryAfter
                    ? parseInt(retryAfter, 10) * 1000
                    : BASE_DELAY * Math.pow(2, attempt) + Math.random() * 1000;
                console.warn(
                    `[WP API] ${response.status} for ${endpoint} — retrying in ${Math.round(delay)}ms (attempt ${attempt + 1}/${MAX_RETRIES})`
                );
                await wait(delay);
                continue;
            }

            if (!response.ok) {
                throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            return { data, headers: response.headers };
        } catch (error) {
            // Retry on connection timeouts
            const isTimeout =
                error instanceof TypeError &&
                (error.cause as any)?.code === 'UND_ERR_CONNECT_TIMEOUT';
            const isNetworkError =
                error instanceof TypeError && (error.message === 'fetch failed' || (error.cause as any)?.code === 'ECONNRESET');

            if ((isTimeout || isNetworkError) && attempt < MAX_RETRIES - 1) {
                const delay = BASE_DELAY * Math.pow(2, attempt) + Math.random() * 1000;
                console.warn(
                    `[WP API] Network error for ${endpoint} — retrying in ${Math.round(delay)}ms (attempt ${attempt + 1}/${MAX_RETRIES})`
                );
                await wait(delay);
                continue;
            }

            console.error(`[WP API] Failed to fetch ${url}:`, error);
            throw error;
        }
    }

    throw new Error(`[WP API] Max retries (${MAX_RETRIES}) exceeded for ${url}`);
}

/**
 * Strip HTML tags from string
 */
export function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
}

/**
 * Calculate reading time from content
 */
function calculateReadingTime(content: string): number {
    const wordsPerMinute = 200;
    const text = stripHtml(content);
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Format date to readable string
 */
function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

/**
 * Transform WP post to internal BlogPost format
 */
function transformPost(post: WPPost): BlogPost {
    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
    const author = post._embedded?.author?.[0];
    const categories = post._embedded?.['wp:term']?.[0] || [];
    const tags = post._embedded?.['wp:term']?.[1] || [];

    return {
        id: post.id,
        slug: post.slug,
        title: post.title.rendered,
        excerpt: stripHtml(post.excerpt.rendered),
        content: post.content.rendered,
        date: post.date_gmt,
        dateFormatted: formatDate(post.date_gmt),
        modifiedDate: post.modified_gmt,
        author: {
            name: author?.name || 'Zlendo Realty',
            avatar: author?.avatar_urls?.['96'] || null,
            slug: author?.slug || 'zlendo',
        },
        featuredImage: featuredMedia
            ? {
                url: featuredMedia.source_url,
                alt: featuredMedia.alt_text || post.title.rendered,
                width: featuredMedia.media_details?.width || 1200,
                height: featuredMedia.media_details?.height || 630,
            }
            : null,
        categories: categories
            .filter((term) => term.taxonomy === 'category')
            .map((cat) => ({
                id: cat.id,
                name: cat.name,
                slug: cat.slug,
            })),
        tags: tags
            .filter((term) => term.taxonomy === 'post_tag')
            .map((tag) => ({
                id: tag.id,
                name: tag.name,
                slug: tag.slug,
            })),
        readingTime: calculateReadingTime(post.content.rendered),
    };
}

/**
 * Get paginated blog posts
 */
export async function getPosts(
    page: number = 1,
    perPage: number = 9
): Promise<PaginatedPosts> {
    try {
        const { data, headers } = await wpFetch<WPPost[]>(
            `/posts?_embed&page=${page}&per_page=${perPage}&orderby=date&order=desc`
        );

        const totalPosts = parseInt(headers.get('X-WP-Total') || '0', 10);
        const totalPages = parseInt(headers.get('X-WP-TotalPages') || '1', 10);

        return {
            posts: data.map(transformPost),
            totalPages,
            totalPosts,
            currentPage: page,
        };
    } catch (error) {
        console.error('[WP API] getPosts failed:', error);
        return {
            posts: [],
            totalPages: 0,
            totalPosts: 0,
            currentPage: page,
        };
    }
}

/**
 * Get single post by slug
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const { data } = await wpFetch<WPPost[]>(`/posts?_embed&slug=${encodeURIComponent(slug)}`);

        if (!data || data.length === 0) {
            return null;
        }

        return transformPost(data[0]);
    } catch (error) {
        console.error(`[WP API] getPostBySlug failed for slug "${slug}":`, error);
        return null;
    }
}

/**
 * Get all post slugs for static generation
 */
export async function getAllPostSlugs(): Promise<string[]> {
    const slugs: string[] = [];
    let page = 1;
    let hasMore = true;

    try {
        while (hasMore) {
            const { data, headers } = await wpFetch<WPPost[]>(
                `/posts?per_page=100&page=${page}&_fields=slug`
            );

            slugs.push(...data.map((post) => post.slug));

            const totalPages = parseInt(headers.get('X-WP-TotalPages') || '1', 10);
            hasMore = page < totalPages;
            page++;
        }
    } catch (error) {
        console.error('[WP API] getAllPostSlugs failed:', error);
    }

    return slugs;
}

/**
 * Get posts by category slug
 */
export async function getPostsByCategory(
    categorySlug: string,
    page: number = 1,
    perPage: number = 9
): Promise<PaginatedPosts> {
    try {
        // First get the category ID
        const { data: categories } = await wpFetch<WPCategory[]>(
            `/categories?slug=${encodeURIComponent(categorySlug)}`
        );

        if (!categories || categories.length === 0) {
            return {
                posts: [],
                totalPages: 0,
                totalPosts: 0,
                currentPage: page,
            };
        }

        const categoryId = categories[0].id;

        const { data, headers } = await wpFetch<WPPost[]>(
            `/posts?_embed&categories=${categoryId}&page=${page}&per_page=${perPage}&orderby=date&order=desc`
        );

        const totalPosts = parseInt(headers.get('X-WP-Total') || '0', 10);
        const totalPages = parseInt(headers.get('X-WP-TotalPages') || '1', 10);

        return {
            posts: data.map(transformPost),
            totalPages,
            totalPosts,
            currentPage: page,
        };
    } catch (error) {
        console.error(`[WP API] getPostsByCategory failed for "${categorySlug}":`, error);
        return {
            posts: [],
            totalPages: 0,
            totalPosts: 0,
            currentPage: page,
        };
    }
}

/**
 * Get posts by tag slug
 */
export async function getPostsByTag(
    tagSlug: string,
    page: number = 1,
    perPage: number = 9
): Promise<PaginatedPosts> {
    try {
        // First get the tag ID
        const { data: tags } = await wpFetch<WPTag[]>(
            `/tags?slug=${encodeURIComponent(tagSlug)}`
        );

        if (!tags || tags.length === 0) {
            return {
                posts: [],
                totalPages: 0,
                totalPosts: 0,
                currentPage: page,
            };
        }

        const tagId = tags[0].id;

        const { data, headers } = await wpFetch<WPPost[]>(
            `/posts?_embed&tags=${tagId}&page=${page}&per_page=${perPage}&orderby=date&order=desc`
        );

        const totalPosts = parseInt(headers.get('X-WP-Total') || '0', 10);
        const totalPages = parseInt(headers.get('X-WP-TotalPages') || '1', 10);

        return {
            posts: data.map(transformPost),
            totalPages,
            totalPosts,
            currentPage: page,
        };
    } catch (error) {
        console.error(`[WP API] getPostsByTag failed for "${tagSlug}":`, error);
        return {
            posts: [],
            totalPages: 0,
            totalPosts: 0,
            currentPage: page,
        };
    }
}

/**
 * Get all categories
 */
export async function getCategories(): Promise<WPCategory[]> {
    try {
        const { data } = await wpFetch<WPCategory[]>('/categories?per_page=100&hide_empty=true');
        return data;
    } catch (error) {
        console.error('[WP API] getCategories failed:', error);
        return [];
    }
}

/**
 * Get category by slug
 */
export async function getCategoryBySlug(slug: string): Promise<WPCategory | null> {
    try {
        const { data } = await wpFetch<WPCategory[]>(`/categories?slug=${encodeURIComponent(slug)}`);
        return data?.[0] || null;
    } catch (error) {
        console.error(`[WP API] getCategoryBySlug failed for "${slug}":`, error);
        return null;
    }
}

/**
 * Get all category slugs
 */
export async function getAllCategorySlugs(): Promise<string[]> {
    try {
        const { data } = await wpFetch<WPCategory[]>('/categories?per_page=100&hide_empty=true&_fields=slug');
        return data.map((cat) => cat.slug).filter((slug) => slug !== 'uncategorized');
    } catch (error) {
        console.error('[WP API] getAllCategorySlugs failed:', error);
        return [];
    }
}

/**
 * Get tag by slug
 */
export async function getTagBySlug(slug: string): Promise<WPTag | null> {
    try {
        const { data } = await wpFetch<WPTag[]>(`/tags?slug=${encodeURIComponent(slug)}`);
        return data?.[0] || null;
    } catch (error) {
        console.error(`[WP API] getTagBySlug failed for "${slug}":`, error);
        return null;
    }
}

/**
 * Get all tag slugs
 */
export async function getAllTagSlugs(): Promise<string[]> {
    try {
        const { data } = await wpFetch<WPTag[]>('/tags?per_page=100&hide_empty=true&_fields=slug');
        return data.map((tag) => tag.slug);
    } catch (error) {
        console.error('[WP API] getAllTagSlugs failed:', error);
        return [];
    }
}

/**
 * Search posts
 */
export async function searchPosts(
    query: string,
    page: number = 1,
    perPage: number = 9
): Promise<PaginatedPosts> {
    try {
        const { data, headers } = await wpFetch<WPPost[]>(
            `/posts?_embed&search=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`
        );

        const totalPosts = parseInt(headers.get('X-WP-Total') || '0', 10);
        const totalPages = parseInt(headers.get('X-WP-TotalPages') || '1', 10);

        return {
            posts: data.map(transformPost),
            totalPages,
            totalPosts,
            currentPage: page,
        };
    } catch (error) {
        console.error(`[WP API] searchPosts failed for "${query}":`, error);
        return {
            posts: [],
            totalPages: 0,
            totalPosts: 0,
            currentPage: page,
        };
    }
}
