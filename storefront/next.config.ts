import type { NextConfig } from "next";

const wpUrl = process.env.NEXT_PUBLIC_WP_URL || "http://localhost";
let hostname: string;
try {
  hostname = new URL(wpUrl).hostname;
} catch {
  hostname = "localhost";
}

const nextConfig: NextConfig = {
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: "http", hostname },
      { protocol: "https", hostname },
    ],
  },
};

export default nextConfig;
