import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getTranslations } from "@/lib/i18n";

const t = getTranslations("ar");

export const metadata: Metadata = {
  title: `${t.nav.products} | INKO Custom Labels`,
  description: t.products.heroSubtitle,
  alternates: { canonical: "https://inkolabels.com/ar/products" },
};

const industryProducts = [
  { name: "Cosmetic Labels", slug: "cosmetic-labels" },
  { name: "Food Labels", slug: "food-labels" },
  { name: "Beverage Labels", slug: "beverage-labels" },
  { name: "Pet Food Labels", slug: "pet-food-labels" },
  { name: "Supplement Labels", slug: "supplement-labels" },
  { name: "Essential Oil Labels", slug: "essential-oil-labels" },
  { name: "Wine & Spirits Labels", slug: "wine-spirits-labels" },
  { name: "Industrial Labels", slug: "industrial-labels" },
  { name: "Chemical Labels", slug: "chemical-labels" },
  { name: "Pharmaceutical Labels", slug: "pharmaceutical-labels" },
  { name: "Candle Labels", slug: "candle-labels" },
  { name: "Cannabis Labels", slug: "cannabis-labels" },
  { name: "Automotive Labels", slug: "automotive-labels" },
];

const materialProducts = [
  { name: "Paper Labels", slug: "paper-labels" },
  { name: "BOPP Labels", slug: "bopp-labels" },
  { name: "Clear Labels", slug: "clear-labels" },
  { name: "Metallic Labels", slug: "metallic-labels" },
  { name: "Waterproof Labels", slug: "waterproof-labels" },
  { name: "PET Film Labels", slug: "pet-film-labels" },
  { name: "Kraft Paper Labels", slug: "kraft-paper-labels" },
  { name: "Holographic Labels", slug: "holographic-labels" },
];

export default function ProductsPage() {
  return (
    <>
      <section className="bg-[#0F2744] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">{t.products.heroTag}</div>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white uppercase leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {t.products.heroTitle}<br /><span className="text-[#E8A020]">{t.products.heroTitleAccent}</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-lg">{t.products.heroSubtitle}</p>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-[#0F2744] uppercase mb-8" style={{ fontFamily: "var(--font-barlow)" }}>{t.products.byIndustryTitle}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industryProducts.map((p) => (
              <Link key={p.slug} href={`/ar/products/${p.slug}`} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md hover:border-[#E8A020] border border-transparent transition-all">
                <p className="font-semibold text-gray-800 text-sm">{p.name}</p>
                <ChevronRight className="w-4 h-4 text-[#E8A020] mx-auto mt-2" />
              </Link>
            ))}
          </div>
          <h2 className="text-2xl font-black text-[#0F2744] uppercase mb-8 mt-16" style={{ fontFamily: "var(--font-barlow)" }}>{t.products.byMaterialTitle}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {materialProducts.map((p) => (
              <Link key={p.slug} href={`/ar/products/${p.slug}`} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md hover:border-[#E8A020] border border-transparent transition-all">
                <p className="font-semibold text-gray-800 text-sm">{p.name}</p>
                <ChevronRight className="w-4 h-4 text-[#E8A020] mx-auto mt-2" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
