"use client";

import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useLocale } from "@/hooks/useLocale";

export default function Footer() {
  const { t, locale } = useLocale();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Flynix
            </div>
            <p className="text-muted-foreground text-sm">
              {t("siteDescription")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">
              {locale === "en" ? "Quick Links" : "Liens Rapides"}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#home"
                  className="hover:text-foreground transition-colors"
                >
                  {t("home")}
                </a>
              </li>
              <li>
                <a
                  href="#content"
                  className="hover:text-foreground transition-colors"
                >
                  {locale === "en" ? "Content" : "Contenu"}
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-foreground transition-colors"
                >
                  {t("pricing")}
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-foreground transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">
              {locale === "en" ? "Support" : "Support"}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#contact"
                  className="hover:text-foreground transition-colors"
                >
                  {t("contact")} Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Status Page
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">We Accept:</span>
              <div className="flex gap-3">
                <div className="w-10 h-6 bg-card rounded flex items-center justify-center text-xs font-semibold">
                  Visa
                </div>
                <div className="w-10 h-6 bg-card rounded flex items-center justify-center text-xs font-semibold">
                  MC
                </div>
                <div className="w-10 h-6 bg-card rounded flex items-center justify-center text-xs font-semibold">
                  PP
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              {t("copyright")}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
