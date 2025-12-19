'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

// Sekcje z efektem parallax - jak na oryginalnej stronie
const parallaxSections = [
  {
    id: 'restauracja',
    title: 'Restauracja',
    subtitle: 'Smaki Puszczy',
    shortDesc: 'Specjały kuchni regionalnej, dania z miodem, potrawy z dziczyzny, wędliny własnego wyrobu.',
    description:
      'Serdecznie zapraszamy Państwa do restauracji w Dworze Bartnika w Narewce, gdzie serwujemy najlepsze specjały kuchni regionalnej, kresowej, dania z miodem, potrawy z dziczyzny, wędliny własnego wyrobu, własne wypieki. Wszystkie potrawy sporządzamy z najwyższej jakości surowców pozyskiwanych od lokalnych producentów.',
    href: '/restauracja-bialowieza',
    backgroundImage: '/images/sections/restauracja-bg.jpg',
    boxPosition: 'right',
    ctaText: 'Zobacz menu restauracji',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: 'muzeum',
    title: 'Muzeum Pszczelarstwa',
    subtitle: 'Unikaty i historia',
    shortDesc: 'Nietuzinkowe miejsce z unikatowymi eksponatami związanymi z pszczelarstwem.',
    description:
      'Nietuzinkowe miejsce w którym zostały zebrane unikate eksponaty związane z pszczelarstwem. Eksponaty do których należą min: monety, krawaty, trafika, szkło i porcelana, obrazy olejne, haft krzyżykowy, exlibrisy, stary sprzęt pszczelarski, karty telefoniczne, zegary, makrofotografia, heraldyka, akcje i obligacje zachwycają swoją wyjątkowością.',
    href: '/muzeum-pszczelarstwa',
    backgroundImage: '/images/sections/muzeum-bg.jpg',
    boxPosition: 'left',
    ctaText: 'Odwiedź Muzeum Pszczelarstwa',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3l2.5 5.5L20 9.5l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1L12 3z" />
      </svg>
    ),
  },
  {
    id: 'przyjecia',
    title: 'Przyjęcia',
    subtitle: 'Niezapomniane chwile',
    shortDesc: 'Doskonałe warunki na organizację wesel, chrzcin, komunii i jubileuszy.',
    description:
      'Dwór Bartnika oferuje doskonałe warunki na organizację wesel, chrzcin, komunii, jubileuszy, rocznic, bankietów i spotkań integracyjnych. Menu, przygotowane z najwyższej jakości składników dostępne w opcjach wegańskich, wegetariańskich, bezglutenowych oraz dla dzieci.',
    href: '/wesela-bialowieza',
    backgroundImage: '/images/sections/przyjecia-bg.jpg',
    boxPosition: 'right',
    ctaText: 'Sprawdź ofertę weselną',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ),
  },
  {
    id: 'ogrod',
    title: 'Ogród Sensoryczny',
    subtitle: 'Harmonia zmysłów',
    shortDesc: 'Unikalny kompleks oddziaływujący terapeutycznie na ciało i umysł.',
    description:
      'Unikalny kompleks stworzony z myślą oddziaływania na wszystkie zmysły. Oddziałuje terapeutycznie na ciało i umysł.',
    href: '/ogrod-sensoryczny',
    backgroundImage: '/images/sections/ogrodo1.webp',
    boxPosition: 'left',
    ctaText: 'Poznaj Ogród Sensoryczny',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

function getBoxPositionClasses(position: string) {
  switch (position) {
    case 'left':
      return 'left-[10%] -translate-y-1/2';
    case 'right':
      return 'right-[10%] -translate-y-1/2';
    case 'center':
    default:
      return 'left-1/2 -translate-x-1/2 -translate-y-1/2';
  }
}

function getAnimationClasses(position: string, isVisible: boolean) {
  if (isVisible) {
    return 'opacity-100 translate-x-0 transition-all duration-1000 ease-out';
  }
  
  const baseClasses = 'transition-all duration-1000 ease-out opacity-0';
  
  switch (position) {
    case 'left':
      return `${baseClasses} -translate-x-24`;
    case 'right':
      return `${baseClasses} translate-x-24`;
    case 'center':
    default:
      return `${baseClasses} scale-95`;
  }
}

function ParallaxSection({ section, index }: { section: typeof parallaxSections[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Alternating gradient direction for visual variety
  const isEven = index % 2 === 0;

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE LAYOUT - "Kino na górze, karta na dole"
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="block md:hidden relative">
        {/* Część wizualna - pełne zdjęcie jak kadr z filmu */}
        <div className="relative h-[60vh] min-h-[350px]">
          <Image
            src={section.backgroundImage}
            alt={section.title}
            fill
            className="object-cover"
            loading="lazy"
            quality={70}
            sizes="100vw"
          />
          {/* Gradient - kinowy efekt */}
          <div className={`absolute inset-0 ${
            isEven 
              ? 'bg-gradient-to-b from-black/60 via-black/20 to-black/50' 
              : 'bg-gradient-to-b from-black/50 via-black/15 to-black/55'
          }`} />
          
          {/* Tytuł w kadrze - jak plakat filmowy */}
          <div className="absolute bottom-20 left-0 right-0 text-center px-8">
            <div className="inline-flex items-center gap-2 text-primary-300 mb-2">
              {section.icon}
              <span className="text-xs uppercase tracking-widest">{section.subtitle}</span>
            </div>
            <h2 
              className="font-cursive text-4xl text-white leading-tight"
              style={{ textShadow: '2px 2px 12px rgba(0,0,0,0.6)' }}
            >
              {section.title}
            </h2>
          </div>
        </div>

        {/* Karta wychodząca z kadru */}
        <div className={`relative pb-8 ${
          isEven 
            ? 'bg-gradient-to-b from-stone-100 to-stone-50' 
            : 'bg-gradient-to-b from-amber-50/50 to-white'
        }`}>
          <div className="-mt-10 px-5">
            <div
              className={`max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/10 border border-stone-200/60 overflow-hidden transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Wewnętrzna ramka */}
              <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
                {/* Dekoracyjna linia */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
                </div>
                
                <p className="text-gray-700 leading-relaxed text-sm text-center mb-5">
                  {section.shortDesc}
                </p>
                
                {/* CTA Button */}
                <div className="text-center">
                  <Link
                    href={section.href}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary-700 text-white rounded-full text-sm font-medium shadow-lg shadow-primary-700/25 hover:bg-primary-800 hover:shadow-xl transition-all duration-300"
                  >
                    {section.ctaText}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP LAYOUT - Oryginalny parallax z boxem z boku
      ═══════════════════════════════════════════════════════════════════ */}
      <div
        className="hidden md:block relative min-h-screen bg-fixed bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${section.backgroundImage})`,
        }}
      >
        {/* Lekkie przyciemnienie */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Biały box z tekstem */}
        <div
          className={`absolute top-1/2 ${getBoxPositionClasses(section.boxPosition)} ${getAnimationClasses(section.boxPosition, isVisible)} z-10 bg-white/95 backdrop-blur-sm w-[480px] max-w-[90%] shadow-2xl rounded-xl overflow-hidden`}
        >
          <div className="border-2 border-primary-400/30 rounded-xl m-3 p-10">
            <h2 className="font-cursive text-4xl lg:text-5xl text-primary-400 mb-4 text-center leading-tight">
              {section.title}
            </h2>
            
            <div className="flex justify-center mb-6">
              <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-justify text-base mb-8">
              {section.description}
            </p>
            
            <div className="text-center">
              <Link
                href={section.href}
                className="inline-block px-8 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-all duration-300 text-sm tracking-wide font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
              >
                {section.ctaText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AttractionsSection() {
  return (
    <>
      {parallaxSections.map((section, index) => (
        <ParallaxSection key={section.id} section={section} index={index} />
      ))}
    </>
  );
}
