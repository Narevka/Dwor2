'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { getOffersNavData } from '@/data/offers';
import { showOffersInNav } from '../../../offers.config';

// Bazowa nawigacja (bez ofert)
const baseNavigation = [
  { name: 'Hotel', href: '/hotel-bialowieza' },
  { name: 'Pokoje', href: '/noclegi-bialowieza' },
  { name: 'Restauracja', href: '/restauracja-bialowieza' },
  { name: 'Muzeum Pszczelarstwa', href: '/muzeum-pszczelarstwa' },
  { name: 'Wesela i Przyjęcia', href: '/wesela-bialowieza' },
  { name: 'Ogród Sensoryczny', href: '/ogrod-sensoryczny' },
  { name: 'Atrakcje', href: '/atrakcje-bialowieza' },
  // Oferty Specjalne - dodawane dynamicznie poniżej
  { name: 'Kontakt', href: '/kontakt' },
];

// Funkcja budująca pełną nawigację z opcjonalnymi ofertami
function buildNavigation() {
  const offersNav = getOffersNavData();
  
  // Jeśli są aktywne oferty i showOffersInNav jest true - dodaj do nawigacji
  if (offersNav && showOffersInNav) {
    const navWithOffers = [...baseNavigation];
    // Wstaw przed "Kontakt" (ostatni element)
    navWithOffers.splice(navWithOffers.length - 1, 0, {
      name: `${offersNav.emoji} ${offersNav.label}`,
      href: offersNav.href,
    });
    return navWithOffers;
  }
  
  return baseNavigation;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Buduj nawigację z dynamicznymi ofertami
  const navigation = useMemo(() => buildNavigation(), []);

  // Wykrywanie scroll - gdy użytkownik przewinie > 50px, header zmienia tło
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Sprawdź stan przy załadowaniu (np. odświeżenie strony w środku)
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top bar z kontaktem - TYLKO DESKTOP */}
      <div className={`hidden lg:block text-white py-2 text-sm transition-all duration-300 ${
        isScrolled ? 'bg-gray-900' : 'bg-gray-900/70'
      }`}>
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="tel:+48856858388"
              className="flex items-center gap-2 hover:text-primary-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+48 85 685 83 88</span>
            </a>
            <a
              href="mailto:sapiolko@op.pl"
              className="flex items-center gap-2 hover:text-primary-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">sapiolko@op.pl</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/DworBartnikaPuszczaBialowieska"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@dworbartnika7327"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/dworbartnika/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation - przezroczyste na górze, solidne po scroll */}
      <nav className={`relative transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900 shadow-lg' 
          : 'bg-black/40 backdrop-blur-sm'
      }`}>
        <div className="container-custom py-2">
          <div className="flex items-center relative">
            
            {/* === WERSJA NA GÓRZE STRONY (nie przewinięta) === */}
            {!isScrolled && (
              <>
                {/* Menu po lewej - 5 elementów */}
                <div className="hidden lg:flex items-center gap-1 flex-1 justify-end pr-4">
                  {navigation.slice(0, 5).map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-primary-400 font-light text-sm uppercase tracking-wide px-2 py-1 transition-colors whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Logo na środku - TYLKO DESKTOP */}
                <div className="hidden lg:block flex-shrink-0">
                  <Link href="/" className="block">
                    <Image
                      src="/images/logo/dworbartnika.png"
                      alt="Dwór Bartnika"
                      width={140}
                      height={85}
                      className="h-16 w-auto drop-shadow-lg"
                      priority
                    />
                  </Link>
                </div>

                {/* Menu po prawej - 4 elementy + przycisk */}
                <div className="hidden lg:flex items-center gap-1 flex-1 justify-start pl-4">
                  {navigation.slice(5).map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-primary-400 font-light text-sm uppercase tracking-wide px-2 py-1 transition-colors whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/rezerwacja"
                    className="ml-4 bg-primary-700 hover:bg-primary-800 text-white font-medium text-sm uppercase tracking-wide px-4 py-1.5 rounded transition-colors whitespace-nowrap"
                  >
                    Zarezerwuj
                  </Link>
                </div>
              </>
            )}

            {/* === WERSJA PO PRZEWINIĘCIU === */}
            {isScrolled && (
              <>
                {/* Małe logo po lewej */}
                <div className="hidden lg:block flex-shrink-0 mr-6">
                  <Link href="/" className="block">
                    <Image
                      src="/images/logo/dworbartnika-mini.png"
                      alt="Dwór Bartnika"
                      width={48}
                      height={55}
                      className="h-10 w-auto"
                      priority
                    />
                  </Link>
                </div>

                {/* Wszystkie elementy menu w jednej linii */}
                <div className="hidden lg:flex items-center gap-1 flex-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-primary-400 font-light text-sm uppercase tracking-wide px-2 py-1 transition-colors whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Przycisk rezerwacji po prawej */}
                <div className="hidden lg:block flex-shrink-0">
                  <Link
                    href="/rezerwacja"
                    className="bg-primary-700 hover:bg-primary-800 text-white font-medium text-sm uppercase tracking-wide px-4 py-1.5 rounded transition-colors whitespace-nowrap"
                  >
                    Zarezerwuj
                  </Link>
                </div>
              </>
            )}

            {/* === MOBILE: kompaktowy 1-liniowy header === */}
            <div className="lg:hidden flex items-center justify-between w-full">
              {/* Logo - link do strony głównej */}
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/images/logo/dworbartnika-mini.png"
                  alt="Dwór Bartnika"
                  width={48}
                  height={55}
                  className="h-9 w-auto"
                  priority
                />
              </Link>

              {/* Środek: ikony akcji */}
              <div className="flex items-center gap-1">
                {/* Telefon - najmniej ważny, dyskretny */}
                <a
                  href="tel:+48609850957"
                  className="p-1.5 text-white/70 hover:text-white transition-colors"
                  aria-label="Zadzwoń"
                >
                  <Phone className="w-4 h-4" />
                </a>

                {/* Nawiguj - czerwona kropka + animacja flash przy wejściu */}
                <a
                  href="https://maps.google.com/?q=Dwór+Bartnika,+Hajnowska+2/1,+17-220+Narewka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-1.5 text-white hover:text-primary-400 transition-colors animate-nav-flash"
                  aria-label="Nawiguj do Dworu Bartnika"
                >
                  <MapPin className="w-5 h-5" />
                  <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full border border-gray-900"></span>
                </a>

                {/* Flaga języka */}
                <button 
                  className="p-1 text-white/80 hover:bg-white/10 rounded transition-colors" 
                  aria-label="Zmień język"
                >
                  <span className="text-base leading-none">🇵🇱</span>
                </button>

                {/* Zarezerwuj - NAJWAŻNIEJSZY */}
                <Link
                  href="/rezerwacja"
                  className="ml-1 bg-primary-700 hover:bg-primary-800 text-white text-xs font-bold px-3 py-1.5 rounded shadow-lg transition-all hover:scale-105"
                  style={{ boxShadow: '0 0 12px rgba(138,107,48,0.6)' }}
                >
                  Rezerwuj
                </Link>
              </div>

              {/* Menu hamburger */}
              <button
                className="p-2 text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-sm">
            <div className="container-custom py-4">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-primary-400 font-light uppercase tracking-wide py-3 border-b border-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/rezerwacja"
                  className="btn-primary text-center mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Zarezerwuj
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
