import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url
  const lastModified = new Date()

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "daily" },
    { path: "/lobby", priority: 0.9, changeFrequency: "daily" },
    { path: "/slots", priority: 0.9, changeFrequency: "daily" },
    { path: "/bonuses", priority: 0.8, changeFrequency: "weekly" },
    { path: "/tournaments", priority: 0.7, changeFrequency: "weekly" },
    { path: "/vip", priority: 0.6, changeFrequency: "monthly" },
    { path: "/chests", priority: 0.6, changeFrequency: "weekly" },
    { path: "/gifts", priority: 0.6, changeFrequency: "weekly" },
    { path: "/support", priority: 0.5, changeFrequency: "monthly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/responsible-gaming", priority: 0.3, changeFrequency: "yearly" },
    { path: "/aml", priority: 0.3, changeFrequency: "yearly" },
    { path: "/crypto-faq", priority: 0.4, changeFrequency: "monthly" },
    { path: "/affiliates", priority: 0.4, changeFrequency: "monthly" },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
