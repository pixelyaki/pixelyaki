import { FullTranslation } from "../types";

export const zh: FullTranslation = {
  seo: {
    title: "Pixelyaki 二维码制作 | 免费 PNG/SVG 下载",
    description: "无需注册，立即将文本转换为二维码。支持颜色调整、Logo 插入、透明 PNG 和 SVG 下载。"
  },
  header: {
    logo: "Pixelyaki",
    generate: "制作二维码"
  },
  hero: {
    eyebrow: "无需注册",
    title: "将文本快速转换为二维码",
    description: "支持颜色修改、Logo 插入、透明 PNG 和 SVG 下载。"
  },
  studio: {
    inputPanelTitle: "输入与选项",
    previewPanelTitle: "实时预览",
    textLabel: "文本输入",
    textPlaceholder: "最多输入 128 个字符",
    textRule: "最多 128 个字符",
    foregroundColor: "前景色",
    backgroundColor: "背景色",
    transparentBackground: "PNG 背景透明",
    logoLabel: "上传 Logo",
    logoHint: "Image files，最大 10MB",
    removeLogo: "移除 Logo",
    pngButton: "下载 PNG",
    svgButton: "下载 SVG",
    fileNameLabel: "文件名预览",
    emptyPreview: "输入文本后将显示二维码预览。",
    generating: "正在生成二维码...",
    invalidText: "请输入 1 到 128 个字符。",
    invalidLogoType: "Logo 仅支持 Image files。",
    invalidLogoSize: "Logo 文件必须小于等于 10MB。",
    renderError: "生成二维码时发生错误。",
    contrastWarning: "色彩对比度低，二维码可能无法正常识别"
  },
  modes: {
    modeSelectorTitle: "QR 类型",
    textModeLabel: "文本",
    sendModeLabel: "Toss 转账 QR",
    urlModeLabel: "URL",
    emailModeLabel: "邮箱",
    phoneModeLabel: "电话",
    bankLabel: "银行代码",
    bankPlaceholder: "请选择银行",
    accountLabel: "账号",
    accountPlaceholder: "请输入账号",
    amountLabel: "金额（可选）",
    amountPlaceholder: "例如：10000",
    amountHint: "留空则生成不含金额的转账二维码。",
    invalidAccount: "请检查银行和账号。",
    invalidAmount: "金额必须为大于 0 的数字。",
    sendEmptyPreview: "输入银行和账号后即可预览转账二维码。",
    urlLabel: "URL 地址",
    urlPlaceholder: "例如：pixelyaki.com 或 https://pixelyaki.com",
    invalidUrl: "请输入有效的 URL 地址。",
    urlEmptyPreview: "输入 URL 地址后即可预览二维码。",
    emailLabel: "邮箱地址",
    emailPlaceholder: "例如：hello@pixelyaki.com",
    invalidEmail: "请输入有效的邮箱地址。",
    emailEmptyPreview: "输入邮箱地址后即可预览二维码。",
    phoneLabel: "电话号码",
    phonePlaceholder: "例如：+821012345678",
    invalidPhone: "请输入有效的电话号码。",
    phoneEmptyPreview: "输入电话号码后即可预览二维码。"
  },
  extraModes: {
    wifiModeLabel: "Wi-Fi",
    vcardModeLabel: "名片(vCard)",
    smsModeLabel: "短信",
    wifiSsidLabel: "网络名称(SSID)",
    wifiSsidPlaceholder: "例如：Pixelyaki_WiFi",
    wifiEncryptionLabel: "加密方式",
    wifiEncryptionWpa: "WPA/WPA2",
    wifiEncryptionWep: "WEP",
    wifiEncryptionNoPassword: "无密码",
    wifiPasswordLabel: "密码",
    wifiPasswordPlaceholder: "请输入 Wi-Fi 密码",
    wifiHiddenLabel: "隐藏网络",
    wifiInvalid: "请检查 SSID 和 Wi-Fi 设置。",
    wifiEmptyPreview: "输入 Wi-Fi 信息后可预览二维码。",
    vcardNameLabel: "姓名",
    vcardNamePlaceholder: "例如：Arthur Kim",
    vcardCompanyLabel: "公司",
    vcardCompanyPlaceholder: "例如：Pixelyaki",
    vcardPhoneLabel: "电话号码",
    vcardPhonePlaceholder: "例如：+821012345678",
    vcardEmailLabel: "邮箱",
    vcardEmailPlaceholder: "例如：hello@pixelyaki.com",
    vcardAddressLabel: "地址",
    vcardAddressPlaceholder: "例如：Seoul, Korea",
    vcardInvalid: "请输入姓名。",
    vcardInvalidPhone: "请检查名片电话号码格式。",
    vcardInvalidEmail: "请检查名片邮箱格式。",
    vcardEmptyPreview: "输入名片信息后可预览二维码。",
    smsPhoneLabel: "收件号码",
    smsPhonePlaceholder: "例如：+821012345678",
    smsBodyLabel: "短信内容（可选）",
    smsBodyPlaceholder: "例如：你好",
    smsInvalid: "请检查短信号码格式。",
    smsEmptyPreview: "输入电话号码后可预览短信二维码。",
    kakaopayModeLabel: "KakaoPay 转账",
    kakaopayEmptyPreview: "输入 KakaoPay 转账信息以查看预览。",
    mecardModeLabel: "meCard",
    mecardNameLabel: "姓名",
    mecardNamePlaceholder: "例如：张三",
    mecardPhoneLabel: "电话号码",
    mecardPhonePlaceholder: "例如：13812345678",
    mecardEmailLabel: "电子邮件",
    mecardEmailPlaceholder: "例如：hello@pixelyaki.com",
    mecardAddressLabel: "地址",
    mecardAddressPlaceholder: "例如：北京市朝阳区",
    mecardEmptyPreview: "输入联系人信息以查看 meCard QR 预览。",
    calendarModeLabel: "日历",
    calendarTitleLabel: "活动标题",
    calendarTitlePlaceholder: "例如：团队会议",
    calendarStartLabel: "开始时间",
    calendarEndLabel: "结束时间",
    calendarLocationLabel: "地点",
    calendarLocationPlaceholder: "例如：会议室 1",
    calendarDescriptionLabel: "描述",
    calendarDescriptionPlaceholder: "例如：讨论项目计划",
    calendarEmptyPreview: "输入活动信息以查看日历 QR 预览。",
    paypalModeLabel: "PayPal",
    paypalEmailLabel: "PayPal 邮箱/ID",
    paypalEmailPlaceholder: "例如：payment@pixelyaki.com",
    paypalItemLabel: "商品名称",
    paypalItemPlaceholder: "例如：设计服务",
    paypalAmountLabel: "金额",
    paypalAmountPlaceholder: "例如：50.00",
    paypalCurrencyLabel: "货币",
    paypalEmptyPreview: "输入付款信息以查看 PayPal QR 预览。",
    cryptoModeLabel: "加密货币",
    cryptoAddressLabel: "钱包地址",
    cryptoAddressPlaceholder: "例如：1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    cryptoAmountLabel: "金额",
    cryptoAmountPlaceholder: "例如：0.1",
    cryptoCoinLabel: "币种",
    cryptoLabelLabel: "标签 (名称)",
    cryptoLabelPlaceholder: "例如：比特币钱包",
    cryptoEmptyPreview: "输入钱包信息以查看加密货币 QR 预览。"
  },
  styles: {
    title: "QR 样式",
    presetLabel: "预设",
    dotsLabel: "点样式",
    cornerSquareLabel: "角块样式",
    cornerDotLabel: "角点样式",
    presetSquare: "方形",
    presetRounded: "圆角",
    presetClassy: "典雅",
    presetDot: "圆点",
    styleSquare: "直角方形",
    styleDots: "圆点样式",
    styleRounded: "圆角方形",
    styleClassy: "典雅样式",
    styleClassyRounded: "典雅圆角",
    styleExtraRounded: "超大圆角",
    styleDot: "散点",
    errorCorrectionLabel: "密度",
    eclL: "低", eclM: "中", eclQ: "高", eclH: "最高"
  },
  features: [
    {
      title: "透明 PNG",
      description: "自动调整大小的透明 PNG 导出。"
    },
    {
      title: "SVG 导出",
      description: "非常适合印刷和可扩展表面。"
    },
    {
      title: "自定义颜色",
      description: "前景色和背景色控制。"
    },
    {
      title: "Logo 嵌入",
      description: "居中放置 Logo，支持高达 10MB 的 PNG、JPG 或 SVG。"
    },
    {
      title: "无服务器存储",
      description: "仅在浏览器中生成，无需账户。"
    }
  ],
  faqTitle: "常见问题",
  faq: [
    {
      q: "这个二维码生成器是什么？",
      a: "它能立即将您的文本转换为可下载的二维码。"
    },
    {
      q: "这是免费使用的吗？",
      a: "是的，目前版本免费，无需注册。"
    },
    {
      q: "我的输入会被存储在服务器上吗？",
      a: "不会。此版本在浏览器中生成所有内容。"
    },
    {
      q: "支持哪些图像输出？",
      a: "支持透明 PNG（自动调整大小）和 SVG。"
    },
    {
      q: "我可以上传哪些 Logo 文件？",
      a: "支持高达 10MB 的 PNG、JPG 和 SVG。"
    }
  ],
  footer: {
    privacy: "隐私政策",
    terms: "服务条款",
    openSource: "开源许可",
    copyright: "© Pixelyaki",
    trademark: "QR Code 是 DENSO WAVE INCORPORATED 的注册商标。"
  }
};
