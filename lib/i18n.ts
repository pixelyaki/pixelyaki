import { FullTranslation, SeoCopy } from "./i18n/types";
import { ko } from "./i18n/locales/ko";
import { en } from "./i18n/locales/en";
import { zh } from "./i18n/locales/zh";
import { ja } from "./i18n/locales/ja";
import { es } from "./i18n/locales/es";
import { fr } from "./i18n/locales/fr";
import { de } from "./i18n/locales/de";
import { ru } from "./i18n/locales/ru";
import { ar } from "./i18n/locales/ar";
import { hi } from "./i18n/locales/hi";
import { id } from "./i18n/locales/id";
import { it } from "./i18n/locales/it";
import { pt } from "./i18n/locales/pt";
import { th } from "./i18n/locales/th";

export const locales = ["ko", "en", "zh", "ja", "es", "fr", "de", "ru", "ar", "hi", "id", "it", "pt", "th"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function detectLocaleFromAcceptLanguage(
  acceptLanguageHeader: string | null | undefined
): Locale {
  if (!acceptLanguageHeader) {
    return defaultLocale;
  }

  const candidates = acceptLanguageHeader
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase())
    .filter((part): part is string => Boolean(part));

  for (const candidate of candidates) {
    const normalized = candidate.replace("_", "-");
    if (isLocale(normalized)) {
      return normalized;
    }

    const baseLocale = normalized.split("-")[0];
    if (isLocale(baseLocale)) {
      return baseLocale;
    }
  }

  return defaultLocale;
}

export const rtlLocales = new Set<Locale>(["ar"]);

export function isRtlLocale(locale: Locale): boolean {
  return rtlLocales.has(locale);
}

export const localeDisplayNames: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  zh: "中文",
  ja: "日本語",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  ru: "Русский",
  ar: "العربية",
  hi: "हिन्दी",
  id: "Indonesia",
  it: "Italiano",
  pt: "Português",
  th: "ภาษาไทย"
};

const fullTranslationsByLocale: Record<Locale, FullTranslation> = {
  ko, en, zh, ja, es, fr, de, ru, ar, hi, id, it, pt, th
};

export function getFullTranslations(locale: Locale): FullTranslation {
  return fullTranslationsByLocale[locale];
}

/**
 * @deprecated Use getFullTranslations(locale) instead
 */
export function getCopy(locale: Locale) {
  return fullTranslationsByLocale[locale];
}

/**
 * @deprecated Use getFullTranslations(locale).seo instead
 */
export function getSeoCopy(locale: Locale): SeoCopy {
  return fullTranslationsByLocale[locale].seo;
}
