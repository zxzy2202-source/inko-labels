import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ChevronRight, Star, Award, Globe, Sparkles, Apple, PawPrint, Droplets, Pill, Factory, Shield, Zap, Layers, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "カスタムラベル B2B | 中国メーカー | INKO Custom Labels",
  description: "INKO Custom Labels：中国西安のISO 9001認定B2Bラベルメーカー。化粧品・食品・飲料・ペット・サプリメントラベル。MOQ 500ロール、7日サンプル、DHL配送60カ国以上。",
  alternates: {
    canonical: "https://inkolabels.com/ja",
    languages: { en: "https://inkolabels.com", es: "https://inkolabels.com/es", fr: "https://inkolabels.com/fr", de: "https://inkolabels.com/de", pt: "https://inkolabels.com/pt", ru: "https://inkolabels.com/ru", ja: "https://inkolabels.com/ja", ar: "https://inkolabels.com/ar", "x-default": "https://inkolabels.com" },
  },
  openGraph: { title: "INKO Custom Labels — 中国B2Bラベルメーカー", description: "ISO 9001認定B2Bメーカー。MOQ 500ロール、世界配送。", url: "https://inkolabels.com/ja", locale: "ja_JP", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "INKO Custom Labels" }] },
};

const iconMap: Record<string, React.ElementType> = { Sparkles, Apple, PawPrint, Droplets, Pill, Factory, Shield, Zap, Layers, Package, Award, Globe };

const stats = [{ value: "15+", label: "年の経験" }, { value: "60+", label: "対応国数" }, { value: "500", label: "最小注文 (ロール)" }, { value: "24h", label: "見積もり回答" }];

const products = [
  { icon: "Sparkles", title: "化粧品・スキンケアラベル", desc: "ホットスタンプ、ソフトタッチマット、エンボス、選択UVニスでプレミアムビューティーブランドに。", tags: ["ホットスタンプ", "ソフトタッチ", "エンボス"], href: "/ja/products/cosmetic-labels", aiImg: "/manus-storage/product-cosmetic-labels_3696937e.jpg" },
  { icon: "Droplets", title: "精油ラベル", desc: "精油・アロマセラピー向けの耐油・耐溶剤ラベル。", tags: ["耐油性", "耐溶剤", "高級感"], href: "/ja/products/essential-oil-labels", aiImg: "/manus-storage/product-essential-oil-labels_ba7458ab.jpg" },
  { icon: "Apple", title: "食品包装ラベル", desc: "食品・ソース・調味料・特産品向けのFDA準拠ラベル。", tags: ["FDA準拠", "防水", "冷凍対応"], href: "/ja/products/food-labels", aiImg: "/manus-storage/product-food-labels_1701c8ab.jpg" },
  { icon: "Pill", title: "サプリメントラベル", desc: "正確なカラーマッチングを備えたGMP準拠ラベル。", tags: ["GMP準拠", "高粘着", "可変データ"], href: "/ja/products/supplement-labels", aiImg: "/manus-storage/product-supplement-labels_0b224cc0.jpg" },
  { icon: "PawPrint", title: "ペットフードラベル", desc: "ドライフード袋・缶向けの耐久・耐湿ラベル。", tags: ["耐湿性", "高粘着", "BOPPフィルム"], href: "/ja/products/pet-food-labels", aiImg: "/manus-storage/product-petfood-labels_ecc6466e.jpg" },
  { icon: "Factory", title: "工業・化学品ラベル", desc: "工業・自動車向けの耐薬品・耐高温ラベル。", tags: ["耐薬品", "高温対応", "耐久性"], href: "/ja/products/industrial-labels", aiImg: "/manus-storage/product-industrial-labels_6294141b.jpg" }
];

const whyUs = [
  { icon: "Layers", title: "樹脂版7色フレキソ印刷機", desc: "インラインラミネート・抜き加工付き7色フレキソ印刷機 — PANTONE対応、拡張色域、二次加工不要。" },
  { icon: "Package", title: "粘着面への印刷", desc: "透明BOPPラベルの粘着面に印刷：ラベルが見えないプレミアムな仕上がり。" },
  { icon: "Zap", title: "高速ホットスタンプ・抜き加工機", desc: "ホットスタンプとカスタム形状抜き加工を一工程で行う専用高速機。" },
  { icon: "Shield", title: "ホットラミネート機", desc: "化粧品・高級ラベル向けの高耐久保護コーティングとプレミアム仕上げ。" },
  { icon: "Award", title: "外観検査・スリット機 2台", desc: "100%欠陥検出と精密スリット加工を組み合わせた検査スリット機2台。" },
  { icon: "Globe", title: "低MOQ · 世界配送", desc: "デザインごとに最小500ロール。サンプル3〜5日、生産7〜10日。DHL/FedExで60カ国以上へ。" }
];

