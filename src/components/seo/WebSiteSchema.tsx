/**
 * WebSiteSchema - Globalny komponent Schema.org dla strony internetowej
 * 
 * Definiuje całą stronę jako WebSite z linkiem do organizacji.
 * Używany w layout.tsx dla całej strony.
 */

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://dworbartnika.pl/#website",
    "name": "Dwór Bartnika",
    "alternateName": "Noclegi Białowieża Dwór Bartnika",
    "url": "https://dworbartnika.pl",
    "publisher": {
      "@id": "https://dworbartnika.pl/#organization"
    },
    "inLanguage": "pl-PL",
    "copyrightYear": 2024,
    "description": "Oficjalna strona hotelu Dwór Bartnika w Narewce przy Puszczy Białowieskiej. Rezerwuj noclegi, restaurację, atrakcje."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
