/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomwordgenerator.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
