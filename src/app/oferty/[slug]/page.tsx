import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import { 
  getOffer, 
  getAllOfferSlugsForStaticParams,
  isValidOfferSlug 
} from '@/data/offers';
import { isOfferActive } from '../../../../offers.config';
import {
  StorytellingHero,
  IntroSection,
  AttractionsList,
  ScheduleSection,
  PricingTable,
  ImportantInfo,
  FinalCTA,
} from '@/components/offers';
import { BreadcrumbSchema, EventSchema } from '@/components/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generuj statyczne ścieżki dla WSZYSTKICH ofert (SEO)
export async function generateStaticParams() {
  const slugs = getAllOfferSlugsForStaticParams();
  return slugs.map((slug) => ({ slug }));
}

// Dynamiczne metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const offer = getOffer(slug);
  
  if (!offer) {
    return {
      title: 'Oferta nie znaleziona | Dwór Bartnika',
    };
  }

  return {
    title: `${offer.title} | Dwór Bartnika`,
    description: offer.description,
    alternates: {
      canonical: `https://dworbartnika.pl/oferty/${slug}`,
    },
    openGraph: {
      title: `${offer.title} | Dwór Bartnika`,
      description: offer.description,
      url: `https://dworbartnika.pl/oferty/${slug}`,
      siteName: 'Dwór Bartnika',
      locale: 'pl_PL',
      type: 'website',
      images: [
        {
          url: offer.heroImage,
          width: 1200,
          height: 630,
          alt: offer.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${offer.title} | Dwór Bartnika`,
      description: offer.description,
      images: [offer.heroImage],
    },
  };
}

export default async function OfertaPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Sprawdź czy slug jest prawidłowy
  if (!isValidOfferSlug(slug)) {
    notFound();
  }
  
  // Pobierz ofertę (niezależnie od statusu - dla SEO)
  const offer = getOffer(slug);
  
  if (!offer) {
    notFound();
  }
  
  // Jeśli oferta jest wyłączona - przekieruj do listy ofert
  if (!isOfferActive(slug)) {
    redirect('/oferty');
  }

  // Storytelling layout dla wielkanoc-2026 i innych ofert z layout === 'storytelling'
  if (offer.layout === 'storytelling') {
    const priceFrom = Math.min(...offer.packages.map((p) => p.pricePerPerson));
    const totalRooms = offer.packages.reduce((sum, p) => sum + (p.availability || 0), 0);
    const dateRange = `${formatDateShort(offer.packages[0].dateFrom)} - ${formatDateShort(offer.packages[0].dateTo)}`;
    
    return (
      <>
        <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://dworbartnika.pl" },
          { name: "Oferty", url: "https://dworbartnika.pl/oferty" },
          { name: offer.title, url: `https://dworbartnika.pl/oferty/${slug}` }
        ]} />
        <EventSchema
          name={offer.title}
          description={offer.description}
          url={`https://dworbartnika.pl/oferty/${slug}`}
          image={offer.heroImage}
          startDate={offer.packages[0].dateFrom}
          endDate={offer.packages[0].dateTo}
          price={priceFrom}
          priceDescription={`od ${priceFrom} zł za osobę`}
          eventType="SocialEvent"
        />

        {/* Hero */}
        <StorytellingHero
          title={offer.title}
          subtitle={offer.subtitle}
          heroImage={offer.heroImage}
          emoji={offer.emoji}
          priceFrom={priceFrom}
        />
        
        {/* Intro */}
        <IntroSection
          description={offer.description}
          dateRange={dateRange}
          nights={offer.packages[0].nights}
          priceFrom={priceFrom}
        />
        
        {/* Atrakcje - storytelling */}
        {offer.attractions && offer.attractions.length > 0 && (
          <AttractionsList attractions={offer.attractions} />
        )}
        
        {/* Harmonogram */}
        {offer.schedule && offer.schedule.length > 0 && (
          <ScheduleSection schedule={offer.schedule} />
        )}
        
        {/* Pricing table */}
        <PricingTable
          packages={offer.packages}
          comparisonFeatures={offer.comparisonFeatures}
          upsell={offer.upsell}
          ctaLink={offer.ctaLink}
        />
        
        {/* Ważne informacje */}
        {offer.importantInfo && offer.importantInfo.length > 0 && (
          <ImportantInfo items={offer.importantInfo} />
        )}
        
        {/* Final CTA */}
        <FinalCTA
          title={offer.title}
          emoji={offer.emoji}
          ctaText={offer.ctaText}
          ctaLink={offer.ctaLink}
          phone={offer.contact?.phone}
          email={offer.contact?.email}
          availableRooms={totalRooms}
        />
      </>
    );
  }

  // Domyślny layout dla pozostałych ofert
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://dworbartnika.pl" },
        { name: "Oferty", url: "https://dworbartnika.pl/oferty" },
        { name: offer.title, url: `https://dworbartnika.pl/oferty/${slug}` }
      ]} />
      <EventSchema
        name={offer.title}
        description={offer.description}
        url={`https://dworbartnika.pl/oferty/${slug}`}
        image={offer.heroImage}
        startDate={offer.packages[0].dateFrom}
        endDate={offer.packages[0].dateTo}
        price={offer.packages[0].pricePerPerson}
        priceDescription={`od ${offer.packages[0].pricePerPerson} zł za osobę`}
        eventType="SocialEvent"
      />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[60vh] min-h-[350px] md:h-[85vh] md:min-h-[600px]">
        <Image
          src={offer.heroImage}
          alt={offer.title}
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
          MOBILE: Storytelling Layout
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="md:hidden">
        {/* BOX: Tytuł + Opis - nachodzi na hero */}
        <div id="content" className="relative z-10 -mt-24 px-5 pb-6">
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/15 border border-stone-200/60 overflow-hidden">
            <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
              {/* Link powrót */}
              <Link 
                href="/oferty" 
                className="text-primary-500 text-xs flex items-center gap-1 mb-3 hover:text-primary-600"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Wszystkie oferty
              </Link>
              
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl">{offer.emoji}</span>
                <h1 className="font-cursive text-3xl text-primary-400">
                  {offer.title}
                </h1>
              </div>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
              </div>
              {offer.subtitle && (
                <p className="text-gray-700 leading-relaxed text-sm text-center">
                  {offer.subtitle}
                </p>
              )}
              {/* Pełny opis oferty */}
              <p className="text-gray-600 leading-relaxed text-sm mt-4">
                {offer.description}
              </p>
            </div>
          </div>
        </div>

        {/* Pakiety cenowe */}
        <div className="px-5 pb-6 space-y-4">
          <h2 className="font-cursive text-2xl text-primary-400 text-center">Wybierz pakiet</h2>
          {offer.packages.map((pkg, index) => (
            <div 
              key={pkg.id}
              className={`bg-white rounded-2xl shadow-lg border overflow-hidden ${index === 0 ? 'border-primary-400' : 'border-stone-200/60'}`}
            >
              <div className="p-5">
                {index === 0 && (
                  <span className="bg-primary-400 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
                    POLECANY
                  </span>
                )}
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{pkg.name}</h3>
                <p className="text-gray-500 text-sm mb-3">
                  {formatDate(pkg.dateFrom)} - {formatDate(pkg.dateTo)} ({pkg.nights} {pkg.nights === 1 ? 'noc' : pkg.nights < 5 ? 'noce' : 'nocy'})
                </p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary-500">{pkg.pricePerPerson} zł</span>
                  <span className="text-gray-500">/os</span>
                  {pkg.priceNote && (
                    <p className="text-xs text-gray-500 mt-1">{pkg.priceNote}</p>
                  )}
                </div>
                {pkg.highlights && (
                  <ul className="space-y-2 mb-4">
                    {pkg.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                        <svg className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  href={offer.ctaLink || '/rezerwacja'}
                  className="btn-primary w-full text-center text-sm"
                >
                  {offer.ctaText || 'Zarezerwuj'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Co zawiera oferta */}
        <div className="bg-stone-50 py-6 px-5">
          <h2 className="font-cursive text-2xl text-primary-400 text-center mb-4">Co zawiera oferta</h2>
          <div className="grid grid-cols-2 gap-3">
            {offer.program.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm border border-stone-200/60"
              >
                <span className="text-2xl mb-2 block">{item.icon || '✓'}</span>
                <h3 className="text-sm font-semibold text-gray-800 mb-1">{item.title}</h3>
                {item.description && (
                  <p className="text-xs text-gray-500 line-clamp-2">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dodatkowo - tylko dla pakietu rozszerzonego (extras) */}
        {offer.extras && offer.extras.length > 0 && (
          <div className="py-6 px-5">
            <h2 className="font-cursive text-2xl text-primary-400 text-center mb-4">Dodatkowo w pakiecie rozszerzonym</h2>
            <div className="space-y-3">
              {offer.extras.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-sm border border-primary-200/60"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{item.icon || '✓'}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800 mb-1">{item.title}</h3>
                      {item.description && (
                        <p className="text-xs text-gray-600">{item.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ważne informacje */}
        {offer.importantInfo && offer.importantInfo.length > 0 && (
          <div className="px-5 py-6">
            <div className="bg-white rounded-2xl shadow-lg border border-stone-200/60 overflow-hidden">
              <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
                <h2 className="font-cursive text-xl text-primary-400 text-center mb-4">Ważne informacje</h2>
                <ul className="space-y-2">
                  {offer.importantInfo.map((info, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                      <svg className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {info}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="px-5 pb-8">
          <div className="bg-primary-50 rounded-xl p-5 border border-primary-200 text-center">
            <span className="text-4xl mb-3 block">{offer.emoji}</span>
            <h2 className="font-cursive text-2xl text-primary-500 mb-2">
              Zarezerwuj teraz
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Liczba miejsc ograniczona
            </p>
            <div className="space-y-2">
              <Link
                href={offer.ctaLink || '/rezerwacja'}
                className="btn-primary w-full text-center"
              >
                {offer.ctaText || 'Zarezerwuj'}
              </Link>
              <a 
                href={`tel:${offer.contact?.phone?.replace(/\s/g, '') || '+48856858388'}`}
                className="btn-outline w-full text-center block"
              >
                📞 {offer.contact?.phone || '+48 85 685 83 88'}
              </a>
              {offer.contact?.email && (
                <a 
                  href={`mailto:${offer.contact.email}`}
                  className="text-primary-500 text-sm hover:underline block mt-2"
                >
                  ✉️ {offer.contact.email}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP: Klasyczny layout
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="hidden md:block">
        {/* Sekcja główna */}
        <section id="content" className="py-14 bg-white">
          <div className="container-custom">
            {/* Link powrót */}
            <Link 
              href="/oferty" 
              className="text-primary-500 inline-flex items-center gap-2 mb-6 hover:text-primary-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Wszystkie oferty
            </Link>
            
            {/* Tytuł */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-5xl">{offer.emoji}</span>
                <h1 className="font-cursive text-5xl md:text-6xl text-primary-400">
                  {offer.title}
                </h1>
              </div>
              {offer.subtitle && (
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
                  {offer.subtitle}
                </p>
              )}
              {/* Pełny opis oferty */}
              <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
                {offer.description}
              </p>
            </div>

            {/* Pakiety cenowe */}
            <div className="mb-16">
              <h2 className="font-cursive text-4xl text-primary-400 text-center mb-8">
                Wybierz pakiet
              </h2>
              <div className={`grid gap-8 ${offer.packages.length === 1 ? 'max-w-lg mx-auto' : offer.packages.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                {offer.packages.map((pkg, index) => (
                  <div 
                    key={pkg.id}
                    className={`bg-white rounded-2xl p-8 border-2 shadow-lg transition-all hover:shadow-xl ${index === 0 ? 'border-primary-400' : 'border-stone-200 hover:border-primary-300'}`}
                  >
                    {index === 0 && (
                      <span className="bg-primary-400 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                        POLECANY
                      </span>
                    )}
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-500 mb-4">
                      {formatDate(pkg.dateFrom)} - {formatDate(pkg.dateTo)} ({pkg.nights} {pkg.nights === 1 ? 'noc' : pkg.nights < 5 ? 'noce' : 'nocy'})
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-primary-500">
                        {pkg.pricePerPerson} zł
                      </span>
                      <span className="text-gray-500">/os</span>
                      {pkg.priceNote && (
                        <p className="text-sm text-gray-500 mt-1">{pkg.priceNote}</p>
                      )}
                    </div>
                    {pkg.highlights && (
                      <ul className="space-y-2 mb-6">
                        {pkg.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                    <Link
                      href={offer.ctaLink || '/rezerwacja'}
                      className="btn-primary w-full text-center"
                    >
                      {offer.ctaText || 'Zarezerwuj'}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Co zawiera oferta */}
        <section className="py-14 bg-gray-50">
          <div className="container-custom">
            <h2 className="font-cursive text-4xl text-primary-400 text-center mb-10">
              Co zawiera oferta
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {offer.program.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md border border-stone-200/60 hover:shadow-lg transition-shadow"
                >
                  <span className="text-3xl mb-3 block">{item.icon || '✓'}</span>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-gray-500 text-sm">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dodatkowo - pakiet rozszerzony (extras) */}
        {offer.extras && offer.extras.length > 0 && (
          <section className="py-14 bg-white">
            <div className="container-custom">
              <h2 className="font-cursive text-4xl text-primary-400 text-center mb-4">
                Dodatkowo w pakiecie rozszerzonym
              </h2>
              <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
                Rozszerz swój pobyt o wyjątkowe atrakcje i przeżyj niezapomniane doświadczenia
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {offer.extras.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-primary-50/50 rounded-xl p-6 border border-primary-200/60 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl flex-shrink-0">{item.icon || '✓'}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Ważne informacje */}
        {offer.importantInfo && offer.importantInfo.length > 0 && (
          <section className="py-14 bg-white">
            <div className="container-custom">
              <h2 className="font-cursive text-4xl text-primary-400 text-center mb-8">
                Ważne informacje
              </h2>
              <div className="max-w-2xl mx-auto bg-stone-50 rounded-2xl p-8 border border-stone-200">
                <ul className="space-y-3">
                  {offer.importantInfo.map((info, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {info}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-primary-50">
          <div className="container-custom text-center">
            <span className="text-6xl mb-6 block">{offer.emoji}</span>
            <h2 className="font-cursive text-4xl md:text-5xl text-primary-500 mb-4">
              Zarezerwuj {offer.title}
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Liczba miejsc ograniczona. Zarezerwuj już teraz, aby zapewnić sobie niezapomniane chwile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href={offer.ctaLink || '/rezerwacja'}
                className="btn-primary text-lg px-8 py-4"
              >
                {offer.ctaText || 'Zarezerwuj teraz'}
              </Link>
              <a 
                href={`tel:${offer.contact?.phone?.replace(/\s/g, '') || '+48856858388'}`}
                className="btn-outline text-lg px-8 py-4"
              >
                📞 {offer.contact?.phone || '+48 85 685 83 88'}
              </a>
            </div>
            {offer.contact?.email && (
              <p className="text-gray-600">
                lub napisz: <a href={`mailto:${offer.contact.email}`} className="text-primary-500 hover:underline font-medium">{offer.contact.email}</a>
              </p>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

// Helper do formatowania daty
function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// Helper do krótkiego formatu daty (np. "4 kwietnia")
function formatDateShort(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
  });
}
