import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ImageGallery } from '@/components/shared/ImageGallery';
import { BreadcrumbSchema, RestaurantSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Restauracja Białowieża - Carska Komnata | Kuchnia Regionalna',
  description: 'Restauracja Białowieża - Carska Komnata w Dworze Bartnika. Kuchnia regionalna, dziczyzna, pierogi, potrawy podlaskie. Opcje wegańskie, wegetariańskie, bezglutenowe. 11:00-20:00.',
  alternates: {
    canonical: 'https://dworbartnika.pl/restauracja-bialowieza',
  },
  openGraph: {
    title: 'Restauracja Białowieża - Carska Komnata | Kuchnia Regionalna',
    description: 'Kuchnia regionalna Podlasia, dziczyzna, pierogi. Opcje wegańskie, wegetariańskie, bezglutenowe.',
    url: 'https://dworbartnika.pl/restauracja-bialowieza',
    siteName: 'Dwór Bartnika',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/images/og/OG_restauracja.jpg',
        width: 1200,
        height: 630,
        alt: 'Restauracja Białowieża - Carska Komnata w Dworze Bartnika',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restauracja Białowieża - Carska Komnata | Kuchnia Regionalna',
    description: 'Kuchnia regionalna, dziczyzna, pierogi, wegetariańskie, bezglutenowe.',
    images: ['/images/og/OG_restauracja.jpg'],
  },
};

// Galeria zdjęć restauracji
const galleryImages = [
  { src: '/images/restauracja/restauracja3.jpg', alt: 'Specjały restauracji' },
  { src: '/images/restauracja/restauracja1.jpg', alt: 'Potrawy regionalne' },
  { src: '/images/restauracja/bejbika.jpg', alt: 'Ogródek restauracyjny' },
];

export default function RestauracjaPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://dworbartnika.pl" },
        { name: "Restauracja Białowieża", url: "https://dworbartnika.pl/restauracja-bialowieza" }
      ]} />
      <RestaurantSchema />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[60vh] min-h-[350px] md:h-[85vh] md:min-h-[600px]">
        <Image
          src="/images/restauracja/pierog_(1).jpg"
          alt="Pierogi - specjalność restauracji Carska Komnata"
          fill
          className="object-cover object-[center_35%]"
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
          MOBILE: Storytelling Layout
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="md:hidden">
        {/* BOX 1: Tytuł + Rodzaje dań + Godziny - nachodzi na hero */}
        <div id="content" className="relative z-10 -mt-24 px-5 pb-6">
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/15 border border-stone-200/60 overflow-hidden">
            <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
              <h1 className="font-cursive text-4xl text-primary-400 text-center mb-3">
                Restauracja Carska Komnata
              </h1>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
              </div>
              <p className="text-gray-700 leading-relaxed text-sm text-center mb-4">
                W restauracji Carska Komnata znajdą Państwo{' '}
                <strong className="font-semibold">dania regionalne, dziczyznę, wegańskie, wegetariańskie, bezglutenowe</strong>{' '}
                oraz dania dla najmłodszych gości.
              </p>
              <p className="text-center text-gray-800 font-medium text-sm">
                Godziny otwarcia: <strong className="text-primary-500">11:00 - 20:00</strong>
              </p>
            </div>
          </div>
        </div>

        {/* ZDJĘCIE: Carska Komnata */}
        <div className="relative h-[50vh] min-h-[250px]">
          <Image
            src="/images/restauracja/cars.jpg"
            alt="Restauracja Carska Komnata"
            fill
            className="object-cover"
          />
        </div>

        {/* BOX 2: Ogródek letni + Piec zimą - nachodzi na zdjęcie */}
        <div className="relative z-10 -mt-16 px-5 pb-6">
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/15 border border-stone-200/60 overflow-hidden">
            <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
              </div>
              <p className="text-gray-700 leading-relaxed text-sm text-center mb-4">
                <strong className="font-semibold">Latem</strong> zapraszamy do ogródka restauracyjnego wypełnionego przeróżnymi gatunkami kwiatów, krzewów i drzew.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm text-center">
                <strong className="font-semibold">Zimą</strong> polecamy odprężyć się z rozgrzewającą herbatą lub grzańcem przy ciepłym, <strong className="font-semibold">staropolskim piecu kaflowym</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* GALERIA: 2 kolumny + 1 szersze */}
        <div className="px-5 pb-4">
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="relative h-[130px] rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/restauracja/restauracja3.jpg"
                alt="Specjały restauracji"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[130px] rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/restauracja/restauracja1.jpg"
                alt="Potrawy regionalne"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative h-[160px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/restauracja/bejbika.jpg"
              alt="Ogródek restauracyjny"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Sekcja "Nasze Menu" */}
        <div className="px-5 pb-8">
          <div className="text-center py-6 bg-stone-50 rounded-xl border border-stone-200/60">
            <h2 className="font-cursive text-3xl text-primary-400 mb-4">
              Nasze Menu
            </h2>
            <Link 
              href="/menu"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary-400 text-white rounded-full text-sm font-medium shadow-lg shadow-primary-400/25 hover:bg-primary-500 transition-all"
            >
              Przeglądaj kartę dań
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
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
            Restauracja Carska Komnata
          </span>

          {/* Treść z głównym zdjęciem */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Tekst */}
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-justify">
                W restauracji Carska Komnata znajdą Państwo{' '}
                <strong>dania regionalne, dziczyznę, wegańskie, wegetariańskie, bezglutenowe</strong>{' '}
                oraz dania przygotowane z myślą o naszych najmłodszych gościach.
              </p>
              <p className="text-justify">
                Latem dla gości dostępne są stoły w ogródku restauracyjnym wypełnionym 
                przeróżnymi gatunkami kwiatów, krzewów i drzew.
              </p>
              <p className="text-justify">
                Zimą polecamy odprężyć się z rozgrzewającą herbatą lub grzańcem przy 
                ciepłym, <strong>staropolskim piecu kaflowym</strong> znajdującym się 
                wewnątrz restauracji.
              </p>
              <p className="text-justify">
                Godziny otwarcia restauracji: <strong>11.00-20.00</strong>
              </p>
              <p className="text-justify">
                Restauracja jest częścią kompleksu{' '}
                <Link href="/hotel-bialowieza" className="text-primary-500 hover:text-primary-600 underline transition-colors font-semibold">hotelu Dwór Bartnika</Link>{' '}
                i serwuje śniadania dla gości hotelowych. Dla osób organizujących większe wydarzenia, 
                oferujemy{' '}
                <Link href="/wesela-bialowieza" className="text-primary-500 hover:text-primary-600 underline transition-colors font-semibold">profesjonalny catering na przyjęcia</Link>.
              </p>
            </div>

            {/* Główne zdjęcie - Carska Komnata */}
            <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/restauracja/cars.jpg"
                alt="Restauracja Carska Komnata"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Galeria zdjęć - 3 kolumny z lightbox */}
          <div className="mb-16">
            <ImageGallery images={galleryImages} columns={3} imageHeight="250px" />
          </div>

          {/* Sekcja "Nasze Menu" */}
          <div className="text-center py-8 border-t border-gray-200">
            <h2 className="font-cursive text-4xl text-primary-400 mb-6">
              Nasze Menu
            </h2>
            <Link 
              href="/menu"
              className="inline-block border-2 border-primary-400 text-primary-600 px-8 py-3 rounded hover:bg-primary-400 hover:text-white transition-colors font-medium"
            >
              Przeglądaj kartę dań
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

