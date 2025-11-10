import type React from "react";
import Script from "next/script";
import type { Metadata } from "next";
import ConditionalAnalytics from "@/components/ConditionalAnalytics";
import Providers from "@/components/Providers";
import { LocaleProvider } from "@/hooks/useLocale";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flynix - Premium Streaming Platform",
  description:
    "Premium streaming service with thousands of movies and TV shows",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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

        <Providers>
          <LocaleProvider>{children}</LocaleProvider>
        </Providers>
        <ConditionalAnalytics />
      </body>
    </html>
  );
}
