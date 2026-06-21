import type { NextConfig } from "next";

// For GitHub Pages project sites the app is served from /<repo>, so we
// prefix routes/assets with the base path provided by the deploy workflow.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export", // static HTML export for GitHub Pages
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: { unoptimized: true },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
