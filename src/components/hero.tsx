"use client";

import { Button } from "@/components/ui/button";
import { Play, Zap } from "lucide-react";
import Image from "next/image";
import { useLocale } from "@/hooks/useLocale";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/background.webp"
          alt="Premium streaming background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-center">
          {/* Centered Content */}
          <div className="space-y-8 max-w-2xl text-center">
            <div className="space-y-4">
              {/* Free Trial Highlight Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 text-sm font-medium text-blue-400 backdrop-blur-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span>{t("freeTrialBadge")}</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
                {t("heroTitle")}
              </h1>
              <p className="text-xl text-muted-foreground text-balance">
                {t("heroSubtitle")}
              </p>

              {/* Pricing Information */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 backdrop-blur-sm border-2 border-green-500 rounded-lg px-6 py-4 relative">
                  <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse shadow-lg">
                    SAVE $8
                  </div>
                  <div className="text-sm text-muted-foreground">Standard</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-lg text-muted-foreground line-through">
                      $60
                    </span>
                    <span className="text-3xl font-bold text-green-400">
                      $52
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    12 months
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-sm border-2 border-blue-500 rounded-lg px-6 py-4 relative">
                  <div className="absolute -top-3 -right-3 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse shadow-lg">
                    SAVE $20
                  </div>
                  <div className="text-sm text-blue-400 font-semibold">
                    Premium
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-lg text-muted-foreground line-through">
                      $100
                    </span>
                    <span className="text-3xl font-bold text-blue-400">
                      $80
                    </span>
                  </div>
                  <div className="text-xs text-blue-300 mt-1">12 months</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white gap-2 relative overflow-hidden group"
                onClick={() => {
                  // First scroll to pricing section
                  document
                    .getElementById("pricing")
                    ?.scrollIntoView({ behavior: "smooth" });

                  // Then after a short delay, scroll to the specific free trial card
                  setTimeout(() => {
                    document
                      .getElementById("free-trial")
                      ?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }, 500);
                }}
              >
                <Play size={20} />
                <span>{t("startFreeTrial")}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10"
                onClick={() =>
                  document
                    .getElementById("pricing")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Zap size={20} />
                {t("learnMore")}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground font-medium">
                  7 days free
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="text-sm text-muted-foreground">
                  99.9% Uptime
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="text-sm text-muted-foreground">
                  4K Quality
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="text-sm text-muted-foreground">
                  24/7 Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
