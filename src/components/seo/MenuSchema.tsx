/**
 * MenuSchema - Komponent Schema.org dla menu restauracji
 * 
 * Generuje pełne Menu Schema z danymi z menuData.
 * Używany na stronie /menu.
 */

import { menuSections, zestawDnia, sniadania } from '@/data/menuData';

export function MenuSchema() {
  const menuSectionsSchema = menuSections.map((section) => ({
    "@type": "MenuSection",
    "name": section.title,
    "description": section.subtitle || undefined,
    "hasMenuItem": section.items.map((item) => ({
      "@type": "MenuItem",
      "name": item.name,
      "description": item.description || undefined,
      "offers": {
        "@type": "Offer",
        "price": typeof item.price === 'number' ? item.price : undefined,
        "priceCurrency": "PLN"
      },
      "suitableForDiet": item.tags?.map((tag) => {
        switch (tag) {
          case 'vegan': return "https://schema.org/VeganDiet";
          case 'vegetarian': return "https://schema.org/VegetarianDiet";
          case 'gluten-free': return "https://schema.org/GlutenFreeDiet";
          default: return undefined;
        }
      }).filter(Boolean)
    }))
  }));

  // Dodaj zestaw dnia
  menuSectionsSchema.unshift({
    "@type": "MenuSection",
    "name": "Zestaw Dnia",
    "description": zestawDnia.description,
    "hasMenuItem": [{
      "@type": "MenuItem",
      "name": "Zestaw dnia",
      "description": zestawDnia.description,
      "offers": {
        "@type": "Offer",
        "price": zestawDnia.price,
        "priceCurrency": "PLN"
      },
      "suitableForDiet": undefined
    }]
  });

  // Dodaj śniadania
  menuSectionsSchema.push({
    "@type": "MenuSection",
    "name": "Śniadania",
    "description": "Śniadania hotelowe - forma bufetu",
    "hasMenuItem": sniadania.zestawy.map((zestaw) => ({
      "@type": "MenuItem",
      "name": zestaw.name,
      "description": zestaw.items.join(", "),
      "offers": {
        "@type": "Offer",
        "price": sniadania.price,
        "priceCurrency": "PLN"
      },
      "suitableForDiet": undefined
    }))
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": "https://dworbartnika.pl/menu/#menu",
    "name": "Menu Restauracji Carska Komnata",
    "description": "Karta dań restauracji Carska Komnata w Dworze Bartnika. Kuchnia polska, regionalna, dania z dziczyzny, pierogi, warenyki.",
    "url": "https://dworbartnika.pl/menu",
    "inLanguage": "pl-PL",
    "hasMenuSection": menuSectionsSchema,
    "mainEntityOfPage": {
      "@id": "https://dworbartnika.pl/restauracja/#restaurant"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
