import { FullTranslation } from "../types";

export const nl: FullTranslation = {
  seo: {
    title: "Pixelyaki QR Code Generator | Gratis PNG/SVG Download",
    description: "Zet tekst direct om in een QR-code zonder registratie. Ondersteunt kleur aanpassing, logo toevoegen, transparante PNG en SVG download."
  },
  header: {
    logo: "Pixelyaki",
    generate: "Genereren"
  },
  hero: {
    eyebrow: "Geen registratie vereist",
    title: "Zet tekst direct om in QR-codes",
    description: "Pas kleuren aan, voeg een logo toe en exporteer direct als transparante PNG of SVG."
  },
  studio: {
    inputPanelTitle: "Invoer en opties",
    previewPanelTitle: "Live voorbeeld",
    textLabel: "Tekst",
    textPlaceholder: "Voer maximaal 128 tekens in",
    textRule: "Maximaal 128 tekens",
    foregroundColor: "Voorgrondkleur",
    backgroundColor: "Achtergrondkleur",
    transparentBackground: "Transparante PNG-achtergrond",
    logoLabel: "Logo uploaden",
    logoHint: "Afbeeldingen, max. 10MB",
    removeLogo: "Logo verwijderen",
    pngButton: "PNG Downloaden",
    svgButton: "SVG Downloaden",
    fileNameLabel: "Bestandsnaam voorbeeld",
    emptyPreview: "Voer tekst in om een QR-voorbeeld te zien.",
    generating: "QR genereren...",
    invalidText: "Voer 1 tot 128 tekens in.",
    invalidLogoType: "Alleen afbeeldingen worden ondersteund voor het logo.",
    invalidLogoSize: "Logo bestandsgrootte moet 10MB of minder zijn.",
    renderError: "Er is een fout opgetreden bij het genereren van de QR-code.",
    contrastWarning: "Laag contrast - de QR-code kan mogelijk niet betrouwbaar worden gescand"
  },
  modes: {
    modeSelectorTitle: "QR Type",
    textModeLabel: "Tekst",
    sendModeLabel: "Toss Overboeking",
    urlModeLabel: "URL",
    emailModeLabel: "E-mail",
    phoneModeLabel: "Telefoon",
    bankLabel: "Bankcode",
    bankPlaceholder: "Selecteer een bank",
    accountLabel: "Rekeningnummer",
    accountPlaceholder: "Voer rekeningnummer in",
    amountLabel: "Bedrag (optioneel)",
    amountPlaceholder: "bijv. 10000",
    amountHint: "Laat leeg voor een overboeking zonder bedrag.",
    invalidAccount: "Controleer bank en rekeningnummer.",
    invalidAmount: "Bedrag moet een getal groter dan 0 zijn.",
    sendEmptyPreview: "Voer bank en rekeningnummer in voor een voorbeeld.",
    urlLabel: "URL",
    urlPlaceholder: "bijv. pixelyaki.com of https://pixelyaki.com",
    invalidUrl: "Voer een geldige URL in.",
    urlEmptyPreview: "Voer een URL in voor een voorbeeld.",
    emailLabel: "E-mailadres",
    emailPlaceholder: "bijv. hello@pixelyaki.com",
    invalidEmail: "Voer een geldig e-mailadres in.",
    emailEmptyPreview: "Voer een e-mailadres in voor een voorbeeld.",
    phoneLabel: "Telefoonnummer",
    phonePlaceholder: "bijv. +31612345678",
    invalidPhone: "Voer een geldig telefoonnummer in.",
    phoneEmptyPreview: "Voer een telefoonnummer in voor een voorbeeld."
  },
  extraModes: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "Netwerknaam (SSID)",
    wifiSsidPlaceholder: "bijv. Pixelyaki_WiFi",
    wifiEncryptionLabel: "Versleuteling",
    wifiEncryptionWpa: "WPA/WPA2",
    wifiEncryptionWep: "WEP",
    wifiEncryptionNoPassword: "Geen wachtwoord",
    wifiPasswordLabel: "Wachtwoord",
    wifiPasswordPlaceholder: "Voer Wi-Fi wachtwoord in",
    wifiHiddenLabel: "Verborgen netwerk",
    wifiInvalid: "Controleer uw Wi-Fi-instellingen.",
    wifiEmptyPreview: "Voer Wi-Fi details in voor een voorbeeld.",
    vcardNameLabel: "Naam",
    vcardNamePlaceholder: "bijv. Arthur Kim",
    vcardCompanyLabel: "Bedrijf",
    vcardCompanyPlaceholder: "bijv. Pixelyaki",
    vcardPhoneLabel: "Telefoonnummer",
    vcardPhonePlaceholder: "bijv. +31612345678",
    vcardEmailLabel: "E-mail",
    vcardEmailPlaceholder: "bijv. hello@pixelyaki.com",
    vcardAddressLabel: "Adres",
    vcardAddressPlaceholder: "bijv. Amsterdam, Nederland",
    vcardInvalid: "Voer ten minste een naam in.",
    vcardInvalidPhone: "Controleer het formaat van het vCard-telefoonnummer.",
    vcardInvalidEmail: "Controleer het formaat van het vCard-e-mailadres.",
    vcardEmptyPreview: "Voer contactgegevens in voor een vCard QR-voorbeeld.",
    smsPhoneLabel: "Ontvanger telefoon",
    smsPhonePlaceholder: "bijv. +31612345678",
    smsBodyLabel: "Bericht (optioneel)",
    smsBodyPlaceholder: "bijv. Hallo!",
    smsInvalid: "Controleer het formaat van het SMS-telefoonnummer.",
    smsEmptyPreview: "Voer een telefoonnummer in voor een SMS QR-voorbeeld.",
    kakaopayModeLabel: "KakaoPay Overboeking",
    kakaopayEmptyPreview: "Voer KakaoPay gegevens in voor een voorbeeld."
  },
  styles: {
    title: "QR stijl",
    presetLabel: "Preset",
    dotsLabel: "Punten",
    cornerSquareLabel: "Hoeken",
    cornerDotLabel: "Hoekpunten",
    presetSquare: "Vierkant",
    presetRounded: "Afgerond",
    presetClassy: "Classy",
    presetDot: "Punt",
    styleSquare: "Vierkant",
    styleDots: "Punten",
    styleRounded: "Afgerond Vierkant",
    styleClassy: "Classy Stijl",
    styleClassyRounded: "Classy Afgerond",
    styleExtraRounded: "Extra Afgerond",
    styleDot: "Enkele Punt",
    errorCorrectionLabel: "Dichtheid",
    eclL: "Laag", eclM: "Gemiddeld", eclQ: "Hoog", eclH: "Hoogste"
  },
  features: [
    {
      title: "Transparante PNG",
      description: "Auto-sized transparante PNG export."
    },
    {
      title: "SVG Export",
      description: "Perfect voor print en schaalbare oppervlakken."
    },
    {
      title: "Aangepaste Kleuren",
      description: "Controle over voorgrond- en achtergrondkleur."
    },
    {
      title: "Logo Toevoegen",
      description: "Plaats een logo in het midden met elk formaat tot 10MB."
    },
    {
      title: "Geen Serveropslag",
      description: "Alles wordt in de browser gegenereerd, geen account nodig."
    }
  ],
  faqTitle: "Veelgestelde Vragen",
  faq: [
    {
      q: "Wat is deze QR-generator?",
      a: "Het zet tekst direct om in een downloadbare QR-code."
    },
    {
      q: "Is dit gratis te gebruiken?",
      a: "Ja, de MVP is gratis en vereist geen registratie."
    },
    {
      q: "Wordt mijn invoer op een server opgeslagen?",
      a: "Nee. Deze versie genereert alles in de browser."
    },
    {
      q: "Welke afbeeldingstypes worden ondersteund?",
      a: "Transparante PNG en SVG worden beide ondersteund."
    },
    {
      q: "Welke logo-bestanden kan ik uploaden?",
      a: "De meest gangbare formaten tot 10MB worden ondersteund."
    }
  ],
  footer: {
    privacy: "Privacy",
    terms: "Voorwaarden",
    openSource: "Open Source Licenties",
    copyright: "© Pixelyaki",
    trademark: "QR Code is een geregistreerd handelsmerk van DENSO WAVE INCORPORATED."
  }
};
