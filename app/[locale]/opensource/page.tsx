import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { getCopy, isLocale, type Locale } from "@/lib/i18n";

type OpenSourceCopy = {
  title: string;
  updated: string;
  back: string;
  intro: string;
  columns: {
    library: string;
    usage: string;
    license: string;
    link: string;
  };
  note: string;
};

type LicenseItem = {
  name: string;
  usage: string;
  license: string;
  link: string;
};

const licenseItems: LicenseItem[] = [
  {
    name: "Next.js",
    usage: "Framework",
    license: "MIT",
    link: "https://github.com/vercel/next.js"
  },
  {
    name: "React / React DOM",
    usage: "UI library",
    license: "MIT",
    link: "https://github.com/facebook/react"
  },
  {
    name: "Tailwind CSS",
    usage: "Styling",
    license: "MIT",
    link: "https://github.com/tailwindlabs/tailwindcss"
  },
  {
    name: "qr-code-styling",
    usage: "QR renderer with logo/style",
    license: "MIT",
    link: "https://github.com/kozakdenys/qr-code-styling"
  },
  {
    name: "qrcode",
    usage: "QR module sizing / utilities",
    license: "MIT",
    link: "https://github.com/soldair/node-qrcode"
  },
  {
    name: "TypeScript",
    usage: "Type checking",
    license: "Apache-2.0",
    link: "https://github.com/microsoft/TypeScript"
  },
  {
    name: "ESLint",
    usage: "Linting",
    license: "MIT",
    link: "https://github.com/eslint/eslint"
  },
  {
    name: "Turborepo (Turbo)",
    usage: "Build task orchestration",
    license: "MIT",
    link: "https://github.com/vercel/turborepo"
  }
];

const content: Record<Locale, OpenSourceCopy> = {
  ko: {
    title: "오픈소스 라이선스",
    updated: "최종 수정일: 2026년 4월 18일",
    back: "← 홈으로",
    intro: "Pixelyaki는 아래 오픈소스 라이브러리를 기반으로 제작되었습니다.",
    columns: {
      library: "라이브러리",
      usage: "용도",
      license: "라이선스",
      link: "링크"
    },
    note: "각 라이브러리의 상세 라이선스 조건은 공식 저장소를 확인해 주세요."
  },
  en: {
    title: "Open Source Licenses",
    updated: "Last updated: April 18, 2026",
    back: "← Back",
    intro: "Pixelyaki is built with the open-source libraries listed below.",
    columns: {
      library: "Library",
      usage: "Usage",
      license: "License",
      link: "Link"
    },
    note: "Please refer to each official repository for full license terms."
  },
  zh: {
    title: "开源许可",
    updated: "最后更新：2026年4月18日",
    back: "← 返回",
    intro: "Pixelyaki 基于以下开源库构建。",
    columns: {
      library: "库",
      usage: "用途",
      license: "许可证",
      link: "链接"
    },
    note: "完整许可条款请查看各官方仓库。"
  },
  ja: {
    title: "オープンソースライセンス",
    updated: "最終更新日：2026年4月18日",
    back: "← 戻る",
    intro: "Pixelyaki は以下のオープンソースライブラリを利用して構築されています。",
    columns: {
      library: "ライブラリ",
      usage: "用途",
      license: "ライセンス",
      link: "リンク"
    },
    note: "ライセンスの詳細は各公式リポジトリをご確認ください。"
  },
  es: {
    title: "Licencias Open Source",
    updated: "Última actualización: 18 de abril de 2026",
    back: "← Volver",
    intro: "Pixelyaki está construido con las siguientes librerías open source.",
    columns: {
      library: "Librería",
      usage: "Uso",
      license: "Licencia",
      link: "Enlace"
    },
    note: "Consulta cada repositorio oficial para ver los términos completos de licencia."
  },
  fr: {
    title: "Licences Open Source",
    updated: "Dernière mise à jour : 18 avril 2026",
    back: "← Retour",
    intro: "Pixelyaki est construit avec les bibliothèques open source ci-dessous.",
    columns: {
      library: "Bibliothèque",
      usage: "Usage",
      license: "Licence",
      link: "Lien"
    },
    note: "Veuillez consulter chaque dépôt officiel pour les conditions complètes de licence."
  },
  de: {
    title: "Open-Source-Lizenzen",
    updated: "Letzte Aktualisierung: 18. April 2026",
    back: "← Zurück",
    intro: "Pixelyaki basiert auf den folgenden Open-Source-Bibliotheken.",
    columns: {
      library: "Bibliothek",
      usage: "Einsatz",
      license: "Lizenz",
      link: "Link"
    },
    note: "Die vollständigen Lizenzbedingungen finden Sie in den offiziellen Repositories."
  }
};

type Props = { params: Promise<{ locale: string }> };

export default async function OpenSourcePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = content[locale];
  const headerLabels = getCopy(locale).header;

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 md:py-12">
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <Header locale={locale} labels={headerLabels} />
        <div className="border-t border-neutral-200 px-6 py-8 dark:border-neutral-800 md:px-10 md:py-10">
          <Link
            href={`/${locale}`}
            className="mb-6 inline-block text-xs text-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            {copy.back}
          </Link>
          <h1 className="mb-1 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            {copy.title}
          </h1>
          <p className="mb-2 text-xs text-neutral-400 dark:text-neutral-500">{copy.updated}</p>
          <p className="mb-6 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{copy.intro}</p>

          <div className="overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-800">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-neutral-50 text-xs uppercase tracking-wider text-neutral-500 dark:bg-neutral-950 dark:text-neutral-400">
                <tr>
                  <th className="px-4 py-3">{copy.columns.library}</th>
                  <th className="px-4 py-3">{copy.columns.usage}</th>
                  <th className="px-4 py-3">{copy.columns.license}</th>
                  <th className="px-4 py-3">{copy.columns.link}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
                {licenseItems.map((item) => (
                  <tr key={item.name} className="align-top">
                    <td className="px-4 py-3 font-medium text-neutral-900 dark:text-neutral-100">{item.name}</td>
                    <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">{item.usage}</td>
                    <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">{item.license}</td>
                    <td className="px-4 py-3">
                      <a
                        className="text-blue-700 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.link}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-xs text-neutral-500 dark:text-neutral-400">{copy.note}</p>
        </div>
      </div>
    </main>
  );
}
