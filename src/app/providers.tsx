"use client";

import { ThemeProvider } from "next-themes";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { LanguageProvider } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/types";

export function Providers({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange storageKey="theme">
      <LanguageProvider initialLocale={initialLocale}>
        {children}
        <Sonner />
      </LanguageProvider>
    </ThemeProvider>
  );
}
