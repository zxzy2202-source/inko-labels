import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Tag } from "lucide-react";
import { getTranslations } from "@/lib/i18n";

const t = getTranslations("ru");

export const metadata: Metadata = {
  title: `${t.nav.blog} | INKO Custom Labels`,
  description: t.blog.heroSubtitle,
  alternates: {
    canonical: "https://inkolabels.com/ru/blog",
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
  openGraph: { locale: "ru" },
};

const posts = [
    { slug: "kak-vybrat-material-dlya-etiketki", title: "Как Выбрать Правильный Материал для Этикетки", excerpt: "BOPP, PET, PE, бумага — каждый материал имеет разные преимущества. Это руководство помогает B2B-покупателям выбрать лучший субстрат для этикеток косметики, продуктов питания и промышленных товаров.", category: "Материалы Этикеток", readTime: "6 мин чтения", date: "10 июля 2025" },
    { slug: "goryachee-tisnenie-vs-metallicheskaya-kraska", title: "Горячее Тиснение vs. Металлическая Краска: Что Даёт Лучшие Результаты?", excerpt: "Оба создают металлические эффекты на этикетках, но работают по-разному. Узнайте, когда использовать горячее тиснение, а когда металлическая краска является более умным выбором.", category: "Техники Печати", readTime: "5 мин чтения", date: "25 июня 2025" },
    { slug: "trebovaniya-k-kosmeticheskim-etiketkam", title: "Требования к Косметическим Этикеткам: Что Должны Знать B2B-Покупатели", excerpt: "Косметические этикетки должны соответствовать строгим нормативным требованиям в США, ЕС и других рынках. Это руководство охватывает обязательные элементы и распространённые ошибки.", category: "Отраслевой Гид", readTime: "7 мин чтения", date: "12 июня 2025" },
    { slug: "rukovodstvo-pechat-etiketok-nizkiy-moq", title: "Печать Этикеток с Низким MOQ: Полное Руководство для Малых Брендов", excerpt: "Запускаете новую линейку продуктов? Низкие минимальные объёмы заказа делают печать этикеток доступной для стартапов и DTC-брендов.", category: "Руководство Покупателя", readTime: "5 мин чтения", date: "28 мая 2025" },
    { slug: "sovety-dizayn-etiketok-korma-dlya-zhivotnykh", title: "Дизайн Этикеток для Корма Животных: 7 Советов Как Выделиться", excerpt: "Рынок кормов для животных стремительно растёт, а конкуренция высока. Эти 7 советов по дизайну и материалам помогут вашим этикеткам привлекать покупателей.", category: "Советы по Дизайну", readTime: "4 мин чтения", date: "15 мая 2025" },
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
                    <Link href={`/ru/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <Link href={`/ru/blog/${post.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-[#0F2744] hover:text-[#E8A020] transition-colors">
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
          <Link href="/ru/contact" className="inline-flex items-center gap-2 bg-[#E8A020] text-white font-bold px-8 py-4 rounded-full hover:bg-[#d4911c] transition-colors text-lg">
            {t.blog.ctaButton} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
