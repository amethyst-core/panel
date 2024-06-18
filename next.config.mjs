/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(import.meta.url, "@/styles")],
  },
};

export default nextConfig;
