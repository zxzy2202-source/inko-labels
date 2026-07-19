// ─────────────────────────────────────────────────────────────────────────────
// INKO Custom Labels — i18n translations
// Supported locales: en, es, fr, pt, de, ru, ja, ar
// ─────────────────────────────────────────────────────────────────────────────

export const locales = ["en", "es", "fr", "pt", "de", "ru", "ja", "ar"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  pt: "Português",
  de: "Deutsch",
  ru: "Русский",
  ja: "日本語",
  ar: "العربية",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  es: "🇪🇸",
  fr: "🇫🇷",
  pt: "🇧🇷",
  de: "🇩🇪",
  ru: "🇷🇺",
  ja: "🇯🇵",
  ar: "🇸🇦",
};

// RTL locales
export const rtlLocales: Locale[] = ["ar"];
export function isRTL(locale: Locale) {
  return rtlLocales.includes(locale);
}

// ─────────────────────────────────────────────────────────────────────────────
// Translation strings
// ─────────────────────────────────────────────────────────────────────────────
export interface Translations {
  // Meta
  siteTitle: string;
  siteDescription: string;

  // Nav
  nav: {
    products: string;
    solutions: string;
    capabilities: string;
    blog: string;
    about: string;
    contact: string;
    getQuote: string;
  };

  // Homepage
  home: {
    heroTag: string;
    heroTitle: string;
    heroTitleAccent: string;
    heroSubtitle: string;
    heroCta1: string;
    heroCta2: string;
    trustBar: {
      iso: string;
      quote: string;
      shipping: string;
      moq: string;
    };
    productsTitle: string;
    productsSubtitle: string;
    factoryTitle: string;
    factorySubtitle: string;
    statsYears: string;
    statsClients: string;
    statsOrders: string;
    statsCountries: string;
    testimonialsTitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };

  // Products page
  products: {
    heroTag: string;
    heroTitle: string;
    heroTitleAccent: string;
    heroSubtitle: string;
    byIndustryTitle: string;
    byMaterialTitle: string;
    specialTitle: string;
  };

  // About page
  about: {
    heroTag: string;
    heroTitle: string;
    heroTitleAccent: string;
    heroSubtitle: string;
    storyTitle: string;
    storyText: string;
    certTitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };

  // Contact page
  contact: {
    heroTag: string;
    heroTitle: string;
    heroTitleAccent: string;
    heroSubtitle: string;
    formTitle: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formCompany: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
    infoTitle: string;
  };

  // Blog
  blog: {
    heroTag: string;
    heroTitle: string;
    heroTitleAccent: string;
    heroSubtitle: string;
    readMore: string;
    backToBlog: string;
    relatedTitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };

  // Footer
  footer: {
    tagline: string;
    productsTitle: string;
    solutionsTitle: string;
    companyTitle: string;
    rights: string;
  };
}

