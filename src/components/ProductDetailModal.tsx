import React, { useState } from 'react';
import { Product, Currency } from '../types';
import { 
  X, 
  Star, 
  ShoppingBag, 
  Heart, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Sparkles, 
  Check, 
  Share2, 
  Info,
  Loader2
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (p: Product, quantity: number) => void;
  onBuyNow: (p: Product, quantity: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (p: Product) => void;
  currencyRate: number;
  currencySymbol: string;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
  isWishlisted,
  onToggleWishlist,
  currencyRate,
  currencySymbol,
}) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [added, setAdded] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiInsights, setAiInsights] = useState<string | null>(null);

  const images = [product.image, ...(product.secondaryImages || [])];

  const handleFetchAiInsights = async () => {
    setAiLoading(true);
    try {
      const res = await fetch('/api/ai/product-insights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product }),
      });
      const data = await res.json();
      if (data.insights) {
        setAiInsights(data.insights);
      } else if (data.highlights) {
        setAiInsights(`المميزات الرئيسية:\n${data.highlights.map((h: string) => `• ${h}`).join('\n')}\n\nنصيحة الاستخدام:\n${data.tips}\n\nالتقييم:\n${data.verdict}`);
      }
    } catch (err) {
      console.error(err);
      setAiInsights('منتج أصلي عالي الجودة ومعتمد، موصى به من مرح حنان ستور للأداء المتميز والضمان الذهبي.');
    } finally {
      setAiLoading(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `شاهد ${product.name} على متجر مرح حنان ستور (مرححنان.store)`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('تم نسخ رابط المنتج إلى الحافظة!');
    }
  };

  const currentPrice = (product.price * currencyRate * quantity).toFixed(0);
  const unitPrice = (product.price * currencyRate).toFixed(0);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5">
      <div 
        className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200 text-right animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          
          {/* Gallery Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-3 right-3 bg-stone-900 text-amber-300 text-xs font-bold px-3 py-1 rounded-lg shadow-md">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                      selectedImage === img ? 'border-rose-600 ring-2 ring-rose-200' : 'border-stone-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Value Guarantees Box */}
            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 space-y-2.5 text-xs text-stone-700">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-rose-600" />
                <span className="font-semibold">شحن فائق السرعة خلال 24-48 ساعة داخل المملكة</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold">ضمان ذهبي واستبدال فوري لمدة 14 يوماً</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-amber-600" />
                <span className="font-semibold">منتج أصلي 100% مسجل ومطابق للمواصفات السعودية</span>
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-6 space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              {/* Category & Rating */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-lg">
                  {product.nameEn}
                </span>
                <div className="flex items-center gap-1 text-xs">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="font-bold text-stone-800">{product.rating}</span>
                  <span className="text-stone-400">({product.reviewsCount} تقييم حقيقي)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-black text-stone-900 leading-tight">
                {product.name}
              </h2>

              {/* Price */}
              <div className="flex items-baseline gap-3 pt-1">
                <span className="text-2xl sm:text-3xl font-black text-rose-600">
                  {unitPrice} {currencySymbol}
                </span>
                {product.originalPrice && (
                  <s className="text-sm text-stone-400 font-medium">
                    {(product.originalPrice * currencyRate).toFixed(0)} {currencySymbol}
                  </s>
                )}
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-0.5 rounded">
                  شامل ضريبة القيمة المضافة 15%
                </span>
              </div>

              {/* Description */}
              <p className="text-stone-600 text-sm leading-relaxed pt-2">
                {product.description}
              </p>

              {/* Specs Table */}
              <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200">
                <h4 className="font-bold text-xs text-stone-800 mb-2">المواصفات الفنية المعتمدة:</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="bg-white p-2 rounded-lg border border-stone-100">
                      <span className="text-stone-400 block text-[10px]">{key}</span>
                      <span className="font-semibold text-stone-800">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Product Insights Section */}
              <div className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl p-4 border border-rose-200/80">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-bold text-stone-900">
                      تحليل الذكاء الاصطناعي للمنتج (Gemini 3.8 Flash)
                    </span>
                  </div>
                  {!aiInsights && (
                    <button
                      onClick={handleFetchAiInsights}
                      disabled={aiLoading}
                      className="bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors"
                    >
                      {aiLoading ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>جاري التحليل...</span>
                        </>
                      ) : (
                        <span>توليد تقرير ذكي</span>
                      )}
                    </button>
                  )}
                </div>

                {aiInsights && (
                  <div className="mt-3 text-xs text-stone-700 bg-white/90 p-3 rounded-xl border border-rose-100 leading-relaxed whitespace-pre-line">
                    {aiInsights}
                  </div>
                )}
              </div>
            </div>

            {/* Quantity & CTA Buttons */}
            <div className="pt-4 border-t border-stone-200 space-y-3">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-stone-600">الكمية:</span>
                  <div className="flex items-center bg-stone-100 rounded-xl border border-stone-200 p-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-7 h-7 flex items-center justify-center font-bold text-stone-700 hover:bg-white rounded-lg transition-colors"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-bold text-stone-900 text-sm">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                      className="w-7 h-7 flex items-center justify-center font-bold text-stone-700 hover:bg-white rounded-lg transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onToggleWishlist(product)}
                    className={`p-2.5 rounded-xl border transition-colors ${
                      isWishlisted ? 'bg-rose-50 border-rose-300 text-rose-600' : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                    title="إضافة للمفضلة"
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-600' : ''}`} />
                  </button>

                  <button
                    onClick={handleShare}
                    className="p-2.5 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 transition-colors"
                    title="مشاركة المنتج"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Action Buttons: Add to Cart & Buy Now */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    onAddToCart(product, quantity);
                    setAdded(true);
                    setTimeout(() => setAdded(false), 1800);
                  }}
                  className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm transition-all ${
                    added
                      ? 'bg-emerald-600 text-white'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>تمت الإضافة للسلة!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-stone-600" />
                      <span>أضف إلى السلة</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onBuyNow(product, quantity)}
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white shadow-lg shadow-rose-600/30 transition-all"
                >
                  <span>شراء فوري ({currentPrice} {currencySymbol})</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
