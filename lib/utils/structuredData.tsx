/**
 * Structured Data (JSON-LD) Utilities for SEO
 */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Generate Organization schema for Global Website
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zlendo Technologies Pvt. Ltd.',
    url: 'https://zlendorealty.com/',
    email: 'support@zlendorealty.com',
    description: 'Zlendo Realty is a global real estate and design software platform offering house and office design solutions for professionals and individuals.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '36/1, Ganapathy Street, Alagappan Nagar',
      addressLocality: 'Madurai',
      postalCode: '625003',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN'
    },
    areaServed: [
      'India',
      'Pune',
      'Bengaluru',
      'Delhi',
      'Hyderabad'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@zlendorealty.com',
      contactType: 'customer support',
      availableLanguage: ['English', 'Hindi', 'Tamil']
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
 * Generate LocalBusiness schema for India Website
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Zlendo Realty',
    url: 'https://zlendorealty.com/in',
    email: 'support@zlendorealty.com',
    telephone: '+91 8047135989',
    description: 'Zlendo Realty is a real estate and design software platform offering house and office design solutions for professionals and individuals.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '36/1, Ganapathy Street, Alagappan Nagar',
      addressLocality: 'Madurai',
      postalCode: '625003',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN'
    },
    areaServed: [
      {
        '@type': 'City',
        'name': 'Pune'
      },
      {
        '@type': 'City',
        'name': 'Bengaluru'
      },
      {
        '@type': 'City',
        'name': 'Delhi'
      },
      {
        '@type': 'City',
        'name': 'Hyderabad'
      },
      {
        '@type': 'Country',
        'name': 'India'
      }
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91 8047135989',
      contactType: 'customer support',
      email: 'support@zlendorealty.com',
      availableLanguage: ['English', 'Hindi', 'Tamil']
    }
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
