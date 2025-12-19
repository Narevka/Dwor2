export interface Atrakcja {
    id: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    link?: string; // Opcjonalny link do dedykowanej strony
  }
  
  // Atrakcje wewnętrzne - dostępne na terenie hotelu
  export const atrakcjeWewnetrzne: Atrakcja[] = [
    {
      id: 'sauna',
      title: 'Sauna',
      description: 'Odprężenie i zdrowie w jednym miejscu. Dostępna na miejscu sauna parowa to doskonały sposób na relaks i poprawę zdrowia. Wysoka temperatura i wilgotność powietrza sprawiają, że ciało się rozgrzewa, a pory skóry otwierają. To idealny moment na pozbycie się toksyn i zanieczyszczeń.',
      image: '/images/atrakcje/sauna.jpg',
      imageAlt: 'Sauna w Dworze Bartnika',
    },
    {
      id: 'balia',
      title: 'Balia',
      description: 'Balia ogrodowa to doskonały sposób na relaks i poprawę zdrowia. Gorąca woda i parujące powietrze rozgrzewają ciało i umysł, sprzyjając głębokiemu wyciszeniu. Kąpiele w balii obniżają stres i napięcie nerwowe, pomagają w walce z migreną, łagodzą ból kręgosłupa i obolałych mięśni, poprawiają jakość snu oraz dbają o skórę. Balia może pomieścić nawet 5 osób, co pozwala na spędzenie wspólnego czasu w miłej atmosferze.',
      image: '/images/atrakcje/balia.jpg',
      imageAlt: 'Balia ogrodowa',
    },
    {
      id: 'melex',
      title: 'Melex',
      description: 'Podczas podróży otwartym busem uczestnicy mają możliwość wygodnego podziwiania otaczającej puszczy po drodze do docelowej atrakcji. Największą popularnością cieszą się: Karmnik żubrów - możliwość zobaczenia dzikich żubrów bez ogrodzenia, Kosy Most - wieża z widokiem na malowniczą dolinę rzeki Narewki, oraz Rezerwat Pokazowy Żubrów - żubry, żubronie, sarny, wilki i rysie o dowolnej porze.',
      image: '/images/atrakcje/melex.webp',
      imageAlt: 'Przejażdżki melexem',
    },
    {
      id: 'ognisko',
      title: 'Ognisko',
      description: 'Wieczorne spotkania przy ognisku to idealna atrakcja na każdą porę roku. Przy ognisku można rozkoszować się swojskimi wędlinami, ogórkami oraz smalcem - prawdziwymi podlaskimi przysmakami. Świetne miejsce na pieczenie kiełbasek, spędzanie czasu z bliskimi i cieszenie się prostymi, tradycyjnymi smakami w wyjątkowej atmosferze.',
      image: '/images/atrakcje/ognisko.webp',
      imageAlt: 'Ognisko w ogrodzie',
    },
    {
      id: 'quad',
      title: 'Quad i skuter śnieżny',
      description: 'Przejażdżka quadem przeprawowym zapewnia solidną dawkę wrażeń zarówno dla dorosłych jak i dzieci. W sezonie zimowym dodatkowo jest możliwe skorzystanie ze skutera śnieżnego.',
      image: '/images/atrakcje/quad.jpg',
      imageAlt: 'Quad i skuter śnieżny',
    },
    {
      id: 'rowery',
      title: 'Rowery elektryczne',
      description: 'Do dyspozycji gości są rowery tradycyjne i elektryczne, umożliwiające wygodną jazdę nawet do 120 km bez większego wysiłku. Okolice Narewki są bogate w szlaki turystyczne idealne na spacer, bieg oraz długie przejażdżki rowerowe. Najlepszym sposobem na dotarcie do niektórych miejsc w Puszczy Białowieskiej, gdzie obowiązuje zakaz wjazdu pojazdami spalinowymi, są właśnie rowery. Nasz hotel posiada rekomendację MPR - Miejsca Przyjaznego Rowerzystom na Wschodnim Szlaku Rowerowym Green Velo.',
      image: '/images/atrakcje/rowery.jpg',
      imageAlt: 'Rowery elektryczne',
    },
    {
      id: 'jacuzzi',
      title: 'Jacuzzi',
      description: 'Jacuzzi na zewnątrz to wyjątkowa okazja do relaksu na świeżym powietrzu. Duża wanna z hydromasażem może pomieścić do sześciu osób, zapewniając każdemu własne wygodne siedzisko. Woda podgrzewana do 40 stopni Celsjusza gwarantuje komfortowe ciepło niezależnie od pory roku. Jacuzzi jest utrzymywane w gotowości przez cały dzień, czekając na gości.',
      image: '/images/atrakcje/jacuzzi.jpg',
      imageAlt: 'Jacuzzi',
    },
    {
      id: 'uloterapia',
      title: 'Uloterapia',
      description: 'W ogrodach hotelu znajduje się drewniany domek do apiterapii z wbudowanymi ulami i czterema rodzinami pszczelimi odgrodzonymi od wnętrza siatką. Można tu poczuć charakterystyczny zapach powietrza z wnętrza uli oraz szum pracujących pszczół. W środku znajdują się leżanki, na których można się położyć i bez obaw o użądlenie nawet zasnąć. Apiterapia jest zalecana przy chorobach układu oddechowego, alergiach, układu sercowo-naczyniowego oraz pozytywnie wpływa na zdrowie psychiczne.',
      image: '/images/atrakcje/uloterapia.jpg',
      imageAlt: 'Uloterapia - terapia pszczołami',
    },
  ];
  
  // Atrakcje zewnętrzne - w okolicy
  export const atrakcjeZewnetrzne: Atrakcja[] = [
    {
      id: 'splyw-kajakowy',
      title: 'Spływ kajakowy',
      description: 'Trasy spływów kajakowych rzeką Narewką trwają od dwóch do nawet dziewięciu godzin. Narewka to rzeka o szerokości od 2 do 10 metrów. Prawie w całości płynie przez malownicze tereny Puszczy Białowieskiej, wśród lasów, łąk i bagien. W trakcie spływu można podziwiać piękno przyrody, a jeśli dopisze szczęście to bobry, zimorodki i wydry.',
      image: '/images/atrakcje/kajaki.jpg',
      imageAlt: 'Spływ kajakowy rzeką Narewką',
    },
    {
      id: 'zalew-siemianowka',
      title: 'Zalew Siemianówka',
      description: 'Zalew Siemianówka, trzeci największy sztuczny zbiornik wodny w kraju, znajduje się zaledwie 7,7 km od Narewki. To doskonałe miejsce do odpoczynku na plaży, pływania rowerkami wodnymi, motorówkami oraz wędkowania.',
      image: '/images/atrakcje/zalew.webp',
      imageAlt: 'Zalew Siemianówka',
    },
    {
      id: 'zebra-zubra',
      title: 'Żebra żubra',
      description: 'Żebra żubra to 4-kilometrowa ścieżka składająca się z pomostów i piaszczystych ścieżek. Prowadzi zwiedzającego po tętniących życiem bagnach, kwiecistych polanach i lasach prastarych drzew. Podczas wycieczki usłyszeć można śpiew ptaków, a przy odrobinie szczęścia spotkać puszczańskie zwierzęta.',
      image: '/images/atrakcje/zebra-zubra.webp',
      imageAlt: 'Żebra żubra - ścieżka przyrodnicza',
    },
    {
      id: 'zubry',
      title: 'Żubry',
      description: 'Goście hotelu mają wiele możliwości, aby zobaczyć żubry. Karmnik żubrów znajduje się zaledwie 2 km od hotelu, gdzie wczesnym rankiem i wieczorem można spotkać dzikie stada bez żadnych ogrodzeń. Organizujemy przejazdy melexem do karmnika. Gwarancję spotkania daje Rezerwat Pokazowy Żubrów (18 km).',
      image: '/images/zubry/zubry_latem.webp',
      imageAlt: 'Stado żubrów na letniej polanie w Puszczy Białowieskiej - fot. Maria Sapiołko',
      link: '/zubry-bialowieza',
    },
    {
      id: 'rezerwat-scisly',
      title: 'Rezerwat ścisły',
      description: 'Wstęp do dziewiczej części Puszczy Białowieskiej dozwolony jest wyłącznie dla małych grup z przewodnikiem, który oprowadzi zwiedzających, ograniczając wpływ ludzi na pradawny las. Podczas wycieczki po najstarszym fragmencie lasu w Europie można zobaczyć Dąb Jagiełły, Dąb Bartyny oraz pomniki przyrody objęte ścisłą ochroną.',
      image: '/images/atrakcje/rezerwat.webp',
      imageAlt: 'Rezerwat ścisły Puszczy Białowieskiej',
    },
  ];
