export interface Product {
  id: string;
  name: string;
  nameEn: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  category: 'beauty' | 'electronics' | 'home' | 'lifestyle' | 'gifts';
  image: string;
  secondaryImages?: string[];
  badge?: 'الأكثر مبيعاً' | 'جديد الحزمة الثامنة' | 'خصم حصري' | 'توصية الذكاء الاصطناعي';
  inStock: boolean;
  stockCount: number;
  description: string;
  specs: Record<string, string>;
  tags: string[];
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
