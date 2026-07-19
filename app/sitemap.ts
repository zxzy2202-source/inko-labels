import { MetadataRoute } from "next";

const BASE_URL = "https://inkolabels.com";

const productSlugs = [
  // by industry
  "cosmetic-labels", "essential-oil-labels", "peptide-labels",
  "food-labels", "beverage-labels", "wine-spirits-labels",
  "supplement-labels", "pet-food-labels", "household-labels",
  "automotive-labels", "industrial-labels", "electronics-labels",
  "agricultural-labels",
  // by material
  "paper-labels", "kraft-labels", "bopp-labels", "clear-labels",
  "metallic-labels", "pe-film-labels", "pet-film-labels", "thermal-labels",
  // specialty / function
  "waterproof-labels", "oil-resistant-labels", "freezer-labels",
  "chemical-resistant-labels", "high-temp-labels", "high-tack-labels",
  "removable-labels", "tamper-evident-labels", "resealable-labels",
  "barcode-labels", "roll-labels", "short-run-labels",
];

const solutionSlugs = [
  "brand-owners", "startups-dtc", "oem-odm", "co-packers",
  "packaging-companies", "distributors", "low-moq", "fast-sampling",
  "private-label", "global-shipping", "quality-assurance", "long-term-supply",
];

const capabilitySlugs = [
  "flexo-printing", "foil-die-cutting", "hot-lamination",
  "inspection-slitting", "spot-uv", "embossing",
  "soft-touch-matte", "digital-printing", "die-cutting",
  "variable-data", "cold-foil", "screen-printing",
];

const blogSlugs = [
  "how-to-choose-label-material",
  "foil-stamping-vs-metallic-ink",
  "cosmetic-label-requirements",
  "low-moq-label-printing-guide",
  "pet-food-label-design-tips",
];

export default function sitemap(): MetadataRoute.Sitemap {
  // ── English (default) static pages ──────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/products`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/capabilities`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  // ── Spanish (/es) static pages ───────────────────────────────────────────
  const esStaticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/es`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/es/products`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE_URL}/es/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/es/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/es/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
  ];

  // ── English dynamic pages ────────────────────────────────────────────────
  const productPages: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
    url: `${BASE_URL}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const solutionPages: MetadataRoute.Sitemap = solutionSlugs.map((slug) => ({
    url: `${BASE_URL}/solutions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const capabilityPages: MetadataRoute.Sitemap = capabilitySlugs.map((slug) => ({
    url: `${BASE_URL}/capabilities/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // ── Spanish (/es) dynamic product pages ─────────────────────────────────
  const esProductPages: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
    url: `${BASE_URL}/es/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // ── Spanish (/es) blog pages ─────────────────────────────────────────────
  const esBlogSlugs = [
    "como-elegir-el-material-de-etiqueta",
    "estampado-en-caliente-vs-tinta-metalica",
    "requisitos-etiquetas-cosmeticas",
    "guia-impresion-etiquetas-bajo-moq",
    "consejos-diseno-etiquetas-alimentos-mascotas",
  ];
  const esBlogPages: MetadataRoute.Sitemap = esBlogSlugs.map((slug) => ({
    url: `${BASE_URL}/es/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [
    ...staticPages,
    ...esStaticPages,
    ...productPages,
    ...solutionPages,
    ...capabilityPages,
    ...blogPages,
    ...esProductPages,
    ...esBlogPages,
  ];
}
