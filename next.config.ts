import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Ensure Next.js knows the monorepo/workspace root when multiple lockfiles
  // exist on the machine so output tracing and builds are deterministic.
  outputFileTracingRoot: process.cwd(),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'arweave.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
