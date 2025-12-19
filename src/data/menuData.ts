// Dane menu restauracji Carska Komnata
// Łatwe do edycji - wystarczy zmienić ceny lub dodać/usunąć pozycje

export type DietaryTag = 'vegan' | 'vegetarian' | 'gluten-free';

export interface MenuItem {
  name: string;
  description?: string;
  price: number | string;
  weight?: string;
  tags?: DietaryTag[];
  variants?: { name: string; price?: number }[];
}

export interface MenuSection {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

// Zestaw dnia
export const zestawDnia = {
  price: 44,
  description: 'Zupa dnia + Danie dnia',
};

// Przekąski
export const przekaski: MenuItem[] = [
  { name: 'Deska serów klasztornych', weight: '200g', price: 39, tags: ['vegetarian', 'gluten-free'] },
  { name: 'Deska wędlin domowych', weight: '200g', price: 35, tags: ['gluten-free'] },
  { name: 'Śledź z cebulą w oleju', weight: '100g', price: 22 },
  { name: 'Tatar wołowy', weight: '100g', price: 36, tags: ['gluten-free'] },
  { name: 'Sałatka firmowa z filetem z kaczki', price: 49 },
];

// Zupy
export const zupy: MenuItem[] = [
  { name: 'Zupa dnia', price: 18 },
  { name: 'Barszcz czerwony z pasztecikiem', price: 18 },
  { name: 'Soljanka', price: 28, tags: ['gluten-free'] },
  { name: 'Wegańska pomidorowa z soczewicą', price: 24, tags: ['vegan'] },
  { name: 'Pielmieni w rosole', price: 29 },
];

// Dania główne
export const daniaGlowne: MenuItem[] = [
  { name: 'Danie dnia', price: 32 },
  { name: 'Schabowy', weight: '150g', price: 29 },
  { name: 'Sznycelki z jabłkiem', weight: '150g', price: 34 },
  { name: 'Kartacze', description: '2 sztuki', price: 34 },
  { name: 'Zraz wołowy w sosie myśliwskim', weight: '150g', price: 48, tags: ['gluten-free'] },
  { 
    name: 'Czebureki', 
    description: '2 sztuki',
    price: 38,
    variants: [
      { name: 'z wołowiną' },
      { name: 'z białym serem' },
      { name: 'z jabłkami', price: 38 },
    ]
  },
  { name: 'Miruna z pieca z opiekanymi ziemniakami', weight: '150g', price: 46, tags: ['gluten-free'] },
  { name: 'Sandacz pieczony na puree z groszku', weight: '150g', price: 65, tags: ['gluten-free'] },
  { 
    name: 'Warenyki ręcznie robione', 
    description: '8 sztuk',
    price: 38,
    variants: [
      { name: 'z kapustą i grzybami', price: 38 },
      { name: 'z mięsem' },
      { name: 'ruskie', price: 38 },
      { name: 'z jagodami', price: 38 },
      { name: 'z soczewicą', price: 38 },
    ],
    tags: ['vegetarian']
  },
  { 
    name: 'Babka ziemniaczana', 
    weight: '350g',
    price: 36,
    variants: [
      { name: 'z mięsem i śmietaną' },
      { name: 'jarska', price: 36 },
    ]
  },
  { name: 'Filet z kurczaka z frytkami', weight: '100g', price: 34 },
  { name: 'Kaczka w sosie z brusznicą i kluseczkami', price: 69 },
  { name: 'Pierogi z dziczyzną', description: '6 sztuk', price: 45 },
  { name: 'Gulasz z sarny z borowikami', weight: '350g', price: 87, tags: ['gluten-free'] },
];

// Dodatki
export const dodatki: MenuItem[] = [
  { name: 'Ziemniaki', weight: '200g', price: 9, tags: ['vegan', 'gluten-free'] },
  { name: 'Frytki', weight: '150g', price: 9, tags: ['vegan', 'gluten-free'] },
  { name: 'Kopytka', weight: '200g', price: 9, tags: ['vegetarian'] },
  { name: 'Kasza gryczana / ryż', weight: '100g', price: 9, tags: ['vegan', 'gluten-free'] },
  { name: 'Dip czosnkowy / ketchup', weight: '30g', price: 3, tags: ['vegetarian'] },
  { name: 'Zestaw surówek', weight: '150g', price: 12, tags: ['vegan', 'gluten-free'] },
];

// Desery
export const desery: MenuItem[] = [
  { name: 'Naleśniki z serem i miodem', description: '2 szt.', price: 28 },
  { name: 'Ciasto dnia', weight: '100g', price: 18 },
  { name: 'Ciasto firmowe „Dusza Carycy"', price: 22 },
  { 
    name: 'Lody',
    price: 18,
    variants: [
      { name: 'kokosowe' },
      { name: 'pomarańczowe' },
      { name: 'owoce leśne' },
      { name: 'orzechowe' },
      { name: 'waniliowe' },
    ]
  },
];

// Napoje gorące
export const napojeGorace: MenuItem[] = [
  { 
    name: 'Herbata',
    price: 8,
    variants: [
      { name: 'czarna' },
      { name: 'zielona' },
      { name: 'owocowa' },
    ]
  },
  { name: 'Herbata wiśniowa rozgrzewająca', price: 14 },
  { name: 'Herbata zimowa z miodem, imbirem i pomarańczą', price: 14 },
  { name: 'Kawa (Espresso, parzona, z mlekiem)', price: 9 },
  { name: 'Cappuccino, Latte macchiato', price: 14 },
  { name: 'Gorąca czekolada', price: 16 },
];

// Napoje zimne
export const napojeZimne: MenuItem[] = [
  { 
    name: 'Sok',
    price: 8,
    description: '250ml',
    variants: [
      { name: 'jabłkowy' },
      { name: 'pomarańczowy' },
      { name: 'czarna porzeczka' },
    ]
  },
  { name: 'Woda', price: 8 },
  { name: 'Mirinda', price: 8 },
  { name: 'Seven up', price: 8 },
  { name: 'Pepsi', price: 8 },
  { name: 'Sok ze świeżych pomarańczy', price: 18 },
  { name: 'Kwas chlebowy', description: '400ml', price: 15 },
  { name: 'Kawa mrożona', price: 18 },
  { name: 'Freshpresso', price: 19 },
];

// Alkohole
export const alkohole: MenuItem[] = [
  { name: 'Drink Bartnika', description: 'wódka żurawinowa, sok jabłkowy, miód', price: 19 },
  { name: 'Drink warstwowy', description: 'grenadyna, sok pomarańczowy, wódka, malibu, likier', price: 28 },
  { name: 'Żubrownik', description: 'żubrówka, seven up', price: 22 },
  { name: 'Rasputin', description: 'żubrówka, miód pitny, sok z cytryny', price: 28 },
  { name: 'Wódka Old Polish', description: '40ml', price: 12 },
  { name: 'Whisky Jack Daniel\'s', description: '50ml', price: 28 },
  { name: 'Koniak Hennessy', description: '25ml', price: 18 },
  { name: 'Piwo', description: '500ml', price: 15 },
  { name: 'Grzane piwo z miodem', description: '300ml', price: 15 },
  { name: 'Shot „Żądło trutnia"', price: 14 },
  { 
    name: 'Miód pitny',
    description: '100ml',
    price: '-',
    variants: [
      { name: 'półtorak', price: 30 },
      { name: 'dwójniak', price: 25 },
      { name: 'trójniak', price: 22 },
    ]
  },
];

// Śniadania
export const sniadania = {
  price: 35,
  zestawy: [
    {
      name: 'Zestaw I',
      items: ['jajecznica', 'wędlina', 'ser żółty', 'pomidor', 'masło'],
    },
    {
      name: 'Zestaw II',
      items: ['parówki z wody', 'wędlina', 'ser żółty', 'twarożek ze szczypiorkiem', 'pomidor', 'masło', 'pieczywo'],
    },
    {
      name: 'Zestaw III',
      items: ['jaja gotowane', 'wędlina', 'serek topiony', 'pomidor', 'masło', 'pieczywo'],
    },
    {
      name: 'Zestaw IV',
      items: ['jajecznica', 'twaróg wiejski', 'ser żółty', 'pomidor', 'dżem, miód', 'masło', 'pieczywo'],
    },
  ],
  note: '*Śniadania serwujemy w formie bufetu w zależności od ilości osób na śniadaniu. Serwujemy ponadto: soki, ciasta, ryby, sałatki, pampuchy, serniczki, płatki, zupy mleczne, owoce.',
};

// Wszystkie sekcje menu
export const menuSections: MenuSection[] = [
  { id: 'przekaski', title: 'Przekąski', items: przekaski },
  { id: 'zupy', title: 'Zupy', subtitle: '400 ml', items: zupy },
  { id: 'dania-glowne', title: 'Dania główne', items: daniaGlowne },
  { id: 'dodatki', title: 'Dodatki', items: dodatki },
  { id: 'desery', title: 'Desery', items: desery },
  { id: 'napoje-gorace', title: 'Napoje gorące', items: napojeGorace },
  { id: 'napoje-zimne', title: 'Napoje zimne', subtitle: '250 ml', items: napojeZimne },
  { id: 'alkohole', title: 'Alkohole', items: alkohole },
];

// Legenda oznaczeń
export const dietaryLegend = [
  { tag: 'gluten-free' as DietaryTag, label: 'Danie bez glutenu', color: '#d4a574' },
  { tag: 'vegetarian' as DietaryTag, label: 'Danie wegetariańskie', color: '#7cb342' },
  { tag: 'vegan' as DietaryTag, label: 'Danie wegańskie', color: '#2e7d32' },
];

