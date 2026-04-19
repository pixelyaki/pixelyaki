import { FullTranslation } from "../types";

export const ru: FullTranslation = {
  seo: {
    title: "Pixelyaki Генератор QR-кодов | Бесплатный PNG/SVG",
    description: "Создавайте QR-коды из текста без регистрации. Настройте цвета, добавьте логотип и скачайте PNG или SVG."
  },
  header: {
    logo: "Pixelyaki",
    generate: "Создать"
  },
  hero: {
    eyebrow: "Без регистрации",
    title: "Мгновенно создавайте QR-коды из текста",
    description: "Настройте цвета, добавьте логотип и скачайте прозрачный PNG или SVG."
  },
  studio: {
    inputPanelTitle: "Ввод и настройки",
    previewPanelTitle: "Предварительный просмотр",
    textLabel: "Текст",
    textPlaceholder: "Введите до 128 символов",
    textRule: "Максимум 128 символов",
    foregroundColor: "Цвет переднего плана",
    backgroundColor: "Цвет фона",
    transparentBackground: "Прозрачный фон PNG",
    logoLabel: "Загрузить логотип",
    logoHint: "PNG/JPG/SVG, до 2МБ",
    removeLogo: "Удалить логотип",
    pngButton: "Скачать PNG",
    svgButton: "Скачать SVG",
    fileNameLabel: "Предварительный просмотр имени файла",
    emptyPreview: "Введите текст для предварительного просмотра QR.",
    generating: "Создание QR...",
    invalidText: "Введите от 1 до 128 символов.",
    invalidLogoType: "Поддерживаются только PNG/JPG/SVG.",
    invalidLogoSize: "Размер логотипа не должен превышать 2МБ.",
    renderError: "Произошла ошибка при создании QR-кода.",
    contrastWarning: "Низкий контраст — QR-код может плохо сканироваться"
  },
  modes: {
    modeSelectorTitle: "Тип QR",
    textModeLabel: "Текст",
    sendModeLabel: "Toss перевод QR",
    urlModeLabel: "URL ссылка",
    emailModeLabel: "Email",
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
  extraModes: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "Имя сети (SSID)",
    wifiSsidPlaceholder: "напр. Pixelyaki_WiFi",
    wifiEncryptionLabel: "Шифрование",
    wifiEncryptionWpa: "WPA/WPA2",
    wifiEncryptionWep: "WEP",
    wifiEncryptionNoPassword: "Без пароля",
    wifiPasswordLabel: "Пароль",
    wifiPasswordPlaceholder: "Введите пароль Wi-Fi",
    wifiHiddenLabel: "Скрытая сеть",
    wifiInvalid: "Проверьте SSID и настройки Wi-Fi.",
    wifiEmptyPreview: "Введите данные Wi-Fi для предварительного просмотра QR.",
    vcardNameLabel: "Имя",
    vcardNamePlaceholder: "напр. Arthur Kim",
    vcardCompanyLabel: "Компания",
    vcardCompanyPlaceholder: "напр. Pixelyaki",
    vcardPhoneLabel: "Телефон",
    vcardPhonePlaceholder: "напр. +821012345678",
    vcardEmailLabel: "Email",
    vcardEmailPlaceholder: "напр. hello@pixelyaki.com",
    vcardAddressLabel: "Адрес",
    vcardAddressPlaceholder: "напр. Seoul, Korea",
    vcardInvalid: "Введите хотя бы имя.",
    vcardInvalidPhone: "Проверьте формат телефона vCard.",
    vcardInvalidEmail: "Проверьте формат email vCard.",
    vcardEmptyPreview: "Введите контакты для предварительного просмотра vCard QR.",
    smsPhoneLabel: "Телефон получателя",
    smsPhonePlaceholder: "напр. +821012345678",
    smsBodyLabel: "Сообщение (опционально)",
    smsBodyPlaceholder: "напр. Привет",
    smsInvalid: "Проверьте формат номера SMS.",
    smsEmptyPreview: "Введите номер для предварительного просмотра SMS QR.",
    kakaopayModeLabel: "QR-перевод KakaoPay",
    kakaopayEmptyPreview: "Введите данные KakaoPay для предварительного просмотра QR."
  },
  styles: {
    title: "Стиль QR",
    presetLabel: "Пресет",
    dotsLabel: "Стиль точек",
    cornerSquareLabel: "Стиль угла",
    cornerDotLabel: "Точка угла",
    presetSquare: "Квадрат",
    presetRounded: "Закруглённый",
    presetClassy: "Элегантный",
    presetDot: "Точки",
    styleSquare: "Прямой квадрат",
    styleDots: "Точки",
    styleRounded: "Мягкий квадрат",
    styleClassy: "Элегантный",
    styleClassyRounded: "Элегантный круглый",
    styleExtraRounded: "Макс. скругление",
    styleDot: "Точка",
    errorCorrectionLabel: "Плотность",
    eclL: "Низкая", eclM: "Средняя", eclQ: "Высокая", eclH: "Максимум"
  },
  features: [
    {
      title: "Прозрачный PNG",
      description: "Экспорт в прозрачный PNG с автоматическим размером."
    },
    {
      title: "Экспорт в SVG",
      description: "Идеально подходит для печати и масштабируемых поверхностей."
    },
    {
      title: "Настройка цветов",
      description: "Управление цветами переднего и заднего плана."
    },
    {
      title: "Вставка логотипа",
      description: "Логотип в центре в форматах PNG, JPG или SVG до 2 МБ."
    },
    {
      title: "Без хранения на сервере",
      description: "Генерация только в браузере, аккаунт не требуется."
    }
  ],
  faqTitle: "Часто Задаваемые Вопросы",
  faq: [
    {
      q: "Что это за генератор QR-кодов?",
      a: "Он мгновенно превращает ваш текст в QR-код, доступный для скачивания."
    },
    {
      q: "Это бесплатно?",
      a: "Да, версия MVP бесплатна и не требует регистрации."
    },
    {
      q: "Сохраняются ли мои данные на сервере?",
      a: "Нет. В этой версии всё генерируется прямо в браузере."
    },
    {
      q: "Какие форматы изображений поддерживаются?",
      a: "Поддерживаются прозрачный PNG (авторазмер) и SVG."
    },
    {
      q: "Какие логотипы можно загружать?",
      a: "Поддерживаются PNG, JPG и SVG размером до 2 МБ."
    }
  ],
  footer: {
    privacy: "Конфиденциальность",
    terms: "Условия использования",
    openSource: "Лицензии с открытым исходным кодом",
    copyright: "© Pixelyaki",
    trademark: "QR Code является товарным знаком DENSO WAVE INCORPORATED."
  }
};
