import { FullTranslation } from "../types";

export const ja: FullTranslation = {
  seo: {
    title: "Pixelyaki QRコード生成 | 無料PNG/SVGダウンロード",
    description: "サインアップ不要でテキストをQRコード化。色変更、ロゴ挿入、透過PNG・SVGダウンロードに対応。"
  },
  header: {
    logo: "Pixelyaki",
    generate: "生成"
  },
  hero: {
    eyebrow: "サインアップ不要",
    title: "テキストをすぐにQRコード化",
    description: "色変更、ロゴ挿入、透過PNG・SVGダウンロードに対応しています。"
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
    emptyPreview: "テキストを入力するとプレビューが表示されます。",
    generating: "QRコードを生成中...",
    invalidText: "1〜128文字で入力してください。",
    invalidLogoType: "ロゴはPNG/JPG/SVGのみ対応です。",
    invalidLogoSize: "ロゴは2MB以下にしてください。",
    renderError: "QRコード生成中にエラーが発生しました。",
    contrastWarning: "コントラストが低く、QRコードが読み取れない可能性があります"
  },
  modes: {
    modeSelectorTitle: "QR 種類",
    textModeLabel: "テキスト",
    sendModeLabel: "Toss 送金 QR",
    urlModeLabel: "URL",
    emailModeLabel: "メール",
    phoneModeLabel: "電話",
    bankLabel: "銀行コード",
    bankPlaceholder: "銀行を選択してください",
    accountLabel: "口座番号",
    accountPlaceholder: "口座番号を入力してください",
    amountLabel: "金額（任意）",
    amountPlaceholder: "例: 10000",
    amountHint: "空欄の場合、金額なしの送金QRを生成します。",
    invalidAccount: "銀行と口座番号を確認してください。",
    invalidAmount: "金額は 1 以上の数字で入力してください。",
    sendEmptyPreview: "銀行と口座番号を入力すると送金QRをプレビューできます。",
    urlLabel: "URL",
    urlPlaceholder: "例: pixelyaki.com または https://pixelyaki.com",
    invalidUrl: "正しいURLを入力してください。",
    urlEmptyPreview: "URLを入力するとQRをプレビューできます。",
    emailLabel: "メールアドレス",
    emailPlaceholder: "例: hello@pixelyaki.com",
    invalidEmail: "正しいメールアドレスを入力してください。",
    emailEmptyPreview: "メールアドレスを入力するとQRをプレビューできます。",
    phoneLabel: "電話番号",
    phonePlaceholder: "例: +821012345678",
    invalidPhone: "正しい電話番号を入力してください。",
    phoneEmptyPreview: "電話番号を入力するとQRをプレビューできます。"
  },
  extraModes: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "名刺(vCard)",
    smsModeLabel: "SMS",
    wifiSsidLabel: "ネットワーク名(SSID)",
    wifiSsidPlaceholder: "例: Pixelyaki_WiFi",
    wifiEncryptionLabel: "暗号化方式",
    wifiEncryptionWpa: "WPA/WPA2",
    wifiEncryptionWep: "WEP",
    wifiEncryptionNoPassword: "パスワードなし",
    wifiPasswordLabel: "パスワード",
    wifiPasswordPlaceholder: "Wi-Fi パスワードを入力してください",
    wifiHiddenLabel: "隠しネットワーク",
    wifiInvalid: "SSID と Wi-Fi 設定を確認してください。",
    wifiEmptyPreview: "Wi-Fi 情報を入力すると QR をプレビューできます。",
    vcardNameLabel: "名前",
    vcardNamePlaceholder: "例: Arthur Kim",
    vcardCompanyLabel: "会社",
    vcardCompanyPlaceholder: "例: Pixelyaki",
    vcardPhoneLabel: "電話番号",
    vcardPhonePlaceholder: "例: +821012345678",
    vcardEmailLabel: "メール",
    vcardEmailPlaceholder: "例: hello@pixelyaki.com",
    vcardAddressLabel: "住所",
    vcardAddressPlaceholder: "例: Seoul, Korea",
    vcardInvalid: "名前を入力してください。",
    vcardInvalidPhone: "名刺の電話番号形式を確認してください。",
    vcardInvalidEmail: "名刺のメール形式を確認してください。",
    vcardEmptyPreview: "連絡先情報を入力すると vCard QR をプレビューできます。",
    smsPhoneLabel: "宛先電話番号",
    smsPhonePlaceholder: "例: +821012345678",
    smsBodyLabel: "メッセージ（任意）",
    smsBodyPlaceholder: "例: こんにちは",
    smsInvalid: "SMS の電話番号形式を確認してください。",
    smsEmptyPreview: "電話番号を入力すると SMS QR をプレビューできます。",
    kakaopayModeLabel: "KakaoPay 送金 QR",
    kakaopayEmptyPreview: "KakaoPay 送金情報を入力すると QR をプレビューできます。"
  },
  styles: {
    title: "QRスタイル",
    presetLabel: "プリセット",
    dotsLabel: "ドット形状",
    cornerSquareLabel: "コーナー形状",
    cornerDotLabel: "コーナードット",
    presetSquare: "スクエア",
    presetRounded: "ラウンド",
    presetClassy: "エレガント",
    presetDot: "ドット",
    styleSquare: "直角スクエア",
    styleDots: "ドット形状",
    styleRounded: "ラウンドスクエア",
    styleClassy: "エレガントスタイル",
    styleClassyRounded: "エレガントラウンド",
    styleExtraRounded: "スムーズラウンド",
    styleDot: "シングルドット",
    errorCorrectionLabel: "密度",
    eclL: "低", eclM: "中", eclQ: "高", eclH: "最高"
  },
  features: [
    {
      title: "透過PNG",
      description: "自動サイズ調整された透過背景のPNGをダウンロードできます。"
    },
    {
      title: "SVG書き出し",
      description: "拡大しても美しく、印刷やデザインに最適です。"
    },
    {
      title: "カスタムカラー",
      description: "前景色と背景色を自由に設定できます。"
    },
    {
      title: "ロゴ挿入",
      description: "PNG/JPG/SVGロゴ（最大2MB）を中央に配置できます。"
    },
    {
      title: "サーバ保存なし",
      description: "すべての生成処理はブラウザ内で行われ、データは保存されません。"
    }
  ],
  faqTitle: "よくある質問",
  faq: [
    {
      q: "このサービスは何ですか？",
      a: "入力したテキストを即座にQRコードに変換し、ダウンロードできるツールです。"
    },
    {
      q: "無料で使用できますか？",
      a: "はい、現在のMVPバージョンは無料で、会員登録も不要です。"
    },
    {
      q: "入力したデータはサーバに保存されますか？",
      a: "いいえ。このバージョンはすべてブラウザ内で生成されます。"
    },
    {
      q: "ダウンロードできる形式は何ですか？",
      a: "透過背景のPNGとSVGに対応しています。"
    },
    {
      q: "ロゴファイルはどの形式をサポートしていますか？",
      a: "PNG、JPG、SVG（2MB以下）をアップロードできます。"
    }
  ],
  footer: {
    privacy: "プライバシー",
    terms: "利用規約",
    openSource: "オープンソースライセンス",
    copyright: "© Pixelyaki",
    trademark: "QRコードは株式会社デンソーウェーブの登録商標です。"
  }
};
