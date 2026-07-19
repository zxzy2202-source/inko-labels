import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Tag } from "lucide-react";
import { posts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog — Label Printing Tips & Industry Insights | INKO Custom Labels",
  description: "Expert articles on custom label printing, materials, finishes and B2B packaging trends. Learn how to choose the right labels for your products.",
};

// posts imported from lib/blog-data

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0F2744] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">Knowledge Hub</div>
          <h1 className="font-display text-6xl font-black text-white uppercase leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            Label Printing<br /><span className="text-[#E8A020]">Insights & Guides</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-lg">
            Expert articles on label materials, printing techniques, industry regulations, and B2B sourcing tips — written for brand owners and packaging buyers.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                {/* Category Banner */}
                <div className="bg-[#0F2744] px-5 py-3 flex items-center justify-between">
                  <span className="text-[#E8A020] text-xs font-bold uppercase tracking-wider">{post.category}</span>
                  <span className="text-white/50 text-xs flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-[#0F2744] font-bold text-lg leading-snug mb-3 group-hover:text-[#E8A020] transition-colors">{post.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="flex items-center gap-1 text-[10px] font-bold tracking-wider text-[#0F2744]/50 bg-gray-100 px-2 py-0.5 rounded">
                        <Tag className="w-2.5 h-2.5" />{tag}
                      </span>
                    ))}
                  </div>
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-gray-400 text-xs">{post.date}</span>
                    <span className="flex items-center gap-1 text-[#E8A020] text-xs font-bold group-hover:gap-2 transition-all">
                      Read More <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F2744]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white uppercase mb-3" style={{ fontFamily: "var(--font-barlow)" }}>
            Ready to Order Your Labels?
          </h2>
          <p className="text-white/60 mb-6">Get a free sample and quote within 24 hours.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-3 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
            Request Free Sample <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
