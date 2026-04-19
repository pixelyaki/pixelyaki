import { FullTranslation } from "../types";

export const nl: FullTranslation = {
  seo: {
    title: "QR Code maken Pixelyaki | Gratis PNG/SVG Download",
    description: "Zet tekst direct om in een QR-code zonder registratie. Ondersteunt kleur aanpassing, logo toevoegen, transparante PNG en SVG download."
  },
  header: {
    logo: "Pixelyaki",
    generate: "QR Code maken"
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
    kakaopayEmptyPreview: "Voer KakaoPay gegevens in voor een voorbeeld.",
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
