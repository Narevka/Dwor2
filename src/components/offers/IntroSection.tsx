'use client';

import Link from 'next/link';

interface IntroSectionProps {
  description: string;
  dateRange: string;
  nights: number;
  priceFrom: number;
}

export function IntroSection({ description, dateRange, nights, priceFrom }: IntroSectionProps) {
  return (
    <section id="intro" className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 mb-6">
            <span className="text-primary-600 font-medium">{nights} noce</span>
            <span className="text-primary-300">|</span>
            <span className="text-primary-600">od <strong>{priceFrom} zł</strong>/os</span>
          </div>
          
          {/* Date */}
          <p className="text-lg md:text-xl text-gray-500 mb-4">
            {dateRange}
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            {description}
          </p>
          
          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#pakiety" 
              className="btn-primary text-lg px-8 py-4"
            >
              Zobacz pakiety
            </a>
            <a 
              href="#harmonogram" 
              className="btn-outline text-lg px-8 py-4"
            >
              Sprawdź harmonogram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
