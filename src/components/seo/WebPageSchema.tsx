/**
 * WebPageSchema - Komponent Schema.org dla stron informacyjnych
 * 
 * Używany na stronach /regulamin, /rodo, /rezerwacja i innych.
 */

interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
  pageType?: 'WebPage' | 'AboutPage' | 'CheckoutPage' | 'FAQPage';
  datePublished?: string;
  dateModified?: string;
}

export function WebPageSchema({
  name,
  description,
  url,
  pageType = 'WebPage',
  datePublished,
  dateModified
}: WebPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": pageType,
    "name": name,
    "description": description,
    "url": url,
    "isPartOf": {
      "@id": "https://dworbartnika.pl/#website"
    },
    "about": {
      "@id": "https://dworbartnika.pl/#organization"
    },
    "inLanguage": "pl-PL",
    "datePublished": datePublished,
    "dateModified": dateModified || new Date().toISOString().split('T')[0]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Predefiniowane komponenty dla konkretnych stron

export function RegulaminSchema() {
  return (
    <WebPageSchema
      name="Regulamin rezerwacji - Dwór Bartnika"
      description="Regulamin rezerwacji i pobytu w hotelu Dwór Bartnika. Zasady anulacji, płatności, zwierząt, ciszy nocnej."
      url="https://dworbartnika.pl/regulamin-rezerwacji"
      pageType="WebPage"
    />
  );
}

export function RodoSchema() {
  return (
    <WebPageSchema
      name="Polityka prywatności RODO - Dwór Bartnika"
      description="Polityka prywatności i ochrona danych osobowych zgodnie z RODO. Informacje o przetwarzaniu danych w hotelu Dwór Bartnika."
      url="https://dworbartnika.pl/rodo"
      pageType="WebPage"
    />
  );
}

export function RezerwacjaSchema() {
  return (
    <WebPageSchema
      name="Rezerwacja online - Dwór Bartnika"
      description="Zarezerwuj nocleg w hotelu Dwór Bartnika. System rezerwacji online, dostępność pokoi, ceny."
      url="https://dworbartnika.pl/rezerwacja"
      pageType="CheckoutPage"
    />
  );
}

export function HomePageSchema() {
  return (
    <WebPageSchema
      name="Dwór Bartnika - Noclegi Białowieża | Hotel przy Puszczy Białowieskiej"
      description="Hotel Dwór Bartnika w Narewce - komfortowe noclegi przy Puszczy Białowieskiej. Restauracja, muzeum pszczelarstwa, sauna, jacuzzi, atrakcje."
      url="https://dworbartnika.pl"
      pageType="WebPage"
    />
  );
}

export function OfertyListSchema() {
  return (
    <WebPageSchema
      name="Oferty specjalne - Dwór Bartnika"
      description="Aktualne oferty specjalne hotelu Dwór Bartnika. Pakiety świąteczne, weekendowe, romantyczne i rodzinne."
      url="https://dworbartnika.pl/oferty"
      pageType="WebPage"
    />
  );
}
