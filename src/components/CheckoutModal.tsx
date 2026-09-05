import React, { useState } from 'react';
import { CartItem, CustomerDetails, Order, PaymentMethod, Currency } from '../types';
import { 
  X, 
  CreditCard, 
  Truck, 
  ShieldCheck, 
  Sparkles, 
  Gift, 
  CheckCircle, 
  Lock, 
  ArrowRight,
  Loader2,
  Check
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shippingFee: number;
  finalTotal: number;
  currencyRate: number;
  currencySymbol: string;
  onOrderPlaced: (order: Order) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  subtotal,
  discount,
  shippingFee,
  finalTotal,
  currencyRate,
  currencySymbol,
  onOrderPlaced,
}) => {
  if (!isOpen) return null;

  const [customer, setCustomer] = useState<CustomerDetails>({
    fullName: '',
    phone: '',
    email: '',
    city: 'الرياض',
    address: '',
    notes: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('mada');
  const [isGift, setIsGift] = useState(false);
  const [giftRecipient, setGiftRecipient] = useState('');
  const [giftSender, setGiftSender] = useState('');
  const [giftOccasion, setGiftOccasion] = useState('تهنئة خاصة وتعبير عن التقدير');
  const [giftCardMessage, setGiftCardMessage] = useState('');
  const [generatingAiCard, setGeneratingAiCard] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Generate AI Dedication Card
  const handleGenerateAiCard = async () => {
    setGeneratingAiCard(true);
    try {
      const res = await fetch('/api/ai/dedication-card', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          senderName: giftSender || customer.fullName || 'مُحبك',
          recipientName: giftRecipient || 'شخص عزيز',
          occasion: giftOccasion,
          tone: 'راقي وشاعري',
        }),
      });
      const data = await res.json();
      if (data.card) {
        setGiftCardMessage(data.card);
      }
    } catch (e) {
      console.error(e);
      setGiftCardMessage(`إلى أغلى الناس ${giftRecipient || ''}..\nهدية نابعة من القلب، ملؤها الحب والود، مع أصدق الدعوات بدوام الفرح والسعادة.`);
    } finally {
      setGeneratingAiCard(false);
    }
  };

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!customer.fullName.trim()) errs.fullName = 'يرجى كتابة الاسم الكامل';
    if (!customer.phone.trim() || customer.phone.length < 9) errs.phone = 'يرجى إدخال رقم جوال صحيح';
    if (!customer.city.trim()) errs.city = 'يرجى تحديد المدينة';
    if (!customer.address.trim()) errs.address = 'يرجى إدخال الحي واسم الشارع بدقة';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const trackingCode = `MH-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
      const orderId = `ORD-${Date.now().toString().slice(-6)}`;

      const newOrder: Order = {
        id: orderId,
        items,
        subtotal,
        discount,
        shippingFee,
        taxAmount: Math.round(finalTotal * 0.15),
        total: finalTotal,
        customer,
        paymentMethod,
        paymentStatus: paymentMethod === 'cod' ? 'cod' : 'paid',
        orderDate: new Date().toLocaleDateString('ar-SA', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        trackingNumber: trackingCode,
        giftCard: isGift && giftCardMessage ? {
          recipient: giftRecipient,
          sender: giftSender,
          message: giftCardMessage,
        } : undefined,
      };

      setIsSubmitting(false);
      onOrderPlaced(newOrder);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5">
      <div 
        className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200 text-right p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-stone-900">
              إتمام الطلب والدفع الفوري
            </h2>
            <p className="text-xs text-stone-500">
              مرح حنان ستور • الدومين: مرححنان.store (xn--mgblao3hjb.store)
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmitOrder} className="mt-6 space-y-6">
          
          {/* Step 1: Customer Delivery Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-stone-900 border-b border-stone-100 pb-2">
              <Truck className="w-4 h-4 text-rose-600" />
              <span>1. بيانات الشحن والتوصيل</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-stone-700 font-bold mb-1">الاسم الكامل *</label>
                <input
                  type="text"
                  placeholder="مثال: سارة محمد الشمري"
                  value={customer.fullName}
                  onChange={(e) => setCustomer({ ...customer, fullName: e.target.value })}
                  className={`w-full bg-stone-50 border rounded-xl px-3.5 py-2.5 text-stone-800 focus:outline-none focus:bg-white ${
                    errors.fullName ? 'border-rose-500' : 'border-stone-300 focus:border-rose-500'
                  }`}
                />
                {errors.fullName && <p className="text-rose-500 text-[11px] mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-stone-700 font-bold mb-1">رقم الجوال (للتوصيل) *</label>
                <input
                  type="tel"
                  placeholder="05xxxxxxxx أو +966"
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                  className={`w-full bg-stone-50 border rounded-xl px-3.5 py-2.5 text-stone-800 focus:outline-none focus:bg-white text-left font-mono ${
                    errors.phone ? 'border-rose-500' : 'border-stone-300 focus:border-rose-500'
                  }`}
                />
                {errors.phone && <p className="text-rose-500 text-[11px] mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-stone-700 font-bold mb-1">البريد الإلكتروني (لتأكيد الفاتورة)</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={customer.email}
                  onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-stone-800 focus:outline-none focus:bg-white text-left"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-bold mb-1">المدينة *</label>
                <select
                  aria-label="المدينة"
                  value={customer.city}
                  onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-stone-800 focus:outline-none focus:bg-white font-bold"
                >
                  <option value="الرياض">الرياض (توصيل فوري خلال 24 ساعة)</option>
                  <option value="جدة">جدة</option>
                  <option value="الدمام">الدمام والخبر</option>
                  <option value="مكة المكرمة">مكة المكرمة</option>
                  <option value="المدينة المنورة">المدينة المنورة</option>
                  <option value="القصيم">القصيم / بريدة</option>
                  <option value="أبها">أبها وخميس مشيط</option>
                  <option value="تبوك">تبوك</option>
                  <option value="حائل">حائل</option>
                  <option value="مدينة أخرى">مدينة أخرى في المملكة</option>
                  <option value="الإمارات العربية">دولة الإمارات العربية المتحدة</option>
                  <option value="الكويت">دولة الكويت</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-stone-700 font-bold mb-1">العنوان التفصيلي (الحي، الشارع، رقم المبنى) *</label>
                <input
                  type="text"
                  placeholder="مثال: حي النرجس، شارع عثمان بن عفان، فيلا رقم 14"
                  value={customer.address}
                  onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                  className={`w-full bg-stone-50 border rounded-xl px-3.5 py-2.5 text-stone-800 focus:outline-none focus:bg-white ${
                    errors.address ? 'border-rose-500' : 'border-stone-300 focus:border-rose-500'
                  }`}
                />
                {errors.address && <p className="text-rose-500 text-[11px] mt-1">{errors.address}</p>}
              </div>
            </div>
          </div>

          {/* Step 2: AI Gift Dedication Option */}
          <div className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl p-4 border border-rose-200">
            <label className="flex items-center justify-between cursor-pointer select-none">
              <div className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-rose-600" />
                <div>
                  <span className="font-bold text-stone-900 text-sm block">
                    هل ترغب بإرسال الطلب كهدية مع كرت إهداء ذكي؟
                  </span>
                  <span className="text-stone-500 text-xs">
                    تغليف إهداء فاخر مجاني + توليد بطاقة تهنئة بالذكاء الاصطناعي
                  </span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={isGift}
                onChange={(e) => setIsGift(e.target.checked)}
                className="w-5 h-5 rounded border-stone-300 text-rose-600 focus:ring-rose-500 cursor-pointer"
              />
            </label>

            {isGift && (
              <div className="mt-4 pt-3 border-t border-rose-200/80 space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-stone-700 mb-1">المهدى إليه (اسم المستلم):</label>
                    <input
                      type="text"
                      placeholder="مثال: حنان العزيزة"
                      value={giftRecipient}
                      onChange={(e) => setGiftRecipient(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-stone-800"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-stone-700 mb-1">اسم المرسل:</label>
                    <input
                      type="text"
                      placeholder="مثال: مرح"
                      value={giftSender}
                      onChange={(e) => setGiftSender(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-stone-800"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="font-bold text-stone-700">نص كرت الإهداء:</label>
                    <button
                      type="button"
                      onClick={handleGenerateAiCard}
                      disabled={generatingAiCard}
                      className="text-rose-600 hover:text-rose-700 font-bold flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-rose-200 shadow-sm text-[11px]"
                    >
                      {generatingAiCard ? (
                        <>
                          <Loader2 className="w-3 h-3 animate-spin" />
                          <span>جاري صياغة الكرت...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3 h-3 text-amber-500" />
                          <span>صياغة بالذكاء الاصطناعي ✨</span>
                        </>
                      )}
                    </button>
                  </div>
                  <textarea
                    rows={3}
                    placeholder="اكتب رسالتك أو اضغط صياغة بالذكاء الاصطناعي لكتابة نص شعري راقٍ..."
                    value={giftCardMessage}
                    onChange={(e) => setGiftCardMessage(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-800 focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Step 3: Payment Method Selection */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-stone-900 border-b border-stone-100 pb-2">
              <CreditCard className="w-4 h-4 text-rose-600" />
              <span>2. وسيلة الدفع المعتمدة</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {/* Mada */}
              <label className={`p-3.5 rounded-2xl border-2 cursor-pointer flex items-center justify-between transition-all ${
                paymentMethod === 'mada' ? 'border-rose-600 bg-rose-50/50 shadow-sm' : 'border-stone-200 hover:border-stone-300'
              }`}>
                <div className="flex items-center gap-2.5">
                  <input
                    type="radio"
                    name="payment"
                    value="mada"
                    checked={paymentMethod === 'mada'}
                    onChange={() => setPaymentMethod('mada')}
                    className="text-rose-600 focus:ring-rose-500"
                  />
                  <div>
                    <span className="font-bold text-stone-900 block">بطاقة مدى (Mada)</span>
                    <span className="text-stone-500 text-[11px]">خصم مباشر وفوري من الحساب السعودي</span>
                  </div>
                </div>
                <span className="bg-emerald-600 text-white font-black text-[10px] px-2 py-0.5 rounded">
                  الأكثر أماناً
                </span>
              </label>

              {/* Apple Pay */}
              <label className={`p-3.5 rounded-2xl border-2 cursor-pointer flex items-center justify-between transition-all ${
                paymentMethod === 'apple_pay' ? 'border-rose-600 bg-rose-50/50 shadow-sm' : 'border-stone-200 hover:border-stone-300'
              }`}>
                <div className="flex items-center gap-2.5">
                  <input
                    type="radio"
                    name="payment"
                    value="apple_pay"
                    checked={paymentMethod === 'apple_pay'}
                    onChange={() => setPaymentMethod('apple_pay')}
                    className="text-rose-600 focus:ring-rose-500"
                  />
                  <div>
                    <span className="font-bold text-stone-900 block">Apple Pay</span>
                    <span className="text-stone-500 text-[11px]">دفع بلمسة واحدة عبر Face ID</span>
                  </div>
                </div>
                <span className="bg-stone-900 text-white font-black text-[10px] px-2 py-0.5 rounded">
                  فوري
                </span>
              </label>

              {/* Credit Card */}
              <label className={`p-3.5 rounded-2xl border-2 cursor-pointer flex items-center justify-between transition-all ${
                paymentMethod === 'credit_card' ? 'border-rose-600 bg-rose-50/50 shadow-sm' : 'border-stone-200 hover:border-stone-300'
              }`}>
                <div className="flex items-center gap-2.5">
                  <input
                    type="radio"
                    name="payment"
                    value="credit_card"
                    checked={paymentMethod === 'credit_card'}
                    onChange={() => setPaymentMethod('credit_card')}
                    className="text-rose-600 focus:ring-rose-500"
                  />
                  <div>
                    <span className="font-bold text-stone-900 block">فيزا / ماستركارد</span>
                    <span className="text-stone-500 text-[11px]">Visa / Mastercard الدولية</span>
                  </div>
                </div>
              </label>

              {/* Tamara */}
              <label className={`p-3.5 rounded-2xl border-2 cursor-pointer flex items-center justify-between transition-all ${
                paymentMethod === 'tamara' ? 'border-rose-600 bg-rose-50/50 shadow-sm' : 'border-stone-200 hover:border-stone-300'
              }`}>
                <div className="flex items-center gap-2.5">
                  <input
                    type="radio"
                    name="payment"
                    value="tamara"
                    checked={paymentMethod === 'tamara'}
                    onChange={() => setPaymentMethod('tamara')}
                    className="text-rose-600 focus:ring-rose-500"
                  />
                  <div>
                    <span className="font-bold text-stone-900 block">تمارا (Tamara)</span>
                    <span className="text-stone-500 text-[11px]">قسّمها على 4 دفعات بدون فوائد</span>
                  </div>
                </div>
                <span className="bg-amber-400 text-stone-950 font-black text-[10px] px-2 py-0.5 rounded">
                  0% فوائد
                </span>
              </label>

              {/* Tabby */}
              <label className={`p-3.5 rounded-2xl border-2 cursor-pointer flex items-center justify-between transition-all ${
                paymentMethod === 'tabby' ? 'border-rose-600 bg-rose-50/50 shadow-sm' : 'border-stone-200 hover:border-stone-300'
              }`}>
                <div className="flex items-center gap-2.5">
                  <input
                    type="radio"
                    name="payment"
                    value="tabby"
                    checked={paymentMethod === 'tabby'}
                    onChange={() => setPaymentMethod('tabby')}
                    className="text-rose-600 focus:ring-rose-500"
                  />
                  <div>
                    <span className="font-bold text-stone-900 block">تابي (Tabby)</span>
                    <span className="text-stone-500 text-[11px]">تسوق الآن وادفع لاحقاً</span>
                  </div>
                </div>
                <span className="bg-emerald-400 text-stone-950 font-black text-[10px] px-2 py-0.5 rounded">
                  مرن
                </span>
              </label>

              {/* Cash On Delivery */}
              <label className={`p-3.5 rounded-2xl border-2 cursor-pointer flex items-center justify-between transition-all ${
                paymentMethod === 'cod' ? 'border-rose-600 bg-rose-50/50 shadow-sm' : 'border-stone-200 hover:border-stone-300'
              }`}>
                <div className="flex items-center gap-2.5">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="text-rose-600 focus:ring-rose-500"
                  />
                  <div>
                    <span className="font-bold text-stone-900 block">الدفع عند الاستلام</span>
                    <span className="text-stone-500 text-[11px]">ادفع نقداً أو بالشبكة للمندوب</span>
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Final Order Review & Submit */}
          <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-stone-700">عدد الأصناف ({items.length} منتجات):</span>
              <span className="font-bold text-stone-900">
                {(finalTotal * currencyRate).toFixed(0)} {currencySymbol}
              </span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white font-black py-4 px-6 rounded-2xl shadow-xl shadow-rose-600/30 flex items-center justify-center gap-2 text-base transition-all transform active:scale-98 disabled:opacity-75"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>جاري تأكيد الطلب وإصدار الفاتورة...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>تأكيد الطلب والدفع الفوري ({(finalTotal * currencyRate).toFixed(0)} {currencySymbol})</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-4 text-[11px] text-stone-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                تشفير مصرفي آمن 256-bit
              </span>
              <span>•</span>
              <span>فاتورة ضريبية ZATCA فورية</span>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
