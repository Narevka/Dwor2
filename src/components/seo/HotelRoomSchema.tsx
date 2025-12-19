/**
 * HotelRoomSchema - Komponent Schema.org dla pokoi hotelowych
 * 
 * Szczegółowe dane o pokojach i apartamentach.
 * Używany na stronach /pokoje-*, /apartament-*.
 */

interface HotelRoomSchemaProps {
  type: 'HotelRoom' | 'Suite';
  name: string;
  description: string;
  url: string;
  image?: string;
  floorSize?: number; // w m²
  occupancy: number;
  bedType: string;
  amenities: string[];
  pricePerPerson: number;
}

export function HotelRoomSchema({
  type,
  name,
  description,
  url,
  image,
  floorSize,
  occupancy,
  bedType,
  amenities,
  pricePerPerson
}: HotelRoomSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}/#${type.toLowerCase()}`,
    "name": name,
    "description": description,
    "url": url,
    "image": image ? `https://dworbartnika.pl${image}` : undefined,
    "floorSize": floorSize ? {
      "@type": "QuantitativeValue",
      "value": floorSize,
      "unitCode": "MTK" // metr kwadratowy
    } : undefined,
    "bed": {
      "@type": "BedDetails",
      "typeOfBed": bedType,
      "numberOfBeds": 1
    },
    "occupancy": {
      "@type": "QuantitativeValue",
      "value": occupancy,
      "unitText": "osoby"
    },
    "amenityFeature": amenities.map(amenity => ({
      "@type": "LocationFeatureSpecification",
      "name": amenity,
      "value": true
    })),
    "containedInPlace": {
      "@id": "https://dworbartnika.pl/#organization"
    },
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": pricePerPerson,
        "priceCurrency": "PLN",
        "unitText": "za osobę za noc",
        "referenceQuantity": {
          "@type": "QuantitativeValue",
          "value": 1,
          "unitText": "noc"
        }
      },
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Predefiniowane komponenty dla konkretnych typów pokoi

export function Pokoje2OsoboweSchema() {
  return (
    <HotelRoomSchema
      type="HotelRoom"
      name="Pokoje 2-osobowe Białowieża - Dwór Bartnika"
      description="Komfortowe pokoje 2-osobowe w Dworze Bartnika przy Puszczy Białowieskiej. Każdy pokój posiada łazienkę, TV, WiFi oraz unikalny wystrój nawiązujący do natury."
      url="https://dworbartnika.pl/pokoje-2-osobowe-bialowieza"
      occupancy={2}
      bedType="Łóżko podwójne"
      amenities={["WiFi", "TV", "Łazienka", "Ręczniki", "Suszarka"]}
      pricePerPerson={175}
    />
  );
}

export function Pokoje3OsoboweSchema() {
  return (
    <HotelRoomSchema
      type="HotelRoom"
      name="Pokoje 3-osobowe Białowieża - Dwór Bartnika"
      description="Przestronne pokoje 3-osobowe idealne dla rodzin lub małych grup. Komfortowe wyposażenie i bliskość natury Puszczy Białowieskiej."
      url="https://dworbartnika.pl/pokoje-3-osobowe-bialowieza"
      occupancy={3}
      bedType="Łóżko podwójne + pojedyncze"
      amenities={["WiFi", "TV", "Łazienka", "Ręczniki", "Suszarka"]}
      pricePerPerson={150}
    />
  );
}

export function PokojeRodzinneSchema() {
  return (
    <HotelRoomSchema
      type="HotelRoom"
      name="Pokoje rodzinne Białowieża - Dwór Bartnika"
      description="Rodzinne pokoje 4-osobowe z pełnym wyposażeniem. Idealne dla rodzin z dziećmi szukających wypoczynku przy Puszczy Białowieskiej."
      url="https://dworbartnika.pl/pokoje-rodzinne-bialowieza"
      occupancy={4}
      bedType="Łóżko podwójne + 2 pojedyncze"
      amenities={["WiFi", "TV", "Łazienka", "Ręczniki", "Suszarka", "Miejsce dla dzieci"]}
      pricePerPerson={120}
    />
  );
}

export function ApartamentSaunaSchema() {
  return (
    <HotelRoomSchema
      type="Suite"
      name="Apartament z sauną Białowieża - Dwór Bartnika"
      description="Luksusowy apartament z prywatną sauną fińską przy Puszczy Białowieskiej. Przestronne wnętrze z osobnym salonem, łóżkiem king-size, minibarem i szlafrokami."
      url="https://dworbartnika.pl/apartament-z-sauna-bialowieza"
      floorSize={45}
      occupancy={2}
      bedType="Łóżko king-size"
      amenities={["WiFi", "TV", "Łazienka", "Sauna fińska", "Salon", "Minibar", "Szlafroki", "Ręczniki", "Suszarka"]}
      pricePerPerson={300}
    />
  );
}

export function ApartamentJacuzziSchema() {
  return (
    <HotelRoomSchema
      type="Suite"
      name="Apartament z jacuzzi Białowieża - Dwór Bartnika"
      description="Ekskluzywny apartament z prywatnym jacuzzi przy Puszczy Białowieskiej. Romantyczna atmosfera, łóżko king-size, salon, minibar, szlafroki i świece. Idealny na romantyczny weekend."
      url="https://dworbartnika.pl/apartament-z-jacuzzi-bialowieza"
      floorSize={50}
      occupancy={2}
      bedType="Łóżko king-size"
      amenities={["WiFi", "TV", "Łazienka", "Jacuzzi", "Salon", "Minibar", "Szlafroki", "Świece", "Ręczniki", "Suszarka"]}
      pricePerPerson={400}
    />
  );
}
