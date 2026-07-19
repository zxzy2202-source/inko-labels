import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2, Award, Clock, Globe, Zap, Truck, Headphones } from "lucide-react";
import FaqItem from "@/components/FaqItem";

// ─── Datos de productos en español ───────────────────────────────────────────
const products: Record<string, {
  title: string;
  subtitle: string;
  desc: string;
  longDesc: string;
  features: string[];
  specs: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
}> = {
  "cosmetic-labels": {
    title: "Etiquetas Cosméticas Personalizadas",
    subtitle: "Etiquetas premium para cosméticos, cuidado de la piel y perfumes",
    desc: "Etiquetas de alta calidad para productos cosméticos con acabados premium como foil, barniz UV y laminación soft-touch.",
    longDesc: "Nuestras etiquetas cosméticas están diseñadas para destacar en los estantes y resistir el uso diario. Fabricadas con materiales BOPP, PET o papel de primera calidad, ofrecemos acabados premium como estampado en foil dorado/plateado, barniz UV localizado, laminación soft-touch y relieve. Certificado ISO 9001:2015, con MOQ bajo desde 500 rollos.",
    features: [
      "Materiales BOPP, PET o papel premium",
      "Estampado en foil dorado, plateado y holográfico",
      "Barniz UV localizado (Spot UV)",
      "Laminación soft-touch y brillante",
      "Relieve y grabado en seco",
      "Adhesivos de alta resistencia para envases de vidrio y plástico",
    ],
    specs: [
      { label: "MOQ", value: "500 rollos / diseño" },
      { label: "Plazo de entrega", value: "7–10 días hábiles" },
      { label: "Muestras", value: "3–5 días hábiles" },
      { label: "Colores de impresión", value: "Hasta 8 colores + foil" },
      { label: "Tamaño mínimo", value: "10 × 10 mm" },
      { label: "Tamaño máximo", value: "300 × 500 mm" },
    ],
    faqs: [
      { q: "¿Qué materiales están disponibles para etiquetas cosméticas?", a: "Ofrecemos BOPP brillante, BOPP mate, PET transparente, PET plateado, papel blanco y papel metalizado. El BOPP mate con laminación soft-touch es el más popular para cosméticos premium." },
      { q: "¿Pueden igualar colores PANTONE exactos?", a: "Sí. Utilizamos igualación de color PANTONE con medición espectrofotométrica en cada producción. Verificamos precisión Delta E < 2 antes de liberar cada pedido." },
      { q: "¿Cuál es el MOQ para etiquetas cosméticas?", a: "Nuestro MOQ estándar es de 500 rollos por diseño. Para pedidos de alto volumen, ofrecemos precios escalonados con ahorros significativos a partir de 2.000 rollos." },
      { q: "¿Ofrecen muestras antes del pedido de producción?", a: "Sí. Producimos muestras físicas en 3–5 días hábiles. Puede probar la etiqueta en su envase real antes de hacer el pedido de producción." },
      { q: "¿Son resistentes al agua y aceites las etiquetas cosméticas?", a: "Sí. Nuestras etiquetas BOPP y PET son resistentes al agua, aceites y productos cosméticos. También ofrecemos adhesivos especiales para superficies curvas y envases de vidrio." },
    ],
    related: ["essential-oil-labels", "supplement-labels", "beverage-labels", "food-labels", "bopp-labels", "metallic-labels"],
  },
  "food-labels": {
    title: "Etiquetas Alimentarias Personalizadas",
    subtitle: "Etiquetas para alimentos envasados, frescos y orgánicos",
    desc: "Etiquetas para alimentos con materiales conformes con FDA/EU, adhesivos seguros para contacto con alimentos.",
    longDesc: "Nuestras etiquetas alimentarias cumplen con los requisitos de seguridad alimentaria de FDA y UE. Fabricadas con materiales aprobados para contacto con alimentos, ofrecemos etiquetas para alimentos envasados, frescos, orgánicos y congelados. Resistentes a la humedad, aceites y temperaturas extremas.",
    features: [
      "Materiales conformes con FDA y EU",
      "Adhesivos seguros para contacto con alimentos",
      "Resistentes a la humedad y aceites",
      "Opciones para congelador y alta temperatura",
      "Impresión de código de barras y QR",
      "Etiquetas removibles para precios y promociones",
    ],
    specs: [
      { label: "MOQ", value: "500 rollos / diseño" },
      { label: "Plazo de entrega", value: "7–10 días hábiles" },
      { label: "Muestras", value: "3–5 días hábiles" },
      { label: "Conformidad", value: "FDA, EU, REACH" },
      { label: "Temperatura", value: "-40°C a +80°C" },
      { label: "Envío", value: "DHL / FedEx mundial" },
    ],
    faqs: [
      { q: "¿Sus etiquetas son conformes con FDA para alimentos?", a: "Sí. Nuestros materiales y adhesivos para etiquetas alimentarias cumplen con los requisitos de FDA 21 CFR y las regulaciones de la UE para materiales en contacto con alimentos." },
      { q: "¿Pueden las etiquetas resistir la refrigeración y congelación?", a: "Sí. Ofrecemos etiquetas especiales para congelador que funcionan a temperaturas de hasta -40°C. El adhesivo permanece activo y la impresión no se deteriora en condiciones de congelación." },
      { q: "¿Ofrecen etiquetas resistentes al aceite para alimentos fritos?", a: "Sí. Nuestras etiquetas con recubrimiento resistente al aceite son ideales para alimentos fritos, salsas y productos con alto contenido de grasa." },
      { q: "¿Pueden imprimir información nutricional y código de barras?", a: "Sí. Podemos imprimir información nutricional completa, códigos de barras EAN/UPC, códigos QR y cualquier texto requerido por las regulaciones de etiquetado alimentario." },
      { q: "¿Cuál es el plazo de entrega para etiquetas alimentarias?", a: "El plazo estándar es de 7–10 días hábiles después de la aprobación de la prueba de color. Para pedidos urgentes, ofrecemos producción acelerada en 5–7 días hábiles." },
    ],
    related: ["beverage-labels", "supplement-labels", "pet-food-labels", "paper-labels", "waterproof-labels", "freezer-labels"],
  },
  "supplement-labels": {
    title: "Etiquetas de Suplementos Personalizadas",
    subtitle: "Etiquetas para vitaminas, proteínas y nutracéuticos",
    desc: "Etiquetas premium para suplementos dietéticos con cumplimiento regulatorio y acabados de alta calidad.",
    longDesc: "Las etiquetas de suplementos requieren cumplimiento regulatorio estricto y materiales de alta calidad. INKO fabrica etiquetas para vitaminas, proteínas, nutracéuticos y suplementos herbales con materiales conformes con FDA/EU, impresión de alta resolución y acabados premium.",
    features: [
      "Conformidad con regulaciones de suplementos FDA/EU",
      "Impresión de alta resolución para texto pequeño",
      "Materiales resistentes a la humedad y aceites",
      "Acabados premium: foil, soft-touch, UV",
      "Etiquetas de seguridad anti-falsificación disponibles",
      "Impresión de lote, fecha de caducidad y número de serie",
    ],
    specs: [
      { label: "MOQ", value: "500 rollos / diseño" },
      { label: "Plazo de entrega", value: "7–10 días hábiles" },
      { label: "Muestras", value: "3–5 días hábiles" },
      { label: "Resolución", value: "Hasta 1200 DPI" },
      { label: "Conformidad", value: "FDA, EU, cGMP" },
      { label: "Envío", value: "DHL / FedEx mundial" },
    ],
    faqs: [
      { q: "¿Pueden imprimir texto pequeño con alta resolución para paneles de información nutricional?", a: "Sí. Nuestra impresión flexográfica de alta resolución (hasta 1200 DPI) garantiza que el texto pequeño en los paneles de información nutricional sea legible y nítido." },
      { q: "¿Ofrecen etiquetas de seguridad anti-falsificación?", a: "Sí. Ofrecemos varias opciones de seguridad: hologramas, tintas de seguridad, microimpresión y etiquetas de evidencia de manipulación para proteger su marca." },
      { q: "¿Pueden imprimir números de lote y fechas de caducidad variables?", a: "Sí. Ofrecemos impresión de datos variables para números de lote, fechas de caducidad y números de serie únicos en cada etiqueta." },
      { q: "¿Sus materiales cumplen con las regulaciones de suplementos?", a: "Sí. Nuestros materiales y adhesivos cumplen con los requisitos de FDA 21 CFR y las regulaciones de la UE para suplementos dietéticos y productos nutracéuticos." },
      { q: "¿Cuál es el MOQ para etiquetas de suplementos?", a: "Nuestro MOQ estándar es de 500 rollos por diseño. Para marcas nuevas, esto permite lanzar con una inversión mínima y reordenar según la demanda." },
    ],
    related: ["cosmetic-labels", "food-labels", "beverage-labels", "bopp-labels", "metallic-labels", "tamper-evident-labels"],
  },
  "beverage-labels": {
    title: "Etiquetas de Bebidas Personalizadas",
    subtitle: "Etiquetas para agua, jugos, vinos, cervezas y bebidas energéticas",
    desc: "Etiquetas resistentes al agua y condensación para botellas de bebidas de todos los tipos.",
    longDesc: "Las etiquetas de bebidas deben resistir la condensación, el hielo y la manipulación frecuente. INKO fabrica etiquetas BOPP, PET y papel para agua, jugos, vinos, cervezas, bebidas energéticas y más. Adhesivos de alta resistencia para vidrio, PET y aluminio.",
    features: [
      "Resistentes al agua y condensación",
      "Adhesivos para vidrio, PET y aluminio",
      "Impresión de alta calidad para diseños premium",
      "Opciones para congelador y refrigeración",
      "Etiquetas de cuello y cuerpo disponibles",
      "Acabados: foil, barniz UV, laminación brillante/mate",
    ],
    specs: [
      { label: "MOQ", value: "500 rollos / diseño" },
      { label: "Plazo de entrega", value: "7–10 días hábiles" },
      { label: "Muestras", value: "3–5 días hábiles" },
      { label: "Resistencia", value: "Agua, hielo, condensación" },
      { label: "Sustratos", value: "Vidrio, PET, aluminio" },
      { label: "Envío", value: "DHL / FedEx mundial" },
    ],
    faqs: [
      { q: "¿Las etiquetas se adhieren bien a botellas de vidrio mojadas?", a: "Sí. Nuestros adhesivos especiales para bebidas están formulados para adherirse a superficies mojadas y resistir la condensación durante el almacenamiento en frío." },
      { q: "¿Pueden hacer etiquetas para botellas de vino?", a: "Sí. Fabricamos etiquetas premium para vino con acabados de foil, papel texturizado y laminación soft-touch que dan un aspecto lujoso a sus botellas." },
      { q: "¿Ofrecen etiquetas para envases de aluminio?", a: "Sí. Tenemos adhesivos especiales para aluminio que garantizan una adhesión fuerte y duradera en latas y botellas de aluminio." },
      { q: "¿Pueden imprimir etiquetas de cuello y cuerpo para la misma botella?", a: "Sí. Podemos fabricar etiquetas de cuello y cuerpo con diseños coordinados. Ambas se pueden pedir en el mismo pedido con el mismo MOQ." },
      { q: "¿Cuál es el MOQ para etiquetas de bebidas?", a: "Nuestro MOQ estándar es de 500 rollos por diseño. Para pedidos de múltiples SKUs, cada diseño tiene su propio MOQ de 500 rollos." },
    ],
    related: ["food-labels", "wine-spirits-labels", "waterproof-labels", "bopp-labels", "clear-labels", "metallic-labels"],
  },
  "pet-food-labels": {
    title: "Etiquetas para Alimentos de Mascotas",
    subtitle: "Etiquetas para comida de perros, gatos y otros animales",
    desc: "Etiquetas resistentes y atractivas para alimentos de mascotas con materiales seguros y conformes.",
    longDesc: "El mercado de alimentos para mascotas exige etiquetas que sean atractivas, resistentes y conformes con las regulaciones. INKO fabrica etiquetas para comida de perros, gatos, aves y otros animales con materiales seguros, impresión vibrante y acabados resistentes a la humedad y aceites.",
    features: [
      "Materiales seguros y conformes con regulaciones",
      "Resistentes a la humedad y aceites de alimentos",
      "Impresión vibrante para diseños atractivos",
      "Opciones para bolsas, latas y envases rígidos",
      "Etiquetas de información nutricional de alta resolución",
      "Adhesivos fuertes para múltiples sustratos",
    ],
    specs: [
      { label: "MOQ", value: "500 rollos / diseño" },
      { label: "Plazo de entrega", value: "7–10 días hábiles" },
      { label: "Muestras", value: "3–5 días hábiles" },
      { label: "Conformidad", value: "AAFCO, EU Pet Food" },
      { label: "Resistencia", value: "Humedad, aceites, grasa" },
      { label: "Envío", value: "DHL / FedEx mundial" },
    ],
    faqs: [
      { q: "¿Sus etiquetas cumplen con las regulaciones de etiquetado de alimentos para mascotas?", a: "Sí. Nuestras etiquetas para alimentos de mascotas cumplen con los requisitos de AAFCO en EE.UU. y las regulaciones de la UE para alimentos de animales de compañía." },
      { q: "¿Pueden las etiquetas resistir la grasa y aceites de los alimentos para mascotas?", a: "Sí. Nuestros materiales con recubrimiento resistente al aceite son ideales para alimentos húmedos y secos para mascotas con alto contenido de grasa." },
      { q: "¿Ofrecen etiquetas para bolsas de alimentos para mascotas?", a: "Sí. Fabricamos etiquetas para bolsas flexibles, latas, envases rígidos y botellas. Cada sustrato requiere un adhesivo específico que seleccionamos según su aplicación." },
      { q: "¿Pueden imprimir diseños con animales y colores vibrantes?", a: "Sí. Nuestra impresión flexográfica de 8 colores reproduce diseños complejos con colores vibrantes y detalles nítidos para hacer que su producto destaque en el estante." },
      { q: "¿Cuál es el MOQ para etiquetas de alimentos para mascotas?", a: "Nuestro MOQ estándar es de 500 rollos por diseño, lo que es ideal para marcas de mascotas en crecimiento que necesitan flexibilidad en los pedidos." },
    ],
    related: ["food-labels", "supplement-labels", "waterproof-labels", "paper-labels", "bopp-labels", "kraft-labels"],
  },
  "industrial-labels": {
    title: "Etiquetas Industriales Personalizadas",
    subtitle: "Etiquetas resistentes para manufactura, logística e industria",
    desc: "Etiquetas industriales de alta resistencia para entornos exigentes con adhesivos de alta performance.",
    longDesc: "Las etiquetas industriales deben resistir condiciones extremas: calor, frío, productos químicos, aceites y abrasión. INKO fabrica etiquetas para manufactura, logística, automotriz y electrónica con materiales de alta performance y adhesivos especializados.",
    features: [
      "Resistentes a productos químicos y solventes",
      "Opciones de alta y baja temperatura",
      "Adhesivos de alta performance para superficies difíciles",
      "Impresión de código de barras y QR de alta resolución",
      "Etiquetas de seguridad y advertencia",
      "Materiales: poliéster, polietileno, vinilo",
    ],
    specs: [
      { label: "MOQ", value: "500 rollos / diseño" },
      { label: "Plazo de entrega", value: "7–10 días hábiles" },
      { label: "Muestras", value: "3–5 días hábiles" },
      { label: "Temperatura", value: "-40°C a +150°C" },
      { label: "Resistencia", value: "Químicos, aceites, abrasión" },
      { label: "Envío", value: "DHL / FedEx mundial" },
    ],
    faqs: [
      { q: "¿Qué materiales están disponibles para etiquetas industriales?", a: "Ofrecemos poliéster (PET), polietileno (PE), polipropileno (PP), vinilo y materiales especiales para aplicaciones industriales extremas." },
      { q: "¿Pueden las etiquetas resistir productos químicos agresivos?", a: "Sí. Tenemos materiales y adhesivos resistentes a una amplia gama de productos químicos. Por favor, especifique los químicos a los que estará expuesta la etiqueta para recomendar el material adecuado." },
      { q: "¿Ofrecen etiquetas para superficies de baja energía como polietileno?", a: "Sí. Tenemos adhesivos de alta performance especialmente formulados para superficies de baja energía como polietileno, polipropileno y PTFE." },
      { q: "¿Pueden imprimir códigos de barras de alta resolución para escaneo industrial?", a: "Sí. Nuestra impresión de alta resolución garantiza que los códigos de barras sean legibles por escáneres industriales, incluso en tamaños pequeños." },
      { q: "¿Cuál es el plazo de entrega para etiquetas industriales especiales?", a: "El plazo estándar es de 7–10 días hábiles. Para materiales especiales o adhesivos personalizados, puede ser necesario un plazo adicional de 3–5 días." },
    ],
    related: ["automotive-labels", "electronics-labels", "chemical-resistant-labels", "high-temp-labels", "barcode-labels", "tamper-evident-labels"],
  },
};

