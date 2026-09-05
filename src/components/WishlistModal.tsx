import React from 'react';
import { Product, Currency } from '../types';
import { X, Heart, ShoppingBag, Trash2, ArrowLeft } from 'lucide-react';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: Product[];
  onRemoveFromWishlist: (p: Product) => void;
  onAddToCart: (p: Product) => void;
  currencyRate: number;
  currencySymbol: string;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  wishlist,
  onRemoveFromWishlist,
  onAddToCart,
  currencyRate,
  currencySymbol,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5">
      <div 
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-stone-200 text-right flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-500 hover:text-stone-800 hover:bg-stone-200 transition-colors"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <h2 className="font-black text-stone-900 text-lg">قائمة رغباتي والمفضلة</h2>
            <span className="bg-rose-100 text-rose-700 text-xs font-bold px-2.5 py-0.5 rounded-full">
              {wishlist.length}
            </span>
          </div>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
          {wishlist.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center space-y-3 text-stone-500">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-400">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-stone-800 text-sm sm:text-base">قائمة المفضلة فارغة حالياً</h3>
              <p className="text-xs text-stone-400 max-w-xs">
                اضغط على أيقونة القلب على أي منتج لحفظه والرجوع إليه بسهولة لاحقاً.
              </p>
            </div>
          ) : (
            wishlist.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between gap-3 bg-stone-50 p-3.5 rounded-2xl border border-stone-200"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-16 h-16 rounded-xl object-cover border border-stone-200 bg-white flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-stone-900 line-clamp-1">
                      {p.name}
                    </h4>
                    <span className="text-rose-600 font-black text-xs sm:text-sm block mt-1">
                      {(p.price * currencyRate).toFixed(0)} {currencySymbol}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onAddToCart(p);
                      onRemoveFromWishlist(p);
                    }}
                    className="flex items-center gap-1.5 bg-stone-900 hover:bg-rose-600 text-white text-xs font-bold px-3 py-2 rounded-xl transition-colors shadow-sm"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
                    <span>نقل للسلة</span>
                  </button>

                  <button
                    onClick={() => onRemoveFromWishlist(p)}
                    className="p-2 text-stone-400 hover:text-rose-600 hover:bg-white rounded-lg transition-colors"
                    title="حذف من المفضلة"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-200 bg-stone-50 flex justify-end">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-bold text-stone-600 hover:text-stone-900"
          >
            <span>متابعة التسوق في مرح حنان ستور</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
