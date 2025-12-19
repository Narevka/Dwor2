import { Great_Vibes, Poppins } from 'next/font/google';

// Font kursywny dla nagłówków - Great Vibes
export const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin', 'latin-ext'], // latin-ext dla polskich znaków (ą, ę, ź, etc.)
  display: 'swap', // pokazuje tekst natychmiast z fallback fontem
  variable: '--font-great-vibes',
  preload: true,
});

// Font podstawowy - Poppins (wszystkie wagi używane w projekcie)
export const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
});
