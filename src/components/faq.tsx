"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import faqData from "@/data/faq.json";
import { useLocale } from "@/hooks/useLocale";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(0);
  const { t } = useLocale();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("faqTitle")}
          </h2>
          <p className="text-xl text-muted-foreground">{t("faqSubtitle")}</p>
        </div>

        <div className="space-y-4">
          {faqData.questions.map((faq, index) => (
            <div
              key={faq.id}
              className="border border-border rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenId(openId === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-card/80 transition-colors"
              >
                <h3 className="font-semibold text-left">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-blue-500 flex-shrink-0 transition-transform duration-300 ${
                    openId === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openId === index && (
                <div className="px-6 py-4 bg-background border-t border-border">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
