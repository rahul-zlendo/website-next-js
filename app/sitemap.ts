import type { MetadataRoute } from 'next';
// import { getAllHcPostSlugs, getAllHcCategorySlugs, getAllHcTagSlugs, getTotalHcPostPages } from '@/lib/wordpress/helpcenter';

// Generate sitemap at runtime (not build-time) to avoid overwhelming WP API during deploy
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Cache for 1 hour

const SUPPORTED_COUNTRIES = ['in'];
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
    { path: '/products/vr-studio', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/products/api-suite', priority: 0.8, changeFrequency: 'weekly' as const },

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
    { path: '/business/builder-and-promoter', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/business/nri-remote-planning', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/business/developer-solutions', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/business/real-estate-brokers', priority: 0.7, changeFrequency: 'monthly' as const },

    // Landing / Campaign pages
    { path: '/vastu-campaign', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/register', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/tutorials', priority: 0.7, changeFrequency: 'weekly' as const },

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

    // Help center (Commented out to use external subdomain)
    // { path: '/help-center', priority: 0.7, changeFrequency: 'weekly' as const, isGlobal: true },
  ];

  // Generate URLs for all countries
  const staticLastMod = new Date('2026-03-09T00:00:00Z');
  const dynamicLastMod = new Date(); 

  const urls: MetadataRoute.Sitemap = [];

  for (const country of SUPPORTED_COUNTRIES) {
    for (const route of routes as any[]) {
      if (route.isGlobal) continue;
      urls.push({
        url: `${BASE_URL}/${country}${route.path}`,
        lastModified: route.changeFrequency === 'daily' ? dynamicLastMod : staticLastMod,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    }
  }

  // Add global routes (like Help Center)
  const globalRoutes = (routes as any[]).filter(r => r.isGlobal);
  for (const route of globalRoutes) {
    urls.push({
      url: `${BASE_URL}${route.path}`,
      lastModified: route.changeFrequency === 'daily' ? dynamicLastMod : staticLastMod,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    });
  }

  // Note: Root URL (/) is deliberately excluded — it redirects to /in via middleware.
  // The /in entry (priority 1.0) is the canonical home page URL.

  // Fetch help center articles from WordPress (Commented out to use external subdomain)
  /*
  try {
    // Add all paginated HC listing pages
    const { totalPages: hcTotalPages } = await getTotalHcPostPages(9);
    for (let page = 2; page <= hcTotalPages; page++) {
      urls.push({
        url: `${BASE_URL}/help-center?page=${page}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      });
    }

    // Add individual HC article URLs
    const hcPostSlugs = await getAllHcPostSlugs();
    for (const slug of hcPostSlugs) {
      urls.push({
        url: `${BASE_URL}/help-center/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }

    // Fetch HC categories
    const hcCategorySlugs = await getAllHcCategorySlugs();
    for (const slug of hcCategorySlugs) {
      urls.push({
        url: `${BASE_URL}/help-center/category/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
      });
    }

    // Fetch HC tags
    const hcTagSlugs = await getAllHcTagSlugs();
    for (const slug of hcTagSlugs) {
      urls.push({
        url: `${BASE_URL}/help-center/tag/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      });
    }
  } catch (error) {
    console.error('[Sitemap] Failed to fetch help center content:', error);
  }
  */

  return urls;
}
