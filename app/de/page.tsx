import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ChevronRight, Star, Award, Globe, Sparkles, Apple, PawPrint, Droplets, Pill, Factory, Shield, Zap, Layers, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Individuelle Etiketten B2B | Hersteller China | INKO Custom Labels",
  description: "INKO Custom Labels: ISO 9001 zertifizierter B2B-Etikettenhersteller in Xi&#39;an, China. MOQ 500 Rollen, 7 Tage Muster, DHL-Lieferung in 60+ Laender.",
  alternates: {
    canonical: "https://inkolabels.com/de",
    languages: { en: "https://inkolabels.com", es: "https://inkolabels.com/es", fr: "https://inkolabels.com/fr", de: "https://inkolabels.com/de", pt: "https://inkolabels.com/pt", ru: "https://inkolabels.com/ru", ja: "https://inkolabels.com/ja", ar: "https://inkolabels.com/ar", "x-default": "https://inkolabels.com" },
  },
  openGraph: { title: "INKO Custom Labels — B2B Etikettenhersteller China", description: "ISO 9001 zertifizierter B2B-Hersteller. MOQ 500 Rollen, weltweite Lieferung.", url: "https://inkolabels.com/de", locale: "de_DE", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "INKO Custom Labels" }] },
};

const iconMap: Record<string, React.ElementType> = { Sparkles, Apple, PawPrint, Droplets, Pill, Factory, Shield, Zap, Layers, Package, Award, Globe };

const stats = [{ value: "15+", label: "Jahre Erfahrung" }, { value: "60+", label: "Belieferte Laender" }, { value: "500", label: "Min. Bestellung (Rollen)" }, { value: "24h", label: "Angebots-Antwort" }];

const products = [
  { icon: "Sparkles", title: "Kosmetik- und Pflegeetiketten", desc: "Heissfoliengraegung, Soft-Touch-Matt, Praegung, selektiver UV-Lack fuer Premium-Beauty-Marken.", tags: ["HEISSFOLIE", "SOFT-TOUCH", "PRAEGUNG"], href: "/de/products/cosmetic-labels", aiImg: "/manus-storage/product-cosmetic-labels_3696937e.jpg" },
  { icon: "Droplets", title: "Aetherische Oel Etiketten", desc: "Oel- und loesungsmittelbestaendige Etiketten fuer aetherische Oele und Aromatherapie.", tags: ["OEL-BESTAENDIG", "LOESUNGSMITTEL", "LUXUS"], href: "/de/products/essential-oil-labels", aiImg: "/manus-storage/product-essential-oil-labels_ba7458ab.jpg" },
  { icon: "Apple", title: "Lebensmittelverpackungs-Etiketten", desc: "FDA-konforme Etiketten fuer Lebensmittel, Saucen, Gewuerze und Spezialitaeten.", tags: ["FDA-KONFORM", "WASSERDICHT", "GEFRIERGEEIGNET"], href: "/de/products/food-labels", aiImg: "/manus-storage/product-food-labels_1701c8ab.jpg" },
  { icon: "Pill", title: "Nahrungsergaenzungsmittel-Etiketten", desc: "GMP-konforme Etiketten mit praeziser Farbueberinstimmung.", tags: ["GMP-KONFORM", "HOHE HAFTUNG", "VARIABLE DATEN"], href: "/de/products/supplement-labels", aiImg: "/manus-storage/product-supplement-labels_0b224cc0.jpg" },
  { icon: "PawPrint", title: "Tiernahrung-Etiketten", desc: "Langlebige, feuchtigkeitsbestaendige Etiketten fuer Trockenfutter-Saecke und Dosen.", tags: ["FEUCHTIGKEITSBESTAENDIG", "HOHE HAFTUNG", "BOPP-FOLIE"], href: "/de/products/pet-food-labels", aiImg: "/manus-storage/product-petfood-labels_ecc6466e.jpg" },
  { icon: "Factory", title: "Industrie- und Chemie-Etiketten", desc: "Chemikalien- und hochtemperaturbestaendige Etiketten fuer Industrie und Automobil.", tags: ["CHEMIKALIENBESTAENDIG", "HOHE TEMP", "LANGLEBIG"], href: "/de/products/industrial-labels", aiImg: "/manus-storage/product-industrial-labels_6294141b.jpg" }
];