// Fallback para slugs no definidos explícitamente
function getProduct(slug: string) {
  if (products[slug]) return products[slug];
  // Generar datos genéricos para slugs de materiales y otros
  const titleMap: Record<string, string> = {
    "bopp-labels": "Etiquetas BOPP Personalizadas",
    "paper-labels": "Etiquetas de Papel Personalizadas",
    "clear-labels": "Etiquetas Transparentes Personalizadas",
    "metallic-labels": "Etiquetas Metalizadas Personalizadas",
    "kraft-labels": "Etiquetas Kraft Personalizadas",
    "waterproof-labels": "Etiquetas Impermeables Personalizadas",
    "freezer-labels": "Etiquetas para Congelador",
    "high-temp-labels": "Etiquetas de Alta Temperatura",
    "essential-oil-labels": "Etiquetas para Aceites Esenciales",
    "wine-spirits-labels": "Etiquetas para Vinos y Licores",
    "household-labels": "Etiquetas para el Hogar",
    "automotive-labels": "Etiquetas Automotrices",
    "electronics-labels": "Etiquetas para Electrónica",
    "agricultural-labels": "Etiquetas Agrícolas",
  };
  const title = titleMap[slug] || `Etiquetas ${slug.replace(/-/g, " ")}`;
  return {
    title,
    subtitle: "Etiquetas personalizadas de alta calidad para exportación B2B",
    desc: "Etiquetas personalizadas fabricadas en China con materiales premium, MOQ bajo y envío mundial.",
    longDesc: `INKO Custom Labels fabrica ${title.toLowerCase()} con materiales de primera calidad, impresión de alta resolución y acabados premium. Certificado ISO 9001:2015, MOQ desde 500 rollos, muestras en 3–5 días y envío mundial con DHL/FedEx.`,
    features: [
      "Materiales de primera calidad",
      "Impresión de alta resolución hasta 8 colores",
      "Acabados premium: foil, UV, soft-touch",
      "MOQ bajo desde 500 rollos",
      "Muestras en 3–5 días hábiles",
      "Envío mundial con DHL/FedEx",
    ],
    specs: [
      { label: "MOQ", value: "500 rollos / diseño" },
      { label: "Plazo de entrega", value: "7–10 días hábiles" },
      { label: "Muestras", value: "3–5 días hábiles" },
      { label: "Colores", value: "Hasta 8 colores + foil" },
      { label: "Certificación", value: "ISO 9001:2015" },
      { label: "Envío", value: "DHL / FedEx mundial" },
    ],
    faqs: [
      { q: "¿Cuál es el MOQ?", a: "Nuestro MOQ estándar es de 500 rollos por diseño." },
      { q: "¿Cuánto tiempo tarda la producción?", a: "El plazo estándar es de 7–10 días hábiles después de la aprobación de la muestra." },
      { q: "¿Ofrecen muestras?", a: "Sí, producimos muestras físicas en 3–5 días hábiles." },
      { q: "¿A qué países envían?", a: "Enviamos a más de 60 países con DHL, FedEx y UPS." },
      { q: "¿Qué acabados están disponibles?", a: "Ofrecemos laminación brillante, mate, soft-touch, foil dorado/plateado, barniz UV localizado y relieve." },
    ],
    related: ["cosmetic-labels", "food-labels", "supplement-labels", "beverage-labels", "bopp-labels", "paper-labels"],
  };
}

