"use client";

import {
  ChatBubble,
  Mail,
  Phone,
  QrCode,
  SendDiagonal,
  UserSquare,
  Wallet,
  Wifi,
  Www
} from "iconoir-react";
import { useEffect, useRef, useState } from "react";
import { ColorPickerGroup } from "@/components/color-picker-group";
import { DownloadActions } from "@/components/download-actions";
import { LogoUploader } from "@/components/logo-uploader";
import { QrPreviewCard } from "@/components/qr-preview-card";
import { QrTextField } from "@/components/qr-text-field";
import { TransparencyToggle } from "@/components/transparency-toggle";
import { downloadDataUrl, downloadTextFile } from "@/lib/download";
import {
  buildKakaoPayBankLink,
  kakaopayBanks,
  normalizeKakaoAccountNumber,
  normalizeKakaoAmount
} from "@/lib/kakaopay";
import { makeQrFilename } from "@/lib/filename";
import { trackGtmEvent } from "@/lib/gtm";
import { type Locale } from "@/lib/i18n";
import {
  renderQrPngDataUrl,
  renderQrSvgMarkup,
  type QrCornerDotStyle,
  type QrCornerSquareStyle,
  type QrDotsStyle,
  type QrErrorCorrectionLevel,
  type QrStylePreset
} from "@/lib/qr";
import {
  buildTossSendLink,
  isPositiveAmount,
  normalizeAccountNo,
  normalizeAmount,
  tossBanks
} from "@/lib/toss-send";
import { validateLogoFile, validateText } from "@/lib/validation";

type StudioCopy = {
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
  generating: string;
  invalidText: string;
  invalidLogoType: string;
  invalidLogoSize: string;
  renderError: string;
  contrastWarning: string;
};

