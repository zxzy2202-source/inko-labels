import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2, Sparkles, Droplets, FlaskConical, Apple, Wine, Beer, Pill, PawPrint, Home, Car, Factory, Cpu, Leaf } from "lucide-react";

const allProducts = [
  {
    slug: "cosmetic-labels",
    icon: Sparkles,
    title: "Cosmetic & Skincare Labels",
    subtitle: "Premium labels for beauty and personal care brands",
    desc: "Premium labels for skincare, serums, haircare, and cosmetics. Foil stamping, soft-touch matte, embossed, and spot UV finishes available.",
    longDesc: "INKO Custom Labels specializes in high-end cosmetic and skincare label printing. Our labels are designed to enhance your brand's shelf presence with premium finishes including hot foil stamping, soft-touch matte lamination, embossing, and spot UV coating. We work with leading cosmetic brands worldwide, delivering consistent color accuracy and luxury aesthetics at competitive B2B pricing.",
    tags: ["FOIL STAMPING", "SOFT TOUCH", "EMBOSSED", "SPOT UV"],
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80",
    materials: ["White BOPP", "Clear BOPP", "Metallic BOPP", "Coated Paper"],
    finishes: ["Gloss Lamination", "Matte Lamination", "Soft-Touch Matte", "Hot Foil Stamping", "Embossing", "Spot UV"],
    features: [
      "FDA-compliant materials for cosmetic contact",
      "PANTONE color matching for brand consistency",
      "Foil stamping in gold, silver, rose gold, holographic",
      "Soft-touch matte for premium tactile feel",
      "Waterproof and moisture-resistant options",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Skincare", "Haircare", "Makeup", "Fragrance", "Body Care"],
  },
  {
    slug: "essential-oil-labels",
    icon: Droplets,
    title: "Essential Oil Labels",
    subtitle: "Oil-resistant labels for aromatherapy and wellness brands",
    desc: "Oil-resistant, solvent-resistant labels for essential oils, diffusers, and aromatherapy products.",
    longDesc: "Essential oil labels face unique challenges: they must resist oil contamination, maintain adhesion on glass and aluminum, and retain their appearance over time. INKO's essential oil labels use specially formulated oil-resistant adhesives and durable film substrates to ensure your labels stay pristine throughout the product's life.",
    tags: ["OIL-RESISTANT", "SOLVENT-RESISTANT", "LUXURY", "GLASS-ADHESION"],
    img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1200&q=80",
    materials: ["Clear BOPP", "White BOPP", "PET Film"],
    finishes: ["Matte Lamination", "Gloss Lamination", "Back-Print (No-Label Look)"],
    features: [
      "Oil and solvent-resistant adhesive formulation",
      "Strong adhesion to glass, aluminum, and plastic",
      "Back-printing for no-label-look clear bottles",
      "Small format printing for 5ml–30ml vials",
      "Luxury finishes: foil, emboss, soft-touch",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Aromatherapy", "Wellness", "Spa", "Natural Beauty"],
  },
  {
    slug: "peptide-labels",
    icon: FlaskConical,
    title: "Peptide & Small Vial Labels",
    subtitle: "Precision labels for pharmaceutical and research packaging",
    desc: "Precision labels for small vials, peptide bottles, and pharmaceutical packaging.",
    longDesc: "Small vial and peptide labels require exceptional precision in printing and die-cutting. INKO's specialized small-format printing capabilities allow us to produce labels as small as 10mm × 30mm with full-color printing, barcodes, and serialized variable data. Our labels comply with pharmaceutical industry standards.",
    tags: ["SMALL FORMAT", "PRECISE", "PHARMA", "VARIABLE DATA"],
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80",
    materials: ["White BOPP", "PET Film", "Coated Paper"],
    finishes: ["Gloss Lamination", "Matte Lamination"],
    features: [
      "Minimum label size: 10mm × 30mm",
      "High-resolution printing for small text and barcodes",
      "Serialized variable data printing (QR, barcode, lot#)",
      "Cryogenic-grade adhesive for frozen storage",
      "Chemical-resistant for solvent environments",
      "GMP-compatible materials",
    ],
    industries: ["Pharmaceutical", "Biotech", "Research", "Nutraceutical"],
  },
  {
    slug: "food-labels",
    icon: Apple,
    title: "Food Packaging Labels",
    subtitle: "FDA-compliant labels for food and specialty food brands",
    desc: "FDA-compliant labels for food products, sauces, condiments, and specialty foods.",
    longDesc: "Food labels must meet strict regulatory requirements while standing out on crowded retail shelves. INKO produces FDA-compliant food labels using food-safe inks and adhesives, with options for waterproof, freezer-grade, and high-moisture-resistant constructions.",
    tags: ["FDA COMPLIANT", "WATERPROOF", "FREEZER-SAFE", "FOOD-SAFE"],
    img: "https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?w=1200&q=80",
    materials: ["White BOPP", "Clear BOPP", "Coated Paper", "Kraft Paper"],
    finishes: ["Gloss Lamination", "Matte Lamination", "Varnish"],
    features: [
      "FDA-compliant food-contact materials",
      "Waterproof and moisture-resistant construction",
      "Freezer-grade adhesive for cold storage",
      "Grease and oil-resistant surface",
      "Vibrant color reproduction for appetite appeal",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Sauces & Condiments", "Snacks", "Organic Food", "Specialty Food", "Beverages"],
  },
  {
    slug: "beverage-labels",
    icon: Beer,
    title: "Beverage Bottle Labels",
    subtitle: "Wet-strength labels for bottles, cans, and beverages",
    desc: "Wet-strength labels for bottles, cans, and beverages. Ice bucket and condensation resistant.",
    longDesc: "Beverage labels endure some of the harshest conditions: ice buckets, refrigeration, condensation, and handling. INKO's beverage labels use wet-strength adhesives and durable film substrates that maintain adhesion and appearance even when submerged in ice water.",
    tags: ["WET-STRENGTH", "ICE BUCKET", "CONDENSATION-RESISTANT", "WRAP-AROUND"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    materials: ["White BOPP", "Clear BOPP", "PE Film"],
    finishes: ["Gloss Lamination", "Matte Lamination"],
    features: [
      "Wet-strength adhesive for ice bucket performance",
      "Condensation-resistant surface coating",
      "Wrap-around label capability",
      "High-clarity printing for premium brand presentation",
      "Suitable for glass, PET, and aluminum containers",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Craft Beer", "Soft Drinks", "Energy Drinks", "Juice", "Water"],
  },
  {
    slug: "wine-spirits-labels",
    icon: Wine,
    title: "Wine & Spirits Labels",
    subtitle: "Luxury labels for wine, spirits, and craft beverages",
    desc: "Premium wine, spirits, and craft beer labels with luxury finishes and custom shapes.",
    longDesc: "Wine and spirits labels are a statement of brand identity. INKO produces luxury wine and spirits labels with premium finishes including hot foil stamping, embossing, and specialty papers. Our custom die-cutting capabilities allow for unique label shapes that set your brand apart.",
    tags: ["LUXURY", "CUSTOM SHAPE", "PREMIUM FINISH", "FOIL STAMPING"],
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80",
    materials: ["Coated Paper", "Metallic BOPP", "Kraft Paper", "Textured Paper"],
    finishes: ["Hot Foil Stamping", "Embossing", "Soft-Touch Matte", "Spot UV", "Gloss Lamination"],
    features: [
      "Luxury paper and film substrates",
      "Hot foil stamping in gold, silver, and custom colors",
      "Embossing and debossing for tactile premium feel",
      "Custom die shapes: oval, shield, unique contours",
      "Wet-strength options for ice bucket performance",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Wine", "Whisky & Spirits", "Craft Beer", "Champagne", "Liqueur"],
  },
  {
    slug: "supplement-labels",
    icon: Pill,
    title: "Supplement Labels",
    subtitle: "GMP-compliant labels for nutraceuticals and supplements",
    desc: "GMP-compliant supplement and nutraceutical labels with precise color matching.",
    longDesc: "Supplement labels must communicate trust, compliance, and brand quality. INKO produces GMP-compatible supplement labels with precise color matching, variable data printing for lot numbers and expiry dates, and high-tack adhesives for HDPE and PET containers.",
    tags: ["GMP COMPLIANT", "HIGH-TACK", "VARIABLE DATA", "HDPE ADHESION"],
    img: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=1200&q=80",
    materials: ["White BOPP", "Clear BOPP", "Coated Paper"],
    finishes: ["Gloss Lamination", "Matte Lamination", "Soft-Touch Matte"],
    features: [
      "GMP-compatible materials and processes",
      "High-tack adhesive for HDPE and PET containers",
      "Variable data: lot numbers, expiry dates, barcodes",
      "Precise PANTONE color matching",
      "Tamper-evident options available",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Vitamins", "Protein Supplements", "Herbal Products", "Sports Nutrition"],
  },
  {
    slug: "pet-food-labels",
    icon: PawPrint,
    title: "Pet Food & Pet Care Labels",
    subtitle: "Durable labels for pet food, treats, and care products",
    desc: "Durable, moisture-resistant labels for dry food bags, wet food cans and pet care products.",
    longDesc: "Pet food labels face unique challenges including moisture, grease, and rough handling. INKO's pet food labels use moisture-resistant materials and high-tack adhesives designed for flexible packaging, pouches, cans, and bags.",
    tags: ["MOISTURE-RESISTANT", "HIGH-TACK", "BOPP FILM", "FLEXIBLE PACK"],
    img: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&q=80",
    materials: ["White BOPP", "Clear BOPP", "PE Film"],
    finishes: ["Gloss Lamination", "Matte Lamination"],
    features: [
      "Moisture and grease-resistant surface",
      "High-tack adhesive for flexible packaging",
      "Vibrant color printing for shelf appeal",
      "FDA-compliant materials for food-adjacent use",
      "Suitable for pouches, bags, cans, and bottles",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Dry Pet Food", "Wet Pet Food", "Pet Treats", "Pet Care Products"],
  },
  {
    slug: "household-labels",
    icon: Home,
    title: "Household & Cleaning Labels",
    subtitle: "Chemical-resistant labels for cleaning and household products",
    desc: "Chemical-resistant labels for cleaning products, detergents, and household chemicals.",
    longDesc: "Household and cleaning product labels must withstand exposure to harsh chemicals, moisture, and physical abrasion. INKO's household labels use chemical-resistant films and adhesives that maintain integrity in demanding environments.",
    tags: ["CHEMICAL-RESISTANT", "WATERPROOF", "HIGH-TACK", "DURABLE"],
    img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1200&q=80",
    materials: ["White BOPP", "PET Film", "PE Film"],
    finishes: ["Gloss Lamination", "Matte Lamination"],
    features: [
      "Chemical and solvent-resistant construction",
      "Waterproof and moisture-resistant",
      "High-tack adhesive for HDPE and PP containers",
      "Fade-resistant printing for long shelf life",
      "GHS/CLP hazard label compliance support",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Cleaning Products", "Detergents", "Disinfectants", "Air Fresheners"],
  },
  {
    slug: "automotive-labels",
    icon: Car,
    title: "Automotive & Lubricant Labels",
    subtitle: "Oil and solvent-resistant labels for automotive products",
    desc: "Oil and solvent-resistant labels for automotive products, lubricants, and fluids.",
    longDesc: "Automotive labels must survive oil, grease, solvents, and extreme temperatures. INKO produces durable automotive labels using PET film substrates and specially formulated oil-resistant adhesives for long-lasting performance.",
    tags: ["OIL-RESISTANT", "SOLVENT-RESISTANT", "DURABLE", "HIGH-TEMP"],
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80",
    materials: ["PET Film", "White BOPP"],
    finishes: ["Gloss Lamination", "Matte Lamination"],
    features: [
      "Oil and solvent-resistant adhesive",
      "High-temperature resistance up to 150°C",
      "Strong adhesion to metal, plastic, and rubber",
      "UV-resistant for outdoor and engine bay use",
      "Durable in extreme temperature ranges",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Motor Oil", "Lubricants", "Automotive Fluids", "Spare Parts"],
  },
  {
    slug: "industrial-labels",
    icon: Factory,
    title: "Industrial & Chemical Labels",
    subtitle: "Heavy-duty labels for industrial and chemical applications",
    desc: "Chemical-resistant, high-temperature labels for industrial and chemical applications.",
    longDesc: "Industrial labels must perform in the harshest environments: chemical exposure, extreme temperatures, outdoor weathering, and physical abrasion. INKO's industrial labels are engineered for durability and compliance with GHS/CLP labeling requirements.",
    tags: ["CHEMICAL-RESISTANT", "HIGH-TEMP", "DURABLE", "GHS COMPLIANT"],
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    materials: ["PET Film", "White BOPP", "Polyimide"],
    finishes: ["Gloss Lamination", "Matte Lamination"],
    features: [
      "Chemical and acid-resistant construction",
      "High-temperature resistance",
      "UV and weather-resistant for outdoor use",
      "GHS/CLP hazard label compliance",
      "Aggressive adhesive for rough surfaces",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Chemicals", "Manufacturing", "Oil & Gas", "Mining", "Construction"],
  },
  {
    slug: "electronics-labels",
    icon: Cpu,
    title: "Electronics & Battery Labels",
    subtitle: "ESD-safe labels for electronics, batteries, and PCBs",
    desc: "ESD-safe, high-temperature labels for electronics, batteries, and PCB components.",
    longDesc: "Electronics labels require precision, reliability, and compliance with industry standards. INKO produces ESD-safe labels, high-temperature labels for PCB soldering processes, and serialized barcode labels for electronics traceability.",
    tags: ["ESD-SAFE", "HIGH-TEMP", "SMALL FORMAT", "BARCODE"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    materials: ["PET Film", "Polyimide", "White BOPP"],
    finishes: ["Matte Lamination", "Gloss Lamination"],
    features: [
      "ESD-safe materials for sensitive components",
      "High-temperature resistance for reflow soldering",
      "Serialized barcode and QR code printing",
      "Small format precision die-cutting",
      "UL-recognized materials available",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Consumer Electronics", "Batteries", "PCB Manufacturing", "Semiconductors"],
  },
  {
    slug: "agricultural-labels",
    icon: Leaf,
    title: "Agricultural Product Labels",
    subtitle: "UV-resistant, weatherproof labels for agricultural products",
    desc: "UV-resistant, weatherproof labels for agricultural products, seeds, and garden supplies.",
    longDesc: "Agricultural labels must withstand outdoor exposure, UV radiation, moisture, and physical handling. INKO's agricultural labels use UV-resistant inks and durable film substrates designed for long-term outdoor performance.",
    tags: ["UV-RESISTANT", "WEATHERPROOF", "OUTDOOR", "DURABLE"],
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
    materials: ["White BOPP", "PET Film"],
    finishes: ["Gloss Lamination", "Matte Lamination"],
    features: [
      "UV-resistant inks for outdoor longevity",
      "Weatherproof and moisture-resistant",
      "Strong adhesion to bags, pots, and containers",
      "Fade-resistant for extended outdoor display",
      "Compliant with agricultural labeling regulations",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Seeds", "Fertilizers", "Pesticides", "Garden Supplies", "Nursery"],
  },
];

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return allProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = allProducts.find((p) => p.slug === params.slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.title} — INKO Custom Labels`,
    description: product.desc,
    openGraph: {
      title: `${product.title} — INKO Custom Labels`,
      description: product.desc,
      images: [{ url: product.img }],
    },
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = allProducts.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const Icon = product.icon;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0F2744] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-xs mb-4">
            <Link href="/products" className="hover:text-[#E8A020] transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/80">{product.title}</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#E8A020] flex items-center justify-center">
              <Icon className="w-5 h-5 text-[#0F2744]" />
            </div>
            <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase">{product.subtitle}</div>
          </div>
          <h1 className="font-display text-6xl font-black text-white uppercase leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {product.title}
          </h1>
          <p className="text-white/70 max-w-2xl text-lg">{product.desc}</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {product.tags.map((tag) => (
              <span key={tag} className="text-xs font-bold tracking-wider text-[#E8A020] bg-[#E8A020]/10 border border-[#E8A020]/30 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image src={product.img} alt={product.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/40 to-transparent" />
            </div>

            {/* Info */}
            <div>
              <h2 className="text-3xl font-black text-[#0F2744] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
                Why Choose INKO for {product.title}?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">{product.longDesc}</p>

              {/* Key Features */}
              <h3 className="text-lg font-bold text-[#0F2744] mb-4 uppercase tracking-wide">Key Features</h3>
              <ul className="space-y-3 mb-8">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#E8A020] flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Request Free Sample & Quote <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Materials & Finishes */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-black text-[#0F2744] uppercase mb-5" style={{ fontFamily: "var(--font-barlow)" }}>
                Recommended Materials
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.materials.map((m) => (
                  <span key={m} className="text-sm font-semibold text-[#0F2744] bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-sm">
                    {m}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-black text-[#0F2744] uppercase mb-5" style={{ fontFamily: "var(--font-barlow)" }}>
                Available Finishes
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.finishes.map((f) => (
                  <span key={f} className="text-sm font-semibold text-[#0F2744] bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-sm">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Industries */}
          <div className="mt-8 bg-[#0F2744] rounded-2xl p-8">
            <h3 className="text-xl font-black text-white uppercase mb-5" style={{ fontFamily: "var(--font-barlow)" }}>
              Industries We Serve
            </h3>
            <div className="flex flex-wrap gap-3">
              {product.industries.map((ind) => (
                <span key={ind} className="text-sm font-semibold text-[#E8A020] bg-[#E8A020]/10 border border-[#E8A020]/30 px-4 py-2 rounded-lg">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-[#0F2744] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Request a free sample and quote within 24 hours. No commitment required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Request Free Sample <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border-2 border-[#0F2744]/30 hover:border-[#0F2744] text-[#0F2744] font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