const testimonials = [
  { name: "田中 M.", company: "Natural Beauty Co., 日本", text: "INKOは私たちが必要としていたものを正確に届けてくれました — コストの一部でプレミアムなホットスタンプラベルを。", rating: 5 },
  { name: "鈴木 A.", company: "Gourmet Foods Ltd., 日本", text: "3年間INKOに食品ラベルを注文しています。一貫した品質、納期厳守。", rating: 5 },
  { name: "山田 T.", company: "PetNaturals, 日本", text: "ペットフードラベルはまさに求めていたもの。防水、鮮やかな色、MOQも完璧。", rating: 5 }
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
                <span className="text-white/90 text-xs font-medium tracking-wider uppercase">B2Bラベルメーカー · 中国</span>
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none mb-6 uppercase tracking-tight" style={{ fontFamily: "var(--font-barlow)" }}>
                すべてのラベル。<br /><span className="text-[#E8A020]">まさにその通りに。</span>
              </h1>
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">INKO Custom Labels — 中国のプロフェッショナルB2Bラベルメーカー。化粧品・食品・飲料・ペット・サプリメントラベル。低MOQ、迅速配送、世界発送。</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/ja/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]" style={{ fontFamily: "var(--font-barlow)" }}>
                  無料サンプルを依頼する <ChevronRight className="w-4 h-4" />
                </Link>
                <Link href="/ja/products" className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:bg-white/10" style={{ fontFamily: "var(--font-barlow)" }}>
                  製品を見る <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-white/70">
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#E8A020]" />ISO 9001認定</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#E8A020]" />15年以上の輸出実績</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#E8A020]" />60カ国以上</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#E8A020]" />MOQ 500ロールから</div>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image src="/manus-storage/hero-labels-showcase_bfe5db00.jpg" alt="INKO Premium Label Products" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                  <div className="bg-[#E8A020] text-[#0F2744] font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wide">フレキソ7色印刷</div>
                  <div className="bg-white/20 backdrop-blur-sm text-white font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wide border border-white/30">ホットスタンプ</div>
                  <div className="bg-white/20 backdrop-blur-sm text-white font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wide border border-white/30">低MOQ</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#E8A020] rounded-xl p-4 shadow-xl">
                <div className="text-3xl font-black text-[#0F2744]" style={{ fontFamily: "var(--font-barlow)" }}>60+</div>
                <div className="text-[#0F2744]/70 text-xs font-medium uppercase tracking-wide">カ国</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#0F2744] border border-white/20 rounded-xl p-4 shadow-xl">
                <div className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-barlow)" }}>500</div>
                <div className="text-white/60 text-xs font-medium uppercase tracking-wide">最小注文</div>
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
            <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">製品カタログ</div>
            <h2 className="text-5xl font-black text-[#0F2744] uppercase leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>カスタムラベル<br /><span className="text-[#E8A020]">あらゆる業界向け</span></h2>
            <p className="text-gray-600 max-w-xl">化粧品から食品、ペットから工業まで — INKOは9業界以上向けの精密ラベルを製造。</p>
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
            <Link href="/ja/products" className="inline-flex items-center gap-2 border-2 border-[#0F2744] text-[#0F2744] hover:bg-[#0F2744] hover:text-white font-bold px-8 py-3 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
              40種類以上の製品をすべて見る <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#0F2744]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">INKOを選ぶ理由</div>
            <h2 className="text-5xl font-black text-white uppercase" style={{ fontFamily: "var(--font-barlow)" }}>グローバルB2Bバイヤーのために設計</h2>
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
              <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">当社工場</div>
              <h2 className="text-5xl font-black text-[#0F2744] uppercase leading-tight mb-6" style={{ fontFamily: "var(--font-barlow)" }}>精密製造<br /><span className="text-[#E8A020]">中国・西安</span></h2>
              <p className="text-gray-600 leading-relaxed mb-6">陝西省西安に位置する当社工場は、60カ国以上の顧客向けに月間5000万枚以上のラベルを生産しています。</p>
              <ul className="space-y-3 mb-8"><li className="flex items-center gap-3 text-gray-700"><CheckCircle2 className="w-5 h-5 text-[#E8A020] flex-shrink-0" />樹脂版7色フレキソ印刷機</li>
                <li className="flex items-center gap-3 text-gray-700"><CheckCircle2 className="w-5 h-5 text-[#E8A020] flex-shrink-0" />インラインホット・コールドラミネート</li>
                <li className="flex items-center gap-3 text-gray-700"><CheckCircle2 className="w-5 h-5 text-[#E8A020] flex-shrink-0" />高速ホットスタンプ・抜き加工</li>
                <li className="flex items-center gap-3 text-gray-700"><CheckCircle2 className="w-5 h-5 text-[#E8A020] flex-shrink-0" />100%自動外観検査</li>
                <li className="flex items-center gap-3 text-gray-700"><CheckCircle2 className="w-5 h-5 text-[#E8A020] flex-shrink-0" />ISO 9001:2015認証</li></ul>
              <Link href="/ja/about" className="inline-flex items-center gap-2 text-[#E8A020] font-semibold hover:underline">当社工場について <ChevronRight className="w-4 h-4" /></Link>
            </div>
            <div><Image src="/manus-storage/factory-production-line_3b0322fe.jpg" alt="INKO Factory Xi'an" width={600} height={450} className="rounded-2xl shadow-lg object-cover w-full" /></div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">お客様の声</div>
            <h2 className="text-5xl font-black text-[#0F2744] uppercase" style={{ fontFamily: "var(--font-barlow)" }}>お客様の声</h2>
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
          <h2 className="text-5xl font-black text-[#0F2744] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>ラベルのご注文はお気軽に</h2>
          <p className="text-[#0F2744]/80 text-lg mb-10">今すぐ無料サンプルをご依頼ください。24時間以内にご回答します。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/ja/contact" className="inline-flex items-center gap-2 bg-[#0F2744] hover:bg-[#1a3a5c] text-white font-bold px-10 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]" style={{ fontFamily: "var(--font-barlow)" }}>
              無料サンプルを依頼する <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/ja/products" className="inline-flex items-center gap-2 border-2 border-[#0F2744] text-[#0F2744] hover:bg-[#0F2744] hover:text-white font-bold px-10 py-4 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
              カタログを見る <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
