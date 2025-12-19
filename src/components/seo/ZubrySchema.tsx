/**
 * ZubrySchema - Schema.org dla strony o żubrach
 * 
 * Używany na stronie /zubry-bialowieza
 */

export function ZubrySchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "@id": "https://dworbartnika.pl/zubry-bialowieza/#touristattraction",
    "name": "Obserwacja Żubrów w Puszczy Białowieskiej",
    "description": "Miejsca obserwacji żubrów w okolicy Dworu Bartnika. Karmnik żubrów 2 km, wieża widokowa Kosy Most 5 km, Rezerwat Pokazowy Żubrów 18 km. Organizujemy wycieczki melexem do karmnika żubrów.",
    "url": "https://dworbartnika.pl/zubry-bialowieza",
    "image": "https://dworbartnika.pl/images/OG/OG_zubry_bialowieza.jpg",
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
    "touristType": ["Nature lover", "Wildlife enthusiast", "Family friendly"],
    "isAccessibleForFree": true,
    "publicAccess": true,
    "containedInPlace": {
      "@id": "https://dworbartnika.pl/#organization"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Najbliższy punkt obserwacji",
        "value": "Karmnik żubrów - 2 km"
      },
      {
        "@type": "PropertyValue",
        "name": "Najlepsza pora obserwacji",
        "value": "Wczesny poranek (6:00-8:00) lub zmierzch (17:00-19:00)"
      },
      {
        "@type": "PropertyValue",
        "name": "Najlepszy sezon",
        "value": "Zima (grudzień-luty) - żubry gromadzą się przy karmnikach"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
