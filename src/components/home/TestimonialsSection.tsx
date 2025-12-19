'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, ExternalLink, Globe } from 'lucide-react';
import { FaGoogle, FaFacebook, FaTripadvisor } from 'react-icons/fa';
import {
  reviews,
  platformStats,
  totalStats,
  filterReviews,
  formatReviewDate,
  getAvailableLanguages,
  languageInfo,
  type ReviewSource,
  type Review,
  type ReviewLanguage,
} from '@/data/reviews';

// Ikona Booking.com - niebieskie "B" 
function BookingIcon({ className }: { className?: string }) {
  return (
    <span 
      className={`inline-flex items-center justify-center rounded font-bold text-white ${className}`}
      style={{ 
        backgroundColor: '#003580',
        fontSize: '0.7em',
        padding: '0.15em 0.35em',
      }}
    >
      B
    </span>
  );
}

// Ikona Agoda - oficjalne logo z napisem i kropkami
function AgodaIcon({ className }: { className?: string }) {
  return (
    <img 
      src="/images/logo/agoda-icon.svg"
      alt="Agoda"
      width="40"
      height="20"
      className={className}
      style={{ width: '2.5em', height: 'auto' }}
    />
  );
}

// Ikona nocowanie.pl - oficjalny favicon
function NocowanieIcon({ className }: { className?: string }) {
  return (
    <img 
      src="/images/logo/nocowanie-favicon.png"
      alt="Nocowanie.pl"
      width="16"
      height="16"
      className={className}
      style={{ width: '1em', height: '1em' }}
    />
  );
}

