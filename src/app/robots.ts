import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/nytcrew";

// Open to every crawler, AI answer engines included: being cited by them is the point.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
