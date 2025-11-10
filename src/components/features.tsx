"use client";

import {
  Tv,
  Zap,
  Shield,
  Smartphone,
  RefreshCw,
  Headphones,
} from "lucide-react";
import { useLocale } from "@/hooks/useLocale";

export default function Features() {
  const { t } = useLocale();

  const features = [
    {
      icon: Tv,
      title: t("feature1Title"),
      description: t("feature1Description"),
    },
    {
      icon: Headphones,
      title: t("feature2Title"),
      description: t("feature2Description"),
    },
    {
      icon: Zap,
      title: t("feature3Title"),
      description: t("feature3Description"),
    },
    {
      icon: Smartphone,
      title: t("feature4Title"),
      description: t("feature4Description"),
    },
    {
      icon: RefreshCw,
      title: t("feature5Title"),
      description: t("feature5Description"),
    },
    {
      icon: Shield,
      title: t("feature6Title"),
      description: t("feature6Description"),
    },
  ];

  return (
    <section id="features" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("featuresTitle")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("featuresSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-xl bg-background border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="mb-4 inline-block p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
