import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { RoomsPreview } from '@/components/home/RoomsPreview';
import { BreadcrumbSchema, NoclegiItemListSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Noclegi Białowieża - Pokoje od 120 zł',
  description: 'Noclegi w Białowieży - pokoje 2, 3, 4 osobowe oraz apartamenty z sauną i jacuzzi. Śniadanie, degustacja miodu i wstęp do Muzeum w cenie.',
  alternates: {
    canonical: 'https://dworbartnika.pl/noclegi-bialowieza',
  },
  openGraph: {
    title: 'Noclegi Białowieża | Dwór Bartnika',
    description: 'Pokoje 2, 3, 4 osobowe oraz apartamenty z sauną i jacuzzi. Śniadanie w cenie.',
    url: 'https://dworbartnika.pl/noclegi-bialowieza',
    siteName: 'Dwór Bartnika',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/images/og/OG_noclegi_bialowieza.jpg',
        width: 1200,
        height: 630,
        alt: 'Noclegi w Białowieży - Dwór Bartnika',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noclegi Białowieża | Dwór Bartnika',
    description: 'Pokoje 2, 3, 4 osobowe oraz apartamenty z sauną i jacuzzi.',
    images: ['/images/og/OG_noclegi_bialowieza.jpg'],
  },
};

// Dane pokoi do kart
const rooms = [
  { id: '2osobowe', name: 'Pokoje 2-osobowe', image: '/images/rooms/2osobowy_7.jpg', href: '/pokoje-2-osobowe-bialowieza', price: 'od 175 zł/os' },
  { id: '3osobowe', name: 'Pokoje 3-osobowe', image: '/images/rooms/2osobowy_18.jpg', href: '/pokoje-3-osobowe-bialowieza', price: 'od 150 zł/os' },
  { id: '4osobowe', name: 'Pokoje rodzinne', image: '/images/rooms/288772311.jpg', href: '/pokoje-rodzinne-bialowieza', price: 'od 120 zł/os' },
  { id: 'sauna', name: 'Apartament z sauną', image: '/images/rooms/pokoj_08.jpg', href: '/apartament-z-sauna-bialowieza', price: '300 zł/os' },
  { id: 'jacuzzi', name: 'Apartament z jacuzzi', image: '/images/rooms/jac3.jpg', href: '/apartament-z-jacuzzi-bialowieza', price: '400 zł/os' },
];

