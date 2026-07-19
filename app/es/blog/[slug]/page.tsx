import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Tag, ArrowLeft } from "lucide-react";
import { postsEs } from "@/lib/blog-data-es";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return postsEs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = postsEs.find((p) => p.slug === params.slug);
  if (!post) return {};
  const slugEn = (post as any).slugEn || post.slug;
  return {
    title: `${post.title} | Blog INKO Custom Labels`,
    description: post.excerpt,
    alternates: {
      canonical: `https://inkolabels.com/es/blog/${post.slug}`,
      languages: {
        "en": `https://inkolabels.com/blog/${slugEn}`,
        "es": `https://inkolabels.com/es/blog/${post.slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://inkolabels.com/es/blog/${post.slug}`,
      locale: "es_ES",
      type: "article",
    },
  };
}

// Simple markdown-like renderer
function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-[#0F2744] mt-10 mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-bold text-[#0F2744] mt-8 mb-3" style={{ fontFamily: "var(--font-barlow)" }}>
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("| ")) {
      // Table
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      const headers = tableLines[0].split("|").filter(Boolean).map((h) => h.trim());
      const rows = tableLines.slice(2).map((r) => r.split("|").filter(Boolean).map((c) => c.trim()));
      elements.push(
        <div key={`table-${i}`} className="overflow-x-auto my-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#0F2744] text-white">
                {headers.map((h, hi) => (
                  <th key={hi} className="px-4 py-3 text-left font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 border-b border-gray-100">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].startsWith("- ") || lines[i].startsWith("* "))) {
        items.push(lines[i].replace(/^[-*] /, "").replace(/\*\*(.*?)\*\*/g, "$1"));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-inside space-y-2 my-4 text-gray-700">
          {items.map((item, ii) => <li key={ii}>{item}</li>)}
        </ul>
      );
      continue;
    } else if (line.startsWith("1. ") || line.startsWith("2. ")) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\. /, "").replace(/\*\*(.*?)\*\*/g, "$1"));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal list-inside space-y-2 my-4 text-gray-700">
          {items.map((item, ii) => <li key={ii}>{item}</li>)}
        </ol>
      );
      continue;
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-bold text-gray-900 mt-4 mb-2">
          {line.replace(/\*\*/g, "")}
        </p>
      );
    } else if (line.trim() !== "") {
      const formatted = line
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/_(.*?)_/g, "<em>$1</em>");
      elements.push(
        <p key={i} className="text-gray-700 leading-relaxed my-3" dangerouslySetInnerHTML={{ __html: formatted }} />
      );
    }
    i++;
  }
  return elements;
}

export default function BlogPostPageEs({ params }: { params: { slug: string } }) {
  const post = postsEs.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const slugEn = (post as any).slugEn || post.slug;
  const relatedPosts = postsEs.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0F2744] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-6 flex-wrap">
            <Link href="/es" className="hover:text-white transition-colors">Inicio</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/es/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/80 truncate max-w-xs">{post.title}</span>
          </nav>
          {/* Category & Meta */}
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E8A020] bg-[#E8A020]/10 px-3 py-1 rounded-full">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-white/50 text-sm">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="text-white/50 text-sm">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {post.title}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">{post.excerpt}</p>
          {/* Language switcher */}
          <div className="mt-6 flex items-center gap-3">
            <Link href={`/blog/${slugEn}`} className="text-white/50 hover:text-white text-sm transition-colors border border-white/20 px-3 py-1 rounded-full">
              🇬🇧 Read in English
            </Link>
            <span className="text-[#E8A020] text-sm border border-[#E8A020]/40 px-3 py-1 rounded-full">
              🇪🇸 Español
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm font-semibold text-gray-500 mb-3">Etiquetas:</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-sm text-[#0F2744] bg-[#0F2744]/5 border border-[#0F2744]/10 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Back link */}
          <div className="mt-8">
            <Link
              href="/es/blog"
              className="inline-flex items-center gap-2 text-[#0F2744] hover:text-[#E8A020] font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Volver al Blog
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F2744]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase mb-3" style={{ fontFamily: "var(--font-barlow)" }}>
            ¿Listo para Imprimir Tus Etiquetas?
          </h2>
          <p className="text-white/70 mb-6">
            Cotización gratuita en 24 horas. MOQ desde 500 rollos, envío mundial.
          </p>
          <Link
            href="/es/contact"
            className="inline-flex items-center gap-2 bg-[#E8A020] text-white font-bold px-8 py-3 rounded-full hover:bg-[#d4911c] transition-colors"
          >
            Solicitar Cotización <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-[#0F2744] uppercase mb-8" style={{ fontFamily: "var(--font-barlow)" }}>
              Artículos Relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <article key={related.slug} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs font-semibold text-[#E8A020] bg-[#E8A020]/10 px-2 py-0.5 rounded-full">
                    {related.category}
                  </span>
                  <h3 className="font-bold text-gray-900 mt-3 mb-2 leading-snug">
                    <Link href={`/es/blog/${related.slug}`} className="hover:text-[#0F2744] transition-colors">
                      {related.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{related.excerpt}</p>
                  <Link
                    href={`/es/blog/${related.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#0F2744] hover:text-[#E8A020] mt-3 transition-colors"
                  >
                    Leer más <ChevronRight className="w-4 h-4" />
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
