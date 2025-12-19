import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { getActiveOffers } from '@/data/offers';
import { BreadcrumbSchema, OfertyListSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Oferty Specjalne | Pakiety Pobytowe',
  description: 'Sprawdź nasze oferty specjalne: pakiety świąteczne, sylwestrowe, wielkanocne i więcej. Niezapomniane chwile w sercu Puszczy Białowieskiej.',
  alternates: {
    canonical: 'https://dworbartnika.pl/oferty',
  },
  openGraph: {
    title: 'Oferty specjalne | Dwór Bartnika',
    description: 'Pakiety świąteczne, sylwestrowe, wielkanocne i więcej w Puszczy Białowieskiej.',
    url: 'https://dworbartnika.pl/oferty',
    siteName: 'Dwór Bartnika',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/images/og/OG_oferty.jpg',
        width: 1200,
        height: 630,
        alt: 'Oferty specjalne - Dwór Bartnika',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oferty specjalne | Dwór Bartnika',
    description: 'Pakiety świąteczne, sylwestrowe, wielkanocne i więcej.',
    images: ['/images/og/OG_oferty.jpg'],
  },
};

export default function OfertyPage() {
  const offers = getActiveOffers();
  
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://dworbartnika.pl" },
        { name: "Oferty", url: "https://dworbartnika.pl/oferty" }
      ]} />
      <OfertyListSchema />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[300px] md:h-[60vh] md:min-h-[400px]">
        <Image
          src="/images/hero/dwor3.jpg"
          alt="Oferty specjalne - Dwór Bartnika"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-cursive text-5xl md:text-7xl text-white drop-shadow-lg">
            Oferty specjalne
          </h1>
        </div>
      </section>

      {/* Lista ofert */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          {offers.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {offers.map((offer) => (
                <Link 
                  key={offer.slug}
                  href={`/oferty/${offer.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="relative h-[200px]">
                    <Image
                      src={offer.heroImage}
                      alt={offer.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-3xl mb-2 block">{offer.emoji}</span>
                      <h2 className="text-white text-xl font-semibold">{offer.title}</h2>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {offer.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary-500 font-semibold">
                        od {Math.min(...offer.packages.map(p => p.pricePerPerson))} zł/os
                      </span>
                      <span className="text-primary-400 group-hover:text-primary-500 text-sm">
                        Zobacz więcej →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <span className="text-6xl mb-4 block">📭</span>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Brak aktywnych ofert
              </h2>
              <p className="text-gray-600 mb-6">
                Aktualnie nie mamy żadnych ofert specjalnych. Sprawdź ponownie wkrótce!
              </p>
              <Link href="/" className="btn-primary">
                Wróć na stronę główną
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
