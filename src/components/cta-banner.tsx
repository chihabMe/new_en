"use client";

import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500/20 via-blue-500/10 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Enjoy Premium Service?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers enjoying unlimited
            entertainment today.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
            onClick={() =>
              document
                .getElementById("pricing")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Zap size={20} />
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
}
