import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { BreadcrumbSchema, ZubrySchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Żubry Białowieża - Gdzie Zobaczyć na Wolności',
  description: 'Gdzie zobaczyć żubry w Białowieży? Karmnik żubrów 2 km od Dworu Bartnika, Rezerwat Pokazowy Żubrów 18 km. Najlepsze pory i miejsca na obserwację żubrów w Puszczy Białowieskiej.',
  alternates: {
    canonical: 'https://dworbartnika.pl/zubry-bialowieza',
  },
  openGraph: {
    title: 'Żubry Białowieża - Gdzie Zobaczyć | Dwór Bartnika',
    description: 'Odkryj gdzie zobaczyć żubry na wolności. Karmnik żubrów tylko 2 km od hotelu!',
    url: 'https://dworbartnika.pl/zubry-bialowieza',
    siteName: 'Dwór Bartnika',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/images/OG/OG_zubry_bialowieza.jpg',
        width: 1200,
        height: 630,
        alt: 'Żubry w Puszczy Białowieskiej',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Żubry Białowieża - Gdzie Zobaczyć | Dwór Bartnika',
    description: 'Odkryj gdzie zobaczyć żubry na wolności. Karmnik żubrów tylko 2 km od hotelu!',
    images: ['/images/OG/OG_zubry_bialowieza.jpg'],
  },
};

// Dane o miejscach obserwacji
const miejscaObserwacji = [
  {
    id: 'karmnik',
    title: 'Karmnik Żubrów w Puszczy',
    distance: '2 km',
    image: '/images/zubry/zubr_w_polu.webp',
    imageAlt: 'Dziki żubr na polu w pobliżu Dworu Bartnika - fot. Maria Sapiołko',
    description: 'Najbliższe miejsce, gdzie można zobaczyć dzikie żubry bez ogrodzenia. Karmnik znajduje się zaledwie 2 km od Dworu Bartnika. Organizujemy przejazdy melexem dla naszych gości.',
    details: [
      { label: 'Odległość', value: '2 km' },
      { label: 'Najlepsza pora', value: 'Wczesny poranek (6:00-8:00) lub zmierzch (17:00-19:00)' },
      { label: 'Sezon', value: 'Cały rok, najlepiej zimą' },
      { label: 'Dojazd', value: 'Melex z Dworu Bartnika lub pieszo' },
    ],
  },
  {
    id: 'gruszki',
    title: 'Gruszki - Herbarium i Zegar Słoneczny',
    distance: '3 km',
    image: '/images/zubry/zubry_zima.webp',
    imageAlt: 'Żubry w śniegu przy karmniku zimą - fot. Maria Sapiołko',
    description: 'W miejscowości Gruszki znajduje się herbarium oraz unikalny zegar słoneczny. To również jedno z miejsc, gdzie można spotkać żubry przy karmnikach rozstawionych w puszczy.',
    details: [
      { label: 'Odległość', value: '3 km' },
      { label: 'Atrakcje', value: 'Herbarium, zegar słoneczny' },
      { label: 'Dojazd', value: 'Melex lub rower' },
    ],
  },
  {
    id: 'kosy-most',
    title: 'Wieża Widokowa Kosy Most',
    distance: '5 km',
    image: '/images/zubry/mlode_zubry.webp',
    imageAlt: 'Młode żubry na pastwisku w okolicy Narewki - fot. Maria Sapiołko',
    description: 'Punkt widokowy z panoramą doliny rzeki Narewki. Często można stąd obserwować żubry w naturalnym środowisku, szczególnie wczesnym rankiem i wieczorem.',
    details: [
      { label: 'Odległość', value: '5 km' },
      { label: 'Widok', value: 'Panorama doliny Narewki' },
      { label: 'Dojazd', value: 'Melex lub rower' },
    ],
  },
  {
    id: 'rezerwat',
    title: 'Rezerwat Pokazowy Żubrów',
    distance: '18 km',
    image: '/images/zubry/czarny_zubr.webp',
    imageAlt: 'Majestatyczny żubr o ciemnym umaszczeniu w Puszczy Białowieskiej - fot. Maria Sapiołko',
    description: 'Jeśli chcesz mieć 100% pewność zobaczenia żubrów, odwiedź Rezerwat Pokazowy w Białowieży. Oprócz żubrów zobaczysz tam żubronie, sarny, wilki, rysie i koniki polskie.',
    details: [
      { label: 'Odległość', value: '18 km (Białowieża)' },
      { label: 'Godziny', value: '9:00-17:00 (lato), 9:00-16:00 (zima)' },
      { label: 'Bilety', value: '~20 zł dorośli, ~10 zł dzieci' },
      { label: 'Gwarancja', value: '100% pewność zobaczenia żubrów' },
    ],
  },
];

