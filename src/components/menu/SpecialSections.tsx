import Image from 'next/image';
import { zestawDnia, sniadania, dietaryLegend } from '@/data/menuData';

// Ikona samowara - oryginalna grafika z menu
const SamovarImage = () => (
  <div className="relative w-40 h-48">
    <Image
      src="/images/menu/samowar.png"
      alt="Samowar"
      fill
      className="object-contain mix-blend-multiply"
      style={{ filter: 'contrast(1.1) brightness(1.05)' }}
    />
  </div>
);

// Ornament SVG - dekoracyjna linia z motywem vintage (ciemny na jasnym tle)
const Ornament = () => (
  <svg className="w-full h-6 text-amber-800/50" viewBox="0 0 400 24" fill="none" stroke="currentColor" strokeWidth="1">
    <line x1="0" y1="12" x2="160" y2="12" />
    <line x1="240" y1="12" x2="400" y2="12" />
    <circle cx="175" cy="12" r="3" fill="currentColor" />
    <path d="M185 6 Q200 12 185 18" strokeWidth="1.5" />
    <path d="M215 6 Q200 12 215 18" strokeWidth="1.5" />
    <circle cx="225" cy="12" r="3" fill="currentColor" />
  </svg>
);

// SVG ikona samowara - szczegółowa wersja vintage
const SamovarIcon = () => (
  <svg className="w-32 h-40" viewBox="0 0 120 150" fill="none">
    {/* Cień/podstawa */}
    <ellipse cx="60" cy="142" rx="32" ry="6" fill="#8b6914" opacity="0.15" />
    
    {/* Nóżki */}
    <path d="M35 132 L38 138 L42 138 L40 132" fill="#92400e" stroke="#78350f" strokeWidth="0.5" />
    <path d="M78 132 L82 138 L86 138 L80 132" fill="#92400e" stroke="#78350f" strokeWidth="0.5" />
    <ellipse cx="60" cy="138" rx="28" ry="4" fill="#a16207" stroke="#78350f" strokeWidth="1" />
    
    {/* Podstawa korpusu */}
    <ellipse cx="60" cy="132" rx="24" ry="5" fill="#b45309" stroke="#78350f" strokeWidth="1" />
    
    {/* Główny korpus - gradient */}
    <path 
      d="M36 132 Q28 115 30 85 Q32 60 60 52 Q88 60 90 85 Q92 115 84 132 Z" 
      fill="url(#samovarGradient)" 
      stroke="#78350f" 
      strokeWidth="1.5"
    />
    
    {/* Dekoracyjne paski na korpusie */}
    <ellipse cx="60" cy="75" rx="26" ry="5" fill="none" stroke="#78350f" strokeWidth="0.8" opacity="0.5" />
    <ellipse cx="60" cy="95" rx="24" ry="4" fill="none" stroke="#78350f" strokeWidth="0.8" opacity="0.5" />
    <ellipse cx="60" cy="115" rx="22" ry="4" fill="none" stroke="#78350f" strokeWidth="0.8" opacity="0.5" />
    
    {/* Ozdobny wzór na korpusie */}
    <path d="M50 70 Q60 65 70 70 Q60 75 50 70" fill="#78350f" opacity="0.2" />
    <path d="M48 90 Q60 85 72 90 Q60 95 48 90" fill="#78350f" opacity="0.2" />
    
    {/* Szyjka */}
    <path d="M48 52 L48 42 Q60 38 72 42 L72 52" fill="#b45309" stroke="#78350f" strokeWidth="1" />
    <ellipse cx="60" cy="42" rx="12" ry="3" fill="#d97706" stroke="#78350f" strokeWidth="1" />
    
    {/* Pokrywa */}
    <ellipse cx="60" cy="40" rx="14" ry="4" fill="#b45309" stroke="#78350f" strokeWidth="1" />
    <path d="M52 38 Q60 32 68 38" fill="#a16207" stroke="#78350f" strokeWidth="1" />
    
    {/* Gałka na pokrywie */}
    <ellipse cx="60" cy="30" rx="4" ry="2" fill="#d97706" stroke="#78350f" strokeWidth="0.8" />
    <ellipse cx="60" cy="26" rx="3" ry="4" fill="#b45309" stroke="#78350f" strokeWidth="0.8" />
    <circle cx="60" cy="22" r="3" fill="#d97706" stroke="#78350f" strokeWidth="0.8" />
    
    {/* Kranik */}
    <rect x="90" y="82" width="18" height="8" rx="2" fill="#a16207" stroke="#78350f" strokeWidth="1" />
    <circle cx="112" cy="86" r="5" fill="#d97706" stroke="#78350f" strokeWidth="1" />
    <circle cx="112" cy="86" r="2" fill="#78350f" />
    
    {/* Uchwyty */}
    <path d="M30 65 Q18 72 22 82 Q26 92 30 85" fill="none" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M90 65 Q102 72 98 82 Q94 92 90 85" fill="none" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Gradient definition */}
    <defs>
      <linearGradient id="samovarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#92400e" />
        <stop offset="30%" stopColor="#d97706" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="70%" stopColor="#d97706" />
        <stop offset="100%" stopColor="#92400e" />
      </linearGradient>
    </defs>
  </svg>
);

