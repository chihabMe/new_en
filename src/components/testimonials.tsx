"use client";

import { Star } from "lucide-react";
import { useLocale } from "@/hooks/useLocale";

export default function Testimonials() {
  const { t, locale } = useLocale();
  
  const testimonials = locale === 'en' ? [
    {
      name: "John Smith",
      role: "Premium Member",
      content: "Flynix completely changed how I watch content. The quality is incredible and the service is so reliable!",
      rating: 5,
      avatar: "/user-avatar-1.png",
    },
    {
      name: "Sarah Johnson",
      role: "Annual Subscriber",
      content: "The best service I've tried. Customer support is great and access never lags.",
      rating: 5,
      avatar: "/diverse-user-avatar-set-2.png",
    },
    {
      name: "Mike Davis",
      role: "Family Plan User",
      content: "Perfect for my whole family. We can watch different things simultaneously without any problems.",
      rating: 5,
      avatar: "/diverse-user-avatars-3.png",
    },
  ] : [
    {
      name: "Jean Dupont",
      role: "Membre Premium",
      content: "Flynix a complètement changé ma façon de regarder des contenus. La qualité est incroyable et le service est si fiable!",
      rating: 5,
      avatar: "/user-avatar-1.png",
    },
    {
      name: "Marie Martin",
      role: "Abonnée Annuelle",
      content: "Le meilleur service que j'ai essayé. Le support client est formidable et l'accès ne rame jamais.",
      rating: 5,
      avatar: "/diverse-user-avatar-set-2.png",
    },
    {
      name: "Pierre Moreau",
      role: "Utilisateur Plan Familial",
      content: "Parfait pour toute ma famille. Nous pouvons regarder différentes choses simultanément sans aucun problème.",
      rating: 5,
      avatar: "/diverse-user-avatars-3.png",
    },
  ];
  return (
    <section className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("testimonialsTitle")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("testimonialsSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-background border border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground">{testimonial.content}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">99.9%</div>
            <p className="text-sm text-muted-foreground">Uptime Guarantee</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">50K+</div>
            <p className="text-sm text-muted-foreground">Active Users</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">24/7</div>
            <p className="text-sm text-muted-foreground">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
