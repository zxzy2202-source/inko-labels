"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown, ChevronRight,
  Sparkles, Droplets, FlaskConical, Apple, Wine, Beer, Pill, PawPrint,
  Home, Car, Factory, Cpu, Leaf, FileText, Layers, Square, Eye, Zap,
  Film, Shield, Thermometer, Rocket, Settings, Package, Building2,
  TrendingUp, Printer, Palette, Scissors, Star, Droplet, Snowflake,
  AlertTriangle, BarChart2, Repeat, MonitorPlay, Flame,
} from "lucide-react";
import { Camera } from "lucide-react";

const languages = [
  { code: "en", label: "English",   flag: "🇺🇸", region: "Global" },
  { code: "es", label: "Español",   flag: "🇪🇸", region: "Latin America" },
  { code: "fr", label: "Français",  flag: "🇫🇷", region: "Europe" },
  { code: "de", label: "Deutsch",   flag: "🇩🇪", region: "Europe" },
  { code: "pt", label: "Português", flag: "🇧🇷", region: "Brazil" },
  { code: "ar", label: "العربية",   flag: "🇦🇪", region: "Middle East" },
  { code: "ru", label: "Русский",   flag: "🇷🇺", region: "CIS" },
  { code: "ja", label: "日本語",     flag: "🇯🇵", region: "Asia" },
];

const industries = [
  { label: "Cosmetic & Skincare Labels",    href: "/products/cosmetic-labels",    icon: Sparkles },
  { label: "Essential Oil Labels",          href: "/products/essential-oil-labels", icon: Droplets },
  { label: "Peptide & Small Vial Labels",   href: "/products/peptide-labels",     icon: FlaskConical },
  { label: "Food Packaging Labels",         href: "/products/food-labels",        icon: Apple },
  { label: "Beverage Bottle Labels",        href: "/products/beverage-labels",    icon: Beer },
  { label: "Wine & Spirits Labels",         href: "/products/wine-spirits-labels", icon: Wine },
  { label: "Supplement Labels",             href: "/products/supplement-labels",  icon: Pill },
  { label: "Pet Food & Pet Care Labels",    href: "/products/pet-food-labels",    icon: PawPrint },
  { label: "Household & Cleaning Labels",   href: "/products/household-labels",   icon: Home },
  { label: "Automotive & Lubricant Labels", href: "/products/automotive-labels",  icon: Car },
  { label: "Industrial & Chemical Labels",  href: "/products/industrial-labels",  icon: Factory },
  { label: "Electronics & Battery Labels",  href: "/products/electronics-labels", icon: Cpu },
  { label: "Agricultural Product Labels",   href: "/products/agricultural-labels", icon: Leaf },
];

const materials = [
  { label: "Paper Labels",                     href: "/products/paper-labels",   icon: FileText },
  { label: "Kraft & Textured Paper Labels",    href: "/products/kraft-labels",   icon: Layers },
  { label: "White BOPP Labels",                href: "/products/bopp-labels",    icon: Square },
  { label: "Clear BOPP Labels",                href: "/products/clear-labels",   icon: Eye },
  { label: "Metallic BOPP Labels",             href: "/products/metallic-labels", icon: Zap },
  { label: "PE Film Labels",                   href: "/products/pe-film-labels", icon: Film },
  { label: "PET & Durable Film Labels",        href: "/products/pet-film-labels", icon: Shield },
  { label: "Direct Thermal & Transfer Labels", href: "/products/thermal-labels", icon: Thermometer },
];

const performance = [
  { label: "Waterproof Labels",              href: "/products/waterproof-labels",        icon: Droplet },
  { label: "Oil-Resistant Labels",           href: "/products/oil-resistant-labels",     icon: Flame },
  { label: "Freezer & Low-Temp Labels",      href: "/products/freezer-labels",           icon: Snowflake },
  { label: "Chemical-Resistant Labels",      href: "/products/chemical-resistant-labels", icon: FlaskConical },
  { label: "High-Temperature Labels",        href: "/products/high-temp-labels",         icon: Thermometer },
  { label: "High-Tack Labels",               href: "/products/high-tack-labels",         icon: Layers },
  { label: "Removable Labels",               href: "/products/removable-labels",         icon: Repeat },
  { label: "Tamper-Evident Labels",          href: "/products/tamper-evident-labels",    icon: AlertTriangle },
  { label: "Resealable Wet Wipes Labels",    href: "/products/resealable-labels",        icon: Package },
  { label: "Barcode & Variable Data Labels", href: "/products/barcode-labels",           icon: BarChart2 },
  { label: "Custom Printed Roll Labels",     href: "/products/roll-labels",              icon: Repeat },
  { label: "Digital Short-Run Labels",       href: "/products/short-run-labels",         icon: Zap },
];

