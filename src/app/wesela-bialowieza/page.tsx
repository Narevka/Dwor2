import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ImageGallery } from '@/components/shared/ImageGallery';
import { BreadcrumbSchema, EventVenueSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Wesela Białowieża - Sale Weselne do 150 osób | Dwór Bartnika',
  description: 'Wesela Białowieża - organizacja wesel, chrzcin, komunii, styp, imprez firmowych i integracyjnych. Sale bankietowe na 150 i 60 osób. Catering, noclegi dla gości.',
  alternates: {
    canonical: 'https://dworbartnika.pl/wesela-bialowieza',
  },
  openGraph: {
    title: 'Wesela Białowieża - Sale Weselne, Chrzciny, Komunie | Dwór Bartnika',
    description: 'Organizacja wesel, chrzcin, komunii, styp, imprez firmowych. Sale do 150 osób przy Puszczy Białowieskiej.',
    url: 'https://dworbartnika.pl/wesela-bialowieza',
    siteName: 'Dwór Bartnika',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/images/og/OG_przyjecia.jpg',
        width: 1200,
        height: 630,
        alt: 'Wesela Białowieża - Sale weselne w Dworze Bartnika',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wesela Białowieża - Sale Weselne | Dwór Bartnika',
    description: 'Wesela, chrzciny, komunie, stypy, imprezy firmowe. Sale do 150 osób.',
    images: ['/images/og/OG_przyjecia.jpg'],
  },
};

// Galeria zdjęć przyjęć - 9 zdjęć w układzie 3x3
const galleryImages = [
  { src: '/images/przyjecia/p1.jpg', alt: 'Sala weselna z dekoracjami' },
  { src: '/images/przyjecia/p2.jpg', alt: 'Przystawki i dekoracje' },
  { src: '/images/przyjecia/p3.jpg', alt: 'Sala bankietowa' },
  { src: '/images/przyjecia/p4.jpg', alt: 'Szef kuchni z mięsem' },
  { src: '/images/przyjecia/p5.jpg', alt: 'Dekoracje weselne' },
  { src: '/images/przyjecia/p6.jpg', alt: 'Przygotowania kulinarne' },
  { src: '/images/przyjecia/p7.jpg', alt: 'Potrawy weselne' },
  { src: '/images/przyjecia/p8.jpg', alt: 'Chleb weselny' },
  { src: '/images/przyjecia/p9.jpg', alt: 'Para tańcząca' },
];

// Podział galerii na 3 części po 3 zdjęcia
const galleryPart1 = galleryImages.slice(0, 3);
const galleryPart2 = galleryImages.slice(3, 6);
const galleryPart3 = galleryImages.slice(6, 9);

