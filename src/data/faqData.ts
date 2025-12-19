/**
 * Dane FAQ - Najczęściej Zadawane Pytania
 * 
 * Plik zawiera wszystkie pytania i odpowiedzi dla strony /faq.
 * Dane są używane zarówno w komponencie FAQContent jak i w FAQPageSchema (JSON-LD).
 * 
 * Aby dodać nowe pytanie:
 * 1. Dodaj obiekt do tablicy faqItems
 * 2. Przypisz odpowiednią kategorię
 * 3. Upewnij się, że odpowiedź jest zwięzła (2-4 zdania) dla SEO
 */

export type FAQCategoryId = 'rezerwacja' | 'hotel' | 'atrakcje' | 'dojazd';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  /** Odpowiedź w formacie HTML (dla linków wewnętrznych) */
  answerHtml?: string;
  category: FAQCategoryId;
}

export interface FAQCategory {
  id: FAQCategoryId;
  name: string;
  anchor: string;
}

export const faqCategories: FAQCategory[] = [
  { id: 'rezerwacja', name: 'Rezerwacja i ceny', anchor: 'rezerwacja' },
  { id: 'hotel', name: 'Hotel i pokoje', anchor: 'hotel' },
  { id: 'atrakcje', name: 'Atrakcje i okolica', anchor: 'atrakcje' },
  { id: 'dojazd', name: 'Dojazd i parking', anchor: 'dojazd' },
];

