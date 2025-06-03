const { withPayload } = require('@payloadcms/next/withPayload')
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  experimental: {
    reactCompiler: false,
  },
}

// 2. Gunakan module.exports dan tambahkan argumen kedua ke withPayload
//    Argumen kedua ini buat ngasih tau di mana letak payload.config.ts lo
module.exports = withPayload(
  nextConfig, // Konfigurasi Next.js lo
  {
    // Sesuaikan path ini ke lokasi file konfigurasi PayloadCMS lo.
    // Contoh kalo folder 'payload-cms' ada di luar folder Next.js lo (sejajar):
    configPath: path.resolve(__dirname, '../payload-cms/src/payload.config.ts'),

    // Kalo folder Payload ada di dalem project Next.js lo, misalnya di 'src/payload':
    // configPath: path.resolve(__dirname, './src/payload/payload.config.ts'),
    // payloadPath: path.resolve(__dirname, './src/payload'), // (Opsional, jika struktur filenya custom)
  }
)