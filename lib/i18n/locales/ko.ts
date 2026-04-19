import { FullTranslation } from "../types";

export const ko: FullTranslation = {
  seo: {
    title: "Pixelyaki QR 코드 생성기 | 무료 PNG/SVG 다운로드",
    description: "회원가입 없이 텍스트를 QR 코드로 즉시 변환하세요. 색상 변경, 로고 삽입, 투명 PNG와 SVG 다운로드를 지원합니다."
  },
  header: {
    logo: "Pixelyaki",
    generate: "생성하기"
  },
  hero: {
    eyebrow: "회원가입 없이 바로 사용",
    title: "텍스트를 즉시 QR 코드로 변환하세요",
    description: "색상 변경, 로고 삽입, 투명 PNG와 SVG 다운로드까지 한 번에 처리할 수 있습니다."
  },
  studio: {
    inputPanelTitle: "입력 및 옵션",
    previewPanelTitle: "실시간 미리보기",
    textLabel: "텍스트 입력",
    textPlaceholder: "최대 128자까지 입력하세요",
    textRule: "최대 128자",
    foregroundColor: "전경색",
    backgroundColor: "배경색",
    transparentBackground: "PNG 배경 투명 처리",
    logoLabel: "로고 업로드",
    logoHint: "이미지 파일, 최대 10MB",
    removeLogo: "로고 제거",
    pngButton: "PNG 다운로드",
    svgButton: "SVG 다운로드",
    fileNameLabel: "파일명 미리보기",
    emptyPreview: "텍스트를 입력하면 QR 미리보기가 표시됩니다.",
    generating: "QR 생성 중...",
    invalidText: "텍스트를 1자 이상 128자 이하로 입력해 주세요.",
    invalidLogoType: "이미지 형식의 로고 파일만 업로드 가능합니다.",
    invalidLogoSize: "로고 파일 크기는 10MB 이하여야 합니다.",
    renderError: "QR 코드를 생성하는 중 오류가 발생했습니다.",
    contrastWarning: "색상 대비가 낮아 QR 코드 인식에 문제가 생길 수 있습니다"
  },
  modes: {
    modeSelectorTitle: "QR 종류",
    textModeLabel: "텍스트",
    sendModeLabel: "토스 송금 QR",
    urlModeLabel: "URL 링크",
    emailModeLabel: "이메일",
    phoneModeLabel: "전화번호",
    bankLabel: "은행 코드",
    bankPlaceholder: "은행을 선택하세요",
    accountLabel: "계좌번호",
    accountPlaceholder: "계좌번호를 입력하세요",
    amountLabel: "금액 (선택)",
    amountPlaceholder: "예: 10000",
    amountHint: "비워두면 금액 없이 송금 QR을 생성합니다.",
    invalidAccount: "은행과 계좌번호를 확인해 주세요.",
    invalidAmount: "금액은 1원 이상 숫자로 입력해 주세요.",
    sendEmptyPreview: "은행과 계좌번호를 입력하면 송금 QR 미리보기가 표시됩니다.",
    urlLabel: "URL 주소",
    urlPlaceholder: "예: pixelyaki.com 또는 https://pixelyaki.com",
    invalidUrl: "올바른 URL 주소를 입력해 주세요.",
    urlEmptyPreview: "URL 주소를 입력하면 QR 미리보기가 표시됩니다.",
    emailLabel: "메일 주소",
    emailPlaceholder: "예: hello@pixelyaki.com",
    invalidEmail: "올바른 메일 주소를 입력해 주세요.",
    emailEmptyPreview: "메일 주소를 입력하면 QR 미리보기가 표시됩니다.",
    phoneLabel: "전화번호",
    phonePlaceholder: "예: 01012345678 또는 +821012345678",
    invalidPhone: "올바른 전화번호를 입력해 주세요.",
    phoneEmptyPreview: "전화번호를 입력하면 QR 미리보기가 표시됩니다."
  },
  extraModes: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "명함(vCard)",
    smsModeLabel: "SMS",
    wifiSsidLabel: "네트워크 이름(SSID)",
    wifiSsidPlaceholder: "예: Pixelyaki_WiFi",
    wifiEncryptionLabel: "암호화 방식",
    wifiEncryptionWpa: "WPA/WPA2",
    wifiEncryptionWep: "WEP",
    wifiEncryptionNoPassword: "암호 없음",
    wifiPasswordLabel: "비밀번호",
    wifiPasswordPlaceholder: "비밀번호를 입력하세요",
    wifiHiddenLabel: "숨김 네트워크",
    wifiInvalid: "SSID와 Wi-Fi 설정을 확인해 주세요.",
    wifiEmptyPreview: "Wi-Fi 정보를 입력하면 QR 미리보기가 표시됩니다.",
    vcardNameLabel: "이름",
    vcardNamePlaceholder: "예: Arthur Kim",
    vcardCompanyLabel: "회사",
    vcardCompanyPlaceholder: "예: Pixelyaki",
    vcardPhoneLabel: "전화번호",
    vcardPhonePlaceholder: "예: +821012345678",
    vcardEmailLabel: "이메일",
    vcardEmailPlaceholder: "예: hello@pixelyaki.com",
    vcardAddressLabel: "주소",
    vcardAddressPlaceholder: "예: Seoul, Korea",
    vcardInvalid: "이름을 입력해 주세요.",
    vcardInvalidPhone: "명함 전화번호 형식을 확인해 주세요.",
    vcardInvalidEmail: "명함 이메일 형식을 확인해 주세요.",
    vcardEmptyPreview: "명함 정보를 입력하면 QR 미리보기가 표시됩니다.",
    smsPhoneLabel: "수신 전화번호",
    smsPhonePlaceholder: "예: +821012345678",
    smsBodyLabel: "메시지 (선택)",
    smsBodyPlaceholder: "예: 안녕하세요",
    smsInvalid: "SMS 전화번호 형식을 확인해 주세요.",
    smsEmptyPreview: "전화번호를 입력하면 SMS QR 미리보기가 표시됩니다.",
    kakaopayModeLabel: "카카오페이 송금 QR",
    kakaopayEmptyPreview: "카카오페이 송금 정보를 입력하면 QR 미리보기가 표시됩니다."
  },
  styles: {
    title: "QR 스타일",
    presetLabel: "프리셋",
    dotsLabel: "점 모양",
    cornerSquareLabel: "코너 모양",
    cornerDotLabel: "코너 점 모양",
    presetSquare: "정사각형",
    presetRounded: "라운드",
    presetClassy: "클래식",
    presetDot: "도트",
    styleSquare: "직각 사각형",
    styleDots: "도트 모양",
    styleRounded: "라운드 사각형",
    styleClassy: "클래식 스타일",
    styleClassyRounded: "클래식 곡선",
    styleExtraRounded: "부드러운 곡선",
    styleDot: "점 모양",
    errorCorrectionLabel: "압축률",
    eclL: "저 압축", eclM: "중간 압축", eclQ: "높은 압축", eclH: "최고 압축"
  },
  features: [
    {
      title: "투명 PNG",
      description: "투명 배경으로 자동 크기 다운로드합니다."
    },
    {
      title: "SVG 다운로드",
      description: "확대해도 깨지지 않아 인쇄물에 적합합니다."
    },
    {
      title: "색상 커스텀",
      description: "전경색과 배경색을 자유롭게 변경할 수 있습니다."
    },
    {
      title: "로고 삽입",
      description: "이미지(PNG, JPG, SVG 등) 로고를 중앙에 넣을 수 있습니다."
    },
    {
      title: "서버 저장 없음",
      description: "모든 생성은 브라우저에서만 처리됩니다."
    }
  ],
  faqTitle: "자주 묻는 질문",
  faq: [
    {
      q: "이 서비스는 무엇인가요?",
      a: "입력한 텍스트를 즉시 QR 코드로 변환해 주는 웹 도구입니다."
    },
    {
      q: "무료로 사용할 수 있나요?",
      a: "네, 현재 MVP 버전은 무료이며 회원가입이 필요 없습니다."
    },
    {
      q: "입력한 데이터가 서버에 저장되나요?",
      a: "아니요. 현재 버전은 브라우저 내에서만 생성됩니다."
    },
    {
      q: "다운로드 형식은 어떻게 되나요?",
      a: "투명 배경 PNG와 SVG를 제공합니다."
    },
    {
      q: "로고 파일은 어떤 형식을 지원하나요?",
      a: "다양한 이미지 형식을 10MB 이하로 업로드할 수 있습니다."
    }
  ],
  footer: {
    privacy: "개인정보 처리방침",
    terms: "이용약관",
    openSource: "오픈소스 라이선스",
    copyright: "© Pixelyaki",
    trademark: "QR Code는 DENSO WAVE INCORPORATED의 등록상표입니다."
  }
};
