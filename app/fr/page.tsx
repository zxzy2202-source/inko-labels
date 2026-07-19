import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ChevronRight, Star, Award, Globe, Sparkles, Apple, PawPrint, Droplets, Pill, Factory, Shield, Zap, Layers, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Étiquettes Personnalisées B2B | Fabricant Chine | INKO Custom Labels",
  description: "INKO Custom Labels : fabricant B2B d'étiquettes certifié ISO 9001 à Xi&#39;an, Chine. MOQ bas 500 rouleaux, échantillons 7 jours, livraison DHL dans 60+ pays.",
  alternates: {
    canonical: "https://inkolabels.com/fr",
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
    title: "INKO Custom Labels — Fabricant B2B d'Étiquettes Chine",
    description: "Fabricant B2B certifié ISO 9001. MOQ bas 500 rouleaux, livraison mondiale.",
    url: "https://inkolabels.com/fr",
    locale: "fr",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "INKO Custom Labels" }],
  },
};

const stats = [
  { value: "15+", label: "Ans d'Expérience Export" },
  { value: "60+", label: "Pays Desservis" },
  { value: "500", label: "Commande Min. (Rouleaux)" },
  { value: "24h", label: "Réponse Devis" },
];

const products = [
  { icon: Sparkles, title: "Étiquettes Cosmétiques et Soins", desc: "Dorure à chaud, mat doux, gaufrage, vernis UV sélectif pour marques de beauté premium.", tags: ["DORURE À CHAUD","MAT DOUX","GAUFRAGE"], href: "/fr/products/cosmetic-labels", aiImg: "/manus-storage/product-cosmetic-labels_3696937e.jpg" },
  { icon: Droplets, title: "Étiquettes Huiles Essentielles", desc: "Étiquettes résistantes aux huiles et solvants pour huiles essentielles et aromathérapie.", tags: ["RÉSISTANT HUILE","RÉSISTANT SOLVANT","LUXE"], href: "/fr/products/essential-oil-labels", aiImg: "/manus-storage/product-essential-oil-labels_ba7458ab.jpg" },
  { icon: Apple, title: "Étiquettes Emballages Alimentaires", desc: "Étiquettes conformes FDA pour aliments, sauces, condiments et spécialités.", tags: ["CONFORME FDA","IMPERMÉABLE","CONGÉLATEUR"], href: "/fr/products/food-labels", aiImg: "/manus-storage/product-food-labels_1701c8ab.jpg" },
  { icon: Pill, title: "Étiquettes Compléments Alimentaires", desc: "Étiquettes conformes BPF avec correspondance de couleur précise.", tags: ["CONFORME BPF","HAUTE ADHÉRENCE","DONNÉES VARIABLES"], href: "/fr/products/supplement-labels", aiImg: "/manus-storage/product-supplement-labels_0b224cc0.jpg" },
  { icon: PawPrint, title: "Étiquettes Alimentation Animale", desc: "Étiquettes durables et résistantes à l'humidité pour sacs de croquettes et boîtes.", tags: ["RÉSISTANT HUMIDITÉ","HAUTE ADHÉRENCE","FILM BOPP"], href: "/fr/products/pet-food-labels", aiImg: "/manus-storage/product-petfood-labels_ecc6466e.jpg" },
  { icon: Factory, title: "Étiquettes Industrielles et Chimiques", desc: "Étiquettes résistantes aux produits chimiques et hautes températures.", tags: ["RÉSISTANT CHIMIQUES","HAUTE TEMP","DURABLE"], href: "/fr/products/industrial-labels", aiImg: "/manus-storage/product-industrial-labels_6294141b.jpg" },
];

