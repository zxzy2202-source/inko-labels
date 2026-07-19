import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const WhatsAppFloat = dynamic(() => import("@/components/WhatsAppFloat"), { ssr: false });

export const metadata: Metadata = {
  metadataBase: new URL("https://inkolabels.com"),
  title: {
    default: "INKO Custom Labels — B2B Label Manufacturer China | Low MOQ, Fast Turnaround",
    template: "%s | INKO Custom Labels",
  },
  description: "Professional B2B custom label manufacturer in China. Cosmetic, food, beverage, pet food, supplement labels. ISO 9001 certified, 15+ years export, 60+ countries. Low MOQ 500 rolls.",
  keywords: [
    "custom label printing",
    "label manufacturer China",
    "B2B custom labels",
    "cosmetic labels",
    "food packaging labels",
    "beverage labels",
    "pet food labels",
    "waterproof labels",
    "low MOQ label printing",
    "BOPP labels",
    "foil stamping labels",
    "private label printing",
    "OEM label manufacturer",
    "ISO 9001 label manufacturer",
    "China label factory",
  ],
  authors: [{ name: "INKO Custom Labels", url: "https://inkolabels.com" }],
  creator: "INKO Custom Labels",
  publisher: "INKO Custom Labels",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "INKO Custom Labels — B2B Label Manufacturer China",
    description: "Professional B2B custom label manufacturer. ISO 9001 certified, Low MOQ 500 rolls, fast turnaround, worldwide shipping to 60+ countries.",
    type: "website",
    locale: "en_US",
    url: "https://inkolabels.com",
    siteName: "INKO Custom Labels",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "INKO Custom Labels — B2B Label Manufacturer China",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INKO Custom Labels — B2B Label Manufacturer China",
    description: "Professional B2B custom label manufacturer. ISO 9001 certified, Low MOQ 500 rolls, worldwide shipping.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://inkolabels.com",
    languages: {
      "en": "https://inkolabels.com",
      "es": "https://inkolabels.com/es",
      "x-default": "https://inkolabels.com",
    },
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
};

// Global JSON-LD: Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "INKO Custom Labels",
  url: "https://inkolabels.com",
  logo: "https://inkolabels.com/logo.png",
  description: "Professional B2B custom label manufacturer in China. ISO 9001 certified, 15+ years export experience, serving 60+ countries.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Xi'an",
    addressRegion: "Shaanxi",
    addressCountry: "CN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+86-135-7282-1237",
      contactType: "customer service",
      email: "info@inkolabels.com",
      availableLanguage: ["English", "Chinese"],
    },
  ],
  sameAs: [],
  foundingDate: "2009",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 50,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
