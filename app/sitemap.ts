import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const staticLocalePaths = ["", "/privacy", "/terms", "/opensource"] as const;
  const now = new Date();

  return locales.flatMap((locale) =>
    staticLocalePaths.map((path) => ({
      url: `${base}/${locale}${path}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: path === "" ? 0.9 : 0.6
    }))
  );
}
