import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { siteConfig } from "@/lib/site"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
})

const title = siteConfig.pageTitle
const titleTemplate = siteConfig.titleTemplate

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: titleTemplate,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  category: "casino",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
    languages: {
      "ru-RU": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Феникс казино официальный сайт — играть онлайн | fenix casino",
    description: siteConfig.shortDescription,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Феникс казино — официальный сайт онлайн казино. Феникс казино зеркало, играть онлайн, бонусы.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Феникс казино официальный сайт | fenix casino зеркало",
    description: siteConfig.shortDescription,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitter,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true, 
  },
  icons: {
    icon: [
      { url: "/icon.jpg", type: "image/jpeg" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.jpg", type: "image/jpeg" }],
    shortcut: ["/icon.jpg"],
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "yandex": "noarchive",
    "rating": "adult",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: siteConfig.themeColor },
    { media: "(prefers-color-scheme: light)", color: siteConfig.themeColor },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} bg-background`} suppressHydrationWarning>
      <head>
        <meta name="yandex-verification" content="2f6970ea569e4947" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Феникс Казино",
                alternateName: ["Fenix Casino", "феникс казино", "fenix казино"],
                url: siteConfig.url,
                logo: `${siteConfig.url}/icon.jpg`,
                description:
                  "Феникс казино — официальный сайт онлайн казино. Феникс казино зеркало рабочее, слоты, live-игры и бонусы.",
                sameAs: [],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Феникс Казино",
                alternateName: "Fenix Casino",
                url: siteConfig.url,
                inLanguage: "ru-RU",
                description:
                  "Феникс казино официальный сайт — играть онлайн в слоты и live-игры. Феникс казино зеркало всегда доступно.",
                potentialAction: {
                  "@type": "SearchAction",
                  target: `${siteConfig.url}/?q={search_term_string}`,
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Что такое Феникс казино официальный сайт?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Феникс казино официальный сайт — это лицензированная платформа онлайн-казино с тысячами слотов от Pragmatic Play, NoLimit City, Hacksaw и других провайдеров. Феникс казино онлайн работает 24/7, предлагает быстрые выплаты и бонусы до 225%.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Как найти феникс казино зеркало рабочее?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Феникс казино зеркало рабочее — актуальная ссылка публикуется на официальном сайте и в Telegram-канале. Феникс казино зеркало полностью повторяет функционал основного сайта: те же аккаунты, балансы и бонусы.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Как начать феникс казино играть онлайн?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Чтобы феникс казино играть, нужно зарегистрироваться на официальном сайте, пополнить баланс и выбрать игру. Демо-режим доступен без депозита. Fenix casino играть можно на ПК, планшете и смартфоне.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Fenix casino официальный — есть ли лицензия?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Да, fenix casino официальный сайт работает по международной лицензии. Все игры проходят аудит честности. Феникс казино официальный гарантирует защиту данных и честный генератор случайных чисел.",
                    },
                  },
                ],
              },
            ]),
          }}
        />
      </body>
    </html>
  )
}
