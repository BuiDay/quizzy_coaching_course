/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { 
        domains: ['localhost','res.cloudinary.com'], 
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
          },
        ],
      },
}

module.exports = nextConfig