import Image from 'next/image';
import Link from 'next/link';
import { ReservationBar } from '@/components/shared/ReservationBar';

// Stałe dane dla hero - jedno zdjęcie hotelu
const heroData = {
  image: '/images/hero/startowe-1.webp',
  title: 'Leczenie lasem,',
  titleLine2: 'miodem i ogrodem.',
};

export function HeroSection() {
  return (
    <>
      {/* SEO: Jeden H1 na całą stronę główną - ukryty wizualnie ale dostępny dla wyszukiwarek */}
      <h1 className="sr-only">Dwór Bartnika - Hotel w Puszczy Białowieskiej</h1>

      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE: Hero z boxem "Komfortowy kompleks..." przyklejonym do zdjęcia
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="md:hidden relative">
        {/* Zdjęcie hero */}
        <div className="relative h-[60vh] min-h-[350px]">
          <Image
            src={heroData.image}
            alt="Dwór Bartnika"
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            quality={70}
            sizes="100vw"
          />
          {/* Gradient - kinowy efekt */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/50" />
          
          {/* Tytuł na zdjęciu - dekoracyjny slogan (span zamiast h1) */}
          <div className="absolute bottom-20 left-0 right-0 text-center px-6">
            <span 
              className="block font-cursive text-4xl text-white leading-tight"
              style={{ textShadow: '2px 2px 12px rgba(0,0,0,0.6)' }}
            >
              {heroData.title}
            </span>
            <span 
              className="block font-cursive text-4xl text-white leading-tight"
              style={{ textShadow: '2px 2px 12px rgba(0,0,0,0.6)' }}
            >
              {heroData.titleLine2}
            </span>
          </div>
        </div>

        {/* Box "Komfortowy kompleks..." - wychodzi z kadru */}
        {/* Używamy CSS animation zamiast JS IntersectionObserver dla lepszej wydajności */}
        <div className="relative pb-8 bg-gradient-to-b from-amber-50/50 to-white">
          <div className="-mt-10 px-5">
            <div
              className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/10 border border-stone-200/60 overflow-hidden animate-slide-up"
              style={{ 
                animationDelay: '0.3s',
                animationFillMode: 'both'
              }}
            >
              {/* Wewnętrzna ramka */}
              <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
                {/* Dekoracyjna linia */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
                </div>
                
                <p className="text-gray-700 leading-relaxed text-sm text-center mb-3">
                  <strong className="font-semibold text-gray-800">Komfortowy kompleks wypoczynkowy</strong> zlokalizowany 
                  w samym sercu <strong className="font-semibold text-primary-700">Puszczy Białowieskiej</strong>.
                </p>
                
                <p className="text-gray-600 leading-relaxed text-xs text-center">
                  Ogród sensoryczny, las, taras restauracyjny, wodospady, sauna, ruska bania, 
                  stawy, plac zabaw i wiele więcej...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP: Oryginalny hero
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="hidden md:block relative h-[75vh] lg:h-screen min-h-[600px]">
        {/* Zdjęcie tła */}
        <div className="absolute inset-0">
          <Image
            src={heroData.image}
            alt="Dwór Bartnika"
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            quality={70}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-start justify-end pb-28 text-left text-white px-12 lg:px-24">
          {/* Dekoracyjny slogan (span zamiast h1 - H1 jest wyżej ukryty dla SEO) */}
          <div className="max-w-4xl mb-10">
            <span 
              className="block font-cursive text-6xl lg:text-7xl xl:text-8xl mb-0 text-white leading-tight tracking-normal"
              style={{ textShadow: '-1px -1px 0 rgba(0,0,0,0.4), 1px -1px 0 rgba(0,0,0,0.4), -1px 1px 0 rgba(0,0,0,0.4), 1px 1px 0 rgba(0,0,0,0.4), 2px 2px 4px rgba(0,0,0,0.3)' }}
            >
              {heroData.title}
            </span>
            <span 
              className="block font-cursive text-6xl lg:text-7xl xl:text-8xl text-white leading-tight tracking-normal"
              style={{ textShadow: '-1px -1px 0 rgba(0,0,0,0.4), 1px -1px 0 rgba(0,0,0,0.4), -1px 1px 0 rgba(0,0,0,0.4), 1px 1px 0 rgba(0,0,0,0.4), 2px 2px 4px rgba(0,0,0,0.3)' }}
            >
              {heroData.titleLine2}
            </span>
          </div>

          {/* Przyciski */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start mb-14">
            <Link href="/rezerwacja" className="btn-primary text-base md:text-lg px-10 py-3 rounded-sm">
              ZAREZERWUJ POBYT
            </Link>
            <Link
              href="/noclegi-bialowieza"
              className="btn bg-white/10 backdrop-blur-sm text-white border border-white hover:bg-white/20 text-base md:text-lg px-10 py-3 rounded-sm transition-all"
            >
              Sprawdź noclegi
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <svg className="w-6 h-6 mx-auto mb-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
            </svg>
            <span className="text-xs uppercase tracking-wider font-light opacity-80">
              więcej informacji
            </span>
          </div>
        </div>
      </section>

      {/* Elegancki pasek rezerwacji - pod hero (ukryty na mobilce) */}
      <div className="hidden md:block py-8 bg-gradient-to-b from-gray-100 to-white">
        <div className="container-custom">
          <ReservationBar variant="inline" />
        </div>
      </div>
    </>
  );
}
