"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import pricingData from "@/data/pricing.json";
import SubscriptionModal from "@/components/modals/SubscriptionModal";

interface PricingPlan {
  id: string;
  name: string;
  price: string | number;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  const handleSubscribe = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <section id="ultimate-pricing" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple and Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that suits you best
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingData.plans.map((plan, index) => (
            <div
              key={plan.id}
              id={plan.id === "Free-Trial" ? "free-trial" : undefined}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500 shadow-lg shadow-blue-500/20 md:scale-105"
                  : "bg-background border border-border hover:border-blue-500/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  {plan.description}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    {typeof plan.price === "number" && plan.price === 0
                      ? "Gratuit"
                      : `€${plan.price}`}
                  </span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleSubscribe(plan)}
                className={`w-full ${
                  plan.highlighted
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                    : "bg-primary hover:bg-primary/90 text-primary-foreground"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {selectedPlan && (
        <SubscriptionModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedPlan(null);
          }}
          plan={{
            ...selectedPlan,
            price:
              typeof selectedPlan.price === "string"
                ? parseFloat(selectedPlan.price)
                : selectedPlan.price,
          }}
        />
      )}
    </section>
  );
}
