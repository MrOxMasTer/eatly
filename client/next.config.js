/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const NextConfig = {
    async redirects() {
        return [
            {
                source: '/menu/restaurants',
                destination: '/menu',
                permanent: false,
            },
            // {
            //     source: '/menu/dishes',
            //     destination: '/menu',
            //     permanent: false,
            // },
        ];
    },
    eslint: { ignoreDuringBuilds: true },
    reactStrictMode: true,
    swcMinify: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        // deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    },
};

module.exports = withBundleAnalyzer(NextConfig);
