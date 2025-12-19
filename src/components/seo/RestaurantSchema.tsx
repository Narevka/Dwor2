/**
 * RestaurantSchema - Komponent Schema.org dla restauracji
 * 
 * Szczegółowe dane restauracji Carska Komnata.
 * Używany na stronie /restauracja.
 */

export function RestaurantSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://dworbartnika.pl/restauracja-bialowieza/#restaurant",
    "name": "Restauracja Białowieża - Carska Komnata",
    "alternateName": "Carska Komnata w Dworze Bartnika",
    "description": "Restauracja Carska Komnata serwuje tradycyjne dania kuchni polskiej i regionalnej Podlasia. Specjalizujemy się w potrawach z dziczyzny, pielmieni, warenyków i dań z lokalnych produktów.",
    "url": "https://dworbartnika.pl/restauracja-bialowieza",
    "image": [
      "https://dworbartnika.pl/images/restauracja/sala.jpg",
      "https://dworbartnika.pl/images/restauracja/dania.jpg"
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
    "servesCuisine": ["Polska", "Regionalna", "Podlaska", "Wegetariańska", "Dziczyzna"],
    "priceRange": "$$",
    "hasMenu": {
      "@id": "https://dworbartnika.pl/menu/#menu"
    },
    "acceptsReservations": true,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "11:00",
        "closes": "20:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.52,
      "bestRating": 5,
      "worstRating": 1,
      "ratingCount": 1369
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Dania wegetariańskie", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Dania bezglutenowe", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Dania wegańskie", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Rezerwacje grupowe", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Przyjęcia okolicznościowe", "value": true }
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
