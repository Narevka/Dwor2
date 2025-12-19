import { Metadata } from 'next';
import { KontaktContent } from './KontaktContent';
import { BreadcrumbSchema, ContactPageSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Kontakt | Narewka',
  description: 'Kontakt z Dworem Bartnika. Adres: ul. Hajnowska 2/1, 17-220 Narewka. Tel: +48 721 907 000. Recepcja 7:00-22:00. 15 km od Białowieży.',
  alternates: {
    canonical: 'https://dworbartnika.pl/kontakt',
  },
  openGraph: {
    title: 'Kontakt | Dwór Bartnika',
    description: 'Skontaktuj się z nami: ul. Hajnowska 2/1, 17-220 Narewka. Tel: +48 721 907 000.',
    url: 'https://dworbartnika.pl/kontakt',
    siteName: 'Dwór Bartnika',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/images/og/OG_kontakt.jpg',
        width: 1200,
        height: 630,
        alt: 'Kontakt - Dwór Bartnika',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt | Dwór Bartnika',
    description: 'Skontaktuj się z nami: ul. Hajnowska 2/1, 17-220 Narewka.',
    images: ['/images/og/OG_kontakt.jpg'],
  },
};

export default function KontaktPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://dworbartnika.pl" },
        { name: "Kontakt", url: "https://dworbartnika.pl/kontakt" }
      ]} />
      <ContactPageSchema />
      <KontaktContent />
    </>
  );
}
