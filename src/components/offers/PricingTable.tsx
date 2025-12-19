'use client';

import Link from 'next/link';
import type { OfferPackage, OfferUpsell } from '@/data/offers/types';

interface PricingTableProps {
  packages: OfferPackage[];
  comparisonFeatures?: string[];
  upsell?: OfferUpsell;
  ctaLink?: string;
}

export function PricingTable({ packages, comparisonFeatures, upsell, ctaLink = '/kontakt' }: PricingTableProps) {
  // Rozdziel pakiety na kategorie
  const couplesPackage = packages.find(p => p.category === 'couples');
  const familyPackage = packages.find(p => p.category === 'family');
  const premiumPackages = packages.filter(p => p.category === 'premium');
  
  return (
    <section id="pakiety" className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        {/* Nagłówek */}
        <div className="text-center mb-12">
          <h2 className="font-cursive text-4xl md:text-5xl text-primary-400 mb-4">
            Wybierz pakiet
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Dwa pakiety dostosowane do Twoich potrzeb — dla par lub całej rodziny
          </p>
        </div>
        
        {/* ═══════════════════════════════════════════════════════════════════
            GŁÓWNE KARTY: PARY vs RODZINY
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
          
          {/* KARTA: DLA PAR */}
          {couplesPackage && (
            <div className="bg-white rounded-2xl border-2 border-stone-200 shadow-lg hover:shadow-xl transition-all overflow-hidden">
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{couplesPackage.emoji}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {couplesPackage.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{couplesPackage.subtitle}</p>
                  </div>
                </div>
                
                {/* Price */}
                <div className="my-6 pb-6 border-b border-stone-100">
                  <span className="text-5xl font-bold text-primary-500">
                    {couplesPackage.pricePerPerson}
                  </span>
                  <span className="text-gray-500 text-xl"> zł/os</span>
                </div>
                
                {/* Highlights */}
                <ul className="space-y-3 mb-6">
                  {couplesPackage.highlights?.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Availability */}
                <div className="flex items-center gap-2 mb-6 text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Dostępnych: <strong className="text-gray-700">{couplesPackage.availability} pokoi</strong></span>
                </div>
                
                {/* CTA */}
                <Link
                  href={ctaLink}
                  className="block w-full text-center py-4 px-6 rounded-xl font-semibold bg-stone-100 text-gray-800 hover:bg-stone-200 transition-colors"
                >
                  Zarezerwuj
                </Link>
              </div>
            </div>
          )}
          
          {/* KARTA: DLA RODZIN */}
          {familyPackage && (
            <div className="bg-white rounded-2xl border-2 border-primary-400 shadow-xl overflow-hidden relative">
              {/* Badge POLECANY */}
              <div className="bg-primary-400 text-white text-center py-2 text-sm font-bold">
                ⭐ POLECANY DLA RODZIN
              </div>
              
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{familyPackage.emoji}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {familyPackage.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{familyPackage.subtitle}</p>
                  </div>
                </div>
                
                {/* Price */}
                <div className="my-6 pb-6 border-b border-stone-100">
                  <span className="text-5xl font-bold text-primary-500">
                    {familyPackage.pricePerPerson}
                  </span>
                  <span className="text-gray-500 text-xl"> zł/os</span>
                </div>
                
                {/* Highlights */}
                <ul className="space-y-3 mb-6">
                  {familyPackage.highlights?.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Lista typów pokoi */}
                {familyPackage.roomTypes && familyPackage.roomTypes.length > 0 && (
                  <div className="mb-6">
                    <p className="text-sm font-medium text-gray-600 mb-3">Wybierz typ pokoju:</p>
                    <div className="space-y-2 max-h-[240px] overflow-y-auto pr-2">
                      {familyPackage.roomTypes.map((room) => (
                        <div 
                          key={room.id}
                          className="flex items-center justify-between p-3 bg-stone-50 rounded-lg border border-stone-200 hover:border-primary-300 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            {room.icon && <span>{room.icon}</span>}
                            <span className="font-medium text-gray-800">{room.name}</span>
                            {room.badge && (
                              <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full">
                                {room.badge}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`text-sm ${room.availability <= 1 ? 'text-red-500 font-medium' : 'text-gray-500'}`}>
                              {room.availability <= 1 ? 'Ostatni!' : `Zostało: ${room.availability}`}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* CTA */}
                <Link
                  href={ctaLink}
                  className="block w-full text-center py-4 px-6 rounded-xl font-semibold bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                >
                  Zarezerwuj
                </Link>
              </div>
            </div>
          )}
        </div>
        
        {/* ═══════════════════════════════════════════════════════════════════
            TABELA PORÓWNAWCZA
        ═══════════════════════════════════════════════════════════════════ */}
        {comparisonFeatures && comparisonFeatures.length > 0 && couplesPackage && familyPackage && (
          <div className="max-w-3xl mx-auto mb-16">
            <h3 className="text-xl font-bold text-gray-800 text-center mb-6">
              Porównanie pakietów
            </h3>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left py-4 px-4 md:px-6 font-medium text-gray-600">Co zawiera</th>
                    <th className="text-center py-4 px-3 md:px-4 font-bold text-gray-800">
                      <span className="hidden sm:inline">💑 </span>Dla Par
                    </th>
                    <th className="text-center py-4 px-3 md:px-4 font-bold text-gray-800">
                      <span className="hidden sm:inline">👨‍👩‍👧‍👦 </span>Dla Rodzin
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => {
                    const couplesHas = couplesPackage.features?.includes(feature.replace(/ 🐰| ♟️| 🎮/g, ''));
                    const familyHas = familyPackage.features?.includes(feature.replace(/ 🐰| ♟️| 🎮/g, ''));
                    
                    return (
                      <tr key={feature} className={index % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                        <td className="py-3 px-4 md:px-6 text-gray-700 text-sm md:text-base">{feature}</td>
                        <td className="text-center py-3 px-3 md:px-4">
                          {couplesHas ? (
                            <span className="text-green-500 text-xl">✓</span>
                          ) : (
                            <span className="text-gray-300 text-xl">—</span>
                          )}
                        </td>
                        <td className="text-center py-3 px-3 md:px-4">
                          {familyHas ? (
                            <span className="text-green-500 text-xl">✓</span>
                          ) : (
                            <span className="text-gray-300 text-xl">—</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {/* ═══════════════════════════════════════════════════════════════════
            APARTAMENTY PREMIUM
        ═══════════════════════════════════════════════════════════════════ */}
        {premiumPackages.length > 0 && (
          <div className="max-w-4xl mx-auto mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                🌟 Apartamenty Premium
              </h3>
              <p className="text-gray-600">
                Wszystko z pakietu rodzinnego + prywatne udogodnienia
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {premiumPackages.map((pkg) => (
                <div 
                  key={pkg.id}
                  className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-2xl p-6 border border-stone-200 relative overflow-hidden"
                >
                  {/* Badge */}
                  {pkg.badge && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {pkg.badge}
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{pkg.emoji}</span>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{pkg.name}</h4>
                      <p className="text-gray-500 text-sm">{pkg.capacity}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary-500">{pkg.pricePerPerson}</span>
                    <span className="text-gray-500"> zł/os</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {pkg.highlights?.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                        <span className="text-primary-500">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={ctaLink}
                    className="block w-full text-center py-3 px-6 rounded-xl font-semibold bg-primary-500 text-white hover:bg-primary-600 transition-colors text-sm"
                  >
                    Zarezerwuj
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* ═══════════════════════════════════════════════════════════════════
            UPSELL: DODAJ PIĄTEK
        ═══════════════════════════════════════════════════════════════════ */}
        {upsell && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-6 md:p-8 border-2 border-primary-300 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{upsell.icon}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-primary-700">
                      {upsell.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {upsell.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {upsell.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                        <span className="text-primary-500">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                    +{upsell.price} <span className="text-lg font-normal">{upsell.priceNote}</span>
                  </div>
                  <p className="text-gray-500 text-sm">do dowolnego pakietu</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
