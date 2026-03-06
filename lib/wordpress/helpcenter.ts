import { createWpClient } from './factory';

// Environment configuration
const HC_BASE_URL = process.env.HC_BASE_URL || 'https://helpcenter.zlendorealty.com';
const REVALIDATE_SECONDS = parseInt(process.env.WP_REVALIDATE_SECONDS || '3600', 10);

// Help Center uses Custom Post Types from BetterDocs or similar
const hcClient = createWpClient(HC_BASE_URL, {
    revalidateSeconds: REVALIDATE_SECONDS,
    postType: 'docs',
    categoryTaxonomy: 'doc_category',
    tagTaxonomy: 'doc_tag'
});

// Export all methods from the help center client
export const {
    getPosts: getHcPosts,
    getPostBySlug: getHcPostBySlug,
    getTotalPostPages: getTotalHcPostPages,
    getAllPostSlugs: getAllHcPostSlugs,
    getPostsByCategory: getHcPostsByCategory,
    getPostsByTag: getHcPostsByTag,
    getCategories: getHcCategories,
    getCategoryBySlug: getHcCategoryBySlug,
    getAllCategorySlugs: getAllHcCategorySlugs,
    getTagBySlug: getHcTagBySlug,
    getAllTagSlugs: getAllHcTagSlugs,
    searchPosts: searchHcPosts,
    stripHtml: stripHcHtml,
} = hcClient;
