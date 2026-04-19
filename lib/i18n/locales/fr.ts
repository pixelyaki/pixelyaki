import { FullTranslation } from "../types";

export const fr: FullTranslation = {
  seo: {
    title: "Créer un Code QR Pixelyaki | PNG/SVG Gratuit",
    description: "Transformez du texte en QR instantanément sans inscription. Couleurs personnalisées, logo, PNG transparent et SVG."
  },
  header: {
    logo: "Pixelyaki",
    generate: "Créer un code QR"
  },
  hero: {
    eyebrow: "Sans inscription",
    title: "Transformez votre texte en QR instantanément",
    description: "Modifiez les couleurs, ajoutez un logo et exportez en PNG transparent ou SVG."
  },
  studio: {
    inputPanelTitle: "Saisie et options",
    previewPanelTitle: "Aperçu en direct",
    textLabel: "Texte",
    textPlaceholder: "Saisissez jusqu'à 128 caractères",
    textRule: "128 caractères maximum",
    foregroundColor: "Couleur du premier plan",
    backgroundColor: "Couleur de fond",
    transparentBackground: "Fond PNG transparent",
    logoLabel: "Téléverser un logo",
    logoHint: "Image files, jusqu'à 10MB",
    removeLogo: "Supprimer le logo",
    pngButton: "Télécharger PNG",
    svgButton: "Télécharger SVG",
    fileNameLabel: "Aperçu du nom de fichier",
    emptyPreview: "Saisissez un texte pour afficher l'aperçu QR.",
    generating: "Génération du QR...",
    invalidText: "Saisissez entre 1 et 128 caractères.",
    invalidLogoType: "Seuls les logos Image files sont acceptés.",
    invalidLogoSize: "Le logo doit faire 10MB maximum.",
    renderError: "Une erreur est survenue pendant la génération du QR.",
    contrastWarning: "Contraste insuffisant — le QR code pourrait ne pas être lisible"
  },
  modes: {
    modeSelectorTitle: "Type de QR",
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
  extraModes: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "Nom du réseau (SSID)",
    wifiSsidPlaceholder: "ex. Pixelyaki_WiFi",
    wifiEncryptionLabel: "Chiffrement",
    wifiEncryptionWpa: "WPA/WPA2",
    wifiEncryptionWep: "WEP",
    wifiEncryptionNoPassword: "Sans mot de passe",
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
    vcardEmailLabel: "Email",
    vcardEmailPlaceholder: "ex. hello@pixelyaki.com",
    vcardAddressLabel: "Adresse",
    vcardAddressPlaceholder: "ex. Seoul, Korea",
    vcardInvalid: "Veuillez saisir au moins un nom.",
    vcardInvalidPhone: "Veuillez vérifier le format du téléphone vCard.",
    vcardInvalidEmail: "Veuillez vérifier le format de l'e-mail vCard.",
    vcardEmptyPreview: "Saisissez les contacts pour l'aperçu QR vCard.",
    smsPhoneLabel: "Téléphone destinataire",
    smsPhonePlaceholder: "ex. +821012345678",
    smsBodyLabel: "Message (optionnel)",
    smsBodyPlaceholder: "ex. Bonjour",
    smsInvalid: "Vérifiez le format du numéro SMS.",
    smsEmptyPreview: "Saisissez un numéro pour l'aperçu QR SMS.",
    kakaopayModeLabel: "QR de transfert KakaoPay",
    kakaopayEmptyPreview: "Saisissez les données KakaoPay pour l'aperçu QR.",
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
    title: "Style QR",
    presetLabel: "Preconfiguration",
    dotsLabel: "Style des points",
    cornerSquareLabel: "Style des coins",
    cornerDotLabel: "Point de coin",
    presetSquare: "Carré",
    presetRounded: "Arrondi",
    presetClassy: "Élégant",
    presetDot: "Points",
    styleSquare: "Carré droit",
    styleDots: "Format points",
    styleRounded: "Carré arrondi",
    styleClassy: "Élégant",
    styleClassyRounded: "Élégant arrondi",
    styleExtraRounded: "Extra arrondi",
    styleDot: "Point",
    errorCorrectionLabel: "Densite",
    eclL: "Faible", eclM: "Moyen", eclQ: "Eleve", eclH: "Maximum"
  },
  features: [
    {
      title: "PNG Transparent",
      description: "Exportation PNG transparente avec taille automatique."
    },
    {
      title: "Exportation SVG",
      description: "Parfait pour l'impression et les surfaces évolutives."
    },
    {
      title: "Couleurs Personnalisées",
      description: "Contrôles des couleurs de premier plan et d'arrière-plan."
    },
    {
      title: "Intégration de Logo",
      description: "Logo central avec PNG, JPG ou SVG jusqu'à 2 Mo."
    },
    {
      title: "Pas de Stockage Serveur",
      description: "Généré uniquement dans le navigateur, aucun compte requis."
    }
  ],
  faqTitle: "Questions Fréquentes",
  faq: [
    {
      q: "Qu'est-ce que ce générateur de code QR ?",
      a: "Il convertit instantanément votre texte en un code QR téléchargeable."
    },
    {
      q: "Est-ce gratuit ?",
      a: "Oui, le MVP est gratuit et ne nécessite aucune inscription."
    },
    {
      q: "Mon texte est-il stocké sur un serveur ?",
      a: "Non. Cette version génère tout dans le navigateur."
    },
    {
      q: "Quels formats d'image sont pris en charge ?",
      a: "Le PNG transparent (taille automatique) et le SVG sont tous deux pris en charge."
    },
    {
      q: "Quels fichiers de logo puis-je télécharger ?",
      a: "Le PNG, le JPG et le SVG sont pris en charge jusqu'à 2 Mo."
    }
  ],
  footer: {
    privacy: "Confidentialité",
    terms: "Conditions",
    openSource: "Licences Open Source",
    copyright: "© Pixelyaki",
    trademark: "QR Code est une marque déposée de DENSO WAVE INCORPORATED."
  }
};
