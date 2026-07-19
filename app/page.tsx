import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ChevronRight, Star, Award, Globe, Sparkles, Apple, PawPrint, Droplets, Pill, Factory, Shield, Zap, Layers, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "INKO Custom Labels — B2B Label Manufacturer China",
  description: "Professional B2B custom label manufacturer in China. Cosmetic, food, beverage, pet food labels. ISO 9001, Low MOQ 500 rolls, 60+ countries served.",
};

const stats = [
  { value: "15+", label: "Years Export Experience" },
  { value: "60+", label: "Countries Served" },
  { value: "500", label: "Min. Order (Rolls)" },
  { value: "24h", label: "Quote Response Time" },
];

const products = [
  { icon: Sparkles, title: "Cosmetic & Skincare Labels", desc: "Foil stamping, soft-touch matte, embossed, spot UV for premium beauty brands.", tags: ["FOIL STAMPING","SOFT TOUCH","EMBOSSED"], href: "/products/cosmetic-labels", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80" },
  { icon: Droplets, title: "Essential Oil Labels", desc: "Oil-resistant, solvent-resistant labels for essential oils and aromatherapy.", tags: ["OIL-RESISTANT","SOLVENT-RESISTANT","LUXURY"], href: "/products/essential-oil-labels", img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80" },
  { icon: Apple, title: "Food Packaging Labels", desc: "FDA-compliant labels for food products, sauces, condiments and specialty foods.", tags: ["FDA COMPLIANT","WATERPROOF","FREEZER-SAFE"], href: "/products/food-labels", img: "https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?w=600&q=80" },
  { icon: Pill, title: "Supplement Labels", desc: "GMP-compliant supplement and nutraceutical labels with precise color matching.", tags: ["GMP COMPLIANT","HIGH-TACK","VARIABLE DATA"], href: "/products/supplement-labels", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80" },
  { icon: PawPrint, title: "Pet Food & Pet Care Labels", desc: "Durable, moisture-resistant labels for dry food bags, wet food cans and treats.", tags: ["MOISTURE-RESISTANT","HIGH-TACK","BOPP FILM"], href: "/products/pet-food-labels", img: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80" },
  { icon: Factory, title: "Industrial & Chemical Labels", desc: "Chemical-resistant, high-temperature labels for industrial and automotive use.", tags: ["CHEMICAL-RESISTANT","HIGH-TEMP","DURABLE"], href: "/products/industrial-labels", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80" },
];

const whyUs = [
  { icon: Layers, title: "7-Color Resin Plate Flexo Press", desc: "Resin-plate 7-color flexo press with inline lamination and inline die-cutting — PANTONE matching, extended gamut, no secondary pass needed." },
  { icon: Package, title: "Adhesive-Side (Back) Printing", desc: "Back-print on clear BOPP labels: graphics printed on the adhesive face create a premium no-label look with built-in scratch-proof protection." },
  { icon: Zap, title: "Foil Stamping + Die-Cutting High-Speed Press", desc: "Dedicated high-speed foil stamping and die-cutting machine — hot foil, cold foil, and precision custom shapes in a single high-speed pass." },
  { icon: Shield, title: "Hot Lamination Machine", desc: "Thermal laminator for heavy-duty protective coatings and premium foil-finish overlaminates on cosmetic, wine and luxury labels." },
  { icon: Award, title: "2× Vision Inspection + Slitting Lines", desc: "Two inspection-slitting combo machines: 100% vision defect detection plus precision roll slitting to your exact width, length and core spec." },
  { icon: Globe, title: "Low MOQ · Worldwide Shipping", desc: "500 rolls minimum per design. Sample in 3–5 days, production in 7–10 days. DHL / FedEx / sea freight to 60+ countries." },
];

const testimonials = [
  { name: "Sarah M.", company: "Natural Beauty Co., USA", text: "INKO delivered exactly what we needed — premium foil labels at a fraction of the cost. Fast turnaround, great communication.", rating: 5 },
  { name: "Marco R.", company: "Gourmet Foods Ltd., Italy", text: "We've been ordering food labels from INKO for 3 years. Consistent quality, on-time delivery, and they always accommodate our custom requests.", rating: 5 },
  { name: "David K.", company: "PetNaturals, Australia", text: "The pet food labels are exactly what we wanted. Waterproof, vibrant colors, and the MOQ is perfect for our growing brand.", rating: 5 },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image src="/hero-banner.jpg" alt="INKO Custom Labels Factory" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2744]/90 via-[#0F2744]/70 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/90 text-xs font-medium tracking-wider uppercase">B2B Custom Label Manufacturer · China</span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none mb-6 uppercase tracking-tight" style={{ fontFamily: "var(--font-barlow)" }}>
              EVERY LABEL.<br /><span className="text-[#E8A020]">EXACTLY RIGHT.</span>
            </h1>
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">INKO Custom Labels — professional B2B label manufacturer in China. Cosmetic, food, beverage, pet food, and supplement labels. Low MOQ, fast turnaround, worldwide shipping.</p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]" style={{ fontFamily: "var(--font-barlow)" }}>
                Request Free Sample <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="/products" className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:bg-white/10" style={{ fontFamily: "var(--font-barlow)" }}>
                View Products <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-white/70">
              {["ISO 9001 Certified","15+ Years Export","60+ Countries","Low MOQ 500 Rolls"].map(t => (
                <div key={t} className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#E8A020]" />{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E8A020] py-4 overflow-hidden">
        <div className="ticker-wrap">
          <div className="ticker-inner">
            {[...stats, ...stats].map((s, i) => (
              <div key={i} className="flex items-center gap-3 px-10 flex-shrink-0">
                <span className="text-3xl font-black text-[#0F2744]" style={{ fontFamily: "var(--font-barlow)" }}>{s.value}</span>
                <span className="text-[#0F2744]/70 text-sm font-medium uppercase tracking-wide">{s.label}</span>
                <span className="text-[#0F2744]/30 text-2xl">·</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">Product Catalog</div>
            <h2 className="text-5xl font-black text-[#0F2744] uppercase leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>Custom Labels<br /><span className="text-[#E8A020]">For Every Industry</span></h2>
            <p className="text-gray-600 max-w-xl">From cosmetics and food to pet food and industrial — INKO manufactures precision labels for 9+ industries.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => {
              const Icon = p.icon;
              return (
                <Link key={p.href} href={p.href} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/60 to-transparent" />
                    <div className="absolute top-4 left-4 w-9 h-9 rounded-lg bg-[#E8A020] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#0F2744]" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#0F2744] text-base mb-2 group-hover:text-[#E8A020] transition-colors">{p.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5">{p.tags.map(t => <span key={t} className="text-[10px] font-bold tracking-wider text-[#0F2744]/60 bg-gray-100 px-2 py-0.5 rounded">{t}</span>)}</div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/products" className="inline-flex items-center gap-2 border-2 border-[#0F2744] text-[#0F2744] hover:bg-[#0F2744] hover:text-white font-bold px-8 py-3 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
              View All 40+ Products <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0F2744]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">Why Choose INKO</div>
            <h2 className="text-5xl font-black text-white uppercase" style={{ fontFamily: "var(--font-barlow)" }}>Built for Global B2B Buyers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(w => { const Icon = w.icon; return (
              <div key={w.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#E8A020]/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#E8A020]/20 flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-[#E8A020]" /></div>
                <h3 className="text-white font-bold text-base mb-2">{w.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ); })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">Our Factory</div>
              <h2 className="text-5xl font-black text-[#0F2744] uppercase leading-tight mb-6" style={{ fontFamily: "var(--font-barlow)" }}>Precision Manufacturing<br /><span className="text-[#E8A020]">Xi&apos;an, China</span></h2>
              <p className="text-gray-600 leading-relaxed mb-6">Located in Xi&apos;an, Shaanxi Province, our facility is equipped with a resin-plate 7-color flexo press (inline lamination + inline die-cutting), a foil stamping & die-cutting high-speed press, a hot lamination machine, and two vision-inspection & slitting combo lines.</p>
              <ul className="space-y-3 mb-8">{["Resin plate 7-color flexo press — inline lamination + inline die-cutting","Adhesive-side (back-print) for no-label-look clear BOPP labels","Foil stamping + die-cutting high-speed press (hot & cold foil)","Hot lamination machine — thermal protective & foil overlaminates","2× vision inspection + slitting combo (100% defect detection)","ISO 9001:2015 certified quality management system"].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-[#E8A020] flex-shrink-0 mt-0.5" />{item}</li>
              ))}</ul>
              <Link href="/about" className="inline-flex items-center gap-2 bg-[#0F2744] hover:bg-[#1a3a5c] text-white font-bold px-6 py-3 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>Learn More <ChevronRight className="w-4 h-4" /></Link>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/factory.jpg" alt="INKO Factory" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">Client Reviews</div>
            <h2 className="text-5xl font-black text-[#0F2744] uppercase" style={{ fontFamily: "var(--font-barlow)" }}>Trusted by Global Brands</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-1 mb-4">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-[#E8A020] text-[#E8A020]" />)}</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div><div className="font-bold text-[#0F2744] text-sm">{t.name}</div><div className="text-gray-500 text-xs">{t.company}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#E8A020]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black text-[#0F2744] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>Ready to Order Your Labels?</h2>
          <p className="text-[#0F2744]/70 text-lg mb-8">Get a free sample kit and quote within 24 hours. No commitment required.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0F2744] hover:bg-[#1a3a5c] text-white font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
              Request Free Sample <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/products" className="inline-flex items-center gap-2 border-2 border-[#0F2744]/40 hover:border-[#0F2744] text-[#0F2744] font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
              Browse Products <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
