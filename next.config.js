/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                port: '',
            },
        ],
    },
    experimental: {
        serverComponentsExternalPackages: ["@prisma/client", "bcryptjs"]
    }

}

module.exports = nextConfig
