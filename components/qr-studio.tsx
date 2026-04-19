"use client";

import { useEffect, useRef, useState } from "react";
import { ColorPickerGroup } from "@/components/color-picker-group";
import { DownloadActions } from "@/components/download-actions";
import { LogoUploader } from "@/components/logo-uploader";
import { QrPreviewCard } from "@/components/qr-preview-card";
import { QrTextField } from "@/components/qr-text-field";
import { TransparencyToggle } from "@/components/transparency-toggle";
import { downloadDataUrl, downloadTextFile } from "@/lib/download";
import { makeQrFilename } from "@/lib/filename";
import { trackGtmEvent } from "@/lib/gtm";
import { type Locale } from "@/lib/i18n";
import { renderQrPngDataUrl, renderQrSvgMarkup } from "@/lib/qr";
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
  }
};

const extraModeCopyByLocale: Partial<Record<Locale, ExtraModeCopy>> = {
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
    smsEmptyPreview: "전화번호를 입력하면 SMS QR 미리보기가 표시됩니다."
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
    smsEmptyPreview: "Enter a phone number to preview the SMS QR code."
  }
};

type QrMode = "text" | "send" | "url" | "email" | "phone" | "wifi" | "vcard" | "sms";

type QrStudioProps = {
  copy: StudioCopy;
  locale: Locale;
};

const INPUT_CLASS =
  "w-full rounded-md border border-gray-200 bg-white p-2 text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-900/5 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-gray-500 dark:focus:ring-gray-100/5";

