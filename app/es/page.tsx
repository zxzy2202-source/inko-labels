import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ChevronRight, Star, Award, Globe, Sparkles, Apple, PawPrint, Droplets, Pill, Factory, Shield, Zap, Layers, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Etiquetas Personalizadas B2B | Fabricante China | INKO Custom Labels",
  description: "INKO Custom Labels: fabricante B2B de etiquetas certificado ISO 9001 en Xi&#39;an, China. Etiquetas cosméticas, alimentarias, bebidas, mascotas, suplementos. MOQ bajo 500 rollos, muestras en 7 días, envío DHL a 60+ países.",
  keywords: ["fabricante etiquetas China", "etiquetas personalizadas B2B", "MOQ bajo etiquetas", "fabricante etiquetas cosméticas", "etiquetas alimentarias"],
  alternates: {
    canonical: "https://inkolabels.com/es",
    languages: {
      "en": "https://inkolabels.com",
      "es": "https://inkolabels.com/es",
      "fr": "https://inkolabels.com/fr",
      "de": "https://inkolabels.com/de",
      "pt": "https://inkolabels.com/pt",
      "ru": "https://inkolabels.com/ru",
      "ja": "https://inkolabels.com/ja",
      "ar": "https://inkolabels.com/ar",
      "x-default": "https://inkolabels.com",
    },
  },
  openGraph: {
    title: "INKO Custom Labels — Fabricante B2B de Etiquetas China",
    description: "Fabricante B2B certificado ISO 9001. MOQ bajo 500 rollos, muestras en 7 días, envío mundial.",
    url: "https://inkolabels.com/es",
    locale: "es_ES",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "INKO Custom Labels" }],
  },
};

const stats = [
  { value: "15+", label: "Años de Experiencia" },
  { value: "60+", label: "Países Atendidos" },
  { value: "500", label: "Pedido Mínimo (Rollos)" },
  { value: "24h", label: "Respuesta de Cotización" },
];

const products = [
  { icon: Sparkles, title: "Etiquetas Cosméticas y de Cuidado", desc: "Estampado en foil, mate suave, relieve, barniz UV para marcas de belleza premium.", tags: ["ESTAMPADO FOIL","MATE SUAVE","RELIEVE"], href: "/es/products/cosmetic-labels", aiImg: "/manus-storage/product-cosmetic-labels_3696937e.jpg" },
  { icon: Droplets, title: "Etiquetas de Aceite Esencial", desc: "Etiquetas resistentes al aceite y disolventes para aceites esenciales y aromaterapia.", tags: ["RESISTENTE AL ACEITE","RESISTENTE DISOLVENTES","LUJO"], href: "/es/products/essential-oil-labels", aiImg: "/manus-storage/product-essential-oil-labels_ba7458ab.jpg" },
  { icon: Apple, title: "Etiquetas de Envases Alimentarios", desc: "Etiquetas conformes con FDA para alimentos, salsas, condimentos y especialidades.", tags: ["CONFORME FDA","IMPERMEABLE","APTO CONGELADOR"], href: "/es/products/food-labels", aiImg: "/manus-storage/product-food-labels_1701c8ab.jpg" },
  { icon: Pill, title: "Etiquetas de Suplementos", desc: "Etiquetas de suplementos conformes con GMP con coincidencia de color precisa.", tags: ["CONFORME GMP","ALTA ADHERENCIA","DATOS VARIABLES"], href: "/es/products/supplement-labels", aiImg: "/manus-storage/product-supplement-labels_0b224cc0.jpg" },
  { icon: PawPrint, title: "Etiquetas para Mascotas", desc: "Etiquetas duraderas y resistentes a la humedad para bolsas de alimento seco y latas.", tags: ["RESISTENTE HUMEDAD","ALTA ADHERENCIA","FILM BOPP"], href: "/es/products/pet-food-labels", aiImg: "/manus-storage/product-petfood-labels_ecc6466e.jpg" },
  { icon: Factory, title: "Etiquetas Industriales y Químicas", desc: "Etiquetas resistentes a químicos y altas temperaturas para uso industrial y automotriz.", tags: ["RESISTENTE QUÍMICOS","ALTA TEMP","DURADERO"], href: "/es/products/industrial-labels", aiImg: "/manus-storage/product-industrial-labels_6294141b.jpg" },
];

