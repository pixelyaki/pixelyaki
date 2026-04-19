import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { defaultLocale, getSeoCopy, isLocale, isRtlLocale, locales } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";
import { HtmlDirSetter } from "@/components/html-dir-setter";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: Omit<LocaleLayoutProps, "children">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const seo = getSeoCopy(locale);
  const siteUrl = getSiteUrl();
  const canonicalPath = `/${locale}`;
  const languageAlternates = Object.fromEntries(
    locales.map((code) => [code, `/${code}`])
  ) as Record<string, string>;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        ...languageAlternates,
        "x-default": `/${defaultLocale}`
      }
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: new URL(canonicalPath, siteUrl).toString(),
      siteName: "Pixelyaki",
      type: "website"
    },
    twitter: {
      card: "summary",
      title: seo.title,
      description: seo.description
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dir = isRtlLocale(locale) ? "rtl" : "ltr";

  return (
    <>
      <HtmlDirSetter dir={dir} lang={locale} />
      {children}
    </>
  );
}
