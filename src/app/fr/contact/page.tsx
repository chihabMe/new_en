import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Flynix - Votre partenaire streaming IPTV",
  description:
    "Contactez l'équipe Flynix pour toute question sur nos services IPTV. Support technique, abonnements et assistance disponible 24/7.",
  openGraph: {
    title: "Contact Flynix - Votre partenaire streaming IPTV",
    description:
      "Contactez l'équipe Flynix pour toute question sur nos services IPTV. Support technique, abonnements et assistance disponible 24/7.",
    url: "https://flynix.com/fr/contact",
    siteName: "Flynix",
    locale: "fr_FR",
  },
};

export default function FrenchContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contactez Flynix
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Notre équipe d'experts est là pour vous aider avec toutes vos
              questions sur nos services IPTV
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ContactForm />

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <Mail className="w-6 h-6 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    Support par email
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Contactez-nous par email pour toute question
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
                    Support WhatsApp
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Assistance rapide via WhatsApp
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
