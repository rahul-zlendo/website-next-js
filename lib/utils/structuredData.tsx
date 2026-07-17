/**
 * Structured Data (JSON-LD) Utilities for SEO
 */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Verified Capterra rating for Zlendo Realty. Same 5.0/5 from 5 reviews on both
 * listings: capterra.in/software/1085377/Zlendo-Realty (India, linked on-site)
 * and capterra.com/p/10036307/Zlendo-Realty (global).
 * Update ratingCount/reviewCount when new reviews are published — must reflect the real, current count.
 * No G2 profile exists yet for Zlendo Realty, so G2 is intentionally not cited here.
 */
export const ZLENDO_AGGREGATE_RATING = {
  '@type': 'AggregateRating',
  ratingValue: '5.0',
  bestRating: '5',
  worstRating: '1',
  ratingCount: '5',
  reviewCount: '5',
};

/**
 * Generate Organization schema for Global Website
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zlendo Technologies Pvt. Ltd.',
    url: 'https://zlendorealty.com',
    email: 'support@zlendorealty.com',
    description: 'Zlendo Realty is an AI-powered design software platform offering house and office design solutions for professionals and individuals.',
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
    description: 'Zlendo Realty is an AI-powered design software platform offering house and office design solutions for professionals and individuals.',
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
export function generateSoftwareApplicationSchema(isGlobal: boolean = false) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Zlendo Realty',
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: isGlobal ? 'USD' : 'INR',
    },
    description:
      'Zlendo Realty is an AI-powered design software platform offering house and office design solutions for professionals and individuals.',
    url: isGlobal ? 'https://zlendorealty.com' : 'https://zlendorealty.com/in',
    screenshot: 'https://zlendorealty.com/og-image.jpg',
    creator: {
      '@type': 'Organization',
      name: 'Zlendo Realty',
    },
    aggregateRating: ZLENDO_AGGREGATE_RATING,
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
 * Shape of an author/reviewer resolved from Sanity, used to build a
 * schema.org Person node. Project `image` to a URL string in your GROQ query.
 */
export interface PersonInput {
  name?: string;
  role?: string;
  worksFor?: string;
  bio?: string;
  credentials?: string[];
  image?: string;
  url?: string;
  sameAs?: string[];
}

/** Remove the top-level @context so a schema can be safely nested in another. */
function stripContext<T extends Record<string, unknown>>(node: T): Omit<T, '@context'> {
  const { ['@context']: _omit, ...rest } = node;
  return rest;
}

/**
 * Generate a schema.org Person node (EEAT author / reviewer).
 * Returns null when there is no name, so callers can conditionally render.
 */
export function generatePersonSchema(input?: PersonInput | null) {
  if (!input || !input.name) return null;

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: input.name,
  };
  if (input.role) schema.jobTitle = input.role;
  if (input.bio) schema.description = input.bio;
  if (input.url) schema.url = input.url;
  if (input.image) schema.image = input.image;
  if (input.worksFor) {
    schema.worksFor = { '@type': 'Organization', name: input.worksFor };
  }
  if (input.credentials?.length) {
    schema.hasCredential = input.credentials.map((name) => ({
      '@type': 'EducationalOccupationalCredential',
      name,
    }));
  }
  if (input.sameAs?.length) schema.sameAs = input.sameAs;
  return schema;
}

/**
 * Generate a WebPage schema that carries freshness + EEAT signals
 * (datePublished/dateModified and nested author / reviewer Person nodes).
 */
export function generateWebPageSchemaWithDates(page: {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: Record<string, unknown>;
  reviewedBy?: Record<string, unknown>;
}) {
  const schema: Record<string, unknown> = {
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
  if (page.datePublished) schema.datePublished = page.datePublished;
  if (page.dateModified) schema.dateModified = page.dateModified;
  if (page.author) schema.author = stripContext(page.author);
  if (page.reviewedBy) schema.reviewedBy = stripContext(page.reviewedBy);
  return schema;
}

/**
 * Generate Article structured data for a blog/news post.
 * Uses BlogPosting for the blog and NewsArticle for news, with EEAT author +
 * freshness dates. Ready for the /blog and /news routes (migration Phase 3).
 */
export function generateArticleSchema(post: {
  title: string;
  description?: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: PersonInput | null;
  section?: string;
}) {
  const authorNode = generatePersonSchema(post.author);
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': post.section === 'news' ? 'NewsArticle' : 'BlogPosting',
    headline: post.title,
    url: post.url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': post.url },
    publisher: {
      '@type': 'Organization',
      name: 'Zlendo Realty',
      logo: {
        '@type': 'ImageObject',
        url: 'https://zlendorealty.com/logo.png',
      },
    },
  };
  if (post.description) schema.description = post.description;
  if (post.image) schema.image = post.image;
  if (post.datePublished) schema.datePublished = post.datePublished;
  if (post.dateModified) schema.dateModified = post.dateModified;
  if (authorNode) schema.author = stripContext(authorNode);
  return schema;
}

