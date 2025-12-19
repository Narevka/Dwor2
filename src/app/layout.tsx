import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ReservationModalProvider } from '@/contexts/ReservationModalContext';
import { ScrollToTop } from '@/components/shared/ScrollToTop';
import { OrganizationSchema, WebSiteSchema } from '@/components/seo';
import { greatVibes, poppins } from './fonts';

export const metadata: Metadata = {
  metadataBase: new URL('https://dworbartnika.pl'),
  title: {
    default: 'Hotel Białowieża - Dwór Bartnika | Noclegi Puszcza Białowieska',
    template: '%s | Dwór Bartnika',
  },
  description:
    'Hotel Białowieża - Dwór Bartnika to kompleks wypoczynkowy przy Puszczy Białowieskiej. Noclegi od 120 zł/os, restauracja regionalna, muzeum pszczelarstwa, żubry. 25 pokoi z widokiem na przyrodę.',
  authors: [{ name: 'Dwór Bartnika', url: 'https://dworbartnika.pl' }],
  creator: 'Dwór Bartnika',
  publisher: 'Dwór Bartnika',
  category: 'Hotel & Restauracja',
  themeColor: '#8B4513',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Hotel Białowieża - Dwór Bartnika | Noclegi Puszcza Białowieska',
    description: 'Komfortowy hotel przy Puszczy Białowieskiej. Noclegi od 120 zł/os, restauracja z kuchnią regionalną, muzeum pszczelarstwa, żubry 2 km.',
    url: 'https://dworbartnika.pl',
    siteName: 'Dwór Bartnika',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/images/og/OG_landing_page.jpg',
        width: 1200,
        height: 630,
        alt: 'Dwór Bartnika - kompleks wypoczynkowy w Puszczy Białowieskiej',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Białowieża - Dwór Bartnika | Noclegi Puszcza Białowieska',
    description: 'Komfortowy hotel przy Puszczy Białowieskiej. Noclegi od 120 zł/os, restauracja z kuchnią regionalną, żubry 2 km.',
    images: ['/images/og/OG_landing_page.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${greatVibes.variable} ${poppins.variable}`}>
      <head>
        {/* Viewport z safe-area dla iOS - zapobiega przycinaniu przez dolny pasek Safari */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* Fonty są teraz self-hosted przez next/font/google - zero render blocking! */}
        {/* Schema.org JSON-LD - globalne dane organizacji */}
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900">
        <ReservationModalProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ScrollToTop />
        </ReservationModalProvider>
      </body>
    </html>
  );
}
