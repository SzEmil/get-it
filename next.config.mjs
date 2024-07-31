/** @type {import('next').NextConfig} */

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
  };

export default nextConfig;
