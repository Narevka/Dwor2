'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

export function KontaktContent() {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error(result.error || 'Błąd wysyłania');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero section */}
      <section className="relative h-[60vh] min-h-[350px] md:h-[85vh] md:min-h-[600px]">
        <Image
          src="/images/new/DSC02829.JPG"
          alt="Kontakt - Dwór Bartnika"
          fill
          className="object-cover object-center"
          priority
          quality={75}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-black/40" />
        
        {/* Przycisk "więcej informacji" - tylko desktop */}
        <div className="hidden md:block absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
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
          MOBILE: Box "Kontakt" nachodzący na hero
      ═══════════════════════════════════════════════════════════════════ */}
      <div id="content" className="md:hidden relative z-10 -mt-20 px-5 pb-6">
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-black/15 border border-stone-200/60 overflow-hidden">
          <div className="border border-primary-400/20 rounded-xl m-2.5 p-5">
            <h1 className="font-cursive text-3xl text-primary-400 text-center mb-3">
              Kontakt - Dwór Bartnika
            </h1>
            <div className="flex justify-center">
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP: Tytuł (oryginalny)
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="content" className="hidden md:block bg-gray-50 pt-12 pb-4">
        <div className="container-custom text-center">
          {/* Dekoracyjny nagłówek - span zamiast h1 (H1 jest w wersji mobile) */}
          <span className="block font-cursive text-5xl md:text-6xl text-primary-400 mb-4">
            Kontakt - Dwór Bartnika
          </span>
        </div>
      </section>

      {/* Główna treść - dane kontaktowe i formularz */}
      <section className="bg-gray-50 py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Lewa kolumna - Dane kontaktowe */}
            <div>
              <h2 className="font-cursive text-3xl text-primary-400 mb-8">
                Dane kontaktowe
              </h2>
              
              <div className="space-y-6 text-gray-700">
                {/* Adres */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg mb-1">Dwór Bartnika w Narewce</p>
                    <p>ul. Hajnowska 2/1</p>
                    <p>17-220 Narewka</p>
                  </div>
                </div>

                {/* Telefony */}
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                  <div className="space-y-1">
                    <a
                      href="tel:+48856858388"
                      className="block hover:text-primary-600 transition-colors"
                    >
                      <strong>tel.</strong> +48 85 685 83 88
                    </a>
                    <a
                      href="tel:+48609850957"
                      className="block hover:text-primary-600 transition-colors"
                    >
                      <strong>tel. kom.</strong> +48 609 850 957
                    </a>
                    <a
                      href="tel:+48721907000"
                      className="block hover:text-primary-600 transition-colors"
                    >
                      <strong>tel. kom.</strong> +48 721 907 000
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                  <a
                    href="mailto:sapiolko@op.pl"
                    className="hover:text-primary-600 transition-colors"
                  >
                    <strong>e-mail:</strong> sapiolko@op.pl
                  </a>
                </div>

                {/* Godziny */}
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-1">Recepcja czynna:</p>
                    <p>Codziennie: 7:00 - 22:00</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <p className="font-bold text-gray-700 mb-4">Znajdź nas w social media:</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/DworBartnikaPuszczaBialowieska"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary-400 hover:text-white transition-colors text-gray-600"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.youtube.com/@dworbartnika7327"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary-400 hover:text-white transition-colors text-gray-600"
                    aria-label="YouTube"
                  >
                    <FaYoutube className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/dworbartnika/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary-400 hover:text-white transition-colors text-gray-600"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Prawa kolumna - Formularz kontaktowy */}
            <div>
              <h2 className="font-cursive text-3xl text-primary-400 mb-8">
                Napisz do nas
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                  ✅ Dziękujemy! Twoja wiadomość została wysłana. Odpowiemy najszybciej jak to możliwe.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg">
                  ❌ Wystąpił błąd. Spróbuj ponownie lub skontaktuj się telefonicznie.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Adres e-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="twoj@email.pl"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Wiadomość *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    placeholder="Napisz swoją wiadomość..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na zapytanie zgodnie z{' '}
                    <Link href="/rodo" className="text-primary-600 hover:underline font-medium">
                      Polityką Prywatności
                    </Link>
                    . *
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary px-8 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Lub zadzwoń: <a href="tel:+48721907000" className="text-primary-600 hover:underline font-medium">+48 721 907 000</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="bg-gray-50 pb-12">
        <div className="container-custom">
          <h2 className="font-cursive text-3xl text-primary-400 mb-8 text-center">
            Jak do nas trafić?
          </h2>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.pl/maps?q=Dwór+Bartnika,+Hajnowska+2/1,+17-220+Narewka,+Polska&z=13&t=h&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa - Dwór Bartnika"
            />
          </div>

          {/* Wskazówki dojazdu */}
          <div className="mt-8 text-center text-gray-700">
            <p className="mb-2">
              <strong>Dojazd samochodem:</strong> Narewka znajduje się przy trasie Białystok - Białowieża (droga nr 689).
            </p>
            <p>
              <strong>GPS:</strong> 52.8393889, 23.717661
            </p>
          </div>
        </div>
      </section>

      {/* Sekcja FAQ */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="container-custom text-center">
          <h2 className="font-cursive text-3xl md:text-4xl text-primary-400 mb-4">
            Często zadawane pytania
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Znajdź odpowiedzi na najczęstsze pytania o noclegi, dojazd, żubry i atrakcje w okolicy.
          </p>
          <Link 
            href="/faq" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors font-medium"
          >
            Zobacz FAQ
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
