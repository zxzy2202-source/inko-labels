import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ChevronRight, Star, Award, Globe, Sparkles, Apple, PawPrint, Droplets, Pill, Factory, Shield, Zap, Layers, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "ملصقات مخصصة B2B | مصنع الصين | INKO Custom Labels",
  description: "INKO Custom Labels: مصنع ملصقات B2B معتمد ISO 9001 في شيان، الصين. ملصقات مستحضرات التجميل والأغذية والمشروبات والحيوانات الأليفة والمكملات. الحد الأدنى للطلب 500 لفة، عينات خلال 7 أيام، توصيل DHL إلى 60+ دولة.",
  alternates: {
    canonical: "https://inkolabels.com/ar",
    languages: { en: "https://inkolabels.com", es: "https://inkolabels.com/es", fr: "https://inkolabels.com/fr", de: "https://inkolabels.com/de", pt: "https://inkolabels.com/pt", ru: "https://inkolabels.com/ru", ja: "https://inkolabels.com/ja", ar: "https://inkolabels.com/ar", "x-default": "https://inkolabels.com" },
  },
  openGraph: { title: "INKO Custom Labels — مصنع ملصقات B2B الصين", description: "مصنع B2B معتمد ISO 9001. الحد الأدنى 500 لفة، توصيل عالمي.", url: "https://inkolabels.com/ar", locale: "ar_SA", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "INKO Custom Labels" }] },
};

const iconMap: Record<string, React.ElementType> = { Sparkles, Apple, PawPrint, Droplets, Pill, Factory, Shield, Zap, Layers, Package, Award, Globe };

const stats = [{ value: "15+", label: "سنة خبرة" }, { value: "60+", label: "دولة نخدمها" }, { value: "500", label: "الحد الأدنى (لفة)" }, { value: "24h", label: "رد على الاستفسار" }];

const products = [
  { icon: "Sparkles", title: "ملصقات مستحضرات التجميل والعناية", desc: "ختم ساخن، مطفي ناعم، نقش، ورنيش UV انتقائي لعلامات الجمال المميزة.", tags: ["ختم ساخن", "مطفي ناعم", "نقش"], href: "/ar/products/cosmetic-labels", aiImg: "/manus-storage/product-cosmetic-labels_3696937e.jpg" },
  { icon: "Droplets", title: "ملصقات الزيوت العطرية", desc: "ملصقات مقاومة للزيوت والمذيبات للزيوت العطرية والعلاج بالروائح.", tags: ["مقاوم للزيت", "مقاوم للمذيبات", "فاخر"], href: "/ar/products/essential-oil-labels", aiImg: "/manus-storage/product-essential-oil-labels_ba7458ab.jpg" },
  { icon: "Apple", title: "ملصقات التغليف الغذائي", desc: "ملصقات متوافقة مع FDA للأغذية والصلصات والتوابل والمنتجات المتخصصة.", tags: ["متوافق FDA", "مقاوم للماء", "مناسب للتجميد"], href: "/ar/products/food-labels", aiImg: "/manus-storage/product-food-labels_1701c8ab.jpg" },
  { icon: "Pill", title: "ملصقات المكملات الغذائية", desc: "ملصقات متوافقة مع GMP مع مطابقة دقيقة للألوان.", tags: ["متوافق GMP", "لاصق قوي", "بيانات متغيرة"], href: "/ar/products/supplement-labels", aiImg: "/manus-storage/product-supplement-labels_0b224cc0.jpg" },
  { icon: "PawPrint", title: "ملصقات أغذية الحيوانات الأليفة", desc: "ملصقات متينة ومقاومة للرطوبة لأكياس الطعام الجاف والعلب.", tags: ["مقاوم للرطوبة", "لاصق قوي", "فيلم BOPP"], href: "/ar/products/pet-food-labels", aiImg: "/manus-storage/product-petfood-labels_ecc6466e.jpg" },
  { icon: "Factory", title: "ملصقات صناعية وكيميائية", desc: "ملصقات مقاومة للمواد الكيميائية ودرجات الحرارة العالية للصناعة والسيارات.", tags: ["مقاوم للكيماويات", "درجة حرارة عالية", "متين"], href: "/ar/products/industrial-labels", aiImg: "/manus-storage/product-industrial-labels_6294141b.jpg" }
];

