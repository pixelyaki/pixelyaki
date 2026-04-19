import { locales } from "../i18n";

export type Locale = (typeof locales)[number];

export type FeatureItem = {
  title: string;
  description: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type HeaderCopy = {
  logo: string;
  generate: string;
};

export type HeroCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

export type StudioCopy = {
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
  emptyPreview: string;
  contrastWarning: string;
  generating: string;
  invalidText: string;
  invalidLogoType: string;
  invalidLogoSize: string;
  renderError: string;
};

export type ModeCopy = {
  modeSelectorTitle: string;
  textModeLabel: string;
  sendModeLabel: string;
  urlModeLabel: string;
  emailModeLabel: string;
  phoneModeLabel: string;
  bankLabel: string;
  bankPlaceholder: string;
  accountLabel: string;
  accountPlaceholder: string;
  amountLabel: string;
  amountPlaceholder: string;
  amountHint: string;
  invalidAccount: string;
  invalidAmount: string;
  sendEmptyPreview: string;
  urlLabel: string;
  urlPlaceholder: string;
  invalidUrl: string;
  urlEmptyPreview: string;
  emailLabel: string;
  emailPlaceholder: string;
  invalidEmail: string;
  emailEmptyPreview: string;
  phoneLabel: string;
  phonePlaceholder: string;
  invalidPhone: string;
  phoneEmptyPreview: string;
};

export type ExtraModeCopy = {
  wifiModeLabel: string;
  vcardModeLabel: string;
  smsModeLabel: string;
  wifiSsidLabel: string;
  wifiSsidPlaceholder: string;
  wifiEncryptionLabel: string;
  wifiEncryptionWpa: string;
  wifiEncryptionWep: string;
  wifiEncryptionNoPassword: string;
  wifiPasswordLabel: string;
  wifiPasswordPlaceholder: string;
  wifiHiddenLabel: string;
  wifiInvalid: string;
  wifiEmptyPreview: string;
  vcardNameLabel: string;
  vcardNamePlaceholder: string;
  vcardCompanyLabel: string;
  vcardCompanyPlaceholder: string;
  vcardPhoneLabel: string;
  vcardPhonePlaceholder: string;
  vcardEmailLabel: string;
  vcardEmailPlaceholder: string;
  vcardAddressLabel: string;
  vcardAddressPlaceholder: string;
  vcardInvalid: string;
  vcardInvalidPhone: string;
  vcardInvalidEmail: string;
  vcardEmptyPreview: string;
  smsPhoneLabel: string;
  smsPhonePlaceholder: string;
  smsBodyLabel: string;
  smsBodyPlaceholder: string;
  smsInvalid: string;
  smsEmptyPreview: string;
  kakaopayModeLabel: string;
  kakaopayEmptyPreview: string;
};

export type StyleCopy = {
  title: string;
  presetLabel: string;
  dotsLabel: string;
  cornerSquareLabel: string;
  cornerDotLabel: string;
  presetSquare: string;
  presetRounded: string;
  presetClassy: string;
  presetDot: string;
  styleSquare: string;
  styleDots: string;
  styleRounded: string;
  styleClassy: string;
  styleClassyRounded: string;
  styleExtraRounded: string;
  styleDot: string;
  errorCorrectionLabel: string;
  eclL: string;
  eclM: string;
  eclQ: string;
  eclH: string;
};

export type FooterCopy = {
  privacy: string;
  terms: string;
  openSource: string;
  copyright: string;
  trademark: string;
};

export type FullTranslation = {
  seo: SeoCopy;
  header: HeaderCopy;
  hero: HeroCopy;
  studio: StudioCopy;
  modes: ModeCopy;
  extraModes: ExtraModeCopy;
  styles: StyleCopy;
  features: FeatureItem[];
  faqTitle: string;
  faq: FaqItem[];
  footer: FooterCopy;
};

export type SeoCopy = {
  title: string;
  description: string;
};
