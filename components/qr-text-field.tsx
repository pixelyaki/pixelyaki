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
    <div className="mb-4 grid gap-2">
      <label className="text-sm font-semibold text-slate-800" htmlFor="qr-text">
        {label}
      </label>
      <textarea
        className="min-h-[88px] w-full resize-y rounded-[11px] border border-blue-200 bg-white px-3 py-2.5 text-[0.95rem] text-slate-900 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-700/25"
        id="qr-text"
        value={value}
        maxLength={MAX_TEXT_LENGTH}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
      <small className="text-xs text-slate-600">
        {value.length}/{MAX_TEXT_LENGTH} · {helperText}
      </small>
    </div>
  );
}
