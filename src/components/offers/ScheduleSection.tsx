'use client';

import type { OfferScheduleDay } from '@/data/offers/types';

interface ScheduleSectionProps {
  schedule: OfferScheduleDay[];
}

export function ScheduleSection({ schedule }: ScheduleSectionProps) {
  return (
    <section id="harmonogram" className="py-16 md:py-20 bg-stone-100">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-cursive text-4xl md:text-5xl text-primary-400 mb-4">
            Harmonogram
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Zobacz co przygotowaliśmy na każdy dzień pobytu
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {schedule.map((day, dayIndex) => (
            <div 
              key={day.day}
              className={`mb-8 last:mb-0 ${day.isOptional ? 'opacity-90' : ''}`}
            >
              {/* Day header */}
              <div className={`flex items-center gap-4 mb-4 ${day.isOptional ? 'flex-wrap' : ''}`}>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  {day.day}
                </h3>
                <span 
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    day.isOptional 
                      ? 'bg-primary-100 text-primary-700 border border-primary-300' 
                      : 'bg-stone-200 text-stone-700'
                  }`}
                >
                  {day.label}
                </span>
              </div>
              
              {/* Timeline */}
              <div className="relative pl-8 border-l-2 border-primary-200">
                {day.items.map((item, itemIndex) => (
                  <div 
                    key={`${day.day}-${itemIndex}`}
                    className="relative mb-6 last:mb-0"
                  >
                    {/* Dot */}
                    <div className="absolute -left-[25px] top-1 w-4 h-4 bg-primary-400 rounded-full border-2 border-white shadow" />
                    
                    {/* Content */}
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <span className="text-2xl">{item.icon}</span>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                            <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded w-fit">
                              {item.time}
                            </span>
                            <h4 className="font-semibold text-gray-800">
                              {item.title}
                            </h4>
                          </div>
                          {item.description && (
                            <p className="text-gray-500 text-sm mt-1">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Note about optional day */}
        <div className="max-w-2xl mx-auto mt-8 p-4 bg-primary-50 rounded-xl border border-primary-200 text-center">
          <p className="text-primary-700">
            <span className="font-bold">💡 Wskazówka:</span> Dodaj piątek za +199 zł/os i miej więcej czasu na zwiedzanie!
          </p>
        </div>
      </div>
    </section>
  );
}
