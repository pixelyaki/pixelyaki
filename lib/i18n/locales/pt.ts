import { FullTranslation } from "../types";

export const pt: FullTranslation = {
  seo: {
    title: "Gerador de QR Pixelyaki | Download PNG/SVG Gratuito",
    description: "Crie QR codes a partir de texto instantaneamente sem cadastro. Personalize cores, adicione logotipo e baixe PNG transparente ou SVG."
  },
  header: {
    logo: "Pixelyaki",
    generate: "Gerar"
  },
  hero: {
    eyebrow: "Sem cadastro",
    title: "Converta texto em QR code instantaneamente",
    description: "Personalize cores, adicione logotipo e exporte PNG transparente ou SVG."
  },
  studio: {
    inputPanelTitle: "Entrada e opções",
    previewPanelTitle: "Pré-visualização ao vivo",
    textLabel: "Texto",
    textPlaceholder: "Digite até 128 caracteres",
    textRule: "Máximo de 128 caracteres",
    foregroundColor: "Cor de primeiro plano",
    backgroundColor: "Cor de fondo",
    transparentBackground: "Fundo PNG transparente",
    logoLabel: "Enviar logotipo",
    logoHint: "Image files, até 10MB",
    removeLogo: "Remover logotipo",
    pngButton: "Baixar PNG",
    svgButton: "Baixar SVG",
    fileNameLabel: "Pré-visualização do nome do arquivo",
    emptyPreview: "Digite texto para ver a pré-visualização do QR.",
    generating: "Gerando QR...",
    invalidText: "Digite entre 1 e 128 caracteres.",
    invalidLogoType: "Apenas arquivos de logotipo Image files são suportados.",
    invalidLogoSize: "O logotipo deve ter 10MB ou menos.",
    renderError: "Ocorreu um erro ao gerar o código QR.",
    contrastWarning: "Contraste baixo — o QR code pode não ser lido corretamente"
  },
  modes: {
    modeSelectorTitle: "Tipo de QR",
    textModeLabel: "Texto",
    sendModeLabel: "QR Transferência Toss",
    urlModeLabel: "Link URL",
    emailModeLabel: "E-mail",
    phoneModeLabel: "Telefone",
    bankLabel: "Código do banco",
    bankPlaceholder: "Selecione um banco",
    accountLabel: "Número da conta",
    accountPlaceholder: "Digite o número da conta",
    amountLabel: "Valor (opcional)",
    amountPlaceholder: "ex. 10000",
    amountHint: "Deixe em branco para criar QR sem valor.",
    invalidAccount: "Verifique o banco e o número da conta.",
    invalidAmount: "O valor deve ser um número maior que 0.",
    sendEmptyPreview: "Digite banco e conta para pré-visualizar o QR de transferência.",
    urlLabel: "URL",
    urlPlaceholder: "ex. pixelyaki.com ou https://pixelyaki.com",
    invalidUrl: "Digite um URL válido.",
    urlEmptyPreview: "Digite um URL para pré-visualizar o QR.",
    emailLabel: "Endereço de e-mail",
    emailPlaceholder: "ex. hello@pixelyaki.com",
    invalidEmail: "Digite um endereço de e-mail válido.",
    emailEmptyPreview: "Digite um e-mail para pré-visualizar o QR.",
    phoneLabel: "Número de telefone",
    phonePlaceholder: "ex. +821012345678",
    invalidPhone: "Digite um número de telefone válido.",
    phoneEmptyPreview: "Digite um número de telefone para pré-visualizar o QR."
  },
  extraModes: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "Nome da rede (SSID)",
    wifiSsidPlaceholder: "ex. Pixelyaki_WiFi",
    wifiEncryptionLabel: "Criptografia",
    wifiEncryptionWpa: "WPA/WPA2",
    wifiEncryptionWep: "WEP",
    wifiEncryptionNoPassword: "Sem senha",
    wifiPasswordLabel: "Senha",
    wifiPasswordPlaceholder: "Digite a senha do Wi-Fi",
    wifiHiddenLabel: "Rede oculta",
    wifiInvalid: "Verifique o SSID e as configurações de Wi-Fi.",
    wifiEmptyPreview: "Digite os dados do Wi-Fi para pré-visualizar o QR.",
    vcardNameLabel: "Nome",
    vcardNamePlaceholder: "ex. Arthur Kim",
    vcardCompanyLabel: "Empresa",
    vcardCompanyPlaceholder: "ex. Pixelyaki",
    vcardPhoneLabel: "Telefone",
    vcardPhonePlaceholder: "ex. +821012345678",
    vcardEmailLabel: "E-mail",
    vcardEmailPlaceholder: "ex. hello@pixelyaki.com",
    vcardAddressLabel: "Endereço",
    vcardAddressPlaceholder: "ex. Seoul, Korea",
    vcardInvalid: "Digite pelo menos um nome.",
    vcardInvalidPhone: "Verifique o formato do telefone no vCard.",
    vcardInvalidEmail: "Verifique o formato do e-mail no vCard.",
    vcardEmptyPreview: "Digite os contatos para pré-visualizar o QR vCard.",
    smsPhoneLabel: "Telefone do destinatário",
    smsPhonePlaceholder: "ex. +821012345678",
    smsBodyLabel: "Mensagem (opcional)",
    smsBodyPlaceholder: "ex. Olá",
    smsInvalid: "Verifique o formato do número SMS.",
    smsEmptyPreview: "Digite um telefone para pré-visualizar o QR SMS.",
    kakaopayModeLabel: "QR Transferência KakaoPay",
    kakaopayEmptyPreview: "Digite os dados do KakaoPay para pré-visualizar o QR."
  },
  styles: {
    title: "Estilo QR",
    presetLabel: "Predefinição",
    dotsLabel: "Estilo dos pontos",
    cornerSquareLabel: "Estilo do canto",
    cornerDotLabel: "Ponto do canto",
    presetSquare: "Quadrado",
    presetRounded: "Arredondado",
    presetClassy: "Elegante",
    presetDot: "Ponto",
    styleSquare: "Quadrado reto",
    styleDots: "Estilo pontos",
    styleRounded: "Quadrado arredondado",
    styleClassy: "Elegante",
    styleClassyRounded: "Elegante arredondado",
    styleExtraRounded: "Extra arredondado",
    styleDot: "Ponto",
    errorCorrectionLabel: "Densidade",
    eclL: "Baixa", eclM: "Média", eclQ: "Alta", eclH: "Máxima"
  },
  features: [
    {
      title: "PNG Transparente",
      description: "Exportação de PNG transparente com tamanho automático."
    },
    {
      title: "Exportação SVG",
      description: "Perfeito para impressão e superfícies escaláveis."
    },
    {
      title: "Cores Personalizadas",
      description: "Controles de cor de primeiro plano e de fundo."
    },
    {
      title: "Inserir Logotipo",
      description: "Logotipo central com PNG, JPG ou SVG de até 10MB."
    },
    {
      title: "Sem Armazenamento no Servidor",
      description: "Gerado apenas no navegador, nenhuma conta é necessária."
    }
  ],
  faqTitle: "Perguntas Frequentes",
  faq: [
    {
      q: "¿O que é este gerador de códigos QR?",
      a: "Ele converte seu texto em um código QR baixável instantaneamente."
    },
    {
      q: "¿É gratuito para usar?",
      a: "Sim, o MVP é gratuito e não requer cadastro."
    },
    {
      q: "¿Minha entrada é armazenada em um servidor?",
      a: "Não. Esta versão gera tudo dentro do navegador."
    },
    {
      q: "¿Quais saídas de imagem são suportadas?",
      a: "PNG transparente (tamanho automático) e SVG são suportados."
    },
    {
      q: "¿Quais arquivos de logotipo posso enviar?",
      a: "PNG, JPG e SVG são suportados até 10MB."
    }
  ],
  footer: {
    privacy: "Privacidade",
    terms: "Termos",
    openSource: "Licenças de Código Aberto",
    copyright: "© Pixelyaki",
    trademark: "QR Code é uma marca registrada da DENSO WAVE INCORPORATED."
  }
};
