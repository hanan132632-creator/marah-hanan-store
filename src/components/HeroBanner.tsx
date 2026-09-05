import React from 'react';
import { Sparkles, ArrowLeft, ShieldCheck, Zap, Truck, Star, Gift } from 'lucide-react';

interface HeroBannerProps {
  onOpenAISuite: () => void;
  onExploreProducts: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onOpenAISuite,
  onExploreProducts,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-850 to-stone-950 text-white py-12 md:py-16 border-b border-stone-800">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Copy Area */}
          <div className="lg:col-span-7 space-y-5 text-right">
            {/* Domain & Suite Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 bg-stone-800/90 border border-rose-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-inner">
              <span className="flex items-center gap-1 text-rose-400">
                <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                الحزمة الثامنة فائقة السرعة
              </span>
              <span className="text-stone-500">•</span>
              <span className="text-stone-300 font-mono">xn--mgblao3hjb.store</span>
              <span className="bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-full text-[11px]">مرححنان.store</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              تسوق بذكاء وسرعة فائقة في <br />
              <span className="bg-gradient-to-l from-rose-400 via-amber-300 to-rose-500 bg-clip-text text-transparent">
                متجر مرح حنان ستور
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              اكتشف تشكيلة مختارة بعناية من العطور الملكية، المباخر الذكية، مستحضرات الجمال، والإلكترونيات العصرية، مدعومة بمساعد الذكاء الاصطناعي لتجربة شراء مخصصة وفورية بأعلى معايير الجودة.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreProducts}
                className="flex items-center gap-2 bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-rose-600/30 transition-all transform active:scale-95"
              >
                <span>تصفح المنتجات الآن</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenAISuite}
                className="flex items-center gap-2 bg-stone-800/90 hover:bg-stone-700 text-stone-100 font-bold px-5 py-3.5 rounded-xl border border-stone-700 hover:border-amber-500/50 shadow-sm transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
                <span>مستشار التسوق بالذكاء الاصطناعي</span>
              </button>
            </div>

            {/* Micro Trust Proofs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-stone-800/80 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-rose-400" />
                <span>شحن سريع 24-48 ساعة</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>ضمان ذهبي 14 يوماً</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>تقييم 4.9 من عملائنا</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card Area */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-stone-800/70 backdrop-blur-md rounded-2xl p-5 border border-stone-700/80 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-stone-700 text-xs">
                <span className="flex items-center gap-1.5 text-amber-300 font-bold">
                  <Gift className="w-4 h-4" /> هدية الأسبوع المميزة
                </span>
                <span className="bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-md font-mono text-[11px]">
                  كوبون: HANAN10
                </span>
              </div>

              <div className="mt-4 relative rounded-xl overflow-hidden aspect-[4/3] bg-stone-900">
                <img
                  src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80"
                  alt="طقم هدايا حنان المخملي"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-stone-900/90 text-amber-400 text-xs font-black px-2.5 py-1 rounded-lg border border-amber-500/30">
                  الأعلى طلباً
                </div>
                <div className="absolute bottom-3 right-3 left-3 bg-stone-950/85 backdrop-blur-md p-3 rounded-xl border border-stone-700/60 text-right">
                  <h2 className="text-white font-bold text-sm">طقم هدايا حنان المخملي الفاخر</h2>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-rose-400 font-black text-sm">295 ر.س <s className="text-stone-500 text-xs font-normal">390 ر.س</s></span>
                    <span className="text-[11px] text-emerald-400">تغليف إهداء مجاني</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-700/60 flex items-center justify-between text-xs text-stone-400">
                <span>وسائل دفع آمنة: مدى، أبل باي، تمارا، تابي</span>
                <span className="text-rose-400 font-bold">وفّر 25%</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
