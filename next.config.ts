import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Exclude old src directory from build
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  webpack: (config) => {
    // Exclude src directory from webpack
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/node_modules', '**/src/**', '**/.git/**'],
    };
    return config;
  },

  // API proxy configuration
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://prodapi.zlendorealty.com/api/:path*',
      },
    ];
  },

  async redirects() {
    const newsRedirects = [
      'dyson-wall-fans-smart-cooling-for-homes',
      'private-rooms-in-tirumala-a-complete-guide',
      'mantralayam-temple-room-booking-guide',
      'bangla-sahib-room-booking',
      'ttd-srinivasam-room-booking',
      'gurudwara-sis-ganj-sahib-roombook',
      'gopalbari-jaipur-a-closer-look',
      'the-great-indian-kitchen-where-to-watch',
      'kabita-net-worth-success-story-the-growth',
      'wall-recess-meaning-crossword-answers-tips',
      'gurudwara-bala-sahib-room-booking-guide',
      'kabita-singh-net-worth-success',
      'l-shaped-house-vastu-practical-design',
      'cell-walls-explained-human-cells-built',
      'bathroom-under-stairs-vastu-your-home',
      'manilaxmi-jain-tirth-room-book',
      'lakshmi-ganesh-saraswati-guide',
      'nakodaji-room-booking-contact',
      'west-facing-house-suitable-for-your-rashi',
      'chennai-egmore-railway-station-retiringroom',
      'ramachandra-hospital-room-charges-pricing',
      'palani-devasthanam-room-booking-guide',
      'adjacent-room-in-hotel-meaning-benefits',
      'plinth-wall-explained-purpose-benefits',
      'iskcon-temple-direction-guide-your-path',
      'fluted-glass-price-guide-uses-and-cost',
      'kwality-walls-quick-guide',
      'delhi-gymkhana-club-room-rates',
      'how-to-book-room-at-isha-yoga-centre',
      'quad-sharing-meaning-what-it-is-features',
      'tiruchendur-devasthanam-contact',
      'bangla-sahib-contact-number-booking',
      'cat-on-the-wall-meaning-usage',
      'bhubaneswar-railway-station',
      'kitchen-window-height-a-practical-guide',
      'seminar-room-meaning-purpose-key-features',
      'plus-minus-pop-design-for-gallery',
      'seven-kitchen-concept-a-unique-dining',
      'podium-decoration-ideas-simple-ways',
      'owl-in-house-vastu-meaning-beliefs',
      'maid-room-concept-explained-meaning',
      'chennai-international-aiport',
      'suhagrat-decoration-ideas-for-small-bedroom',
      'sange-mar-mar-stone-price-guide-cost',
      'max-hospital-saket-room-charges',
      'vishnu-nivasam-quick-guide-to-booking',
      'sarjapur-future-metro-station-plan',
      'private-rooms-in-tirumala-your-quick-stay',
      'understanding-by-feist-meaning-themes',
      'yashoda-hospital-room-charges',
      'sports-day-decoration-ideas-creative-ways',
      'malls-in-vaishali-ghaziabad-complete-guide',
      'ac-room-size-guide-for-room',
      'waiting-hall-rules-at-railway-stations',
      'arunachalam-temple-online-room-booking-easy',
      'lice-dreams-meaning-what-dreams-about-lice',
      'sarjapur-distance-guide-metro-connectivity',
      'pilar-goa-a-peaceful-village',
      'gurudwara-sis-ganj-sahib-visitor',
      'ac-waiting-room-rules-everything-you-need',
      'sports-day-decoration-ideas-creative-ways',
      'bathroom-dimensions-guide',

    ];

    const blogHomeRedirects = [
      'zlendo-realty-vs-planner-5d-understanding',
      'cream-colour-suit-combinations',
      'zlendo-realty-vs-coohom-a-comparison',
      'home-design-platform-india-software',
      'stylish-modern-bar-design-ideas',
      'home-lawn-design-ideas',
      '1-floor-house-design-ideas',
      'zlendo-realty-suite-is-live-ai-powered',
      'unique-crockery-unit-designs-smart/feed',
      '3-bhk-home-design-kerala/feed',
      'unique-crockery-unit-designs-smart/feed/',
      '3-bhk-home-design-kerala/feed/',
      'minimum-bedroom-size-indian-standards-vastu/feed/',
      'test',
      'all',
    ];

    const redirectsList = [
      ...newsRedirects.flatMap(slug => [
        {
          source: `/blog/${slug}`,
          destination: `https://news.zlendorealty.com/${slug}/`,
          permanent: true,
        },
        {
          source: `/:country/blog/${slug}`,
          destination: `https://news.zlendorealty.com/${slug}/`,
          permanent: true,
        }
      ]),
      ...blogHomeRedirects.flatMap(slug => [
        {
          source: `/blog/${slug}`,
          destination: `https://zlendorealty.com/blog`,
          permanent: true,
        },
        {
          source: `/:country/blog/${slug}`,
          destination: `https://zlendorealty.com/blog`,
          permanent: true,
        }
      ]),
      ...[
        '/nda-customers',
        '/dpa',
        '/in/terms',
        '/in/pricing',
        '/us/privacy',
        '/in/enterprise',
        '/products/3d-export'
      ].map(path => ({
        source: path,
        destination: `https://zlendorealty.com`,
        permanent: true,
      }))
    ];

    return redirectsList;
  },

  // Security Headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self' https: wss: data: 'unsafe-inline' 'unsafe-eval'; frame-ancestors 'self'; object-src 'none';",
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },

  // Image optimization domains
  images: {
    qualities: [25, 50, 75, 85, 90, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zrealtystoragedev.blob.core.windows.net',
      },
      {
        protocol: 'https',
        hostname: 'zlendorealty.com',
      },
      {
        protocol: 'http',
        hostname: 'zlendorealty.com',
      },
      {
        protocol: 'https',
        hostname: '*.zlendorealty.com',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  // Ensure compatibility with React 19
  typescript: {
    ignoreBuildErrors: false,
  },

  // Allow build with linting warnings
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
