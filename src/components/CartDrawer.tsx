import React, { useState } from 'react';
import { CartItem, Currency } from '../types';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  ArrowLeft, 
  Tag, 
  Truck, 
  CheckCircle2, 
  ShieldCheck, 
  Gift
} from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
  currencyRate: number;
  currencySymbol: string;
  appliedCoupon: string;
  onApplyCoupon: (code: string) => boolean;
  couponDiscountPercent: number;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  currencyRate,
  currencySymbol,
  appliedCoupon,
  onApplyCoupon,
  couponDiscountPercent,
}) => {
  if (!isOpen) return null;

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  const FREE_SHIPPING_THRESHOLD_SAR = 200;

  // Calculate totals in SAR
  const subtotalSAR = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const discountAmountSAR = (subtotalSAR * couponDiscountPercent) / 100;
  const isFreeShipping = subtotalSAR >= FREE_SHIPPING_THRESHOLD_SAR;
  const shippingFeeSAR = items.length === 0 ? 0 : (isFreeShipping ? 0 : 25);
  const finalTotalSAR = subtotalSAR - discountAmountSAR + shippingFeeSAR;

  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD_SAR - subtotalSAR);
  const progressPercent = Math.min(100, Math.round((subtotalSAR / FREE_SHIPPING_THRESHOLD_SAR) * 100));

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    setCouponSuccess('');
    if (!couponInput.trim()) return;

    const success = onApplyCoupon(couponInput.trim().toUpperCase());
    if (success) {
      setCouponSuccess(`تم تطبيق كود الخصم (${couponInput.toUpperCase()}) بنجاح!`);
      setCouponInput('');
    } else {
      setCouponError('كود الخصم غير صالح أو منتهي الصلاحية');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/70 backdrop-blur-sm transition-opacity">
      <div className="absolute inset-y-0 left-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col text-right">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-stone-500 hover:text-stone-800 hover:bg-stone-200 transition-colors"
              aria-label="إغلاق السلة"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <h2 className="font-black text-stone-900 text-lg">سلة التسوق</h2>
              <span className="bg-rose-100 text-rose-700 text-xs font-bold px-2 py-0.5 rounded-full">
                {items.length} منتجات
              </span>
            </div>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-amber-50/80 p-3.5 border-b border-amber-200/60 text-xs">
            {isFreeShipping ? (
              <div className="flex items-center gap-2 text-emerald-700 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>تهانينا! طلبيتك مؤهلة للشحن المجاني السريع لكافة مناطق المملكة 🎉</span>
              </div>
            ) : (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-stone-700">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Truck className="w-4 h-4 text-rose-600" />
                    أضف منتجات بقيمة {(remainingForFreeShipping * currencyRate).toFixed(0)} {currencySymbol} للحصول على الشحن المجاني!
                  </span>
                  <span className="font-bold text-rose-600">{progressPercent}%</span>
                </div>
                <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-rose-500 to-amber-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-500 space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-stone-800 text-base">سلة التسوق فارغة حالياً</h3>
                <p className="text-xs text-stone-500 max-w-xs">
                  تصفح أحدث منتجات الحزمة الثامنة والعروض المميزة في متجر مرح حنان وأضف ما يعجبك.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 bg-stone-900 text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-rose-600 transition-colors"
                >
                  استكشف المنتجات الآن
                </button>
              </div>
            ) : (
              items.map((item) => {
                const itemTotal = (item.product.price * item.quantity * currencyRate).toFixed(0);
                return (
                  <div
                    key={item.product.id}
                    className="flex gap-3 bg-stone-50 p-3 rounded-2xl border border-stone-200/80"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 rounded-xl object-cover border border-stone-200 bg-white flex-shrink-0"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold text-xs text-stone-900 line-clamp-2">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-stone-400 hover:text-rose-600 p-1 transition-colors"
                          title="حذف"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-1 border-t border-stone-200/60">
                        {/* Quantity Counter */}
                        <div className="flex items-center bg-white rounded-lg border border-stone-200 p-0.5 text-xs">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center font-bold text-stone-600 hover:bg-stone-100 rounded"
                          >
                            -
                          </button>
                          <span className="w-6 text-center font-bold text-stone-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center font-bold text-stone-600 hover:bg-stone-100 rounded"
                          >
                            +
                          </button>
                        </div>

                        {/* Price */}
                        <span className="font-black text-rose-600 text-sm">
                          {itemTotal} {currencySymbol}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer & Order Summary */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 space-y-4">
              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="space-y-1.5">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="رمز كود الخصم (مثال: HANAN10)"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    className="flex-1 bg-white text-xs rounded-xl border border-stone-300 px-3 py-2 text-stone-800 placeholder-stone-400 uppercase font-mono tracking-wider focus:outline-none focus:border-rose-500"
                  />
                  <button
                    type="submit"
                    className="bg-stone-800 hover:bg-stone-900 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors"
                  >
                    تطبيق
                  </button>
                </div>
                {couponSuccess && (
                  <p className="text-[11px] text-emerald-600 font-bold">{couponSuccess}</p>
                )}
                {couponError && (
                  <p className="text-[11px] text-rose-600 font-bold">{couponError}</p>
                )}
                {appliedCoupon && !couponSuccess && (
                  <div className="flex items-center justify-between text-xs text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg">
                    <span className="flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5" /> كود الخصم النشط: <strong>{appliedCoupon}</strong> ({couponDiscountPercent}%)
                    </span>
                  </div>
                )}
              </form>

              {/* Price Breakdown */}
              <div className="space-y-2 text-xs text-stone-600 border-t border-stone-200 pt-3">
                <div className="flex justify-between">
                  <span>المجموع الفرعي:</span>
                  <span className="font-bold text-stone-900">
                    {(subtotalSAR * currencyRate).toFixed(0)} {currencySymbol}
                  </span>
                </div>

                {discountAmountSAR > 0 && (
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span>قيمة الخصم ({couponDiscountPercent}%):</span>
                    <span>-{(discountAmountSAR * currencyRate).toFixed(0)} {currencySymbol}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>رسوم الشحن والتوصيل:</span>
                  <span className="font-bold text-stone-900">
                    {shippingFeeSAR === 0 ? (
                      <span className="text-emerald-600">مجاني بالكامل</span>
                    ) : (
                      `${(shippingFeeSAR * currencyRate).toFixed(0)} ${currencySymbol}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-stone-400 text-[11px]">
                  <span>ضريبة القيمة المضافة (15% ZATCA):</span>
                  <span>مشمولة في الأسعار</span>
                </div>

                <div className="flex justify-between text-base font-black text-stone-900 border-t border-stone-200 pt-2">
                  <span>المبلغ الإجمالي للدفع:</span>
                  <span className="text-rose-600 text-lg">
                    {(finalTotalSAR * currencyRate).toFixed(0)} {currencySymbol}
                  </span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout();
                }}
                className="w-full bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2 transition-all transform active:scale-98 text-sm"
              >
                <span>متابعة إتمام الطلب والدفع</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>دفع إلكتروني آمن 100% مع ضمان مرح حنان ستور</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