// Komponent gwiazdek
function Stars({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' }) {
  const sizeClass = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${sizeClass} ${
            i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

// Ikona źródła
function SourceIcon({ source, className }: { source: ReviewSource; className?: string }) {
  switch (source) {
    case 'google':
      return <FaGoogle className={className} />;
    case 'facebook':
      return <FaFacebook className={className} />;
    case 'booking':
      return <BookingIcon className={className} />;
    case 'agoda':
      return <AgodaIcon className={className} />;
    case 'tripadvisor':
      return <FaTripadvisor className={className} />;
    case 'nocowanie':
      return <NocowanieIcon className={className} />;
  }
}

// Kolor źródła - ciemniejsze odcienie dla lepszego kontrastu (WCAG AA)
function getSourceColor(source: ReviewSource): string {
  switch (source) {
    case 'google':
      return 'text-red-700'; // ciemniejszy red dla kontrastu
    case 'facebook':
      return 'text-blue-700';
    case 'booking':
      return 'text-blue-800'; // ciemniejszy
    case 'agoda':
      return 'text-red-700';
    case 'tripadvisor':
      return 'text-green-700'; // ciemniejszy
    case 'nocowanie':
      return 'text-orange-700'; // ciemniejszy
  }
}

// Nazwa platformy do wyświetlenia
function getSourceDisplayName(source: ReviewSource): string {
  switch (source) {
    case 'google':
      return 'Google';
    case 'facebook':
      return 'Facebook';
    case 'booking':
      return 'Booking';
    case 'agoda':
      return 'Agoda';
    case 'tripadvisor':
      return 'TripAdvisor';
    case 'nocowanie':
      return 'Nocowanie';
  }
}

// Karta pojedynczej opinii
function ReviewCard({ review }: { review: Review }) {
  const sourceColor = getSourceColor(review.source);

  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[350px] bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 snap-start">
      {/* Nagłówek - gwiazdki i źródło */}
      <div className="flex items-center justify-between mb-4">
        <Stars rating={review.rating} />
        <div className={`flex items-center gap-1.5 ${sourceColor}`}>
          <SourceIcon source={review.source} className="w-4 h-4" />
          <span className="text-xs font-bold">{getSourceDisplayName(review.source)}</span>
        </div>
      </div>

      {/* Treść opinii */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Tagi */}
      {review.tags && review.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {review.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 bg-amber-50 text-amber-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Stopka - autor i data */}
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar z inicjałami */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-300 to-primary-500 flex items-center justify-center text-white font-medium text-sm">
            {review.authorInitials}
          </div>
          <span className="font-medium text-gray-800 text-sm">{review.author}</span>
        </div>
        <span className="text-xs text-gray-500">{formatReviewDate(review.date)}</span>
      </div>
    </div>
  );
}

// Kafelek statystyk platformy
function PlatformStatCard({ stat }: { stat: typeof platformStats[0] }) {
  const sourceColor = getSourceColor(stat.source);

  return (
    <a
      href={stat.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-3 py-2.5 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100 group"
    >
      <div className={`${sourceColor}`}>
        <SourceIcon source={stat.source} className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-0.5">
          <span className="text-base font-bold text-gray-800">
            {stat.rating}
          </span>
          <span className="text-xs text-gray-500">/{stat.ratingMax}</span>
        </div>
        <p className="text-xs text-gray-500">{stat.reviewCount} opinii</p>
      </div>
      <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-primary-400 transition-colors flex-shrink-0" />
    </a>
  );
}

export function TestimonialsSection() {
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12); // Startowo 12 opinii
  const [selectedLanguage, setSelectedLanguage] = useState<ReviewLanguage | 'all'>('all');
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const platformScrollRef = useRef<HTMLDivElement>(null);
  const platformAutoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const INITIAL_COUNT = 12;
  const LOAD_MORE_COUNT = 12;
  const MAX_COUNT = 48;

  // Dostępne języki w opiniach
  const availableLanguages = getAvailableLanguages(reviews);

  // Filtruj opinie: 5★ najpierw, od najnowszych, tylko 3+ gwiazdek
  const allFilteredReviews = filterReviews(reviews, {
    minRating: 3,
    sortBy: 'best', // 5★ najpierw, potem 4★, w każdej grupie od najnowszych
    interleave: true,
    language: selectedLanguage,
  });

  // Nakładamy limit na wyświetlane opinie
  const filteredReviews = allFilteredReviews.slice(0, visibleCount);
  const hasMore = allFilteredReviews.length > visibleCount;
  const totalAvailable = allFilteredReviews.length;

  // Funkcja "Załaduj więcej"
  const loadMore = () => {
    setIsAutoScrolling(false); // Zatrzymaj auto-scroll
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, MAX_COUNT, totalAvailable));
    // Scroll do nowych opinii (delikatnie w prawo)
    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      }
    }, 100);
  };

  // Auto-scroll - powolne przesuwanie w prawo
  const isResettingRef = useRef(false);
  
  useEffect(() => {
    // Nie scrolluj jeśli wyłączone lub hover
    if (!isAutoScrolling || isHovering) {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
      return;
    }

    // Wyłącz scroll-snap podczas auto-scroll
    if (scrollRef.current) {
      scrollRef.current.style.scrollSnapType = 'none';
    }

    // Auto-scroll co 30ms, przesuwaj o 1px (≈33px/s)
    autoScrollRef.current = setInterval(() => {
      if (!scrollRef.current || isResettingRef.current) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      
      if (maxScroll <= 0) return;
      
      // Dojechaliśmy do końca - wróć do początku
      if (scrollLeft >= maxScroll - 5) {
        isResettingRef.current = true;
        
        // Zatrzymaj na 2 sekundy na końcu
        setTimeout(() => {
          if (scrollRef.current) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          }
          // Poczekaj na zakończenie animacji powrotu
          setTimeout(() => {
            isResettingRef.current = false;
          }, 800);
        }, 2000);
      } else {
        scrollRef.current.scrollLeft += 1;
      }
    }, 30);

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
      // Przywróć scroll-snap
      if (scrollRef.current) {
        scrollRef.current.style.scrollSnapType = 'x mandatory';
      }
    };
  }, [isAutoScrolling, isHovering]);

  // Auto-scroll platform w PRZECIWNYM kierunku (w lewo)
  const platformResettingRef = useRef(false);
  
  useEffect(() => {
    // Nie scrolluj jeśli wyłączone lub hover
    if (!isAutoScrolling || isHovering) {
      if (platformAutoScrollRef.current) {
        clearInterval(platformAutoScrollRef.current);
        platformAutoScrollRef.current = null;
      }
      return;
    }

    // Auto-scroll co 30ms, przesuwaj o 0.5px w lewo (≈16px/s - wolniej niż opinie)
    platformAutoScrollRef.current = setInterval(() => {
      if (!platformScrollRef.current || platformResettingRef.current) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = platformScrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      
      if (maxScroll <= 0) return;
      
      // Dojechaliśmy do początku - wróć do końca
      if (scrollLeft <= 5) {
        platformResettingRef.current = true;
        
        // Zatrzymaj na 1 sekundę na początku
        setTimeout(() => {
          if (platformScrollRef.current) {
            platformScrollRef.current.scrollTo({ left: maxScroll, behavior: 'smooth' });
          }
          // Poczekaj na zakończenie animacji powrotu
          setTimeout(() => {
            platformResettingRef.current = false;
          }, 800);
        }, 1000);
      } else {
        platformScrollRef.current.scrollLeft -= 0.5;
      }
    }, 30);

    // Ustaw początkową pozycję na koniec
    if (platformScrollRef.current) {
      const maxScroll = platformScrollRef.current.scrollWidth - platformScrollRef.current.clientWidth;
      platformScrollRef.current.scrollLeft = maxScroll;
    }

    return () => {
      if (platformAutoScrollRef.current) {
        clearInterval(platformAutoScrollRef.current);
        platformAutoScrollRef.current = null;
      }
    };
  }, [isAutoScrolling, isHovering]);

  // Przewijanie karuzeli
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 370; // szerokość karty + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-amber-50/30 to-white">
      <div className="container-custom">
        {/* Nagłówek */}
        <div className="text-center mb-8">
          <h2 className="font-cursive text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-2">
            Opinie Gości
          </h2>
          {/* Podsumowanie */}
          <div className="mt-4 flex items-center justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary-600">{totalStats.totalReviews}</span>
              <span className="text-sm">opinii</span>
            </div>
            <div className="w-px h-6 bg-gray-300" />
            <div className="flex items-center gap-2">
              <span className="text-sm">średnia</span>
              <span className="text-2xl font-bold text-primary-600">{totalStats.weightedAverage}</span>
              <span className="text-sm text-gray-400">/{totalStats.weightedAverageMax}</span>
            </div>
          </div>
        </div>

        {/* Statystyki platform - grid na desktop, karuzela na mobile */}
        {/* Desktop: grid 6 kolumn */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-2 mb-6 max-w-5xl mx-auto">
          {platformStats.map((stat) => (
            <PlatformStatCard key={stat.source} stat={stat} />
          ))}
        </div>
        
        {/* Mobile: karuzela w 1 linii, scrolluje w przeciwnym kierunku do opinii */}
        <div 
          ref={platformScrollRef}
          className="flex md:hidden gap-2 mb-6 overflow-x-auto scrollbar-hide px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Duplikujemy kafelki dla płynnej pętli */}
          {[...platformStats, ...platformStats].map((stat, index) => (
            <div key={`${stat.source}-${index}`} className="flex-shrink-0">
              <PlatformStatCard stat={stat} />
            </div>
          ))}
        </div>

        {/* Filtr języków - elegancki pasek z flagami (ukryty na mobilce) */}
        <div className="hidden md:flex items-center justify-center mb-8">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full p-1.5 shadow-sm border border-gray-100 gap-1">
            {/* Wszystkie */}
            <button
              onClick={() => {
                setSelectedLanguage('all');
                setVisibleCount(INITIAL_COUNT);
                setIsAutoScrolling(true);
                if (scrollRef.current) scrollRef.current.scrollTo({ left: 0 });
              }}
              className={`w-9 h-9 rounded-full transition-all flex items-center justify-center ${
                selectedLanguage === 'all'
                  ? 'bg-primary-600 text-white shadow-sm scale-110'
                  : 'text-gray-500 hover:bg-gray-100 hover:scale-105'
              }`}
              title="Wszystkie języki"
            >
              <Globe className="w-5 h-5" />
            </button>
            
            {/* Separator */}
            <div className="w-px h-6 bg-gray-200 mx-1" />
            
            {/* Polski */}
            <button
              onClick={() => {
                setSelectedLanguage('pl');
                setVisibleCount(INITIAL_COUNT);
                setIsAutoScrolling(false);
                if (scrollRef.current) scrollRef.current.scrollTo({ left: 0 });
              }}
              className={`w-9 h-9 rounded-full text-lg transition-all flex items-center justify-center ${
                selectedLanguage === 'pl'
                  ? 'bg-primary-600 shadow-sm scale-110'
                  : 'hover:bg-gray-100 hover:scale-105'
              }`}
              title="Polski"
            >
              🇵🇱
            </button>
            
            {/* Języki obce */}
            {availableLanguages.filter(lang => lang !== 'pl').map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setSelectedLanguage(lang);
                  setVisibleCount(INITIAL_COUNT);
                  setIsAutoScrolling(false);
                  if (scrollRef.current) scrollRef.current.scrollTo({ left: 0 });
                }}
                className={`w-9 h-9 rounded-full text-lg transition-all flex items-center justify-center ${
                  selectedLanguage === lang
                    ? 'bg-primary-600 shadow-sm scale-110'
                    : 'hover:bg-gray-100 hover:scale-105'
                }`}
                title={languageInfo[lang].name}
              >
                {languageInfo[lang].flag}
              </button>
            ))}
          </div>
        </div>

        {/* Karuzela z opiniami */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Przycisk lewo */}
          <button
            onClick={() => {
              scroll('left');
              setIsAutoScrolling(false); // zatrzymaj auto-scroll po kliknięciu
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all"
            aria-label="Przewiń w lewo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Kontener kart */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredReviews.length > 0 ? (
              <>
                {filteredReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
                {/* Przycisk "Zobacz więcej" na końcu karuzeli */}
                {hasMore && (
                  <div className="flex-shrink-0 w-[280px] sm:w-[300px] flex items-center justify-center snap-start">
                    <button
                      onClick={loadMore}
                      className="flex flex-col items-center gap-3 px-8 py-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200 hover:border-primary-300 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                        <ChevronRight className="w-6 h-6 text-primary-600" />
                      </div>
                      <div className="text-center">
                        <p className="font-medium text-gray-800">Zobacz więcej</p>
                        <p className="text-xs text-gray-500 mt-1">
                          +{Math.min(LOAD_MORE_COUNT, totalAvailable - visibleCount)} opinii
                        </p>
                      </div>
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex-1 text-center py-12 text-gray-500">
                Brak opinii spełniających wybrane kryteria.
              </div>
            )}
          </div>

          {/* Przycisk prawo */}
          <button
            onClick={() => {
              scroll('right');
              setIsAutoScrolling(false); // zatrzymaj auto-scroll po kliknięciu
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all"
            aria-label="Przewiń w prawo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
