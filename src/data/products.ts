import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'mh-01',
    name: 'مبخرة ذكية متنقلة ببطارية ليثيوم مع شحن فائق السرعة',
    nameEn: 'Smart Portable Ultrasonic Incense Burner',
    nameFr: 'Encensoir Électronique Intelligent Portable Ultra-Rapide',
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
    badgeEn: 'Best Seller',
    badgeFr: 'Meilleure Vente',
    inStock: true,
    stockCount: 24,
    description: 'مبخرة إلكترونية ذكية مبتكرة بتصميم عربي عصري مذهب، تعمل بتقنية التسخين النانوي السريع لتبخير العود واللبان دون فحم أو دخان حارق. بطارية تدوم طويلاً مع منفذ Type-C متوافق مع شواحن السيارات والباوربانك.',
    descriptionEn: 'An innovative smart electronic incense burner with a modern Arabian gilded finish. Utilizes nano-ceramic heating technology to diffuse oud and frankincense without charcoal or harsh smoke. Long-lasting battery with USB-C fast charging.',
    descriptionFr: 'Encensoir électronique intelligent au design oriental doré raffiné. Technologie de chauffe nano-céramique pour diffuser l’oud pur sans charbon ni fumée irritante. Batterie longue autonomie avec recharge USB-C.',
    specs: {
      'نوع التسخين': 'شريحة سيراميك نانوية',
      'سعة البطارية': '2500 مللي أمبير',
      'منفذ الشحن': 'USB Type-C فائق السرعة',
      'الضمان': 'سنتان استبدال فوري'
    },
    specsEn: {
      'Heating Type': 'Nano-Ceramic Plate',
      'Battery Capacity': '2,500 mAh',
      'Charging Port': 'USB Type-C Fast Charging',
      'Warranty': '2 Years Instant Replacement'
    },
    specsFr: {
      'Technologie de Chauffe': 'Plaque Nano-Céramique',
      'Capacité Batterie': '2 500 mAh',
      'Port de Charge': 'USB Type-C Ultra-Rapide',
      'Garantie': '2 Ans Remplacement Immédiat'
    },
    tags: ['مبخرة', 'عود', 'ذكية', 'منزل', 'فاخر'],
    isFeatured: true,
    isBestSeller: true
  },
  {
    id: 'mh-02',
    name: 'طقم هدايا حنان المخملي الفاخر (عطر النخبة + معطر الجو + شمعة صويا طبيعية)',
    nameEn: 'Hanan Velvet Luxury Gift Set',
    nameFr: 'Coffret Cadeau Royal en Velours Hanan Prestige',
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
    badgeEn: 'AI Recommended',
    badgeFr: 'Recommandé par IA',
    inStock: true,
    stockCount: 15,
    description: 'بوكس إهداء استثنائي مغلف بالمخمل الملكي، يحتوي على زجاجة عطر فاخرة بمزيج المسك الأبيض والتوت البري، مع شمعة عضوية مصنوعة يدوياً من شمع الصويا وزيت اللافندر المهدئ، وبطاقة إهداء مخصصة.',
    descriptionEn: 'An exceptional gift box wrapped in royal velvet, featuring an artisanal EDP perfume blending white musk and wild berries, an organic hand-poured soy candle with soothing lavender, and a bespoke greeting card.',
    descriptionFr: 'Coffret cadeau d’exception paré de velours royal, comprenant une eau de parfum au musc blanc et baies sauvages, une bougie végétale artisanale au soja et lavande apaisante, avec carte de vœux calligraphiée.',
    specs: {
      'حجم العطر': '100 مل مركز EDP',
      'حجم الشمعة': '220 جم تدوم 55 ساعة',
      'التغليف': 'صندوق هدايا فاخر مغناطيسي',
      'المناسبات': 'أعياد، تخرج، زواج، تقدير'
    },
    specsEn: {
      'Perfume Size': '100ml Eau de Parfum (EDP)',
      'Candle Size': '220g (Burns 55 hours)',
      'Packaging': 'Luxury Magnetic Gift Box',
      'Occasions': 'Birthdays, Weddings, VIP Gifts'
    },
    specsFr: {
      'Volume Parfum': '100 ml Eau de Parfum (EDP)',
      'Poids Bougie': '220 g (Durée 55 heures)',
      'Présentation': 'Boîte Coffret Magnétique de Luxe',
      'Occasions': 'Anniversaires, Mariages, Cadeau VIP'
    },
    tags: ['هدية', 'عطور', 'شموع', 'فخامة', 'حنان'],
    isFeatured: true,
    isBestSeller: true
  },
  {
    id: 'mh-03',
    name: 'سيروم حمض الهيالورونيك وفيتامين C المعزز بتقنية الببتيدات الذهبية',
    nameEn: 'Radiant Gold Peptide & Hyaluronic Serum',
    nameFr: 'Sérum Éclat Or Peptides & Acide Hyaluronique',
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
    badgeEn: 'Suite v8 New',
    badgeFr: 'Nouveauté Suite v8',
    inStock: true,
    stockCount: 40,
    description: 'تركيبة نقية ومطورة سريرياً لإعادة النضارة ومكافحة الخطوط الرفيعة وترطيب البشرة بعمق 24 ساعة. مصرح من هيئة الغذاء والدواء وخالٍ تماماً من البارابين والعطور الاصطناعية.',
    descriptionEn: 'Clinically proven advanced formula with pure hyaluronic acid, stabilized Vitamin C, and gold peptide complexes. Delivers 24-hour hydration, stimulates collagen, and restores youthful radiance.',
    descriptionFr: 'Formule dermatologique avancée combinant acide hyaluronique pur, vitamine C stabilisée et peptides dorés. Hydratation profonde 24h et éclat instantané pour une peau lissée et rayonnante.',
    specs: {
      'الحجم': '50 مل',
      'نوع البشرة': 'مناسب لجميع أنواع البشرة الحساسة',
      'الاعتماد': 'مطابق للمواصفات السعودية SFDA',
      'الصنع': 'مختبرات تجميل معتمدة'
    },
    specsEn: {
      'Volume': '50 ml',
      'Skin Type': 'Suitable for all skin types, including sensitive',
      'Certification': 'Saudi SFDA Approved',
      'Origin': 'Certified Cosmetic Labs'
    },
    specsFr: {
      'Contenance': '50 ml',
      'Type de Peau': 'Tous types de peau, même sensibles',
      'Certification': 'Conforme aux normes SFDA',
      'Fabrication': 'Laboratoires certifiés'
    },
    tags: ['عناية', 'بشرة', 'سيروم', 'نضارة', 'جمال'],
    isFeatured: true
  },
  {
    id: 'mh-04',
    name: 'مصباح إضاءة الغروب الذكي بمستشعر ذكي والتحكم عبر التطبيق',
    nameEn: 'Smart Ambient Sunset Projection Lamp',
    nameFr: 'Lampe de Projection Couché de Soleil Connectée RGB',
    price: 119,
    originalPrice: 170,
    rating: 4.7,
    reviewsCount: 89,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    badge: 'خصم حصري',
    badgeEn: 'Exclusive Deal',
    badgeFr: 'Offre Exclusive',
    inStock: true,
    stockCount: 32,
    description: 'أضف أجواء ساحرة ودافئة لغرفتك أو أستوديو التصوير الخاص بك! يحاكي ألوان الغروب الذهبية والشفق القطبي مع 16 مليون لون والتحكم بدرجة السطوع عبر جهاز تحكم أو تطبيق الهاتف الذكي.',
    descriptionEn: 'Create magical warm atmospheres in your bedroom or creative studio! Replicates golden sunset hues and aurora gradients with 16 million RGB colors controlled via smartphone app or wireless remote.',
    descriptionFr: 'Créez une atmosphère feutrée et chaleureuse chez vous ou en studio photo. Reproduction des teintes de coucher de soleil et d’aurores boréales avec 16 millions de nuances contrôlables par application.',
    specs: {
      'زاوية الدوران': '360 درجة رأس معدني',
      'الألوان': '16 مليون لون RGB',
      'التوصيل': 'سلك USB مدمج 1.5 متر',
      'التحكم': 'ريموت كنترول + تطبيق جوال'
    },
    specsEn: {
      'Rotation': '360° Flexible Metallic Head',
      'Colors': '16 Million RGB Palette',
      'Power': '1.5m Reinforced USB Cable',
      'Control': 'Wireless Remote + Mobile App'
    },
    specsFr: {
      'Rotation': 'Tête métallique orientable 360°',
      'Couleurs': 'Palette 16 millions de teintes RGB',
      'Alimentation': 'Câble USB 1,5 m inclus',
      'Contrôle': 'Télécommande sans fil + Application mobile'
    },
    tags: ['إضاءة', 'ديكور', 'غروب', 'تصوير', 'منزل']
  },
  {
    id: 'mh-05',
    name: 'سماعة رأس لاسلكية مريحة بخاصية إلغاء الضوضاء الفعال وتصميم ستوديو',
    nameEn: 'Studio Pro ANC Wireless Headphones',
    nameFr: 'Casque Audio Sans Fil Réducteur de Bruit Studio Pro',
    price: 349,
    originalPrice: 480,
    rating: 4.9,
    reviewsCount: 310,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    badge: 'الأكثر مبيعاً',
    badgeEn: 'Best Seller',
    badgeFr: 'Meilleure Vente',
    inStock: true,
    stockCount: 18,
    description: 'استمتع بصوت نقي متوازن مع تقنية العزل الصوتي الهجين (Hybrid ANC). وسائد أذن ميموري فوم مريحة للاستخدام الطويل والعمل والدراسة مع بطارية خارقة تدوم حتى 40 ساعة تشغيل متواصل.',
    descriptionEn: 'Immerse yourself in studio-grade balanced sound with Hybrid Active Noise Cancellation (ANC). Cloud-soft memory foam ear cushions for extended comfort and a powerful 40-hour continuous playback battery.',
    descriptionFr: 'Plongez dans un son d’une clarté studio avec réduction active du bruit hybride (ANC). Coussinets en mousse à mémoire de forme ultra-confortables et batterie exceptionnelle jusqu’à 40h d’écoute.',
    specs: {
      'إلغاء الضوضاء': 'حتى 35 ديسيبل نشط',
      'عمر البطارية': '40 ساعة (25 ساعة مع ANC)',
      'البلوتوث': 'إصدار Bluetooth 5.3 منخفض التأخير',
      'الميكروفون': '4 ميكروفونات ذكية للمكالمات النقية'
    },
    specsEn: {
      'Noise Cancellation': 'Up to -35dB Active ANC',
      'Battery Life': '40h Standard (25h with ANC)',
      'Bluetooth': 'Version 5.3 Ultra-Low Latency',
      'Microphones': '4 Beamforming Mics for Crystal Calls'
    },
    specsFr: {
      'Réduction de Bruit': 'Jusqu’à -35 dB actif (ANC)',
      'Autonomie': '40h standard (25h avec ANC activé)',
      'Bluetooth': 'Version 5.3 faible latence',
      'Microphones': '4 micros intelligents avec isolation vocale'
    },
    tags: ['إلكترونيات', 'سماعات', 'بلوتوث', 'صوتيات', 'تقنية'],
    isFeatured: true,
    isBestSeller: true
  },
  {
    id: 'mh-06',
    name: 'كوب القهوة الحراري الذكي مع شاشة لمس رقمية لمراقبة درجة الحرارة',
    nameEn: 'Smart Temperature Display Thermal Tumbler',
    nameFr: 'Mug Isotherme Intelligent avec Écran Tactile LED',
    price: 89,
    originalPrice: 129,
    rating: 4.8,
    reviewsCount: 167,
    category: 'lifestyle',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    badge: 'جديد الحزمة الثامنة',
    badgeEn: 'Suite v8 New',
    badgeFr: 'Nouveauté Suite v8',
    inStock: true,
    stockCount: 45,
    description: 'كوب حافظ للحرارة والبرودة مصنوع من الفولاذ المقاوم للصدأ 316 الطبي المقاوم للصدأ والروائح. شاشة LED علوية تعرض درجة حرارة مشروبك بلمسة واحدة دون الحاجة لتغيير البطارية.',
    descriptionEn: 'Double-wall vacuum insulated tumbler crafted from surgical-grade 316 stainless steel. Features a capacitive LED touch cap showing your beverage temperature instantly without recharging.',
    descriptionFr: 'Gobelet isotherme haute performance en acier inoxydable 316 chirurgical. Bouchon tactile avec écran LED affichant la température de votre boisson au degré près sans recharge nécessaire.',
    specs: {
      'السعة': '510 مل',
      'حفظ الحرارة': '12 ساعة ساخن / 24 ساعة بارد',
      'المادة': 'ستانلس ستيل 316 طبي 100%',
      'مانع للتسرب': 'غطاء سيليكون محكم 360 درجة'
    },
    specsEn: {
      'Capacity': '510 ml',
      'Insulation': '12h Hot / 24h Cold',
      'Material': '100% Medical-Grade 316 Stainless Steel',
      'Leakproof': '360° Sealed Silicone Gasket'
    },
    specsFr: {
      'Contenance': '510 ml',
      'Isolation': '12h chaud / 24h froid',
      'Matériau': '100% Acier Inox 316 qualité chirurgicale',
      'Étanchéité': 'Joint silicone hermétique 360°'
    },
    tags: ['قهوة', 'كوب', 'حراري', 'لايف ستايل', 'مكتب']
  },
  {
    id: 'mh-07',
    name: 'حقيبة يد جلدية كلاسيكية مع حزام كتف قابل للتعديل وتطريز أنيق',
    nameEn: 'Classic Structured Vegan Leather Crossbody',
    nameFr: 'Sac à Main Bandoulière Cuir Végétal Élégance Parisienne',
    price: 240,
    originalPrice: 320,
    rating: 4.9,
    reviewsCount: 184,
    category: 'lifestyle',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    badge: 'توصية الذكاء الاصطناعي',
    badgeEn: 'AI Recommended',
    badgeFr: 'Recommandé par IA',
    inStock: true,
    stockCount: 12,
    description: 'قطعة أنيقة لا غنى عنها تناسب مختلف الإطلالات اليومية والمناسبات الخاصة. جلد نباتي فاخر عالي التحمل مع جيوب داخلية منظمة وقفل مغناطيسي ذهبي فاخر.',
    descriptionEn: 'An indispensable luxury accessory tailored for everyday sophistication and special evenings. Premium scratch-resistant vegan leather with organized compartments and an anti-tarnish gold clasp.',
    descriptionFr: 'Un incontournable de votre garde-robe alliant raffinement et praticité. Cuir végétal résistant aux rayures, compartiments intérieurs bien agencés et fermoir doré inaltérable.',
    specs: {
      'المادة': 'جلد نباتي نبيل عالي المقاومة للخدش',
      'الأبعاد': '24 سم × 16 سم × 8 سم',
      'الألوان': 'بني كلاسيكي، أسود ملكي، بيج هادئ',
      'الإغلاق': 'مشبك معدني مطلي بالذهب المقاوم للأكسدة'
    },
    specsEn: {
      'Material': 'Premium Scratch-Resistant Vegan Leather',
      'Dimensions': '24 cm × 16 cm × 8 cm',
      'Available Colors': 'Classic Cognac, Royal Black, Soft Beige',
      'Closure': 'Gold-Plated Magnetic Clasp'
    },
    specsFr: {
      'Matière': 'Cuir végétal haute durabilité anti-rayures',
      'Dimensions': '24 cm × 16 cm × 8 cm',
      'Coloris': 'Cognac classique, Noir royal, Beige doux',
      'Fermeture': 'Fermoir magnétique plaqué or'
    },
    tags: ['حقيبة', 'أزياء', 'أناقة', 'إكسسوارات', 'نساء'],
    isFeatured: true
  },
  {
    id: 'mh-08',
    name: 'شاحن لاسلكي مغناطيسي 3 في 1 فائق السرعة للهاتف والساعة والسماعة',
    nameEn: '3-in-1 Foldable Fast Wireless Charging Station',
    nameFr: 'Station de Charge Sans Fil 3-en-1 Pliable Magnétique',
    price: 165,
    originalPrice: 220,
    rating: 4.7,
    reviewsCount: 120,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=800&q=80',
    badge: 'جديد الحزمة الثامنة',
    badgeEn: 'Suite v8 New',
    badgeFr: 'Nouveauté Suite v8',
    inStock: true,
    stockCount: 29,
    description: 'شاحن مكتبي وسفري قابل للطي يشحن 3 أجهزة في آن واحد بسرعة فائقة بقدرة تصل إلى 15 واط مع حماية متكاملة من الحرارة الزائدة والشحن الزائد.',
    descriptionEn: 'Foldable travel and desktop charging hub. Rapidly powers your smartphone, smartwatch, and wireless earbuds simultaneously at up to 15W with smart surge and thermal protection.',
    descriptionFr: 'Station de recharge compacte et pliable pour bureau et voyage. Recharge simultanément votre smartphone, montre connectée et écouteurs jusqu’à 15W avec protection contre la surchauffe.',
    specs: {
      'القدرة': '15 واط شحن سريع متوافق مع Qi و MagSafe',
      'التوافق': 'أجهزة آبل، سامسونج، والساعات الذكية',
      'الأبعاد': 'قابل للطي بحجم راحة اليد للسفر',
      'الأمان': 'شهادات CE و RoHS للحماية'
    },
    specsEn: {
      'Power Output': '15W Fast Charge (Qi & MagSafe compatible)',
      'Compatibility': 'Apple, Samsung, Android & Smartwatches',
      'Form Factor': 'Pocket-Sized Foldable Architecture',
      'Safety': 'CE & RoHS Overheat & Surge Protection'
    },
    specsFr: {
      'Puissance': '15W charge rapide (compatible Qi & MagSafe)',
      'Compatibilité': 'Apple, Samsung, écouteurs et montres connectées',
      'Format': 'Pliable ultra-compact de poche',
      'Sécurité': 'Certifié CE et RoHS avec protection thermique'
    },
    tags: ['شاحن', 'سفر', 'إلكترونيات', 'مكتب', 'لاسلكي']
  },
  {
    id: 'mh-09',
    name: 'فرشاة تصفيف وتجفيف الشعر الحرارية بتقنية الأيونات السالبة',
    nameEn: 'One-Step Ionic Hair Dryer & Volumizer Brush',
    nameFr: 'Brosse Soufflante et Lissante Ionique Volumisante',
    price: 199,
    originalPrice: 280,
    rating: 4.8,
    reviewsCount: 240,
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    badge: 'الأكثر مبيعاً',
    badgeEn: 'Best Seller',
    badgeFr: 'Meilleure Vente',
    inStock: true,
    stockCount: 22,
    description: 'احصلي على شعر حريري مصفف كأرقى صالونات التجميل في نصف الوقت! تدفق هواء 360 درجة مع شعيرات تمنع التشابك وتحمي الشعر من التلف الحراري.',
    descriptionEn: 'Salon-grade blowout and silky smooth hair in half the time! 360-degree airflow with anti-frizz negative ion technology, tangle-free bristles, and ceramic heat protection.',
    descriptionFr: 'Un brushing digne des plus grands salons en deux fois moins de temps ! Flux d’air 360°, technologie ionique anti-frisottis et picots anti-nœuds qui préservent la fibre capillaire.',
    specs: {
      'القدرة': '1200 واط',
      'مستويات الحرارة': '3 مستويات تناسب جميع أنواع الشعر',
      'السلك': 'دوار 360 درجة بطول 2 متر',
      'التقنية': 'سيراميك تورمالين مع أيونات سالبة'
    },
    specsEn: {
      'Power': '1200 Watts High Efficiency',
      'Heat Settings': '3 Speed & Heat Levels for all hair types',
      'Cord': '360° Swivel Cable (2 meters)',
      'Technology': 'Tourmaline Ceramic with Negative Ions'
    },
    specsFr: {
      'Puissance': '1 200 Watts haute performance',
      'Réglages': '3 niveaux de chaleur et de vitesse',
      'Cordon': 'Cordon rotatif 360° de 2 mètres',
      'Technologie': 'Céramique Tourmaline avec ions négatifs'
    },
    tags: ['تصفيف', 'شعر', 'عناية', 'جمال', 'استشوار']
  },
  {
    id: 'mh-10',
    name: 'مجموعة ناشر الروائح بالموجات فوق الصوتية وزيوت اللافندر والنعناع النقية',
    nameEn: 'Ultrasonic Essential Oil Diffuser & Aromatherapy Set',
    nameFr: 'Diffuseur d’Huiles Essentielles Ultrasonique & Coffret Aromathérapie',
    price: 175,
    originalPrice: 240,
    rating: 4.9,
    reviewsCount: 153,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=800&q=80',
    badge: 'توصية الذكاء الاصطناعي',
    badgeEn: 'AI Recommended',
    badgeFr: 'Recommandé par IA',
    inStock: true,
    stockCount: 19,
    description: 'جهاز ترطيب وناشر روائح صامت يضفي هدوءاً واسترخاءً استثنائياً على غرف النوم والمكاتب، مرفق مع زجاجتين من الزيوت العطرية النقية 100% وإضاءة ليلية دافئة.',
    descriptionEn: 'Whisper-quiet ultrasonic mist diffuser that creates a serene sanctuary in your home or office. Includes two bottles of 100% pure therapeutic essential oils (French Lavender and Mint) with ambient warm LED light.',
    descriptionFr: 'Diffuseur ultrasonique ultra-silencieux pour une atmosphère zen et relaxante. Livré avec deux flacons d’huiles essentielles 100% pures (Lavande et Menthe poivrée) et veilleuse LED apaisante.',
    specs: {
      'سعة الخزان': '500 مل يدوم حتى 12 ساعة',
      'الصوت': 'أقل من 20 ديسيبل فائق الهدوء',
      'الإيقاف التلقائي': 'عند نفاد الماء لضمان الأمان',
      'المرفقات': 'زيت لافندر فرنسي نقي + زيت نعناع نقي'
    },
    specsEn: {
      'Tank Capacity': '500ml (Runs up to 12 hours)',
      'Noise Level': 'Ultra-Quiet (<20 dB)',
      'Auto Shut-off': 'Safety shut-off when water runs out',
      'Includes': '100% Pure French Lavender & Peppermint Oils'
    },
    specsFr: {
      'Capacité Réservoir': '500 ml (Jusqu’à 12 heures d’autonomie)',
      'Niveau Sonore': 'Ultra-silencieux (<20 dB)',
      'Arrêt Automatique': 'Sécurité en cas de réservoir vide',
      'Inclus': 'Huiles pures de Lavande de Provence et Menthe'
    },
    tags: ['ناشر', 'زيوت', 'استرخاء', 'نوم', 'منزل']
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'جميع المنتجات', nameEn: 'All Products', nameFr: 'Tous les Produits', icon: 'Sparkles', count: 10 },
  { id: 'home', name: 'المنزل والديكور العطري', nameEn: 'Home & Decor', nameFr: 'Maison & Déco', icon: 'Flame', count: 3 },
  { id: 'gifts', name: 'بوكسات الإهداء الفاخرة', nameEn: 'Luxury Gifts', nameFr: 'Cadeaux de Luxe', icon: 'Gift', count: 1 },
  { id: 'beauty', name: 'العناية والجمال', nameEn: 'Beauty & Skincare', nameFr: 'Beauté & Soins', icon: 'HeartHandshake', count: 2 },
  { id: 'electronics', name: 'الإلكترونيات الذكية', nameEn: 'Smart Electronics', nameFr: 'Électronique Intelligente', icon: 'Cpu', count: 2 },
  { id: 'lifestyle', name: 'أسلوب الحياة والأناقة', nameEn: 'Lifestyle & Elegance', nameFr: 'Style de Vie', icon: 'ShoppingBag', count: 2 },
];
