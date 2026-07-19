import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Award, Users, Globe, Factory } from "lucide-react";
import { getTranslations } from "@/lib/i18n";

const t = getTranslations("ja");

export const metadata: Metadata = {
  title: `${t.nav.about} | INKO Custom Labels`,
  description: t.about.heroSubtitle,
  alternates: { canonical: "https://inkolabels.com/ja/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#0F2744] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">{t.about.heroTag}</div>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white uppercase leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {t.about.heroTitle}<br /><span className="text-[#E8A020]">{t.about.heroTitleAccent}</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-lg">{t.about.heroSubtitle}</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-black text-[#0F2744] uppercase mb-6" style={{ fontFamily: "var(--font-barlow)" }}>{t.about.storyTitle}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{t.about.storyText}</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, label: "ISO 9001:2015" },
                  { icon: Users, label: "500+ Clients" },
                  { icon: Globe, label: "60+ Countries" },
                  { icon: Factory, label: "50M+ Labels/Month" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <item.icon className="w-6 h-6 text-[#E8A020]" />
                    <span className="font-semibold text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0F2744] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">{t.about.certTitle}</h3>
              <ul className="space-y-3">
                {["ISO 9001:2015 Quality Management", "SGS Certified Factory", "FDA Compliant Materials", "EU REACH Compliant", "Sedex Member"].map((cert) => (
                  <li key={cert} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#E8A020] rounded-full flex-shrink-0" />
                    <span className="text-white/80">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#0F2744]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>{t.about.ctaTitle}</h2>
          <p className="text-white/70 mb-6">{t.about.ctaSubtitle}</p>
          <Link href="/ja/contact" className="inline-flex items-center gap-2 bg-[#E8A020] text-white font-bold px-8 py-3 rounded-full hover:bg-[#d4911c] transition-colors">
            {t.about.ctaButton} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
