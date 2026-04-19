import { FullTranslation } from "../types";

export const ar: FullTranslation = {
  seo: {
    title: "مولّد رمز QR من Pixelyaki | PNG/SVG مجاني",
    description: "أنشئ رموز QR من النص فورًا بدون تسجيل. خصّص الألوان وأضف شعارًا وحمّل PNG شفافًا أو SVG."
  },
  header: {
    logo: "Pixelyaki",
    generate: "إنشاء"
  },
  hero: {
    eyebrow: "بدون تسجيل",
    title: "حوّل النص إلى رمز QR فورًا",
    description: "خصّص الألوان، أضف شعارًا، وحمّل PNG شفافًا أو SVG."
  },
  studio: {
    inputPanelTitle: "الإدخال والخيارات",
    previewPanelTitle: "معاينة مباشرة",
    textLabel: "النص",
    textPlaceholder: "أدخل حتى 128 حرفًا",
    textRule: "128 حرفًا كحد أقصى",
    foregroundColor: "لون الواجهة",
    backgroundColor: "لون الخلفية",
    transparentBackground: "خلفية PNG شفافة",
    logoLabel: "رفع الشعار",
    logoHint: "PNG/JPG/SVG، حتى 2MB",
    removeLogo: "إزالة الشعار",
    pngButton: "تنزيل PNG",
    svgButton: "تنزيل SVG",
    fileNameLabel: "معاينة اسم الملف",
    emptyPreview: "أدخل نصًا لمعاينة رمز QR.",
    generating: "جارٍ إنشاء رمز QR...",
    invalidText: "أدخل ما بين 1 و128 حرفًا.",
    invalidLogoType: "يُدعم فقط PNG/JPG/SVG.",
    invalidLogoSize: "يجب أن يكون حجم الشعار 2MB أو أقل.",
    renderError: "حدث خطأ أثناء إنشاء رمز QR.",
    contrastWarning: "التباين منخفض — قد لا يُقرأ رمز QR بشكل موثوق"
  },
  modes: {
    modeSelectorTitle: "نوع QR",
    textModeLabel: "نص",
    sendModeLabel: "QR تحويل Toss",
    urlModeLabel: "رابط URL",
    emailModeLabel: "البريد الإلكتروني",
    phoneModeLabel: "هاتف",
    bankLabel: "رمز البنك",
    bankPlaceholder: "اختر بنكًا",
    accountLabel: "رقم الحساب",
    accountPlaceholder: "أدخل رقم الحساب",
    amountLabel: "المبلغ (اختياري)",
    amountPlaceholder: "مثال: 10000",
    amountHint: "اتركه فارغًا لإنشاء QR بدون مبلغ.",
    invalidAccount: "تحقق من البنك ورقم الحساب.",
    invalidAmount: "يجب أن يكون المبلغ رقمًا أكبر من 0.",
    sendEmptyPreview: "أدخل البنك والحساب لمعاينة QR التحويل.",
    urlLabel: "URL",
    urlPlaceholder: "مثال: pixelyaki.com أو https://pixelyaki.com",
    invalidUrl: "أدخل URL صحيحًا.",
    urlEmptyPreview: "أدخل URL لمعاينة رمز QR.",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "مثال: hello@pixelyaki.com",
    invalidEmail: "أدخل بريدًا إلكترونيًا صحيحًا.",
    emailEmptyPreview: "أدخل بريدًا إلكترونيًا لمعاينة رمز QR.",
    phoneLabel: "رقم الهاتف",
    phonePlaceholder: "مثال: +821012345678",
    invalidPhone: "أدخل رقم هاتف صحيحًا.",
    phoneEmptyPreview: "أدخل رقم هاتف لمعاينة رمز QR."
  },
  extraModes: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "اسم الشبكة (SSID)",
    wifiSsidPlaceholder: "مثال: Pixelyaki_WiFi",
    wifiEncryptionLabel: "التشفير",
    wifiEncryptionWpa: "WPA/WPA2",
    wifiEncryptionWep: "WEP",
    wifiEncryptionNoPassword: "بدون كلمة مرور",
    wifiPasswordLabel: "كلمة المرور",
    wifiPasswordPlaceholder: "أدخل كلمة مرور Wi-Fi",
    wifiHiddenLabel: "شبكة مخفية",
    wifiInvalid: "تحقق من إعدادات Wi-Fi الخاصة بك.",
    wifiEmptyPreview: "أدخل تفاصيل Wi-Fi لمعاينة رمز QR.",
    vcardNameLabel: "الاسم",
    vcardNamePlaceholder: "مثال: Arthur Kim",
    vcardCompanyLabel: "الشركة",
    vcardCompanyPlaceholder: "مثال: Pixelyaki",
    vcardPhoneLabel: "رقم الهاتف",
    vcardPhonePlaceholder: "مثال: +821012345678",
    vcardEmailLabel: "البريد الإلكتروني",
    vcardEmailPlaceholder: "مثال: hello@pixelyaki.com",
    vcardAddressLabel: "العنوان",
    vcardAddressPlaceholder: "مثال: Seoul, Korea",
    vcardInvalid: "يرجى إدخال اسم على الأقل.",
    vcardInvalidPhone: "يرجى التحقق من تنسيق رقم هاتف vCard.",
    vcardInvalidEmail: "يرجى التحقق من تنسيق البريد الإلكتروني لـ vCard.",
    vcardEmptyPreview: "أدخل تفاصيل الاتصال لمعاينة رمز QR لـ vCard.",
    smsPhoneLabel: "هاتف المستلم",
    smsPhonePlaceholder: "مثال: +821012345678",
    smsBodyLabel: "الرسالة (اختياري)",
    smsBodyPlaceholder: "مثال: مرحبًا!",
    smsInvalid: "يرجى التحقق من تنسيق رقم هاتف SMS.",
    smsEmptyPreview: "أدخل رقم هاتف لمعاينة رمز QR لـ SMS.",
    kakaopayModeLabel: "QR تحويل KakaoPay",
    kakaopayEmptyPreview: "أدخل تفاصيل تحويل KakaoPay لمعاينة رمز QR."
  },
  styles: {
    title: "نمط QR",
    presetLabel: "الإعداد المسبق",
    dotsLabel: "نمط النقاط",
    cornerSquareLabel: "نمط الزاوية",
    cornerDotLabel: "نقطة الزاوية",
    presetSquare: "مربع",
    presetRounded: "مستدير",
    presetClassy: "أنيق",
    presetDot: "نقاط",
    styleSquare: "مربع حاد",
    styleDots: "نقاط",
    styleRounded: "مربع مستدير",
    styleClassy: "أنيق",
    styleClassyRounded: "أنيق مستدير",
    styleExtraRounded: "مستدير جداً",
    styleDot: "نقطة",
    errorCorrectionLabel: "الكثافة",
    eclL: "منخفضة", eclM: "متوسطة", eclQ: "عالية", eclH: "أقصى"
  },
  features: [
    {
      title: "PNG شفاف",
      description: "تصدير PNG شفاف بحجم تلقائي."
    },
    {
      title: "تصدير SVG",
      description: "مثالي للطباعة والأسطح القابلة للتطوير."
    },
    {
      title: "ألوان مخصصة",
      description: "التحكم في ألوان الواجهة والخلفية."
    },
    {
      title: "إدراج شعار",
      description: "شعار مركزي بصيغ PNG أو JPG أو SVG حتى 2 ميجابايت."
    },
    {
      title: "لا يتم التخزين على الخادم",
      description: "يتم الإنشاء في المتصفح فقط، لا حاجة لحساب."
    }
  ],
  faqTitle: "الأسئلة الشائعة",
  faq: [
    {
      q: "ما هو مولد رمز QR هذا؟",
      a: "يقوم بتحويل نصك إلى رمز QR قابل للتنزيل فورًا."
    },
    {
      q: "هل هذا مجاني للاستخدام؟",
      a: "نعم، الإصدار الحالي مجاني ولا يتطلب التسجيل."
    },
    {
      q: "هل يتم تخزين مدخلاتي على خادم؟",
      a: "لا. هذا الإصدار يقوم بإنشاء كل شيء داخل المتصفح."
    },
    {
      q: "ما هي مخرجات الصور المدعومة؟",
      a: "يتم دعم كل من PNG الشفاف (بحجم تلقائي) وSVG."
    },
    {
      q: "ما هي ملفات الشعارات التي يمكنني رفعها؟",
      a: "يتم دعم صيغ PNG وJPG وSVG حتى 2 ميجابايت."
    }
  ],
  footer: {
    privacy: "الخصوصية",
    terms: "شروط الخدمة",
    openSource: "تراخيص المصدر المفتوح",
    copyright: "© Pixelyaki",
    trademark: ".QR Code علامة تجارية مسجلة لـ DENSO WAVE INCORPORATED"
  }
};
