import { FullTranslation } from "../types";

export const id: FullTranslation = {
  seo: {
    title: "Generator QR Code Pixelyaki | Unduh PNG/SVG Gratis",
    description: "Buat QR code dari teks secara instan tanpa daftar. Sesuaikan warna, tambahkan logo, dan unduh PNG transparan atau SVG."
  },
  header: {
    logo: "Pixelyaki",
    generate: "Buat"
  },
  hero: {
    eyebrow: "Tanpa daftar",
    title: "Ubah teks menjadi QR code seketika",
    description: "Sesuaikan warna, tambahkan logo, dan unduh PNG transparan atau SVG."
  },
  studio: {
    inputPanelTitle: "Input dan opsi",
    previewPanelTitle: "Pratinjau langsung",
    textLabel: "Teks",
    textPlaceholder: "Masukkan hingga 128 karakter",
    textRule: "Maksimum 128 karakter",
    foregroundColor: "Warna depan",
    backgroundColor: "Warna latar",
    transparentBackground: "Latar PNG transparan",
    logoLabel: "Unggah logo",
    logoHint: "Image files, maks 10MB",
    removeLogo: "Hapus logo",
    pngButton: "Unduh PNG",
    svgButton: "Unduh SVG",
    fileNameLabel: "Pratinjau nama file",
    emptyPreview: "Masukkan teks untuk melihat pratinjau QR.",
    generating: "Membuat QR...",
    invalidText: "Masukkan 1 hingga 128 karakter.",
    invalidLogoType: "Hanya file logo Image files yang didukung.",
    invalidLogoSize: "Ukuran file logo harus 10MB atau kurang.",
    renderError: "Terjadi kesalahan saat membuat kode QR.",
    contrastWarning: "Kontras rendah — kode QR mungkin tidak terbaca"
  },
  modes: {
    modeSelectorTitle: "Tipe QR",
    textModeLabel: "Teks",
    sendModeLabel: "QR Transfer Toss",
    urlModeLabel: "Tautan URL",
    emailModeLabel: "Email",
    phoneModeLabel: "Telepon",
    bankLabel: "Kode bank",
    bankPlaceholder: "Pilih bank",
    accountLabel: "Nomor rekening",
    accountPlaceholder: "Masukkan nomor rekening",
    amountLabel: "Jumlah (opsional)",
    amountPlaceholder: "mis. 10000",
    amountHint: "Kosongkan untuk membuat QR tanpa jumlah.",
    invalidAccount: "Periksa bank dan nomor rekening.",
    invalidAmount: "Jumlah harus berupa angka lebih dari 0.",
    sendEmptyPreview: "Masukkan bank dan rekening untuk pratinjau QR transfer.",
    urlLabel: "URL",
    urlPlaceholder: "mis. pixelyaki.com atau https://pixelyaki.com",
    invalidUrl: "Masukkan URL yang valid.",
    urlEmptyPreview: "Masukkan URL untuk pratinjau QR.",
    emailLabel: "Alamat email",
    emailPlaceholder: "mis. hello@pixelyaki.com",
    invalidEmail: "Masukkan alamat email yang valid.",
    emailEmptyPreview: "Masukkan email untuk pratinjau QR.",
    phoneLabel: "Nomor telepon",
    phonePlaceholder: "mis. +821012345678",
    invalidPhone: "Masukkan nomor telepon yang valid.",
    phoneEmptyPreview: "Masukkan nomor telepon untuk pratinjau QR."
  },
  extraModes: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "Nama jaringan (SSID)",
    wifiSsidPlaceholder: "mis. Pixelyaki_WiFi",
    wifiEncryptionLabel: "Enkripsi",
    wifiEncryptionWpa: "WPA/WPA2",
    wifiEncryptionWep: "WEP",
    wifiEncryptionNoPassword: "Tanpa kata sandi",
    wifiPasswordLabel: "Kata sandi",
    wifiPasswordPlaceholder: "Masukkan kata sandi Wi-Fi",
    wifiHiddenLabel: "Jaringan tersembunyi",
    wifiInvalid: "Periksa pengaturan Wi-Fi Anda.",
    wifiEmptyPreview: "Masukkan detail Wi-Fi untuk pratinjau QR.",
    vcardNameLabel: "Nama",
    vcardNamePlaceholder: "mis. Arthur Kim",
    vcardCompanyLabel: "Perusahaan",
    vcardCompanyPlaceholder: "mis. Pixelyaki",
    vcardPhoneLabel: "Nomor telepon",
    vcardPhonePlaceholder: "mis. +821012345678",
    vcardEmailLabel: "Email",
    vcardEmailPlaceholder: "mis. hello@pixelyaki.com",
    vcardAddressLabel: "Alamat",
    vcardAddressPlaceholder: "mis. Seoul, Korea",
    vcardInvalid: "Masukkan setidaknya nama.",
    vcardInvalidPhone: "Periksa format nomor telepon vCard.",
    vcardInvalidEmail: "Periksa format email vCard.",
    vcardEmptyPreview: "Masukkan detail kontak untuk pratinjau QR vCard.",
    smsPhoneLabel: "Telepon penerima",
    smsPhonePlaceholder: "mis. +821012345678",
    smsBodyLabel: "Pesan (opsional)",
    smsBodyPlaceholder: "mis. Halo",
    smsInvalid: "Periksa format nomor SMS.",
    smsEmptyPreview: "Masukkan nomor telepon untuk pratinjau QR SMS.",
    kakaopayModeLabel: "QR Transfer KakaoPay",
    kakaopayEmptyPreview: "Masukkan detail KakaoPay untuk pratinjau QR."
  },
  styles: {
    title: "Gaya QR",
    presetLabel: "Prasetel",
    dotsLabel: "Gaya titik",
    cornerSquareLabel: "Gaya sudut",
    cornerDotLabel: "Titik sudut",
    presetSquare: "Kotak",
    presetRounded: "Bulat",
    presetClassy: "Elegan",
    presetDot: "Titik",
    styleSquare: "Kotak Tajam",
    styleDots: "Gaya Titik",
    styleRounded: "Kotak Bulat",
    styleClassy: "Elegan",
    styleClassyRounded: "Elegan Bulat",
    styleExtraRounded: "Sangat Bulat",
    styleDot: "Titik",
    errorCorrectionLabel: "Kepadatan",
    eclL: "Rendah", eclM: "Sedang", eclQ: "Tinggi", eclH: "Maksimum"
  },
  features: [
    {
      title: "PNG Transparan",
      description: "Ekspor PNG transparan dengan ukuran otomatis."
    },
    {
      title: "Ekspor SVG",
      description: "Sangat cocok untuk pencetakan dan permukaan yang dapat diskalakan."
    },
    {
      title: "Warna Kustom",
      description: "Kontrol warna depan dan latar belakang."
    },
    {
      title: "Sematkan Logo",
      description: "Logo tengah dengan PNG, JPG, atau SVG hingga 10MB."
    },
    {
      title: "Tanpa Penyimpanan Server",
      description: "Dibuat hanya di browser, tidak perlu akun."
    }
  ],
  faqTitle: "Pertanyaan Umum",
  faq: [
    {
      q: "Apa itu generator kode QR ini?",
      a: "Ini mengubah teks Anda menjadi kode QR yang dapat diunduh seketika."
    },
    {
      q: "Apakah ini gratis digunakan?",
      a: "Ya, versi MVP gratis dan tidak memerlukan pendaftaran."
    },
    {
      q: "Apakah input saya disimpan di server?",
      a: "Tidak. Versi ini menghasilkan semuanya di dalam browser."
    },
    {
      q: "Format gambar apa yang didukung?",
      a: "PNG transparan (ukuran otomatis) dan SVG keduanya didukung."
    },
    {
      q: "File logo apa saja yang bisa saya unggah?",
      a: "PNG, JPG, dan SVG didukung hingga 10MB."
    }
  ],
  footer: {
    privacy: "Privasi",
    terms: "Ketentuan",
    openSource: "Lisensi Sumber Terbuka",
    copyright: "© Pixelyaki",
    trademark: "QR Code adalah merek dagang dari DENSO WAVE INCORPORATED."
  }
};
