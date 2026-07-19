import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Tag } from "lucide-react";
import { getTranslations } from "@/lib/i18n";

const t = getTranslations("ja");

export const metadata: Metadata = {
  title: `${t.nav.blog} | INKO Custom Labels`,
  description: t.blog.heroSubtitle,
  alternates: {
    canonical: "https://inkolabels.com/ja/blog",
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
  openGraph: { locale: "ja" },
};

const posts = [
    { slug: "ラベル素材の選び方", title: "製品に適したラベル素材の選び方", excerpt: "BOPP、PET、PE、紙 — 各素材には異なる強みがあります。このガイドは、化粧品、食品、飲料、工業製品に最適なラベル基材を選ぶB2Bバイヤーを支援します。", category: "ラベル素材", readTime: "6分で読める", date: "2025年7月10日" },
    { slug: "ホイルスタンピングvsメタリックインク", title: "ホイルスタンピングvsメタリックインク：どちらが優れた結果をもたらすか？", excerpt: "どちらもラベルにメタリック効果を生み出しますが、仕組みは大きく異なります。ホイルスタンピングとメタリックインクの使い分けを学びましょう。", category: "印刷技術", readTime: "5分で読める", date: "2025年6月25日" },
    { slug: "化粧品ラベルの要件", title: "化粧品ラベルの要件：B2Bバイヤーが知っておくべきこと", excerpt: "化粧品ラベルは、米国、EU、その他の市場で厳格な規制要件を満たす必要があります。このガイドでは必須要素と一般的なコンプライアンスの間違いを解説します。", category: "業界ガイド", readTime: "7分で読める", date: "2025年6月12日" },
    { slug: "低moqラベル印刷ガイド", title: "低MOQラベル印刷：小規模ブランド向け完全ガイド", excerpt: "新製品ラインを立ち上げますか？低い最小注文数量により、スタートアップやDTCブランドでもカスタムラベル印刷が利用しやすくなりました。", category: "購入ガイド", readTime: "5分で読める", date: "2025年5月28日" },
    { slug: "ペットフードラベルデザインのヒント", title: "ペットフードラベルデザイン：棚で目立つ7つのヒント", excerpt: "ペットフード市場は急成長しており、競争は激しいです。これら7つのデザインと素材のヒントで、あなたのラベルがバイヤーを引き付けます。", category: "デザインのヒント", readTime: "4分で読める", date: "2025年5月15日" },
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
                    <Link href={`/ja/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <Link href={`/ja/blog/${post.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-[#0F2744] hover:text-[#E8A020] transition-colors">
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
          <Link href="/ja/contact" className="inline-flex items-center gap-2 bg-[#E8A020] text-white font-bold px-8 py-4 rounded-full hover:bg-[#d4911c] transition-colors text-lg">
            {t.blog.ctaButton} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
