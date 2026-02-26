import { createWpClient } from './factory';

// Environment configuration
const WP_BASE_URL = process.env.WP_BASE_URL || 'https://blog.zlendorealty.com';
const REVALIDATE_SECONDS = parseInt(process.env.WP_REVALIDATE_SECONDS || '3600', 10);

const blogClient = createWpClient(WP_BASE_URL, {
    revalidateSeconds: REVALIDATE_SECONDS,
    postType: 'posts',
    categoryTaxonomy: 'categories',
    tagTaxonomy: 'tags'
});

// Export all methods from the blog client
export const {
    getPosts,
    getPostBySlug,
    getTotalPostPages,
    getAllPostSlugs,
    getPostsByCategory,
    getPostsByTag,
    getCategories,
    getCategoryBySlug,
    getAllCategorySlugs,
    getTagBySlug,
    getAllTagSlugs,
    searchPosts,
    stripHtml,
} = blogClient;
