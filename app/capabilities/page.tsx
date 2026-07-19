import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, CheckCircle2, Play, Upload, Layers, Zap, Shield, Eye, Scissors, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities — INKO Custom Labels",
  description: "Explore INKO's full label manufacturing capabilities: 7-color resin plate flexo press, foil stamping & die-cutting high-speed press, hot lamination, vision inspection & slitting.",
};

const equipment = [
  {
    id: "flexo-press",
    name: "7-Color Resin Plate Flexo Press",
    subtitle: "Inline Lamination · Adhesive-Side Printing · Inline Die-Cutting",
    img: "/manus-storage/equipment-flexo-press_e07c04a8.jpg",
    icon: Layers,
    color: "#E8A020",
    specs: [
      "7-color resin plate flexographic printing",
      "Inline gloss / matte / soft-touch lamination",
      "Adhesive-side (back) printing for no-label-look",
      "Inline precision die-cutting",
      "PANTONE matching & extended color gamut",
      "Consistent batch-to-batch color accuracy",
    ],
    highlight: "All-in-one press: print → laminate → die-cut in a single pass.",
    video: null,
  },
  {
    id: "foil-diecutting",
    name: "Foil Stamping + Die-Cutting High-Speed Press",
    subtitle: "Hot Foil · Cold Foil · Precision Custom Shapes",
    img: "/manus-storage/equipment-foil-diecutting_c1c99812.jpg",
    icon: Zap,
    color: "#E8A020",
    specs: [
      "Hot foil stamping (gold, silver, holographic, custom)",
      "Cold foil stamping for fine-detail metallic effects",
      "High-speed precision die-cutting",
      "Custom shape labels: round, oval, contour, kiss-cut",
      "Suitable for cosmetic, wine, luxury & premium labels",
      "Tight registration for multi-layer foil + print alignment",
    ],
    highlight: "Premium metallic finishes and custom die shapes — in one high-speed pass.",
    video: null,
  },
  {
    id: "hot-laminator",
    name: "Hot Lamination Machine",
    subtitle: "Thermal Protective Overlaminates · Premium Foil Finishes",
    img: "/manus-storage/equipment-hot-laminator_d24dc2b6.jpg",
    icon: Shield,
    color: "#E8A020",
    specs: [
      "Thermal hot lamination for heavy-duty protection",
      "Gloss, matte and soft-touch thermal film options",
      "Foil-finish overlaminates for luxury label aesthetics",
      "Chemical, moisture and scratch resistance",
      "Suitable for outdoor, industrial and premium labels",
      "Consistent film adhesion across full roll width",
    ],
    highlight: "Durable protection and premium surface finishes for high-end label applications.",
    video: null,
  },
  {
    id: "inspection-slitting",
    name: "Vision Inspection + Slitting Lines (×2)",
    subtitle: "100% Defect Detection · Precision Roll Slitting",
    img: "/manus-storage/equipment-inspection-slitting_3b851206.jpg",
    icon: Eye,
    color: "#E8A020",
    specs: [
      "100% vision-based defect detection (color, print, die-cut)",
      "Automatic defect marking and rejection",
      "Precision slitting to customer-specified roll width",
      "Custom core size, roll length and winding direction",
      "Two independent lines for parallel production",
      "Full inspection report available per order",
    ],
    highlight: "Zero-defect delivery: every roll inspected, slit and rewound to your exact spec.",
    video: null,
  },
];

const finishing = [
  { icon: Layers, label: "Inline Lamination", desc: "Gloss, matte, soft-touch applied on-press" },
  { icon: Zap, label: "Foil Stamping", desc: "Hot foil, cold foil, holographic" },
  { icon: Scissors, label: "Die Cutting", desc: "Inline & offline, any custom shape" },
  { icon: Sparkles, label: "Spot UV", desc: "Selective gloss coating for premium look" },
  { icon: Shield, label: "Embossing", desc: "Raised texture for tactile luxury feel" },
  { icon: Eye, label: "Inspection", desc: "100% vision QC before shipment" },
];

