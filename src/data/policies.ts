import { Language } from '../types';

export interface PolicySection {
  title: string;
  content: string[];
}

export interface PolicyData {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: PolicySection[];
}

export const POLICIES_AR: Record<string, PolicyData> = {
  about: {
    title: 'من نحن - قصة مرح حنان ستور',
    subtitle: 'وجهتك الأولى لأسلوب حياة راقٍ يجمع بين الفخامة، التقنية الذكية، والجودة المعتمدة',
    lastUpdated: 'سبتمبر 2025',
    sections: [
      {
        title: 'رؤيتنا ورسالتنا',
        content: [
          'تأسس "متجر مرح حنان ستور" (الدومين المعتمد: مرححنان.store / xn--mgblao3hjb.store) ليكون نموذجاً عربياً ريادياً في قطاع التجارة الإلكترونية الذكية والفائقة السرعة.',
          'نؤمن بأن التسوق ليس مجرد عملية شراء، بل تجربة متكاملة تبدأ من سهولة التصفح والذكاء الاصطناعي المساند، وتتوج بوصول منتج أصلي عالي الجودة بتغليف فاخر يليق بعملائنا الكرام في المملكة العربية السعودية ودول الخليج العربي.'
        ]
      },
      {
        title: 'الحزمة الثامنة - معيار السرعة الفائقة',
        content: [
          'تم تصميم وهندسة متجرنا استناداً إلى معايير "الحزمة الثامنة (Ultra-Fast Suite v8)"، وهي حزمة تقنية تدمج بين خوادم المعالجة الفائقة، واجهات التفاعل اللحظية، ومحركات الذكاء الاصطناعي Gemini 3.8 Flash لتوفير تجربة مستخدم سريعة وخالية من أي تأخير.',
          'الشفافية المطلقة، والضمان الذهبي على كافة المنتجات، والتوصيل السريع هي ركائز عملنا اليومي.'
        ]
      },
      {
        title: 'قيمنا الجوهرية',
        content: [
          'الأصالة والجودة: نختار منتجاتنا بعناية فائقة وتخضع لاختبارات دقيقة لمعايير السلامة والأداء.',
          'خدمة عملاء استثنائية: فريقنا متاح دائماً لدعمكم عبر البريد الإلكتروني hanan132632@gmail.com والواتساب المباشر.',
          'الأمان والخصوصية: تشفير عالي المستوى لكافة المعاملات المالية والبيانات الشخصية.'
        ]
      }
    ]
  },

  shipping: {
    title: 'سياسة الشحن والتوصيل السريع',
    subtitle: 'شحن فائق السرعة لكافة مدن ومحافظات المملكة العربية السعودية والخليج العربي',
    lastUpdated: 'سبتمبر 2025',
    sections: [
      {
        title: 'مناطق ومدد التوصيل',
        content: [
          'مدينة الرياض والمناطق الرئيسية: توصيل فوري خلال 24 إلى 48 ساعة كحد أقصى.',
          'كافة مدن ومحافظات المملكة العربية السعودية الأخرى: من 2 إلى 4 أيام عمل عبر شركاء الشحن المعتمدين (أرامكس، سمسا، سبل SPL).',
          'دول مجلس التعاون الخليجي (الإمارات، الكويت، قطر، البحرين، عمان): من 4 إلى 7 أيام عمل مع التتبع المباشر للشحنة.'
        ]
      },
      {
        title: 'رسوم الشحن والعرض المجاني',
        content: [
          'الشحن المجاني: يسعدنا تقديم شحن مجاني بالكامل لكافة الطلبات التي تتجاوز قيمتها 200 ريال سعودي داخل المملكة العربية السعودية.',
          'الطلبات الأقل من 200 ريال: تبلغ تكلفة الشحن الثابت 25 ريالاً سعودياً لجميع مناطق المملكة.',
          'شحن دول الخليج: يتم احتساب الرسوم بدقة في سلة المشتريات بحسب الوزن والدولة وتتراوح بين 45 إلى 65 ريالاً سعودياً.'
        ]
      },
      {
        title: 'تتبع الشحنة والتسليم',
        content: [
          'بمجرد تجهيز طلبك في مستودعاتنا، سيصلك رقم تتبع فوري ورابط لمتابعة حركة الطرد حتى باب منزلك.',
          'يقوم مندوب التوصيل بالتنسيق معك هاتفياً أو عبر الرسائل النصية لتحديد الوقت المناسب للاستلام.',
          'في حال وجود أي استفسار حول شحنتك، يمكنك مراسلتنا فوراً عبر hanan132632@gmail.com مع ذكر رقم الطلب وسنتابعها نيابة عنك.'
        ]
      }
    ]
  },

  refund: {
    title: 'سياسة الاستبدال والاسترجاع والضمان الذهبي',
    subtitle: 'تسوق بكل راحة واطمئنان مع الضمان الذهبي وسياسة الإرجاع المرنة لمدة 14 يوماً',
    lastUpdated: 'سبتمبر 2025',
    sections: [
      {
        title: 'شروط الاسترجاع والاستبدال (خلال 14 يوماً)',
        content: [
          'يحق لعميل متجر مرح حنان ستور طلب استرجاع أو استبدال المنتج خلال 14 يوماً من تاريخ استلام الطلب.',
          'يشترط أن يكون المنتج بحالته الأصلية، غير مستخدم، وبغلافه الأصلي وكافة ملحقاته وبطاقاته التعريفيّة.',
          'في حال كان الاسترجاع بسبب عيب مصنعي أو خطأ في الشحنة، يتحمل متجر مرح حنان ستور تكاليف بوليصة الإرجاع بالكامل دون أي رسوم على العميل.',
          'في حال كان الاسترجاع برغبة العميل وبدون عيب في المنتج، يتم خصم قيمة بوليصة الشحن فقط وإعادة باقي المبلغ.'
        ]
      },
      {
        title: 'المنتجات المستثناة من الاسترجاع',
        content: [
          'حرصاً على الصحة العامة وسلامة عملائنا الكرام، ووفقاً لتعليمات وزارة التجارة، يُستثنى من الإرجاع: مستحضرات العناية بالبشرة ومستحضرات التجميل المفتوحة أو المستخدمة، والعطور بعد فك غلاف السيلوفان الحامي، ما لم يكن بها عيب مصنعي مثبت.'
        ]
      },
      {
        title: 'آلية استرداد المبالغ المالية',
        content: [
          'يتم فحص المنتج المرتجع فور وصوله إلى مستودعاتنا والتأكد من سلامته.',
          'تتم إعادة المبلغ إلى نفس البطاقة أو الحساب البنكي المستخدم في الدفع خلال 3 إلى 7 أيام عمل.',
          'في حال كان الدفع عند الاستلام، يتم تحويل المبلغ إلى الحساب البنكي للعميل (الآيبان) فور استلام الشحنة وتأكيد البيانات.'
        ]
      }
    ]
  },

  privacy: {
    title: 'سياسة الخصوصية وحماية البيانات الشخصية',
    subtitle: 'التزام صارم بحماية خصوصيتك ومعلوماتك وفقاً لنظام حماية البيانات الشخصية (PDPL)',
    lastUpdated: 'سبتمبر 2025',
    sections: [
      {
        title: 'البيانات التي نجمعها وكيفية استخدامها',
        content: [
          'نجمع فقط البيانات الضرورية لإتمام طلبك وتقديم الخدمة الأفضل لك، وتشمل: الاسم الكامل، رقم الجوال، عنوان الشحن والمدينة، والبريد الإلكتروني.',
          'تُستخدم هذه البيانات حصرياً لمعالجة فواتير الشراء، إرسال تحديثات حالة الشحنة، وتقديم الدعم الفني.',
          'لا نقوم إطلاقاً ببيع أو تأجير أو مشاركة بياناتك الشخصية مع أي طرف ثالث لأغراض إعلانية غير مصرح بها.'
        ]
      },
      {
        title: 'أمان المدفوعات والبطاقات البنكية',
        content: [
          'متجر مرح حنان ستور لا يقوم بتخزين أي أرقام للبطاقات الائتمانية أو الحسابات البنكية على خوادمه.',
          'تتم جميع العمليات المالية عبر بوابات دفع إلكترونية سعودية وعالمية معتمدة ومحمية بتشفير 256-bit SSL وشهادة أمان PCI-DSS العالمية.'
        ]
      },
      {
        title: 'ملفات تعريف الارتباط (Cookies)',
        content: [
          'نستخدم ملفات تعريف الارتباط لتحسين سرعة تحميل المتجر وتذكر عناصر سلة التسوق الخاصة بك والتفضيلات اللغوية والعملة لتوفير تجربة سلسة وفائقة السرعة.'
        ]
      }
    ]
  },

  terms: {
    title: 'الشروط والأحكام العامة',
    subtitle: 'القواعد والضوابط المنظمة لاستخدام متجر مرح حنان ستور والتعاملات التجارية الإلكترونية',
    lastUpdated: 'سبتمبر 2025',
    sections: [
      {
        title: 'المقدمة والقبول',
        content: [
          'أهلاً بك في متجر مرح حنان ستور، والمتاح عبر النطاق xn--mgblao3hjb.store (مرححنان.store). باستخدامك لهذا الموقع وإتمام أي عملية شراء، فإنك توافق على الالتزام بكافة الشروط والأحكام الواردة هنا وفقاً لنظام التجارة الإلكترونية المعمول به في المملكة العربية السعودية.',
          'يحتفظ المتجر بالحق في تعديل أو تحديث هذه الشروط في أي وقت مع إشعار المستخدمين عبر هذه الصفحة.'
        ]
      },
      {
        title: 'الأسعار والضريبة',
        content: [
          'جميع الأسعار المعروضة في المتجر بالريال السعودي (ر.س) وتشمل ضريبة القيمة المضافة بنسبة 15% المقررة نظاماً في المملكة العربية السعودية ما لم يُذكر خلاف ذلك.',
          'يتم إصدار فاتورة ضريبية إلكترونية فورية لكل طلب مكتمل مطابقة لمتطلبات هيئة الزكاة والضريبة والجمارك (ZATCA).'
        ]
      },
      {
        title: 'حقوق الملكية الفكرية والعلامة التجارية',
        content: [
          'كافة المحتويات المنشورة على المتجر من نصوص، صور، شعارات، تصاميم، وبرمجيات خاصة بالحزمة الثامنة هي ملكية حصرية لـ "مرح حنان ستور" ومحمية بموجب قوانين الملكية الفكرية وحقوق النشر.'
        ]
      }
    ]
  },

  faq: {
    title: 'الأسئلة الشائعة والأجوبة السريعة',
    subtitle: 'إجابات مباشرة وواضحة على أبرز استفساراتكم حول الطلب والشحن والمنتجات',
    lastUpdated: 'سبتمبر 2025',
    sections: [
      {
        title: 'كيف أقوم بالطلب من مرح حنان ستور؟',
        content: [
          'يمكنك بكل سهولة تصفح المنتجات أو استخدام "المساعد الذكي"، واختيار المنتج المطلوب والضغط على "أضف إلى السلة"، ثم الانتقال إلى إتمام الطلب وتعبئة بيانات العنوان واختيار وسيلة الدفع المناسبة، لتصلك رسالة تأكيد الطلب فوراً.'
        ]
      },
      {
        title: 'ما هي وسائل الدفع المتاحة لديكم؟',
        content: [
          'نوفر أكثر من 6 خيارات دفع آمنة وموثوقة: بطاقات مدى السعودية (Mada)، أبل باي (Apple Pay)، البطاقات الائتمانية فيزا وماستركارد، تقسيط المشتريات على 4 دفعات بدون فوائد عبر تمارا (Tamara) وتابي (Tabby)، وخيار الدفع عند الاستلام داخل المملكة.'
        ]
      },
      {
        title: 'هل المنتجات أصلية ومضمونة؟',
        content: [
          'نعم 100%! جميع منتجات متجر مرح حنان ستور أصلية ومستوردة من مصادر معتمدة وتخضع لضمان ذهبي للاستبدال الفوري في حال وجود أي عيب مصنعي.'
        ]
      },
      {
        title: 'كيف تعمل ميزات الذكاء الاصطناعي في المتجر؟',
        content: [
          'يحتوي المتجر على "حزمة الذكاء الاصطناعي والويب الذكي" المدعومة بمحرك Gemini 3.8 Flash المتطور. يمكنك استشارة المساعد في اختيار هديتك، مطابقة المقاسات، كتابة إهداء فاخر للكرت، وقراءة ملخصات ذكية لمميزات كل منتج قبل الشراء.'
        ]
      }
    ]
  },

  contact: {
    title: 'اتصل بنا وخدمة العملاء',
    subtitle: 'فريق مرح حنان ستور جاهز لخدمتكم ومساعدتكم على مدار الساعة',
    lastUpdated: 'سبتمبر 2025',
    sections: [
      {
        title: 'معلومات التواصل الرسمية',
        content: [
          'الدومين الرسمي المعتمد: مرححنان.store (xn--mgblao3hjb.store)',
          'البريد الإلكتروني الرسمي لخدمة العملاء: hanan132632@gmail.com',
          'ساعات العمل والدعم الفني: من السبت إلى الخميس، من الساعة 9:00 صباحاً حتى 10:00 مساءً بتوقيت مكة المكرمة.',
          'المركز الرئيسي: المملكة العربية السعودية - الرياض.'
        ]
      },
      {
        title: 'وسائل التفاعل السريع',
        content: [
          'الدعم الفوري عبر المساعد الذكي المدمج في الموقع للإجابة على استفسارات المنتجات والمقاسات.',
          'متابعة الشحنات والاستبدال عبر نموذج التواصل المباشر أدناه أو بمراسلة فريق المبيعات.'
        ]
      }
    ]
  }
};

