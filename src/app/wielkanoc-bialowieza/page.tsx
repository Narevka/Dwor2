import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { wielkanoc2026 } from '@/data/offers/wielkanoc-2026';
import { BreadcrumbSchema, EventSchema } from '@/components/seo';

// Metadata zoptymalizowane pod SEO
export const metadata: Metadata = {
  title: 'Wielkanoc w Białowieży 2025 - Pakiet Świąteczny | Dwór Bartnika',
  description: 'Wielkanoc 2025 w Puszczy Białowieskiej. Pakiet świąteczny ze śniadaniem wielkanocnym, atrakcjami dla dzieci i degustacją miodu. Zarezerwuj pobyt w Dworze Bartnika.',
  alternates: {
    canonical: 'https://dworbartnika.pl/wielkanoc-bialowieza',
  },
  openGraph: {
    title: 'Wielkanoc w Białowieży 2025 | Dwór Bartnika',
    description: 'Spędź Wielkanoc w sercu Puszczy Białowieskiej. Pakiet świąteczny ze śniadaniem wielkanocnym.',
    url: 'https://dworbartnika.pl/wielkanoc-bialowieza',
    siteName: 'Dwór Bartnika',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: wielkanoc2026.heroImage,
        width: 1200,
        height: 630,
        alt: 'Wielkanoc 2025 w Puszczy Białowieskiej',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wielkanoc w Białowieży 2025 | Dwór Bartnika',
    description: 'Spędź Wielkanoc w sercu Puszczy Białowieskiej. Pakiet świąteczny ze śniadaniem wielkanocnym.',
    images: [wielkanoc2026.heroImage],
  },
};

