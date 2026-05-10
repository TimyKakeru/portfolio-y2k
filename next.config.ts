import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio-y2k", // Ganti dengan nama repo GitHub kamu
  assetPrefix: "/portfolio-y2k/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;