const allSlugs = [
  "cosmetic-labels", "essential-oil-labels", "peptide-labels", "food-labels",
  "beverage-labels", "wine-spirits-labels", "supplement-labels", "pet-food-labels",
  "household-labels", "automotive-labels", "industrial-labels", "electronics-labels",
  "agricultural-labels", "paper-labels", "kraft-labels", "bopp-labels", "clear-labels",
  "metallic-labels", "pe-film-labels", "pet-film-labels", "thermal-labels",
  "waterproof-labels", "oil-resistant-labels", "freezer-labels", "chemical-resistant-labels",
  "high-temp-labels", "high-tack-labels", "removable-labels", "tamper-evident-labels",
  "resealable-labels", "barcode-labels", "roll-labels", "short-run-labels",
];

export async function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = getProduct(params.slug);
  const title = `${product.title} | INKO Custom Labels`;
  const description = product.longDesc.slice(0, 155) + "…";
  return {
    title,
    description,
    alternates: {
      canonical: `https://inkolabels.com/es/products/${params.slug}`,
      languages: {
        "en": `https://inkolabels.com/products/${params.slug}`,
        "es": `https://inkolabels.com/es/products/${params.slug}`,
      },
    },
    openGraph: { title, description, url: `https://inkolabels.com/es/products/${params.slug}`, locale: "es_ES" },
  };
}

