import { MenuSection as MenuSectionType } from '@/data/menuData';
import { MenuItem } from './MenuItem';

interface MenuSectionProps {
  section: MenuSectionType;
}

// Ornament SVG - dekoracyjna linia z motywem (ciemny na jasnym tle)
const Ornament = () => (
  <svg className="w-full h-8 text-amber-800/60" viewBox="0 0 400 30" fill="currentColor">
    <path d="M0,15 L150,15 M250,15 L400,15" stroke="currentColor" strokeWidth="1" fill="none"/>
    <path d="M175,5 Q200,15 175,25 M225,5 Q200,15 225,25" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="200" cy="15" r="4" />
    <circle cx="160" cy="15" r="2" />
    <circle cx="240" cy="15" r="2" />
  </svg>
);

export function MenuSection({ section }: MenuSectionProps) {
  return (
    <section
      id={section.id}
      className="menu-section scroll-mt-32 mb-4 max-w-3xl mx-auto"
    >
      {/* Tło sekcji z zaokrąglonymi rogami - dopasowane do treści */}
      <div className="bg-amber-50/75 backdrop-blur-[2px] rounded-xl p-4 md:p-6 shadow-lg border border-amber-200/40">
        {/* Nagłówek sekcji - ciemne kolory na jasnym tle */}
        <div className="text-center mb-4">
          <Ornament />
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 tracking-wide" style={{ fontFamily: "'Times New Roman', serif" }}>
            {section.title}
          </h2>
          {section.subtitle && (
            <p className="text-amber-700 text-sm mt-1">– {section.subtitle}</p>
          )}
          <Ornament />
        </div>

        {/* Lista pozycji */}
        <div>
          {section.items.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

