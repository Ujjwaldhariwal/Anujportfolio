import type { NextConfig } from "next";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const nextConfig: NextConfig = {
  // Webpack configuration
  webpack: (config) => {
    config.plugins.push(new MiniCssExtractPlugin());
    return config;
  },

  // Image configuration
  images: {
    domains: ["ik.imagekit.io"], // Add the domain(s) you want to allow
  },
};

export default nextConfig;