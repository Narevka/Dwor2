'use client';

interface AtrakcjeNavProps {
  activeTab: 'wewnetrzne' | 'zewnetrzne';
  onTabChange: (tab: 'wewnetrzne' | 'zewnetrzne') => void;
}

const tabs = [
  { id: 'wewnetrzne' as const, label: 'atrakcje wewnętrzne' },
  { id: 'zewnetrzne' as const, label: 'atrakcje zewnętrzne' },
];

export function AtrakcjeNav({ activeTab, onTabChange }: AtrakcjeNavProps) {
  return (
    <div className="fixed top-[52px] md:top-[88px] left-0 right-0 z-40 bg-gray-900 py-1.5 md:py-2">
      <div className="container-custom">
        <div className="flex justify-center gap-1.5 sm:gap-2 px-1 sm:px-2">
          {tabs.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className={`px-2.5 sm:px-4 md:px-6 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === id
                  ? 'bg-primary-400 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
