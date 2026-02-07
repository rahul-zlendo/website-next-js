import type { MetadataRoute } from 'next';

const SUPPORTED_COUNTRIES = ['in', 'us', 'uk', 'eu', 'au'];
const BASE_URL = 'https://app.zlendorealty.com';

export default function sitemap(): MetadataRoute.Sitemap {
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

  return urls;
}
