/**
 * HotelSchema - Komponent Schema.org dla strony /hotel
 * 
 * Szczegółowe dane hotelu jako LodgingBusiness.
 * Używany na stronie /hotel.
 */

export function HotelSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": "https://dworbartnika.pl/hotel-bialowieza/#lodgingbusiness",
    "name": "Hotel Białowieża - Dwór Bartnika",
    "description": "Hotel Dwór Bartnika to wyjątkowe miejsce w sercu Puszczy Białowieskiej. Oferujemy 25 komfortowych pokoi, restaurację z kuchnią regionalną, muzeum pszczelarstwa oraz liczne atrakcje.",
    "url": "https://dworbartnika.pl/hotel-bialowieza",
    "image": [
      "https://dworbartnika.pl/images/hotel/fasada.jpg",
      "https://dworbartnika.pl/images/hotel/recepcja.jpg",
      "https://dworbartnika.pl/images/hotel/pokoje.jpg"
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
    "starRating": {
      "@type": "Rating",
      "ratingValue": 3
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.52,
      "bestRating": 5,
      "worstRating": 1,
      "ratingCount": 1369
    },
    "numberOfRooms": 25,
    "checkinTime": "15:00",
    "checkoutTime": "11:00",
    "priceRange": "175 PLN - 400 PLN za osobę/noc",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Bezpłatne WiFi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Bezpłatny parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Restauracja na miejscu", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Sauna", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Jacuzzi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Balia ogrodowa", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Muzeum pszczelarstwa", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Ogród sensoryczny", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Wypożyczalnia rowerów", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Quady", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Melex - wycieczki", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Ognisko", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Uloterapia", "value": true }
    ],
    "petsAllowed": true,
    "containsPlace": [
      { "@id": "https://dworbartnika.pl/restauracja-bialowieza/#restaurant" },
      { "@id": "https://dworbartnika.pl/muzeum-pszczelarstwa/#museum" },
      { "@id": "https://dworbartnika.pl/ogrod-sensoryczny/#touristattraction" }
    ],
    "isPartOf": {
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
