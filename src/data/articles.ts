export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  categoryBadgeClass: string;
  hoverBorderClass: string;
  readTime: string;
  date: string;
  url: string;
  image: string;
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'aromatherapy-guide',
    title: 'دليل العلاج بالروائح والزيوت العطرية 2026: أسرار الاسترخاء وتخفيف التوتر في المنزل',
    excerpt: 'استخدامات زيت اللافندر والبرغموت وخشب الصندل في المباخر والفواحات الذكية لتعديل المزاج والنوم العميق وخفض الإجهاد.',
    category: 'الاسترخاء والعافية',
    categoryBadgeClass: 'bg-purple-100 text-purple-800 border-purple-200',
    hoverBorderClass: 'hover:border-purple-300',
    readTime: 'قراءة 6 دقائق',
    date: 'سبتمبر 2026',
    url: '/html/article-aromatherapy-essential-oils-guide.html',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'night-skincare-guide',
    title: 'دليل روتين العناية الليلية وترميم البشرة: أسرار تجديد الخلايا أثناء النوم',
    excerpt: 'الساعات الذهبية لإنتاج الكولاجين، دور السيروم المركز بحمض الهيالورونيك وحبس الرطوبة من جفاف التكييف لتستيقظي بوجه مشرق.',
    category: 'العناية الليلية',
    categoryBadgeClass: 'bg-rose-100 text-rose-800 border-rose-200',
    hoverBorderClass: 'hover:border-rose-300',
    readTime: 'قراءة 7 دقائق',
    date: 'سبتمبر 2026',
    url: '/html/article-night-skincare-regeneration-guide.html',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'smart-desk-guide',
    title: 'دليل تنظيم المكتب المنزلي الذكي 2026: كيف تبني مساحة عمل ترفع الإنتاجية',
    excerpt: 'كيف تتخلص من فوضى كابلات الشحن بقواعد الشحن اللاسلكي الذكي 3 في 1، وهندسة إضاءة الشاشات المريحة للعين.',
    category: 'تنظيم وإنتاجية',
    categoryBadgeClass: 'bg-sky-100 text-sky-800 border-sky-200',
    hoverBorderClass: 'hover:border-sky-300',
    readTime: 'قراءة 6 دقائق',
    date: 'سبتمبر 2026',
    url: '/html/article-smart-desk-productivity-guide.html',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'smart-incense-guide',
    title: 'دليل فنون العطور والمباخر الذكية: أسرار التعطير الفاخر وصناعة أجواء لا تُنسى',
    excerpt: 'نوتات العود والعنبر، تدرج الهرم العطري، وكيف تختارين المبخرة الإلكترونية الذكية والآمنة لبيتك وسيارتك.',
    category: 'العطور والمباخر',
    categoryBadgeClass: 'bg-amber-100 text-amber-800 border-amber-200',
    hoverBorderClass: 'hover:border-amber-300',
    readTime: 'قراءة 6 دقائق',
    date: 'سبتمبر 2026',
    url: '/html/article-smart-incense-fragrances-guide.html',
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'skincare-beauty-routine',
    title: 'دليل العناية والجمال المتكامل 2026: أسرار نضارة البشرة والروتين المثالي',
    excerpt: 'روتين الصباح والمساء المتكامل، أسرار سيروم النضارة، والتغذية السليمة لحماية نضارة وتوهج البشرة يومياً.',
    category: 'العناية والجمال',
    categoryBadgeClass: 'bg-pink-100 text-pink-800 border-pink-200',
    hoverBorderClass: 'hover:border-pink-300',
    readTime: 'قراءة 7 دقائق',
    date: 'سبتمبر 2026',
    url: '/html/article-skincare-beauty-routine-guide.html',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'smart-home-lifestyle',
    title: 'دليل الأجهزة الذكية للحياة العصرية 2026: راحة وإنتاجية استثنائية',
    excerpt: 'أحدث محطات الشحن المتعددة، إضاءات الغروب الديكورية الحديثة، وتقنيات تحويل غرفتك إلى واحة عصرية متكاملة.',
    category: 'الأجهزة الذكية',
    categoryBadgeClass: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    hoverBorderClass: 'hover:border-indigo-300',
    readTime: 'قراءة 6 دقائق',
    date: 'سبتمبر 2026',
    url: '/html/article-smart-home-lifestyle-guide.html',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'luxury-gifts-guide',
    title: 'دليل الهدايا الفاخرة: فن اختيار الهدية المثالية وقواعد الإتيكيت العصري',
    excerpt: 'سيكولوجية الإهداء وأسرار التغليف الملكي ومعايير اختيار الهدايا القيمة التي تترك أثراً عميقاً ولا تُنسى.',
    category: 'فن الإهداء',
    categoryBadgeClass: 'bg-rose-100 text-rose-800 border-rose-200',
    hoverBorderClass: 'hover:border-rose-300',
    readTime: 'قراءة 5 دقائق',
    date: 'سبتمبر 2026',
    url: '/html/article-luxury-gifts-guide.html',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'smart-ecommerce-guide',
    title: 'دليل التسوق الإلكتروني الذكي والآمن 2026: أسرار حماية البيانات وضمان الجودة',
    excerpt: 'كيف تضمن حقوقك كمستهلك، تميز المتاجر المعتمدة، وتقتنص أفضل العروض والكوبونات دون مخاطر مالية.',
    category: 'الأمان الرقمي',
    categoryBadgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    hoverBorderClass: 'hover:border-emerald-300',
    readTime: 'قراءة 6 دقائق',
    date: 'سبتمبر 2026',
    url: '/html/article-smart-ecommerce-guide.html',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80',
  },
];
