import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Optymalizacja obrazów - Core Web Vitals
  images: {
    // Formaty obrazów - AVIF jest mniejszy niż WebP
    formats: ['image/avif', 'image/webp'],
    // Rozmiary dla responsive images (srcset)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // Cache obrazów przez 30 dni
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/uploads/**',
      },
    ],
  },
  // Headers zostały usunięte - preconnect nie jest już potrzebny przy self-hosted fontach
  // Naprawa problemu z wieloma lockfiles - turbopack.root na najwyższym poziomie
  turbopack: {
    root: process.cwd(),
  },
  // Experimental features
  experimental: {
    // Turbopack jest już włączony przez --turbopack w skrypcie dev
  },
  // Rewrites dla obsługi linków .html (kompatybilność z oryginalną stroną)
  async rewrites() {
    return [
      {
        source: '/pokoje-2-osobowe.html',
        destination: '/pokoje-2-osobowe',
      },
      {
        source: '/pokoje-3-osobowe.html',
        destination: '/pokoje-3-osobowe',
      },
      {
        source: '/pokoje-4-osobowe.html',
        destination: '/pokoje-4-osobowe',
      },
      {
        source: '/apartament-z-jacuzzi.html',
        destination: '/apartament-z-jacuzzi',
      },
      {
        source: '/apartament-z-sauna.html',
        destination: '/apartament-z-sauna',
      },
      {
        source: '/noclegi-bialowieza.html',
        destination: '/noclegi-bialowieza',
      },
    ];
  },
};

export default nextConfig;

