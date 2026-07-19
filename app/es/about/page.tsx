import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Award, Globe, Users, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nosotros — Fábrica de Etiquetas en China | INKO Custom Labels",
  description:
    "INKO Custom Labels es un fabricante chino de etiquetas con más de 15 años de experiencia. Certificado ISO 9001:2015, enviamos a más de 60 países. Conozca nuestra fábrica en Xi'an.",
  alternates: {
    canonical: "https://inkolabels.com/es/about",
    languages: { "en": "https://inkolabels.com/about", "es": "https://inkolabels.com/es/about" },
  },
};

const stats = [
  { value: "15+", label: "Años de Experiencia" },
  { value: "60+", label: "Países de Exportación" },
  { value: "500+", label: "Clientes Activos" },
  { value: "50M+", label: "Etiquetas/Mes" },
];

const certifications = [
  "ISO 9001:2015 — Sistema de Gestión de Calidad",
  "SGS — Inspección y Certificación de Terceros",
  "Materiales conformes con FDA y EU",
  "Adhesivos sin BPA disponibles",
];

export default function EsAboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0F2744] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/es" className="hover:text-white">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Sobre Nosotros</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            Sobre <span className="text-[#E8A020]">INKO Custom Labels</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Fabricante chino de etiquetas personalizadas con más de 15 años de experiencia exportando a clientes en más de 60 países.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#E8A020] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-[#0F2744]" style={{ fontFamily: "var(--font-barlow)" }}>{s.value}</div>
                <div className="text-[#0F2744]/80 text-sm font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-[#0F2744] mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  INKO Custom Labels fue fundada en Xi'an, China, con la misión de proporcionar etiquetas de alta calidad a marcas de todo el mundo. Desde nuestros inicios, nos hemos especializado en la exportación B2B, trabajando con marcas de cosméticos, alimentos, suplementos y productos industriales.
                </p>
                <p>
                  Con más de 15 años de experiencia, hemos desarrollado una profunda comprensión de las necesidades de los compradores internacionales: calidad consistente, comunicación clara, plazos de entrega confiables y documentación completa para el control de calidad.
                </p>
                <p>
                  Hoy, INKO exporta a más de 60 países y cuenta con más de 500 clientes activos en América Latina, Europa, América del Norte, Australia y Asia.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, title: "Certificado ISO 9001", desc: "Sistema de gestión de calidad certificado internacionalmente" },
                { icon: Globe, title: "60+ Países", desc: "Exportamos a clientes en todo el mundo" },
                { icon: Users, title: "500+ Clientes", desc: "Clientes activos de marcas reconocidas" },
                { icon: CheckCircle2, title: "100% Inspección", desc: "Cada rollo inspeccionado antes del envío" },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                  <item.icon className="w-7 h-7 text-[#E8A020] mb-3" />
                  <h3 className="font-bold text-[#0F2744] text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0F2744] mb-8 text-center" style={{ fontFamily: "var(--font-barlow)" }}>
            Certificaciones y Cumplimiento
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#E8A020] flex-shrink-0" />
                <span className="text-gray-700 text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F2744]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            ¿Listo para Trabajar con Nosotros?
          </h2>
          <p className="text-white/70 mb-8">Solicite una muestra gratuita y reciba respuesta en 24 horas.</p>
          <Link href="/es/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-4 rounded transition-all duration-200 uppercase tracking-wide">
            Contactar Ahora <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
