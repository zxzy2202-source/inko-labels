import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import FaqItem from "@/components/FaqItem";
import { ChevronRight, CheckCircle2, Sparkles, Droplets, FlaskConical, Apple, Wine, Beer, Pill, PawPrint, Home, Car, Factory, Cpu, Leaf, FileText, Package, Layers, Shield, Thermometer, Zap, RotateCcw, AlertTriangle, Snowflake, Barcode, Scroll, Printer, Award, Clock, Truck, Headphones } from "lucide-react";

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
    img: "/manus-storage/product-hero-cosmetic.jpg",
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "10mm × 20mm",
      maxSize: "200mm × 300mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "What is the minimum order quantity for cosmetic labels?", a: "Our standard MOQ is 500 rolls per design. For digital short-run printing, we can accommodate orders as low as 100 labels for sampling purposes." },
      { q: "Can you match our exact Pantone color?", a: "Yes. We use a 7-color resin-plate flexo press with PANTONE matching capability. We provide a color proof before mass production to ensure exact color accuracy." },
      { q: "What materials do you recommend for serum and moisturizer bottles?", a: "We recommend White BOPP or Clear BOPP with soft-touch matte lamination for a premium feel. For glass bottles, we suggest a strong permanent adhesive to ensure long-term adhesion." },
      { q: "Do you offer foil stamping and embossing on the same label?", a: "Yes. Our foil stamping + die-cutting high-speed press can apply hot foil stamping, embossing, and die-cutting in a single pass, which reduces production time and cost." },
      { q: "How do I send my artwork for production?", a: "Please send us your artwork in AI, PDF, or EPS format with fonts outlined and images at 300 DPI. We provide a free pre-press review and will notify you of any issues before production." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "10mm × 20mm",
      maxSize: "100mm × 150mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "Why do my essential oil labels keep falling off?", a: "Standard adhesives fail in oily environments. INKO uses specially formulated oil-resistant adhesives that maintain strong adhesion even when the bottle surface is contaminated with essential oils." },
      { q: "Can you print on very small vials (5ml–10ml)?", a: "Yes. We specialize in small-format label printing with a minimum label size of 10mm × 20mm, suitable for 5ml roller bottles and 10ml dropper vials." },
      { q: "What is the no-label look and how do I achieve it?", a: "The no-label look uses a clear BOPP substrate with printing on the adhesive side (back-print). When applied to a clear glass bottle, the label appears to be printed directly on the glass." },
      { q: "Do you offer luxury finishes for essential oil labels?", a: "Yes. We offer hot foil stamping, embossing, soft-touch matte lamination, and spot UV on essential oil labels to create a premium, spa-quality aesthetic." },
      { q: "What is your lead time for essential oil labels?", a: "Standard production takes 7–10 business days after artwork approval. Rush orders can be accommodated in 5–7 days for an additional fee." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "10mm × 30mm",
      maxSize: "80mm × 120mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "What is the smallest label size you can produce?", a: "Our minimum label size for flexo printing is 10mm × 30mm. For digital printing, we can go as small as 8mm × 20mm." },
      { q: "Can you print lot numbers and expiry dates on each label?", a: "Yes. We offer variable data printing where each label in a roll can carry unique information such as lot numbers, expiry dates, and serial numbers." },
      { q: "Are your materials compatible with frozen storage?", a: "Yes. We offer cryogenic-grade adhesives rated to -40°C for frozen storage and cold chain applications." },
      { q: "Do your labels comply with pharmaceutical GMP standards?", a: "Our materials are GMP-compatible and we can provide material safety data sheets (MSDS) and certificates of compliance upon request." },
      { q: "Can you produce labels for both the vial and the outer box?", a: "Yes. We can produce labels for vials, ampoules, and outer cartons in the same order, ensuring consistent branding across all packaging components." },
    ],
  },
  {
    slug: "food-labels",
    icon: Apple,
    title: "Food Packaging Labels",
    subtitle: "FDA-compliant labels for food and specialty food brands",
    desc: "FDA-compliant labels for food products, sauces, condiments, and specialty foods.",
    longDesc: "Food labels must meet strict regulatory requirements while standing out on crowded retail shelves. INKO produces FDA-compliant food labels using food-safe inks and adhesives, with options for waterproof, freezer-grade, and high-moisture-resistant constructions.",
    tags: ["FDA COMPLIANT", "WATERPROOF", "FREEZER-SAFE", "FOOD-SAFE"],
    img: "/manus-storage/product-hero-food.jpg",
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "20mm × 30mm",
      maxSize: "200mm × 300mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "Are your food labels FDA compliant?", a: "Yes. We use FDA-compliant food-safe inks and adhesives for all food contact labels. We can provide compliance documentation upon request." },
      { q: "Can your labels withstand refrigerator and freezer conditions?", a: "Yes. We offer moisture-resistant and freezer-grade adhesive options. Our freezer labels are rated to -20°C for standard freezer applications and -40°C for deep freeze." },
      { q: "Can you print nutrition facts panels with small text?", a: "Yes. Our 7-color flexo press can print text as small as 4pt with excellent legibility, suitable for detailed nutrition facts panels and ingredient lists." },
      { q: "Do you offer kraft paper labels for artisan food brands?", a: "Yes. We offer brown kraft, white kraft, and textured paper labels that convey a natural, artisan aesthetic popular with organic and specialty food brands." },
      { q: "What is the turnaround time for food labels?", a: "Standard production takes 7–10 business days after artwork approval. We also offer a rush service for time-sensitive orders." },
    ],
  },
  {
    slug: "beverage-labels",
    icon: Beer,
    title: "Beverage Bottle Labels",
    subtitle: "Moisture-resistant labels for bottles and cans",
    desc: "Waterproof, moisture-resistant labels for water bottles, juice, energy drinks, and beverages.",
    longDesc: "Beverage labels must withstand condensation, ice buckets, and refrigeration while maintaining their appearance. INKO produces high-quality beverage labels with excellent wet-strength adhesives and moisture-resistant film substrates suitable for all bottle types.",
    tags: ["WATERPROOF", "MOISTURE-RESISTANT", "ICE BUCKET PROOF", "WRAP-AROUND"],
    img: "/manus-storage/product-hero-beverage.jpg",
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "30mm × 50mm",
      maxSize: "200mm × 300mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "Will your labels survive in an ice bucket?", a: "Yes. Our beverage labels use wet-strength adhesives that maintain adhesion even when submerged in ice water. We test all beverage labels for ice bucket resistance." },
      { q: "Can you produce wrap-around labels for cylindrical bottles?", a: "Yes. We produce wrap-around labels for all standard bottle diameters. Please provide your bottle dimensions and we will calculate the exact label size." },
      { q: "What is the no-label look and is it suitable for beverages?", a: "The no-label look uses a clear BOPP substrate with back-printing. It is very popular for premium water, spirits, and craft beverage brands for a clean, minimalist aesthetic." },
      { q: "Do you offer metallic labels for premium beverage brands?", a: "Yes. We offer gold, silver, and holographic metallic BOPP labels that create a striking visual impact for premium and luxury beverage brands." },
      { q: "Can you match our existing label colors exactly?", a: "Yes. We use PANTONE color matching on our 7-color flexo press to ensure exact color consistency with your existing labels or brand guidelines." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "30mm × 50mm",
      maxSize: "200mm × 300mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "What paper stocks do you offer for wine labels?", a: "We offer a wide range of premium paper stocks including textured laid paper, uncoated natural paper, metallic paper, and high-gloss coated paper. We can source specific paper grades upon request." },
      { q: "Can you produce front labels, back labels, and neck labels in the same order?", a: "Yes. We can produce all label components for a wine or spirits bottle in a single order, ensuring consistent printing quality and color matching across all labels." },
      { q: "Do you offer wet-strength paper for wine labels?", a: "Yes. We offer wet-strength paper options that maintain their integrity when exposed to moisture and ice bucket conditions, essential for wine and spirits labels." },
      { q: "What foil colors are available for foil stamping?", a: "We offer a wide range of foil colors including gold, silver, rose gold, copper, holographic, and custom colors. We can also produce multi-foil labels with different foil colors in a single pass." },
      { q: "Can you produce labels for craft distilleries with small batch sizes?", a: "Yes. Our minimum order quantity of 500 rolls is well-suited for craft distilleries and small-batch spirits producers. We also offer digital short-run printing for even smaller quantities." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "20mm × 30mm",
      maxSize: "200mm × 300mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "Are your supplement labels GMP compliant?", a: "Our materials are GMP-compatible and we use food-safe inks and adhesives. We can provide material safety data sheets and certificates of compliance for GMP audits." },
      { q: "Can you print lot numbers and expiry dates on each label?", a: "Yes. We offer variable data printing where each label carries a unique lot number and expiry date, essential for supplement traceability and compliance." },
      { q: "What adhesive do you recommend for HDPE supplement bottles?", a: "We recommend our high-tack permanent adhesive for HDPE and PP supplement bottles. This adhesive provides strong initial tack and long-term adhesion on low-energy plastic surfaces." },
      { q: "Can you produce tamper-evident labels for supplements?", a: "Yes. We offer tamper-evident label options including void labels and destructible labels that provide visible evidence of tampering." },
      { q: "Do you offer extended content labels (ECL) for supplements?", a: "Yes. We produce booklet labels and extended content labels for supplements with complex ingredient lists and multi-language requirements." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "30mm × 50mm",
      maxSize: "200mm × 300mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "Can your labels adhere to flexible pet food pouches?", a: "Yes. We use high-tack adhesives specifically formulated for flexible packaging materials including LDPE, LLDPE, and metallized films used in pet food pouches." },
      { q: "Are your materials safe for pet food contact?", a: "Yes. We use FDA-compliant, food-safe materials for all pet food labels. Our inks and adhesives meet safety standards for indirect food contact." },
      { q: "Can you produce labels for both dry food bags and wet food cans?", a: "Yes. We can produce labels for all pet food packaging formats including dry food bags, wet food cans, treat pouches, and rigid containers in a single order." },
      { q: "Do you offer moisture-resistant labels for refrigerated pet food?", a: "Yes. Our moisture-resistant BOPP film labels with wet-strength adhesives are suitable for refrigerated and chilled pet food products." },
      { q: "Can you print detailed nutritional information on pet food labels?", a: "Yes. Our 7-color flexo press can print detailed nutritional tables, ingredient lists, and barcodes with excellent legibility on pet food labels." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "20mm × 30mm",
      maxSize: "200mm × 300mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "Can your labels withstand exposure to cleaning chemicals?", a: "Yes. Our household labels use chemical-resistant adhesives and film substrates that maintain adhesion and print quality when exposed to common cleaning chemicals and detergents." },
      { q: "Do you produce GHS-compliant hazard communication labels?", a: "Yes. We produce GHS/CLP-compliant labels with the required hazard pictograms, signal words, and hazard statements for hazardous household products." },
      { q: "What adhesive do you recommend for HDPE cleaning product bottles?", a: "We recommend our high-tack permanent adhesive for HDPE and PP cleaning product containers. This adhesive provides strong initial tack and long-term adhesion." },
      { q: "Can you produce labels that resist abrasion and scratching?", a: "Yes. Our laminated film labels with gloss or matte lamination provide excellent abrasion resistance, protecting the print quality throughout the product's life." },
      { q: "Do you offer waterproof labels for bathroom and kitchen products?", a: "Yes. All our BOPP and PET film labels are inherently waterproof, making them ideal for bathroom, kitchen, and other wet environment applications." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "20mm × 30mm",
      maxSize: "200mm × 300mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "What temperature range can your automotive labels withstand?", a: "Our standard automotive labels are rated to 100°C. For higher temperature applications, we offer polyimide (Kapton) labels rated to 300°C." },
      { q: "Can your labels adhere to metal engine components?", a: "Yes. We offer specialized adhesives with strong adhesion to metal, painted surfaces, and powder-coated finishes used in automotive applications." },
      { q: "Are your labels resistant to engine oils and lubricants?", a: "Yes. Our automotive labels use oil-resistant adhesives and substrates that maintain adhesion and print quality when exposed to engine oils, lubricants, and hydraulic fluids." },
      { q: "Do you offer UV-resistant labels for outdoor automotive applications?", a: "Yes. Our UV-resistant labels are suitable for outdoor automotive applications including under-hood labels, exterior identification labels, and outdoor equipment." },
      { q: "Can you produce labels for both the product container and the outer carton?", a: "Yes. We can produce labels for bottles, cans, drums, and outer cartons in a single order, ensuring consistent branding across all packaging." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "20mm × 30mm",
      maxSize: "300mm × 400mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "Do your industrial labels comply with GHS hazard communication standards?", a: "Yes. We produce GHS/CLP-compliant labels with all required hazard pictograms, signal words, and hazard statements for industrial chemical products." },
      { q: "What is the maximum temperature your industrial labels can withstand?", a: "Our standard PET film labels are rated to 150°C. For higher temperature applications, we offer polyimide labels rated to 300°C and aluminum foil labels for extreme heat environments." },
      { q: "Can you produce large-format labels for drums and IBC containers?", a: "Yes. We can produce labels up to 300mm × 400mm for drums, IBC containers, and large industrial packaging." },
      { q: "Do you offer outdoor-rated labels for industrial equipment?", a: "Yes. Our UV-resistant labels with aggressive adhesives are suitable for outdoor industrial equipment, machinery, and infrastructure." },
      { q: "Can you produce tamper-evident labels for industrial products?", a: "Yes. We offer tamper-evident and void labels for industrial products requiring security and anti-tampering features." },
    ],
  },
  {
    slug: "electronics-labels",
    icon: Cpu,
    title: "Electronics & Battery Labels",
    subtitle: "Precision labels for electronics, devices, and batteries",
    desc: "High-precision labels for electronics, batteries, cables, and electronic components.",
    longDesc: "Electronics labels require exceptional precision, anti-static properties, and compliance with RoHS and other electronics industry standards. INKO produces high-precision electronics labels with variable data printing for serialization and traceability.",
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "10mm × 20mm",
      maxSize: "150mm × 200mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "Are your electronics labels RoHS compliant?", a: "Yes. Our materials are RoHS-compliant and we can provide compliance documentation for electronics industry audits." },
      { q: "Do you offer anti-static labels for sensitive electronic components?", a: "Yes. We offer anti-static label options with dissipative coatings for sensitive electronic components and assemblies." },
      { q: "Can you print serialized QR codes and barcodes on electronics labels?", a: "Yes. We offer variable data printing with unique QR codes, barcodes, and serial numbers on each label for electronics traceability." },
      { q: "What is the minimum label size for electronics applications?", a: "Our minimum label size is 10mm × 20mm for flexo printing and 8mm × 15mm for digital printing, suitable for small electronic components and batteries." },
      { q: "Do you offer tamper-evident labels for electronics packaging?", a: "Yes. We produce void labels and destructible labels that provide visible evidence of tampering for electronics packaging and warranty seals." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "30mm × 50mm",
      maxSize: "200mm × 300mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "How long will your agricultural labels last outdoors?", a: "Our UV-resistant agricultural labels are rated for 3–5 years outdoor exposure under normal conditions. For longer-term applications, we offer enhanced UV-resistant constructions." },
      { q: "Are your labels compliant with pesticide labeling regulations?", a: "We produce labels that meet the physical requirements for pesticide labeling. Please consult your regulatory advisor for specific compliance requirements in your market." },
      { q: "Can your labels withstand rain and moisture in field conditions?", a: "Yes. Our weatherproof film labels with moisture-resistant adhesives maintain adhesion and print quality in rain and high-humidity field conditions." },
      { q: "Do you offer labels for seed packets and small garden product containers?", a: "Yes. We can produce labels for seed packets, small garden product containers, and plant labels in a wide range of sizes and formats." },
      { q: "Can you print regulatory warning text and hazard symbols on agricultural labels?", a: "Yes. We can print all required regulatory text, hazard symbols, and safety information on agricultural product labels with excellent legibility." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "20mm × 30mm",
      maxSize: "200mm × 300mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "What is the difference between gloss and matte paper labels?", a: "Gloss paper labels have a shiny, reflective surface that makes colors appear more vibrant. Matte paper labels have a flat, non-reflective surface that gives a more sophisticated and premium look." },
      { q: "Are paper labels waterproof?", a: "Standard paper labels are not waterproof. For wet environments, we recommend BOPP film labels. However, we can add a gloss or matte lamination to paper labels to improve moisture resistance." },
      { q: "What is the most cost-effective label substrate?", a: "Coated paper is generally the most cost-effective label substrate for high-volume orders. Film substrates like BOPP cost slightly more but offer significantly better durability." },
      { q: "Can paper labels be used for food products?", a: "Yes. Our paper labels use food-safe inks and adhesives suitable for food product labeling. For products in wet or refrigerated environments, we recommend film labels." },
      { q: "What is the minimum order quantity for paper labels?", a: "Our standard MOQ is 500 rolls per design. For digital short-run printing, we can accommodate orders as low as 100 labels." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "20mm × 30mm",
      maxSize: "200mm × 300mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "Are your kraft labels FSC certified?", a: "Yes. We offer FSC-certified kraft paper options for brands that require sustainable sourcing certification for their packaging materials." },
      { q: "Can you print full-color graphics on kraft paper?", a: "Yes. We can print full-color graphics on kraft paper, although the natural brown color of the paper will affect the appearance of light colors. We recommend using a white ink underprint for accurate color reproduction." },
      { q: "Are kraft labels suitable for food products?", a: "Yes. Our kraft labels use food-safe inks and adhesives suitable for food product labeling. However, kraft labels are not waterproof and are best suited for dry food products." },
      { q: "Do you offer biodegradable and compostable label options?", a: "Yes. We offer biodegradable kraft paper labels with water-based inks and natural adhesives for brands seeking fully compostable packaging solutions." },
      { q: "What finishes are available for kraft labels?", a: "We offer matte varnish, soft-touch matte lamination, and uncoated natural finishes for kraft labels. We do not recommend gloss lamination as it detracts from the natural aesthetic." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "20mm × 30mm",
      maxSize: "200mm × 300mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "What is BOPP and why is it the most popular label substrate?", a: "BOPP (Biaxially Oriented Polypropylene) is a plastic film that offers excellent moisture resistance, durability, and print quality. It is the most popular label substrate because it combines performance and cost-effectiveness." },
      { q: "Is white BOPP suitable for food and beverage labels?", a: "Yes. White BOPP is FDA-compliant and widely used for food and beverage labels. It offers excellent moisture resistance for refrigerated and wet environments." },
      { q: "What finishes are available for white BOPP labels?", a: "We offer gloss lamination, matte lamination, soft-touch matte, and hot foil stamping on white BOPP labels. Soft-touch matte is particularly popular for premium cosmetic and supplement labels." },
      { q: "Can white BOPP labels be used in freezer environments?", a: "Yes. With our freezer-grade adhesive option, white BOPP labels maintain adhesion at temperatures as low as -20°C for standard freezer applications." },
      { q: "What is the difference between white BOPP and clear BOPP?", a: "White BOPP has a white opaque surface that provides a clean background for printing. Clear BOPP is transparent and creates the popular 'no-label look' effect on clear containers." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "20mm × 30mm",
      maxSize: "200mm × 300mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "What is the no-label look and how does it work?", a: "The no-label look uses a clear BOPP substrate. When applied to a clear glass or plastic container, the label appears to be printed directly on the container, creating a premium, minimalist aesthetic." },
      { q: "What is back-printing and when should I use it?", a: "Back-printing (adhesive-side printing) places the ink between the label and the container surface, protecting the print from scratching and creating a perfect no-label look on clear containers." },
      { q: "Can clear BOPP labels be used on colored glass bottles?", a: "Yes. Clear BOPP labels work on any transparent or translucent container. On colored glass, the label will take on the color of the glass, which can create a beautiful effect." },
      { q: "Do clear labels need a white ink underprint?", a: "It depends on your design. If your design includes light colors or white elements, a white ink underprint is needed for accurate color reproduction. For designs with only dark colors, white underprint is optional." },
      { q: "Are clear BOPP labels waterproof?", a: "Yes. Clear BOPP labels are inherently waterproof and moisture-resistant, making them suitable for beverages, cosmetics, and other wet environment applications." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "20mm × 30mm",
      maxSize: "200mm × 300mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "What metallic finishes are available?", a: "We offer gold, silver, and holographic metallic BOPP substrates. We can also apply hot foil stamping on top of metallic substrates for additional luxury effects." },
      { q: "Can you print full-color graphics on metallic labels?", a: "Yes. We can print full-color graphics on metallic substrates, although the metallic background will show through transparent areas of the design, creating a unique effect." },
      { q: "Are metallic labels suitable for food and beverage products?", a: "Yes. Our metallic BOPP labels are FDA-compliant and moisture-resistant, making them suitable for food, beverage, and cosmetic applications." },
      { q: "What is the difference between metallic BOPP and foil stamping?", a: "Metallic BOPP is a metallic film substrate that covers the entire label. Foil stamping applies a thin metallic foil to specific areas of the label, allowing for more precise and detailed metallic effects." },
      { q: "Do holographic labels require special printing techniques?", a: "Holographic BOPP can be printed with standard flexo printing. The holographic effect comes from the substrate itself, not the printing. We recommend using transparent or translucent inks to allow the holographic effect to show through." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "20mm × 30mm",
      maxSize: "200mm × 300mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "Why do I need PE film labels for squeezable bottles?", a: "Standard BOPP and PET labels are rigid and will crack or wrinkle when applied to squeezable containers. PE film labels are flexible and stretch with the container, maintaining a smooth appearance." },
      { q: "What types of containers are PE film labels suitable for?", a: "PE film labels are suitable for squeezable LDPE bottles, flexible tubes, soft pouches, and any container that flexes or deforms during use." },
      { q: "Can PE film labels be used for food products?", a: "Yes. Our PE film labels use FDA-compliant food-safe materials suitable for food contact applications including condiment bottles and food squeeze tubes." },
      { q: "Are PE film labels waterproof?", a: "Yes. PE film is inherently waterproof and moisture-resistant, making PE film labels suitable for bathroom and kitchen applications." },
      { q: "What adhesive do you recommend for PE film labels?", a: "We recommend our flexible adhesive formulation that maintains strong adhesion on LDPE and HDPE surfaces while accommodating the flexing of the container." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "10mm × 20mm",
      maxSize: "200mm × 300mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "What is the difference between BOPP and PET film labels?", a: "PET film offers superior chemical resistance, dimensional stability, and temperature resistance compared to BOPP. PET is preferred for industrial, chemical, and electronics applications, while BOPP is more cost-effective for consumer product labels." },
      { q: "Can PET labels withstand chemical exposure?", a: "Yes. PET film has excellent resistance to most chemicals, solvents, and acids, making it the preferred substrate for chemical and industrial product labels." },
      { q: "Are PET labels suitable for outdoor applications?", a: "Yes. PET film with UV-resistant inks and lamination is suitable for outdoor applications with excellent resistance to UV degradation and weathering." },
      { q: "What temperature range can PET labels withstand?", a: "Standard PET film labels are rated to 150°C. For higher temperature applications, we offer polyimide (Kapton) labels rated to 300°C." },
      { q: "Can PET labels be used for pharmaceutical applications?", a: "Yes. PET film labels are widely used in pharmaceutical applications due to their chemical resistance, dimensional stability, and compatibility with sterilization processes." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "20mm × 30mm",
      maxSize: "150mm × 200mm",
      coreSize: "25mm / 40mm / 76mm",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "What is the difference between direct thermal and thermal transfer labels?", a: "Direct thermal labels use heat-sensitive paper that darkens when heated by the print head. Thermal transfer labels use a ribbon to transfer ink onto the label surface. Thermal transfer labels are more durable and suitable for longer-term applications." },
      { q: "Can you pre-print logos and static information on thermal labels?", a: "Yes. We can pre-print logos, company names, and static information on thermal labels using flexo printing, leaving the variable data area blank for on-demand thermal printing." },
      { q: "What core sizes are available for thermal labels?", a: "We offer 25mm (1\"), 40mm (1.5\"), and 76mm (3\") core sizes to match your thermal printer specifications. Custom core sizes are also available." },
      { q: "Are your thermal labels compatible with Zebra and Honeywell printers?", a: "Yes. Our thermal labels are compatible with all major thermal printer brands including Zebra, Honeywell, SATO, Datamax, and others." },
      { q: "Do you offer top-coated thermal labels for better durability?", a: "Yes. Our top-coated thermal labels offer improved resistance to moisture, abrasion, and UV exposure compared to standard thermal labels." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "20mm × 30mm",
      maxSize: "200mm × 300mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "What makes a label truly waterproof?", a: "A truly waterproof label requires both a waterproof film substrate (BOPP, PET, or PE) and a water-resistant adhesive. Paper labels with lamination are water-resistant but not fully waterproof." },
      { q: "Can your waterproof labels be used in ice buckets?", a: "Yes. Our waterproof labels with wet-strength adhesives maintain adhesion when submerged in ice water, suitable for beverage bottles and ice bucket applications." },
      { q: "Are your waterproof labels suitable for outdoor use?", a: "Yes. Our waterproof labels with UV-resistant inks and lamination are suitable for outdoor applications with excellent resistance to rain, UV, and temperature fluctuations." },
      { q: "Can waterproof labels be used in dishwashers?", a: "Our waterproof labels are suitable for hand washing and brief water exposure. For dishwasher-safe applications, please contact us for our specialized high-temperature waterproof label options." },
      { q: "What is the difference between waterproof and water-resistant labels?", a: "Waterproof labels use film substrates that completely repel water. Water-resistant labels (such as laminated paper labels) resist moisture but may eventually absorb water in prolonged wet conditions." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "10mm × 20mm",
      maxSize: "200mm × 300mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "Why do standard labels fail in oily environments?", a: "Standard adhesives lose their adhesion when contaminated with oil or grease. Our oil-resistant adhesives use specialized formulations that maintain strong adhesion even when the surface is contaminated with oils." },
      { q: "What types of oils can your labels resist?", a: "Our oil-resistant labels are formulated to resist essential oils, mineral oils, lubricating oils, cooking oils, and most organic solvents." },
      { q: "Are oil-resistant labels suitable for essential oil bottles?", a: "Yes. Our oil-resistant labels are specifically designed for essential oil bottles, where oil contamination on the bottle surface is common." },
      { q: "Can oil-resistant labels be used in food processing environments?", a: "Yes. Our food-safe oil-resistant labels are suitable for food processing environments where labels may be exposed to cooking oils and food-grade lubricants." },
      { q: "Do oil-resistant labels look different from standard labels?", a: "No. Oil-resistant labels look identical to standard labels. The oil resistance comes from the adhesive formulation, not the label face material." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "20mm × 30mm",
      maxSize: "200mm × 300mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "What temperature can your freezer labels withstand?", a: "Our standard freezer labels are rated to -20°C for standard freezer applications. Our cryogenic-grade labels are rated to -40°C for deep freeze and cold chain applications." },
      { q: "Can freezer labels be applied to already-frozen surfaces?", a: "Our standard freezer labels should be applied at room temperature before freezing. For application to already-frozen surfaces, please contact us for our specialized freeze-on adhesive options." },
      { q: "Will freezer labels fall off when the product is removed from the freezer?", a: "No. Our freezer labels maintain adhesion through freeze-thaw cycles. The condensation that forms when a frozen product warms up will not cause the label to fall off." },
      { q: "Are freezer labels suitable for pharmaceutical cold chain applications?", a: "Yes. Our cryogenic-grade labels are suitable for pharmaceutical cold chain applications including frozen biologics, vaccines, and laboratory samples." },
      { q: "Can you print lot numbers and expiry dates on freezer labels?", a: "Yes. We offer variable data printing for lot numbers, expiry dates, and other variable information on freezer labels." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "30mm × 50mm",
      maxSize: "300mm × 400mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "What chemicals can your chemical-resistant labels withstand?", a: "Our chemical-resistant labels are formulated to resist acids, bases, alcohols, ketones, and most organic solvents. Please contact us with your specific chemical exposure requirements for a tailored recommendation." },
      { q: "Do your chemical labels comply with GHS hazard communication standards?", a: "Yes. We produce GHS/CLP-compliant labels with all required hazard pictograms, signal words, and hazard statements for chemical products." },
      { q: "Can you produce labels for large drums and IBC containers?", a: "Yes. We can produce labels up to 300mm × 400mm for drums, IBC containers, and large chemical packaging." },
      { q: "What substrate do you recommend for the most demanding chemical environments?", a: "For the most demanding chemical environments, we recommend polyimide (Kapton) or PET film with aggressive chemical-resistant adhesives." },
      { q: "Do your chemical labels maintain adhesion after immersion in chemicals?", a: "Our chemical-resistant labels are designed to maintain adhesion during normal chemical exposure. For immersion applications, please contact us for our specialized immersion-grade label options." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "10mm × 20mm",
      maxSize: "200mm × 300mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "What is the maximum temperature your high-temp labels can withstand?", a: "Our polyimide (Kapton) labels are rated to 300°C for continuous use and up to 400°C for short-term exposure. Our high-temp PET labels are rated to 150°C." },
      { q: "Are your high-temp labels autoclave-safe?", a: "Yes. Our polyimide labels with silicone adhesives are autoclave-safe and can withstand steam sterilization at 121°C and 134°C." },
      { q: "Can high-temp labels withstand thermal cycling?", a: "Yes. Our high-temp labels are designed to maintain adhesion and print quality through repeated thermal cycling from ambient to maximum rated temperature." },
      { q: "What printing methods are available for high-temp labels?", a: "We use specialized high-temperature inks for polyimide labels that maintain their color and legibility at elevated temperatures. Standard inks are not suitable for high-temp applications." },
      { q: "Can you produce small-format high-temp labels for electronics components?", a: "Yes. We can produce high-temp labels as small as 10mm × 20mm for electronics components, PCBs, and other small-format applications." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "20mm × 30mm",
      maxSize: "200mm × 300mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "When do I need high-tack labels instead of standard labels?", a: "High-tack labels are needed when standard adhesives fail to bond properly. Common applications include LDPE and PP plastic containers, recycled materials, rough or textured surfaces, and cold or damp application environments." },
      { q: "Can high-tack labels be removed without leaving residue?", a: "High-tack labels are designed for permanent applications and are difficult to remove cleanly. If you need a removable option, please consider our removable label products." },
      { q: "What surfaces are high-tack labels suitable for?", a: "High-tack labels are suitable for LDPE, LLDPE, PP, HDPE, recycled plastics, rough cardboard, textured surfaces, and other difficult-to-bond substrates." },
      { q: "Are high-tack labels suitable for outdoor applications?", a: "Yes. Combined with UV-resistant inks and lamination, high-tack labels provide excellent long-term adhesion for outdoor applications." },
      { q: "Do high-tack labels work in cold environments?", a: "Our high-tack adhesives maintain strong adhesion at temperatures down to -10°C. For colder environments, please consider our freezer-grade label options." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "20mm × 30mm",
      maxSize: "200mm × 300mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "Will removable labels leave adhesive residue when removed?", a: "Our removable labels use specially formulated low-tack adhesives that remove cleanly from most surfaces without leaving adhesive residue, even after extended application." },
      { q: "How long can removable labels stay applied before becoming difficult to remove?", a: "Our removable labels can typically be removed cleanly after up to 6 months of application at room temperature. Extended application in hot environments may reduce removability." },
      { q: "Are removable labels suitable for glass bottles?", a: "Yes. Our removable labels are suitable for glass, plastic, and metal surfaces. They are popular for promotional labels on glass bottles and jars." },
      { q: "Can removable labels be repositioned after application?", a: "Our standard removable labels can be removed and reapplied once. For fully repositionable labels, please contact us for our repositionable adhesive options." },
      { q: "Are removable labels as durable as permanent labels?", a: "Removable labels have the same print quality and durability as permanent labels. The only difference is the adhesive formulation, which allows clean removal." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "20mm × 30mm",
      maxSize: "150mm × 200mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "How do tamper-evident labels work?", a: "Tamper-evident labels use specialized materials that leave visible evidence of removal. VOID labels reveal a 'VOID' pattern when removed. Destructible labels break apart when removal is attempted, making reapplication impossible." },
      { q: "What is the difference between VOID labels and destructible labels?", a: "VOID labels reveal a 'VOID' or 'OPENED' pattern on both the label and the surface when removed. Destructible labels physically break apart when removal is attempted, making them impossible to remove in one piece." },
      { q: "Are tamper-evident labels suitable for pharmaceutical products?", a: "Yes. Our tamper-evident labels are widely used in pharmaceutical applications for product security and compliance with regulatory requirements for tamper-evident packaging." },
      { q: "Can you add holographic elements for anti-counterfeiting?", a: "Yes. We offer holographic tamper-evident labels with custom holographic patterns that are difficult to replicate, providing an additional layer of anti-counterfeiting protection." },
      { q: "Do tamper-evident labels work on all surface types?", a: "Our tamper-evident labels work on most smooth surfaces including glass, plastic, and metal. Performance may vary on rough or textured surfaces." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "10–14 business days",
      sampleTime: "5–7 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "50mm × 70mm",
      maxSize: "200mm × 300mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "How many times can a resealable label be opened and resealed?", a: "Our resealable labels are designed for 50–100 open/reseal cycles while maintaining an effective moisture seal. Performance depends on the specific product and usage conditions." },
      { q: "Can resealable labels maintain a hermetic moisture seal?", a: "Our resealable labels provide an effective moisture seal that significantly slows moisture loss between uses. They are not designed for hermetic sealing of highly moisture-sensitive products." },
      { q: "What is the minimum size for resealable labels?", a: "Our minimum size for resealable labels is 50mm × 70mm to accommodate the resealable flap mechanism. Custom sizes and flap configurations are available." },
      { q: "Are resealable labels suitable for baby wipes?", a: "Yes. Our resealable labels are widely used for baby wipes and other baby care products. We use materials that comply with baby product safety standards." },
      { q: "Can you print on both the base label and the resealable flap?", a: "Yes. We can print full-color graphics on both the base label and the resealable flap, allowing for maximum branding and information display." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "20mm × 30mm",
      maxSize: "150mm × 200mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "What barcode formats do you support?", a: "We support all major barcode formats including Code 128, Code 39, EAN-13, EAN-8, UPC-A, UPC-E, QR Code, Data Matrix, PDF417, and GS1 DataBar." },
      { q: "Can each label in a roll have a unique barcode or serial number?", a: "Yes. We offer variable data printing where each label carries a unique barcode, serial number, QR code, or other variable information for traceability and serialization." },
      { q: "What is the minimum barcode size for reliable scanning?", a: "The minimum barcode size depends on the barcode type and scanning distance. We recommend a minimum X-dimension of 0.25mm for Code 128 and a minimum module size of 0.35mm for QR codes." },
      { q: "Do your barcodes comply with GS1 standards?", a: "Yes. We produce GS1-compliant barcodes for retail, logistics, and pharmaceutical applications. We can provide a GS1 compliance certificate upon request." },
      { q: "Can you combine variable barcodes with fixed full-color graphics?", a: "Yes. We can combine fixed full-color flexo-printed graphics with variable digital-printed barcodes and data in a single label, providing both visual appeal and traceability." },
    ],
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
    specs: {
      moq: "500 rolls / design",
      leadTime: "7–10 business days",
      sampleTime: "3–5 business days",
      printColors: "Up to 7 colors (CMYK + spot)",
      minSize: "10mm × 20mm",
      maxSize: "300mm × 400mm",
      coreSize: "25mm / 40mm / 76mm",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "What roll specifications do I need to provide?", a: "Please provide: label size (width × height), core size (25mm, 40mm, or 76mm), wind direction (inside or outside), labels per roll, and maximum roll outer diameter to match your labeling machine." },
      { q: "What is the difference between inside wind and outside wind?", a: "Inside wind means the label face is on the inside of the roll (facing the core). Outside wind means the label face is on the outside. The correct wind direction depends on your labeling machine." },
      { q: "Can you match the roll specifications of my current label supplier?", a: "Yes. If you provide us with a sample roll from your current supplier, we can match all specifications including label size, core size, wind direction, and labels per roll." },
      { q: "What is the maximum roll outer diameter you can produce?", a: "Our standard maximum roll outer diameter is 300mm. Custom roll sizes up to 400mm are available for high-volume production." },
      { q: "Can you produce labels in sheets instead of rolls?", a: "Yes. We can produce labels in sheet format for manual application or sheet-fed labeling machines. Please specify your sheet size and label layout requirements." },
    ],
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
    specs: {
      moq: "100 labels (digital) / 500 rolls (flexo)",
      leadTime: "3–5 business days (digital)",
      sampleTime: "2–3 business days",
      printColors: "Full color (CMYK)",
      minSize: "20mm × 30mm",
      maxSize: "150mm × 200mm",
      coreSize: "76mm (3\") standard",
      windDirection: "Inside or outside wind",
    },
    faqs: [
      { q: "What is the minimum order quantity for digital short-run labels?", a: "Our minimum order quantity for digital short-run labels is 100 labels per design. There are no plate setup costs, making digital printing cost-effective for small quantities." },
      { q: "How does digital printing quality compare to flexo printing?", a: "Digital printing offers excellent color accuracy and fine detail reproduction, comparable to flexo printing for most applications. For very high-volume orders, flexo printing is more cost-effective." },
      { q: "Can I order samples before committing to a full production run?", a: "Yes. We offer a sample service where you can order a small quantity of labels (as few as 100) to test the design, material, and adhesive before placing a full production order." },
      { q: "Is there a setup cost for digital short-run labels?", a: "No. Digital printing has no plate setup costs, making it ideal for small quantities, multiple designs, and frequent design changes." },
      { q: "Can I switch from digital to flexo printing as my volume grows?", a: "Yes. We can transition your label production from digital to flexo printing as your order volume increases, providing a seamless scaling path from startup to high-volume production." },
    ],
  },
];

// ─── All products combined ────────────────────────────────────────────────────
const allProducts = [...industryProducts, ...materialProducts];

// ─── SEO: generateStaticParams & generateMetadata ────────────────────────────
export async function generateStaticParams() {
  return allProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = allProducts.find((p) => p.slug === params.slug);
  if (!product) return {};
  const title = `${product.title} — Custom Label Manufacturer China`;
  const description = `${product.longDesc.slice(0, 155)}…`;
  return {
    title,
    description,
    keywords: [
      product.title.toLowerCase(),
      "custom labels China",
      "B2B label manufacturer",
      "low MOQ labels",
      ...product.tags.map(t => t.toLowerCase()),
    ],
    alternates: { canonical: `https://inkolabels.com/products/${product.slug}` },
    openGraph: {
      title,
      description,
      url: `https://inkolabels.com/products/${product.slug}`,
      images: [{ url: product.img.startsWith("/") ? `https://inkolabels.com${product.img}` : product.img, width: 1200, height: 630, alt: product.title }],
    },
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = allProducts.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const Icon = product.icon;
  const relatedProducts = allProducts.filter(p => p.slug !== product.slug).slice(0, 6);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#0F2744] pt-32 pb-0 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/products" className="hover:text-[#E8A020] transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/80">{product.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            {/* Left: Text */}
            <div className="pb-16">
              <div className="inline-flex items-center gap-2 bg-[#E8A020]/20 text-[#E8A020] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded mb-5">
                <Icon className="w-3.5 h-3.5" />
                {product.subtitle}
              </div>
              <h1 className="font-display text-5xl lg:text-6xl font-black text-white uppercase leading-tight mb-5" style={{ fontFamily: "var(--font-barlow)" }}>
                {product.title}
              </h1>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">{product.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {product.tags.map((tag) => (
                  <span key={tag} className="bg-white/10 text-white/80 text-xs font-bold tracking-wider px-3 py-1.5 rounded">{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]" style={{ fontFamily: "var(--font-barlow)" }}>
                  REQUEST FREE SAMPLE <ChevronRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200">
                  GET A QUOTE
                </Link>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative h-[420px] lg:h-[480px] rounded-t-2xl overflow-hidden">
              <Image
                src={product.img}
                alt={product.title}
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/40 to-transparent" />
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
            {/* Left: Description + Features */}
            <div className="lg:col-span-2 space-y-12">
              {/* Why Choose INKO */}
              <div>
                <h2 className="font-display text-3xl font-black text-[#0F2744] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
                  Why Choose INKO for {product.title}?
                </h2>
                <p className="text-gray-600 leading-relaxed text-base">{product.longDesc}</p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="font-bold text-[#0F2744] text-sm uppercase tracking-widest mb-4">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                      <CheckCircle2 className="w-4 h-4 text-[#E8A020] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials & Finishes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-[#0F2744] text-sm uppercase tracking-widest mb-3">Available Materials</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.materials.map((m) => (
                      <span key={m} className="bg-[#0F2744]/5 border border-[#0F2744]/10 text-[#0F2744] text-xs font-medium px-3 py-1.5 rounded-full">{m}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#0F2744] text-sm uppercase tracking-widest mb-3">Available Finishes</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.finishes.map((f) => (
                      <span key={f} className="bg-[#E8A020]/10 border border-[#E8A020]/20 text-[#0F2744] text-xs font-medium px-3 py-1.5 rounded-full">{f}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="font-display text-2xl font-black text-[#0F2744] uppercase mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
                  Frequently Asked Questions
                </h2>
                <div className="bg-gray-50 rounded-xl p-6">
                  {product.faqs.map((faq) => (
                    <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Specs Card + CTA */}
            <div className="space-y-6">
              {/* Specs Card */}
              <div className="bg-[#0F2744] rounded-2xl p-6 text-white sticky top-24">
                <h3 className="font-display text-lg font-black uppercase mb-5 text-[#E8A020]" style={{ fontFamily: "var(--font-barlow)" }}>
                  Product Specifications
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Min. Order Qty", value: product.specs.moq },
                    { label: "Lead Time", value: product.specs.leadTime },
                    { label: "Sample Time", value: product.specs.sampleTime },
                    { label: "Print Colors", value: product.specs.printColors },
                    { label: "Min. Label Size", value: product.specs.minSize },
                    { label: "Max. Label Size", value: product.specs.maxSize },
                    { label: "Core Size", value: product.specs.coreSize },
                    { label: "Wind Direction", value: product.specs.windDirection },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-start gap-2 py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-xs">{label}</span>
                      <span className="text-white text-xs font-semibold text-right">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  <Link href="/contact" className="block w-full text-center bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-6 py-3 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
                    Request Free Sample
                  </Link>
                  <Link href="/contact" className="block w-full text-center border border-white/30 hover:border-white text-white font-bold px-6 py-3 rounded text-sm uppercase tracking-wide transition-all duration-200">
                    Get a Quote
                  </Link>
                </div>
              </div>

              {/* Industries */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-[#0F2744] text-sm uppercase tracking-widest mb-4">Industries We Serve</h3>
                <div className="flex flex-wrap gap-2">
                  {product.industries.map((ind) => (
                    <span key={ind} className="bg-white border border-gray-200 text-[#0F2744] text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">{ind}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Products ─────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-black text-[#0F2744] uppercase mb-8" style={{ fontFamily: "var(--font-barlow)" }}>
            You May Also Be Interested In
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {relatedProducts.map((p) => {
              const RelIcon = p.icon;
              return (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group bg-white rounded-xl p-4 border border-gray-200 hover:border-[#E8A020] hover:shadow-md transition-all duration-200 flex flex-col items-center text-center gap-3"
                >
                  <div className="w-10 h-10 bg-[#0F2744]/5 group-hover:bg-[#E8A020]/10 rounded-full flex items-center justify-center transition-colors">
                    <RelIcon className="w-5 h-5 text-[#0F2744] group-hover:text-[#E8A020] transition-colors" />
                  </div>
                  <span className="text-[#0F2744] text-xs font-semibold leading-tight">{p.title}</span>
                </Link>
              );
            })}
          </div>
          <div className="mt-6 text-center">
            <Link href="/products" className="inline-flex items-center gap-2 text-[#E8A020] font-bold text-sm uppercase tracking-wide hover:underline">
              View All 40+ Products <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
