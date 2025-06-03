import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://source.unsplash.com/random/300x300/?1")],
  },
  /* config options here */
};

export default nextConfig;
