import { FullTranslation } from "../types";

const baseFeatures = [
  {
    title: "Transparent PNG",
    description: "Auto-sized transparent PNG export."
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
    description: "Center logo with any image format (PNG, JPG, SVG, WebP, etc.) up to 10MB."
  },
  {
    title: "No Server Storage",
    description: "Generated in-browser only, no account needed."
  }
];

const baseFaq = [
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
    a: "Transparent PNG (auto-sized) and SVG are both supported."
  },
  {
    q: "Which logo files can I upload?",
    a: "Most common image formats including PNG, JPG, SVG, and WebP are supported up to 10MB."
  }
];

export const en: FullTranslation = {
  seo: {
    title: "Pixelyaki QR Code Generator | Free PNG/SVG Download",
    description: "Create QR codes from text instantly with no sign-up. Customize colors, add logo, and download transparent PNG or SVG."
  },
  header: {
    logo: "Pixelyaki",
    generate: "Generate"
  },
  hero: {
    eyebrow: "No sign-up required",
    title: "Turn text into QR codes instantly",
    description: "Customize colors, embed a logo, and export transparent PNG or SVG."
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
    logoHint: "Image files, up to 10MB",
    removeLogo: "Remove logo",
    pngButton: "Download PNG",
    svgButton: "Download SVG",
    fileNameLabel: "File name preview",
    emptyPreview: "Enter text to see a QR preview.",
    generating: "Generating QR...",
    invalidText: "Please enter 1 to 128 characters.",
    invalidLogoType: "Only image files are supported for the logo.",
    invalidLogoSize: "Logo file size must be 10MB or less.",
    renderError: "An error occurred while generating the QR code.",
    contrastWarning: "Low contrast — the QR code may not scan reliably"
  },
  modes: {
    modeSelectorTitle: "QR Type",
    textModeLabel: "Text",
    sendModeLabel: "Toss Transfer QR",
    urlModeLabel: "URL",
    emailModeLabel: "Email",
    phoneModeLabel: "Phone",
    bankLabel: "Bank code",
    bankPlaceholder: "Select a bank",
    accountLabel: "Account number",
    accountPlaceholder: "Enter account number",
    amountLabel: "Amount (optional)",
    amountPlaceholder: "e.g. 10000",
    amountHint: "Leave empty to create transfer QR without amount.",
    invalidAccount: "Please check bank and account number.",
    invalidAmount: "Amount must be a number greater than 0.",
    sendEmptyPreview: "Enter bank and account number to preview transfer QR.",
    urlLabel: "URL",
    urlPlaceholder: "e.g. pixelyaki.com or https://pixelyaki.com",
    invalidUrl: "Please enter a valid URL.",
    urlEmptyPreview: "Enter a URL to preview the QR code.",
    emailLabel: "Email address",
    emailPlaceholder: "e.g. hello@pixelyaki.com",
    invalidEmail: "Please enter a valid email address.",
    emailEmptyPreview: "Enter an email address to preview the QR code.",
    phoneLabel: "Phone number",
    phonePlaceholder: "e.g. +821012345678",
    invalidPhone: "Please enter a valid phone number.",
    phoneEmptyPreview: "Enter a phone number to preview the QR code."
  },
  extraModes: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "Network name (SSID)",
    wifiSsidPlaceholder: "e.g. Pixelyaki_WiFi",
    wifiEncryptionLabel: "Encryption",
    wifiEncryptionWpa: "WPA/WPA2",
    wifiEncryptionWep: "WEP",
    wifiEncryptionNoPassword: "No password",
    wifiPasswordLabel: "Password",
    wifiPasswordPlaceholder: "Enter Wi-Fi password",
    wifiHiddenLabel: "Hidden network",
    wifiInvalid: "Please check your Wi-Fi settings.",
    wifiEmptyPreview: "Enter Wi-Fi details to preview the QR code.",
    vcardNameLabel: "Name",
    vcardNamePlaceholder: "e.g. Arthur Kim",
    vcardCompanyLabel: "Company",
    vcardCompanyPlaceholder: "e.g. Pixelyaki",
    vcardPhoneLabel: "Phone number",
    vcardPhonePlaceholder: "e.g. +821012345678",
    vcardEmailLabel: "Email",
    vcardEmailPlaceholder: "e.g. hello@pixelyaki.com",
    vcardAddressLabel: "Address",
    vcardAddressPlaceholder: "e.g. Seoul, Korea",
    vcardInvalid: "Please enter at least a name.",
    vcardInvalidPhone: "Please check the vCard phone number format.",
    vcardInvalidEmail: "Please check the vCard email format.",
    vcardEmptyPreview: "Enter contact details to preview the vCard QR code.",
    smsPhoneLabel: "Recipient phone",
    smsPhonePlaceholder: "e.g. +821012345678",
    smsBodyLabel: "Message (optional)",
    smsBodyPlaceholder: "e.g. Hello!",
    smsInvalid: "Please check the SMS phone number format.",
    smsEmptyPreview: "Enter a phone number to preview the SMS QR code.",
    kakaopayModeLabel: "KakaoPay Transfer QR",
    kakaopayEmptyPreview: "Enter KakaoPay transfer details to preview the QR code."
  },
  styles: {
    title: "QR style",
    presetLabel: "Preset",
    dotsLabel: "Dots",
    cornerSquareLabel: "Corner square",
    cornerDotLabel: "Corner dot",
    presetSquare: "Square",
    presetRounded: "Rounded",
    presetClassy: "Classy",
    presetDot: "Dot",
    styleSquare: "Square",
    styleDots: "Dots",
    styleRounded: "Rounded",
    styleClassy: "Classy",
    styleClassyRounded: "Classy Rounded",
    styleExtraRounded: "Extra Rounded",
    styleDot: "Dot",
    errorCorrectionLabel: "Density",
    eclL: "Low", eclM: "Medium", eclQ: "High", eclH: "Highest"
  },
  features: baseFeatures,
  faqTitle: "Frequently Asked Questions",
  faq: baseFaq,
  footer: {
    privacy: "Privacy",
    terms: "Terms",
    openSource: "Open Source Licenses",
    copyright: "© Pixelyaki",
    trademark: "QR Code is a trademark of DENSO WAVE INCORPORATED."
  }
};