export default function PrzyjeciaPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://dworbartnika.pl" },
        { name: "Wesela Białowieża", url: "https://dworbartnika.pl/wesela-bialowieza" }
      ]} />
      <EventVenueSchema />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[60vh] min-h-[350px] md:h-[85vh] md:min-h-[600px]">
        <Image
          src="/images/przyjecia/wesele-bg.jpg"
          alt="Szampan z zastawą - przyjęcia w Dworze Bartnika"
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
          MOBILE: Storytelling Layout z przeplatana galerią
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="md:hidden">
        {/* BOX 1: Tytuł + Oferta + Sale - nachodzi na hero */}
        <div id="content" className="relative z-10 -mt-24 px-5 pb-6">
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/15 border border-stone-200/60 overflow-hidden">
            <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
              <h1 className="font-cursive text-4xl text-primary-400 text-center mb-3">
                Wesela i Przyjęcia w Białowieży
              </h1>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
              </div>
              <p className="text-gray-700 leading-relaxed text-sm text-center mb-3">
                Dwór Bartnika oferuje doskonałe warunki na organizację{' '}
                <strong className="font-semibold">wesel, chrzcin, komunii, jubileuszy, bankietów</strong> i spotkań integracyjnych.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm text-center">
                Dwie przestronne sale bankietowe, otoczone lasem i pięknymi ogrodami, zapewniają wyjątkową atmosferę.
              </p>
            </div>
          </div>
        </div>

        {/* GALERIA część 1: 2+1 szersze */}
        <div className="px-5 pb-4">
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="relative h-[120px] rounded-lg overflow-hidden shadow-md">
              <Image src={galleryPart1[0].src} alt={galleryPart1[0].alt} fill className="object-cover" sizes="50vw" />
            </div>
            <div className="relative h-[120px] rounded-lg overflow-hidden shadow-md">
              <Image src={galleryPart1[1].src} alt={galleryPart1[1].alt} fill className="object-cover" sizes="50vw" />
            </div>
          </div>
          <div className="relative h-[150px] rounded-lg overflow-hidden shadow-md">
            <Image src={galleryPart1[2].src} alt={galleryPart1[2].alt} fill className="object-cover" sizes="100vw" />
          </div>
        </div>

        {/* BOX 2: Pojemność + Konferencje */}
        <div className="px-5 pb-4">
          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200/60">
            <p className="text-gray-700 leading-relaxed text-sm text-center mb-3">
              <strong className="font-semibold">Sale mogą pomieścić 150 i 60 osób</strong>, 
              posiadają wentylację oraz klimatyzację.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm text-center">
              Miejsce przystosowane do organizacji <strong className="font-semibold">konferencji i szkoleń</strong>. 
              Sale wyposażone w system audiowizualny z projektorem, ekranem i nagłośnieniem.
            </p>
          </div>
        </div>

        {/* GALERIA część 2: 2+1 szersze */}
        <div className="px-5 pb-4">
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="relative h-[120px] rounded-lg overflow-hidden shadow-md">
              <Image src={galleryPart2[0].src} alt={galleryPart2[0].alt} fill className="object-cover" sizes="50vw" />
            </div>
            <div className="relative h-[120px] rounded-lg overflow-hidden shadow-md">
              <Image src={galleryPart2[1].src} alt={galleryPart2[1].alt} fill className="object-cover" sizes="50vw" />
            </div>
          </div>
          <div className="relative h-[150px] rounded-lg overflow-hidden shadow-md">
            <Image src={galleryPart2[2].src} alt={galleryPart2[2].alt} fill className="object-cover" sizes="100vw" />
          </div>
        </div>

        {/* BOX 3: Catering */}
        <div className="px-5 pb-4">
          <div className="bg-white rounded-xl p-5 shadow-lg border border-stone-200/60">
            <div className="flex justify-center mb-3">
              <div className="w-10 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
            </div>
            <p className="text-gray-700 leading-relaxed text-sm text-center">
              Restauracja oferuje <strong className="font-semibold">profesjonalny catering</strong> na wszelkie wydarzenia. 
              Menu dostosowane do indywidualnych potrzeb, w tym opcje{' '}
              <strong className="font-semibold">wegańskie, wegetariańskie, bezglutenowe</strong> oraz dla dzieci.
            </p>
          </div>
        </div>

        {/* GALERIA część 3: 2+1 szersze */}
        <div className="px-5 pb-8">
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="relative h-[120px] rounded-lg overflow-hidden shadow-md">
              <Image src={galleryPart3[0].src} alt={galleryPart3[0].alt} fill className="object-cover" sizes="50vw" />
            </div>
            <div className="relative h-[120px] rounded-lg overflow-hidden shadow-md">
              <Image src={galleryPart3[1].src} alt={galleryPart3[1].alt} fill className="object-cover" sizes="50vw" />
            </div>
          </div>
          <div className="relative h-[150px] rounded-lg overflow-hidden shadow-md">
            <Image src={galleryPart3[2].src} alt={galleryPart3[2].alt} fill className="object-cover" sizes="100vw" />
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
            Wesela i Przyjęcia w Białowieży
          </span>

          {/* Treść tekstowa */}
          <div className="max-w-6xl mx-auto text-gray-700 mb-12 space-y-4">
            <p className="text-lg leading-relaxed">
              Dwór Bartnika oferuje doskonałe warunki na organizację{' '}
              <span className="font-semibold">wesel, chrzcin, komunii, jubileuszy, rocznic, bankietów i spotkań integracyjnych</span>.
            </p>
            <p className="text-lg leading-relaxed">
              Dwie przestronne sale bankietowe, otoczone lasem i pięknymi ogrodami, zapewniają wyjątkową atmosferę.
            </p>
            <p className="text-lg leading-relaxed">
              <span className="font-semibold">Sale mogą pomieścić kolejno 150 i 60 osób, posiadają wentylację oraz klimatyzację.</span>
            </p>
            <p className="text-lg leading-relaxed">
              Miejsce przystosowane jest również do organizacji <span className="font-semibold">konferencji i szkoleń</span>. Sale są wyposażone w zaawansowany system audiowizualny z projektorem, ekranem, nagłośnieniem i telewizorem. Spokojna lokalizacja sprzyja koncentracji i efektywności.
            </p>
            <p className="text-lg leading-relaxed">
              Restauracja oferuje również <span className="font-semibold">profesjonalny catering</span> na wszelkie wydarzenia. Menu, przygotowane z najwyższej jakości składników, jest dostosowane do indywidualnych potrzeb klienta, w tym opcje <span className="font-semibold">wegańskie, wegetariańskie, bezglutenowe</span> oraz dla dzieci.
            </p>
            <p className="text-lg leading-relaxed mt-6">
              Rezerwacje i zapytania pod nr tel. <a href="tel:+48721907000" className="font-semibold text-primary-600 hover:underline">721 907 000</a>, lub mailowo: <a href="mailto:sapiolko@op.pl" className="font-semibold text-primary-600 hover:underline">sapiolko@op.pl</a>
            </p>
          </div>

          {/* Galeria zdjęć */}
          <div className="mb-16">
            <ImageGallery images={galleryImages} columns={3} imageHeight="250px" />
          </div>
        </div>
      </section>
    </>
  );
}


