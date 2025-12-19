'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AtrakcjeNav } from '@/components/atrakcje/AtrakcjeNav';
import { atrakcjeWewnetrzne, atrakcjeZewnetrzne, Atrakcja } from '@/data/atrakcjeData';

// Komponent Lightbox do powiększania obrazów
function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 text-white text-5xl hover:text-gray-300 z-50 w-12 h-12 flex items-center justify-center"
        onClick={onClose}
      >
        ×
      </button>
      <div className="relative w-[95vw] h-[90vh]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          quality={75}
          sizes="95vw"
        />
      </div>
    </div>
  );
}

// Komponent sekcji atrakcji - MOBILE
function AtrakcjaSectionMobile({ atrakcja, onImageClick }: { atrakcja: Atrakcja; onImageClick: (src: string, alt: string) => void }) {
  return (
    <div className="mb-6">
      {/* Zdjęcie */}
      <div 
        className="relative h-[55vh] min-h-[280px] cursor-pointer"
        onClick={() => onImageClick(atrakcja.image, atrakcja.imageAlt)}
      >
        <Image
          src={atrakcja.image}
          alt={atrakcja.imageAlt}
          fill
          className="object-cover"
          quality={75}
          sizes="100vw"
        />
      </div>
      {/* Box nachodzący na zdjęcie */}
      <div className="relative z-10 -mt-16 px-5">
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/15 border border-stone-200/60 overflow-hidden">
          <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
            <h2 className="font-cursive text-2xl text-primary-400 text-center mb-2">{atrakcja.title}</h2>
            <div className="flex justify-center items-center gap-2 mb-3">
              <div className="w-2 h-2 border border-primary-400/50 rotate-45"></div>
              <div className="w-12 h-[1px] bg-primary-400/40"></div>
              <div className="w-1.5 h-1.5 bg-primary-400/60 rotate-45"></div>
              <div className="w-12 h-[1px] bg-primary-400/40"></div>
              <div className="w-2 h-2 border border-primary-400/50 rotate-45"></div>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm text-center">{atrakcja.description}</p>
            {atrakcja.link && (
              <div className="mt-4 text-center">
                <Link
                  href={atrakcja.link}
                  className="inline-flex items-center gap-2 px-5 py-2 bg-primary-700 text-white rounded-full text-sm font-medium shadow-lg shadow-primary-700/25 hover:bg-primary-800 transition-all"
                >
                  Dowiedz się więcej
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Komponent sekcji atrakcji - DESKTOP
function AtrakcjaSectionDesktop({ atrakcja, imagePosition, onImageClick }: { atrakcja: Atrakcja; imagePosition: 'left' | 'right'; onImageClick: (src: string, alt: string) => void }) {
  const isImageLeft = imagePosition === 'left';
  
  return (
    <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-16">
      {isImageLeft && (
        <div 
          className="relative min-h-[250px] sm:min-h-[300px] lg:min-h-[350px] rounded-lg overflow-hidden shadow-lg cursor-pointer group order-last lg:order-first"
          onClick={() => onImageClick(atrakcja.image, atrakcja.imageAlt)}
        >
          <Image
            src={atrakcja.image}
            alt={atrakcja.imageAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            quality={75}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm bg-black/50 px-3 py-1 rounded">
              Kliknij aby powiększyć
            </span>
          </div>
        </div>
      )}
      <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden flex flex-col justify-center min-h-[300px] sm:min-h-[350px]">
        <div className="border-2 border-primary-400/30 rounded-xl m-2 sm:m-3 p-4 sm:p-6 md:p-8 h-full flex flex-col justify-center">
          <h2 className="font-cursive text-2xl sm:text-3xl text-primary-400 mb-2 sm:mb-3 text-center">{atrakcja.title}</h2>
          <div className="flex justify-center items-center gap-2 mb-3 sm:mb-5">
            <div className="w-2 h-2 rounded-full bg-primary-400/40"></div>
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-primary-400/60 to-primary-400/20"></div>
            <div className="w-3 h-3 rotate-45 border border-primary-400/50"></div>
            <div className="w-16 h-[1.5px] bg-gradient-to-l from-primary-400/60 to-primary-400/20"></div>
            <div className="w-2 h-2 rounded-full bg-primary-400/40"></div>
          </div>
          <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">{atrakcja.description}</p>
          {atrakcja.link && (
            <div className="mt-6 text-center">
              <Link
                href={atrakcja.link}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-all duration-300 text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Dowiedz się więcej
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
      {!isImageLeft && (
        <div 
          className="relative min-h-[250px] sm:min-h-[300px] lg:min-h-[350px] rounded-lg overflow-hidden shadow-lg cursor-pointer group"
          onClick={() => onImageClick(atrakcja.image, atrakcja.imageAlt)}
        >
          <Image
            src={atrakcja.image}
            alt={atrakcja.imageAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            quality={75}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm bg-black/50 px-3 py-1 rounded">
              Kliknij aby powiększyć
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export function AtrakcjeContent() {
  const [activeTab, setActiveTab] = useState<'wewnetrzne' | 'zewnetrzne'>('wewnetrzne');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
  
  const currentAtrakcje = activeTab === 'wewnetrzne' ? atrakcjeWewnetrzne : atrakcjeZewnetrzne;

  // Obsługa zmiany zakładki z przewijaniem do góry
  const handleTabChange = (tab: 'wewnetrzne' | 'zewnetrzne') => {
    setActiveTab(tab);
    // Przewiń do sekcji z atrakcjami (pod fixed nav)
    const contentSection = document.getElementById('atrakcje-content');
    if (contentSection) {
      const navHeight = 150; // wysokość fixed header + nav
      const targetPosition = contentSection.offsetTop - navHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* Lightbox */}
      {lightboxImage && (
        <Lightbox 
          src={lightboxImage.src} 
          alt={lightboxImage.alt} 
          onClose={closeLightbox} 
        />
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[60vh] min-h-[350px] md:h-[85vh] md:min-h-[600px]">
        <Image
          src="/images/new/ofert4.jpg"
          alt="Atrakcje - Dwór Bartnika"
          fill
          className="object-cover object-center"
          priority
          quality={75}
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
        {/* BOX wprowadzający - nachodzi na hero */}
        <div id="content" className="relative z-10 -mt-24 px-5 pb-4">
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/15 border border-stone-200/60 overflow-hidden">
            <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
              <h1 className="font-cursive text-3xl text-primary-400 text-center mb-3">
                Atrakcje w Puszczy Białowieskiej
              </h1>
              <div className="flex justify-center mb-3">
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
              </div>
              <p className="text-gray-700 leading-relaxed text-sm text-center">
                Odkryj bogactwo atrakcji w Dworze Bartnika i okolicy Puszczy Białowieskiej.
                Dla gości{' '}
                <Link href="/hotel" className="text-primary-500 font-semibold underline">hotelu</Link>{' '}
                wiele atrakcji dostępnych jest bezpłatnie.
              </p>
            </div>
          </div>
        </div>

        {/* Nawigacja zakładek */}
        <div className="pb-4">
          <AtrakcjeNav activeTab={activeTab} onTabChange={handleTabChange} />
        </div>

        {/* Sekcje atrakcji - mobile */}
        <div id="atrakcje-content" className="pt-[60px] pb-8">
          {currentAtrakcje.map((atrakcja) => (
            <AtrakcjaSectionMobile
              key={atrakcja.id}
              atrakcja={atrakcja}
              onImageClick={openLightbox}
            />
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP: Oryginalny layout
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="hidden md:block">
        {/* Nawigacja zakładek - fixed na górze */}
        <div id="content">
          <AtrakcjeNav activeTab={activeTab} onTabChange={handleTabChange} />
        </div>

        {/* Główna treść - sekcje atrakcji */}
        <section id="atrakcje-content" className="section bg-gray-50 pt-[150px] md:pt-[150px]">
          <div className="container-custom">
            {currentAtrakcje.map((atrakcja, index) => (
              <AtrakcjaSectionDesktop
                key={atrakcja.id}
                atrakcja={atrakcja}
                imagePosition={index % 2 === 0 ? 'right' : 'left'}
                onImageClick={openLightbox}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
