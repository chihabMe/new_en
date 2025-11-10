"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useLocale } from "@/hooks/useLocale";
import { submitContactAction } from "@/app/actoins/contact-actions";

export default function FrenchContactPage() {
  const { t } = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const formData = new FormData(e.currentTarget);
    const result = await submitContactAction({
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phoneNumber: (formData.get("phoneNumber") as string) || undefined,
      message: formData.get("message") as string,
      locale: "fr",
    });

    setIsSubmitting(false);
    if (result?.data?.success) {
      setSubmitMessage(result.data.message);
      (e.target as HTMLFormElement).reset();
    } else {
      setSubmitMessage(result?.data?.message || t("contactError"));
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("contactTitle")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("contactSubtitle")}
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-bold mb-6">
                  {t("send")} {t("message")}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("fullName")}
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t("fullName")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("email")}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t("email")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("phone")}
                    </label>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t("phone")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t("message")}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? t("processing") : t("send")}
                  </Button>

                  {submitMessage && (
                    <div
                      className={`mt-4 p-3 rounded-lg ${submitMessage.includes("succès") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                    >
                      {submitMessage}
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <Mail className="w-6 h-6 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    {t("emailSupport")}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {t("emailDescription")}
                  </p>
                  <a
                    href="mailto:support@flynix.com"
                    className="text-blue-600 hover:underline"
                  >
                    support@flynix.com
                  </a>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <MessageCircle className="w-6 h-6 text-green-600 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    {t("whatsappSupport")}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {t("whatsappDescription")}
                  </p>
                  <a
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSUP_NUMBER}`}
                    className="text-green-600 hover:underline"
                  >
                    WhatsApp
                  </a>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <Clock className="w-6 h-6 text-purple-600 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    Heures d'ouverture
                  </h3>
                  <p className="text-muted-foreground">
                    Lun - Ven: 9h00 - 18h00
                    <br />
                    Sam - Dim: 10h00 - 16h00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: "Contact - Flynix",
    description: "Contactez notre équipe de support pour toute question",
    alternates: {
      canonical: "https://flynix.com/fr/contact",
      languages: {
        en: "https://flynix.com/contact",
        fr: "https://flynix.com/fr/contact",
      },
    },
  };
}
