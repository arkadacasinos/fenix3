import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.shortDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: siteConfig.themeColor,
    theme_color: siteConfig.themeColor,
    lang: "ru-RU",
    categories: ["games", "entertainment"],
    icons: [
      {
        src: "/icon.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
      {
        src: "/apple-icon.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "maskable",
      },
    ],
  }
}
