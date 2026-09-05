import React from 'react';
import { CATEGORIES } from '../data/products';
import { Sparkles, Flame, Gift, HeartHandshake, Cpu, ShoppingBag, SlidersHorizontal } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  inStockOnly: boolean;
  onToggleInStock: () => void;
  totalResults: number;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  sortBy,
  onSortChange,
  inStockOnly,
  onToggleInStock,
  totalResults,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-4 h-4" />;
      case 'Gift': return <Gift className="w-4 h-4" />;
      case 'HeartHandshake': return <HeartHandshake className="w-4 h-4" />;
      case 'Cpu': return <Cpu className="w-4 h-4" />;
      case 'ShoppingBag': return <ShoppingBag className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-sm space-y-4">
      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-right">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              <span className={isActive ? 'text-white' : 'text-stone-500'}>
                {getIcon(cat.icon)}
              </span>
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Sorting, Filter Controls & Result Count */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-stone-100 text-xs sm:text-sm text-stone-600">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-stone-800">
            المنتجات المعروضة ({totalResults})
          </span>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => onSelectCategory('all')}
              className="text-rose-600 hover:underline text-xs"
            >
              عرض الكل
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Stock Filter Toggle */}
          <label className="flex items-center gap-1.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={onToggleInStock}
              className="rounded border-stone-300 text-rose-600 focus:ring-rose-500 w-4 h-4 cursor-pointer"
            />
            <span className="text-stone-700 font-medium">المتوفر في المخزن فقط</span>
          </label>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-1.5 bg-stone-100 px-3 py-1.5 rounded-xl border border-stone-200">
            <SlidersHorizontal className="w-3.5 h-3.5 text-stone-500" />
            <span className="text-stone-500 text-xs">ترتيب حسب:</span>
            <select
              aria-label="ترتيب المنتجات"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-transparent text-xs font-bold text-stone-800 focus:outline-none cursor-pointer"
            >
              <option value="featured">المميز والأحدث</option>
              <option value="best-seller">الأكثر مبيعاً</option>
              <option value="rating">الأعلى تقييماً</option>
              <option value="price-low">السعر: من الأقل للأعلى</option>
              <option value="price-high">السعر: من الأعلى للأقل</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
