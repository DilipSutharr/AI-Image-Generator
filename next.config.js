/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "links.papareact.com",
      "aiimggenerator0ec4b1.blob.core.windows.net",
    ],
  },
};

module.exports = nextConfig;