const whyUs = [
  { icon: Layers, title: "Prensa Flexo 7 Colores con Placa de Resina", desc: "Prensa flexo de 7 colores con laminación en línea y troquelado en línea — coincidencia PANTONE, gama extendida, sin pasada secundaria." },
  { icon: Package, title: "Impresión en el Lado del Adhesivo", desc: "Impresión trasera en etiquetas BOPP transparentes: gráficos impresos en la cara adhesiva crean un aspecto premium sin etiqueta visible." },
  { icon: Zap, title: "Prensa de Alta Velocidad Foil + Troquelado", desc: "Máquina dedicada de alta velocidad para estampado en foil y troquelado — foil caliente, foil frío y formas personalizadas de precisión en un solo paso." },
  { icon: Shield, title: "Máquina de Laminación en Caliente", desc: "Laminadora térmica para recubrimientos protectores de alta resistencia y acabados premium en etiquetas cosméticas, de vino y de lujo." },
  { icon: Award, title: "2× Líneas de Inspección Visual + Corte", desc: "Dos máquinas combinadas de inspección-corte: detección de defectos al 100% más corte de precisión a su especificación exacta de ancho, longitud y núcleo." },
  { icon: Globe, title: "MOQ Bajo · Envío Mundial", desc: "Mínimo 500 rollos por diseño. Muestra en 3–5 días, producción en 7–10 días. DHL / FedEx / flete marítimo a 60+ países." },
];

const testimonials = [
  { name: "Carlos M.", company: "Natural Beauty Co., México", text: "INKO entregó exactamente lo que necesitábamos — etiquetas premium con foil a una fracción del costo. Entrega rápida, excelente comunicación.", rating: 5 },
  { name: "María G.", company: "Gourmet Foods Ltd., España", text: "Llevamos 3 años pidiendo etiquetas alimentarias a INKO. Calidad consistente, entrega puntual y siempre atienden nuestras solicitudes personalizadas.", rating: 5 },
  { name: "Roberto S.", company: "PetNaturals, Argentina", text: "Las etiquetas para mascotas son exactamente lo que queríamos. Impermeables, colores vibrantes y el MOQ es perfecto para nuestra marca en crecimiento.", rating: 5 },
];

