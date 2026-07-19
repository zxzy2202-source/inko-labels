"use client";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { usePathname } from "next/navigation";
import { getTranslations, type Locale } from "@/lib/i18n";

export default function Footer() {
  const pathname = usePathname();
  const currentLocale = (["es","fr","pt","de","ru","ja","ar"].find(l => pathname.startsWith(`/${l}`)) || "en") as Locale;
  const t = getTranslations(currentLocale);
  const localePath = (path: string) => currentLocale === "en" ? path : `/${currentLocale}${path === "/" ? "" : path}`;

  const productLinks = {
    en: ["Cosmetic & Skincare Labels","Food Packaging Labels","Beverage Bottle Labels","Wine & Spirits Labels","Pet Food Labels","Supplement Labels","Industrial Labels","Waterproof Labels"],
    es: ["Etiquetas de Cosméticos","Etiquetas de Alimentos","Etiquetas de Bebidas","Etiquetas de Vino","Etiquetas para Mascotas","Etiquetas de Suplementos","Etiquetas Industriales","Etiquetas Impermeables"],
    fr: ["Étiquettes Cosmétiques","Étiquettes Alimentaires","Étiquettes Boissons","Étiquettes Vin","Étiquettes Animaux","Étiquettes Compléments","Étiquettes Industrielles","Étiquettes Imperméables"],
    pt: ["Etiquetas Cosméticas","Etiquetas Alimentares","Etiquetas de Bebidas","Etiquetas de Vinho","Etiquetas Pet","Etiquetas de Suplementos","Etiquetas Industriais","Etiquetas Impermeáveis"],
    de: ["Kosmetik-Etiketten","Lebensmittel-Etiketten","Getränke-Etiketten","Wein-Etiketten","Tierfutter-Etiketten","Nahrungsergänzungs-Etiketten","Industrie-Etiketten","Wasserfeste Etiketten"],
    ru: ["Этикетки для Косметики","Этикетки для Продуктов","Этикетки для Напитков","Этикетки для Вина","Этикетки для Корма","Этикетки для БАД","Промышленные Этикетки","Водостойкие Этикетки"],
    ja: ["化粧品ラベル","食品ラベル","飲料ラベル","ワインラベル","ペットフードラベル","サプリメントラベル","工業用ラベル","防水ラベル"],
    ar: ["ملصقات مستحضرات التجميل","ملصقات الأغذية","ملصقات المشروبات","ملصقات النبيذ","ملصقات أغذية الحيوانات","ملصقات المكملات","ملصقات صناعية","ملصقات مقاومة للماء"],
  };

  const companyLinks = {
    en: [["About Us","/about"],["Our Capabilities","/capabilities"],["Quality & Certifications","/about#quality"],["Request Free Sample","/contact"],["Get a Quote","/contact"],["FAQ","/contact#faq"]],
    es: [["Sobre Nosotros","/about"],["Nuestras Capacidades","/capabilities"],["Calidad y Certificaciones","/about#quality"],["Muestra Gratuita","/contact"],["Solicitar Cotización","/contact"],["Preguntas Frecuentes","/contact#faq"]],
    fr: [["À Propos","/about"],["Nos Capacités","/capabilities"],["Qualité & Certifications","/about#quality"],["Échantillon Gratuit","/contact"],["Demander un Devis","/contact"],["FAQ","/contact#faq"]],
    pt: [["Sobre Nós","/about"],["Nossas Capacidades","/capabilities"],["Qualidade & Certificações","/about#quality"],["Amostra Gratuita","/contact"],["Solicitar Orçamento","/contact"],["Perguntas Frequentes","/contact#faq"]],
    de: [["Über Uns","/about"],["Unsere Fähigkeiten","/capabilities"],["Qualität & Zertifizierungen","/about#quality"],["Kostenloses Muster","/contact"],["Angebot Anfordern","/contact"],["FAQ","/contact#faq"]],
    ru: [["О Нас","/about"],["Наши Возможности","/capabilities"],["Качество и Сертификаты","/about#quality"],["Бесплатный Образец","/contact"],["Запросить Цену","/contact"],["Вопросы и Ответы","/contact#faq"]],
    ja: [["会社概要","/about"],["製造能力","/capabilities"],["品質・認証","/about#quality"],["無料サンプル","/contact"],["見積もり依頼","/contact"],["よくある質問","/contact#faq"]],
    ar: [["من نحن","/about"],["قدراتنا","/capabilities"],["الجودة والشهادات","/about#quality"],["عينة مجانية","/contact"],["طلب عرض سعر","/contact"],["الأسئلة الشائعة","/contact#faq"]],
  };

  const privacyLabel = { en:"Privacy Policy", es:"Política de Privacidad", fr:"Politique de Confidentialité", pt:"Política de Privacidade", de:"Datenschutz", ru:"Политика Конфиденциальности", ja:"プライバシーポリシー", ar:"سياسة الخصوصية" };
  const termsLabel   = { en:"Terms of Use", es:"Términos de Uso", fr:"Conditions d'Utilisation", pt:"Termos de Uso", de:"Nutzungsbedingungen", ru:"Условия Использования", ja:"利用規約", ar:"شروط الاستخدام" };
  const acceptingLabel = { en:"Accepting New Orders", es:"Aceptando Nuevos Pedidos", fr:"Acceptons de Nouvelles Commandes", pt:"Aceitando Novos Pedidos", de:"Nehmen Neue Bestellungen An", ru:"Принимаем Новые Заказы", ja:"新規注文受付中", ar:"نقبل طلبات جديدة" };

  const products = productLinks[currentLocale] ?? productLinks.en;
  const company  = companyLinks[currentLocale] ?? companyLinks.en;

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
            <p className="text-white/60 text-sm leading-relaxed mb-4">{t.footer.tagline}</p>
            <div className="flex items-center gap-2 text-[#E8A020] text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {acceptingLabel[currentLocale]}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-barlow)" }}>{t.footer.productsTitle}</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {products.map(p => (
                <li key={p}><Link href={localePath("/products")} className="hover:text-[#E8A020] transition-colors">{p}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-barlow)" }}>{t.footer.companyTitle}</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {company.map(([label, href]) => (
                <li key={label}><Link href={localePath(href as string)} className="hover:text-[#E8A020] transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-barlow)" }}>{t.nav.contact}</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 text-[#E8A020] flex-shrink-0 mt-0.5" /><a href="mailto:info@inkolabels.com" className="hover:text-[#E8A020] transition-colors">info@inkolabels.com</a></li>
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 text-[#E8A020] flex-shrink-0 mt-0.5" /><a href="tel:+8613572821237" className="hover:text-[#E8A020] transition-colors">+86 135 7282 1237</a></li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-[#E8A020] flex-shrink-0 mt-0.5" /><span>Xi&apos;an, Shaanxi Province, China</span></li>
              <li className="flex items-start gap-2"><Clock className="w-4 h-4 text-[#E8A020] flex-shrink-0 mt-0.5" /><span>Mon–Sat 9:00am–6:00pm CST</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2024 INKO Custom Labels · Xi&apos;an Haoz Printing Labels Co., Ltd. {t.footer.rights}</p>
          <div className="flex gap-4">
            <Link href={localePath("/privacy")} className="hover:text-white/70 transition-colors">{privacyLabel[currentLocale]}</Link>
            <Link href={localePath("/terms")} className="hover:text-white/70 transition-colors">{termsLabel[currentLocale]}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
