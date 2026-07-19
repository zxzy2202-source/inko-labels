import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    languages: {
      "en": "https://inkolabels.com",
      "es": "https://inkolabels.com/es",
    },
  },
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <div lang="es">{children}</div>;
}
