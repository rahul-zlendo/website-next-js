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
      '5-inspiring-wall-almirah-design-ideas',
      'almari-design-in-smart-rooms',
      'aluminium-jali-stylish-choice',
      'anandpur-sahib-gurudwara-room-booking-guide',
      'armani-hotel-dubai-room-price-guide',
      'athangudi-tiles-disadvantages',
      'bajaj-wall-mount-fan-for-cooling',
      'bathtub-height-a-simple-guide-to-choose',
      'best-curtain-ideas-for-peach-walls',
      'compound-wall-explained-guide',
      'cumbala-hill',
      'dark-firozi-colour-a-deep-dive',
      'dark-firozi-colour-in-interior-design-style',
      'deluxe-room-what-it-really-means',
      'fluted-panel-price-guide-costs',
      'gurudwara-rakabganj-road-complete-guide',
      'hettich-modular-kitchen-pricing-features',
      'hindu-prayer-room-design-thoughtful-ideas',
      'lucky-numbers-what-they-mean',
      'manekshaw-centre-guest-room',
      'marble-pathar-price-guide-tips',
      'navy-blue-and-light-blue-a-elegant-colour',
      'one-ton-ac-room-size',
      'profile-light-price-guide',
      'room-booking-at-gurudwara-sis-ganj-sahib',
      'softboard-decoration-ideas-simple-creative',
      'sweep-the-floor-meaning-daily-use',
      'ton-window-ac-price-guide-cost',
      'understanding-italian-kitchen-prices-guide',
      'understanding-room-in-square-feet-a-guide',
      'using-an-air-cooler-in-a-room-the-right-way',
      'wall-magazine-for-your-class',
      'wall-moulding-types-prices-in-india-ideas',
      'gorai-beach-rooms-safe-for-couples',
      'groove-handles-a-smart-and-stylish-choice',
      'irctc-retiring-room-contact',
      'jyoti-chowk-jalandhar-punjab-heart-of-city',
      'jyoti-chowk-jalandhar-shopping',
      'oyo-rooms-explained-a-quickguide',
      'raghavendra-swamy-mantralayam-completeguide',
      'railway-cloakroom-guide-understand',
      'rashtreeya-vidyalaya-road',
      'retiring-room-at-new-delhi',
      'retiring-room-at-ujjain-railway-station',
      'retiring-room-at-vijayawada-railway-station',
      'saifee-hospital-room-charges',
      'daily-room-rent-in-bangalore-price-insights',
      'false-ceiling-lights-cost-room',
      'false-ceiling-lights-cost-room/',
      'lilac-lavender-room-colour-a-stylish-choice/',
      'modular-kitchen-sink-price-guide',
      'parapet-wall-steel-design-smart-ideas',
      'parapet-wall-steel-design-smart-ideas/',
      'royal-paint-design-idea-for-home/',
      'saifee-hospital-contact-number-quick-guide/',
      'stilt-floor-explained-a-quick-clear-guide',
      'student-room-option-in-malsalami-patna-city/',
      'kitchen-bartan-meaning-in-english',
      'atlantis-underwater-room-rates-rupees',
      'dosti-imperia-manpada-thane-west-a-insight',
      'stylish-cream-colour-elegant-dress',
      'international-at-aventura-floor-plan-studio',
      'room-temperature-in-india-ideal-indoor',
      'granite-flooring-cost-explained-guide',
      'aventura-floor-plans-smart-studio-design',
      'room-temperature-in-india-ideal-indoor',
      'wall-hydrants-explained-a-simple-guide',
      'karnataka-delhi-guest-house-booking-guide',
      'bagalakunte-bengaluru-a-growing-locality/',
      'launch-room-design-stylish-event-space',
      'the-great-wall-download-in-tamil-a-guide',
      'himachal-bhavan-delhi-room-booking-guide',
      'the-great-indian-kitchen-online/',
      'irctc-retiring-room-customer-care-number',
      'belapur-station-navi-mumbai',
      'sri-chowdeshwari-temple-sigandur-room-book',
      'belapur-mumbai-a-fresh-guide-to-navi-mumbai',
      'plasma-membrane-and-cell-wall-understanding',
      'the-great-indian-kitchen-online',
      'royal-paint-design-idea-for-home',
      'plasma-membrane-and-cell-wall-understanding/',
      'the-great-wall-download-in-tamil-a-guide/',
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
      'category/architecture/',
      'category/cell-structure-and-function/',
      'category/fashion-style',
      'category/fashion-style/',
      'category/metro-development',
      'category/travel-infrastructure/',
      'home-furnishing-ideas-living-room/feed/',
      'ledge-wall-thickness-how-to-design-smart/feed/',
      'flat-50-off-on-zlendo-realty/',
      'page/2/',
      'page/25/',
      'page/27/',
      'page/29',
      'room-ceiling-design-latest-ideas/feed',
      'room-design-ideas-to-refresh/feed/',
      'sample-page',
      // These four were in the news-redirect list but were never republished on
      // news.zlendorealty.com — the 301 landed on news' own /404, so Google saw
      // "Redirect error" instead of a resolved move. Point them at /blog until
      // (or unless) the posts come back.
      'bathroom-dimensions-guide',
      'maid-room-concept-explained-meaning',
      'owl-in-house-vastu-meaning-beliefs',
      'podium-decoration-ideas-simple-ways',
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
      })),
      ...[3, 9, 15, 18, 46, 56].map(page => ({
        source: '/blog',
        has: [
          {
            type: 'query',
            key: 'page',
            value: String(page)
          }
        ],
        destination: 'https://zlendorealty.com/blog',
        permanent: true,
      })),
      {
        source: '/blog/page/2',
        has: [
          {
            type: 'query',
            key: 'page',
            value: '3'
          }
        ],
        destination: 'https://zlendorealty.com/blog',
        permanent: true,
      }
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
