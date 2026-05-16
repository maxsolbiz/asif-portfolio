"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "ar", label: "AR", name: "العربية" },
  { code: "ur", label: "UR", name: "اردو" },
  { code: "ro", label: "RO", name: "Română" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLocale: string) => {
    if (newLocale === locale) return;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-1.5 bg-white/5 border border-gold/20 rounded-full px-3 py-1.5">
      <Globe className="w-3.5 h-3.5 text-gold" />
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => switchLanguage(lang.code)}
          className={`text-xs px-2 py-1 rounded-full transition-all font-medium ${
            locale === lang.code
              ? "bg-gold text-midnight"
              : "text-text-muted hover:text-gold"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
