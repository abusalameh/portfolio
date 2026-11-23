export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { ar: `${SITE_URL}/ar/`, en: `${SITE_URL}/en/` };
  return (["ar", "en"] as const).map((l) => ({
    url: `${SITE_URL}/${l}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: l === "ar" ? 1 : 0.9,
    alternates: { languages },
  }));
}
