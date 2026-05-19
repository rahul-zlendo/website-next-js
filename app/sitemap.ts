import type { MetadataRoute } from 'next';

// Generate sitemap at runtime (not build-time) to avoid overwhelming WP API during deploy
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Cache for 1 hour

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
    { path: '/use-cases', priority: 0.8, changeFrequency: 'weekly' as const, isIndiaOnly: true },
    { path: '/use-case/home-remodeling', priority: 0.7, changeFrequency: 'monthly' as const, isIndiaOnly: true },
    { path: '/use-case/interior-design', priority: 0.7, changeFrequency: 'monthly' as const, isIndiaOnly: true },
    { path: '/use-case/vastu-optimization', priority: 0.7, changeFrequency: 'monthly' as const, isIndiaOnly: true },
    { path: '/use-case/new-home-building', priority: 0.7, changeFrequency: 'monthly' as const, isIndiaOnly: true },

    // Business use cases
    { path: '/business/commercial-spaces', priority: 0.7, changeFrequency: 'monthly' as const, isIndiaOnly: true },
    { path: '/business/builder-and-promoter', priority: 0.7, changeFrequency: 'monthly' as const, isIndiaOnly: true },
    { path: '/business/nri-remote-planning', priority: 0.7, changeFrequency: 'monthly' as const, isIndiaOnly: true },
    { path: '/business/developer-solutions', priority: 0.7, changeFrequency: 'monthly' as const, isIndiaOnly: true },
    { path: '/business/real-estate-brokers', priority: 0.7, changeFrequency: 'monthly' as const, isIndiaOnly: true },

    // Service pages
    { path: '/services/floor-plan-design', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/services/floor-plan-design/consultation', priority: 0.7, changeFrequency: 'monthly' as const },

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

  // Generate URLs for all territories (Global and India)
  const staticLastMod = new Date('2026-03-09T00:00:00Z');
  const dynamicLastMod = new Date();

  const urls: MetadataRoute.Sitemap = [];

  for (const route of routes as any[]) {
    if (route.isGlobal) {
      urls.push({
        url: `${BASE_URL}${route.path}`,
        lastModified: route.changeFrequency === 'daily' ? dynamicLastMod : staticLastMod,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
      continue;
    }

    // Add Global URL (Skip if India Only)
    if (!route.isIndiaOnly) {
      urls.push({
        url: `${BASE_URL}${route.path}`,
        lastModified: route.changeFrequency === 'daily' ? dynamicLastMod : staticLastMod,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    }

    // Add India URL (/in)
    urls.push({
      url: `${BASE_URL}/in${route.path}`,
      lastModified: route.changeFrequency === 'daily' ? dynamicLastMod : staticLastMod,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    });
  }

  return urls;
}
