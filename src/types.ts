export type Language = 'ar' | 'en' | 'fr';

export interface LanguageConfig {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
  dir: 'rtl' | 'ltr';
}

export interface Product {
  id: string;
  name: string;
  nameEn?: string;
  nameFr?: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  category: 'beauty' | 'electronics' | 'home' | 'lifestyle' | 'gifts';
  image: string;
  secondaryImages?: string[];
  badge?: string;
  badgeEn?: string;
  badgeFr?: string;
  inStock: boolean;
  stockCount: number;
  description: string;
  descriptionEn?: string;
  descriptionFr?: string;
  specs: Record<string, string>;
  specsEn?: Record<string, string>;
  specsFr?: Record<string, string>;
  tags: string[];
  tagsEn?: string[];
  tagsFr?: string[];
  isFeatured?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  giftCardMessage?: string;
}

export interface CustomerDetails {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  address: string;
  notes?: string;
}

export type PaymentMethod = 'mada' | 'apple_pay' | 'credit_card' | 'tamara' | 'tabby' | 'cod';

export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shippingFee: number;
  taxAmount: number;
  total: number;
  customer: CustomerDetails;
  paymentMethod: PaymentMethod;
  paymentStatus: 'paid' | 'pending' | 'cod';
  orderDate: string;
  trackingNumber: string;
  giftCard?: {
    recipient: string;
    sender: string;
    message: string;
  };
}

export type PolicyType = 'about' | 'shipping' | 'refund' | 'privacy' | 'terms' | 'faq' | 'contact';

export type Currency = 'SAR' | 'AED' | 'USD' | 'KWD';

export interface CurrencyConfig {
  code: Currency;
  symbol: string;
  name: string;
  rateFromSAR: number;
}
