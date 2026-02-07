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

  // Image optimization domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zrealtystoragedev.blob.core.windows.net',
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
