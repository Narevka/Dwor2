import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ImageGallery } from '@/components/shared/ImageGallery';
import { BreadcrumbSchema, MuseumSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Muzeum Pszczelarstwa Narewka',
  description: 'Muzeum pszczelarstwa w Dworze Bartnika. Bogata kolekcja uli, numizmatyka, filatelistyka, obrazy olejne i wiele innych eksponatów związanych z pszczelarstwem.',
  alternates: {
    canonical: 'https://dworbartnika.pl/muzeum-pszczelarstwa',
  },
  openGraph: {
    title: 'Muzeum Pszczelarstwa | Dwór Bartnika',
    description: 'Bogata kolekcja uli, numizmatyka, filatelistyka, obrazy olejne i eksponaty pszczelarskie.',
    url: 'https://dworbartnika.pl/muzeum-pszczelarstwa',
    siteName: 'Dwór Bartnika',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/images/og/OG_muzeum_pszczelarstwa.jpg',
        width: 1200,
        height: 630,
        alt: 'Muzeum Pszczelarstwa w Dworze Bartnika',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muzeum Pszczelarstwa | Dwór Bartnika',
    description: 'Bogata kolekcja uli, numizmatyka, filatelistyka i eksponaty pszczelarskie.',
    images: ['/images/og/OG_muzeum_pszczelarstwa.jpg'],
  },
};

// Galeria zdjęć muzeum - kolejność zgodna z oryginalną stroną
const galleryImages = [
  // Rząd 1: m16, m11, m12
  { src: '/images/muzeum/m16.jpg', alt: 'Malarstwo' },
  { src: '/images/muzeum/m11.jpg', alt: 'Koperty FDC' },
  { src: '/images/muzeum/m12.jpg', alt: 'Obrazy pejzażowe' },
  // Rząd 2: m13, m14, m15
  { src: '/images/muzeum/m13.jpg', alt: 'Krawaty pszczelarskie' },
  { src: '/images/muzeum/m14.jpg', alt: 'Medale' },
  { src: '/images/muzeum/m15.jpg', alt: 'Numizmatyka' },
  // Rząd 3: m10, m17, m18
  { src: '/images/muzeum/m10.jpg', alt: 'Pracowitość' },
  { src: '/images/muzeum/m17.jpg', alt: 'Medale pszczelarskie' },
  { src: '/images/muzeum/m18.jpg', alt: 'Kobiety i pszczoły' },
  // Rząd 4: m19, m9, m3
  { src: '/images/muzeum/m19.jpg', alt: 'Pszczelarskie monety' },
  { src: '/images/muzeum/m9.jpg', alt: 'Ogród' },
  { src: '/images/muzeum/m3.jpg', alt: 'Ule figuralne', tall: true },
  // Rząd 5: m4, m6, m7
  { src: '/images/muzeum/m4.jpg', alt: 'Ceramika pszczelarza' },
  { src: '/images/muzeum/m6.jpg', alt: 'Pyłek kwiatowy' },
  { src: '/images/muzeum/m7.jpg', alt: 'Pszczoła na kwiecie' },
  // Rząd 6: m8, m2, skanse-1
  { src: '/images/muzeum/m8.webp', alt: 'Ul w zimie' },
  { src: '/images/muzeum/m2.jpg', alt: 'Pasieka' },
  { src: '/images/muzeum/skanse-1.webp', alt: 'Pszczelarz przy ulu' },
];

// Podział galerii na 3 części po 6 zdjęć
const galleryPart1 = galleryImages.slice(0, 6);
const galleryPart2 = galleryImages.slice(6, 12);
const galleryPart3 = galleryImages.slice(12, 18);

