import { MenuItem as MenuItemType, DietaryTag } from '@/data/menuData';

// Ikony oznaczeń dietetycznych
const DietaryIcon = ({ tag }: { tag: DietaryTag }) => {
  const icons = {
    'gluten-free': (
      // Przekreślony kłos - gluten free
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="2">
        <path d="M12 3v18M9 6c0 0 3 2 3 5s-3 5-3 5M15 6c0 0-3 2-3 5s3 5 3 5" strokeLinecap="round"/>
        <line x1="4" y1="4" x2="20" y2="20" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    'vegetarian': (
      <span className="text-sm leading-none">💚</span>
    ),
    'vegan': (
      <span className="text-sm leading-none">🌿</span>
    ),
  };
  return icons[tag] || null;
};

interface MenuItemProps {
  item: MenuItemType;
}

export function MenuItem({ item }: MenuItemProps) {
  const formatPrice = (price: number | string) => {
    if (typeof price === 'string') return price;
    return `${price},-`;
  };

  return (
    <div className="menu-item py-2 border-b border-amber-700/20 last:border-b-0">
      <div className="flex justify-between items-start gap-4">
        {/* Nazwa i oznaczenia */}
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            {/* Ikony dietetyczne */}
            {item.tags?.map((tag) => (
              <DietaryIcon key={tag} tag={tag} />
            ))}
            
            {/* Nazwa dania - ciemny kolor na jasnym tle */}
            <span className="font-medium text-gray-800">
              {item.name}
            </span>
            
            {/* Waga */}
            {item.weight && (
              <span className="text-gray-500 text-sm">– {item.weight}</span>
            )}
          </div>
          
          {/* Opis */}
          {item.description && (
            <p className="text-gray-600 text-sm mt-0.5 ml-6">
              {item.description}
            </p>
          )}
          
          {/* Warianty */}
          {item.variants && item.variants.length > 0 && (
            <div className="ml-6 mt-1 text-sm text-gray-600">
              {item.variants.map((variant, idx) => (
                <span key={idx}>
                  • {variant.name}
                  {variant.price && ` ${variant.price},-`}
                  {idx < item.variants!.length - 1 && '  '}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Cena - ciemny brąz */}
        <div className="text-right font-semibold text-amber-800 whitespace-nowrap">
          {formatPrice(item.price)}
        </div>
      </div>
    </div>
  );
}

