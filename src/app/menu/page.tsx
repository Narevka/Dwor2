import Image from 'next/image';
import { Metadata } from 'next';
import { MenuSection } from '@/components/menu/MenuSection';
import { ZestawDniaSection, SniadaniaSection, FenomenNaturySection } from '@/components/menu/SpecialSections';
import { menuSections } from '@/data/menuData';
import { TopographicBackground } from '@/components/shared/TopographicBackground';
import { BreadcrumbSchema, MenuSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Menu Restauracji Carska Komnata',
  description: 'Menu restauracji Carska Komnata w Dworze Bartnika. Dania regionalne Puszczy Białowieskiej: zupy, pierogi, dziczyzna, desery. Ceny od 15 zł.',
  alternates: {
    canonical: 'https://dworbartnika.pl/menu',
  },
  openGraph: {
    title: 'Menu - Restauracja Carska Komnata | Dwór Bartnika',
    description: 'Menu restauracji Carska Komnata - dania regionalne, zupy, pierogi, dziczyzna, desery.',
    url: 'https://dworbartnika.pl/menu',
    siteName: 'Dwór Bartnika',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/images/og/OG_menu.jpg',
        width: 1200,
        height: 630,
        alt: 'Menu restauracji Carska Komnata',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Menu - Restauracja Carska Komnata | Dwór Bartnika',
    description: 'Dania regionalne, zupy, pierogi, dziczyzna, desery i napoje.',
    images: ['/images/og/OG_menu.jpg'],
  },
};

export default function MenuPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://dworbartnika.pl" },
        { name: "Menu", url: "https://dworbartnika.pl/menu" }
      ]} />
      <MenuSchema />

      {/* Hero section ze zdjęciem pierogów */}
      <section className="relative h-[60vh] min-h-[350px] md:h-[85vh] md:min-h-[600px]">
        <Image
          src="/images/restauracja/pierog_(1).jpg"
          alt="Menu restauracji Carska Komnata"
          fill
          className="object-cover object-[center_35%]"
          priority
          quality={75}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-black/40" />
        
        {/* Przycisk "więcej informacji" */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
          <a href="#menu-content" className="text-white text-sm flex flex-col items-center gap-2 hover:text-primary-300 transition-colors group">
            <span className="w-8 h-8 border border-white/70 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <span className="text-xs uppercase tracking-wider font-light" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>więcej<br/>informacji</span>
          </a>
        </div>
      </section>

      {/* Cała sekcja menu + Fenomen Natury */}
      <main className="relative min-h-screen pt-52 md:pt-40">
        {/* Animowane topograficzne tło */}
        <div className="absolute inset-0 overflow-hidden">
          <TopographicBackground
            lineColor="#2a1f18"
            backgroundColor="#d3b883"
            speed={0.008}
            scale={1.2}
            lineThickness={0.02}
            levels={18}
          />
        </div>

        {/* Box - absolutnie pozycjonowany, połowa nachodzi na hero */}
        <div id="menu-content" className="absolute top-0 left-0 right-0 z-20 px-5 -translate-y-1/2">
          <div className="max-w-sm md:max-w-xl mx-auto bg-amber-50/90 backdrop-blur-[2px] rounded-xl shadow-lg border border-amber-200/40 overflow-hidden">
            <div className="p-5 md:p-6">
              <h1 className="font-cursive text-3xl md:text-4xl text-primary-400 text-center mb-3">
                Nasze Menu
              </h1>
              <div className="flex justify-center mb-3">
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
              </div>
              <p className="text-gray-700 leading-relaxed text-sm text-center mb-4">
                Restauracja <strong className="font-semibold">Carska Komnata</strong> oferuje 
                dania regionalne, dziczyznę, potrawy wegańskie, wegetariańskie i bezglutenowe. 
                Smaki Puszczy Białowieskiej na Twoim talerzu.
              </p>
              
              {/* Legenda oznaczeń */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-3 border-t border-gray-200">
                <div className="flex items-center gap-1.5">
                  {/* Przekreślony kłos - gluten free */}
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="2">
                    <path d="M12 3v18M9 6c0 0 3 2 3 5s-3 5-3 5M15 6c0 0-3 2-3 5s3 5 3 5" strokeLinecap="round"/>
                    <line x1="4" y1="4" x2="20" y2="20" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  <span className="text-xs text-gray-600">Bez glutenu</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base">💚</span>
                  <span className="text-xs text-gray-600">Wegetariańskie</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base">🌿</span>
                  <span className="text-xs text-gray-600">Wegańskie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content menu */}
        <div className="container-custom relative z-10 pb-12">
          {/* Zestaw dnia */}
          <ZestawDniaSection />

          {/* Sekcje menu */}
          {menuSections.map((section) => (
            <MenuSection key={section.id} section={section} />
          ))}

          {/* Śniadania */}
          <SniadaniaSection />

          {/* Fenomen Natury - miód pszczeli */}
          <FenomenNaturySection />
        </div>
      </main>
    </>
  );
}