function VideoPlaceholder({ label }: { label: string }) {
  return (
    <div className="relative w-full aspect-video bg-[#0F2744]/10 rounded-xl border-2 border-dashed border-[#0F2744]/20 flex flex-col items-center justify-center gap-3 group">
      <div className="w-14 h-14 rounded-full bg-[#E8A020]/20 flex items-center justify-center group-hover:bg-[#E8A020]/30 transition-colors">
        <Play className="w-6 h-6 text-[#E8A020] ml-1" />
      </div>
      <div className="text-center px-4">
        <p className="text-[#0F2744] font-semibold text-sm">{label}</p>
        <p className="text-gray-400 text-xs mt-1">Video coming soon — replace with your factory footage</p>
      </div>
      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1">
        <Upload className="w-3 h-3 text-gray-400" />
        <span className="text-[10px] text-gray-400 font-medium">Upload Video</span>
      </div>
    </div>
  );
}

export default function CapabilitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0F2744] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">Our Equipment</div>
          <h1 className="font-display text-6xl font-black text-white uppercase leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            Built to Print.<br /><span className="text-[#E8A020]">Built to Last.</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-lg">
            From resin-plate 7-color flexo printing to foil stamping, hot lamination and 100% vision inspection — every label leaves our facility print-perfect and ready for your production line.
          </p>
        </div>
      </section>

      {/* Equipment Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {equipment.map((eq, idx) => {
            const Icon = eq.icon;
            const isEven = idx % 2 === 0;
            return (
              <div key={eq.id} id={eq.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${isEven ? "" : "lg:flex-row-reverse"}`}>
                {/* Image + Video */}
                <div className={`space-y-4 ${!isEven ? "lg:order-2" : ""}`}>
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={eq.img}
                      alt={eq.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#E8A020] rounded-full px-3 py-1.5">
                      <Icon className="w-3.5 h-3.5 text-[#0F2744]" />
                      <span className="text-[10px] font-bold text-[#0F2744] uppercase tracking-wider">Equipment {idx + 1}</span>
                    </div>
                  </div>
                  <VideoPlaceholder label={`${eq.name} — Factory Video`} />
                </div>

                {/* Info */}
                <div className={!isEven ? "lg:order-1" : ""}>
                  <div className="inline-flex items-center gap-2 bg-[#E8A020]/10 rounded-full px-3 py-1 mb-4">
                    <Icon className="w-3.5 h-3.5 text-[#E8A020]" />
                    <span className="text-[#E8A020] text-xs font-bold uppercase tracking-wider">Equipment {idx + 1} of {equipment.length}</span>
                  </div>
                  <h2 className="text-4xl font-black text-[#0F2744] uppercase leading-tight mb-2" style={{ fontFamily: "var(--font-barlow)" }}>
                    {eq.name}
                  </h2>
                  <p className="text-[#E8A020] font-semibold text-sm uppercase tracking-wide mb-5">{eq.subtitle}</p>

                  {/* Highlight */}
                  <div className="bg-[#0F2744] rounded-xl p-4 mb-6 border-l-4 border-[#E8A020]">
                    <p className="text-white/90 text-sm leading-relaxed font-medium">{eq.highlight}</p>
                  </div>

                  {/* Specs */}
                  <ul className="space-y-2.5 mb-8">
                    {eq.specs.map(spec => (
                      <li key={spec} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#E8A020] flex-shrink-0 mt-0.5" />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-6 py-3 rounded text-sm uppercase tracking-wide transition-all duration-200"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    Request a Sample <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Finishing Capabilities Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">Full Finishing Suite</div>
            <h2 className="text-4xl font-black text-[#0F2744] uppercase" style={{ fontFamily: "var(--font-barlow)" }}>
              Every Finish. In-House.
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">All finishing processes are performed in-house — no outsourcing, no delays, full quality control.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {finishing.map(f => {
              const Icon = f.icon;
              return (
                <div key={f.label} className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <div className="w-12 h-12 rounded-xl bg-[#E8A020]/15 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-[#E8A020]" />
                  </div>
                  <div className="font-bold text-[#0F2744] text-sm mb-1">{f.label}</div>
                  <div className="text-gray-400 text-xs leading-snug">{f.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0F2744]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            Ready to See It in Action?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Request a free sample pack — we&apos;ll print your artwork on our equipment and ship it to you within 5 business days.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
              Request Free Sample <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/products" className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
