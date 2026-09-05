import React, { useEffect } from 'react';
import { Order, Currency } from '../types';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  Printer, 
  Package, 
  Truck, 
  Share2, 
  Mail, 
  ArrowLeft, 
  Gift, 
  FileText, 
  Globe 
} from 'lucide-react';

interface OrderSuccessModalProps {
  order: Order | null;
  onClose: () => void;
  currencySymbol: string;
  currencyRate: number;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  order,
  onClose,
  currencySymbol,
  currencyRate,
}) => {
  if (!order) return null;

  useEffect(() => {
    // Fire confetti on completion!
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#e11d48', '#f59e0b', '#10b981', '#6366f1']
      });
    } catch (e) {
      console.warn('Confetti error', e);
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5">
      <div 
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200 text-right p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Success Icon & Header */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <span className="inline-block bg-rose-50 text-rose-600 text-xs font-bold px-3 py-1 rounded-full border border-rose-200">
            الحزمة الثامنة • متجر مرح حنان ستور
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
            تم استلام طلبك بنجاح! 🎉
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
            شكراً لتسوقك من متجر مرح حنان. تم إرسال تفاصيل الفاتورة إلى بريدك الإلكتروني وسيتم تجهيز الشحنة للشحن السريع فوراً.
          </p>
        </div>

        {/* Tracking Code Box */}
        <div className="bg-stone-900 text-white rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 shadow-lg">
          <div>
            <span className="text-xs text-stone-400 block">رقم التتبع الموحد للشحنة:</span>
            <span className="font-mono text-lg sm:text-xl font-black text-amber-400 tracking-wider">
              {order.trackingNumber}
            </span>
          </div>

          <div className="text-left">
            <span className="text-xs text-stone-400 block">تاريخ الطلب:</span>
            <span className="text-xs font-semibold text-stone-200">
              {order.orderDate}
            </span>
          </div>
        </div>

        {/* Gift Card Message Preview if present */}
        {order.giftCard && (
          <div className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl p-4 border border-rose-200 space-y-2">
            <div className="flex items-center gap-2 text-rose-700 font-bold text-xs">
              <Gift className="w-4 h-4" />
              <span>بطاقة الإهداء الذكية المرفقة مع الطلب:</span>
            </div>
            <div className="bg-white/90 p-3.5 rounded-xl border border-rose-100 text-xs text-stone-800 leading-relaxed font-serif italic whitespace-pre-line">
              {order.giftCard.message}
            </div>
            <div className="text-[11px] text-stone-500 flex justify-between">
              <span>إلى: <strong>{order.giftCard.recipient}</strong></span>
              <span>من: <strong>{order.giftCard.sender}</strong></span>
            </div>
          </div>
        )}

        {/* Electronic Tax Invoice Summary Box */}
        <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-4 text-xs">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
              <FileText className="w-4 h-4 text-rose-600" />
              <span>ملخص الفاتورة الضريبية الإلكترونية</span>
            </div>
            <span className="text-stone-400 font-mono text-[11px]">{order.id}</span>
          </div>

          {/* Customer and Delivery Info */}
          <div className="grid grid-cols-2 gap-3 text-stone-600">
            <div>
              <span className="text-stone-400 block text-[10px]">العميل المستلم:</span>
              <strong className="text-stone-900">{order.customer.fullName}</strong>
              <p className="text-[11px]">{order.customer.phone}</p>
            </div>
            <div>
              <span className="text-stone-400 block text-[10px]">عنوان الشحن والتسليم:</span>
              <strong className="text-stone-900">{order.customer.city}</strong>
              <p className="text-[11px] line-clamp-1">{order.customer.address}</p>
            </div>
          </div>

          {/* Items Table */}
          <div className="border-t border-stone-200 pt-3 space-y-2">
            <span className="text-stone-400 block text-[10px] font-bold">الأصناف المطلوبة:</span>
            {order.items.map((it) => (
              <div key={it.product.id} className="flex justify-between items-center py-1">
                <span className="text-stone-800 font-medium">
                  {it.product.name} <span className="text-stone-400">× {it.quantity}</span>
                </span>
                <span className="font-bold text-stone-900">
                  {(it.product.price * it.quantity * currencyRate).toFixed(0)} {currencySymbol}
                </span>
              </div>
            ))}
          </div>

          {/* Calculations */}
          <div className="border-t border-stone-200 pt-3 space-y-1.5 text-stone-600">
            <div className="flex justify-between">
              <span>المجموع الفرعي:</span>
              <span>{(order.subtotal * currencyRate).toFixed(0)} {currencySymbol}</span>
            </div>
            {order.discount > 0 && (
              <div className="flex justify-between text-emerald-600 font-bold">
                <span>الخصم المطبق:</span>
                <span>-{(order.discount * currencyRate).toFixed(0)} {currencySymbol}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>الشحن والتوصيل السريع:</span>
              <span>{order.shippingFee === 0 ? 'مجاني' : `${(order.shippingFee * currencyRate).toFixed(0)} ${currencySymbol}`}</span>
            </div>
            <div className="flex justify-between text-[11px] text-stone-400">
              <span>ضريبة القيمة المضافة 15% (ZATCA):</span>
              <span>مشمولة ({(order.taxAmount * currencyRate).toFixed(0)} {currencySymbol})</span>
            </div>
            <div className="flex justify-between text-sm sm:text-base font-black text-stone-900 border-t border-stone-200 pt-2">
              <span>الإجمالي المدفوع:</span>
              <span className="text-rose-600">
                {(order.total * currencyRate).toFixed(0)} {currencySymbol}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-stone-300 hover:bg-stone-100 text-stone-700 font-bold text-xs transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>طباعة الفاتورة</span>
            </button>

            <button
              onClick={onClose}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-stone-900 hover:bg-rose-600 text-white font-bold text-xs transition-colors shadow-md"
            >
              <span>متابعة التسوق</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

          <div className="text-center pt-2 text-[11px] text-stone-400 space-y-1">
            <p>لأي استفسار بخصوص طلبك، تواصل مع خدمة العملاء: <a href="mailto:hanan132632@gmail.com" className="text-rose-600 font-bold hover:underline">hanan132632@gmail.com</a></p>
            <p className="font-mono">مرححنان.store (xn--mgblao3hjb.store)</p>
          </div>
        </div>

      </div>
    </div>
  );
};
