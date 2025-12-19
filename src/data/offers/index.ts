// index.ts - Główny eksport ofert
// ================================
// Ten plik eksportuje oferty na podstawie konfiguracji w offers.config.ts

import { 
  offersConfig, 
  isOfferActive, 
  getActiveOfferSlugs, 
  getAllOfferSlugs,
  hasActiveOffers,
  type OfferSlug 
} from '../../../offers.config';
import type { Offer, OfferCard, OfferList } from './types';

// Import wszystkich ofert
import { bozeNarodzenie2025 } from './boze-narodzenie-2025';
import { sylwester2025 } from './sylwester-2025';
import { wielkanoc2026 } from './wielkanoc-2026';

// Mapa wszystkich ofert (slug -> oferta)
const allOffersMap: Record<OfferSlug, Offer> = {
  'boze-narodzenie-2025': bozeNarodzenie2025,
  'sylwester-2025': sylwester2025,
  'wielkanoc-2026': wielkanoc2026,
};

// ===========================================
// EKSPORTY DLA UŻYTKOWNIKÓW (respektują ON/OFF)
// ===========================================

/**
 * Pobierz wszystkie AKTYWNE oferty (dla użytkowników)
 */
export function getActiveOffers(): OfferList {
  return getActiveOfferSlugs().map((slug) => allOffersMap[slug]);
}

/**
 * Pobierz pojedynczą ofertę po slug (tylko jeśli aktywna)
 * Zwraca null jeśli oferta jest OFF lub nie istnieje
 */
export function getActiveOffer(slug: string): Offer | null {
  if (!isValidOfferSlug(slug)) return null;
  if (!isOfferActive(slug as OfferSlug)) return null;
  return allOffersMap[slug as OfferSlug];
}

/**
 * Sprawdź czy są jakiekolwiek aktywne oferty
 */
export { hasActiveOffers };

// ===========================================
// EKSPORTY DLA SEO/CRAWLERÓW (ignorują ON/OFF)
// ===========================================

/**
 * Pobierz WSZYSTKIE oferty (dla sitemap - SEO)
 * Crawlery widzą wszystkie oferty, nawet te wyłączone
 */
export function getAllOffers(): OfferList {
  return getAllOfferSlugs().map((slug) => allOffersMap[slug]);
}

/**
 * Pobierz pojedynczą ofertę po slug (niezależnie od statusu ON/OFF)
 * Używane przez generateStaticParams do pre-renderowania wszystkich stron
 */
export function getOffer(slug: string): Offer | null {
  if (!isValidOfferSlug(slug)) return null;
  return allOffersMap[slug as OfferSlug];
}

/**
 * Pobierz wszystkie slugi ofert (dla generateStaticParams)
 */
export function getAllOfferSlugsForStaticParams(): string[] {
  return getAllOfferSlugs();
}

// ===========================================
// HELPERY
// ===========================================

/**
 * Sprawdź czy slug jest prawidłowy
 */
export function isValidOfferSlug(slug: string): slug is OfferSlug {
  return slug in offersConfig;
}

/**
 * Konwertuj ofertę na OfferCard (do wyświetlania w listach)
 */
export function offerToCard(offer: Offer): OfferCard {
  // Znajdź najniższą cenę z pakietów
  const priceFrom = Math.min(...offer.packages.map((p) => p.pricePerPerson));
  
  // Stwórz czytelny zakres dat
  const firstPackage = offer.packages[0];
  const dateRange = formatDateRange(firstPackage.dateFrom, firstPackage.dateTo);
  
  return {
    slug: offer.slug,
    title: offer.title,
    shortTitle: offer.shortTitle,
    description: offer.description,
    emoji: offer.emoji,
    heroImage: offer.heroImage,
    priceFrom,
    dateRange,
  };
}

/**
 * Pobierz aktywne oferty jako karty
 */
export function getActiveOfferCards(): OfferCard[] {
  return getActiveOffers().map(offerToCard);
}

/**
 * Formatuj zakres dat do czytelnej formy
 */
function formatDateRange(from: string, to: string): string {
  const fromDate = new Date(from);
  const toDate = new Date(to);
  
  const fromDay = fromDate.getDate();
  const toDay = toDate.getDate();
  const fromMonth = fromDate.getMonth() + 1;
  const toMonth = toDate.getMonth() + 1;
  const fromYear = fromDate.getFullYear();
  const toYear = toDate.getFullYear();
  
  // Ten sam miesiąc i rok
  if (fromMonth === toMonth && fromYear === toYear) {
    return `${fromDay}-${toDay}.${String(fromMonth).padStart(2, '0')}.${fromYear}`;
  }
  
  // Różne miesiące ale ten sam rok
  if (fromYear === toYear) {
    return `${fromDay}.${String(fromMonth).padStart(2, '0')}-${toDay}.${String(toMonth).padStart(2, '0')}.${fromYear}`;
  }
  
  // Różne lata (np. Sylwester)
  return `${fromDay}.${String(fromMonth).padStart(2, '0')}.${fromYear}-${toDay}.${String(toMonth).padStart(2, '0')}.${toYear}`;
}

/**
 * Pobierz dane do nawigacji (dla Header.tsx)
 * 
 * LOGIKA:
 * - 0 ofert aktywnych = null (nie pokazuj w menu)
 * - 1 oferta aktywna = link bezpośrednio do niej + jej shortTitle
 * - 2+ ofert aktywnych = link do /oferty + "Oferty Specjalne"
 */
export function getOffersNavData(): { 
  hasOffers: boolean; 
  emoji: string; 
  label: string;
  href: string;
} | null {
  const activeOffers = getActiveOffers();
  
  if (activeOffers.length === 0) {
    return null;
  }
  
  // Tylko 1 oferta - link bezpośrednio do niej
  if (activeOffers.length === 1) {
    const offer = activeOffers[0];
    return {
      hasOffers: true,
      emoji: offer.emoji,
      label: offer.shortTitle,  // np. "Święta", "Sylwester", "Wielkanoc"
      href: `/oferty/${offer.slug}`,  // bezpośredni link do oferty
    };
  }
  
  // 2+ ofert - link do listy
  return {
    hasOffers: true,
    emoji: '🎁',
    label: 'Oferty Specjalne',
    href: '/oferty',
  };
}

// Re-eksporty typów
export type { Offer, OfferCard, OfferList, OfferPackage, OfferProgramItem } from './types';
