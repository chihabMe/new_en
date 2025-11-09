"use client";

import { Button } from "@/components/ui/button";
import { Play, Zap } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
                <span>🚀 Free 1-hour trial available</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
                Discover Premium Entertainment in 4K
              </h1>
              <p className="text-xl text-muted-foreground text-balance">
                Enjoy ultra-fast service, 99.9% uptime, and 24/7 support — 
                anywhere, anytime.
              </p>
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
                <span>Start Free Trial</span>
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
                View Plans
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
