"use client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2, Printer, Layers, Zap, Eye, Scissors, Sparkles, Settings } from "lucide-react";

const capabilities = [
  {
    slug: "flexo-printing",
    icon: Printer,
    title: "7-Color Resin Plate Flexo Press",
    subtitle: "High-speed flexographic printing with 7-color precision",
    desc: "Our flagship 7-color resin plate flexographic press delivers exceptional color accuracy and high-speed production for all label types.",
    longDesc: "INKO's 7-color resin plate flexographic printing press is the heart of our production facility. This state-of-the-art machine delivers PANTONE-matched colors with Delta E < 2 accuracy, running at speeds up to 150 meters per minute. The resin plate technology ensures sharper dot reproduction and finer detail compared to traditional rubber plates, making it ideal for premium cosmetic, food, and beverage labels.",
    specs: [
      "Print width: up to 330mm",
      "Maximum print speed: 150 m/min",
      "Color stations: 7 colors + white",
      "Minimum repeat length: 50mm",
      "Registration accuracy: ±0.1mm",
      "PANTONE color matching: Delta E < 2",
    ],
    applications: ["Cosmetic Labels", "Food Labels", "Beverage Labels", "Pharmaceutical Labels", "Premium Product Labels"],
  },
  {
    slug: "adhesive-printing",
    icon: Layers,
    title: "Adhesive-Side (Back) Printing",
    subtitle: "Back-print technology for no-label-look effect",
    desc: "Print on the adhesive side of clear film labels to achieve the premium no-label-look effect on glass and plastic bottles.",
    longDesc: "Back printing (adhesive-side printing) is a specialized technique that prints the label design on the underside of a clear film, creating the illusion that the design is printed directly on the container. This 'no-label look' is highly sought after for premium cosmetics, spirits, and beverage brands. INKO's back-print capability includes white ink underprint for opacity control.",
    specs: [
      "Compatible with clear BOPP and PET films",
      "White ink underprint for opacity control",
      "Mirror-image printing for correct orientation",
      "Available with all standard finishes",
      "Suitable for glass, PET, and HDPE containers",
      "MOQ: 500 rolls per design",
    ],
    applications: ["Premium Cosmetics", "Spirits & Wine", "Craft Beverages", "Essential Oils", "Luxury Products"],
  },
  {
    slug: "variable-data",
    icon: Settings,
    title: "Variable Data & Barcode Printing",
    subtitle: "Serialized printing for traceability and compliance",
    desc: "Digital variable data printing for unique barcodes, QR codes, serial numbers, and expiry dates on every label.",
    longDesc: "Variable data printing allows each label in a roll to carry unique information, enabling product traceability, anti-counterfeiting, and regulatory compliance. INKO's variable data printing system integrates with your ERP or database to print unique serial numbers, lot numbers, expiry dates, and GS1-compliant barcodes.",
    specs: [
      "Print resolution: 600 DPI for barcodes",
      "Barcode formats: Code 128, QR, DataMatrix, EAN, UPC",
      "GS1-compliant barcode generation",
      "Database integration for serial number generation",
      "Inline verification for 100% scan rate",
      "Available on all standard label substrates",
    ],
    applications: ["Pharmaceutical Labels", "Electronics Labels", "Logistics Labels", "Food Traceability", "Anti-Counterfeit"],
  },
  {
    slug: "white-ink",
    icon: Printer,
    title: "White Ink Printing",
    subtitle: "Opaque white ink for clear and metallic substrates",
    desc: "High-opacity white ink printing for clear BOPP, metallic, and transparent film labels.",
    longDesc: "White ink printing is essential for achieving vibrant colors on clear and metallic film substrates. Without a white ink underprint, colors appear translucent and washed out on clear films. INKO's high-opacity white ink system delivers consistent, bright white coverage that makes your label colors pop on any substrate.",
    specs: [
      "White ink opacity: > 90%",
      "Available as flood coat or spot white",
      "Compatible with clear BOPP, PET, and metallic films",
      "Inline white ink printing with color overprint",
      "No additional lead time for white ink jobs",
      "Available on all flexo press configurations",
    ],
    applications: ["Clear BOPP Labels", "Metallic Film Labels", "No-Label Look Labels", "Transparent Packaging"],
  },
  {
    slug: "multi-color",
    icon: Sparkles,
    title: "Multi-Color & PANTONE Matching",
    subtitle: "Precise color reproduction for brand consistency",
    desc: "7-color process printing with PANTONE spot color matching for consistent brand colors across all runs.",
    longDesc: "Color consistency is critical for brand identity. INKO's 7-color flexo press with PANTONE color matching system ensures your brand colors are reproduced accurately on every production run. We use spectrophotometer measurement and Delta E reporting to verify color accuracy.",
    specs: [
      "7-color process printing (CMYK + 3 spot colors)",
      "PANTONE spot color matching",
      "Delta E < 2 color accuracy",
      "Spectrophotometer measurement on every run",
      "Color profile management for long-term consistency",
      "Color approval process before production",
    ],
    applications: ["Brand Labels", "Cosmetic Labels", "Premium Food Labels", "Corporate Identity Labels"],
  },
  {
    slug: "lamination",
    icon: Layers,
    title: "Inline Lamination (Gloss / Matte / Soft-Touch)",
    subtitle: "Protective lamination for durability and premium aesthetics",
    desc: "Inline gloss, matte, and soft-touch matte lamination for label protection and premium feel.",
    longDesc: "Lamination protects labels from moisture, abrasion, and UV damage while enhancing their visual and tactile appeal. INKO's inline lamination system applies gloss, matte, or soft-touch matte film directly on the press, ensuring consistent coverage and adhesion.",
    specs: [
      "Lamination types: Gloss, Matte, Soft-Touch Matte",
      "Film thickness: 12–25 microns",
      "Inline application for consistent coverage",
      "Available on all standard label substrates",
      "Water-resistant and UV-resistant lamination",
      "No additional lead time for standard lamination",
    ],
    applications: ["All Label Types", "Premium Cosmetics", "Food & Beverage", "Outdoor Labels"],
  },
  {
    slug: "hot-lamination",
    icon: Zap,
    title: "Hot Lamination Machine",
    subtitle: "High-temperature lamination for specialty applications",
    desc: "Hot lamination for specialty films and high-performance label constructions.",
    longDesc: "Hot lamination uses heat and pressure to bond specialty films to label substrates, creating high-performance constructions for demanding applications. INKO's hot lamination machine handles specialty films including holographic, metallic, and high-temperature materials.",
    specs: [
      "Lamination temperature: up to 180°C",
      "Compatible with specialty and holographic films",
      "Precise temperature control for consistent bonding",
      "Available for metallic and holographic overlaminates",
      "Suitable for high-performance label constructions",
      "Available on request for specialty projects",
    ],
    applications: ["Holographic Labels", "Metallic Overlaminates", "High-Temp Labels", "Security Labels"],
  },
  {
    slug: "foil-die-cutting",
    icon: Zap,
    title: "Foil Stamping + Die-Cutting High-Speed Press",
    subtitle: "Combined foil stamping and precision die-cutting in one pass",
    desc: "High-speed combination press for foil stamping and precision die-cutting in a single production pass.",
    longDesc: "INKO's combination foil stamping and die-cutting press delivers premium labels with hot foil accents and precise custom shapes in a single production pass. This integrated process reduces lead time and ensures perfect registration between the foil and die-cut shape.",
    specs: [
      "Foil stamping colors: gold, silver, rose gold, holographic, custom",
      "Die-cutting precision: ±0.1mm",
      "Combined foil + die-cut in single pass",
      "Maximum foil width: 330mm",
      "Custom die shapes available",
      "Minimum order: 1,000 rolls for foil stamping",
    ],
    applications: ["Luxury Cosmetics", "Wine & Spirits Labels", "Premium Food Labels", "Gift Products"],
  },
  {
    slug: "die-cutting",
    icon: Scissors,
    title: "Inline Die Cutting",
    subtitle: "Precision custom shape die-cutting for all label formats",
    desc: "Precision inline die-cutting for custom label shapes, kiss-cuts, and specialty formats.",
    longDesc: "INKO's inline die-cutting system produces labels in any custom shape with precision tolerances of ±0.1mm. We maintain an extensive library of standard die shapes and can produce custom dies for unique label formats.",
    specs: [
      "Die-cutting precision: ±0.1mm",
      "Custom die shapes available",
      "Standard die library: 200+ shapes",
      "Kiss-cut and full-cut options",
      "Multi-up label layouts for efficiency",
      "Available on all standard label substrates",
    ],
    applications: ["Custom Shape Labels", "Specialty Labels", "Multi-Up Labels", "Kiss-Cut Sheets"],
  },
  {
    slug: "spot-uv",
    icon: Sparkles,
    title: "Spot UV",
    subtitle: "High-gloss UV coating for selective label areas",
    desc: "Selective high-gloss UV coating to highlight specific design elements and create visual contrast.",
    longDesc: "Spot UV coating applies a high-gloss, raised UV varnish to selected areas of the label, creating a striking contrast between matte and gloss surfaces. This technique is widely used in premium cosmetics, spirits, and luxury product labels to highlight logos, brand names, and key design elements.",
    specs: [
      "Gloss level: > 90 GU (gloss units)",
      "Selective application to any design element",
      "Compatible with matte and soft-touch laminated labels",
      "Raised texture for tactile effect",
      "Available with or without lamination",
      "Minimum order: 1,000 rolls for spot UV",
    ],
    applications: ["Premium Cosmetics", "Luxury Labels", "Wine & Spirits", "Gift Products"],
  },
  {
    slug: "embossing",
    icon: Layers,
    title: "Embossing & Debossing",
    subtitle: "Tactile raised and recessed effects for premium labels",
    desc: "Embossing and debossing for tactile raised and recessed effects on premium labels.",
    longDesc: "Embossing creates a raised three-dimensional effect on label surfaces, while debossing creates a recessed impression. Both techniques add a premium tactile quality to labels that communicates luxury and craftsmanship. INKO's embossing capability is available for both paper and film substrates.",
    specs: [
      "Emboss depth: up to 0.5mm",
      "Available for paper and film substrates",
      "Blind emboss (no foil) and foil emboss options",
      "Custom emboss dies available",
      "Compatible with all standard finishes",
      "Minimum order: 1,000 rolls for embossing",
    ],
    applications: ["Luxury Cosmetics", "Wine & Spirits", "Premium Food", "Gift Products"],
  },
  {
    slug: "inspection-slitting",
    icon: Eye,
    title: "Vision Inspection + Precision Slitting",
    subtitle: "100% automated quality inspection and precision slitting",
    desc: "Automated vision inspection system and precision slitting for zero-defect label rolls.",
    longDesc: "INKO's automated vision inspection system scans every label at production speed, detecting printing defects, color variations, and die-cutting errors. Combined with our precision slitting equipment, we deliver label rolls that meet the strictest quality standards for automated labeling machines.",
    specs: [
      "Inspection speed: up to 150 m/min",
      "Defect detection: printing, color, die-cut errors",
      "Slitting precision: ±0.1mm",
      "100% inspection for pharmaceutical and food labels",
      "Defect report available on request",
      "Roll specifications: custom core size and wind direction",
    ],
    applications: ["Pharmaceutical Labels", "Food Labels", "Automated Labeling Lines", "High-Volume Production"],
  },
];

