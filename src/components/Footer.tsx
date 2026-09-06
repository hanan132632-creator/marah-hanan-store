import React from 'react';
import { 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Mail, 
  Phone, 
  Globe, 
  Sparkles, 
  Heart,
  FileText,
  BookOpen
} from 'lucide-react';

interface FooterProps {
  onNavigatePolicy: (policyKey: string) => void;
  onOpenAISuite: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigatePolicy,
  onOpenAISuite,
}) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 text-right">
      
      {/* Value Pillars Bar */}
      <div className="border-b border-stone-850 bg-stone-900/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">شحن فائق السرعة</h4>
                <p className="text-stone-400 text-xs mt-0.5">توصيل 24-48 ساعة ومجاني فوق 200 ر.س</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">ضمان ذهبي 14 يوماً</h4>
                <p className="text-stone-400 text-xs mt-0.5">استبدال واسترجاع فوري وسهل دون تعقيد</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">ذكاء اصطناعي وويب ذكي</h4>
                <p className="text-stone-400 text-xs mt-0.5">مساعد تسوق ومطابقة هدايا فورية</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">خدمة عملاء مباشرة</h4>
                <p className="text-stone-400 text-xs mt-0.5">دعم متواصل على hanan132632@gmail.com</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand & Domain Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center text-white font-black text-xl shadow-lg">
                م
              </div>
              <div>
                <span className="text-xl font-black text-white">
                  مرح حنان <span className="text-rose-500">ستور</span>
                </span>
                <p className="text-[11px] text-amber-400 font-bold">
                  الحزمة الثامنة الفائقة السرعة v8
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              متجر إلكتروني سعودي رائد يجمع بين أناقة المنتجات الحصرية، تقنيات المعالجة الفائقة، وحلول الذكاء الاصطناعي لتجربة تسوق عصرية تلبي تطلعات عملائنا في المملكة والخليج.
            </p>

            <div className="p-3 bg-stone-900 rounded-xl border border-stone-800 text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-stone-200 font-bold">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>النطاق الرسمي المعتمد:</span>
              </div>
              <div className="text-amber-300 font-mono text-xs">
                مرححنان.store
              </div>
              <div className="text-stone-500 font-mono text-[11px]">
                xn--mgblao3hjb.store
              </div>
            </div>
          </div>

          {/* Quick Policies Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm border-r-2 border-rose-500 pr-2">
              صفحات السياسات المعتمدة
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onNavigatePolicy('shipping')}
                  className="hover:text-rose-400 transition-colors"
                >
                  سياسة الشحن والتوصيل السريع
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePolicy('refund')}
                  className="hover:text-rose-400 transition-colors"
                >
                  سياسة الاستبدال والاسترجاع والضمان
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePolicy('privacy')}
                  className="hover:text-rose-400 transition-colors"
                >
                  سياسة الخصوصية وحماية البيانات (PDPL)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePolicy('terms')}
                  className="hover:text-rose-400 transition-colors"
                >
                  الشروط والأحكام العامة
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePolicy('about')}
                  className="hover:text-rose-400 transition-colors"
                >
                  من نحن - قصة مرح حنان ستور
                </button>
              </li>
              <li className="pt-2 border-t border-stone-850">
                <a
                  href="/html/blog.html"
                  className="hover:text-amber-300 transition-colors text-amber-400 font-bold flex items-center justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                    <span>المدونة المعرفية وأدلة الشراء</span>
                  </span>
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded border border-amber-500/30">
                    8 مقالات
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/html/article-aromatherapy-essential-oils-guide.html"
                  className="hover:text-purple-300 transition-colors text-stone-300 flex items-center gap-1.5"
                >
                  <FileText className="w-3 h-3 text-purple-400" />
                  <span>دليل العلاج بالروائح والزيوت العطرية</span>
                </a>
              </li>
              <li>
                <a
                  href="/html/article-night-skincare-regeneration-guide.html"
                  className="hover:text-rose-300 transition-colors text-stone-300 flex items-center gap-1.5"
                >
                  <FileText className="w-3 h-3 text-rose-400" />
                  <span>دليل روتين العناية الليلية وترميم البشرة</span>
                </a>
              </li>
              <li>
                <a
                  href="/html/article-smart-incense-fragrances-guide.html"
                  className="hover:text-amber-300 transition-colors text-stone-300 flex items-center gap-1.5"
                >
                  <FileText className="w-3 h-3 text-amber-400" />
                  <span>دليل فنون العطور والمباخر الذكية</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service & AI Suite Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm border-r-2 border-amber-500 pr-2">
              خدمة العملاء والذكاء الاصطناعي
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={onOpenAISuite}
                  className="text-amber-300 hover:text-amber-200 flex items-center gap-1.5 font-bold"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>مساعد التسوق والأناقة الذكي</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePolicy('faq')}
                  className="hover:text-rose-400 transition-colors"
                >
                  الأسئلة الشائعة والأجوبة
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePolicy('contact')}
                  className="hover:text-rose-400 transition-colors"
                >
                  نموذج التواصل وخدمة الدعم
                </button>
              </li>
              <li className="pt-2 text-[11px] text-stone-500">
                <span>البريد الإلكتروني المباشر:</span>
                <a
                  href="mailto:hanan132632@gmail.com"
                  className="block text-rose-400 font-bold hover:underline font-mono"
                >
                  hanan132632@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Payment Badges & Regulatory Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-sm border-r-2 border-emerald-500 pr-2">
              وسائل الدفع الآمنة
            </h4>
            <div className="grid grid-cols-2 gap-2 text-[11px] font-bold">
              <div className="bg-stone-900 border border-stone-800 text-stone-200 p-2 rounded-lg text-center">
                مدى Mada
              </div>
              <div className="bg-stone-900 border border-stone-800 text-stone-200 p-2 rounded-lg text-center">
                Apple Pay
              </div>
              <div className="bg-stone-900 border border-stone-800 text-stone-200 p-2 rounded-lg text-center">
                Visa / MC
              </div>
              <div className="bg-stone-900 border border-stone-800 text-stone-200 p-2 rounded-lg text-center">
                تمارا Tamara
              </div>
              <div className="bg-stone-900 border border-stone-800 text-stone-200 p-2 rounded-lg text-center">
                تابي Tabby
              </div>
              <div className="bg-stone-900 border border-stone-800 text-stone-200 p-2 rounded-lg text-center">
                الدفع عند الاستلام
              </div>
            </div>

            <div className="pt-2 text-[10px] text-stone-500 space-y-1">
              <p>✓ معتمد بنظام التجارة الإلكترونية السعودي</p>
              <p>✓ خاضع لضريبة القيمة المضافة 15%</p>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-stone-900 py-5 bg-black/50 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            جميع الحقوق محفوظة © {new Date().getFullYear()} لـ <strong>متجر مرح حنان ستور</strong> (xn--mgblao3hjb.store / مرححنان.store)
          </p>
          <div className="flex items-center gap-3 text-[11px] text-stone-400">
            <span>الحزمة الثامنة الفائقة السرعة</span>
            <span>•</span>
            <span className="font-mono">Gemini 3.8 Flash AI</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