const whyUs = [
  { icon: Layers, title: "Presse Flexo 7 Couleurs Plaque Résine", desc: "Presse flexo 7 couleurs avec laminage et découpe en ligne — correspondance PANTONE, gamme étendue, sans passe secondaire." },
  { icon: Package, title: "Impression Côté Adhésif", desc: "Impression verso sur étiquettes BOPP transparentes pour un rendu premium sans étiquette visible." },
  { icon: Zap, title: "Presse Haute Vitesse Dorure + Découpe", desc: "Machine dédiée haute vitesse pour dorure et découpe — dorure à chaud, à froid et formes personnalisées en un seul passage." },
  { icon: Shield, title: "Machine de Laminage à Chaud", desc: "Laminateur thermique pour revêtements protecteurs haute résistance et finitions premium." },
  { icon: Award, title: "2× Lignes Inspection Vision + Refendage", desc: "Deux machines combinées inspection-refendage : détection de défauts 100% plus refendage de précision." },
  { icon: Globe, title: "MOQ Bas · Livraison Mondiale", desc: "Minimum 500 rouleaux par design. Échantillon en 3–5 jours, production en 7–10 jours. DHL / FedEx vers 60+ pays." },
];

const testimonials = [
  { name: "Sophie L.", company: "Natural Beauty Co., France", text: "INKO a livré exactement ce dont nous avions besoin — des étiquettes premium avec dorure à une fraction du coût.", rating: 5 },
  { name: "Pierre M.", company: "Gourmet Foods Ltd., Belgique", text: "Nous commandons des étiquettes alimentaires chez INKO depuis 3 ans. Qualité constante, livraison ponctuelle.", rating: 5 },
  { name: "Claire D.", company: "PetNaturals, Canada", text: "Les étiquettes pour animaux sont exactement ce que nous voulions. Imperméables, couleurs vives et MOQ parfait.", rating: 5 },
];

