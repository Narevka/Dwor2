'use client';

import { useState, useEffect } from 'react';

/**
 * ScrollToTop - Przycisk "przewiń na górę"
 * Pojawia się w prawym dolnym rogu po przewinięciu strony w dół.
 * Kliknięcie płynnie przewija stronę na samą górę.
 */
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Pokazuj przycisk tylko gdy użytkownik przewinął stronę o 300px w dół
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Nasłuchuj zdarzenia scroll
    window.addEventListener('scroll', toggleVisibility);

    // Sprawdź początkową pozycję
    toggleVisibility();

    // Posprzątaj po sobie przy odmontowaniu komponentu
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Funkcja przewijająca na górę strony
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Płynne przewijanie
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Przewiń na górę strony"
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        bg-primary-400 hover:bg-primary-600
        text-white shadow-lg hover:shadow-xl
        flex items-center justify-center
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2
        ${isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-4 pointer-events-none'
        }
      `}
    >
      {/* Ikona strzałki w górę */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
}




