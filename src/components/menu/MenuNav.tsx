'use client';

import { useState, useEffect } from 'react';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'zestaw-dnia', label: 'Zestaw dnia' },
  { id: 'przekaski', label: 'Przekąski' },
  { id: 'zupy', label: 'Zupy' },
  { id: 'dania-glowne', label: 'Dania główne' },
  { id: 'dodatki', label: 'Dodatki' },
  { id: 'desery', label: 'Desery' },
  { id: 'napoje-gorace', label: 'Napoje gorące' },
  { id: 'napoje-zimne', label: 'Napoje zimne' },
  { id: 'alkohole', label: 'Alkohole' },
  { id: 'sniadania', label: 'Śniadania' },
];

export function MenuNav() {
  const [activeSection, setActiveSection] = useState('zestaw-dnia');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-[80px] z-40 py-4 relative hidden md:block">
      <div className="container-custom">
        <div className="flex gap-1.5 py-3 justify-center flex-wrap">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all shadow-sm ${
                activeSection === id
                  ? 'bg-amber-800 text-white shadow-md'
                  : 'bg-amber-50/90 text-amber-900 hover:bg-amber-100 border border-amber-300/50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

