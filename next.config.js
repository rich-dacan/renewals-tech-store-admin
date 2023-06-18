/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "s3.amazonaws.com",
      "images.prismic.io",
      "img.youtube.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "raw.githubusercontent.com",
      "store.storeimages.cdn-apple.com",
      "m.media-amazon.com",
    ],
  },
};

module.exports = nextConfig;
