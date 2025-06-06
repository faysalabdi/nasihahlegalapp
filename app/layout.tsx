import './globals.css';
import type { Metadata } from 'next';
import { inter, playfair } from '@/lib/theme';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/constants';

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Professional Legal Services in Coburg, Melbourne`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'law firm',
    'legal services',
    'solicitors',
    'attorneys',
    'lawyers',
    'Coburg',
    'Melbourne',
    'Victoria',
    'Australia',
    'civil litigation',
    'criminal law',
    'family law',
    'property law',
    'conveyancing',
    'wills and estates',
    'estate planning',
    'VCAT',
    'motor vehicle accidents',
    'building disputes',
    'debt recovery',
    'legal advice',
    'court representation',
    'legal consultation',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: SITE_URL,
    title: `${SITE_NAME} | Professional Legal Services in Coburg, Melbourne`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Professional Legal Services`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Professional Legal Services in Coburg, Melbourne`,
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
    creator: '@nasihahlegal',
    site: '@nasihahlegal',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
    yandex: 'your-yandex-verification-code', // Replace with actual verification code
    yahoo: 'your-yahoo-verification-code', // Replace with actual verification code
  },
  category: 'Legal Services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <meta name="theme-color" content="#1a365d" />
        <meta name="msapplication-TileColor" content="#1a365d" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}