const solutionsByBuyer = [
  { label: "For Brand Owners",              href: "/solutions/brand-owners",        icon: Star },
  { label: "For Startups & DTC Brands",     href: "/solutions/startups-dtc",        icon: Rocket },
  { label: "For OEM & ODM Factories",       href: "/solutions/oem-odm",             icon: Settings },
  { label: "For Contract Manufacturers",    href: "/solutions/co-packers",          icon: Package },
  { label: "For Packaging Companies",       href: "/solutions/packaging-companies", icon: Building2 },
  { label: "For Label Distributors",        href: "/solutions/distributors",        icon: TrendingUp },
];

const solutionsBySourcing = [
  { label: "Low-MOQ Custom Label Printing", href: "/solutions/low-moq",          icon: Layers },
  { label: "Fast Sampling & Short-Run",     href: "/solutions/fast-sampling",    icon: Zap },
  { label: "Multi-SKU Label Management",    href: "/solutions/multi-sku",        icon: BarChart2 },
  { label: "Color Matching & Brand Consistency", href: "/solutions/color-matching", icon: Palette },
  { label: "Private-Label & Confidential",  href: "/solutions/private-label",    icon: Shield },
  { label: "Long-Term Label Supply",        href: "/solutions/long-term-supply", icon: Repeat },
];

const printing = [
  { label: "7-Color Resin Plate Flexo Press", href: "/capabilities/flexo-printing",   icon: Layers },
  { label: "Adhesive-Side (Back) Printing",   href: "/capabilities/adhesive-printing", icon: Eye },
  { label: "Variable Data & Barcode Printing",href: "/capabilities/variable-data",    icon: BarChart2 },
  { label: "White Ink Printing",              href: "/capabilities/white-ink",        icon: Printer },
  { label: "Multi-Color & PANTONE Matching",  href: "/capabilities/multi-color",      icon: Palette },
];

const finishing = [
  { label: "Inline Lamination (Gloss / Matte / Soft-Touch)", href: "/capabilities/lamination",       icon: Layers },
  { label: "Hot Lamination Machine",                         href: "/capabilities/hot-lamination",   icon: Flame },
  { label: "Foil Stamping + Die-Cutting High-Speed Press",   href: "/capabilities/foil-die-cutting", icon: Zap },
  { label: "Inline Die Cutting",                             href: "/capabilities/die-cutting",      icon: Scissors },
  { label: "Spot UV",                                        href: "/capabilities/spot-uv",          icon: Sparkles },
  { label: "Embossing & Debossing",                          href: "/capabilities/embossing",        icon: Square },
  { label: "Vision Inspection + Precision Slitting",         href: "/capabilities/inspection-slitting", icon: Eye },
];

type DropKey = "products" | "solutions" | "capabilities" | "lang" | null;

function MenuItem({ item, onClose }: { item: { label: string; href: string; icon: React.ElementType }; onClose: () => void }) {
  const Icon = item.icon;
  return (
    <Link href={item.href} onClick={onClose}
      className="group/item flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-gray-600 hover:text-[#0F2744] hover:bg-amber-50 transition-all duration-150">
      <span className="flex-shrink-0 w-6 h-6 rounded-md bg-gray-100 group-hover/item:bg-[#E8A020] flex items-center justify-center transition-colors duration-150">
        <Icon className="w-3.5 h-3.5 text-gray-500 group-hover/item:text-white transition-colors duration-150" />
      </span>
      <span className="text-xs font-medium leading-snug">{item.label}</span>
    </Link>
  );
}

