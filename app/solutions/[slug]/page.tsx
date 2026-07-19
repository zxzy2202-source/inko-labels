"use client";
import Link from "next/link";
import { useState } from "react";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2, Building2, Rocket, Factory, Package, Layers, Users, Award, Clock, Truck, Headphones, Plus, Minus } from "lucide-react";

// ─── FAQ Accordion ────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button className="w-full flex items-center justify-between py-4 text-left gap-4" onClick={() => setOpen(!open)}>
        <span className="font-semibold text-[#0F2744] text-sm">{q}</span>
        {open ? <Minus className="w-4 h-4 text-[#E8A020] flex-shrink-0" /> : <Plus className="w-4 h-4 text-[#E8A020] flex-shrink-0" />}
      </button>
      {open && <p className="text-gray-600 text-sm leading-relaxed pb-4">{a}</p>}
    </div>
  );
}

const solutions = [
  {
    slug: "brand-owners",
    icon: Building2,
    title: "For Brand Owners",
    subtitle: "End-to-end label solutions for established brands",
    desc: "Comprehensive label manufacturing for brand owners who demand consistent quality, color accuracy, and reliable supply.",
    longDesc: "Brand owners need a label partner who understands the importance of brand consistency. INKO delivers PANTONE-matched labels with consistent quality across every production run, backed by ISO 9001:2015 certification and 15+ years of export experience. We manage your label supply chain so you can focus on growing your brand.",
    features: [
      "PANTONE color matching for brand consistency across runs",
      "ISO 9001:2015 certified quality management system",
      "Dedicated account manager for seamless communication",
      "Multi-SKU label management for complex product lines",
      "Flexible MOQ from 500 rolls per design",
      "Worldwide shipping to 60+ countries",
    ],
    benefits: ["Brand Consistency", "Quality Assurance", "Reliable Supply", "Cost Efficiency"],
    highlights: { moq: "500 rolls / design", leadTime: "7–10 business days", sampleTime: "3–5 business days", shipping: "DHL / FedEx worldwide" },
    faqs: [
      { q: "How do you ensure color consistency across multiple production runs?", a: "We use PANTONE color matching with spectrophotometer measurement on every production run. Our color management system stores your color profiles and we verify Delta E < 2 accuracy before releasing each order." },
      { q: "Can you manage labels for multiple SKUs and product lines?", a: "Yes. We have a multi-SKU label management system that tracks inventory, manages reorders, and maintains version control for all your label designs across different product lines." },
      { q: "What certifications do you hold?", a: "INKO is ISO 9001:2015 certified. We can provide material safety data sheets, certificates of compliance, and other documentation required for your quality management system." },
      { q: "What is your minimum order quantity for brand owners?", a: "Our standard MOQ is 500 rolls per design. For high-volume orders, we offer tiered pricing with significant cost savings at 2,000+ rolls per design." },
      { q: "Do you offer dedicated account management?", a: "Yes. All brand owner accounts are assigned a dedicated account manager who serves as your single point of contact for orders, artwork, quality, and logistics." },
    ],
  },
  {
    slug: "startups-dtc",
    icon: Rocket,
    title: "For Startups & DTC Brands",
    subtitle: "Low-MOQ labels for new brands and direct-to-consumer products",
    desc: "Affordable, low-MOQ label printing for startups, DTC brands, and new product launches.",
    longDesc: "Starting a new brand shouldn't require ordering 100,000 labels. INKO's low-MOQ program allows startups and DTC brands to order as few as 500 rolls per design, with fast sampling in 3–5 days and production in 7–10 days. We help new brands launch with professional-quality labels at competitive prices.",
    features: [
      "Low MOQ from 500 rolls per design",
      "Free sample production in 3–5 days",
      "No design fees for standard templates",
      "Flexible reorder with no minimum increase",
      "Premium finishes available at startup-friendly prices",
      "Expert guidance on material and finish selection",
    ],
    benefits: ["Low MOQ", "Fast Sampling", "Affordable Pricing", "Expert Support"],
    highlights: { moq: "500 rolls / design", leadTime: "7–10 business days", sampleTime: "3–5 business days", shipping: "DHL / FedEx worldwide" },
    faqs: [
      { q: "I'm launching a new brand — where do I start?", a: "Start by requesting a free sample. Send us your artwork (or we can help you create it), choose your material and finish, and we'll produce a physical sample in 3–5 days so you can test the label on your actual packaging." },
      { q: "What is the minimum order quantity for startups?", a: "Our standard MOQ is 500 rolls per design. This is significantly lower than most label manufacturers and allows you to order exactly what you need for your launch without overstocking." },
      { q: "Can you help me choose the right label material for my product?", a: "Yes. Our team will review your product, packaging, and environment requirements and recommend the most suitable label material, adhesive, and finish for your specific application." },
      { q: "Are premium finishes like foil stamping available for small orders?", a: "Yes. Premium finishes including foil stamping, soft-touch matte, and embossing are available from our standard MOQ of 500 rolls, though some specialty finishes have a higher MOQ of 1,000 rolls." },
      { q: "How do I send my artwork for sampling?", a: "Send your artwork in AI, PDF, or EPS format with fonts outlined and images at 300 DPI. We provide a free pre-press review and will notify you of any issues before producing your sample." },
    ],
  },
  {
    slug: "oem-odm",
    icon: Factory,
    title: "For OEM & ODM Factories",
    subtitle: "Bulk label supply for OEM and ODM manufacturing operations",
    desc: "High-volume label supply for OEM and ODM factories with consistent quality and reliable delivery.",
    longDesc: "OEM and ODM factories need a label supplier who can deliver consistent quality at high volumes with reliable lead times. INKO's production capacity and quality management systems ensure your label supply chain never becomes a bottleneck.",
    features: [
      "High-volume production capacity",
      "Consistent quality across large production runs",
      "Flexible delivery schedules to match your production",
      "Multi-SKU label management for complex assemblies",
      "Competitive pricing for high-volume orders",
      "EDI and API integration for automated ordering",
    ],
    benefits: ["High Volume", "Consistent Quality", "Reliable Delivery", "Competitive Pricing"],
    highlights: { moq: "500 rolls / design", leadTime: "7–10 business days", sampleTime: "3–5 business days", shipping: "DHL / FedEx / sea freight" },
    faqs: [
      { q: "Can you handle high-volume orders with tight delivery schedules?", a: "Yes. INKO has multiple production lines and can handle high-volume orders with tight delivery schedules. We work with you to plan production schedules that align with your manufacturing timeline." },
      { q: "Do you offer EDI or API integration for automated ordering?", a: "Yes. We offer EDI and API integration for automated order placement, inventory tracking, and shipment notifications, reducing manual ordering effort for high-volume OEM operations." },
      { q: "Can you supply labels for multiple product lines simultaneously?", a: "Yes. Our multi-SKU management system can handle labels for multiple product lines simultaneously, with separate inventory tracking and quality control for each product line." },
      { q: "What quality documentation do you provide for OEM orders?", a: "We provide certificates of conformance, material safety data sheets, and quality inspection reports for all OEM orders. Custom quality documentation can be arranged upon request." },
      { q: "Do you offer sea freight for large OEM orders?", a: "Yes. For large OEM orders, we offer sea freight as a cost-effective shipping option. We work with freight forwarders to arrange door-to-door delivery." },
    ],
  },
  {
    slug: "co-packers",
    icon: Package,
    title: "For Contract Manufacturers",
    subtitle: "Label supply solutions for co-packers and contract manufacturers",
    desc: "Reliable label supply for contract manufacturers and co-packers handling multiple client brands.",
    longDesc: "Contract manufacturers and co-packers manage labels for multiple client brands simultaneously. INKO's multi-brand label management system helps you track, reorder, and manage labels for all your clients efficiently.",
    features: [
      "Multi-brand label management system",
      "Separate inventory tracking per client brand",
      "Consistent quality across all client brands",
      "Flexible MOQ for small client batches",
      "Confidential production for private-label clients",
      "Dedicated support for complex multi-SKU operations",
    ],
    benefits: ["Multi-Brand Management", "Confidentiality", "Flexible MOQ", "Dedicated Support"],
    highlights: { moq: "500 rolls / design", leadTime: "7–10 business days", sampleTime: "3–5 business days", shipping: "DHL / FedEx worldwide" },
    faqs: [
      { q: "Can you manage labels for multiple client brands under one account?", a: "Yes. Our multi-brand management system allows you to manage labels for all your client brands under a single account, with separate inventory tracking and ordering for each brand." },
      { q: "How do you ensure confidentiality between different client brands?", a: "We maintain strict data separation between client brands. Each brand's artwork, formulations, and order history are stored separately with access controls to prevent cross-brand information sharing." },
      { q: "Can you accommodate small batch orders for individual clients?", a: "Yes. Our standard MOQ of 500 rolls per design accommodates small batch orders for individual clients. We can also arrange consolidated shipping to reduce freight costs." },
      { q: "Do you offer rush production for urgent client orders?", a: "Yes. We offer rush production services with expedited lead times for urgent client orders. Please contact us to discuss your specific requirements and timeline." },
      { q: "Can you ship directly to our clients on our behalf?", a: "Yes. We offer drop-shipping services where we ship directly to your clients on your behalf, with your branding on the shipping documents if required." },
    ],
  },
  {
    slug: "packaging-companies",
    icon: Layers,
    title: "For Packaging Companies",
    subtitle: "Label supply for packaging companies and distributors",
    desc: "Wholesale label supply for packaging companies who resell or integrate labels into packaging solutions.",
    longDesc: "Packaging companies need a reliable label supplier who can deliver consistent quality at competitive wholesale prices. INKO offers wholesale pricing, private-label options, and flexible delivery to support your packaging business.",
    features: [
      "Wholesale pricing for packaging companies",
      "Private-label and white-label options",
      "Consistent quality for resale",
      "Flexible delivery and inventory management",
      "Technical support for label specification",
      "Custom label solutions for packaging integration",
    ],
    benefits: ["Wholesale Pricing", "Private Label", "Consistent Quality", "Technical Support"],
    highlights: { moq: "500 rolls / design", leadTime: "7–10 business days", sampleTime: "3–5 business days", shipping: "DHL / FedEx / sea freight" },
    faqs: [
      { q: "Do you offer wholesale pricing for packaging companies?", a: "Yes. We offer tiered wholesale pricing for packaging companies based on order volume. Please contact us to discuss your volume requirements and receive a wholesale pricing proposal." },
      { q: "Can you produce labels under our brand (white-label)?", a: "Yes. We offer white-label and private-label production where labels are produced under your brand identity. We sign NDAs to protect your brand and client relationships." },
      { q: "Can you provide technical support for label specification?", a: "Yes. Our technical team can assist with label specification, material selection, and adhesive recommendations for your packaging integration projects." },
      { q: "Do you offer custom label solutions for specific packaging formats?", a: "Yes. We can develop custom label solutions for specific packaging formats including flexible pouches, rigid containers, glass bottles, and specialty packaging." },
      { q: "What is the lead time for wholesale orders?", a: "Standard wholesale orders have a 7–10 business day lead time. For large orders requiring special materials or finishes, lead times may be longer. We will confirm the lead time when you place your order." },
    ],
  },
  {
    slug: "distributors",
    icon: Users,
    title: "For Label Distributors",
    subtitle: "OEM and white-label label supply for distributors",
    desc: "OEM and white-label label manufacturing for distributors who sell labels under their own brand.",
    longDesc: "Label distributors can leverage INKO's manufacturing capabilities to offer their customers a wide range of label products under their own brand. We provide confidential OEM production, competitive wholesale pricing, and flexible MOQ to support your distribution business.",
    features: [
      "Confidential OEM production under your brand",
      "Competitive wholesale pricing for distributors",
      "Wide range of label materials and finishes",
      "Flexible MOQ to support your customer orders",
      "Technical support and product training",
      "Fast turnaround for urgent customer orders",
    ],
    benefits: ["OEM Production", "Confidentiality", "Wholesale Pricing", "Wide Range"],
    highlights: { moq: "500 rolls / design", leadTime: "7–10 business days", sampleTime: "3–5 business days", shipping: "DHL / FedEx worldwide" },
    faqs: [
      { q: "Can you produce labels under my distribution brand?", a: "Yes. We offer confidential OEM production under your brand. We sign NDAs and implement strict confidentiality protocols to protect your brand and customer relationships." },
      { q: "What label types can I offer to my customers through INKO?", a: "Through INKO, you can offer your customers the full range of label types including BOPP, PET, paper, kraft, metallic, specialty performance labels, and all standard finishes." },
      { q: "Do you offer product training for my sales team?", a: "Yes. We offer product training for distributor sales teams covering label materials, finishes, applications, and technical specifications to help your team sell effectively." },
      { q: "Can you handle rush orders from my customers?", a: "Yes. We offer rush production services for urgent customer orders. Please contact us to discuss your specific requirements and we will do our best to accommodate your timeline." },
      { q: "What is the minimum order quantity for distributor orders?", a: "Our standard MOQ is 500 rolls per design, which is well-suited for distributor orders. For smaller customer orders, we can arrange consolidated production runs." },
    ],
  },
  {
    slug: "low-moq",
    icon: Package,
    title: "Low-MOQ Custom Label Printing",
    subtitle: "Order as few as 500 rolls per design",
    desc: "Professional custom label printing with a minimum order of just 500 rolls per design.",
    longDesc: "INKO's low-MOQ program makes professional custom label printing accessible to brands of all sizes. With a minimum order of just 500 rolls per design, you can order exactly what you need without overstocking or wasting budget on excess inventory.",
    features: [
      "Minimum order: 500 rolls per design",
      "No plate setup fees for standard sizes",
      "Full-color printing with premium finishes",
      "Fast turnaround: samples in 3–5 days",
      "Easy reorder with no minimum increase",
      "Available for all label materials and finishes",
    ],
    benefits: ["500 Roll MOQ", "No Setup Fees", "Fast Sampling", "Easy Reorder"],
    highlights: { moq: "500 rolls / design", leadTime: "7–10 business days", sampleTime: "3–5 business days", shipping: "DHL / FedEx worldwide" },
    faqs: [
      { q: "What is the minimum order quantity?", a: "Our standard MOQ is 500 rolls per design for flexo printing. For digital short-run printing, we can accommodate orders as low as 100 labels per design." },
      { q: "Are there plate setup fees for low-MOQ orders?", a: "No. We do not charge plate setup fees for standard label sizes. For custom die shapes, a one-time die fee applies but is waived for repeat orders." },
      { q: "Can I order different designs in the same order?", a: "Yes. You can order multiple designs in the same order, each with a minimum of 500 rolls. This allows you to manage multiple SKUs efficiently." },
      { q: "Is the quality the same for low-MOQ orders as for high-volume orders?", a: "Yes. We use the same production equipment, materials, and quality control processes for all orders regardless of quantity. Low-MOQ orders receive the same quality as high-volume production runs." },
      { q: "Can I reorder without a minimum quantity increase?", a: "Yes. You can reorder the same design at any quantity from 500 rolls, with no requirement to increase your order size over time." },
    ],
  },
  {
    slug: "fast-sampling",
    icon: Rocket,
    title: "Fast Sampling & Short-Run",
    subtitle: "Sample labels in 3–5 days for product testing",
    desc: "Fast sample production in 3–5 days for product testing, market research, and new launches.",
    longDesc: "Speed to market is critical for new product launches. INKO's fast sampling service delivers physical label samples in 3–5 business days, allowing you to test your label design on actual packaging before committing to a full production run.",
    features: [
      "Physical samples in 3–5 business days",
      "Full production quality samples",
      "Multiple design variations for A/B testing",
      "Accurate color and finish representation",
      "No minimum quantity for sampling",
      "Free sample shipping to most countries",
    ],
    benefits: ["3–5 Day Samples", "Full Quality", "A/B Testing", "Free Shipping"],
    highlights: { moq: "No minimum for samples", leadTime: "3–5 business days", sampleTime: "3–5 business days", shipping: "Free to most countries" },
    faqs: [
      { q: "How quickly can I receive physical label samples?", a: "We produce physical label samples in 3–5 business days after artwork approval. Shipping time depends on your location, typically 3–7 days via DHL or FedEx." },
      { q: "Are samples produced at full production quality?", a: "Yes. Our samples are produced on the same equipment and with the same materials as full production runs, giving you an accurate representation of the final product." },
      { q: "Can I test multiple design variations in one sample order?", a: "Yes. We can produce multiple design variations (A/B testing) in a single sample order, allowing you to compare different designs, materials, or finishes before committing to production." },
      { q: "Is sample production free?", a: "Sample production is charged at cost, typically $50–$150 depending on the complexity and quantity. This cost is credited against your first production order." },
      { q: "Can I get samples shipped to multiple locations?", a: "Yes. We can ship samples to multiple locations simultaneously, which is useful for testing with different stakeholders or in different markets." },
    ],
  },
  {
    slug: "multi-sku",
    icon: Layers,
    title: "Multi-SKU Label Management",
    subtitle: "Manage labels for complex product lines with multiple SKUs",
    desc: "Streamlined label management for brands with multiple SKUs, variants, and product lines.",
    longDesc: "Managing labels for multiple SKUs can be complex and time-consuming. INKO's multi-SKU label management system helps you track inventory, reorder, and manage labels for all your product variants efficiently.",
    features: [
      "Centralized label inventory management",
      "Automated reorder notifications",
      "Consistent quality across all SKUs",
      "Flexible MOQ per SKU",
      "Version control for label updates",
      "Dedicated account manager for complex operations",
    ],
    benefits: ["Centralized Management", "Auto Reorder", "Version Control", "Dedicated Support"],
    highlights: { moq: "500 rolls / SKU", leadTime: "7–10 business days", sampleTime: "3–5 business days", shipping: "DHL / FedEx worldwide" },
    faqs: [
      { q: "How many SKUs can you manage for a single brand?", a: "We can manage any number of SKUs for a single brand. Our largest multi-SKU accounts have over 200 active label designs. Our management system scales to accommodate your needs." },
      { q: "How does the automated reorder notification work?", a: "We track your label inventory and send you a reorder notification when your stock reaches a predefined minimum level. You can set the reorder threshold for each SKU individually." },
      { q: "Can you manage label version control for design updates?", a: "Yes. Our version control system tracks all label design changes, ensuring you always receive the correct version and maintaining a complete history of all design revisions." },
      { q: "Can different SKUs have different materials and finishes?", a: "Yes. Each SKU can have its own material, finish, size, and adhesive specification. Our management system tracks all specifications separately for each SKU." },
      { q: "How do I place reorders for multiple SKUs?", a: "You can place reorders through our online portal, by email, or through EDI/API integration. Our account manager will confirm all specifications and lead times for each SKU." },
    ],
  },
  {
    slug: "color-matching",
    icon: Building2,
    title: "Color Matching & Brand Consistency",
    subtitle: "PANTONE-matched labels for consistent brand identity",
    desc: "Precise PANTONE color matching to ensure your labels are consistent across every production run.",
    longDesc: "Brand color consistency is critical for maintaining brand identity. INKO uses PANTONE color matching and spectrophotometer measurement to ensure your label colors are consistent across every production run, regardless of order size.",
    features: [
      "PANTONE color matching for all standard colors",
      "Spectrophotometer measurement for color accuracy",
      "Color consistency across production runs",
      "Color profile management for long-term consistency",
      "Delta E measurement and reporting",
      "Available for all label materials and finishes",
    ],
    benefits: ["PANTONE Matching", "Color Accuracy", "Run Consistency", "Delta E Reporting"],
    highlights: { moq: "500 rolls / design", leadTime: "7–10 business days", sampleTime: "3–5 business days", shipping: "DHL / FedEx worldwide" },
    faqs: [
      { q: "What is Delta E and why does it matter?", a: "Delta E is a measurement of color difference. A Delta E of less than 2 is considered imperceptible to the human eye. INKO guarantees Delta E < 2 for all PANTONE-matched colors." },
      { q: "How do you ensure color consistency across multiple production runs?", a: "We store your color profiles in our color management system and use spectrophotometer measurement to verify color accuracy before releasing each production run. This ensures consistent colors across all orders." },
      { q: "Can you match colors from an existing label or physical sample?", a: "Yes. We can measure the color of an existing label or physical sample using our spectrophotometer and create a color profile to match it in production." },
      { q: "What PANTONE color system do you use?", a: "We use the PANTONE Matching System (PMS) for spot color matching. We can also match PANTONE CMYK, PANTONE Metallic, and PANTONE Pastel colors." },
      { q: "Do you provide color approval proofs before production?", a: "Yes. We provide a color proof (either digital or physical) for approval before starting production. Production begins only after you approve the color proof." },
    ],
  },
  {
    slug: "private-label",
    icon: Factory,
    title: "Private-Label & Confidential",
    subtitle: "Confidential label production for private-label products",
    desc: "Confidential label production for private-label brands and products requiring discretion.",
    longDesc: "Private-label brands require complete confidentiality in their label production. INKO's confidential production service ensures your brand identity, designs, and formulations remain strictly private. We sign NDAs and implement strict data security protocols.",
    features: [
      "NDA signing for all private-label clients",
      "Strict data security and confidentiality protocols",
      "No sharing of client designs or information",
      "Secure file storage and access controls",
      "Confidential shipping and packaging",
      "Dedicated production team for sensitive projects",
    ],
    benefits: ["NDA Protection", "Data Security", "Confidential Shipping", "Dedicated Team"],
    highlights: { moq: "500 rolls / design", leadTime: "7–10 business days", sampleTime: "3–5 business days", shipping: "Confidential packaging available" },
    faqs: [
      { q: "Do you sign NDAs for private-label clients?", a: "Yes. We sign non-disclosure agreements (NDAs) with all private-label clients before any artwork or product information is shared. Our NDAs are legally binding and enforceable." },
      { q: "How do you protect my label designs from being copied?", a: "We store all client artwork in a secure, access-controlled system. Only the production team assigned to your account has access to your files. We do not share or sell client designs." },
      { q: "Can you ship labels without your company name on the packaging?", a: "Yes. We offer confidential shipping where our company name is omitted from the shipping documents and packaging, protecting your brand's sourcing confidentiality." },
      { q: "Do you produce labels for competing brands?", a: "We work with many brands across various industries. Our strict confidentiality protocols ensure that no information is shared between competing clients." },
      { q: "Can I visit your factory to verify your confidentiality practices?", a: "Yes. We welcome factory visits from private-label clients. You can verify our security protocols, production processes, and data management practices in person." },
    ],
  },
  {
    slug: "long-term-supply",
    icon: Users,
    title: "Long-Term Label Supply",
    subtitle: "Reliable long-term label supply partnerships",
    desc: "Stable, long-term label supply partnerships for brands requiring consistent supply over time.",
    longDesc: "Long-term supply partnerships require a label manufacturer who can deliver consistent quality, competitive pricing, and reliable delivery over years of production. INKO has been supplying labels to global brands for 15+ years, with a track record of reliability and quality.",
    features: [
      "15+ years of export experience",
      "Stable pricing with annual contract options",
      "Priority production scheduling for long-term clients",
      "Dedicated account management",
      "Proactive communication on material and cost changes",
      "Quality consistency guaranteed across all runs",
    ],
    benefits: ["15+ Years Experience", "Stable Pricing", "Priority Scheduling", "Dedicated Support"],
    highlights: { moq: "500 rolls / design", leadTime: "7–10 business days", sampleTime: "3–5 business days", shipping: "DHL / FedEx / sea freight" },
    faqs: [
      { q: "What is the longest supply relationship you have maintained?", a: "Our longest supply relationship is 12+ years with a European cosmetics brand. We have maintained consistent quality and pricing throughout this relationship." },
      { q: "Do you offer annual pricing contracts?", a: "Yes. We offer annual pricing contracts that lock in material and production costs for 12 months, protecting you from price fluctuations and ensuring budget predictability." },
      { q: "How do you handle material shortages or supply chain disruptions?", a: "We maintain strategic material inventory and have multiple qualified material suppliers to minimize the impact of supply chain disruptions. We proactively communicate any potential issues and work with you to find solutions." },
      { q: "Do long-term clients receive priority production scheduling?", a: "Yes. Long-term clients receive priority production scheduling, ensuring your orders are processed first during peak production periods." },
      { q: "Can you guarantee price stability for long-term orders?", a: "We offer annual pricing contracts that guarantee price stability for 12 months. For longer-term agreements, we can discuss multi-year pricing arrangements with appropriate price adjustment mechanisms." },
    ],
  },
];

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const solution = solutions.find((s) => s.slug === params.slug);
  if (!solution) notFound();

  const Icon = solution.icon;
  const relatedSolutions = solutions.filter(s => s.slug !== solution.slug).slice(0, 6);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#0F2744] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/" className="hover:text-[#E8A020] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/60">Solutions</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/80">{solution.title}</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#E8A020]/20 text-[#E8A020] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded mb-5">
              <Icon className="w-3.5 h-3.5" />
              {solution.subtitle}
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-black text-white uppercase leading-tight mb-5" style={{ fontFamily: "var(--font-barlow)" }}>
              {solution.title}
            </h1>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">{solution.desc}</p>
            <div className="flex flex-wrap gap-3">
              {solution.benefits.map((b) => (
                <span key={b} className="bg-white/10 text-white/80 text-xs font-bold tracking-wider px-3 py-1.5 rounded">{b}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]" style={{ fontFamily: "var(--font-barlow)" }}>
                GET A CUSTOM QUOTE <ChevronRight className="w-4 h-4" />
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
            {/* Left: Description + Features + FAQ */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="font-display text-3xl font-black text-[#0F2744] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
                  How INKO Supports {solution.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base">{solution.longDesc}</p>
              </div>

              <div>
                <h3 className="font-bold text-[#0F2744] text-sm uppercase tracking-widest mb-4">What We Offer</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {solution.features.map((f) => (
                    <div key={f} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                      <CheckCircle2 className="w-4 h-4 text-[#E8A020] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-black text-[#0F2744] uppercase mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
                  Frequently Asked Questions
                </h2>
                <div className="bg-gray-50 rounded-xl p-6">
                  {solution.faqs.map((faq) => (
                    <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Highlights Card + CTA */}
            <div className="space-y-6">
              <div className="bg-[#0F2744] rounded-2xl p-6 text-white sticky top-24">
                <h3 className="font-display text-lg font-black uppercase mb-5 text-[#E8A020]" style={{ fontFamily: "var(--font-barlow)" }}>
                  At a Glance
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Min. Order Qty", value: solution.highlights.moq },
                    { label: "Production Lead Time", value: solution.highlights.leadTime },
                    { label: "Sample Lead Time", value: solution.highlights.sampleTime },
                    { label: "Shipping", value: solution.highlights.shipping },
                    { label: "Quality Cert.", value: "ISO 9001:2015" },
                    { label: "Experience", value: "15+ years export" },
                    { label: "Countries Served", value: "60+ countries" },
                    { label: "Response Time", value: "Within 24 hours" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-start gap-2 py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-xs">{label}</span>
                      <span className="text-white text-xs font-semibold text-right">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  <Link href="/contact" className="block w-full text-center bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-6 py-3 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
                    Get a Custom Quote
                  </Link>
                  <Link href="/contact" className="block w-full text-center border border-white/30 hover:border-white text-white font-bold px-6 py-3 rounded text-sm uppercase tracking-wide transition-all duration-200">
                    Request Free Sample
                  </Link>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-[#0F2744] text-sm uppercase tracking-widest mb-4">Key Benefits</h3>
                <div className="flex flex-wrap gap-2">
                  {solution.benefits.map((b) => (
                    <span key={b} className="bg-white border border-gray-200 text-[#0F2744] text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Solutions ─────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-black text-[#0F2744] uppercase mb-8" style={{ fontFamily: "var(--font-barlow)" }}>
            Other Solutions We Offer
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {relatedSolutions.map((s) => {
              const RelIcon = s.icon;
              return (
                <Link key={s.slug} href={`/solutions/${s.slug}`} className="group bg-white rounded-xl p-4 border border-gray-200 hover:border-[#E8A020] hover:shadow-md transition-all duration-200 flex flex-col items-center text-center gap-3">
                  <div className="w-10 h-10 bg-[#0F2744]/5 group-hover:bg-[#E8A020]/10 rounded-full flex items-center justify-center transition-colors">
                    <RelIcon className="w-5 h-5 text-[#0F2744] group-hover:text-[#E8A020] transition-colors" />
                  </div>
                  <span className="text-[#0F2744] text-xs font-semibold leading-tight">{s.title}</span>
                </Link>
              );
            })}
          </div>
          <div className="mt-6 text-center">
            <Link href="/products" className="inline-flex items-center gap-2 text-[#E8A020] font-bold text-sm uppercase tracking-wide hover:underline">
              View All Products <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
