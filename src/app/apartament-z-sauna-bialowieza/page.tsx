import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { BreadcrumbSchema, ApartamentSaunaSchema, ApartamentSaunaProductSchema } from '@/components/seo';
import { ZoomableGallery } from '@/components/shared/ZoomableImage';

export const metadata: Metadata = {
  title: 'Apartament z Sauną Białowieża - 300 zł/os | Dwór Bartnika',
  description: 'Apartament z sauną Białowieża - prywatna sauna fińska w Dworze Bartnika przy Puszczy Białowieskiej. 35 m², łazienka, Wi-Fi, TV, śniadanie w cenie. 300 zł/os.',
  alternates: {
    canonical: 'https://dworbartnika.pl/apartament-z-sauna-bialowieza',
  },
  openGraph: {
    title: 'Apartament z Sauną Białowieża - 300 zł/os | Dwór Bartnika',
    description: 'Luksusowy apartament z prywatną sauną fińską przy Puszczy Białowieskiej. 35 m², śniadanie w cenie.',
    url: 'https://dworbartnika.pl/apartament-z-sauna-bialowieza',
    siteName: 'Dwór Bartnika',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/images/og/OG_pokoj_sauna.jpg',
        width: 1200,
        height: 630,
        alt: 'Apartament z sauną Białowieża - Dwór Bartnika',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apartament z Sauną Białowieża - 300 zł/os | Dwór Bartnika',
    description: 'Luksusowy apartament z prywatną sauną fińską przy Puszczy Białowieskiej. 300 zł/os.',
    images: ['/images/og/OG_pokoj_sauna.jpg'],
  },
};

// Galeria zdjęć apartamentu z sauną
const galleryImages = [
  { src: '/images/rooms/better_qiality.jpg', alt: 'Sauna fińska z drewnianym wykończeniem w apartamencie Dworu Bartnika' },
  { src: '/images/rooms/pokoj_08.jpg', alt: 'Sypialnia apartamentu z sauną - eleganckie łóżko dwuosobowe z widokiem na las' },
  { src: '/images/rooms/pokoj_10.jpg', alt: 'Przytulne wnętrze apartamentu z sauną - strefa wypoczynkowa z fotelami' },
];

// Lista udogodnień na życzenie
const amenitiesOnRequest = [
  'lodówka',
  'usługi pralnicze',
  'łóżeczko dla dziecka',
  'dodatkowe poduszki lub koce',
  'żelazko z deską do prasowania',
  'czajnik z zestawem do herbaty/kawy',
  'informacje na temat okolic, przewodniki turystyczne i mapy',
];

// Wyposażenie pokoju
const equipment = [
  'Szafa',
  'Bezpłatne Wi-Fi',
  'Ręczniki',
  'Fotele',
  'Żel do mycia ciała',
  'Biurko lub stolik',
  'Suszarka do włosów',
  'Stoliki i lampki nocne',
  'Łazienka z prysznicem',
  'Telewizor z płaskim ekranem',
  '1 podwójne łóżko',
  'Elektroniczne zamki w drzwiach',
  'Sauna',
];

