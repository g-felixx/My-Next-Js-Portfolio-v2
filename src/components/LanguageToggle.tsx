"use client";

import { Check, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/types";

const LOCALE_CODES: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
  fr: "FR",
};

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label={t.languageToggle.label}
          title={t.languageToggle.label}
          className="inline-flex items-center gap-1.5 rounded-lg px-2 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground transition-all duration-300 hover:bg-white/10 hover:text-foreground active:scale-95"
        >
          <Globe className="h-4 w-4" />
          <span>{LOCALE_CODES[locale]}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={10}
        className="min-w-[10rem] rounded-xl border border-white/10 bg-background/95 p-1.5 shadow-accent-card backdrop-blur-xl"
      >
        {t.languageToggle.options.map((option) => {
          const isActive = option.code === locale;
          return (
            <DropdownMenuItem
              key={option.code}
              onSelect={() => setLocale(option.code)}
              className={`flex cursor-pointer items-center justify-between gap-4 rounded-lg px-3 py-2 text-sm font-medium transition-colors focus:outline-none ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/80 hover:bg-white/5 hover:text-foreground"
              }`}
            >
              <div className="flex flex-col">
                <span className="text-sm font-semibold leading-none">
                  {option.nativeLabel}
                </span>
                <span className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {option.code}
                </span>
              </div>
              {isActive && <Check className="h-4 w-4 text-primary" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
