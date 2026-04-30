/**
 * Centralized site configuration.
 *
 * `siteUrl` is derived in this order of priority:
 *   1. NEXT_PUBLIC_SITE_URL — set this in production to your canonical domain
 *      (e.g. https://fenix.casino). Recommended.
 *   2. VERCEL_PROJECT_PRODUCTION_URL — Vercel-provided production domain.
 *   3. VERCEL_URL — Vercel-provided current deployment URL (preview/prod).
 *   4. http://localhost:3000 — local development fallback.
 *
 * This way the same code works for previews, production and local dev,
 * and only one env var (NEXT_PUBLIC_SITE_URL) needs to be configured.
 */
function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL
  if (fromEnv) return stripTrailingSlash(ensureProtocol(fromEnv))

  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL
  if (vercelProd) return `https://${stripTrailingSlash(vercelProd)}`

  const vercel = process.env.VERCEL_URL
  if (vercel) return `https://${stripTrailingSlash(vercel)}`

  return "http://localhost:3000"
}

function ensureProtocol(url: string): string {
  return /^https?:\/\//i.test(url) ? url : `https://${url}`
}

function stripTrailingSlash(url: string): string {
  return url.replace(/\/+$/, "")
}

export const siteConfig = {
  name: "Fenix Casino",
  shortName: "Fenix",
  url: resolveSiteUrl(),
  locale: "ru_RU",
  description:
    "Fenix Casino (Феникс Казино) — официальный сайт онлайн-казино с лицензированными слотами и live-играми от ведущих провайдеров. Высокий RTP, моментальные выплаты, бонусы до 225%, рабочее зеркало и удобный вход в личный кабинет.",
  shortDescription:
    "Fenix Casino — официальный сайт онлайн-казино: слоты, live-игры, бонусы до 225%, рабочее зеркало и быстрые выплаты.",
  // Семантическое ядро (ключи), используется в meta keywords и SEO-блоке
  keywords: [
    "fenix casino",
    "fenix casino зеркало",
    "fenix casino играть",
    "fenix casino официальный",
    "fenix casino официальный сайт",
    "fenix казино",
    "феникс казино",
    "феникс казино зеркало",
    "феникс казино зеркало рабочее",
    "феникс казино играть",
    "феникс казино онлайн",
    "феникс казино официальный",
    "феникс казино официальный сайт",
    "онлайн казино",
    "слоты онлайн",
    "бонус казино",
    "live казино",
  ],
  ogImage: "/opengraph-image.jpg",
  themeColor: "#1a1535",
  authors: [{ name: "Fenix Casino" }],
  creator: "Fenix Casino",
  twitter: "@fenixcasino",
} as const

export type SiteConfig = typeof siteConfig
