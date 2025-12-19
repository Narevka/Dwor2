'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface ZoomableImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  quality?: number;
  zoomSrc?: string; // Opcjonalna osobna ścieżka do dużego obrazu
  showZoomHint?: boolean; // Czy pokazać podpowiedź "kliknij aby powiększyć"
  sizes?: string;
}

/**
 * Komponent obrazu z możliwością powiększenia w lightbox.
 * 
 * Wyświetla zoptymalizowaną miniaturę, a po kliknięciu otwiera
 * pełnoekranowy lightbox z wysoką jakością obrazu.
 */
export function ZoomableImage({
  src,
  alt,
  fill = false,
  width,
  height,
  priority = false,
  className = '',
  containerClassName = '',
  quality = 85,
  zoomSrc,
  showZoomHint = true,
  sizes,
}: ZoomableImageProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openLightbox = useCallback(() => {
    setIsLightboxOpen(true);
    setIsLoading(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    setIsLoading(false);
    document.body.style.overflow = 'unset';
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  }, [closeLightbox]);

  // Ścieżka do pełnego obrazu (może być inna niż miniatura)
  const fullSizeSrc = zoomSrc || src;

  return (
    <>
      {/* Miniatura z możliwością kliknięcia */}
      <div
        className={`relative cursor-pointer group ${containerClassName}`}
        onClick={openLightbox}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && openLightbox()}
        aria-label={`Powiększ obraz: ${alt}`}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            quality={quality}
            className={`object-cover transition-transform duration-300 group-hover:scale-105 ${className}`}
            sizes={sizes}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            quality={quality}
            className={`transition-transform duration-300 group-hover:scale-105 ${className}`}
            sizes={sizes}
          />
        )}
        
        {/* Overlay z ikoną lupy na hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          {showZoomHint && (
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2.5 shadow-lg">
              <svg 
                className="w-5 h-5 text-gray-800" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" 
                />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-label="Powiększony obraz"
        >
          {/* Przycisk zamknięcia */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 p-2"
            aria-label="Zamknij"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Podpis obrazu */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium z-10 text-center max-w-md px-4">
            {alt}
          </div>

          {/* Loader */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-5">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          )}

          {/* Obraz w pełnym rozmiarze */}
          <div
            className="relative w-full h-full max-w-7xl max-h-[90vh] mx-auto p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={fullSizeSrc}
              alt={alt}
              fill
              className="object-contain"
              quality={75}
              priority
              onLoad={() => setIsLoading(false)}
              sizes="100vw"
            />
          </div>

          {/* Instrukcja */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-xs z-10">
            Kliknij aby zamknąć • ESC
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Komponent galerii z ZoomableImage i nawigacją między obrazami.
 */
interface ZoomableGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    zoomSrc?: string;
  }>;
  columns?: 2 | 3 | 4;
  imageHeight?: string;
  className?: string;
}

export function ZoomableGallery({
  images,
  columns = 3,
  imageHeight = '250px',
  className = '',
}: ZoomableGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1);
    }
  };

  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === images.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  const gridColsClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns];

  return (
    <>
      {/* Galeria */}
      <div className={`grid grid-cols-1 ${gridColsClass} gap-4 ${className}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
            style={{ height: imageHeight }}
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-2">
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox z nawigacją */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Przycisk zamknięcia */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Zamknij"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Licznik */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-lg font-medium z-10">
            {lightboxIndex + 1} / {images.length}
          </div>

          {/* Nawigacja - poprzedni */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 p-2"
              aria-label="Poprzednie zdjęcie"
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Obraz */}
          <div
            className="relative w-full h-full max-w-7xl max-h-[90vh] mx-auto p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].zoomSrc || images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              className="object-contain"
              quality={75}
              sizes="100vw"
            />
          </div>

          {/* Nawigacja - następny */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 p-2"
              aria-label="Następne zdjęcie"
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Podpis */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm z-10 text-center max-w-md px-4">
            {images[lightboxIndex].alt}
          </div>
        </div>
      )}
    </>
  );
}
