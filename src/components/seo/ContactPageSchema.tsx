/**
 * ContactPageSchema - Komponent Schema.org dla strony kontaktowej
 * 
 * Używany na stronie /kontakt.
 */

export function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Kontakt - Dwór Bartnika",
    "description": "Skontaktuj się z hotelem Dwór Bartnika. Telefon, e-mail, formularz kontaktowy, dojazd i mapa.",
    "url": "https://dworbartnika.pl/kontakt",
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": "https://dworbartnika.pl/#organization",
      "name": "Dwór Bartnika",
      "telephone": ["+48 85 685 83 88", "+48 721 907 000"],
      "email": "sapiolko@op.pl",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ul. Hajnowska 2/1",
        "addressLocality": "Narewka",
        "postalCode": "17-220",
        "addressRegion": "podlaskie",
        "addressCountry": "PL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 52.8301134,
        "longitude": 23.7433649
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "07:00",
          "closes": "22:00",
          "description": "Recepcja"
        }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+48 721 907 000",
          "contactType": "reservations",
          "availableLanguage": ["Polish", "English"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+48 85 685 83 88",
          "contactType": "customer service",
          "availableLanguage": ["Polish", "English"]
        }
      ]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Strona główna",
          "item": "https://dworbartnika.pl"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Kontakt",
          "item": "https://dworbartnika.pl/kontakt"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
