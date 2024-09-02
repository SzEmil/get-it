/** @type {import('next').NextConfig} */
import withMDX from '@next/mdx';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    dangerouslyAllowSVG: true,
  },

  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  headers: async () => [
    {
      source: '/api/(.*)',
      headers: [
        {
          key: 'Access-Control-Allow-Origin',
          value: '*',
        },
      ],
    },
  ],
  webpack: config => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      'node:async_hooks': false,
    };
    return config;
  },
};

export default withMDX()(nextConfig);
