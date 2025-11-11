import type React from "react";
import { LocaleProvider } from "@/hooks/useLocale";

export default function FrenchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
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
