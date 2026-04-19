import { FullTranslation } from "../types";

export const ms: FullTranslation = {
  seo: {
    title: "Buat Kod QR Pixelyaki | Muat turun PNG/SVG Percuma",
    description: "Tukar teks kepada kod QR dengan segera tanpa pendaftaran. Menyokong penyesuaian warna, penambahan logo, muat turun PNG telus dan SVG."
  },
  header: {
    logo: "Pixelyaki",
    generate: "Buat Kod QR"
  },
  hero: {
    eyebrow: "Tiada pendaftaran diperlukan",
    title: "Tukar teks kepada kod QR dengan pantas",
    description: "Sesuaikan warna, masukkan logo, dan eksport sebagai PNG telus atau SVG dengan segera."
  },
  studio: {
    inputPanelTitle: "Input dan pilihan",
    previewPanelTitle: "Pratonton langsung",
    textLabel: "Teks",
    textPlaceholder: "Masukkan sehingga 128 aksara",
    textRule: "Maksimum 128 aksara",
    foregroundColor: "Warna hadapan",
    backgroundColor: "Warna latar belakang",
    transparentBackground: "Latar belakang PNG telus",
    logoLabel: "Muat naik logo",
    logoHint: "Fail imej, sehingga 10MB",
    removeLogo: "Buang logo",
    pngButton: "Muat turun PNG",
    svgButton: "Muat turun SVG",
    fileNameLabel: "Pratonton nama fail",
    emptyPreview: "Masukkan teks untuk melihat pratonton QR.",
    generating: "Menjana QR...",
    invalidText: "Sila masukkan 1 hingga 128 aksara.",
    invalidLogoType: "Hanya fail imej disokong untuk logo.",
    invalidLogoSize: "Saiz fail logo mestilah 10MB atau kurang.",
    renderError: "Ralat berlaku semasa menjana kod QR.",
    contrastWarning: "Kontras rendah — kod QR mungkin tidak dapat dikesan dengan tepat"
  },
  modes: {
    modeSelectorTitle: "Jenis QR",
    textModeLabel: "Teks",
    sendModeLabel: "Pindahan Toss",
    urlModeLabel: "URL",
    emailModeLabel: "E-mel",
    phoneModeLabel: "No. Telefon",
    bankLabel: "Kod bank",
    bankPlaceholder: "Pilih bank",
    accountLabel: "No. Akaun",
    accountPlaceholder: "Masukkan no. akaun",
    amountLabel: "Amaun (pilihan)",
    amountPlaceholder: "cth. 10000",
    amountHint: "Biarkan kosong untuk QR pindahan tanpa amaun.",
    invalidAccount: "Sila semak bank dan no. akaun.",
    invalidAmount: "Amaun mestilah nombor lebih daripada 0.",
    sendEmptyPreview: "Masukkan bank dan no. akaun untuk melihat pratonton QR pindahan.",
    urlLabel: "URL",
    urlPlaceholder: "cth. pixelyaki.com atau https://pixelyaki.com",
    invalidUrl: "Sila masukkan URL yang sah.",
    urlEmptyPreview: "Masukkan URL untuk melihat pratonton kod QR.",
    emailLabel: "Alamat e-mel",
    emailPlaceholder: "cth. hello@pixelyaki.com",
    invalidEmail: "Sila masukkan alamat e-mel yang sah.",
    emailEmptyPreview: "Masukkan alamat e-mel untuk melihat pratonton kod QR.",
    phoneLabel: "No. telefon",
    phonePlaceholder: "cth. +60123456789",
    invalidPhone: "Sila masukkan no. telefon yang sah.",
    phoneEmptyPreview: "Masukkan no. telefon untuk melihat pratonton kod QR."
  },
  extraModes: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "Nama rangkaian (SSID)",
    wifiSsidPlaceholder: "cth. Pixelyaki_WiFi",
    wifiEncryptionLabel: "Penyulitan",
    wifiEncryptionWpa: "WPA/WPA2",
    wifiEncryptionWep: "WEP",
    wifiEncryptionNoPassword: "Tiada kata laluan",
    wifiPasswordLabel: "Kata laluan",
    wifiPasswordPlaceholder: "Masukkan kata laluan Wi-Fi",
    wifiHiddenLabel: "Rangkaian tersembunyi",
    wifiInvalid: "Sila semak tetapan Wi-Fi anda.",
    wifiEmptyPreview: "Masukkan butiran Wi-Fi untuk melihat pratonton kod QR.",
    vcardNameLabel: "Nama",
    vcardNamePlaceholder: "cth. Arthur Kim",
    vcardCompanyLabel: "Syarikat",
    vcardCompanyPlaceholder: "cth. Pixelyaki",
    vcardPhoneLabel: "No. telefon",
    vcardPhonePlaceholder: "cth. +60123456789",
    vcardEmailLabel: "E-mel",
    vcardEmailPlaceholder: "cth. hello@pixelyaki.com",
    vcardAddressLabel: "Alamat",
    vcardAddressPlaceholder: "cth. Kuala Lumpur, Malaysia",
    vcardInvalid: "Sila masukkan sekurang-kurangnya nama.",
    vcardInvalidPhone: "Sila semak format no. telefon vCard.",
    vcardInvalidEmail: "Sila semak format e-mel vCard.",
    vcardEmptyPreview: "Masukkan butiran kenalan untuk melihat pratonton vCard QR.",
    smsPhoneLabel: "Telefon penerima",
    smsPhonePlaceholder: "cth. +60123456789",
    smsBodyLabel: "Mesej (pilihan)",
    smsBodyPlaceholder: "cth. Hello!",
    smsInvalid: "Sila semak format no. telefon SMS.",
    smsEmptyPreview: "Masukkan no. telefon untuk melihat pratonton SMS QR.",
    kakaopayModeLabel: "Pindahan KakaoPay",
    kakaopayEmptyPreview: "Masukkan butiran KakaoPay untuk melihat pratonton.",
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
    title: "Gaya QR",
    presetLabel: "Praset",
    dotsLabel: "Titik",
    cornerSquareLabel: "Pepuru bucu",
    cornerDotLabel: "Titik bucu",
    presetSquare: "Segi empat",
    presetRounded: "Bulat",
    presetClassy: "Klasik",
    presetDot: "Titik",
    styleSquare: "Segi empat",
    styleDots: "Titik",
    styleRounded: "Segi empat Bulat",
    styleClassy: "Gaya Klasik",
    styleClassyRounded: "Klasik Bulat",
    styleExtraRounded: "Sangat Bulat",
    styleDot: "Titik Tunggal",
    errorCorrectionLabel: "Ketumpatan",
    eclL: "Rendah", eclM: "Sederhana", eclQ: "Tinggi", eclH: "Tertinggi"
  },
  features: [
    {
      title: "PNG Telus",
      description: "Eksport PNG telus dengan saiz automatik."
    },
    {
      title: "Eksport SVG",
      description: "Sempurna untuk cetakan dan permukaan boleh laras saiz."
    },
    {
      title: "Warna Tersuai",
      description: "Kawalan untuk warna hadapan dan latar belakang."
    },
    {
      title: "Masukkan Logo",
      description: "Pusatkan logo dengan sebarang format imej sehingga 10MB."
    },
    {
      title: "Tiada Simpanan Sunayan",
      description: "Dijana dalam pelayar sahaja, tiada akaun diperlukan."
    }
  ],
  faqTitle: "Soalan Lazim",
  faq: [
    {
      q: "Apa itu penjana kod QR ini?",
      a: "Tukar teks anda kepada kod QR yang boleh dimuat turun dengan segera."
    },
    {
      q: "Adakah ini percuma untuk digunakan?",
      a: "Ya, MVP ini percuma dan tidak memerlukan pendaftaran."
    },
    {
      q: "Adakah input saya disimpan dalam pelayan?",
      a: "Tidak. Versi ini menjana segala-galanya dalam pelayar."
    },
    {
      q: "Format imej apa yang disokong?",
      a: "Kedua-dua format PNG telus dan SVG disokong."
    },
    {
      q: "Fail logo apa yang boleh saya muat naik?",
      a: "Kebanyakan format imej biasa sehingga 10MB disokong."
    }
  ],
  footer: {
    privacy: "Privasi",
    terms: "Syarat",
    openSource: "Lesen Sumber Terbuka",
    copyright: "© Pixelyaki",
    trademark: "QR Code adalah tanda dagangan berdaftar DENSO WAVE INCORPORATED."
  }
};
