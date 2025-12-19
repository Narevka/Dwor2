'use client';

import Image from 'next/image';

interface StorytellingHeroProps {
  title: string;
  subtitle?: string;
  heroImage: string;
  emoji: string;
  priceFrom: number;
}

export function StorytellingHero({ title, subtitle, heroImage, emoji, priceFrom }: StorytellingHeroProps) {
  return (
    <section className="relative h-[70vh] min-h-[500px] md:h-[90vh] md:min-h-[600px]">
      <Image
        src={heroImage}
        alt={title}
        fill
        className="object-cover object-center"
        priority
        quality={75}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <span className="text-6xl md:text-8xl mb-4">{emoji}</span>
        <h1 className="font-cursive text-4xl md:text-6xl lg:text-7xl text-white mb-4 drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 mb-6 drop-shadow-md">
            {subtitle}
          </p>
        )}
        <div className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl">
          <span className="text-gray-600 text-sm md:text-base">od </span>
          <span className="text-2xl md:text-3xl font-bold text-primary-500">{priceFrom} zł</span>
          <span className="text-gray-600 text-sm md:text-base">/os</span>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a 
          href="#intro" 
          className="text-white/80 hover:text-white flex flex-col items-center gap-2 transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider font-light">Poznaj ofertę</span>
          <div className="w-10 h-10 border-2 border-white/50 rounded-full flex items-center justify-center group-hover:border-white transition-colors animate-bounce">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
}