// Dane o porach obserwacji
const poryDnia = [
  { pora: '6:00-8:00', szansa: 'Bardzo wysoka', uwagi: 'Żubry najaktywniejsze', color: 'bg-green-100 text-green-800' },
  { pora: '8:00-16:00', szansa: 'Niska', uwagi: 'Żubry odpoczywają w lesie', color: 'bg-red-100 text-red-800' },
  { pora: '17:00-20:00', szansa: 'Wysoka', uwagi: 'Wieczorne karmienie', color: 'bg-yellow-100 text-yellow-800' },
];

const sezony = [
  { sezon: 'Zima (XII-II)', szansa: 'Bardzo wysoka', uwagi: 'Żubry gromadzą się przy karmnikach', color: 'bg-green-100 text-green-800' },
  { sezon: 'Wiosna (III-V)', szansa: 'Średnia', uwagi: 'Okres godowy', color: 'bg-yellow-100 text-yellow-800' },
  { sezon: 'Lato (VI-VIII)', szansa: 'Niska', uwagi: 'Żubry rozproszone w lesie', color: 'bg-red-100 text-red-800' },
  { sezon: 'Jesień (IX-XI)', szansa: 'Wysoka', uwagi: 'Przed zimą zbierają się w stada', color: 'bg-yellow-100 text-yellow-800' },
];

const ciekawostki = [
  'W Puszczy Białowieskiej żyje około 700 żubrów (stan na 2024)',
  'Żubr europejski to największy ssak lądowy Europy',
  'Dorosły samiec waży do 900 kg',
  'Żubry zostały uratowane od wyginięcia - w 1927 roku żyło tylko 12 osobników',
  'Puszcza Białowieska to jedyne miejsce w Europie, gdzie żubry żyją na wolności nieprzerwanie',
];