export function QrStudio({ copy, locale }: QrStudioProps) {
  const modeCopy = modeCopyByLocale[locale];
  const extraModeCopy = extraModeCopyByLocale[locale] ?? extraModeCopyByLocale.en!;
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
  } else {
    if (smsPhone.trim().length === 0) {
      modeError = null;
    } else if (smsPayload) {
      qrPayload = smsPayload;
    } else {
      modeError = extraModeCopy.smsInvalid;
    }
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
            logoDataUrl
          }),
          renderQrSvgMarkup({
            text: qrPayload,
            foregroundColor,
            backgroundColor,
            transparentBackground,
            logoDataUrl
          })
        ]);

        if (!cancelled) {
          setPreviewPng(png);
          setPreviewSvg(svg);

          if (lastTrackedPayloadRef.current !== qrPayload) {
            const commonPayload = {
              mode,
              has_logo: Boolean(logoDataUrl),
              transparent_background: transparentBackground
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
            } else {
              trackGtmEvent("qr_generate", {
                ...commonPayload,
                sms_phone_length: normalizedSmsPhone.length,
                sms_body_length: smsBody.trim().length
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
    bankCode,
    copy.renderError,
    emailInput,
    foregroundColor,
    hasAmountInput,
    logoDataUrl,
    mode,
    modeError,
    normalizedAccountNo.length,
    normalizedPhone.length,
    normalizedSmsPhone.length,
    normalizedText.length,
    qrPayload,
    smsBody,
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
    smsPhone
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
                  : extraModeCopy.smsEmptyPreview;

  const modeButtons: Array<{ value: QrMode; label: string }> = [
    { value: "text", label: modeCopy.textModeLabel },
    { value: "send", label: modeCopy.sendModeLabel },
    { value: "url", label: modeCopy.urlModeLabel },
    { value: "email", label: modeCopy.emailModeLabel },
    { value: "phone", label: modeCopy.phoneModeLabel },
    { value: "wifi", label: extraModeCopy.wifiModeLabel },
    { value: "vcard", label: extraModeCopy.vcardModeLabel },
    { value: "sms", label: extraModeCopy.smsModeLabel }
  ];

  return (
    <section id="generator" className="grid gap-3 bg-gray-50 p-4 dark:bg-gray-950 md:gap-4 md:p-6">
      <section className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="mb-4 text-xs font-medium uppercase text-gray-400 dark:text-gray-500">
          {modeCopy.modeSelectorTitle}
        </h2>
        <div className="grid grid-cols-2 gap-1 rounded-md bg-gray-100 p-1 dark:bg-gray-800/80 md:grid-cols-4 lg:grid-cols-8">
          {modeButtons.map((button) => (
            <button
              key={button.value}
              type="button"
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${mode === button.value ? "bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-gray-100" : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"}`}
              onClick={() => setMode(button.value)}
            >
              {button.label}
            </button>
          ))}
        </div>
      </section>

      <div className="grid gap-3 md:gap-4 lg:grid-cols-[minmax(0,1fr)_380px]">
        <section className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
          <h2 className="mb-4 text-xs font-medium uppercase text-gray-400 dark:text-gray-500">
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
                <label className="text-xs font-medium text-gray-700 dark:text-gray-300" htmlFor="send-bank">
                  {modeCopy.bankLabel}
                </label>
                <select
                  id="send-bank"
                  value={bankCode}
                  onChange={(event) => setBankCode(event.target.value)}
                  className={INPUT_CLASS}
                >
                  <option value="">{modeCopy.bankPlaceholder}</option>
                  {tossBanks.map((bank) => (
                    <option key={bank.code} value={bank.code}>
                      {bank.code} {bank.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-1.5">
                <label className="text-xs font-medium text-gray-700 dark:text-gray-300" htmlFor="send-account">
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
                <label className="text-xs font-medium text-gray-700 dark:text-gray-300" htmlFor="send-amount">
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
                <small className="text-xs text-gray-400 dark:text-gray-500">{modeCopy.amountHint}</small>
              </div>
            </div>
          ) : null}

          {mode === "url" ? (
            <div className="mb-4 grid gap-1.5">
              <label className="text-xs font-medium text-gray-700 dark:text-gray-300" htmlFor="qr-url">
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
              <label className="text-xs font-medium text-gray-700 dark:text-gray-300" htmlFor="qr-email">
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
              <label className="text-xs font-medium text-gray-700 dark:text-gray-300" htmlFor="qr-phone">
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
                <label className="text-xs font-medium text-gray-700 dark:text-gray-300" htmlFor="wifi-ssid">
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
                <label className="text-xs font-medium text-gray-700 dark:text-gray-300" htmlFor="wifi-encryption">
                  {extraModeCopy.wifiEncryptionLabel}
                </label>
                <select
                  id="wifi-encryption"
                  value={wifiEncryption}
                  onChange={(event) => setWifiEncryption(event.target.value as "WPA" | "WEP" | "nopass")}
                  className={INPUT_CLASS}
                >
                  <option value="WPA">WPA/WPA2</option>
                  <option value="WEP">WEP</option>
                  <option value="nopass">No password</option>
                </select>
              </div>
              {wifiEncryption !== "nopass" ? (
                <div className="grid gap-1.5">
                  <label className="text-xs font-medium text-gray-700 dark:text-gray-300" htmlFor="wifi-password">
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
              <label className="flex cursor-pointer items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded-sm border-gray-300 accent-gray-900 dark:accent-white"
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
                <label className="text-xs font-medium text-gray-700 dark:text-gray-300" htmlFor="vcard-name">
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
                <label className="text-xs font-medium text-gray-700 dark:text-gray-300" htmlFor="vcard-company">
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
                <label className="text-xs font-medium text-gray-700 dark:text-gray-300" htmlFor="vcard-phone">
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
                <label className="text-xs font-medium text-gray-700 dark:text-gray-300" htmlFor="vcard-email">
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
                <label className="text-xs font-medium text-gray-700 dark:text-gray-300" htmlFor="vcard-address">
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
                <label className="text-xs font-medium text-gray-700 dark:text-gray-300" htmlFor="sms-phone">
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
                <label className="text-xs font-medium text-gray-700 dark:text-gray-300" htmlFor="sms-body">
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

        <section className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
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

  return `sms-${options.smsPhone || "message"}`;
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
