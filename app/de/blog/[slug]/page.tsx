import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Tag, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getTranslations } from "@/lib/i18n";

const t = getTranslations("de");

const posts = [
    { slug: "wie-man-das-richtige-etikettenmaterial-waehlt", slugEn: "how-to-choose-label-material", title: "Wie Man das Richtige Etikettenmaterial für Sein Produkt Wählt", excerpt: "BOPP, PET, PE, Papier — jedes Material hat unterschiedliche Stärken. Dieser Leitfaden hilft B2B-Käufern, das beste Etikettensubstrat für Kosmetik, Lebensmittel, Getränke und Industrieprodukte auszuwählen.", category: "Etikettenmaterialien", readTime: "6 Min. Lesezeit", date: "10. Juli 2025" },
    { slug: "heissfolienpraegung-vs-metallic-tinte", slugEn: "foil-stamping-vs-metallic-ink", title: "Heißfolienprägung vs. Metallic-Tinte: Was Liefert Bessere Ergebnisse?", excerpt: "Beide erzeugen metallische Effekte auf Etiketten, funktionieren aber sehr unterschiedlich. Erfahren Sie, wann Heißfolienprägung und wann Metallic-Tinte die klügere Wahl ist.", category: "Drucktechniken", readTime: "5 Min. Lesezeit", date: "25. Juni 2025" },
    { slug: "anforderungen-kosmetik-etiketten", slugEn: "cosmetic-label-requirements", title: "Anforderungen an Kosmetiketiketten: Was B2B-Käufer Wissen Müssen", excerpt: "Kosmetiketiketten müssen strenge regulatorische Anforderungen in den USA, der EU und anderen Märkten erfüllen. Dieser Leitfaden behandelt Pflichtangaben und häufige Compliance-Fehler.", category: "Branchenratgeber", readTime: "7 Min. Lesezeit", date: "12. Juni 2025" },
    { slug: "leitfaden-etikettendruck-niedriger-moq", slugEn: "low-moq-label-printing-guide", title: "Etikettendruck mit Niedrigem MOQ: Ein Vollständiger Leitfaden für Kleine Marken", excerpt: "Starten Sie eine neue Produktlinie? Niedrige Mindestbestellmengen machen individuellen Etikettendruck für Startups und DTC-Marken zugänglich.", category: "Kaufratgeber", readTime: "5 Min. Lesezeit", date: "28. Mai 2025" },
    { slug: "tipps-design-tiernahrung-etiketten", slugEn: "pet-food-label-design-tips", title: "Tierfutter-Etikettendesign: 7 Tipps um Aufzufallen", excerpt: "Der Tiernahrungsmarkt boomt und der Wettbewerb ist intensiv. Diese 7 Design- und Materialtipps helfen Ihren Etiketten, Käufer anzuziehen.", category: "Designtipps", readTime: "4 Min. Lesezeit", date: "15. Mai 2025" },
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
      canonical: `https://inkolabels.com/de/blog/${post.slug}`,
      languages: {
        "en": `https://inkolabels.com/blog/${post.slugEn}`,
        "de": `https://inkolabels.com/de/blog/${post.slug}`,
      },
    },
    openGraph: { locale: "de", type: "article" },
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
            <Link href="/de" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/de/blog" className="hover:text-white">{t.nav.blog}</Link>
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
            <Link href={`/de/blog`} className="inline-flex items-center gap-2 text-[#0F2744] hover:text-[#E8A020] font-semibold transition-colors">
              <ArrowLeft className="w-4 h-4" /> {t.blog.backToBlog}
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#0F2744]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white uppercase mb-3" style={{ fontFamily: "var(--font-barlow)" }}>{t.blog.ctaTitle}</h2>
          <p className="text-white/70 mb-6">{t.blog.ctaSubtitle}</p>
          <Link href="/de/contact" className="inline-flex items-center gap-2 bg-[#E8A020] text-white font-bold px-8 py-3 rounded-full hover:bg-[#d4911c] transition-colors">
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
                    <Link href={`/de/blog/${r.slug}`} className="hover:text-[#0F2744]">{r.title}</Link>
                  </h3>
                  <Link href={`/de/blog/${r.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-[#0F2744] hover:text-[#E8A020] mt-2 transition-colors">
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