export default function WielkanocBialowiezaPage() {
  const offer = wielkanoc2026;
  const priceFrom = Math.min(...offer.packages.map((p) => p.pricePerPerson));

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Strona główna', url: 'https://dworbartnika.pl' },
          { name: 'Wielkanoc w Białowieży 2025', url: 'https://dworbartnika.pl/wielkanoc-bialowieza' },
        ]}
      />
      <EventSchema
        name={offer.title}
        description={offer.description}
        url="https://dworbartnika.pl/wielkanoc-bialowieza"
        image={offer.heroImage}
        startDate={offer.packages[0].dateFrom}
        endDate={offer.packages[0].dateTo}
        price={priceFrom}
        priceDescription={`od ${priceFrom} zł za osobę`}
        eventType="SocialEvent"
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[350px] md:h-[85vh] md:min-h-[600px]">
        <Image
          src={offer.heroImage}
          alt="Wielkanoc 2025 w Puszczy Białowieskiej - Dwór Bartnika"
          fill
          className="object-cover object-center"
          priority
          quality={75}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-black/40" />
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16 bg-white">
        <div className="container-custom max-w-4xl">
          {/* H1 - Główny nagłówek */}
          <header className="text-center mb-10">
            <h1 className="font-cursive text-4xl md:text-5xl lg:text-6xl text-primary-400 mb-4">
              Wielkanoc 2025 w Puszczy Białowieskiej
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Spędź wyjątkową Wielkanoc w otoczeniu dzikiej przyrody Puszczy Białowieskiej.
              Dwór Bartnika oferuje pakiet świąteczny dla rodzin z tradycyjnym śniadaniem
              wielkanocnym, atrakcjami dla dzieci i niezapomnianymi wspomnieniami.
            </p>
          </header>

          {/* H2 - Pakiet Wielkanocny */}
          <section className="mb-12">
            <div className="bg-primary-50 border border-primary-200 rounded-2xl p-6 md:p-8">
              <h2 className="font-cursive text-3xl md:text-4xl text-primary-500 mb-4 text-center">
                Pakiet Wielkanocny 2025
              </h2>
              <div className="text-center text-gray-700">
                <p className="text-lg mb-2">
                  <strong>Termin:</strong> 19-21 kwietnia 2025 (Wielkanoc)
                </p>
                <p className="text-lg">
                  <strong>Czas trwania:</strong> 2 noce
                </p>
              </div>
            </div>
          </section>

          {/* H2 - Co zawiera pakiet? */}
          <section className="mb-12">
            <h2 className="font-cursive text-3xl md:text-4xl text-primary-400 mb-6 text-center">
              Co zawiera pakiet?
            </h2>

            {/* H3 - Zakwaterowanie */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-3xl">🏨</span>
                Zakwaterowanie
              </h3>
              <ul className="space-y-2 text-gray-700 ml-11">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  2 noce w komfortowych pokojach
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Wybór pokoi: 2-osobowe, 3-osobowe, 4-osobowe lub apartamenty
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Bezpłatne Wi-Fi i parking
                </li>
              </ul>
            </div>

            {/* H3 - Wyżywienie */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-3xl">🍽️</span>
                Wyżywienie
              </h3>
              <ul className="space-y-2 text-gray-700 ml-11">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <strong>Uroczyste śniadanie wielkanocne</strong> w Restauracji Carska Komnata
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Tradycyjne potrawy świąteczne: święcone z regionalnymi specjałami
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Śniadanie drugiego dnia
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Obiadokolacja świąteczna
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Degustacja miodu z własnej pasieki
                </li>
              </ul>
            </div>

            {/* H3 - Atrakcje dla rodzin */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-3xl">👨‍👩‍👧‍👦</span>
                Atrakcje dla rodzin
              </h3>
              <ul className="space-y-2 text-gray-700 ml-11">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Szukanie wielkanocnych jajek w ogrodzie sensorycznym (dla dzieci)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Turniej na wielkich szachach
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Zwiedzanie Muzeum Pszczelarstwa z przewodnikiem
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Google VR dla całej rodziny
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Kasyno miodowe - degustacja miodów pitnych
                </li>
              </ul>
            </div>

            {/* H3 - Dla dorosłych */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-3xl">🧖</span>
                Dla dorosłych
              </h3>
              <ul className="space-y-2 text-gray-700 ml-11">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  2× Ognisko z grzańcem i kiełbaskami (sobota i niedziela)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Możliwość rezerwacji sauny lub balii ogrodowej (apartamenty premium)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Spacer do żubrów w Puszczy Białowieskiej
                </li>
              </ul>
            </div>
          </section>

          {/* H2 - Cennik */}
          <section className="mb-12">
            <h2 className="font-cursive text-3xl md:text-4xl text-primary-400 mb-6 text-center">
              Cennik Wielkanoc 2025
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary-50">
                    <th className="border border-primary-200 px-4 py-3 text-left font-semibold text-gray-800">
                      Typ pokoju
                    </th>
                    <th className="border border-primary-200 px-4 py-3 text-right font-semibold text-gray-800">
                      Cena za osobę / 2 noce
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {offer.packages.map((pkg, index) => (
                    <tr key={pkg.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        {pkg.name}
                        {pkg.badge && (
                          <span className="ml-2 text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                            {pkg.badge}
                          </span>
                        )}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-right text-gray-700 font-semibold">
                        od {pkg.pricePerPerson} zł/os
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-sm text-gray-600 space-y-1">
              <p>* Dzieci do 3 lat – pobyt bezpłatny</p>
              <p>* Dzieci 3-10 lat – 50% ceny noclegu</p>
              <p>* Ceny zawierają podatek VAT</p>
            </div>
          </section>

          {/* H2 - Program Wielkanocny */}
          {offer.schedule && offer.schedule.length > 0 && (
            <section className="mb-12">
              <h2 className="font-cursive text-3xl md:text-4xl text-primary-400 mb-6 text-center">
                Program Wielkanocny
              </h2>

              {offer.schedule.map((day) => (
              <div key={day.day} className="mb-8">
                {/* H3 - Dzień */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-primary-200">
                  {day.day}
                  {day.label && (
                    <span className="ml-3 text-sm font-normal text-gray-600">
                      ({day.label})
                    </span>
                  )}
                </h3>
                <ul className="space-y-3">
                  {day.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <span className="font-semibold text-primary-600">{item.time}</span>
                        {' - '}
                        <span className="font-medium">{item.title}</span>
                        {item.description && (
                          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            </section>
          )}

          {/* H2 - Rezerwacja */}
          <section className="mb-8">
            <h2 className="font-cursive text-3xl md:text-4xl text-primary-400 mb-6 text-center">
              Rezerwacja
            </h2>
            <div className="bg-primary-50 border border-primary-200 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-gray-700 mb-4">
                Liczba miejsc ograniczona. Rezerwacje przyjmujemy telefonicznie lub mailowo.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-lg">
                  <strong>Telefon:</strong>{' '}
                  <a
                    href={`tel:${offer.contact?.phone?.replace(/\s/g, '')}`}
                    className="text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    {offer.contact?.phone}
                  </a>
                </p>
                <p className="text-lg">
                  <strong>Email:</strong>{' '}
                  <a
                    href={`mailto:${offer.contact?.email}`}
                    className="text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    {offer.contact?.email}
                  </a>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/kontakt"
                  className="btn-primary text-center px-8 py-3"
                >
                  Zapytaj o szczegóły
                </Link>
                <Link
                  href="/noclegi-bialowieza"
                  className="btn-outline text-center px-8 py-3"
                >
                  Sprawdź dostępność pokoi
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
