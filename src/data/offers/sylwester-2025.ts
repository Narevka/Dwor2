// sylwester-2025.ts - Oferta sylwestrowa 2025/2026
// ================================================

import type { Offer } from './types';

export const sylwester2025: Offer = {
  slug: 'sylwester-2025',
  
  // SEO & Display
  title: 'Sylwester 2025/2026',
  shortTitle: 'Sylwester',
  subtitle: 'Zimowa Magia Puszczy – Sylwester 2025/2026',
  description: 'Sylwester 2025/2026 w Puszczy Białowieskiej. Bal sylwestrowy, kulig, ognisko z grzańcem, spotkanie z żubrami. Od 1590 zł/os za 3 noce.',
  
  // Wizualne
  emoji: '🎆',
  heroImage: '/images/offers/sylwester-2025.jpg',
  galleryImages: [
    '/images/offers/sylwester-bal.jpg',
    '/images/offers/sylwester-kulig.jpg',
    '/images/offers/sylwester-fajerwerki.jpg',
  ],
  
  // Pakiety cenowe
  packages: [
    {
      id: 'sylwester-podstawowy',
      name: 'Pakiet Sylwestrowo-Noworoczny',
      dateFrom: '2025-12-30',
      dateTo: '2026-01-02',
      nights: 3,
      days: 4,
      pricePerPerson: 1590,
      priceNote: 'w pokoju dwuosobowym',
      highlights: [
        '4 dniowy pobyt (3 noclegi w komfortowych pokojach)',
        'Bogate śniadania w formie bufetu szwedzkiego',
        'Zabawa Sylwestrowa z oprawą muzyczną',
        'Kieliszek wina musującego o północy',
        'Zwiedzanie Muzeum Pszczelarstwa',
        'Ognisko z grzańcem i kiełbaskami w klimatycznym miejscu',
        'Wyjazd na spotkanie z Żubrem',
        'Bufet kawowy z ciastami domowego wypieku',
        'Kasyno miodowe – degustacja miodów pitnych',
      ],
    },
    {
      id: 'sylwester-rozszerzony',
      name: 'Pakiet Rozszerzony z wycieczką "Szlakiem Kultur"',
      dateFrom: '2025-12-29',
      dateTo: '2026-01-02',
      nights: 4,
      days: 5,
      pricePerPerson: 2140,
      priceNote: 'w pokoju dwuosobowym',
      highlights: [
        'Wszystko z pakietu podstawowego',
        'Dodatkowa doba z kolacją (29.12)',
        'Wycieczka "Szlakiem Kultur" z kuligiem',
        'Zwiedzanie Kruszynian – meczet i mizar, Centrum Kultury Muzułmańskiej',
        'Wycieczka po Supraślu – miejsca z filmów "Blondynka" i "U Pana Boga za piecem"',
        'Zwiedzanie Ławry Supraskiej – jedyna w Polsce cerkiew obronna',
        'Muzeum Ikon – nowoczesna multimedialna ekspozycja',
        'Kulig z pochodniami po Puszczy Knyszyńskiej z poczęstunkiem przy ognisku',
      ],
    },
  ],
  
  // Program oferty - Pakiet Podstawowy
  program: [
    {
      icon: '🏨',
      title: 'Komfortowy nocleg',
      description: 'Pobyt w wygodnych pokojach hotelowych z pełnym wyposażeniem',
    },
    {
      icon: '🥐',
      title: 'Bogate śniadania',
      description: 'Codzienne śniadania w formie bufetu szwedzkiego',
    },
    {
      icon: '💃',
      title: 'Zabawa Sylwestrowa',
      description: 'Elegancka zabawa sylwestrowa z oprawą muzyczną w naszej restauracji',
    },
    {
      icon: '🥂',
      title: 'Toast o północy',
      description: 'Kieliszek wina musującego o północy na powitanie Nowego Roku',
    },
    {
      icon: '🐝',
      title: 'Muzeum Pszczelarstwa',
      description: 'Zwiedzanie naszego unikalnego Muzeum Pszczelarstwa',
    },
    {
      icon: '🔥',
      title: 'Ognisko z grzańcem',
      description: 'Klimatyczne ognisko z grzańcem i kiełbaskami w malowniczym miejscu',
    },
    {
      icon: '🦬',
      title: 'Spotkanie z Żubrem',
      description: 'Wyjazd na spotkanie z Żubrem – symbolem Puszczy Białowieskiej',
    },
    {
      icon: '☕',
      title: 'Bufet kawowy',
      description: 'Bufet kawowy z ciastami domowego wypieku',
    },
    {
      icon: '🍯',
      title: 'Kasyno miodowe',
      description: 'Degustacja miodów pitnych – wyjątkowe doświadczenie smakowe',
    },
  ],
  
  // Dodatkowe atrakcje - Pakiet Rozszerzony
  extras: [
    {
      icon: '🗺️',
      title: 'Wycieczka "Szlakiem Kultur"',
      description: 'Całodniowa wycieczka poznawcza po regionie (godz. 9:30 – ok. 20:00)',
    },
    {
      icon: '🕌',
      title: 'Kruszyniany',
      description: 'Zwiedzanie meczetu i mizaru, wizyta w Centrum Kultury Muzułmańskiej',
    },
    {
      icon: '🎬',
      title: 'Supraśl – miejsca filmowe',
      description: 'Wycieczka po Supraślu, które upodobali filmowcy. Zobaczymy: Pałac Bucholtzów, domy tkaczy, Dom Ludowy, filmowy posterunek policji w Królowym Moście (sceny z filmów "Blondynka" oraz "U Pana Boga za piecem")',
    },
    {
      icon: '⛪',
      title: 'Ławra Supraska',
      description: 'Zwiedzanie jedynej w Polsce cerkwi obronnej pw. Zwiastowania Przenajświętszej Bogurodzicy oraz cerkwi św. Apostoła Jana Teologa',
    },
    {
      icon: '🖼️',
      title: 'Muzeum Ikon',
      description: 'Zwiedzanie nowoczesnej multimedialnej ekspozycji ikon',
    },
    {
      icon: '🛷',
      title: 'Kulig z pochodniami',
      description: 'Kulig po Puszczy Knyszyńskiej w pobliżu Supraśla (godz. 15:00–18:00) z poczęstunkiem przy ognisku. W menu: żurek, mix pierogów, kiełbaski ogniskowe, kawa, herbata, pieczywo, musztarda, keczup. Kulig odbywa się saniami, a w przypadku braku śniegu – zaprzęgami konnymi',
    },
  ],
  
  // Ważne informacje praktyczne
  importantInfo: [
    'Doba hotelowa rozpoczyna się od godz. 15:00 do godz. 11:00 z możliwością przedłużenia',
    'Bezpłatny dostęp do Wi-Fi',
    'Bezpłatny parking na terenie obiektu hotelowego',
    'Zwierzęta akceptowane za dodatkową opłatą',
  ],
  
  // Kontakt
  contact: {
    phone: '721 907 000',
    email: 'sapiolko@op.pl',
  },
  
  ctaText: 'Zarezerwuj Sylwestra',
  ctaLink: '/kontakt',
  
  // SEO
  publishedAt: '2024-09-01',
  updatedAt: '2024-12-16',
};
