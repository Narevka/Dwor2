import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { BreadcrumbSchema, OgrodSensorycznySchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Ogród Sensoryczny',
  description: 'Ogród sensoryczny w Dworze Bartnika. Odkryj naturę wszystkimi zmysłami - wzrokiem, węchem, smakiem i dotykiem w sercu Puszczy Białowieskiej.',
  alternates: {
    canonical: 'https://dworbartnika.pl/ogrod-sensoryczny',
  },
  openGraph: {
    title: 'Ogród Sensoryczny | Dwór Bartnika',
    description: 'Odkryj naturę wszystkimi zmysłami - wzrokiem, węchem, smakiem i dotykiem.',
    url: 'https://dworbartnika.pl/ogrod-sensoryczny',
    siteName: 'Dwór Bartnika',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/images/og/OG_ogrod_sensoryczny.jpg',
        width: 1200,
        height: 630,
        alt: 'Ogród Sensoryczny w Dworze Bartnika',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ogród Sensoryczny | Dwór Bartnika',
    description: 'Odkryj naturę wszystkimi zmysłami w sercu Puszczy Białowieskiej.',
    images: ['/images/og/OG_ogrod_sensoryczny.jpg'],
  },
};

export default function OgrodSensorycznyPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://dworbartnika.pl" },
        { name: "Atrakcje", url: "https://dworbartnika.pl/atrakcje-bialowieza" },
        { name: "Ogród Sensoryczny", url: "https://dworbartnika.pl/ogrod-sensoryczny" }
      ]} />
      <OgrodSensorycznySchema />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[60vh] min-h-[350px] md:h-[85vh] md:min-h-[600px]">
        <Image
          src="/images/sections/ogrodo4.webp"
          alt="Ogród sensoryczny - Dwór Bartnika"
          fill
          className="object-cover object-center"
          priority
          quality={75}
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
          MOBILE: Storytelling Layout - zdjęcia + boxy nachodzące
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="md:hidden">
        {/* BOX 0: Wprowadzenie - nachodzi na hero */}
        <div id="content" className="relative z-10 -mt-24 px-5 pb-6">
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/15 border border-stone-200/60 overflow-hidden">
            <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
              <h1 className="font-cursive text-3xl text-primary-400 text-center mb-3">
                Ogród sensoryczny
              </h1>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
              </div>
              <p className="text-gray-700 leading-relaxed text-sm text-center mb-2">
                Ogród sensoryczny to jedna z unikalnych{' '}
                <Link href="/atrakcje-bialowieza" className="text-primary-500 font-semibold underline">atrakcji Dworu Bartnika</Link>, 
                dostępna dla wszystkich gości{' '}
                <Link href="/hotel-bialowieza" className="text-primary-500 font-semibold underline">hotelu</Link>.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm text-center">
                Ogród otaczający obiekt został zaprojektowany tak, aby oddziaływał na wszystkie zmysły odwiedzających go gości i pozwolił im na poczucie bliskości natury.
              </p>
            </div>
          </div>
        </div>

        {/* SEKCJA 1: Zmysł wzroku */}
        <div className="relative h-[55vh] min-h-[280px]">
          <Image
            src="/images/sections/ogrodo1.webp"
            alt="Zmysł wzroku - ogród sensoryczny"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 -mt-16 px-5 pb-6">
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/15 border border-stone-200/60 overflow-hidden">
            <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
              <h2 className="font-cursive text-2xl text-primary-400 text-center mb-2">Zmysł wzroku</h2>
              <div className="flex justify-center items-center gap-2 mb-3">
                <div className="w-2 h-2 border border-primary-400/50 rotate-45"></div>
                <div className="w-12 h-[1px] bg-primary-400/40"></div>
                <div className="w-1.5 h-1.5 bg-primary-400/60 rotate-45"></div>
                <div className="w-12 h-[1px] bg-primary-400/40"></div>
                <div className="w-2 h-2 border border-primary-400/50 rotate-45"></div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm text-center">
                Zmysł wzroku będzie tym, który jako pierwszy dozna przyjemnych bodźców po natknięciu się na obraz malowany przez przyjemnie szumiące na wietrze liście starych drzew, żywopłoty o starannie wymodelowanych kształtach, spokojnie płynące wodospady, oraz pocieszne dla oczu zwierzątka, takie jak wiewiórki, jeżyki, żabki, dzikie kaczki i dzięcioły.
              </p>
            </div>
          </div>
        </div>

        {/* SEKCJA 2: Zmysł węchu */}
        <div className="relative h-[55vh] min-h-[280px]">
          <Image
            src="/images/sections/kwaitek.jpg"
            alt="Zmysł węchu - białe lilie"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 -mt-16 px-5 pb-6">
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/15 border border-stone-200/60 overflow-hidden">
            <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
              <h2 className="font-cursive text-2xl text-primary-400 text-center mb-2">Zmysł węchu</h2>
              <div className="flex justify-center items-center gap-2 mb-3">
                <div className="w-2 h-2 border border-primary-400/50 rotate-45"></div>
                <div className="w-12 h-[1px] bg-primary-400/40"></div>
                <div className="w-1.5 h-1.5 bg-primary-400/60 rotate-45"></div>
                <div className="w-12 h-[1px] bg-primary-400/40"></div>
                <div className="w-2 h-2 border border-primary-400/50 rotate-45"></div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm text-center">
                Po zagłębieniu się w ogród, na zmysł węchu zaczną przyjemnie oddziaływać: zapachy kwiatów azalii, rododendronów, hortensji unoszące się w wyjątkowo czystym powietrzu, o czym świadczą porastające drzewa rzadkie gatunki mchów i porostów.
              </p>
            </div>
          </div>
        </div>

        {/* SEKCJA 3: Zmysł smaku */}
        <div className="relative h-[55vh] min-h-[280px]">
          <Image
            src="/images/sections/ogrodo2.webp"
            alt="Zmysł smaku - owoce w ogrodzie"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 -mt-16 px-5 pb-6">
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/15 border border-stone-200/60 overflow-hidden">
            <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
              <h2 className="font-cursive text-2xl text-primary-400 text-center mb-2">Zmysł smaku</h2>
              <div className="flex justify-center items-center gap-2 mb-3">
                <div className="w-2 h-2 border border-primary-400/50 rotate-45"></div>
                <div className="w-12 h-[1px] bg-primary-400/40"></div>
                <div className="w-1.5 h-1.5 bg-primary-400/60 rotate-45"></div>
                <div className="w-12 h-[1px] bg-primary-400/40"></div>
                <div className="w-2 h-2 border border-primary-400/50 rotate-45"></div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm text-center">
                Spacerując po ścieżkach można natknąć się nie tylko na ozdobne rośliny, ale również na praktycznie wykorzystywane w hotelowej kuchni zioła i warzywa. Dalej w ogrodzie rosną świdośliwy, grusze, jabłonie i winogrona, które można po prostu zerwać i skosztować.
              </p>
            </div>
          </div>
        </div>

        {/* SEKCJA 4: Zmysł dotyku */}
        <div className="relative h-[55vh] min-h-[280px]">
          <Image
            src="/images/sections/paraso2.jpg"
            alt="Zmysł dotyku - staw w ogrodzie"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 -mt-16 px-5 pb-8">
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/15 border border-stone-200/60 overflow-hidden">
            <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
              <h2 className="font-cursive text-2xl text-primary-400 text-center mb-2">Zmysł dotyku</h2>
              <div className="flex justify-center items-center gap-2 mb-3">
                <div className="w-2 h-2 border border-primary-400/50 rotate-45"></div>
                <div className="w-12 h-[1px] bg-primary-400/40"></div>
                <div className="w-1.5 h-1.5 bg-primary-400/60 rotate-45"></div>
                <div className="w-12 h-[1px] bg-primary-400/40"></div>
                <div className="w-2 h-2 border border-primary-400/50 rotate-45"></div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm text-center">
                W celu silniejszego oddziaływania na bodźce dotyku polecamy usiąść boso przy stole częściowo zanurzonym w stawie. Degustacja dowolnych posiłków i napojów z stopami zanurzonymi po kostki w chłodzącej wodzie jest doskonałym wyborem podczas gorących miesięcy lata.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP: Oryginalny layout
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="content" className="hidden md:block section bg-gray-50">
        <div className="container-custom">
          {/* Sekcja 1: Zmysł wzroku - tekst lewo, obraz prawo */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-16">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden flex flex-col justify-center min-h-[300px] sm:min-h-[350px]">
              <div className="border-2 border-primary-400/30 rounded-xl m-2 sm:m-3 p-4 sm:p-6 md:p-8 h-full flex flex-col justify-center">
                <h2 className="font-cursive text-2xl sm:text-3xl text-primary-400 mb-2 sm:mb-3 text-center">Zmysł wzroku</h2>
                <div className="flex justify-center items-center gap-2 mb-3 sm:mb-5">
                  <div className="w-3 h-3 border-2 border-primary-400/50 rotate-45"></div>
                  <div className="w-20 h-[2px] bg-primary-400/40"></div>
                  <div className="w-2 h-2 bg-primary-400/60 rotate-45"></div>
                  <div className="w-20 h-[2px] bg-primary-400/40"></div>
                  <div className="w-3 h-3 border-2 border-primary-400/50 rotate-45"></div>
                </div>
                <p className="text-gray-700 leading-relaxed text-justify mb-3 sm:mb-4 text-sm sm:text-base">
                  Ogród sensoryczny to jedna z unikalnych{' '}
                  <Link href="/atrakcje-bialowieza" className="text-primary-600 hover:text-primary-700 font-semibold underline">atrakcji Dworu Bartnika</Link>, 
                  dostępna dla wszystkich gości{' '}
                  <Link href="/hotel-bialowieza" className="text-primary-600 hover:text-primary-700 font-semibold underline">hotelu</Link>.
                  Ogród otaczający obiekt został zaprojektowany tak, aby oddziaływał na wszystkie zmysły odwiedzających go gości i pozwolił im na poczucie bliskości natury.
                </p>
                <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
                  Zmysł wzroku będzie tym, który jako pierwszy dozna przyjemnych bodźców po natknięciu się na obraz malowany przez przyjemnie szumiące na wietrze liście starych drzew, żywopłoty o starannie wymodelowanych kształtach, spokojnie płynące wodospady, oraz pocieszne dla oczu zwierzątka, takie jak wiewiórki, jeżyki, żabki, dzikie kaczki i dzięcioły, dla których ogród stanowi dom.
                </p>
              </div>
            </div>
            <div className="relative min-h-[250px] sm:min-h-[300px] lg:min-h-[350px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/sections/ogrodo1.webp"
                alt="Zmysł wzroku - ogród sensoryczny"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Sekcja 2: Zmysł węchu - obraz lewo, tekst prawo */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-16">
            <div className="relative min-h-[350px] rounded-lg overflow-hidden shadow-lg order-last lg:order-first">
              <Image
                src="/images/sections/kwaitek.jpg"
                alt="Zmysł węchu - białe lilie"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden flex flex-col justify-center min-h-[300px] sm:min-h-[350px]">
              <div className="border-2 border-primary-400/30 rounded-xl m-2 sm:m-3 p-4 sm:p-6 md:p-8 h-full flex flex-col justify-center">
                <h2 className="font-cursive text-2xl sm:text-3xl text-primary-400 mb-2 sm:mb-3 text-center">Zmysł węchu</h2>
                <div className="flex justify-center items-center gap-2 mb-3 sm:mb-5">
                  <div className="w-3 h-3 border-2 border-primary-400/50 rotate-45"></div>
                  <div className="w-20 h-[2px] bg-primary-400/40"></div>
                  <div className="w-2 h-2 bg-primary-400/60 rotate-45"></div>
                  <div className="w-20 h-[2px] bg-primary-400/40"></div>
                  <div className="w-3 h-3 border-2 border-primary-400/50 rotate-45"></div>
                </div>
                <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
                  Po zagłębieniu się w ogród, na zmysł węchu zaczną przyjemnie oddziaływać: zapachy kwiatów azalii, rododendronów, hortensji unoszące się w wyjątkowo czystym powietrzu, o czym świadczą porastające drzewa rzadkie gatunki mchów i porostów, będące naturalnym wskaźnikiem jakości powietrza.
                </p>
              </div>
            </div>
          </div>

          {/* Sekcja 3: Zmysł smaku - tekst lewo, obraz prawo */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-16">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden flex flex-col justify-center min-h-[300px] sm:min-h-[350px]">
              <div className="border-2 border-primary-400/30 rounded-xl m-2 sm:m-3 p-4 sm:p-6 md:p-8 h-full flex flex-col justify-center">
                <h2 className="font-cursive text-2xl sm:text-3xl text-primary-400 mb-2 sm:mb-3 text-center">Zmysł smaku</h2>
                <div className="flex justify-center items-center gap-2 mb-3 sm:mb-5">
                  <div className="w-3 h-3 border-2 border-primary-400/50 rotate-45"></div>
                  <div className="w-20 h-[2px] bg-primary-400/40"></div>
                  <div className="w-2 h-2 bg-primary-400/60 rotate-45"></div>
                  <div className="w-20 h-[2px] bg-primary-400/40"></div>
                  <div className="w-3 h-3 border-2 border-primary-400/50 rotate-45"></div>
                </div>
                <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
                  Spacerując po ścieżkach można natknąć się nie tylko na ozdobne rośliny, ale również na praktycznie wykorzystywane w hotelowej kuchni zioła i warzywa. Dalej w ogrodzie rosną świdośliwy, grusze, jabłonie i winogrona, które można po prostu zerwać i skosztować.
                </p>
              </div>
            </div>
            <div className="relative min-h-[250px] sm:min-h-[300px] lg:min-h-[350px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/sections/ogrodo2.webp"
                alt="Zmysł smaku - owoce w ogrodzie"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Sekcja 4: Zmysł dotyku - obraz lewo, tekst prawo */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-16">
            <div className="relative min-h-[350px] rounded-lg overflow-hidden shadow-lg order-last lg:order-first">
              <Image
                src="/images/sections/paraso2.jpg"
                alt="Zmysł dotyku - staw w ogrodzie"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden flex flex-col justify-center min-h-[300px] sm:min-h-[350px]">
              <div className="border-2 border-primary-400/30 rounded-xl m-2 sm:m-3 p-4 sm:p-6 md:p-8 h-full flex flex-col justify-center">
                <h2 className="font-cursive text-2xl sm:text-3xl text-primary-400 mb-2 sm:mb-3 text-center">Zmysł dotyku</h2>
                <div className="flex justify-center items-center gap-2 mb-3 sm:mb-5">
                  <div className="w-3 h-3 border-2 border-primary-400/50 rotate-45"></div>
                  <div className="w-20 h-[2px] bg-primary-400/40"></div>
                  <div className="w-2 h-2 bg-primary-400/60 rotate-45"></div>
                  <div className="w-20 h-[2px] bg-primary-400/40"></div>
                  <div className="w-3 h-3 border-2 border-primary-400/50 rotate-45"></div>
                </div>
                <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
                  W celu silniejszego oddziaływania na bodźce dotyku polecamy usiąść boso przy stole częściowo zanurzonym w stawie. Degustacja dowolnych posiłków i napojów z stopami zanurzonymi po kostki w chłodzącej wodzie jest doskonałym wyborem podczas gorących miesięcy lata.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
