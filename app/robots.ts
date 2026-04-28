import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site"

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl()

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Yandex", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "DuckDuckBot", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  }
}
