/**
 * ItemListSchema - Komponent Schema.org dla list elementów
 * 
 * Używany na stronach /atrakcje i /noclegi-bialowieza.
 */

interface ItemListItem {
  name: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string; // np. "TouristAttraction", "HotelRoom", "Product"
}

interface ItemListSchemaProps {
  name: string;
  description: string;
  url: string;
  items: ItemListItem[];
  itemType?: string; // domyślny typ dla wszystkich elementów
}

export function ItemListSchema({
  name,
  description,
  url,
  items,
  itemType = "ListItem"
}: ItemListSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": name,
    "description": description,
    "url": url,
    "numberOfItems": items.length,
    "itemListElement": items.map((item, index) => ({
      "@type": item.type || itemType,
      "position": index + 1,
      "name": item.name,
      "description": item.description,
      "url": item.url,
      "image": item.image ? `https://dworbartnika.pl${item.image}` : undefined
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Predefiniowany komponent dla strony Atrakcje
export function AtrakcjeItemListSchema() {
  const atrakcje = [
    { name: "Sauna", description: "Sauna parowa dostępna na miejscu", type: "TouristAttraction", image: "/images/atrakcje/sauna.jpg" },
    { name: "Balia ogrodowa", description: "Balia do kąpieli w ogrodzie", type: "TouristAttraction", image: "/images/atrakcje/balia.jpg" },
    { name: "Jacuzzi", description: "Zewnętrzne jacuzzi z hydromasażem", type: "TouristAttraction", image: "/images/atrakcje/jacuzzi.jpg" },
    { name: "Melex - wycieczki", description: "Wycieczki melexem po Puszczy Białowieskiej", type: "TouristAttraction", image: "/images/atrakcje/melex.webp" },
    { name: "Ognisko", description: "Wieczorne spotkania przy ognisku", type: "TouristAttraction", image: "/images/atrakcje/ognisko.webp" },
    { name: "Quady", description: "Przejażdżki quadem i skuterem śnieżnym", type: "TouristAttraction", image: "/images/atrakcje/quad.jpg" },
    { name: "Rowery elektryczne", description: "Wypożyczalnia rowerów tradycyjnych i elektrycznych", type: "TouristAttraction", image: "/images/atrakcje/rowery.jpg" },
    { name: "Uloterapia", description: "Terapia pszczołami - apiterapia", type: "TouristAttraction", image: "/images/atrakcje/uloterapia.jpg" },
    { name: "Spływ kajakowy", description: "Spływy kajakowe rzeką Narewką", type: "TouristAttraction", image: "/images/atrakcje/kajaki.jpg" },
    { name: "Zalew Siemianówka", description: "Plaża i atrakcje wodne - 7.7 km", type: "TouristAttraction", image: "/images/atrakcje/zalew.webp" },
    { name: "Żubry", description: "Obserwacja dzikich żubrów w Puszczy Białowieskiej", url: "https://dworbartnika.pl/zubry-bialowieza", type: "TouristAttraction", image: "/images/zubry/zubry_latem.webp" },
    { name: "Rezerwat ścisły", description: "Wycieczki z przewodnikiem po puszczy", type: "TouristAttraction", image: "/images/atrakcje/rezerwat.webp" },
  ];

  return (
    <ItemListSchema
      name="Atrakcje w Dworze Bartnika i okolicy"
      description="Lista atrakcji dostępnych w hotelu Dwór Bartnika oraz w okolicy Puszczy Białowieskiej."
      url="https://dworbartnika.pl/atrakcje-bialowieza"
      items={atrakcje}
      itemType="TouristAttraction"
    />
  );
}

// Predefiniowany komponent dla strony Noclegi
export function NoclegiItemListSchema() {
  const pokoje = [
    { name: "Pokoje 2-osobowe Białowieża", description: "Od 175 PLN/os - 20 komfortowych pokoi", url: "https://dworbartnika.pl/pokoje-2-osobowe-bialowieza", type: "Product" },
    { name: "Pokoje 3-osobowe Białowieża", description: "Od 150 PLN/os - pokoje dla rodzin", url: "https://dworbartnika.pl/pokoje-3-osobowe-bialowieza", type: "Product" },
    { name: "Pokoje rodzinne Białowieża", description: "Od 120 PLN/os - przestronne pokoje rodzinne", url: "https://dworbartnika.pl/pokoje-rodzinne-bialowieza", type: "Product" },
    { name: "Apartament z sauną Białowieża", description: "300 PLN/os - luksusowy apartament z prywatną sauną", url: "https://dworbartnika.pl/apartament-z-sauna-bialowieza", type: "Product" },
    { name: "Apartament z jacuzzi Białowieża", description: "400 PLN/os - ekskluzywny apartament z jacuzzi", url: "https://dworbartnika.pl/apartament-z-jacuzzi-bialowieza", type: "Product" },
  ];

  return (
    <ItemListSchema
      name="Noclegi w Dworze Bartnika przy Białowieży"
      description="Oferta noclegowa hotelu Dwór Bartnika: pokoje 2-4 osobowe, apartamenty z sauną i jacuzzi."
      url="https://dworbartnika.pl/noclegi-bialowieza"
      items={pokoje}
      itemType="Product"
    />
  );
}
