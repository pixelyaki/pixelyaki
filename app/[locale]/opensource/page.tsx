import { promises as fs } from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "iconoir-react";
import { Header } from "@/components/header";
import { getCopy, isLocale, type Locale } from "@/lib/i18n";

type OpenSourceCopy = {
  title: string;
  updatedPrefix: string;
  back: string;
  intro: string;
  columns: {
    library: string;
    usage: string;
    license: string;
    link: string;
  };
  note: string;
  emptyState: string;
  defaultUsage: string;
};

type GeneratedPackage = {
  name: string;
  version: string;
  license: string;
  link: string;
};

type GeneratedLicenseData = {
  generatedAt: string;
  packageCount: number;
  packages: GeneratedPackage[];
};

type LicenseItem = {
  name: string;
  usage: string;
  license: string;
  link: string;
};

const usageHintByPackage: Record<string, string> = {
  next: "Framework",
  react: "UI library",
  "react-dom": "UI renderer",
  tailwindcss: "Styling",
  "qr-code-styling": "QR renderer with logo/style",
  qrcode: "QR utilities",
  typescript: "Type checking",
  eslint: "Linting",
  turbo: "Build task orchestration",
  "iconoir-react": "Icon library"
};

const content: Record<Locale, OpenSourceCopy> = {
  ko: {
    title: "오픈소스 라이선스",
    updatedPrefix: "자동 갱신일:",
    back: "홈으로",
    intro: "Pixelyaki는 아래 오픈소스 라이브러리를 기반으로 제작되었습니다.",
    columns: {
      library: "라이브러리",
      usage: "용도",
      license: "라이선스",
      link: "링크"
    },
    note: "아래 목록은 빌드 시 자동 생성됩니다. 상세 라이선스 조건은 각 공식 저장소를 확인해 주세요.",
    emptyState: "라이선스 목록을 불러오지 못했습니다. 빌드를 다시 실행해 주세요.",
    defaultUsage: "의존성"
  },
  en: {
    title: "Open Source Licenses",
    updatedPrefix: "Auto-updated:",
    back: "Back",
    intro: "Pixelyaki is built with the open-source libraries listed below.",
    columns: {
      library: "Library",
      usage: "Usage",
      license: "License",
      link: "Link"
    },
    note: "This list is generated automatically during build. Please refer to each repository for full license terms.",
    emptyState: "Could not load the license list. Please run build again.",
    defaultUsage: "Dependency"
  },
  zh: {
    title: "开源许可",
    updatedPrefix: "自动更新：",
    back: "返回",
    intro: "Pixelyaki 基于以下开源库构建。",
    columns: {
      library: "库",
      usage: "用途",
      license: "许可证",
      link: "链接"
    },
    note: "该列表会在构建时自动生成。完整许可条款请查看各官方仓库。",
    emptyState: "无法加载许可列表，请重新执行构建。",
    defaultUsage: "依赖项"
  },
  ja: {
    title: "オープンソースライセンス",
    updatedPrefix: "自動更新日：",
    back: "戻る",
    intro: "Pixelyaki は以下のオープンソースライブラリを利用して構築されています。",
    columns: {
      library: "ライブラリ",
      usage: "用途",
      license: "ライセンス",
      link: "リンク"
    },
    note: "この一覧はビルド時に自動生成されます。詳細なライセンス条件は各公式リポジトリをご確認ください。",
    emptyState: "ライセンス一覧を読み込めませんでした。ビルドを再実行してください。",
    defaultUsage: "依存関係"
  },
  es: {
    title: "Licencias Open Source",
    updatedPrefix: "Actualizado automáticamente:",
    back: "Volver",
    intro: "Pixelyaki está construido con las siguientes librerías open source.",
    columns: {
      library: "Librería",
      usage: "Uso",
      license: "Licencia",
      link: "Enlace"
    },
    note: "Esta lista se genera automáticamente durante el build. Consulta cada repositorio para ver los términos completos.",
    emptyState: "No se pudo cargar la lista de licencias. Ejecuta el build nuevamente.",
    defaultUsage: "Dependencia"
  },
  fr: {
    title: "Licences Open Source",
    updatedPrefix: "Mise à jour automatique :",
    back: "Retour",
    intro: "Pixelyaki est construit avec les bibliothèques open source ci-dessous.",
    columns: {
      library: "Bibliothèque",
      usage: "Usage",
      license: "Licence",
      link: "Lien"
    },
    note: "Cette liste est générée automatiquement pendant le build. Consultez chaque dépôt pour les conditions complètes.",
    emptyState: "Impossible de charger la liste des licences. Relancez le build.",
    defaultUsage: "Dépendance"
  },
  de: {
    title: "Open-Source-Lizenzen",
    updatedPrefix: "Automatisch aktualisiert:",
    back: "Zurück",
    intro: "Pixelyaki basiert auf den folgenden Open-Source-Bibliotheken.",
    columns: {
      library: "Bibliothek",
      usage: "Einsatz",
      license: "Lizenz",
      link: "Link"
    },
    note: "Diese Liste wird beim Build automatisch erzeugt. Vollständige Lizenzbedingungen finden Sie in den offiziellen Repositories.",
    emptyState: "Lizenzliste konnte nicht geladen werden. Bitte Build erneut ausführen.",
    defaultUsage: "Abhängigkeit"
  }
};

