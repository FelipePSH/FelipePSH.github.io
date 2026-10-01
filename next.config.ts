import type { NextConfig } from "next";

// Static export for GitHub Pages (felipepsh.github.io serves from the root, so no basePath).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
