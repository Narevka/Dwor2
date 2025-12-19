/**
 * Moduł opinii gości - Social Proof
 * 
 * Struktura plików:
 * - facebook.json     - opinie z Facebook (4.6/5, 78 opinii)
 * - google.json       - opinie z Google Maps (4.5/5, 823 opinie)
 * - tripadvisor.json  - opinie z TripAdvisor (4.4/5, 39 opinii)
 * - agoda.json        - opinie z Agoda (9.1/10, 211 opinii)
 * - booking.json      - opinie z Booking.com (9/10, 212 opinii)
 * - nocowanie.json    - opinie z nocowanie.pl (9.9/10, 6 opinii)
 * 
 * PODSUMOWANIE: 1369 opinii łącznie, średnia ważona 9.03/10
 * 
 * Ostatnia aktualizacja: 2025-12-09
 * 
 * Aby dodać nowe opinie:
 * 1. Edytuj odpowiedni plik JSON (np. facebook.json)
 * 2. Dodaj nową opinię do tablicy "reviews"
 * 3. Pamiętaj o anonimizacji (tylko inicjały nazwiska, np. "Jan K.")
 * 4. Zaktualizuj pole "_meta.lastUpdated" na aktualną datę
 * 5. Nie dodawaj opinii negatywnych ani pustych
 */

import facebookData from './facebook.json';
import googleData from './google.json';
import bookingData from './booking.json';
import agodaData from './agoda.json';
import tripadvisorData from './tripadvisor.json';
import nocowanieData from './nocowanie.json';

// ============================================
// TYPY
// ============================================

export type ReviewSource = 'google' | 'booking' | 'facebook' | 'agoda' | 'tripadvisor' | 'nocowanie';

export type ReviewLanguage = 'pl' | 'en' | 'de' | 'ru' | 'it' | 'fr' | 'cs' | 'no';

export interface Review {
  id: string;
  source: ReviewSource;
  author: string;
  authorInitials: string;
  rating: number; // 1-5 (Booking/Agoda przeliczone z 10)
  text: string;
  date: string; // ISO format YYYY-MM-DD
  tags?: string[];
  language?: ReviewLanguage; // język opinii (domyślnie 'pl')
}

export interface PlatformStats {
  source: ReviewSource;
  name: string;
  rating: number;
  ratingMax: number;
  reviewCount: number;
  url: string;
  lastUpdated: string;
}

// ============================================
// STATYSTYKI PLATFORM (kolejność wyświetlania)
// ============================================

// Podsumowanie wszystkich platform
export const totalStats = {
  totalReviews: 1369,
  weightedAverage: 9.03,
  weightedAverageMax: 10,
};

export const platformStats: PlatformStats[] = [
  {
    source: 'facebook',
    name: facebookData._meta.sourceName,
    rating: facebookData._meta.rating,
    ratingMax: facebookData._meta.ratingMax,
    reviewCount: facebookData._meta.totalReviews,
    url: facebookData._meta.sourceUrl,
    lastUpdated: facebookData._meta.lastUpdated,
  },
  {
    source: 'google',
    name: googleData._meta.sourceName,
    rating: googleData._meta.rating,
    ratingMax: googleData._meta.ratingMax,
    reviewCount: googleData._meta.totalReviews,
    url: googleData._meta.sourceUrl,
    lastUpdated: googleData._meta.lastUpdated,
  },
  {
    source: 'tripadvisor',
    name: tripadvisorData._meta.sourceName,
    rating: tripadvisorData._meta.rating,
    ratingMax: tripadvisorData._meta.ratingMax,
    reviewCount: tripadvisorData._meta.totalReviews,
    url: tripadvisorData._meta.sourceUrl,
    lastUpdated: tripadvisorData._meta.lastUpdated,
  },
  {
    source: 'agoda',
    name: agodaData._meta.sourceName,
    rating: agodaData._meta.rating,
    ratingMax: agodaData._meta.ratingMax,
    reviewCount: agodaData._meta.totalReviews,
    url: agodaData._meta.sourceUrl,
    lastUpdated: agodaData._meta.lastUpdated,
  },
  {
    source: 'booking',
    name: bookingData._meta.sourceName,
    rating: bookingData._meta.rating,
    ratingMax: bookingData._meta.ratingMax,
    reviewCount: bookingData._meta.totalReviews,
    url: bookingData._meta.sourceUrl,
    lastUpdated: bookingData._meta.lastUpdated,
  },
  {
    source: 'nocowanie',
    name: nocowanieData._meta.sourceName,
    rating: nocowanieData._meta.rating,
    ratingMax: nocowanieData._meta.ratingMax,
    reviewCount: nocowanieData._meta.totalReviews,
    url: nocowanieData._meta.sourceUrl,
    lastUpdated: nocowanieData._meta.lastUpdated,
  },
];

