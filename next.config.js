// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     disableStaticImages: true,
//   },
// };

// module.exports = nextConfig;

// const withPlugins = require("next-compose-plugins");
// const optimizedImages = require("next-optimized-images");

const config = {
  swcMinify: true,
  reactStrictMode: true,
  basePath: "/homepage",
  output: "export",
  images: {
    disableStaticImages: true,
    domains: ["localhost"],
    formats: ["image/avif", "image/webp"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = config;