export const POLICIES_EN: Record<string, PolicyData> = {
  about: {
    title: 'About Us - Marah Hanan Store Story',
    subtitle: 'Your premier destination for an elevated lifestyle blending elegance, smart technology, and certified quality',
    lastUpdated: 'September 2025',
    sections: [
      {
        title: 'Our Vision & Mission',
        content: [
          'Marah Hanan Store (Verified domain: marahhanan.store / xn--mgblao3hjb.store) was founded as an innovative Arab pioneer in smart, ultra-fast electronic commerce.',
          'We believe shopping is an integrated journey that begins with seamless browsing and assistive AI, culminating in the doorstep delivery of authentic, premium-packaged goods tailored for our valued patrons in Saudi Arabia and the GCC.'
        ]
      },
      {
        title: 'Suite v8 - The Ultra-Fast Standard',
        content: [
          'Engineered following the "Ultra-Fast Suite v8" architectural framework, fusing high-throughput edge nodes, instant micro-interactions, and Gemini 3.8 Flash AI engines to eliminate latency entirely.',
          'Absolute transparency, a 14-day golden guarantee on every single item, and rapid courier fulfillment form our core daily principles.'
        ]
      },
      {
        title: 'Core Values',
        content: [
          'Authenticity & Quality: Every single product undergoes rigorous quality and safety inspections.',
          'Exceptional Customer Care: Dedicated representatives available 24/7 at hanan132632@gmail.com.',
          'Bank-Grade Security: Industry-standard 256-bit encryption for all payments and personal customer data.'
        ]
      }
    ]
  },

  shipping: {
    title: 'Express Shipping & Delivery Policy',
    subtitle: 'Ultra-fast delivery across all cities and provinces of Saudi Arabia and the Arabian Gulf',
    lastUpdated: 'September 2025',
    sections: [
      {
        title: 'Delivery Times & Coverage',
        content: [
          'Riyadh & Metropolitan Centers: Express delivery within 24 to 48 hours maximum.',
          'Other Saudi Regions & Cities: 2 to 4 business days via verified courier partners (Aramex, SMSA, SPL).',
          'GCC Countries (UAE, Kuwait, Qatar, Bahrain, Oman): 4 to 7 business days with live doorstep parcel tracking.'
        ]
      },
      {
        title: 'Shipping Rates & Free Shipping Promotion',
        content: [
          'Free Shipping: Enjoy 100% complimentary shipping on all orders over 200 SAR within Saudi Arabia.',
          'Orders under 200 SAR: A flat express courier fee of 25 SAR applies nationwide.',
          'GCC Cross-Border Rates: Calculated precisely at checkout based on weight and country (typically 45-65 SAR).'
        ]
      }
    ]
  },

  refund: {
    title: '14-Day Return, Exchange & Golden Warranty Policy',
    subtitle: 'Shop with absolute peace of mind with our 14-day hassle-free returns and golden replacement warranty',
    lastUpdated: 'September 2025',
    sections: [
      {
        title: 'Conditions for Returns & Exchanges',
        content: [
          'Customers are entitled to request a return or exchange within 14 days of order receipt.',
          'Products must be in their original, unused condition, with intact packaging, tags, and all accessories.',
          'If the return is due to a verified manufacturer defect or shipping mistake, Marah Hanan Store covers 100% of return shipping fees.',
          'If the return is based on customer preference without product fault, only the courier return fee is deducted and the remainder refunded.'
        ]
      },
      {
        title: 'Excluded Items',
        content: [
          'In accordance with Saudi Ministry of Commerce hygiene and public health regulations, opened cosmetics, skincare, and unsealed perfumes cannot be returned unless a manufacturing defect is present.'
        ]
      }
    ]
  },

  privacy: {
    title: 'Privacy Policy & Personal Data Protection',
    subtitle: 'Strict commitment to protecting your privacy in compliance with Saudi Personal Data Protection Law (PDPL)',
    lastUpdated: 'September 2025',
    sections: [
      {
        title: 'Data Collection & Usage',
        content: [
          'We collect only the essential details needed to fulfill your orders: Full name, mobile number, delivery address, and email.',
          'Your information is strictly used for order processing, dispatch updates, and customer service.',
          'We never sell, rent, or trade your personal data to third parties for advertising.'
        ]
      },
      {
        title: 'Payment & Card Security',
        content: [
          'Marah Hanan Store does not store credit card or debit card credentials on its servers.',
          'All transactions are processed through certified gateways with 256-bit SSL encryption and PCI-DSS compliance.'
        ]
      }
    ]
  },

  terms: {
    title: 'Terms and Conditions of Service',
    subtitle: 'Regulatory guidelines governing purchases and interactions on Marah Hanan Store',
    lastUpdated: 'September 2025',
    sections: [
      {
        title: 'Introduction & Agreement',
        content: [
          'Welcome to Marah Hanan Store, accessible via the domain xn--mgblao3hjb.store (marahhanan.store). By placing an order, you agree to abide by these terms under the Saudi E-Commerce Law.'
        ]
      },
      {
        title: 'Pricing & VAT Compliance',
        content: [
          'All listed prices are in Saudi Riyals (SAR) and include the statutory 15% Value Added Tax (VAT) mandated in Saudi Arabia.',
          'A ZATCA-compliant simplified electronic tax invoice is automatically generated for every completed purchase.'
        ]
      }
    ]
  },

  faq: {
    title: 'Frequently Asked Questions (FAQ)',
    subtitle: 'Direct answers to the most common queries regarding ordering, payments, and warranties',
    lastUpdated: 'September 2025',
    sections: [
      {
        title: 'How do I order from Marah Hanan Store?',
        content: [
          'Browse our curated categories or use our Gemini AI Shopping Advisor. Add desired items to your shopping bag, click checkout, fill in your delivery details, select your preferred payment method, and receive instant confirmation.'
        ]
      },
      {
        title: 'What payment options are available?',
        content: [
          'We accept Saudi Mada cards, Apple Pay, Visa, Mastercard, interest-free 4-payment installments via Tamara and Tabby, and Cash on Delivery (COD) within Saudi Arabia.'
        ]
      },
      {
        title: 'Are products authentic and guaranteed?',
        content: [
          '100% yes! All items are brand authentic, sourced directly from verified manufacturers, and protected by our 14-day Golden Guarantee.'
        ]
      }
    ]
  },

  contact: {
    title: 'Customer Support & Contact Us',
    subtitle: 'The Marah Hanan Store team is delighted to assist you around the clock',
    lastUpdated: 'September 2025',
    sections: [
      {
        title: 'Official Contact Information',
        content: [
          'Official Domain: marahhanan.store (xn--mgblao3hjb.store)',
          'Customer Service Email: hanan132632@gmail.com',
          'Support Hours: Saturday to Thursday, 9:00 AM – 10:00 PM (Makkah Time).',
          'Headquarters: Riyadh, Kingdom of Saudi Arabia.'
        ]
      }
    ]
  }
};