async function readGeneratedLicenseData(): Promise<GeneratedLicenseData | null> {
  const dataPath = path.join(process.cwd(), "data", "open-source-licenses.json");

  try {
    const raw = await fs.readFile(dataPath, "utf8");
    const parsed = JSON.parse(raw) as Partial<GeneratedLicenseData>;

    if (!Array.isArray(parsed.packages)) {
      return null;
    }

    const packages = parsed.packages
      .filter(
        (item): item is GeneratedPackage =>
          Boolean(
            item &&
              typeof item.name === "string" &&
              typeof item.version === "string" &&
              typeof item.license === "string" &&
              typeof item.link === "string"
          )
      )
      .map((item) => ({
        name: item.name,
        version: item.version,
        license: item.license || "UNKNOWN",
        link: item.link
      }));

    return {
      generatedAt:
        typeof parsed.generatedAt === "string" && parsed.generatedAt
          ? parsed.generatedAt
          : new Date(0).toISOString(),
      packageCount:
        typeof parsed.packageCount === "number" ? parsed.packageCount : packages.length,
      packages
    };
  } catch {
    return null;
  }
}

function formatGeneratedDate(isoDate: string, locale: Locale): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) {
    return "-";
  }

  return new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(date);
}

function toLicenseItems(packages: GeneratedPackage[], defaultUsage: string): LicenseItem[] {
  return packages.map((item) => ({
    name: `${item.name}@${item.version}`,
    usage: usageHintByPackage[item.name] ?? defaultUsage,
    license: item.license,
    link: item.link
  }));
}

type Props = { params: Promise<{ locale: string }> };

export default async function OpenSourcePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = content[locale];
  const headerLabels = getCopy(locale).header;
  const generatedData = await readGeneratedLicenseData();
  const items = generatedData ? toLicenseItems(generatedData.packages, copy.defaultUsage) : [];
  const updatedDate = generatedData
    ? formatGeneratedDate(generatedData.generatedAt, locale)
    : "-";

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 md:py-12">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <Header locale={locale} labels={headerLabels} />
        <div className="border-t border-gray-200 px-6 py-8 dark:border-gray-800 md:px-10 md:py-10">
          <Link
            href={`/${locale}`}
            className="mb-6 inline-flex items-center gap-1.5 text-xs text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-gray-100"
          >
            <ArrowLeft width={14} height={14} aria-hidden />
            {copy.back}
          </Link>
          <h1 className="mb-1 text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {copy.title}
          </h1>
          <p className="mb-2 text-xs text-gray-400 dark:text-gray-500">
            {copy.updatedPrefix} {updatedDate}
          </p>
          <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            {copy.intro}
          </p>

          {items.length > 0 ? (
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-950 dark:text-gray-400">
                  <tr>
                    <th className="px-4 py-3">{copy.columns.library}</th>
                    <th className="px-4 py-3">{copy.columns.usage}</th>
                    <th className="px-4 py-3">{copy.columns.license}</th>
                    <th className="px-4 py-3">{copy.columns.link}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {items.map((item) => (
                    <tr key={item.name} className="align-top">
                      <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
                        {item.name}
                      </td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                        {item.usage}
                      </td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                        {item.license}
                      </td>
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
          ) : (
            <p className="rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400">
              {copy.emptyState}
            </p>
          )}

          <p className="mt-5 text-xs text-gray-500 dark:text-gray-400">{copy.note}</p>
        </div>
      </div>
    </main>
  );
}
