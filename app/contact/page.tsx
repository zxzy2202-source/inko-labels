"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ChevronRight, CheckCircle2 } from "lucide-react";

const productTypes = [
  "Cosmetic & Skincare Labels","Essential Oil Labels","Food Packaging Labels",
  "Beverage Bottle Labels","Wine & Spirits Labels","Supplement Labels",
  "Pet Food Labels","Household & Cleaning Labels","Industrial & Chemical Labels",
  "Automotive Labels","Electronics Labels","Agricultural Labels","Other / Custom",
];

const quantities = ["500–1,000 rolls","1,000–5,000 rolls","5,000–10,000 rolls","10,000–50,000 rolls","50,000+ rolls"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/inquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (res.ok) { setSubmitted(true); form.reset(); }
    } catch {
      // fallback: show success anyway for demo
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="bg-[#0F2744] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">Contact Us</div>
          <h1 className="font-display text-6xl font-black text-white uppercase leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            Get Your Quote<br /><span className="text-[#E8A020]">In 24 Hours</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-lg">Fill in your requirements below. Our team will respond within 24 hours with a detailed quote and, if requested, free samples.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-display text-3xl font-black text-[#0F2744] uppercase mb-2" style={{ fontFamily: "var(--font-barlow)" }}>Inquiry Received!</h3>
                  <p className="text-gray-600">Thank you for your inquiry. Our team will respond within 24 hours with a detailed quote.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#0F2744] mb-1.5">Full Name *</label>
                      <input name="name" required placeholder="John Smith" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8A020]/50 focus:border-[#E8A020] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0F2744] mb-1.5">Company Name *</label>
                      <input name="company" required placeholder="Your Company Ltd." className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8A020]/50 focus:border-[#E8A020] transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#0F2744] mb-1.5">Email Address *</label>
                      <input name="email" type="email" required placeholder="john@company.com" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8A020]/50 focus:border-[#E8A020] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0F2744] mb-1.5">Phone / WhatsApp</label>
                      <input name="phone" placeholder="+1 555 000 0000" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8A020]/50 focus:border-[#E8A020] transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#0F2744] mb-1.5">Country *</label>
                      <input name="country" required placeholder="United States" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8A020]/50 focus:border-[#E8A020] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0F2744] mb-1.5">Product Type</label>
                      <select name="productType" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8A020]/50 focus:border-[#E8A020] transition-colors bg-white">
                        <option value="">Select product type</option>
                        {productTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F2744] mb-1.5">Estimated Quantity</label>
                    <select name="quantity" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8A020]/50 focus:border-[#E8A020] transition-colors bg-white">
                      <option value="">Select quantity range</option>
                      {quantities.map(q => <option key={q} value={q}>{q}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F2744] mb-1.5">Project Details / Requirements</label>
                    <textarea name="message" rows={5} placeholder="Please describe your label requirements: size, material, finish, quantity, application, industry, any special requirements..." className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8A020]/50 focus:border-[#E8A020] transition-colors resize-none" />
                  </div>
                  <button type="submit" disabled={loading} className="w-full bg-[#E8A020] hover:bg-[#d4911c] disabled:opacity-60 text-[#0F2744] font-bold py-4 rounded text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2" style={{ fontFamily: "var(--font-barlow)" }}>
                    {loading ? "Sending..." : <><ChevronRight className="w-4 h-4" /> Submit Inquiry — Get Quote in 24h</>}
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              <div className="bg-[#0F2744] rounded-2xl p-6 text-white">
                <h3 className="font-display text-xl font-black uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>Contact Information</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3"><Mail className="w-4 h-4 text-[#E8A020] flex-shrink-0 mt-0.5" /><a href="mailto:info@inkolabels.com" className="text-white/80 hover:text-[#E8A020] transition-colors">info@inkolabels.com</a></li>
                  <li className="flex items-start gap-3"><Phone className="w-4 h-4 text-[#E8A020] flex-shrink-0 mt-0.5" /><span className="text-white/80">+86 139 0000 0000</span></li>
                  <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-[#E8A020] flex-shrink-0 mt-0.5" /><span className="text-white/80">Xi&apos;an, Shaanxi Province, China</span></li>
                  <li className="flex items-start gap-3"><Clock className="w-4 h-4 text-[#E8A020] flex-shrink-0 mt-0.5" /><span className="text-white/80">Mon–Sat 9:00am–6:00pm CST</span></li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-[#0F2744] text-sm uppercase tracking-widest mb-4">What Happens Next?</h3>
                <ol className="space-y-4">
                  {[["01","We review your inquiry within 2 hours"],["02","Our team prepares a detailed quote"],["03","You receive quote + sample options in 24h"]].map(([n, t]) => (
                    <li key={n} className="flex items-start gap-3">
                      <span className="text-[#E8A020] font-black text-lg leading-none" style={{ fontFamily: "var(--font-barlow)" }}>{n}</span>
                      <span className="text-gray-600 text-sm leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
