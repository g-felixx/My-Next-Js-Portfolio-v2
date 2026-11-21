import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Mona_Sans, Pixelify_Sans } from 'next/font/google'
import { cookies } from 'next/headers'
import './globals.css'
import { Providers } from './providers'
import { SmoothScroll } from '@/components/SmoothScroll'
import { getPortfolioGraph, toJsonLd } from '@/lib/seo/jsonld'
import { siteConfig, ogLocale } from '@/lib/seo/site'
import { DEFAULT_LOCALE, LOCALE_COOKIE } from '@/lib/i18n/types'
import { normalizeLocale, translations } from '@/lib/i18n/translations'

// Mona Sans (GitHub's open-source typeface) for UI, JetBrains Mono for code/prompt,
// Pixelify Sans only for the mascot's speech bubbles and callout.
const monaSans = Mona_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })
const pixelifySans = Pixelify_Sans({ subsets: ['latin'], variable: '--font-pixel', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.author, url: siteConfig.github }],
  creator: siteConfig.creator,
  openGraph: {
    type: 'website',
    locale: ogLocale,
    url: siteConfig.homeUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.siteName,
    images: [
      {
        url: siteConfig.ogImage,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.homeUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    'geo.region': siteConfig.geo.region,
    'geo.placename': siteConfig.geo.placename,
    'geo.position': siteConfig.geo.position,
    ICBM: siteConfig.geo.icbm,
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  interactiveWidget: 'resizes-content',
  viewportFit: 'cover',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const portfolioJsonLd = toJsonLd(getPortfolioGraph()).replace(/</g, '\\u003c')

  const cookieStore = await cookies()
  const cookieLocale = cookieStore.get(LOCALE_COOKIE)?.value
  const initialLocale = normalizeLocale(cookieLocale ?? DEFAULT_LOCALE)
  const htmlLang = translations[initialLocale].htmlLang

  return (
    <html
      lang={htmlLang}
      className={`${monaSans.variable} ${jetbrainsMono.variable} ${pixelifySans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="color-scheme" content="dark light" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: portfolioJsonLd }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem('theme');
                  var root = document.documentElement;
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var shouldUseDark = storedTheme ? storedTheme === 'dark' : prefersDark;

                  root.classList.toggle('dark', shouldUseDark);
                } catch(e) {
                  document.documentElement.classList.toggle(
                    'dark',
                    window.matchMedia('(prefers-color-scheme: dark)').matches
                  );
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <a
          href="#main-content"
          data-focus-target="true"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-full focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
          Skip to content
        </a>
        <div id="root">
          <SmoothScroll>
            <Providers initialLocale={initialLocale}>
              {children}
            </Providers>
          </SmoothScroll>
        </div>
      </body>
    </html>
  )
}
