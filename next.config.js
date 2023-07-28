/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['netfillip.in','photo.netfillip.com','images.netfillip.in','strapi-postgres-64xr.onrender.com','strapi-zpuw.onrender.com','event-demo-netfillip.netlify.app','localhost'],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], 
  },
  reactStrictMode: true,
}

module.exports = nextConfig
