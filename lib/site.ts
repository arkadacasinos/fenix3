/**
 * Возвращает базовый URL сайта.
 * Приоритет:
 *  1. NEXT_PUBLIC_SITE_URL  — задаётся вручную в Project Env Vars (продакшн-домен)
 *  2. VERCEL_PROJECT_PRODUCTION_URL — production-домен проекта на Vercel
 *  3. VERCEL_URL — текущий деплой/превью на Vercel
 *  4. http://localhost:3000 — локальная разработка
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL
  if (fromEnv) {
    return stripTrailingSlash(ensureProtocol(fromEnv))
  }

  const prod = process.env.VERCEL_PROJECT_PRODUCTION_URL
  if (prod) {
    return `https://${stripTrailingSlash(prod)}`
  }

  const vercel = process.env.VERCEL_URL
  if (vercel) {
    return `https://${stripTrailingSlash(vercel)}`
  }

  return "http://localhost:3000"
}

function ensureProtocol(url: string): string {
  if (/^https?:\/\//i.test(url)) return url
  return `https://${url}`
}

function stripTrailingSlash(url: string): string {
  return url.replace(/\/+$/, "")
}

export const SITE_NAME = "Fenix Casino"
export const SITE_NAME_FULL = "Fenix Casino — Феникс Казино"
