import { notFound } from "next/navigation";
import { FaqSection } from "@/components/faq-section";
import { FeatureGrid } from "@/components/feature-grid";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { QrStudio } from "@/components/qr-studio";
import { getCopy, isLocale } from "@/lib/i18n";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getCopy(locale);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 md:py-12">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm motion-safe:animate-[rise-in_360ms_ease_both] dark:border-gray-800 dark:bg-gray-900">
        <Header locale={locale} labels={copy.header} />
        <div className="border-t border-gray-200 dark:border-gray-800">
          <HeroSection copy={copy.hero} />
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800">
          <QrStudio copy={copy.studio} />
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800">
          <FeatureGrid items={copy.features} />
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800">
          <FaqSection items={copy.faq} title={copy.faqTitle} />
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800">
          <Footer locale={locale} labels={copy.footer} />
        </div>
      </div>
    </main>
  );
}
