import Link from "next/link";
import Image from "next/image";
import { type Locale } from "@/lib/i18n";

type HeaderProps = {
  locale: Locale;
  labels: {
    logo: string;
    generate: string;
  };
};

export function Header({ locale, labels }: HeaderProps) {
  return (
    <header className="flex items-center justify-between gap-3 px-5 py-3 md:px-6">
      <div className="shrink-0">
        <Link href={`/${locale}`} aria-label={labels.logo}>
          <Image
            src="/logo.svg"
            alt={labels.logo}
            width={162}
            height={20}
            priority
            className="h-5 w-auto dark:invert"
          />
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <a
          className="shrink-0 rounded-md bg-blue-700 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-800 whitespace-nowrap"
          href="#generator"
        >
          {labels.generate}
        </a>
      </div>
    </header>
  );
}