// ============================================
// WSZYSTKIE OPINIE (połączone z JSONów)
// ============================================

function mapReviews(data: typeof facebookData, source: ReviewSource): Review[] {
  return data.reviews.map((review) => ({
    ...review,
    source,
    tags: review.tags || [],
  })) as Review[];
}

export const reviews: Review[] = [
  ...mapReviews(facebookData, 'facebook'),
  ...mapReviews(googleData, 'google'),
  ...mapReviews(bookingData, 'booking'),
  ...mapReviews(agodaData, 'agoda'),
  ...mapReviews(tripadvisorData, 'tripadvisor'),
  ...mapReviews(nocowanieData, 'nocowanie'),
];

// ============================================
// FUNKCJE POMOCNICZE
// ============================================

/**
 * Filtruje i sortuje opinie według podanych kryteriów
 */
export function filterReviews(
  reviewsList: Review[],
  filters: {
    source?: ReviewSource | 'all';
    minRating?: number;
    year?: number | 'all'; // filtr po roku
    language?: ReviewLanguage | 'all'; // filtr po języku
    sortBy?: 'newest' | 'oldest' | 'best'; // best = 5★ najpierw, potem 4★, każda grupa od najnowszych
    limit?: number; // max liczba opinii do zwrócenia
    interleave?: boolean; // czy mieszać źródła na przemian (dla "wszystkie")
  }
): Review[] {
  let filtered = [...reviewsList];

  // Filtruj po źródle
  if (filters.source && filters.source !== 'all') {
    filtered = filtered.filter((r) => r.source === filters.source);
  }

  // Filtruj po języku
  if (filters.language && filters.language !== 'all') {
    filtered = filtered.filter((r) => (r.language || 'pl') === filters.language);
  }

  // Filtruj po roku
  if (filters.year && filters.year !== 'all') {
    filtered = filtered.filter((r) => new Date(r.date).getFullYear() === filters.year);
  }

  // Filtruj po minimalnej ocenie
  if (filters.minRating) {
    const minRating = filters.minRating;
    filtered = filtered.filter((r) => r.rating >= minRating);
  }

  // Sortowanie
  if (filters.sortBy === 'best') {
    // 5★ najpierw, potem 4★, w każdej grupie od najnowszych
    filtered.sort((a, b) => {
      if (b.rating !== a.rating) return b.rating - a.rating;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } else if (filters.sortBy === 'newest') {
    filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } else if (filters.sortBy === 'oldest') {
    filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }

  // Mieszaj źródła na przemian (po sortowaniu)
  if (filters.interleave && (!filters.source || filters.source === 'all')) {
    filtered = interleaveBySource(filtered);
  }

  // Ogranicz liczbę opinii
  if (filters.limit && filters.limit > 0) {
    filtered = filtered.slice(0, filters.limit);
  }

  return filtered;
}

/**
 * Miesza opinie z różnych źródeł na przemian
 * Wynik: FB, Google, Booking, Agoda, TripAdvisor, nocowanie, FB...
 */
function interleaveBySource(reviewsList: Review[]): Review[] {
  const sources: ReviewSource[] = ['facebook', 'google', 'booking', 'agoda', 'tripadvisor', 'nocowanie'];
  const bySource: Record<ReviewSource, Review[]> = {
    facebook: [],
    google: [],
    booking: [],
    agoda: [],
    tripadvisor: [],
    nocowanie: [],
  };

  // Grupuj po źródle (zachowaj kolejność z sortowania)
  for (const review of reviewsList) {
    bySource[review.source].push(review);
  }

  // Mieszaj na przemian
  const result: Review[] = [];
  const maxLength = Math.max(...sources.map((s) => bySource[s].length));
  
  for (let i = 0; i < maxLength; i++) {
    for (const source of sources) {
      if (bySource[source][i]) {
        result.push(bySource[source][i]);
      }
    }
  }

  return result;
}

/**
 * Formatuje datę po polsku (np. "lipca 2025")
 */
export function formatReviewDate(dateString: string): string {
  const date = new Date(dateString);
  const months = [
    'stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca',
    'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'
  ];
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

/**
 * Pobiera statystyki dla konkretnej platformy
 */
export function getPlatformStats(source: ReviewSource): PlatformStats | undefined {
  return platformStats.find((p) => p.source === source);
}

/**
 * Pobiera liczbę opinii dla danego źródła
 */
export function getReviewCount(source: ReviewSource | 'all'): number {
  if (source === 'all') {
    return reviews.length;
  }
  return reviews.filter((r) => r.source === source).length;
}

/**
 * Mapowanie języków na nazwy wyświetlane i flagi
 */
export const languageInfo: Record<ReviewLanguage, { name: string; flag: string }> = {
  pl: { name: 'Polski', flag: '🇵🇱' },
  en: { name: 'English', flag: '🇬🇧' },
  de: { name: 'Deutsch', flag: '🇩🇪' },
  ru: { name: 'Русский', flag: '🇷🇺' },
  it: { name: 'Italiano', flag: '🇮🇹' },
  fr: { name: 'Français', flag: '🇫🇷' },
  cs: { name: 'Čeština', flag: '🇨🇿' },
  no: { name: 'Norsk', flag: '🇳🇴' },
};

/**
 * Pobiera dostępne języki z listy opinii (tylko te które mają przynajmniej jedną opinię)
 */
export function getAvailableLanguages(reviewsList: Review[]): ReviewLanguage[] {
  const languages = new Set<ReviewLanguage>();
  for (const review of reviewsList) {
    languages.add(review.language || 'pl');
  }
  // Sortuj: polski pierwszy, potem reszta alfabetycznie
  const sorted = Array.from(languages).sort((a, b) => {
    if (a === 'pl') return -1;
    if (b === 'pl') return 1;
    return languageInfo[a].name.localeCompare(languageInfo[b].name);
  });
  return sorted;
}

/**
 * Pobiera liczbę opinii dla danego języka
 * Dla polskiego - zwraca totalReviews minus suma obcojęzycznych (bo większość 1300+ to polskie)
 * Dla innych języków - zwraca faktyczną liczbę w JSONach
 */
export function getLanguageReviewCount(language: ReviewLanguage | 'all', reviewsList?: Review[]): number {
  const list = reviewsList || reviews;
  if (language === 'all') {
    return totalStats.totalReviews;
  }
  
  // Dla polskiego: totalReviews - suma obcojęzycznych
  if (language === 'pl') {
    const foreignCount = list.filter((r) => r.language && r.language !== 'pl').length;
    return totalStats.totalReviews - foreignCount;
  }
  
  // Dla innych języków: faktyczna liczba w JSONach
  return list.filter((r) => r.language === language).length;
}

/**
 * Pobiera liczbę opinii dla danego języka w JSONach (faktyczna, nie obliczona)
 */
export function getLoadedLanguageReviewCount(language: ReviewLanguage | 'all', reviewsList?: Review[]): number {
  const list = reviewsList || reviews;
  if (language === 'all') {
    return list.length;
  }
  return list.filter((r) => (r.language || 'pl') === language).length;
}
