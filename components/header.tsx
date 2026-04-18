import Link from "next/link";
import { localeDisplayNames, locales, type Locale } from "@/lib/i18n";

type HeaderProps = {
  locale: Locale;
  labels: {
    logo: string;
    generate: string;
  };
};

export function Header({ locale, labels }: HeaderProps) {
  const linkBase =
    "rounded-full border px-2.5 py-1.5 text-sm font-medium transition-colors duration-150";

  return (
    <header className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
      <div className="font-[var(--font-heading)] text-lg font-bold tracking-[-0.01em]">{labels.logo}</div>
      <nav className="flex flex-wrap gap-2" aria-label="Language switcher">
        {locales.map((code) => (
          <Link
            key={code}
            href={`/${code}`}
            className={`${linkBase} ${
              code === locale
                ? "border-transparent bg-[#2b6bff] text-white"
                : "border-[#dbe6ff] text-slate-600 hover:border-[#a6bbf7] hover:text-slate-900"
            }`}
          >
            {localeDisplayNames[code]}
          </Link>
        ))}
      </nav>
      <a
        className={`${linkBase} border-transparent bg-[#2b6bff] text-white hover:bg-[#1e4ed8]`}
        href="#generator"
      >
        {labels.generate}
      </a>
    </header>
  );
}
