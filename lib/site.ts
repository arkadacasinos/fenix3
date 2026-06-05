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
  name: "Феникс Казино",
  shortName: "Феникс",
  url: resolveSiteUrl(),
  locale: "ru_RU",
  // title используется в layout.tsx напрямую
  pageTitle:
    "Феникс Казино — официальный сайт феникс казино онлайн | fenix casino",
  titleTemplate: "%s | Феникс Казино",
  description:
    "Феникс казино — официальный сайт онлайн казино. Феникс казино играть онлайн: слоты, live-игры, рабочее зеркало. Феникс казино официальный сайт с бонусами до 225%, быстрыми выплатами и честным RTP. Fenix casino зеркало всегда доступно.",
  shortDescription:
    "Феникс казино официальный сайт — слоты онлайн, зеркало, бонусы до 225% и быстрые выплаты. Fenix casino — играть онлайн прямо сейчас.",
  // Семантическое ядро: сначала приоритетные русские ключи, затем латинские
  keywords: [
    // --- Приоритетные (русские) ---
    "феникс казино",
    "феникс казино официальный сайт",
    "феникс казино играть",
    "феникс казино онлайн",
    "феникс казино зеркало",
    "феникс казино зеркало рабочее",
    "феникс казино официальный",
    // --- Вторичные (латинские) ---
    "fenix casino",
    "fenix casino официальный сайт",
    "fenix casino играть",
    "fenix casino зеркало",
    "fenix casino официальный",
    "fenix казино",
    // --- Общие ---
    "онлайн казино",
    "казино с лицензией",
    "слоты онлайн",
    "live казино",
    "бонус казино",
  ],
  ogImage: "/opengraph-image.jpg",
  themeColor: "#1a1535",
  authors: [{ name: "Феникс Казино" }],
  creator: "Феникс Казино",
  twitter: "@fenixcasino",
} as const

export type SiteConfig = typeof siteConfig
