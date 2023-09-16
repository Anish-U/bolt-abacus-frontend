/** @type {import('next').NextConfig} */

//TODO: Update config to allow images from whitelisted urls

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
