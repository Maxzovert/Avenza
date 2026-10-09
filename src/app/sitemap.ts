import type { MetadataRoute } from "next";
import { sitemapEntries } from "@/content/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries();
}
