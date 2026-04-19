import { notFound } from "next/navigation";
import { FaqSection } from "@/components/faq-section";
import { FeatureGrid } from "@/components/feature-grid";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { QrStudio } from "@/components/qr-studio";
import { getCopy, isLocale } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getCopy(locale);
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/${locale}`;

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": copy.seo.title,
    "description": copy.seo.description,
    "url": pageUrl,
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": copy.faq.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pixelyaki",
    "url": siteUrl,
    "logo": `${siteUrl}/android-chrome-512x512.png`
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 md:py-12">
      <JsonLd data={webAppSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={orgSchema} />
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm motion-safe:animate-[rise-in_360ms_ease_both] dark:border-neutral-800 dark:bg-neutral-900">
        <Header locale={locale} labels={copy.header} />
        <div className="border-t border-neutral-200 dark:border-neutral-800">
          <HeroSection copy={copy.hero} />
        </div>
        <div className="border-t border-neutral-200 dark:border-neutral-800">
          <QrStudio translations={copy} locale={locale} />
        </div>
        <div className="border-t border-neutral-200 dark:border-neutral-800">
          <FeatureGrid items={copy.features} />
        </div>
        <div className="border-t border-neutral-200 dark:border-neutral-800">
          <FaqSection items={copy.faq} title={copy.faqTitle} />
        </div>
        <div className="border-t border-neutral-200 dark:border-neutral-800">
          <Footer locale={locale} labels={copy.footer} />
        </div>
      </div>
    </main>
  );
}
