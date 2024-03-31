/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/*'
      },
    ],
  },
  experimental: {
    typedRoutes: false,
  },
}

export default nextConfig
