import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Sparkles, Droplets, FlaskConical, Apple, Wine, Beer, Pill, PawPrint, Home, Car, Factory, Cpu, Leaf, Award, Clock, Truck, Headphones, FileText, Layers, Zap, Shield, Thermometer, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Label Products - 40+ Types",
  description: "Browse 40+ custom label types for B2B buyers: cosmetic, food, beverage, pet food, supplement, industrial labels. Low MOQ from 500 rolls, worldwide shipping from China.",
  alternates: {
    canonical: "https://inkolabels.com/products",
    languages: {
      "en": "https://inkolabels.com/products",
      "es": "https://inkolabels.com/es/products",
      "fr": "https://inkolabels.com/fr/products",
      "pt": "https://inkolabels.com/pt/products",
      "de": "https://inkolabels.com/de/products",
      "ru": "https://inkolabels.com/ru/products",
      "ja": "https://inkolabels.com/ja/products",
      "ar": "https://inkolabels.com/ar/products",
      "x-default": "https://inkolabels.com/products",
    },
  },
  openGraph: {
    title: "Custom Label Products - 40+ Types | INKO Custom Labels",
    description: "Browse 40+ custom label types for B2B buyers: cosmetic, food, beverage, pet food, supplement, industrial labels. Low MOQ from 500 rolls, worldwide shipping from China.",
    url: "https://inkolabels.com/products",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "INKO Custom Labels - 40+ Custom Label Types for B2B Buyers",
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inkolabels.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://inkolabels.com/products" },
  ],
};

