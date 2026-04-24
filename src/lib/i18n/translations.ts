import { en } from "./en";
import { pt } from "./pt";
import { fr } from "./fr";
import type { Locale, Translation } from "./types";

export const translations: Record<Locale, Translation> = {
  en,
  pt,
  fr,
};

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "pt" || value === "fr";
}

export function normalizeLocale(value: unknown): Locale {
  return isLocale(value) ? value : "en";
}
