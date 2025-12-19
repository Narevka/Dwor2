'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export function RoomsParallaxSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

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
    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE LAYOUT - Zdjęcie z boxem nachodzącym (jak ogród sensoryczny)
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="md:hidden relative">
        {/* Zdjęcie hero - pełna wysokość */}
        <div className="relative h-[75vh] min-h-[450px]">
          <Image
            src="/images/rooms/better_qiality.jpg"
            alt="Nasze pokoje"
            fill
            className="object-cover"
            quality={75}
          />
          {/* Gradient dla lepszej czytelności */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/50" />
        </div>

        {/* Karta nachodzącą na zdjęcie - pozycjonowana absolutnie */}
        <div ref={boxRef} className="relative z-10 -mt-32 px-5 pb-8">
          <div
            className={`max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/20 border border-stone-200/60 overflow-hidden transition-all duration-700 ease-out ${
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
                Odkryj komfortowe pokoje 2, 3 i 4-osobowe oraz ekskluzywne apartamenty z sauną i jacuzzi.
                Do dyspozycji gości przygotowano 25 wygodnych i estetycznie urządzonych pokoi, które zapewnią
                Państwu niezapomniany wypoczynek w sercu Puszczy Białowieskiej.
              </p>
              
              {/* CTA Button */}
              <div className="text-center">
                <Link
                  href="/noclegi-bialowieza"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary-400 text-white rounded-full text-sm font-medium shadow-lg shadow-primary-400/25 hover:bg-primary-500 hover:shadow-xl transition-all duration-300"
                >
                  Sprawdź dostępne pokoje
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP LAYOUT - Oryginalny parallax z boxem na zdjęciu
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        ref={sectionRef}
        className="hidden md:block parallax-section relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(/images/rooms/better_qiality.jpg)',
        }}
      >
        {/* Lekkie przyciemnienie dla lepszej czytelności */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Biały box z tekstem - po lewej stronie, wjeżdża z lewej */}
        <div
          className={`absolute top-1/2 left-[10%] -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm w-[90%] max-w-[600px] shadow-2xl rounded-xl overflow-hidden transition-all duration-1000 ease-in-out ${
            isVisible ? 'opacity-100' : 'opacity-0 -translate-x-32'
          }`}
        >
          {/* Wewnętrzny box z cieniutką ramką */}
          <div className="border-2 border-primary-400/30 rounded-xl m-3 p-8 md:p-12">
            <h2 className="font-cursive text-4xl md:text-5xl lg:text-6xl text-primary-400 mb-4 text-center leading-tight">
              Nasze pokoje
            </h2>
            
            {/* Złota linia POD tytułem - w środku boxa jak na oryginale */}
            <div className="flex justify-center mb-6">
              <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-justify text-sm md:text-base mb-8">
              Odkryj komfortowe pokoje 2, 3 i 4-osobowe oraz ekskluzywne apartamenty z sauną i jacuzzi.
              Do dyspozycji gości przygotowano 25 wygodnych i estetycznie urządzonych pokoi, które zapewnią
              Państwu niezapomniany wypoczynek w sercu Puszczy Białowieskiej.
            </p>
            
            <div className="text-center">
              <Link
                href="/noclegi-bialowieza"
                className="inline-block px-8 py-3 bg-primary-400 text-white rounded-lg hover:bg-primary-500 transition-all duration-300 text-sm tracking-wide font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Przeglądaj ofertę noclegową
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

