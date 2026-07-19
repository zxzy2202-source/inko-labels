import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const WhatsAppFloat = dynamic(() => import("@/components/WhatsAppFloat"), { ssr: false });

export const metadata: Metadata = {
  title: "INKO Custom Labels — B2B Label Manufacturer China | Low MOQ, Fast Turnaround",
  description: "Professional B2B custom label manufacturer in China. Cosmetic, food, beverage, pet food, supplement labels. ISO 9001 certified, 15+ years export, 60+ countries. Low MOQ 500 rolls.",
  keywords: "custom label printing, label manufacturer China, B2B labels, cosmetic labels, food labels, pet food labels, waterproof labels, low MOQ labels",
  openGraph: {
    title: "INKO Custom Labels — B2B Label Manufacturer China",
    description: "Professional B2B custom label manufacturer. Low MOQ, fast turnaround, worldwide shipping.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
