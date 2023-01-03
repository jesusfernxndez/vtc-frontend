/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["tripadvisor.com", "dynamic-media-cdn.tripadvisor.com"],
  },
};

module.exports = nextConfig;
