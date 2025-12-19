import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ReservationBar } from '@/components/shared/ReservationBar';
import { BreadcrumbSchema, RezerwacjaSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Rezerwacja Online',
  description: 'Zarezerwuj pobyt w Dworze Bartnika. Sprawdź dostępność pokoi, ceny i dokonaj rezerwacji online. Hotel w sercu Puszczy Białowieskiej.',
  alternates: {
    canonical: 'https://dworbartnika.pl/rezerwacja',
  },
  openGraph: {
    title: 'Rezerwacja | Dwór Bartnika',
    description: 'Zarezerwuj pobyt w Dworze Bartnika. Sprawdź dostępność pokoi i ceny.',
    url: 'https://dworbartnika.pl/rezerwacja',
    siteName: 'Dwór Bartnika',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/images/og/OG_rezerwacje.jpg',
        width: 1200,
        height: 630,
        alt: 'Rezerwacja w Dworze Bartnika',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rezerwacja | Dwór Bartnika',
    description: 'Zarezerwuj pobyt w Dworze Bartnika w Puszczy Białowieskiej.',
    images: ['/images/og/OG_rezerwacje.jpg'],
  },
};

export default function RezerwacjaPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://dworbartnika.pl" },
        { name: "Rezerwacja", url: "https://dworbartnika.pl/rezerwacja" }
      ]} />
      <RezerwacjaSchema />

      {/* Hero section */}
      <section className="relative h-[50vh] min-h-[350px] md:h-[60vh] md:min-h-[450px]">
        <Image
          src="/images/hero/dwor3.jpg"
          alt="Rezerwacja - Dwór Bartnika"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
        
        {/* Tytuł na hero */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-cursive text-5xl md:text-7xl text-white drop-shadow-lg">
            Rezerwacja
          </h1>
        </div>
        
        {/* Przycisk "sprawdź dostępność" */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
          <a href="#rezerwacja" className="text-white text-sm flex flex-col items-center gap-2 hover:text-primary-300 transition-colors group">
            <span className="w-8 h-8 border border-white/70 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <span className="text-xs uppercase tracking-wider font-light" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>sprawdź<br/>dostępność</span>
          </a>
        </div>
      </section>

      {/* Elegancki formularz rezerwacji */}
      <section id="rezerwacja" className="py-12 bg-gradient-to-b from-gray-100 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ReservationBar variant="inline" />
          </div>
        </div>
      </section>

      {/* Informacje dodatkowe */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-cursive text-3xl md:text-4xl text-primary-400 text-center mb-8 md:mb-10">
              Informacje o rezerwacji
            </h2>
            
            {/* Grid: 1 kolumna na mobile, 2 na desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Doba hotelowa */}
              <div className="bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🕐</span> Doba hotelowa
                </h3>
                <p className="text-gray-600">
                  Zameldowanie od <strong className="text-primary-600">15:00</strong><br />
                  Wymeldowanie do <strong className="text-primary-600">11:00</strong>
                </p>
              </div>

              {/* Kontakt */}
              <div className="bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">📞</span> Kontakt
                </h3>
                <p className="text-gray-600">
                  Tel: <a href="tel:+48856858388" className="text-primary-600 hover:underline">85 68 58 388</a><br />
                  Tel: <a href="tel:+48721907000" className="text-primary-600 hover:underline">721 90 70 00</a><br />
                  Email: <a href="mailto:sapiolko@op.pl" className="text-primary-600 hover:underline">sapiolko@op.pl</a>
                </p>
              </div>

              {/* Płatności */}
              <div className="bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">💳</span> Płatności
                </h3>
                <p className="text-gray-600">
                  Akceptujemy płatności kartą oraz gotówką.<br />
                  Opłata rezerwacyjna: <strong className="text-primary-600">min. 30%</strong> wartości pobytu.
                </p>
              </div>

              {/* Regulamin */}
              <div className="bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">📋</span> Regulamin
                </h3>
                <p className="text-gray-600">
                  Przed rezerwacją zapoznaj się z{' '}
                  <Link href="/regulamin-rezerwacji" className="text-primary-600 hover:underline">
                    regulaminem rezerwacji
                  </Link>
                  {' '}oraz{' '}
                  <Link href="/rodo" className="text-primary-600 hover:underline">
                    polityką RODO
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
