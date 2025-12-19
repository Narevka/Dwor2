'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Cechy wyposażenia dla każdego typu pokoju (10 atrybutów - do rotacji)
const roomFeatures: Record<string, string[]> = {
  '2osobowe': [
    'Dla pary lub solo',
    'Szybkie Wi-Fi',
    'Telewizor',
    'Prywatna łazienka z prysznicem',
    'Łóżko podwójne lub 2 pojedyncze',
    'Lodówka do dyspozycji',
    'Czajnik z kawą i herbatą',
    'Suszarka do włosów',
    'Zwierzęta mile widziane',
    'Bezpieczne zamki elektroniczne',
  ],
  'jacuzzi': [
    'Prywatne jacuzzi',
    'Idealny na romantyczny pobyt',
    'Luksusowe wyposażenie',
    'Szybkie Wi-Fi',
    'Telewizor',
    'Duże podwójne łóżko',
    'Prywatna łazienka z prysznicem',
    'Relaks w jacuzzi dla dwojga',
    'Lodówka do dyspozycji',
    'Wyjątkowa okazja? Idealnie!',
  ],
  '3osobowe': [
    'Idealne dla rodziny z dzieckiem',
    'Szybkie Wi-Fi',
    'Telewizor',
    'Prywatna łazienka z prysznicem',
    'Łóżka: 3×1 lub 2+1',
    'Łóżeczko dla dziecka dostępne',
    'Lodówka do dyspozycji',
    'Czajnik z kawą i herbatą',
    'Zwierzęta mile widziane',
    'Bezpieczne zamki elektroniczne',
  ],
  'sauna': [
    'Prywatna sauna fińska',
    'Regeneracja po zwiedzaniu Puszczy',
    'Głęboki relaks gwarantowany',
    'Szybkie Wi-Fi',
    'Telewizor',
    'Duże podwójne łóżko',
    'Prywatna łazienka z prysznicem',
    'Luksusowe wyposażenie',
    'Lodówka do dyspozycji',
    'Idealny na relaksujący pobyt',
  ],
  '4osobowe': [
    'Idealne dla rodziny',
    '4 wygodne łóżka',
    'Szybkie Wi-Fi',
    'Telewizor',
    'Prywatna łazienka z prysznicem',
    'Łóżeczko dla malucha dostępne',
    'Lodówka do dyspozycji',
    'Czajnik z kawą i herbatą',
    'Zwierzęta mile widziane',
    'Bezpieczne zamki elektroniczne',
  ],
};

// Offset startowy dla każdego typu pokoju (żeby sąsiednie kafelki miały różne atrybuty)
const roomStartOffset: Record<string, number> = {
  '2osobowe': 0,
  'jacuzzi': 3,
  '3osobowe': 5,
  'sauna': 7,
  '4osobowe': 9,
};

// Dane pokoi do wyświetlenia w karuzeli (kolejność rosnąca cenowo: 4-os, 3-os, 2-os, sauna, jacuzzi)
const carouselRooms = [
  {
    id: '4osobowe',
    name: 'Pokoje rodzinne',
    image: '/images/rooms/288772311.jpg',
    href: '/pokoje-rodzinne-bialowieza',
    price: 'od 120 zł/os',
  },
  {
    id: '3osobowe',
    name: 'Pokoje 3-osobowe',
    image: '/images/rooms/2osobowy_18.jpg',
    href: '/pokoje-3-osobowe-bialowieza',
    price: 'od 150 zł/os',
  },
  {
    id: '2osobowe',
    name: 'Pokoje 2-osobowe',
    image: '/images/rooms/2osobowy_7.jpg',
    href: '/pokoje-2-osobowe-bialowieza',
    price: 'od 175 zł/os',
  },
  {
    id: 'sauna',
    name: 'Apartament z sauną',
    image: '/images/rooms/pokoj_08.jpg',
    href: '/apartament-z-sauna-bialowieza',
    price: '300 zł/os',
  },
  {
    id: 'jacuzzi',
    name: 'Apartament z jacuzzi',
    image: '/images/rooms/jac3.jpg',
    href: '/apartament-z-jacuzzi-bialowieza',
    price: '400 zł/os',
  },
];

