import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Prefer modern formats; AVIF first, WebP fallback.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
