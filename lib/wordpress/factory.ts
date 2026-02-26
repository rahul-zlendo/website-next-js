import {
    WPPost,
    WPCategory,
    WPTag,
    BlogPost,
    PaginatedPosts,
} from './types';

export interface WpClientConfig {
    revalidateSeconds?: number;
    postType?: string;
    categoryTaxonomy?: string;
    tagTaxonomy?: string;
}

/**
 * Factory to create WordPress API clients for different base URLs
 */
export function createWpClient(baseUrl: string, config: WpClientConfig = {}) {
    const {
        revalidateSeconds = 3600,
        postType = 'posts',
        categoryTaxonomy = 'categories',
        tagTaxonomy = 'tags'
    } = config;

    const WP_API_URL = `${baseUrl}/wp-json/wp/v2`;

    /**
     * Generic fetch helper with error handling, retries and caching
     */
    async function wpFetch<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<{ data: T; headers: Headers }> {
        const url = `${WP_API_URL}${endpoint}`;
        const maxRetries = 3;
        let attempt = 0;
        let lastError: Error | null = null;
        const baseDelay = 1000;

        while (attempt <= maxRetries) {
            try {
                const response = await fetch(url, {
                    ...options,
                    next: { revalidate: revalidateSeconds },
                    headers: {
                        'Content-Type': 'application/json',
                        ...options.headers,
                    },
                });

                if (!response.ok) {
                    throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();
                return { data, headers: response.headers };
            } catch (error) {
                lastError = error instanceof Error ? error : new Error(String(error));

                // Do not retry client errors (4xx) except for rate limits (429)
                const isClientError = lastError.message.includes('error: 4') && !lastError.message.includes('429');
                if (isClientError) {
                    break;
                }

                if (attempt < maxRetries) {
                    const delay = baseDelay * Math.pow(2, attempt) + Math.random() * 500;
                    console.log(`[WP API] Retry ${attempt + 1}/${maxRetries} for ${url} after ${Math.round(delay)}ms`);
                    await new Promise(resolve => setTimeout(resolve, delay));
                }
                attempt++;
            }
        }

        console.error(`[WP API] Failed to fetch ${url} after ${attempt} attempts:`, lastError);
        throw lastError!;
    }

    /**
     * Strip HTML tags from string
     */
    function stripHtml(html: string): string {
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
        const terms = post._embedded?.['wp:term'] || [];

        // Flatten terms and find relevant categories/tags
        const allTerms = terms.flat();

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
            categories: allTerms
                .filter((term) => term.taxonomy === categoryTaxonomy)
                .map((cat) => ({
                    id: cat.id,
                    name: cat.name,
                    slug: cat.slug,
                })),
            tags: allTerms
                .filter((term) => term.taxonomy === tagTaxonomy)
                .map((tag) => ({
                    id: tag.id,
                    name: tag.name,
                    slug: tag.slug,
                })),
            readingTime: calculateReadingTime(post.content.rendered),
        };
    }

    return {
        /**
         * Get paginated posts
         */
        getPosts: async (page: number = 1, perPage: number = 9): Promise<PaginatedPosts> => {
            try {
                const { data, headers } = await wpFetch<WPPost[]>(
                    `/${postType}?_embed&page=${page}&per_page=${perPage}&orderby=date&order=desc`
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
                console.error(`[WP API] getPosts failed for ${postType}:`, error);
                throw error;
            }
        },

        /**
         * Get single post by slug
         */
        getPostBySlug: async (slug: string): Promise<BlogPost | null> => {
            try {
                const normalizedSlug = slug.toLowerCase();
                let { data } = await wpFetch<WPPost[]>(`/${postType}?_embed&slug=${encodeURIComponent(normalizedSlug)}`);

                if (!data || data.length === 0) {
                    // Try pages if posts doesn't match?
                    if (postType === 'posts') {
                        try {
                            const pagesResponse = await wpFetch<WPPost[]>(`/pages?_embed&slug=${encodeURIComponent(normalizedSlug)}`);
                            if (pagesResponse.data && pagesResponse.data.length > 0) {
                                return transformPost(pagesResponse.data[0]);
                            }
                        } catch (pageError) {
                            // ignore page fetch error and return null below
                        }
                    }
                    return null;
                }

                return transformPost(data[0]);
            } catch (error) {
                console.error(`[WP API] getPostBySlug failed for ${postType} slug "${slug}":`, error);
                throw error;
            }
        },

        /**
         * Get total number of pages for listing
         */
        getTotalPostPages: async (perPage: number = 9): Promise<{ totalPages: number; totalPosts: number }> => {
            try {
                const { headers } = await wpFetch<WPPost[]>(
                    `/${postType}?per_page=${perPage}&page=1&_fields=id`
                );

                const totalPosts = parseInt(headers.get('X-WP-Total') || '0', 10);
                const totalPages = parseInt(headers.get('X-WP-TotalPages') || '1', 10);

                return { totalPages, totalPosts };
            } catch (error) {
                console.error(`[WP API] getTotalPostPages failed for ${postType}:`, error);
                throw error;
            }
        },

        /**
         * Get all post slugs for static generation
         */
        getAllPostSlugs: async (): Promise<string[]> => {
            const slugs: string[] = [];
            let page = 1;
            let totalPages = 1;

            try {
                const { data: firstPageData, headers } = await wpFetch<WPPost[]>(
                    `/${postType}?per_page=100&page=1&_fields=slug`
                );

                slugs.push(...firstPageData.map((post) => post.slug));
                totalPages = parseInt(headers.get('X-WP-TotalPages') || '1', 10);

                for (page = 2; page <= totalPages; page++) {
                    try {
                        const { data } = await wpFetch<WPPost[]>(
                            `/${postType}?per_page=100&page=${page}&_fields=slug`
                        );
                        slugs.push(...data.map((post) => post.slug));
                    } catch (pageError) {
                        console.error(`[WP API] getAllPostSlugs failed for ${postType} on page ${page}/${totalPages}, continuing...`, pageError);
                    }
                }
            } catch (error) {
                console.error(`[WP API] getAllPostSlugs failed for ${postType} on initial request:`, error);
                throw error;
            }

            return slugs;
        },

        /**
         * Get posts by category slug
         */
        getPostsByCategory: async (categorySlug: string, page: number = 1, perPage: number = 9): Promise<PaginatedPosts> => {
            try {
                const { data: categories } = await wpFetch<WPCategory[]>(
                    `/${categoryTaxonomy}?slug=${encodeURIComponent(categorySlug.toLowerCase())}`
                );

                if (!categories || categories.length === 0) {
                    return { posts: [], totalPages: 0, totalPosts: 0, currentPage: page };
                }

                const categoryId = categories[0].id;
                const { data, headers } = await wpFetch<WPPost[]>(
                    `/${postType}?_embed&${categoryTaxonomy}=${categoryId}&page=${page}&per_page=${perPage}&orderby=date&order=desc`
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
                console.error(`[WP API] getPostsByCategory failed for "${categorySlug}" in ${categoryTaxonomy}:`, error);
                throw error;
            }
        },

        /**
         * Get posts by tag slug
         */
        getPostsByTag: async (tagSlug: string, page: number = 1, perPage: number = 9): Promise<PaginatedPosts> => {
            try {
                const { data: tags } = await wpFetch<WPTag[]>(
                    `/${tagTaxonomy}?slug=${encodeURIComponent(tagSlug.toLowerCase())}`
                );

                if (!tags || tags.length === 0) {
                    return { posts: [], totalPages: 0, totalPosts: 0, currentPage: page };
                }

                const tagId = tags[0].id;
                const { data, headers } = await wpFetch<WPPost[]>(
                    `/${postType}?_embed&${tagTaxonomy}=${tagId}&page=${page}&per_page=${perPage}&orderby=date&order=desc`
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
                console.error(`[WP API] getPostsByTag failed for "${tagSlug}" in ${tagTaxonomy}:`, error);
                throw error;
            }
        },

        /**
         * Get all categories
         */
        getCategories: async (): Promise<WPCategory[]> => {
            try {
                const { data } = await wpFetch<WPCategory[]>(`/${categoryTaxonomy}?per_page=100&hide_empty=true`);
                return data;
            } catch (error) {
                console.error(`[WP API] getCategories failed for ${categoryTaxonomy}:`, error);
                throw error;
            }
        },

        /**
         * Get category by slug
         */
        getCategoryBySlug: async (slug: string): Promise<WPCategory | null> => {
            try {
                const { data } = await wpFetch<WPCategory[]>(`/${categoryTaxonomy}?slug=${encodeURIComponent(slug.toLowerCase())}`);
                return data?.[0] || null;
            } catch (error) {
                console.error(`[WP API] getCategoryBySlug failed for "${slug}" in ${categoryTaxonomy}:`, error);
                throw error;
            }
        },

        /**
         * Get all category slugs
         */
        getAllCategorySlugs: async (): Promise<string[]> => {
            try {
                const { data } = await wpFetch<WPCategory[]>(`/${categoryTaxonomy}?per_page=100&hide_empty=true&_fields=slug`);
                return data.map((cat) => cat.slug).filter((slug) => slug !== 'uncategorized');
            } catch (error) {
                console.error(`[WP API] getAllCategorySlugs failed for ${categoryTaxonomy}:`, error);
                throw error;
            }
        },

        /**
         * Get tag by slug
         */
        getTagBySlug: async (slug: string): Promise<WPTag | null> => {
            try {
                const { data } = await wpFetch<WPTag[]>(`/${tagTaxonomy}?slug=${encodeURIComponent(slug.toLowerCase())}`);
                return data?.[0] || null;
            } catch (error) {
                console.error(`[WP API] getTagBySlug failed for "${slug}" in ${tagTaxonomy}:`, error);
                throw error;
            }
        },

        /**
         * Get all tag slugs
         */
        getAllTagSlugs: async (): Promise<string[]> => {
            try {
                const { data } = await wpFetch<WPTag[]>(`/${tagTaxonomy}?per_page=100&hide_empty=true&_fields=slug`);
                return data.map((tag) => tag.slug);
            } catch (error) {
                console.error(`[WP API] getAllTagSlugs failed for ${tagTaxonomy}:`, error);
                throw error;
            }
        },

        /**
         * Search posts
         */
        searchPosts: async (query: string, page: number = 1, perPage: number = 9): Promise<PaginatedPosts> => {
            try {
                const { data, headers } = await wpFetch<WPPost[]>(
                    `/${postType}?_embed&search=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`
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
                console.error(`[WP API] searchPosts failed for ${postType} query "${query}":`, error);
                throw error;
            }
        },

        /**
         * Strip HTML tags
         */
        stripHtml,
    };
}
