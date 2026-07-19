import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Award, Clock, Globe, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Catálogo de Etiquetas Personalizadas | INKO Custom Labels",
  description:
    "Catálogo completo de etiquetas personalizadas: BOPP, papel, kraft, metalizadas, transparentes, impermeables y más. MOQ desde 500 rollos, envío mundial.",
  alternates: {
    canonical: "https://inkolabels.com/es/products",
    languages: { "en": "https://inkolabels.com/products", "es": "https://inkolabels.com/es/products" },
  },
};

const industryProducts = [
  { slug: "cosmetic-labels", label: "Etiquetas Cosméticas", icon: "✨", desc: "Cuidado de la piel, maquillaje, perfumes" },
  { slug: "essential-oil-labels", label: "Etiquetas de Aceites Esenciales", icon: "🌿", desc: "Aceites esenciales y aromaterapia" },
  { slug: "food-labels", label: "Etiquetas Alimentarias", icon: "🍎", desc: "Alimentos envasados y frescos" },
  { slug: "beverage-labels", label: "Etiquetas de Bebidas", icon: "🍷", desc: "Jugos, agua, bebidas energéticas" },
  { slug: "supplement-labels", label: "Etiquetas de Suplementos", icon: "💊", desc: "Vitaminas, proteínas, nutracéuticos" },
  { slug: "pet-food-labels", label: "Etiquetas para Mascotas", icon: "🐾", desc: "Alimentos y productos para mascotas" },
  { slug: "household-labels", label: "Etiquetas del Hogar", icon: "🏠", desc: "Limpieza y productos del hogar" },
  { slug: "industrial-labels", label: "Etiquetas Industriales", icon: "🏭", desc: "Manufactura y logística" },
  { slug: "automotive-labels", label: "Etiquetas Automotrices", icon: "🚗", desc: "Piezas y fluidos automotrices" },
];

const materialProducts = [
  { slug: "paper-labels", label: "Etiquetas de Papel", icon: "📄", desc: "Papel blanco brillante y mate" },
  { slug: "bopp-labels", label: "Etiquetas BOPP", icon: "🔷", desc: "Polipropileno biorientado" },
  { slug: "clear-labels", label: "Etiquetas Transparentes", icon: "💎", desc: "Efecto sin etiqueta" },
  { slug: "metallic-labels", label: "Etiquetas Metalizadas", icon: "⭐", desc: "Dorado, plateado, holográfico" },
  { slug: "kraft-labels", label: "Etiquetas Kraft", icon: "📦", desc: "Papel kraft natural y reciclado" },
  { slug: "waterproof-labels", label: "Etiquetas Impermeables", icon: "💧", desc: "Resistentes al agua y humedad" },
  { slug: "freezer-labels", label: "Etiquetas para Congelador", icon: "❄️", desc: "Para temperaturas bajo cero" },
  { slug: "high-temp-labels", label: "Etiquetas Alta Temperatura", icon: "🔥", desc: "Resistentes al calor extremo" },
];

export default function EsProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0F2744] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/es" className="hover:text-white">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Productos</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            Catálogo de <span className="text-[#E8A020]">Etiquetas Personalizadas</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Más de 30 tipos de etiquetas para cada industria y aplicación. MOQ bajo desde 500 rollos, muestras en 3–5 días.
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#E8A020] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-[#0F2744] font-semibold text-sm">
            <span className="flex items-center gap-2"><Award className="w-4 h-4" /> ISO 9001:2015</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Presupuesto en 24h</span>
            <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> Envío Mundial</span>
            <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> MOQ 500 Rollos</span>
          </div>
        </div>
      </section>

      {/* By Industry */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0F2744] mb-10" style={{ fontFamily: "var(--font-barlow)" }}>
            Por Industria
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industryProducts.map((p) => (
              <Link key={p.slug} href={`/es/products/${p.slug}`}
                className="group flex flex-col p-5 bg-gray-50 hover:bg-[#0F2744] rounded-xl transition-all duration-200 border border-transparent hover:border-[#E8A020]/30">
                <span className="text-3xl mb-3">{p.icon}</span>
                <span className="font-bold text-[#0F2744] group-hover:text-white text-sm mb-1 transition-colors">{p.label}</span>
                <span className="text-gray-500 group-hover:text-white/60 text-xs transition-colors">{p.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* By Material */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0F2744] mb-10" style={{ fontFamily: "var(--font-barlow)" }}>
            Por Material
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {materialProducts.map((p) => (
              <Link key={p.slug} href={`/es/products/${p.slug}`}
                className="group flex flex-col p-5 bg-white hover:bg-[#0F2744] rounded-xl transition-all duration-200 shadow-sm hover:shadow-md border border-transparent hover:border-[#E8A020]/30">
                <span className="text-3xl mb-3">{p.icon}</span>
                <span className="font-bold text-[#0F2744] group-hover:text-white text-sm mb-1 transition-colors">{p.label}</span>
                <span className="text-gray-500 group-hover:text-white/60 text-xs transition-colors">{p.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F2744]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            ¿No Encuentra lo que Busca?
          </h2>
          <p className="text-white/70 mb-8">Fabricamos etiquetas personalizadas según sus especificaciones. Contáctenos para una consulta gratuita.</p>
          <Link href="/es/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-4 rounded transition-all duration-200 uppercase tracking-wide">
            Solicitar Presupuesto <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
