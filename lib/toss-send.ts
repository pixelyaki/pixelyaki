export type TossBank = {
  code: string;
  name: string;
};

export const tossBanks: TossBank[] = [
  { code: "002", name: "KDB산업은행" },
  { code: "003", name: "IBK기업은행" },
  { code: "004", name: "KB국민은행" },
  { code: "005", name: "KEB하나은행" },
  { code: "007", name: "수협은행" },
  { code: "011", name: "NH농협은행" },
  { code: "020", name: "우리은행" },
  { code: "023", name: "SC은행" },
  { code: "027", name: "씨티은행" },
  { code: "031", name: "대구은행" },
  { code: "032", name: "부산은행" },
  { code: "034", name: "광주은행" },
  { code: "035", name: "제주은행" },
  { code: "037", name: "전북은행" },
  { code: "039", name: "경남은행" },
  { code: "045", name: "MG새마을금고" },
  { code: "048", name: "신협" },
  { code: "050", name: "저축은행" },
  { code: "064", name: "산림조합" },
  { code: "071", name: "우체국" },
  { code: "081", name: "하나은행" },
  { code: "088", name: "신한은행" },
  { code: "089", name: "케이뱅크" },
  { code: "090", name: "카카오뱅크" },
  { code: "092", name: "토스뱅크" }
];

export function normalizeAccountNo(value: string): string {
  return value.replace(/[^0-9]/g, "");
}

export function normalizeAmount(value: string): string {
  return value.replace(/[^0-9]/g, "");
}

export function isPositiveAmount(value: string): boolean {
  return /[1-9]/.test(value);
}

type TossSendLinkOptions = {
  bankCode: string;
  accountNo: string;
  amount?: string;
};

export function buildTossSendLink({
  bankCode,
  accountNo,
  amount
}: TossSendLinkOptions): string | null {
  const normalizedAccountNo = normalizeAccountNo(accountNo);
  if (!bankCode || !normalizedAccountNo) {
    return null;
  }

  const params = new URLSearchParams({
    bank: bankCode,
    accountNo: normalizedAccountNo
  });

  const normalizedAmount = normalizeAmount(amount ?? "");
  if (normalizedAmount && isPositiveAmount(normalizedAmount)) {
    params.set("amount", normalizedAmount.replace(/^0+/, ""));
  }

  return `supertoss://send?${params.toString()}`;
}
