'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

export function Footer() {
  const pathname = usePathname();
  const isKontaktPage = pathname === '/kontakt';
  
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      alert('Proszę zaakceptować zgodę na otrzymywanie informacji.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, consent: true }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
        setConsent(false);
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error(result.error || 'Błąd zapisu');
      }
    } catch (error) {
      console.error('Newsletter error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-white">
      {/* Kontakt + Newsletter + Mapa */}
      <div className="bg-gray-100 py-10 border-t border-gray-300">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Kolumna 1 - Kontakt (lub Newsletter na /kontakt mobile) */}
            <div className="md:col-span-2 lg:col-span-1">
              {/* Na /kontakt mobile → Newsletter */}
              {isKontaktPage && (
                <div className="md:hidden">
                  <h3 className="font-cursive text-3xl text-primary-600 mb-3">
                    Zostań z nami w kontakcie
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    Pozwól, że od czasu do czasu przyślemy Ci odrobinę spokoju 
                    z Puszczy – informacje o wydarzeniach, ekskluzywne 
                    oferty lub zaproszenia na wyjątkowe wydarzenia.
                  </p>

                  {submitStatus === 'success' && (
                    <div className="mb-3 p-3 bg-green-100 text-green-800 rounded-lg text-sm">
                      ✅ Dziękujemy za zapisanie się!
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-3 p-3 bg-red-100 text-red-800 rounded-lg text-sm">
                      ❌ Wystąpił błąd. Spróbuj ponownie później.
                    </div>
                  )}

                  <form onSubmit={handleNewsletterSubmit} className="space-y-2.5">
                    <div className="flex gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Wpisz swój e-mail"
                        className="flex-grow px-3 py-2 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-sm"
                        required
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting || !consent || !email}
                        className="px-3 py-2 bg-primary-700 hover:bg-primary-800 text-white rounded-lg transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Zapisz się"
                      >
                        {isSubmitting ? (
                          <span className="animate-spin">⏳</span>
                        ) : (
                          <Send className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    
                    <label className="flex items-start gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-0.5 w-4 h-4 text-primary-400 border-gray-300 rounded focus:ring-primary-400 cursor-pointer"
                      />
                  <span className="text-xs text-gray-700 group-hover:text-gray-800 transition-colors leading-relaxed">
                    Wyrażam zgodę na otrzymywanie informacji handlowych i akceptuję{' '}
                    <Link 
                      href="/rodo" 
                      className="text-primary-800 hover:text-primary-900 underline underline-offset-2 font-semibold"
                    >
                      Politykę prywatności
                    </Link>
                  </span>
                    </label>
                  </form>
                </div>
              )}

              {/* Na innych stronach mobile lub desktop → Kontakt */}
              <div className={isKontaktPage ? 'hidden md:block' : ''}>
                <h3 className="font-cursive text-3xl text-primary-600 mb-4">
                  Kontakt
                </h3>
                
                <div className="space-y-2.5 text-gray-700 text-sm">
                  {/* Adres */}
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Dwór Bartnika w Narewce</p>
                      <p className="text-gray-600">ul. Hajnowska 2/1, 17-220 Narewka</p>
                    </div>
                  </div>

                  {/* Telefony */}
                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <a href="tel:+48856858388" className="block py-1 hover:text-primary-700 transition-colors font-medium">
                        <strong>tel.</strong> +48 85 685 83 88
                      </a>
                      <a href="tel:+48609850957" className="block py-1 hover:text-primary-700 transition-colors text-gray-700 font-medium">
                        <strong>tel. kom.</strong> +48 609 850 957
                      </a>
                      <a href="tel:+48721907000" className="block py-1 hover:text-primary-700 transition-colors text-gray-700 font-medium">
                        <strong>tel. kom.</strong> +48 721 907 000
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <a
                    href="mailto:sapiolko@op.pl"
                    className="flex items-center gap-2.5 py-1 hover:text-primary-700 transition-colors font-medium"
                  >
                    <Mail className="w-4 h-4 text-primary-600" />
                    <span><strong>e-mail:</strong> sapiolko@op.pl</span>
                  </a>

                  {/* Social Media */}
                  <div className="flex items-center gap-2 pt-1">
                    <a
                      href="https://www.facebook.com/DworBartnikaPuszczaBialowieska"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary-400 hover:text-white transition-colors text-gray-500"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.youtube.com/@dworbartnika7327"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary-400 hover:text-white transition-colors text-gray-500"
                      aria-label="YouTube"
                    >
                      <FaYoutube className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.instagram.com/dworbartnika/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary-400 hover:text-white transition-colors text-gray-500"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Kolumna 2 - Newsletter - ukryta na mobilce, widoczna od md */}
            <div className="hidden md:block">
              <h3 className="font-cursive text-3xl text-primary-600 mb-3">
                Zostań z nami w kontakcie
              </h3>
              
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                Pozwól, że od czasu do czasu przyślemy Ci odrobinę spokoju 
                z Puszczy – informacje o wydarzeniach w regionie, ekskluzywne 
                oferty lub zaproszenia na wyjątkowe wydarzenia.
              </p>

              {submitStatus === 'success' && (
                <div className="mb-3 p-3 bg-green-100 text-green-800 rounded-lg text-sm">
                  ✅ Dziękujemy za zapisanie się! Na podany adres będziemy wysyłać informacje o ofercie.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-3 p-3 bg-red-100 text-red-800 rounded-lg text-sm">
                  ❌ Wystąpił błąd. Spróbuj ponownie później.
                </div>
              )}

              <form onSubmit={handleNewsletterSubmit} className="space-y-2.5">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Wpisz swój e-mail"
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-sm"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting || !consent || !email}
                    className="px-3 py-2 bg-primary-700 hover:bg-primary-800 text-white rounded-lg transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Zapisz się"
                  >
                    {isSubmitting ? (
                      <span className="animate-spin">⏳</span>
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </button>
                </div>
                
                {/* Checkbox RODO */}
                <label className="flex items-start gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 w-4 h-4 text-primary-400 border-gray-300 rounded focus:ring-primary-400 cursor-pointer"
                  />
                  <span className="text-xs text-gray-700 group-hover:text-gray-800 transition-colors leading-relaxed">
                    Wyrażam zgodę na otrzymywanie informacji handlowych i akceptuję{' '}
                    <Link 
                      href="/rodo" 
                      className="text-primary-800 hover:text-primary-900 underline underline-offset-2 font-semibold"
                    >
                      Politykę prywatności
                    </Link>
                  </span>
                </label>
              </form>
            </div>

            {/* Kolumna 3 - Mapa - ukryta na mobilce, widoczna od lg */}
            <div className="hidden lg:block">
              <h3 className="font-cursive text-3xl text-primary-600 mb-3">
                Lokalizacja
              </h3>
              <a 
                href="https://maps.google.com/?q=Dw%C3%B3r+Bartnika,+Hajnowska+2/1,+17-220+Narewka"
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <iframe
                  src="https://maps.google.pl/maps?q=Dw%C3%B3r+Bartnika,+Hajnowska+2/1,+17-220+Narewka,+Polska&z=10&t=h&output=embed"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja Dworu Bartnika"
                  className="grayscale-[15%] hover:grayscale-0 transition-all pointer-events-none"
                />
              </a>
              <p className="text-xs text-gray-600 font-medium mt-2 text-center">
                Kliknij, aby otworzyć w Google Maps
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-200 border-t border-gray-300">
        <div className="container-custom py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-700 pr-16 sm:pr-0">
            {/* Linki prawne */}
            <div className="flex items-center gap-3">
              <Link 
                href="/regulamin-rezerwacji" 
                className="hover:text-primary-800 transition-colors font-semibold"
              >
                Regulamin rezerwacji
              </Link>
              <span className="text-gray-400">|</span>
              <Link 
                href="/rodo" 
                className="hover:text-primary-800 transition-colors font-semibold"
              >
                RODO
              </Link>
            </div>
            
            {/* Copyright */}
            <p className="font-medium">
              © {new Date().getFullYear()} Dwór Bartnika | Wykonanie:{' '}
              <a 
                href="https://toknowai.pl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-800 hover:text-primary-900 font-semibold transition-colors"
              >
                ToKnowAI.pl
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
