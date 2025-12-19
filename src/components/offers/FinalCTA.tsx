'use client';

import Link from 'next/link';

interface FinalCTAProps {
  title: string;
  emoji: string;
  ctaText?: string;
  ctaLink?: string;
  phone?: string;
  email?: string;
  availableRooms?: number;
}

export function FinalCTA({ 
  title, 
  emoji, 
  ctaText = 'Zarezerwuj teraz', 
  ctaLink = '/kontakt',
  phone,
  email,
  availableRooms
}: FinalCTAProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-500 to-primary-600">
      <div className="container-custom text-center">
        <span className="text-6xl md:text-8xl mb-6 block">{emoji}</span>
        
        <h2 className="font-cursive text-4xl md:text-5xl lg:text-6xl text-white mb-4">
          Zarezerwuj {title}
        </h2>
        
        <p className="text-primary-100 text-lg md:text-xl mb-8 max-w-xl mx-auto">
          Liczba miejsc ograniczona. Zarezerwuj już teraz, aby zapewnić sobie niezapomniane chwile.
        </p>
        
        {availableRooms && (
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white font-medium">
              Zostało {availableRooms} {availableRooms === 1 ? 'pokój' : availableRooms < 5 ? 'pokoje' : 'pokoi'}
            </span>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href={ctaLink}
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 hover:bg-primary-50 text-lg font-bold px-8 py-4 rounded-xl transition-colors shadow-lg"
          >
            {ctaText}
          </Link>
          {phone && (
            <a 
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-primary-700 text-white hover:bg-primary-800 text-lg font-medium px-8 py-4 rounded-xl transition-colors"
            >
              📞 {phone}
            </a>
          )}
        </div>
        
        {email && (
          <p className="text-primary-100">
            lub napisz: <a href={`mailto:${email}`} className="text-white hover:underline font-medium">{email}</a>
          </p>
        )}
      </div>
    </section>
  );
}
