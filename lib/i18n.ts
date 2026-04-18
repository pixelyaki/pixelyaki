export const locales = ["ko", "en", "zh", "ja", "es", "fr", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ko";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function detectLocaleFromAcceptLanguage(
  acceptLanguageHeader: string | null | undefined
): Locale {
  if (!acceptLanguageHeader) {
    return defaultLocale;
  }

  const candidates = acceptLanguageHeader
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase())
    .filter((part): part is string => Boolean(part));

  for (const candidate of candidates) {
    const normalized = candidate.replace("_", "-");
    if (isLocale(normalized)) {
      return normalized;
    }

    const baseLocale = normalized.split("-")[0];
    if (isLocale(baseLocale)) {
      return baseLocale;
    }
  }

  return defaultLocale;
}

export const localeDisplayNames: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  zh: "中文",
  ja: "日本語",
  es: "Español",
  fr: "Français",
  de: "Deutsch"
};

type FeatureItem = {
  title: string;
  description: string;
};

type FaqItem = {
  q: string;
  a: string;
};

type HeaderCopy = {
  logo: string;
  generate: string;
};

type HeroCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

type StudioCopy = {
  inputPanelTitle: string;
  previewPanelTitle: string;
  textLabel: string;
  textPlaceholder: string;
  textRule: string;
  foregroundColor: string;
  backgroundColor: string;
  transparentBackground: string;
  logoLabel: string;
  logoHint: string;
  removeLogo: string;
  pngButton: string;
  svgButton: string;
  fileNameLabel: string;
  previewHint: string;
  emptyPreview: string;
  generating: string;
  invalidText: string;
  invalidLogoType: string;
  invalidLogoSize: string;
  renderError: string;
};

type FooterCopy = {
  privacy: string;
  terms: string;
  copyright: string;
  trademark: string;
};

export type PageCopy = {
  header: HeaderCopy;
  hero: HeroCopy;
  studio: StudioCopy;
  features: FeatureItem[];
  faqTitle: string;
  faq: FaqItem[];
  footer: FooterCopy;
};

export type SeoCopy = {
  title: string;
  description: string;
};

const baseFeatures: FeatureItem[] = [
  {
    title: "Transparent PNG",
    description: "Auto-sized export with 10x10px for each QR module."
  },
  {
    title: "SVG Export",
    description: "Perfect for print and scalable surfaces."
  },
  {
    title: "Custom Colors",
    description: "Foreground and background color controls."
  },
  {
    title: "Logo Embed",
    description: "Center logo with PNG, JPG, or SVG up to 2MB."
  },
  {
    title: "No Server Storage",
    description: "Generated in-browser only, no account needed."
  }
];

const baseFaq: FaqItem[] = [
  {
    q: "What is this QR code generator?",
    a: "It converts your text into a downloadable QR code instantly."
  },
  {
    q: "Is this free to use?",
    a: "Yes, the MVP is free and does not require sign-up."
  },
  {
    q: "Is my input stored on a server?",
    a: "No. This version generates everything in the browser."
  },
  {
    q: "What image outputs are supported?",
    a: "PNG (transparent, auto-sized with 10x10px modules) and SVG are both supported."
  },
  {
    q: "Which logo files can I upload?",
    a: "PNG, JPG, and SVG are supported up to 2MB."
  }
];

