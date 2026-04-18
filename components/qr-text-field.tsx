import { MAX_TEXT_LENGTH } from "@/lib/validation";

type QrTextFieldProps = {
  label: string;
  value: string;
  placeholder: string;
  onChange: (nextValue: string) => void;
  helperText: string;
};

export function QrTextField({
  label,
  value,
  placeholder,
  onChange,
  helperText
}: QrTextFieldProps) {
  return (
    <div className="mb-4 grid gap-1.5">
      <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300" htmlFor="qr-text">
        {label}
      </label>
      <textarea
        className="min-h-20 w-full resize-y rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 outline-none transition focus:border-neutral-400 focus:ring-2 focus:ring-neutral-900/5 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:focus:border-neutral-500 dark:focus:ring-neutral-100/5"
        id="qr-text"
        value={value}
        maxLength={MAX_TEXT_LENGTH}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
      <small className="text-xs text-neutral-400 dark:text-neutral-500">
        {value.length}/{MAX_TEXT_LENGTH} · {helperText}
      </small>
    </div>
  );
}
