/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(import.meta.url, "@/styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
