import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Strona nie znaleziona | Dwór Bartnika',
  description: 'Przepraszamy, strona której szukasz nie istnieje.',
  openGraph: {
    title: 'Strona nie znaleziona | Dwór Bartnika',
    description: 'Przepraszamy, strona której szukasz nie istnieje.',
    url: 'https://dworbartnika.pl',
    siteName: 'Dwór Bartnika',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/images/og/OG_404.jpg',
        width: 1200,
        height: 630,
        alt: 'Strona nie znaleziona - Dwór Bartnika',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strona nie znaleziona | Dwór Bartnika',
    description: 'Przepraszamy, strona której szukasz nie istnieje.',
    images: ['/images/og/OG_404.jpg'],
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-6">
        <div className="mb-8">
          <Image
            src="/images/logo/dworbartnika.png"
            alt="Dwór Bartnika"
            width={120}
            height={80}
            className="mx-auto opacity-50"
          />
        </div>
        <h1 className="font-cursive text-6xl md:text-8xl text-primary-400 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Strona nie znaleziona
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Przepraszamy, strona której szukasz nie istnieje lub została przeniesiona.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="btn-primary"
          >
            Wróć na stronę główną
          </Link>
          <Link 
            href="/kontakt"
            className="btn-outline"
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </div>
    </div>
  );
}