const whyUs = [
  { icon: "Layers", title: "7-Farben-Flexopresse mit Harzplatte", desc: "7-Farben-Flexopresse mit In-line-Laminierung und Stanzen — PANTONE-Uebereinstimmung, erweiterter Farbraum." },
  { icon: "Package", title: "Druck auf der Klebstoffseite", desc: "Rueckseitendruck auf transparenten BOPP-Etiketten fuer ein Premium-Aussehen ohne sichtbares Etikett." },
  { icon: "Zap", title: "Hochgeschwindigkeits-Folienpresse + Stanzen", desc: "Dedizierte Hochgeschwindigkeitsmaschine fuer Foliengraegung und Stanzen in einem Durchgang." },
  { icon: "Shield", title: "Heisslaminiermaschine", desc: "Thermolaminierung fuer hochbestaendige Schutzschichten und Premium-Oberflaechen." },
  { icon: "Award", title: "2x Sichtpruefungs- + Schneidlinien", desc: "Zwei kombinierte Pruef-Schneidmaschinen: 100% Fehlererkennung plus Praezisionsschnitt." },
  { icon: "Globe", title: "Niedriger MOQ · Weltweiter Versand", desc: "Mindestens 500 Rollen pro Design. Muster in 3-5 Tagen, Produktion in 7-10 Tagen. DHL / FedEx in 60+ Laender." }
];

