import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Sparkles, 
  Search, 
  Menu, 
  X, 
  ShieldCheck, 
  Globe, 
  Truck, 
  Flame, 
  FileText
} from 'lucide-react';
import { Currency } from '../types';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenAISuite: () => void;
  currentView: string;
  onNavigate: (view: string, policyType?: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCurrency: Currency;
  onCurrencyChange: (c: Currency) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenAISuite,
  currentView,
  onNavigate,
  searchQuery,
  onSearchChange,
  selectedCurrency,
  onCurrencyChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-stone-900 text-stone-100 shadow-md">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-rose-950 via-stone-900 to-amber-950 px-4 py-2 border-b border-stone-800 text-xs sm:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-full text-xs font-bold border border-rose-500/30">
              <Truck className="w-3.5 h-3.5" /> شحن مجاني
            </span>
            <span className="text-stone-300">للطلبات فوق 200 ر.س • استخدم كود: <strong className="text-amber-400 tracking-wider">HANAN10</strong> لخصم 10%</span>
          </div>

          <div className="flex items-center gap-3 text-stone-400 text-xs">
            <span className="hidden md:inline-flex items-center gap-1.5 text-stone-400 bg-stone-800/80 px-2.5 py-0.5 rounded border border-stone-700">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>مرححنان.store</span>
              <span className="text-stone-500 font-mono text-[11px]">(xn--mgblao3hjb.store)</span>
            </span>

            {/* Currency Selector */}
            <div className="flex items-center gap-1 bg-stone-800 px-2 py-1 rounded text-stone-200 border border-stone-700">
              <span className="text-stone-400 text-[11px]">العملة:</span>
              <select
                aria-label="اختر العملة"
                value={selectedCurrency}
                onChange={(e) => onCurrencyChange(e.target.value as Currency)}
                className="bg-transparent text-xs font-bold text-amber-300 focus:outline-none cursor-pointer"
              >
                <option value="SAR" className="bg-stone-900 text-stone-200">SAR (ر.س)</option>
                <option value="AED" className="bg-stone-900 text-stone-200">AED (د.إ)</option>
                <option value="USD" className="bg-stone-900 text-stone-200">USD ($)</option>
                <option value="KWD" className="bg-stone-900 text-stone-200">KWD (د.ك)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo & Store Identity */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('store')}
              className="text-right group focus:outline-none"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center shadow-lg shadow-rose-500/20 text-white font-black text-xl tracking-tight">
                  م
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-black tracking-tight text-stone-100 group-hover:text-rose-400 transition-colors">
                      مرح حنان <span className="text-rose-500 font-bold">ستور</span>
                    </span>
                    <span className="hidden sm:inline-block bg-amber-500/10 text-amber-400 text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-500/30">
                      الحزمة الثامنة v8
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-400 leading-none">
                    متجر ذكي فائق السرعة • مرححنان.store
                  </p>
                </div>
              </div>
            </button>
          </div>

          {/* Search Input Bar (Desktop) */}
          <div className="hidden lg:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="ابحث عن منتج، مبخرة، عطر، هدية، إلكترونيات..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-stone-800/90 text-stone-100 placeholder-stone-400 text-sm rounded-xl pl-10 pr-4 py-2.5 border border-stone-700 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3.5" />
            </div>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-medium text-stone-300">
            <button
              onClick={() => onNavigate('store')}
              className={`px-3 py-2 rounded-lg transition-colors ${currentView === 'store' ? 'text-rose-400 bg-stone-800' : 'hover:text-white hover:bg-stone-800/50'}`}
            >
              الرئيسية والمنتجات
            </button>

            <button
              onClick={onOpenAISuite}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-r from-rose-500/10 to-amber-500/10 border border-rose-500/30 text-rose-300 hover:text-white hover:from-rose-600 hover:to-amber-600 transition-all font-semibold shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              أدوات الذكاء الاصطناعي
            </button>

            <button
              onClick={() => onNavigate('policies', 'shipping')}
              className={`px-3 py-2 rounded-lg transition-colors ${currentView === 'policies' ? 'text-rose-400 bg-stone-800' : 'hover:text-white hover:bg-stone-800/50'}`}
            >
              سياسات المتجر
            </button>

            <button
              onClick={() => onNavigate('policies', 'contact')}
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-stone-800/50 transition-colors"
            >
              اتصل بنا
            </button>
          </nav>

          {/* Quick Actions (Wishlist, Cart, AI CTA, Mobile Trigger) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* AI Assistant Quick Pill (Mobile/Tablet) */}
            <button
              onClick={onOpenAISuite}
              className="xl:hidden flex items-center gap-1 bg-gradient-to-r from-rose-500 to-amber-500 text-white px-3 py-2 rounded-xl text-xs font-bold shadow-md shadow-rose-500/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>الذكاء الاصطناعي</span>
            </button>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2.5 text-stone-300 hover:text-rose-400 hover:bg-stone-800 rounded-xl transition-colors"
              title="المفضلة"
              aria-label="المفضلة"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-stone-900">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Drawer Trigger Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-stone-100 px-3.5 py-2.5 rounded-xl border border-stone-700 transition-colors shadow-sm"
              title="سلة التسوق"
              aria-label="سلة التسوق"
            >
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <span className="hidden sm:inline-block text-xs font-bold">السلة</span>
              <span className="bg-rose-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-stone-300 hover:text-white rounded-lg hover:bg-stone-800"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden pb-3">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="ابحث في متجر مرح حنان ستور..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-stone-800 text-stone-100 placeholder-stone-400 text-xs rounded-xl pl-9 pr-3 py-2 border border-stone-700 focus:outline-none focus:border-rose-500"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-stone-950 border-t border-stone-800 px-4 py-4 space-y-2">
          <button
            onClick={() => { onNavigate('store'); setMobileMenuOpen(false); }}
            className="w-full text-right py-2 px-3 rounded-lg text-stone-200 hover:bg-stone-800 font-medium text-sm flex items-center justify-between"
          >
            <span>الرئيسية وكافة المنتجات</span>
            <Flame className="w-4 h-4 text-rose-500" />
          </button>
          <button
            onClick={() => { onOpenAISuite(); setMobileMenuOpen(false); }}
            className="w-full text-right py-2 px-3 rounded-lg text-rose-300 bg-rose-500/10 border border-rose-500/20 font-bold text-sm flex items-center justify-between"
          >
            <span>أدوات الذكاء الاصطناعي وويب ذكي</span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </button>
          <button
            onClick={() => { onNavigate('policies', 'shipping'); setMobileMenuOpen(false); }}
            className="w-full text-right py-2 px-3 rounded-lg text-stone-300 hover:bg-stone-800 font-medium text-sm flex items-center justify-between"
          >
            <span>سياسة الشحن والتوصيل</span>
            <Truck className="w-4 h-4 text-stone-400" />
          </button>
          <button
            onClick={() => { onNavigate('policies', 'refund'); setMobileMenuOpen(false); }}
            className="w-full text-right py-2 px-3 rounded-lg text-stone-300 hover:bg-stone-800 font-medium text-sm flex items-center justify-between"
          >
            <span>سياسة الاستبدال والاسترجاع (14 يوماً)</span>
            <ShieldCheck className="w-4 h-4 text-stone-400" />
          </button>
          <button
            onClick={() => { onNavigate('policies', 'privacy'); setMobileMenuOpen(false); }}
            className="w-full text-right py-2 px-3 rounded-lg text-stone-300 hover:bg-stone-800 font-medium text-sm flex items-center justify-between"
          >
            <span>سياسة الخصوصية وسرية المعلومات</span>
            <FileText className="w-4 h-4 text-stone-400" />
          </button>
          <button
            onClick={() => { onNavigate('policies', 'terms'); setMobileMenuOpen(false); }}
            className="w-full text-right py-2 px-3 rounded-lg text-stone-300 hover:bg-stone-800 font-medium text-sm flex items-center justify-between"
          >
            <span>الشروط والأحكام العامة</span>
            <FileText className="w-4 h-4 text-stone-400" />
          </button>
          <button
            onClick={() => { onNavigate('policies', 'contact'); setMobileMenuOpen(false); }}
            className="w-full text-right py-2 px-3 rounded-lg text-stone-300 hover:bg-stone-800 font-medium text-sm"
          >
            اتصل بنا (hanan132632@gmail.com)
          </button>
        </div>
      )}
    </header>
  );
};
