// types.ts - Interfejsy TypeScript dla ofert sezonowych
// =====================================================

import type { OfferSlug } from '../../../offers.config';

// Typ pokoju (dla listy w pakiecie rodzinnym)
export interface RoomType {
  id: string;
  name: string;                    // np. "3-osobowy z balkonem"
  capacity: number;                // liczba osób
  availability: number;            // ile dostępnych
  icon?: string;                   // emoji np. 🌅 dla balkonu
  badge?: string;                  // np. "z balkonem", "z wanną"
}

// Pakiet cenowy w ofercie (np. podstawowy vs rozszerzony)
export interface OfferPackage {
  id: string;
  name: string;                    // np. "Pakiet Podstawowy"
  dateFrom: string;                // np. "2025-12-30"
  dateTo: string;                  // np. "2026-01-02"
  nights: number;                  // liczba nocy
  days?: number;                   // liczba dni (opcjonalnie, jeśli inaczej niż nights+1)
  pricePerPerson: number;          // cena za osobę w zł
  priceNote?: string;              // np. "w pokoju 2+ osobowym"
  highlights?: string[];           // główne atrakcje pakietu
  capacity?: string;               // np. "2-6 osób"
  availability?: number;           // ile pokoi dostępnych
  badge?: string;                  // np. "NAJPOPULARNIEJSZY"
  features?: string[];             // lista cech do porównania w pricing table
  category?: 'couples' | 'family' | 'premium'; // kategoria pakietu
  roomTypes?: RoomType[];          // lista typów pokoi (dla rodzinnych)
  emoji?: string;                  // emoji do karty
  subtitle?: string;               // podtytuł np. "pokoje 2-osobowe"
}

// Element programu (co zawiera oferta)
export interface OfferProgramItem {
  icon?: string;                   // emoji ikona
  title: string;                   // np. "Kolacja wigilijna"
  description?: string;            // szczegóły
}

// Atrakcja ze zdjęciem (do storytelling)
export interface OfferAttraction {
  id: string;
  icon: string;                    // emoji
  title: string;                   // np. "Śniadanie Wielkanocne"
  description: string;             // dłuższy opis marketingowy
  shortDescription?: string;       // krótki opis do karty
  image: string;                   // ścieżka do zdjęcia
  imageAlt?: string;               // alt text
}

// Element harmonogramu
export interface OfferScheduleItem {
  time: string;                    // np. "8:00-10:30"
  title: string;                   // np. "Śniadanie wielkanocne"
  icon?: string;                   // emoji
  description?: string;            // dodatkowy opis
}

// Dzień w harmonogramie
export interface OfferScheduleDay {
  day: string;                     // np. "Piątek 3.04"
  label: string;                   // np. "OPCJA +199 zł"
  isOptional?: boolean;            // czy dzień jest opcjonalny (upsell)
  items: OfferScheduleItem[];
}

// Upsell (np. dodatkowa noc)
export interface OfferUpsell {
  id: string;
  title: string;                   // np. "Dodaj piątek"
  description: string;             // np. "Przyjedź wcześniej i zrelaksuj się w saunie"
  price: number;                   // np. 199
  priceNote: string;               // np. "zł/os"
  highlights: string[];            // co zawiera
  icon?: string;
}

// Główna struktura oferty
export interface Offer {
  // Identyfikacja
  slug: OfferSlug;                 // musi pasować do klucza w offers.config.ts
  
  // SEO & Display
  title: string;                   // np. "Boże Narodzenie 2025"
  shortTitle: string;              // np. "Święta" - do nawigacji
  subtitle?: string;               // np. "Magiczne święta w Puszczy Białowieskiej"
  description: string;             // opis do meta description i karty
  
  // Wizualne
  emoji: string;                   // np. "🎄" - do nawigacji i kart
  heroImage: string;               // ścieżka do zdjęcia głównego
  galleryImages?: string[];        // dodatkowe zdjęcia
  
  // Terminy i ceny
  packages: OfferPackage[];        // pakiety cenowe
  
  // Program/zawartość oferty
  program: OfferProgramItem[];     // co zawiera oferta
  
  // Dodatkowe możliwości (opcjonalne)
  extras?: OfferProgramItem[];     // dodatkowe atrakcje poza pakietem (np. Pasterka, terapia lasem)
  
  // Storytelling - atrakcje ze zdjęciami (opcjonalne)
  attractions?: OfferAttraction[]; // lista atrakcji do storytelling sekcji
  
  // Harmonogram (opcjonalne)
  schedule?: OfferScheduleDay[];   // harmonogram dzień po dniu
  
  // Upsell (opcjonalne)
  upsell?: OfferUpsell;            // dodatkowa opcja (np. +piątek)
  
  // Lista cech do porównania pakietów (opcjonalne)
  comparisonFeatures?: string[];   // np. ["2 noclegi", "2 śniadania", ...]
  
  // Dodatkowe info
  importantInfo?: string[];        // ważne informacje (np. "Dzieci do 3 lat gratis")
  
  // Kontakt
  contact?: {
    phone: string;                 // np. "721 907 000"
    email: string;                 // np. "sapiolko@op.pl"
  };
  
  ctaText?: string;                // tekst przycisku CTA, domyślnie "Zarezerwuj"
  ctaLink?: string;                // link CTA, domyślnie "/rezerwacja"
  
  // Typ layoutu strony
  layout?: 'default' | 'storytelling'; // storytelling = nowy layout z sekcjami
  
  // Daty SEO (dla sitemap)
  publishedAt: string;             // kiedy oferta została opublikowana
  updatedAt: string;               // ostatnia aktualizacja
}

// Typ dla listy ofert
export type OfferList = Offer[];

// Helper type - oferta z podstawowymi danymi do kart
export interface OfferCard {
  slug: OfferSlug;
  title: string;
  shortTitle: string;
  description: string;
  emoji: string;
  heroImage: string;
  priceFrom: number;               // najniższa cena z pakietów
  dateRange: string;               // np. "24-28.12.2025"
}
