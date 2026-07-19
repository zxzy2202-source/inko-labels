import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Tag, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getTranslations } from "@/lib/i18n";

const t = getTranslations("pt");

const posts = [
    { slug: "como-escolher-material-etiqueta", slugEn: "how-to-choose-label-material", title: "Como Escolher o Material de Etiqueta Certo para Seu Produto", excerpt: "BOPP, PET, PE, papel — cada material tem diferentes pontos fortes. Este guia ajuda compradores B2B a selecionar o melhor substrato de etiqueta para cosméticos, alimentos, bebidas e produtos industriais.", category: "Materiais de Etiqueta", readTime: "6 min de leitura", date: "10 de julho de 2025" },
    { slug: "estampagem-a-quente-vs-tinta-metalica", slugEn: "foil-stamping-vs-metallic-ink", title: "Estampagem a Quente vs. Tinta Metálica: Qual Dá Melhores Resultados?", excerpt: "Ambos criam efeitos metálicos em etiquetas, mas funcionam de maneiras muito diferentes. Aprenda quando usar estampagem a quente e quando a tinta metálica é a escolha mais inteligente.", category: "Técnicas de Impressão", readTime: "5 min de leitura", date: "25 de junho de 2025" },
    { slug: "requisitos-etiquetas-cosmeticos", slugEn: "cosmetic-label-requirements", title: "Requisitos de Etiquetas Cosméticas: O que Compradores B2B Precisam Saber", excerpt: "As etiquetas cosméticas devem atender a requisitos regulatórios rigorosos nos EUA, UE e outros mercados. Este guia cobre os elementos obrigatórios e erros comuns de conformidade.", category: "Guia da Indústria", readTime: "7 min de leitura", date: "12 de junho de 2025" },
    { slug: "guia-impressao-etiquetas-baixo-moq", slugEn: "low-moq-label-printing-guide", title: "Impressão de Etiquetas com Baixo MOQ: Guia Completo para Pequenas Marcas", excerpt: "Lançando uma nova linha de produtos? Quantidades mínimas de pedido baixas tornam a impressão de etiquetas personalizadas acessível para startups e marcas DTC.", category: "Guia de Compra", readTime: "5 min de leitura", date: "28 de maio de 2025" },
    { slug: "dicas-design-etiquetas-alimentos-pets", slugEn: "pet-food-label-design-tips", title: "Design de Etiquetas para Alimentos de Pets: 7 Dicas para Se Destacar", excerpt: "O mercado de alimentos para pets está em expansão e a concorrência é acirrada. Estas 7 dicas de design e material ajudarão suas etiquetas a atrair compradores.", category: "Dicas de Design", readTime: "4 min de leitura", date: "15 de maio de 2025" },
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
      canonical: `https://inkolabels.com/pt/blog/${post.slug}`,
      languages: {
        "en": `https://inkolabels.com/blog/${post.slugEn}`,
        "pt": `https://inkolabels.com/pt/blog/${post.slug}`,
      },
    },
    openGraph: { locale: "pt", type: "article" },
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
            <Link href="/pt" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/pt/blog" className="hover:text-white">{t.nav.blog}</Link>
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
            <Link href={`/pt/blog`} className="inline-flex items-center gap-2 text-[#0F2744] hover:text-[#E8A020] font-semibold transition-colors">
              <ArrowLeft className="w-4 h-4" /> {t.blog.backToBlog}
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#0F2744]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white uppercase mb-3" style={{ fontFamily: "var(--font-barlow)" }}>{t.blog.ctaTitle}</h2>
          <p className="text-white/70 mb-6">{t.blog.ctaSubtitle}</p>
          <Link href="/pt/contact" className="inline-flex items-center gap-2 bg-[#E8A020] text-white font-bold px-8 py-3 rounded-full hover:bg-[#d4911c] transition-colors">
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
                    <Link href={`/pt/blog/${r.slug}`} className="hover:text-[#0F2744]">{r.title}</Link>
                  </h3>
                  <Link href={`/pt/blog/${r.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-[#0F2744] hover:text-[#E8A020] mt-2 transition-colors">
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
