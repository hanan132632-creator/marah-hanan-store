import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini AI Client safely
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!process.env.GEMINI_API_KEY) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// Serve standalone static HTML folder (/html)
app.use('/html', express.static(path.join(process.cwd(), 'html')));

// Explicit sitemap.xml and robots.txt routes
app.get("/favicon.ico", (_req, res) => {
  res.header("Content-Type", "image/svg+xml");
  res.sendFile(path.join(process.cwd(), "public", "favicon.svg"));
});

app.get("/favicon.svg", (_req, res) => {
  res.header("Content-Type", "image/svg+xml");
  res.sendFile(path.join(process.cwd(), "public", "favicon.svg"));
});

app.get("/site.webmanifest", (_req, res) => {
  res.header("Content-Type", "application/manifest+json");
  res.sendFile(path.join(process.cwd(), "public", "site.webmanifest"));
});

app.get("/manifest.json", (_req, res) => {
  res.header("Content-Type", "application/manifest+json");
  res.sendFile(path.join(process.cwd(), "public", "manifest.json"));
});

app.get("/browserconfig.xml", (_req, res) => {
  res.header("Content-Type", "application/xml; charset=utf-8");
  res.sendFile(path.join(process.cwd(), "public", "browserconfig.xml"));
});

app.get("/humans.txt", (_req, res) => {
  res.header("Content-Type", "text/plain; charset=utf-8");
  res.sendFile(path.join(process.cwd(), "public", "humans.txt"));
});

app.get(["/.well-known/security.txt", "/security.txt"], (_req, res) => {
  res.header("Content-Type", "text/plain; charset=utf-8");
  res.sendFile(path.join(process.cwd(), "public", ".well-known", "security.txt"));
});

app.get("/sitemap.xml", (_req, res) => {
  res.header("Content-Type", "application/xml; charset=utf-8");
  res.sendFile(path.join(process.cwd(), "public", "sitemap.xml"));
});

app.get("/robots.txt", (_req, res) => {
  res.header("Content-Type", "text/plain; charset=utf-8");
  res.sendFile(path.join(process.cwd(), "public", "robots.txt"));
});

app.get("/ads.txt", (_req, res) => {
  res.header("Content-Type", "text/plain; charset=utf-8");
  res.sendFile(path.join(process.cwd(), "public", "ads.txt"));
});

// Store basic health check
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    store: "مرح حنان ستور | Marah Hanan Store",
    domain: "xn--mgblao3hjb.store",
    unicodeDomain: "مرححنان.store",
    packageVersion: "الحزمة الثامنة (Ultra Fast Suite v8)"
  });
});

// AI Endpoint: Shopping & Styling Assistant
app.post("/api/ai/shopping-advisor", async (req, res) => {
  try {
    const { query, products, conversationHistory = [] } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      return res.json({
        reply: "أهلاً بك في متجر مرح حنان ستور! يسعدني جداً مساعدتك في اختيار أفضل المنتجات المتاحة لدينا بتشكيلاتنا الحصرية وأفضل الأسعار مع شحن سريع وضمان ذهبي."
      });
    }

    const systemInstruction = `أنت المساعد الذكي لمبيعات وأناقة "متجر مرح حنان ستور" (الدومين: مرححنان.store / xn--mgblao3hjb.store).
مهمتك:
1. التحدث بلباقة ودية ولهجة خليجية/عربية راقية ومرحبة.
2. مساعدة العميل في العثور على أفضل المنتجات من المتجر بناءً على طلبه، ميزانيته، أو المناسبة.
3. التوصية بالمنتجات المعروضة في الكتالوج المرفق مع ذكر اسمها وسعرها وسبب التوصية.
4. إبراز مزايا الشحن الفائق السرعة، الضمان الذهبي، وخدمة العملاء على hanan132632@gmail.com.
5. الإجابة بإيجاز ونقاط واضحة ومنسقة مع علامات تعبيرية لطيفة.`;

    const productSummaries = Array.isArray(products)
      ? products.slice(0, 15).map((p: any) => `- ${p.name} (${p.category}): ${p.price} ر.س. ${p.shortDescription || ''}`).join('\n')
      : '';

    const contents = `كتالوج منتجات متجر مرح حنان المتاحة:
${productSummaries}

سياق المحادثة السابقة:
${conversationHistory.map((m: any) => `${m.role === 'user' ? 'العميل' : 'المساعد'}: ${m.text}`).join('\n')}

رسالة العميل الحالية:
${query}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    res.json({ reply: response.text || "يسعدنا دائماً خدمتك في مرح حنان ستور!" });
  } catch (error: any) {
    console.error("AI Advisor Error:", error);
    res.status(500).json({
      error: "حدث خطأ أثناء معالجة استشارتك الذكية",
      reply: "أهلاً بك! يمكنك تصفح تشكيلتنا المميزة في المتجر واختيار المنتج الأنسب لك مع ضمان الجودة والشحن السريع."
    });
  }
});

// AI Endpoint: Smart Gift Finder & Card Generator
app.post("/api/ai/gift-finder", async (req, res) => {
  try {
    const { recipient, occasion, budget, preferences, products } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      return res.json({
        recommendation: "ننصحك باختيار إحدى المجموعات الأكثر طلباً في متجر مرح حنان مثل باقات العناية الذكية أو الإكسسوارات الفاخرة.",
        giftCardText: "إلى أغلى الناس.. هدية تنبض بالحب والتقدير، مع كل التمنيات بالسعادة والبهجة الدائمة!"
      });
    }

    const contents = `المناسبة: ${occasion}
المهدى إليه: ${recipient}
الميزانية المقترحة: ${budget} ر.س
التفضيلات: ${preferences}
المنتجات المتاحة:
${Array.isArray(products) ? products.slice(0, 15).map((p: any) => `${p.id}: ${p.name} - ${p.price} ر.س`).join('\n') : ''}

المطلوب:
1. تقديم توصية ذكية لأفضل 2-3 هدايا من المنتجات المتاحة تناسب المناسبة والشخص، مع توضيح سبب الاختيار.
2. كتابة نص بطاقة إهداء (بطاقة تهنئة) بليغة ودافئة ومؤثرة باللغة العربية تناسب المناسبة والشخص ليتم إرفاقها مع الهدية.
اكتب النتيجة بتنسيق جذاب وواضح.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents,
      config: {
        systemInstruction: "أنت خبير الهدايا والإهداءات الراقية في متجر مرح حنان ستور. قدم اقتراحات مبدعة وأشعاراً أو عبارات إهداء عاطفية راقية.",
        temperature: 0.8,
      }
    });

    res.json({ result: response.text });
  } catch (error: any) {
    console.error("Gift Finder Error:", error);
    res.status(500).json({ error: "فشل إنشاء اقتراح الهدية" });
  }
});

