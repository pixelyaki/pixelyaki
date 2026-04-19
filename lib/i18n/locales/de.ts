import { FullTranslation } from "../types";

export const de: FullTranslation = {
  seo: {
    title: "QR-Code erstellen Pixelyaki | Kostenloser PNG/SVG-Download",
    description: "Erstelle QR-Codes aus Text ohne Anmeldung. Farben anpassen, Logo einfügen und als transparentes PNG oder SVG herunterladen."
  },
  header: {
    logo: "Pixelyaki",
    generate: "QR-Code erstellen"
  },
  hero: {
    eyebrow: "Ohne Anmeldung",
    title: "Text sofort in QR-Codes umwandeln",
    description: "Farben anpassen, Logo einfügen und als transparentes PNG oder SVG herunterladen."
  },
  studio: {
    inputPanelTitle: "Eingabe und Optionen",
    previewPanelTitle: "Live-Vorschau",
    textLabel: "Text",
    textPlaceholder: "Bis zu 128 Zeichen eingeben",
    textRule: "Maximal 128 Zeichen",
    foregroundColor: "Vordergrundfarbe",
    backgroundColor: "Hintergrundfarbe",
    transparentBackground: "PNG-Hintergrund transparent",
    logoLabel: "Logo hochladen",
    logoHint: "Image files, bis zu 10MB",
    removeLogo: "Logo entfernen",
    pngButton: "PNG herunterladen",
    svgButton: "SVG herunterladen",
    fileNameLabel: "Dateiname Vorschau",
    emptyPreview: "Text eingeben, um die QR-Vorschau zu sehen.",
    generating: "QR wird erstellt...",
    invalidText: "Bitte 1 bis 128 Zeichen eingeben.",
    invalidLogoType: "Nur Image files Logos werden unterstützt.",
    invalidLogoSize: "Das Logo muss 10MB oder kleiner sein.",
    renderError: "Beim Erstellen des QR-Codes ist ein Fehler aufgetreten.",
    contrastWarning: "Zu geringer Kontrast — der QR-Code könnte nicht lesbar sein"
  },
  modes: {
    modeSelectorTitle: "QR-Typ",
    textModeLabel: "Text",
    sendModeLabel: "Toss Transfer-QR",
    urlModeLabel: "URL-Link",
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
  extraModes: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "Netzwerkname (SSID)",
    wifiSsidPlaceholder: "z. B. Pixelyaki_WiFi",
    wifiEncryptionLabel: "Verschlüsselung",
    wifiEncryptionWpa: "WPA/WPA2",
    wifiEncryptionWep: "WEP",
    wifiEncryptionNoPassword: "Kein Passwort",
    wifiPasswordLabel: "Passwort",
    wifiPasswordPlaceholder: "Wi-Fi-Passwort eingeben",
    wifiHiddenLabel: "Verborgenes Netzwerk",
    wifiInvalid: "Bitte Bank und Kontonummer prüfen.",
    wifiEmptyPreview: "Wi-Fi-Details eingeben, um den QR-Code vorzuschauen.",
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
    vcardInvalidPhone: "Bitte das vCard-Telefonnummernformat prüfen.",
    vcardInvalidEmail: "Bitte das vCard-E-Mail-Format prüfen.",
    vcardEmptyPreview: "Kontaktdaten eingeben, um den vCard-QR-Code vorzuschauen.",
    smsPhoneLabel: "Empfänger Telefon",
    smsPhonePlaceholder: "z. B. +821012345678",
    smsBodyLabel: "Nachricht (optional)",
    smsBodyPlaceholder: "z. B. Hallo!",
    smsInvalid: "Bitte das SMS-Telefonnummernformat prüfen.",
    smsEmptyPreview: "Telefonnummer eingeben, um den SMS-QR-Code vorzuschauen.",
    kakaopayModeLabel: "KakaoPay Transfer-QR",
    kakaopayEmptyPreview: "KakaoPay-Transferdaten eingeben, um den QR-Code vorzuschauen.",
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
    title: "QR-Stil",
    presetLabel: "Voreinstellung",
    dotsLabel: "Punktstil",
    cornerSquareLabel: "Eckenstil",
    cornerDotLabel: "Eckpunkt-Stil",
    presetSquare: "Quadratisch",
    presetRounded: "Abgerundet",
    presetClassy: "Elegant",
    presetDot: "Punkte",
    styleSquare: "Quadratisch scharf",
    styleDots: "Punkte",
    styleRounded: "Quadratisch rund",
    styleClassy: "Elegant",
    styleClassyRounded: "Elegant abgerundet",
    styleExtraRounded: "Fließend rund",
    styleDot: "Punkt",
    errorCorrectionLabel: "Dichte",
    eclL: "Niedrig", eclM: "Mittel", eclQ: "Hoch", eclH: "Maximal"
  },
  features: [
    {
      title: "Transparente PNG",
      description: "Automatischer Export von transparenten PNG-Dateien."
    },
    {
      title: "SVG-Export",
      description: "Perfekt für Druck und skalierbare Oberflächen."
    },
    {
      title: "Benutzerdefinierte Farben",
      description: "Steuerung von Vorder- und Hintergrundfarben."
    },
    {
      title: "Logo-Einbettung",
      description: "Logo zentrieren mit PNG, JPG oder SVG bis zu 2 MB."
    },
    {
      title: "Keine Server-Speicherung",
      description: "Nur im Browser generiert, kein Konto erforderlich."
    }
  ],
  faqTitle: "Häufig Gestellte Fragen",
  faq: [
    {
      q: "Was ist dieser QR-Code-Generator?",
      a: "Er wandelt Ihren Text sofort in einen herunterladbaren QR-Code um."
    },
    {
      q: "Ist die Nutzung kostenlos?",
      a: "Ja, die MVP-Version ist kostenlos und erfordert keine Anmeldung."
    },
    {
      q: "Werden meine Daten auf einem Server gespeichert?",
      a: "Nein. In dieser Version wird alles im Browser generiert."
    },
    {
      q: "Welche Bildformate werden unterstützt?",
      a: "Es werden transparente PNG (automatische Größe) und SVG unterstützt."
    },
    {
      q: "Welche Logo-Dateiformate kann ich hochladen?",
      a: "PNG, JPG und SVG werden bis zu 2 MB unterstützt."
    }
  ],
  footer: {
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
    openSource: "Open-Source-Lizenzen",
    copyright: "© Pixelyaki",
    trademark: "QR Code ist eine eingetragene Marke von DENSO WAVE INCORPORATED."
  }
};