const copyByLocale: Record<Locale, PageCopy> = {
  ko: {
    header: {
      logo: "Pixelyaki",
      generate: "생성하기"
    },
    hero: {
      eyebrow: "회원가입 없이 바로 사용",
      title: "텍스트를 즉시 QR 코드로 변환하세요",
      description:
        "색상 변경, 로고 삽입, 투명 PNG(모듈 1칸 10x10px, 자동 크기), SVG 다운로드까지 한 번에 처리할 수 있습니다."
    },
    studio: {
      inputPanelTitle: "입력 및 옵션",
      previewPanelTitle: "실시간 미리보기",
      textLabel: "텍스트 입력",
      textPlaceholder: "최대 128자까지 입력하세요",
      textRule: "최대 128자",
      foregroundColor: "전경색",
      backgroundColor: "배경색",
      transparentBackground: "PNG 배경 투명 처리",
      logoLabel: "로고 업로드",
      logoHint: "PNG/JPG/SVG, 최대 2MB",
      removeLogo: "로고 제거",
      pngButton: "PNG 다운로드",
      svgButton: "SVG 다운로드",
      fileNameLabel: "파일명 미리보기",
      previewHint: "PNG는 모듈 1칸당 10x10px 기준으로 자동 크기 생성",
      emptyPreview: "텍스트를 입력하면 QR 미리보기가 표시됩니다.",
      generating: "QR 생성 중...",
      invalidText: "텍스트를 1자 이상 128자 이하로 입력해 주세요.",
      invalidLogoType: "로고 파일 형식은 PNG/JPG/SVG만 가능합니다.",
      invalidLogoSize: "로고 파일 크기는 2MB 이하여야 합니다.",
      renderError: "QR 코드를 생성하는 중 오류가 발생했습니다."
    },
    features: [
      {
        title: "투명 PNG",
        description: "QR 모듈 1칸당 10x10px로 자동 크기 다운로드합니다."
      },
      {
        title: "SVG 다운로드",
        description: "확대해도 깨지지 않아 인쇄물에 적합합니다."
      },
      {
        title: "색상 커스텀",
        description: "전경색과 배경색을 자유롭게 변경할 수 있습니다."
      },
      {
        title: "로고 삽입",
        description: "PNG/JPG/SVG 로고를 중앙에 넣을 수 있습니다."
      },
      {
        title: "서버 저장 없음",
        description: "모든 생성은 브라우저에서만 처리됩니다."
      }
    ],
    faqTitle: "자주 묻는 질문",
    faq: [
      {
        q: "이 서비스는 무엇인가요?",
        a: "입력한 텍스트를 즉시 QR 코드로 변환해 주는 웹 도구입니다."
      },
      {
        q: "무료로 사용할 수 있나요?",
        a: "네, 현재 MVP 버전은 무료이며 회원가입이 필요 없습니다."
      },
      {
        q: "입력한 데이터가 서버에 저장되나요?",
        a: "아니요. 현재 버전은 브라우저 내에서만 생성됩니다."
      },
      {
        q: "다운로드 형식은 어떻게 되나요?",
        a: "투명 배경 PNG(모듈 1칸 10x10px, 자동 크기)와 SVG를 제공합니다."
      },
      {
        q: "로고 파일은 어떤 형식을 지원하나요?",
        a: "PNG, JPG, SVG를 2MB 이하로 업로드할 수 있습니다."
      }
    ],
    footer: {
      privacy: "개인정보 처리방침",
      terms: "이용약관",
      copyright: "© Pixelyaki",
      trademark: "QR Code는 DENSO WAVE INCORPORATED의 등록상표입니다."
    }
  },
  en: {
    header: {
      logo: "Pixelyaki",
      generate: "Generate"
    },
    hero: {
      eyebrow: "No sign-up required",
      title: "Turn text into QR codes instantly",
      description:
        "Customize colors, embed a logo, and export transparent PNG (10x10px per module, auto-sized) or SVG."
    },
    studio: {
      inputPanelTitle: "Input and options",
      previewPanelTitle: "Live preview",
      textLabel: "Text",
      textPlaceholder: "Enter up to 128 characters",
      textRule: "Maximum 128 characters",
      foregroundColor: "Foreground color",
      backgroundColor: "Background color",
      transparentBackground: "Transparent PNG background",
      logoLabel: "Logo upload",
      logoHint: "PNG/JPG/SVG, up to 2MB",
      removeLogo: "Remove logo",
      pngButton: "Download PNG",
      svgButton: "Download SVG",
      fileNameLabel: "File name preview",
      previewHint: "PNG uses 10x10px per module with automatic output size",
      emptyPreview: "Enter text to see a QR preview.",
      generating: "Generating QR...",
      invalidText: "Please enter 1 to 128 characters.",
      invalidLogoType: "Only PNG/JPG/SVG logo files are supported.",
      invalidLogoSize: "Logo file size must be 2MB or less.",
      renderError: "An error occurred while generating the QR code."
    },
    features: baseFeatures,
    faqTitle: "Frequently Asked Questions",
    faq: baseFaq,
    footer: {
      privacy: "Privacy",
      terms: "Terms",
      copyright: "© Pixelyaki",
      trademark: "QR Code is a trademark of DENSO WAVE INCORPORATED."
    }
  },
  zh: {
    header: {
      logo: "Pixelyaki",
      generate: "生成"
    },
    hero: {
      eyebrow: "无需注册",
      title: "将文本快速转换为二维码",
      description: "支持颜色修改、Logo 插入、透明 PNG（每个模块 10x10px，自动尺寸）和 SVG 下载。"
    },
    studio: {
      inputPanelTitle: "输入与选项",
      previewPanelTitle: "实时预览",
      textLabel: "文本输入",
      textPlaceholder: "最多输入 128 个字符",
      textRule: "最多 128 个字符",
      foregroundColor: "前景色",
      backgroundColor: "背景色",
      transparentBackground: "PNG 背景透明",
      logoLabel: "上传 Logo",
      logoHint: "PNG/JPG/SVG，最大 2MB",
      removeLogo: "移除 Logo",
      pngButton: "下载 PNG",
      svgButton: "下载 SVG",
      fileNameLabel: "文件名预览",
      previewHint: "PNG 按每个模块 10x10px 自动生成尺寸",
      emptyPreview: "输入文本后将显示二维码预览。",
      generating: "正在生成二维码...",
      invalidText: "请输入 1 到 128 个字符。",
      invalidLogoType: "Logo 仅支持 PNG/JPG/SVG。",
      invalidLogoSize: "Logo 文件必须小于等于 2MB。",
      renderError: "生成二维码时发生错误。"
    },
    features: baseFeatures,
    faqTitle: "常见问题",
    faq: baseFaq,
    footer: {
      privacy: "隐私政策",
      terms: "服务条款",
      copyright: "© Pixelyaki",
      trademark: "QR Code 是 DENSO WAVE INCORPORATED 的注册商标。"
    }
  },
  ja: {
    header: {
      logo: "Pixelyaki",
      generate: "生成"
    },
    hero: {
      eyebrow: "サインアップ不要",
      title: "テキストをすぐにQRコード化",
      description:
        "色変更、ロゴ挿入、透過PNG（1モジュール10x10px・自動サイズ）、SVGダウンロードに対応しています。"
    },
    studio: {
      inputPanelTitle: "入力とオプション",
      previewPanelTitle: "リアルタイムプレビュー",
      textLabel: "テキスト入力",
      textPlaceholder: "最大128文字まで入力",
      textRule: "最大128文字",
      foregroundColor: "前景色",
      backgroundColor: "背景色",
      transparentBackground: "PNG背景を透過にする",
      logoLabel: "ロゴアップロード",
      logoHint: "PNG/JPG/SVG、最大2MB",
      removeLogo: "ロゴを削除",
      pngButton: "PNGをダウンロード",
      svgButton: "SVGをダウンロード",
      fileNameLabel: "ファイル名プレビュー",
      previewHint: "PNGは1モジュール10x10px基準で自動サイズ生成",
      emptyPreview: "テキストを入力するとプレビューが表示されます。",
      generating: "QRコードを生成中...",
      invalidText: "1〜128文字で入力してください。",
      invalidLogoType: "ロゴはPNG/JPG/SVGのみ対応です。",
      invalidLogoSize: "ロゴは2MB以下にしてください。",
      renderError: "QRコード生成中にエラーが発生しました。"
    },
    features: baseFeatures,
    faqTitle: "よくある質問",
    faq: baseFaq,
    footer: {
      privacy: "プライバシー",
      terms: "利用規約",
      copyright: "© Pixelyaki",
      trademark: "QRコードは株式会社デンソーウェーブの登録商標です。"
    }
  },
  es: {
    header: {
      logo: "Pixelyaki",
      generate: "Generar"
    },
    hero: {
      eyebrow: "Sin registro",
      title: "Convierte texto en QR al instante",
      description:
        "Personaliza colores, inserta un logo y descarga PNG transparente (10x10px por módulo, tamaño automático) o SVG."
    },
    studio: {
      inputPanelTitle: "Entrada y opciones",
      previewPanelTitle: "Vista previa en vivo",
      textLabel: "Texto",
      textPlaceholder: "Ingresa hasta 128 caracteres",
      textRule: "Máximo 128 caracteres",
      foregroundColor: "Color frontal",
      backgroundColor: "Color de fondo",
      transparentBackground: "Fondo PNG transparente",
      logoLabel: "Subir logo",
      logoHint: "PNG/JPG/SVG, hasta 2MB",
      removeLogo: "Quitar logo",
      pngButton: "Descargar PNG",
      svgButton: "Descargar SVG",
      fileNameLabel: "Vista del nombre de archivo",
      previewHint: "PNG usa 10x10px por módulo con tamaño automático",
      emptyPreview: "Ingresa texto para ver la vista previa del QR.",
      generating: "Generando QR...",
      invalidText: "Ingresa entre 1 y 128 caracteres.",
      invalidLogoType: "Solo se admiten logos PNG/JPG/SVG.",
      invalidLogoSize: "El logo debe ser de 2MB o menos.",
      renderError: "Ocurrió un error al generar el código QR."
    },
    features: baseFeatures,
    faqTitle: "Preguntas frecuentes",
    faq: baseFaq,
    footer: {
      privacy: "Privacidad",
      terms: "Términos",
      copyright: "© Pixelyaki",
      trademark: "QR Code es una marca registrada de DENSO WAVE INCORPORATED."
    }
  },
  fr: {
    header: {
      logo: "Pixelyaki",
      generate: "Générer"
    },
    hero: {
      eyebrow: "Sans inscription",
      title: "Transformez votre texte en QR instantanément",
      description:
        "Modifiez les couleurs, ajoutez un logo et exportez en PNG transparent (10x10px par module, taille automatique) ou SVG."
    },
    studio: {
      inputPanelTitle: "Saisie et options",
      previewPanelTitle: "Aperçu en direct",
      textLabel: "Texte",
      textPlaceholder: "Saisissez jusqu'à 128 caractères",
      textRule: "128 caractères maximum",
      foregroundColor: "Couleur du premier plan",
      backgroundColor: "Couleur de fond",
      transparentBackground: "Fond PNG transparent",
      logoLabel: "Téléverser un logo",
      logoHint: "PNG/JPG/SVG, jusqu'à 2MB",
      removeLogo: "Supprimer le logo",
      pngButton: "Télécharger PNG",
      svgButton: "Télécharger SVG",
      fileNameLabel: "Aperçu du nom de fichier",
      previewHint: "PNG en 10x10px par module avec taille de sortie automatique",
      emptyPreview: "Saisissez un texte pour afficher l'aperçu QR.",
      generating: "Génération du QR...",
      invalidText: "Saisissez entre 1 et 128 caractères.",
      invalidLogoType: "Seuls les logos PNG/JPG/SVG sont acceptés.",
      invalidLogoSize: "Le logo doit faire 2MB maximum.",
      renderError: "Une erreur est survenue pendant la génération du QR."
    },
    features: baseFeatures,
    faqTitle: "Questions fréquentes",
    faq: baseFaq,
    footer: {
      privacy: "Confidentialité",
      terms: "Conditions",
      copyright: "© Pixelyaki",
      trademark: "QR Code est une marque déposée de DENSO WAVE INCORPORATED."
    }
  },
  de: {
    header: {
      logo: "Pixelyaki",
      generate: "Erstellen"
    },
    hero: {
      eyebrow: "Ohne Anmeldung",
      title: "Text sofort in QR-Codes umwandeln",
      description:
        "Farben anpassen, Logo einfügen und als transparentes PNG (10x10px pro Modul, automatische Größe) oder SVG herunterladen."
    },
    studio: {
      inputPanelTitle: "Eingabe und Optionen",
      previewPanelTitle: "Live-Vorschau",
      textLabel: "Text",
      textPlaceholder: "Bis zu 128 Zeichen eingeben",
      textRule: "Maximal 128 Zeichen",
      foregroundColor: "Vordergrundfarbe",
      backgroundColor: "Hintergrundfarbe",
      transparentBackground: "PNG-Hintergrund transparent",
      logoLabel: "Logo hochladen",
      logoHint: "PNG/JPG/SVG, bis zu 2MB",
      removeLogo: "Logo entfernen",
      pngButton: "PNG herunterladen",
      svgButton: "SVG herunterladen",
      fileNameLabel: "Dateiname Vorschau",
      previewHint: "PNG nutzt 10x10px pro Modul mit automatischer Ausgabegröße",
      emptyPreview: "Text eingeben, um die QR-Vorschau zu sehen.",
      generating: "QR wird erstellt...",
      invalidText: "Bitte 1 bis 128 Zeichen eingeben.",
      invalidLogoType: "Nur PNG/JPG/SVG Logos werden unterstützt.",
      invalidLogoSize: "Das Logo muss 2MB oder kleiner sein.",
      renderError: "Beim Erstellen des QR-Codes ist ein Fehler aufgetreten."
    },
    features: baseFeatures,
    faqTitle: "Häufige Fragen",
    faq: baseFaq,
    footer: {
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen",
      copyright: "© Pixelyaki",
      trademark: "QR Code ist eine eingetragene Marke von DENSO WAVE INCORPORATED."
    }
  }
};

