import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Tag, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getTranslations } from "@/lib/i18n";

const t = getTranslations("ru");

const posts = [
    { slug: "kak-vybrat-material-dlya-etiketki", slugEn: "how-to-choose-label-material", title: "Как Выбрать Правильный Материал для Этикетки", excerpt: "BOPP, PET, PE, бумага — каждый материал имеет разные преимущества. Это руководство помогает B2B-покупателям выбрать лучший субстрат для этикеток косметики, продуктов питания и промышленных товаров.", category: "Материалы Этикеток", readTime: "6 мин чтения", date: "10 июля 2025" },
    { slug: "goryachee-tisnenie-vs-metallicheskaya-kraska", slugEn: "foil-stamping-vs-metallic-ink", title: "Горячее Тиснение vs. Металлическая Краска: Что Даёт Лучшие Результаты?", excerpt: "Оба создают металлические эффекты на этикетках, но работают по-разному. Узнайте, когда использовать горячее тиснение, а когда металлическая краска является более умным выбором.", category: "Техники Печати", readTime: "5 мин чтения", date: "25 июня 2025" },
    { slug: "trebovaniya-k-kosmeticheskim-etiketkam", slugEn: "cosmetic-label-requirements", title: "Требования к Косметическим Этикеткам: Что Должны Знать B2B-Покупатели", excerpt: "Косметические этикетки должны соответствовать строгим нормативным требованиям в США, ЕС и других рынках. Это руководство охватывает обязательные элементы и распространённые ошибки.", category: "Отраслевой Гид", readTime: "7 мин чтения", date: "12 июня 2025" },
    { slug: "rukovodstvo-pechat-etiketok-nizkiy-moq", slugEn: "low-moq-label-printing-guide", title: "Печать Этикеток с Низким MOQ: Полное Руководство для Малых Брендов", excerpt: "Запускаете новую линейку продуктов? Низкие минимальные объёмы заказа делают печать этикеток доступной для стартапов и DTC-брендов.", category: "Руководство Покупателя", readTime: "5 мин чтения", date: "28 мая 2025" },
    { slug: "sovety-dizayn-etiketok-korma-dlya-zhivotnykh", slugEn: "pet-food-label-design-tips", title: "Дизайн Этикеток для Корма Животных: 7 Советов Как Выделиться", excerpt: "Рынок кормов для животных стремительно растёт, а конкуренция высока. Эти 7 советов по дизайну и материалам помогут вашим этикеткам привлекать покупателей.", category: "Советы по Дизайну", readTime: "4 мин чтения", date: "15 мая 2025" },
  ];

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | INKO Custom Labels`,
    description: post.excerpt,
    alternates: {
      canonical: `https://inkolabels.com/ru/blog/${post.slug}`,
      languages: {
        "en": `https://inkolabels.com/blog/${post.slugEn}`,
        "ru": `https://inkolabels.com/ru/blog/${post.slug}`,
      },
    },
    openGraph: { locale: "ru", type: "article" },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  return (
    <>
      <section className="bg-[#0F2744] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/ru" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/ru/blog" className="hover:text-white">{t.nav.blog}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/80 truncate max-w-xs">{post.title}</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E8A020] bg-[#E8A020]/10 px-3 py-1 rounded-full"><Tag className="w-3 h-3" />{post.category}</span>
            <span className="flex items-center gap-1 text-white/50 text-sm"><Clock className="w-4 h-4" />{post.readTime}</span>
            <span className="text-white/50 text-sm">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>{post.title}</h1>
          <p className="text-white/70 text-lg">{post.excerpt}</p>
          <div className="mt-6">
            <Link href={`/blog/${post.slugEn}`} className="text-white/50 hover:text-white text-sm border border-white/20 px-3 py-1 rounded-full transition-colors">
              🇬🇧 Read in English
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-lg leading-relaxed">{post.excerpt}</p>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href={`/ru/blog`} className="inline-flex items-center gap-2 text-[#0F2744] hover:text-[#E8A020] font-semibold transition-colors">
              <ArrowLeft className="w-4 h-4" /> {t.blog.backToBlog}
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#0F2744]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white uppercase mb-3" style={{ fontFamily: "var(--font-barlow)" }}>{t.blog.ctaTitle}</h2>
          <p className="text-white/70 mb-6">{t.blog.ctaSubtitle}</p>
          <Link href="/ru/contact" className="inline-flex items-center gap-2 bg-[#E8A020] text-white font-bold px-8 py-3 rounded-full hover:bg-[#d4911c] transition-colors">
            {t.blog.ctaButton} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
      {related.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-[#0F2744] uppercase mb-8" style={{ fontFamily: "var(--font-barlow)" }}>{t.blog.relatedTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <article key={r.slug} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs font-semibold text-[#E8A020] bg-[#E8A020]/10 px-2 py-0.5 rounded-full">{r.category}</span>
                  <h3 className="font-bold text-gray-900 mt-3 mb-2 leading-snug">
                    <Link href={`/ru/blog/${r.slug}`} className="hover:text-[#0F2744]">{r.title}</Link>
                  </h3>
                  <Link href={`/ru/blog/${r.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-[#0F2744] hover:text-[#E8A020] mt-2 transition-colors">
                    {t.blog.readMore} <ChevronRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
