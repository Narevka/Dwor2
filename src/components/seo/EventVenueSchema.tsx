/**
 * EventVenueSchema - Komponent Schema.org dla sal bankietowych
 * 
 * Szczegółowe dane o salach do przyjęć i konferencji.
 * Używany na stronie /przyjecia.
 */

export function EventVenueSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "@id": "https://dworbartnika.pl/wesela-bialowieza/#eventvenue",
    "name": "Wesela Białowieża - Sale Bankietowe Dwór Bartnika",
    "alternateName": "Sale Weselne, Komunijne i Konferencyjne Dwór Bartnika",
    "description": "Dwór Bartnika oferuje eleganckie sale na wesela, komunie, chrzciny, stypy, urodziny, imprezy firmowe i integracyjne. Sala bankietowa do 150 osób, sala konferencyjna do 60 osób.",
    "url": "https://dworbartnika.pl/wesela-bialowieza",
    "image": [
      "https://dworbartnika.pl/images/przyjecia/sala-bankietowa.jpg",
      "https://dworbartnika.pl/images/przyjecia/sala-konferencyjna.jpg",
      "https://dworbartnika.pl/images/przyjecia/wesele.jpg"
    ],
    "telephone": "+48 721 907 000",
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
    "maximumAttendeeCapacity": 150,
    "containsPlace": [
      {
        "@type": "MeetingRoom",
        "name": "Sala Konferencyjna",
        "description": "Sala konferencyjna z pełnym wyposażeniem: projektor, nagłośnienie, klimatyzacja",
        "maximumAttendeeCapacity": 60,
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Projektor", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Nagłośnienie", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Klimatyzacja", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Flipchart", "value": true }
        ]
      },
      {
        "@type": "Room",
        "name": "Sala Bankietowa",
        "description": "Elegancka sala bankietowa na wesela, komunie i inne uroczystości rodzinne",
        "maximumAttendeeCapacity": 150,
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Klimatyzacja", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Nagłośnienie", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Oświetlenie dekoracyjne", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Parkiet do tańca", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Catering w cenie", "value": true }
        ]
      }
    ],
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Catering własny", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Bezpłatny parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Noclegi dla gości", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Obsługa kelnerska", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Dekoracje", "value": true }
    ],
    "isAccessibleForFree": false,
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
