// wielkanoc-2026.ts - Oferta wielkanocna 2026
// ===========================================

import type { Offer } from './types';

export const wielkanoc2026: Offer = {
  slug: 'wielkanoc-2026',
  layout: 'storytelling', // nowy layout z sekcjami
  
  // SEO & Display
  title: 'Wielkanoc 2025 w Puszczy Białowieskiej',
  shortTitle: 'Wielkanoc',
  subtitle: '19-21 kwietnia 2025 | Puszcza Białowieska',
  description: 'Wielkanoc 2025 w Puszczy Białowieskiej. Pakiet świąteczny ze śniadaniem wielkanocnym, atrakcjami dla dzieci i degustacją miodu. Zarezerwuj pobyt w Dworze Bartnika.',
  
  // Wizualne
  // TODO: Podmień na własne zdjęcia wielkanocne!
  emoji: '🐣',
  heroImage: '/images/new/ofert4.jpg', // placeholder - podmień na wielkanoc-hero.jpg
  galleryImages: [
    '/images/restauracja/restauracja.webp',
    '/images/hotel/plac2.webp',
    '/images/atrakcje/ognisko.webp',
  ],
  
  // ═══════════════════════════════════════════════════════════════════
  // PAKIETY CENOWE (pricing table)
  // ═══════════════════════════════════════════════════════════════════
  packages: [
    // PAKIET DLA PAR (2-osobowe)
    {
      id: 'couples',
      name: 'Dla Par',
      subtitle: 'pokoje 2-osobowe',
      emoji: '💑',
      category: 'couples',
      dateFrom: '2025-04-19',
      dateTo: '2025-04-21',
      nights: 2,
      days: 3,
      pricePerPerson: 749,
      priceNote: 'cena za osobę',
      capacity: '2 osoby',
      availability: 14,
      features: [
        '2 noclegi',
        '2 śniadania (w tym wielkanocne)',
        'Obiadokolacja świąteczna',
        '2× Ognisko z grzańcem',
        'Kasyno miodowe',
        'Muzeum Pszczelarstwa',
        'Kawa z plastrem miodu',
        'Ścianka foto',
      ],
      highlights: [
        '2 noclegi ze śniadaniami',
        'Obiadokolacja świąteczna',
        '2× ognisko z grzańcem',
        'Kasyno miodowe + Muzeum',
        'Romantyczny wypoczynek we dwoje',
      ],
    },
    // PAKIET DLA RODZIN (3+ osobowe)
    {
      id: 'family',
      name: 'Dla Rodzin',
      subtitle: 'pokoje 3-6 osobowe',
      emoji: '👨‍👩‍👧‍👦',
      category: 'family',
      dateFrom: '2025-04-19',
      dateTo: '2025-04-21',
      nights: 2,
      days: 3,
      pricePerPerson: 799,
      priceNote: 'cena za osobę',
      capacity: '3-6 osób',
      availability: 12,
      features: [
        '2 noclegi',
        '2 śniadania (w tym wielkanocne)',
        'Obiadokolacja świąteczna',
        '2× Ognisko z grzańcem',
        'Kasyno miodowe',
        'Muzeum Pszczelarstwa',
        'Kawa z plastrem miodu',
        'Ścianka foto',
        'Szukanie jajeczek',
        'Turniej szachowy',
        'Google VR',
        'Plac zabaw',
      ],
      highlights: [
        '2 noclegi ze śniadaniami',
        'Obiadokolacja świąteczna',
        '2× ognisko z grzańcem',
        'Szukanie jajeczek dla dzieci 🐰',
        'Turniej na wielkich szachach ♟️',
        'Google VR dla całej rodziny 🎮',
      ],
      // Lista typów pokoi rodzinnych
      roomTypes: [
        { id: '3os-balkon', name: '3-osobowy z balkonem', capacity: 3, availability: 1, icon: '🌅', badge: 'z balkonem' },
        { id: '4os-standard', name: '4-osobowy standard', capacity: 4, availability: 3 },
        { id: '4os-balkon', name: '4-osobowy z balkonem', capacity: 4, availability: 2, icon: '🌅', badge: 'z balkonem' },
        { id: '4os-wanna', name: '4-osobowy z wanną', capacity: 4, availability: 1, icon: '🛁', badge: 'z wanną' },
        { id: '4os-wieza', name: '4-osobowy w wieży', capacity: 4, availability: 1, icon: '🏰', badge: 'w wieży' },
        { id: '5os', name: '5-osobowy', capacity: 5, availability: 1 },
        { id: '6os', name: '6-osobowy', capacity: 6, availability: 1, badge: 'największy!' },
      ],
    },
    // APARTAMENT Z SAUNĄ (premium)
    {
      id: 'sauna',
      name: 'Apartament z Sauną',
      subtitle: 'prywatna sauna fińska',
      emoji: '🧖',
      category: 'premium',
      dateFrom: '2026-04-04',
      dateTo: '2026-04-06',
      nights: 2,
      days: 3,
      pricePerPerson: 899,
      priceNote: 'cena za osobę',
      capacity: '2-3 osoby',
      availability: 1,
      badge: 'OSTATNI!',
      features: [
        '2 noclegi',
        '2 śniadania (w tym wielkanocne)',
        'Obiadokolacja świąteczna',
        '2× Ognisko z grzańcem',
        'Kasyno miodowe',
        'Muzeum Pszczelarstwa',
        'Kawa z plastrem miodu',
        'Ścianka foto',
        'Szukanie jajeczek',
        'Turniej szachowy',
        'Google VR',
        'Plac zabaw',
        'Prywatna sauna fińska',
      ],
      highlights: [
        'Wszystko z pakietu rodzinnego',
        'Prywatna sauna fińska',
        'Luksusowe wnętrze',
      ],
    },
    // APARTAMENT Z JACUZZI (premium)
    {
      id: 'jacuzzi',
      name: 'Apartament z Jacuzzi',
      subtitle: 'prywatne jacuzzi',
      emoji: '🛁',
      category: 'premium',
      dateFrom: '2025-04-19',
      dateTo: '2025-04-21',
      nights: 2,
      days: 3,
      pricePerPerson: 999,
      priceNote: 'cena za osobę',
      capacity: '2-5 osób',
      availability: 1,
      badge: 'OSTATNI!',
      features: [
        '2 noclegi',
        '2 śniadania (w tym wielkanocne)',
        'Obiadokolacja świąteczna',
        '2× Ognisko z grzańcem',
        'Kasyno miodowe',
        'Muzeum Pszczelarstwa',
        'Kawa z plastrem miodu',
        'Ścianka foto',
        'Szukanie jajeczek',
        'Turniej szachowy',
        'Google VR',
        'Plac zabaw',
        'Prywatne jacuzzi',
      ],
      highlights: [
        'Wszystko z pakietu rodzinnego',
        'Prywatne jacuzzi',
        'Najwyższy standard',
      ],
    },
  ],
  
  // Lista cech do porównania w pricing table (PARY vs RODZINY)
  comparisonFeatures: [
    '2 noclegi',
    '2 śniadania (w tym wielkanocne)',
    'Obiadokolacja świąteczna',
    '2× Ognisko z grzańcem',
    'Kasyno miodowe',
    'Muzeum Pszczelarstwa',
    'Kawa z plastrem miodu',
    'Szukanie jajeczek 🐰',
    'Turniej szachowy ♟️',
    'Google VR 🎮',
  ],
  
  // ═══════════════════════════════════════════════════════════════════
  // UPSELL - dodatkowa noc (piątek)
  // ═══════════════════════════════════════════════════════════════════
  upsell: {
    id: 'piatek',
    title: 'Dodaj piątek',
    description: 'Przyjedź wcześniej, zrelaksuj się w saunie zewnętrznej i miej całą sobotę na zwiedzanie żubrów!',
    price: 199,
    priceNote: 'zł/os',
    icon: '🧖',
    highlights: [
      'Dodatkowy nocleg (piątek 18.04)',
      'Śniadanie w sobotę rano',
      'Sauna zewnętrzna wieczorem',
      'Więcej czasu na zwiedzanie',
    ],
  },
  
  // ═══════════════════════════════════════════════════════════════════
  // ATRAKCJE (storytelling sekcje ze zdjęciami)
  // TODO: Podmień na własne zdjęcia wielkanocne w /images/offers/
  // ═══════════════════════════════════════════════════════════════════
  attractions: [
    {
      id: 'sniadanie',
      icon: '🥚',
      title: 'Śniadanie Wielkanocne',
      shortDescription: 'Tradycyjne święcone z regionalnymi specjałami',
      description: 'Rozpocznij Niedzielę Wielkanocną od wyjątkowego śniadania w naszej restauracji. Tradycyjne święcone, domowe wędliny, świeże pieczywo, lokalne sery i regionalne specjały Podlasia. Wszystko przygotowane z miłością według tradycyjnych receptur.',
      image: '/images/restauracja/restauracja.webp', // TODO: wielkanoc-sniadanie.jpg
      imageAlt: 'Śniadanie wielkanocne w Dworze Bartnika',
    },
    {
      id: 'jajeczka',
      icon: '🐰',
      title: 'Szukanie Jajeczek',
      shortDescription: 'Wielkanocna zabawa dla dzieci w ogrodzie',
      description: 'Największa atrakcja dla najmłodszych! W niedzielny poranek Zajączek Wielkanocny ukryje w naszym ogrodzie kolorowe jajeczka ze słodkościami. Dzieci wyruszą na poszukiwanie skarbów wśród wiosennych kwiatów i krzewów. Każdy mały poszukiwacz wróci z pełnym koszykiem!',
      image: '/images/sections/ogrodo1.webp', // TODO: wielkanoc-jajeczka.jpg
      imageAlt: 'Dzieci szukające jajeczek wielkanocnych',
    },
    {
      id: 'kasyno',
      icon: '🍯',
      title: 'Kasyno Miodowe',
      shortDescription: 'Degustacja miodów pitnych',
      description: 'Odkryj tajemnice tradycyjnych miodów pitnych podczas wyjątkowej degustacji. Półtorak, dwójniak, trójniak – poznaj różnice między nimi i dowiedz się, jak powstają te szlachetne trunki. Nasi eksperci opowiedzą historię miodosytnictwa w regionie Puszczy Białowieskiej.',
      image: '/images/muzeum/muzeum.webp', // TODO: wielkanoc-kasyno.jpg
      imageAlt: 'Degustacja miodów pitnych w Dworze Bartnika',
    },
    {
      id: 'ognisko',
      icon: '🔥',
      title: 'Ognisko pod Gwiazdami',
      shortDescription: 'Wieczorne spotkanie z grzańcem i kiełbaskami',
      description: 'Dwa wieczory przy ognisku! Sobota i niedziela to czas na wspólne chwile przy trzaskającym ogniu. Grzaniec rozgrzeje od środka, a pieczone kiełbaski smakują najlepiej pod gwiazdami. Idealne miejsce na rozmowy i budowanie rodzinnych wspomnień.',
      image: '/images/atrakcje/ognisko.webp', // Dobre zdjęcie!
      imageAlt: 'Ognisko wieczorem w Dworze Bartnika',
    },
    {
      id: 'muzeum',
      icon: '🐝',
      title: 'Muzeum Pszczelarstwa',
      shortDescription: 'Zwiedzanie z przewodnikiem + degustacja',
      description: 'Jedyne takie muzeum w Polsce! Poznaj fascynującą historię bartnictwa i pszczelarstwa w Puszczy Białowieskiej. Zobaczysz autentyczne barcie, stare ule i narzędzia pszczelarskie. Na koniec degustacja różnych gatunków miodu prosto z naszej pasieki.',
      image: '/images/muzeum/m2.jpg', // TODO: wielkanoc-muzeum.jpg
      imageAlt: 'Muzeum Pszczelarstwa w Dworze Bartnika',
    },
    {
      id: 'vr',
      icon: '🎮',
      title: 'Google VR',
      shortDescription: 'Wirtualna rzeczywistość dla całej rodziny',
      description: 'Nowoczesna rozrywka dla całej rodziny! Załóż gogle VR i przenieś się do wirtualnego świata. Spaceruj po egzotycznych miejscach, pływaj z delfinami lub zwiedzaj kosmiczne stacje. Sesje dla dzieci i dorosłych w bezpiecznym środowisku.',
      image: '/images/atrakcje/melex.webp', // TODO: wielkanoc-vr.jpg
      imageAlt: 'Google VR w Dworze Bartnika',
    },
    {
      id: 'szachy',
      icon: '♟️',
      title: 'Turniej na Wielkich Szachach',
      shortDescription: 'Pionki wielkości metra!',
      description: 'Unikalna atrakcja – szachy z pionkami sięgającymi do pasa! Zorganizujemy turniej dla chętnych gości. Nawet jeśli nie znasz zasad, pokażemy Ci podstawy. Świetna zabawa dla dzieci i dorosłych, która ćwiczy umysł i dostarcza mnóstwo śmiechu.',
      image: '/images/hotel/szach.jpg', // Dobre zdjęcie!
      imageAlt: 'Wielkie szachy w ogrodzie Dworu Bartnika',
    },
    {
      id: 'puszcza',
      icon: '🦬',
      title: 'Puszcza i Żubry',
      shortDescription: 'Wycieczka do serca Puszczy Białowieskiej',
      description: 'Jesteśmy w sercu jednego z najpiękniejszych miejsc w Polsce! W pobliżu znajduje się Rezerwat Pokazowy Żubrów, gdzie możesz zobaczyć króla puszczy na własne oczy. Chętnie podpowiemy najlepsze szlaki spacerowe i miejsca, które warto odwiedzić.',
      image: '/images/atrakcje/zubry.jpg', // Dobre zdjęcie!
      imageAlt: 'Żubry w Puszczy Białowieskiej',
    },
    {
      id: 'sauna-zewn',
      icon: '🧖',
      title: 'Sauna Zewnętrzna',
      shortDescription: 'Relaks w piątkowy wieczór (opcja +199 zł)',
      description: 'Dla gości, którzy przyjadą w piątek – wyjątkowy wieczór w saunie zewnętrznej! Po podróży nic tak nie regeneruje jak sesja w rozgrzanej saunie. Idealne połączenie relaksu i przygotowania do świątecznego weekendu. Dostępne w opcji +199 zł/os.',
      image: '/images/atrakcje/sauna.jpg', // Dobre zdjęcie!
      imageAlt: 'Sauna zewnętrzna w Dworze Bartnika',
    },
  ],
  
  // ═══════════════════════════════════════════════════════════════════
  // HARMONOGRAM (timeline)
  // ═══════════════════════════════════════════════════════════════════
  schedule: [
    {
      day: 'Piątek 18.04',
      label: 'OPCJA +199 zł',
      isOptional: true,
      items: [
        { time: '15:00-20:00', title: 'Przyjazdy', icon: '🚗', description: 'Zakwaterowanie w pokojach' },
        { time: '18:00-21:00', title: 'Muzeum + VR', icon: '🐝', description: 'Dla przyjeżdżających gości' },
        { time: '20:00-22:00', title: 'Sauna zewnętrzna', icon: '🧖', description: 'Relaks po podróży' },
      ],
    },
    {
      day: 'Sobota 19.04',
      label: 'Wielka Sobota',
      isOptional: false,
      items: [
        { time: '8:00-10:30', title: 'Śniadanie', icon: '🥐', description: 'Bufet śniadaniowy' },
        { time: '10:30-13:00', title: 'Wycieczka do żubrów', icon: '🦬', description: 'Dla gości z piątku (opcja)' },
        { time: '14:00-17:00', title: 'Przyjazdy', icon: '🚗', description: 'Zakwaterowanie (pakiet 2-nocny)' },
        { time: '15:00-18:00', title: 'Muzeum Pszczelarstwa', icon: '🐝', description: 'Zwiedzanie dla wszystkich' },
        { time: '16:00-18:30', title: 'Kasyno miodowe', icon: '🍯', description: 'Degustacja miodów pitnych' },
        { time: '19:30-22:00', title: 'Ognisko #1', icon: '🔥', description: 'Kiełbaski, grzaniec, muzyka' },
      ],
    },
    {
      day: 'Niedziela 20.04',
      label: 'Wielkanoc',
      isOptional: false,
      items: [
        { time: '8:00-10:30', title: 'Śniadanie Wielkanocne', icon: '🥚', description: 'Świąteczny bufet' },
        { time: '10:30-12:00', title: 'Szukanie jajeczek', icon: '🐰', description: 'Zabawa dla dzieci' },
        { time: '11:00-13:00', title: 'Turniej szachowy', icon: '♟️', description: 'Wielkie szachy w ogrodzie' },
        { time: '11:00-13:00', title: 'Google VR', icon: '🎮', description: 'Sesje dla chętnych' },
        { time: '14:00-16:00', title: 'Obiadokolacja świąteczna', icon: '🍽️', description: 'Główny posiłek dnia' },
        { time: '16:00-18:00', title: 'Czas wolny', icon: '🌲', description: 'Spacer, plac zabaw, relaks' },
        { time: '19:00-21:30', title: 'Ognisko #2', icon: '🔥', description: 'Pożegnalny wieczór' },
      ],
    },
    {
      day: 'Poniedziałek 21.04',
      label: 'Wymeldowanie',
      isOptional: false,
      items: [
        { time: '8:00-10:00', title: 'Śniadanie', icon: '🥐', description: 'Ostatni posiłek' },
        { time: '10:00-12:00', title: 'Wymeldowanie', icon: '👋', description: 'Do zobaczenia!' },
      ],
    },
  ],
  
  // Program oferty (kompatybilność wsteczna)
  program: [
    {
      icon: '🥚',
      title: 'Śniadanie wielkanocne',
      description: 'Tradycyjne święcone z regionalnymi specjałami',
    },
    {
      icon: '🐰',
      title: 'Szukanie jajeczek',
      description: 'Wielkanocna zabawa dla dzieci w ogrodzie',
    },
    {
      icon: '🍯',
      title: 'Kasyno miodowe',
      description: 'Degustacja miodów pitnych',
    },
    {
      icon: '🔥',
      title: '2× Ognisko',
      description: 'Wieczorne spotkania z grzańcem i kiełbaskami',
    },
    {
      icon: '🐝',
      title: 'Muzeum Pszczelarstwa',
      description: 'Zwiedzanie z przewodnikiem + degustacja',
    },
    {
      icon: '🎮',
      title: 'Google VR',
      description: 'Wirtualna rzeczywistość dla całej rodziny',
    },
    {
      icon: '♟️',
      title: 'Turniej szachowy',
      description: 'Wielkie szachy z pionkami wielkości metra',
    },
    {
      icon: '☕',
      title: 'Kawa z plastrem miodu',
      description: 'Wyjątkowa kawa z naszą specjalnością',
    },
  ],
  
  // Ważne informacje
  importantInfo: [
    'Dzieci do 3 lat – pobyt bezpłatny',
    'Dzieci 3-10 lat – 50% ceny noclegu',
    'Rezerwacja wymaga zaliczki 30%',
    'Bezpłatny parking na terenie obiektu',
    'Bezpłatne WiFi',
    'Zwierzęta akceptowane za dodatkową opłatą',
    'Doba hotelowa: 14:00 - 12:00',
  ],
  
  // Kontakt
  contact: {
    phone: '721 907 000',
    email: 'sapiolko@op.pl',
  },
  
  ctaText: 'Zarezerwuj Wielkanoc',
  ctaLink: '/kontakt',
  
  // SEO
  publishedAt: '2024-11-01',
  updatedAt: '2024-12-16',
};
