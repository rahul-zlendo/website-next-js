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
