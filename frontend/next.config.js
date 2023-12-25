/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { 
        domains: ['localhost','res.cloudinary.com','kajabi-storefronts-production.kajabi-cdn.com'], 
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
          },
          {
            protocol: 'https',
            hostname: 'kajabi-storefronts-production.kajabi-cdn.com',
          },
        ],
      },
}

module.exports = nextConfig