type ModeCopy = {
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

type ExtraModeCopy = {
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

type StyleCopy = {
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

const modeCopyByLocale: Record<Locale, ModeCopy> = {
  ko: {
    modeSelectorTitle: "모드 선택",
    textModeLabel: "텍스트",
    sendModeLabel: "토스 송금 QR",
    urlModeLabel: "URL",
    emailModeLabel: "이메일",
    phoneModeLabel: "전화번호",
    bankLabel: "은행 코드",
    bankPlaceholder: "은행을 선택하세요",
    accountLabel: "계좌번호",
    accountPlaceholder: "계좌번호를 입력하세요",
    amountLabel: "금액 (선택)",
    amountPlaceholder: "예: 10000",
    amountHint: "비워두면 금액 없이 송금 QR을 생성합니다.",
    invalidAccount: "은행과 계좌번호를 확인해 주세요.",
    invalidAmount: "금액은 1원 이상 숫자로 입력해 주세요.",
    sendEmptyPreview: "은행과 계좌번호를 입력하면 송금 QR 미리보기가 표시됩니다.",
    urlLabel: "URL 주소",
    urlPlaceholder: "예: pixelyaki.com 또는 https://pixelyaki.com",
    invalidUrl: "올바른 URL 주소를 입력해 주세요.",
    urlEmptyPreview: "URL 주소를 입력하면 QR 미리보기가 표시됩니다.",
    emailLabel: "메일 주소",
    emailPlaceholder: "예: hello@pixelyaki.com",
    invalidEmail: "올바른 메일 주소를 입력해 주세요.",
    emailEmptyPreview: "메일 주소를 입력하면 QR 미리보기가 표시됩니다.",
    phoneLabel: "전화번호",
    phonePlaceholder: "예: 01012345678 또는 +821012345678",
    invalidPhone: "올바른 전화번호를 입력해 주세요.",
    phoneEmptyPreview: "전화번호를 입력하면 QR 미리보기가 표시됩니다."
  },
  en: {
    modeSelectorTitle: "Mode",
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
  zh: {
    modeSelectorTitle: "模式",
    textModeLabel: "文本",
    sendModeLabel: "Toss 转账 QR",
    urlModeLabel: "URL",
    emailModeLabel: "邮箱",
    phoneModeLabel: "电话",
    bankLabel: "银行代码",
    bankPlaceholder: "请选择银行",
    accountLabel: "账号",
    accountPlaceholder: "请输入账号",
    amountLabel: "金额（可选）",
    amountPlaceholder: "例如：10000",
    amountHint: "留空则生成不含金额的转账二维码。",
    invalidAccount: "请检查银行和账号。",
    invalidAmount: "金额必须为大于 0 的数字。",
    sendEmptyPreview: "输入银行和账号后即可预览转账二维码。",
    urlLabel: "URL 地址",
    urlPlaceholder: "例如：pixelyaki.com 或 https://pixelyaki.com",
    invalidUrl: "请输入有效的 URL 地址。",
    urlEmptyPreview: "输入 URL 地址后即可预览二维码。",
    emailLabel: "邮箱地址",
    emailPlaceholder: "例如：hello@pixelyaki.com",
    invalidEmail: "请输入有效的邮箱地址。",
    emailEmptyPreview: "输入邮箱地址后即可预览二维码。",
    phoneLabel: "电话号码",
    phonePlaceholder: "例如：+821012345678",
    invalidPhone: "请输入有效的电话号码。",
    phoneEmptyPreview: "输入电话号码后即可预览二维码。"
  },
  ja: {
    modeSelectorTitle: "モード",
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
  es: {
    modeSelectorTitle: "Modo",
    textModeLabel: "Texto",
    sendModeLabel: "QR de transferencia Toss",
    urlModeLabel: "URL",
    emailModeLabel: "Correo",
    phoneModeLabel: "Teléfono",
    bankLabel: "Código del banco",
    bankPlaceholder: "Selecciona un banco",
    accountLabel: "Número de cuenta",
    accountPlaceholder: "Ingresa el número de cuenta",
    amountLabel: "Monto (opcional)",
    amountPlaceholder: "p. ej. 10000",
    amountHint: "Déjalo vacío para generar QR sin monto.",
    invalidAccount: "Revisa el banco y el número de cuenta.",
    invalidAmount: "El monto debe ser un número mayor que 0.",
    sendEmptyPreview: "Ingresa banco y cuenta para ver el QR de transferencia.",
    urlLabel: "URL",
    urlPlaceholder: "p. ej. pixelyaki.com o https://pixelyaki.com",
    invalidUrl: "Ingresa una URL válida.",
    urlEmptyPreview: "Ingresa una URL para previsualizar el QR.",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "p. ej. hello@pixelyaki.com",
    invalidEmail: "Ingresa un correo electrónico válido.",
    emailEmptyPreview: "Ingresa un correo para previsualizar el QR.",
    phoneLabel: "Número de teléfono",
    phonePlaceholder: "p. ej. +821012345678",
    invalidPhone: "Ingresa un número de teléfono válido.",
    phoneEmptyPreview: "Ingresa un teléfono para previsualizar el QR."
  },
  fr: {
    modeSelectorTitle: "Mode",
    textModeLabel: "Texte",
    sendModeLabel: "QR de virement Toss",
    urlModeLabel: "URL",
    emailModeLabel: "Email",
    phoneModeLabel: "Téléphone",
    bankLabel: "Code banque",
    bankPlaceholder: "Sélectionnez une banque",
    accountLabel: "Numéro de compte",
    accountPlaceholder: "Saisissez le numéro de compte",
    amountLabel: "Montant (optionnel)",
    amountPlaceholder: "ex. 10000",
    amountHint: "Laissez vide pour créer un QR sans montant.",
    invalidAccount: "Vérifiez la banque et le numéro de compte.",
    invalidAmount: "Le montant doit être un nombre supérieur à 0.",
    sendEmptyPreview: "Saisissez la banque et le compte pour prévisualiser le QR.",
    urlLabel: "URL",
    urlPlaceholder: "ex. pixelyaki.com ou https://pixelyaki.com",
    invalidUrl: "Veuillez saisir une URL valide.",
    urlEmptyPreview: "Saisissez une URL pour prévisualiser le QR.",
    emailLabel: "Adresse e-mail",
    emailPlaceholder: "ex. hello@pixelyaki.com",
    invalidEmail: "Veuillez saisir une adresse e-mail valide.",
    emailEmptyPreview: "Saisissez un e-mail pour prévisualiser le QR.",
    phoneLabel: "Numéro de téléphone",
    phonePlaceholder: "ex. +821012345678",
    invalidPhone: "Veuillez saisir un numéro de téléphone valide.",
    phoneEmptyPreview: "Saisissez un téléphone pour prévisualiser le QR."
  },
  de: {
    modeSelectorTitle: "Modus",
    textModeLabel: "Text",
    sendModeLabel: "Toss Ueberweisungs-QR",
    urlModeLabel: "URL",
    emailModeLabel: "E-Mail",
    phoneModeLabel: "Telefon",
    bankLabel: "Bankcode",
    bankPlaceholder: "Bank auswählen",
    accountLabel: "Kontonummer",
    accountPlaceholder: "Kontonummer eingeben",
    amountLabel: "Betrag (optional)",
    amountPlaceholder: "z. B. 10000",
    amountHint: "Leer lassen, um QR ohne Betrag zu erstellen.",
    invalidAccount: "Bitte Bank und Kontonummer prüfen.",
    invalidAmount: "Der Betrag muss eine Zahl größer als 0 sein.",
    sendEmptyPreview: "Bank und Konto eingeben, um den QR zu sehen.",
    urlLabel: "URL",
    urlPlaceholder: "z. B. pixelyaki.com oder https://pixelyaki.com",
    invalidUrl: "Bitte eine gueltige URL eingeben.",
    urlEmptyPreview: "URL eingeben, um den QR-Code vorzuschauen.",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "z. B. hello@pixelyaki.com",
    invalidEmail: "Bitte eine gueltige E-Mail-Adresse eingeben.",
    emailEmptyPreview: "E-Mail eingeben, um den QR-Code vorzuschauen.",
    phoneLabel: "Telefonnummer",
    phonePlaceholder: "z. B. +821012345678",
    invalidPhone: "Bitte eine gueltige Telefonnummer eingeben.",
    phoneEmptyPreview: "Telefonnummer eingeben, um den QR-Code vorzuschauen."
  },
  ru: {
    modeSelectorTitle: "Режим",
    textModeLabel: "Текст",
    sendModeLabel: "Toss перевод QR",
    urlModeLabel: "URL",
    emailModeLabel: "Эл. почта",
    phoneModeLabel: "Телефон",
    bankLabel: "Код банка",
    bankPlaceholder: "Выберите банк",
    accountLabel: "Номер счёта",
    accountPlaceholder: "Введите номер счёта",
    amountLabel: "Сумма (опционально)",
    amountPlaceholder: "напр. 10000",
    amountHint: "Оставьте пустым для создания QR без суммы.",
    invalidAccount: "Проверьте банк и номер счёта.",
    invalidAmount: "Сумма должна быть числом больше 0.",
    sendEmptyPreview: "Введите банк и счёт для предварительного просмотра QR.",
    urlLabel: "URL",
    urlPlaceholder: "напр. pixelyaki.com или https://pixelyaki.com",
    invalidUrl: "Введите корректный URL.",
    urlEmptyPreview: "Введите URL для предварительного просмотра QR.",
    emailLabel: "Email",
    emailPlaceholder: "напр. hello@pixelyaki.com",
    invalidEmail: "Введите корректный email.",
    emailEmptyPreview: "Введите email для предварительного просмотра QR.",
    phoneLabel: "Номер телефона",
    phonePlaceholder: "напр. +821012345678",
    invalidPhone: "Введите корректный номер телефона.",
    phoneEmptyPreview: "Введите номер телефона для предварительного просмотра QR."
  },
  ar: {
    modeSelectorTitle: "الوضع",
    textModeLabel: "نص",
    sendModeLabel: "QR تحويل Toss",
    urlModeLabel: "URL",
    emailModeLabel: "بريد",
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
  hi: {
    modeSelectorTitle: "मोड",
    textModeLabel: "टेक्स्ट",
    sendModeLabel: "Toss ट्रांसफर QR",
    urlModeLabel: "URL",
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
    sendEmptyPreview: "ट्रांसफर QR देखने के लिए बैंक और खाता दर्ज करें।",
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
  id: {
    modeSelectorTitle: "Mode",
    textModeLabel: "Teks",
    sendModeLabel: "QR Transfer Toss",
    urlModeLabel: "URL",
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
  it: {
    modeSelectorTitle: "Modalità",
    textModeLabel: "Testo",
    sendModeLabel: "QR Trasferimento Toss",
    urlModeLabel: "URL",
    emailModeLabel: "Email",
    phoneModeLabel: "Telefono",
    bankLabel: "Codice banca",
    bankPlaceholder: "Seleziona una banca",
    accountLabel: "Numero di conto",
    accountPlaceholder: "Inserisci il numero di conto",
    amountLabel: "Importo (opzionale)",
    amountPlaceholder: "es. 10000",
    amountHint: "Lascia vuoto per creare un QR senza importo.",
    invalidAccount: "Controlla la banca e il numero di conto.",
    invalidAmount: "L'importo deve essere un numero maggiore di 0.",
    sendEmptyPreview: "Inserisci banca e conto per vedere il QR di trasferimento.",
    urlLabel: "URL",
    urlPlaceholder: "es. pixelyaki.com o https://pixelyaki.com",
    invalidUrl: "Inserisci un URL valido.",
    urlEmptyPreview: "Inserisci un URL per visualizzare l'anteprima QR.",
    emailLabel: "Indirizzo email",
    emailPlaceholder: "es. hello@pixelyaki.com",
    invalidEmail: "Inserisci un indirizzo email valido.",
    emailEmptyPreview: "Inserisci un'email per visualizzare l'anteprima QR.",
    phoneLabel: "Numero di telefono",
    phonePlaceholder: "es. +821012345678",
    invalidPhone: "Inserisci un numero di telefono valido.",
    phoneEmptyPreview: "Inserisci un numero di telefono per visualizzare l'anteprima QR."
  },
  pt: {
    modeSelectorTitle: "Modo",
    textModeLabel: "Texto",
    sendModeLabel: "QR Transferência Toss",
    urlModeLabel: "URL",
    emailModeLabel: "E-mail",
    phoneModeLabel: "Telefone",
    bankLabel: "Código do banco",
    bankPlaceholder: "Selecione um banco",
    accountLabel: "Número da conta",
    accountPlaceholder: "Digite o número da conta",
    amountLabel: "Valor (opcional)",
    amountPlaceholder: "ex. 10000",
    amountHint: "Deixe em branco para criar QR sem valor.",
    invalidAccount: "Verifique o banco e o número da conta.",
    invalidAmount: "O valor deve ser um número maior que 0.",
    sendEmptyPreview: "Digite banco e conta para pré-visualizar o QR de transferência.",
    urlLabel: "URL",
    urlPlaceholder: "ex. pixelyaki.com ou https://pixelyaki.com",
    invalidUrl: "Digite um URL válido.",
    urlEmptyPreview: "Digite um URL para pré-visualizar o QR.",
    emailLabel: "Endereço de e-mail",
    emailPlaceholder: "ex. hello@pixelyaki.com",
    invalidEmail: "Digite um endereço de e-mail válido.",
    emailEmptyPreview: "Digite um e-mail para pré-visualizar o QR.",
    phoneLabel: "Número de telefone",
    phonePlaceholder: "ex. +821012345678",
    invalidPhone: "Digite um número de telefone válido.",
    phoneEmptyPreview: "Digite um número de telefone para pré-visualizar o QR."
  },
  th: {
    modeSelectorTitle: "โหมด",
    textModeLabel: "ข้อความ",
    sendModeLabel: "QR โอนเงิน Toss",
    urlModeLabel: "URL",
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
  }
};

const extraModeCopyByLocale: Record<Locale, ExtraModeCopy> = {
  ko: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "명함(vCard)",
    smsModeLabel: "SMS",
    wifiSsidLabel: "네트워크 이름(SSID)",
    wifiSsidPlaceholder: "예: Pixelyaki_WiFi",
    wifiEncryptionLabel: "암호화 방식",
    wifiPasswordLabel: "비밀번호",
    wifiPasswordPlaceholder: "비밀번호를 입력하세요",
    wifiHiddenLabel: "숨김 네트워크",
    wifiInvalid: "SSID와 Wi-Fi 설정을 확인해 주세요.",
    wifiEmptyPreview: "Wi-Fi 정보를 입력하면 QR 미리보기가 표시됩니다.",
    vcardNameLabel: "이름",
    vcardNamePlaceholder: "예: Arthur Kim",
    vcardCompanyLabel: "회사",
    vcardCompanyPlaceholder: "예: Pixelyaki",
    vcardPhoneLabel: "전화번호",
    vcardPhonePlaceholder: "예: +821012345678",
    vcardEmailLabel: "이메일",
    vcardEmailPlaceholder: "예: hello@pixelyaki.com",
    vcardAddressLabel: "주소",
    vcardAddressPlaceholder: "예: Seoul, Korea",
    vcardInvalid: "이름을 입력해 주세요.",
    vcardInvalidPhone: "명함 전화번호 형식을 확인해 주세요.",
    vcardInvalidEmail: "명함 이메일 형식을 확인해 주세요.",
    vcardEmptyPreview: "명함 정보를 입력하면 QR 미리보기가 표시됩니다.",
    smsPhoneLabel: "수신 전화번호",
    smsPhonePlaceholder: "예: +821012345678",
    smsBodyLabel: "메시지 (선택)",
    smsBodyPlaceholder: "예: 안녕하세요",
    smsInvalid: "SMS 전화번호 형식을 확인해 주세요.",
    smsEmptyPreview: "전화번호를 입력하면 SMS QR 미리보기가 표시됩니다.",
    kakaopayModeLabel: "카카오페이 송금 QR",
    kakaopayEmptyPreview: "카카오페이 송금 정보를 입력하면 QR 미리보기가 표시됩니다."
  },
  en: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "Network name (SSID)",
    wifiSsidPlaceholder: "e.g. Pixelyaki_WiFi",
    wifiEncryptionLabel: "Encryption",
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
  zh: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "名片(vCard)",
    smsModeLabel: "短信",
    wifiSsidLabel: "网络名称(SSID)",
    wifiSsidPlaceholder: "例如：Pixelyaki_WiFi",
    wifiEncryptionLabel: "加密方式",
    wifiPasswordLabel: "密码",
    wifiPasswordPlaceholder: "请输入 Wi-Fi 密码",
    wifiHiddenLabel: "隐藏网络",
    wifiInvalid: "请检查 SSID 和 Wi-Fi 设置。",
    wifiEmptyPreview: "输入 Wi-Fi 信息后可预览二维码。",
    vcardNameLabel: "姓名",
    vcardNamePlaceholder: "例如：Arthur Kim",
    vcardCompanyLabel: "公司",
    vcardCompanyPlaceholder: "例如：Pixelyaki",
    vcardPhoneLabel: "电话号码",
    vcardPhonePlaceholder: "例如：+821012345678",
    vcardEmailLabel: "邮箱",
    vcardEmailPlaceholder: "例如：hello@pixelyaki.com",
    vcardAddressLabel: "地址",
    vcardAddressPlaceholder: "例如：Seoul, Korea",
    vcardInvalid: "请输入姓名。",
    vcardInvalidPhone: "请检查名片电话号码格式。",
    vcardInvalidEmail: "请检查名片邮箱格式。",
    vcardEmptyPreview: "输入名片信息后可预览二维码。",
    smsPhoneLabel: "收件号码",
    smsPhonePlaceholder: "例如：+821012345678",
    smsBodyLabel: "短信内容（可选）",
    smsBodyPlaceholder: "例如：你好",
    smsInvalid: "请检查短信号码格式。",
    smsEmptyPreview: "输入电话号码后可预览短信二维码。",
    kakaopayModeLabel: "KakaoPay 转账 QR",
    kakaopayEmptyPreview: "输入 KakaoPay 转账信息后可预览二维码。"
  },
  ja: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "名刺(vCard)",
    smsModeLabel: "SMS",
    wifiSsidLabel: "ネットワーク名(SSID)",
    wifiSsidPlaceholder: "例: Pixelyaki_WiFi",
    wifiEncryptionLabel: "暗号化方式",
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
  es: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "Nombre de red (SSID)",
    wifiSsidPlaceholder: "p. ej. Pixelyaki_WiFi",
    wifiEncryptionLabel: "Cifrado",
    wifiPasswordLabel: "Contraseña",
    wifiPasswordPlaceholder: "Ingresa la contraseña Wi-Fi",
    wifiHiddenLabel: "Red oculta",
    wifiInvalid: "Revisa el SSID y la configuración Wi-Fi.",
    wifiEmptyPreview: "Ingresa datos Wi-Fi para previsualizar el QR.",
    vcardNameLabel: "Nombre",
    vcardNamePlaceholder: "p. ej. Arthur Kim",
    vcardCompanyLabel: "Empresa",
    vcardCompanyPlaceholder: "p. ej. Pixelyaki",
    vcardPhoneLabel: "Teléfono",
    vcardPhonePlaceholder: "p. ej. +821012345678",
    vcardEmailLabel: "Correo",
    vcardEmailPlaceholder: "p. ej. hello@pixelyaki.com",
    vcardAddressLabel: "Dirección",
    vcardAddressPlaceholder: "p. ej. Seoul, Korea",
    vcardInvalid: "Ingresa al menos un nombre.",
    vcardInvalidPhone: "Revisa el formato del teléfono en vCard.",
    vcardInvalidEmail: "Revisa el formato del correo en vCard.",
    vcardEmptyPreview: "Ingresa datos de contacto para previsualizar el QR vCard.",
    smsPhoneLabel: "Teléfono destinatario",
    smsPhonePlaceholder: "p. ej. +821012345678",
    smsBodyLabel: "Mensaje (opcional)",
    smsBodyPlaceholder: "p. ej. Hola",
    smsInvalid: "Revisa el formato del teléfono SMS.",
    smsEmptyPreview: "Ingresa un teléfono para previsualizar el QR SMS.",
    kakaopayModeLabel: "QR de transferencia KakaoPay",
    kakaopayEmptyPreview: "Ingresa datos de KakaoPay para previsualizar el QR."
  },
  fr: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "Nom du réseau (SSID)",
    wifiSsidPlaceholder: "ex. Pixelyaki_WiFi",
    wifiEncryptionLabel: "Chiffrement",
    wifiPasswordLabel: "Mot de passe",
    wifiPasswordPlaceholder: "Saisissez le mot de passe Wi-Fi",
    wifiHiddenLabel: "Réseau masqué",
    wifiInvalid: "Vérifiez le SSID et les paramètres Wi-Fi.",
    wifiEmptyPreview: "Saisissez les infos Wi-Fi pour prévisualiser le QR.",
    vcardNameLabel: "Nom",
    vcardNamePlaceholder: "ex. Arthur Kim",
    vcardCompanyLabel: "Société",
    vcardCompanyPlaceholder: "ex. Pixelyaki",
    vcardPhoneLabel: "Téléphone",
    vcardPhonePlaceholder: "ex. +821012345678",
    vcardEmailLabel: "E-mail",
    vcardEmailPlaceholder: "ex. hello@pixelyaki.com",
    vcardAddressLabel: "Adresse",
    vcardAddressPlaceholder: "ex. Seoul, Korea",
    vcardInvalid: "Veuillez saisir au moins un nom.",
    vcardInvalidPhone: "Vérifiez le format du téléphone vCard.",
    vcardInvalidEmail: "Vérifiez le format de l'e-mail vCard.",
    vcardEmptyPreview: "Saisissez les infos de contact pour prévisualiser le QR vCard.",
    smsPhoneLabel: "Téléphone destinataire",
    smsPhonePlaceholder: "ex. +821012345678",
    smsBodyLabel: "Message (optionnel)",
    smsBodyPlaceholder: "ex. Bonjour",
    smsInvalid: "Vérifiez le format du numéro SMS.",
    smsEmptyPreview: "Saisissez un téléphone pour prévisualiser le QR SMS.",
    kakaopayModeLabel: "QR de transfert KakaoPay",
    kakaopayEmptyPreview: "Saisissez les infos KakaoPay pour prévisualiser le QR."
  },
  de: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "Netzwerkname (SSID)",
    wifiSsidPlaceholder: "z. B. Pixelyaki_WiFi",
    wifiEncryptionLabel: "Verschlüsselung",
    wifiPasswordLabel: "Passwort",
    wifiPasswordPlaceholder: "Wi-Fi-Passwort eingeben",
    wifiHiddenLabel: "Verstecktes Netzwerk",
    wifiInvalid: "Bitte SSID und Wi-Fi-Einstellungen prüfen.",
    wifiEmptyPreview: "Wi-Fi-Daten eingeben, um den QR-Code vorzuschauen.",
    vcardNameLabel: "Name",
    vcardNamePlaceholder: "z. B. Arthur Kim",
    vcardCompanyLabel: "Firma",
    vcardCompanyPlaceholder: "z. B. Pixelyaki",
    vcardPhoneLabel: "Telefonnummer",
    vcardPhonePlaceholder: "z. B. +821012345678",
    vcardEmailLabel: "E-Mail",
    vcardEmailPlaceholder: "z. B. hello@pixelyaki.com",
    vcardAddressLabel: "Adresse",
    vcardAddressPlaceholder: "z. B. Seoul, Korea",
    vcardInvalid: "Bitte mindestens einen Namen eingeben.",
    vcardInvalidPhone: "Bitte Telefonnummer im vCard-Format prüfen.",
    vcardInvalidEmail: "Bitte E-Mail im vCard-Format prüfen.",
    vcardEmptyPreview: "Kontaktdaten eingeben, um den vCard-QR-Code vorzuschauen.",
    smsPhoneLabel: "Empfängertelefon",
    smsPhonePlaceholder: "z. B. +821012345678",
    smsBodyLabel: "Nachricht (optional)",
    smsBodyPlaceholder: "z. B. Hallo",
    smsInvalid: "Bitte SMS-Nummernformat prüfen.",
    smsEmptyPreview: "Telefonnummer eingeben, um den SMS-QR-Code vorzuschauen.",
    kakaopayModeLabel: "KakaoPay Transfer-QR",
    kakaopayEmptyPreview: "KakaoPay-Daten eingeben, um den QR-Code vorzuschauen."
  },
  ru: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "Имя сети (SSID)",
    wifiSsidPlaceholder: "например, Pixelyaki_WiFi",
    wifiEncryptionLabel: "Шифрование",
    wifiPasswordLabel: "Пароль",
    wifiPasswordPlaceholder: "Введите пароль Wi-Fi",
    wifiHiddenLabel: "Скрытая сеть",
    wifiInvalid: "Проверьте SSID и настройки Wi-Fi.",
    wifiEmptyPreview: "Введите данные Wi-Fi для предпросмотра QR-кода.",
    vcardNameLabel: "Имя",
    vcardNamePlaceholder: "например, Arthur Kim",
    vcardCompanyLabel: "Компания",
    vcardCompanyPlaceholder: "например, Pixelyaki",
    vcardPhoneLabel: "Телефон",
    vcardPhonePlaceholder: "например, +821012345678",
    vcardEmailLabel: "Email",
    vcardEmailPlaceholder: "например, hello@pixelyaki.com",
    vcardAddressLabel: "Адрес",
    vcardAddressPlaceholder: "например, Seoul, Korea",
    vcardInvalid: "Введите хотя бы имя.",
    vcardInvalidPhone: "Проверьте формат телефона vCard.",
    vcardInvalidEmail: "Проверьте формат email vCard.",
    vcardEmptyPreview: "Введите контактные данные для предпросмотра QR vCard.",
    smsPhoneLabel: "Телефон получателя",
    smsPhonePlaceholder: "например, +821012345678",
    smsBodyLabel: "Сообщение (необязательно)",
    smsBodyPlaceholder: "например, Привет",
    smsInvalid: "Проверьте формат номера SMS.",
    smsEmptyPreview: "Введите номер телефона для предпросмотра QR SMS.",
    kakaopayModeLabel: "KakaoPay перевод QR",
    kakaopayEmptyPreview: "Введите данные KakaoPay для предпросмотра QR-кода."
  },
  ar: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "اسم الشبكة (SSID)",
    wifiSsidPlaceholder: "مثال: Pixelyaki_WiFi",
    wifiEncryptionLabel: "التشفير",
    wifiPasswordLabel: "كلمة المرور",
    wifiPasswordPlaceholder: "أدخل كلمة مرور Wi-Fi",
    wifiHiddenLabel: "شبكة مخفية",
    wifiInvalid: "تحقق من SSID وإعدادات Wi-Fi.",
    wifiEmptyPreview: "أدخل بيانات Wi-Fi لمعاينة رمز QR.",
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
    vcardInvalidPhone: "تحقق من تنسيق هاتف vCard.",
    vcardInvalidEmail: "تحقق من تنسيق بريد vCard.",
    vcardEmptyPreview: "أدخل بيانات جهة الاتصال لمعاينة QR الخاص بـ vCard.",
    smsPhoneLabel: "هاتف المستلم",
    smsPhonePlaceholder: "مثال: +821012345678",
    smsBodyLabel: "الرسالة (اختياري)",
    smsBodyPlaceholder: "مثال: مرحبا",
    smsInvalid: "تحقق من تنسيق رقم SMS.",
    smsEmptyPreview: "أدخل رقم هاتف لمعاينة QR الخاص بالرسائل.",
    kakaopayModeLabel: "QR تحويل KakaoPay",
    kakaopayEmptyPreview: "أدخل بيانات KakaoPay لمعاينة رمز QR."
  },
  hi: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "नेटवर्क नाम (SSID)",
    wifiSsidPlaceholder: "जैसे: Pixelyaki_WiFi",
    wifiEncryptionLabel: "एन्क्रिप्शन",
    wifiPasswordLabel: "पासवर्ड",
    wifiPasswordPlaceholder: "Wi-Fi पासवर्ड दर्ज करें",
    wifiHiddenLabel: "हिडन नेटवर्क",
    wifiInvalid: "SSID और Wi-Fi सेटिंग जांचें।",
    wifiEmptyPreview: "QR प्रीव्यू के लिए Wi-Fi विवरण दर्ज करें।",
    vcardNameLabel: "नाम",
    vcardNamePlaceholder: "जैसे: Arthur Kim",
    vcardCompanyLabel: "कंपनी",
    vcardCompanyPlaceholder: "जैसे: Pixelyaki",
    vcardPhoneLabel: "फ़ोन नंबर",
    vcardPhonePlaceholder: "जैसे: +821012345678",
    vcardEmailLabel: "ईमेल",
    vcardEmailPlaceholder: "जैसे: hello@pixelyaki.com",
    vcardAddressLabel: "पता",
    vcardAddressPlaceholder: "जैसे: Seoul, Korea",
    vcardInvalid: "कम से कम नाम दर्ज करें।",
    vcardInvalidPhone: "vCard फ़ोन नंबर का फ़ॉर्मैट जांचें।",
    vcardInvalidEmail: "vCard ईमेल का फ़ॉर्मैट जांचें।",
    vcardEmptyPreview: "vCard QR प्रीव्यू के लिए संपर्क विवरण दर्ज करें।",
    smsPhoneLabel: "प्राप्तकर्ता फ़ोन",
    smsPhonePlaceholder: "जैसे: +821012345678",
    smsBodyLabel: "संदेश (वैकल्पिक)",
    smsBodyPlaceholder: "जैसे: नमस्ते",
    smsInvalid: "SMS फ़ोन नंबर का फ़ॉर्मैट जांचें।",
    smsEmptyPreview: "SMS QR प्रीव्यू के लिए फ़ोन नंबर दर्ज करें।",
    kakaopayModeLabel: "KakaoPay ट्रांसफर QR",
    kakaopayEmptyPreview: "QR प्रीव्यू के लिए KakaoPay विवरण दर्ज करें।"
  },
  id: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "Nama jaringan (SSID)",
    wifiSsidPlaceholder: "mis. Pixelyaki_WiFi",
    wifiEncryptionLabel: "Enkripsi",
    wifiPasswordLabel: "Kata sandi",
    wifiPasswordPlaceholder: "Masukkan kata sandi Wi-Fi",
    wifiHiddenLabel: "Jaringan tersembunyi",
    wifiInvalid: "Periksa SSID dan pengaturan Wi-Fi.",
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
    vcardEmptyPreview: "Masukkan kontak untuk pratinjau QR vCard.",
    smsPhoneLabel: "Telepon penerima",
    smsPhonePlaceholder: "mis. +821012345678",
    smsBodyLabel: "Pesan (opsional)",
    smsBodyPlaceholder: "mis. Halo",
    smsInvalid: "Periksa format nomor SMS.",
    smsEmptyPreview: "Masukkan nomor telepon untuk pratinjau QR SMS.",
    kakaopayModeLabel: "QR Transfer KakaoPay",
    kakaopayEmptyPreview: "Masukkan detail KakaoPay untuk pratinjau QR."
  },
  it: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "Nome rete (SSID)",
    wifiSsidPlaceholder: "es. Pixelyaki_WiFi",
    wifiEncryptionLabel: "Crittografia",
    wifiPasswordLabel: "Password",
    wifiPasswordPlaceholder: "Inserisci la password Wi-Fi",
    wifiHiddenLabel: "Rete nascosta",
    wifiInvalid: "Controlla SSID e impostazioni Wi-Fi.",
    wifiEmptyPreview: "Inserisci i dati Wi-Fi per vedere l'anteprima QR.",
    vcardNameLabel: "Nome",
    vcardNamePlaceholder: "es. Arthur Kim",
    vcardCompanyLabel: "Azienda",
    vcardCompanyPlaceholder: "es. Pixelyaki",
    vcardPhoneLabel: "Telefono",
    vcardPhonePlaceholder: "es. +821012345678",
    vcardEmailLabel: "Email",
    vcardEmailPlaceholder: "es. hello@pixelyaki.com",
    vcardAddressLabel: "Indirizzo",
    vcardAddressPlaceholder: "es. Seoul, Korea",
    vcardInvalid: "Inserisci almeno un nome.",
    vcardInvalidPhone: "Controlla il formato del telefono vCard.",
    vcardInvalidEmail: "Controlla il formato email vCard.",
    vcardEmptyPreview: "Inserisci i contatti per l'anteprima QR vCard.",
    smsPhoneLabel: "Telefono destinatario",
    smsPhonePlaceholder: "es. +821012345678",
    smsBodyLabel: "Messaggio (opzionale)",
    smsBodyPlaceholder: "es. Ciao",
    smsInvalid: "Controlla il formato del numero SMS.",
    smsEmptyPreview: "Inserisci un numero per l'anteprima QR SMS.",
    kakaopayModeLabel: "QR Trasferimento KakaoPay",
    kakaopayEmptyPreview: "Inserisci i dati KakaoPay per l'anteprima QR."
  },
  pt: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "Nome da rede (SSID)",
    wifiSsidPlaceholder: "ex. Pixelyaki_WiFi",
    wifiEncryptionLabel: "Criptografia",
    wifiPasswordLabel: "Senha",
    wifiPasswordPlaceholder: "Digite a senha do Wi-Fi",
    wifiHiddenLabel: "Rede oculta",
    wifiInvalid: "Verifique o SSID e as configurações de Wi-Fi.",
    wifiEmptyPreview: "Digite os dados do Wi-Fi para pré-visualizar o QR.",
    vcardNameLabel: "Nome",
    vcardNamePlaceholder: "ex. Arthur Kim",
    vcardCompanyLabel: "Empresa",
    vcardCompanyPlaceholder: "ex. Pixelyaki",
    vcardPhoneLabel: "Telefone",
    vcardPhonePlaceholder: "ex. +821012345678",
    vcardEmailLabel: "E-mail",
    vcardEmailPlaceholder: "ex. hello@pixelyaki.com",
    vcardAddressLabel: "Endereço",
    vcardAddressPlaceholder: "ex. Seoul, Korea",
    vcardInvalid: "Digite pelo menos um nome.",
    vcardInvalidPhone: "Verifique o formato do telefone no vCard.",
    vcardInvalidEmail: "Verifique o formato do e-mail no vCard.",
    vcardEmptyPreview: "Digite os contatos para pré-visualizar o QR vCard.",
    smsPhoneLabel: "Telefone do destinatário",
    smsPhonePlaceholder: "ex. +821012345678",
    smsBodyLabel: "Mensagem (opcional)",
    smsBodyPlaceholder: "ex. Olá",
    smsInvalid: "Verifique o formato do número SMS.",
    smsEmptyPreview: "Digite um telefone para pré-visualizar o QR SMS.",
    kakaopayModeLabel: "QR Transferência KakaoPay",
    kakaopayEmptyPreview: "Digite os dados do KakaoPay para pré-visualizar o QR."
  }
};

