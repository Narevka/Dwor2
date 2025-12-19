/**
 * ProductOfferSchema - Komponent Schema.org dla oferty noclegowej jako produkt
 * 
 * Prezentuje pokoje jako produkty z cenami do Rich Snippets.
 * Używany na stronach pokoi razem z HotelRoomSchema.
 */

interface ProductOfferSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  price: number;
  priceUnit?: string; // np. "za osobę za noc"
  sku?: string;
  availability?: 'InStock' | 'OutOfStock' | 'LimitedAvailability';
}

export function ProductOfferSchema({
  name,
  description,
  url,
  image,
  price,
  priceUnit = "za osobę za noc",
  sku,
  availability = 'InStock'
}: ProductOfferSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "url": url,
    "image": image ? `https://dworbartnika.pl${image}` : undefined,
    "sku": sku,
    "brand": {
      "@type": "Brand",
      "name": "Dwór Bartnika"
    },
    "offers": {
      "@type": "Offer",
      "url": url,
      "price": price,
      "priceCurrency": "PLN",
      "priceValidUntil": new Date(new Date().getFullYear() + 1, 11, 31).toISOString().split('T')[0],
      "availability": `https://schema.org/${availability}`,
      "seller": {
        "@id": "https://dworbartnika.pl/#organization"
      },
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": price,
        "priceCurrency": "PLN",
        "unitText": priceUnit
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.52,
      "bestRating": 5,
      "worstRating": 1,
      "ratingCount": 1369
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Predefiniowane komponenty dla produktów pokoi

export function Pokoje2OsoboweProductSchema() {
  return (
    <ProductOfferSchema
      name="Nocleg w pokoju 2-osobowym Białowieża - Dwór Bartnika"
      description="Nocleg w komfortowym pokoju 2-osobowym przy Puszczy Białowieskiej. Cena od 175 PLN za osobę."
      url="https://dworbartnika.pl/pokoje-2-osobowe-bialowieza"
      image="/images/rooms/standard/pokoje-2os.jpg"
      price={175}
      sku="ROOM-2OS"
    />
  );
}

export function Pokoje3OsoboweProductSchema() {
  return (
    <ProductOfferSchema
      name="Nocleg w pokoju 3-osobowym Białowieża - Dwór Bartnika"
      description="Nocleg w przestronnym pokoju 3-osobowym przy Puszczy Białowieskiej. Cena od 150 PLN za osobę."
      url="https://dworbartnika.pl/pokoje-3-osobowe-bialowieza"
      image="/images/rooms/standard/pokoje-3os.jpg"
      price={150}
      sku="ROOM-3OS"
    />
  );
}

export function PokojeRodzinneProductSchema() {
  return (
    <ProductOfferSchema
      name="Nocleg w pokoju rodzinnym Białowieża - Dwór Bartnika"
      description="Nocleg w rodzinnym pokoju 4-osobowym przy Puszczy Białowieskiej. Cena od 120 PLN za osobę."
      url="https://dworbartnika.pl/pokoje-rodzinne-bialowieza"
      image="/images/rooms/family/pokoje-4os.jpg"
      price={120}
      sku="ROOM-RODZINNE"
    />
  );
}

export function ApartamentSaunaProductSchema() {
  return (
    <ProductOfferSchema
      name="Apartament z sauną Białowieża - Dwór Bartnika"
      description="Luksusowy apartament z prywatną sauną fińską przy Puszczy Białowieskiej. Cena 300 PLN za osobę."
      url="https://dworbartnika.pl/apartament-z-sauna-bialowieza"
      image="/images/rooms/sauna/apartament-sauna.jpg"
      price={300}
      sku="APT-SAUNA"
    />
  );
}

export function ApartamentJacuzziProductSchema() {
  return (
    <ProductOfferSchema
      name="Apartament z jacuzzi Białowieża - Dwór Bartnika"
      description="Ekskluzywny apartament z prywatnym jacuzzi przy Puszczy Białowieskiej. Cena 400 PLN za osobę."
      url="https://dworbartnika.pl/apartament-z-jacuzzi-bialowieza"
      image="/images/rooms/jacuzzi/apartament-jacuzzi.jpg"
      price={400}
      sku="APT-JACUZZI"
    />
  );
}