export default function EsHomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image src="/hero-banner.jpg" alt="Fábrica de Etiquetas Personalizadas INKO" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2744]/90 via-[#0F2744]/70 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/90 text-xs font-medium tracking-wider uppercase">Fabricante B2B de Etiquetas · China</span>
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none mb-6 uppercase tracking-tight" style={{ fontFamily: "var(--font-barlow)" }}>
                CADA ETIQUETA.<br /><span className="text-[#E8A020]">EXACTAMENTE BIEN.</span>
              </h1>
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">INKO Custom Labels — fabricante profesional B2B de etiquetas en China. Etiquetas cosméticas, alimentarias, bebidas, mascotas y suplementos. MOQ bajo, entrega rápida, envío mundial.</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/es/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]" style={{ fontFamily: "var(--font-barlow)" }}>
                  Solicitar Muestra Gratis <ChevronRight className="w-4 h-4" />
                </Link>
                <Link href="/es/products" className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:bg-white/10" style={{ fontFamily: "var(--font-barlow)" }}>
                  Ver Productos <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-white/70">
                {["ISO 9001 Certificado", "15+ Años de Exportación", "60+ Países", "MOQ Bajo 500 Rollos"].map(item => (
                  <div key={item} className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#E8A020]" />{item}</div>
                ))}
              </div>
            </div>
            {/* Hero Right: Product Showcase */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/manus-storage/hero-labels-showcase_bfe5db00.jpg"
                  alt="Productos de Etiquetas Premium INKO"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                  <div className="bg-[#E8A020] text-[#0F2744] font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wide">Flexo 7 Colores</div>
                  <div className="bg-white/20 backdrop-blur-sm text-white font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wide border border-white/30">Estampado Foil</div>
                  <div className="bg-white/20 backdrop-blur-sm text-white font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wide border border-white/30">MOQ Bajo</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#E8A020] rounded-xl p-4 shadow-xl">
                <div className="text-3xl font-black text-[#0F2744]" style={{ fontFamily: "var(--font-barlow)" }}>60+</div>
                <div className="text-[#0F2744]/70 text-xs font-medium uppercase tracking-wide">Países</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#0F2744] border border-white/20 rounded-xl p-4 shadow-xl">
                <div className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-barlow)" }}>500</div>
                <div className="text-white/60 text-xs font-medium uppercase tracking-wide">Pedido Mín.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ticker ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#E8A020] py-4 overflow-hidden">
        <div className="ticker-wrap">
          <div className="ticker-inner">
            {[...stats, ...stats].map((s, i) => (
              <div key={i} className="flex items-center gap-3 px-10 flex-shrink-0">
                <span className="text-3xl font-black text-[#0F2744]" style={{ fontFamily: "var(--font-barlow)" }}>{s.value}</span>
                <span className="text-[#0F2744]/70 text-sm font-medium uppercase tracking-wide">{s.label}</span>
                <span className="text-[#0F2744]/30 text-2xl">·</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">Catálogo de Productos</div>
            <h2 className="text-5xl font-black text-[#0F2744] uppercase leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>Etiquetas Personalizadas<br /><span className="text-[#E8A020]">Para Cada Industria</span></h2>
            <p className="text-gray-600 max-w-xl">Desde cosméticos y alimentos hasta mascotas e industrial — INKO fabrica etiquetas de precisión para 9+ industrias.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => {
              const Icon = p.icon;
              return (
                <Link key={p.href} href={p.href} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={p.aiImg} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/60 to-transparent" />
                    <div className="absolute top-4 left-4 w-9 h-9 rounded-lg bg-[#E8A020] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#0F2744]" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#0F2744] text-base mb-2 group-hover:text-[#E8A020] transition-colors">{p.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5">{p.tags.map(tag => <span key={tag} className="text-[10px] font-bold tracking-wider text-[#0F2744]/60 bg-gray-100 px-2 py-0.5 rounded">{tag}</span>)}</div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/es/products" className="inline-flex items-center gap-2 border-2 border-[#0F2744] text-[#0F2744] hover:bg-[#0F2744] hover:text-white font-bold px-8 py-3 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
              Ver Todos los 40+ Productos <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Us ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0F2744]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">Por Qué Elegir INKO</div>
            <h2 className="text-5xl font-black text-white uppercase" style={{ fontFamily: "var(--font-barlow)" }}>Diseñado para Compradores B2B Globales</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(w => { const Icon = w.icon; return (
              <div key={w.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#E8A020]/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#E8A020]/20 flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-[#E8A020]" /></div>
                <h3 className="text-white font-bold text-base mb-2">{w.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ); })}
          </div>
        </div>
      </section>

      {/* ── Factory ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">Nuestra Fábrica</div>
              <h2 className="text-5xl font-black text-[#0F2744] uppercase leading-tight mb-6" style={{ fontFamily: "var(--font-barlow)" }}>Fabricación de Precisión<br /><span className="text-[#E8A020]">Xi&apos;an, China</span></h2>
              <p className="text-gray-600 leading-relaxed mb-6">Ubicados en Xi&apos;an, Shaanxi, nuestra fábrica opera con equipos de impresión de última generación. Producimos más de 50 millones de etiquetas al mes para clientes en 60+ países.</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Prensa flexo de 7 colores con placa de resina",
                  "Laminación en caliente y en frío en línea",
                  "Estampado en foil y troquelado de alta velocidad",
                  "Inspección visual automatizada al 100%",
                  "Certificación ISO 9001:2015",
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#E8A020] flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <Link href="/es/about" className="inline-flex items-center gap-2 text-[#E8A020] font-semibold hover:underline">
                Conocer Nuestra Fábrica <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <Image src="/manus-storage/factory-production-line_3b0322fe.jpg" alt="Línea de producción de etiquetas INKO en Xi&#39;an China" width={600} height={450} className="rounded-2xl shadow-lg object-cover w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">Testimonios de Clientes</div>
            <h2 className="text-5xl font-black text-[#0F2744] uppercase" style={{ fontFamily: "var(--font-barlow)" }}>Lo Que Dicen Nuestros Clientes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="flex gap-1 mb-4">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-5 h-5 text-[#E8A020] fill-[#E8A020]" />)}</div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="font-bold text-[#0F2744] text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#E8A020]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black text-[#0F2744] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>¿Listo para Pedir Sus Etiquetas?</h2>
          <p className="text-[#0F2744]/80 text-lg mb-10">Solicite una muestra gratuita hoy. Respuesta en 24 horas.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/es/contact" className="inline-flex items-center gap-2 bg-[#0F2744] hover:bg-[#1a3a5c] text-white font-bold px-10 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]" style={{ fontFamily: "var(--font-barlow)" }}>
              Solicitar Muestra Gratis <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/es/products" className="inline-flex items-center gap-2 border-2 border-[#0F2744] text-[#0F2744] hover:bg-[#0F2744] hover:text-white font-bold px-10 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
              Ver Catálogo <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
