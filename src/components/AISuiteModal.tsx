import React, { useState } from 'react';
import { Product, Currency } from '../types';
import { 
  X, 
  Sparkles, 
  Send, 
  Gift, 
  Compass, 
  MessageSquare, 
  Loader2, 
  Check, 
  Bot, 
  ShoppingBag,
  HelpCircle,
  Copy
} from 'lucide-react';

interface AISuiteModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (p: Product) => void;
  currencyRate: number;
  currencySymbol: string;
}

export const AISuiteModal: React.FC<AISuiteModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
  currencyRate,
  currencySymbol,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'advisor' | 'gift' | 'fit'>('advisor');

  // Chat Advisor State
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([
    {
      role: 'assistant',
      text: 'مرحباً بك في المساعد الذكي لمتجر مرح حنان ستور! 🌸 يسعدني جداً مساعدتك في اختيار أفضل المنتجات، تنسيق الهدايا، وتقديم النصائح لأي مناسبة. كيف يمكنني خدمتك اليوم؟'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);

  // Gift Finder State
  const [giftRecipient, setGiftRecipient] = useState('صديق عزيز');
  const [giftOccasion, setGiftOccasion] = useState('عيد ميلاد');
  const [giftBudget, setGiftBudget] = useState(250);
  const [giftPreferences, setGiftPreferences] = useState('عطور، مباخر ذكية، عناية فاخرة');
  const [giftResult, setGiftResult] = useState<string | null>(null);
  const [isGiftLoading, setIsGiftLoading] = useState(false);

  // Quick Chat Prompts
  const quickPrompts = [
    'اقترح لي أفضل هدية راقية بميزانية 250-300 ريال',
    'ما هي أفضل مبخرة إلكترونية ذكية للسيارة والمنزل؟',
    'أريد روتين عناية متكامل بالبشرة من متجركم',
    'ما هي المنتجات الأكثر مبيعاً في الحزمة الثامنة؟'
  ];

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || inputMessage.trim();
    if (!textToSend || isChatLoading) return;

    const newHistory = [...chatMessages, { role: 'user' as const, text: textToSend }];
    setChatMessages(newHistory);
    setInputMessage('');
    setIsChatLoading(true);

    try {
      const res = await fetch('/api/ai/shopping-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: textToSend,
          products: products.map(p => ({
            id: p.id,
            name: p.name,
            category: p.category,
            price: p.price,
            shortDescription: p.description.slice(0, 100),
          })),
          conversationHistory: newHistory.slice(-6),
        }),
      });

      const data = await res.json();
      setChatMessages(prev => [
        ...prev,
        { role: 'assistant', text: data.reply || 'أهلاً بك دائماً في مرح حنان ستور!' }
      ]);
    } catch (e) {
      console.error(e);
      setChatMessages(prev => [
        ...prev,
        { role: 'assistant', text: 'نعتذر، حدث اتصال مؤقت. يمكنك استعراض تشكيلة المتجر مباشرة أو تكرار السؤال وسأكون سعيداً بإرشادك!' }
      ]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const handleFindGift = async () => {
    setIsGiftLoading(true);
    setGiftResult(null);
    try {
      const res = await fetch('/api/ai/gift-finder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipient: giftRecipient,
          occasion: giftOccasion,
          budget: giftBudget,
          preferences: giftPreferences,
          products: products.map(p => ({ id: p.id, name: p.name, price: p.price })),
        }),
      });

      const data = await res.json();
      setGiftResult(data.result || data.recommendation || 'تم إعداد اقتراح الهدية بنجاح.');
    } catch (e) {
      console.error(e);
      setGiftResult('ننصحك باختيار طقم هدايا حنان المخملي أو المبخرة الذكية كخيارين مثاليين للإهداء الراقي.');
    } finally {
      setIsGiftLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('تم نسخ النص إلى الحافظة!');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5">
      <div 
        className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-stone-200 text-right flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-stone-900 text-white p-5 sm:p-6 flex items-center justify-between border-b border-stone-800">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-right">
            <div className="flex items-center gap-2 justify-end">
              <span className="bg-rose-500/20 text-rose-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-rose-500/30">
                Gemini 3.8 Flash
              </span>
              <h2 className="text-lg sm:text-xl font-black flex items-center gap-2">
                <span>أدوات الذكاء الاصطناعي وويب ذكي</span>
                <Sparkles className="w-5 h-5 text-amber-400" />
              </h2>
            </div>
            <p className="text-xs text-stone-400 mt-0.5">
              مرح حنان ستور • استشارات تسوق فورية، تنسيق هدايا، واقتراحات مخصصة
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-stone-100 p-2 flex gap-2 border-b border-stone-200 text-xs font-bold">
          <button
            onClick={() => setActiveTab('advisor')}
            className={`flex-1 py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'advisor'
                ? 'bg-white text-rose-600 shadow-sm'
                : 'text-stone-600 hover:bg-stone-200'
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>مساعد التسوق والأناقة</span>
          </button>

          <button
            onClick={() => setActiveTab('gift')}
            className={`flex-1 py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'gift'
                ? 'bg-white text-rose-600 shadow-sm'
                : 'text-stone-600 hover:bg-stone-200'
            }`}
          >
            <Gift className="w-4 h-4" />
            <span>موفق الهدايا وكاتب البطاقات</span>
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-stone-50">
          
          {/* TAB 1: Chat Advisor */}
          {activeTab === 'advisor' && (
            <div className="space-y-4 flex flex-col h-full min-h-[350px]">
              
              {/* Quick Prompts Chips */}
              <div className="flex flex-wrap gap-1.5 pb-2">
                {quickPrompts.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q)}
                    disabled={isChatLoading}
                    className="text-[11px] font-medium bg-white hover:bg-rose-50 hover:text-rose-600 text-stone-700 px-3 py-1.5 rounded-full border border-stone-200 shadow-2xs transition-colors text-right"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Messages Thread */}
              <div className="flex-1 space-y-3 overflow-y-auto pr-1">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-2.5 ${
                      msg.role === 'user' ? 'justify-start flex-row-reverse' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                        msg.role === 'user'
                          ? 'bg-rose-600 text-white'
                          : 'bg-stone-900 text-amber-300'
                      }`}
                    >
                      {msg.role === 'user' ? 'أنت' : <Sparkles className="w-4 h-4" />}
                    </div>

                    <div
                      className={`max-w-[82%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-xs ${
                        msg.role === 'user'
                          ? 'bg-rose-600 text-white rounded-tr-none'
                          : 'bg-white text-stone-800 rounded-tl-none border border-stone-200'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isChatLoading && (
                  <div className="flex items-center gap-2 text-xs text-stone-500 bg-white p-3 rounded-2xl border border-stone-200 w-fit">
                    <Loader2 className="w-4 h-4 animate-spin text-rose-600" />
                    <span>المساعد الذكي يفكر ويستخرج التوصيات الأنسب لك...</span>
                  </div>
                )}
              </div>

              {/* Input Form */}
              <div className="pt-2 border-t border-stone-200">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    placeholder="اكتب استفسارك أو طلبك هنا للمساعد الذكي..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    disabled={isChatLoading}
                    className="flex-1 bg-white border border-stone-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-rose-500"
                  />
                  <button
                    type="submit"
                    disabled={isChatLoading || !inputMessage.trim()}
                    className="bg-rose-600 hover:bg-rose-700 disabled:opacity-50 text-white px-4 rounded-xl flex items-center justify-center transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* TAB 2: Gift Matcher */}
          {activeTab === 'gift' && (
            <div className="space-y-5">
              <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-4 text-xs">
                <h3 className="font-bold text-sm text-stone-900 flex items-center gap-1.5">
                  <Gift className="w-4 h-4 text-rose-600" />
                  <span>حدد معايير الهدية ليقوم الذكاء الاصطناعي بتنسيقها وصياغة بطاقتها:</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-stone-700 mb-1">المهدى إليه:</label>
                    <input
                      type="text"
                      value={giftRecipient}
                      onChange={(e) => setGiftRecipient(e.target.value)}
                      placeholder="مثال: أمي، زوجتي، صديق التخرج، أختي"
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-stone-800"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 mb-1">المناسبة:</label>
                    <input
                      type="text"
                      value={giftOccasion}
                      onChange={(e) => setGiftOccasion(e.target.value)}
                      placeholder="مثال: ترقية في العمل، تخرج، عيد ميلاد، شكر"
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-stone-800"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 mb-1">
                      الميزانية التقريبية: ({giftBudget} ر.س)
                    </label>
                    <input
                      type="range"
                      min="90"
                      max="600"
                      step="10"
                      value={giftBudget}
                      onChange={(e) => setGiftBudget(Number(e.target.value))}
                      className="w-full accent-rose-600 cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 mb-1">تفضيلات واهتمامات:</label>
                    <input
                      type="text"
                      value={giftPreferences}
                      onChange={(e) => setGiftPreferences(e.target.value)}
                      placeholder="عطور، إلكترونيات، قهوة، ديكور منزلي"
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-stone-800"
                    />
                  </div>
                </div>

                <button
                  onClick={handleFindGift}
                  disabled={isGiftLoading}
                  className="w-full bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all text-xs sm:text-sm"
                >
                  {isGiftLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>جاري مطابقة الهدايا وصياغة بطاقة الإهداء بالذكاء الاصطناعي...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>ابتكار اقتراح الهدية والكرت الآن ✨</span>
                    </>
                  )}
                </button>
              </div>

              {/* Gift Result Output */}
              {giftResult && (
                <div className="bg-white rounded-2xl p-5 border border-rose-200 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-stone-900 text-xs flex items-center gap-1 text-emerald-700">
                      <Check className="w-4 h-4 text-emerald-600" />
                      اقتراح الهدية المخصص من محرك Gemini:
                    </span>
                    <button
                      onClick={() => copyToClipboard(giftResult)}
                      className="text-stone-500 hover:text-rose-600 text-xs flex items-center gap-1 font-semibold"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>نسخ النص</span>
                    </button>
                  </div>

                  <div className="text-xs sm:text-sm text-stone-700 leading-relaxed whitespace-pre-line bg-rose-50/40 p-4 rounded-xl border border-rose-100">
                    {giftResult}
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