/**
 * Generate Plans Product schema
 */
export function generatePlansSchema(isGlobal: boolean, country: string = 'in') {
  const isIndia = !isGlobal;

  const offers = isGlobal ? [
    {
      "@type": "Offer",
      "name": "Explore",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://zlendorealty.com/plans",
      "description": "Essential AI design tools for individuals getting started."
    },
    {
      "@type": "Offer",
      "name": "Builder",
      "price": "12",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://zlendorealty.com/plans",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "12",
        "priceCurrency": "USD",
        "billingDuration": 1,
        "billingIncrement": 1,
        "unitCode": "MON"
      },
      "description": "Powerful design features for renovation and single-room projects."
    },
    {
      "@type": "Offer",
      "name": "Discover",
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": "https://zlendorealty.com/plans",
      "description": "Free discovery plan for individuals in Europe."
    },
    {
      "@type": "Offer",
      "name": "Design Pro",
      "price": "27",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": "https://zlendorealty.com/plans",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "27",
        "priceCurrency": "EUR",
        "billingDuration": 1,
        "billingIncrement": 1,
        "unitCode": "MON"
      },
      "description": "Professional design tools for European creators."
    },
    {
      "@type": "Offer",
      "name": "Studio Elite",
      "price": "55",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": "https://zlendorealty.com/plans",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "55",
        "priceCurrency": "EUR",
        "billingDuration": 1,
        "billingIncrement": 1,
        "unitCode": "MON"
      },
      "description": "The ultimate design package for professional studios in Europe."
    }
  ] : [
    {
      "@type": "Offer",
      "name": "Free Plan",
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": `https://zlendorealty.com/${country}/plans`,
      "description": "Essential AI design tools for individuals getting started."
    },
    {
      "@type": "Offer",
      "name": "Basic Plan",
      "price": "499",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": `https://zlendorealty.com/${country}/plans`,
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "499",
        "priceCurrency": "INR",
        "billingDuration": 1,
        "billingIncrement": 1,
        "unitCode": "MON"
      },
      "description": "Powerful design features for renovation and single-room projects."
    },
    {
      "@type": "Offer",
      "name": "Power User Plan",
      "price": "999",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": `https://zlendorealty.com/${country}/plans`,
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "999",
        "priceCurrency": "INR",
        "billingDuration": 1,
        "billingIncrement": 1,
        "unitCode": "MON"
      },
      "description": "Advanced tools for high-volume designers and professionals."
    },
    {
      "@type": "Offer",
      "name": "Designer Plus Plan",
      "price": "1599",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": `https://zlendorealty.com/${country}/plans`,
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "1599",
        "priceCurrency": "INR",
        "billingDuration": 1,
        "billingIncrement": 1,
        "unitCode": "MON"
      },
      "description": "The ultimate package with premium renders and unlimited walkthroughs."
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Zlendo Realty Subscription Plans",
    "image": "https://zlendorealty.com/assets/og-image.png",
    "description": "AI-powered home design and visualization software with 2D planning, 3D conversion, walkthroughs, renders, BOQ estimation, and Vastu optimization.",
    "brand": {
      "@type": "Brand",
      "name": "Zlendo Realty"
    },
    "url": isGlobal ? "https://zlendorealty.com/plans" : `https://zlendorealty.com/${country}/plans`,
    "offers": offers
  };
}

/**
 * Render JSON-LD script tag
 * Returns a JSON string suitable for dangerouslySetInnerHTML
 */
export function getStructuredDataScript(data: object): string {
  return JSON.stringify(data);
}
