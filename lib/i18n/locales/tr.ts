import { FullTranslation } from "../types";

export const tr: FullTranslation = {
  seo: {
    title: "Pixelyaki QR Kod Oluşturucu | Ücretsiz PNG/SVG İndir",
    description: "Kayıt olmadan metni anında QR koda dönüştürün. Renk özelleştirme, logo ekleme, şeffaf PNG ve SVG indirme desteği."
  },
  header: {
    logo: "Pixelyaki",
    generate: "Oluştur"
  },
  hero: {
    eyebrow: "Kayıt gerekmez",
    title: "Metni anında QR kodlara dönüştürün",
    description: "Renkleri özelleştirin, logo ekleyin ve anında şeffaf PNG veya SVG olarak dışa aktarın."
  },
  studio: {
    inputPanelTitle: "Giriş ve seçenekler",
    previewPanelTitle: "Canlı önizleme",
    textLabel: "Metin",
    textPlaceholder: "En fazla 128 karakter girin",
    textRule: "Maksimum 128 karakter",
    foregroundColor: "Ön plan rengi",
    backgroundColor: "Arka plan rengi",
    transparentBackground: "Şeffaf PNG arka planı",
    logoLabel: "Logo yükle",
    logoHint: "Resim dosyaları, maks. 10MB",
    removeLogo: "Logoyu kaldır",
    pngButton: "PNG İndir",
    svgButton: "SVG İndir",
    fileNameLabel: "Dosya adı önizleme",
    emptyPreview: "QR önizlemesini görmek için metin girin.",
    generating: "QR oluşturuluyor...",
    invalidText: "Lütfen 1 ile 128 karakter arasında bir metin girin.",
    invalidLogoType: "Logo için sadece resim dosyaları desteklenir.",
    invalidLogoSize: "Logo dosya boyutu 10MB veya daha az olmalıdır.",
    renderError: "QR kodu oluşturulurken bir hata oluştu.",
    contrastWarning: "Düşük kontrast - QR kod güvenilir şekilde taranmayabilir"
  },
  modes: {
    modeSelectorTitle: "QR Türü",
    textModeLabel: "Metin",
    sendModeLabel: "Toss Transferi",
    urlModeLabel: "URL",
    emailModeLabel: "E-posta",
    phoneModeLabel: "Telefon",
    bankLabel: "Banka kodu",
    bankPlaceholder: "Bir banka seçin",
    accountLabel: "Hesap numarası",
    accountPlaceholder: "Hesap numarasını girin",
    amountLabel: "Tutar (isteğe bağlı)",
    amountPlaceholder: "ör. 10000",
    amountHint: "Tutarsız transfer QR'ı oluşturmak için boş bırakın.",
    invalidAccount: "Lütfen banka ve hesap numarasını kontrol edin.",
    invalidAmount: "Tutar 0'dan büyük bir sayı olmalıdır.",
    sendEmptyPreview: "Transfer QR'ını önizlemek için banka ve hesap numarasını girin.",
    urlLabel: "URL",
    urlPlaceholder: "ör. pixelyaki.com veya https://pixelyaki.com",
    invalidUrl: "Lütfen geçerli bir URL girin.",
    urlEmptyPreview: "QR kodunu önizlemek için bir URL girin.",
    emailLabel: "E-posta adresi",
    emailPlaceholder: "ör. hello@pixelyaki.com",
    invalidEmail: "Lütfen geçerli bir e-posta adresi girin.",
    emailEmptyPreview: "QR kodunu önizlemek için bir e-posta adresi girin.",
    phoneLabel: "Telefon numarası",
    phonePlaceholder: "ör. +905001234567",
    invalidPhone: "Lütfen geçerli bir telefon numarası girin.",
    phoneEmptyPreview: "QR kodunu önizlemek için bir telefon numarası girin."
  },
  extraModes: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "Ağ adı (SSID)",
    wifiSsidPlaceholder: "ör. Pixelyaki_WiFi",
    wifiEncryptionLabel: "Şifreleme",
    wifiEncryptionWpa: "WPA/WPA2",
    wifiEncryptionWep: "WEP",
    wifiEncryptionNoPassword: "Şifre yok",
    wifiPasswordLabel: "Şifre",
    wifiPasswordPlaceholder: "Wi-Fi şifresini girin",
    wifiHiddenLabel: "Gizli ağ",
    wifiInvalid: "Lütfen Wi-Fi ayarlarınızı kontrol edin.",
    wifiEmptyPreview: "QR kodunu önizlemek için Wi-Fi bilgilerini girin.",
    vcardNameLabel: "Ad Soyad",
    vcardNamePlaceholder: "ör. Arthur Kim",
    vcardCompanyLabel: "Şirket",
    vcardCompanyPlaceholder: "ör. Pixelyaki",
    vcardPhoneLabel: "Telefon numarası",
    vcardPhonePlaceholder: "ör. +905001234567",
    vcardEmailLabel: "E-posta",
    vcardEmailPlaceholder: "ör. hello@pixelyaki.com",
    vcardAddressLabel: "Adres",
    vcardAddressPlaceholder: "ör. İstanbul, Türkiye",
    vcardInvalid: "Lütfen en az bir ad girin.",
    vcardInvalidPhone: "Lütfen vCard telefon numarası biçimini kontrol edin.",
    vcardInvalidEmail: "Lütfen vCard e-posta biçimini kontrol edin.",
    vcardEmptyPreview: "vCard QR kodunu önizlemek için iletişim bilgilerini girin.",
    smsPhoneLabel: "Alıcı telefon",
    smsPhonePlaceholder: "ör. +905001234567",
    smsBodyLabel: "Mesaj (isteğe bağlı)",
    smsBodyPlaceholder: "ör. Merhaba!",
    smsInvalid: "Lütfen SMS telefon numarası biçimini kontrol edin.",
    smsEmptyPreview: "SMS QR kodunu önizlemek için bir telefon numarası girin.",
    kakaopayModeLabel: "KakaoPay Transferi",
    kakaopayEmptyPreview: "KakaoPay transfer bilgilerini girerek önizleme yapın."
  },
  styles: {
    title: "QR stili",
    presetLabel: "Hazır ayar",
    dotsLabel: "Nokta stili",
    cornerSquareLabel: "Köşe stili",
    cornerDotLabel: "Köşe noktası",
    presetSquare: "Kare",
    presetRounded: "Yuvarlak",
    presetClassy: "Şık",
    presetDot: "Nokta",
    styleSquare: "Kare",
    styleDots: "Noktalar",
    styleRounded: "Yuvarlak Kare",
    styleClassy: "Şık Stil",
    styleClassyRounded: "Şık Yuvarlak",
    styleExtraRounded: "Ekstra Yuvarlak",
    styleDot: "Tek Nokta",
    errorCorrectionLabel: "Yoğunluk",
    eclL: "Düşük", eclM: "Orta", eclQ: "Yüksek", eclH: "En Yüksek"
  },
  features: [
    {
      title: "Şeffaf PNG",
      description: "Otomatik boyutlandırılmış şeffaf PNG dışa aktarma."
    },
    {
      title: "SVG Dışa Aktarma",
      description: "Baskı ve ölçeklenebilir yüzeyler için mükemmel."
    },
    {
      title: "Özel Renkler",
      description: "Ön plan ve arka plan rengi kontrolleri."
    },
    {
      title: "Logo Gömme",
      description: "10 MB'a kadar her türlü resim formatıyla logoyu merkeze yerleştirin."
    },
    {
      title: "Sunucu Depolaması Yok",
      description: "Her şey tarayıcıda oluşturulur, hesap gerekmez."
    }
  ],
  faqTitle: "Sıkça Sorulan Sorular",
  faq: [
    {
      q: "Bu QR kod oluşturucu nedir?",
      a: "Metninizi anında indirilebilir bir QR koduna dönüştürür."
    },
    {
      q: "Kullanımı ücretsiz mi?",
      a: "Evet, tamamen ücretsizdir ve kayıt gerektirmez."
    },
    {
      q: "Girdilerim sunucuda saklanıyor mu?",
      a: "Hayır. Bu sürüm her şeyi tarayıcıda oluşturur."
    },
    {
      q: "Hangi görüntü çıktıları destekleniyor?",
      a: "Şeffaf PNG ve SVG formatları desteklenmektedir."
    },
    {
      q: "Hangi logo dosyalarını yükleyebilirim?",
      a: "10 MB'a kadar yaygın resim formatları desteklenmektedir."
    }
  ],
  footer: {
    privacy: "Gizlilik",
    terms: "Şartlar",
    openSource: "Açık Kaynak Lisansları",
    copyright: "© Pixelyaki",
    trademark: "QR Code, DENSO WAVE INCORPORATED'ın tescilli markasıdır."
  }
};
