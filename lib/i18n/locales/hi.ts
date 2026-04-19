import { FullTranslation } from "../types";

export const hi: FullTranslation = {
  seo: {
    title: "Pixelyaki QR कोड जेनरेटर | मुफ्त PNG/SVG डाउनलोड",
    description: "बिना साइन-अप के टेक्स्ट से QR कोड तुरंत बनाएं। रंग कस्टमाइज़ करें, लोगो जोड़ें और PNG या SVG डाउनलोड करें।"
  },
  header: {
    logo: "Pixelyaki",
    generate: "बनाएं"
  },
  hero: {
    eyebrow: "बिना साइन-अप के",
    title: "टेक्स्ट को तुरंत QR कोड में बदलें",
    description: "रंग कस्टमाइज़ करें, लोगो जोड़ें और पारदर्शी PNG या SVG डाउनलोड करें।"
  },
  studio: {
    inputPanelTitle: "इनपुट और विकल्प",
    previewPanelTitle: "लाइव प्रीव्यू",
    textLabel: "टेक्स्ट",
    textPlaceholder: "128 अक्षर तक दर्ज करें",
    textRule: "अधिकतम 128 अक्षर",
    foregroundColor: "फ़ोरग्राउंड रंग",
    backgroundColor: "बैकग्राउंड रंग",
    transparentBackground: "पारदर्शी PNG बैकग्राउंड",
    logoLabel: "लोगो अपलोड करें",
    logoHint: "Image files, अधिकतम 10MB",
    removeLogo: "लोगो हटाएं",
    pngButton: "PNG डाउनलोड करें",
    svgButton: "SVG डाउनलोड करें",
    fileNameLabel: "फ़ाइल नाम प्रीव्यू",
    emptyPreview: "QR प्रीव्यू देखने के लिए टेक्स्ट दर्ज करें।",
    generating: "QR बना रहे हैं...",
    invalidText: "कृपया 1 से 128 अक्षर दर्ज करें।",
    invalidLogoType: "केवल Image files लोगो फ़ाइलें समर्थित हैं।",
    invalidLogoSize: "लोगो फ़ाइल का आकार 10MB या कम होना चाहिए।",
    renderError: "QR कोड बनाते समय एक त्रुटि हुई।",
    contrastWarning: "कम कंट्रास्ट — QR कोड स्कैन नहीं हो सकता"
  },
  modes: {
    modeSelectorTitle: "QR प्रकार",
    textModeLabel: "टेक्स्ट",
    sendModeLabel: "Toss ट्रांसफर QR",
    urlModeLabel: "URL लिंक",
    emailModeLabel: "ईमेल",
    phoneModeLabel: "फ़ोन",
    bankLabel: "बैंक कोड",
    bankPlaceholder: "बैंक चुनें",
    accountLabel: "खाता नंबर",
    accountPlaceholder: "खाता नंबर दर्ज करें",
    amountLabel: "राशि (वैकल्पिक)",
    amountPlaceholder: "जैसे 10000",
    amountHint: "राशि के बिना QR बनाने के लिए खाली छोड़ें।",
    invalidAccount: "बैंक और खाता नंबर जांचें।",
    invalidAmount: "राशि 0 से अधिक की संख्या होनी चाहिए।",
    sendEmptyPreview: "ट्रांसфер QR देखने के लिए बैंक और खाता दर्ज करें।",
    urlLabel: "URL",
    urlPlaceholder: "जैसे pixelyaki.com या https://pixelyaki.com",
    invalidUrl: "कृपया एक वैध URL दर्ज करें।",
    urlEmptyPreview: "QR प्रीव्यू के लिए URL दर्ज करें।",
    emailLabel: "ईमेल पता",
    emailPlaceholder: "जैसे hello@pixelyaki.com",
    invalidEmail: "कृपया एक वैध ईमेल पता दर्ज करें।",
    emailEmptyPreview: "QR प्रीव्यू के लिए ईमेल दर्ज करें।",
    phoneLabel: "फ़ोन नंबर",
    phonePlaceholder: "जैसे +821012345678",
    invalidPhone: "कृपया एक वैध फ़ोन नंबर दर्ज करें।",
    phoneEmptyPreview: "QR प्रीव्यू के लिए फ़ोन नंबर दर्ज करें।"
  },
  extraModes: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "नेटवर्क का नाम (SSID)",
    wifiSsidPlaceholder: "जैसे Pixelyaki_WiFi",
    wifiEncryptionLabel: "एन्क्रिप्शन",
    wifiEncryptionWpa: "WPA/WPA2",
    wifiEncryptionWep: "WEP",
    wifiEncryptionNoPassword: "कोई पासवर्ड नहीं",
    wifiPasswordLabel: "पासवर्ड",
    wifiPasswordPlaceholder: "Wi-Fi पासवर्ड दर्ज करें",
    wifiHiddenLabel: "छिपा हुआ नेटवर्क",
    wifiInvalid: "कृपया अपनी Wi-Fi सेटिंग जांचें।",
    wifiEmptyPreview: "QR कोड देखने के लिए Wi-Fi विवरण दर्ज करें।",
    vcardNameLabel: "नाम",
    vcardNamePlaceholder: "जैसे Arthur Kim",
    vcardCompanyLabel: "कंपनी",
    vcardCompanyPlaceholder: "जैसे Pixelyaki",
    vcardPhoneLabel: "फ़ोन नंबर",
    vcardPhonePlaceholder: "जैसे +821012345678",
    vcardEmailLabel: "ईमेल",
    vcardEmailPlaceholder: "जैसे hello@pixelyaki.com",
    vcardAddressLabel: "पता",
    vcardAddressPlaceholder: "जैसे Seoul, Korea",
    vcardInvalid: "कृपया कम से कम एक नाम दर्ज करें।",
    vcardInvalidPhone: "कृपया vCard फ़ोन नंबर प्रारूप जांचें।",
    vcardInvalidEmail: "कृपया vCard ईमेल प्रारूप जांचें।",
    vcardEmptyPreview: "vCard QR कोड देखने के लिए संपर्क विवरण दर्ज करें।",
    smsPhoneLabel: "प्राप्तकर्ता फ़ोन",
    smsPhonePlaceholder: "जैसे +821012345678",
    smsBodyLabel: "संदेश (वैकल्पिक)",
    smsBodyPlaceholder: "जैसे नमस्ते!",
    smsInvalid: "कृपया SMS फ़ोन नंबर प्रारूप जांचें।",
    smsEmptyPreview: "SMS QR कोड देखने के लिए फ़ोन नंबर दर्ज करें।",
    kakaopayModeLabel: "KakaoPay ट्रांसफर QR",
    kakaopayEmptyPreview: "QR कोड देखने के लिए KakaoPay ट्रांसफर विवरण दर्ज करें।"
  },
  styles: {
    title: "QR स्टाइल",
    presetLabel: "प्रीसेट",
    dotsLabel: "डॉट्स शैली",
    cornerSquareLabel: "कोने का आकार",
    cornerDotLabel: "कोने का डॉट",
    presetSquare: "वर्गाकार",
    presetRounded: "गोल",
    presetClassy: "शानदार",
    presetDot: "डॉट",
    styleSquare: "तीखा वर्गाकार",
    styleDots: "बिंदु आकार",
    styleRounded: "गोल वर्गाकार",
    styleClassy: "शानदार",
    styleClassyRounded: "शानदार गोल",
    styleExtraRounded: "अतिरिक्त गोल",
    styleDot: "बिंदु",
    errorCorrectionLabel: "घनत्व",
    eclL: "कम", eclM: "मध्यम", eclQ: "उच्च", eclH: "अधिकतम"
  },
  features: [
    {
      title: "पारदर्शी PNG",
      description: "स्वचालित आकार के पारदर्शी PNG निर्यात।"
    },
    {
      title: "SVG निर्यात",
      description: "प्रिंट और स्केलेबल सतहों के लिए बिल्कुल सही।"
    },
    {
      title: "कस्टम रंग",
      description: "फ़ोरग्राउंड और बैकग्राउंड रंग नियंत्रण।"
    },
    {
      title: "लोगो एम्बेड",
      description: "10MB तक के PNG, JPG या SVG के साथ केंद्र लोगो।"
    },
    {
      title: "कोई सर्वर स्टोरेज नहीं",
      description: "केवल ब्राउज़र में बनाया गया, किसी खाते की आवश्यकता नहीं।"
    }
  ],
  faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
  faq: [
    {
      q: "यह QR कोड जनरेटर क्या है?",
      a: "यह आपके टेक्स्ट को तुरंत डाउनलोड करने योग्य QR कोड में बदल देता है।"
    },
    {
      q: "क्या यह उपयोग करने के लिए मुफ़्त है?",
      a: "हाँ, यह मुफ़्त है और इसके लिए साइन-अप की आवश्यकता नहीं है।"
    },
    {
      q: "क्या मेरा इनपुट सर्वर पर संग्रहीत है?",
      a: "नहीं। यह संस्करण ब्राउज़र के भीतर ही सब कुछ बनाता है।"
    },
    {
      q: "कौन से इमेज आउटपुट समर्थित हैं?",
      a: "पारदर्शी PNG (स्वचालित आकार) और SVG दोनों समर्थित हैं।"
    },
    {
      q: "मैं कौन सी लोगो फ़ाइलें अपलोड कर सकता हूँ?",
      a: "10MB तक PNG, JPG और SVG समर्थित हैं।"
    }
  ],
  footer: {
    privacy: "गोपनीयता",
    terms: "सेवा की शर्तें",
    openSource: "ओ픈 source लाइसेंस",
    copyright: "© Pixelyaki",
    trademark: "QR Code, DENSO WAVE INCORPORATED का ट्रेडमार्क है।"
  }
};
