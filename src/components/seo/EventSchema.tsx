/**
 * EventSchema - Komponent Schema.org dla wydarzeń specjalnych
 * 
 * Używany na stronach /oferty/[slug] dla pakietów świątecznych itp.
 */

interface EventSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  startDate: string; // ISO format: YYYY-MM-DD
  endDate: string;   // ISO format: YYYY-MM-DD
  price?: number;
  priceDescription?: string;
  eventType?: 'Event' | 'SocialEvent' | 'Festival';
}

export function EventSchema({
  name,
  description,
  url,
  image,
  startDate,
  endDate,
  price,
  priceDescription,
  eventType = 'Event'
}: EventSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": eventType,
    "name": name,
    "description": description,
    "url": url,
    "image": image ? `https://dworbartnika.pl${image}` : undefined,
    "startDate": startDate,
    "endDate": endDate,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Dwór Bartnika",
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
      }
    },
    "organizer": {
      "@id": "https://dworbartnika.pl/#organization"
    },
    "offers": price ? {
      "@type": "Offer",
      "url": url,
      "price": price,
      "priceCurrency": "PLN",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split('T')[0],
      "description": priceDescription
    } : undefined,
    "performer": {
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
