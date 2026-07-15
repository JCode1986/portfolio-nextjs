/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|ico|pdf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