const styleCopyByLocale: Record<Locale, StyleCopy> = {
  ko: {
    title: "QR 스타일",
    presetLabel: "프리셋",
    dotsLabel: "점 모양",
    cornerSquareLabel: "코너 모양",
    cornerDotLabel: "코너 점 모양",
    presetSquare: "Square",
    presetRounded: "Rounded",
    presetClassy: "Classy",
    presetDot: "Dot",
    errorCorrectionLabel: "압축률",
    eclL: "저 압축", eclM: "중간 압축", eclQ: "높은 압축", eclH: "최고 압축"
  },
  en: {
    title: "QR style",
    presetLabel: "Preset",
    dotsLabel: "Dots",
    cornerSquareLabel: "Corner square",
    cornerDotLabel: "Corner dot",
    presetSquare: "Square",
    presetRounded: "Rounded",
    presetClassy: "Classy",
    presetDot: "Dot",
    errorCorrectionLabel: "Density",
    eclL: "Low", eclM: "Medium", eclQ: "High", eclH: "Highest"
  },
  zh: {
    title: "QR 样式",
    presetLabel: "预设",
    dotsLabel: "点样式",
    cornerSquareLabel: "角块样式",
    cornerDotLabel: "角点样式",
    presetSquare: "方形",
    presetRounded: "圆角",
    presetClassy: "经典",
    presetDot: "圆点",
    errorCorrectionLabel: "密度",
    eclL: "低", eclM: "中", eclQ: "高", eclH: "最高"
  },
  ja: {
    title: "QRスタイル",
    presetLabel: "プリセット",
    dotsLabel: "ドット形状",
    cornerSquareLabel: "コーナー形状",
    cornerDotLabel: "コーナードット",
    presetSquare: "スクエア",
    presetRounded: "ラウンド",
    presetClassy: "クラシー",
    presetDot: "ドット",
    errorCorrectionLabel: "密度",
    eclL: "低", eclM: "中", eclQ: "高", eclH: "最高"
  },
  es: {
    title: "Estilo QR",
    presetLabel: "Preajuste",
    dotsLabel: "Forma de puntos",
    cornerSquareLabel: "Forma de esquina",
    cornerDotLabel: "Punto de esquina",
    presetSquare: "Cuadrado",
    presetRounded: "Redondeado",
    presetClassy: "Clasico",
    presetDot: "Puntos",
    errorCorrectionLabel: "Densidad",
    eclL: "Baja", eclM: "Media", eclQ: "Alta", eclH: "Maxima"
  },
  fr: {
    title: "Style QR",
    presetLabel: "Preconfiguration",
    dotsLabel: "Style des points",
    cornerSquareLabel: "Style des coins",
    cornerDotLabel: "Point de coin",
    presetSquare: "Carre",
    presetRounded: "Arrondi",
    presetClassy: "Classique",
    presetDot: "Points",
    errorCorrectionLabel: "Densite",
    eclL: "Faible", eclM: "Moyen", eclQ: "Eleve", eclH: "Maximum"
  },
  de: {
    title: "QR-Stil",
    presetLabel: "Voreinstellung",
    dotsLabel: "Punktstil",
    cornerSquareLabel: "Eckenstil",
    cornerDotLabel: "Eckpunkt-Stil",
    presetSquare: "Quadratisch",
    presetRounded: "Abgerundet",
    presetClassy: "Klassisch",
    presetDot: "Punkte",
    errorCorrectionLabel: "Dichte",
    eclL: "Niedrig", eclM: "Mittel", eclQ: "Hoch", eclH: "Maximal"
  },
  ru: {
    title: "Стиль QR",
    presetLabel: "Пресет",
    dotsLabel: "Стиль точек",
    cornerSquareLabel: "Стиль угла",
    cornerDotLabel: "Точка угла",
    presetSquare: "Квадрат",
    presetRounded: "Скруглённый",
    presetClassy: "Классика",
    presetDot: "Точка",
    errorCorrectionLabel: "Плотность",
    eclL: "Низкая", eclM: "Средняя", eclQ: "Высокая", eclH: "Максимум"
  },
  ar: {
    title: "نمط QR",
    presetLabel: "الإعداد المسبق",
    dotsLabel: "نمط النقاط",
    cornerSquareLabel: "نمط الزاوية",
    cornerDotLabel: "نقطة الزاوية",
    presetSquare: "مربع",
    presetRounded: "مستدير",
    presetClassy: "كلاسيكي",
    presetDot: "نقطة",
    errorCorrectionLabel: "الكثافة",
    eclL: "منخفضة", eclM: "متوسطة", eclQ: "عالية", eclH: "أقصى"
  },
  hi: {
    title: "QR स्टाइल",
    presetLabel: "प्रीसेट",
    dotsLabel: "डॉट्स शैली",
    cornerSquareLabel: "कोने का आकार",
    cornerDotLabel: "कोने का डॉट",
    presetSquare: "वर्गाकार",
    presetRounded: "गोल",
    presetClassy: "क्लासी",
    presetDot: "डॉट",
    errorCorrectionLabel: "घनत्व",
    eclL: "कम", eclM: "मध्यम", eclQ: "उच्च", eclH: "अधिकतम"
  },
  id: {
    title: "Gaya QR",
    presetLabel: "Prasetel",
    dotsLabel: "Gaya titik",
    cornerSquareLabel: "Gaya sudut",
    cornerDotLabel: "Titik sudut",
    presetSquare: "Kotak",
    presetRounded: "Bulat",
    presetClassy: "Klasik",
    presetDot: "Titik",
    errorCorrectionLabel: "Kepadatan",
    eclL: "Rendah", eclM: "Sedang", eclQ: "Tinggi", eclH: "Maksimum"
  },
  it: {
    title: "Stile QR",
    presetLabel: "Preimpostazione",
    dotsLabel: "Stile punti",
    cornerSquareLabel: "Stile angolo",
    cornerDotLabel: "Punto angolo",
    presetSquare: "Quadrato",
    presetRounded: "Arrotondato",
    presetClassy: "Classico",
    presetDot: "Punto",
    errorCorrectionLabel: "Densità",
    eclL: "Bassa", eclM: "Media", eclQ: "Alta", eclH: "Massima"
  },
  pt: {
    title: "Estilo QR",
    presetLabel: "Predefinição",
    dotsLabel: "Estilo dos pontos",
    cornerSquareLabel: "Estilo do canto",
    cornerDotLabel: "Ponto do canto",
    presetSquare: "Quadrado",
    presetRounded: "Arredondado",
    presetClassy: "Clássico",
    presetDot: "Ponto",
    errorCorrectionLabel: "Densidade",
    eclL: "Baixa", eclM: "Média", eclQ: "Alta", eclH: "Máxima"
  },
  th: {
    title: "สไตล์ QR",
    presetLabel: "พรีเซ็ต",
    dotsLabel: "รูปแบบจุด",
    cornerSquareLabel: "รูปแบบมุม",
    cornerDotLabel: "จุดมุม",
    presetSquare: "สี่เหลี่ยม",
    presetRounded: "โค้งมน",
    presetClassy: "คลาสสิก",
    presetDot: "จุด",
    errorCorrectionLabel: "ความหนาแน่น",
    eclL: "ต่ำ", eclM: "ปานกลาง", eclQ: "สูง", eclH: "สูงสุด"
  }
};

