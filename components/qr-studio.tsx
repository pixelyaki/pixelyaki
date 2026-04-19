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
import { FullTranslation } from "@/lib/i18n/types";
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
  locale: Locale;
  translations: FullTranslation;
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

export function QrStudio({ locale, translations }: QrStudioProps) {
  const copy = translations.studio;
  const modeCopy = translations.modes;
  const extraModeCopy = translations.extraModes;
  const styleCopy = translations.styles;
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
