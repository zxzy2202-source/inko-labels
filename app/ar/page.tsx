import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Star, Shield, Clock, Globe, Package } from "lucide-react";
import { getTranslations } from "@/lib/i18n";

const t = getTranslations("ar");

export const metadata: Metadata = {
  title: t.siteTitle,
  description: t.siteDescription,
  alternates: {
    canonical: "https://inkolabels.com/ar",
    languages: {
      "en": "https://inkolabels.com",
      "es": "https://inkolabels.com/es",
      "fr": "https://inkolabels.com/fr",
      "pt": "https://inkolabels.com/pt",
      "de": "https://inkolabels.com/de",
      "ru": "https://inkolabels.com/ru",
      "ja": "https://inkolabels.com/ja",
      "ar": "https://inkolabels.com/ar",
    },
  },
  openGraph: {
    title: t.siteTitle,
    description: t.siteDescription,
    url: "https://inkolabels.com/ar",
    locale: "ar",
  },
};

const productCategories = [
  { name: "Cosmetic Labels", href: "/ar/products/cosmetic-labels", img: "/manus-storage/product-cosmetic-labels_3696937e.jpg" },
  { name: "Food Labels", href: "/ar/products/food-labels", img: "/manus-storage/product-food-labels_1701c8ab.jpg" },
  { name: "Beverage Labels", href: "/ar/products/beverage-labels", img: "/manus-storage/product-hero-beverage.jpg" },
  { name: "Pet Food Labels", href: "/ar/products/pet-food-labels", img: "/manus-storage/product-petfood-labels_ecc6466e.jpg" },
  { name: "Supplement Labels", href: "/ar/products/supplement-labels", img: "/manus-storage/product-supplement-labels_0b224cc0.jpg" },
  { name: "Essential Oil Labels", href: "/ar/products/essential-oil-labels", img: "/manus-storage/product-essential-oil-labels_ba7458ab.jpg" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0F2744] pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-4">{t.home.heroTag}</div>
              <h1 className="font-display text-5xl md:text-7xl font-black text-white uppercase leading-tight mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
                {t.home.heroTitle}<br /><span className="text-[#E8A020]">{t.home.heroTitleAccent}</span>
              </h1>
              <p className="text-white/70 text-lg mb-8 max-w-lg">{t.home.heroSubtitle}</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/ar/contact" className="inline-flex items-center gap-2 bg-[#E8A020] text-white font-bold px-8 py-4 rounded-full hover:bg-[#d4911c] transition-colors text-lg">
                  {t.home.heroCta1} <ChevronRight className="w-5 h-5" />
                </Link>
                <Link href="/ar/products" className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full hover:border-white transition-colors text-lg">
                  {t.home.heroCta2}
                </Link>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
              <Image src="/manus-storage/hero-labels-showcase_bfe5db00.jpg" alt="Custom Labels Showcase" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#E8A020] py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-white font-bold text-sm">
            <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> {t.home.trustBar.iso}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {t.home.trustBar.quote}</span>
            <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> {t.home.trustBar.shipping}</span>
            <span className="flex items-center gap-2"><Package className="w-4 h-4" /> {t.home.trustBar.moq}</span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-[#0F2744] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>{t.home.productsTitle}</h2>
            <p className="text-gray-500 text-lg">{t.home.productsSubtitle}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {productCategories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="group relative rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-lg transition-all">
                <Image src={cat.img} alt={cat.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg leading-tight">{cat.name}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/ar/products" className="inline-flex items-center gap-2 bg-[#0F2744] text-white font-bold px-8 py-3 rounded-full hover:bg-[#1a3a5c] transition-colors">
              {t.home.heroCta2} <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Factory Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image src="/manus-storage/factory-production-line_3b0322fe.jpg" alt="Factory" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-4xl font-black text-[#0F2744] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>{t.home.factoryTitle}</h2>
              <p className="text-gray-500 text-lg mb-8">{t.home.factorySubtitle}</p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: "15+", label: t.home.statsYears },
                  { num: "500+", label: t.home.statsClients },
                  { num: "2M+", label: t.home.statsOrders },
                  { num: "60+", label: t.home.statsCountries },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-3xl font-black text-[#E8A020]">{stat.num}</div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0F2744]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>{t.home.ctaTitle}</h2>
          <p className="text-white/70 text-lg mb-8">{t.home.ctaSubtitle}</p>
          <Link href="/ar/contact" className="inline-flex items-center gap-2 bg-[#E8A020] text-white font-bold px-10 py-4 rounded-full hover:bg-[#d4911c] transition-colors text-lg">
            {t.home.ctaButton} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
