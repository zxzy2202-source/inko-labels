import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Tag, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getTranslations } from "@/lib/i18n";

const t = getTranslations("ja");

const posts = [
    { slug: "ラベル素材の選び方", slugEn: "how-to-choose-label-material", title: "製品に適したラベル素材の選び方", excerpt: "BOPP、PET、PE、紙 — 各素材には異なる強みがあります。このガイドは、化粧品、食品、飲料、工業製品に最適なラベル基材を選ぶB2Bバイヤーを支援します。", category: "ラベル素材", readTime: "6分で読める", date: "2025年7月10日" },
    { slug: "ホイルスタンピングvsメタリックインク", slugEn: "foil-stamping-vs-metallic-ink", title: "ホイルスタンピングvsメタリックインク：どちらが優れた結果をもたらすか？", excerpt: "どちらもラベルにメタリック効果を生み出しますが、仕組みは大きく異なります。ホイルスタンピングとメタリックインクの使い分けを学びましょう。", category: "印刷技術", readTime: "5分で読める", date: "2025年6月25日" },
    { slug: "化粧品ラベルの要件", slugEn: "cosmetic-label-requirements", title: "化粧品ラベルの要件：B2Bバイヤーが知っておくべきこと", excerpt: "化粧品ラベルは、米国、EU、その他の市場で厳格な規制要件を満たす必要があります。このガイドでは必須要素と一般的なコンプライアンスの間違いを解説します。", category: "業界ガイド", readTime: "7分で読める", date: "2025年6月12日" },
    { slug: "低moqラベル印刷ガイド", slugEn: "low-moq-label-printing-guide", title: "低MOQラベル印刷：小規模ブランド向け完全ガイド", excerpt: "新製品ラインを立ち上げますか？低い最小注文数量により、スタートアップやDTCブランドでもカスタムラベル印刷が利用しやすくなりました。", category: "購入ガイド", readTime: "5分で読める", date: "2025年5月28日" },
    { slug: "ペットフードラベルデザインのヒント", slugEn: "pet-food-label-design-tips", title: "ペットフードラベルデザイン：棚で目立つ7つのヒント", excerpt: "ペットフード市場は急成長しており、競争は激しいです。これら7つのデザインと素材のヒントで、あなたのラベルがバイヤーを引き付けます。", category: "デザインのヒント", readTime: "4分で読める", date: "2025年5月15日" },
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
      canonical: `https://inkolabels.com/ja/blog/${post.slug}`,
      languages: {
        "en": `https://inkolabels.com/blog/${post.slugEn}`,
        "ja": `https://inkolabels.com/ja/blog/${post.slug}`,
      },
    },
    openGraph: { locale: "ja", type: "article" },
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
            <Link href="/ja" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/ja/blog" className="hover:text-white">{t.nav.blog}</Link>
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
            <Link href={`/ja/blog`} className="inline-flex items-center gap-2 text-[#0F2744] hover:text-[#E8A020] font-semibold transition-colors">
              <ArrowLeft className="w-4 h-4" /> {t.blog.backToBlog}
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#0F2744]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white uppercase mb-3" style={{ fontFamily: "var(--font-barlow)" }}>{t.blog.ctaTitle}</h2>
          <p className="text-white/70 mb-6">{t.blog.ctaSubtitle}</p>
          <Link href="/ja/contact" className="inline-flex items-center gap-2 bg-[#E8A020] text-white font-bold px-8 py-3 rounded-full hover:bg-[#d4911c] transition-colors">
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
                    <Link href={`/ja/blog/${r.slug}`} className="hover:text-[#0F2744]">{r.title}</Link>
                  </h3>
                  <Link href={`/ja/blog/${r.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-[#0F2744] hover:text-[#E8A020] mt-2 transition-colors">
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
