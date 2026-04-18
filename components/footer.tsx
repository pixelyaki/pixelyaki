import Link from "next/link";
import { localeDisplayNames, locales, type Locale } from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
  labels: {
    privacy: string;
    terms: string;
    contact: string;
    ga4: string;
    copyright: string;
  };
};

export function Footer({ locale, labels }: FooterProps) {
  return (
    <footer className="space-y-2">
      <p>{labels.ga4}</p>
      <p className="font-medium text-slate-700">
        <a className="hover:text-[#1e4ed8]" href="#">
          {labels.privacy}
        </a>{" "}
        ·{" "}
        <a className="hover:text-[#1e4ed8]" href="#">
          {labels.terms}
        </a>{" "}
        ·{" "}
        <a className="hover:text-[#1e4ed8]" href="#">
          {labels.contact}
        </a>
      </p>
      <p>
        {locales.map((code, index) => (
          <span key={code}>
            <Link className="hover:text-[#1e4ed8]" href={`/${code}`}>
              {localeDisplayNames[code]}
            </Link>
            {index === locales.length - 1 ? "" : " · "}
          </span>
        ))}
      </p>
      <p>
        {labels.copyright} · {locale.toUpperCase()}
      </p>
    </footer>
  );
}
