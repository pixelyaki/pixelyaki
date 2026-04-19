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
      <label className="text-xs font-medium text-gray-700 dark:text-gray-300" htmlFor="qr-text">
        {label}
      </label>
      <textarea
        className="min-h-20 w-full resize-y rounded-md border border-gray-200 bg-white p-2 text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-900/5 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-gray-500 dark:focus:ring-gray-100/5"
        id="qr-text"
        value={value}
        maxLength={MAX_TEXT_LENGTH}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
      <small className="text-xs text-gray-400 dark:text-gray-500">
        {value.length}/{MAX_TEXT_LENGTH} · {helperText}
      </small>
    </div>
  );
}
