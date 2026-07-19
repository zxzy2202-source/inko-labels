import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Tag } from "lucide-react";
import { postsEs } from "@/lib/blog-data-es";

export const metadata: Metadata = {
  title: "Blog — Consejos de Impresión y Tendencias del Sector | INKO Custom Labels",
  description: "Artículos expertos sobre impresión de etiquetas personalizadas, materiales, acabados y tendencias de packaging B2B. Aprende a elegir las etiquetas adecuadas para tus productos.",
  alternates: {
    canonical: "https://inkolabels.com/es/blog",
    languages: {
      "en": "https://inkolabels.com/blog",
      "es": "https://inkolabels.com/es/blog",
    },
  },
  openGraph: {
    title: "Blog — Consejos de Impresión y Tendencias del Sector | INKO Custom Labels",
    description: "Artículos expertos sobre impresión de etiquetas personalizadas, materiales, acabados y tendencias de packaging B2B.",
    url: "https://inkolabels.com/es/blog",
    locale: "es_ES",
  },
};

export default function BlogPageEs() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0F2744] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/es" className="hover:text-white transition-colors">Inicio</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Blog</span>
          </nav>
          <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">Centro de Conocimiento</div>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white uppercase leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            Guías e Insights<br /><span className="text-[#E8A020]">de Etiquetas</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-lg">
            Artículos expertos sobre materiales de etiqueta, técnicas de impresión, regulaciones del sector y consejos de abastecimiento B2B — escritos para propietarios de marcas y compradores de packaging.
          </p>
          {/* Language switcher */}
          <div className="mt-6 flex items-center gap-3">
            <Link href="/blog" className="text-white/50 hover:text-white text-sm transition-colors border border-white/20 px-3 py-1 rounded-full">
              🇬🇧 English
            </Link>
            <span className="text-[#E8A020] text-sm border border-[#E8A020]/40 px-3 py-1 rounded-full">
              🇪🇸 Español
            </span>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postsEs.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
                {/* Category color bar */}
                <div className="h-1.5 bg-[#E8A020]" />
                <div className="p-6">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E8A020] bg-[#E8A020]/10 px-2.5 py-1 rounded-full">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  {/* Title */}
                  <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#0F2744] transition-colors leading-snug">
                    <Link href={`/es/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  {/* Excerpt */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <Link
                      href={`/es/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[#0F2744] hover:text-[#E8A020] transition-colors"
                    >
                      Leer más <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0F2744]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            ¿Listo para Pedir Tus Etiquetas?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Obtén una cotización gratuita en 24 horas. MOQ desde 500 rollos, envío mundial con DHL/FedEx.
          </p>
          <Link
            href="/es/contact"
            className="inline-flex items-center gap-2 bg-[#E8A020] text-white font-bold px-8 py-4 rounded-full hover:bg-[#d4911c] transition-colors text-lg"
          >
            Solicitar Cotización Gratis <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
