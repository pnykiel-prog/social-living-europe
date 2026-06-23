import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/o-nas", priority: 0.8, changeFrequency: "monthly" },
    { path: "/finansowanie", priority: 0.9, changeFrequency: "monthly" },
    { path: "/modele", priority: 0.9, changeFrequency: "monthly" },
    { path: "/wspolpraca", priority: 0.8, changeFrequency: "monthly" },
    { path: "/kontakt", priority: 0.7, changeFrequency: "yearly" },
    { path: "/polityka-prywatnosci", priority: 0.3, changeFrequency: "yearly" },
    { path: "/regulamin", priority: 0.3, changeFrequency: "yearly" },
  ];
  return routes.map((r) => ({
    url: SITE_URL + (r.path === "/" ? "" : r.path),
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
