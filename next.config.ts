import type { NextConfig } from "next";

const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.41"],
  ...(staticExport ? { output: "export" as const } : {}),
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
    qualities: [75, 100],
  },
};

export default nextConfig;
