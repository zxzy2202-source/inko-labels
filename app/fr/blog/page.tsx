import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Tag } from "lucide-react";
import { getTranslations } from "@/lib/i18n";

const t = getTranslations("fr");

export const metadata: Metadata = {
  title: `${t.nav.blog} | INKO Custom Labels`,
  description: t.blog.heroSubtitle,
  alternates: {
    canonical: "https://inkolabels.com/fr/blog",
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
  openGraph: { locale: "fr" },
};

const posts = [
    { slug: "comment-choisir-materiau-etiquette", title: "Comment Choisir le Bon Matériau d'Étiquette pour Votre Produit", excerpt: "BOPP, PET, PE, papier — chaque matériau a des atouts différents. Ce guide aide les acheteurs B2B à sélectionner le meilleur substrat d'étiquette pour les cosmétiques, aliments, boissons et produits industriels.", category: "Matériaux d'Étiquette", readTime: "6 min de lecture", date: "10 juillet 2025" },
    { slug: "estampage-a-chaud-vs-encre-metallique", title: "Estampage à Chaud vs. Encre Métallique : Quels Meilleurs Résultats ?", excerpt: "Les deux créent des effets métalliques sur les étiquettes, mais fonctionnent très différemment. Apprenez quand utiliser l'estampage à chaud et quand l'encre métallique est le choix le plus judicieux.", category: "Techniques d'Impression", readTime: "5 min de lecture", date: "25 juin 2025" },
    { slug: "exigences-etiquettes-cosmetiques", title: "Exigences des Étiquettes Cosmétiques : Ce que les Acheteurs B2B Doivent Savoir", excerpt: "Les étiquettes cosmétiques doivent respecter des exigences réglementaires strictes aux États-Unis, dans l'UE et dans d'autres marchés. Ce guide couvre les éléments obligatoires et les erreurs courantes.", category: "Guide de l'Industrie", readTime: "7 min de lecture", date: "12 juin 2025" },
    { slug: "guide-impression-etiquettes-faible-moq", title: "Impression d'Étiquettes à Faible MOQ : Guide Complet pour les Petites Marques", excerpt: "Vous lancez une nouvelle ligne de produits ? Les faibles quantités minimales de commande rendent l'impression d'étiquettes personnalisées accessible aux startups et aux marques DTC.", category: "Guide d'Achat", readTime: "5 min de lecture", date: "28 mai 2025" },
    { slug: "conseils-design-etiquettes-aliments-animaux", title: "Design d'Étiquettes pour Aliments Animaux : 7 Conseils pour Se Démarquer", excerpt: "Le marché des aliments pour animaux est en plein essor et la concurrence est féroce. Ces 7 conseils de design et de matériaux vous aideront à attirer les acheteurs.", category: "Conseils de Design", readTime: "4 min de lecture", date: "15 mai 2025" },
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
                    <Link href={`/fr/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <Link href={`/fr/blog/${post.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-[#0F2744] hover:text-[#E8A020] transition-colors">
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
          <Link href="/fr/contact" className="inline-flex items-center gap-2 bg-[#E8A020] text-white font-bold px-8 py-4 rounded-full hover:bg-[#d4911c] transition-colors text-lg">
            {t.blog.ctaButton} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
