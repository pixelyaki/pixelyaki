import { FullTranslation } from "../types";

export const tl: FullTranslation = {
  seo: {
    title: "Gumawa ng QR Code Pixelyaki | Libreng PNG/SVG Download",
    description: "Agad na gawing QR code ang text nang walang sign-up. Suportado ang pag-customize ng kulay, paglalagay ng logo, at pag-download ng transparent na PNG at SVG."
  },
  header: {
    logo: "Pixelyaki",
    generate: "Gumawa ng QR Code"
  },
  hero: {
    eyebrow: "Walang sign-up na kailangan",
    title: "Gawing QR code ang text nang mabilis",
    description: "I-customize ang kulay, maglagay ng logo, at i-export bilang transparent na PNG o SVG agad-agad."
  },
  studio: {
    inputPanelTitle: "Input at mga opsyon",
    previewPanelTitle: "Live preview",
    textLabel: "Text",
    textPlaceholder: "Mag-input ng hanggang 128 characters",
    textRule: "Maximum 128 characters",
    foregroundColor: "Kulay sa unahan",
    backgroundColor: "Kulay sa likuran",
    transparentBackground: "Transparent na PNG background",
    logoLabel: "Upload ng logo",
    logoHint: "Image files, hanggang 10MB",
    removeLogo: "Tanggalin ang logo",
    pngButton: "I-download ang PNG",
    svgButton: "I-download ang SVG",
    fileNameLabel: "Preview ng file name",
    emptyPreview: "Mag-input ng text para makita ang preview ng QR.",
    generating: "Ginagawa ang QR...",
    invalidText: "Mangyaring mag-input ng 1 hanggang 128 characters.",
    invalidLogoType: "Tanging image files lang ang suportado para sa logo.",
    invalidLogoSize: "Ang sukat ng file ng logo ay dapat 10MB o mas mababa.",
    renderError: "Nagkaroon ng error habang ginagawa ang QR code.",
    contrastWarning: "Mababang contrast — maaaring hindi ma-scan ang QR code nang tama"
  },
  modes: {
    modeSelectorTitle: "Uri ng QR",
    textModeLabel: "Text",
    sendModeLabel: "Toss Transfer",
    urlModeLabel: "URL",
    emailModeLabel: "Email",
    phoneModeLabel: "Numero ng telepono",
    bankLabel: "Bank code",
    bankPlaceholder: "Pumili ng bangko",
    accountLabel: "Account number",
    accountPlaceholder: "I-input ang account number",
    amountLabel: "Halaga (opsyonal)",
    amountPlaceholder: "hal. 10000",
    amountHint: "Iwanang kosong para sa transfer QR na walang halaga.",
    invalidAccount: "Mangyaring suriin ang bangko at account number.",
    invalidAmount: "Ang halaga ay dapat na numero na higit sa 0.",
    sendEmptyPreview: "I-input ang bangko at account number para makita ang preview ng transfer QR.",
    urlLabel: "URL",
    urlPlaceholder: "hal. pixelyaki.com o https://pixelyaki.com",
    invalidUrl: "Mangyaring mag-input ng valid na URL.",
    urlEmptyPreview: "Mag-input ng URL para makita ang preview ng QR code.",
    emailLabel: "Email address",
    emailPlaceholder: "hal. hello@pixelyaki.com",
    invalidEmail: "Mangyaring mag-input ng valid na email address.",
    emailEmptyPreview: "Mag-input ng email address para makita ang preview ng QR code.",
    phoneLabel: "Numero ng telepono",
    phonePlaceholder: "hal. +639123456789",
    invalidPhone: "Mangyaring mag-input ng valid na numero ng telepono.",
    phoneEmptyPreview: "Mag-input ng numero ng telepono para makita ang preview ng QR code."
  },
  extraModes: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "Pangalan ng network (SSID)",
    wifiSsidPlaceholder: "hal. Pixelyaki_WiFi",
    wifiEncryptionLabel: "Encryption",
    wifiEncryptionWpa: "WPA/WPA2",
    wifiEncryptionWep: "WEP",
    wifiEncryptionNoPassword: "Walang password",
    wifiPasswordLabel: "Password",
    wifiPasswordPlaceholder: "I-input ang Wi-Fi password",
    wifiHiddenLabel: "Nakahagong network",
    wifiInvalid: "Mangyaring suriin ang iyong Wi-Fi settings.",
    wifiEmptyPreview: "I-input ang detalye ng Wi-Fi para makita ang preview ng QR code.",
    vcardNameLabel: "Pangalan",
    vcardNamePlaceholder: "hal. Arthur Kim",
    vcardCompanyLabel: "Kumpanya",
    vcardCompanyPlaceholder: "hal. Pixelyaki",
    vcardPhoneLabel: "Numero ng telepono",
    vcardPhonePlaceholder: "hal. +639123456789",
    vcardEmailLabel: "Email",
    vcardEmailPlaceholder: "hal. hello@pixelyaki.com",
    vcardAddressLabel: "Address",
    vcardAddressPlaceholder: "hal. Manila, Pilipinas",
    vcardInvalid: "Mangyaring mag-input ng kahit pangalan man lang.",
    vcardInvalidPhone: "Pakisuri ang format ng numero ng telepono sa vCard.",
    vcardInvalidEmail: "Pakisuri ang format ng email sa vCard.",
    vcardEmptyPreview: "I-input ang detalye ng contact para makita ang preview ng vCard QR.",
    smsPhoneLabel: "Numero ng tatanggap",
    smsPhonePlaceholder: "hal. +639123456789",
    smsBodyLabel: "Mensahe (opsyonal)",
    smsBodyPlaceholder: "hal. Kamusta!",
    smsInvalid: "Pakisuri ang format ng numero ng telepono sa SMS.",
    smsEmptyPreview: "Mag-input ng numero ng telepono para makita ang preview ng SMS QR.",
    kakaopayModeLabel: "KakaoPay Transfer",
    kakaopayEmptyPreview: "I-input ang detalye ng KakaoPay para makita ang preview.",
    mecardModeLabel: "meCard",
    mecardNameLabel: "Name",
    mecardNamePlaceholder: "e.g. John Doe",
    mecardPhoneLabel: "Phone",
    mecardPhonePlaceholder: "e.g. +1234567890",
    mecardEmailLabel: "Email",
    mecardEmailPlaceholder: "e.g. hello@pixelyaki.com",
    mecardAddressLabel: "Address",
    mecardAddressPlaceholder: "e.g. New York, USA",
    mecardEmptyPreview: "Enter contact info to see a meCard QR preview.",
    calendarModeLabel: "Calendar",
    calendarTitleLabel: "Event Title",
    calendarTitlePlaceholder: "e.g. Team Meeting",
    calendarStartLabel: "Start Date/Time",
    calendarEndLabel: "End Date/Time",
    calendarLocationLabel: "Location",
    calendarLocationPlaceholder: "e.g. Meeting Room 1",
    calendarDescriptionLabel: "Description",
    calendarDescriptionPlaceholder: "e.g. Discuss project plans",
    calendarEmptyPreview: "Enter event info to see a calendar QR preview.",
    paypalModeLabel: "PayPal",
    paypalEmailLabel: "PayPal Email/ID",
    paypalEmailPlaceholder: "e.g. payment@pixelyaki.com",
    paypalItemLabel: "Item Name",
    paypalItemPlaceholder: "e.g. Design Service",
    paypalAmountLabel: "Amount",
    paypalAmountPlaceholder: "e.g. 50.00",
    paypalCurrencyLabel: "Currency",
    paypalEmptyPreview: "Enter payment info to see a PayPal QR preview.",
    cryptoModeLabel: "Crypto",
    cryptoAddressLabel: "Wallet Address",
    cryptoAddressPlaceholder: "e.g. 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    cryptoAmountLabel: "Amount",
    cryptoAmountPlaceholder: "e.g. 0.1",
    cryptoCoinLabel: "Coin",
    cryptoLabelLabel: "Label (Name)",
    cryptoLabelPlaceholder: "e.g. Bitcoin Wallet",
    cryptoEmptyPreview: "Enter wallet info to see a crypto QR preview."
  },
  styles: {
    title: "Istilo ng QR",
    presetLabel: "Preset",
    dotsLabel: "Dots",
    cornerSquareLabel: "Corner square",
    cornerDotLabel: "Corner dot",
    presetSquare: "Kuwadrado",
    presetRounded: "Rounded",
    presetClassy: "Classy",
    presetDot: "Dot",
    styleSquare: "Kuwadrado",
    styleDots: "Dots",
    styleRounded: "Rounded Square",
    styleClassy: "Classy Style",
    styleClassyRounded: "Classy Rounded",
    styleExtraRounded: "Extra Rounded",
    styleDot: "Single Dot",
    errorCorrectionLabel: "Density",
    eclL: "Mababa", eclM: "Katamtaman", eclQ: "Mataas", eclH: "Pinakamataas"
  },
  features: [
    {
      title: "Transparent na PNG",
      description: "Auto-sized transparent na PNG export."
    },
    {
      title: "SVG Export",
      description: "Perpekto para sa print at scalable na surfaces."
    },
    {
      title: "Custom na Kulay",
      description: "Kontrol para sa kulay sa unahan at likuran."
    },
    {
      title: "Maglagay ng Logo",
      description: "Maglagay ng logo sa gitna gamit ang anumang image format hanggang 10MB."
    },
    {
      title: "Walang Server Storage",
      description: "Ginagawa lahat sa browser, walang account na kailangan."
    }
  ],
  faqTitle: "Mga Madalas Itanong",
  faq: [
    {
      q: "Ano itong QR code generator na ito?",
      a: "Ginagawa nitong agad na mada-download na QR code ang iyong text."
    },
    {
      q: "Libre ba itong gamitin?",
      a: "Oo, ang MVP ay libre at hindi kailangan ng sign-up."
    },
    {
      q: "Naka-store ba ang input ko sa server?",
      a: "Hindi. Ang version na ito ay ginagawa ang lahat sa browser."
    },
    {
      q: "Anong mga format ng image ang suportado?",
      a: "Suportado ang parehong transparent na PNG at SVG format."
    },
    {
      q: "Anong mga file ng logo ang maaari kong i-upload?",
      a: "Suportado ang karamihan ng karaniwang image formats hanggang 10MB."
    }
  ],
  footer: {
    privacy: "Privacy",
    terms: "Mga Kasunduan",
    openSource: "Open Source Licenses",
    copyright: "© Pixelyaki",
    trademark: "Ang QR Code ay isang registered trademark ng DENSO WAVE INCORPORATED."
  }
};
