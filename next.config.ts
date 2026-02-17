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
        destination: 'https://api.zlendorealty.com/api/:path*',
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/ai-design-studios',
        destination: '/products/room-styler',
        permanent: true,
      },
      {
        source: '/:country/ai-design-studios',
        destination: '/:country/products/room-styler',
        permanent: true,
      },
    ];
  },

  // Image optimization domains
  images: {
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
