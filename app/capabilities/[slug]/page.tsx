import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2, Printer, Layers, Zap, Eye, Scissors, Sparkles, Settings, Award, Clock, Truck, Headphones } from "lucide-react";
import FaqItem from "@/components/FaqItem";

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
    faqs: [
      { q: "What is the difference between resin plates and rubber plates?", a: "Resin plates (photopolymer plates) offer sharper dot reproduction, finer detail, and longer plate life compared to traditional rubber plates. This results in higher print quality, especially for fine text and intricate designs." },
      { q: "How many colors can you print in a single pass?", a: "Our 7-color flexo press can print up to 7 colors plus white in a single pass. This includes CMYK process printing plus up to 3 spot colors for precise PANTONE matching." },
      { q: "What is the minimum label size you can print?", a: "Our minimum repeat length is 50mm, which allows us to produce very small labels. The minimum label width depends on the design but is typically 20mm." },
      { q: "Can you match our exact PANTONE color?", a: "Yes. We use PANTONE color matching with spectrophotometer measurement to achieve Delta E < 2 accuracy. We provide a color proof for approval before starting production." },
      { q: "What is the typical production speed for a standard label order?", a: "Our press runs at up to 150 meters per minute. For a standard order of 1,000 rolls, production typically takes 1–2 days after plate preparation." },
    ],
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
    faqs: [
      { q: "What is the no-label look and how is it achieved?", a: "The no-label look is achieved by printing on the adhesive side of a clear film label. When applied to a glass or clear plastic container, the design appears to be printed directly on the container, creating a seamless, premium appearance." },
      { q: "What substrates are compatible with back printing?", a: "Back printing is compatible with clear BOPP and clear PET films. The clear film allows the design to show through when applied to a container." },
      { q: "Do you need to reverse the artwork for back printing?", a: "Yes. The artwork must be mirror-imaged for back printing so that it reads correctly when viewed through the front of the label. We handle this automatically during pre-press." },
      { q: "Can back-printed labels include white ink?", a: "Yes. White ink underprint is available for back-printed labels to control opacity and make colors appear more vibrant. The white ink is printed first, then the colors are printed on top." },
      { q: "What containers are best suited for back-printed labels?", a: "Back-printed labels work best on smooth, transparent containers including glass bottles, clear PET bottles, and clear HDPE containers. They are not suitable for opaque or heavily textured containers." },
    ],
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
    faqs: [
      { q: "What barcode formats do you support?", a: "We support all major barcode formats including Code 128, QR Code, DataMatrix, EAN-13, EAN-8, UPC-A, UPC-E, and GS1 DataBar. We can also produce custom barcode formats upon request." },
      { q: "Can you print unique serial numbers on every label?", a: "Yes. Our variable data system can print a unique serial number, lot number, or any other variable data on every label in a roll. We integrate with your database or ERP system to generate the variable data." },
      { q: "How do you verify that all barcodes are scannable?", a: "We use inline barcode verification to check every barcode at production speed. Any labels with unreadable barcodes are automatically flagged and removed from the roll." },
      { q: "Can you print expiry dates and lot numbers on labels?", a: "Yes. We can print expiry dates, lot numbers, and other variable data on labels. The data can be provided in a spreadsheet or database format, or generated automatically based on your specifications." },
      { q: "What is the minimum order quantity for variable data labels?", a: "Variable data labels have the same MOQ as standard labels: 500 rolls per design. The variable data is printed inline during production at no additional MOQ requirement." },
    ],
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
    faqs: [
      { q: "Why is white ink necessary for clear film labels?", a: "Without white ink, colors printed on clear film appear translucent because the substrate is transparent. White ink provides an opaque background that makes colors appear vibrant and true-to-design." },
      { q: "Can you print white ink on metallic substrates?", a: "Yes. White ink can be printed on metallic substrates to create areas of white contrast against the metallic background, enabling more complex and visually striking label designs." },
      { q: "What is the difference between flood white and spot white?", a: "Flood white covers the entire label area with white ink, providing a fully opaque background. Spot white applies white ink only to specific areas, allowing the clear or metallic substrate to show through in other areas." },
      { q: "Does white ink add to the lead time?", a: "No. White ink printing is done inline on our flexo press and does not add to the standard lead time." },
      { q: "Can white ink be combined with foil stamping?", a: "Yes. White ink can be combined with foil stamping to create labels with both opaque white areas and metallic foil accents, which is popular for premium cosmetics and spirits labels." },
    ],
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
    faqs: [
      { q: "How many PANTONE colors can you match?", a: "We can match any PANTONE color from the PANTONE Matching System (PMS), including solid coated, solid uncoated, metallic, and pastel colors. Our 7-color press can produce up to 3 spot colors per job." },
      { q: "What is your color accuracy guarantee?", a: "We guarantee Delta E < 2 for all PANTONE-matched colors. Delta E < 2 is considered imperceptible to the human eye and represents professional print quality." },
      { q: "How do you measure color accuracy?", a: "We use a spectrophotometer to measure the color of printed samples and compare them to the target PANTONE color. We report the Delta E value for each color and adjust the ink formulation until the target is achieved." },
      { q: "Can you maintain color consistency across multiple production runs?", a: "Yes. We store your color profiles in our color management system and use them to calibrate the press for every production run. This ensures consistent colors across all orders, regardless of when they are produced." },
      { q: "Do you provide a color proof before production?", a: "Yes. We provide a digital color proof (PDF) or physical color proof for approval before starting production. Production begins only after you approve the color proof." },
    ],
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
    faqs: [
      { q: "What is the difference between gloss, matte, and soft-touch lamination?", a: "Gloss lamination gives labels a shiny, reflective finish that makes colors appear more vibrant. Matte lamination gives a flat, non-reflective finish for a sophisticated look. Soft-touch matte lamination adds a velvety tactile feel that communicates luxury." },
      { q: "Does lamination make labels waterproof?", a: "Yes. Our lamination films are water-resistant and protect labels from moisture, humidity, and light splashing. For full waterproof performance (submersion), we recommend BOPP or PET film substrates." },
      { q: "Can lamination be combined with foil stamping?", a: "Yes. Lamination is typically applied before foil stamping. The foil is then applied on top of the laminated surface, creating a premium combination of matte or soft-touch texture with metallic foil accents." },
      { q: "Does lamination add to the lead time?", a: "No. Standard lamination (gloss, matte, soft-touch) is applied inline during printing and does not add to the standard lead time." },
      { q: "What is soft-touch matte lamination and when should I use it?", a: "Soft-touch matte lamination applies a velvety, rubberized coating that feels luxurious when touched. It is ideal for premium cosmetics, skincare, and luxury product labels where tactile quality communicates brand value." },
    ],
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
    faqs: [
      { q: "What is hot lamination and how is it different from inline lamination?", a: "Hot lamination uses heat and pressure to bond specialty films to label substrates, while inline lamination uses pressure-sensitive adhesive films applied at room temperature. Hot lamination is required for specialty films like holographic and metallic overlaminates." },
      { q: "Can you apply holographic overlaminates?", a: "Yes. Our hot lamination machine can apply holographic overlaminates to create eye-catching security and premium labels. Holographic overlaminates are available in various patterns and effects." },
      { q: "What temperature does hot lamination use?", a: "Our hot lamination machine operates at temperatures up to 180°C. The exact temperature is calibrated for each film type to ensure optimal bonding without damaging the substrate." },
      { q: "Is hot lamination available for all label substrates?", a: "Hot lamination is available for most standard label substrates including paper, BOPP, PET, and metallic films. Some specialty substrates may require testing before production." },
      { q: "What is the lead time for hot lamination jobs?", a: "Hot lamination jobs typically have the same lead time as standard production. For specialty films that need to be sourced, additional lead time may be required." },
    ],
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
    faqs: [
      { q: "What foil colors are available?", a: "We offer gold, silver, rose gold, copper, holographic, and custom foil colors. Custom foil colors can be sourced for large orders. Holographic foils are available in various patterns." },
      { q: "Can foil stamping and die-cutting be done in the same pass?", a: "Yes. Our combination press performs foil stamping and die-cutting in a single production pass, ensuring perfect registration between the foil and die-cut shape and reducing lead time." },
      { q: "What is the minimum order for foil stamping?", a: "The minimum order for foil stamping is 1,000 rolls per design, due to the setup cost of foil dies and the foil material itself." },
      { q: "Can foil stamping be combined with embossing?", a: "Yes. Foil stamping and embossing can be combined to create a raised, metallic foil effect (foil embossing). This is a popular premium finish for luxury cosmetics and spirits labels." },
      { q: "How precise is the die-cutting registration?", a: "Our die-cutting precision is ±0.1mm, which is sufficient for most label shapes. For very intricate shapes with fine details, we recommend discussing your requirements with our technical team." },
    ],
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
    faqs: [
      { q: "Can you produce labels in any custom shape?", a: "Yes. We can produce labels in virtually any custom shape. We maintain a library of 200+ standard die shapes and can create custom dies for unique shapes. Custom die fees apply for new shapes." },
      { q: "What is the difference between kiss-cut and full-cut?", a: "Kiss-cut cuts through the label material but not the backing liner, leaving the labels on the liner for easy application. Full-cut cuts through both the label and the liner, producing individual labels." },
      { q: "Can you produce multi-up labels (multiple labels per sheet)?", a: "Yes. We can produce multi-up label layouts with multiple labels per roll section, which is efficient for high-volume labeling operations." },
      { q: "Is there a fee for custom die shapes?", a: "Yes. A one-time die fee applies for custom shapes. This fee is waived for repeat orders using the same die. Standard shapes from our library are available at no extra cost." },
      { q: "What is the die-cutting precision?", a: "Our die-cutting precision is ±0.1mm, which is suitable for most label applications. For very intricate shapes, we recommend a pre-production test to verify the die performance." },
    ],
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
    faqs: [
      { q: "What is spot UV and how does it enhance labels?", a: "Spot UV applies a high-gloss, raised UV varnish to specific areas of the label, creating a visual and tactile contrast between the glossy UV areas and the matte background. This highlights key design elements like logos and brand names." },
      { q: "Can spot UV be applied over soft-touch matte lamination?", a: "Yes. Spot UV over soft-touch matte lamination is one of the most popular premium label finishes. The contrast between the velvety matte background and the high-gloss UV areas creates a luxurious effect." },
      { q: "What is the minimum order for spot UV?", a: "The minimum order for spot UV is 1,000 rolls per design, due to the setup cost of the UV printing plate." },
      { q: "Can spot UV be applied to any design element?", a: "Yes. Spot UV can be applied to any design element including logos, text, patterns, and images. We work with your artwork to identify the best areas for spot UV application." },
      { q: "Does spot UV add a raised texture?", a: "Yes. Spot UV creates a slightly raised texture that is both visible and tactile. The raised effect adds a premium quality that is immediately noticeable when handling the label." },
    ],
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
    faqs: [
      { q: "What is the difference between embossing and debossing?", a: "Embossing creates a raised (convex) three-dimensional effect on the label surface. Debossing creates a recessed (concave) impression. Both add a premium tactile quality to labels." },
      { q: "What is blind embossing?", a: "Blind embossing creates a raised or recessed effect without any foil or ink, relying solely on the three-dimensional texture for visual impact. It is a subtle, sophisticated finish popular for luxury brands." },
      { q: "Can embossing be combined with foil stamping?", a: "Yes. Foil embossing combines hot foil stamping with embossing to create a raised, metallic foil effect. This is one of the most premium label finishes available." },
      { q: "What is the minimum order for embossing?", a: "The minimum order for embossing is 1,000 rolls per design, due to the setup cost of the embossing die." },
      { q: "Is embossing available for all label substrates?", a: "Embossing works best on paper substrates, which have more flexibility for three-dimensional forming. It is also available for some film substrates, though the emboss depth may be limited." },
    ],
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
    faqs: [
      { q: "What types of defects does the vision inspection system detect?", a: "Our vision inspection system detects printing defects (missing print, smearing, streaking), color variations (color shift, fading), die-cutting errors (misregistration, incomplete cuts), and contamination (dust, debris)." },
      { q: "Is 100% inspection available for all orders?", a: "Yes. 100% vision inspection is available for all orders. It is standard for pharmaceutical and food labels, and available as an option for other label types." },
      { q: "Can you provide a defect report for inspected orders?", a: "Yes. We can provide a defect report listing all detected defects and the actions taken (label removed, roll spliced) for orders that require quality documentation." },
      { q: "What roll specifications can you accommodate?", a: "We can produce rolls with custom core sizes (1 inch, 3 inch, 76mm), custom wind direction (inside wound, outside wound), and custom roll diameter. Please specify your requirements when ordering." },
      { q: "What is the slitting precision?", a: "Our precision slitting equipment achieves ±0.1mm slitting accuracy, ensuring consistent roll width for automated labeling machines." },
    ],
  },
];

