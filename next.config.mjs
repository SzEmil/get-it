/** @type {import('next').NextConfig} */
import withMDX from "@next/mdx";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["picsum.photos", "placehold.co", "upload.cdn.baselinker.com", "media.licdn.com"],
    dangerouslyAllowSVG: true,
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  headers: async () => [
    {
      source: "/api/(.*)",
      headers: [
        {
          key: "Access-Control-Allow-Origin",
          value: "*",
        },
      ],
    },
  ],
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      'node:async_hooks': false,
    };
    return config;
  },
};

export default withMDX()(nextConfig);
