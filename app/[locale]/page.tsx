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
  const shellSectionClass =
    "rounded-[20px] border border-blue-100 bg-white shadow-[0_8px_30px_rgba(20,45,95,0.08)] motion-safe:animate-[rise-in_360ms_ease_both]";

  return (
    <main className="mx-auto max-w-[1180px] px-3 py-6 sm:px-6">
      <section className={`${shellSectionClass} mt-0`}>
        <Header locale={locale} labels={copy.header} />
      </section>

      <section className={`${shellSectionClass} mt-7`}>
        <HeroSection copy={copy.hero} />
      </section>

      <section className={`${shellSectionClass} mt-7`}>
        <QrStudio copy={copy.studio} />
      </section>

      <section className={`${shellSectionClass} mt-7`}>
        <FeatureGrid items={copy.features} />
      </section>

      <section className={`${shellSectionClass} mt-7`}>
        <FaqSection items={copy.faq} title={copy.faqTitle} />
      </section>

      <section className={`${shellSectionClass} mt-7 px-5 py-5 text-center text-sm text-slate-600`}>
        <Footer locale={locale} labels={copy.footer} />
      </section>
    </main>
  );
}
