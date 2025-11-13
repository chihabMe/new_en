import { getCurrencySymbol } from "./currency";

export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export const translations = {
  en: {
    // Site Info
    siteName: "Flynix",
    siteDescription:
      "Premium Streaming Platform - Watch unlimited movies & TV shows",

    // Navigation
    home: "Home",
    features: "Features",
    pricing: "Pricing",
    contact: "Contact",
    admin: "Admin",
    dashboard: "Dashboard",

    // Hero Section
    heroTitle: "Discover Premium Entertainment in 4K",
    heroSubtitle:
      "Enjoy ultra-fast service, 99.9% uptime, and 24/7 support — anywhere, anytime.",
    startFreeTrial: "Start Free Trial",
    learnMore: "Learn More",
    freeTrialBadge: "🚀 Free 1-hour trial available",

    // Features
    featuresTitle: "Why Choose Flynix?",
    featuresSubtitle:
      "Experience the best streaming service with premium features",
    feature1Title: "4K and HD Content",
    feature1Description:
      "Watch your favorite shows and movies in stunning 4K and HD quality.",
    feature2Title: "24/7 Customer Support",
    feature2Description:
      "Our dedicated support team is always ready to help you.",
    feature3Title: "Fast and Reliable Service",
    feature3Description:
      "Experience ultra-fast streaming with 99.9% uptime guarantee.",
    feature4Title: "Works on All Devices",
    feature4Description:
      "Easily access on Smart TV, phones, tablets and computers.",
    feature5Title: "Regular Updates",
    feature5Description:
      "Get access to the latest content and features automatically.",
    feature6Title: "Secure and Private",
    feature6Description:
      "Your data is protected with enterprise-grade security.",

    // Pricing
    pricingTitle: "Choose Your Plan",
    pricingSubtitle: "Select the perfect plan for your streaming needs",
    monthly: "Monthly",
    yearly: "Yearly",
    popular: "Popular",
    getStarted: "Get Started",
    selectPlan: "Select Plan",

    // Contact
    contactTitle: "Contact Us",
    contactSubtitle: "Get in touch with our support team",
    contactDescription: "We're here to help you with any questions or concerns",
    emailSupport: "Email Support",
    emailDescription:
      "Send us a detailed email and receive a response within 2 hours",
    phoneSupport: "Phone Support",
    phoneDescription: "Call us directly for immediate assistance",
    whatsappSupport: "WhatsApp Support",
    whatsappDescription: "Chat with us on WhatsApp for quick help",

    // Forms
    fullName: "Full Name",
    email: "Email",
    phone: "Phone Number",
    country: "Country",
    message: "Message",
    send: "Send",
    subscribe: "Subscribe",
    submit: "Submit",

    // Subscription Modal
    subscriptionTitle: "Complete Your Subscription",
    planSelected: "Plan Selected",
    duration: "Duration",
    price: "Price",
    processing: "Processing...",

    // Success Messages
    subscriptionSuccess:
      "Thank you {fullName}! Welcome to Flynix! Order number: #{orderId}",
    contactSuccess: "Message sent successfully! We'll get back to you soon.",

    // Error Messages
    subscriptionError: "Subscription failed. Please try again.",
    contactError: "Failed to send message. Please try again.",
    requiredField: "This field is required",
    invalidEmail: "Please enter a valid email",
    invalidPhone: "Please enter a valid phone number",

    // WhatsApp Messages
    whatsappSubscription:
      "Hello! I just subscribed to Flynix {planName} plan for {duration} at {currencySymbol}{price}. My details: {fullName}, {email}, {phone}",
    whatsappContact: "Hello! I have a question about Flynix. {message}",

    // Admin Messages
    adminNewSubscription:
      "New subscription: {fullName} subscribed to {planName} ({duration}) for {currencySymbol}{price}",
    adminNewContact: "New contact message from {fullName} ({email}): {message}",

    // FAQ
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Find answers to common questions about Flynix",

    // Footer
    copyright: "© 2025 Flynix. All rights reserved.",

    // Testimonials
    testimonialsTitle: "Loved by Thousands",
    testimonialsSubtitle: "Discover what our satisfied customers have to say",

    // Device Compatibility
    devicesTitle: "Watch on Any Device",
    devicesSubtitle: "Stream on all your favorite devices",
    smartTV: "Smart TV",
    android: "Android",
    iOS: "iOS",

    // Admin Panel
    adminLogin: "Admin Login",
    adminPassword: "Password",
    login: "Login",
    logout: "Logout",
    orders: "Orders",
    contacts: "Contacts",
    total: "Total",
    pending: "Pending",
    completed: "Completed",

    // Time formats
    justNow: "Just now",
    minutesAgo: "{count} minutes ago",
    hoursAgo: "{count} hours ago",
    daysAgo: "{count} days ago",
  },
  fr: {
    // Site Info
    siteName: "Flynix",
    siteDescription:
      "Plateforme de Streaming Premium - Regardez des films et séries illimités",

    // Navigation
    home: "Accueil",
    features: "Fonctionnalités",
    pricing: "Tarifs",
    contact: "Contact",
    admin: "Admin",
    dashboard: "Tableau de bord",

    // Hero Section
    heroTitle: "Découvrez le Divertissement Premium en 4K",
    heroSubtitle:
      "Profitez d'un service ultra-rapide, 99,9% de disponibilité et un support 24/7 — partout, à tout moment.",
    startFreeTrial: "Essai Gratuit",
    learnMore: "En Savoir Plus",
    freeTrialBadge: "🚀 Essai gratuit d'1 heure disponible",

    // Features
    featuresTitle: "Pourquoi Choisir Flynix?",
    featuresSubtitle:
      "Découvrez le meilleur service de streaming avec des fonctionnalités premium",
    feature1Title: "Contenu 4K et HD",
    feature1Description:
      "Regardez vos émissions et films préférés en qualité 4K et HD époustouflante.",
    feature2Title: "Support Client 24/7",
    feature2Description:
      "Notre équipe de support dédiée est toujours prête à vous aider.",
    feature3Title: "Service Rapide et Fiable",
    feature3Description:
      "Profitez d'un streaming ultra-rapide avec une garantie de disponibilité de 99,9%.",
    feature4Title: "Fonctionne sur Tous les Appareils",
    feature4Description:
      "Accès facile sur Smart TV, téléphones, tablettes et ordinateurs.",
    feature5Title: "Mises à Jour Régulières",
    feature5Description:
      "Accédez automatiquement au contenu et aux fonctionnalités les plus récents.",
    feature6Title: "Sécurisé et Privé",
    feature6Description:
      "Vos données sont protégées par une sécurité de niveau entreprise.",

    // Pricing
    pricingTitle: "Choisissez Votre Plan",
    pricingSubtitle:
      "Sélectionnez le plan parfait pour vos besoins de streaming",
    monthly: "Mensuel",
    yearly: "Annuel",
    popular: "Populaire",
    getStarted: "Commencer",
    selectPlan: "Choisir le Plan",

    // Contact
    contactTitle: "Nous Contacter",
    contactSubtitle: "Contactez notre équipe de support",
    contactDescription:
      "Nous sommes là pour vous aider avec toutes vos questions ou préoccupations",
    emailSupport: "Support Email",
    emailDescription:
      "Envoyez-nous un email détaillé et recevez une réponse dans les 2 heures",
    phoneSupport: "Assistance Téléphonique",
    phoneDescription: "Appelez-nous directement pour une assistance immédiate",
    whatsappSupport: "Support WhatsApp",
    whatsappDescription: "Chattez avec nous sur WhatsApp pour une aide rapide",

    // Forms
    fullName: "Nom Complet",
    email: "Email",
    phone: "Numéro de Téléphone",
    country: "Pays",
    message: "Message",
    send: "Envoyer",
    subscribe: "S'abonner",
    submit: "Soumettre",

    // Subscription Modal
    subscriptionTitle: "Complétez Votre Abonnement",
    planSelected: "Plan Sélectionné",
    duration: "Durée",
    price: "Prix",
    processing: "Traitement...",

    // Success Messages
    subscriptionSuccess:
      "Merci {fullName}! Bienvenue chez Flynix! Numéro de commande: #{orderId}",
    contactSuccess: "Message envoyé avec succès! Nous vous répondrons bientôt.",

    // Error Messages
    subscriptionError: "Échec de l'abonnement. Veuillez réessayer.",
    contactError: "Échec de l'envoi du message. Veuillez réessayer.",
    requiredField: "Ce champ est obligatoire",
    invalidEmail: "Veuillez saisir un email valide",
    invalidPhone: "Veuillez saisir un numéro de téléphone valide",

    // WhatsApp Messages
    whatsappSubscription:
      "Bonjour! Je viens de m'abonner au plan Flynix {planName} pour {duration} à {price}{currencySymbol}. Mes détails: {fullName}, {email}, {phone}",
    whatsappContact: "Bonjour! J'ai une question concernant Flynix. {message}",

    // Admin Messages
    adminNewSubscription:
      "Nouvel abonnement: {fullName} s'est abonné à {planName} ({duration}) pour {price}{currencySymbol}",
    adminNewContact:
      "Nouveau message de contact de {fullName} ({email}): {message}",

    // FAQ
    faqTitle: "Questions Fréquemment Posées",
    faqSubtitle: "Trouvez des réponses aux questions courantes sur Flynix",

    // Footer
    copyright: "© 2025 Flynix. Tous droits réservés.",

    // Testimonials
    testimonialsTitle: "Aimé par des Milliers",
    testimonialsSubtitle: "Découvrez ce que nos clients satisfaits ont à dire",

    // Device Compatibility
    devicesTitle: "Regardez sur N'importe Quel Appareil",
    devicesSubtitle: "Diffusez sur tous vos appareils préférés",
    smartTV: "Smart TV",
    android: "Android",
    iOS: "iOS",

    // Admin Panel
    adminLogin: "Connexion Admin",
    adminPassword: "Mot de passe",
    login: "Se connecter",
    logout: "Se déconnecter",
    orders: "Commandes",
    contacts: "Contacts",
    total: "Total",
    pending: "En attente",
    completed: "Terminé",

    // Time formats
    justNow: "À l'instant",
    minutesAgo: "Il y a {count} minutes",
    hoursAgo: "Il y a {count} heures",
    daysAgo: "Il y a {count} jours",
  },
};

export function getTranslation(locale: Locale) {
  return translations[locale];
}

// Helper function to replace placeholders in translated strings
export function t(
  key: string,
  locale: Locale,
  replacements?: Record<string, string | number>
): string {
  const translation = getTranslation(locale);
  let text = (translation as any)[key] || key;

  if (replacements) {
    Object.entries(replacements).forEach(([placeholder, value]) => {
      text = text.replace(
        new RegExp(`{${placeholder}}`, "g"),
        value.toString()
      );
    });
  }

  return text;
}

// Detect locale from pathname
export function getLocaleFromPathname(pathname: string): Locale {
  if (pathname.startsWith("/fr")) {
    return "fr";
  }
  return "en";
}

// Get pathname without locale prefix
export function getPathnameWithoutLocale(pathname: string): string {
  if (pathname.startsWith("/fr")) {
    return pathname.replace("/fr", "") || "/";
  }
  return pathname;
}

// Add locale prefix to pathname
export function getLocalizedPathname(pathname: string, locale: Locale): string {
  const cleanPathname = getPathnameWithoutLocale(pathname);

  if (locale === "en") {
    return cleanPathname;
  }

  return `/fr${cleanPathname}`;
}
