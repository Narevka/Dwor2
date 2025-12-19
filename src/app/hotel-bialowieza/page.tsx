import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ImageGallery } from '@/components/shared/ImageGallery';
import { RoomsParallaxSection } from '@/components/home/RoomsParallaxSection';
import { BreadcrumbSchema, HotelSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Hotel Białowieża - Dwór Bartnika | 25 Pokoi od 120 zł',
  description: 'Hotel Białowieża - Dwór Bartnika. 25 pokoi przy Puszczy Białowieskiej, apartamenty z sauną i jacuzzi. 700m od rzeki z plażą. Żubry 2 km. Certyfikat Gwarancja Satysfakcji.',
  alternates: {
    canonical: 'https://dworbartnika.pl/hotel-bialowieza',
  },
  openGraph: {
    title: 'Hotel Białowieża - Dwór Bartnika | 25 Pokoi od 120 zł',
    description: 'Hotel przy Puszczy Białowieskiej. 25 pokoi, apartamenty z sauną i jacuzzi. 700m od rzeki, żubry 2 km.',
    url: 'https://dworbartnika.pl/hotel-bialowieza',
    siteName: 'Dwór Bartnika',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/images/og/OG_hotel.jpg',
        width: 1200,
        height: 630,
        alt: 'Hotel Białowieża - Dwór Bartnika przy Puszczy Białowieskiej',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Białowieża - Dwór Bartnika | 25 Pokoi od 120 zł',
    description: 'Hotel przy Puszczy Białowieskiej. 25 pokoi, apartamenty z sauną i jacuzzi.',
    images: ['/images/og/OG_hotel.jpg'],
  },
};

// Galeria końcowa (6 zdjęć)
const galleryImages = [
  { src: '/images/hotel/img-20230803-wa0027.jpg', alt: 'Zielony ogród hotelowy Dworu Bartnika z kwitnącymi krzewami i alejkami spacerowymi' },
  { src: '/images/hotel/50395223.jpg', alt: 'Frontowa fasada hotelu Dwór Bartnika z charakterystyczną drewnianą architekturą' },
  { src: '/images/hotel/plac2.webp', alt: 'Przestronny plac przed hotelem z parkingiem i fontanną dekoracyjną' },
  { src: '/images/hotel/dwor3.jpg', alt: 'Dwór Bartnika oświetlony wieczornym światłem z widokiem na taras restauracyjny' },
  { src: '/images/hotel/dwor4.jpg', alt: 'Malownicze otoczenie hotelu z drzewami liściastymi i ławkami wypoczynkowymi' },
  { src: '/images/hotel/szach.jpg', alt: 'Teren rekreacyjny z dużą szachownicą ogrodową dla gości hotelowych' },
];

