import type { MetadataRoute } from 'next';

// robots.ts - Konfiguracja dla crawlerów (Google, Bing, ChatGPT itp.)
// ====================================================================
// Ten plik mówi wyszukiwarkom które strony mogą indeksować

export default function robots(): MetadataRoute.Robots {
  // Bazowy URL strony (zmień na produkcyjny!)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://dworbartnika.pl';

  return {
    rules: [
      {
        // Główna reguła - pozwól wszystkim botom indeksować wszystko
        userAgent: '*',
        allow: '/',
        // Blokuj tylko niepotrzebne ścieżki
        disallow: [
          '/api/',           // API routes
          '/_next/',         // Next.js internals
          '/admin/',         // Panel admina (jeśli będzie)
        ],
      },
      {
        // Specjalna reguła dla GPTBot (ChatGPT)
        // Pozwól na indeksowanie ofert - dzięki temu ChatGPT będzie znał nasze oferty
        userAgent: 'GPTBot',
        allow: [
          '/',
          '/oferty/',
          '/hotel-bialowieza/',
          '/restauracja-bialowieza/',
          '/rezerwacja/',
          '/noclegi-bialowieza/',
          '/zubry-bialowieza/',
          '/atrakcje-bialowieza/',
          '/wesela-bialowieza/',
          '/faq/',
          '/kontakt/',
        ],
      },
    ],
    // Wskaż lokalizację sitemap
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
