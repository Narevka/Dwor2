// offers.config.ts - PLIK KONFIGURACYJNY OFERT
// ============================================
// Zmień ON/OFF żeby włączyć/wyłączyć ofertę dla użytkowników
// Crawlery (Google, ChatGPT) zawsze widzą wszystkie oferty w sitemap
// 
// Jak dodać nową ofertę:
// 1. Utwórz plik w src/data/offers/nazwa-oferty.ts
// 2. Dodaj wpis tutaj z wartością 'ON' lub 'OFF'
// 3. Oferta pojawi się automatycznie w nawigacji i na stronie /oferty

export const offersConfig = {
  'boze-narodzenie-2025': 'OFF',  // 🎄 Święta Bożego Narodzenia 2025
  'sylwester-2025': 'OFF',        // 🎆 Sylwester 2025/2026
  'wielkanoc-2026': 'ON',         // 🐣 Wielkanoc 2026
} as const;

// Typ pomocniczy dla kluczy ofert
export type OfferSlug = keyof typeof offersConfig;

// Czy jest włączona dana oferta
export type OfferStatus = 'ON' | 'OFF';

// Czy pokazać sekcję "Oferty Specjalne" w nawigacji
// Ustawione na true = pokazuje gdy są jakiekolwiek aktywne oferty
// Ustawione na false = nigdy nie pokazuje (nawet gdy są aktywne)
export const showOffersInNav = true;

// Helper: sprawdza czy oferta jest aktywna
export function isOfferActive(slug: OfferSlug): boolean {
  return offersConfig[slug] === 'ON';
}

// Helper: zwraca listę aktywnych slugów
export function getActiveOfferSlugs(): OfferSlug[] {
  return (Object.keys(offersConfig) as OfferSlug[]).filter(
    (slug) => offersConfig[slug] === 'ON'
  );
}

// Helper: zwraca listę WSZYSTKICH slugów (dla sitemap - SEO)
export function getAllOfferSlugs(): OfferSlug[] {
  return Object.keys(offersConfig) as OfferSlug[];
}

// Helper: czy są jakiekolwiek aktywne oferty
export function hasActiveOffers(): boolean {
  return getActiveOfferSlugs().length > 0;
}
