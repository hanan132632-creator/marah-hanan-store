import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'mh-01',
    name: 'مبخرة ذكية متنقلة ببطارية ليثيوم مع شحن فائق السرعة',
    nameEn: 'Smart Portable Ultrasonic Incense Burner',
    price: 189,
    originalPrice: 260,
    rating: 4.9,
    reviewsCount: 142,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'الأكثر مبيعاً',
    inStock: true,
    stockCount: 24,
    description: 'مبخرة إلكترونية ذكية مبتكرة بتصميم عربي عصري مذهب، تعمل بتقنية التسخين النانوي السريع لتبخير العود واللبان دون فحم أو دخان حارق. بطارية تدوم طويلاً مع منفذ Type-C متوافق مع شواحن السيارات والباوربانك.',
    specs: {
      'نوع التسخين': 'شريحة سيراميك نانوية',
      'سعة البطارية': '2500 مللي أمبير',
      'منفذ الشحن': 'USB Type-C فائق السرعة',
      'الضمان': 'سنتان استبدال فوري'
    },
    tags: ['مبخرة', 'عود', 'ذكية', 'منزل', 'فاخر'],
    isFeatured: true,
    isBestSeller: true
  },
  {
    id: 'mh-02',
    name: 'طقم هدايا حنان المخملي الفاخر (عطر النخبة + معطر الجو + شمعة صويا طبيعية)',
    nameEn: 'Hanan Velvet Luxury Gift Set',
    price: 295,
    originalPrice: 390,
    rating: 5.0,
    reviewsCount: 98,
    category: 'gifts',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'توصية الذكاء الاصطناعي',
    inStock: true,
    stockCount: 15,
    description: 'بوكس إهداء استثنائي مغلف بالمخمل الملكي، يحتوي على زجاجة عطر فاخرة بمزيج المسك الأبيض والتوت البري، مع شمعة عضوية مصنوعة يدوياً من شمع الصويا وزيت اللافندر المهدئ، وبطاقة إهداء مخصصة.',
    specs: {
      'حجم العطر': '100 مل مركز EDP',
      'حجم الشمعة': '220 جم تدوم 55 ساعة',
      'التغليف': 'صندوق هدايا فاخر مغناطيسي',
      'المناسبات': 'أعياد، تخرج، زواج، تقدير'
    },
    tags: ['هدية', 'عطور', 'شموع', 'فخامة', 'حنان'],
    isFeatured: true,
    isBestSeller: true
  },
  {
    id: 'mh-03',
    name: 'سيروم حمض الهيالورونيك وفيتامين C المعزز بتقنية الببتيدات الذهبية',
    nameEn: 'Radiant Gold Peptide & Hyaluronic Serum',
    price: 145,
    originalPrice: 199,
    rating: 4.8,
    reviewsCount: 215,
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1608248597359-2166946a4805?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'جديد الحزمة الثامنة',
    inStock: true,
    stockCount: 40,
    description: 'تركيبة نقية ومطورة سريرياً لإعادة النضارة ومكافحة الخطوط الرفيعة وترطيب البشرة بعمق 24 ساعة. مصرح من هيئة الغذاء والدواء وخالٍ تماماً من البارابين والعطور الاصطناعية.',
    specs: {
      'الحجم': '50 مل',
      'نوع البشرة': 'مناسب لجميع أنواع البشرة الحساسة',
      'الاعتماد': 'مطابق للمواصفات السعودية SFDA',
      'الصنع': 'مختبرات تجميل معتمدة'
    },
    tags: ['عناية', 'بشرة', 'سيروم', 'نضارة', 'جمال'],
    isFeatured: true
  },
  {
    id: 'mh-04',
    name: 'مصباح إضاءة الغروب الذكي بمستشعر ذكي والتحكم عبر التطبيق',
    nameEn: 'Smart Ambient Sunset Projection Lamp',
    price: 119,
    originalPrice: 170,
    rating: 4.7,
    reviewsCount: 89,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    badge: 'خصم حصري',
    inStock: true,
    stockCount: 32,
    description: 'أضف أجواء ساحرة ودافئة لغرفتك أو أستوديو التصوير الخاص بك! يحاكي ألوان الغروب الذهبية والشفق القطبي مع 16 مليون لون والتحكم بدرجة السطوع عبر جهاز تحكم أو تطبيق الهاتف الذكي.',
    specs: {
      'زاوية الدوران': '360 درجة رأس معدني',
      'الألوان': '16 مليون لون RGB',
      'التوصيل': 'سلك USB مدمج 1.5 متر',
      'التحكم': 'ريموت كنترول + تطبيق جوال'
    },
    tags: ['إضاءة', 'ديكور', 'غروب', 'تصوير', 'منزل']
  },
  {
    id: 'mh-05',
    name: 'سماعة رأس لاسلكية مريحة بخاصية إلغاء الضوضاء الفعال وتصميم ستوديو',
    nameEn: 'Studio Pro ANC Wireless Headphones',
    price: 349,
    originalPrice: 480,
    rating: 4.9,
    reviewsCount: 310,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    badge: 'الأكثر مبيعاً',
    inStock: true,
    stockCount: 18,
    description: 'استمتع بصوت نقي متوازن مع تقنية العزل الصوتي الهجين (Hybrid ANC). وسائد أذن ميموري فوم مريحة للاستخدام الطويل والعمل والدراسة مع بطارية خارقة تدوم حتى 40 ساعة تشغيل متواصل.',
    specs: {
      'إلغاء الضوضاء': 'حتى 35 ديسيبل نشط',
      'عمر البطارية': '40 ساعة (25 ساعة مع ANC)',
      'البلوتوث': 'إصدار Bluetooth 5.3 منخفض التأخير',
      'الميكروفون': '4 ميكروفونات ذكية للمكالمات النقية'
    },
    tags: ['إلكترونيات', 'سماعات', 'بلوتوث', 'صوتيات', 'تقنية'],
    isFeatured: true,
    isBestSeller: true
  },
  {
    id: 'mh-06',
    name: 'كوب القهوة الحراري الذكي مع شاشة لمس رقمية لمراقبة درجة الحرارة',
    nameEn: 'Smart Temperature Display Thermal Tumbler',
    price: 89,
    originalPrice: 129,
    rating: 4.8,
    reviewsCount: 167,
    category: 'lifestyle',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    badge: 'جديد الحزمة الثامنة',
    inStock: true,
    stockCount: 45,
    description: 'كوب حافظ للحرارة والبرودة مصنوع من الفولاذ المقاوم للصدأ 316 الطبي المقاوم للصدأ والروائح. شاشة LED علوية تعرض درجة حرارة مشروبك بلمسة واحدة دون الحاجة لتغيير البطارية.',
    specs: {
      'السعة': '510 مل',
      'حفظ الحرارة': '12 ساعة ساخن / 24 ساعة بارد',
      'المادة': 'ستانلس ستيل 316 طبي 100%',
      'مانع للتسرب': 'غطاء سيليكون محكم 360 درجة'
    },
    tags: ['قهوة', 'كوب', 'حراري', 'لايف ستايل', 'مكتب']
  },
  {
    id: 'mh-07',
    name: 'حقيبة يد جلدية كلاسيكية مع حزام كتف قابل للتعديل وتطريز أنيق',
    nameEn: 'Classic Structured Vegan Leather Crossbody',
    price: 240,
    originalPrice: 320,
    rating: 4.9,
    reviewsCount: 184,
    category: 'lifestyle',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    badge: 'توصية الذكاء الاصطناعي',
    inStock: true,
    stockCount: 12,
    description: 'قطعة أنيقة لا غنى عنها تناسب مختلف الإطلالات اليومية والمناسبات الخاصة. جلد نباتي فاخر عالي التحمل مع جيوب داخلية منظمة وقفل مغناطيسي ذهبي فاخر.',
    specs: {
      'المادة': 'جلد نباتي نبيل عالي المقاومة للخدش',
      'الأبعاد': '24 سم × 16 سم × 8 سم',
      'الألوان': 'بني كلاسيكي، أسود ملكي، بيج هادئ',
      'الإغلاق': 'مشبك معدني مطلي بالذهب المقاوم للأكسدة'
    },
    tags: ['حقيبة', 'أزياء', 'أناقة', 'إكسسوارات', 'نساء'],
    isFeatured: true
  },
  {
    id: 'mh-08',
    name: 'شاحن لاسلكي مغناطيسي 3 في 1 فائق السرعة للهاتف والساعة والسماعة',
    nameEn: '3-in-1 Foldable Fast Wireless Charging Station',
    price: 165,
    originalPrice: 220,
    rating: 4.7,
    reviewsCount: 120,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=800&q=80',
    badge: 'جديد الحزمة الثامنة',
    inStock: true,
    stockCount: 29,
    description: 'شاحن مكتبي وسفري قابل للطي يشحن 3 أجهزة في آن واحد بسرعة فائقة بقدرة تصل إلى 15 واط مع حماية متكاملة من الحرارة الزائدة والشحن الزائد.',
    specs: {
      'القدرة': '15 واط شحن سريع متوافق مع Qi و MagSafe',
      'التوافق': 'أجهزة آبل، سامسونج، والساعات الذكية',
      'الأبعاد': 'قابل للطي بحجم راحة اليد للسفر',
      'الأمان': 'شهادات CE و RoHS للحماية'
    },
    tags: ['شاحن', 'سفر', 'إلكترونيات', 'مكتب', 'لاسلكي']
  },
  {
    id: 'mh-09',
    name: 'فرشاة تصفيف وتجفيف الشعر الحرارية بتقنية الأيونات السالبة',
    nameEn: 'One-Step Ionic Hair Dryer & Volumizer Brush',
    price: 199,
    originalPrice: 280,
    rating: 4.8,
    reviewsCount: 240,
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    badge: 'الأكثر مبيعاً',
    inStock: true,
    stockCount: 22,
    description: 'احصلي على شعر حريري مصفف كأرقى صالونات التجميل في نصف الوقت! تدفق هواء 360 درجة مع شعيرات تمنع التشابك وتحمي الشعر من التلف الحراري.',
    specs: {
      'القدرة': '1200 واط',
      'مستويات الحرارة': '3 مستويات تناسب جميع أنواع الشعر',
      'السلك': 'دوار 360 درجة بطول 2 متر',
      'التقنية': 'سيراميك تورمالين مع أيونات سالبة'
    },
    tags: ['تصفيف', 'شعر', 'عناية', 'جمال', 'استشوار']
  },
  {
    id: 'mh-10',
    name: 'مجموعة ناشر الروائح بالموجات فوق الصوتية وزيوت اللافندر والنعناع النقية',
    nameEn: 'Ultrasonic Essential Oil Diffuser & Aromatherapy Set',
    price: 175,
    originalPrice: 240,
    rating: 4.9,
    reviewsCount: 153,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=800&q=80',
    badge: 'توصية الذكاء الاصطناعي',
    inStock: true,
    stockCount: 19,
    description: 'جهاز ترطيب وناشر روائح صامت يضفي هدوءاً واسترخاءً استثنائياً على غرف النوم والمكاتب، مرفق مع زجاجتين من الزيوت العطرية النقية 100% وإضاءة ليلية دافئة.',
    specs: {
      'سعة الخزان': '500 مل يدوم حتى 12 ساعة',
      'الصوت': 'أقل من 20 ديسيبل فائق الهدوء',
      'الإيقاف التلقائي': 'عند نفاد الماء لضمان الأمان',
      'المرفقات': 'زيت لافندر فرنسي نقي + زيت نعناع نقي'
    },
    tags: ['ناشر', 'زيوت', 'استرخاء', 'نوم', 'منزل']
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'جميع المنتجات', icon: 'Sparkles', count: 10 },
  { id: 'home', name: 'المنزل والديكور العطري', icon: 'Flame', count: 3 },
  { id: 'gifts', name: 'بوكسات الإهداء الفاخرة', icon: 'Gift', count: 1 },
  { id: 'beauty', name: 'العناية والجمال', icon: 'HeartHandshake', count: 2 },
  { id: 'electronics', name: 'الإلكترونيات الذكية', icon: 'Cpu', count: 2 },
  { id: 'lifestyle', name: 'أسلوب الحياة والأناقة', icon: 'ShoppingBag', count: 2 },
];