const testimonials = [
  { name: "Klaus M.", company: "Natural Beauty Co., Deutschland", text: "INKO hat genau das geliefert, was wir brauchten — Premium-Etiketten mit Foliengraegung zu einem Bruchteil der Kosten.", rating: 5 },
  { name: "Anna S.", company: "Gourmet Foods Ltd., Oesterreich", text: "Wir bestellen seit 3 Jahren Lebensmitteletiketten bei INKO. Gleichbleibende Qualitaet, puenktliche Lieferung.", rating: 5 },
  { name: "Thomas B.", company: "PetNaturals, Schweiz", text: "Die Tiernahrungsetiketten sind genau das, was wir wollten. Wasserdicht, lebhafte Farben und der MOQ ist perfekt.", rating: 5 }
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image src="/hero-banner.jpg" alt="INKO Custom Labels Factory" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2744]/90 via-[#0F2744]/70 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/90 text-xs font-medium tracking-wider uppercase">B2B Etikettenhersteller · China</span>
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none mb-6 uppercase tracking-tight" style={{ fontFamily: "var(--font-barlow)" }}>
                JEDES ETIKETT.<br /><span className="text-[#E8A020]">GENAU RICHTIG.</span>
              </h1>
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">INKO Custom Labels — professioneller B2B-Etikettenhersteller in China. Kosmetik-, Lebensmittel-, Getraenke-, Haustier- und Nahrungsergaenzungsmittel-Etiketten. Niedriger MOQ, schnelle Lieferung, weltweiter Versand.</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/de/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]" style={{ fontFamily: "var(--font-barlow)" }}>
                  Kostenloses Muster Anfordern <ChevronRight className="w-4 h-4" />
                </Link>
                <Link href="/de/products" className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:bg-white/10" style={{ fontFamily: "var(--font-barlow)" }}>
                  Produkte Ansehen <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-white/70">
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#E8A020]" />ISO 9001 Zertifiziert</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#E8A020]" />15+ Jahre Export</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#E8A020]" />60+ Laender</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#E8A020]" />MOQ Nur 500 Rollen</div>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image src="/manus-storage/hero-labels-showcase_bfe5db00.jpg" alt="INKO Premium Label Products" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                  <div className="bg-[#E8A020] text-[#0F2744] font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wide">Flexo 7 Farben</div>
                  <div className="bg-white/20 backdrop-blur-sm text-white font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wide border border-white/30">Heissfoliengraegung</div>
                  <div className="bg-white/20 backdrop-blur-sm text-white font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wide border border-white/30">Niedriger MOQ</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#E8A020] rounded-xl p-4 shadow-xl">
                <div className="text-3xl font-black text-[#0F2744]" style={{ fontFamily: "var(--font-barlow)" }}>60+</div>
                <div className="text-[#0F2744]/70 text-xs font-medium uppercase tracking-wide">Laender</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#0F2744] border border-white/20 rounded-xl p-4 shadow-xl">
                <div className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-barlow)" }}>500</div>
                <div className="text-white/60 text-xs font-medium uppercase tracking-wide">Min. Bestellung</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#E8A020] py-4 overflow-hidden">
        <div className="ticker-wrap"><div className="ticker-inner">
          {[...stats, ...stats].map((s, i) => (
            <div key={i} className="flex items-center gap-3 px-10 flex-shrink-0">
              <span className="text-3xl font-black text-[#0F2744]" style={{ fontFamily: "var(--font-barlow)" }}>{s.value}</span>
              <span className="text-[#0F2744]/70 text-sm font-medium uppercase tracking-wide">{s.label}</span>
              <span className="text-[#0F2744]/30 text-2xl">·</span>
            </div>
          ))}
        </div></div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">Produktkatalog</div>
            <h2 className="text-5xl font-black text-[#0F2744] uppercase leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>Individuelle Etiketten<br /><span className="text-[#E8A020]">Fuer Jede Branche</span></h2>
            <p className="text-gray-600 max-w-xl">Von Kosmetik bis Lebensmittel, von Haustieren bis Industrie — INKO fertigt Praezisionsetiketten fuer 9+ Branchen.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => { const Icon = iconMap[p.icon]; return (
              <Link key={p.href} href={p.href} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image src={p.aiImg} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/60 to-transparent" />
                  {Icon && <div className="absolute top-4 left-4 w-9 h-9 rounded-lg bg-[#E8A020] flex items-center justify-center"><Icon className="w-5 h-5 text-[#0F2744]" /></div>}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#0F2744] text-base mb-2 group-hover:text-[#E8A020] transition-colors">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">{p.tags.map((tag: string) => <span key={tag} className="text-[10px] font-bold tracking-wider text-[#0F2744]/60 bg-gray-100 px-2 py-0.5 rounded">{tag}</span>)}</div>
                </div>
              </Link>
            ); }}
          </div>
          <div className="text-center mt-10">
            <Link href="/de/products" className="inline-flex items-center gap-2 border-2 border-[#0F2744] text-[#0F2744] hover:bg-[#0F2744] hover:text-white font-bold px-8 py-3 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
              Alle 40+ Produkte Ansehen <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#0F2744]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">Warum INKO Waehlen</div>
            <h2 className="text-5xl font-black text-white uppercase" style={{ fontFamily: "var(--font-barlow)" }}>Entwickelt fuer Globale B2B-Kaeufer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(w => { const Icon = iconMap[w.icon]; return (
              <div key={w.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#E8A020]/30 transition-all duration-300">
                {Icon && <div className="w-12 h-12 rounded-xl bg-[#E8A020]/20 flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-[#E8A020]" /></div>}
                <h3 className="text-white font-bold text-base mb-2">{w.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ); }}
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">Unsere Fabrik</div>
              <h2 className="text-5xl font-black text-[#0F2744] uppercase leading-tight mb-6" style={{ fontFamily: "var(--font-barlow)" }}>Praezisionsfertigung<br /><span className="text-[#E8A020]">Xi&#39;an, China</span></h2>
              <p className="text-gray-600 leading-relaxed mb-6">In Xi&#39;an, Shaanxi gelegen, produziert unsere Fabrik ueber 50 Millionen Etiketten pro Monat fuer Kunden in 60+ Laendern.</p>
              <ul className="space-y-3 mb-8"><li className="flex items-center gap-3 text-gray-700"><CheckCircle2 className="w-5 h-5 text-[#E8A020] flex-shrink-0" />7-Farben-Flexodruck mit Harzplatte</li>
                <li className="flex items-center gap-3 text-gray-700"><CheckCircle2 className="w-5 h-5 text-[#E8A020] flex-shrink-0" />Warm- und Kaltlaminierung in-line</li>
                <li className="flex items-center gap-3 text-gray-700"><CheckCircle2 className="w-5 h-5 text-[#E8A020] flex-shrink-0" />Hochgeschwindigkeits-Heissfoliengraegung und Stanzen</li>
                <li className="flex items-center gap-3 text-gray-700"><CheckCircle2 className="w-5 h-5 text-[#E8A020] flex-shrink-0" />100% automatische Sichtpruefung</li>
                <li className="flex items-center gap-3 text-gray-700"><CheckCircle2 className="w-5 h-5 text-[#E8A020] flex-shrink-0" />ISO 9001:2015 Zertifizierung</li></ul>
              <Link href="/de/about" className="inline-flex items-center gap-2 text-[#E8A020] font-semibold hover:underline">Unsere Fabrik Entdecken <ChevronRight className="w-4 h-4" /></Link>
            </div>
            <div><Image src="/manus-storage/factory-production-line_3b0322fe.jpg" alt="INKO Factory Xi&#39;an" width={600} height={450} className="rounded-2xl shadow-lg object-cover w-full" /></div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">Kundenstimmen</div>
            <h2 className="text-5xl font-black text-[#0F2744] uppercase" style={{ fontFamily: "var(--font-barlow)" }}>Was Unsere Kunden Sagen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="flex gap-1 mb-4">{Array.from({ length: t.rating }).map((_,i) => <Star key={i} className="w-5 h-5 text-[#E8A020] fill-[#E8A020]" />)}</div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div><div className="font-bold text-[#0F2744] text-sm">{t.name}</div><div className="text-gray-500 text-xs">{t.company}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#E8A020]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black text-[#0F2744] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>Bereit, Ihre Etiketten zu Bestellen?</h2>
          <p className="text-[#0F2744]/80 text-lg mb-10">Fordern Sie noch heute ein kostenloses Muster an. Antwort innerhalb von 24 Stunden.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/de/contact" className="inline-flex items-center gap-2 bg-[#0F2744] hover:bg-[#1a3a5c] text-white font-bold px-10 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]" style={{ fontFamily: "var(--font-barlow)" }}>
              Kostenloses Muster Anfordern <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/de/products" className="inline-flex items-center gap-2 border-2 border-[#0F2744] text-[#0F2744] hover:bg-[#0F2744] hover:text-white font-bold px-10 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
              Katalog Ansehen <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
