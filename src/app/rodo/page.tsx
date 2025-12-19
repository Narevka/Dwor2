import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { BreadcrumbSchema, RodoSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'RODO - Dwór Bartnika | Puszcza Białowieska',
  description: 'Regulamin świadczenia usług drogą elektroniczną oraz informacja dotycząca przetwarzania danych osobowych (RODO) w Dworze Bartnika.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://dworbartnika.pl/rodo',
  },
  openGraph: {
    title: 'RODO | Dwór Bartnika',
    description: 'Regulamin świadczenia usług drogą elektroniczną oraz RODO.',
    url: 'https://dworbartnika.pl/rodo',
    siteName: 'Dwór Bartnika',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/images/og/OG_rodo.jpg',
        width: 1200,
        height: 630,
        alt: 'RODO - Dwór Bartnika',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RODO | Dwór Bartnika',
    description: 'Regulamin świadczenia usług drogą elektroniczną oraz RODO.',
    images: ['/images/og/OG_rodo.jpg'],
  },
};

export default function RodoPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://dworbartnika.pl" },
        { name: "Polityka prywatności", url: "https://dworbartnika.pl/rodo" }
      ]} />
      <RodoSchema />

      {/* Hero section */}
      <section className="relative h-[40vh] min-h-[300px] md:h-[50vh] md:min-h-[400px]">
        <Image
          src="/images/hero/dwor3.jpg"
          alt="RODO - Dwór Bartnika"
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
            Regulamin świadczenia usług drogą elektroniczną oraz RODO
          </h1>

          {/* Mobile: box z cieniem, Desktop: max-width */}
          <div className="md:max-w-4xl md:mx-auto">
            <div className="bg-white rounded-2xl shadow-lg md:shadow-xl p-6 md:p-10">
              
              {/* Podtytuł */}
              <p className="text-center text-sm tracking-widest text-gray-500 mb-8 uppercase">
                Regulamin oraz RODO
              </p>

              {/* RODO */}
              <div className="mb-12 text-gray-700">
                <h2 className="font-sans font-bold text-gray-800 text-lg md:text-xl mb-4">
                  INFORMACJA DOTYCZĄCA PRZETWARZANIA DANYCH OSOBOWYCH W DWORZE BARTNIKA
                </h2>
                
                <p className="text-justify leading-relaxed mb-4">
                  DWÓR BARTNIKA dokona wszelkich starań, aby dane gości przetwarzane były z zachowaniem najwyższych standardów bezpieczeństwa zgodnie z Rozporządzeniem o ochronie danych osobowych z dnia 27 kwietnia 2016 r. /Dz.Urz. UE I.119 z 04-05-2016/ zwanym dalej <strong>RODO</strong>.
                </p>

                <p className="text-justify leading-relaxed mb-4">
                  Informujemy, że:
                </p>

                <p className="text-justify leading-relaxed mb-6">
                  Administratorem Państwa danych osobowych jest: <strong>DWÓR BARTNIKA MARIA SAPIOŁKO</strong>, ul. Hajnowska 1A, 17-220 Narewka, <strong>NIP</strong>: 5422680818.
                </p>

                <p className="text-justify leading-relaxed mb-2">
                  Pani/Pana dane osobowe przetwarzane będą celem:
                </p>
                <div className="pl-4 mb-6 space-y-1 text-sm md:text-base">
                  <p className="text-justify leading-relaxed">a/ rezerwacja pokoju hotelowego (Art. 6 ust. 1 lit. a RODO – zgoda osoby, której dane dotyczą)</p>
                  <p className="text-justify leading-relaxed">b/ realizacja umowy usługi hotelowej (Art. 6 ust. 1 lit. b RODO – celem zawarcia umowy)</p>
                  <p className="text-justify leading-relaxed">c/ obsługa składanych zapytań przychodzących elektronicznie (Art. 6 ust. 1 lit. a RODO – zgoda osoby, której dotyczą)</p>
                  <p className="text-justify leading-relaxed">d/ marketing usług administratora danych (Art. 6 ust. 1 lit. a RODO – pod warunkiem uzyskania zgody osoby, której dotyczą)</p>
                  <p className="text-justify leading-relaxed">e/ zapewnienie bezpieczeństwa osób znajdujących się w hotelu poprzez zbieranie numeru telefonu osoby korzystającej z usług hotelarskich (Art. 6 ust. 1 lit. f RODO – uzasadniony interes)</p>
                  <p className="text-justify leading-relaxed">f/ wypełnienia obowiązku prawnego (wystawienie faktury za usługi) (Art. 6 ust. 1 lit. c RODO).</p>
                </div>

                <p className="text-justify leading-relaxed mb-2">
                  Odbiorcami danych osobowych mogą być:
                </p>
                <div className="pl-4 mb-6 space-y-1 text-sm md:text-base">
                  <p className="text-justify leading-relaxed">a/ firmy świadczące usługi marketingowe (dotyczy osób, które wyraziły zgodę na otrzymywanie informacji handlowej)</p>
                  <p className="text-justify leading-relaxed">b/ dostawca aplikacji służącej do rozsyłania informacji handlowych (dotyczy osób, które złożyły rezerwację, są stroną umowy)</p>
                  <p className="text-justify leading-relaxed">c/ podmioty uprawnione do uzyskiwania danych osobowych na podstawie przepisów prawa</p>
                  <p className="text-justify leading-relaxed">d/ dostawca platformy rezerwacji usług hotelarskich (jeżeli rezerwacja wpłynie poprzez portal rezerwacji).</p>
                </div>

                <p className="text-justify leading-relaxed mb-2">
                  Dane osobowe będą przechowywane:
                </p>
                <div className="pl-4 mb-6 space-y-1 text-sm md:text-base">
                  <p className="text-justify leading-relaxed">a/ dotyczące składanych zapytań – 30 dni od zakończenia korespondencji</p>
                  <p className="text-justify leading-relaxed">b/ dotyczących składanych rezerwacji – 12 miesięcy od daty rezerwacji</p>
                  <p className="text-justify leading-relaxed">c/ dotyczące realizacji umowy o usługi hotelarskie potrzebne do wystawienia faktury – 5 lat od następnego roku, w którym miał miejsce pobyt w hotelu</p>
                  <p className="text-justify leading-relaxed">d/ przetwarzanie w celach marketingowych – do odwołania zgody osoby, której dotyczy</p>
                  <p className="text-justify leading-relaxed">e/ numery telefonów, dane osoby towarzyszącej – do 30 dni.</p>
                </div>

                <p className="text-justify leading-relaxed mb-4">
                  Posiada Pan/i prawo do żądania od Administratora dostępu do danych osobowych, ich sprostowania, usunięcia lub ograniczenia przetwarzania oraz prawo przenoszenia danych.
                </p>

                <p className="text-justify leading-relaxed mb-2">
                  <strong>Podanie danych osobowych jest dobrowolne</strong>, jednakże odmowa ich podania może skutkować:
                </p>
                <div className="pl-4 mb-8 space-y-1 text-sm md:text-base">
                  <p className="text-justify leading-relaxed">a/ odmową realizacji usług hotelarskich</p>
                  <p className="text-justify leading-relaxed">b/ odmową rezerwacji – w przypadku rezerwacji pokoju.</p>
                </div>
              </div>

              {/* Separator */}
              <div className="border-t border-gray-200 my-8" />

              {/* Regulamin świadczenia usług */}
              <div className="text-gray-700">
                <h2 className="font-sans font-bold text-gray-800 text-lg md:text-xl text-center mb-6 tracking-wide">
                  REGULAMIN ŚWIADCZENIA USŁUG DROGĄ ELEKTRONICZNĄ
                </h2>

                {/* 1. Postanowienia ogólne */}
                <div className="mb-6">
                  <p className="font-bold mb-2">1. Postanowienia ogólne</p>
                  <p className="text-justify leading-relaxed mb-2 pl-4 text-sm md:text-base">
                    1.1. Niniejszy regulamin określa zasady świadczenia usług drogą elektroniczną przez DWÓR BARTNIKA MARIA SAPIOŁKO za pośrednictwem strony internetowej{' '}
                    <a href="https://dworbartnika.pl" className="text-primary-600 hover:underline">https://dworbartnika.pl</a>.
                  </p>
                  <p className="text-justify leading-relaxed pl-4 text-sm md:text-base">
                    1.2. Usługi obejmują możliwość składania zapytań przez formularz kontaktowy oraz dokonywania rezerwacji pokoi hotelowych online.
                  </p>
                </div>

                {/* 2. Warunki korzystania */}
                <div className="mb-6">
                  <p className="font-bold mb-2">2. Warunki korzystania z usług elektronicznych</p>
                  <p className="text-justify leading-relaxed mb-2 pl-4 text-sm md:text-base">
                    2.1. W celu korzystania z usług niezbędne jest posiadanie urządzenia z dostępem do Internetu oraz aktywnego adresu e-mail.
                  </p>
                  <p className="text-justify leading-relaxed mb-2 pl-4 text-sm md:text-base">
                    2.2. Korzystanie z usług jest nieodpłatne.
                  </p>
                  <p className="text-justify leading-relaxed pl-4 text-sm md:text-base">
                    2.3. Gość może anulować rezerwację telefonicznie lub drogą elektroniczną z zachowaniem wskazanym terminów, tj. 5 dni przed przyjazdem. Wpłacony zadatek nie podlega zwrotowi, jednak prosimy pamiętać, że każdego Gościa traktujemy indywidualnie i ze zrozumieniem patrząc również na nasze zobowiązania.
                  </p>
                </div>

                {/* 3. Reklamacje */}
                <div className="mb-6">
                  <p className="font-bold mb-2">3. Reklamacje usług elektronicznych</p>
                  <p className="text-justify leading-relaxed mb-2 pl-4 text-sm md:text-base">
                    3.1. Reklamacje dotyczące funkcjonowania strony internetowej lub świadczonych usług można zgłaszać pisemnie na adres: ul. Hajnowska 1A, 17-220 Narewka, lub mailowo na adres podany na stronie internetowej.
                  </p>
                  <p className="text-justify leading-relaxed pl-4 text-sm md:text-base">
                    3.2. Reklamacje zostaną rozpatrzone w terminie do 14 dni roboczych.
                  </p>
                </div>

                {/* 4. Postanowienia końcowe */}
                <div className="mb-8">
                  <p className="font-bold mb-2">4. Postanowienia końcowe</p>
                  <p className="text-justify leading-relaxed mb-2 pl-4 text-sm md:text-base">
                    4.1. W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają odpowiednie przepisy prawa, w szczególności ustawa z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną.
                  </p>
                  <p className="text-justify leading-relaxed pl-4 text-sm md:text-base">
                    4.2. Regulamin obowiązuje od dnia jego publikacji na stronie internetowej.
                  </p>
                </div>
              </div>

              {/* Link do regulaminu rezerwacji */}
              <div className="pt-6 border-t border-gray-200 text-center">
                <Link 
                  href="/regulamin-rezerwacji" 
                  className="inline-block text-lg md:text-xl font-semibold text-primary-400 hover:text-primary-500 transition-colors"
                >
                  Zobacz regulamin rezerwacji →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
