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

const blogSlugs: Record<string, string[]> = {
  en: [
    "how-to-choose-label-material",
    "foil-stamping-vs-metallic-ink",
    "cosmetic-label-requirements",
    "low-moq-label-printing-guide",
    "pet-food-label-design-tips",
  ],
  es: [
    "como-elegir-el-material-de-etiqueta",
    "estampado-en-caliente-vs-tinta-metalica",
    "requisitos-etiquetas-cosmeticas",
    "guia-impresion-etiquetas-bajo-moq",
    "consejos-diseno-etiquetas-alimentos-mascotas",
  ],
  fr: [
    "comment-choisir-materiau-etiquette",
    "estampage-a-chaud-vs-encre-metallique",
    "exigences-etiquettes-cosmetiques",
    "guide-impression-etiquettes-faible-moq",
    "conseils-design-etiquettes-aliments-animaux",
  ],
  pt: [
    "como-escolher-material-etiqueta",
    "estampagem-a-quente-vs-tinta-metalica",
    "requisitos-etiquetas-cosmeticos",
    "guia-impressao-etiquetas-baixo-moq",
    "dicas-design-etiquetas-alimentos-pets",
  ],
  de: [
    "wie-man-das-richtige-etikettenmaterial-waehlt",
    "heissfolienpraegung-vs-metallic-tinte",
    "anforderungen-kosmetik-etiketten",
    "leitfaden-etikettendruck-niedriger-moq",
    "tipps-design-tiernahrung-etiketten",
  ],
  ru: [
    "kak-vybrat-material-dlya-etiketki",
    "goryachee-tisnenie-vs-metallicheskaya-kraska",
    "trebovaniya-k-kosmeticheskim-etiketkam",
    "rukovodstvo-pechat-etiketok-nizkiy-moq",
    "sovety-dizayn-etiketok-korma-dlya-zhivotnykh",
  ],
  ja: [
    "%E3%83%A9%E3%83%99%E3%83%AB%E7%B4%A0%E6%9D%90%E3%81%AE%E9%81%B8%E3%81%B3%E6%96%B9",
    "%E3%83%9B%E3%82%A4%E3%83%AB%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%94%E3%83%B3%E3%82%B0vs%E3%83%A1%E3%82%BF%E3%83%AA%E3%83%83%E3%82%AF%E3%82%A4%E3%83%B3%E3%82%AF",
    "%E5%8C%96%E7%B2%A7%E5%93%81%E3%83%A9%E3%83%99%E3%83%AB%E3%81%AE%E8%A6%81%E4%BB%B6",
    "%E4%BD%8Emoq%E3%83%A9%E3%83%99%E3%83%AB%E5%8D%B0%E5%88%B7%E3%82%AC%E3%82%A4%E3%83%89",
    "%E3%83%9A%E3%83%83%E3%83%88%E3%83%95%E3%83%BC%E3%83%89%E3%83%A9%E3%83%99%E3%83%AB%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%AE%E3%83%92%E3%83%B3%E3%83%88",
  ],
  ar: [
    "%D9%83%D9%8A%D9%81%D9%8A%D8%A9-%D8%A7%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1-%D9%85%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D9%85%D9%84%D8%B5%D9%82",
    "%D8%A7%D9%84%D8%AE%D8%AA%D9%85-%D8%A7%D9%84%D8%B3%D8%A7%D8%AE%D9%86-%D9%85%D9%82%D8%A7%D8%A8%D9%84-%D8%A7%D9%84%D8%AD%D8%A8%D8%B1-%D8%A7%D9%84%D9%85%D8%B9%D8%AF%D9%86%D9%8A",
    "%D9%85%D8%AA%D8%B7%D9%84%D8%A8%D8%A7%D8%AA-%D9%85%D9%84%D8%B5%D9%82%D8%A7%D8%AA-%D9%85%D8%B3%D8%AA%D8%AD%D8%B6%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D9%8A%D9%84",
    "%D8%AF%D9%84%D9%8A%D9%84-%D8%B7%D8%A8%D8%A7%D8%B9%D8%A9-%D8%A7%D9%84%D9%85%D9%84%D8%B5%D9%82%D8%A7%D8%AA-%D8%A8%D8%AD%D8%AF-%D8%A7%D8%AF%D9%86%D9%89-%D9%85%D9%86%D8%AE%D9%81%D8%B6",
    "%D9%86%D8%B5%D8%A7%D8%A6%D8%AD-%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%84%D8%B5%D9%82%D8%A7%D8%AA-%D8%B7%D8%B9%D8%A7%D9%85-%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA",
  ],
};

const locales = ["es", "fr", "pt", "de", "ru", "ja", "ar"];

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

  const blogPages: MetadataRoute.Sitemap = blogSlugs.en.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // ── Multilingual static pages ────────────────────────────────────────────
  const multiLangStaticPages: MetadataRoute.Sitemap = locales.flatMap((locale) => [
    { url: `${BASE_URL}/${locale}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.95 },
    { url: `${BASE_URL}/${locale}/products`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${BASE_URL}/${locale}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/${locale}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/${locale}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.85 },
  ]);

  // ── Multilingual product pages ───────────────────────────────────────────
  const multiLangProductPages: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    productSlugs.map((slug) => ({
      url: `${BASE_URL}/${locale}/products/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }))
  );

  // ── Multilingual blog pages ──────────────────────────────────────────────
  const multiLangBlogPages: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    (blogSlugs[locale] || []).map((slug) => ({
      url: `${BASE_URL}/${locale}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    }))
  );

  return [
    ...staticPages,
    ...productPages,
    ...solutionPages,
    ...capabilityPages,
    ...blogPages,
    ...multiLangStaticPages,
    ...multiLangProductPages,
    ...multiLangBlogPages,
  ];
}
