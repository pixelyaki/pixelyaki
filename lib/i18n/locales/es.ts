import { FullTranslation } from "../types";

export const es: FullTranslation = {
  seo: {
    title: "Crear Código QR Pixelyaki | Descarga PNG/SVG Gratis",
    description: "Convierte texto en códigos QR al instante sin registro. Personaliza colores, agrega logo y descarga PNG transparente o SVG."
  },
  header: {
    logo: "Pixelyaki",
    generate: "Crear código QR"
  },
  hero: {
    eyebrow: "Sin registro",
    title: "Convierte texto en QR al instante",
    description: "Personaliza colores, inserta un logo y descarga PNG transparente o SVG."
  },
  studio: {
    inputPanelTitle: "Entrada y opciones",
    previewPanelTitle: "Vista previa en vivo",
    textLabel: "Texto",
    textPlaceholder: "Ingresa hasta 128 caracteres",
    textRule: "Máximo 128 caracteres",
    foregroundColor: "Color frontal",
    backgroundColor: "Color de fondo",
    transparentBackground: "Fondo PNG transparente",
    logoLabel: "Subir logo",
    logoHint: "Image files, hasta 10MB",
    removeLogo: "Quitar logo",
    pngButton: "Descargar PNG",
    svgButton: "Descargar SVG",
    fileNameLabel: "Vista del nombre de archivo",
    emptyPreview: "Ingresa texto para ver la vista previa del QR.",
    generating: "Generando QR...",
    invalidText: "Ingresa entre 1 y 128 caracteres.",
    invalidLogoType: "Solo se admiten logos Image files.",
    invalidLogoSize: "El logo debe ser de 10MB o menos.",
    renderError: "Ocurrió un error al generar el código QR.",
    contrastWarning: "Contraste insuficiente — el código QR puede no leerse correctamente"
  },
  modes: {
    modeSelectorTitle: "Tipo de QR",
    textModeLabel: "Texto",
    sendModeLabel: "Toss Transfer QR",
    urlModeLabel: "Enlace URL",
    emailModeLabel: "Correo electrónico",
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
  extraModes: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "Nombre de red (SSID)",
    wifiSsidPlaceholder: "p. ej. Pixelyaki_WiFi",
    wifiEncryptionLabel: "Cifrado",
    wifiEncryptionWpa: "WPA/WPA2",
    wifiEncryptionWep: "WEP",
    wifiEncryptionNoPassword: "Sin contraseña",
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
    kakaopayEmptyPreview: "Ingresa datos de KakaoPay para previsualizar el QR.",
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
    title: "Estilo QR",
    presetLabel: "Preajuste",
    dotsLabel: "Forma de puntos",
    cornerSquareLabel: "Forma de esquina",
    cornerDotLabel: "Punto de esquina",
    presetSquare: "Cuadrado",
    presetRounded: "Redondeado",
    presetClassy: "Elegante",
    presetDot: "Puntos",
    styleSquare: "Marco cuadrado",
    styleDots: "Puntos",
    styleRounded: "Marco redondeado",
    styleClassy: "Elegante",
    styleClassyRounded: "Elegante redondeado",
    styleExtraRounded: "Suave",
    styleDot: "Punto",
    errorCorrectionLabel: "Densidad",
    eclL: "Baja", eclM: "Media", eclQ: "Alta", eclH: "Maxima"
  },
  features: [
    {
      title: "PNG Transparente",
      description: "Exportación de PNG transparente con tamaño automático."
    },
    {
      title: "Exportación SVG",
      description: "Perfecto para impresión y superficies escalables."
    },
    {
      title: "Colores Personalizados",
      description: "Controles de color de primer plano y fondo."
    },
    {
      title: "Insertar Logo",
      description: "Logo central con PNG, JPG o SVG de hasta 10MB."
    },
    {
      title: "Sin Almacenamiento en Servidor",
      description: "Generado solo en el navegador, no se requiere cuenta."
    }
  ],
  faqTitle: "Preguntas Frecuentes",
  faq: [
    {
      q: "¿Qué es este generador de códigos QR?",
      a: "Convierte tu texto en un código QR descargable al instante."
    },
    {
      q: "¿Es gratuito?",
      a: "Sí, el MVP es gratuito y no requiere registro."
    },
    {
      q: "¿Se guarda mi texto en un servidor?",
      a: "No. Esta versión genera todo en el navegador."
    },
    {
      q: "¿Qué formatos de imagen admite?",
      a: "Admite PNG transparente (tamaño automático) y SVG."
    },
    {
      q: "¿Qué archivos de logo puedo subir?",
      a: "PNG, JPG y SVG de hasta 10MB."
    }
  ],
  footer: {
    privacy: "Privacidad",
    terms: "Términos",
    openSource: "Licencias Open Source",
    copyright: "© Pixelyaki",
    trademark: "QR Code es una marca registrada de DENSO WAVE INCORPORATED."
  }
};
