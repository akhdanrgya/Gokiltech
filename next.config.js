/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_API_PROTOCOL || 'http',
        hostname: process.env.NEXT_PUBLIC_API_HOSTNAME || '127.0.0.1',
        port: process.env.NEXT_PUBLIC_API_PORT || '8910',
        pathname:'/public/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;
