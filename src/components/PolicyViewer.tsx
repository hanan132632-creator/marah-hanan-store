import React, { useState, useEffect } from 'react';
import { POLICIES, PolicyData } from '../data/policies';
import { 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Lock, 
  FileText, 
  HelpCircle, 
  Mail, 
  ArrowRight, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Send,
  Printer
} from 'lucide-react';

interface PolicyViewerProps {
  initialPolicy?: string;
  onBackToStore: () => void;
}

export const PolicyViewer: React.FC<PolicyViewerProps> = ({
  initialPolicy = 'shipping',
  onBackToStore,
}) => {
  const [activeKey, setActiveKey] = useState<string>(initialPolicy);

  useEffect(() => {
    if (initialPolicy) {
      setActiveKey(initialPolicy);
    }
  }, [initialPolicy]);

  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'استفسار عن شحنة أو منتج',
    message: '',
  });

  const policyTabs = [
    { key: 'shipping', label: 'الشحن والتوصيل', icon: Truck },
    { key: 'refund', label: 'الاسترجاع والضمان', icon: RotateCcw },
    { key: 'privacy', label: 'سياسة الخصوصية', icon: Lock },
    { key: 'terms', label: 'الشروط والأحكام', icon: FileText },
    { key: 'about', label: 'من نحن وقصتنا', icon: ShieldCheck },
    { key: 'faq', label: 'الأسئلة الشائعة', icon: HelpCircle },
    { key: 'contact', label: 'اتصل بنا والدعم', icon: Mail },
  ];

  const currentPolicy: PolicyData = POLICIES[activeKey] || POLICIES.shipping;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.message) return;
    setContactSubmitted(true);
    setTimeout(() => {
      setContactForm({ name: '', phone: '', email: '', subject: 'استفسار عن شحنة أو منتج', message: '' });
    }, 500);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 text-right">
      
      {/* Back button & Breadcrumb */}
      <div className="flex items-center justify-between pb-6 border-b border-stone-200">
        <button
          onClick={onBackToStore}
          className="flex items-center gap-2 text-stone-600 hover:text-rose-600 font-bold text-xs sm:text-sm bg-white px-4 py-2 rounded-xl border border-stone-200 shadow-2xs transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة للمتجر والمنتجات</span>
        </button>

        <div className="text-left text-xs text-stone-400">
          <span className="font-mono">مرححنان.store (xn--mgblao3hjb.store)</span>
        </div>
      </div>

      {/* Policy Navigation Tabs */}
      <div className="flex gap-2 overflow-x-auto py-5 scrollbar-none">
        {policyTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeKey === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => {
                setActiveKey(tab.key);
                setContactSubmitted(false);
              }}
              className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20 scale-102'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Content Box */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8 mt-2">
        
        {/* Document Header */}
        <div className="border-b border-stone-200 pb-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
                السياسات الرسمية المعتمدة
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-900 mt-2">
                {currentPolicy.title}
              </h1>
              <p className="text-stone-500 text-xs sm:text-sm mt-1">
                {currentPolicy.subtitle}
              </p>
            </div>

            <button
              onClick={() => window.print()}
              className="hidden sm:flex items-center gap-1.5 text-stone-500 hover:text-stone-800 text-xs bg-stone-100 hover:bg-stone-200 px-3 py-2 rounded-xl transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>طباعة المستند</span>
            </button>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-stone-700">
          {currentPolicy.sections.map((sec, idx) => (
            <div key={idx} className="bg-stone-50/70 p-5 rounded-2xl border border-stone-100 space-y-2.5">
              <h2 className="text-sm sm:text-base font-bold text-stone-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-600" />
                <span>{sec.title}</span>
              </h2>
              <div className="space-y-2 text-stone-600 pr-4">
                {sec.content.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Interactive Contact Form on 'contact' tab */}
        {activeKey === 'contact' && (
          <div className="pt-6 border-t border-stone-200">
            <h2 className="text-base sm:text-lg font-bold text-stone-900 mb-4">
              نموذج المراسلة الفوري لخدمة العملاء:
            </h2>

            {contactSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-sm">تم إرسال رسالتك بنجاح!</h4>
                <p className="text-xs text-emerald-700">
                  سيتواصل معك فريق خدمة عملاء متجر مرح حنان ستور عبر البريد الإلكتروني أو الواتساب خلال أقل من ساعتين عمل.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-stone-700 mb-1">الاسم الكامل *</label>
                    <input
                      type="text"
                      required
                      placeholder="اسمك الكريم"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-stone-800 focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 mb-1">رقم الجوال *</label>
                    <input
                      type="tel"
                      required
                      placeholder="05xxxxxxxx"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-stone-800 text-left font-mono focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 mb-1">البريد الإلكتروني</label>
                    <input
                      type="email"
                      placeholder="email@domain.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-stone-800 text-left focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 mb-1">الموضوع</label>
                    <select
                      aria-label="الموضوع"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-stone-800 font-bold focus:outline-none focus:border-rose-500"
                    >
                      <option value="استفسار عن شحنة أو منتج">استفسار عن شحنة أو منتج</option>
                      <option value="طلب استرجاع أو استبدال (الضمان الذهبي)">طلب استرجاع أو استبدال (الضمان الذهبي)</option>
                      <option value="اقتراح أو ملاحظة خاصة">اقتراح أو ملاحظة خاصة</option>
                      <option value="طلب تغليف إهداء خاص للشركات والمناسبات">طلب تغليف إهداء خاص للشركات والمناسبات</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">نص الرسالة أو الاستفسار *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="اكتب استفسارك هنا مع ذكر رقم الطلب إن وجد..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-stone-800 focus:outline-none focus:border-rose-500"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 shadow-md transition-all active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>إرسال الرسالة إلى خدمة العملاء</span>
                </button>
              </form>
            )}

            {/* Direct contact badge info */}
            <div className="mt-8 p-4 bg-stone-100 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs text-stone-700">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-600" />
                <span>البريد الإلكتروني المباشر: <strong className="text-stone-900">hanan132632@gmail.com</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>المتجر موثق برقم سجل تجاري ونظام التجارة الإلكترونية السعودي</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