export function getCopy(locale: Locale): PageCopy {
  return copyByLocale[locale];
}

const seoByLocale: Record<Locale, SeoCopy> = {
  ko: {
    title: "Pixelyaki QR 코드 생성기 | 무료 PNG/SVG 다운로드",
    description:
      "회원가입 없이 텍스트를 QR 코드로 즉시 변환하세요. 색상 변경, 로고 삽입, 투명 PNG(모듈 10x10px), SVG 다운로드를 지원합니다."
  },
  en: {
    title: "Pixelyaki QR Code Generator | Free PNG/SVG Download",
    description:
      "Create QR codes from text instantly with no sign-up. Customize colors, add logo, and download transparent PNG (10x10px modules) or SVG."
  },
  zh: {
    title: "Pixelyaki 二维码生成器 | 免费 PNG/SVG 下载",
    description:
      "无需注册，立即将文本转换为二维码。支持颜色调整、Logo 插入、透明 PNG（模块 10x10px）和 SVG 下载。"
  },
  ja: {
    title: "Pixelyaki QRコード生成 | 無料PNG/SVGダウンロード",
    description:
      "サインアップ不要でテキストをQRコード化。色変更、ロゴ挿入、透過PNG（1モジュール10x10px）、SVGダウンロードに対応。"
  },
  es: {
    title: "Generador de QR Pixelyaki | Descarga PNG/SVG Gratis",
    description:
      "Convierte texto en códigos QR al instante sin registro. Personaliza colores, agrega logo y descarga PNG transparente (módulos 10x10px) o SVG."
  },
  fr: {
    title: "Générateur QR Pixelyaki | PNG/SVG Gratuit",
    description:
      "Transformez du texte en QR instantanément sans inscription. Couleurs personnalisées, logo, PNG transparent (modules 10x10px) et SVG."
  },
  de: {
    title: "Pixelyaki QR-Code-Generator | Kostenloser PNG/SVG-Download",
    description:
      "Erstelle QR-Codes aus Text ohne Anmeldung. Farben anpassen, Logo einfügen und als transparentes PNG (10x10px pro Modul) oder SVG herunterladen."
  }
};

export function getSeoCopy(locale: Locale): SeoCopy {
  return seoByLocale[locale];
}
