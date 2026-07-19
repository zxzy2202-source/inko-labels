"use client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2, Building2, Rocket, Factory, Package, Layers, Users } from "lucide-react";

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
  },
];

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const solution = solutions.find((s) => s.slug === params.slug);
  if (!solution) notFound();

  const Icon = solution.icon;

  return (
    <>
      <section className="bg-[#0F2744] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <Link href="/" className="hover:text-[#E8A020] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/80">Solutions</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/80">{solution.title}</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-[#E8A020]/20 text-[#E8A020] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded mb-4">
            <Icon className="w-3.5 h-3.5" />
            {solution.subtitle}
          </div>
          <h1 className="font-display text-6xl font-black text-white uppercase leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {solution.title}
          </h1>
          <p className="text-white/70 max-w-2xl text-lg mb-8">{solution.desc}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]" style={{ fontFamily: "var(--font-barlow)" }}>
              GET A CUSTOM QUOTE <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl font-black text-[#0F2744] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
                How INKO Supports {solution.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">{solution.longDesc}</p>
              <h3 className="font-bold text-[#0F2744] text-sm uppercase tracking-widest mb-4">What We Offer</h3>
              <ul className="space-y-3">
                {solution.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E8A020] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="bg-[#0F2744] rounded-2xl p-6 text-white">
                <h3 className="font-display text-lg font-black uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>Key Benefits</h3>
                <div className="flex flex-wrap gap-2">
                  {solution.benefits.map((b) => (
                    <span key={b} className="bg-[#E8A020]/20 text-[#E8A020] text-xs font-bold px-3 py-1.5 rounded">{b}</span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-[#0F2744] text-sm uppercase tracking-widest mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 text-sm mb-4">Contact us today for a free consultation and custom quote tailored to your needs.</p>
                <Link href="/contact" className="block w-full text-center bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold py-3 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-black text-[#0F2744] uppercase mb-6" style={{ fontFamily: "var(--font-barlow)" }}>Explore Our Products</h2>
          <div className="flex flex-wrap gap-3">
            {["Cosmetic Labels", "Food Labels", "Beverage Labels", "Pet Food Labels", "Supplement Labels", "Industrial Labels"].map((p) => (
              <Link key={p} href="/products" className="bg-white hover:bg-[#0F2744] hover:text-white text-[#0F2744] text-sm font-medium px-4 py-2 rounded transition-all duration-200 border border-gray-200 hover:border-[#0F2744]">
                {p}
              </Link>
            ))}
            <Link href="/products" className="bg-[#0F2744] text-white text-sm font-medium px-4 py-2 rounded border border-[#0F2744]">
              View All 40+ →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
