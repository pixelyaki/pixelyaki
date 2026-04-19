import { FullTranslation } from "../types";

export const it: FullTranslation = {
  seo: {
    title: "Generatore QR Pixelyaki | Download PNG/SVG Gratuito",
    description: "Crea codici QR da testo istantaneamente senza registrazione. Personalizza colori, aggiungi logo e scarica PNG trasparente o SVG."
  },
  header: {
    logo: "Pixelyaki",
    generate: "Genera"
  },
  hero: {
    eyebrow: "Senza registrazione",
    title: "Trasforma il testo in QR code istantaneamente",
    description: "Personalizza i colori, incorpora un logo ed esporta PNG trasparente o SVG."
  },
  studio: {
    inputPanelTitle: "Input e opzioni",
    previewPanelTitle: "Anteprima live",
    textLabel: "Testo",
    textPlaceholder: "Inserisci fino a 128 caratteri",
    textRule: "Massimo 128 caratteri",
    foregroundColor: "Colore primo piano",
    backgroundColor: "Colore sfondo",
    transparentBackground: "Sfondo PNG trasparente",
    logoLabel: "Carica logo",
    logoHint: "PNG/JPG/SVG, fino a 2MB",
    removeLogo: "Rimuovi logo",
    pngButton: "Scarica PNG",
    svgButton: "Scarica SVG",
    fileNameLabel: "Anteprima nome file",
    emptyPreview: "Inserisci del testo per vedere l'anteprima QR.",
    generating: "Generazione QR...",
    invalidText: "Inserisci da 1 a 128 caratteri.",
    invalidLogoType: "Sono supportati solo file logo PNG/JPG/SVG.",
    invalidLogoSize: "Il logo deve essere 2MB o meno.",
    renderError: "Si è verificato un errore durante la generazione del QR.",
    contrastWarning: "Contrasto basso — il codice QR potrebbe non essere leggibile"
  },
  modes: {
    modeSelectorTitle: "Tipo di QR",
    textModeLabel: "Testo",
    sendModeLabel: "QR Trasferimento Toss",
    urlModeLabel: "Link URL",
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
  extraModes: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "Nome rete (SSID)",
    wifiSsidPlaceholder: "es. Pixelyaki_WiFi",
    wifiEncryptionLabel: "Crittografia",
    wifiEncryptionWpa: "WPA/WPA2",
    wifiEncryptionWep: "WEP",
    wifiEncryptionNoPassword: "Nessuna password",
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
  styles: {
    title: "Stile QR",
    presetLabel: "Preimpostazione",
    dotsLabel: "Stile punti",
    cornerSquareLabel: "Stile angolo",
    cornerDotLabel: "Punto angolo",
    presetSquare: "Quadrato",
    presetRounded: "Arrotondato",
    presetClassy: "Elegante",
    presetDot: "Punto",
    styleSquare: "Squadrato",
    styleDots: "Punti",
    styleRounded: "Arrotondato",
    styleClassy: "Elegante",
    styleClassyRounded: "Elegante arrotondato",
    styleExtraRounded: "Molto arrotondato",
    styleDot: "Punto",
    errorCorrectionLabel: "Densità",
    eclL: "Bassa", eclM: "Media", eclQ: "Alta", eclH: "Massima"
  },
  features: [
    {
      title: "PNG Trasparente",
      description: "Esportazione PNG trasparente con ridimensionamento automatico."
    },
    {
      title: "Esportazione SVG",
      description: "Perfetto per la stampa e le superfici scalabili."
    },
    {
      title: "Colori Personalizzati",
      description: "Controlli per i colori di primo piano e di sfondo."
    },
    {
      title: "Incorpora Logo",
      description: "Logo centrale con PNG, JPG o SVG fino a 2 MB."
    },
    {
      title: "Nessuna Archiviazione Server",
      description: "Generato solo nel browser, nessun account richiesto."
    }
  ],
  faqTitle: "Domande Frequenti",
  faq: [
    {
      q: "Cos'è questo generatore di codici QR?",
      a: "Converte istantaneamente il tuo testo in un codice QR scaricabile."
    },
    {
      q: "¿È gratuito?",
      a: "Sì, la versione MVP è gratuita e non richiede registrazione."
    },
    {
      q: "Il mio input è memorizzato su un server?",
      a: "No. Questa versione genera tutto all'interno del browser."
    },
    {
      q: "Quali formati di immagine sono supportati?",
      a: "Sono supportati sia PNG trasparente (ridimensionamento automatico) che SVG."
    },
    {
      q: "Quali file logo posso caricare?",
      a: "Sono supportati PNG, JPG e SVG fino a 2 MB."
    }
  ],
  footer: {
    privacy: "Privacy",
    terms: "Termini",
    openSource: "Licenze Open Source",
    copyright: "© Pixelyaki",
    trademark: "QR Code è un marchio registrato di DENSO WAVE INCORPORATED."
  }
};