const whyUs = [
  { icon: "Layers", title: "آلة فليكسو 7 ألوان بلوح راتنج", desc: "آلة فليكسو 7 ألوان مع تلميع وقطع في الخط — مطابقة PANTONE، نطاق ألوان موسع." },
  { icon: "Package", title: "طباعة على الجانب اللاصق", desc: "طباعة خلفية على ملصقات BOPP الشفافة: رسومات على الجانب اللاصق لمظهر فاخر." },
  { icon: "Zap", title: "آلة ختم ساخن عالية السرعة + قطع", desc: "آلة متخصصة عالية السرعة للختم الساخن والقطع في خطوة واحدة." },
  { icon: "Shield", title: "آلة التلميع الساخن", desc: "تلميع حراري لطبقات حماية عالية المقاومة وتشطيبات فاخرة." },
  { icon: "Award", title: "خطا فحص بصري + قطع × 2", desc: "آلتان مدمجتان للفحص والقطع: كشف عيوب 100% وقطع دقيق." },
  { icon: "Globe", title: "حد أدنى منخفض · توصيل عالمي", desc: "500 لفة كحد أدنى لكل تصميم. عينة في 3-5 أيام، إنتاج في 7-10 أيام. DHL / FedEx إلى 60+ دولة." }
];

const testimonials = [
  { name: "أحمد م.", company: "Natural Beauty Co., الإمارات", text: "قدمت INKO بالضبط ما احتجناه — ملصقات فاخرة بختم ساخن بجزء من التكلفة.", rating: 5 },
  { name: "سارة ع.", company: "Gourmet Foods Ltd., السعودية", text: "نطلب ملصقات غذائية من INKO منذ 3 سنوات. جودة ثابتة، تسليم في الوقت المحدد.", rating: 5 },
  { name: "محمد ب.", company: "PetNaturals، الكويت", text: "ملصقات أغذية الحيوانات الأليفة هي بالضبط ما أردناه. مقاومة للماء، ألوان زاهية وحد أدنى مثالي.", rating: 5 }
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image src="/hero-banner.jpg" alt="INKO Custom Labels Factory" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2744]/90 via-[#0F2744]/70 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/90 text-xs font-medium tracking-wider uppercase">مصنع ملصقات B2B · الصين</span>
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none mb-6 uppercase tracking-tight" style={{ fontFamily: "var(--font-barlow)" }}>
                كل ملصق.<br /><span className="text-[#E8A020]">بالضبط كما تريد.</span>
              </h1>
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">INKO Custom Labels — مصنع ملصقات B2B احترافي في الصين. ملصقات مستحضرات التجميل والأغذية والمشروبات والحيوانات الأليفة والمكملات. حد أدنى منخفض، توصيل سريع، شحن عالمي.</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/ar/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]" style={{ fontFamily: "var(--font-barlow)" }}>
                  طلب عينة مجانية <ChevronRight className="w-4 h-4" />
                </Link>
                <Link href="/ar/products" className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:bg-white/10" style={{ fontFamily: "var(--font-barlow)" }}>
                  عرض المنتجات <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-white/70">
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#E8A020]" />معتمد ISO 9001</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#E8A020]" />15+ سنة تصدير</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#E8A020]" />60+ دولة</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#E8A020]" />الحد الأدنى 500 لفة فقط</div>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image src="/manus-storage/hero-labels-showcase_bfe5db00.jpg" alt="INKO Premium Label Products" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                  <div className="bg-[#E8A020] text-[#0F2744] font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wide">فليكسو 7 ألوان</div>
                  <div className="bg-white/20 backdrop-blur-sm text-white font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wide border border-white/30">ختم ساخن</div>
                  <div className="bg-white/20 backdrop-blur-sm text-white font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wide border border-white/30">حد أدنى منخفض</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#E8A020] rounded-xl p-4 shadow-xl">
                <div className="text-3xl font-black text-[#0F2744]" style={{ fontFamily: "var(--font-barlow)" }}>60+</div>
                <div className="text-[#0F2744]/70 text-xs font-medium uppercase tracking-wide">دولة</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#0F2744] border border-white/20 rounded-xl p-4 shadow-xl">
                <div className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-barlow)" }}>500</div>
                <div className="text-white/60 text-xs font-medium uppercase tracking-wide">الحد الأدنى</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#E8A020] py-4 overflow-hidden">
        <div className="ticker-wrap"><div className="ticker-inner">
          {[...stats, ...stats].map((s, i) => (
            <div key={i} className="flex items-center gap-3 px-10 flex-shrink-0">
              <span className="text-3xl font-black text-[#0F2744]" style={{ fontFamily: "var(--font-barlow)" }}>{s.value}</span>
              <span className="text-[#0F2744]/70 text-sm font-medium uppercase tracking-wide">{s.label}</span>
              <span className="text-[#0F2744]/30 text-2xl">·</span>
            </div>
          ))}
        </div></div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">كتالوج المنتجات</div>
            <h2 className="text-5xl font-black text-[#0F2744] uppercase leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>ملصقات مخصصة<br /><span className="text-[#E8A020]">لكل صناعة</span></h2>
            <p className="text-gray-600 max-w-xl">من مستحضرات التجميل إلى الأغذية، من الحيوانات الأليفة إلى الصناعة — INKO تصنع ملصقات دقيقة لأكثر من 9 صناعات.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => { const Icon = iconMap[p.icon]; return (
              <Link key={p.href} href={p.href} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image src={p.aiImg} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/60 to-transparent" />
                  {Icon && <div className="absolute top-4 left-4 w-9 h-9 rounded-lg bg-[#E8A020] flex items-center justify-center"><Icon className="w-5 h-5 text-[#0F2744]" /></div>}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#0F2744] text-base mb-2 group-hover:text-[#E8A020] transition-colors">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">{p.tags.map((tag: string) => <span key={tag} className="text-[10px] font-bold tracking-wider text-[#0F2744]/60 bg-gray-100 px-2 py-0.5 rounded">{tag}</span>)}</div>
                </div>
              </Link>
            ); }}
          </div>
          <div className="text-center mt-10">
            <Link href="/ar/products" className="inline-flex items-center gap-2 border-2 border-[#0F2744] text-[#0F2744] hover:bg-[#0F2744] hover:text-white font-bold px-8 py-3 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
              عرض جميع المنتجات 40+ <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#0F2744]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">لماذا تختار INKO</div>
            <h2 className="text-5xl font-black text-white uppercase" style={{ fontFamily: "var(--font-barlow)" }}>مصمم للمشترين B2B العالميين</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(w => { const Icon = iconMap[w.icon]; return (
              <div key={w.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#E8A020]/30 transition-all duration-300">
                {Icon && <div className="w-12 h-12 rounded-xl bg-[#E8A020]/20 flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-[#E8A020]" /></div>}
                <h3 className="text-white font-bold text-base mb-2">{w.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ); }}
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">مصنعنا</div>
              <h2 className="text-5xl font-black text-[#0F2744] uppercase leading-tight mb-6" style={{ fontFamily: "var(--font-barlow)" }}>تصنيع دقيق<br /><span className="text-[#E8A020]">شيان، الصين</span></h2>
              <p className="text-gray-600 leading-relaxed mb-6">يقع مصنعنا في شيان، شانشي، وينتج أكثر من 50 مليون ملصق شهرياً للعملاء في أكثر من 60 دولة.</p>
              <ul className="space-y-3 mb-8"><li className="flex items-center gap-3 text-gray-700"><CheckCircle2 className="w-5 h-5 text-[#E8A020] flex-shrink-0" />آلة طباعة فليكسو 7 ألوان بلوح راتنج</li>
                <li className="flex items-center gap-3 text-gray-700"><CheckCircle2 className="w-5 h-5 text-[#E8A020] flex-shrink-0" />تلميع ساخن وبارد في الخط</li>
                <li className="flex items-center gap-3 text-gray-700"><CheckCircle2 className="w-5 h-5 text-[#E8A020] flex-shrink-0" />ختم ساخن عالي السرعة وقطع</li>
                <li className="flex items-center gap-3 text-gray-700"><CheckCircle2 className="w-5 h-5 text-[#E8A020] flex-shrink-0" />فحص بصري آلي 100%</li>
                <li className="flex items-center gap-3 text-gray-700"><CheckCircle2 className="w-5 h-5 text-[#E8A020] flex-shrink-0" />شهادة ISO 9001:2015</li></ul>
              <Link href="/ar/about" className="inline-flex items-center gap-2 text-[#E8A020] font-semibold hover:underline">اكتشف مصنعنا <ChevronRight className="w-4 h-4" /></Link>
            </div>
            <div><Image src="/manus-storage/factory-production-line_3b0322fe.jpg" alt="INKO Factory Xi'an" width={600} height={450} className="rounded-2xl shadow-lg object-cover w-full" /></div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">آراء العملاء</div>
            <h2 className="text-5xl font-black text-[#0F2744] uppercase" style={{ fontFamily: "var(--font-barlow)" }}>ماذا يقول عملاؤنا</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="flex gap-1 mb-4">{Array.from({ length: t.rating }).map((_,i) => <Star key={i} className="w-5 h-5 text-[#E8A020] fill-[#E8A020]" />)}</div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div><div className="font-bold text-[#0F2744] text-sm">{t.name}</div><div className="text-gray-500 text-xs">{t.company}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#E8A020]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black text-[#0F2744] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>هل أنت مستعد لطلب ملصقاتك؟</h2>
          <p className="text-[#0F2744]/80 text-lg mb-10">اطلب عينة مجانية اليوم. رد خلال 24 ساعة.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/ar/contact" className="inline-flex items-center gap-2 bg-[#0F2744] hover:bg-[#1a3a5c] text-white font-bold px-10 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]" style={{ fontFamily: "var(--font-barlow)" }}>
              طلب عينة مجانية <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/ar/products" className="inline-flex items-center gap-2 border-2 border-[#0F2744] text-[#0F2744] hover:bg-[#0F2744] hover:text-white font-bold px-10 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
              عرض الكتالوج <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
