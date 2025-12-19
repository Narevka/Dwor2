/**
 * Schema.org Components - Eksporty
 * 
 * Wszystkie komponenty Schema.org JSON-LD dla SEO.
 */

// Globalny istniejący
export { BreadcrumbSchema } from './BreadcrumbSchema';

// Globalne (layout.tsx)
export { OrganizationSchema } from './OrganizationSchema';
export { WebSiteSchema } from './WebSiteSchema';

// Hotel
export { HotelSchema } from './HotelSchema';

// Restauracja i Menu
export { RestaurantSchema } from './RestaurantSchema';
export { MenuSchema } from './MenuSchema';

// Atrakcje
export { MuseumSchema } from './MuseumSchema';
export { TouristAttractionSchema, OgrodSensorycznySchema } from './TouristAttractionSchema';
export { ZubrySchema } from './ZubrySchema';

// Wydarzenia
export { EventVenueSchema } from './EventVenueSchema';
export { EventSchema } from './EventSchema';

// Pokoje
export { 
  HotelRoomSchema,
  Pokoje2OsoboweSchema,
  Pokoje3OsoboweSchema,
  PokojeRodzinneSchema,
  ApartamentSaunaSchema,
  ApartamentJacuzziSchema
} from './HotelRoomSchema';

// Produkty (pokoje jako oferty)
export {
  ProductOfferSchema,
  Pokoje2OsoboweProductSchema,
  Pokoje3OsoboweProductSchema,
  PokojeRodzinneProductSchema,
  ApartamentSaunaProductSchema,
  ApartamentJacuzziProductSchema
} from './ProductOfferSchema';

// Listy
export { 
  ItemListSchema,
  AtrakcjeItemListSchema,
  NoclegiItemListSchema
} from './ItemListSchema';

// Kontakt
export { ContactPageSchema } from './ContactPageSchema';

// FAQ
export { FAQPageSchema } from './FAQPageSchema';

// Strony ogólne
export {
  WebPageSchema,
  RegulaminSchema,
  RodoSchema,
  RezerwacjaSchema,
  HomePageSchema,
  OfertyListSchema
} from './WebPageSchema';
