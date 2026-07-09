import type { MetadataRoute } from "next";
import { getCaseStudySlugs } from "@/data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hadibakhshi.dev";

  const caseStudyEntries = getCaseStudySlugs().map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...caseStudyEntries,
  ];
}
