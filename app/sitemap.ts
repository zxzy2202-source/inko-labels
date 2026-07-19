import { MetadataRoute } from "next";

const BASE_URL = "https://inkolabels.com";

const productSlugs = [
  "cosmetic-labels",
  "essential-oil-labels",
  "peptide-labels",
  "food-labels",
  "beverage-labels",
  "wine-spirits-labels",
  "supplement-labels",
  "pet-food-labels",
  "household-labels",
  "automotive-labels",
  "industrial-labels",
  "electronics-labels",
  "agricultural-labels",
];

const blogSlugs = [
  "how-to-choose-label-material",
  "foil-stamping-vs-metallic-ink",
  "cosmetic-label-requirements",
  "low-moq-label-printing-guide",
  "pet-food-label-design-tips",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/products`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/capabilities`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];

  const productPages: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
    url: `${BASE_URL}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
