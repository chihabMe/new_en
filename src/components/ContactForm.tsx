"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { submitContactAction } from "@/app/actoins/contact-actions";

// French translations for the contact form
const translations = {
  send: "Envoyer",
  message: "Message",
  fullName: "Nom complet",
  email: "Email",
  phone: "Téléphone",
  processing: "En cours...",
  contactError: "Erreur lors de l'envoi du message. Veuillez réessayer.",
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const formData = new FormData(e.currentTarget);
    const result = await submitContactAction({
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phoneNumber: (formData.get("phoneNumber") as string) || undefined,
      message: formData.get("message") as string,
      locale: "fr",
    });

    setIsSubmitting(false);
    if (result?.data?.success) {
      setSubmitMessage(result.data.message);
      (e.target as HTMLFormElement).reset();
    } else {
      setSubmitMessage(result?.data?.message || translations.contactError);
    }
  };

  return (
    <div className="bg-card rounded-xl p-8 border border-border">
      <h2 className="text-2xl font-bold mb-6">
        {translations.send} un {translations.message}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-2">
            {translations.fullName}
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={translations.fullName}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            {translations.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={translations.email}
          />
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium mb-2"
          >
            {translations.phone}
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={translations.phone}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            {translations.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={translations.message}
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700"
        >
          <Send className="w-4 h-4 mr-2" />
          {isSubmitting ? translations.processing : translations.send}
        </Button>

        {submitMessage && (
          <div
            className={`mt-4 p-3 rounded-lg ${
              submitMessage.includes("succès")
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  );
}
