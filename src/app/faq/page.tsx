import { Metadata } from 'next';
import { FAQContent } from './FAQContent';
import { BreadcrumbSchema, FAQPageSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'FAQ - Najczęściej Zadawane Pytania',
  description: 'Odpowiedzi na najczęściej zadawane pytania o Dwór Bartnika i Puszczę Białowieską. Jak dojechać, gdzie zobaczyć żubry, ile kosztuje nocleg i więcej.',
  alternates: {
    canonical: 'https://dworbartnika.pl/faq',
  },
  openGraph: {
    title: 'FAQ - Pytania i Odpowiedzi | Dwór Bartnika',
    description: 'Wszystko co musisz wiedzieć przed wizytą w Dworze Bartnika i Puszczy Białowieskiej.',
    url: 'https://dworbartnika.pl/faq',
    siteName: 'Dwór Bartnika',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/images/og/OG_kontakt.jpg',
        width: 1200,
        height: 630,
        alt: 'FAQ - Dwór Bartnika',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Pytania i Odpowiedzi | Dwór Bartnika',
    description: 'Wszystko co musisz wiedzieć przed wizytą w Dworze Bartnika i Puszczy Białowieskiej.',
    images: ['/images/og/OG_kontakt.jpg'],
  },
};

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://dworbartnika.pl" },
        { name: "FAQ", url: "https://dworbartnika.pl/faq" }
      ]} />
      <FAQPageSchema />
      <FAQContent />
    </>
  );
}
