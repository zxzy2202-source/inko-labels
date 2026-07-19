import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ChevronRight, Award, Globe, Users, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "About INKO Custom Labels — B2B Label Manufacturer Xi'an China",
  description: "Learn about INKO Custom Labels — ISO 9001 certified label manufacturer in Xi'an, China. 15+ years export experience, 60+ countries served.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#0F2744] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">About Us</div>
          <h1 className="font-display text-6xl font-black text-white uppercase leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            Precision Labels.<br /><span className="text-[#E8A020]">Global Reach.</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-lg">INKO Custom Labels (Xi&apos;an Haoz Printing Labels Co., Ltd.) — professional B2B label manufacturer with 15+ years of export experience serving brands in 60+ countries.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/factory.jpg" alt="INKO Factory" fill className="object-cover" />
            </div>
            <div>
              <h2 className="font-display text-4xl font-black text-[#0F2744] uppercase mb-6" style={{ fontFamily: "var(--font-barlow)" }}>Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Founded in Xi&apos;an, Shaanxi Province, INKO Custom Labels has grown from a regional printing supplier into a globally trusted B2B label manufacturer. We specialize in custom-printed pressure-sensitive labels for cosmetics, food, beverage, pharmaceutical, and industrial sectors.</p>
              <p className="text-gray-600 leading-relaxed mb-6">Our production line includes: a resin-plate 7-color flexo press with inline lamination and inline die-cutting; a dedicated foil stamping & die-cutting high-speed press for hot/cold foil and precision shapes; a hot lamination machine for premium thermal finishes; and two vision-inspection & slitting combo lines for 100% defect detection and precision roll delivery.</p>
              <div className="grid grid-cols-2 gap-4">
              {[{ icon: Award, label: "ISO 9001:2015 Certified" }, { icon: Globe, label: "60+ Countries Served" }, { icon: Layers, label: "7-Color Resin Plate Flexo" }, { icon: Zap, label: "Foil Stamping + Die-Cutting H/S" }, { icon: Shield, label: "Hot Lamination Machine" }, { icon: Package, label: "2× Inspection + Slitting Lines" }].map(item => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                      <div className="w-10 h-10 rounded-lg bg-[#E8A020]/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#E8A020]" />
                      </div>
                      <span className="text-sm font-semibold text-[#0F2744]">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div id="quality" className="bg-[#0F2744] rounded-2xl p-10">
            <h2 className="font-display text-4xl font-black text-white uppercase mb-6 text-center" style={{ fontFamily: "var(--font-barlow)" }}>Quality & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {["ISO 9001:2015 Quality Management System","FDA-compliant materials for food contact labels","REACH-compliant inks and adhesives","SGS-tested raw materials","Full traceability from raw material to finished goods","COA, MSDS, and test reports available on request"].map(item => (
                <div key={item} className="flex items-start gap-3 text-white/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#E8A020] flex-shrink-0 mt-0.5" />{item}
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E8A020] hover:bg-[#d4911c] text-[#0F2744] font-bold px-8 py-3 rounded text-sm uppercase tracking-wide transition-all duration-200" style={{ fontFamily: "var(--font-barlow)" }}>
                Request Certificates <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
import { CheckCircle2, ChevronRight, Award, Globe, Users, Factory, Layers, Zap, Shield, Package } from "lucide-react";
