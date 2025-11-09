import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import ChannelPreview from "@/components/channel-preview";
import Pricing from "@/components/pricing";
import DeviceCompatibility from "@/components/device-compatibility";
// import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import CTABanner from "@/components/cta-banner";
import Footer from "@/components/footer";
import ContactModal from "@/components/modals/ContactModal";

export default function Home() {
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
      {/* <Testimonials /> */}
      <section id="faq">
        <FAQ />
      </section>
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Contact Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a question? Need help? Our team is here to support you.
            </p>
            <ContactModal />
          </div>
        </div>
      </section>
      <CTABanner />
      <Footer />
    </main>
  );
}
