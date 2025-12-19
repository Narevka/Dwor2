'use client';

import { useState } from 'react';
import { Calendar, Users, Search } from 'lucide-react';
import { useReservationModal } from '@/contexts/ReservationModalContext';

interface ReservationBarProps {
  /** Wariant wyglądu */
  variant?: 'hero' | 'sticky' | 'inline';
  /** Klasa CSS */
  className?: string;
}

/**
 * Elegancki pasek rezerwacji - mini formularz
 * Po kliknięciu "Rezerwuj" otwiera pełny modal z listą pokoi
 */
export function ReservationBar({ 
  variant = 'inline',
  className = ''
}: ReservationBarProps) {
  const { openModal } = useReservationModal();
  
  // Stan formularza
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [guests, setGuests] = useState(2);

  // Dzisiejsza data w formacie YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];
  
  // Jutro
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const handleSearch = () => {
    openModal({
      arrival: arrival || undefined,
      departure: departure || undefined,
      guests: guests
    });
  };

  // Style zależne od wariantu
  const variantStyles = {
    hero: 'bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl',
    sticky: 'bg-white shadow-lg border-b border-gray-100',
    inline: 'bg-white rounded-xl shadow-lg border border-gray-100'
  };

  return (
    <div className={`${variantStyles[variant]} ${className}`}>
      <div className="p-4 md:p-6">
        {/* Nagłówek - tylko dla inline i hero */}
        {(variant === 'inline' || variant === 'hero') && (
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-serif font-bold text-gray-900">
              Zarezerwuj pobyt
            </h2>
            <p className="text-sm text-gray-600 mt-1 font-medium">
              Sprawdź dostępność i ceny
            </p>
          </div>
        )}

        {/* Formularz */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-end">
          {/* Data przyjazdu */}
          <div className="flex-1 min-w-0">
            <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">
              Przyjazd
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="date"
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
                min={today}
                className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg 
                         text-gray-900 text-sm
                         focus:ring-2 focus:ring-primary-400 focus:border-primary-400
                         transition-all cursor-pointer
                         hover:border-gray-300"
                placeholder="Wybierz datę"
              />
            </div>
          </div>

          {/* Data wyjazdu */}
          <div className="flex-1 min-w-0">
            <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">
              Wyjazd
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="date"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                min={arrival || tomorrowStr}
                className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg 
                         text-gray-900 text-sm
                         focus:ring-2 focus:ring-primary-400 focus:border-primary-400
                         transition-all cursor-pointer
                         hover:border-gray-300"
                placeholder="Wybierz datę"
              />
            </div>
          </div>

          {/* Liczba gości */}
          <div className="flex-1 min-w-0 md:max-w-[140px]">
            <label htmlFor="guests-select" className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">
              Goście
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                id="guests-select"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full pl-10 pr-8 py-3 border border-gray-200 rounded-lg 
                         text-gray-900 text-sm appearance-none
                         focus:ring-2 focus:ring-primary-400 focus:border-primary-400
                         transition-all cursor-pointer
                         hover:border-gray-300
                         bg-white"
                aria-label="Wybierz liczbę gości"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'osoba' : num < 5 ? 'osoby' : 'osób'}
                  </option>
                ))}
              </select>
              {/* Custom dropdown arrow */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Przycisk Szukaj */}
          <div className="flex-shrink-0">
            <button
              onClick={handleSearch}
              className="w-full md:w-auto px-8 py-3 
                       bg-gradient-to-r from-primary-500 to-primary-600
                       hover:from-primary-600 hover:to-primary-700
                       text-white font-medium rounded-lg
                       shadow-md hover:shadow-lg
                       transform hover:-translate-y-0.5
                       transition-all duration-200
                       flex items-center justify-center gap-2
                       text-sm md:text-base"
            >
              <Search className="w-4 h-4" />
              <span>Sprawdź dostępność</span>
            </button>
          </div>
        </div>

        {/* Info pod formularzem */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-600 font-medium">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Bezpłatne odwołanie
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Najlepsza cena gwarantowana
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Potwierdzenie natychmiast
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * Prosty przycisk rezerwacji - otwiera modal
 */
export function ReservationButton({ 
  className = '',
  children = 'Zarezerwuj teraz'
}: { 
  className?: string;
  children?: React.ReactNode;
}) {
  const { openModal } = useReservationModal();

  return (
    <button
      onClick={() => openModal()}
      className={`px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium 
                 rounded-lg shadow-md hover:shadow-lg transition-all ${className}`}
    >
      {children}
    </button>
  );
}

export default ReservationBar;


