import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: new Date() },
    ...projects.map((p) => ({ url: `${site.url}/projets/${p.slug}`, lastModified: new Date() })),
  ];
}