export default function MuzeumPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://dworbartnika.pl" },
        { name: "Atrakcje", url: "https://dworbartnika.pl/atrakcje-bialowieza" },
        { name: "Muzeum Pszczelarstwa", url: "https://dworbartnika.pl/muzeum-pszczelarstwa" }
      ]} />
      <MuseumSchema />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[60vh] min-h-[350px] md:h-[85vh] md:min-h-[600px]">
        <Image
          src="/images/new/IMG_1628.webp"
          alt="Muzeum Pszczelarstwa - tradycyjne ule"
          fill
          className="object-cover object-center"
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
          MOBILE: Storytelling Layout z przeplatana galerią
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="md:hidden">
        {/* BOX 1: Tytuł + Wprowadzenie - nachodzi na hero */}
        <div id="content" className="relative z-10 -mt-24 px-5 pb-6">
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/15 border border-stone-200/60 overflow-hidden">
            <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
              <h1 className="font-cursive text-3xl text-primary-400 text-center mb-3">
                Muzeum Pszczelarstwa w Narewce
              </h1>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
              </div>
              <p className="text-gray-700 leading-relaxed text-sm text-center">
                Bogato wyposażone muzeum oferuje zdobywanie wiedzy o życiu pszczół. 
                Skansen posiada bogatą <strong className="font-semibold">kolekcję uli</strong> w ogródku pszczelarskim: 
                ule kłodowe, kószki (ule słomiane) oraz ule figuralne.
              </p>
            </div>
          </div>
        </div>

        {/* ZDJĘCIE: Muzeum */}
        <div className="relative h-[50vh] min-h-[250px]">
          <Image
            src="/images/muzeum/muzeum_01.jpg"
            alt="Muzeum pszczelarstwa"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* BOX 2: Działy muzeum - nachodzi na zdjęcie */}
        <div className="relative z-10 -mt-16 px-5 pb-6">
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/15 border border-stone-200/60 overflow-hidden">
            <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
              </div>
              <p className="text-gray-700 leading-relaxed text-sm text-center">
                W budynku muzeum różnorodny zbiór eksponatów prezentowany jest w działach: 
                <strong className="font-semibold"> numizmatyka, filatelistyka, obrazy olejne, haft krzyżykowy, 
                krawaty, exlibrisy, stary sprzęt pszczelarski, zegary, heraldyka</strong> i wiele innych. 
                Wiele eksponatów to prawdziwe rarytasy!
              </p>
            </div>
          </div>
        </div>

        {/* GALERIA część 1: 6 zdjęć (2x3) */}
        <div className="px-5 pb-4">
          <div className="grid grid-cols-2 gap-2">
            {galleryPart1.map((image, index) => (
              <div key={index} className="relative h-[120px] rounded-lg overflow-hidden shadow-md">
                <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="50vw" />
              </div>
            ))}
          </div>
        </div>

        {/* BOX 3: Tradycje + produkty */}
        <div className="px-5 pb-4">
          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200/60">
            <p className="text-gray-700 leading-relaxed text-sm text-center mb-3">
              Narewka leży na terenie <strong className="font-semibold">Puszczy Białowieskiej</strong>, 
              gdzie tradycje pszczelarskie sięgają czasów bartnictwa. 
              Goście są częstowani <strong className="font-semibold">miodem z własnej pasieki</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm text-center">
              Można też kupić miód o niepowtarzalnym smaku – {' '}
              <a 
                href="https://fenomennatury.pl/?fenomen-natury" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-500 font-semibold underline"
              >
                Fenomen Natury
              </a>
              {' '} – miód z pyłkiem, mleczkiem i kitem, pyłek kwiatowy i miody odmianowe.
            </p>
          </div>
        </div>

        {/* GALERIA część 2: 6 zdjęć (2x3) */}
        <div className="px-5 pb-4">
          <div className="grid grid-cols-2 gap-2">
            {galleryPart2.map((image, index) => (
              <div key={index} className="relative h-[120px] rounded-lg overflow-hidden shadow-md">
                <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="50vw" />
              </div>
            ))}
          </div>
        </div>

        {/* BOX 4: Zwiedzanie */}
        <div className="px-5 pb-4">
          <div className="bg-white rounded-xl p-5 shadow-lg border border-stone-200/60">
            <div className="flex justify-center mb-3">
              <div className="w-10 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
            </div>
            <p className="text-gray-800 text-sm text-center font-medium mb-2">
              Zwiedzanie muzeum z przewodnikiem
            </p>
            <p className="text-gray-600 text-xs text-center mb-3">
              po wcześniejszym uzgodnieniu terminu
            </p>
            <p className="text-center mb-3">
              <a href="tel:781505802" className="text-primary-500 font-bold text-lg">
                📞 781 505 802
              </a>
            </p>
            <p className="text-gray-600 text-xs text-center">
              Muzeum stanowi jedną z głównych{' '}
              <Link href="/atrakcje-bialowieza" className="text-primary-500 font-semibold underline">atrakcji Dworu Bartnika</Link>.{' '}
              Goście hotelowi mają bezpłatny wstęp –{' '}
              <Link href="/noclegi-bialowieza" className="text-primary-500 font-semibold underline">sprawdź ofertę noclegową</Link>.
            </p>
          </div>
        </div>

        {/* GALERIA część 3: 6 zdjęć (2x3) */}
        <div className="px-5 pb-8">
          <div className="grid grid-cols-2 gap-2">
            {galleryPart3.map((image, index) => (
              <div key={index} className="relative h-[120px] rounded-lg overflow-hidden shadow-md">
                <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="50vw" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP: Oryginalny layout
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="content" className="hidden md:block section bg-gray-50">
        <div className="container-custom">
          {/* Dekoracyjny nagłówek - span zamiast h1 (H1 jest w wersji mobile) */}
          <span className="block font-cursive text-5xl md:text-6xl text-primary-400 text-center mb-12">
            Muzeum Pszczelarstwa w Narewce
          </span>

          {/* Treść z głównym zdjęciem - układ jak na oryginale */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start mb-16">
            {/* Tekst */}
            <div className="text-gray-700 text-base leading-relaxed">
              <p className="mb-4">
                Bogato wyposażone muzeum oferuje zdobywanie i poszerzanie wiedzy o życiu pszczół. Skansen posiada bogatą kolekcję uli w ogródku pszczelarskim. Są to: ule kłodowe, kószki – czyli ule słomiane oraz ule figuralne. W budynku znajduje się muzeum, gdzie różnorodny zbiór przedmiotów o tematyce pszczelarskiej prezentowany jest w takich działach jak: numizmatyka, filatelistyka, birofilistyka, trafika, szkło i porcelana, obrazy olejne, haft krzyżykowy, krawaty, exlibrisy, stary sprzęt pszczelarski, karty telefoniczne, zegary, makrofotografia, heraldyka, akcje i obligacje. Wiele eksponatów to prawdziwe rarytasy.
              </p>
              <p className="mb-4">
                Narewka jest położona na terenie Puszczy Białowieskiej, gdzie tradycje pszczelarskie sięgają czasów bartnictwa i każde spotkania, rozmowy, dyskusje przyczyniają się do rozwoju pszczelarstwa, do propagowania zdrowego stylu życia, do spożywania produktów pszczelich, które są produktami nieprzetworzonymi, mającymi odżywcze i lecznicze właściwości dla człowieka. Goście odwiedzający obiekt są częstowani miodem z własnej pasieki. Można też kupić miód bezpośrednio z pasieki o niepowtarzalnym smaku i właściwościach – <a href="https://fenomennatury.pl/?fenomen-natury" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-semibold underline">Fenomen Natury</a> - miód z pyłkiem, mleczkiem i kitem potrójnie uszlachetniany, pyłek kwiatowy i inne miody odmianowe.
              </p>
              <p className="mb-4">
                Zwiedzanie muzeum z przewodnikiem po wcześniejszym uzgodnieniu terminu - tel. 781 505 802.
              </p>
              <p>
                Muzeum stanowi jedną z głównych{' '}
                <Link href="/atrakcje-bialowieza" className="text-primary-600 hover:text-primary-700 font-semibold underline">atrakcji Dworu Bartnika</Link>.{' '}
                Goście hotelowi mają bezpłatny wstęp –{' '}
                <Link href="/noclegi-bialowieza" className="text-primary-600 hover:text-primary-700 font-semibold underline">sprawdź ofertę noclegową</Link>.
              </p>
            </div>

            {/* Główne zdjęcie obok tekstu */}
            <div className="relative w-[350px] h-[300px] rounded-lg overflow-hidden shadow-lg flex-shrink-0">
              <Image
                src="/images/muzeum/muzeum_01.jpg"
                alt="Muzeum pszczelarstwa"
                fill
                className="object-cover"
                sizes="350px"
              />
            </div>
          </div>

          {/* Galeria zdjęć eksponatów */}
          <div className="mb-8">
            <h2 className="font-cursive text-3xl text-primary-400 text-center mb-8">
              Eksponaty i kolekcje
            </h2>
            <ImageGallery images={galleryImages} columns={3} preserveAspectRatio={true} />
          </div>
        </div>
      </section>
    </>
  );
}