export default function EsProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0F2744] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/es" className="hover:text-white">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/es/products" className="hover:text-white">Productos</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">{product.title}</span>
          </nav>
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h1 className="text-4xl lg:text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
                {product.title}
              </h1>
              <p className="text-[#E8A020] font-semibold mb-4">{product.subtitle}</p>
              <p className="text-white/80 text-lg leading-relaxed">{product.desc}</p>
            </div>
            {/* Quick Specs Card */}
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Especificaciones Rápidas</h3>
              <div className="space-y-3">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">{spec.label}</span>
                    <span className="text-white font-semibold text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>
              <Link href="/es/contact"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold py-3 rounded-lg transition-all duration-200 text-sm uppercase tracking-wide">
                Solicitar Presupuesto <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#E8A020] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-[#0F2744] font-semibold text-xs">
            <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5" /> ISO 9001:2015</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Presupuesto en 24h</span>
            <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5" /> Envío a 60+ Países</span>
            <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5" /> MOQ 500 Rollos</span>
            <span className="flex items-center gap-1.5"><Truck className="w-3.5 h-3.5" /> DHL / FedEx</span>
            <span className="flex items-center gap-1.5"><Headphones className="w-3.5 h-3.5" /> Soporte Dedicado</span>
          </div>
        </div>
      </section>

      {/* Features + FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-black text-[#0F2744] mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
                Características y Capacidades
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{product.longDesc}</p>
              <ul className="space-y-3">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E8A020] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-black text-[#0F2744] mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
                Preguntas Frecuentes
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                {product.faqs.map((faq) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {product.related && product.related.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-[#0F2744] mb-8" style={{ fontFamily: "var(--font-barlow)" }}>
              Productos Relacionados
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {product.related.map((slug) => (
                <Link key={slug} href={`/es/products/${slug}`}
                  className="group flex flex-col items-center p-4 bg-white hover:bg-[#0F2744] rounded-xl transition-all duration-200 text-center shadow-sm">
                  <span className="text-sm font-semibold text-[#0F2744] group-hover:text-white transition-colors capitalize">
                    {slug.replace(/-/g, " ")}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#0F2744]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            ¿Listo para Solicitar una Muestra?
          </h2>
          <p className="text-white/70 mb-8">Respuesta en 24 horas. Muestras físicas en 3–5 días.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/es/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-4 rounded transition-all duration-200 uppercase tracking-wide">
              Solicitar Muestra Gratis <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/es/products" className="inline-flex items-center gap-2 border border-white/30 hover:border-[#E8A020] text-white hover:text-[#E8A020] font-semibold px-8 py-4 rounded transition-all duration-200 uppercase tracking-wide">
              Ver Más Productos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
