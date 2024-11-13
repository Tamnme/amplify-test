const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'main.dfqc4rf30fhoa.amplifyapp.com',
      },
    ],
  },
  output: 'standalone',
};

module.exports = withNextIntl(nextConfig);
