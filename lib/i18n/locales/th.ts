import { FullTranslation } from "../types";

export const th: FullTranslation = {
  seo: {
    title: "สร้าง QR Code Pixelyaki | ดาวน์โหลด PNG/SVG ฟรี",
    description: "สร้าง QR Code จากข้อความได้ทันที ไม่ต้องสมัครสมาชิก ปรับแต่งสี ใส่โลโก้ และดาวน์โหลด PNG โปร่งใสหรือ SVG"
  },
  header: {
    logo: "Pixelyaki",
    generate: "สร้าง QR Code"
  },
  hero: {
    eyebrow: "ไม่ต้องสมัครสมาชิก",
    title: "แปลงข้อความเป็น QR Code ทันที",
    description: "ปรับแต่งสี ใส่โลโก้ และดาวน์โหลด PNG โปร่งใสหรือ SVG"
  },
  studio: {
    inputPanelTitle: "ข้อมูลและตัวเลือก",
    previewPanelTitle: "ดูตัวอย่างแบบเรียลไทม์",
    textLabel: "ข้อความ",
    textPlaceholder: "ป้อนข้อความสูงสุด 128 ตัวอักษร",
    textRule: "สูงสุด 128 ตัวอักษร",
    foregroundColor: "สีพื้นหน้า",
    backgroundColor: "สีพื้นหลัง",
    transparentBackground: "PNG พื้นหลังโปร่งใส",
    logoLabel: "อัปโหลดโลโก้",
    logoHint: "Image files ไม่เกิน 10MB",
    removeLogo: "ลบโลโก้",
    pngButton: "ดาวน์โหลด PNG",
    svgButton: "ดาวน์โหลด SVG",
    fileNameLabel: "ตัวอย่างชื่อไฟล์",
    emptyPreview: "ป้อนข้อความเพื่อดูตัวอย่าง QR",
    generating: "กำลังสร้าง QR...",
    invalidText: "กรุณาป้อนข้อความ 1 ถึง 128 ตัวอักษร",
    invalidLogoType: "รองรับเฉพาะไฟล์โลโก้ Image files",
    invalidLogoSize: "ขนาดไฟล์โลโก้ต้องไม่เกิน 10MB",
    renderError: "เกิดข้อผิดพลาดขณะสร้าง QR Code",
    contrastWarning: "ความคมชัดต่ำ — QR Code อาจสแกนไม่ได้"
  },
  modes: {
    modeSelectorTitle: "ประเภท QR",
    textModeLabel: "ข้อความ",
    sendModeLabel: "QR โอนเงิน Toss",
    urlModeLabel: "ลิงก์ URL",
    emailModeLabel: "อีเมล",
    phoneModeLabel: "โทรศัพท์",
    bankLabel: "รหัสธนาคาร",
    bankPlaceholder: "เลือกธนาคาร",
    accountLabel: "เลขบัญชี",
    accountPlaceholder: "ป้อนเลขบัญชี",
    amountLabel: "จำนวนเงิน (ไม่บังคับ)",
    amountPlaceholder: "เช่น 10000",
    amountHint: "เว้นว่างเพื่อสร้าง QR โอนเงินโดยไม่ระบุจำนวน",
    invalidAccount: "กรุณาตรวจสอบธนาคารและเลขบัญชี",
    invalidAmount: "จำนวนเงินต้องเป็นตัวเลขมากกว่า 0",
    sendEmptyPreview: "ป้อนธนาคารและเลขบัญชีเพื่อดูตัวอย่าง QR โอนเงิน",
    urlLabel: "URL",
    urlPlaceholder: "เช่น pixelyaki.com หรือ https://pixelyaki.com",
    invalidUrl: "กรุณาป้อน URL ที่ถูกต้อง",
    urlEmptyPreview: "ป้อน URL เพื่อดูตัวอย่าง QR",
    emailLabel: "ที่อยู่อีเมล",
    emailPlaceholder: "เช่น hello@pixelyaki.com",
    invalidEmail: "กรุณาป้อนที่อยู่อีเมลที่ถูกต้อง",
    emailEmptyPreview: "ป้อนอีเมลเพื่อดูตัวอย่าง QR",
    phoneLabel: "หมายเลขโทรศัพท์",
    phonePlaceholder: "เช่น +821012345678",
    invalidPhone: "กรุณาป้อนหมายเลขโทรศัพท์ที่ถูกต้อง",
    phoneEmptyPreview: "ป้อนหมายเลขโทรศัพท์เพื่อดูตัวอย่าง QR"
  },
  extraModes: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "ชื่อเครือข่าย (SSID)",
    wifiSsidPlaceholder: "เช่น Pixelyaki_WiFi",
    wifiEncryptionLabel: "การเข้ารหัส",
    wifiEncryptionWpa: "WPA/WPA2",
    wifiEncryptionWep: "WEP",
    wifiEncryptionNoPassword: "ไม่มีรหัสผ่าน",
    wifiPasswordLabel: "รหัสผ่าน",
    wifiPasswordPlaceholder: "ป้อนรหัสผ่าน Wi-Fi",
    wifiHiddenLabel: "เครือข่ายที่ซ่อนอยู่",
    wifiInvalid: "กรุณาตรวจสอบ SSID และการตั้งค่า Wi-Fi",
    wifiEmptyPreview: "ป้อนข้อมูล Wi-Fi เพื่อดูตัวอย่าง QR",
    vcardNameLabel: "ชื่อ",
    vcardNamePlaceholder: "เช่น Arthur Kim",
    vcardCompanyLabel: "บริษัท",
    vcardCompanyPlaceholder: "เช่น Pixelyaki",
    vcardPhoneLabel: "เบอร์โทรศัพท์",
    vcardPhonePlaceholder: "เช่น +821012345678",
    vcardEmailLabel: "อีเมล",
    vcardEmailPlaceholder: "เช่น hello@pixelyaki.com",
    vcardAddressLabel: "ที่อยู่",
    vcardAddressPlaceholder: "เช่น Seoul, Korea",
    vcardInvalid: "กรุณาป้อนชื่ออย่างน้อยหนึ่งชื่อ",
    vcardInvalidPhone: "กรุณาตรวจสอบรูปแบบเบอร์โทรศัพท์ vCard",
    vcardInvalidEmail: "กรุณาตรวจสอบรูปแบบอีเมล vCard",
    vcardEmptyPreview: "ป้อนข้อมูลผู้ติดต่อเพื่อดูตัวอย่าง QR vCard",
    smsPhoneLabel: "เบอร์โทรศัพท์ผู้รับ",
    smsPhonePlaceholder: "เช่น +821012345678",
    smsBodyLabel: "ข้อความ (ไม่บังคับ)",
    smsBodyPlaceholder: "เช่น สวัสดี",
    smsInvalid: "กรุณาตรวจสอบรูปแบบเบอร์โทรศัพท์ SMS",
    smsEmptyPreview: "ป้อนเบอร์โทรศัพท์เพื่อดูตัวอย่าง QR SMS",
    kakaopayModeLabel: "QR โอนเงิน KakaoPay",
    kakaopayEmptyPreview: "ป้อนข้อมูล KakaoPay เพื่อดูตัวอย่าง QR",
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
    title: "สไตล์ QR",
    presetLabel: "พรีเซ็ต",
    dotsLabel: "รูปแบบจุด",
    cornerSquareLabel: "รูปแบบมุม",
    cornerDotLabel: "จุดมุม",
    presetSquare: "สี่เหลี่ยม",
    presetRounded: "โค้งมน",
    presetClassy: "เรียบหรู",
    presetDot: "จุด",
    styleSquare: "สี่เหลี่ยมมุมฉาก",
    styleDots: "รูปแบบจุด",
    styleRounded: "สี่เหลี่ยมมุมมน",
    styleClassy: "สไตล์เรียบหรู",
    styleClassyRounded: "หรูหราแบบมน",
    styleExtraRounded: "โค้งมนพิเศษ",
    styleDot: "จุดเล็ก",
    errorCorrectionLabel: "ความหนาแน่น",
    eclL: "ต่ำ", eclM: "ปานกลาง", eclQ: "สูง", eclH: "สูงสุด"
  },
  features: [
    {
      title: "PNG โปร่งใส",
      description: "ส่งออก PNG โปร่งใสพร้อมปรับขนาดอัตโนมัติ"
    },
    {
      title: "ส่งออก SVG",
      description: "เหมาะสำหรับงานพิมพ์และพื้นผิวที่ปรับขนาดได้"
    },
    {
      title: "สีที่กำหนดเอง",
      description: "ควบคุมสีพื้นหน้าและพื้นหลัง"
    },
    {
      title: "ฝังโลโก้",
      description: "ใส่โลโก้ตรงกลางด้วย PNG, JPG หรือ SVG ขนาดสูงสุด 10MB"
    },
    {
      title: "ไม่มีการเก็บข้อมูลบนเซิร์ฟเวอร์",
      description: "สร้างในเบราว์เซอร์เท่านั้น ไม่ต้องใช้บัญชี"
    }
  ],
  faqTitle: "คำถามที่พบบ่อย",
  faq: [
    {
      q: "เครื่องมือสร้าง QR Code นี้คืออะไร?",
      a: "จะแปลงข้อความของคุณเป็น QR Code ที่ดาวน์โหลดได้ทันที"
    },
    {
      q: "ใช้งานฟรีหรือไม่?",
      a: "ใช่ เวอร์ชัน MVP ใช้งานฟรีและไม่ต้องลงทะเบียน"
    },
    {
      q: "ข้อมูลที่ป้อนถูกเก็บไว้ในเซิร์ฟเวอร์หรือไม่?",
      a: "ไม่ เวอร์ชันนี้สร้างทุกอย่างภายในเบราว์เซอร์"
    },
    {
      q: "รองรับการส่งออกรูปภาพแบบใดบ้าง?",
      a: "รองรับทั้ง PNG โปร่งใส (ปรับขนาดอัตโนมัติ) และ SVG"
    },
    {
      q: "สามารถอัปโหลดไฟล์โลโก้อะไรได้บ้าง?",
      a: "รองรับ PNG, JPG และ SVG ขนาดสูงสุด 10MB"
    }
  ],
  footer: {
    privacy: "นโยบายความเป็นส่วนตัว",
    terms: "เงื่อนไขการใช้บริการ",
    openSource: "ใบอนุญาตโอเพนซอร์ส",
    copyright: "© Pixelyaki",
    trademark: "QR Code เป็นเครื่องหมายการค้าของ DENSO WAVE INCORPORATED"
  }
};
