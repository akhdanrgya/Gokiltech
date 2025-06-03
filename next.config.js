/** @type {import('next').NextConfig} */
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig = {
    // Your Next.js config here
    experimental: {
      reactCompiler: false,
    },
  }
  
  // Make sure you wrap your `nextConfig`
  // with the `withPayload` plugin
  export default withPayload(nextConfig) 