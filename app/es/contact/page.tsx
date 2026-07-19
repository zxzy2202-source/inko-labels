"use client";
import type { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, Mail, Phone, MessageCircle, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Correo Electrónico", value: "info@inkolabels.com", href: "mailto:info@inkolabels.com" },
  { icon: Phone, label: "Teléfono / WhatsApp", value: "+86 135 7282 1237", href: "tel:+8613572821237" },
  { icon: MessageCircle, label: "WeChat", value: "lgt2202", href: "#" },
  { icon: MapPin, label: "Dirección", value: "Xi'an, Provincia de Shaanxi, China", href: "#" },
  { icon: Clock, label: "Horario de Atención", value: "Lun–Vie 9:00–18:00 (UTC+8)", href: "#" },
];

export default function EsContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", product: "", quantity: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, language: "es" }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0F2744] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/es" className="hover:text-white">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Contacto</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            Solicitar <span className="text-[#E8A020]">Presupuesto Gratis</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Complete el formulario y recibirá respuesta en 24 horas. También puede contactarnos directamente por WhatsApp o WeChat.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-black text-[#0F2744] mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
                Formulario de Consulta
              </h2>
              {status === "sent" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F2744] mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-gray-600">Le responderemos en 24 horas. Gracias por contactarnos.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nombre *</label>
                      <input required className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8A020]/30 focus:border-[#E8A020]"
                        placeholder="Su nombre" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Correo Electrónico *</label>
                      <input required type="email" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8A020]/30 focus:border-[#E8A020]"
                        placeholder="su@empresa.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Empresa</label>
                      <input className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8A020]/30 focus:border-[#E8A020]"
                        placeholder="Nombre de su empresa" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Teléfono / WhatsApp</label>
                      <input className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8A020]/30 focus:border-[#E8A020]"
                        placeholder="+1 555 000 0000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tipo de Etiqueta</label>
                      <input className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8A020]/30 focus:border-[#E8A020]"
                        placeholder="Ej: Etiquetas cosméticas BOPP" value={form.product} onChange={e => setForm({ ...form, product: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Cantidad Estimada</label>
                      <input className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8A020]/30 focus:border-[#E8A020]"
                        placeholder="Ej: 5,000 rollos" value={form.quantity} onChange={e => setForm({ ...form, quantity: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mensaje / Requisitos *</label>
                    <textarea required rows={5} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8A020]/30 focus:border-[#E8A020] resize-none"
                      placeholder="Describa sus requisitos de etiquetas: material, tamaño, acabado, uso, etc."
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <button type="submit" disabled={status === "sending"}
                    className="w-full bg-[#E8A020] hover:bg-[#d4911c] disabled:opacity-60 text-[#0F2744] font-bold py-4 rounded-lg transition-all duration-200 uppercase tracking-wide flex items-center justify-center gap-2">
                    {status === "sending" ? "Enviando..." : <><Send className="w-4 h-4" /> Enviar Consulta</>}
                  </button>
                  {status === "error" && <p className="text-red-500 text-sm text-center">Error al enviar. Por favor, contáctenos directamente por correo electrónico.</p>}
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="font-black text-[#0F2744] text-lg mb-5" style={{ fontFamily: "var(--font-barlow)" }}>
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <a key={item.label} href={item.href}
                      className="flex items-start gap-3 group hover:text-[#E8A020] transition-colors">
                      <item.icon className="w-5 h-5 text-[#E8A020] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-gray-500 mb-0.5">{item.label}</div>
                        <div className="text-sm font-semibold text-[#0F2744] group-hover:text-[#E8A020] transition-colors">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="bg-[#0F2744] rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Respuesta Rápida</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Para consultas urgentes, contáctenos directamente por WhatsApp. Respondemos en menos de 2 horas durante el horario laboral.
                </p>
                <a href="https://wa.me/8613572821237" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-5 py-3 rounded-lg transition-colors text-sm w-full justify-center">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
