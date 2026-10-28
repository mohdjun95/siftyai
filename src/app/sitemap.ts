import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/nytcrew";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/features",
    "/how-nytcrew-decides",
    "/download",
    "/about",
    "/case-study",
    "/delete-account",
  ];
  return pages.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: new Date("2026-10-28"),
  }));
}