// Sekcja Zestaw Dnia - kompaktowa, spójna z innymi sekcjami
export function ZestawDniaSection() {
  return (
    <section id="zestaw-dnia" className="menu-section scroll-mt-32 mb-4 max-w-3xl mx-auto">
      <div className="bg-amber-50/75 backdrop-blur-[2px] rounded-xl p-4 md:p-6 shadow-lg border border-amber-200/40">
        <div className="text-center">
          <Ornament />
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 tracking-wide" style={{ fontFamily: "'Times New Roman', serif" }}>
            Zestaw dnia
          </h2>
          <p className="text-amber-700 mt-2">
            <span className="font-medium">Zupa dnia</span>
            <span className="mx-2 text-amber-500">+</span>
            <span className="font-medium">Danie dnia</span>
            <span className="mx-3">—</span>
            <span className="font-bold text-amber-900 text-lg">{zestawDnia.price} zł</span>
          </p>
          <Ornament />
        </div>
      </div>
    </section>
  );
}

// Sekcja Śniadania - ciemne kolory na jasnym tle
export function SniadaniaSection() {
  return (
    <section id="sniadania" className="menu-section scroll-mt-32 mb-4 max-w-3xl mx-auto">
      {/* Tło sekcji */}
      <div className="bg-amber-50/75 backdrop-blur-[2px] rounded-xl p-4 md:p-6 shadow-lg border border-amber-200/40">
        <div className="text-center mb-6">
          <Ornament />
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 tracking-wide mt-2" style={{ fontFamily: "'Times New Roman', serif" }}>
            Śniadania
          </h2>
          <p className="text-xl text-amber-700 mt-2" style={{ fontFamily: "'Times New Roman', serif" }}>
            za <span className="font-bold text-amber-800 text-2xl">{sniadania.price} zł</span>
          </p>
          <Ornament />
        </div>

        {/* Zestawy śniadaniowe */}
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
        {sniadania.zestawy.map((zestaw, index) => (
          <div 
            key={index}
            className="bg-amber-100/60 backdrop-blur-sm rounded-xl p-6 border border-amber-600/30 shadow-lg"
          >
            <h3 className="text-xl font-bold text-amber-900 mb-4 text-center" style={{ fontFamily: "'Times New Roman', serif" }}>
              {zestaw.name}
            </h3>
            <ul className="space-y-1">
              {zestaw.items.map((item, idx) => (
                <li key={idx} className="text-gray-700 flex items-center gap-2">
                  <span className="text-amber-600">↳</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        </div>

        {/* Uwaga */}
        <p className="text-center text-gray-600 text-sm mt-6 max-w-2xl mx-auto italic">
          {sniadania.note}
        </p>
      </div>{/* Koniec tła sekcji */}
    </section>
  );
}

// Sekcja Fenomen Natury - miód (styl jak inne sekcje menu, ale szerszy box)
export function FenomenNaturySection() {
  return (
    <section id="fenomen-natury" className="menu-section scroll-mt-32 mb-4 max-w-4xl mx-auto">
      <div className="bg-amber-50/75 backdrop-blur-[2px] rounded-xl p-5 md:p-8 shadow-lg border border-amber-200/40">
        {/* Tytuł */}
        <div className="text-center mb-5">
          <Ornament />
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 tracking-wide mt-2" style={{ fontFamily: "'Times New Roman', serif" }}>
            Leczniczy miód
          </h2>
          <p className="text-amber-700 mt-2 text-sm">
            z lokalnej pasieki położonej w sercu Puszczy Białowieskiej
          </p>
          <Ornament />
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
          {/* Zdjęcie miodu - duże */}
          <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
            <div className="relative w-80 md:w-[340px] rounded-xl overflow-hidden shadow-lg border-2 border-amber-300/60">
              <Image
                src="/images/new/62a89f93a288c_o_large.jpg"
                alt="Miód Fenomen Natury z Puszczy Białowieskiej"
                width={340}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Tekst */}
          <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-amber-800 mb-1" style={{ fontFamily: "'Times New Roman', serif" }}>
                <a 
                  href="https://fenomennatury.pl/?fenomen-natury" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-600 underline underline-offset-2 transition-colors"
                >
                  Fenomen Natury
                </a>
              </h3>
              <p className="text-amber-600 font-medium mb-3">
                miód pszczeli z pyłkiem, mleczkiem i kitem – potrójnie uszlachetniany
              </p>

              <p className="text-sm text-gray-700 italic mb-3">
                Naturalny produkt pszczeli o właściwościach odżywczych, leczniczych i kosmetycznych.
              </p>

            <div className="text-sm text-gray-700 space-y-2 leading-relaxed mb-3">
              <p>
                Posiada właściwości bakteriobójcze, antywirusowe, przeciwzapalne, znieczulające, 
                stymulujące i regenerujące. Niezastąpiony w leczeniu astmy, przewlekłych nieżytów oskrzeli, 
                infekcji jamy ustnej. Zwalcza objawy przeziębienia i grypy, wzmacnia odporność organizmu.
              </p>
              <p className="text-amber-800 font-medium">
                Jako odżywka dostarcza łatwo przyswajalnych składników mineralnych, witamin i aminokwasów.
              </p>
            </div>

            <p className="text-sm text-gray-700">
              Miód zbierany z leśnych malin, jagód, lip, wrzosów i dzikich kwiatów – 
              <a 
                href="https://fenomennatury.pl/?fenomen-natury" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-900 font-bold hover:text-primary-600 transition-colors"
              >
                FENOMEN NATURY
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Legenda oznaczeń - ciemne kolory na jasnym tle
export function DietaryLegend() {
  return (
    <div className="bg-amber-50/75 backdrop-blur-[2px] rounded-xl p-4 shadow-lg border border-amber-200/40 flex flex-wrap justify-center gap-4 max-w-md mx-auto">
      {dietaryLegend.map(({ tag, label, color }) => (
        <div key={tag} className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill={color}>
            {tag === 'gluten-free' && (
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-2h2v2zm0-4h-2V7h2v5z"/>
            )}
            {tag === 'vegetarian' && (
              <path d="M17.75 6.75c-1.5-1.5-4-1.5-5.5 0-.35.35-.65.75-.85 1.2-.2-.45-.5-.85-.85-1.2-1.5-1.5-4-1.5-5.5 0s-1.5 4 0 5.5l6.35 6.35c.2.2.5.2.7 0l6.35-6.35c1.5-1.5 1.5-4-.7-5.5z"/>
            )}
            {tag === 'vegan' && (
              <>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" opacity="0.3"/>
                <path d="M8 12l2-6 2 6-2 6-2-6zm4 0l2-6 2 6-2 6-2-6z"/>
              </>
            )}
          </svg>
          <span className="text-sm text-gray-700">{label}</span>
        </div>
      ))}
    </div>
  );
}

// Eksport ikon do użycia w innych miejscach
export { SamovarIcon, SamovarImage };
