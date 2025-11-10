import type React from "react";
import Script from "next/script";
import type { Metadata } from "next";
import ConditionalAnalytics from "@/components/ConditionalAnalytics";
import Providers from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flynix - Divertissement Premium",
  description:
    "Service de divertissement premium avec des milliers de contenus et de médias",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans antialiased`}>
        {/* Google Ads Global Tag - Load First */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17659093090"
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17659093090');
          `}
        </Script>

        <Providers>{children}</Providers>
        <ConditionalAnalytics />
      </body>
    </html>
  );
}
