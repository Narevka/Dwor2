/**
 * BreadcrumbSchema - Ukryty komponent Schema.org dla SEO
 * 
 * Generuje JSON-LD BreadcrumbList bez widocznego UI.
 * Google wykorzystuje te dane do wyświetlania breadcrumbs w wynikach wyszukiwania.
 * 
 * @example
 * <BreadcrumbSchema items={[
 *   { name: "Strona główna", url: "https://dworbartnika.pl" },
 *   { name: "Hotel", url: "https://dworbartnika.pl/hotel" }
 * ]} />
 */

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
