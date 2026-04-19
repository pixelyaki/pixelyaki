export type KakaopayBank = {
  code: string;
  name: string;
};

// Source: TossPayments org codes (은행 > 금융결제원 공식 코드, 3자리)
export const kakaopayBanks: KakaopayBank[] = [
  { code: "002", name: "한국산업은행" },
  { code: "003", name: "IBK기업은행" },
  { code: "004", name: "KB국민은행" },
  { code: "007", name: "Sh수협은행" },
  { code: "011", name: "NH농협은행" },
  { code: "012", name: "단위농협(지역농축협)" },
  { code: "020", name: "우리은행" },
  { code: "023", name: "SC제일은행" },
  { code: "027", name: "씨티은행" },
  { code: "030", name: "수협중앙회" },
  { code: "031", name: "iM뱅크(대구)" },
  { code: "032", name: "부산은행" },
  { code: "034", name: "광주은행" },
  { code: "035", name: "제주은행" },
  { code: "037", name: "전북은행" },
  { code: "039", name: "경남은행" },
  { code: "045", name: "새마을금고" },
  { code: "048", name: "신협" },
  { code: "050", name: "저축은행중앙회" },
  { code: "054", name: "홍콩상하이은행" },
  { code: "060", name: "Bank of America" },
  { code: "064", name: "산림조합" },
  { code: "071", name: "우체국예금보험" },
  { code: "081", name: "하나은행" },
  { code: "088", name: "신한은행" },
  { code: "089", name: "케이뱅크" },
  { code: "090", name: "카카오뱅크" },
  { code: "092", name: "토스뱅크" }
];

export function normalizeKakaoAccountNumber(value: string): string {
  return value.replace(/[^0-9]/g, "");
}

export function normalizeKakaoAmount(value: string): string {
  return value.replace(/[^0-9]/g, "");
}

function isPositiveNumeric(value: string): boolean {
  return /[1-9]/.test(value);
}

type BuildKakaoPayLinkOptions = {
  bankCode: string;
  accountNumber: string;
  amount?: string;
};

export function buildKakaoPayBankLink({
  bankCode,
  accountNumber,
  amount
}: BuildKakaoPayLinkOptions): string | null {
  const normalizedAccount = normalizeKakaoAccountNumber(accountNumber);
  if (!bankCode || !normalizedAccount) {
    return null;
  }

  const normalizedAmount = normalizeKakaoAmount(amount ?? "");
  if (normalizedAmount && !isPositiveNumeric(normalizedAmount)) {
    return null;
  }

  const params = new URLSearchParams({
    bank_code: bankCode,
    bank_account_number: normalizedAccount
  });

  if (normalizedAmount) {
    params.set("amount", normalizedAmount.replace(/^0+/, "") || "0");
  }

  return `kakaotalk://kakaopay/money/to/bank?${params.toString()}`;
}
