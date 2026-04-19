import { FullTranslation } from "../types";

export const vi: FullTranslation = {
  seo: {
    title: "Tạo mã QR Pixelyaki | Tải xuống PNG/SVG miễn phí",
    description: "Chuyển đổi văn bản thành mã QR ngay lập tức mà không cần đăng ký. Hỗ trợ tùy chỉnh màu sắc, chèn logo, tải xuống PNG trong suốt và SVG."
  },
  header: {
    logo: "Pixelyaki",
    generate: "Tạo mã QR"
  },
  hero: {
    eyebrow: "Không cần đăng ký",
    title: "Chuyển đổi văn bản thành mã QR ngay lập tức",
    description: "Tùy chỉnh màu sắc, chèn logo và xuất PNG trong suốt hoặc SVG chỉ trong nháy mắt."
  },
  studio: {
    inputPanelTitle: "Nhập liệu và tùy chọn",
    previewPanelTitle: "Xem trước trực tiếp",
    textLabel: "Văn bản",
    textPlaceholder: "Nhập tối đa 128 ký tự",
    textRule: "Tối đa 128 ký tự",
    foregroundColor: "Màu phía trước",
    backgroundColor: "Màu nền",
    transparentBackground: "Nền PNG trong suốt",
    logoLabel: "Tải lên logo",
    logoHint: "Tệp hình ảnh, tối đa 10MB",
    removeLogo: "Xóa logo",
    pngButton: "Tải xuống PNG",
    svgButton: "Tải xuống SVG",
    fileNameLabel: "Xem trước tên tệp",
    emptyPreview: "Nhập văn bản để xem trước mã QR.",
    generating: "Đang tạo mã QR...",
    invalidText: "Vui lòng nhập từ 1 đến 128 ký tự.",
    invalidLogoType: "Chỉ hỗ trợ các tệp hình ảnh làm logo.",
    invalidLogoSize: "Kích thước tệp logo phải từ 10MB trở xuống.",
    renderError: "Đã xảy ra lỗi khi tạo mã QR.",
    contrastWarning: "Độ tương phản thấp - mã QR có thể khó quét"
  },
  modes: {
    modeSelectorTitle: "Loại QR",
    textModeLabel: "Văn bản",
    sendModeLabel: "Chuyển khoản Toss",
    urlModeLabel: "URL",
    emailModeLabel: "Email",
    phoneModeLabel: "Số điện thoại",
    bankLabel: "Mã ngân hàng",
    bankPlaceholder: "Chọn ngân hàng",
    accountLabel: "Số tài khoản",
    accountPlaceholder: "Nhập số tài khoản",
    amountLabel: "Số tiền (tùy chọn)",
    amountPlaceholder: "Ví dụ: 10000",
    amountHint: "Để trống để tạo mã chuyển khoản không chỉ định số tiền.",
    invalidAccount: "Vui lòng kiểm tra ngân hàng và số tài khoản.",
    invalidAmount: "Số tiền phải là số lớn hơn 0.",
    sendEmptyPreview: "Nhập ngân hàng và số tài khoản để xem trước mã chuyển khoản.",
    urlLabel: "URL",
    urlPlaceholder: "Ví dụ: pixelyaki.com hoặc https://pixelyaki.com",
    invalidUrl: "Vui lòng nhập URL hợp lệ.",
    urlEmptyPreview: "Nhập URL để xem trước mã QR.",
    emailLabel: "Địa chỉ email",
    emailPlaceholder: "Ví dụ: hello@pixelyaki.com",
    invalidEmail: "Vui lòng nhập địa chỉ email hợp lệ.",
    emailEmptyPreview: "Nhập địa chỉ email để xem trước mã QR.",
    phoneLabel: "Số điện thoại",
    phonePlaceholder: "Ví dụ: +84123456789",
    invalidPhone: "Vui lòng nhập số điện thoại hợp lệ.",
    phoneEmptyPreview: "Nhập số điện thoại để xem trước mã QR."
  },
  extraModes: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "vCard",
    smsModeLabel: "SMS",
    wifiSsidLabel: "Tên mạng (SSID)",
    wifiSsidPlaceholder: "Ví dụ: Pixelyaki_WiFi",
    wifiEncryptionLabel: "Mã hóa",
    wifiEncryptionWpa: "WPA/WPA2",
    wifiEncryptionWep: "WEP",
    wifiEncryptionNoPassword: "Không có mật khẩu",
    wifiPasswordLabel: "Mật khẩu",
    wifiPasswordPlaceholder: "Nhập mật khẩu Wi-Fi",
    wifiHiddenLabel: "Mạng ẩn",
    wifiInvalid: "Vui lòng kiểm tra cài đặt Wi-Fi của bạn.",
    wifiEmptyPreview: "Nhập thông tin Wi-Fi để xem trước mã QR.",
    vcardNameLabel: "Họ tên",
    vcardNamePlaceholder: "Ví dụ: Arthur Kim",
    vcardCompanyLabel: "Công ty",
    vcardCompanyPlaceholder: "Ví dụ: Pixelyaki",
    vcardPhoneLabel: "Số điện thoại",
    vcardPhonePlaceholder: "Ví dụ: +84123456789",
    vcardEmailLabel: "Email",
    vcardEmailPlaceholder: "Ví dụ: hello@pixelyaki.com",
    vcardAddressLabel: "Địa chỉ",
    vcardAddressPlaceholder: "Ví dụ: Hà Nội, Việt Nam",
    vcardInvalid: "Vui lòng nhập ít nhất là tên.",
    vcardInvalidPhone: "Vui lòng kiểm tra định dạng số điện thoại vCard.",
    vcardInvalidEmail: "Vui lòng kiểm tra định dạng email vCard.",
    vcardEmptyPreview: "Nhập thông tin liên hệ để xem trước mã QR vCard.",
    smsPhoneLabel: "Số điện thoại nhận",
    smsPhonePlaceholder: "Ví dụ: +84123456789",
    smsBodyLabel: "Tin nhắn (tùy chọn)",
    smsBodyPlaceholder: "Ví dụ: Xin chào!",
    smsInvalid: "Vui lòng kiểm tra định dạng số điện thoại SMS.",
    smsEmptyPreview: "Nhập số điện thoại để xem trước mã QR SMS.",
    kakaopayModeLabel: "Chuyển khoản KakaoPay",
    kakaopayEmptyPreview: "Nhập thông tin KakaoPay để xem trước mã QR.",
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
    title: "Kiểu dáng QR",
    presetLabel: "Mẫu sẵn",
    dotsLabel: "Kiểu điểm",
    cornerSquareLabel: "Kiểu góc",
    cornerDotLabel: "Kiểu điểm góc",
    presetSquare: "Hình vuông",
    presetRounded: "Bo tròn",
    presetClassy: "Sang trọng",
    presetDot: "Điểm tròn",
    styleSquare: "Hình vuông",
    styleDots: "Điểm tròn",
    styleRounded: "Hình vuông bo tròn",
    styleClassy: "Kiểu sang trọng",
    styleClassyRounded: "Sang trọng bo tròn",
    styleExtraRounded: "Bo tròn cực đại",
    styleDot: "Điểm đơn",
    errorCorrectionLabel: "Độ đậm",
    eclL: "Thấp", eclM: "Trung bình", eclQ: "Cao", eclH: "Cao nhất"
  },
  features: [
    {
      title: "PNG trong suốt",
      description: "Xuất tệp PNG nền trong suốt tự động chỉnh kích thước."
    },
    {
      title: "Xuất SVG",
      description: "Hoàn hảo cho in ấn và các bề mặt có thể mở rộng kích thước."
    },
    {
      title: "Màu sắc tùy chỉnh",
      description: "Kiểm soát màu sắc phía trước và màu nền."
    },
    {
      title: "Chèn logo",
      description: "Chèn logo vào giữa với mọi định dạng hình ảnh lên đến 10MB."
    },
    {
      title: "Không lưu trữ máy chủ",
      description: "Mọi thứ được tạo ngay trên trình duyệt, không cần tài khoản."
    }
  ],
  faqTitle: "Câu hỏi thường gặp",
  faq: [
    {
      q: "Trình tạo mã QR này là gì?",
      a: "Nó chuyển đổi văn bản của bạn thành mã QR có thể tải xuống ngay lập tức."
    },
    {
      q: "Sử dụng có miễn phí không?",
      a: "Có, nó hoàn toàn miễn phí và không yêu cầu đăng ký."
    },
    {
      q: "Dữ liệu tôi nhập có được lưu trên máy chủ không?",
      a: "Không. Phiên bản này tạo mọi thứ ngay trên trình duyệt của bạn."
    },
    {
      q: "Hỗ trợ những định dạng đầu ra nào?",
      a: "Hỗ trợ PNG trong suốt và định dạng SVG."
    },
    {
      q: "Tôi có thể tải lên những loại tệp logo nào?",
      a: "Hỗ trợ hầu hết các định dạng hình ảnh phổ biến lên đến 10MB."
    }
  ],
  footer: {
    privacy: "Bảo mật",
    terms: "Điều khoản",
    openSource: "Giấy phép mã nguồn mở",
    copyright: "© Pixelyaki",
    trademark: "QR Code là nhãn hiệu đã đăng ký của DENSO WAVE INCORPORATED."
  }
};
