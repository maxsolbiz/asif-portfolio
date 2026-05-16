"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "ar", label: "AR", name: "العربية" },
  { code: "ur", label: "UR", name: "اردو" },
  { code: "ro", label: "RO", name: "Română" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLanguage = (newLocale: string) => {
    if (newLocale === locale) return;
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    startTransition(() => router.replace(newPath));
  };

  return (
    <div className="flex items-center gap-1.5 bg-white/5 border border-gold/20 rounded-full px-3 py-1.5">
      <Globe className="w-3.5 h-3.5 text-gold" />
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => switchLanguage(lang.code)}
          disabled={isPending}
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