// Komponent karty pokoju
function RoomCard({ room, size = 'normal' }: { room: typeof rooms[0]; size?: 'normal' | 'small' }) {
  return (
    <Link href={room.href} className="block group">
      <div className={`relative ${size === 'small' ? 'h-[180px]' : 'h-[220px]'} rounded-xl overflow-hidden shadow-lg`}>
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-semibold text-lg mb-1">{room.name}</h3>
          <p className="text-primary-300 text-sm font-medium">{room.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default function NoclegiBialowiezaPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://dworbartnika.pl" },
        { name: "Noclegi Białowieża", url: "https://dworbartnika.pl/noclegi-bialowieza" }
      ]} />
      <NoclegiItemListSchema />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[60vh] min-h-[350px] md:h-[85vh] md:min-h-[600px]">
        <Image
          src="/images/hero/startowe-1.webp"
          alt="Pokoje - Dwór Bartnika"
          fill
          className="object-cover object-top"
          priority
          quality={75}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-black/40" />
        
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

      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE: Storytelling Layout - przeplatane boxy i karty pokoi
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="md:hidden">
        {/* BOX 1: Tytuł + Oferta specjalna - nachodzi na hero */}
        <div id="content" className="relative z-10 -mt-24 px-5 pb-6">
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/15 border border-stone-200/60 overflow-hidden">
            <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
              <h1 className="font-cursive text-4xl text-primary-400 text-center mb-3">
                Noclegi Białowieża - Pokoje od 120 zł
              </h1>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
              </div>
              <p className="text-gray-700 leading-relaxed text-sm text-center">
                Rezerwując bezpośrednio przez naszą stronę, w cenie pobytu otrzymasz śniadanie w{' '}
                <Link href="/restauracja-bialowieza" className="text-primary-500 font-semibold underline">Restauracji Carska Komnata</Link>, 
                degustację miodu oraz wstęp do{' '}
                <Link href="/muzeum-pszczelarstwa" className="text-primary-500 font-semibold underline">Muzeum Pszczelarstwa</Link>!
              </p>
            </div>
          </div>
        </div>

        {/* KARTA: Pokój 2-osobowy */}
        <div className="px-5 pb-4">
          <RoomCard room={rooms[0]} />
        </div>

        {/* BOX 2: Balkony i piętra */}
        <div className="px-5 pb-4">
          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200/60">
            <p className="text-gray-700 leading-relaxed text-sm text-center">
              Nasze pokoje znajdują się na <strong className="font-semibold">1, 2 i 3 piętrze</strong>. 
              Wybrane pokoje oferują <strong className="font-semibold">prywatny balkon</strong>, 
              a na każdym piętrze dostępny jest ogólnodostępny balkon z malowniczym widokiem.
            </p>
          </div>
        </div>

        {/* KARTY: 3-osobowy + 4-osobowy */}
        <div className="grid grid-cols-2 gap-3 px-5 pb-4">
          <RoomCard room={rooms[1]} size="small" />
          <RoomCard room={rooms[2]} size="small" />
        </div>

        {/* BOX 3: Rodziny + wyposażenie */}
        <div className="px-5 pb-4">
          <div className="bg-white rounded-xl p-5 shadow-lg border border-stone-200/60">
            <div className="flex justify-center mb-3">
              <div className="w-10 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
            </div>
            <p className="text-gray-700 leading-relaxed text-sm text-center">
              <strong className="font-semibold">Dzieci do 4. roku życia nocują bezpłatnie!</strong>{' '}
              Na życzenie dostępne łóżeczko dziecięce. Każdy pokój wyposażony w{' '}
              <strong className="font-semibold">TV, Wi-Fi i prywatną łazienkę</strong> z prysznicem.
            </p>
          </div>
        </div>

        {/* KARTY: Sauna + Jacuzzi */}
        <div className="grid grid-cols-2 gap-3 px-5 pb-4">
          <RoomCard room={rooms[3]} size="small" />
          <RoomCard room={rooms[4]} size="small" />
        </div>

        {/* BOX 4: Parking + Doba */}
        <div className="px-5 pb-8">
          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200/60">
            <p className="text-gray-700 leading-relaxed text-sm text-center mb-4">
              Dla gości podróżujących samochodem:{' '}
              <strong className="font-semibold">bezpłatny, monitorowany parking</strong> (również dla autokarów).
            </p>
            <div className="border-t border-stone-200 pt-4">
              <p className="text-gray-800 text-sm text-center font-medium mb-4">
                Doba hotelowa: <strong>15:00 - 11:00</strong>
              </p>
              <p className="text-center text-gray-700 font-medium text-sm">
                Serdecznie zapraszamy i życzymy miłego pobytu!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP: Oryginalny layout
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="hidden md:block">
        <main id="content" className="bg-white pt-8">
          <div className="max-w-[1340px] mx-auto px-6 py-12">
            
            {/* Dekoracyjny nagłówek - span zamiast h1 (H1 jest w wersji mobile) */}
            <span className="block font-cursive text-[62px] text-primary-400 text-center font-normal leading-tight mb-6">
              Noclegi Białowieża - Pokoje od 120 zł
            </span>

            <article className="text-[#6a6a6a] text-[17px] font-light leading-[1.75em] pt-6 border-t border-gray-100">
              
              <p className="mb-6">
                Zapraszamy do skorzystania z wyjątkowej oferty, dostępnej wyłącznie{' '}
                <strong className="font-bold">
                  dla gości rezerwujących bezpośrednio przez naszą stronę, telefonicznie lub mailowo
                </strong>
                . Rezerwując pokój online, otrzymasz nie tylko komfortowy nocleg, ale także bogaty pakiet atrakcji.{' '}
                W cenie pobytu goście otrzymują śniadanie w{' '}
                <Link href="/restauracja-bialowieza" className="text-primary-600 hover:text-primary-700 font-bold underline">Restauracji Carska Komnata</Link>, 
                degustację miodu oraz wstęp do{' '}
                <Link href="/muzeum-pszczelarstwa" className="text-primary-600 hover:text-primary-700 font-bold underline">Muzeum Pszczelarstwa</Link>.
              </p>

              <p className="mb-6">
                Nasze pokoje, znajdujące się na 1, 2 i 3 piętrze, zapewniają wygodę i relaks. Dla miłośników pięknych widoków, wybrane pokoje oferują{' '}
                <strong className="font-bold">prywatny balkon</strong>, a dla wszystkich gości dostępny jest szeroki, ogólnodostępny balkon na każdym piętrze, z którego można podziwiać malownicze otoczenie.
              </p>

              <p className="mb-6">
                Dla rodzin z małymi dziećmi mamy dobrą wiadomość:{' '}
                <strong className="font-bold">dzieci do 4. roku życia nocują u nas bezpłatnie</strong>, a na życzenie dostępne jest łóżeczko dziecięce. Każdy pokój wyposażony jest w TV, bezpłatny dostęp do internetu oraz{' '}
                <strong className="font-bold">prywatną łazienkę</strong> z prysznicem, co zapewnia pełen komfort i prywatność.
              </p>

              <p className="mb-6">
                Myślimy także o wygodzie naszych gości podróżujących samochodem. Dla nich przygotowaliśmy{' '}
                <strong className="font-bold">bezpłatny, monitorowany i ogrodzony parking</strong>, który pomieści dużą liczbę pojazdów, w tym również autokary.
              </p>

              <p className="mb-4">
                <strong className="font-bold">
                  Doba hotelowa rozpoczyna się o godzinie 15:00 i trwa do godziny 11:00 dnia następnego.
                </strong>
              </p>

              <p className="mb-1">
                Tel recepcji: <a href="tel:+48721907000" className="font-bold text-primary-600 hover:underline">721 907 000</a>
              </p>
              <p className="mb-10">
                e-mail: <a href="mailto:sapiolko@op.pl" className="font-bold text-primary-600 hover:underline">sapiolko@op.pl</a>
              </p>

              <p className="text-center mb-8">
                <strong className="font-bold text-[#6a6a6a]">
                  Serdecznie zapraszamy i życzymy miłego pobytu !
                </strong>
              </p>

            </article>
          </div>
        </main>

        {/* Siatka pokoi - desktop */}
        <RoomsPreview variant="grid" showButton={false} />
      </div>
    </>
  );
}
