'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Phone, Mail } from 'lucide-react';
import { faqCategories, faqItems, FAQItem, FAQCategoryId } from '@/data/faqData';

// ═══════════════════════════════════════════════════════════════════
// ACCORDION ITEM COMPONENT
// ═══════════════════════════════════════════════════════════════════

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-4 px-4 flex items-start justify-between text-left hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-gray-800 pr-4">{item.question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-primary-500 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 text-gray-600 leading-relaxed">
          {item.answerHtml ? (
            <p dangerouslySetInnerHTML={{ __html: item.answerHtml }} />
          ) : (
            <p>{item.answer}</p>
          )}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// FAQ CATEGORY SECTION
// ═══════════════════════════════════════════════════════════════════

interface FAQCategorySectionProps {
  categoryId: FAQCategoryId;
  categoryName: string;
  items: FAQItem[];
  openItemId: string | null;
  onToggleItem: (itemId: string) => void;
}

function FAQCategorySection({ categoryId, categoryName, items, openItemId, onToggleItem }: FAQCategorySectionProps) {
  return (
    <section id={categoryId} className="mb-8 scroll-mt-32 md:scroll-mt-40">
      <h2 className="font-cursive text-2xl md:text-3xl text-primary-400 mb-4">
        {categoryName}
      </h2>
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openItemId === item.id}
            onToggle={() => onToggleItem(item.id)}
          />
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════
// CATEGORY NAVIGATION
// ═══════════════════════════════════════════════════════════════════

interface CategoryNavProps {
  activeCategory: FAQCategoryId | null;
}

function CategoryNav({ activeCategory }: CategoryNavProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    const element = document.getElementById(anchor);
    if (element) {
      const navHeight = 120; // Zwiększony offset dla sticky nav
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 sticky top-24">
      <h3 className="font-cursive text-xl text-primary-400 mb-3">Kategorie</h3>
      <ul className="space-y-2">
        {faqCategories.map((category) => (
          <li key={category.id}>
            <a
              href={`#${category.anchor}`}
              onClick={(e) => handleClick(e, category.anchor)}
              className={`block px-3 py-2 rounded-lg transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary-100 text-primary-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ═══════════════════════════════════════════════════════════════════
// MOBILE CATEGORY NAV (Horizontal scroll)
// ═══════════════════════════════════════════════════════════════════

function MobileCategoryNav({ activeCategory }: CategoryNavProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    const element = document.getElementById(anchor);
    if (element) {
      const navHeight = 180; // Zwiększony offset dla sticky nav + hero
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-[64px] z-20 bg-gray-50 py-3 -mx-5 px-5 border-b border-gray-200">
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {faqCategories.map((category) => (
          <a
            key={category.id}
            href={`#${category.anchor}`}
            onClick={(e) => handleClick(e, category.anchor)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-primary-500 text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-primary-300'
            }`}
          >
            {category.name}
          </a>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// CTA BOX
// ═══════════════════════════════════════════════════════════════════

function CTABox() {
  return (
    <div className="bg-primary-50 rounded-xl p-6 md:p-8 text-center border border-primary-100">
      <h2 className="font-cursive text-2xl md:text-3xl text-primary-600 mb-3">
        Masz inne pytania?
      </h2>
      <p className="text-gray-600 mb-6">
        Chętnie odpowiemy! Zadzwoń lub napisz do nas.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <a
          href="tel:+48721907000"
          className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium"
        >
          <Phone className="w-5 h-5" />
          +48 721 907 000
        </a>
        <a
          href="mailto:sapiolko@op.pl"
          className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium"
        >
          <Mail className="w-5 h-5" />
          sapiolko@op.pl
        </a>
      </div>
      <Link
        href="/kontakt"
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors font-medium"
      >
        Skontaktuj się
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════

export function FAQContent() {
  const [openItemId, setOpenItemId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<FAQCategoryId | null>(null);

  const handleToggleItem = (itemId: string) => {
    setOpenItemId(openItemId === itemId ? null : itemId);
    
    // Update active category based on opened item
    const item = faqItems.find(i => i.id === itemId);
    if (item && openItemId !== itemId) {
      setActiveCategory(item.category);
    }
  };

  // Group items by category
  const itemsByCategory = faqCategories.map(cat => ({
    ...cat,
    items: faqItems.filter(item => item.category === cat.id)
  }));

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[60vh] min-h-[350px] md:h-[85vh] md:min-h-[600px]">
        <Image
          src="/images/new/DSC02829.JPG"
          alt="FAQ - Dwór Bartnika"
          fill
          className="object-cover object-center"
          priority
          quality={75}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-black/40" />
        
        {/* Przycisk "więcej informacji" - tylko desktop */}
        <div className="hidden md:block absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
          <a href="#content" className="text-white text-sm flex flex-col items-center gap-2 hover:text-primary-300 transition-colors group">
            <span className="w-8 h-8 border border-white/70 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <span className="text-xs uppercase tracking-wider font-light" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>więcej<br/>informacji</span>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE: Box nachodzący na hero + treść
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="md:hidden">
        {/* Box z tytułem */}
        <div id="content" className="relative z-10 -mt-20 px-5 pb-4">
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/15 border border-stone-200/60 overflow-hidden">
            <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
              <h1 className="font-cursive text-3xl text-primary-400 text-center mb-3">
                Najczęściej Zadawane Pytania
              </h1>
              <div className="flex justify-center mb-3">
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
              </div>
              <p className="text-gray-700 leading-relaxed text-sm text-center">
                Zebraliśmy odpowiedzi na pytania, które najczęściej zadają nasi goście.
                Jeśli nie znajdziesz odpowiedzi na swoje pytanie,{' '}
                <Link href="/kontakt" className="text-primary-600 font-medium hover:underline">
                  skontaktuj się z nami
                </Link>.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile category nav */}
        <MobileCategoryNav activeCategory={activeCategory} />

        {/* FAQ sections */}
        <div className="px-5 py-6 bg-gray-50">
          {itemsByCategory.map((category) => (
            <FAQCategorySection
              key={category.id}
              categoryId={category.id}
              categoryName={category.name}
              items={category.items}
              openItemId={openItemId}
              onToggleItem={handleToggleItem}
            />
          ))}

          {/* CTA Box */}
          <CTABox />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP: Layout z sidebar
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="hidden md:block">
        <section id="content" className="bg-gray-50 py-12">
          <div className="container-custom">
            {/* Nagłówek */}
            <div className="text-center mb-10">
              <h1 className="font-cursive text-5xl md:text-6xl text-primary-400 mb-4">
                Najczęściej Zadawane Pytania
              </h1>
              <div className="flex justify-center mb-4">
                <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Zebraliśmy odpowiedzi na pytania, które najczęściej zadają nasi goście.
                Jeśli nie znajdziesz odpowiedzi na swoje pytanie,{' '}
                <Link href="/kontakt" className="text-primary-600 font-medium hover:underline">
                  skontaktuj się z nami
                </Link>.
              </p>
            </div>

            {/* FAQ content - pełna szerokość */}
            <div className="max-w-4xl mx-auto">
              {itemsByCategory.map((category) => (
                <FAQCategorySection
                  key={category.id}
                  categoryId={category.id}
                  categoryName={category.name}
                  items={category.items}
                  openItemId={openItemId}
                  onToggleItem={handleToggleItem}
                />
              ))}

              {/* CTA Box */}
              <CTABox />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
