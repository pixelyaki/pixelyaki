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
  const linkBase =
    "rounded-full border px-2.5 py-1.5 text-sm font-medium transition-colors duration-150 whitespace-nowrap";

  return (
    <header className="flex items-center justify-between gap-3 px-5 py-4">
      <div className="shrink-0">
        <Link href={`/${locale}`} aria-label={labels.logo}>
          <Image
            src="/logo.svg"
            alt={labels.logo}
            width={162}
            height={20}
            priority
            className="h-6 w-auto md:h-7"
          />
        </Link>
      </div>
      <a
        className={`${linkBase} shrink-0 border-transparent bg-blue-700 text-center text-white hover:bg-blue-800`}
        href="#generator"
      >
        {labels.generate}
      </a>
    </header>
  );
}
