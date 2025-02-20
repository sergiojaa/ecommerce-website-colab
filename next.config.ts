import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "f00.esfr.pl",
      "s3-alpha-sig.figma.com",
      "cdn.salla.sa",
      "prod-api.mediaexpert.pl",
      "cdn.trixie.de", // Add this domain
    ],
  },
};

export default nextConfig;
