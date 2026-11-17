import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Project screenshots are public; allowing cross-origin reads lets them be pulled
  // into portfolio listings (Fiverr, LinkedIn) straight from the live site.
  async headers() {
    return [{ source: "/work/:file*", headers: [{ key: "Access-Control-Allow-Origin", value: "*" }] }];
  },
};

export default nextConfig;