export default function CapabilityPage({ params }: { params: { slug: string } }) {
  const capability = capabilities.find((c) => c.slug === params.slug);
  if (!capability) notFound();

  const Icon = capability.icon;

  return (
    <>
      <section className="bg-[#0F2744] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <Link href="/capabilities" className="hover:text-[#E8A020] transition-colors">Capabilities</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/80">{capability.title}</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-[#E8A020]/20 text-[#E8A020] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded mb-4">
            <Icon className="w-3.5 h-3.5" />
            {capability.subtitle}
          </div>
          <h1 className="font-display text-5xl font-black text-white uppercase leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {capability.title}
          </h1>
          <p className="text-white/70 max-w-2xl text-lg mb-8">{capability.desc}</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]" style={{ fontFamily: "var(--font-barlow)" }}>
            REQUEST A QUOTE <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl font-black text-[#0F2744] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
                About This Capability
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">{capability.longDesc}</p>
              <h3 className="font-bold text-[#0F2744] text-sm uppercase tracking-widest mb-4">Technical Specifications</h3>
              <ul className="space-y-3">
                {capability.specs.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E8A020] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="bg-[#0F2744] rounded-2xl p-6 text-white">
                <h3 className="font-display text-lg font-black uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {capability.applications.map((a) => (
                    <span key={a} className="bg-[#E8A020]/20 text-[#E8A020] text-xs font-bold px-3 py-1.5 rounded">{a}</span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-[#0F2744] text-sm uppercase tracking-widest mb-3">Need This Capability?</h3>
                <p className="text-gray-600 text-sm mb-4">Contact us to discuss your requirements and get a custom quote.</p>
                <Link href="/contact" className="block w-full text-center bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold py-3 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-black text-[#0F2744] uppercase mb-6" style={{ fontFamily: "var(--font-barlow)" }}>All Capabilities</h2>
          <div className="flex flex-wrap gap-3">
            {capabilities.filter(c => c.slug !== capability.slug).map((c) => (
              <Link key={c.slug} href={`/capabilities/${c.slug}`} className="bg-white hover:bg-[#0F2744] hover:text-white text-[#0F2744] text-sm font-medium px-4 py-2 rounded transition-all duration-200 border border-gray-200 hover:border-[#0F2744]">
                {c.title}
              </Link>
            ))}
            <Link href="/capabilities" className="bg-[#0F2744] text-white text-sm font-medium px-4 py-2 rounded border border-[#0F2744]">
              View All Equipment →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
