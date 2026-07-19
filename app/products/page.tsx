import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Sparkles, Droplets, FlaskConical, Apple, Wine, Beer, Pill, PawPrint, Home, Car, Factory, Cpu, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Label Products — INKO Custom Labels",
  description: "Browse 40+ custom label types: cosmetic, food, beverage, pet food, supplement, industrial labels. Low MOQ, worldwide shipping.",
};

const allProducts = [
  { icon: Sparkles, title: "Cosmetic & Skincare Labels", desc: "Premium labels for skincare, serums, haircare, and cosmetics. Foil stamping, soft-touch matte, embossed, and spot UV.", tags: ["FOIL STAMPING","SOFT TOUCH","EMBOSSED"], href: "/products/cosmetic-labels", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80" },
  { icon: Droplets, title: "Essential Oil Labels", desc: "Oil-resistant, solvent-resistant labels for essential oils, diffusers, and aromatherapy products.", tags: ["OIL-RESISTANT","SOLVENT-RESISTANT","LUXURY"], href: "/products/essential-oil-labels", img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80" },
  { icon: FlaskConical, title: "Peptide & Small Vial Labels", desc: "Precision labels for small vials, peptide bottles, and pharmaceutical packaging.", tags: ["SMALL FORMAT","PRECISE","PHARMA"], href: "/products/peptide-labels", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80" },
  { icon: Apple, title: "Food Packaging Labels", desc: "FDA-compliant labels for food products, sauces, condiments, and specialty foods.", tags: ["FDA COMPLIANT","WATERPROOF","FREEZER-SAFE"], href: "/products/food-labels", img: "https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?w=600&q=80" },
  { icon: Beer, title: "Beverage Bottle Labels", desc: "Wet-strength labels for bottles, cans, and beverages. Ice bucket and condensation resistant.", tags: ["WET-STRENGTH","ICE BUCKET","CONDENSATION-RESISTANT"], href: "/products/beverage-labels", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { icon: Wine, title: "Wine & Spirits Labels", desc: "Premium wine, spirits, and craft beer labels with luxury finishes and custom shapes.", tags: ["LUXURY","CUSTOM SHAPE","PREMIUM FINISH"], href: "/products/wine-spirits-labels", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80" },
  { icon: Pill, title: "Supplement Labels", desc: "GMP-compliant supplement and nutraceutical labels with precise color matching.", tags: ["GMP COMPLIANT","HIGH-TACK","VARIABLE DATA"], href: "/products/supplement-labels", img: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&q=80" },
  { icon: PawPrint, title: "Pet Food & Pet Care Labels", desc: "Durable, moisture-resistant labels for dry food bags, wet food cans and pet care products.", tags: ["MOISTURE-RESISTANT","HIGH-TACK","BOPP FILM"], href: "/products/pet-food-labels", img: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80" },
  { icon: Home, title: "Household & Cleaning Labels", desc: "Chemical-resistant labels for cleaning products, detergents, and household chemicals.", tags: ["CHEMICAL-RESISTANT","WATERPROOF","HIGH-TACK"], href: "/products/household-labels", img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80" },
  { icon: Car, title: "Automotive & Lubricant Labels", desc: "Oil and solvent-resistant labels for automotive products, lubricants, and fluids.", tags: ["OIL-RESISTANT","SOLVENT-RESISTANT","DURABLE"], href: "/products/automotive-labels", img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80" },
  { icon: Factory, title: "Industrial & Chemical Labels", desc: "Chemical-resistant, high-temperature labels for industrial and chemical applications.", tags: ["CHEMICAL-RESISTANT","HIGH-TEMP","DURABLE"], href: "/products/industrial-labels", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80" },
  { icon: Cpu, title: "Electronics & Battery Labels", desc: "ESD-safe, high-temperature labels for electronics, batteries, and PCB components.", tags: ["ESD-SAFE","HIGH-TEMP","SMALL FORMAT"], href: "/products/electronics-labels", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" },
  { icon: Leaf, title: "Agricultural Product Labels", desc: "UV-resistant, weatherproof labels for agricultural products, seeds, and garden supplies.", tags: ["UV-RESISTANT","WEATHERPROOF","OUTDOOR"], href: "/products/agricultural-labels", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80" },
];

export default function ProductsPage() {
  return (
    <>
      <section className="bg-[#0F2744] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">Product Catalog</div>
          <h1 className="font-display text-6xl font-black text-white uppercase leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            Custom Labels<br /><span className="text-[#E8A020]">For Every Industry</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-lg">From cosmetics and food to pet food and industrial — INKO Custom Labels manufactures precision labels for 9+ industries. Low MOQ, fast turnaround, worldwide B2B shipping.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allProducts.map(p => {
              const Icon = p.icon;
              return (
                <Link key={p.href} href={p.href} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-navy/10 hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-44 overflow-hidden">
                    <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/50 to-transparent" />
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-[#E8A020] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#0F2744]" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#0F2744] text-sm mb-1.5 group-hover:text-[#E8A020] transition-colors">{p.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-3">{p.desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {p.tags.map(t => <span key={t} className="text-[9px] font-bold tracking-wider text-[#0F2744]/60 bg-gray-100 px-1.5 py-0.5 rounded">{t}</span>)}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-16 bg-[#0F2744] rounded-2xl p-8 text-center">
            <h3 className="font-display text-3xl font-black text-white uppercase mb-3" style={{ fontFamily: "var(--font-barlow)" }}>Can&apos;t Find What You Need?</h3>
            <p className="text-white/70 mb-6">We manufacture custom labels for any industry. Tell us your requirements and we&apos;ll create the perfect solution.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-3 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
              Request Custom Quote <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
