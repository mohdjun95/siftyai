import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The policy lives with the other legal docs on GitHub Pages (the URL Play links to).
      {
        source: "/privacy",
        destination: "https://mohdjun95.github.io/privacy-policies/nytcrew.html",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
