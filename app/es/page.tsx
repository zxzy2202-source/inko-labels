import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, CheckCircle2, Star, Award, Globe, Zap, Shield, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Etiquetas Personalizadas para Exportación B2B | INKO Custom Labels",
  description:
    "Fabricante chino de etiquetas personalizadas con MOQ bajo desde 500 rollos. Etiquetas BOPP, papel, metalizadas para cosméticos, alimentos, suplementos. Envío mundial DHL/FedEx.",
  alternates: {
    canonical: "https://inkolabels.com/es",
    languages: { "en": "https://inkolabels.com", "es": "https://inkolabels.com/es" },
  },
  openGraph: {
    title: "Etiquetas Personalizadas para Exportación B2B | INKO Custom Labels",
    description: "Fabricante chino de etiquetas personalizadas con MOQ bajo desde 500 rollos.",
    url: "https://inkolabels.com/es",
    locale: "es_ES",
    alternateLocale: ["en_US"],
  },
};

const productCategories = [
  { slug: "cosmetic-labels", label: "Etiquetas Cosméticas", icon: "✨" },
  { slug: "food-labels", label: "Etiquetas Alimentarias", icon: "🍎" },
  { slug: "supplement-labels", label: "Etiquetas de Suplementos", icon: "💊" },
  { slug: "beverage-labels", label: "Etiquetas de Bebidas", icon: "🍷" },
  { slug: "pet-food-labels", label: "Etiquetas para Mascotas", icon: "🐾" },
  { slug: "industrial-labels", label: "Etiquetas Industriales", icon: "🏭" },
];

const features = [
  { icon: Award, title: "Certificado ISO 9001:2015", desc: "Sistema de gestión de calidad certificado para una calidad consistente en cada pedido." },
  { icon: Globe, title: "Envío a 60+ Países", desc: "Entrega rápida y confiable a todo el mundo con DHL, FedEx y UPS." },
  { icon: Zap, title: "Muestras en 3–5 Días", desc: "Producción rápida de muestras para que pueda probar antes de hacer un pedido grande." },
  { icon: Shield, title: "MOQ Bajo desde 500 Rollos", desc: "Pedidos mínimos bajos para marcas nuevas, startups y pedidos de prueba." },
  { icon: Clock, title: "Entrega en 7–10 Días", desc: "Tiempos de producción rápidos para que pueda lanzar su producto más rápido." },
  { icon: CheckCircle2, title: "15+ Años de Experiencia", desc: "Más de 15 años fabricando etiquetas para exportación a clientes de todo el mundo." },
];

const testimonials = [
  { name: "Carlos M.", country: "México", text: "Excelente calidad de impresión y entrega puntual. INKO es nuestro proveedor de etiquetas de confianza.", rating: 5 },
  { name: "María G.", country: "España", text: "MOQ bajo y muestras rápidas. Perfecto para nuestra marca de cosméticos en crecimiento.", rating: 5 },
  { name: "Roberto S.", country: "Argentina", text: "Comunicación profesional y etiquetas de alta calidad. Muy recomendable.", rating: 5 },
];