export default function ApartamentZSaunaPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://dworbartnika.pl" },
        { name: "Hotel Białowieża", url: "https://dworbartnika.pl/hotel-bialowieza" },
        { name: "Apartament z sauną", url: "https://dworbartnika.pl/apartament-z-sauna-bialowieza" }
      ]} />
      <ApartamentSaunaSchema />
      <ApartamentSaunaProductSchema />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION - taka sama wysokość jak na innych stronach
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[60vh] min-h-[350px] md:h-[85vh] md:min-h-[600px]">
        <Image
          src="/images/hero/startowe-1.webp"
          alt="Dwór Bartnika - apartament z sauną"
          fill
          className="object-cover object-top"
          priority
          quality={75}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-black/40" />
        
        {/* Przycisk "więcej informacji" */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
          <a href="#content" className="text-white text-sm flex flex-col items-center gap-2 hover:text-primary-300 transition-colors group">
            <span className="w-8 h-8 border border-white/70 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <span className="text-xs uppercase tracking-wider font-light" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>więcej<br/>informacji</span>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE: Storytelling Layout - karty nachodzące na hero
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="md:hidden">
        {/* BOX 1: Tytuł + podstawowe info - nachodzi na hero */}
        <div id="content" className="relative z-10 -mt-24 px-5 pb-6">
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/15 border border-stone-200/60 overflow-hidden">
            <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
              <h1 className="font-cursive text-4xl text-primary-400 text-center mb-3">
                Apartament z Prywatną Sauną
              </h1>
              {/* Dekoracyjna linia */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
              </div>
              <p className="text-gray-700 leading-relaxed text-sm text-center mb-3">
                Luksusowy apartament o metrażu <strong className="font-semibold">35 m²</strong> z 
                prywatną sauną fińską - idealny na relaksujący pobyt.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm text-center">
                Sauna pomaga w regeneracji organizmu i zapewnia głęboki relaks po całym dniu zwiedzania Puszczy Białowieskiej.
              </p>
            </div>
          </div>
        </div>

        {/* ZDJĘCIE 1: Duże, pełna szerokość */}
        <div className="relative h-[50vh] min-h-[280px]">
          <Image
            src="/images/rooms/better_qiality.jpg"
            alt="Apartament z sauną"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* BOX 2: Wyposażenie - nachodzi na zdjęcie (PEŁNA LISTA) */}
        <div className="relative z-10 -mt-20 px-5 pb-6">
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/15 border border-stone-200/60 overflow-hidden">
            <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
              <h2 className="font-cursive text-3xl text-primary-400 text-center mb-3">
                Wyposażenie pokoju
              </h2>
              <div className="flex justify-center mb-4">
                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                {equipment.map((item, index) => (
                  <p key={index} className="text-gray-700 flex items-center">
                    <span className="text-primary-400 mr-1.5 text-xs">●</span>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ZDJĘCIA 2-3: Dwa obok siebie */}
        <div className="grid grid-cols-2 gap-2 px-4 pb-4">
          <div className="relative h-[140px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/rooms/pokoj_08.jpg"
              alt="Apartament z sauną - widok 2"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="relative h-[140px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/rooms/pokoj_10.jpg"
              alt="Apartament z sauną - widok 3"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>

        {/* BOX 3: Udogodnienia na życzenie */}
        <div className="px-5 pb-6">
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-xl shadow-black/10 border border-stone-200/60 overflow-hidden">
            <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
              <h2 className="font-cursive text-3xl text-primary-400 text-center mb-3">
                Na życzenie gości
              </h2>
              <div className="flex justify-center mb-4">
                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
              </div>
              <p className="text-gray-600 text-xs text-center mb-3">
                Dodatkowe udogodnienia dostępne na życzenie:
              </p>
              <ul className="space-y-1.5 text-sm">
                {amenitiesOnRequest.map((item, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <span className="text-primary-400 mr-2 mt-0.5 text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BOX 4: Godziny + Polityka + Karty */}
        <div className="px-5 pb-6">
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-xl shadow-black/10 border border-stone-200/60 overflow-hidden">
            <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
              <h2 className="font-cursive text-3xl text-primary-400 text-center mb-3">
                Ważne informacje
              </h2>
              <div className="flex justify-center mb-4">
                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
              </div>
              
              {/* Godziny */}
              <div className="flex justify-between items-center mb-3 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">Przyjazd</span>
                </div>
                <span className="text-primary-400 font-semibold">15:00</span>
              </div>
              <div className="flex justify-between items-center mb-4 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">Wyjazd</span>
                </div>
                <span className="text-primary-400 font-semibold">11:00</span>
              </div>
              
              {/* Separator */}
              <div className="border-t border-gray-100 my-4" />
              
              {/* Polityka zwierząt */}
              <p className="text-gray-600 text-sm text-center leading-relaxed mb-4">
                🐾 Zwierzęta akceptowane po wcześniejszym zgłoszeniu.<br/>
                <span className="text-gray-500">Opłata: 50 zł/doba</span>
              </p>
              
              {/* Separator */}
              <div className="border-t border-gray-100 my-4" />
              
              {/* Dzieci */}
              <p className="text-gray-600 text-sm text-center leading-relaxed mb-4">
                👶 Dzieci do 4. roku życia nocują bezpłatnie<br/>
                <span className="text-gray-500">Łóżeczko dziecięce dostępne na życzenie</span>
              </p>
              
              {/* Separator */}
              <div className="border-t border-gray-100 my-4" />
              
              {/* W cenie pobytu */}
              <div className="bg-green-50/50 rounded-lg p-3 mb-4">
                <p className="text-gray-700 text-xs font-semibold text-center mb-2">
                  ✨ W cenie pobytu:
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-1.5 mt-0.5">✓</span>
                    <span>Śniadanie w Restauracji Carska Komnata</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-1.5 mt-0.5">✓</span>
                    <span>Degustacja miodu z własnej pasieki</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-1.5 mt-0.5">✓</span>
                    <span>Wstęp do Muzeum Pszczelarstwa</span>
                  </li>
                </ul>
              </div>
              
              {/* Separator */}
              <div className="border-t border-gray-100 my-4" />
              
              {/* Karty kredytowe */}
              <p className="text-gray-600 text-xs text-center mb-2">
                Akceptowane karty płatnicze:
              </p>
              <div className="flex justify-center">
                <Image
                  src="/images/karty.png"
                  alt="Akceptowane karty płatnicze: Visa, Mastercard, Maestro"
                  width={150}
                  height={25}
                  className="object-contain"
                  sizes="150px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* GALERIA: 2 kolumny z lightbox */}
        <div className="bg-stone-50 py-8 px-4">
          <h2 className="font-cursive text-3xl text-primary-400 text-center mb-6">
            Galeria
          </h2>
          <ZoomableGallery images={galleryImages} columns={2} imageHeight="130px" />
        </div>

        {/* Przycisk rezerwacji - mobile */}
        <div className="px-5 py-6 bg-white">
          <Link 
            href="/rezerwacja"
            className="block w-full bg-primary-400 hover:bg-primary-500 text-white text-center font-semibold py-4 rounded-xl shadow-lg transition-colors"
          >
            Zarezerwuj apartament z sauną
          </Link>
          <Link 
            href="/kontakt"
            className="block w-full mt-3 border border-gray-300 text-gray-600 text-center py-3 rounded-xl hover:border-primary-400 hover:text-primary-400 transition-colors"
          >
            Masz pytania?
          </Link>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP: Klasyczny layout
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="hidden md:block">
        <div id="content" className="max-w-[1340px] mx-auto px-6 py-14">
          
          {/* Dekoracyjny nagłówek - span zamiast h1 (H1 jest w wersji mobile) */}
          <span className="block font-cursive text-6xl text-primary-400 text-center font-normal leading-tight mb-12">
            Apartament z Prywatną Sauną
          </span>

          {/* Główna treść */}
          <div className="border-t border-gray-100 pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              
              {/* LEWA kolumna - Sidebar z informacjami */}
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="border border-gray-200 p-6">
                  {/* Ważne informacje */}
                  <h3 className="text-[#6a6a6a] font-semibold text-lg mb-4">
                    Ważne informacje:
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-[#6a6a6a] font-light">Przyjazd</span>
                      </div>
                      <span className="text-primary-400 font-semibold">15:00</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-[#6a6a6a] font-light">Wyjazd</span>
                      </div>
                      <span className="text-primary-400 font-semibold">11:00</span>
                    </div>
                  </div>
                  
                  {/* Polityka hotelu */}
                  <h3 className="text-[#6a6a6a] font-semibold text-lg mb-3">
                    Polityka hotelu:
                  </h3>
                  <p className="text-[#6a6a6a] text-sm font-light leading-relaxed mb-6">
                    Zwierzęta są akceptowane po wcześniejszym zgłoszeniu. Obowiązuje opłata 50zł/doba.
                  </p>
                  
                  <p className="text-[#6a6a6a] text-sm font-light leading-relaxed mb-6">
                    <strong className="font-semibold">Dzieci do 4. roku życia nocują bezpłatnie.</strong> Łóżeczko dziecięce dostępne na życzenie.
                  </p>
                  
                  <div className="bg-green-50 border-l-4 border-primary-400 p-3 mb-6">
                    <p className="text-[#6a6a6a] text-xs font-semibold mb-2">
                      W cenie pobytu:
                    </p>
                    <ul className="text-[#6a6a6a] text-xs space-y-1">
                      <li className="flex items-start">
                        <span className="text-primary-400 mr-1.5">✓</span>
                        <span>Śniadanie w Restauracji Carska Komnata</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-400 mr-1.5">✓</span>
                        <span>Degustacja miodu z pasieki</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-400 mr-1.5">✓</span>
                        <span>Wstęp do Muzeum Pszczelarstwa</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Akceptowane karty */}
                  <h3 className="text-[#6a6a6a] font-semibold text-lg mb-3">
                    Akceptowane karty kredytowe:
                  </h3>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/images/karty.png"
                      alt="Akceptowane karty płatnicze: Visa, Mastercard, Maestro"
                      width={180}
                      height={30}
                      className="object-contain"
                      sizes="180px"
                    />
                  </div>
                </div>
              </div>
              
              {/* PRAWA kolumna - główna treść */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                
                {/* Podstawowe informacje */}
                <section className="mb-8">
                  <h2 className="font-cursive text-4xl text-primary-400 mb-6">
                    Podstawowe informacje
                  </h2>
                  
                  <p className="text-[#6a6a6a] text-[17px] font-light leading-relaxed mb-4">
                    <strong className="font-bold">Metraż:</strong> 35 m²
                  </p>
                  
                  <p className="text-[#6a6a6a] text-[17px] font-light leading-relaxed mb-4">
                    Luksusowy apartament z prywatną sauną fińską - idealny na relaksujący pobyt. 
                    Sauna pomaga w regeneracji organizmu i zapewnia głęboki relaks po całym dniu zwiedzania Puszczy Białowieskiej.
                  </p>
                  
                  <p className="text-[#6a6a6a] text-[17px] font-light leading-relaxed mb-4">
                    Na życzenie gości dodatkowe udogodnienia:
                  </p>
                  
                  <ul className="list-disc list-inside text-[#6a6a6a] text-[17px] font-light leading-relaxed ml-4 space-y-1">
                    {amenitiesOnRequest.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>

                {/* Wyposażenie */}
                <section className="mb-8">
                  <h2 className="font-cursive text-4xl text-primary-400 mb-6">
                    Wyposażenie
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
                    {equipment.map((item, index) => (
                      <p key={index} className="text-[#6a6a6a] text-[17px] font-light flex items-center">
                        <span className="text-primary-400 mr-2">•</span>
                        {item}
                      </p>
                    ))}
                  </div>
                </section>
                
                {/* Przycisk kontakt */}
                <div className="flex justify-end mb-8">
                  <Link 
                    href="/kontakt"
                    className="inline-block border border-gray-300 px-6 py-3 text-[#6a6a6a] hover:border-primary-400 hover:text-primary-400 transition-colors"
                  >
                    Masz pytania?
                  </Link>
                </div>
              </div>
            </div>

            {/* Galeria zdjęć z lightbox */}
            <section className="mt-12">
              <ZoomableGallery images={galleryImages} columns={3} imageHeight="250px" />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