// AI Endpoint: Product AI Insights (Pros, Tips, Review Summary)
app.post("/api/ai/product-insights", async (req, res) => {
  try {
    const { product } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      return res.json({
        highlights: ["جودة تصنيع فائقة مطابقة للمواصفات", "شحن سريع وتغليف آمن ومحمي", "ضمان ذهبي للاستبدال والاسترجاع"],
        tips: "يُفضل قراءة دليل الاستخدام المرفق للحصول على أفضل تجربة وكفاءة عالية.",
        verdict: "خيار مثالي وعالي التقييم حاز على إعجاب عملاء متجر مرح حنان ستور."
      });
    }

    const contents = `حلل هذا المنتج من متجر مرح حنان ستور:
اسم المنتج: ${product.name}
التصنيف: ${product.category}
السعر: ${product.price} ر.س
الوصف: ${product.description}
المواصفات: ${JSON.stringify(product.specs || {})}

قدم ملخص ذكي قصير:
1. 3 نقاط قوة رئيسية ومميزات تجعل شراءه قراراً رائعاً.
2. نصيحة عملية للحصول على أقصى فائدة من المنتج.
3. كلمة تقييم ختامية سريعة.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents,
      config: {
        systemInstruction: "أنت خبير تدقيق المنتجات وتقديم المشورة للمتسوقين في مرح حنان ستور. تحدث بموضوعية وأسلوب مشجع وجذاب.",
        temperature: 0.5,
      }
    });

    res.json({ insights: response.text });
  } catch (error: any) {
    console.error("Product Insights Error:", error);
    res.status(500).json({ error: "تعذر توليد التحليل الذكي" });
  }
});

// AI Endpoint: Checkout Dedication Card Generator
app.post("/api/ai/dedication-card", async (req, res) => {
  try {
    const { senderName, recipientName, occasion, tone = 'warm' } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      return res.json({
        card: `إلى ${recipientName || 'أعز الأحباب'}،\nبكل الحب والتقدير أهديك هذه الهدية من متجر مرح حنان، متمنياً لك دوام السعادة والسرور.\nمن: ${senderName || 'مُحبك'}`
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: `اكتب نص كرت إهداء فاخر ورقيق جداً باللغة العربية:
من: ${senderName || 'محبك'}
إلى: ${recipientName || 'شخص عزيز'}
المناسبة: ${occasion || 'إهداء خاص وتعبير عن المحبة'}
طابع النص: ${tone} (دافئ، راقي، شعري ومؤثر)
اجعل الرسالة بين 3 إلى 5 أسطر جاهزة للطباعة على بطاقة الهدية في مرح حنان ستور.`,
    });

    res.json({ card: response.text });
  } catch (error: any) {
    console.error("Dedication Card Error:", error);
    res.status(500).json({ card: "مع أطيب الأمنيات وأجمل باقات الحب والتقدير." });
  }
});

// Start Server with Vite
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Marah Hanan Store server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
