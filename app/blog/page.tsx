import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Label Printing Tips & Industry Insights | INKO Custom Labels",
  description: "Expert articles on custom label printing, materials, finishes and B2B packaging trends. Learn how to choose the right labels for your products.",
};

export const posts = [
  {
    slug: "how-to-choose-label-material",
    title: "How to Choose the Right Label Material for Your Product",
    excerpt: "BOPP, PET, PE, paper — each material has different strengths. This guide helps B2B buyers select the best label substrate for cosmetics, food, beverages and industrial products.",
    category: "Label Materials",
    date: "July 10, 2025",
    readTime: "6 min read",
    tags: ["BOPP", "PET Film", "Paper Labels", "Material Guide"],
    content: `
## Why Label Material Matters

The label material you choose directly affects durability, appearance, and cost. For B2B buyers sourcing labels at scale, selecting the wrong substrate can result in labels peeling, fading, or failing in the field — damaging your brand and costing money in reprints.

## The Main Label Substrates

### Paper Labels
Best for: dry goods, shipping boxes, wine bottles (short shelf life), eco-friendly brands.
- **Coated paper**: smooth surface, vibrant print, cost-effective
- **Kraft paper**: natural/rustic look, popular for organic and artisan brands
- **Textured paper**: premium tactile feel for luxury products

### White BOPP (Biaxially Oriented Polypropylene)
Best for: cosmetics, shampoos, cleaning products, food jars.
- Waterproof and moisture-resistant
- Excellent print clarity and color vibrancy
- Durable in humid environments (bathrooms, kitchens)

### Clear BOPP
Best for: bottles where you want a "no-label look" — the label appears to be printed directly on the container.
- Transparent film with printed graphics
- Can be back-printed (adhesive-side printing) for scratch protection
- Popular for premium beverages, cosmetics, and essential oils

### Metallic BOPP
Best for: premium cosmetics, spirits, supplements.
- Silver or gold metallic base for luxury aesthetics
- Combines with foil stamping for maximum impact
- High perceived value at moderate cost

### PET Film
Best for: industrial chemicals, automotive lubricants, outdoor products.
- Superior chemical and solvent resistance
- High-temperature tolerance
- Dimensionally stable under stress

### PE Film
Best for: squeezable bottles, flexible packaging, shrink sleeves.
- Flexible and conformable to curved surfaces
- Tear-resistant
- Ideal for personal care and household products

## Quick Selection Guide

| Application | Recommended Material |
|---|---|
| Cosmetics / Skincare | White or Clear BOPP |
| Essential Oils | Clear BOPP (back-print) |
| Food & Beverage | White BOPP or Coated Paper |
| Wine & Spirits | Coated Paper or Metallic BOPP |
| Industrial / Chemical | PET Film |
| Eco / Organic Brands | Kraft or Recycled Paper |
| Freezer Products | Freezer-grade BOPP or PET |

## Need Help Choosing?

Contact our technical team with your product type, storage conditions, and application environment. We'll recommend the right material and send you a free sample within 5 business days.
    `,
  },
  {
    slug: "foil-stamping-vs-metallic-ink",
    title: "Foil Stamping vs. Metallic Ink: Which Gives Better Results?",
    excerpt: "Both create metallic effects on labels, but they work very differently. Learn when to use hot foil stamping and when metallic ink printing is the smarter choice for your budget and brand.",
    category: "Printing Techniques",
    date: "June 25, 2025",
    readTime: "5 min read",
    tags: ["Foil Stamping", "Metallic Ink", "Printing", "Cosmetic Labels"],
    content: `
## The Metallic Effect Dilemma

When designing premium labels — especially for cosmetics, spirits, or luxury goods — brands often want that eye-catching metallic shimmer. Two main options exist: **hot foil stamping** and **metallic ink printing**. Each has distinct advantages depending on your budget, order volume, and design complexity.

## Hot Foil Stamping

Foil stamping uses heat and pressure to bond a thin metallic foil to the label surface. The result is a true metallic finish with exceptional depth and reflectivity.

**Advantages:**
- Mirror-bright metallic finish — far more reflective than ink
- Available in gold, silver, rose gold, holographic, and custom colors
- Scratch-resistant and durable
- Creates a premium, high-end perception

**Limitations:**
- Requires a custom die (tooling cost, typically $50–$150 one-time)
- Better suited for solid shapes and bold text — fine details can be challenging
- Slightly higher per-unit cost at low volumes

**Best for:** cosmetic brands, spirits, supplements, luxury packaging where premium perception is critical.

## Metallic Ink Printing

Metallic inks contain aluminum or bronze pigments that create a shimmery effect when printed. They can be applied using standard flexographic or digital printing.

**Advantages:**
- No tooling cost — works with any design
- Suitable for gradients, fine details, and complex artwork
- Lower setup cost for short runs
- Can be combined with other colors in the same print pass

**Limitations:**
- Less reflective than foil — the metallic effect is more subtle
- Can appear flat under certain lighting conditions
- Durability varies by ink formulation

**Best for:** brands on a tighter budget, complex designs with gradients, short-run or variable data labels.

## Side-by-Side Comparison

| Factor | Hot Foil Stamping | Metallic Ink |
|---|---|---|
| Reflectivity | ★★★★★ | ★★★ |
| Design Flexibility | Limited to solid areas | Full design freedom |
| Tooling Cost | $50–$150 (one-time) | None |
| Per-Unit Cost | Higher at low MOQ | Lower |
| Durability | Excellent | Good |
| Best For | Luxury / premium | Budget / complex art |

## Our Recommendation

For most cosmetic and spirits brands, **foil stamping delivers a significantly better shelf presence** and the tooling cost is quickly amortized over production runs. For brands with complex artwork or tight budgets, metallic ink is a practical and attractive alternative.

INKO offers both options — contact us to discuss which approach fits your brand and budget.
    `,
  },
  {
    slug: "cosmetic-label-requirements",
    title: "Cosmetic Label Requirements: What B2B Buyers Need to Know",
    excerpt: "Cosmetic labels must meet strict regulatory requirements in the US, EU, and other markets. This guide covers mandatory elements, material recommendations, and common compliance mistakes.",
    category: "Industry Guide",
    date: "June 12, 2025",
    readTime: "7 min read",
    tags: ["Cosmetic Labels", "FDA", "EU Regulation", "Compliance"],
    content: `
## Why Compliance Matters for Cosmetic Labels

Cosmetic labels are regulated in virtually every major market. Non-compliant labels can result in product recalls, import rejections, and brand damage. For B2B buyers — whether you're a brand owner, contract manufacturer, or private label supplier — understanding these requirements is essential before placing a label order.

## US FDA Requirements

The FDA regulates cosmetic labeling under the Fair Packaging and Labeling Act (FPLA) and the Federal Food, Drug, and Cosmetic Act (FD&C Act).

**Required elements on the principal display panel (PDP):**
- Product identity (what the product is)
- Net quantity of contents

**Required elements on the information panel:**
- Distributor name and address
- Ingredient list (INCI names, in descending order of predominance)
- Any required warnings

**Key rules:**
- Ingredient names must use INCI (International Nomenclature of Cosmetic Ingredients) format
- Font size requirements apply for net quantity and ingredient list
- "Cruelty-free" and "natural" claims are not regulated by FDA but must not be misleading

## EU Cosmetics Regulation (EC No 1223/2009)

The EU has stricter requirements than the US, including:

- **Responsible Person** (RP) name and address must appear on the label
- **Product function** must be stated unless clear from presentation
- **Nominal content** (weight or volume)
- **Date of minimum durability** (PAO symbol or "best before" date)
- **Precautions and warnings**
- **Batch number** for traceability
- **Country of origin** (if outside EU)
- **Ingredient list** in INCI format

## Material Recommendations for Cosmetics

| Product Type | Recommended Material | Finish |
|---|---|---|
| Skincare bottles | Clear or White BOPP | Matte or soft-touch |
| Perfume / fragrance | Coated paper or metallic BOPP | Foil stamping + emboss |
| Lip products | White BOPP | Gloss lamination |
| Serums (glass) | Clear BOPP (back-print) | No-label look |
| Sunscreen | White BOPP | Waterproof lamination |

## Common Compliance Mistakes

1. **Missing INCI names** — using common names instead of INCI format
2. **Font too small** — ingredient lists below minimum readable size
3. **Missing PAO symbol** — forgetting the open-jar symbol for EU market
4. **Incorrect net content format** — using volume for solid products or vice versa
5. **Misleading claims** — "100% natural" without substantiation

## How INKO Supports Compliance

We don't provide regulatory advice, but we do:
- Print to your approved artwork with pixel-perfect accuracy
- Offer proofing services before production runs
- Provide test prints for regulatory review
- Support small MOQ for market-specific label variants

Contact us to discuss your cosmetic label project.
    `,
  },
  {
    slug: "low-moq-label-printing-guide",
    title: "Low MOQ Label Printing: A Complete Guide for Small Brands",
    excerpt: "Starting a new product line? Low minimum order quantities make custom label printing accessible for startups, DTC brands and multi-SKU businesses. Here's everything you need to know.",
    category: "Buying Guide",
    date: "May 28, 2025",
    readTime: "5 min read",
    tags: ["Low MOQ", "Startup", "DTC Brands", "Custom Labels"],
    content: `
## What Is Low MOQ Label Printing?

MOQ stands for Minimum Order Quantity — the smallest number of units a manufacturer will produce in a single order. Traditional label printing often required 5,000–10,000 rolls per design, making it inaccessible for small brands.

Low MOQ label printing (typically 500–1,000 rolls) has changed the game for startups, DTC brands, and businesses with multiple SKUs.

## Who Benefits from Low MOQ?

- **Startups** launching their first product and testing the market
- **DTC brands** with multiple product variants (flavors, sizes, scents)
- **Seasonal products** that need limited runs
- **Private label brands** testing new formulations
- **Businesses entering new markets** with region-specific labels

## What to Expect at Low MOQ

### Pricing
Per-unit costs are higher at low MOQ compared to large runs — this is normal and expected. The trade-off is flexibility: you're not committing to 10,000 rolls of a label you may need to update.

### Lead Times
- **Sample/proof**: 3–5 business days
- **Production**: 7–12 business days
- **Rush orders**: available on request

### Quality
At INKO, low MOQ orders receive the same quality standards as large runs — same materials, same printing process, same QC inspection.

## Tips for Ordering Low MOQ Labels

1. **Finalize your artwork before ordering** — changes after production starts incur costs
2. **Order slightly more than you need** — buffer stock prevents stockouts during reorders
3. **Use standard sizes where possible** — custom die shapes add tooling costs
4. **Consider roll format** — roll labels are more cost-effective than sheet labels for most applications
5. **Request a physical sample first** — always approve a printed sample before the full run

## INKO's Low MOQ Policy

We accept orders from **500 rolls per design** with no setup fees on standard sizes. Custom die shapes require a one-time tooling fee ($50–$150 depending on complexity).

Contact us for a quote — we typically respond within 24 hours.
    `,
  },
  {
    slug: "pet-food-label-design-tips",
    title: "Pet Food Label Design: 7 Tips to Stand Out on Shelf",
    excerpt: "The pet food market is booming and competition is fierce. These 7 design and material tips will help your pet food labels attract buyers and build brand loyalty.",
    category: "Design Tips",
    date: "May 15, 2025",
    readTime: "4 min read",
    tags: ["Pet Food Labels", "Label Design", "Packaging", "BOPP"],
    content: `
## The Pet Food Label Challenge

Pet food is one of the fastest-growing CPG categories globally. With thousands of brands competing on shelf and online, your label is often the first — and sometimes only — touchpoint with a potential buyer. Getting it right matters.

## 7 Tips for Standout Pet Food Labels

### 1. Use High-Impact Photography or Illustration
Pet food buyers respond to emotional imagery — a happy dog, a playful cat, or a close-up of fresh ingredients. Invest in quality photography or professional illustration. Your label is a 3-second sales pitch.

### 2. Choose the Right Material
- **Dry food bags**: paper or BOPP with high-tack adhesive
- **Wet food cans**: BOPP or PET film (moisture and steam resistant)
- **Treat pouches**: BOPP with matte or soft-touch lamination
- **Frozen food**: freezer-grade BOPP or PET

### 3. Make the Protein Source Prominent
Pet owners scan for protein sources first — "Salmon," "Chicken," "Beef." Make this the largest, most visible text element after your brand name.

### 4. Use Color to Signal Flavor/Variant
Consistent color coding across your product line helps shoppers quickly identify their preferred variant. Establish a clear color system and stick to it.

### 5. Don't Neglect the Back Label
The back label is where informed buyers make their decision. Include:
- Full ingredient list (in regulatory format)
- Guaranteed analysis
- Feeding guidelines
- Brand story or certifications

### 6. Consider Matte + Spot UV Finish
Matte lamination with spot UV accents (glossy highlights on specific elements) creates a premium, tactile experience that photographs beautifully for e-commerce.

### 7. Plan for Multiple SKUs Early
If you're launching multiple flavors or sizes, design your label system with variants in mind. A consistent layout with color-coded accents is far easier to manage than completely different designs per SKU.

## Material Recommendations

| Product | Material | Finish |
|---|---|---|
| Dry kibble bag | White BOPP | Matte + spot UV |
| Wet food can | PET film | Gloss lamination |
| Treat pouch | White BOPP | Soft-touch matte |
| Frozen raw | Freezer BOPP | Gloss |

## Ready to Print?

INKO specializes in pet food labels with low MOQ (500 rolls), fast turnaround, and worldwide shipping. Contact us for a free sample and quote.
    `,
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0F2744] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">Knowledge Hub</div>
          <h1 className="font-display text-6xl font-black text-white uppercase leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            Label Printing<br /><span className="text-[#E8A020]">Insights & Guides</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-lg">
            Expert articles on label materials, printing techniques, industry regulations, and B2B sourcing tips — written for brand owners and packaging buyers.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                {/* Category Banner */}
                <div className="bg-[#0F2744] px-5 py-3 flex items-center justify-between">
                  <span className="text-[#E8A020] text-xs font-bold uppercase tracking-wider">{post.category}</span>
                  <span className="text-white/50 text-xs flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-[#0F2744] font-bold text-lg leading-snug mb-3 group-hover:text-[#E8A020] transition-colors">{post.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="flex items-center gap-1 text-[10px] font-bold tracking-wider text-[#0F2744]/50 bg-gray-100 px-2 py-0.5 rounded">
                        <Tag className="w-2.5 h-2.5" />{tag}
                      </span>
                    ))}
                  </div>
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-gray-400 text-xs">{post.date}</span>
                    <span className="flex items-center gap-1 text-[#E8A020] text-xs font-bold group-hover:gap-2 transition-all">
                      Read More <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F2744]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white uppercase mb-3" style={{ fontFamily: "var(--font-barlow)" }}>
            Ready to Order Your Labels?
          </h2>
          <p className="text-white/60 mb-6">Get a free sample and quote within 24 hours.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-3 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
            Request Free Sample <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
