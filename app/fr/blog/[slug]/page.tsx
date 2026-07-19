import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Tag, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getTranslations } from "@/lib/i18n";

const t = getTranslations("fr");

const posts = [
    { slug: "comment-choisir-materiau-etiquette", slugEn: "how-to-choose-label-material", title: "Comment Choisir le Bon Matériau d'Étiquette pour Votre Produit", excerpt: "BOPP, PET, PE, papier — chaque matériau a des atouts différents. Ce guide aide les acheteurs B2B à sélectionner le meilleur substrat d'étiquette pour les cosmétiques, aliments, boissons et produits industriels.", category: "Matériaux d'Étiquette", readTime: "6 min de lecture", date: "10 juillet 2025" },
    { slug: "estampage-a-chaud-vs-encre-metallique", slugEn: "foil-stamping-vs-metallic-ink", title: "Estampage à Chaud vs. Encre Métallique : Quels Meilleurs Résultats ?", excerpt: "Les deux créent des effets métalliques sur les étiquettes, mais fonctionnent très différemment. Apprenez quand utiliser l'estampage à chaud et quand l'encre métallique est le choix le plus judicieux.", category: "Techniques d'Impression", readTime: "5 min de lecture", date: "25 juin 2025" },
    { slug: "exigences-etiquettes-cosmetiques", slugEn: "cosmetic-label-requirements", title: "Exigences des Étiquettes Cosmétiques : Ce que les Acheteurs B2B Doivent Savoir", excerpt: "Les étiquettes cosmétiques doivent respecter des exigences réglementaires strictes aux États-Unis, dans l'UE et dans d'autres marchés. Ce guide couvre les éléments obligatoires et les erreurs courantes.", category: "Guide de l'Industrie", readTime: "7 min de lecture", date: "12 juin 2025" },
    { slug: "guide-impression-etiquettes-faible-moq", slugEn: "low-moq-label-printing-guide", title: "Impression d'Étiquettes à Faible MOQ : Guide Complet pour les Petites Marques", excerpt: "Vous lancez une nouvelle ligne de produits ? Les faibles quantités minimales de commande rendent l'impression d'étiquettes personnalisées accessible aux startups et aux marques DTC.", category: "Guide d'Achat", readTime: "5 min de lecture", date: "28 mai 2025" },
    { slug: "conseils-design-etiquettes-aliments-animaux", slugEn: "pet-food-label-design-tips", title: "Design d'Étiquettes pour Aliments Animaux : 7 Conseils pour Se Démarquer", excerpt: "Le marché des aliments pour animaux est en plein essor et la concurrence est féroce. Ces 7 conseils de design et de matériaux vous aideront à attirer les acheteurs.", category: "Conseils de Design", readTime: "4 min de lecture", date: "15 mai 2025" },
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
      canonical: `https://inkolabels.com/fr/blog/${post.slug}`,
      languages: {
        "en": `https://inkolabels.com/blog/${post.slugEn}`,
        "fr": `https://inkolabels.com/fr/blog/${post.slug}`,
      },
    },
    openGraph: { locale: "fr", type: "article" },
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
            <Link href="/fr" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/fr/blog" className="hover:text-white">{t.nav.blog}</Link>
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
            <Link href={`/fr/blog`} className="inline-flex items-center gap-2 text-[#0F2744] hover:text-[#E8A020] font-semibold transition-colors">
              <ArrowLeft className="w-4 h-4" /> {t.blog.backToBlog}
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#0F2744]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white uppercase mb-3" style={{ fontFamily: "var(--font-barlow)" }}>{t.blog.ctaTitle}</h2>
          <p className="text-white/70 mb-6">{t.blog.ctaSubtitle}</p>
          <Link href="/fr/contact" className="inline-flex items-center gap-2 bg-[#E8A020] text-white font-bold px-8 py-3 rounded-full hover:bg-[#d4911c] transition-colors">
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
                    <Link href={`/fr/blog/${r.slug}`} className="hover:text-[#0F2744]">{r.title}</Link>
                  </h3>
                  <Link href={`/fr/blog/${r.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-[#0F2744] hover:text-[#E8A020] mt-2 transition-colors">
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
