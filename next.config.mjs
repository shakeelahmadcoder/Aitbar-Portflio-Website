/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"], // ✅ Cloudinary domain
  },
};

export default nextConfig; // ✅ ES Module export
