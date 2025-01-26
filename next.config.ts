import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      type: "asset/resource", // Treat SVGs as file URLs
    });

    return config;
  },
};

export default nextConfig;