// Komponent rotującej cechy z animacją fade
function RotatingFeature({ roomId }: { roomId: string }) {
  const features = roomFeatures[roomId] || [];
  const startOffset = roomStartOffset[roomId] || 0;
  
  const [featureIndex, setFeatureIndex] = useState(startOffset % features.length);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (features.length <= 1) return;

    const interval = setInterval(() => {
      // Płynny fade out
      setIsVisible(false);
      
      // Po fade out zmień tekst i fade in (poczekaj na zakończenie animacji)
      setTimeout(() => {
        setFeatureIndex((prev) => (prev + 1) % features.length);
        setIsVisible(true);
      }, 600); // czas na fade out
    }, 3500); // co 3.5 sekundy zmiana

    return () => clearInterval(interval);
  }, [features.length]);

  if (features.length === 0) return null;

  return (
    <span
      className={`transition-opacity duration-500 ease-in-out font-medium ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {features[featureIndex]}
    </span>
  );
}

// Karta pokoju - wydzielona jako osobny komponent
function RoomCard({ room, index, variant = 'carousel', isVisible = true }: { room: typeof carouselRooms[0]; index: number; variant?: 'carousel' | 'grid'; isVisible?: boolean }) {
  // Opóźnienie animacji zależne od indeksu (staggered effect)
  const animationDelay = index * 100;
  
  const cardClassName = variant === 'grid' 
    ? `group transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}` 
    : "flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[calc(33.333%-16px)] group snap-start";
  
  return (
    <Link
      href={room.href}
      className={cardClassName}
      style={variant === 'grid' ? { transitionDelay: `${animationDelay}ms` } : undefined}
    >
      {/* Karta pokoju - modern style, kompaktowa */}
      <div className="relative rounded-lg overflow-hidden bg-white shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-primary-400/30 transition-all duration-500 hover:-translate-y-1">
        {/* Obrazek - mniejszy */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={room.image}
            alt={room.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 33vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Przycisk "Zobacz" - pojawia się na hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <span className="px-6 py-2 bg-white/95 backdrop-blur-sm rounded-full text-gray-800 font-medium text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              {room.name} →
            </span>
          </div>
        </div>
        
        {/* Nazwa pokoju i cena/atrybut */}
        <div className={`p-3 md:p-4 ${variant === 'grid' ? 'text-center' : ''}`}>
          <h3 className={`transition-colors duration-300 group-hover:text-primary-500 ${
            variant === 'grid' 
              ? 'font-sans font-semibold text-base md:text-lg text-gray-800' 
              : 'font-cursive text-xl md:text-2xl text-gray-800'
          }`}>
            {room.name}
          </h3>
          {variant === 'grid' ? (
            /* Cena dla wariantu grid (/pokoje) */
            <div className="mt-1.5 text-sm md:text-base text-primary-500 font-bold">
              {room.price}
            </div>
          ) : (
            /* Rotujące atrybuty dla wariantu carousel (landing page) */
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-600 h-5">
              <svg className="w-4 h-4 flex-shrink-0 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <RotatingFeature roomId={room.id} />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

interface RoomsPreviewProps {
  variant?: 'carousel' | 'grid' | 'tinder';
  showTitle?: boolean;
  showButton?: boolean;
}

export function RoomsPreview({ variant = 'carousel', showTitle = true, showButton = true }: RoomsPreviewProps) {
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  
  // State dla wariantu tinder
  const [tinderIndex, setTinderIndex] = useState(0);
  const tinderRoom = carouselRooms[tinderIndex];
  const goTinderNext = () => setTinderIndex((prev) => (prev + 1) % carouselRooms.length);
  const goTinderPrev = () => setTinderIndex((prev) => (prev - 1 + carouselRooms.length) % carouselRooms.length);

  // Tworzymy zduplikowaną listę dla nieskończonego scrollowania
  // Duplikujemy elementy 3 razy dla płynności
  const infiniteRooms = [...carouselRooms, ...carouselRooms, ...carouselRooms];

  // Oblicz szerokość jednego zestawu kart
  const getSetWidth = useCallback(() => {
    if (!scrollRef.current) return 0;
    const totalWidth = scrollRef.current.scrollWidth;
    return totalWidth / 3; // mamy 3 zestawy
  }, []);

  // Ustaw początkową pozycję na środkowy zestaw
  useEffect(() => {
    if (variant === 'carousel' && scrollRef.current) {
      const setWidth = scrollRef.current.scrollWidth / 3;
      scrollRef.current.scrollLeft = setWidth;
    }
  }, [variant]);

  // Auto-scroll - ciągłe przewijanie w prawo (tylko dla karuzeli)
  useEffect(() => {
    if (variant !== 'carousel') return;
    
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

    // Auto-scroll co 30ms, przesuwaj o 0.8px
    autoScrollRef.current = setInterval(() => {
      if (!scrollRef.current) return;
      
      const { scrollLeft } = scrollRef.current;
      const setWidth = getSetWidth();
      
      if (setWidth <= 0) return;
      
      // Przesuwaj w prawo
      scrollRef.current.scrollLeft += 0.8;
      
      // Jeśli doszliśmy do trzeciego zestawu, przeskocz do środkowego (bez animacji)
      if (scrollLeft >= setWidth * 2) {
        scrollRef.current.scrollLeft = setWidth;
      }
      // Jeśli cofnęliśmy się przed pierwszy zestaw, przeskocz do środkowego
      if (scrollLeft <= 0) {
        scrollRef.current.scrollLeft = setWidth;
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
  }, [variant, isAutoScrolling, isHovering, getSetWidth]);

  // Przewijanie karuzeli ręcznie
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400; // szerokość karty + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      
      // Po ręcznym scrollu sprawdź pozycję i ewentualnie przeskocz
      setTimeout(() => {
        if (!scrollRef.current) return;
        const { scrollLeft } = scrollRef.current;
        const setWidth = getSetWidth();
        
        if (scrollLeft >= setWidth * 2) {
          scrollRef.current.scrollLeft = setWidth + (scrollLeft - setWidth * 2);
        } else if (scrollLeft < setWidth * 0.1) {
          scrollRef.current.scrollLeft = setWidth + scrollLeft;
        }
      }, 500);
    }
  };

  // State dla animacji wlatywania w wariancie grid
  const [isGridVisible, setIsGridVisible] = useState(false);
  const gridSectionRef = useRef<HTMLElement>(null);

  // IntersectionObserver dla animacji wlatywania
  useEffect(() => {
    if (variant !== 'grid') return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsGridVisible(true);
          observer.disconnect(); // Animacja tylko raz
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (gridSectionRef.current) {
      observer.observe(gridSectionRef.current);
    }

    return () => observer.disconnect();
  }, [variant]);

  // Wariant TINDER - jedna karta na raz, strzałki do nawigacji (tylko mobilka)
  if (variant === 'tinder') {
    return (
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white md:hidden">
        <div className="container-custom">
          {/* Header - wyśrodkowany tytuł */}
          {showTitle && (
            <div className="text-center mb-8">
              <h2 className="font-cursive text-3xl text-gray-800">
                Dostępne pokoje
              </h2>
            </div>
          )}

          {/* Karta Tinder */}
          <div className="relative px-2">
            <Link href={tinderRoom.href} className="block">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src={tinderRoom.image} 
                  alt={tinderRoom.name} 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Info na dole */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-cursive text-3xl mb-1">{tinderRoom.name}</h3>
                  <p className="text-white/80 text-sm mb-2">
                    <RotatingFeature roomId={tinderRoom.id} />
                  </p>
                  <p className="text-primary-300 font-bold text-xl">{tinderRoom.price}</p>
                </div>

                {/* Licznik */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                  {tinderIndex + 1} / {carouselRooms.length}
                </div>
              </div>
            </Link>

            {/* Strzałki nawigacji */}
            <button
              onClick={goTinderPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center z-10"
              aria-label="Poprzedni pokój"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goTinderNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center z-10"
              aria-label="Następny pokój"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Wskaźniki kropkowe */}
          <div className="flex justify-center gap-2 mt-4">
            {carouselRooms.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setTinderIndex(idx)}
                className={`relative h-2 rounded-full transition-all
                  before:content-[''] before:absolute before:inset-0 
                  before:-inset-y-5 before:-inset-x-3 before:cursor-pointer
                  ${idx === tinderIndex ? 'bg-primary-500 w-6' : 'bg-gray-300 w-2'}`}
                aria-label={`Pokaż pokój ${idx + 1}`}
              />
            ))}
          </div>

          {/* Przycisk "Wszystkie pokoje" */}
          {showButton && (
            <div className="text-center mt-8">
              <Link
                href="/noclegi-bialowieza"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-primary-500 transition-all duration-300 font-medium text-sm"
              >
                Zobacz wszystkie noclegi
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>
    );
  }

  // Wariant GRID - siatka wszystkich 5 pokoi w jednym rzędzie
  if (variant === 'grid') {
    return (
      <section ref={gridSectionRef} className="relative py-10 md:py-12 overflow-hidden">
        {/* Zdjęcie w tle - efekt landing page */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/rooms/img-20230803-wa0079.jpg"
            alt="Eleganckie wnętrze pokoju hotelowego w Dworze Bartnika - tło sekcji noclegów"
            fill
            className="object-cover scale-[1.4] -translate-x-[25%]"
            quality={85}
          />
          {/* Overlay - lekkie przyciemnienie */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
          {/* Dodatkowy ciepły ton */}
          <div className="absolute inset-0 bg-amber-900/10" />
        </div>
        
        {/* Dekoracyjny element góra - złota linia */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent z-10" />
        
        <div className="container-custom relative z-10">
          {/* Header - wyśrodkowany tytuł z ozdobnikiem */}
          {showTitle && (
            <div className="text-center mb-6">
              <h2 className="font-cursive text-3xl md:text-4xl text-white drop-shadow-lg mb-3">
                Dostępne pokoje
              </h2>
              {/* Ozdobna linia pod tytułem z 3 gwiazdkami */}
              <div className="flex justify-center items-center gap-2">
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-primary-400" />
                <svg className="w-4 h-4 text-primary-400 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3l2.5 5.5L20 9.5l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1L12 3z" />
                </svg>
                <svg className="w-5 h-5 text-primary-400 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3l2.5 5.5L20 9.5l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1L12 3z" />
                </svg>
                <svg className="w-4 h-4 text-primary-400 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3l2.5 5.5L20 9.5l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1L12 3z" />
                </svg>
                <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-primary-400" />
              </div>
            </div>
          )}

          {/* Siatka pokoi - 5 kafelków z nowoczesnym układem */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center items-stretch gap-6">
              {carouselRooms.map((room, index) => (
                <div 
                  key={room.id} 
                  className="flex-grow flex-shrink-0 basis-[calc(33.333%-1.5rem)] min-w-[260px] max-w-[340px]"
                >
                  <RoomCard room={room} index={index} variant="grid" isVisible={isGridVisible} />
                </div>
              ))}
            </div>
          </div>

          {/* Przycisk "Wszystkie pokoje" */}
          {showButton && (
            <div className="text-center mt-12">
              <Link
                href="/noclegi-bialowieza"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-primary-500 transition-all duration-300 hover:scale-105 shadow-xl shadow-gray-900/20 hover:shadow-primary-500/30 font-medium"
              >
                Zobacz wszystkie noclegi
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>
        
        {/* Dekoracyjny separator na dole - wyraźnie oddziela od stopki */}
        <div className="absolute bottom-0 left-0 right-0">
          {/* Główna złota linia */}
          <div className="h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
          {/* Cień dający głębię */}
          <div className="h-4 bg-gradient-to-b from-primary-400/5 to-transparent" />
        </div>
      </section>
    );
  }

  // Wariant CAROUSEL (domyślny)
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Header - wyśrodkowany tytuł */}
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="font-cursive text-4xl md:text-5xl lg:text-6xl text-gray-800">
              Dostępne pokoje
            </h2>
          </div>
        )}

        {/* Karuzela z auto-scroll i strzałkami po bokach */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Strzałka LEWO - po lewej stronie karuzeli, poza zdjęciami */}
          <button
            onClick={() => {
              scroll('left');
              setIsAutoScrolling(false);
            }}
            className="absolute -left-4 md:-left-14 lg:-left-16 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-primary-400 rounded-full shadow-lg shadow-primary-400/30 flex items-center justify-center text-white hover:bg-primary-500 hover:shadow-xl hover:scale-105 transition-all"
            aria-label="Przewiń w lewo"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Kontener kart z możliwością przewijania */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {infiniteRooms.map((room, index) => (
              <RoomCard key={`${room.id}-${index}`} room={room} index={index} variant="carousel" />
            ))}
          </div>

          {/* Strzałka PRAWO - po prawej stronie karuzeli, poza zdjęciami */}
          <button
            onClick={() => {
              scroll('right');
              setIsAutoScrolling(false);
            }}
            className="absolute -right-4 md:-right-14 lg:-right-16 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-primary-400 rounded-full shadow-lg shadow-primary-400/30 flex items-center justify-center text-white hover:bg-primary-500 hover:shadow-xl hover:scale-105 transition-all"
            aria-label="Przewiń w prawo"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Przycisk "Wszystkie pokoje" */}
        {showButton && (
          <div className="text-center mt-14">
            <Link
              href="/noclegi-bialowieza"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-primary-500 transition-all duration-300 hover:scale-105 shadow-xl shadow-gray-900/20 hover:shadow-primary-500/30 font-medium"
            >
              Zobacz wszystkie noclegi
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
