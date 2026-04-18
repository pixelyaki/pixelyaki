function formatDateYYYYMMDD(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}${m}${d}`;
}

function sanitizeForFilename(text: string): string {
  const normalized = text
    .normalize("NFKC")
    .trim()
    .replace(/[^\p{L}\p{N}\s_-]/gu, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  if (!normalized) {
    return "text";
  }

  return normalized.slice(0, 40);
}

export function makeQrFilename(text: string, extension: "png" | "svg"): string {
  const safeText = sanitizeForFilename(text);
  return `qr-${formatDateYYYYMMDD(new Date())}-${safeText}.${extension}`;
}