export default function EsHomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0F2744] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2744] via-[#1a3a5c] to-[#0F2744] opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#E8A020]/20 border border-[#E8A020]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="text-[#E8A020] text-xs font-semibold uppercase tracking-wider">Fabricante Certificado ISO 9001</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
                Etiquetas Personalizadas<br />
                <span className="text-[#E8A020]">para Exportación B2B</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Fabricante chino de etiquetas con más de 15 años de experiencia. MOQ bajo desde 500 rollos, muestras en 3–5 días, envío mundial con DHL/FedEx.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/es/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-4 rounded transition-all duration-200 hover:scale-[1.02] uppercase tracking-wide">
                  Solicitar Muestra Gratis <ChevronRight className="w-4 h-4" />
                </Link>
                <Link href="/es/products" className="inline-flex items-center gap-2 border border-white/30 hover:border-[#E8A020] text-white hover:text-[#E8A020] font-semibold px-8 py-4 rounded transition-all duration-200 uppercase tracking-wide">
                  Ver Productos
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-white/70">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#E8A020]" /> ISO 9001:2015</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#E8A020]" /> MOQ 500 rollos</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#E8A020]" /> Envío DHL/FedEx</span>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="/manus-storage/hero-labels-showcase_bfe5db00.jpg"
                alt="Etiquetas personalizadas premium para exportación B2B"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ─────────────────────────────────────────────────────── */}
      <section className="bg-[#E8A020] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-[#0F2744] font-semibold text-sm">
            <span className="flex items-center gap-2"><Award className="w-4 h-4" /> ISO 9001:2015 Certificado</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Presupuesto en 24h</span>
            <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> Envío a 60+ Países</span>
            <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> MOQ desde 500 Rollos</span>
          </div>
        </div>
      </section>

      {/* ── Product Categories ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0F2744] mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
              Etiquetas para Cada Industria
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fabricamos etiquetas personalizadas para cosméticos, alimentos, bebidas, suplementos, mascotas e industria.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {productCategories.map((cat) => (
              <Link key={cat.slug} href={`/es/products/${cat.slug}`}
                className="group flex flex-col items-center p-6 bg-gray-50 hover:bg-[#0F2744] rounded-xl transition-all duration-200 text-center">
                <span className="text-3xl mb-3">{cat.icon}</span>
                <span className="text-sm font-semibold text-[#0F2744] group-hover:text-white transition-colors">{cat.label}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/es/products" className="inline-flex items-center gap-2 text-[#E8A020] font-semibold hover:underline">
              Ver Todos los Productos <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0F2744] mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
              ¿Por Qué Elegir INKO?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <f.icon className="w-8 h-8 text-[#E8A020] mb-4" />
                <h3 className="font-bold text-[#0F2744] mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Factory Section ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-[#0F2744] mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
                Fábrica Moderna en Xi'an, China
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nuestra fábrica en Xi'an cuenta con equipos de impresión flexográfica de última generación, líneas de laminación en caliente y sistemas de inspección automatizados. Producimos más de 50 millones de etiquetas al mes para clientes en más de 60 países.
              </p>
              <ul className="space-y-3 mb-8">
                {["Impresión flexográfica de 8 colores", "Laminación en caliente y en frío", "Estampado en foil y troquelado", "Inspección automatizada al 100%", "Certificación ISO 9001:2015"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#E8A020] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/es/about" className="inline-flex items-center gap-2 text-[#E8A020] font-semibold hover:underline">
                Conocer Nuestra Fábrica <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <Image
                src="/manus-storage/factory-production-line_3b0322fe.jpg"
                alt="Línea de producción de etiquetas INKO en Xi'an China"
                width={600}
                height={450}
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0F2744]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
              Lo Que Dicen Nuestros Clientes
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/10 rounded-xl p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#E8A020] fill-[#E8A020]" />
                  ))}
                </div>
                <p className="text-white/90 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div className="text-white/60 text-xs font-semibold">{t.name} — {t.country}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#E8A020]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-[#0F2744] mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            ¿Listo para Empezar?
          </h2>
          <p className="text-[#0F2744]/80 mb-8 text-lg">
            Solicite una muestra gratuita hoy. Respuesta en 24 horas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/es/contact" className="inline-flex items-center gap-2 bg-[#0F2744] hover:bg-[#1a3a5c] text-white font-bold px-8 py-4 rounded transition-all duration-200 uppercase tracking-wide">
              Solicitar Muestra Gratis <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/es/products" className="inline-flex items-center gap-2 border-2 border-[#0F2744] text-[#0F2744] hover:bg-[#0F2744] hover:text-white font-bold px-8 py-4 rounded transition-all duration-200 uppercase tracking-wide">
              Ver Catálogo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
