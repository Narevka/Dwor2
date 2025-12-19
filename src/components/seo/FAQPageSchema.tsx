/**
 * FAQPageSchema - Schema.org JSON-LD dla strony FAQ
 * 
 * Generuje strukturę FAQPage zgodną ze Schema.org.
 * Daje szansę na Featured Snippets w Google (People Also Ask).
 * 
 * Używany na stronie /faq.
 */

import { faqItems } from '@/data/faqData';

export function FAQPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "FAQ - Najczęściej Zadawane Pytania | Dwór Bartnika",
    "description": "Odpowiedzi na najczęściej zadawane pytania o Dwór Bartnika i Puszczę Białowieską.",
    "url": "https://dworbartnika.pl/faq",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    })),
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Strona główna",
          "item": "https://dworbartnika.pl"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "FAQ",
          "item": "https://dworbartnika.pl/faq"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
