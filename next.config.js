// gokiltech/next.config.js
const { withPayload } = require('@payloadcms/next/withPayload')
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Konfigurasi Next.js lo lainnya
  reactStrictMode: true,
}

module.exports = withPayload(
  nextConfig,
  {
    // Path ke file konfigurasi PayloadCMS lo
    // relatif dari root project Next.js
    configPath: path.resolve(__dirname, './payload-app/src/payload.config.ts'),
  }
)