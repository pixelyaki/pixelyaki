export const MAX_TEXT_LENGTH = 128;
export const MAX_LOGO_BYTES = 10 * 1024 * 1024;

const supportedLogoTypes = new Set([
  "image/png",
  "image/jpeg",
  "image/svg+xml"
]);

export function validateText(text: string): boolean {
  const length = text.trim().length;
  return length > 0 && length <= MAX_TEXT_LENGTH;
}

export function validateLogoFile(file: File): { valid: boolean; reason?: string } {
  if (!file.type.startsWith("image/")) {
    return { valid: false, reason: "type" };
  }

  if (file.size > MAX_LOGO_BYTES) {
    return { valid: false, reason: "size" };
  }

  return { valid: true };
}