export const translations: Record<Locale, Translations> = {
  // ── ENGLISH ──────────────────────────────────────────────────────────────
  en: {
    siteTitle: "INKO Custom Labels — B2B Label Printing from China",
    siteDescription: "Custom label printing manufacturer in China. BOPP, PET, paper labels. Low MOQ 500 rolls. ISO 9001 certified. Worldwide shipping.",
    nav: {
      products: "Products",
      solutions: "Solutions",
      capabilities: "Capabilities",
      blog: "Blog",
      about: "About",
      contact: "Contact",
      getQuote: "Get a Quote",
    },
    home: {
      heroTag: "B2B Label Manufacturer · ISO 9001 Certified",
      heroTitle: "Custom Labels",
      heroTitleAccent: "Built for Your Brand",
      heroSubtitle: "Premium BOPP, PET & paper labels. Low MOQ from 500 rolls. 24h quote. Worldwide shipping via DHL/FedEx.",
      heroCta1: "Get a Free Quote",
      heroCta2: "View Products",
      trustBar: { iso: "ISO 9001 Certified", quote: "24h Quote", shipping: "DHL/FedEx Worldwide", moq: "MOQ 500 Rolls" },
      productsTitle: "Labels for Every Industry",
      productsSubtitle: "From cosmetics to industrial — we print labels that perform.",
      factoryTitle: "Factory-Direct Quality",
      factorySubtitle: "Our state-of-the-art facility in Xi'an produces over 50 million labels per month.",
      statsYears: "Years Experience",
      statsClients: "Global Clients",
      statsOrders: "Orders Shipped",
      statsCountries: "Countries Served",
      testimonialsTitle: "What Our Clients Say",
      ctaTitle: "Ready to Order Your Labels?",
      ctaSubtitle: "Get a free quote in 24 hours. MOQ from 500 rolls, worldwide shipping.",
      ctaButton: "Request a Free Quote",
    },
    products: {
      heroTag: "Custom Label Printing",
      heroTitle: "All Label",
      heroTitleAccent: "Products",
      heroSubtitle: "Browse our full range of custom labels by industry, material, or special feature.",
      byIndustryTitle: "By Industry",
      byMaterialTitle: "By Material",
      specialTitle: "Special Features",
    },
    about: {
      heroTag: "About INKO",
      heroTitle: "Precision Printing",
      heroTitleAccent: "Since 2008",
      heroSubtitle: "Factory-direct custom label manufacturer based in Xi'an, China.",
      storyTitle: "Our Story",
      storyText: "Founded in 2008, INKO has grown from a small print shop into a leading B2B label manufacturer serving clients in over 60 countries. We specialize in premium BOPP, PET, and paper labels for cosmetics, food & beverage, and industrial applications.",
      certTitle: "Certifications & Standards",
      ctaTitle: "Start Your Label Project",
      ctaSubtitle: "Get a free quote in 24 hours.",
      ctaButton: "Contact Us",
    },
    contact: {
      heroTag: "Get in Touch",
      heroTitle: "Request a",
      heroTitleAccent: "Free Quote",
      heroSubtitle: "Tell us about your label project and we'll respond within 24 hours.",
      formTitle: "Send an Inquiry",
      formName: "Full Name",
      formEmail: "Email Address",
      formPhone: "Phone / WhatsApp",
      formCompany: "Company Name",
      formMessage: "Tell us about your label project...",
      formSubmit: "Send Inquiry",
      formSuccess: "Thank you! We'll get back to you within 24 hours.",
      infoTitle: "Contact Information",
    },
    blog: {
      heroTag: "Knowledge Hub",
      heroTitle: "Label Printing",
      heroTitleAccent: "Insights & Guides",
      heroSubtitle: "Expert articles on label materials, printing techniques, and B2B sourcing tips.",
      readMore: "Read More",
      backToBlog: "Back to Blog",
      relatedTitle: "Related Articles",
      ctaTitle: "Ready to Order Your Labels?",
      ctaSubtitle: "Free quote in 24 hours. MOQ from 500 rolls, worldwide shipping.",
      ctaButton: "Request a Free Quote",
    },
    footer: {
      tagline: "Premium custom label printing, factory-direct from Xi'an, China.",
      productsTitle: "Products",
      solutionsTitle: "Solutions",
      companyTitle: "Company",
      rights: "All rights reserved.",
    },
  },

  // ── SPANISH ──────────────────────────────────────────────────────────────
  es: {
    siteTitle: "INKO Custom Labels — Impresión de Etiquetas B2B desde China",
    siteDescription: "Fabricante de etiquetas personalizadas en China. Etiquetas BOPP, PET, papel. MOQ bajo desde 500 rollos. Certificado ISO 9001. Envío mundial.",
    nav: {
      products: "Productos",
      solutions: "Soluciones",
      capabilities: "Capacidades",
      blog: "Blog",
      about: "Nosotros",
      contact: "Contacto",
      getQuote: "Solicitar Cotización",
    },
    home: {
      heroTag: "Fabricante B2B de Etiquetas · Certificado ISO 9001",
      heroTitle: "Etiquetas Personalizadas",
      heroTitleAccent: "Diseñadas para Tu Marca",
      heroSubtitle: "Etiquetas premium BOPP, PET y papel. MOQ bajo desde 500 rollos. Cotización en 24h. Envío mundial DHL/FedEx.",
      heroCta1: "Cotización Gratuita",
      heroCta2: "Ver Productos",
      trustBar: { iso: "Certificado ISO 9001", quote: "Cotización en 24h", shipping: "DHL/FedEx Mundial", moq: "MOQ 500 Rollos" },
      productsTitle: "Etiquetas para Cada Industria",
      productsSubtitle: "Desde cosméticos hasta industrial — imprimimos etiquetas que funcionan.",
      factoryTitle: "Calidad Directo de Fábrica",
      factorySubtitle: "Nuestra instalación de última generación en Xi'an produce más de 50 millones de etiquetas al mes.",
      statsYears: "Años de Experiencia",
      statsClients: "Clientes Globales",
      statsOrders: "Pedidos Enviados",
      statsCountries: "Países Atendidos",
      testimonialsTitle: "Lo que Dicen Nuestros Clientes",
      ctaTitle: "¿Listo para Pedir Tus Etiquetas?",
      ctaSubtitle: "Cotización gratuita en 24 horas. MOQ desde 500 rollos, envío mundial.",
      ctaButton: "Solicitar Cotización Gratis",
    },
    products: {
      heroTag: "Impresión de Etiquetas Personalizadas",
      heroTitle: "Todos los",
      heroTitleAccent: "Productos",
      heroSubtitle: "Explora nuestra gama completa de etiquetas personalizadas por industria, material o función especial.",
      byIndustryTitle: "Por Industria",
      byMaterialTitle: "Por Material",
      specialTitle: "Funciones Especiales",
    },
    about: {
      heroTag: "Sobre INKO",
      heroTitle: "Impresión de Precisión",
      heroTitleAccent: "Desde 2008",
      heroSubtitle: "Fabricante de etiquetas personalizadas directo de fábrica en Xi'an, China.",
      storyTitle: "Nuestra Historia",
      storyText: "Fundada en 2008, INKO ha crecido de una pequeña imprenta a un fabricante líder de etiquetas B2B que atiende clientes en más de 60 países.",
      certTitle: "Certificaciones y Estándares",
      ctaTitle: "Inicia Tu Proyecto de Etiquetas",
      ctaSubtitle: "Cotización gratuita en 24 horas.",
      ctaButton: "Contáctanos",
    },
    contact: {
      heroTag: "Contáctanos",
      heroTitle: "Solicita una",
      heroTitleAccent: "Cotización Gratis",
      heroSubtitle: "Cuéntanos sobre tu proyecto de etiquetas y responderemos en 24 horas.",
      formTitle: "Enviar una Consulta",
      formName: "Nombre Completo",
      formEmail: "Correo Electrónico",
      formPhone: "Teléfono / WhatsApp",
      formCompany: "Nombre de la Empresa",
      formMessage: "Cuéntanos sobre tu proyecto de etiquetas...",
      formSubmit: "Enviar Consulta",
      formSuccess: "¡Gracias! Te responderemos en 24 horas.",
      infoTitle: "Información de Contacto",
    },
    blog: {
      heroTag: "Centro de Conocimiento",
      heroTitle: "Guías e Insights",
      heroTitleAccent: "de Etiquetas",
      heroSubtitle: "Artículos expertos sobre materiales, técnicas de impresión y consejos de abastecimiento B2B.",
      readMore: "Leer Más",
      backToBlog: "Volver al Blog",
      relatedTitle: "Artículos Relacionados",
      ctaTitle: "¿Listo para Imprimir?",
      ctaSubtitle: "Cotización gratis en 24h. MOQ desde 500 rollos.",
      ctaButton: "Solicitar Cotización",
    },
    footer: {
      tagline: "Impresión de etiquetas premium directo de fábrica desde Xi'an, China.",
      productsTitle: "Productos",
      solutionsTitle: "Soluciones",
      companyTitle: "Empresa",
      rights: "Todos los derechos reservados.",
    },
  },

  // ── FRENCH ───────────────────────────────────────────────────────────────
  fr: {
    siteTitle: "INKO Custom Labels — Impression d'Étiquettes B2B depuis la Chine",
    siteDescription: "Fabricant d'étiquettes personnalisées en Chine. Étiquettes BOPP, PET, papier. MOQ bas dès 500 rouleaux. Certifié ISO 9001. Livraison mondiale.",
    nav: {
      products: "Produits",
      solutions: "Solutions",
      capabilities: "Capacités",
      blog: "Blog",
      about: "À Propos",
      contact: "Contact",
      getQuote: "Demander un Devis",
    },
    home: {
      heroTag: "Fabricant d'Étiquettes B2B · Certifié ISO 9001",
      heroTitle: "Étiquettes Personnalisées",
      heroTitleAccent: "Conçues pour Votre Marque",
      heroSubtitle: "Étiquettes premium BOPP, PET et papier. MOQ dès 500 rouleaux. Devis en 24h. Livraison mondiale DHL/FedEx.",
      heroCta1: "Devis Gratuit",
      heroCta2: "Voir les Produits",
      trustBar: { iso: "Certifié ISO 9001", quote: "Devis en 24h", shipping: "DHL/FedEx Mondial", moq: "MOQ 500 Rouleaux" },
      productsTitle: "Étiquettes pour Chaque Secteur",
      productsSubtitle: "De la cosmétique à l'industrie — nous imprimons des étiquettes performantes.",
      factoryTitle: "Qualité Directement de l'Usine",
      factorySubtitle: "Notre installation ultramoderne à Xi'an produit plus de 50 millions d'étiquettes par mois.",
      statsYears: "Ans d'Expérience",
      statsClients: "Clients Mondiaux",
      statsOrders: "Commandes Expédiées",
      statsCountries: "Pays Desservis",
      testimonialsTitle: "Ce que Disent Nos Clients",
      ctaTitle: "Prêt à Commander Vos Étiquettes ?",
      ctaSubtitle: "Devis gratuit en 24 heures. MOQ dès 500 rouleaux, livraison mondiale.",
      ctaButton: "Demander un Devis Gratuit",
    },
    products: {
      heroTag: "Impression d'Étiquettes Personnalisées",
      heroTitle: "Tous les",
      heroTitleAccent: "Produits",
      heroSubtitle: "Parcourez notre gamme complète d'étiquettes par secteur, matériau ou fonction spéciale.",
      byIndustryTitle: "Par Secteur",
      byMaterialTitle: "Par Matériau",
      specialTitle: "Fonctions Spéciales",
    },
    about: {
      heroTag: "À Propos d'INKO",
      heroTitle: "Impression de Précision",
      heroTitleAccent: "Depuis 2008",
      heroSubtitle: "Fabricant d'étiquettes personnalisées directement depuis Xi'an, Chine.",
      storyTitle: "Notre Histoire",
      storyText: "Fondée en 2008, INKO est passée d'un petit atelier d'impression à un fabricant d'étiquettes B2B de premier plan, servant des clients dans plus de 60 pays.",
      certTitle: "Certifications et Normes",
      ctaTitle: "Démarrez Votre Projet d'Étiquettes",
      ctaSubtitle: "Devis gratuit en 24 heures.",
      ctaButton: "Contactez-Nous",
    },
    contact: {
      heroTag: "Contactez-Nous",
      heroTitle: "Demandez un",
      heroTitleAccent: "Devis Gratuit",
      heroSubtitle: "Parlez-nous de votre projet d'étiquettes et nous vous répondrons sous 24 heures.",
      formTitle: "Envoyer une Demande",
      formName: "Nom Complet",
      formEmail: "Adresse E-mail",
      formPhone: "Téléphone / WhatsApp",
      formCompany: "Nom de l'Entreprise",
      formMessage: "Parlez-nous de votre projet d'étiquettes...",
      formSubmit: "Envoyer la Demande",
      formSuccess: "Merci ! Nous vous répondrons dans les 24 heures.",
      infoTitle: "Informations de Contact",
    },
    blog: {
      heroTag: "Centre de Connaissances",
      heroTitle: "Guides et Insights",
      heroTitleAccent: "sur les Étiquettes",
      heroSubtitle: "Articles experts sur les matériaux, techniques d'impression et conseils d'approvisionnement B2B.",
      readMore: "Lire la Suite",
      backToBlog: "Retour au Blog",
      relatedTitle: "Articles Connexes",
      ctaTitle: "Prêt à Imprimer ?",
      ctaSubtitle: "Devis gratuit en 24h. MOQ dès 500 rouleaux.",
      ctaButton: "Demander un Devis",
    },
    footer: {
      tagline: "Impression d'étiquettes premium directement depuis Xi'an, Chine.",
      productsTitle: "Produits",
      solutionsTitle: "Solutions",
      companyTitle: "Entreprise",
      rights: "Tous droits réservés.",
    },
  },

  // ── PORTUGUESE ───────────────────────────────────────────────────────────
  pt: {
    siteTitle: "INKO Custom Labels — Impressão de Etiquetas B2B da China",
    siteDescription: "Fabricante de etiquetas personalizadas na China. Etiquetas BOPP, PET, papel. MOQ baixo a partir de 500 rolos. Certificado ISO 9001. Envio mundial.",
    nav: {
      products: "Produtos",
      solutions: "Soluções",
      capabilities: "Capacidades",
      blog: "Blog",
      about: "Sobre Nós",
      contact: "Contato",
      getQuote: "Solicitar Orçamento",
    },
    home: {
      heroTag: "Fabricante B2B de Etiquetas · Certificado ISO 9001",
      heroTitle: "Etiquetas Personalizadas",
      heroTitleAccent: "Criadas para Sua Marca",
      heroSubtitle: "Etiquetas premium BOPP, PET e papel. MOQ a partir de 500 rolos. Orçamento em 24h. Envio mundial DHL/FedEx.",
      heroCta1: "Orçamento Gratuito",
      heroCta2: "Ver Produtos",
      trustBar: { iso: "Certificado ISO 9001", quote: "Orçamento em 24h", shipping: "DHL/FedEx Mundial", moq: "MOQ 500 Rolos" },
      productsTitle: "Etiquetas para Cada Setor",
      productsSubtitle: "De cosméticos a industrial — imprimimos etiquetas que funcionam.",
      factoryTitle: "Qualidade Direto da Fábrica",
      factorySubtitle: "Nossa instalação de última geração em Xi'an produz mais de 50 milhões de etiquetas por mês.",
      statsYears: "Anos de Experiência",
      statsClients: "Clientes Globais",
      statsOrders: "Pedidos Enviados",
      statsCountries: "Países Atendidos",
      testimonialsTitle: "O que Nossos Clientes Dizem",
      ctaTitle: "Pronto para Pedir Suas Etiquetas?",
      ctaSubtitle: "Orçamento gratuito em 24 horas. MOQ a partir de 500 rolos, envio mundial.",
      ctaButton: "Solicitar Orçamento Grátis",
    },
    products: {
      heroTag: "Impressão de Etiquetas Personalizadas",
      heroTitle: "Todos os",
      heroTitleAccent: "Produtos",
      heroSubtitle: "Explore nossa gama completa de etiquetas personalizadas por setor, material ou função especial.",
      byIndustryTitle: "Por Setor",
      byMaterialTitle: "Por Material",
      specialTitle: "Funções Especiais",
    },
    about: {
      heroTag: "Sobre a INKO",
      heroTitle: "Impressão de Precisão",
      heroTitleAccent: "Desde 2008",
      heroSubtitle: "Fabricante de etiquetas personalizadas direto da fábrica em Xi'an, China.",
      storyTitle: "Nossa História",
      storyText: "Fundada em 2008, a INKO cresceu de uma pequena gráfica para um fabricante líder de etiquetas B2B, atendendo clientes em mais de 60 países.",
      certTitle: "Certificações e Padrões",
      ctaTitle: "Inicie Seu Projeto de Etiquetas",
      ctaSubtitle: "Orçamento gratuito em 24 horas.",
      ctaButton: "Fale Conosco",
    },
    contact: {
      heroTag: "Entre em Contato",
      heroTitle: "Solicite um",
      heroTitleAccent: "Orçamento Grátis",
      heroSubtitle: "Conte-nos sobre seu projeto de etiquetas e responderemos em 24 horas.",
      formTitle: "Enviar uma Consulta",
      formName: "Nome Completo",
      formEmail: "Endereço de E-mail",
      formPhone: "Telefone / WhatsApp",
      formCompany: "Nome da Empresa",
      formMessage: "Conte-nos sobre seu projeto de etiquetas...",
      formSubmit: "Enviar Consulta",
      formSuccess: "Obrigado! Responderemos em 24 horas.",
      infoTitle: "Informações de Contato",
    },
    blog: {
      heroTag: "Centro de Conhecimento",
      heroTitle: "Guias e Insights",
      heroTitleAccent: "sobre Etiquetas",
      heroSubtitle: "Artigos especializados sobre materiais, técnicas de impressão e dicas de fornecimento B2B.",
      readMore: "Leia Mais",
      backToBlog: "Voltar ao Blog",
      relatedTitle: "Artigos Relacionados",
      ctaTitle: "Pronto para Imprimir?",
      ctaSubtitle: "Orçamento grátis em 24h. MOQ a partir de 500 rolos.",
      ctaButton: "Solicitar Orçamento",
    },
    footer: {
      tagline: "Impressão de etiquetas premium direto da fábrica de Xi'an, China.",
      productsTitle: "Produtos",
      solutionsTitle: "Soluções",
      companyTitle: "Empresa",
      rights: "Todos os direitos reservados.",
    },
  },

  // ── GERMAN ───────────────────────────────────────────────────────────────
  de: {
    siteTitle: "INKO Custom Labels — B2B-Etikettendruck aus China",
    siteDescription: "Hersteller von individuellen Etiketten in China. BOPP-, PET-, Papiertiketten. Niedrige Mindestbestellmenge ab 500 Rollen. ISO 9001 zertifiziert. Weltweiter Versand.",
    nav: {
      products: "Produkte",
      solutions: "Lösungen",
      capabilities: "Fähigkeiten",
      blog: "Blog",
      about: "Über Uns",
      contact: "Kontakt",
      getQuote: "Angebot Anfordern",
    },
    home: {
      heroTag: "B2B-Etikettenhersteller · ISO 9001 Zertifiziert",
      heroTitle: "Individuelle Etiketten",
      heroTitleAccent: "Für Ihre Marke",
      heroSubtitle: "Premium BOPP-, PET- und Papiertiketten. Mindestbestellmenge ab 500 Rollen. Angebot in 24h. Weltweiter Versand per DHL/FedEx.",
      heroCta1: "Kostenloses Angebot",
      heroCta2: "Produkte Ansehen",
      trustBar: { iso: "ISO 9001 Zertifiziert", quote: "Angebot in 24h", shipping: "DHL/FedEx Weltweit", moq: "MOQ 500 Rollen" },
      productsTitle: "Etiketten für Jede Branche",
      productsSubtitle: "Von Kosmetik bis Industrie — wir drucken Etiketten, die funktionieren.",
      factoryTitle: "Werksqualität Direkt",
      factorySubtitle: "Unsere hochmoderne Anlage in Xi'an produziert über 50 Millionen Etiketten pro Monat.",
      statsYears: "Jahre Erfahrung",
      statsClients: "Globale Kunden",
      statsOrders: "Versendete Bestellungen",
      statsCountries: "Bediente Länder",
      testimonialsTitle: "Was Unsere Kunden Sagen",
      ctaTitle: "Bereit, Ihre Etiketten zu Bestellen?",
      ctaSubtitle: "Kostenloses Angebot in 24 Stunden. MOQ ab 500 Rollen, weltweiter Versand.",
      ctaButton: "Kostenloses Angebot Anfordern",
    },
    products: {
      heroTag: "Individueller Etikettendruck",
      heroTitle: "Alle",
      heroTitleAccent: "Produkte",
      heroSubtitle: "Durchsuchen Sie unser vollständiges Sortiment an individuellen Etiketten nach Branche, Material oder Sonderfunktion.",
      byIndustryTitle: "Nach Branche",
      byMaterialTitle: "Nach Material",
      specialTitle: "Sonderfunktionen",
    },
    about: {
      heroTag: "Über INKO",
      heroTitle: "Präzisionsdruck",
      heroTitleAccent: "Seit 2008",
      heroSubtitle: "Hersteller individueller Etiketten direkt ab Werk in Xi'an, China.",
      storyTitle: "Unsere Geschichte",
      storyText: "Gegründet 2008, hat sich INKO von einer kleinen Druckerei zu einem führenden B2B-Etikettenhersteller entwickelt, der Kunden in über 60 Ländern bedient.",
      certTitle: "Zertifizierungen und Standards",
      ctaTitle: "Starten Sie Ihr Etikettenprojekt",
      ctaSubtitle: "Kostenloses Angebot in 24 Stunden.",
      ctaButton: "Kontaktieren Sie Uns",
    },
    contact: {
      heroTag: "Kontakt Aufnehmen",
      heroTitle: "Kostenloses",
      heroTitleAccent: "Angebot Anfordern",
      heroSubtitle: "Erzählen Sie uns von Ihrem Etikettenprojekt und wir antworten innerhalb von 24 Stunden.",
      formTitle: "Anfrage Senden",
      formName: "Vollständiger Name",
      formEmail: "E-Mail-Adresse",
      formPhone: "Telefon / WhatsApp",
      formCompany: "Firmenname",
      formMessage: "Erzählen Sie uns von Ihrem Etikettenprojekt...",
      formSubmit: "Anfrage Senden",
      formSuccess: "Danke! Wir melden uns innerhalb von 24 Stunden.",
      infoTitle: "Kontaktinformationen",
    },
    blog: {
      heroTag: "Wissenszentrum",
      heroTitle: "Ratgeber und Insights",
      heroTitleAccent: "zu Etiketten",
      heroSubtitle: "Expertenbeiträge zu Materialien, Drucktechniken und B2B-Beschaffungstipps.",
      readMore: "Weiterlesen",
      backToBlog: "Zurück zum Blog",
      relatedTitle: "Verwandte Artikel",
      ctaTitle: "Bereit zum Drucken?",
      ctaSubtitle: "Kostenloses Angebot in 24h. MOQ ab 500 Rollen.",
      ctaButton: "Angebot Anfordern",
    },
    footer: {
      tagline: "Premium-Etikettendruck direkt ab Werk aus Xi'an, China.",
      productsTitle: "Produkte",
      solutionsTitle: "Lösungen",
      companyTitle: "Unternehmen",
      rights: "Alle Rechte vorbehalten.",
    },
  },

  // ── RUSSIAN ──────────────────────────────────────────────────────────────
  ru: {
    siteTitle: "INKO Custom Labels — B2B Печать Этикеток из Китая",
    siteDescription: "Производитель этикеток на заказ в Китае. Этикетки BOPP, PET, бумажные. Низкий MOQ от 500 рулонов. Сертификат ISO 9001. Доставка по всему миру.",
    nav: {
      products: "Продукты",
      solutions: "Решения",
      capabilities: "Возможности",
      blog: "Блог",
      about: "О Нас",
      contact: "Контакты",
      getQuote: "Запросить Цену",
    },
    home: {
      heroTag: "B2B Производитель Этикеток · Сертификат ISO 9001",
      heroTitle: "Этикетки на Заказ",
      heroTitleAccent: "Для Вашего Бренда",
      heroSubtitle: "Премиальные этикетки BOPP, PET и бумажные. MOQ от 500 рулонов. Расчёт за 24ч. Доставка DHL/FedEx по всему миру.",
      heroCta1: "Бесплатный Расчёт",
      heroCta2: "Смотреть Продукты",
      trustBar: { iso: "Сертификат ISO 9001", quote: "Расчёт за 24ч", shipping: "DHL/FedEx по всему миру", moq: "MOQ 500 Рулонов" },
      productsTitle: "Этикетки для Любой Отрасли",
      productsSubtitle: "От косметики до промышленности — мы печатаем этикетки, которые работают.",
      factoryTitle: "Качество Напрямую с Завода",
      factorySubtitle: "Наш современный завод в Сиане производит более 50 миллионов этикеток в месяц.",
      statsYears: "Лет Опыта",
      statsClients: "Клиентов по Всему Миру",
      statsOrders: "Отправленных Заказов",
      statsCountries: "Обслуживаемых Стран",
      testimonialsTitle: "Что Говорят Наши Клиенты",
      ctaTitle: "Готовы Заказать Этикетки?",
      ctaSubtitle: "Бесплатный расчёт за 24 часа. MOQ от 500 рулонов, доставка по всему миру.",
      ctaButton: "Запросить Бесплатный Расчёт",
    },
    products: {
      heroTag: "Печать Этикеток на Заказ",
      heroTitle: "Все",
      heroTitleAccent: "Продукты",
      heroSubtitle: "Просмотрите наш полный ассортимент этикеток по отрасли, материалу или специальной функции.",
      byIndustryTitle: "По Отрасли",
      byMaterialTitle: "По Материалу",
      specialTitle: "Специальные Функции",
    },
    about: {
      heroTag: "О Компании INKO",
      heroTitle: "Точная Печать",
      heroTitleAccent: "С 2008 Года",
      heroSubtitle: "Производитель этикеток напрямую с завода в Сиане, Китай.",
      storyTitle: "Наша История",
      storyText: "Основанная в 2008 году, INKO выросла из небольшой типографии в ведущего B2B-производителя этикеток, обслуживающего клиентов в более чем 60 странах.",
      certTitle: "Сертификаты и Стандарты",
      ctaTitle: "Начните Свой Проект по Этикеткам",
      ctaSubtitle: "Бесплатный расчёт за 24 часа.",
      ctaButton: "Связаться с Нами",
    },
    contact: {
      heroTag: "Свяжитесь с Нами",
      heroTitle: "Запросите",
      heroTitleAccent: "Бесплатный Расчёт",
      heroSubtitle: "Расскажите нам о вашем проекте по этикеткам, и мы ответим в течение 24 часов.",
      formTitle: "Отправить Запрос",
      formName: "Полное Имя",
      formEmail: "Адрес Электронной Почты",
      formPhone: "Телефон / WhatsApp",
      formCompany: "Название Компании",
      formMessage: "Расскажите нам о вашем проекте по этикеткам...",
      formSubmit: "Отправить Запрос",
      formSuccess: "Спасибо! Мы свяжемся с вами в течение 24 часов.",
      infoTitle: "Контактная Информация",
    },
    blog: {
      heroTag: "Центр Знаний",
      heroTitle: "Руководства и Аналитика",
      heroTitleAccent: "по Этикеткам",
      heroSubtitle: "Экспертные статьи о материалах, технологиях печати и советах по B2B-закупкам.",
      readMore: "Читать Далее",
      backToBlog: "Назад в Блог",
      relatedTitle: "Похожие Статьи",
      ctaTitle: "Готовы к Печати?",
      ctaSubtitle: "Бесплатный расчёт за 24ч. MOQ от 500 рулонов.",
      ctaButton: "Запросить Расчёт",
    },
    footer: {
      tagline: "Премиальная печать этикеток напрямую с завода в Сиане, Китай.",
      productsTitle: "Продукты",
      solutionsTitle: "Решения",
      companyTitle: "Компания",
      rights: "Все права защищены.",
    },
  },

  // ── JAPANESE ─────────────────────────────────────────────────────────────
  ja: {
    siteTitle: "INKO Custom Labels — 中国からのB2Bラベル印刷",
    siteDescription: "中国のカスタムラベルメーカー。BOPP、PET、紙ラベル。最小注文数量500ロールから。ISO 9001認証取得。世界中に配送。",
    nav: {
      products: "製品",
      solutions: "ソリューション",
      capabilities: "製造能力",
      blog: "ブログ",
      about: "会社概要",
      contact: "お問い合わせ",
      getQuote: "見積もり依頼",
    },
    home: {
      heroTag: "B2Bラベルメーカー · ISO 9001認証",
      heroTitle: "カスタムラベル",
      heroTitleAccent: "あなたのブランドのために",
      heroSubtitle: "プレミアムBOPP、PET、紙ラベル。最小注文数量500ロールから。24時間以内に見積もり。DHL/FedExで世界中に配送。",
      heroCta1: "無料見積もり",
      heroCta2: "製品を見る",
      trustBar: { iso: "ISO 9001認証", quote: "24時間以内に見積もり", shipping: "DHL/FedEx世界配送", moq: "MOQ 500ロール" },
      productsTitle: "あらゆる業界向けラベル",
      productsSubtitle: "化粧品から工業用まで — 機能するラベルを印刷します。",
      factoryTitle: "工場直送品質",
      factorySubtitle: "西安の最先端施設では、月間5,000万枚以上のラベルを生産しています。",
      statsYears: "年の経験",
      statsClients: "グローバルクライアント",
      statsOrders: "出荷済み注文",
      statsCountries: "対応国",
      testimonialsTitle: "お客様の声",
      ctaTitle: "ラベルのご注文はお気軽に",
      ctaSubtitle: "24時間以内に無料見積もり。MOQ 500ロールから、世界中に配送。",
      ctaButton: "無料見積もりを依頼する",
    },
    products: {
      heroTag: "カスタムラベル印刷",
      heroTitle: "すべての",
      heroTitleAccent: "製品",
      heroSubtitle: "業界、素材、特殊機能別にカスタムラベルの全ラインナップをご覧ください。",
      byIndustryTitle: "業界別",
      byMaterialTitle: "素材別",
      specialTitle: "特殊機能",
    },
    about: {
      heroTag: "INKOについて",
      heroTitle: "精密印刷",
      heroTitleAccent: "2008年創業",
      heroSubtitle: "中国西安の工場直送カスタムラベルメーカー。",
      storyTitle: "私たちの歴史",
      storyText: "2008年に設立されたINKOは、小さな印刷会社から60カ国以上のお客様にサービスを提供する大手B2Bラベルメーカーへと成長しました。",
      certTitle: "認証と基準",
      ctaTitle: "ラベルプロジェクトを始めましょう",
      ctaSubtitle: "24時間以内に無料見積もり。",
      ctaButton: "お問い合わせ",
    },
    contact: {
      heroTag: "お問い合わせ",
      heroTitle: "無料見積もりを",
      heroTitleAccent: "依頼する",
      heroSubtitle: "ラベルプロジェクトについてお聞かせください。24時間以内にご返答いたします。",
      formTitle: "お問い合わせを送る",
      formName: "氏名",
      formEmail: "メールアドレス",
      formPhone: "電話番号 / WhatsApp",
      formCompany: "会社名",
      formMessage: "ラベルプロジェクトについてお聞かせください...",
      formSubmit: "送信する",
      formSuccess: "ありがとうございます！24時間以内にご返答いたします。",
      infoTitle: "連絡先情報",
    },
    blog: {
      heroTag: "ナレッジセンター",
      heroTitle: "ラベルの",
      heroTitleAccent: "ガイドと知識",
      heroSubtitle: "素材、印刷技術、B2B調達のヒントに関する専門記事。",
      readMore: "続きを読む",
      backToBlog: "ブログに戻る",
      relatedTitle: "関連記事",
      ctaTitle: "印刷の準備はできていますか？",
      ctaSubtitle: "24時間以内に無料見積もり。MOQ 500ロールから。",
      ctaButton: "見積もりを依頼する",
    },
    footer: {
      tagline: "中国西安の工場から直送するプレミアムカスタムラベル印刷。",
      productsTitle: "製品",
      solutionsTitle: "ソリューション",
      companyTitle: "会社情報",
      rights: "全著作権所有。",
    },
  },

  // ── ARABIC ───────────────────────────────────────────────────────────────
  ar: {
    siteTitle: "INKO Custom Labels — طباعة ملصقات B2B من الصين",
    siteDescription: "مصنع ملصقات مخصصة في الصين. ملصقات BOPP وPET وورقية. الحد الأدنى للطلب 500 لفة. معتمد ISO 9001. شحن عالمي.",
    nav: {
      products: "المنتجات",
      solutions: "الحلول",
      capabilities: "القدرات",
      blog: "المدونة",
      about: "من نحن",
      contact: "اتصل بنا",
      getQuote: "طلب عرض سعر",
    },
    home: {
      heroTag: "مصنع ملصقات B2B · معتمد ISO 9001",
      heroTitle: "ملصقات مخصصة",
      heroTitleAccent: "مصممة لعلامتك التجارية",
      heroSubtitle: "ملصقات BOPP وPET وورقية فاخرة. الحد الأدنى للطلب 500 لفة. عرض سعر خلال 24 ساعة. شحن عالمي عبر DHL/FedEx.",
      heroCta1: "عرض سعر مجاني",
      heroCta2: "عرض المنتجات",
      trustBar: { iso: "معتمد ISO 9001", quote: "عرض سعر خلال 24 ساعة", shipping: "DHL/FedEx عالمي", moq: "الحد الأدنى 500 لفة" },
      productsTitle: "ملصقات لكل صناعة",
      productsSubtitle: "من مستحضرات التجميل إلى الصناعة — نطبع ملصقات تؤدي وظيفتها.",
      factoryTitle: "جودة مباشرة من المصنع",
      factorySubtitle: "منشأتنا المتطورة في شيآن تنتج أكثر من 50 مليون ملصق شهرياً.",
      statsYears: "سنوات خبرة",
      statsClients: "عملاء عالميون",
      statsOrders: "طلبات مشحونة",
      statsCountries: "دولة نخدمها",
      testimonialsTitle: "ماذا يقول عملاؤنا",
      ctaTitle: "هل أنت مستعد لطلب ملصقاتك؟",
      ctaSubtitle: "عرض سعر مجاني خلال 24 ساعة. الحد الأدنى 500 لفة، شحن عالمي.",
      ctaButton: "طلب عرض سعر مجاني",
    },
    products: {
      heroTag: "طباعة ملصقات مخصصة",
      heroTitle: "جميع",
      heroTitleAccent: "المنتجات",
      heroSubtitle: "تصفح مجموعتنا الكاملة من الملصقات المخصصة حسب الصناعة أو المادة أو الميزة الخاصة.",
      byIndustryTitle: "حسب الصناعة",
      byMaterialTitle: "حسب المادة",
      specialTitle: "ميزات خاصة",
    },
    about: {
      heroTag: "عن INKO",
      heroTitle: "طباعة دقيقة",
      heroTitleAccent: "منذ 2008",
      heroSubtitle: "مصنع ملصقات مخصصة مباشر من شيآن، الصين.",
      storyTitle: "قصتنا",
      storyText: "تأسست INKO عام 2008، ونمت من مطبعة صغيرة إلى مصنع رائد لملصقات B2B يخدم عملاء في أكثر من 60 دولة.",
      certTitle: "الشهادات والمعايير",
      ctaTitle: "ابدأ مشروع الملصقات الخاص بك",
      ctaSubtitle: "عرض سعر مجاني خلال 24 ساعة.",
      ctaButton: "تواصل معنا",
    },
    contact: {
      heroTag: "تواصل معنا",
      heroTitle: "اطلب",
      heroTitleAccent: "عرض سعر مجاني",
      heroSubtitle: "أخبرنا عن مشروع الملصقات الخاص بك وسنرد خلال 24 ساعة.",
      formTitle: "إرسال استفسار",
      formName: "الاسم الكامل",
      formEmail: "عنوان البريد الإلكتروني",
      formPhone: "الهاتف / واتساب",
      formCompany: "اسم الشركة",
      formMessage: "أخبرنا عن مشروع الملصقات الخاص بك...",
      formSubmit: "إرسال الاستفسار",
      formSuccess: "شكراً لك! سنتواصل معك خلال 24 ساعة.",
      infoTitle: "معلومات الاتصال",
    },
    blog: {
      heroTag: "مركز المعرفة",
      heroTitle: "أدلة ورؤى",
      heroTitleAccent: "حول الملصقات",
      heroSubtitle: "مقالات متخصصة حول المواد وتقنيات الطباعة ونصائح التوريد B2B.",
      readMore: "اقرأ المزيد",
      backToBlog: "العودة إلى المدونة",
      relatedTitle: "مقالات ذات صلة",
      ctaTitle: "هل أنت مستعد للطباعة؟",
      ctaSubtitle: "عرض سعر مجاني خلال 24 ساعة. الحد الأدنى 500 لفة.",
      ctaButton: "طلب عرض سعر",
    },
    footer: {
      tagline: "طباعة ملصقات فاخرة مباشرة من المصنع في شيآن، الصين.",
      productsTitle: "المنتجات",
      solutionsTitle: "الحلول",
      companyTitle: "الشركة",
      rights: "جميع الحقوق محفوظة.",
    },
  },
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations.en;
}
