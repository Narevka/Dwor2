'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export function AboutSection() {
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

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE LAYOUT - UKRYTE (przeniesione do HeroSection)
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="hidden">
        {/* Część wizualna - pełne zdjęcie jak kadr z filmu */}
        <div className="relative h-[60vh] min-h-[350px]">
          <Image
            src="/images/sections/ogrodo1.webp"
            alt="Ogród Dworu Bartnika"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Gradient - kinowy efekt */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/55" />
          
          {/* Tytuł w kadrze - jak plakat filmowy */}
          <div className="absolute bottom-20 left-0 right-0 text-center px-8">
            <div className="inline-flex items-center gap-2 text-primary-300 mb-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span className="text-xs uppercase tracking-widest">Puszcza Białowieska</span>
            </div>
            <h2 
              className="font-cursive text-4xl text-white leading-tight"
              style={{ textShadow: '2px 2px 12px rgba(0,0,0,0.6)' }}
            >
              Dwór Bartnika
            </h2>
          </div>
        </div>

        {/* Karta wychodząca z kadru */}
        <div className="relative pb-8 bg-gradient-to-b from-amber-50/50 to-white">
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
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP LAYOUT - Oryginalny parallax z boxem z boku
      ═══════════════════════════════════════════════════════════════════ */}
      <div 
        className="hidden md:flex parallax-section relative min-h-screen items-start justify-start pl-16 pt-32"
        style={{ 
          backgroundImage: 'url(/images/sections/ogrodo1.webp)',
        }}
      >
        {/* Lekkie przyciemnienie */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Biały box z tekstem - po lewej stronie */}
        <div 
          className={`relative z-10 bg-white/95 backdrop-blur-sm w-[480px] ml-8 shadow-2xl rounded-xl overflow-hidden transition-all duration-1000 ease-in-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
          }`}
        >
          <div className="border-2 border-primary-400/30 rounded-xl m-3 p-8">
            <h2 className="font-cursive text-4xl text-primary-400 mb-4 text-center leading-tight">
              Dwór Bartnika w Narewce
            </h2>
            
            <div className="flex justify-center mb-6">
              <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-base text-justify">
              to <strong className="font-semibold">komfortowy kompleks wypoczynkowy</strong> zlokalizowany w samym sercu{' '}
              <strong className="font-semibold">Puszczy Białowieskiej</strong>. Położony jest na malowniczej działce, na której
              znajdziecie Państwo dużo zieleni, ogród sensoryczny, las, taras
              restauracyjny, wodospady, domek do uloterapii, saunę, ruską banię, stawy,
              plac zabaw dla dzieci, miejsce na grill i ognisko oraz altanę.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