export default function HotelPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://dworbartnika.pl" },
        { name: "Hotel Białowieża", url: "https://dworbartnika.pl/hotel-bialowieza" }
      ]} />
      <HotelSchema />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[60vh] min-h-[350px] md:h-[85vh] md:min-h-[600px]">
        <Image
          src="/images/hero/startowe-1.webp"
          alt="Dwór Bartnika - Hotel"
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
          MOBILE: Storytelling Layout - przeplatane boxy i zdjęcia
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="md:hidden">
        {/* BOX 1: Tytuł + Lokalizacja - nachodzi na hero */}
        <div id="content" className="relative z-10 -mt-24 px-5 pb-6">
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/15 border border-stone-200/60 overflow-hidden">
            <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
              {/* Tytuł - główny H1 dla SEO */}
              <h1 className="font-cursive text-4xl text-primary-400 text-center mb-3">
                Hotel Dwór Bartnika w Narewce
              </h1>
              {/* Dekoracyjna linia */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
              </div>
              {/* Akapit 1 */}
              <p className="text-gray-700 leading-relaxed text-sm text-center">
                Hotel położony jest na terenie <strong className="font-semibold">Puszczy Białowieskiej</strong>, 
                w miejscowości Narewka. Znajdujący się w odległości <strong className="font-semibold">700 metrów od rzeki</strong> z 
                piaszczystą plażą. Hotel oferuje swym gościom wypoczynek w otoczeniu dzikiej przyrody.
              </p>
            </div>
          </div>
        </div>

        {/* ZDJĘCIE 1: Duże, pełna szerokość */}
        <div className="relative h-[50vh] min-h-[280px]">
          <Image
            src="/images/hotel/dwor5.jpg"
            alt="Budynek Dworu Bartnika"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* BOX 2: Pokoje - nachodzi na zdjęcie */}
        <div className="relative z-10 -mt-20 px-5 pb-6">
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/15 border border-stone-200/60 overflow-hidden">
            <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
              </div>
              <p className="text-gray-700 leading-relaxed text-sm text-center">
                Do dyspozycji gości przygotowano <strong className="font-semibold">25 wygodnych i estetycznie urządzonych pokoi</strong>, 
                obejmujących                 <Link href="/pokoje-2-osobowe-bialowieza" className="text-primary-500 hover:text-primary-600 underline">pokoje 2-osobowe</Link>,{' '}
                <Link href="/pokoje-3-osobowe-bialowieza" className="text-primary-500 hover:text-primary-600 underline">3-osobowe</Link> i{' '}
                <Link href="/pokoje-rodzinne-bialowieza" className="text-primary-500 hover:text-primary-600 underline">rodzinne 4-osobowe</Link>, a także ekskluzywne{' '}
                <Link href="/apartament-z-sauna-bialowieza" className="text-primary-500 hover:text-primary-600 underline">apartament z sauną</Link> i{' '}
                <Link href="/apartament-z-jacuzzi-bialowieza" className="text-primary-500 hover:text-primary-600 underline">jacuzzi</Link>.
                Baza noclegowa pozwala na zakwaterowanie do 75 osób jednocześnie.
              </p>
            </div>
          </div>
        </div>

        {/* ZDJĘCIA 2-3: Dwa obok siebie */}
        <div className="grid grid-cols-2 gap-2 px-4 pb-4">
          <div className="relative h-[140px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/hotel/img-20230803-wa0040.jpg"
              alt="Widok na Dwór Bartnika"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="relative h-[140px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/hotel/img-20230803-wa0056.jpg"
              alt="Teren wokół hotelu"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>

        {/* BOX 3: Atmosfera + Certyfikat */}
        <div className="px-5 pb-6">
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-xl shadow-black/10 border border-stone-200/60 overflow-hidden">
            <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
              </div>
              <p className="text-gray-700 leading-relaxed text-sm text-center mb-3">
                Hotel zapewnia idealne warunki dla osób szukających <strong className="font-semibold">wyciszenia i relaksu</strong> w 
                bezpośrednim kontakcie z naturą.
              </p>
              <p className="text-gray-600 leading-relaxed text-xs text-center">
                Wysoki standard usług został potwierdzony{' '}
                <a 
                  href="https://meteor-turystyka.pl/dworbartnika-narewka,narewka.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-500 hover:text-primary-600 underline transition-colors font-medium"
                >
                  certyfikatem &quot;Gwarancja Satysfakcji&quot;
                </a>
                {' '}od portalu Meteor.
              </p>
            </div>
          </div>
        </div>

        {/* GALERIA: 2 kolumny, 6 zdjęć */}
        <div className="bg-stone-50 py-8 px-4">
          <h2 className="font-cursive text-3xl text-primary-400 text-center mb-6">
            Galeria
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-[130px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP: Klasyczny layout
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="hidden md:block">
        {/* Sekcja O hotelu */}
        <section id="content" className="py-14 bg-white">
          <div className="container-custom">
            {/* Dekoracyjny nagłówek - span zamiast h1 (H1 jest w wersji mobile) */}
            <span className="block font-cursive text-6xl text-primary-400 text-center mb-12">
              Hotel Dwór Bartnika w Narewce
            </span>

            {/* Grid: tekst po lewej, zdjęcie po prawej - proporcje jak na oryginale */}
            <div className="grid grid-cols-[1.2fr_1fr] gap-16 items-start max-w-7xl mx-auto">
              {/* Lewa kolumna - tekst */}
              <div className="text-gray-700 text-[17px] leading-[1.85] space-y-5">
                <p>
                  Hotel położony jest na terenie <strong className="text-gray-800 font-semibold">Puszczy Białowieskiej</strong>, w miejscowości 
                  Narewka. Znajdujący się w odległości <strong className="text-gray-800 font-semibold">700 metrów od rzeki</strong> z 
                  piaszczystą <strong className="text-gray-800 font-semibold">plażą</strong>. Hotel oferuje swym gościom wypoczynek w 
                  otoczeniu dzikiej przyrody.
                </p>
                <p>
                  Do dyspozycji gości przygotowano 25 wygodnych i estetycznie urządzonych pokoi, 
                  obejmujących                   <Link href="/pokoje-2-osobowe-bialowieza" className="text-primary-500 hover:text-primary-600 underline transition-colors font-semibold">pokoje 2-osobowe</Link>,{' '}
                  <Link href="/pokoje-3-osobowe-bialowieza" className="text-primary-500 hover:text-primary-600 underline transition-colors font-semibold">3-osobowe</Link> i{' '}
                  <Link href="/pokoje-rodzinne-bialowieza" className="text-primary-500 hover:text-primary-600 underline transition-colors font-semibold">rodzinne 4-osobowe</Link>, a także ekskluzywne{' '}
                  <Link href="/apartament-z-sauna-bialowieza" className="text-primary-500 hover:text-primary-600 underline transition-colors font-semibold">apartament z sauną</Link> i{' '}
                  <Link href="/apartament-z-jacuzzi-bialowieza" className="text-primary-500 hover:text-primary-600 underline transition-colors font-semibold">jacuzzi</Link>. Baza noclegowa pozwala na 
                  zakwaterowanie do 75 osób jednocześnie, a wysoki standard usług został potwierdzony{' '}
                  <a 
                    href="https://meteor-turystyka.pl/dworbartnika-narewka,narewka.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 underline transition-colors font-semibold"
                  >
                    certyfikatem &quot;Gwarancja Satysfakcji&quot; od portalu Meteor.
                  </a>
                </p>
                <p>
                  Hotel zapewnia idealne warunki dla osób szukających wyciszenia i relaksu w 
                  bezpośrednim kontakcie z naturą. Po dniu zwiedzania zapraszamy do{' '}
                  <Link href="/restauracja-bialowieza" className="text-primary-500 hover:text-primary-600 underline transition-colors font-semibold">Restauracji Carska Komnata</Link>, 
                  gdzie serwujemy specjały kuchni regionalnej. Warto też odwiedzić{' '}
                  <Link href="/muzeum-pszczelarstwa" className="text-primary-500 hover:text-primary-600 underline transition-colors font-semibold">Muzeum Pszczelarstwa</Link>{' '}
                  z unikalną kolekcją eksponatów.
                </p>
              </div>

              {/* Prawa kolumna - zdjęcie hotelu */}
              <div className="relative h-[420px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero/startowe-1.webp"
                  alt="Dwór Bartnika - Hotel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section className="py-14 bg-gray-50">
          <div className="container-custom">
            <h2 className="font-cursive text-5xl text-primary-400 text-center mb-10">
              Galeria
            </h2>
            <ImageGallery 
              images={[
                { src: '/images/hotel/img-20230803-wa0040.jpg', alt: 'Widok na Dwór Bartnika' },
                { src: '/images/hotel/img-20230803-wa0056.jpg', alt: 'Teren wokół hotelu' },
                { src: '/images/hotel/img-20230803-wa0027.jpg', alt: 'Ogród hotelowy' },
                { src: '/images/hotel/dwor5.jpg', alt: 'Budynek Dworu Bartnika' },
                { src: '/images/hotel/50395223.jpg', alt: 'Hotel od frontu' },
                { src: '/images/hotel/plac2.webp', alt: 'Plac przed hotelem' },
                { src: '/images/hotel/dwor3.jpg', alt: 'Dwór Bartnika wieczorem' },
                { src: '/images/hotel/dwor4.jpg', alt: 'Otoczenie hotelu' },
                { src: '/images/hotel/szach.jpg', alt: 'Teren rekreacyjny' },
              ]} 
              columns={3} 
              imageHeight="200px" 
            />
          </div>
        </section>
      </div>

      {/* SEKCJA: Nasze pokoje - dla obu wersji */}
      <RoomsParallaxSection />
    </>
  );
}

