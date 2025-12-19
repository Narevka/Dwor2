'use client';

import Image from 'next/image';
import type { OfferAttraction } from '@/data/offers/types';

interface AttractionSectionProps {
  attraction: OfferAttraction;
  index: number;
  isUpsell?: boolean;
}

export function AttractionSection({ attraction, index, isUpsell = false }: AttractionSectionProps) {
  const isReversed = index % 2 === 1;
  
  return (
    <section 
      className={`py-12 md:py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-stone-50'} ${isUpsell ? 'border-t-4 border-primary-400' : ''}`}
    >
      <div className="container-custom">
        <div 
          className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={attraction.image}
                alt={attraction.imageAlt || attraction.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {isUpsell && (
                <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  +199 zł/os
                </div>
              )}
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full md:w-1/2">
            <span className="text-5xl md:text-6xl mb-4 block">{attraction.icon}</span>
            <h3 className="font-cursive text-3xl md:text-4xl text-primary-400 mb-4">
              {attraction.title}
            </h3>
            {attraction.shortDescription && (
              <p className="text-primary-600 font-medium mb-3">
                {attraction.shortDescription}
              </p>
            )}
            <p className="text-gray-600 text-lg leading-relaxed">
              {attraction.description}
            </p>
            {isUpsell && (
              <div className="mt-6 p-4 bg-primary-50 rounded-xl border border-primary-200">
                <p className="text-primary-700 font-medium">
                  🌟 Dostępne w opcji +199 zł/os (dodatkowa noc w piątek)
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Wrapper dla wszystkich atrakcji
interface AttractionsListProps {
  attractions: OfferAttraction[];
}

export function AttractionsList({ attractions }: AttractionsListProps) {
  return (
    <div id="atrakcje">
      <div className="bg-primary-500 py-8 text-center">
        <h2 className="font-cursive text-3xl md:text-4xl text-white">
          Co Cię czeka
        </h2>
        <p className="text-primary-100 mt-2">
          Poznaj wszystkie atrakcje pakietu
        </p>
      </div>
      {attractions.map((attraction, index) => (
        <AttractionSection
          key={attraction.id}
          attraction={attraction}
          index={index}
          isUpsell={attraction.id === 'sauna-zewn'}
        />
      ))}
    </div>
  );
}
