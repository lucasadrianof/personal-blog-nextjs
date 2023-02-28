/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [ { hostname: 'cdn.sanity.io' } ],
  },
}

module.exports = nextConfig
