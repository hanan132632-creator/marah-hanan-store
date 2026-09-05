import React from 'react';
import { Product, Currency } from '../types';
import { Star, ShoppingBag, Eye, Heart, Sparkles, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  currency: Currency;
  isWishlisted: boolean;
  onToggleWishlist: (p: Product) => void;
  onAddToCart: (p: Product) => void;
  onQuickView: (p: Product) => void;
  currencyRate: number;
  currencySymbol: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
  currencyRate,
  currencySymbol,
}) => {
  const [added, setAdded] = React.useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  const formattedPrice = (product.price * currencyRate).toFixed(0);
  const formattedOriginalPrice = product.originalPrice
    ? (product.originalPrice * currencyRate).toFixed(0)
    : null;

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group bg-white rounded-2xl border border-stone-200 hover:border-rose-300 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden cursor-pointer text-right"
    >
      {/* Product Image Container */}
      <div className="relative aspect-square w-full bg-stone-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm ${
              product.badge === 'الأكثر مبيعاً'
                ? 'bg-amber-500 text-stone-950'
                : product.badge === 'توصية الذكاء الاصطناعي'
                ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white'
                : 'bg-stone-900 text-white'
            }`}>
              {product.badge}
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-rose-500 text-white text-[11px] font-black px-2 py-0.5 rounded-lg w-fit shadow-sm">
              خصم {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 left-3 p-2 rounded-xl transition-all shadow-md ${
            isWishlisted
              ? 'bg-rose-50 text-rose-600'
              : 'bg-white/90 text-stone-600 hover:text-rose-600 hover:bg-white'
          }`}
          aria-label="إضافة للمفضلة"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-600 text-rose-600' : ''}`} />
        </button>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex items-center gap-1.5 bg-stone-900/85 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-stone-950 shadow-lg"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>نظرة سريعة والتحليل الذكي</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-stone-500 pb-1">
            <span className="font-medium text-stone-400">{product.nameEn}</span>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-stone-700">{product.rating}</span>
              <span className="text-stone-400 text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="font-bold text-stone-900 text-sm sm:text-base line-clamp-2 group-hover:text-rose-600 transition-colors leading-snug">
            {product.name}
          </h3>

          {/* Stock Indicator */}
          <div className="mt-1 flex items-center gap-1.5 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-700 font-semibold">
              متوفر في المخزن ({product.stockCount} قطعة متبقية)
            </span>
          </div>
        </div>

        {/* Pricing & Add to Cart */}
        <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg sm:text-xl font-black text-rose-600">
                {formattedPrice}
              </span>
              <span className="text-xs font-bold text-stone-600">
                {currencySymbol}
              </span>
            </div>
            {formattedOriginalPrice && (
              <s className="text-xs text-stone-400 block font-medium">
                {formattedOriginalPrice} {currencySymbol}
              </s>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm ${
              added
                ? 'bg-emerald-600 text-white'
                : 'bg-stone-900 hover:bg-rose-600 text-white active:scale-95'
            }`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>تمت الإضافة!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
                <span>أضف للسلة</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
