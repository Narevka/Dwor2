import { Metadata } from 'next';
import { AtrakcjeContent } from './AtrakcjeContent';
import { BreadcrumbSchema, AtrakcjeItemListSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Atrakcje Białowieża - Żubry, Sauna, Rowery, Quady | Dwór Bartnika',
  description: 'Atrakcje Białowieża - żubry 2 km od hotelu, sauna, jacuzzi, balia, rowery elektryczne, quady, melex, kajaki, rezerwat. Co robić w Puszczy Białowieskiej?',
  alternates: {
    canonical: 'https://dworbartnika.pl/atrakcje-bialowieza',
  },
  openGraph: {
    title: 'Atrakcje Białowieża - Co Robić w Puszczy Białowieskiej | Dwór Bartnika',
    description: 'Żubry 2 km od hotelu, sauna, jacuzzi, balia, rowery elektryczne, quady, melex, kajaki, rezerwat ścisły.',
    url: 'https://dworbartnika.pl/atrakcje-bialowieza',
    siteName: 'Dwór Bartnika',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/images/og/OG_atrakcje.jpg',
        width: 1200,
        height: 630,
        alt: 'Atrakcje Białowieża - Dwór Bartnika',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atrakcje Białowieża - Co Robić w Puszczy Białowieskiej | Dwór Bartnika',
    description: 'Żubry 2 km, sauna, jacuzzi, rowery, quady, kajaki, rezerwat ścisły.',
    images: ['/images/og/OG_atrakcje.jpg'],
  },
};

export default function AtrakcjePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://dworbartnika.pl" },
        { name: "Atrakcje Białowieża", url: "https://dworbartnika.pl/atrakcje-bialowieza" }
      ]} />
      <AtrakcjeItemListSchema />
      <AtrakcjeContent />
    </>
  );
}
