"use client";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2, Sparkles, Droplets, FlaskConical, Apple, Wine, Beer, Pill, PawPrint, Home, Car, Factory, Cpu, Leaf, FileText, Package, Layers, Shield, Thermometer, Zap, RotateCcw, AlertTriangle, Snowflake, Barcode, Scroll, Printer } from "lucide-react";

// ─── Industry Products ───────────────────────────────────────────────────────
const industryProducts = [
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
    finishes: ["Gloss Lamination", "Matte Lamination", "Soft-Touch Matte"],
    features: [
      "FDA-compliant food-safe inks and adhesives",
      "Waterproof and moisture-resistant constructions",
      "Freezer-grade adhesive for frozen food packaging",
      "High-resolution nutrition facts and ingredient printing",
      "Kraft and natural paper options for artisan brands",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Sauces & Condiments", "Snacks", "Specialty Food", "Organic Products", "Frozen Food"],
  },
  {
    slug: "beverage-labels",
    icon: Beer,
    title: "Beverage Bottle Labels",
    subtitle: "Moisture-resistant labels for bottles and cans",
    desc: "Waterproof, moisture-resistant labels for water bottles, juice, energy drinks, and beverages.",
    longDesc: "Beverage labels must withstand condensation, ice buckets, and refrigeration while maintaining their appearance. INKO produces high-quality beverage labels with excellent wet-strength adhesives and moisture-resistant film substrates suitable for all bottle types.",
    tags: ["WATERPROOF", "MOISTURE-RESISTANT", "ICE BUCKET PROOF", "WRAP-AROUND"],
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=1200&q=80",
    materials: ["Clear BOPP", "White BOPP", "Metallic BOPP", "PE Film"],
    finishes: ["Gloss Lamination", "Matte Lamination", "Soft-Touch Matte", "Foil Stamping"],
    features: [
      "Ice bucket and refrigeration-resistant adhesive",
      "Wrap-around label capability for cylindrical bottles",
      "No-label look with clear BOPP back-print",
      "Moisture and condensation resistance",
      "High-impact graphics for retail shelf appeal",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Water & Juice", "Energy Drinks", "Sports Drinks", "Tea & Coffee", "Craft Beverages"],
  },
  {
    slug: "wine-spirits-labels",
    icon: Wine,
    title: "Wine & Spirits Labels",
    subtitle: "Luxury labels for wine, spirits, and premium beverages",
    desc: "Premium paper and film labels for wine bottles, spirits, and luxury beverages.",
    longDesc: "Wine and spirits labels are a statement of brand identity and quality. INKO produces luxury labels with premium paper stocks, foil stamping, embossing, and specialty coatings that convey the prestige your brand deserves.",
    tags: ["LUXURY", "FOIL STAMPING", "EMBOSSED", "PREMIUM PAPER"],
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80",
    materials: ["Textured Paper", "Coated Paper", "Metallic Paper", "Clear BOPP"],
    finishes: ["Hot Foil Stamping", "Embossing", "Soft-Touch Matte", "Spot UV", "Gloss Varnish"],
    features: [
      "Premium textured and uncoated paper stocks",
      "Hot foil stamping in gold, silver, copper, holographic",
      "Blind embossing and debossing for tactile luxury",
      "Ice bucket and moisture-resistant options",
      "Neck labels, back labels, and capsule labels",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Wine", "Whisky & Bourbon", "Vodka & Gin", "Craft Beer", "Liqueur"],
  },
  {
    slug: "supplement-labels",
    icon: Pill,
    title: "Supplement Labels",
    subtitle: "GMP-compliant labels for nutraceuticals and supplements",
    desc: "GMP-compliant supplement and nutraceutical labels with precise color matching.",
    longDesc: "Supplement labels must comply with GMP regulations while communicating complex ingredient and dosage information clearly. INKO produces high-quality supplement labels with precise color matching, variable data printing for lot numbers and expiry dates, and durable constructions for bottles and pouches.",
    tags: ["GMP COMPLIANT", "HIGH-TACK", "VARIABLE DATA", "PANTONE MATCH"],
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80",
    materials: ["White BOPP", "PET Film", "Coated Paper"],
    finishes: ["Gloss Lamination", "Matte Lamination", "Soft-Touch Matte"],
    features: [
      "GMP-compatible food-safe inks and adhesives",
      "Variable data printing for lot numbers and expiry dates",
      "High-tack adhesive for HDPE and PP bottles",
      "Precise PANTONE color matching for brand consistency",
      "Tamper-evident label options",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Vitamins", "Protein Supplements", "Herbal Products", "Sports Nutrition", "Probiotics"],
  },
  {
    slug: "pet-food-labels",
    icon: PawPrint,
    title: "Pet Food & Pet Care Labels",
    subtitle: "Durable labels for pet food bags, cans, and treats",
    desc: "Durable, moisture-resistant labels for dry food bags, wet food cans, and pet treats.",
    longDesc: "Pet food labels must be durable, moisture-resistant, and eye-catching to stand out in a competitive market. INKO produces high-quality pet food labels with vibrant full-color printing, moisture-resistant constructions, and high-tack adhesives suitable for flexible pouches, cans, and rigid containers.",
    tags: ["MOISTURE-RESISTANT", "HIGH-TACK", "BOPP FILM", "VIBRANT COLORS"],
    img: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=1200&q=80",
    materials: ["White BOPP", "Clear BOPP", "Metallic BOPP", "Coated Paper"],
    finishes: ["Gloss Lamination", "Matte Lamination", "Soft-Touch Matte"],
    features: [
      "Moisture and humidity-resistant constructions",
      "High-tack adhesive for flexible pouches and cans",
      "Vibrant full-color printing for retail appeal",
      "FDA-compliant materials for pet food contact",
      "Nutritional information and barcode printing",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Dry Pet Food", "Wet Pet Food", "Pet Treats", "Pet Care Products"],
  },
  {
    slug: "household-labels",
    icon: Home,
    title: "Household & Cleaning Labels",
    subtitle: "Chemical-resistant labels for cleaning and household products",
    desc: "Durable, chemical-resistant labels for cleaning products, detergents, and household goods.",
    longDesc: "Household and cleaning product labels must withstand exposure to water, chemicals, and abrasion. INKO produces robust labels with chemical-resistant adhesives and film substrates that maintain their integrity throughout the product's shelf life.",
    tags: ["CHEMICAL-RESISTANT", "WATERPROOF", "HIGH-TACK", "DURABLE"],
    img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1200&q=80",
    materials: ["White BOPP", "PET Film", "PE Film"],
    finishes: ["Gloss Lamination", "Matte Lamination"],
    features: [
      "Chemical and solvent-resistant adhesive",
      "Waterproof and moisture-resistant film substrates",
      "High-tack adhesive for HDPE and PP containers",
      "GHS/CLP compliance for hazardous products",
      "Durable printing that resists fading and scratching",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Cleaning Products", "Detergents", "Disinfectants", "Air Fresheners", "Personal Care"],
  },
  {
    slug: "automotive-labels",
    icon: Car,
    title: "Automotive & Lubricant Labels",
    subtitle: "High-performance labels for automotive and lubricant products",
    desc: "Chemical-resistant, high-temperature labels for automotive fluids, lubricants, and parts.",
    longDesc: "Automotive labels must withstand extreme conditions including heat, oil, solvents, and mechanical stress. INKO produces high-performance automotive labels with specialized adhesives and substrates designed for the demanding automotive environment.",
    tags: ["CHEMICAL-RESISTANT", "HIGH-TEMP", "OIL-RESISTANT", "DURABLE"],
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80",
    materials: ["PET Film", "White BOPP", "Polyimide"],
    finishes: ["Gloss Lamination", "Matte Lamination"],
    features: [
      "High-temperature resistance up to 150°C",
      "Oil and chemical-resistant adhesive formulation",
      "Solvent-resistant printing inks",
      "Strong adhesion to metal, plastic, and rubber",
      "UV-resistant for outdoor applications",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Engine Oils", "Lubricants", "Automotive Parts", "Fluids & Additives"],
  },
  {
    slug: "industrial-labels",
    icon: Factory,
    title: "Industrial & Chemical Labels",
    subtitle: "Heavy-duty labels for industrial and chemical applications",
    desc: "Chemical-resistant, high-temperature labels for industrial and chemical use.",
    longDesc: "Industrial labels must perform in harsh environments with exposure to chemicals, extreme temperatures, and physical stress. INKO produces heavy-duty industrial labels with specialized materials and adhesives that meet the most demanding industrial requirements.",
    tags: ["CHEMICAL-RESISTANT", "HIGH-TEMP", "DURABLE", "GHS COMPLIANT"],
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    materials: ["PET Film", "Polyimide", "Aluminum Foil", "PE Film"],
    finishes: ["Gloss Lamination", "Matte Lamination"],
    features: [
      "GHS/CLP compliant hazard communication labels",
      "Chemical and solvent-resistant constructions",
      "High-temperature resistance for industrial processes",
      "Outdoor UV-resistant for long-term durability",
      "Tamper-evident and security label options",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Chemicals", "Manufacturing", "Logistics", "Warehousing", "Oil & Gas"],
  },
  {
    slug: "electronics-labels",
    icon: Cpu,
    title: "Electronics & Battery Labels",
    subtitle: "Precision labels for electronics, devices, and batteries",
    desc: "High-precision labels for electronics, batteries, cables, and electronic components.",
    longDesc: "Electronics labels require exceptional precision, small-format printing capability, and materials that meet electronics industry standards. INKO produces high-quality electronics labels with serialized variable data, barcodes, and QR codes for traceability.",
    tags: ["PRECISION", "VARIABLE DATA", "SMALL FORMAT", "ANTI-STATIC"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    materials: ["PET Film", "White BOPP", "Polyimide", "Aluminum Foil"],
    finishes: ["Gloss Lamination", "Matte Lamination"],
    features: [
      "High-precision small-format printing",
      "Serialized variable data (QR, barcode, serial number)",
      "Anti-static label options for sensitive components",
      "RoHS-compliant materials",
      "Tamper-evident and void labels",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Consumer Electronics", "Batteries", "Cables & Accessories", "Electronic Components"],
  },
  {
    slug: "agricultural-labels",
    icon: Leaf,
    title: "Agricultural Product Labels",
    subtitle: "UV-resistant labels for agricultural and garden products",
    desc: "UV-resistant, weatherproof labels for pesticides, fertilizers, seeds, and garden products.",
    longDesc: "Agricultural labels must withstand outdoor conditions including UV exposure, rain, and temperature fluctuations. INKO produces durable agricultural labels with UV-resistant inks and weatherproof constructions that comply with agricultural product labeling regulations.",
    tags: ["UV-RESISTANT", "WEATHERPROOF", "DURABLE", "REGULATORY COMPLIANT"],
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
    materials: ["White BOPP", "PET Film", "PE Film"],
    finishes: ["Gloss Lamination", "Matte Lamination"],
    features: [
      "UV-resistant inks for outdoor durability",
      "Weatherproof and moisture-resistant constructions",
      "Regulatory-compliant for pesticide and fertilizer labeling",
      "High-tack adhesive for various container types",
      "Durable printing that resists fading in sunlight",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Pesticides", "Fertilizers", "Seeds", "Garden Products", "Farm Supplies"],
  },
];

// ─── Material Products ────────────────────────────────────────────────────────
const materialProducts = [
  {
    slug: "paper-labels",
    icon: FileText,
    title: "Paper Labels",
    subtitle: "Classic coated paper labels for versatile applications",
    desc: "High-quality coated paper labels for food, cosmetics, retail, and general product labeling.",
    longDesc: "Coated paper labels are the most versatile and cost-effective label substrate, suitable for a wide range of applications. INKO's paper labels feature excellent print quality with vibrant colors, and are available in gloss, matte, and semi-gloss finishes.",
    tags: ["COATED PAPER", "GLOSS / MATTE", "COST-EFFECTIVE", "VERSATILE"],
    img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80",
    materials: ["Gloss Coated Paper", "Matte Coated Paper", "Semi-Gloss Paper"],
    finishes: ["Gloss Lamination", "Matte Lamination", "Gloss Varnish"],
    features: [
      "Excellent print quality with vibrant full-color graphics",
      "Available in gloss, matte, and semi-gloss finishes",
      "Suitable for indoor and short-term outdoor use",
      "Cost-effective for high-volume orders",
      "Compatible with all standard adhesive types",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Food & Beverage", "Cosmetics", "Retail", "Logistics", "General Products"],
  },
  {
    slug: "kraft-labels",
    icon: Package,
    title: "Kraft & Textured Paper Labels",
    subtitle: "Natural and artisan-look labels for organic and craft brands",
    desc: "Natural kraft and textured paper labels for organic, artisan, and eco-friendly brands.",
    longDesc: "Kraft and textured paper labels convey a natural, artisan, and eco-friendly brand identity. INKO's kraft labels are made from recycled and FSC-certified materials, offering an authentic look that resonates with environmentally conscious consumers.",
    tags: ["KRAFT PAPER", "NATURAL LOOK", "ECO-FRIENDLY", "ARTISAN"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    materials: ["Brown Kraft Paper", "White Kraft Paper", "Textured Paper", "Recycled Paper"],
    finishes: ["Matte Varnish", "Soft-Touch Matte", "Uncoated Natural"],
    features: [
      "FSC-certified and recycled paper options",
      "Natural and artisan aesthetic for craft brands",
      "Excellent print quality on textured surfaces",
      "Suitable for food, cosmetics, and artisan products",
      "Eco-friendly and biodegradable options",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Organic Food", "Craft Beverages", "Natural Cosmetics", "Artisan Products", "Eco Brands"],
  },
  {
    slug: "bopp-labels",
    icon: Layers,
    title: "White BOPP Labels",
    subtitle: "Durable white film labels for waterproof applications",
    desc: "Durable white BOPP film labels with excellent moisture and chemical resistance.",
    longDesc: "White BOPP (Biaxially Oriented Polypropylene) labels are the most popular film substrate for product labels. They offer excellent moisture resistance, durability, and print quality, making them ideal for food, beverage, cosmetic, and household product labels.",
    tags: ["WATERPROOF", "DURABLE", "MOISTURE-RESISTANT", "VERSATILE"],
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80",
    materials: ["White BOPP Film"],
    finishes: ["Gloss Lamination", "Matte Lamination", "Soft-Touch Matte", "Foil Stamping"],
    features: [
      "Excellent moisture and water resistance",
      "Superior print quality with vibrant colors",
      "Compatible with all standard adhesive types",
      "Suitable for food, beverage, and cosmetic labels",
      "Available with gloss, matte, and soft-touch lamination",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Food & Beverage", "Cosmetics", "Household Products", "Pet Food", "Supplements"],
  },
  {
    slug: "clear-labels",
    icon: Layers,
    title: "Clear BOPP Labels",
    subtitle: "Transparent no-label-look labels for premium packaging",
    desc: "Crystal-clear BOPP labels for a no-label-look effect on glass and plastic bottles.",
    longDesc: "Clear BOPP labels create the popular 'no-label look' effect, where the label appears to be printed directly on the container. This premium aesthetic is especially popular for cosmetics, beverages, and premium food products.",
    tags: ["TRANSPARENT", "NO-LABEL LOOK", "PREMIUM", "BACK-PRINT"],
    img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=1200&q=80",
    materials: ["Clear BOPP Film"],
    finishes: ["Gloss Lamination", "Matte Lamination", "Back-Print (Adhesive Side)"],
    features: [
      "Crystal-clear transparency for no-label-look effect",
      "Back-printing option for premium no-label look",
      "Excellent adhesion to glass, plastic, and metal",
      "Moisture and waterproof resistance",
      "Available with white ink underprint for opacity",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Premium Cosmetics", "Beverages", "Essential Oils", "Spirits", "Specialty Food"],
  },
  {
    slug: "metallic-labels",
    icon: Sparkles,
    title: "Metallic BOPP Labels",
    subtitle: "Eye-catching metallic film labels for premium products",
    desc: "Gold, silver, and holographic metallic BOPP labels for luxury and premium product packaging.",
    longDesc: "Metallic BOPP labels create a striking visual impact with their reflective, mirror-like surface. Available in gold, silver, and holographic finishes, these labels are perfect for luxury cosmetics, spirits, and premium food products.",
    tags: ["METALLIC", "GOLD / SILVER", "HOLOGRAPHIC", "LUXURY"],
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80",
    materials: ["Gold Metallic BOPP", "Silver Metallic BOPP", "Holographic BOPP"],
    finishes: ["Gloss Lamination", "Matte Lamination", "Foil Stamping"],
    features: [
      "Mirror-like metallic surface for luxury appeal",
      "Available in gold, silver, and holographic finishes",
      "Excellent print quality on metallic substrates",
      "Moisture and waterproof resistance",
      "Compatible with foil stamping for extra luxury",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Luxury Cosmetics", "Spirits & Wine", "Premium Food", "Gift Products"],
  },
  {
    slug: "pe-film-labels",
    icon: Shield,
    title: "PE Film Labels",
    subtitle: "Flexible and squeezable labels for soft containers",
    desc: "Flexible PE film labels for squeezable bottles, tubes, and flexible packaging.",
    longDesc: "PE (Polyethylene) film labels are designed for flexible and squeezable containers. They flex and stretch with the container without cracking or peeling, making them ideal for shampoo bottles, conditioner tubes, and other soft packaging.",
    tags: ["FLEXIBLE", "SQUEEZABLE", "CONFORMABLE", "SOFT CONTAINERS"],
    img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=1200&q=80",
    materials: ["White PE Film", "Clear PE Film"],
    finishes: ["Gloss Lamination", "Matte Lamination"],
    features: [
      "Flexible and conformable to squeezable containers",
      "Excellent adhesion to LDPE and HDPE surfaces",
      "Resists cracking and peeling under flexing",
      "Moisture and waterproof resistance",
      "Suitable for shampoo, conditioner, and lotion bottles",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Personal Care", "Cosmetics", "Household Products", "Food Condiments"],
  },
  {
    slug: "pet-film-labels",
    icon: Shield,
    title: "PET & Durable Film Labels",
    subtitle: "High-performance polyester labels for demanding applications",
    desc: "High-performance PET polyester film labels for chemical, industrial, and electronics applications.",
    longDesc: "PET (Polyethylene Terephthalate) film labels offer superior durability, chemical resistance, and dimensional stability. They are the preferred choice for industrial, chemical, and electronics applications where extreme performance is required.",
    tags: ["HIGH-PERFORMANCE", "CHEMICAL-RESISTANT", "DIMENSIONAL STABLE", "INDUSTRIAL"],
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    materials: ["Clear PET Film", "White PET Film", "Silver PET Film"],
    finishes: ["Gloss Lamination", "Matte Lamination"],
    features: [
      "Superior chemical and solvent resistance",
      "Excellent dimensional stability under heat",
      "High-performance adhesive options",
      "Suitable for industrial and electronics applications",
      "UV-resistant for outdoor durability",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Industrial", "Electronics", "Automotive", "Chemical", "Pharmaceutical"],
  },
  {
    slug: "thermal-labels",
    icon: Printer,
    title: "Direct Thermal & Transfer Labels",
    subtitle: "Blank and pre-printed thermal labels for variable data printing",
    desc: "Direct thermal and thermal transfer labels for barcodes, shipping, logistics, and variable data.",
    longDesc: "Thermal labels are used for on-demand variable data printing including barcodes, shipping labels, and product identification. INKO produces both direct thermal and thermal transfer labels in standard and custom formats.",
    tags: ["BARCODE", "VARIABLE DATA", "LOGISTICS", "ON-DEMAND"],
    img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80",
    materials: ["Direct Thermal Paper", "Thermal Transfer Paper", "Thermal Transfer Film"],
    finishes: ["Uncoated", "Top-Coated"],
    features: [
      "Compatible with all major thermal printer brands",
      "Available in direct thermal and thermal transfer",
      "Custom sizes and core specifications",
      "Pre-printed with logos or static information",
      "Suitable for barcodes, QR codes, and shipping labels",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Logistics", "Retail", "Warehousing", "Manufacturing", "Healthcare"],
  },
  {
    slug: "waterproof-labels",
    icon: Droplets,
    title: "Waterproof Labels",
    subtitle: "100% waterproof labels for wet and outdoor environments",
    desc: "Fully waterproof labels for bottles, outdoor products, and wet environments.",
    longDesc: "Waterproof labels are essential for products that will be exposed to water, moisture, or outdoor conditions. INKO's waterproof labels use film substrates and waterproof adhesives to ensure your labels remain intact and legible in the most challenging wet environments.",
    tags: ["100% WATERPROOF", "OUTDOOR", "MOISTURE-PROOF", "DURABLE"],
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=1200&q=80",
    materials: ["White BOPP", "Clear BOPP", "PET Film", "PE Film"],
    finishes: ["Gloss Lamination", "Matte Lamination"],
    features: [
      "100% waterproof film substrates",
      "Water-resistant adhesive formulations",
      "Suitable for ice bucket and refrigeration environments",
      "UV-resistant for outdoor applications",
      "Excellent adhesion to wet surfaces",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Beverages", "Outdoor Products", "Marine", "Garden", "Industrial"],
  },
  {
    slug: "oil-resistant-labels",
    icon: Droplets,
    title: "Oil-Resistant Labels",
    subtitle: "Labels that resist oil, grease, and chemical contamination",
    desc: "Specially formulated oil-resistant labels for essential oils, lubricants, and greasy environments.",
    longDesc: "Oil-resistant labels are designed for products that will be exposed to oils, greases, and solvents. INKO uses specially formulated oil-resistant adhesives and substrates to ensure your labels maintain adhesion and appearance even in oily environments.",
    tags: ["OIL-RESISTANT", "GREASE-PROOF", "SOLVENT-RESISTANT", "INDUSTRIAL"],
    img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1200&q=80",
    materials: ["PET Film", "White BOPP", "Clear BOPP"],
    finishes: ["Gloss Lamination", "Matte Lamination"],
    features: [
      "Oil and grease-resistant adhesive formulation",
      "Maintains adhesion in oily environments",
      "Solvent-resistant printing inks",
      "Suitable for essential oils, lubricants, and industrial use",
      "Available in film and paper substrates",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Essential Oils", "Lubricants", "Automotive", "Industrial", "Food Processing"],
  },
  {
    slug: "freezer-labels",
    icon: Snowflake,
    title: "Freezer & Low-Temp Labels",
    subtitle: "Cryogenic-grade labels for frozen food and cold storage",
    desc: "Cryogenic-grade labels that maintain adhesion in freezer and cold storage environments.",
    longDesc: "Freezer labels are specially formulated to maintain adhesion and print quality at temperatures as low as -40°C. INKO's freezer labels use cryogenic-grade adhesives and cold-resistant substrates for frozen food, pharmaceutical, and cold chain logistics applications.",
    tags: ["CRYOGENIC", "FREEZER-GRADE", "-40°C RATED", "COLD CHAIN"],
    img: "https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?w=1200&q=80",
    materials: ["White BOPP", "PET Film", "Coated Paper"],
    finishes: ["Gloss Lamination", "Matte Lamination"],
    features: [
      "Cryogenic-grade adhesive rated to -40°C",
      "Maintains adhesion on frozen surfaces",
      "Moisture and condensation resistant",
      "Suitable for frozen food, pharmaceutical, and biotech",
      "Cold chain logistics label options",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Frozen Food", "Ice Cream", "Pharmaceutical", "Biotech", "Cold Chain"],
  },
  {
    slug: "chemical-resistant-labels",
    icon: FlaskConical,
    title: "Chemical-Resistant Labels",
    subtitle: "Heavy-duty labels for chemical and industrial products",
    desc: "Heavy-duty chemical-resistant labels for industrial chemicals, solvents, and hazardous materials.",
    longDesc: "Chemical-resistant labels are essential for products containing harsh chemicals, solvents, and hazardous materials. INKO produces heavy-duty labels with specialized chemical-resistant adhesives and substrates that comply with GHS/CLP hazard communication standards.",
    tags: ["CHEMICAL-RESISTANT", "GHS COMPLIANT", "SOLVENT-PROOF", "HEAVY-DUTY"],
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    materials: ["PET Film", "Polyimide", "PE Film"],
    finishes: ["Gloss Lamination", "Matte Lamination"],
    features: [
      "Resistant to acids, bases, and organic solvents",
      "GHS/CLP compliant for hazardous materials",
      "Maintains adhesion in chemical environments",
      "UV-resistant for outdoor storage",
      "Available in various sizes for drums and containers",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Industrial Chemicals", "Cleaning Products", "Pharmaceutical", "Laboratory", "Oil & Gas"],
  },
  {
    slug: "high-temp-labels",
    icon: Thermometer,
    title: "High-Temperature Labels",
    subtitle: "Labels that withstand extreme heat and industrial processes",
    desc: "High-temperature labels rated for industrial ovens, autoclaves, and hot environments.",
    longDesc: "High-temperature labels are designed for applications where conventional labels would fail. INKO produces labels rated for temperatures up to 300°C using specialized polyimide and high-temp adhesive systems.",
    tags: ["HIGH-TEMP", "UP TO 300°C", "INDUSTRIAL", "AUTOCLAVE-SAFE"],
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80",
    materials: ["Polyimide (Kapton)", "High-Temp PET", "Aluminum Foil"],
    finishes: ["Matte Lamination", "Uncoated"],
    features: [
      "Temperature resistance up to 300°C",
      "Autoclave and sterilization-safe options",
      "Maintains adhesion under thermal cycling",
      "Chemical-resistant in high-temperature environments",
      "Suitable for electronics, automotive, and industrial use",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Electronics Manufacturing", "Automotive", "Aerospace", "Industrial", "Medical Devices"],
  },
  {
    slug: "high-tack-labels",
    icon: Zap,
    title: "High-Tack Labels",
    subtitle: "Aggressive adhesive labels for difficult surfaces",
    desc: "High-tack aggressive adhesive labels for rough, textured, and low-energy surfaces.",
    longDesc: "High-tack labels use aggressive adhesive formulations to bond to difficult surfaces including rough textures, low-energy plastics (LDPE, PP), and recycled materials. They are ideal for applications where standard adhesives fail.",
    tags: ["HIGH-TACK", "AGGRESSIVE ADHESIVE", "DIFFICULT SURFACES", "PERMANENT"],
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80",
    materials: ["White BOPP", "PET Film", "Coated Paper"],
    finishes: ["Gloss Lamination", "Matte Lamination"],
    features: [
      "Aggressive adhesive for difficult surfaces",
      "Excellent adhesion to LDPE, PP, and recycled plastics",
      "Strong bond to rough and textured surfaces",
      "Permanent adhesion for long-term applications",
      "Available in film and paper substrates",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Supplements", "Pet Food", "Industrial", "Automotive", "Household Products"],
  },
  {
    slug: "removable-labels",
    icon: RotateCcw,
    title: "Removable Labels",
    subtitle: "Clean-removal labels that leave no residue",
    desc: "Removable labels with clean-removal adhesive for temporary labeling and promotions.",
    longDesc: "Removable labels are designed for temporary applications where clean removal without residue is required. INKO's removable labels use specially formulated low-tack adhesives that bond securely but remove cleanly from most surfaces.",
    tags: ["REMOVABLE", "NO RESIDUE", "CLEAN REMOVAL", "TEMPORARY"],
    img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80",
    materials: ["White BOPP", "Coated Paper", "Clear BOPP"],
    finishes: ["Gloss Lamination", "Matte Lamination"],
    features: [
      "Clean removal without adhesive residue",
      "Suitable for promotional and temporary labeling",
      "Repositionable options available",
      "Compatible with glass, plastic, and metal surfaces",
      "Available in film and paper substrates",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Retail Promotions", "Food Service", "Logistics", "Events", "Cosmetics"],
  },
  {
    slug: "tamper-evident-labels",
    icon: AlertTriangle,
    title: "Tamper-Evident Labels",
    subtitle: "Security labels that show evidence of tampering",
    desc: "Tamper-evident and void labels for product security and anti-counterfeiting.",
    longDesc: "Tamper-evident labels provide visible evidence of tampering or unauthorized opening. INKO produces a range of tamper-evident labels including void labels, destructible labels, and security seals for pharmaceutical, food, and electronics applications.",
    tags: ["TAMPER-EVIDENT", "VOID", "SECURITY", "ANTI-COUNTERFEIT"],
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80",
    materials: ["Destructible Vinyl", "VOID PET Film", "Security Paper"],
    finishes: ["Gloss Lamination", "Matte Lamination"],
    features: [
      "Visible tamper evidence on removal",
      "VOID pattern revealed when label is removed",
      "Destructible labels that cannot be reapplied",
      "Anti-counterfeit holographic options",
      "Suitable for pharmaceutical, food, and electronics",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Pharmaceutical", "Food & Beverage", "Electronics", "Cosmetics", "Automotive"],
  },
  {
    slug: "resealable-labels",
    icon: Package,
    title: "Resealable Wet Wipes Labels",
    subtitle: "Resealable flap labels for wet wipes and moist products",
    desc: "Resealable flap labels for wet wipes, moist towelettes, and moisture-sensitive products.",
    longDesc: "Resealable labels feature a peel-and-reseal flap that allows consumers to open and reclose the package multiple times while maintaining moisture. INKO produces high-quality resealable labels for wet wipes, moist towelettes, and similar products.",
    tags: ["RESEALABLE", "PEEL & RESEAL", "MOISTURE SEAL", "WET WIPES"],
    img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1200&q=80",
    materials: ["White BOPP", "Clear BOPP", "PE Film"],
    finishes: ["Gloss Lamination", "Matte Lamination"],
    features: [
      "Peel-and-reseal flap for multiple openings",
      "Maintains moisture seal between uses",
      "Suitable for wet wipes and moist products",
      "Custom flap sizes and configurations",
      "Excellent print quality on resealable surface",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Wet Wipes", "Baby Care", "Personal Care", "Cleaning Products", "Medical"],
  },
  {
    slug: "barcode-labels",
    icon: Barcode,
    title: "Barcode & Variable Data Labels",
    subtitle: "Pre-printed labels with barcodes, QR codes, and serial numbers",
    desc: "Pre-printed labels with barcodes, QR codes, serial numbers, and variable data for traceability.",
    longDesc: "Variable data labels allow each label in a roll to carry unique information such as serial numbers, barcodes, QR codes, and expiry dates. INKO produces high-quality variable data labels using digital printing technology for precise and reliable barcode scanning.",
    tags: ["BARCODE", "QR CODE", "SERIAL NUMBER", "TRACEABILITY"],
    img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80",
    materials: ["White BOPP", "Coated Paper", "PET Film"],
    finishes: ["Gloss Lamination", "Matte Lamination"],
    features: [
      "High-resolution barcode and QR code printing",
      "Serialized variable data for traceability",
      "GS1-compliant barcode formats",
      "Lot number and expiry date printing",
      "Compatible with all major barcode scanners",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["Logistics", "Retail", "Pharmaceutical", "Food & Beverage", "Electronics"],
  },
  {
    slug: "roll-labels",
    icon: Scroll,
    title: "Custom Printed Roll Labels",
    subtitle: "Full-color custom labels on rolls for all industries",
    desc: "Custom full-color printed labels on rolls for automated labeling machines and manual application.",
    longDesc: "Custom roll labels are the standard format for automated labeling machines and high-volume manual application. INKO produces custom roll labels in any size, shape, and material, with precise roll specifications to match your labeling equipment.",
    tags: ["ROLL FORMAT", "CUSTOM SIZE", "AUTOMATED LABELING", "HIGH VOLUME"],
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80",
    materials: ["All substrates available"],
    finishes: ["All finishes available"],
    features: [
      "Custom roll dimensions to match your equipment",
      "Available in all label materials and finishes",
      "Precise core size and wind direction specifications",
      "Suitable for automated labeling machines",
      "High-volume production for cost efficiency",
      "Low MOQ from 500 rolls per design",
    ],
    industries: ["All Industries"],
  },
  {
    slug: "short-run-labels",
    icon: Printer,
    title: "Digital Short-Run Labels",
    subtitle: "Low-MOQ digital printing for small batches and samples",
    desc: "Digital short-run label printing for small batches, samples, and new product launches.",
    longDesc: "Digital short-run label printing allows brands to order small quantities of labels without the setup costs of traditional flexo printing. INKO's digital printing service is ideal for product samples, new product launches, and seasonal variations.",
    tags: ["SHORT RUN", "LOW MOQ", "DIGITAL PRINT", "FAST TURNAROUND"],
    img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80",
    materials: ["White BOPP", "Coated Paper", "Clear BOPP"],
    finishes: ["Gloss Lamination", "Matte Lamination"],
    features: [
      "Low MOQ from 100 labels for digital printing",
      "No plate setup costs for short runs",
      "Fast turnaround: 3–5 days for samples",
      "Suitable for product testing and market research",
      "Full-color digital printing with excellent quality",
      "Easy reorder with no minimum quantity increase",
    ],
    industries: ["Startups", "New Product Launches", "Seasonal Products", "Test Markets"],
  },
];

// ─── All products combined ────────────────────────────────────────────────────
const allProducts = [...industryProducts, ...materialProducts];

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = allProducts.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const Icon = product.icon;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0F2744] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <Link href="/products" className="hover:text-[#E8A020] transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/80">{product.title}</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-[#E8A020]/20 text-[#E8A020] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded mb-4">
            <Icon className="w-3.5 h-3.5" />
            {product.subtitle}
          </div>
          <h1 className="font-display text-6xl font-black text-white uppercase leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {product.title}
          </h1>
          <p className="text-white/70 max-w-2xl text-lg mb-6">{product.desc}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {product.tags.map((tag) => (
              <span key={tag} className="bg-white/10 text-white/80 text-xs font-bold tracking-wider px-3 py-1 rounded">{tag}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]" style={{ fontFamily: "var(--font-barlow)" }}>
              REQUEST FREE SAMPLE & QUOTE <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image src={product.img} alt={product.title} fill className="object-cover" />
            </div>
            {/* Details */}
            <div>
              <h2 className="font-display text-3xl font-black text-[#0F2744] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
                Why Choose INKO for {product.title}?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">{product.longDesc}</p>

              <h3 className="font-bold text-[#0F2744] text-sm uppercase tracking-widest mb-3">Key Features</h3>
              <ul className="space-y-2 mb-8">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#E8A020] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-[#0F2744] text-sm uppercase tracking-widest mb-3">Materials</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.materials.map((m) => (
                      <span key={m} className="bg-[#0F2744]/5 text-[#0F2744] text-xs font-medium px-3 py-1 rounded">{m}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#0F2744] text-sm uppercase tracking-widest mb-3">Finishes</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.finishes.map((f) => (
                      <span key={f} className="bg-[#E8A020]/10 text-[#0F2744] text-xs font-medium px-3 py-1 rounded">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-black text-[#0F2744] uppercase mb-6" style={{ fontFamily: "var(--font-barlow)" }}>Industries We Serve</h2>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {product.industries.map((ind) => (
              <span key={ind} className="bg-white border border-gray-200 text-[#0F2744] text-sm font-medium px-4 py-2 rounded-full shadow-sm">{ind}</span>
            ))}
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-10 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]" style={{ fontFamily: "var(--font-barlow)" }}>
            REQUEST FREE SAMPLE <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-black text-[#0F2744] uppercase mb-6" style={{ fontFamily: "var(--font-barlow)" }}>View All Products</h2>
          <div className="flex flex-wrap gap-3">
            {allProducts.slice(0, 8).filter(p => p.slug !== product.slug).map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="bg-gray-50 hover:bg-[#0F2744] hover:text-white text-[#0F2744] text-sm font-medium px-4 py-2 rounded transition-all duration-200 border border-gray-200 hover:border-[#0F2744]">
                {p.title}
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