// ─── SEO ─────────────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const cap = capabilities.find((c) => c.slug === params.slug);
  if (!cap) return {};
  const title = `${cap.title} — Label Manufacturing Capabilities | INKO`;
  const description = cap.longDesc.slice(0, 155) + "…";
  return {
    title,
    description,
    alternates: { canonical: `https://inkolabels.com/capabilities/${cap.slug}` },
    openGraph: { title, description, url: `https://inkolabels.com/capabilities/${cap.slug}` },
  };
}

export default function CapabilityPage({ params }: { params: { slug: string } }) {
  const capability = capabilities.find((c) => c.slug === params.slug);
  if (!capability) notFound();

  const Icon = capability.icon;
  const relatedCapabilities = capabilities.filter(c => c.slug !== capability.slug).slice(0, 6);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#0F2744] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/capabilities" className="hover:text-[#E8A020] transition-colors">Capabilities</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/80">{capability.title}</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#E8A020]/20 text-[#E8A020] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded mb-5">
              <Icon className="w-3.5 h-3.5" />
              {capability.subtitle}
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-black text-white uppercase leading-tight mb-5" style={{ fontFamily: "var(--font-barlow)" }}>
              {capability.title}
            </h1>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">{capability.desc}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              {capability.applications.map((app) => (
                <span key={app} className="bg-white/10 text-white/80 text-xs font-bold tracking-wider px-3 py-1.5 rounded">{app}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]" style={{ fontFamily: "var(--font-barlow)" }}>
                REQUEST A QUOTE <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200">
                REQUEST FREE SAMPLE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ────────────────────────────────────────────────────── */}
      <section className="bg-[#E8A020] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: Award, label: "ISO 9001 Certified" },
              { icon: Clock, label: "24h Quote Response" },
              { icon: Truck, label: "DHL / FedEx Worldwide" },
              { icon: Headphones, label: "Dedicated Account Manager" },
            ].map(({ icon: TrustIcon, label }) => (
              <div key={label} className="flex items-center justify-center gap-2">
                <TrustIcon className="w-4 h-4 text-[#0F2744]" />
                <span className="text-[#0F2744] text-xs font-bold uppercase tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left: Description + Specs + FAQ */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="font-display text-3xl font-black text-[#0F2744] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
                  About This Capability
                </h2>
                <p className="text-gray-600 leading-relaxed text-base">{capability.longDesc}</p>
              </div>

              <div>
                <h3 className="font-bold text-[#0F2744] text-sm uppercase tracking-widest mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {capability.specs.map((s) => (
                    <div key={s} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                      <CheckCircle2 className="w-4 h-4 text-[#E8A020] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-black text-[#0F2744] uppercase mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
                  Frequently Asked Questions
                </h2>
                <div className="bg-gray-50 rounded-xl p-6">
                  {capability.faqs.map((faq) => (
                    <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Applications Card + CTA */}
            <div className="space-y-6">
              <div className="bg-[#0F2744] rounded-2xl p-6 text-white sticky top-24">
                <h3 className="font-display text-lg font-black uppercase mb-5 text-[#E8A020]" style={{ fontFamily: "var(--font-barlow)" }}>
                  Applications
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {capability.applications.map((app) => (
                    <span key={app} className="bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded">{app}</span>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-5 space-y-3">
                  {[
                    { label: "Quality Cert.", value: "ISO 9001:2015" },
                    { label: "Experience", value: "15+ years export" },
                    { label: "MOQ", value: "500 rolls / design" },
                    { label: "Lead Time", value: "7–10 business days" },
                    { label: "Sample Time", value: "3–5 business days" },
                    { label: "Response Time", value: "Within 24 hours" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-start gap-2 py-1.5 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-xs">{label}</span>
                      <span className="text-white text-xs font-semibold text-right">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  <Link href="/contact" className="block w-full text-center bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-6 py-3 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
                    Request a Quote
                  </Link>
                  <Link href="/capabilities" className="block w-full text-center border border-white/30 hover:border-white text-white font-bold px-6 py-3 rounded text-sm uppercase tracking-wide transition-all duration-200">
                    View All Capabilities
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Capabilities ──────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-black text-[#0F2744] uppercase mb-8" style={{ fontFamily: "var(--font-barlow)" }}>
            Other Capabilities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {relatedCapabilities.map((c) => {
              const RelIcon = c.icon;
              return (
                <Link key={c.slug} href={`/capabilities/${c.slug}`} className="group bg-white rounded-xl p-4 border border-gray-200 hover:border-[#E8A020] hover:shadow-md transition-all duration-200 flex flex-col items-center text-center gap-3">
                  <div className="w-10 h-10 bg-[#0F2744]/5 group-hover:bg-[#E8A020]/10 rounded-full flex items-center justify-center transition-colors">
                    <RelIcon className="w-5 h-5 text-[#0F2744] group-hover:text-[#E8A020] transition-colors" />
                  </div>
                  <span className="text-[#0F2744] text-xs font-semibold leading-tight">{c.title}</span>
                </Link>
              );
            })}
          </div>
          <div className="mt-6 text-center">
            <Link href="/capabilities" className="inline-flex items-center gap-2 text-[#E8A020] font-bold text-sm uppercase tracking-wide hover:underline">
              View All Equipment & Videos <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
