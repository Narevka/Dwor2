// boze-narodzenie-2025.ts - Oferta świąteczna Boże Narodzenie 2025
// ================================================================

import type { Offer } from './types';

export const bozeNarodzenie2025: Offer = {
  slug: 'boze-narodzenie-2025',
  
  // SEO & Display
  title: 'Boże Narodzenie 2025',
  shortTitle: 'Święta',
  subtitle: 'Magiczne Święta Bożego Narodzenia w sercu Puszczy Białowieskiej',
  description: 'Święta Bożego Narodzenia w Dworze Bartnika. Kolacja wigilijna, śniadania świąteczne, Muzeum Pszczelarstwa, ognisko z grzańcem. Od 1850 zł/os.',
  
  // Wizualne
  emoji: '🎄',
  heroImage: '/images/offers/boze-narodzenie-2025.jpg',
  galleryImages: [
    '/images/offers/boze-narodzenie-wigilia.jpg',
    '/images/offers/boze-narodzenie-muzeum.jpg',
    '/images/offers/boze-narodzenie-ognisko.jpg',
  ],
  
  // Pakiety cenowe
  packages: [
    {
      id: 'swieta-podstawowy',
      name: 'Pakiet Świąteczny',
      dateFrom: '2025-12-24',
      dateTo: '2025-12-28',
      nights: 4,
      days: 5,
      pricePerPerson: 1850,
      priceNote: 'w pokoju dwuosobowym i więcej osobowym',
      highlights: [
        '5 dniowy pobyt (4 noce) w komfortowych pokojach',
        'Tradycyjna kolacja wigilijna z oprawą muzyczną polskich kolęd (24.12.2025)',
        'W menu kolacji wigilijnej: dania ciepłe, zimne przekąski, słodki bufet i napoje',
        '4 śniadania w formie bufetu szwedzkiego (25, 26, 27, 28.12.2025)',
        '2 śniadania świąteczne (25.12, 26.12)',
        'Świąteczny obiad w dniach 25.12, 26.12 i 27.12.2025',
        'Bufet kawowy z ciastami domowego wypieku',
        'Zwiedzanie Muzeum Pszczelarstwa',
        'Biesiada przy ognisku z grzanym winem i kiełbaskami',
        'Kasyno miodowe – degustacja miodów pitnych',
        'Zimowy wyjazd do Puszczy Białowieskiej',
        'Słodki upominek',
      ],
    },
  ],
  
  // Program oferty
  program: [
    {
      icon: '🏨',
      title: 'Nocleg w komfortowym pokoju',
      description: 'Wygodne pokoje hotelowe z pełnym wyposażeniem, idealne na świąteczny wypoczynek',
    },
    {
      icon: '🍽️',
      title: 'Uroczysta Kolacja Wigilijna',
      description: 'Tradycyjna kolacja wigilijna 24.12.2025 z oprawą muzyczną tradycyjnych polskich kolęd. W menu: dania ciepłe, zimne przekąski, słodki bufet i napoje',
    },
    {
      icon: '🥐',
      title: 'Świąteczne śniadania',
      description: '4 śniadania w formie bufetu szwedzkiego, w tym 2 śniadania świąteczne (25.12 i 26.12)',
    },
    {
      icon: '🍖',
      title: 'Świąteczne obiady',
      description: 'Uroczyste obiady w dniach 25.12.2025, 26.12.2025 i 27.12.2025',
    },
    {
      icon: '☕',
      title: 'Bufet kawowy',
      description: 'Bufet kawowy z ciastami domowego wypieku dostępny dla gości',
    },
    {
      icon: '🐝',
      title: 'Muzeum Pszczelarstwa',
      description: 'Zwiedzanie naszego unikalnego Muzeum Pszczelarstwa z przewodnikiem',
    },
    {
      icon: '🔥',
      title: 'Biesiada przy ognisku',
      description: 'Klimatyczne spotkanie przy ognisku z grzanym winem i kiełbaskami',
    },
    {
      icon: '🍯',
      title: 'Kasyno miodowe',
      description: 'Degustacja miodów pitnych – wyjątkowe doświadczenie smakowe',
    },
    {
      icon: '🌲',
      title: 'Zimowy wyjazd do Puszczy',
      description: 'Odkryj świąteczny urok jednego z najpiękniejszych miejsc w Polsce – Puszczy Białowieskiej',
    },
    {
      icon: '🎁',
      title: 'Słodki upominek',
      description: 'Każdy gość otrzyma słodki upominek na pamiątkę świątecznego pobytu',
    },
  ],
  
  // Dodatkowe możliwości
  extras: [
    {
      icon: '⛪',
      title: 'Pasterka',
      description: 'Możliwość uczestnictwa w Pasterce w pobliskim kościele',
    },
    {
      icon: '🌿',
      title: 'Terapia lasem',
      description: 'Możliwość spacerowania i relaksu na terenie obiektu hotelowego – terapia lasem w naturalnym otoczeniu',
    },
  ],
  
  // Ważne informacje praktyczne
  importantInfo: [
    'Doba hotelowa rozpoczyna się od godz. 15:00 do godz. 11:00',
    'Bezpłatny dostęp do Wi-Fi',
    'Bezpłatny parking na terenie obiektu hotelowego',
    'Zwierzęta akceptowane za dodatkową opłatą',
  ],
  
  // Kontakt
  contact: {
    phone: '721 907 000',
    email: 'sapiolko@op.pl',
  },
  
  ctaText: 'Zarezerwuj Święta',
  ctaLink: '/kontakt',
  
  // SEO
  publishedAt: '2024-09-01',
  updatedAt: '2024-12-16',
};
