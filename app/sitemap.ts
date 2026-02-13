import type { MetadataRoute } from 'next';
import { getAllPostSlugs, getAllCategorySlugs, getAllTagSlugs } from '@/lib/wordpress/api';
import { getAllDocSlugs, getAllDocCategorySlugs } from '@/lib/helpcenter/api';

const SUPPORTED_COUNTRIES = ['in', 'us', 'uk', 'eu', 'au'];
const BASE_URL = 'https://zlendorealty.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    // Core pages
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/individuals', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/business', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/plans', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/partners', priority: 0.7, changeFrequency: 'monthly' as const },

    // Product pages
    { path: '/products/floor-planner', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/products/cost-estimator', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/products/interiors-exteriors', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/products/virtual-walkthrough', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/products/realistic-renders', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/products/2d-to-3d', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/products/vastu', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/products/room-styler', priority: 0.8, changeFrequency: 'weekly' as const },

    // Template pages
    { path: '/viewalltemplates', priority: 0.8, changeFrequency: 'daily' as const },

    // Use case pages
    { path: '/use-cases', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/use-case/home-remodeling', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/use-case/interior-design', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/use-case/vastu-optimization', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/use-case/new-home-building', priority: 0.7, changeFrequency: 'monthly' as const },

    // Business use cases
    { path: '/business/commercial-spaces', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/business/real-estate-brokers', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/business/nri-remote-planning', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/business/developer-solutions', priority: 0.7, changeFrequency: 'monthly' as const },

    // Policy pages
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'monthly' as const },
    { path: '/terms-of-service', priority: 0.3, changeFrequency: 'monthly' as const },
    { path: '/cookie-policy', priority: 0.3, changeFrequency: 'monthly' as const },
    { path: '/dpa', priority: 0.3, changeFrequency: 'monthly' as const },
    { path: '/general-terms', priority: 0.3, changeFrequency: 'monthly' as const },
    { path: '/nda-customers', priority: 0.3, changeFrequency: 'monthly' as const },
    { path: '/nda-vendors', priority: 0.3, changeFrequency: 'monthly' as const },
    { path: '/refund-policy', priority: 0.3, changeFrequency: 'monthly' as const },
    { path: '/sla', priority: 0.3, changeFrequency: 'monthly' as const },
    { path: '/community-guidelines', priority: 0.3, changeFrequency: 'monthly' as const },

    // Help center
    { path: '/help-center', priority: 0.7, changeFrequency: 'weekly' as const },
  ];

  // Generate URLs for all countries
  const urls: MetadataRoute.Sitemap = [];

  for (const country of SUPPORTED_COUNTRIES) {
    for (const route of routes) {
      urls.push({
        url: `${BASE_URL}/${country}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    }
  }

  // Add root URL
  urls.unshift({
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
  });

  // Add blog index page
  urls.push({
    url: `${BASE_URL}/blog`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
  });

  // Fetch blog posts from WordPress
  try {
    const postSlugs = await getAllPostSlugs();
    for (const slug of postSlugs) {
      urls.push({
        url: `${BASE_URL}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }

    const categorySlugs = await getAllCategorySlugs();
    for (const slug of categorySlugs) {
      urls.push({
        url: `${BASE_URL}/blog/category/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
      });
    }

    const tagSlugs = await getAllTagSlugs();
    for (const slug of tagSlugs) {
      urls.push({
        url: `${BASE_URL}/blog/tag/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      });
    }
  } catch (error) {
    console.error('[Sitemap] Failed to fetch blog content:', error);
  }

  // Fetch help center docs from WordPress (BetterDocs)
  try {
    const docSlugs = await getAllDocSlugs();
    for (const slug of docSlugs) {
      urls.push({
        url: `${BASE_URL}/help-center/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
      });
    }

    const docCatSlugs = await getAllDocCategorySlugs();
    for (const slug of docCatSlugs) {
      urls.push({
        url: `${BASE_URL}/help-center/category/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      });
    }
  } catch (error) {
    console.error('[Sitemap] Failed to fetch help center content:', error);
  }

  return urls;
}
