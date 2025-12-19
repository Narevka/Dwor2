'use client';

interface ImportantInfoProps {
  items: string[];
}

export function ImportantInfo({ items }: ImportantInfoProps) {
  return (
    <section className="py-12 md:py-16 bg-stone-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cursive text-3xl md:text-4xl text-primary-400 text-center mb-8">
            Ważne informacje
          </h2>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-stone-200">
            <ul className="grid md:grid-cols-2 gap-4">
              {items.map((info, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