type QrMode =
  | "text"
  | "send"
  | "url"
  | "email"
  | "phone"
  | "wifi"
  | "vcard"
  | "sms"
  | "kakaopay";

type QrStudioProps = {
  copy: StudioCopy;
  locale: Locale;
};

const INPUT_CLASS =
  "w-full rounded-md border border-neutral-200 bg-white p-2 text-sm text-neutral-900 outline-none transition focus:border-neutral-400 focus:ring-2 focus:ring-neutral-900/5 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:focus:border-neutral-500 dark:focus:ring-neutral-100/5";

const SELECT_CLASS = `${INPUT_CLASS} cursor-pointer`;

const QR_STYLE_PRESETS: Record<
  QrStylePreset,
  { dots: QrDotsStyle; cornerSquare: QrCornerSquareStyle; cornerDot: QrCornerDotStyle }
> = {
  square: { dots: "square", cornerSquare: "square", cornerDot: "square" },
  rounded: { dots: "rounded", cornerSquare: "extra-rounded", cornerDot: "dot" },
  classy: { dots: "classy", cornerSquare: "extra-rounded", cornerDot: "dot" },
  dot: { dots: "dots", cornerSquare: "dot", cornerDot: "dot" }
};

export function QrStudio({ copy, locale }: QrStudioProps) {
  const modeCopy = modeCopyByLocale[locale];
  const extraModeCopy = extraModeCopyByLocale[locale];
  const styleCopy = styleCopyByLocale[locale];
  const [mode, setMode] = useState<QrMode>("text");
  const [text, setText] = useState("");
  const [bankCode, setBankCode] = useState("004");
  const [accountNo, setAccountNo] = useState("");
  const [amount, setAmount] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [wifiSsid, setWifiSsid] = useState("");
  const [wifiEncryption, setWifiEncryption] = useState<"WPA" | "WEP" | "nopass">("WPA");
  const [wifiPassword, setWifiPassword] = useState("");
  const [wifiHidden, setWifiHidden] = useState(false);
  const [vcardName, setVcardName] = useState("");
  const [vcardCompany, setVcardCompany] = useState("");
  const [vcardPhone, setVcardPhone] = useState("");
  const [vcardEmail, setVcardEmail] = useState("");
  const [vcardAddress, setVcardAddress] = useState("");
  const [smsPhone, setSmsPhone] = useState("");
  const [smsBody, setSmsBody] = useState("");
  const [kakaoBankCode, setKakaoBankCode] = useState("004");
  const [kakaoAccountNo, setKakaoAccountNo] = useState("");
  const [kakaoAmount, setKakaoAmount] = useState("");
  const [errorCorrectionLevel, setErrorCorrectionLevel] = useState<QrErrorCorrectionLevel>("H");
  const [stylePreset, setStylePreset] = useState<QrStylePreset>("square");
  const [dotsStyle, setDotsStyle] = useState<QrDotsStyle>(QR_STYLE_PRESETS.square.dots);
  const [cornerSquareStyle, setCornerSquareStyle] = useState<QrCornerSquareStyle>(QR_STYLE_PRESETS.square.cornerSquare);
  const [cornerDotStyle, setCornerDotStyle] = useState<QrCornerDotStyle>(QR_STYLE_PRESETS.square.cornerDot);
  const [foregroundColor, setForegroundColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [transparentBackground, setTransparentBackground] = useState(true);
  const [logoDataUrl, setLogoDataUrl] = useState<string | null>(null);
  const [previewPng, setPreviewPng] = useState("");
  const [previewSvg, setPreviewSvg] = useState("");
  const [isRendering, setIsRendering] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(null);
  const [logoErrorText, setLogoErrorText] = useState<string | null>(null);
  const lastTrackedPayloadRef = useRef("");

  const normalizedText = text.trim();
  const normalizedAccountNo = normalizeAccountNo(accountNo);
  const normalizedAmount = normalizeAmount(amount);
  const hasAmountInput = normalizedAmount.length > 0;
  const sendLink = buildTossSendLink({ bankCode, accountNo, amount });
  const urlPayload = buildUrlPayload(urlInput);
  const emailPayload = buildEmailPayload(emailInput);
  const normalizedPhone = normalizePhone(phoneInput);
  const phonePayload = buildPhonePayload(phoneInput);
  const wifiPayload = buildWifiPayload({
    ssid: wifiSsid,
    encryption: wifiEncryption,
    password: wifiPassword,
    hidden: wifiHidden
  });
  const normalizedVcardPhone = normalizePhone(vcardPhone);
  const hasValidVcardPhone = !vcardPhone.trim() || Boolean(normalizedVcardPhone);
  const hasValidVcardEmail = !vcardEmail.trim() || Boolean(buildEmailPayload(vcardEmail));
  const vcardPayload = buildVCardPayload({
    name: vcardName,
    company: vcardCompany,
    phone: vcardPhone,
    email: vcardEmail,
    address: vcardAddress
  });
  const normalizedSmsPhone = normalizePhone(smsPhone);
  const smsPayload = buildSmsPayload({
    phone: smsPhone,
    body: smsBody
  });
  const normalizedKakaoAccount = normalizeKakaoAccountNumber(kakaoAccountNo);
  const normalizedKakaoAmount = normalizeKakaoAmount(kakaoAmount);
  const hasKakaoAmountInput = normalizedKakaoAmount.length > 0;
  const hasValidKakaoAmount = !hasKakaoAmountInput || isPositiveAmount(normalizedKakaoAmount);
  const kakaoPayPayload = buildKakaoPayBankLink({
    bankCode: kakaoBankCode,
    accountNumber: kakaoAccountNo,
    amount: kakaoAmount
  });

  let qrPayload = "";
  let modeError: string | null = null;

  if (mode === "text") {
    const validText = validateText(text);
    if (validText) {
      qrPayload = normalizedText;
    } else if (text.length > 0) {
      modeError = copy.invalidText;
    }
  } else if (mode === "send") {
    if (!bankCode || !normalizedAccountNo) {
      modeError = accountNo.length > 0 ? modeCopy.invalidAccount : null;
    } else if (hasAmountInput && !isPositiveAmount(normalizedAmount)) {
      modeError = modeCopy.invalidAmount;
    } else if (sendLink) {
      qrPayload = sendLink;
    } else {
      modeError = modeCopy.invalidAccount;
    }
  } else if (mode === "url") {
    if (urlInput.trim().length === 0) {
      modeError = null;
    } else if (urlPayload) {
      qrPayload = urlPayload;
    } else {
      modeError = modeCopy.invalidUrl;
    }
  } else if (mode === "email") {
    if (emailInput.trim().length === 0) {
      modeError = null;
    } else if (emailPayload) {
      qrPayload = emailPayload;
    } else {
      modeError = modeCopy.invalidEmail;
    }
  } else if (mode === "phone") {
    if (phoneInput.trim().length === 0) {
      modeError = null;
    } else if (phonePayload) {
      qrPayload = phonePayload;
    } else {
      modeError = modeCopy.invalidPhone;
    }
  } else if (mode === "wifi") {
    if (wifiSsid.trim().length === 0) {
      modeError = null;
    } else if (wifiPayload) {
      qrPayload = wifiPayload;
    } else {
      modeError = extraModeCopy.wifiInvalid;
    }
  } else if (mode === "vcard") {
    if (vcardName.trim().length === 0 && !vcardCompany.trim() && !vcardPhone.trim() && !vcardEmail.trim() && !vcardAddress.trim()) {
      modeError = null;
    } else if (!vcardName.trim()) {
      modeError = extraModeCopy.vcardInvalid;
    } else if (!hasValidVcardPhone) {
      modeError = extraModeCopy.vcardInvalidPhone;
    } else if (!hasValidVcardEmail) {
      modeError = extraModeCopy.vcardInvalidEmail;
    } else if (vcardPayload) {
      qrPayload = vcardPayload;
    } else {
      modeError = extraModeCopy.vcardInvalid;
    }
  } else if (mode === "sms") {
    if (smsPhone.trim().length === 0) {
      modeError = null;
    } else if (smsPayload) {
      qrPayload = smsPayload;
    } else {
      modeError = extraModeCopy.smsInvalid;
    }
  } else if (mode === "kakaopay") {
    if (!kakaoBankCode || !normalizedKakaoAccount) {
      modeError = kakaoAccountNo.length > 0 ? modeCopy.invalidAccount : null;
    } else if (!hasValidKakaoAmount) {
      modeError = modeCopy.invalidAmount;
    } else if (kakaoPayPayload) {
      qrPayload = kakaoPayPayload;
    } else {
      modeError = modeCopy.invalidAccount;
    }
  } else {
    modeError = null;
  }

  useEffect(() => {
    let cancelled = false;

    async function renderQr() {
      if (!qrPayload) {
        setPreviewPng("");
        setPreviewSvg("");
        setErrorText(modeError);
        lastTrackedPayloadRef.current = "";
        return;
      }

      setErrorText(null);
      setIsRendering(true);

      try {
        const [png, svg] = await Promise.all([
          renderQrPngDataUrl({
            text: qrPayload,
            foregroundColor,
            backgroundColor,
            transparentBackground,
            logoDataUrl,
            errorCorrectionLevel,
            style: {
              preset: stylePreset,
              dots: dotsStyle,
              cornerSquare: cornerSquareStyle,
              cornerDot: cornerDotStyle
            }
          }),
          renderQrSvgMarkup({
            text: qrPayload,
            foregroundColor,
            backgroundColor,
            transparentBackground,
            logoDataUrl,
            errorCorrectionLevel,
            style: {
              preset: stylePreset,
              dots: dotsStyle,
              cornerSquare: cornerSquareStyle,
              cornerDot: cornerDotStyle
            }
          })
        ]);

        if (!cancelled) {
          setPreviewPng(png);
          setPreviewSvg(svg);

          if (lastTrackedPayloadRef.current !== qrPayload) {
            const commonPayload = {
              mode,
              has_logo: Boolean(logoDataUrl),
              transparent_background: transparentBackground,
              style_preset: stylePreset,
              style_dots: dotsStyle,
              style_corner_square: cornerSquareStyle,
              style_corner_dot: cornerDotStyle
            };

            if (mode === "text") {
              trackGtmEvent("qr_generate", {
                ...commonPayload,
                text_length: normalizedText.length
              });
            } else if (mode === "send") {
              trackGtmEvent("qr_generate", {
                ...commonPayload,
                bank_code: bankCode,
                account_length: normalizedAccountNo.length,
                has_amount: hasAmountInput
              });
            } else if (mode === "url") {
              trackGtmEvent("qr_generate", {
                ...commonPayload,
                url_length: urlInput.trim().length
              });
            } else if (mode === "email") {
              trackGtmEvent("qr_generate", {
                ...commonPayload,
                email_length: emailInput.trim().length
              });
            } else if (mode === "phone") {
              trackGtmEvent("qr_generate", {
                ...commonPayload,
                phone_length: normalizedPhone.length
              });
            } else if (mode === "wifi") {
              trackGtmEvent("qr_generate", {
                ...commonPayload,
                ssid_length: wifiSsid.trim().length,
                encryption: wifiEncryption
              });
            } else if (mode === "vcard") {
              trackGtmEvent("qr_generate", {
                ...commonPayload,
                has_company: Boolean(vcardCompany.trim()),
                has_phone: Boolean(normalizedVcardPhone),
                has_email: Boolean(vcardEmail.trim()),
                has_address: Boolean(vcardAddress.trim())
              });
            } else if (mode === "sms") {
              trackGtmEvent("qr_generate", {
                ...commonPayload,
                sms_phone_length: normalizedSmsPhone.length,
                sms_body_length: smsBody.trim().length
              });
            } else if (mode === "kakaopay") {
              trackGtmEvent("qr_generate", {
                ...commonPayload,
                bank_code: kakaoBankCode,
                account_length: normalizedKakaoAccount.length,
                has_amount: hasKakaoAmountInput,
                china_platform: "kakaopay"
              });
            }

            lastTrackedPayloadRef.current = qrPayload;
          }
        }
      } catch (error) {
        if (!cancelled) {
          setPreviewPng("");
          setPreviewSvg("");
          setErrorText(copy.renderError);
        }
        console.error(error);
      } finally {
        if (!cancelled) {
          setIsRendering(false);
        }
      }
    }

    void renderQr();
    return () => {
      cancelled = true;
    };
  }, [
    backgroundColor,
    errorCorrectionLevel,
    bankCode,
    kakaoBankCode,
    kakaoAccountNo,
    kakaoAmount,
    copy.renderError,
    emailInput,
    foregroundColor,
    hasAmountInput,
    hasKakaoAmountInput,
    hasValidKakaoAmount,
    logoDataUrl,
    mode,
    modeError,
    normalizedAccountNo.length,
    normalizedKakaoAccount.length,
    normalizedPhone.length,
    normalizedSmsPhone.length,
    normalizedText.length,
    qrPayload,
    smsBody,
    stylePreset,
    dotsStyle,
    cornerSquareStyle,
    cornerDotStyle,
    transparentBackground,
    urlInput,
    vcardAddress,
    vcardCompany,
    vcardEmail,
    wifiEncryption,
    wifiSsid,
    normalizedVcardPhone.length
  ]);

  const filenameSeed = getFilenameSeed({
    mode,
    text,
    bankCode,
    normalizedAccountNo,
    normalizedAmount,
    hasAmountInput,
    urlInput,
    emailInput,
    normalizedPhone,
    wifiSsid,
    vcardName,
    smsPhone,
    kakaoBankCode,
    kakaoAccountNo
  });
  const fileNamePng = makeQrFilename(filenameSeed, "png");
  const fileNameSvg = makeQrFilename(filenameSeed, "svg");

  async function onLogoFile(file: File | null) {
    if (!file) {
      setLogoDataUrl(null);
      setLogoErrorText(null);
      return;
    }

    const validation = validateLogoFile(file);
    if (!validation.valid) {
      setLogoDataUrl(null);
      setLogoErrorText(validation.reason === "size" ? copy.invalidLogoSize : copy.invalidLogoType);
      trackGtmEvent("qr_logo_upload_rejected", {
        reason: validation.reason ?? "unknown"
      });
      return;
    }

    setLogoErrorText(null);
    const dataUrl = await readFileAsDataUrl(file);
    setLogoDataUrl(dataUrl);
    trackGtmEvent("qr_logo_upload", {
      file_type: file.type || "unknown",
      file_size_kb: Math.max(1, Math.round(file.size / 1024))
    });
  }

  function onRemoveLogo() {
    if (!logoDataUrl) return;
    setLogoDataUrl(null);
    trackGtmEvent("qr_logo_remove");
  }

  function onDownloadPng() {
    if (!previewPng) return;
    downloadDataUrl(previewPng, fileNamePng);
    trackGtmEvent("qr_download", {
      format: "png",
      mode,
      has_logo: Boolean(logoDataUrl),
      payload_length: qrPayload.length
    });
  }

  function onDownloadSvg() {
    if (!previewSvg) return;
    downloadTextFile(previewSvg, fileNameSvg, "image/svg+xml;charset=utf-8");
    trackGtmEvent("qr_download", {
      format: "svg",
      mode,
      has_logo: Boolean(logoDataUrl),
      payload_length: qrPayload.length
    });
  }

  function onChangeStylePreset(nextPreset: QrStylePreset) {
    setStylePreset(nextPreset);
    const preset = QR_STYLE_PRESETS[nextPreset];
    setDotsStyle(preset.dots);
    setCornerSquareStyle(preset.cornerSquare);
    setCornerDotStyle(preset.cornerDot);
  }

  const emptyPreview =
    mode === "text"
      ? copy.emptyPreview
      : mode === "send"
        ? modeCopy.sendEmptyPreview
        : mode === "url"
          ? modeCopy.urlEmptyPreview
          : mode === "email"
            ? modeCopy.emailEmptyPreview
            : mode === "phone"
              ? modeCopy.phoneEmptyPreview
              : mode === "wifi"
                ? extraModeCopy.wifiEmptyPreview
                : mode === "vcard"
                  ? extraModeCopy.vcardEmptyPreview
                  : mode === "sms"
                    ? extraModeCopy.smsEmptyPreview
                    : extraModeCopy.kakaopayEmptyPreview;

  const isKo = locale === "ko";

  const modeButtons: Array<{ value: QrMode; label: string; icon: React.ReactNode }> = [
    { value: "text", label: modeCopy.textModeLabel, icon: <QrCode className="h-3.5 w-3.5" /> },
    { value: "url", label: modeCopy.urlModeLabel, icon: <Www className="h-3.5 w-3.5" /> },
    { value: "email", label: modeCopy.emailModeLabel, icon: <Mail className="h-3.5 w-3.5" /> },
    { value: "phone", label: modeCopy.phoneModeLabel, icon: <Phone className="h-3.5 w-3.5" /> },
    { value: "wifi", label: extraModeCopy.wifiModeLabel, icon: <Wifi className="h-3.5 w-3.5" /> },
    { value: "vcard", label: extraModeCopy.vcardModeLabel, icon: <UserSquare className="h-3.5 w-3.5" /> },
    { value: "sms", label: extraModeCopy.smsModeLabel, icon: <ChatBubble className="h-3.5 w-3.5" /> },
    ...(isKo ? [
      { value: "send" as QrMode, label: modeCopy.sendModeLabel, icon: <SendDiagonal className="h-3.5 w-3.5" /> },
      { value: "kakaopay" as QrMode, label: extraModeCopy.kakaopayModeLabel, icon: <Wallet className="h-3.5 w-3.5" /> }
    ] : [])
  ];

  return (
    <section id="generator" className="grid gap-3 bg-neutral-50 p-4 dark:bg-neutral-950 md:gap-4 md:p-6">
      <div className="overflow-x-auto">
        <div className={`flex w-max gap-1 rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800/80 md:grid md:w-auto ${isKo ? "md:grid-cols-9" : "md:grid-cols-7"}`}>
          {modeButtons.map((button) => (
            <button
              key={button.value}
              type="button"
              className={`cursor-pointer rounded-md px-2 py-1.5 text-xs font-medium transition-colors ${mode === button.value ? "bg-white text-neutral-900 shadow-sm dark:bg-neutral-700 dark:text-neutral-100" : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"}`}
              onClick={() => setMode(button.value)}
            >
              <span className="inline-flex flex-col items-center gap-1 text-center">
                {button.icon}
                <span className="leading-tight">{button.label}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-3 md:gap-4 lg:grid-cols-[minmax(0,1fr)_380px]">
        <section className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
          <h2 className="mb-4 text-xs font-medium uppercase text-neutral-400 dark:text-neutral-500">
            {copy.inputPanelTitle}
          </h2>

          {mode === "text" ? (
            <QrTextField
              label={copy.textLabel}
              value={text}
              placeholder={copy.textPlaceholder}
              helperText={copy.textRule}
              onChange={setText}
            />
          ) : null}

          {mode === "send" ? (
            <div className="mb-4 grid gap-3">
              <div className="grid gap-1.5">
                <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300" htmlFor="send-bank">
                  {modeCopy.bankLabel}
                </label>
                <select
                  id="send-bank"
                  value={bankCode}
                  onChange={(event) => setBankCode(event.target.value)}
                  className={SELECT_CLASS}
                >
                  <option value="">{modeCopy.bankPlaceholder}</option>
                  {tossBanks.map((bank) => (
                    <option key={bank.code} value={bank.code}>
                      {bank.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-1.5">
                <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300" htmlFor="send-account">
                  {modeCopy.accountLabel}
                </label>
                <input
                  id="send-account"
                  type="text"
                  inputMode="numeric"
                  value={accountNo}
                  onChange={(event) => setAccountNo(event.target.value)}
                  placeholder={modeCopy.accountPlaceholder}
                  className={INPUT_CLASS}
                />
              </div>

              <div className="grid gap-1.5">
                <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300" htmlFor="send-amount">
                  {modeCopy.amountLabel}
                </label>
                <input
                  id="send-amount"
                  type="text"
                  inputMode="numeric"
                  value={amount}
                  onChange={(event) => setAmount(event.target.value.replace(/[^0-9]/g, ""))}
                  placeholder={modeCopy.amountPlaceholder}
                  className={INPUT_CLASS}
                />
                <small className="text-xs text-neutral-400 dark:text-neutral-500">{modeCopy.amountHint}</small>
              </div>
            </div>
          ) : null}

          {mode === "url" ? (
            <div className="mb-4 grid gap-1.5">
              <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300" htmlFor="qr-url">
                {modeCopy.urlLabel}
              </label>
              <input
                id="qr-url"
                type="text"
                value={urlInput}
                onChange={(event) => setUrlInput(event.target.value)}
                placeholder={modeCopy.urlPlaceholder}
                className={INPUT_CLASS}
              />
            </div>
          ) : null}

          {mode === "email" ? (
            <div className="mb-4 grid gap-1.5">
              <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300" htmlFor="qr-email">
                {modeCopy.emailLabel}
              </label>
              <input
                id="qr-email"
                type="email"
                value={emailInput}
                onChange={(event) => setEmailInput(event.target.value)}
                placeholder={modeCopy.emailPlaceholder}
                className={INPUT_CLASS}
              />
            </div>
          ) : null}

          {mode === "phone" ? (
            <div className="mb-4 grid gap-1.5">
              <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300" htmlFor="qr-phone">
                {modeCopy.phoneLabel}
              </label>
              <input
                id="qr-phone"
                type="tel"
                value={phoneInput}
                onChange={(event) => setPhoneInput(event.target.value)}
                placeholder={modeCopy.phonePlaceholder}
                className={INPUT_CLASS}
              />
            </div>
          ) : null}

          {mode === "wifi" ? (
            <div className="mb-4 grid gap-3">
              <div className="grid gap-1.5">
                <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300" htmlFor="wifi-ssid">
                  {extraModeCopy.wifiSsidLabel}
                </label>
                <input
                  id="wifi-ssid"
                  type="text"
                  value={wifiSsid}
                  onChange={(event) => setWifiSsid(event.target.value)}
                  placeholder={extraModeCopy.wifiSsidPlaceholder}
                  className={INPUT_CLASS}
                />
              </div>
              <div className="grid gap-1.5">
                <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300" htmlFor="wifi-encryption">
                  {extraModeCopy.wifiEncryptionLabel}
                </label>
                <select
                  id="wifi-encryption"
                  value={wifiEncryption}
                  onChange={(event) => setWifiEncryption(event.target.value as "WPA" | "WEP" | "nopass")}
                  className={SELECT_CLASS}
                >
                  <option value="WPA">{extraModeCopy.wifiEncryptionWpa}</option>
                  <option value="WEP">{extraModeCopy.wifiEncryptionWep}</option>
                  <option value="nopass">{extraModeCopy.wifiEncryptionNoPassword}</option>
                </select>
              </div>
              {wifiEncryption !== "nopass" ? (
                <div className="grid gap-1.5">
                  <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300" htmlFor="wifi-password">
                    {extraModeCopy.wifiPasswordLabel}
                  </label>
                  <input
                    id="wifi-password"
                    type="text"
                    value={wifiPassword}
                    onChange={(event) => setWifiPassword(event.target.value)}
                    placeholder={extraModeCopy.wifiPasswordPlaceholder}
                    className={INPUT_CLASS}
                  />
                </div>
              ) : null}
              <label className="flex cursor-pointer items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded-sm border-neutral-300 accent-neutral-900 dark:accent-white"
                  checked={wifiHidden}
                  onChange={(event) => setWifiHidden(event.target.checked)}
                />
                <span>{extraModeCopy.wifiHiddenLabel}</span>
              </label>
            </div>
          ) : null}

          {mode === "vcard" ? (
            <div className="mb-4 grid gap-3">
              <div className="grid gap-1.5">
                <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300" htmlFor="vcard-name">
                  {extraModeCopy.vcardNameLabel}
                </label>
                <input
                  id="vcard-name"
                  type="text"
                  value={vcardName}
                  onChange={(event) => setVcardName(event.target.value)}
                  placeholder={extraModeCopy.vcardNamePlaceholder}
                  className={INPUT_CLASS}
                />
              </div>
              <div className="grid gap-1.5">
                <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300" htmlFor="vcard-company">
                  {extraModeCopy.vcardCompanyLabel}
                </label>
                <input
                  id="vcard-company"
                  type="text"
                  value={vcardCompany}
                  onChange={(event) => setVcardCompany(event.target.value)}
                  placeholder={extraModeCopy.vcardCompanyPlaceholder}
                  className={INPUT_CLASS}
                />
              </div>
              <div className="grid gap-1.5">
                <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300" htmlFor="vcard-phone">
                  {extraModeCopy.vcardPhoneLabel}
                </label>
                <input
                  id="vcard-phone"
                  type="tel"
                  value={vcardPhone}
                  onChange={(event) => setVcardPhone(event.target.value)}
                  placeholder={extraModeCopy.vcardPhonePlaceholder}
                  className={INPUT_CLASS}
                />
              </div>
              <div className="grid gap-1.5">
                <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300" htmlFor="vcard-email">
                  {extraModeCopy.vcardEmailLabel}
                </label>
                <input
                  id="vcard-email"
                  type="email"
                  value={vcardEmail}
                  onChange={(event) => setVcardEmail(event.target.value)}
                  placeholder={extraModeCopy.vcardEmailPlaceholder}
                  className={INPUT_CLASS}
                />
              </div>
              <div className="grid gap-1.5">
                <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300" htmlFor="vcard-address">
                  {extraModeCopy.vcardAddressLabel}
                </label>
                <input
                  id="vcard-address"
                  type="text"
                  value={vcardAddress}
                  onChange={(event) => setVcardAddress(event.target.value)}
                  placeholder={extraModeCopy.vcardAddressPlaceholder}
                  className={INPUT_CLASS}
                />
              </div>
            </div>
          ) : null}

          {mode === "sms" ? (
            <div className="mb-4 grid gap-3">
              <div className="grid gap-1.5">
                <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300" htmlFor="sms-phone">
                  {extraModeCopy.smsPhoneLabel}
                </label>
                <input
                  id="sms-phone"
                  type="tel"
                  value={smsPhone}
                  onChange={(event) => setSmsPhone(event.target.value)}
                  placeholder={extraModeCopy.smsPhonePlaceholder}
                  className={INPUT_CLASS}
                />
              </div>
              <div className="grid gap-1.5">
                <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300" htmlFor="sms-body">
                  {extraModeCopy.smsBodyLabel}
                </label>
                <textarea
                  id="sms-body"
                  value={smsBody}
                  onChange={(event) => setSmsBody(event.target.value)}
                  placeholder={extraModeCopy.smsBodyPlaceholder}
                  className={`${INPUT_CLASS} min-h-20 resize-y`}
                />
              </div>
            </div>
          ) : null}

          {mode === "kakaopay" ? (
            <div className="mb-4 grid gap-3">
              <div className="grid gap-1.5">
                <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300" htmlFor="kakaopay-bank">
                  {modeCopy.bankLabel}
                </label>
                <select
                  id="kakaopay-bank"
                  value={kakaoBankCode}
                  onChange={(event) => setKakaoBankCode(event.target.value)}
                  className={SELECT_CLASS}
                >
                  <option value="">{modeCopy.bankPlaceholder}</option>
                  {kakaopayBanks.map((bank) => (
                    <option key={bank.code} value={bank.code}>
                      {bank.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-1.5">
                <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300" htmlFor="kakaopay-account">
                  {modeCopy.accountLabel}
                </label>
                <input
                  id="kakaopay-account"
                  type="text"
                  inputMode="numeric"
                  value={kakaoAccountNo}
                  onChange={(event) => setKakaoAccountNo(event.target.value)}
                  placeholder={modeCopy.accountPlaceholder}
                  className={INPUT_CLASS}
                />
              </div>
              <div className="grid gap-1.5">
                <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300" htmlFor="kakaopay-amount">
                  {modeCopy.amountLabel}
                </label>
                <input
                  id="kakaopay-amount"
                  type="text"
                  inputMode="numeric"
                  value={kakaoAmount}
                  onChange={(event) => setKakaoAmount(event.target.value.replace(/[^0-9]/g, ""))}
                  placeholder={modeCopy.amountPlaceholder}
                  className={INPUT_CLASS}
                />
                <small className="text-xs text-neutral-400 dark:text-neutral-500">{modeCopy.amountHint}</small>
              </div>
            </div>
          ) : null}

          <div className="mb-4 grid gap-2 rounded-md border border-neutral-200 p-3 dark:border-neutral-700">
            <h3 className="text-xs font-medium text-neutral-700 dark:text-neutral-300">{styleCopy.title}</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <label className="text-xs text-neutral-500 dark:text-neutral-400" htmlFor="qr-style-preset">
                  {styleCopy.presetLabel}
                </label>
                <select
                  id="qr-style-preset"
                  className={SELECT_CLASS}
                  value={stylePreset}
                  onChange={(event) => onChangeStylePreset(event.target.value as QrStylePreset)}
                >
                  <option value="square">{styleCopy.presetSquare}</option>
                  <option value="rounded">{styleCopy.presetRounded}</option>
                  <option value="classy">{styleCopy.presetClassy}</option>
                  <option value="dot">{styleCopy.presetDot}</option>
                </select>
              </div>

              <div className="grid gap-1.5">
                <label className="text-xs text-neutral-500 dark:text-neutral-400" htmlFor="qr-style-dots">
                  {styleCopy.dotsLabel}
                </label>
                <select
                  id="qr-style-dots"
                  className={SELECT_CLASS}
                  value={dotsStyle}
                  onChange={(event) => setDotsStyle(event.target.value as QrDotsStyle)}
                >
                  <option value="square">{styleCopy.styleSquare}</option>
                  <option value="dots">{styleCopy.styleDots}</option>
                  <option value="rounded">{styleCopy.styleRounded}</option>
                  <option value="classy">{styleCopy.styleClassy}</option>
                  <option value="classy-rounded">{styleCopy.styleClassyRounded}</option>
                  <option value="extra-rounded">{styleCopy.styleExtraRounded}</option>
                </select>
              </div>

              <div className="grid gap-1.5">
                <label className="text-xs text-neutral-500 dark:text-neutral-400" htmlFor="qr-style-corner-square">
                  {styleCopy.cornerSquareLabel}
                </label>
                <select
                  id="qr-style-corner-square"
                  className={SELECT_CLASS}
                  value={cornerSquareStyle}
                  onChange={(event) => setCornerSquareStyle(event.target.value as QrCornerSquareStyle)}
                >
                  <option value="square">{styleCopy.styleSquare}</option>
                  <option value="dot">{styleCopy.styleDot}</option>
                  <option value="extra-rounded">{styleCopy.styleExtraRounded}</option>
                </select>
              </div>

              <div className="grid gap-1.5">
                <label className="text-xs text-neutral-500 dark:text-neutral-400" htmlFor="qr-style-corner-dot">
                  {styleCopy.cornerDotLabel}
                </label>
                <select
                  id="qr-style-corner-dot"
                  className={SELECT_CLASS}
                  value={cornerDotStyle}
                  onChange={(event) => setCornerDotStyle(event.target.value as QrCornerDotStyle)}
                >
                  <option value="square">{styleCopy.styleSquare}</option>
                  <option value="dot">{styleCopy.styleDot}</option>
                </select>
              </div>

              <div className="grid gap-1.5">
                <label className="text-xs text-neutral-500 dark:text-neutral-400" htmlFor="qr-error-correction">
                  {styleCopy.errorCorrectionLabel}
                </label>
                <select
                  id="qr-error-correction"
                  className={SELECT_CLASS}
                  value={errorCorrectionLevel}
                  onChange={(event) => setErrorCorrectionLevel(event.target.value as QrErrorCorrectionLevel)}
                >
                  <option value="L">{styleCopy.eclL}</option>
                  <option value="M">{styleCopy.eclM}</option>
                  <option value="Q">{styleCopy.eclQ}</option>
                  <option value="H">{styleCopy.eclH}</option>
                </select>
              </div>
            </div>
          </div>

          <ColorPickerGroup
            foregroundLabel={copy.foregroundColor}
            backgroundLabel={copy.backgroundColor}
            foregroundColor={foregroundColor}
            backgroundColor={backgroundColor}
            onForegroundChange={setForegroundColor}
            onBackgroundChange={setBackgroundColor}
          />

          {(() => {
            if (transparentBackground) return null;
            const ratio = getContrastRatio(foregroundColor, backgroundColor);
            if (ratio >= 4.5) return null;
            const isVeryLow = ratio < 3;
            return (
              <p className={`mb-3 rounded-md border p-2 text-xs ${isVeryLow ? "border-red-200 bg-red-50 text-red-600 dark:border-red-900 dark:bg-red-950/40 dark:text-red-400" : "border-amber-200 bg-amber-50 text-amber-600 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-400"}`}>
                {copy.contrastWarning} - {ratio.toFixed(1)}:1
              </p>
            );
          })()}

          <div className="mb-4 grid gap-2">
            <TransparencyToggle
              label={copy.transparentBackground}
              checked={transparentBackground}
              onChange={setTransparentBackground}
            />
          </div>

          <LogoUploader
            label={copy.logoLabel}
            hint={copy.logoHint}
            removeLabel={copy.removeLogo}
            hasLogo={Boolean(logoDataUrl)}
            onFileChange={onLogoFile}
            onRemove={onRemoveLogo}
          />
          {logoErrorText ? <p className="text-xs text-red-500">{logoErrorText}</p> : null}
        </section>

        <section className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
          <QrPreviewCard
            title={copy.previewPanelTitle}
            previewUrl={previewPng}
            emptyPreview={emptyPreview}
            loadingText={copy.generating}
            fileNameLabel={copy.fileNameLabel}
            fileNamePreview={fileNamePng}
            error={errorText}
            isRendering={isRendering}
          />
          <DownloadActions
            pngLabel={copy.pngButton}
            svgLabel={copy.svgButton}
            disabled={!previewPng || !previewSvg}
            onDownloadPng={onDownloadPng}
            onDownloadSvg={onDownloadSvg}
          />
        </section>
      </div>
    </section>
  );
}

function getFilenameSeed(options: {
  mode: QrMode;
  text: string;
  bankCode: string;
  normalizedAccountNo: string;
  normalizedAmount: string;
  hasAmountInput: boolean;
  urlInput: string;
  emailInput: string;
  normalizedPhone: string;
  wifiSsid: string;
  vcardName: string;
  smsPhone: string;
  kakaoBankCode: string;
  kakaoAccountNo: string;
}): string {
  if (options.mode === "text") {
    return options.text || "sample";
  }

  if (options.mode === "send") {
    return `toss-send-${options.bankCode}-${options.normalizedAccountNo || "account"}${options.hasAmountInput ? `-${options.normalizedAmount}` : ""}`;
  }

  if (options.mode === "url") {
    return `url-${options.urlInput || "link"}`;
  }

  if (options.mode === "email") {
    return `email-${options.emailInput || "address"}`;
  }

  if (options.mode === "phone") {
    return `phone-${options.normalizedPhone || "number"}`;
  }

  if (options.mode === "wifi") {
    return `wifi-${options.wifiSsid || "network"}`;
  }

  if (options.mode === "vcard") {
    return `vcard-${options.vcardName || "contact"}`;
  }

  if (options.mode === "sms") {
    return `sms-${options.smsPhone || "message"}`;
  }

  if (options.mode === "kakaopay") {
    return `kakaopay-${options.kakaoBankCode || "bank"}-${options.kakaoAccountNo || "account"}`;
  }

  return "sample";
}

function buildUrlPayload(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return null;

  const withScheme = /^[a-zA-Z][a-zA-Z\d+.-]*:/.test(trimmed) ? trimmed : `https://${trimmed}`;

  try {
    const url = new URL(withScheme);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return null;
    }
    return url.toString();
  } catch {
    return null;
  }
}

function buildEmailPayload(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return null;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return null;
  }

  return `mailto:${trimmed}`;
}

function normalizePhone(value: string): string {
  const trimmed = value.trim();
  const digits = trimmed.replace(/\D/g, "");
  if (!digits) return "";
  return trimmed.startsWith("+") ? `+${digits}` : digits;
}

function buildPhonePayload(value: string): string | null {
  const normalized = normalizePhone(value);
  if (!normalized) return null;

  if (!/^\+?[0-9]{7,15}$/.test(normalized)) {
    return null;
  }

  return `tel:${normalized}`;
}

function escapeWifiValue(value: string): string {
  return value.replace(/([\\;,:"])/g, "\\$1");
}

function buildWifiPayload(options: {
  ssid: string;
  encryption: "WPA" | "WEP" | "nopass";
  password: string;
  hidden: boolean;
}): string | null {
  const ssid = options.ssid.trim();
  if (!ssid) return null;

  if (options.encryption !== "nopass" && options.password.trim().length === 0) {
    return null;
  }

  const escapedSsid = escapeWifiValue(ssid);
  const escapedPassword = escapeWifiValue(options.password.trim());
  const hiddenFlag = options.hidden ? "H:true;" : "";

  if (options.encryption === "nopass") {
    return `WIFI:T:nopass;S:${escapedSsid};${hiddenFlag};`;
  }

  return `WIFI:T:${options.encryption};S:${escapedSsid};P:${escapedPassword};${hiddenFlag};`;
}

function sanitizeVCardValue(value: string): string {
  return value.replace(/\r?\n/g, "\\n").replace(/;/g, "\\;").replace(/,/g, "\\,").trim();
}

function buildVCardPayload(options: {
  name: string;
  company: string;
  phone: string;
  email: string;
  address: string;
}): string | null {
  const name = options.name.trim();
  if (!name) return null;

  const phone = normalizePhone(options.phone);
  if (options.phone.trim() && !phone) return null;

  const email = options.email.trim();
  if (email && !buildEmailPayload(email)) return null;

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${sanitizeVCardValue(name)}`
  ];

  if (options.company.trim()) {
    lines.push(`ORG:${sanitizeVCardValue(options.company)}`);
  }
  if (phone) {
    lines.push(`TEL;TYPE=CELL:${phone}`);
  }
  if (email) {
    lines.push(`EMAIL:${sanitizeVCardValue(email)}`);
  }
  if (options.address.trim()) {
    lines.push(`ADR:;;${sanitizeVCardValue(options.address)};;;;`);
  }

  lines.push("END:VCARD");
  return lines.join("\n");
}

function buildSmsPayload(options: { phone: string; body: string }): string | null {
  const normalized = normalizePhone(options.phone);
  if (!normalized) return null;
  if (!/^\+?[0-9]{7,15}$/.test(normalized)) return null;

  const body = options.body.trim();
  if (!body) {
    return `sms:${normalized}`;
  }

  const params = new URLSearchParams({ body });
  return `sms:${normalized}?${params.toString()}`;
}

function hexToLinear(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const toLinear = (c: number) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

function getContrastRatio(hex1: string, hex2: string): number {
  const l1 = hexToLinear(hex1);
  const l2 = hexToLinear(hex2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}