export const faqItems: FAQItem[] = [
  // ═══════════════════════════════════════════════════════════════════
  // REZERWACJA I CENY
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'cena-noclegu',
    question: 'Ile kosztuje nocleg w Dworze Bartnika?',
    answer: 'Ceny zaczynają się od 120 zł za osobę za noc w pokoju 4-osobowym. Pokoje 3-osobowe od 150 zł/os, pokoje 2-osobowe od 175 zł/os. Apartamenty premium (z sauną lub jacuzzi) od 300-400 zł/os. W cenie: śniadanie, degustacja miodu, wstęp do Muzeum Pszczelarstwa.',
    answerHtml: 'Ceny zaczynają się od <strong>120 zł za osobę za noc</strong> w pokoju 4-osobowym. Pokoje 3-osobowe od 150 zł/os, pokoje 2-osobowe od 175 zł/os. Apartamenty premium (z sauną lub jacuzzi) od 300-400 zł/os. W cenie: śniadanie, degustacja miodu, wstęp do Muzeum Pszczelarstwa.',
    category: 'rezerwacja',
  },
  {
    id: 'jak-zarezerwowac',
    question: 'Jak zarezerwować pokój?',
    answer: 'Rezerwacji można dokonać: (1) przez formularz na stronie Pokoje, (2) telefonicznie: +48 721 907 000, (3) mailowo: sapiolko@op.pl. Najlepsza cena gwarantowana przy rezerwacji bezpośredniej!',
    answerHtml: 'Rezerwacji można dokonać: (1) przez formularz na stronie <a href="/noclegi-bialowieza" class="text-primary-600 hover:underline font-medium">Pokoje</a>, (2) telefonicznie: <a href="tel:+48721907000" class="text-primary-600 hover:underline font-medium">+48 721 907 000</a>, (3) mailowo: <a href="mailto:sapiolko@op.pl" class="text-primary-600 hover:underline font-medium">sapiolko@op.pl</a>. Najlepsza cena gwarantowana przy rezerwacji bezpośredniej!',
    category: 'rezerwacja',
  },
  {
    id: 'anulowanie-rezerwacji',
    question: 'Czy mogę anulować rezerwację?',
    answer: 'Tak, bezpłatna anulacja możliwa jest do 5 dni przed przyjazdem. Po tym terminie zadatek nie podlega zwrotowi, ale każdego gościa traktujemy indywidualnie - prosimy o kontakt.',
    category: 'rezerwacja',
  },
  {
    id: 'dzieci-bezplatnie',
    question: 'Czy dzieci nocują bezpłatnie?',
    answer: 'Tak! Dzieci do 4. roku życia nocują bezpłatnie. Na życzenie udostępniamy łóżeczko dziecięce.',
    answerHtml: 'Tak! <strong>Dzieci do 4. roku życia nocują bezpłatnie</strong>. Na życzenie udostępniamy łóżeczko dziecięce.',
    category: 'rezerwacja',
  },

  // ═══════════════════════════════════════════════════════════════════
  // HOTEL I POKOJE
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'godziny-zameldowania',
    question: 'O której godzinie mogę się zameldować/wymeldować?',
    answer: 'Zameldowanie (check-in) od 15:00, wymeldowanie (check-out) do 11:00. Wcześniejsze zameldowanie lub późniejsze wymeldowanie możliwe po uzgodnieniu z recepcją.',
    answerHtml: '<strong>Zameldowanie (check-in):</strong> od 15:00<br/><strong>Wymeldowanie (check-out):</strong> do 11:00<br/>Wcześniejsze zameldowanie lub późniejsze wymeldowanie możliwe po uzgodnieniu z recepcją.',
    category: 'hotel',
  },
  {
    id: 'zwierzeta',
    question: 'Czy mogę przyjechać z psem?',
    answer: 'Tak, zwierzęta są akceptowane po wcześniejszym zgłoszeniu. Obowiązuje opłata 50 zł za dobę.',
    answerHtml: 'Tak, <strong>zwierzęta są akceptowane</strong> po wcześniejszym zgłoszeniu. Obowiązuje opłata 50 zł za dobę.',
    category: 'hotel',
  },
  {
    id: 'sniadanie',
    question: 'Co zawiera śniadanie?',
    answer: 'Śniadanie serwujemy w Restauracji Carska Komnata. W ofercie: lokalne wędliny i sery, jajecznica, pieczywo, dżemy domowe, świeże warzywa, miód z własnej pasieki, kawa, herbata, soki. Dostępne opcje wegetariańskie i bezglutenowe.',
    answerHtml: 'Śniadanie serwujemy w Restauracji Carska Komnata. W ofercie: lokalne wędliny i sery, jajecznica, pieczywo, dżemy domowe, świeże warzywa, <strong>miód z własnej pasieki</strong>, kawa, herbata, soki. Dostępne opcje wegetariańskie i bezglutenowe.',
    category: 'hotel',
  },
  {
    id: 'wifi',
    question: 'Czy pokoje mają Wi-Fi?',
    answer: 'Tak, bezpłatne Wi-Fi dostępne jest w całym hotelu i we wszystkich pokojach.',
    answerHtml: 'Tak, <strong>bezpłatne Wi-Fi</strong> dostępne jest w całym hotelu i we wszystkich pokojach.',
    category: 'hotel',
  },

  // ═══════════════════════════════════════════════════════════════════
  // ATRAKCJE I OKOLICA
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'gdzie-zubry',
    question: 'Gdzie mogę zobaczyć żubry?',
    answer: 'Są trzy opcje: (1) Karmnik żubrów - 2 km od hotelu, dzikie żubry bez ogrodzenia, (2) Kosy Most - 5 km, wieża widokowa, (3) Rezerwat Pokazowy Żubrów - 18 km, 100% gwarancja zobaczenia. Organizujemy wycieczki melexem.',
    answerHtml: 'Są trzy opcje: (1) <strong>Karmnik żubrów</strong> - 2 km od hotelu, dzikie żubry bez ogrodzenia, (2) <strong>Kosy Most</strong> - 5 km, wieża widokowa, (3) <strong>Rezerwat Pokazowy Żubrów</strong> - 18 km, 100% gwarancja zobaczenia. Organizujemy wycieczki melexem. <a href="/zubry-bialowieza" class="text-primary-600 hover:underline font-medium">Więcej informacji →</a>',
    category: 'atrakcje',
  },
  {
    id: 'bialowieza-zima',
    question: 'Czy warto jechać do Białowieży zimą?',
    answer: 'Zdecydowanie tak! Zimą łatwiej zobaczyć żubry (gromadzą się przy karmnikach), Puszcza pokryta śniegiem jest magiczna, a w hotelu czeka sauna, balia i ciepły piec kaflowy w restauracji.',
    answerHtml: '<strong>Zdecydowanie tak!</strong> Zimą łatwiej zobaczyć żubry (gromadzą się przy karmnikach), Puszcza pokryta śniegiem jest magiczna, a w hotelu czeka sauna, balia i ciepły piec kaflowy w restauracji.',
    category: 'atrakcje',
  },
  {
    id: 'ile-dni',
    question: 'Ile dni potrzeba na zwiedzenie Białowieży?',
    answer: 'Polecamy minimum 2-3 dni. Dzień 1: Rezerwat Pokazowy Żubrów + Muzeum Pszczelarstwa. Dzień 2: Ścisły Rezerwat BPN (wycieczka z przewodnikiem). Dzień 3: Szlaki rowerowe, karmnik żubrów, relaks w saunie.',
    answerHtml: 'Polecamy minimum <strong>2-3 dni</strong>. Dzień 1: Rezerwat Pokazowy Żubrów + Muzeum Pszczelarstwa. Dzień 2: Ścisły Rezerwat BPN (wycieczka z przewodnikiem). Dzień 3: Szlaki rowerowe, karmnik żubrów, relaks w saunie.',
    category: 'atrakcje',
  },
  {
    id: 'wypozyczalnia-rowerow',
    question: 'Czy mogę wypożyczyć rower?',
    answer: 'Tak! Oferujemy rowery tradycyjne i elektryczne dla gości. Rowery elektryczne pozwalają na przejazd nawet 120 km bez wysiłku. Hotel ma rekomendację Miejsca Przyjaznego Rowerzystom na Wschodnim Szlaku Rowerowym Green Velo.',
    answerHtml: 'Tak! Oferujemy <strong>rowery tradycyjne i elektryczne</strong> dla gości. Rowery elektryczne pozwalają na przejazd nawet 120 km bez wysiłku. Hotel ma rekomendację <strong>Miejsca Przyjaznego Rowerzystom</strong> na Wschodnim Szlaku Rowerowym Green Velo.',
    category: 'atrakcje',
  },
  {
    id: 'co-robic-z-dziecmi',
    question: 'Co robić w Białowieży z dziećmi?',
    answer: 'Dla rodzin polecamy: Rezerwat Pokazowy Żubrów (dzieci uwielbiają!), Muzeum Pszczelarstwa z degustacją miodu, Ogród Sensoryczny, plac zabaw przy hotelu, wypożyczalnię rowerów, wycieczki melexem do karmnika żubrów. Dzieci do 4 lat nocują bezpłatnie!',
    answerHtml: 'Dla rodzin polecamy: <strong>Rezerwat Pokazowy Żubrów</strong> (dzieci uwielbiają!), <a href="/muzeum-pszczelarstwa" class="text-primary-600 hover:underline font-medium">Muzeum Pszczelarstwa</a> z degustacją miodu, <a href="/ogrod-sensoryczny" class="text-primary-600 hover:underline font-medium">Ogród Sensoryczny</a>, plac zabaw przy hotelu, wypożyczalnię rowerów, wycieczki melexem do karmnika żubrów. <strong>Dzieci do 4 lat nocują bezpłatnie!</strong>',
    category: 'atrakcje',
  },
  {
    id: 'gdzie-zjesc',
    question: 'Gdzie zjeść w Białowieży? Jaka jest najlepsza restauracja?',
    answer: 'W regionie polecamy naszą Restaurację Carska Komnata! Serwujemy dania regionalne Podlasia, dziczyzznę, pierogi, warenyky. Dostępne opcje wegetariańskie, wegańskie i bezglutenowe. Czynne 11:00-20:00. Goście hotelowi mają śniadanie w cenie.',
    answerHtml: 'W regionie polecamy naszą <a href="/restauracja-bialowieza" class="text-primary-600 hover:underline font-medium">Restaurację Carska Komnata</a>! Serwujemy <strong>dania regionalne Podlasia</strong>, dziczyznę, pierogi, warenyky. Dostępne opcje wegetariańskie, wegańskie i bezglutenowe. Czynne 11:00-20:00. Goście hotelowi mają śniadanie w cenie.',
    category: 'atrakcje',
  },
  {
    id: 'kiedy-przyjechac',
    question: 'Kiedy najlepiej przyjechać do Białowieży?',
    answer: 'Każda pora roku ma swój urok! Wiosna: budzenie się przyrody, wyciszenie. Lato: pełnia zieleni, spływy kajakowe, rowery. Jesień: złote liście, grzybobranie, mniej turystów. Zima: żubry przy karmnikach, śnieżne pejzaże, sauna. Najłatwiej zobaczyć żubry zimą!',
    answerHtml: '<strong>Każda pora roku ma swój urok!</strong> Wiosna: budzenie się przyrody, wyciszenie. Lato: pełnia zieleni, spływy kajakowe, rowery. Jesień: złote liście, grzybobranie, mniej turystów. Zima: żubry przy karmnikach, śnieżne pejzaże, sauna. <strong>Najłatwiej zobaczyć żubry zimą!</strong>',
    category: 'atrakcje',
  },
  {
    id: 'gdzie-kupic-miod',
    question: 'Gdzie kupić miód w Białowieży?',
    answer: 'Miód prosto z pasieki kupisz u nas w Dworze Bartnika! Oferujemy miód Fenomen Natury - potrójnie uszlachetniany miód z pyłkiem, mleczkiem i kitem pszczelim. Dostępny też pyłek kwiatowy i miody odmianowe. W cenie noclegu degustacja miodu.',
    answerHtml: 'Miód prosto z pasieki kupisz u nas w <strong>Dworze Bartnika</strong>! Oferujemy <a href="https://fenomennatury.pl/?fenomen-natury" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:underline font-medium">miód Fenomen Natury</a> - potrójnie uszlachetniany miód z pyłkiem, mleczkiem i kitem pszczelim. Dostępny też pyłek kwiatowy i miody odmianowe. W cenie noclegu degustacja miodu.',
    category: 'atrakcje',
  },
  {
    id: 'wesela-organizacja',
    question: 'Czy można zorganizować wesele w Dworze Bartnika?',
    answer: 'Tak! Organizujemy wesela, chrzciny, komunie, stypy, imprezy firmowe i integracyjne. Mamy dwie sale: bankietową do 150 osób i konferencyjną do 60 osób. W ofercie: catering z kuchnią regionalną, noclegi dla gości, piękne otoczenie Puszczy Białowieskiej.',
    answerHtml: '<strong>Tak!</strong> Organizujemy wesela, chrzciny, komunie, stypy, imprezy firmowe i integracyjne. Mamy dwie sale: bankietową do <strong>150 osób</strong> i konferencyjną do 60 osób. W ofercie: catering z kuchnią regionalną, noclegi dla gości, piękne otoczenie Puszczy Białowieskiej. <a href="/wesela-bialowieza" class="text-primary-600 hover:underline font-medium">Zobacz ofertę weselną →</a>',
    category: 'hotel',
  },

  // ═══════════════════════════════════════════════════════════════════
  // DOJAZD I PARKING
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'jak-dojechac',
    question: 'Jak dojechać do Dworu Bartnika?',
    answer: 'Dwór Bartnika znajduje się w Narewce, przy trasie Białystok - Białowieża (droga 689). GPS: 52.8393889, 23.717661. Z Białegostoku ok. 60 km (1h), z Warszawy ok. 230 km (3h).',
    answerHtml: 'Dwór Bartnika znajduje się w <strong>Narewce</strong>, przy trasie Białystok - Białowieża (droga 689). <strong>GPS:</strong> 52.8393889, 23.717661. Z Białegostoku ok. 60 km (1h), z Warszawy ok. 230 km (3h). <a href="/kontakt" class="text-primary-600 hover:underline font-medium">Zobacz mapę →</a>',
    category: 'dojazd',
  },
  {
    id: 'parking',
    question: 'Czy jest parking?',
    answer: 'Tak, bezpłatny, monitorowany i ogrodzony parking dostępny jest dla wszystkich gości. Parking pomieści również autokary.',
    answerHtml: 'Tak, <strong>bezpłatny, monitorowany i ogrodzony parking</strong> dostępny jest dla wszystkich gości. Parking pomieści również autokary.',
    category: 'dojazd',
  },
  {
    id: 'odleglosc-bialowieza',
    question: 'Ile jest od was do Białowieży?',
    answer: 'Do centrum Białowieży jest 15 km (ok. 15 minut samochodem). Do Rezerwatu Pokazowego Żubrów - 18 km.',
    answerHtml: 'Do centrum Białowieży jest <strong>15 km</strong> (ok. 15 minut samochodem). Do Rezerwatu Pokazowego Żubrów - 18 km.',
    category: 'dojazd',
  },
];

/**
 * Pobiera pytania FAQ dla danej kategorii
 */
export function getFAQByCategory(categoryId: FAQCategoryId): FAQItem[] {
  return faqItems.filter(item => item.category === categoryId);
}

/**
 * Pobiera wszystkie pytania FAQ pogrupowane według kategorii
 */
export function getFAQGroupedByCategory(): Record<FAQCategoryId, FAQItem[]> {
  return {
    rezerwacja: getFAQByCategory('rezerwacja'),
    hotel: getFAQByCategory('hotel'),
    atrakcje: getFAQByCategory('atrakcje'),
    dojazd: getFAQByCategory('dojazd'),
  };
}
