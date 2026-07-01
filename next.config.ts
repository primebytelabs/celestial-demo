import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    // Serve local images directly. The dev optimizer was returning broken
    // variants for large local PNGs; source files are already sized for web.
    unoptimized: true,
  },
};

export default nextConfig;
