import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "46pquzmxb7.ufs.sh",
        pathname: "/f/*",
      },
    ],
  },
};

export default nextConfig;
