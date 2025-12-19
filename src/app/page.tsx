import { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { RoomsPreview } from '@/components/home/RoomsPreview';
import { AttractionsSection } from '@/components/home/AttractionsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { HomePageSchema, BreadcrumbSchema } from '@/components/seo';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://dworbartnika.pl',
  },
  openGraph: {
    title: 'Hotel Białowieża - Dwór Bartnika | Noclegi Puszcza Białowieska',
    description: 'Komfortowy hotel przy Puszczy Białowieskiej. Noclegi od 120 zł/os, restauracja z kuchnią regionalną, muzeum pszczelarstwa, żubry 2 km od hotelu.',
    url: 'https://dworbartnika.pl',
    siteName: 'Dwór Bartnika',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/images/og/OG_landing_page.jpg',
        width: 1200,
        height: 630,
        alt: 'Hotel Białowieża - Dwór Bartnika przy Puszczy Białowieskiej',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Białowieża - Dwór Bartnika | Noclegi Puszcza Białowieska',
    description: 'Komfortowy hotel przy Puszczy Białowieskiej. Noclegi od 120 zł/os, restauracja, żubry 2 km.',
    images: ['/images/og/OG_landing_page.jpg'],
  },
};

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://dworbartnika.pl" }
      ]} />
      <HomePageSchema />

      {/* Hero z sliderem */}
      <HeroSection />

      {/* O nas */}
      <AboutSection />

      {/* Pokoje - podgląd */}
      {/* Na mobilce: styl Tinder (jedna karta na raz) */}
      <RoomsPreview variant="tinder" />
      {/* Na desktopie: karuzela (tinder jest ukryty przez md:hidden) */}
      <div className="hidden md:block">
        <RoomsPreview variant="carousel" />
      </div>

      {/* Atrakcje */}
      <AttractionsSection />

      {/* Opinie gości - Social Proof */}
      <TestimonialsSection />
    </>
  );
}
