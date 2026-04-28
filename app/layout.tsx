import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { getSiteUrl, SITE_NAME, SITE_NAME_FULL } from "@/lib/site"
import "./globals.css"

const _geist = Geist({ subsets: ["latin", "cyrillic"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const SITE_URL = getSiteUrl()

const TITLE_DEFAULT =
  "Fenix Casino — официальный сайт, рабочее зеркало, регистрация и бонусы | Феникс Казино онлайн"

const DESCRIPTION =
  "Fenix Casino (Феникс Казино) — официальный сайт онлайн-казино с большим выбором лицензионных слотов, live-дилеров и щедрых бонусов. Рабочее зеркало fenix casino, быстрая регистрация, играть онлайн без блокировок. Заходите на феникс казино официальный сайт и получайте приветственный бонус."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE_DEFAULT,
    template: "%s | Fenix Casino",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    // Английские ключи
    "fenix casino",
    "fenix casino зеркало",
    "fenix casino играть",
    "fenix casino официальный",
    "fenix casino официальный сайт",
    "fenix казино",
    "fenix casino онлайн",
    "fenix casino вход",
    "fenix casino регистрация",
    "fenix casino бонус",
    "fenix casino промокод",
    "fenix casino app",
    "fenix casino скачать",
    "fenix casino мобильная версия",
    "fenix casino отзывы",
    "fenix casino личный кабинет",
    "fenix casino вывод денег",
    "fenix casino депозит",
    "fenix casino слоты",
    "fenix casino live",
    // Русские ключи
    "феникс казино",
    "феникс казино зеркало",
    "феникс казино зеркало рабочее",
    "феникс казино играть",
    "феникс казино онлайн",
    "феникс казино официальный",
    "феникс казино официальный сайт",
    "феникс казино вход",
    "феникс казино регистрация",
    "феникс казино бонус",
    "феникс казино скачать",
    "феникс казино мобильная версия",
    "феникс казино отзывы",
    // Общие
    "онлайн казино",
    "лицензионное казино",
    "казино с бонусами",
    "слоты онлайн",
    "live казино",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME_FULL,
  category: "gambling",
  classification: "Online Casino",
  alternates: {
    canonical: "/",
    languages: {
      "ru-RU": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: SITE_NAME_FULL,
    title:
      "Fenix Casino — официальный сайт и рабочее зеркало феникс казино",
    description:
      "Феникс казино онлайн: лицензионные слоты, live-игры, бонусы и быстрые выплаты. Рабочее зеркало fenix casino без блокировок — заходите и играйте.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fenix Casino — официальный сайт и зеркало",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fenix Casino — официальный сайт и рабочее зеркало",
    description:
      "Феникс казино онлайн: слоты, live-дилеры, бонусы и быстрые выплаты. Играть на fenix casino через рабочее зеркало.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  other: {
    rating: "adult",
    "content-language": "ru",
    distribution: "global",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0e0d20" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0d20" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME_FULL,
  alternateName: ["Fenix Casino", "Феникс Казино", "fenix casino", "феникс казино"],
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description: DESCRIPTION,
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME_FULL,
  alternateName: "Fenix Casino — Феникс Казино официальный сайт",
  url: SITE_URL,
  inLanguage: "ru-RU",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Как зайти на Fenix Casino через рабочее зеркало?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Чтобы зайти на fenix casino, используйте актуальное рабочее зеркало феникс казино с официального сайта или из официального Telegram-канала. Зеркало полностью повторяет функционал основного сайта и сохраняет ваш аккаунт.",
      },
    },
    {
      "@type": "Question",
      name: "Как пройти регистрацию в феникс казино?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Регистрация на fenix casino занимает меньше минуты: укажите email или телефон, придумайте пароль и подтвердите аккаунт. После регистрации можно сразу играть на феникс казино онлайн и получить приветственный бонус.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли играть в Fenix Casino онлайн на телефоне?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, феникс казино онлайн полностью адаптирован под мобильные устройства. Также доступны приложения для Android и iOS — их можно скачать с официального сайта fenix casino.",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" dir="ltr" className="bg-[#0e0d20]">
      <head>
        <meta name="format-detection" content="telephone=no, email=no, address=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Fenix Casino" />
        <meta name="application-name" content="Fenix Casino" />
        <meta name="msapplication-TileColor" content="#0e0d20" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="age-rating" content="18+" />
        <meta httpEquiv="content-language" content="ru" />
        <meta name="yandex-verification" content="02765b381b2705b4" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
