/**
 * Structured Data (JSON-LD) Utilities for SEO
 */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zlendo Realty',
    url: 'https://zlendorealty.com',
    logo: 'https://zlendorealty.com/logo.png',
    description:
      'Free 3D Home Design & Floor Planning Software. Explore powerful tools and resources to design your perfect space',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@zlendorealty.com',
      contactType: 'Customer Support',
      areaServed: ['IN'],
    },
    sameAs: [
      'https://www.linkedin.com/showcase/zlendo-realty',
      'https://www.facebook.com/people/Zlendo-Realty/61585610645980/',
      'https://www.instagram.com/zlendorealty/',
      'https://x.com/ZlendoRealty',
      'https://www.youtube.com/@zlendorealty',
    ],
  };
}

/**
 * Generate WebSite schema (enables Google Sitelinks Searchbox)
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Zlendo Realty',
    url: 'https://zlendorealty.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://zlendorealty.com/in/help-center?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate SoftwareApplication schema (enables software rich results)
 */
export function generateSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Zlendo Realty',
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    description:
      'AI-powered 3D home design and floor planning software for architects, builders, interior designers, and vastu consultants.',
    url: 'https://zlendorealty.com/in',
    screenshot: 'https://zlendorealty.com/og-image.jpg',
    creator: {
      '@type': 'Organization',
      name: 'Zlendo Realty',
    },
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate Product schema
 */
export function generateProductSchema(product: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    url: product.url,
    image: product.image || 'https://zlendorealty.com/og-image.jpg',
    brand: {
      '@type': 'Brand',
      name: 'Zlendo Realty',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate WebPage schema
 */
export function generateWebPageSchema(page: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.name,
    description: page.description,
    url: page.url,
    publisher: {
      '@type': 'Organization',
      name: 'Zlendo Realty',
      logo: {
        '@type': 'ImageObject',
        url: 'https://zlendorealty.com/logo.png',
      },
    },
  };
}

/**
 * Render JSON-LD script tag
 * Returns a JSON string suitable for dangerouslySetInnerHTML
 */
export function getStructuredDataScript(data: object): string {
  return JSON.stringify(data);
}
