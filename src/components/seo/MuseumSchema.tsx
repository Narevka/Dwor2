/**
 * MuseumSchema - Komponent Schema.org dla muzeum pszczelarstwa
 * 
 * Szczegółowe dane Muzeum Pszczelarstwa / Skansenu Pszczelarskiego.
 * Używany na stronie /muzeum-pszczelarstwa.
 */

export function MuseumSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Museum",
    "@id": "https://dworbartnika.pl/muzeum-pszczelarstwa/#museum",
    "name": "Muzeum Pszczelarstwa w Dworze Bartnika",
    "alternateName": "Skansen Pszczelarski",
    "description": "Muzeum Pszczelarstwa i Skansen Pszczelarski w Dworze Bartnika to unikalne miejsce prezentujące historię bartnictwa na Podlasiu. Ekspozycja przedstawia tradycyjne ule, narzędzia pszczelarskie oraz produkty pszczele.",
    "url": "https://dworbartnika.pl/muzeum-pszczelarstwa",
    "image": [
      "https://dworbartnika.pl/images/muzeum/ekspozycja.jpg",
      "https://dworbartnika.pl/images/muzeum/ule.jpg"
    ],
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
    "isAccessibleForFree": true,
    "publicAccess": true,
    "touristType": [
      "Family friendly",
      "History enthusiast",
      "Nature lover",
      "Educational groups"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "07:00",
        "closes": "22:00",
        "description": "Dostępne dla gości hotelowych"
      }
    ],
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Ekspozycja historyczna", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Tradycyjne ule", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Narzędzia pszczelarskie", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Produkty pszczele", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Edukacja o bartnictwie", "value": true }
    ],
    "containedInPlace": {
      "@id": "https://dworbartnika.pl/#organization"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
