"use client";
import { useState } from "react";
import { ChevronRight, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { getTranslations } from "@/lib/i18n";

const t = getTranslations("ru");

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    await fetch("/api/inquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setSubmitted(true);
  };
  return (
    <>
      <section className="bg-[#0F2744] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#E8A020] text-xs font-bold tracking-widest uppercase mb-3">{t.contact.heroTag}</div>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white uppercase leading-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {t.contact.heroTitle}<br /><span className="text-[#E8A020]">{t.contact.heroTitleAccent}</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-lg">{t.contact.heroSubtitle}</p>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0F2744] mb-6">{t.contact.formTitle}</h2>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <p className="text-xl font-semibold text-[#0F2744]">{t.contact.formSuccess}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">{t.contact.formName}</label><input name="name" required className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E8A020]" /></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">{t.contact.formEmail}</label><input name="email" type="email" required className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E8A020]" /></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">{t.contact.formPhone}</label><input name="phone" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E8A020]" /></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">{t.contact.formCompany}</label><input name="company" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E8A020]" /></div>
                  </div>
                  <div><label className="block text-sm font-semibold text-gray-700 mb-1">Message</label><textarea name="message" rows={5} placeholder={t.contact.formMessage} className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E8A020]" /></div>
                  <button type="submit" className="w-full bg-[#E8A020] text-white font-bold py-4 rounded-full hover:bg-[#d4911c] transition-colors flex items-center justify-center gap-2">
                    {t.contact.formSubmit} <ChevronRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0F2744] mb-6">{t.contact.infoTitle}</h2>
              <div className="space-y-4">
                <a href="mailto:info@inkolabels.com" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <Mail className="w-5 h-5 text-[#E8A020]" /><span className="text-gray-700">info@inkolabels.com</span>
                </a>
                <a href="tel:+8613572821237" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <Phone className="w-5 h-5 text-[#E8A020]" /><span className="text-gray-700">+86 135 7282 1237</span>
                </a>
                <a href="https://wa.me/8613572821237" target="_blank" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <MessageCircle className="w-5 h-5 text-[#E8A020]" /><span className="text-gray-700">WhatsApp</span>
                </a>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <MapPin className="w-5 h-5 text-[#E8A020] mt-0.5" /><span className="text-gray-700">Xi'an, Shaanxi Province, China</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
