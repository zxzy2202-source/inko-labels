import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Tag } from "lucide-react";
import { getTranslations } from "@/lib/i18n";

const t = getTranslations("pt");

export const metadata: Metadata = {
  title: `${t.nav.blog} | INKO Custom Labels`,
  description: t.blog.heroSubtitle,
  alternates: {
    canonical: "https://inkolabels.com/pt/blog",
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
  openGraph: { locale: "pt" },
};

const posts = [
    { slug: "como-escolher-material-etiqueta", title: "Como Escolher o Material de Etiqueta Certo para Seu Produto", excerpt: "BOPP, PET, PE, papel — cada material tem diferentes pontos fortes. Este guia ajuda compradores B2B a selecionar o melhor substrato de etiqueta para cosméticos, alimentos, bebidas e produtos industriais.", category: "Materiais de Etiqueta", readTime: "6 min de leitura", date: "10 de julho de 2025" },
    { slug: "estampagem-a-quente-vs-tinta-metalica", title: "Estampagem a Quente vs. Tinta Metálica: Qual Dá Melhores Resultados?", excerpt: "Ambos criam efeitos metálicos em etiquetas, mas funcionam de maneiras muito diferentes. Aprenda quando usar estampagem a quente e quando a tinta metálica é a escolha mais inteligente.", category: "Técnicas de Impressão", readTime: "5 min de leitura", date: "25 de junho de 2025" },
    { slug: "requisitos-etiquetas-cosmeticos", title: "Requisitos de Etiquetas Cosméticas: O que Compradores B2B Precisam Saber", excerpt: "As etiquetas cosméticas devem atender a requisitos regulatórios rigorosos nos EUA, UE e outros mercados. Este guia cobre os elementos obrigatórios e erros comuns de conformidade.", category: "Guia da Indústria", readTime: "7 min de leitura", date: "12 de junho de 2025" },
    { slug: "guia-impressao-etiquetas-baixo-moq", title: "Impressão de Etiquetas com Baixo MOQ: Guia Completo para Pequenas Marcas", excerpt: "Lançando uma nova linha de produtos? Quantidades mínimas de pedido baixas tornam a impressão de etiquetas personalizadas acessível para startups e marcas DTC.", category: "Guia de Compra", readTime: "5 min de leitura", date: "28 de maio de 2025" },
    { slug: "dicas-design-etiquetas-alimentos-pets", title: "Design de Etiquetas para Alimentos de Pets: 7 Dicas para Se Destacar", excerpt: "O mercado de alimentos para pets está em expansão e a concorrência é acirrada. Estas 7 dicas de design e material ajudarão suas etiquetas a atrair compradores.", category: "Dicas de Design", readTime: "4 min de leitura", date: "15 de maio de 2025" },
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
                    <Link href={`/pt/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <Link href={`/pt/blog/${post.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-[#0F2744] hover:text-[#E8A020] transition-colors">
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
          <Link href="/pt/contact" className="inline-flex items-center gap-2 bg-[#E8A020] text-white font-bold px-8 py-4 rounded-full hover:bg-[#d4911c] transition-colors text-lg">
            {t.blog.ctaButton} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
