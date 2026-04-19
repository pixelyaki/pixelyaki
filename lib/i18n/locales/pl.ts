import { FullTranslation } from "../types";

export const pl: FullTranslation = {
  seo: {
    title: "Generator kodów QR Pixelyaki | Darmowe pobieranie PNG/SVG",
    description: "Natychmiast zamień tekst na kod QR bez rejestracji. Obsługuje dostosowywanie kolorów, dodawanie logo, pobieranie przezroczystych PNG i SVG."
  },
  header: {
    logo: "Pixelyaki",
    generate: "Generuj"
  },
  hero: {
    eyebrow: "Rejestracja nie jest wymagana",
    title: "Błyskawicznie zamieniaj tekst na kody QR",
    description: "Dostosuj kolory, wstaw logo i natychmiast eksportuj jako przezroczysty PNG lub SVG."
  },
  studio: {
    inputPanelTitle: "Dane i opcje",
    previewPanelTitle: "Podgląd na żywo",
    textLabel: "Tekst",
    textPlaceholder: "Wpisz do 128 znaków",
    textRule: "Maksymalnie 128 znaków",
    foregroundColor: "Kolor pierwszoplanowy",
    backgroundColor: "Kolor tła",
    transparentBackground: "Przezroczyste tło PNG",
    logoLabel: "Prześlij logo",
    logoHint: "Pliki graficzne, maks. 10MB",
    removeLogo: "Usuń logo",
    pngButton: "Pobierz PNG",
    svgButton: "Pobierz SVG",
    fileNameLabel: "Podgląd nazwy pliku",
    emptyPreview: "Wpisz tekst, aby zobaczyć podgląd kodu QR.",
    generating: "Generowanie kodu QR...",
    invalidText: "Wpisz od 1 do 128 znaków.",
    invalidLogoType: "Obsługiwane są tylko pliki graficzne jako logo.",
    invalidLogoSize: "Rozmiar pliku logo musi wynosić 10MB lub mniej.",
    renderError: "Wystąpił błąd podczas generowania kodu QR.",
    contrastWarning: "Niski kontrast - kod QR może nie skanować się poprawnie"
  },
  modes: {
    modeSelectorTitle: "Typ QR",
    textModeLabel: "Tekst",
    sendModeLabel: "Przelew Toss",
    urlModeLabel: "URL",
    emailModeLabel: "Email",
    phoneModeLabel: "Telefon",
    bankLabel: "Kod banku",
    bankPlaceholder: "Wybierz bank",
    accountLabel: "Numer konta",
    accountPlaceholder: "Wpisz numer konta",
    amountLabel: "Kwota (opcjonalnie)",
    amountPlaceholder: "np. 10000",
    amountHint: "Pozostaw puste, aby utworzyć kod bez kwoty.",
    invalidAccount: "Sprawdź bank i numer konta.",
    invalidAmount: "Kwota musi być liczbą większą niż 0.",
    sendEmptyPreview: "Wpisz bank i numer konta, aby zobaczyć podgląd.",
    urlLabel: "URL",
    urlPlaceholder: "np. pixelyaki.com lub https://pixelyaki.com",
    invalidUrl: "Wprowadź prawidłowy adres URL.",
    urlEmptyPreview: "Wprowadź adres URL, aby zobaczyć podgląd.",
    emailLabel: "Adres email",
    emailPlaceholder: "np. hello@pixelyaki.com",
    invalidEmail: "Wprowadź prawidłowy adres email.",
    emailEmptyPreview: "Wprowadź adres email, aby zobaczyć podgląd.",
    phoneLabel: "Numer telefonu",
    phonePlaceholder: "np. +48123456789",
    invalidPhone: "Wprowadź prawidłowy numer telefonu.",
    phoneEmptyPreview: "Wprowadź numer telefonu, aby zobaczyć podgląd."
  },
  extraModes: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "Nazwa sieci (SSID)",
    wifiSsidPlaceholder: "np. Pixelyaki_WiFi",
    wifiEncryptionLabel: "Szyfrowanie",
    wifiEncryptionWpa: "WPA/WPA2",
    wifiEncryptionWep: "WEP",
    wifiEncryptionNoPassword: "Brak hasła",
    wifiPasswordLabel: "Hasło",
    wifiPasswordPlaceholder: "Wpisz hasło Wi-Fi",
    wifiHiddenLabel: "Sieć ukryta",
    wifiInvalid: "Sprawdź ustawienia Wi-Fi.",
    wifiEmptyPreview: "Wprowadź dane Wi-Fi, aby zobaczyć podgląd.",
    vcardNameLabel: "Imię i nazwisko",
    vcardNamePlaceholder: "np. Arthur Kim",
    vcardCompanyLabel: "Firma",
    vcardCompanyPlaceholder: "np. Pixelyaki",
    vcardPhoneLabel: "Numer telefonu",
    vcardPhonePlaceholder: "np. +48123456789",
    vcardEmailLabel: "Email",
    vcardEmailPlaceholder: "np. hello@pixelyaki.com",
    vcardAddressLabel: "Adres",
    vcardAddressPlaceholder: "np. Warszawa, Polska",
    vcardInvalid: "Wprowadź przynajmniej imię.",
    vcardInvalidPhone: "Sprawdź format numeru telefonu vCard.",
    vcardInvalidEmail: "Sprawdź format adresu email vCard.",
    vcardEmptyPreview: "Wprowadź dane kontaktowe, aby zobaczyć podgląd vCard.",
    smsPhoneLabel: "Telefon odbiorcy",
    smsPhonePlaceholder: "np. +48123456789",
    smsBodyLabel: "Wiadomość (opcjonalnie)",
    smsBodyPlaceholder: "np. Cześć!",
    smsInvalid: "Sprawdź format numeru telefonu SMS.",
    smsEmptyPreview: "Wprowadź numer telefonu, aby zobaczyć podgląd SMS.",
    kakaopayModeLabel: "Przelew KakaoPay",
    kakaopayEmptyPreview: "Wprowadź dane KakaoPay, aby zobaczyć podgląd."
  },
  styles: {
    title: "Styl QR",
    presetLabel: "Preset",
    dotsLabel: "Kropki",
    cornerSquareLabel: "Rogi",
    cornerDotLabel: "Punkty rogów",
    presetSquare: "Kwadratowy",
    presetRounded: "Zaokrąglony",
    presetClassy: "Elegancki",
    presetDot: "Kropka",
    styleSquare: "Kwadrat",
    styleDots: "Kropki",
    styleRounded: "Zaokrąglony Kwadrat",
    styleClassy: "Styl Elegancki",
    styleClassyRounded: "Elegancki Zaokrąglony",
    styleExtraRounded: "Mocno Zaokrąglony",
    styleDot: "Pojedyncza Kropka",
    errorCorrectionLabel: "Gęstość",
    eclL: "Niska", eclM: "Średnia", eclQ: "Wysoka", eclH: "Najwyższa"
  },
  features: [
    {
      title: "Przezroczysty PNG",
      description: "Eksport do przezroczystego pliku PNG o dopasowanym rozmiarze."
    },
    {
      title: "Eksport SVG",
      description: "Idealny do druku i skalowalnych powierzchni."
    },
    {
      title: "Własne kolory",
      description: "Kontrola nad kolorem pierwszego planu i tła."
    },
    {
      title: "Wstawianie logo",
      description: "Umieść logo w centrum w dowolnym formacie graficznym do 10MB."
    },
    {
      title: "Brak zapisu na serwerze",
      description: "Wszystko generowane w przeglądarce, bez potrzeby logowania."
    }
  ],
  faqTitle: "Najczęściej zadawane pytania",
  faq: [
    {
      q: "Co to za generator kodów QR?",
      a: "Natychmiastowo zamienia tekst na kod QR do pobrania."
    },
    {
      q: "Czy korzystanie jest darmowe?",
      a: "Tak, wersja MVP jest darmowa i nie wymaga rejestracji."
    },
    {
      q: "Czy moje dane są zapisywane na serwerze?",
      a: "Nie. Ta wersja generuje wszystko w przeglądarce."
    },
    {
      q: "Jakie formaty graficzne są obsługiwane?",
      a: "Obsługiwane są zarówno przezroczyste pliki PNG, jak i format SVG."
    },
    {
      q: "Jakie pliki logo mogę przesłać?",
      a: "Obsługiwane są najpopularniejsze formaty graficzne do 10MB."
    }
  ],
  footer: {
    privacy: "Prywatność",
    terms: "Warunki",
    openSource: "Licencje Open Source",
    copyright: "© Pixelyaki",
    trademark: "QR Code jest zarejestrowanym znakiem towarowym firmy DENSO WAVE INCORPORATED."
  }
};
