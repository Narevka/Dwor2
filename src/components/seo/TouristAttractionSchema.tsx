/**
 * TouristAttractionSchema - Komponent Schema.org dla atrakcji turystycznych
 * 
 * Używany na stronie /ogrod-sensoryczny oraz innych atrakcjach.
 */

interface TouristAttractionSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  isAccessibleForFree?: boolean;
  additionalType?: string; // np. "Park", "Garden"
}

export function TouristAttractionSchema({
  name,
  description,
  url,
  image,
  isAccessibleForFree = true,
  additionalType
}: TouristAttractionSchemaProps) {
  const types = additionalType 
    ? ["TouristAttraction", additionalType] 
    : "TouristAttraction";

  const schema = {
    "@context": "https://schema.org",
    "@type": types,
    "@id": `${url}/#touristattraction`,
    "name": name,
    "description": description,
    "url": url,
    "image": image ? `https://dworbartnika.pl${image}` : undefined,
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
    "isAccessibleForFree": isAccessibleForFree,
    "publicAccess": true,
    "touristType": ["Family friendly", "Nature lover"],
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

// Predefiniowany komponent dla Ogrodu Sensorycznego
export function OgrodSensorycznySchema() {
  return (
    <TouristAttractionSchema
      name="Ogród Sensoryczny"
      description="Ogród Sensoryczny w Dworze Bartnika to wyjątkowe miejsce stworzone z myślą o stymulacji wszystkich zmysłów. Znajdziesz tu różnorodne rośliny aromatyczne, zioła, kwiaty oraz elementy do dotyku i słuchu."
      url="https://dworbartnika.pl/ogrod-sensoryczny"
      image="/images/ogrod/ogrod-sensoryczny.jpg"
      isAccessibleForFree={true}
      additionalType="Park"
    />
  );
}