export default function FrHomePage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image src="/hero-banner.jpg" alt="Usine d'Étiquettes Personnalisées INKO" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2744]/90 via-[#0F2744]/70 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/90 text-xs font-medium tracking-wider uppercase">Fabricant B2B d&apos;Étiquettes · Chine</span>
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none mb-6 uppercase tracking-tight" style={{ fontFamily: "var(--font-barlow)" }}>
                CHAQUE ÉTIQUETTE.<br /><span className="text-[#E8A020]">EXACTEMENT JUSTE.</span>
              </h1>
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">Fabricant professionnel B2B d&apos;étiquettes en Chine. Étiquettes cosmétiques, alimentaires, boissons, animaux et compléments. MOQ bas, livraison rapide, expédition mondiale.</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/fr/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]" style={{ fontFamily: "var(--font-barlow)" }}>
                  Demander un Échantillon Gratuit <ChevronRight className="w-4 h-4" />
                </Link>
                <Link href="/fr/products" className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:bg-white/10" style={{ fontFamily: "var(--font-barlow)" }}>
                  Voir les Produits <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-white/70">
                {["ISO 9001 Certifié", "15+ Ans d'Export", "60+ Pays", "MOQ Bas 500 Rouleaux"].map(item => (
                  <div key={item} className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#E8A020]" />{item}</div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image src="/manus-storage/hero-labels-showcase_bfe5db00.jpg" alt="Produits d'Étiquettes Premium INKO" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                  <div className="bg-[#E8A020] text-[#0F2744] font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wide">Flexo 7 Couleurs</div>
                  <div className="bg-white/20 backdrop-blur-sm text-white font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wide border border-white/30">Dorure à Chaud</div>
                  <div className="bg-white/20 backdrop-blur-sm text-white font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wide border border-white/30">MOQ Bas</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#E8A020] rounded-xl p-4 shadow-xl">
                <div className="text-3xl font-black text-[#0F2744]" style={{ fontFamily: "var(--font-barlow)" }}>60+</div>
                <div className="text-[#0F2744]/70 text-xs font-medium uppercase tracking-wide">Pays</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#0F2744] border border-white/20 rounded-xl p-4 shadow-xl">
                <div className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-barlow)" }}>500</div>
                <div className="text-white/60 text-xs font-medium uppercase tracking-wide">Cmd. Min.</div>
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
            <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">Catalogue Produits</div>
            <h2 className="text-5xl font-black text-[#0F2744] uppercase leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>Étiquettes Personnalisées<br /><span className="text-[#E8A020]">Pour Chaque Industrie</span></h2>
            <p className="text-gray-600 max-w-xl">De la cosmétique à l&apos;alimentaire — INKO fabrique des étiquettes de précision pour 9+ secteurs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => { const Icon = p.icon; return (
              <Link key={p.href} href={p.href} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image src={p.aiImg} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/60 to-transparent" />
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-lg bg-[#E8A020] flex items-center justify-center"><Icon className="w-5 h-5 text-[#0F2744]" /></div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#0F2744] text-base mb-2 group-hover:text-[#E8A020] transition-colors">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">{p.tags.map(tag => <span key={tag} className="text-[10px] font-bold tracking-wider text-[#0F2744]/60 bg-gray-100 px-2 py-0.5 rounded">{tag}</span>)}</div>
                </div>
              </Link>
            ); })}
          </div>
          <div className="text-center mt-10">
            <Link href="/fr/products" className="inline-flex items-center gap-2 border-2 border-[#0F2744] text-[#0F2744] hover:bg-[#0F2744] hover:text-white font-bold px-8 py-3 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
              Voir Tous les 40+ Produits <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0F2744]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">Pourquoi Choisir INKO</div>
            <h2 className="text-5xl font-black text-white uppercase" style={{ fontFamily: "var(--font-barlow)" }}>Conçu pour les Acheteurs B2B Mondiaux</h2>
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

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">Notre Usine</div>
              <h2 className="text-5xl font-black text-[#0F2744] uppercase leading-tight mb-6" style={{ fontFamily: "var(--font-barlow)" }}>Fabrication de Précision<br /><span className="text-[#E8A020]">Xi&apos;an, Chine</span></h2>
              <p className="text-gray-600 leading-relaxed mb-6">Située à Xi&apos;an, notre usine produit plus de 50 millions d&apos;étiquettes par mois pour des clients dans 60+ pays.</p>
              <ul className="space-y-3 mb-8">{["Presse flexo 7 couleurs plaque résine","Laminage à chaud et à froid en ligne","Dorure à chaud et découpe haute vitesse","Inspection visuelle automatisée 100%","Certification ISO 9001:2015"].map(item => (
                <li key={item} className="flex items-center gap-3 text-gray-700"><CheckCircle2 className="w-5 h-5 text-[#E8A020] flex-shrink-0" />{item}</li>
              ))}</ul>
              <Link href="/fr/about" className="inline-flex items-center gap-2 text-[#E8A020] font-semibold hover:underline">Découvrir Notre Usine <ChevronRight className="w-4 h-4" /></Link>
            </div>
            <div><Image src="/manus-storage/factory-production-line_3b0322fe.jpg" alt="Ligne de production INKO Xi&#39;an" width={600} height={450} className="rounded-2xl shadow-lg object-cover w-full" /></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">Témoignages Clients</div>
            <h2 className="text-5xl font-black text-[#0F2744] uppercase" style={{ fontFamily: "var(--font-barlow)" }}>Ce Que Disent Nos Clients</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="flex gap-1 mb-4">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-5 h-5 text-[#E8A020] fill-[#E8A020]" />)}</div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div><div className="font-bold text-[#0F2744] text-sm">{t.name}</div><div className="text-gray-500 text-xs">{t.company}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#E8A020]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black text-[#0F2744] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>Prêt à Commander Vos Étiquettes ?</h2>
          <p className="text-[#0F2744]/80 text-lg mb-10">Demandez un échantillon gratuit aujourd&apos;hui. Réponse en 24 heures.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/fr/contact" className="inline-flex items-center gap-2 bg-[#0F2744] hover:bg-[#1a3a5c] text-white font-bold px-10 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]" style={{ fontFamily: "var(--font-barlow)" }}>
              Demander un Échantillon Gratuit <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/fr/products" className="inline-flex items-center gap-2 border-2 border-[#0F2744] text-[#0F2744] hover:bg-[#0F2744] hover:text-white font-bold px-10 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
              Voir le Catalogue <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
