/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "s3.amazonaws.com",
      "images.prismic.io",
      "img.youtube.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "raw.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
