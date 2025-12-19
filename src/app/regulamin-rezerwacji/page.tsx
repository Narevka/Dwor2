import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { BreadcrumbSchema, RegulaminSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Regulamin Rezerwacji',
  description: 'Regulamin rezerwacji i pobytu w Dworze Bartnika. Informacje o dobie hotelowej, płatnościach i zasadach obowiązujących w hotelu.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://dworbartnika.pl/regulamin-rezerwacji',
  },
  openGraph: {
    title: 'Regulamin rezerwacji | Dwór Bartnika',
    description: 'Regulamin rezerwacji i pobytu w Dworze Bartnika.',
    url: 'https://dworbartnika.pl/regulamin-rezerwacji',
    siteName: 'Dwór Bartnika',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/images/og/OG_regulamin_rezerwacji.jpg',
        width: 1200,
        height: 630,
        alt: 'Regulamin rezerwacji - Dwór Bartnika',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Regulamin rezerwacji | Dwór Bartnika',
    description: 'Regulamin rezerwacji i pobytu w Dworze Bartnika.',
    images: ['/images/og/OG_regulamin_rezerwacji.jpg'],
  },
};

export default function RegulaminRezerwacjiPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://dworbartnika.pl" },
        { name: "Regulamin rezerwacji", url: "https://dworbartnika.pl/regulamin-rezerwacji" }
      ]} />
      <RegulaminSchema />

      {/* Hero section */}
      <section className="relative h-[40vh] min-h-[300px] md:h-[50vh] md:min-h-[400px]">
        <Image
          src="/images/hero/dwor3.jpg"
          alt="Regulamin rezerwacji - Dwór Bartnika"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
        
        {/* Przycisk "więcej informacji" */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
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

      {/* Treść */}
      <section id="content" className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          {/* Tytuł */}
          <h1 className="text-3xl md:text-4xl font-sans font-bold text-gray-800 text-center mb-8 md:mb-12">
            Regulamin rezerwacji
          </h1>

          {/* Mobile: box z cieniem, Desktop: max-width */}
          <div className="md:max-w-4xl md:mx-auto">
            <div className="bg-white rounded-2xl shadow-lg md:shadow-xl p-6 md:p-10">
              
              <div className="space-y-6 text-gray-700">
                {/* Punkt 1 */}
                <div>
                  <p className="mb-2">
                    <strong className="text-gray-800">1. Rezerwacje:</strong>
                  </p>
                  <p className="text-justify leading-relaxed pl-4 text-sm md:text-base">
                    Rezerwacji w Dworze Bartnika w Narewce można dokonywać osobiście, telefonicznie pod numerem telefonu{' '}
                    <a href="tel:+48856858388" className="text-primary-600 hover:underline">85 68 58 388</a>,{' '}
                    <a href="tel:+48721907000" className="text-primary-600 hover:underline">721 90 70 00</a>{' '}
                    lub pocztą elektroniczną:{' '}
                    <a href="mailto:sapiolko@op.pl" className="text-primary-600 hover:underline">sapiolko@op.pl</a>
                  </p>
                </div>

                {/* Punkt 2 */}
                <div>
                  <p className="mb-2">
                    <strong className="text-gray-800">2. Doba hotelowa</strong>
                  </p>
                  <p className="text-justify leading-relaxed pl-4 text-sm md:text-base">
                    rozpoczyna się o godzinie <strong>15:00</strong> w dniu przyjazdu, a kończy o godzinie <strong>11:00</strong>.
                  </p>
                </div>

                {/* Punkt 3 */}
                <div>
                  <p className="mb-2">
                    <strong className="text-gray-800">3. Klucze:</strong>
                  </p>
                  <p className="text-justify leading-relaxed pl-4 text-sm md:text-base">
                    Każdy z gość otrzymuje elektroniczną kartę będącą kluczem do pokoju. Po godzinie 22:00 budynek zostaje zamykany, brama wjazdowa zamknięta. Wyjazd jest możliwy po zgłoszeniu się do stróża nocnego.
                  </p>
                </div>

                {/* Punkt 4 */}
                <div>
                  <p className="mb-2">
                    <strong className="text-gray-800">4. Opłaty:</strong>
                  </p>
                  <p className="text-justify leading-relaxed pl-4 text-sm md:text-base">
                    Należność za pobyt pomniejszona o wpłaconą opłatę za rezerwację pobierana jest w dniu przyjazdu. W przypadku wcześniejszego wyjazdu z przyczyn od nas niezależnych, pobrana za pobyt należność nie podlega zwrotowi.
                  </p>
                </div>

                {/* Punkt 5 */}
                <div>
                  <p className="mb-2">
                    <strong className="text-gray-800">5. Palenie papierosów:</strong>
                  </p>
                  <p className="text-justify leading-relaxed pl-4 text-sm md:text-base">
                    Ze względu na komfort Państwa i naszych obecnych oraz przyszłych Gości w obiekcie obowiązuje <strong>całkowity zakaz palenia</strong>. Palenie jest dozwolone na zewnątrz budynku.
                  </p>
                </div>

                {/* Punkt 6 */}
                <div>
                  <p className="mb-2">
                    <strong className="text-gray-800">6. Cisza Nocna:</strong>
                  </p>
                  <p className="text-justify leading-relaxed pl-4 text-sm md:text-base">
                    Prosimy o zachowanie ciszy w pokojach w godzinach nocnych. Zachowanie osób przebywających w pokojach nie powinno zakłócać spokojnego pobytu innych gości.
                  </p>
                </div>

                {/* Punkt 7 */}
                <div>
                  <p className="text-justify leading-relaxed text-sm md:text-base">
                    <strong className="text-gray-800">7.</strong> W części hotelowej obowiązuje zakaz wnoszenia i spożywania alkoholu i posiłków z zewnątrz.
                  </p>
                </div>

                {/* Punkt 8 */}
                <div>
                  <p className="mb-2">
                    <strong className="text-gray-800">8. Obowiązki obsługi hotelowej:</strong>
                  </p>
                  <p className="text-justify leading-relaxed pl-4 text-sm md:text-base">
                    Zapewniamy profesjonalną i uprzejmą obsługę, warunki do spokojnego i bezpiecznego pobytu, zachowania tajemnicy informacji o gościu oraz sprawność urządzeń technicznych.
                  </p>
                </div>

                {/* Życzenia */}
                <div className="pt-8 text-center">
                  <p className="font-bold text-gray-800 tracking-wide text-lg">
                    ŻYCZYMY MIŁEGO WYPOCZYNKU!
                  </p>
                </div>

                {/* Link do RODO */}
                <div className="pt-6 border-t border-gray-200 text-center">
                  <Link 
                    href="/rodo" 
                    className="inline-block text-lg md:text-xl font-semibold text-primary-400 hover:text-primary-500 transition-colors"
                  >
                    Regulamin świadczenia usług drogą elektroniczną oraz RODO →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
