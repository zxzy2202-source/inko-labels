import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Tag } from "lucide-react";
import { getTranslations } from "@/lib/i18n";

const t = getTranslations("ar");

export const metadata: Metadata = {
  title: `${t.nav.blog} | INKO Custom Labels`,
  description: t.blog.heroSubtitle,
  alternates: {
    canonical: "https://inkolabels.com/ar/blog",
    languages: {
      "en": "https://inkolabels.com/blog",
      "es": "https://inkolabels.com/es/blog",
      "fr": "https://inkolabels.com/fr/blog",
      "pt": "https://inkolabels.com/pt/blog",
      "de": "https://inkolabels.com/de/blog",
      "ru": "https://inkolabels.com/ru/blog",
      "ja": "https://inkolabels.com/ja/blog",
      "ar": "https://inkolabels.com/ar/blog",
    },
  },
  openGraph: { locale: "ar" },
};

const posts = [
    { slug: "كيفية-اختيار-مادة-الملصق", title: "كيفية اختيار مادة الملصق المناسبة لمنتجك", excerpt: "BOPP وPET وPE والورق — كل مادة لها نقاط قوة مختلفة. يساعد هذا الدليل مشتري B2B على اختيار أفضل ركيزة للملصقات لمستحضرات التجميل والأغذية والمشروبات والمنتجات الصناعية.", category: "مواد الملصقات", readTime: "6 دقائق قراءة", date: "10 يوليو 2025" },
    { slug: "الختم-الساخن-مقابل-الحبر-المعدني", title: "الختم الساخن مقابل الحبر المعدني: أيهما يعطي نتائج أفضل؟", excerpt: "كلاهما يخلق تأثيرات معدنية على الملصقات، لكنهما يعملان بشكل مختلف جداً. تعلم متى تستخدم الختم الساخن ومتى يكون الحبر المعدني الخيار الأذكى.", category: "تقنيات الطباعة", readTime: "5 دقائق قراءة", date: "25 يونيو 2025" },
    { slug: "متطلبات-ملصقات-مستحضرات-التجميل", title: "متطلبات ملصقات مستحضرات التجميل: ما يحتاج مشترو B2B معرفته", excerpt: "يجب أن تستوفي ملصقات مستحضرات التجميل متطلبات تنظيمية صارمة في الولايات المتحدة والاتحاد الأوروبي والأسواق الأخرى. يغطي هذا الدليل العناصر الإلزامية والأخطاء الشائعة.", category: "دليل الصناعة", readTime: "7 دقائق قراءة", date: "12 يونيو 2025" },
    { slug: "دليل-طباعة-الملصقات-بحد-ادنى-منخفض", title: "طباعة الملصقات بحد أدنى منخفض: دليل شامل للعلامات التجارية الصغيرة", excerpt: "هل تطلق خطاً جديداً من المنتجات؟ تجعل كميات الطلب الدنيا المنخفضة طباعة الملصقات المخصصة في متناول الشركات الناشئة وعلامات DTC.", category: "دليل الشراء", readTime: "5 دقائق قراءة", date: "28 مايو 2025" },
    { slug: "نصائح-تصميم-ملصقات-طعام-الحيوانات", title: "تصميم ملصقات طعام الحيوانات: 7 نصائح للتميز على الرف", excerpt: "سوق أغذية الحيوانات الأليفة في ازدهار والمنافسة شرسة. ستساعد هذه النصائح السبع للتصميم والمواد ملصقاتك على جذب المشترين.", category: "نصائح التصميم", readTime: "4 دقائق قراءة", date: "15 مايو 2025" },
  ];

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#0F2744] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">{t.blog.heroTag}</div>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white uppercase leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {t.blog.heroTitle}<br /><span className="text-[#E8A020]">{t.blog.heroTitleAccent}</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-lg">{t.blog.heroSubtitle}</p>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                <div className="h-1.5 bg-[#E8A020]" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E8A020] bg-[#E8A020]/10 px-2.5 py-1 rounded-full"><Tag className="w-3 h-3" />{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-400"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#0F2744] transition-colors leading-snug">
                    <Link href={`/ar/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <Link href={`/ar/blog/${post.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-[#0F2744] hover:text-[#E8A020] transition-colors">
                      {t.blog.readMore} <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#0F2744]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>{t.blog.ctaTitle}</h2>
          <p className="text-white/70 text-lg mb-8">{t.blog.ctaSubtitle}</p>
          <Link href="/ar/contact" className="inline-flex items-center gap-2 bg-[#E8A020] text-white font-bold px-8 py-4 rounded-full hover:bg-[#d4911c] transition-colors text-lg">
            {t.blog.ctaButton} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
