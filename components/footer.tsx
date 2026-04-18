import Link from "next/link";
import { localeDisplayNames, locales, type Locale } from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
  labels: {
    privacy: string;
    terms: string;
    openSource: string;
    copyright: string;
    trademark: string;
  };
};

export function Footer({ locale, labels }: FooterProps) {
  return (
    <footer className="px-6 py-5 md:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-4 text-xs text-neutral-400 dark:text-neutral-500">
          <Link className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100" href={`/${locale}/privacy`}>
            {labels.privacy}
          </Link>
          <Link className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100" href={`/${locale}/terms`}>
            {labels.terms}
          </Link>
          <Link className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100" href={`/${locale}/opensource`}>
            {labels.openSource}
          </Link>
        </div>
        <div className="flex flex-wrap gap-3 text-xs text-neutral-400 dark:text-neutral-500">
          {locales.map((code) => (
            <Link key={code} className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100" href={`/${code}`}>
              {localeDisplayNames[code]}
            </Link>
          ))}
          <span className="text-neutral-300 dark:text-neutral-700">·</span>
          <span>{labels.copyright}</span>
        </div>
      </div>
      <p className="mt-3 text-xs text-neutral-400 dark:text-neutral-600">{labels.trademark}</p>
    </footer>
  );
}
