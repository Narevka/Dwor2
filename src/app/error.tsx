'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Opcjonalnie: loguj błąd do serwisu monitoringu
    console.error('Application error:', error);
  }, [error]);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="md:hidden min-h-screen bg-stone-50 pt-24 pb-8 px-5">
        {/* BOX główny */}
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/10 border border-stone-200/60 overflow-hidden">
          <div className="border border-primary-400/20 rounded-xl m-2.5 p-5 text-center">
            {/* Ilustracja */}
            <div className="relative mb-4">
              <span className="text-5xl block">😔</span>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-3xl">🐝</span>
            </div>
            
            <h1 className="font-cursive text-3xl text-primary-400 mb-3">
              Coś poszło nie tak
            </h1>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
            </div>
            <p className="text-gray-700 leading-relaxed text-sm mb-4">
              Przepraszamy, wystąpił nieoczekiwany błąd. 
              Nasze pszczoły już pracują nad rozwiązaniem!
            </p>
            
            {/* Szczegóły błędu (tylko dev) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4 text-left">
                <p className="text-red-600 text-xs font-mono break-all">
                  {error.message}
                </p>
              </div>
            )}
          </div>
        </div>
        
        {/* Przyciski */}
        <div className="max-w-sm mx-auto mt-6 space-y-3">
          <button
            onClick={reset}
            className="btn-primary w-full text-center"
          >
            Spróbuj ponownie
          </button>
          <Link href="/" className="btn-outline w-full text-center block">
            Strona główna
          </Link>
        </div>
        
        {/* Co możesz zrobić */}
        <div className="max-w-sm mx-auto mt-6">
          <div className="bg-white rounded-xl p-5 shadow-md border border-stone-200/60">
            <h2 className="font-cursive text-xl text-primary-400 text-center mb-4">
              Co możesz zrobić?
            </h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-primary-400 font-bold">1.</span>
                <span>Kliknij <strong className="text-gray-800">„Spróbuj ponownie"</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400 font-bold">2.</span>
                <span>Odśwież stronę (F5)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400 font-bold">3.</span>
                <span>Wróć na stronę główną</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400 font-bold">4.</span>
                <span>
                  <a href="tel:+48856858388" className="text-primary-500">Zadzwoń do nas</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Kontakt */}
        <p className="text-gray-500 text-sm text-center mt-6">
          Potrzebujesz pomocy?{' '}
          <a href="tel:+48856858388" className="text-primary-500 font-medium">
            +48 85 685 83 88
          </a>
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="hidden md:flex min-h-screen bg-gray-50 items-center justify-center py-16 px-4">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-8">
            {/* Ilustracja */}
            <div className="relative inline-block mb-6">
              <span className="text-8xl block">😔</span>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-5xl">🐝</span>
            </div>
            
            <h1 className="font-cursive text-5xl md:text-6xl text-primary-400 mb-4">
              Coś poszło nie tak
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Przepraszamy, wystąpił nieoczekiwany błąd.
              <br />
              Nasze pszczoły już pracują nad rozwiązaniem problemu!
            </p>
            
            {/* Szczegóły błędu (tylko dev) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8 text-left max-w-lg mx-auto">
                <p className="text-red-600 text-sm font-mono break-all">
                  {error.message}
                </p>
                {error.digest && (
                  <p className="text-red-400 text-xs mt-2">
                    Digest: {error.digest}
                  </p>
                )}
              </div>
            )}
            
            {/* Przyciski */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={reset}
                className="btn-primary text-lg px-8 py-4"
              >
                Spróbuj ponownie
              </button>
              <Link href="/" className="btn-outline text-lg px-8 py-4">
                Strona główna
              </Link>
            </div>
          </div>
          
          {/* Co możesz zrobić */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200/60">
            <h2 className="font-cursive text-3xl text-primary-400 text-center mb-6">
              Co możesz zrobić?
            </h2>
            <ul className="space-y-3 text-gray-600 max-w-md mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-primary-400 font-bold text-lg">1.</span>
                <span>Kliknij <strong className="text-gray-800">„Spróbuj ponownie"</strong> - czasem to wystarczy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 font-bold text-lg">2.</span>
                <span>Odśwież stronę (F5 lub Ctrl+R)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 font-bold text-lg">3.</span>
                <span>Wróć na <Link href="/" className="text-primary-500 hover:underline">stronę główną</Link></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 font-bold text-lg">4.</span>
                <span>Jeśli problem się powtarza - <a href="tel:+48856858388" className="text-primary-500 hover:underline">skontaktuj się z nami</a></span>
              </li>
            </ul>
          </div>
          
          {/* Kontakt */}
          <p className="text-gray-500 text-center mt-8">
            Potrzebujesz pomocy?{' '}
            <a href="tel:+48856858388" className="text-primary-500 hover:text-primary-600 font-medium transition-colors">
              Zadzwoń: +48 85 685 83 88
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
