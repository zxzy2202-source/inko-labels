import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#091b30] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="INKO Custom Labels" width={40} height={40} className="object-contain" />
              <div>
                <div className="text-white font-bold text-xl leading-none" style={{ fontFamily: "var(--font-barlow)" }}>INKO</div>
                <div className="text-[#E8A020] text-[10px] tracking-widest uppercase">Custom Labels</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">Professional B2B custom label manufacturer in China. ISO 9001 certified, 15+ years export experience, 60+ countries served.</p>
            <div className="flex items-center gap-2 text-[#E8A020] text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Accepting New Orders
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-barlow)" }}>Products</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {["Cosmetic & Skincare Labels","Food Packaging Labels","Beverage Bottle Labels","Wine & Spirits Labels","Pet Food Labels","Supplement Labels","Industrial Labels","Waterproof Labels"].map(p => (
                <li key={p}><Link href="/products" className="hover:text-[#E8A020] transition-colors">{p}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-barlow)" }}>Company</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {[["About Us","/about"],["Our Capabilities","/capabilities"],["Quality & Certifications","/about#quality"],["Request Free Sample","/contact"],["Get a Quote","/contact"],["FAQ","/contact#faq"]].map(([label, href]) => (
                <li key={label}><Link href={href} className="hover:text-[#E8A020] transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-barlow)" }}>Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 text-[#E8A020] flex-shrink-0 mt-0.5" /><a href="mailto:info@inkolabels.com" className="hover:text-[#E8A020] transition-colors">info@inkolabels.com</a></li>
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 text-[#E8A020] flex-shrink-0 mt-0.5" /><a href="tel:+8613572821237" className="hover:text-[#E8A020] transition-colors">+86 135 7282 1237</a></li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-[#E8A020] flex-shrink-0 mt-0.5" /><span>Xi&apos;an, Shaanxi Province, China</span></li>
              <li className="flex items-start gap-2"><Clock className="w-4 h-4 text-[#E8A020] flex-shrink-0 mt-0.5" /><span>Mon–Sat 9:00am–6:00pm CST</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2024 INKO Custom Labels · Xi&apos;an Haoz Printing Labels Co., Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