function MenuCol({ title, items, onClose }: { title: string; items: { label: string; href: string; icon: React.ElementType }[]; onClose: () => void }) {
  return (
    <div>
      <div className="text-[#E8A020] text-[10px] font-bold tracking-widest uppercase mb-2 px-2.5 pb-1.5 border-b border-gray-100">{title}</div>
      <div className="space-y-0.5">{items.map(i => <MenuItem key={i.href} item={i} onClose={onClose} />)}</div>
    </div>
  );
}

function Drop({ open, children, width }: { open: boolean; children: React.ReactNode; width: string }) {
  return (
    <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 p-5 overflow-hidden transition-all duration-200 ease-out origin-top ${open ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`} style={{ width }}>
      {children}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<DropKey>(null);
  const [lang, setLang] = useState(languages[0]);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setActive(null); };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const toggle = (k: DropKey) => setActive(p => p === k ? null : k);
  const close = () => setActive(null);

  const bg = !isHome || scrolled ? "bg-[#0F2744]/95 backdrop-blur-xl shadow-lg shadow-black/20" : "bg-transparent";

  return (
    <header ref={ref} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image src="/logo.png" alt="INKO Custom Labels" width={44} height={44} className="object-contain" />
            <div>
              <div className="text-white font-bold text-xl leading-none tracking-wide" style={{ fontFamily: "var(--font-barlow)" }}>INKO</div>
              <div className="text-[#E8A020] text-[10px] tracking-widest uppercase font-medium">Custom Labels</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link href="/" className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${isHome ? "text-[#E8A020]" : "text-white/80 hover:text-[#E8A020]"}`}>Home</Link>

            {/* Products */}
            <div className="relative">
              <button onClick={() => toggle("products")} className={`flex items-center gap-1 text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${active === "products" ? "text-[#E8A020]" : "text-white/80 hover:text-[#E8A020]"}`}>
                Products <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${active === "products" ? "rotate-180" : ""}`} />
              </button>
              <Drop open={active === "products"} width="860px">
                <div className="grid grid-cols-3 gap-5">
                  <MenuCol title="By Industry" items={industries} onClose={close} />
                  <MenuCol title="By Material" items={materials} onClose={close} />
                  <MenuCol title="Performance & Specialty" items={performance} onClose={close} />
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-gray-400 text-xs">40+ label types for global B2B buyers</span>
                  <Link href="/products" onClick={close} className="flex items-center gap-1.5 text-[#0F2744] font-semibold text-sm hover:text-[#E8A020] transition-colors">View All Products <ChevronRight className="w-3.5 h-3.5" /></Link>
                </div>
              </Drop>
            </div>

            {/* Solutions */}
            <div className="relative">
              <button onClick={() => toggle("solutions")} className={`flex items-center gap-1 text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${active === "solutions" ? "text-[#E8A020]" : "text-white/80 hover:text-[#E8A020]"}`}>
                Solutions <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${active === "solutions" ? "rotate-180" : ""}`} />
              </button>
              <Drop open={active === "solutions"} width="580px">
                <div className="grid grid-cols-2 gap-5">
                  <MenuCol title="By Buyer Type" items={solutionsByBuyer} onClose={close} />
                  <MenuCol title="By Sourcing Need" items={solutionsBySourcing} onClose={close} />
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <Link href="/contact" onClick={close} className="flex items-center gap-1.5 text-[#0F2744] font-semibold text-sm hover:text-[#E8A020] transition-colors">Get a Custom Quote <ChevronRight className="w-3.5 h-3.5" /></Link>
                </div>
              </Drop>
            </div>

            {/* Capabilities */}
            <div className="relative">
              <button onClick={() => toggle("capabilities")} className={`flex items-center gap-1 text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${active === "capabilities" ? "text-[#E8A020]" : "text-white/80 hover:text-[#E8A020]"}`}>
                Capabilities <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${active === "capabilities" ? "rotate-180" : ""}`} />
              </button>
              <Drop open={active === "capabilities"} width="500px">
                <div className="grid grid-cols-2 gap-5">
                  <MenuCol title="Printing" items={printing} onClose={close} />
                  <MenuCol title="Finishing" items={finishing} onClose={close} />
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <Link href="/capabilities" onClick={close} className="flex items-center gap-1.5 text-[#0F2744] font-semibold text-sm hover:text-[#E8A020] transition-colors">
                      <Camera className="w-3.5 h-3.5" /> View All Equipment &amp; Videos <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link href="/about" onClick={close} className="flex items-center gap-1.5 text-gray-400 text-xs hover:text-[#E8A020] transition-colors">About Factory</Link>
                  </div>
                </div>
              </Drop>
            </div>

            <Link href="/about" className="text-white/80 hover:text-[#E8A020] text-sm font-medium tracking-wide uppercase transition-colors duration-200">About</Link>
            <Link href="/blog" className="text-white/80 hover:text-[#E8A020] text-sm font-medium tracking-wide uppercase transition-colors duration-200">Blog</Link>
            <Link href="/contact" className="text-white/80 hover:text-[#E8A020] text-sm font-medium tracking-wide uppercase transition-colors duration-200">Contact</Link>
          </nav>

          {/* Right: Lang + CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            {/* Language switcher */}
            <div className="relative">
              <button onClick={() => toggle("lang")} className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors px-2 py-1.5 rounded hover:bg-white/10">
                <span className="text-base leading-none">{lang.flag}</span>
                <span className="font-medium tracking-wide">{lang.code.toUpperCase()}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${active === "lang" ? "rotate-180" : ""}`} />
              </button>
              <div className={`absolute top-full right-0 mt-2 w-52 bg-white rounded-xl shadow-2xl shadow-black/10 border border-gray-100 py-2 transition-all duration-200 ease-out origin-top-right ${active === "lang" ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`}>
                <div className="px-3 py-1.5 text-[10px] font-bold text-gray-400 tracking-widest uppercase border-b border-gray-100 mb-1">Select Language</div>
                {languages.map(l => (
                  <button key={l.code} onClick={() => { setLang(l); close(); }}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-sm transition-all duration-150 ${lang.code === l.code ? "bg-amber-50 text-[#0F2744] font-semibold" : "text-gray-600 hover:bg-amber-50 hover:text-[#0F2744]"}`}>
                    <span className="text-lg w-6 text-center">{l.flag}</span>
                    <div className="text-left">
                      <div className="font-medium leading-tight">{l.label}</div>
                      <div className="text-[10px] text-gray-400">{l.region}</div>
                    </div>
                    {lang.code === l.code && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#E8A020]" />}
                  </button>
                ))}
              </div>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold text-sm px-5 py-2.5 rounded transition-all duration-200 hover:scale-[1.02] active:scale-[0.97] uppercase tracking-wide" style={{ fontFamily: "var(--font-barlow)" }}>
              Get Free Sample <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0F2744] border-t border-white/10 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            <Link href="/" className="block text-white/80 hover:text-[#E8A020] py-3 text-base font-medium border-b border-white/10 transition-colors" onClick={() => setMobileOpen(false)}>Home</Link>
            <div className="text-white/50 text-[10px] uppercase tracking-widest py-2 px-1">Products by Industry</div>
            {industries.slice(0, 8).map(item => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href} className="flex items-center gap-3 text-white/80 hover:text-[#E8A020] py-2.5 text-sm border-b border-white/5 transition-colors" onClick={() => setMobileOpen(false)}>
                  <Icon className="w-4 h-4 opacity-60 flex-shrink-0" />{item.label}
                </Link>
              );
            })}
            <Link href="/products" className="block text-[#E8A020] font-semibold py-2.5 text-sm border-b border-white/10 transition-colors" onClick={() => setMobileOpen(false)}>View All Products →</Link>
            <Link href="/about" className="block text-white/80 hover:text-[#E8A020] py-3 text-base font-medium border-b border-white/10 transition-colors" onClick={() => setMobileOpen(false)}>About Us</Link>
            <Link href="/contact" className="block text-white/80 hover:text-[#E8A020] py-3 text-base font-medium border-b border-white/10 transition-colors" onClick={() => setMobileOpen(false)}>Contact</Link>
            <Link href="/contact" className="block mt-4 bg-[#E8A020] text-[#0F2744] font-bold text-center py-3 rounded uppercase tracking-wide" onClick={() => setMobileOpen(false)}>Get Free Sample</Link>
          </div>
        </div>
      )}
    </header>
  );
}
