/**
 * OrganizationSchema - Globalny komponent Schema.org dla organizacji
 * 
 * Zawiera pełne dane firmy: Hotel, LodgingBusiness, Organization.
 * Używany w layout.tsx dla całej strony.
 */

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LodgingBusiness", "Hotel"],
    "@id": "https://dworbartnika.pl/#organization",
    "name": "Dwór Bartnika",
    "alternateName": "Hotel Białowieża Dwór Bartnika",
    "url": "https://dworbartnika.pl",
    "logo": {
      "@type": "ImageObject",
      "url": "https://dworbartnika.pl/images/logo/logo.png",
      "width": 512,
      "height": 512
    },
    "image": [
      "https://dworbartnika.pl/images/hotel/fasada.jpg",
      "https://dworbartnika.pl/images/hotel/restauracja.jpg",
      "https://dworbartnika.pl/images/hotel/ogrod.jpg"
    ],
    "description": "Hotel Dwór Bartnika w Narewce - noclegi przy Puszczy Białowieskiej. Restauracja regionalna, muzeum pszczelarstwa, sauna, jacuzzi, ogród sensoryczny.",
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
    "hasMap": "https://www.google.com/maps/place/Noclegi+Bia%C5%82owie%C5%BCa+Dw%C3%B3r+Bartnika/@52.8301134,23.7433649,17z",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+48 721 907 000",
        "contactType": "reservations",
        "availableLanguage": ["Polish", "English"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "07:00",
          "closes": "22:00"
        }
      },
      {
        "@type": "ContactPoint",
        "telephone": "+48 85 685 83 88",
        "contactType": "customer service",
        "availableLanguage": ["Polish", "English"]
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "07:00",
        "closes": "22:00",
        "description": "Recepcja"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/DworBartnika",
      "https://www.instagram.com/dwor_bartnika",
      "https://www.youtube.com/@dworbartnika"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.52,
      "bestRating": 5,
      "worstRating": 1,
      "ratingCount": 1369,
      "reviewCount": 1369
    },
    "numberOfRooms": 25,
    "checkinTime": "15:00",
    "checkoutTime": "11:00",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Bezpłatne WiFi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Bezpłatny parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Restauracja", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Sauna", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Jacuzzi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Balia ogrodowa", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Ogród", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Muzeum", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Rowery", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Przyjazny zwierzętom", "value": true }
    ],
    "priceRange": "$$",
    "petsAllowed": true,
    "currenciesAccepted": "PLN",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Bank Transfer"]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
