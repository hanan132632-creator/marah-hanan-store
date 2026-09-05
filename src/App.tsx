import React, { useState, useEffect, useMemo } from 'react';
import { Product, CartItem, Order, Currency, CurrencyConfig } from './types';
import { INITIAL_PRODUCTS } from './data/products';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { AISuiteModal } from './components/AISuiteModal';
import { PolicyViewer } from './components/PolicyViewer';
import { Footer } from './components/Footer';
import { 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  Zap, 
  Search, 
  Globe, 
  ShoppingBag, 
  Tag,
  ArrowLeft
} from 'lucide-react';

const CURRENCIES: Record<Currency, CurrencyConfig> = {
  SAR: { code: 'SAR', symbol: 'ر.س', name: 'ريال سعودي', rateFromSAR: 1 },
  AED: { code: 'AED', symbol: 'د.إ', name: 'درهم إماراتي', rateFromSAR: 0.98 },
  USD: { code: 'USD', symbol: '$', name: 'دولار أمريكي', rateFromSAR: 0.27 },
  KWD: { code: 'KWD', symbol: 'د.ك', name: 'دينار كويتي', rateFromSAR: 0.082 },
};

export default function App() {
  // Navigation & Views
  const [currentView, setCurrentView] = useState<'store' | 'policies'>('store');
  const [selectedPolicyType, setSelectedPolicyType] = useState<string>('shipping');

  // Products & Filters
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  // Currency
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('SAR');
  const currentCurrencyConfig = CURRENCIES[selectedCurrency] || CURRENCIES.SAR;

  // Cart & Wishlist with LocalStorage fallback
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('marah_hanan_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('marah_hanan_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Coupon System
  const [appliedCoupon, setAppliedCoupon] = useState<string>('HANAN10');
  const [couponDiscountPercent, setCouponDiscountPercent] = useState<number>(10);

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isAISuiteOpen, setIsAISuiteOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [lastCompletedOrder, setLastCompletedOrder] = useState<Order | null>(null);

  // Sync to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('marah_hanan_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('marah_hanan_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [wishlist]);

  // Cart Management
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Direct Buy Now
  const handleBuyNow = (product: Product, quantity = 1) => {
    handleAddToCart(product, quantity);
    setQuickViewProduct(null);
    setIsCheckoutOpen(true);
  };

  // Wishlist Management
  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  // Coupon Logic
  const handleApplyCoupon = (code: string): boolean => {
    const validCodes: Record<string, number> = {
      HANAN10: 10,
      MARAH2025: 15,
      SUITE8: 12,
      VIP20: 20,
    };
    if (validCodes[code]) {
      setAppliedCoupon(code);
      setCouponDiscountPercent(validCodes[code]);
      return true;
    }
    return false;
  };

  // Order Placement
  const handleOrderPlaced = (order: Order) => {
    setLastCompletedOrder(order);
    setCart([]);
    setIsCheckoutOpen(false);
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory =
          selectedCategory === 'all' || p.category === selectedCategory;
        const matchesStock = !inStockOnly || p.inStock;
        const matchesSearch =
          !searchQuery.trim() ||
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && matchesStock && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'best-seller') return (b.reviewsCount || 0) - (a.reviewsCount || 0);
        return 0; // featured default
      });
  }, [products, selectedCategory, inStockOnly, searchQuery, sortBy]);

  // Cart Totals for checkout
  const cartSubtotalSAR = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const cartDiscountAmountSAR = (cartSubtotalSAR * couponDiscountPercent) / 100;
  const isFreeShipping = cartSubtotalSAR >= 200;
  const cartShippingFeeSAR = cart.length === 0 ? 0 : isFreeShipping ? 0 : 25;
  const cartFinalTotalSAR = cartSubtotalSAR - cartDiscountAmountSAR + cartShippingFeeSAR;

  const handleNavigate = (view: string, policyType?: string) => {
    if (view === 'policies') {
      setCurrentView('policies');
      if (policyType) setSelectedPolicyType(policyType);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentView('store');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-cairo text-stone-900 selection:bg-rose-500 selection:text-white">
      {/* Top Header */}
      <Header
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenAISuite={() => setIsAISuiteOpen(true)}
        currentView={currentView}
        onNavigate={handleNavigate}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCurrency={selectedCurrency}
        onCurrencyChange={setSelectedCurrency}
      />

      {/* Main App Body */}
      <main className="flex-1">
        {currentView === 'store' ? (
          <>
            {/* Hero Banner with Speed & Suite Badges */}
            <HeroBanner
              onOpenAISuite={() => setIsAISuiteOpen(true)}
              onExploreProducts={() => {
                const el = document.getElementById('products-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Quick AI Advisor Trigger Strip */}
            <div className="bg-gradient-to-r from-rose-900 via-stone-900 to-amber-900 text-white py-3 px-4 border-b border-stone-800">
              <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 animate-bounce" />
                  <span className="font-bold">
                    جديد الحزمة الثامنة: استشر مستشار الذكاء الاصطناعي الذكي Gemini 3.8 Flash لاختيار هداياك وأناقتك فوراً!
                  </span>
                </div>
                <button
                  onClick={() => setIsAISuiteOpen(true)}
                  className="bg-white/10 hover:bg-white/20 text-amber-300 font-bold px-3.5 py-1.5 rounded-lg border border-white/15 transition-all text-xs flex items-center gap-1.5"
                >
                  <span>فتح أدوات الذكاء الاصطناعي</span>
                  <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                </button>
              </div>
            </div>

            {/* Products Catalog Section */}
            <section id="products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
              
              {/* Filter Bar */}
              <CategoryFilter
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                sortBy={sortBy}
                onSortChange={setSortBy}
                inStockOnly={inStockOnly}
                onToggleInStock={() => setInStockOnly(!inStockOnly)}
                totalResults={filteredProducts.length}
              />

              {/* Product Grid */}
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 shadow-sm space-y-4 max-w-md mx-auto">
                  <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500 mx-auto">
                    <Search className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg text-stone-900">
                    لم نجد منتجات مطابقة لبحثك
                  </h3>
                  <p className="text-xs text-stone-500">
                    جرب البحث بكلمات أخرى أو قم بإلغاء بعض الفلاتر لعرض كافة منتجات المتجر.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setInStockOnly(false);
                    }}
                    className="bg-stone-900 text-white font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-rose-600 transition-colors"
                  >
                    إعادة ضبط الفلاتر
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      currency={selectedCurrency}
                      isWishlisted={wishlist.some((p) => p.id === product.id)}
                      onToggleWishlist={handleToggleWishlist}
                      onAddToCart={(p) => handleAddToCart(p, 1)}
                      onQuickView={(p) => setQuickViewProduct(p)}
                      currencyRate={currentCurrencyConfig.rateFromSAR}
                      currencySymbol={currentCurrencyConfig.symbol}
                    />
                  ))}
                </div>
              )}

              {/* Trust Badge Grid */}
              <div className="mt-16 pt-8 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-right">
                <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-stone-900 text-sm">توصيل فائق السرعة</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    شحن سريع يصلك خلال 24-48 ساعة لجميع مدن ومحافظات المملكة والخليج.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-stone-900 text-sm">الضمان الذهبي 14 يوماً</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    استبدال واسترجاع مضمون 100% بكل سلاسة وراحة بال لجميع عملائنا.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Tag className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-stone-900 text-sm">عروض وكوبونات حصرية</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    استخدم كود <strong className="text-rose-600">HANAN10</strong> للحصول على خصم 10% فوري مع تغليف إهداء راقٍ.
                  </p>
                </div>
              </div>

              {/* Editorial Guides & Articles Showcase */}
              <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6 text-right">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-5">
                  <div>
                    <span className="text-[11px] font-black text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                      مقالات وأدلة تسوق حصرية
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-2">
                      دليل مرح حنان ستور للأناقة والتسوق الآمن
                    </h3>
                    <p className="text-stone-500 text-xs mt-1">
                      نشارككم أحدث الرؤى والأسرار لاختيار الهدايا الفاخرة والتسوق الإلكتروني الموثوق
                    </p>
                  </div>
                  <a
                    href="/html/sitemap.html"
                    className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 shrink-0"
                  >
                    <span>فهرس الأدلة والصفحات</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Article 1 */}
                  <a
                    href="/html/article-luxury-gifts-guide.html"
                    className="group block p-5 rounded-2xl bg-stone-50/70 hover:bg-stone-50 border border-stone-200 hover:border-rose-300 transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-rose-700 bg-rose-100/70 px-2.5 py-0.5 rounded-lg">
                        فن الإهداء
                      </span>
                      <span className="text-stone-400 text-[11px]">قراءة 5 دقائق</span>
                    </div>
                    <h4 className="font-black text-stone-900 group-hover:text-rose-600 transition text-base">
                      دليل الهدايا الفاخرة: فن اختيار الهدية المثالية وقواعد الإتيكيت العصري
                    </h4>
                    <p className="text-stone-600 text-xs leading-relaxed line-clamp-2">
                      سيكولوجية الإهداء وأسرار التغليف الملكي ومعايير اختيار الهدايا التي تدوم في الذاكرة.
                    </p>
                    <div className="text-xs font-bold text-rose-600 flex items-center gap-1 group-hover:translate-x-[-3px] transition-transform">
                      <span>قراءة الدليل كاملاً</span>
                      <ArrowLeft className="w-3 h-3" />
                    </div>
                  </a>

                  {/* Article 2 */}
                  <a
                    href="/html/article-smart-ecommerce-guide.html"
                    className="group block p-5 rounded-2xl bg-stone-50/70 hover:bg-stone-50 border border-stone-200 hover:border-emerald-300 transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-lg">
                        الأمان الرقمي
                      </span>
                      <span className="text-stone-400 text-[11px]">قراءة 6 دقائق</span>
                    </div>
                    <h4 className="font-black text-stone-900 group-hover:text-emerald-700 transition text-base">
                      دليل التسوق الإلكتروني الذكي والآمن 2026: أسرار حماية البيانات وضمان الجودة
                    </h4>
                    <p className="text-stone-600 text-xs leading-relaxed line-clamp-2">
                      كيف تضمن حقوقك كمستهلك، تميز المتاجر المعتمدة، وتقتنص أفضل العروض دون مخاطر.
                    </p>
                    <div className="text-xs font-bold text-emerald-700 flex items-center gap-1 group-hover:translate-x-[-3px] transition-transform">
                      <span>قراءة الدليل كاملاً</span>
                      <ArrowLeft className="w-3 h-3" />
                    </div>
                  </a>
                </div>
              </div>
            </section>
          </>
        ) : (
          /* Comprehensive Policy Pages View */
          <PolicyViewer
            initialPolicy={selectedPolicyType}
            onBackToStore={() => setCurrentView('store')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigatePolicy={(policyKey) => handleNavigate('policies', policyKey)}
        onOpenAISuite={() => setIsAISuiteOpen(true)}
      />

      {/* Product Quick View / Detail Modal */}
      <ProductDetailModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(p, qty) => handleAddToCart(p, qty)}
        onBuyNow={handleBuyNow}
        isWishlisted={Boolean(
          quickViewProduct && wishlist.some((w) => w.id === quickViewProduct.id)
        )}
        onToggleWishlist={handleToggleWishlist}
        currencyRate={currentCurrencyConfig.rateFromSAR}
        currencySymbol={currentCurrencyConfig.symbol}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        currencyRate={currentCurrencyConfig.rateFromSAR}
        currencySymbol={currentCurrencyConfig.symbol}
        appliedCoupon={appliedCoupon}
        onApplyCoupon={handleApplyCoupon}
        couponDiscountPercent={couponDiscountPercent}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        subtotal={cartSubtotalSAR}
        discount={cartDiscountAmountSAR}
        shippingFee={cartShippingFeeSAR}
        finalTotal={cartFinalTotalSAR}
        currencyRate={currentCurrencyConfig.rateFromSAR}
        currencySymbol={currentCurrencyConfig.symbol}
        onOrderPlaced={handleOrderPlaced}
      />

      {/* Order Success & Tax Invoice Modal */}
      <OrderSuccessModal
        order={lastCompletedOrder}
        onClose={() => setLastCompletedOrder(null)}
        currencySymbol={currentCurrencyConfig.symbol}
        currencyRate={currentCurrencyConfig.rateFromSAR}
      />

      {/* AI Suite Modal (Shopping Advisor & Gift Crafter) */}
      <AISuiteModal
        isOpen={isAISuiteOpen}
        onClose={() => setIsAISuiteOpen(false)}
        products={products}
        onSelectProduct={(p) => {
          setQuickViewProduct(p);
          setIsAISuiteOpen(false);
        }}
        currencyRate={currentCurrencyConfig.rateFromSAR}
        currencySymbol={currentCurrencyConfig.symbol}
      />
    </div>
  );
}