export default function ZubryBialowiezaPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://dworbartnika.pl" },
        { name: "Atrakcje", url: "https://dworbartnika.pl/atrakcje-bialowieza" },
        { name: "Żubry Białowieża", url: "https://dworbartnika.pl/zubry-bialowieza" }
      ]} />
      <ZubrySchema />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[60vh] min-h-[350px] md:h-[85vh] md:min-h-[600px]">
        <Image
          src="/images/zubry/zubry_latem.webp"
          alt="Stado żubrów na letniej polanie w Puszczy Białowieskiej - fot. Maria Sapiołko"
          fill
          className="object-cover object-center"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-black/40" />
        
        {/* Przycisk "więcej informacji" */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
          <a href="#content" className="text-white text-sm flex flex-col items-center gap-2 hover:text-primary-300 transition-colors group">
            <span className="w-10 h-10 border-2 border-white/80 rounded-full flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
            <span className="text-xs uppercase tracking-wider font-light" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>zobacz<br/>więcej</span>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE: Storytelling Layout
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="md:hidden">
        {/* BOX 0: Wprowadzenie - nachodzi na hero */}
        <div id="content" className="relative z-10 -mt-24 px-5 pb-6">
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/15 border border-stone-200/60 overflow-hidden">
            <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
              <h1 className="font-cursive text-3xl text-primary-400 text-center mb-3">
                Żubry w Białowieży
              </h1>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
              </div>
              <p className="text-gray-700 leading-relaxed text-sm text-center mb-2">
                Żubry to symbole Puszczy Białowieskiej i jedne z najbardziej poszukiwanych atrakcji regionu.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm text-center">
                Z <Link href="/hotel-bialowieza" className="text-primary-500 font-semibold underline">Dworu Bartnika</Link> masz doskonały punkt wypadowy do obserwacji tych majestatycznych zwierząt zarówno na wolności, jak i w rezerwacie.
              </p>
            </div>
          </div>
        </div>

        {/* Miejsca obserwacji - mobile */}
        {miejscaObserwacji.map((miejsce, index) => (
          <div key={miejsce.id}>
            {/* Zdjęcie */}
            <div className="relative h-[55vh] min-h-[280px]">
              <Image
                src={miejsce.image}
                alt={miejsce.imageAlt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            {/* Box nachodzący na zdjęcie */}
            <div className="relative z-10 -mt-16 px-5 pb-6">
              <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/15 border border-stone-200/60 overflow-hidden">
                <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full font-medium">
                      {miejsce.distance}
                    </span>
                  </div>
                  <h2 className="font-cursive text-2xl text-primary-400 text-center mb-2">{miejsce.title}</h2>
                  <div className="flex justify-center items-center gap-2 mb-3">
                    <div className="w-2 h-2 border border-primary-400/50 rotate-45"></div>
                    <div className="w-12 h-[1px] bg-primary-400/40"></div>
                    <div className="w-1.5 h-1.5 bg-primary-400/60 rotate-45"></div>
                    <div className="w-12 h-[1px] bg-primary-400/40"></div>
                    <div className="w-2 h-2 border border-primary-400/50 rotate-45"></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm text-center mb-4">
                    {miejsce.description}
                  </p>
                  <div className="space-y-2">
                    {miejsce.details.map((detail, idx) => (
                      <div key={idx} className="flex justify-between text-xs">
                        <span className="text-gray-500">{detail.label}:</span>
                        <span className="text-gray-700 font-medium text-right max-w-[60%]">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Sekcja: Najlepsze pory - mobile */}
        <div className="relative h-[45vh] min-h-[250px]">
          <Image
            src="/images/zubry/zubr_mgla_przymrozek.webp"
            alt="Żubr we mgle o poranku podczas przymrozków - fot. Maria Sapiołko"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 -mt-16 px-5 pb-6">
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/15 border border-stone-200/60 overflow-hidden">
            <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
              <h2 className="font-cursive text-2xl text-primary-400 text-center mb-4">Kiedy najlepiej obserwować?</h2>
              
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Według pory dnia</h3>
              <div className="space-y-2 mb-4">
                {poryDnia.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <span className="font-medium text-gray-700">{item.pora}</span>
                    <span className={`px-2 py-0.5 rounded-full ${item.color}`}>{item.szansa}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-sm font-semibold text-gray-800 mb-2">Według sezonu</h3>
              <div className="space-y-2">
                {sezony.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <span className="font-medium text-gray-700">{item.sezon}</span>
                    <span className={`px-2 py-0.5 rounded-full ${item.color}`}>{item.szansa}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Ciekawostki + CTA - mobile */}
        <div className="px-5 pb-4">
          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200/60">
            <h2 className="font-cursive text-2xl text-primary-400 text-center mb-4">Ciekawostki o żubrach</h2>
            <ul className="space-y-2 mb-4">
              {ciekawostki.map((fact, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary-500 mt-1">&#x2022;</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA końcowe - mobile */}
        <div className="px-5 pb-8">
          <div className="bg-white rounded-xl p-5 shadow-lg border border-stone-200/60">
            <h2 className="font-cursive text-2xl text-primary-400 text-center mb-3">Zarezerwuj nocleg blisko żubrów</h2>
            <p className="text-gray-700 text-sm text-center mb-4">
              Dwór Bartnika to idealny punkt wypadowy do obserwacji żubrów. Zaledwie 2 km od karmnika, organizujemy wycieczki melexem dla gości.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/noclegi-bialowieza"
                className="block text-center px-6 py-3 bg-primary-700 text-white rounded-full text-sm font-medium shadow-lg shadow-primary-700/25 hover:bg-primary-800 transition-all"
              >
                Sprawdź dostępne pokoje
              </Link>
              <Link
                href="/atrakcje-bialowieza"
                className="block text-center px-6 py-2 border border-primary-400 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-50 transition-all"
              >
                Zobacz inne atrakcje
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP: Layout z sekcjami
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="content" className="hidden md:block section bg-gray-50">
        <div className="container-custom">
          {/* Nagłówek */}
          <div className="text-center mb-12">
            <h1 className="font-cursive text-5xl md:text-6xl text-primary-400 mb-4">
              Żubry w Białowieży - Gdzie i Kiedy Je Zobaczyć
            </h1>
            <div className="flex justify-center mb-6">
              <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
            </div>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Żubry to symbole Puszczy Białowieskiej i jedne z najbardziej poszukiwanych atrakcji regionu. 
              Z <Link href="/hotel-bialowieza" className="text-primary-600 hover:text-primary-700 font-semibold underline">Dworu Bartnika</Link> masz 
              doskonały punkt wypadowy do obserwacji tych majestatycznych zwierząt zarówno na wolności, jak i w rezerwacie.
            </p>
          </div>

          {/* Miejsca obserwacji - desktop */}
          <h2 className="font-cursive text-3xl text-primary-400 text-center mb-8">
            Miejsca obserwacji żubrów w okolicy
          </h2>
          
          {miejscaObserwacji.map((miejsce, index) => (
            <div key={miejsce.id} className="grid lg:grid-cols-2 gap-8 items-stretch mb-16">
              {index % 2 === 0 ? (
                <>
                  {/* Tekst po lewej */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden flex flex-col justify-center min-h-[350px]">
                    <div className="border-2 border-primary-400/30 rounded-xl m-3 p-8 h-full flex flex-col justify-center">
                      <div className="flex items-center justify-center gap-3 mb-3">
                        <span className="text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                          {miejsce.distance}
                        </span>
                      </div>
                      <h3 className="font-cursive text-3xl text-primary-400 mb-3 text-center">{miejsce.title}</h3>
                      <div className="flex justify-center items-center gap-2 mb-5">
                        <div className="w-3 h-3 border-2 border-primary-400/50 rotate-45"></div>
                        <div className="w-20 h-[2px] bg-primary-400/40"></div>
                        <div className="w-2 h-2 bg-primary-400/60 rotate-45"></div>
                        <div className="w-20 h-[2px] bg-primary-400/40"></div>
                        <div className="w-3 h-3 border-2 border-primary-400/50 rotate-45"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-justify mb-6">
                        {miejsce.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {miejsce.details.map((detail, idx) => (
                          <div key={idx} className="text-sm">
                            <span className="text-gray-500 block">{detail.label}</span>
                            <span className="text-gray-800 font-medium">{detail.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Obraz po prawej */}
                  <div className="relative min-h-[350px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={miejsce.image}
                      alt={miejsce.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Obraz po lewej */}
                  <div className="relative min-h-[350px] rounded-lg overflow-hidden shadow-lg order-last lg:order-first">
                    <Image
                      src={miejsce.image}
                      alt={miejsce.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  {/* Tekst po prawej */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden flex flex-col justify-center min-h-[350px]">
                    <div className="border-2 border-primary-400/30 rounded-xl m-3 p-8 h-full flex flex-col justify-center">
                      <div className="flex items-center justify-center gap-3 mb-3">
                        <span className="text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                          {miejsce.distance}
                        </span>
                      </div>
                      <h3 className="font-cursive text-3xl text-primary-400 mb-3 text-center">{miejsce.title}</h3>
                      <div className="flex justify-center items-center gap-2 mb-5">
                        <div className="w-3 h-3 border-2 border-primary-400/50 rotate-45"></div>
                        <div className="w-20 h-[2px] bg-primary-400/40"></div>
                        <div className="w-2 h-2 bg-primary-400/60 rotate-45"></div>
                        <div className="w-20 h-[2px] bg-primary-400/40"></div>
                        <div className="w-3 h-3 border-2 border-primary-400/50 rotate-45"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-justify mb-6">
                        {miejsce.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {miejsce.details.map((detail, idx) => (
                          <div key={idx} className="text-sm">
                            <span className="text-gray-500 block">{detail.label}</span>
                            <span className="text-gray-800 font-medium">{detail.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}

          {/* Sekcja: Kiedy obserwować - desktop */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Tabela pory dnia */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="font-cursive text-2xl text-primary-400 mb-6 text-center">Według pory dnia</h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 text-sm font-semibold text-gray-700">Pora</th>
                    <th className="text-center py-3 text-sm font-semibold text-gray-700">Szansa</th>
                    <th className="text-right py-3 text-sm font-semibold text-gray-700">Uwagi</th>
                  </tr>
                </thead>
                <tbody>
                  {poryDnia.map((item, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="py-3 text-sm text-gray-700 font-medium">{item.pora}</td>
                      <td className="py-3 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs ${item.color}`}>{item.szansa}</span>
                      </td>
                      <td className="py-3 text-sm text-gray-600 text-right">{item.uwagi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Tabela sezony */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="font-cursive text-2xl text-primary-400 mb-6 text-center">Według sezonu</h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 text-sm font-semibold text-gray-700">Sezon</th>
                    <th className="text-center py-3 text-sm font-semibold text-gray-700">Szansa</th>
                    <th className="text-right py-3 text-sm font-semibold text-gray-700">Uwagi</th>
                  </tr>
                </thead>
                <tbody>
                  {sezony.map((item, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="py-3 text-sm text-gray-700 font-medium">{item.sezon}</td>
                      <td className="py-3 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs ${item.color}`}>{item.szansa}</span>
                      </td>
                      <td className="py-3 text-sm text-gray-600 text-right">{item.uwagi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Wycieczki melexem */}
          <div className="bg-primary-50 rounded-xl p-8 mb-16">
            <h2 className="font-cursive text-3xl text-primary-400 text-center mb-4">
              Jak zamówić wycieczkę do żubrów?
            </h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-gray-700 leading-relaxed mb-4">
                Dla gości Dworu Bartnika organizujemy <strong className="font-semibold">przejazdy melexem do karmnika żubrów</strong>. 
                Wystarczy zgłosić się w recepcji dzień wcześniej, a my zaplanujemy wycieczkę na optymalną porę.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Możemy również pomóc w rezerwacji <strong className="font-semibold">przewodnika po Puszczy Białowieskiej</strong>, 
                który zabierze Was w miejsca niedostępne dla zwykłych turystów.
              </p>
            </div>
          </div>

          {/* Ciekawostki - desktop */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="relative min-h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/zubry/zubr_mgla_przymrozek.webp"
                alt="Żubr we mgle o poranku podczas przymrozków - fot. Maria Sapiołko"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center">
              <h2 className="font-cursive text-3xl text-primary-400 mb-6">Ciekawostki o żubrach</h2>
              <ul className="space-y-4">
                {ciekawostki.map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-primary-500 text-xl">&#x2022;</span>
                    <span className="leading-relaxed">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA końcowe - desktop */}
          <div className="bg-white rounded-xl shadow-2xl p-10 text-center max-w-3xl mx-auto">
            <h2 className="font-cursive text-4xl text-primary-400 mb-4">
              Zarezerwuj nocleg blisko żubrów
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Dwór Bartnika to idealny punkt wypadowy do obserwacji żubrów. 
              Zaledwie 2 km od karmnika, organizujemy wycieczki melexem dla gości.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/noclegi-bialowieza"
                className="px-8 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-all duration-300 text-sm tracking-wide font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Sprawdź dostępne pokoje
              </Link>
              <Link
                href="/atrakcje-bialowieza"
                className="px-8 py-3 border-2 border-primary-400 text-primary-700 rounded-lg hover:bg-primary-50 transition-all duration-300 text-sm tracking-wide font-semibold"
              >
                Zobacz inne atrakcje
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
