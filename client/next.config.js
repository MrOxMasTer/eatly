/** @type {import('next').NextConfig} */
module.exports = {
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