const byIndustry = [
  { icon: Sparkles, title: "Cosmetic & Skincare", desc: "Foil stamping, soft-touch matte, embossed, spot UV", tags: ["FOIL STAMPING","SOFT TOUCH","EMBOSSED"], href: "/products/cosmetic-labels", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80" },
  { icon: Droplets, title: "Essential Oil Labels", desc: "Oil-resistant, solvent-resistant, luxury finishes", tags: ["OIL-RESISTANT","SOLVENT-RESISTANT","LUXURY"], href: "/products/essential-oil-labels", img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80" },
  { icon: FlaskConical, title: "Peptide & Small Vial", desc: "Precision labels for small vials and pharma packaging", tags: ["SMALL FORMAT","PRECISE","PHARMA"], href: "/products/peptide-labels", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80" },
  { icon: Apple, title: "Food Packaging Labels", desc: "FDA-compliant, waterproof, freezer-safe", tags: ["FDA COMPLIANT","WATERPROOF","FREEZER-SAFE"], href: "/products/food-labels", img: "https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?w=600&q=80" },
  { icon: Beer, title: "Beverage Bottle Labels", desc: "Wet-strength, ice bucket, condensation-resistant", tags: ["WET-STRENGTH","ICE BUCKET","CONDENSATION-RESISTANT"], href: "/products/beverage-labels", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { icon: Wine, title: "Wine & Spirits Labels", desc: "Luxury finishes, custom shapes, premium aesthetics", tags: ["LUXURY","CUSTOM SHAPE","PREMIUM FINISH"], href: "/products/wine-spirits-labels", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80" },
  { icon: Pill, title: "Supplement Labels", desc: "GMP-compliant, high-tack, variable data printing", tags: ["GMP COMPLIANT","HIGH-TACK","VARIABLE DATA"], href: "/products/supplement-labels", img: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&q=80" },
  { icon: PawPrint, title: "Pet Food & Pet Care", desc: "Moisture-resistant, high-tack, BOPP film", tags: ["MOISTURE-RESISTANT","HIGH-TACK","BOPP FILM"], href: "/products/pet-food-labels", img: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80" },
  { icon: Home, title: "Household & Cleaning", desc: "Chemical-resistant, waterproof, high-tack", tags: ["CHEMICAL-RESISTANT","WATERPROOF","HIGH-TACK"], href: "/products/household-labels", img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80" },
  { icon: Car, title: "Automotive & Lubricant", desc: "Oil and solvent-resistant, durable", tags: ["OIL-RESISTANT","SOLVENT-RESISTANT","DURABLE"], href: "/products/automotive-labels", img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80" },
  { icon: Factory, title: "Industrial & Chemical", desc: "Chemical-resistant, high-temperature, durable", tags: ["CHEMICAL-RESISTANT","HIGH-TEMP","DURABLE"], href: "/products/industrial-labels", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80" },
  { icon: Cpu, title: "Electronics & Battery", desc: "ESD-safe, high-temperature, small format", tags: ["ESD-SAFE","HIGH-TEMP","SMALL FORMAT"], href: "/products/electronics-labels", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" },
  { icon: Leaf, title: "Agricultural Product", desc: "UV-resistant, weatherproof, outdoor-rated", tags: ["UV-RESISTANT","WEATHERPROOF","OUTDOOR"], href: "/products/agricultural-labels", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80" },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Custom Label Products - INKO Custom Labels",
  "url": "https://inkolabels.com/products",
  "numberOfItems": byIndustry.length,
  "itemListElement": byIndustry.map((p, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": p.title,
    "description": p.desc,
    "url": `https://inkolabels.com${p.href}`,
  })),
};

const faqItems = [
  {
    q: "What is the minimum order quantity (MOQ) for custom labels?",
    a: "INKO Custom Labels offers a low MOQ starting from 500 rolls per design. This makes us ideal for startups, DTC brands, and B2B buyers who need flexibility without large upfront commitments.",
  },
  {
    q: "How long does it take to produce custom labels?",
    a: "Standard production lead time is 7-10 business days after artwork approval. Rush orders and samples can be arranged in 3-5 days. DHL/FedEx worldwide shipping is available.",
  },
  {
    q: "What label materials does INKO offer?",
    a: "We offer 8+ label materials including paper, kraft, white BOPP, clear BOPP, metallic BOPP, PE film, PET film, and thermal transfer labels - covering all major B2B packaging needs.",
  },
  {
    q: "Are INKO labels suitable for food and cosmetic products?",
    a: "Yes. Our food labels are FDA-compliant and our cosmetic labels meet EU/US cosmetic packaging standards. We are ISO 9001:2015 certified with 15+ years of export experience.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

const byMaterial = [
  { icon: FileText, title: "Paper Labels", href: "/products/paper-labels", desc: "Standard & premium paper" },
  { icon: Layers, title: "Kraft & Textured Paper", href: "/products/kraft-labels", desc: "Natural & eco-friendly look" },
  { icon: Sparkles, title: "White BOPP Labels", href: "/products/bopp-labels", desc: "Durable polypropylene film" },
  { icon: Droplets, title: "Clear BOPP Labels", href: "/products/clear-labels", desc: "No-label look effect" },
  { icon: Zap, title: "Metallic BOPP Labels", href: "/products/metallic-labels", desc: "Silver & gold metallic film" },
  { icon: Layers, title: "PE Film Labels", href: "/products/pe-film-labels", desc: "Flexible squeeze containers" },
  { icon: Shield, title: "PET & Durable Film", href: "/products/pet-film-labels", desc: "High-performance film" },
  { icon: Tag, title: "Thermal & Transfer", href: "/products/thermal-labels", desc: "Direct thermal & ribbon" },
];

const specialty = [
  { icon: Droplets, title: "Waterproof Labels", href: "/products/waterproof-labels" },
  { icon: FlaskConical, title: "Oil-Resistant Labels", href: "/products/oil-resistant-labels" },
  { icon: Thermometer, title: "Freezer & Low-Temp", href: "/products/freezer-labels" },
  { icon: Shield, title: "Chemical-Resistant", href: "/products/chemical-resistant-labels" },
  { icon: Zap, title: "High-Temperature", href: "/products/high-temp-labels" },
  { icon: Tag, title: "High-Tack Labels", href: "/products/high-tack-labels" },
  { icon: Layers, title: "Removable Labels", href: "/products/removable-labels" },
  { icon: Shield, title: "Tamper-Evident", href: "/products/tamper-evident-labels" },
  { icon: Droplets, title: "Resealable Wet Wipes", href: "/products/resealable-labels" },
  { icon: Cpu, title: "Barcode & Variable Data", href: "/products/barcode-labels" },
  { icon: Tag, title: "Custom Roll Labels", href: "/products/roll-labels" },
  { icon: Sparkles, title: "Digital Short-Run", href: "/products/short-run-labels" },
];

export default function ProductsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#0F2744] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-white/50 text-xs mb-6">
            <Link href="/" className="hover:text-[#E8A020] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/80">Products</span>
          </nav>
          <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">Product Catalog</div>
          <h1 className="font-display text-5xl lg:text-6xl font-black text-white uppercase leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            Custom Labels<br /><span className="text-[#E8A020]">For Every Industry</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-lg mb-8">
            From cosmetics and food to pet food and industrial - INKO Custom Labels manufactures precision labels for 13+ industries. Low MOQ from 500 rolls, fast turnaround, worldwide B2B shipping.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]" style={{ fontFamily: "var(--font-barlow)" }}>
              GET A QUOTE <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200">
              REQUEST FREE SAMPLE
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#E8A020] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: Award, label: "ISO 9001 Certified" },
              { icon: Clock, label: "MOQ from 500 Rolls" },
              { icon: Truck, label: "DHL / FedEx Worldwide" },
              { icon: Headphones, label: "24h Quote Response" },
            ].map(({ icon: TrustIcon, label }) => (
              <div key={label} className="flex items-center justify-center gap-2">
                <TrustIcon className="w-4 h-4 text-[#0F2744]" />
                <span className="text-[#0F2744] text-xs font-bold uppercase tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By Industry */}
      <section className="py-20 bg-white" aria-labelledby="by-industry-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-2">By Industry</div>
            <h2 id="by-industry-heading" className="font-display text-3xl font-black text-[#0F2744] uppercase" style={{ fontFamily: "var(--font-barlow)" }}>
              Industry-Specific Label Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {byIndustry.map(p => {
              const Icon = p.icon;
              return (
                <Link key={p.href} href={p.href} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-navy/10 hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-44 overflow-hidden">
                    <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/60 to-transparent" />
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
        </div>
      </section>

      {/* By Material */}
      <section className="py-16 bg-gray-50 border-t border-gray-100" aria-labelledby="by-material-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-2">By Material</div>
            <h2 id="by-material-heading" className="font-display text-3xl font-black text-[#0F2744] uppercase" style={{ fontFamily: "var(--font-barlow)" }}>
              Label Materials We Work With
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {byMaterial.map(m => {
              const Icon = m.icon;
              return (
                <Link key={m.href} href={m.href} className="group bg-white rounded-xl p-4 border border-gray-200 hover:border-[#E8A020] hover:shadow-md transition-all duration-200 flex flex-col items-center text-center gap-3">
                  <div className="w-10 h-10 bg-[#0F2744]/5 group-hover:bg-[#E8A020]/10 rounded-full flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5 text-[#0F2744] group-hover:text-[#E8A020] transition-colors" />
                  </div>
                  <div>
                    <div className="text-[#0F2744] text-xs font-semibold leading-tight mb-1">{m.title}</div>
                    <div className="text-gray-400 text-[10px]">{m.desc}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialty */}
      <section className="py-16 bg-white border-t border-gray-100" aria-labelledby="specialty-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-2">Performance &amp; Specialty</div>
            <h2 id="specialty-heading" className="font-display text-3xl font-black text-[#0F2744] uppercase" style={{ fontFamily: "var(--font-barlow)" }}>
              Specialty Label Solutions
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {specialty.map(s => {
              const Icon = s.icon;
              return (
                <Link key={s.href} href={s.href} className="group bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-[#E8A020] hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col items-center text-center gap-2">
                  <div className="w-9 h-9 bg-[#0F2744]/5 group-hover:bg-[#E8A020]/10 rounded-full flex items-center justify-center transition-colors">
                    <Icon className="w-4 h-4 text-[#0F2744] group-hover:text-[#E8A020] transition-colors" />
                  </div>
                  <span className="text-[#0F2744] text-xs font-semibold leading-tight">{s.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-2">FAQ</div>
          <h2 id="faq-heading" className="font-display text-3xl font-black text-[#0F2744] uppercase mb-8" style={{ fontFamily: "var(--font-barlow)" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden group">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-[#0F2744] text-sm hover:text-[#E8A020] transition-colors list-none">
                  {faq.q}
                  <ChevronRight className="w-4 h-4 shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F2744]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-black text-white uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            Can&apos;t Find What You Need?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            We manufacture custom labels for any industry and application. Tell us your requirements and we&apos;ll create the perfect solution.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]" style={{ fontFamily: "var(--font-barlow)" }}>
              REQUEST CUSTOM QUOTE <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200">
              REQUEST FREE SAMPLE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
