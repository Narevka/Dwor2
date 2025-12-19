import type { MetadataRoute } from 'next';
import { getAllOffers } from '@/data/offers';

// sitemap.ts - Mapa strony dla wyszukiwarek
// =========================================
// WAŻNE: Sitemap zawiera WSZYSTKIE oferty (nawet wyłączone!)
// Dzięki temu Google i ChatGPT zawsze widzą pełną ofertę

export default function sitemap(): MetadataRoute.Sitemap {
  // Bazowy URL strony (zmień na produkcyjny!)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://dworbartnika.pl';

  // Strony statyczne
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/hotel-bialowieza`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/noclegi-bialowieza`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/restauracja-bialowieza`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/menu`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rezerwacja`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/muzeum-pszczelarstwa`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ogrod-sensoryczny`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/wesela-bialowieza`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/atrakcje-bialowieza`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/zubry-bialowieza`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Oferty sezonowe (dedykowane URL dla SEO)
    {
      url: `${baseUrl}/wielkanoc-bialowieza`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    // Pokoje
    {
      url: `${baseUrl}/pokoje-2-osobowe-bialowieza`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pokoje-3-osobowe-bialowieza`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pokoje-rodzinne-bialowieza`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/apartament-z-jacuzzi-bialowieza`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/apartament-z-sauna-bialowieza`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Strony prawne
    {
      url: `${baseUrl}/regulamin-rezerwacji`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/rodo`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Strona główna ofert
  const offersMainPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/oferty`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // WSZYSTKIE oferty (nawet wyłączone - dla SEO!)
  // Crawlery widzą pełną ofertę, nawet gdy jest OFF dla użytkowników
  const allOffers = getAllOffers();
  const offerPages: MetadataRoute.Sitemap = allOffers.map((offer) => ({
    url: `${baseUrl}/oferty/${offer.slug}`,
    lastModified: new Date(offer.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  return [...staticPages, ...offersMainPage, ...offerPages];
}
