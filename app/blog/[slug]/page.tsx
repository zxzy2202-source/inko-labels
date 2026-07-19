import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Tag, ArrowLeft } from "lucide-react";
import { posts } from "@/lib/blog-data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | INKO Custom Labels Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0F2744] pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-white/50 hover:text-[#E8A020] text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#E8A020] text-[#0F2744] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-white/40 text-xs flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
            <span className="text-white/40 text-xs">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {post.title}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2 mt-5">
            {post.tags.map(tag => (
              <span key={tag} className="flex items-center gap-1 text-xs font-medium text-white/50 bg-white/10 px-2.5 py-1 rounded-full">
                <Tag className="w-3 h-3" />{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2 prose prose-lg max-w-none
              prose-headings:font-black prose-headings:text-[#0F2744] prose-headings:uppercase
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-[#E8A020]/30 prose-h2:pb-2
              prose-h3:text-lg prose-h3:text-[#E8A020] prose-h3:mt-6 prose-h3:mb-2
              prose-p:text-gray-600 prose-p:leading-relaxed
              prose-li:text-gray-600
              prose-strong:text-[#0F2744]
              prose-table:text-sm prose-th:bg-[#0F2744] prose-th:text-white prose-th:font-bold prose-td:border prose-td:border-gray-200 prose-td:px-3 prose-td:py-2
              prose-a:text-[#E8A020] prose-a:no-underline hover:prose-a:underline">
              <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>').replace(/## (.*)/g, '<h2>$1</h2>').replace(/### (.*)/g, '<h3>$1</h3>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/- (.*)/g, '<li>$1</li>') }} />
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA Card */}
              <div className="bg-[#0F2744] rounded-2xl p-6 text-center">
                <div className="text-[#E8A020] text-xs font-bold uppercase tracking-wider mb-2">Get a Free Sample</div>
                <h3 className="text-white font-black text-lg uppercase mb-3" style={{ fontFamily: "var(--font-barlow)" }}>Ready to Order?</h3>
                <p className="text-white/60 text-sm mb-4">Quote within 24 hours. No commitment required.</p>
                <Link href="/contact" className="block w-full bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold py-3 rounded text-sm uppercase tracking-wide transition-all duration-200 text-center" style={{ fontFamily: "var(--font-barlow)" }}>
                  Request Sample <ChevronRight className="inline w-4 h-4" />
                </Link>
              </div>

              {/* Related Posts */}
              <div>
                <div className="text-[#0F2744] font-bold text-sm uppercase tracking-wider mb-3 border-b border-gray-100 pb-2">Related Articles</div>
                <div className="space-y-3">
                  {related.map(r => (
                    <Link key={r.slug} href={`/blog/${r.slug}`}
                      className="group block p-3 rounded-xl hover:bg-amber-50 transition-colors">
                      <span className="text-[#E8A020] text-[10px] font-bold uppercase tracking-wider">{r.category}</span>
                      <p className="text-[#0F2744] text-sm font-medium leading-snug mt-0.5 group-hover:text-[#E8A020] transition-colors">{r.title}</p>
                      <span className="text-gray-400 text-xs">{r.readTime}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#0F2744] hover:text-[#E8A020] font-semibold text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Articles
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0F2744] hover:bg-[#1a3a5c] text-white font-bold px-5 py-2.5 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
            Get a Quote <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