export const POLICIES_FR: Record<string, PolicyData> = {
  about: {
    title: 'À Propos - L’Histoire de Marah Hanan Store',
    subtitle: 'Votre destination privilégiée pour un art de vivre mêlant élégance, technologies intelligentes et qualité certifiée',
    lastUpdated: 'Septembre 2025',
    sections: [
      {
        title: 'Notre Vision & Notre Mission',
        content: [
          'Marah Hanan Store (domaine certifié : marahhanan.store / xn--mgblao3hjb.store) a été créé comme une référence arabe et internationale dans le e-commerce intelligent et ultra-rapide.',
          'Nous concevons chaque commande comme une expérience d’exception, de l’assistance IA personnalisée à la livraison soignée d’articles authentiques emballés avec prestige.'
        ]
      },
      {
        title: 'Suite v8 - Le Standard Ultra-Rapide',
        content: [
          'Bâti sur l’architecture "Ultra-Fast Suite v8" combinant serveurs haute performance et moteur d’intelligence artificielle Gemini 3.8 Flash pour une navigation fluide sans temps d’attente.',
          'Une garantie dorée de 14 jours, une transparence absolue et une expédition express sont nos engagements quotidiens.'
        ]
      }
    ]
  },

  shipping: {
    title: 'Politique de Livraison Express',
    subtitle: 'Expédition ultra-rapide vers toutes les villes d’Arabie Saoudite et les pays du Golfe',
    lastUpdated: 'Septembre 2025',
    sections: [
      {
        title: 'Délais et Zones de Livraison',
        content: [
          'Riyad et grandes métropoles : Livraison express sous 24 à 48 heures maximum.',
          'Autres régions d’Arabie Saoudite : 2 à 4 jours ouvrés avec nos partenaires certifiés (Aramex, SMSA, SPL).',
          'Pays du Golfe (Émirats, Koweït, Qatar, Bahreïn, Oman) : 4 à 7 jours ouvrés avec suivi de colis en direct.'
        ]
      },
      {
        title: 'Tarifs et Livraison Gratuite',
        content: [
          'Livraison Gratuite : offerte pour toute commande supérieure à 200 SAR en Arabie Saoudite.',
          'Commandes inférieures à 200 SAR : tarif forfaitaire de 25 SAR sur tout le territoire saoudien.'
        ]
      }
    ]
  },

  refund: {
    title: 'Garantie Dorée, Retours et Échanges 14 Jours',
    subtitle: 'Achetez en toute sérénité grâce à notre politique de retour flexible sous 14 jours',
    lastUpdated: 'Septembre 2025',
    sections: [
      {
        title: 'Conditions de Retour et d’Échange',
        content: [
          'Vous disposez de 14 jours à compter de la réception de votre commande pour demander un retour ou un échange.',
          'L’article doit être neuf, non utilisé, dans son emballage d’origine complet avec ses étiquettes.',
          'En cas de défaut avéré ou d’erreur d’envoi, les frais de retour sont pris en charge à 100% par Marah Hanan Store.'
        ]
      }
    ]
  },

  privacy: {
    title: 'Politique de Confidentialité et Protection des Données',
    subtitle: 'Engagement strict envers la confidentialité selon la loi saoudienne PDPL',
    lastUpdated: 'Septembre 2025',
    sections: [
      {
        title: 'Collecte et Utilisation des Données',
        content: [
          'Nous ne collectons que les informations indispensables au traitement de votre commande : Nom, téléphone, adresse et e-mail.',
          'Vos données ne sont en aucun cas vendues ou partagées avec des tiers publicitaires.',
          'Les paiements sont protégés par un chiffrement SSL 256-bit et conformes aux normes PCI-DSS.'
        ]
      }
    ]
  },

  terms: {
    title: 'Conditions Générales de Vente',
    subtitle: 'Règles et conditions régissant vos achats sur Marah Hanan Store',
    lastUpdated: 'Septembre 2025',
    sections: [
      {
        title: 'Introduction et Acceptation',
        content: [
          'Bienvenue sur Marah Hanan Store (marahhanan.store). Toute commande implique l’adhésion pleine et entière à nos conditions générales de vente.'
        ]
      },
      {
        title: 'Prix et TVA',
        content: [
          'Tous les prix sont affichés en Riyals Saoudiens (SAR) et incluent la TVA légale de 15%. Une facture fiscale électronique conforme ZATCA est fournie pour chaque achat.'
        ]
      }
    ]
  },

  faq: {
    title: 'Foire Aux Questions (FAQ)',
    subtitle: 'Réponses claires et directes à vos questions courantes sur nos services',
    lastUpdated: 'Septembre 2025',
    sections: [
      {
        title: 'Comment passer commande ?',
        content: [
          'Choisissez vos articles ou laissez-vous guider par notre conseiller IA Gemini. Ajoutez-les au panier, renseignez vos coordonnées et réglez en toute sécurité.'
        ]
      },
      {
        title: 'Quels sont les moyens de paiement acceptés ?',
        content: [
          'Carte Mada, Apple Pay, Visa, Mastercard, paiement en 4 fois sans frais avec Tamara et Tabby, et paiement à la livraison en Arabie Saoudite.'
        ]
      }
    ]
  },

  contact: {
    title: 'Contact et Service Client',
    subtitle: 'Notre équipe est à votre disposition 24h/24 pour vous accompagner',
    lastUpdated: 'Septembre 2025',
    sections: [
      {
        title: 'Coordonnées Officielles',
        content: [
          'Domaine officiel : marahhanan.store (xn--mgblao3hjb.store)',
          'E-mail support client : hanan132632@gmail.com',
          'Horaires : Du samedi au jeudi, de 9h00 à 22h00 (Heure de La Mecque).'
        ]
      }
    ]
  }
};

export const POLICIES: Record<string, PolicyData> = POLICIES_AR;

export function getPolicy(key: string, lang: Language = 'ar'): PolicyData {
  if (lang === 'en' && POLICIES_EN[key]) return POLICIES_EN[key];
  if (lang === 'fr' && POLICIES_FR[key]) return POLICIES_FR[key];
  return POLICIES_AR[key] || POLICIES_AR.about;
}
