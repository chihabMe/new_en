import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import ChannelPreview from "@/components/channel-preview";
import Pricing from "@/components/pricing";
import DeviceCompatibility from "@/components/device-compatibility";
import FAQ from "@/components/faq";
import CTABanner from "@/components/cta-banner";
import Footer from "@/components/footer";
import ContactModal from "@/components/modals/ContactModal";

export default function FrenchHome() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="content">
        <ChannelPreview />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <DeviceCompatibility />
      <section id="faq">
        <FAQ />
      </section>
      <CTABanner />
      <Footer />
      <ContactModal />
    </main>
  );
}

export async function generateMetadata() {
  return {
    title: "Flynix - Plateforme de Streaming Premium",
    description:
      "Service de streaming premium avec des milliers de films et séries TV",
    alternates: {
      canonical: "https://flynix.com/fr",
      languages: {
        en: "https://flynix.com",
        fr: "https://flynix.com/fr",
      },
    },
  };
}
