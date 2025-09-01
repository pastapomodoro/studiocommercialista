/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
      {
        protocol: 'https',
        hostname: 'static.licdn.com',
      },
      {
        protocol: 'https',
        hostname: 'dms.licdn.com',
      },
    ],
  },
}

module.exports = nextConfig
