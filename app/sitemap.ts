import type { MetadataRoute } from 'next';
import { readClient } from '@/lib/sanity/client';
import { blogPostsSitemapQuery } from '@/lib/sanity/queries';
import { API_BASE_URL, DEFAULT_API_TOKEN } from '@/lib/config/env';
import { encryptProjectId } from '@/lib/utils/encryptionUtils';

// Helper safely parses dates from external APIs. Returning fallback if invalid.
function parseSafeDate(dateString: string | undefined | null, fallback: Date): Date {
  if (!dateString) return fallback;
  const parsed = new Date(dateString);
  return isNaN(parsed.getTime()) ? fallback : parsed;
}

// The sitemap is a static route table (no CMS/API calls), so it can be
// statically generated and refreshed hourly. `force-dynamic` was left over
// from a WordPress-era implementation that fetched posts at request time and
// is no longer needed — it only added per-request rendering cost.
export const revalidate = 3600; // Regenerate at most once per hour

const BASE_URL = 'https://zlendorealty.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    // Core pages
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    // India-only: there is no app/global/individuals route, so the global
    // /individuals URL has no page to resolve to. Only advertise /in.
    { path: '/individuals', priority: 0.9, changeFrequency: 'weekly' as const, isIndiaOnly: true },
    { path: '/business', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/plans', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/partners', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/about-us', priority: 0.7, changeFrequency: 'monthly' as const },

    // Industries pages
    { path: '/industries/real-estate', priority: 0.9, changeFrequency: 'weekly' as const, isGlobal: true },
    { path: '/industries/architecture', priority: 0.9, changeFrequency: 'weekly' as const, isGlobal: true },

    // Product pages
    { path: '/products', priority: 0.9, changeFrequency: 'weekly' as const, isGlobal: true },
    { path: '/products/floor-planner', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/products/cost-estimator', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/products/interiors-exteriors', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/products/virtual-walkthrough', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/products/realistic-renders', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/products/2d-to-3d', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/products/vastu', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/products/room-styler', priority: 0.8, changeFrequency: 'weekly' as const },
    // India-only: there is no app/global/products/vr-studio route, so the
    // global /products/vr-studio URL 404s. Only advertise the /in variant.
    { path: '/products/vr-studio', priority: 0.9, changeFrequency: 'weekly' as const, isIndiaOnly: true },
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
    { path: '/services/interior-design', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/services/interior-design/consultation', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/2d-to-3d', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/services/2d-to-3d/consultation', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/vastu-consultation', priority: 0.7, changeFrequency: 'monthly' as const, isIndiaOnly: true },
    { path: '/services/vastu-consultation/consultation', priority: 0.7, changeFrequency: 'monthly' as const, isIndiaOnly: true },
    { path: '/services/virtual-walkthrough', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/virtual-walkthrough/consultation', priority: 0.7, changeFrequency: 'monthly' as const },

    // Landing / Campaign pages
    // India-only: neither has an app/global equivalent, so the global URL 404s.
    { path: '/vastu-campaign', priority: 0.8, changeFrequency: 'weekly' as const, isIndiaOnly: true },
    { path: '/register', priority: 0.7, changeFrequency: 'monthly' as const, isIndiaOnly: true },
    { path: '/tutorials', priority: 0.7, changeFrequency: 'weekly' as const },

    // Events pages (Locale-neutral)
    { path: '/events', priority: 0.9, changeFrequency: 'weekly' as const, isGlobal: true },
    { path: '/events/on-demand', priority: 0.8, changeFrequency: 'weekly' as const, isGlobal: true },
    { path: '/events/register', priority: 0.7, changeFrequency: 'monthly' as const, isGlobal: true },

    // College learning pages
    { path: '/colleges/partnerships', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/colleges/workshops', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/colleges/certifications', priority: 0.8, changeFrequency: 'monthly' as const },

    // Policy pages
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'monthly' as const },
    { path: '/terms-of-service', priority: 0.3, changeFrequency: 'monthly' as const },
    { path: '/cookie-policy', priority: 0.3, changeFrequency: 'monthly' as const },
    // /dpa and /nda-customers have no global content (they're absent from
    // policiesData), so the global URLs 308 to the homepage. A sitemap must
    // never advertise a redirecting URL — list only the /in variant, which is
    // where the actual document lives.
    { path: '/dpa', priority: 0.3, changeFrequency: 'monthly' as const, isIndiaOnly: true },
    { path: '/general-terms', priority: 0.3, changeFrequency: 'monthly' as const },
    { path: '/nda-customers', priority: 0.3, changeFrequency: 'monthly' as const, isIndiaOnly: true },
    { path: '/nda-vendors', priority: 0.3, changeFrequency: 'monthly' as const },
    { path: '/refund-policy', priority: 0.3, changeFrequency: 'monthly' as const },
    { path: '/sla', priority: 0.3, changeFrequency: 'monthly' as const },
    { path: '/community-guidelines', priority: 0.3, changeFrequency: 'monthly' as const },

    // Help center (Commented out to use external subdomain)
    // { path: '/help-center', priority: 0.7, changeFrequency: 'weekly' as const, isGlobal: true },

    // Compare pages
    { path: '/compare', priority: 0.9, changeFrequency: 'monthly' as const, isGlobal: true },
    { path: '/compare/zlendo-realty-vs-foyr-neo', priority: 0.9, changeFrequency: 'monthly' as const, isGlobal: true },
    { path: '/compare/zlendo-realty-vs-roomsketcher', priority: 0.9, changeFrequency: 'monthly' as const, isGlobal: true },
    { path: '/compare/zlendo-realty-vs-coohom', priority: 0.9, changeFrequency: 'monthly' as const, isGlobal: true },
    // Added in 5bc6936 as hardcoded routes (not KNOWN_COMPARE_SLUGS entries, so
    // the [slug] route never advertised them). Both locales verified 200.
    { path: '/compare/zlendo-realty-vs-planner5d', priority: 0.9, changeFrequency: 'monthly' as const, isGlobal: true },
    { path: '/compare/zlendo-realty-vs-sketchup', priority: 0.9, changeFrequency: 'monthly' as const, isGlobal: true },
    { path: '/compare/zlendo-realty-vs-maket', priority: 0.9, changeFrequency: 'monthly' as const, isGlobal: true },
    { path: '/compare/zlendo-realty-vs-snaptrude', priority: 0.9, changeFrequency: 'monthly' as const, isGlobal: true },
    { path: '/compare/best-foyr-neo-alternatives', priority: 0.8, changeFrequency: 'monthly' as const, isGlobal: true },
    { path: '/compare/best-roomsketcher-alternatives', priority: 0.8, changeFrequency: 'monthly' as const, isGlobal: true },
    { path: '/compare/best-ai-floor-plan-software', priority: 0.9, changeFrequency: 'monthly' as const, isGlobal: true },
    { path: '/compare/best-2d-to-3d-floor-plan-converter', priority: 0.9, changeFrequency: 'monthly' as const, isGlobal: true },
    { path: '/compare/coohom-vs-maket-vs-snaptrude', priority: 0.8, changeFrequency: 'monthly' as const, isGlobal: true },

    // Guide pages
    { path: '/guides/vastu-design-software', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/guides/how-to-create-floor-plan-online', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/guides/9d-visualization', priority: 0.8, changeFrequency: 'monthly' as const },

    // Segment pages (India only)
    { path: '/for/interior-designers', priority: 0.9, changeFrequency: 'monthly' as const, isIndiaOnly: true },
    { path: '/for/architects', priority: 0.9, changeFrequency: 'monthly' as const, isIndiaOnly: true },
    { path: '/for/vastu-consultants', priority: 0.8, changeFrequency: 'monthly' as const, isIndiaOnly: true },
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

  // Fetch dynamic template routes for sitemap
  try {
    const res = await fetch(`${API_BASE_URL}/TemplateMaster/GetAllActiveTemplate?RegionId=0`, {
      method: 'GET',
      headers: {
        'zrealtyserviceapikey': DEFAULT_API_TOKEN,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 }
    });

    if (res.ok) {
      const data = await res.json();
      const templates = data.templateList || [];

      for (const template of templates) {
        if (template && template.template_Id) {
          const encryptedId = encryptProjectId(template.template_Id);
          const templateLastMod = parseSafeDate(template.updatedOn, dynamicLastMod);

          // Add Global Template URL
          urls.push({
            url: `${BASE_URL}/template-detail?templateId=${encryptedId}`,
            lastModified: templateLastMod,
            changeFrequency: 'weekly',
            priority: 0.8,
          });

          // Add Indian Template URL
          urls.push({
            url: `${BASE_URL}/in/template-detail?templateId=${encryptedId}`,
            lastModified: templateLastMod,
            changeFrequency: 'weekly',
            priority: 0.8,
          });
        }
      }
    }
  } catch (err) {
    console.error("Sitemap: Failed to fetch templates for sitemap generation", err);
  }

  // Blog — flat, locale-neutral URLs (no /in variant), migrated from WordPress.
  urls.push({
    url: `${BASE_URL}/blog`,
    lastModified: dynamicLastMod,
    changeFrequency: 'daily',
    priority: 0.8,
  });

  // Design Battle campaign — locale-neutral like the blog (middleware serves it
  // at the flat URL with no /in variant), so it cannot go through the
  // global + /in route loop above without advertising an /in URL that 404s.
  urls.push({
    url: `${BASE_URL}/design-battle`,
    lastModified: dynamicLastMod,
    changeFrequency: 'weekly',
    priority: 0.8,
  });

  try {
    const posts = await readClient.fetch<{ slug: string; publishedAt?: string; updatedAt?: string }[]>(
      blogPostsSitemapQuery
    );
    for (const post of posts) {
      const bestDate = post.updatedAt || post.publishedAt;
      urls.push({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: parseSafeDate(bestDate, dynamicLastMod),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  } catch (err) {
    console.error('Sitemap: Failed to fetch blog posts from Sanity', err);
  }

  return urls;
}
