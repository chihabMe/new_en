"use client";

import { useRouter, usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import {
  getLocaleFromPathname,
  getLocalizedPathname,
  getPathnameWithoutLocale,
} from "@/lib/i18n";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = getLocaleFromPathname(pathname);

  const switchLanguage = (newLocale: "en" | "fr") => {
    if (newLocale === currentLocale) return;

    const cleanPathname = getPathnameWithoutLocale(pathname);
    const newPathname = getLocalizedPathname(cleanPathname, newLocale);

    router.push(newPathname);
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4" />
      <select
        value={currentLocale}
        onChange={(e) => switchLanguage(e.target.value as "en" | "fr")}
        className="bg-transparent border-none text-sm cursor-pointer focus:outline-none"
      >
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </select>
    </div>
  );
}
