import type { NextConfig } from "next";
import "./src/env";

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "uvdqv6nl19.ufs.sh",
        port: "",
        protocol: "https",
      },
    ],
  },
  typedRoutes: true,
};

export default config;
