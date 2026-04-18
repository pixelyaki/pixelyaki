type LogoUploaderProps = {
  label: string;
  hint: string;
  removeLabel: string;
  hasLogo: boolean;
  onFileChange: (file: File | null) => void;
  onRemove: () => void;
};

export function LogoUploader({
  label,
  hint,
  removeLabel,
  hasLogo,
  onFileChange,
  onRemove
}: LogoUploaderProps) {
  return (
    <div className="mb-4 grid gap-2">
      <label className="text-sm font-semibold text-slate-800" htmlFor="logo-upload">
        {label}
      </label>
      <input
        id="logo-upload"
        className="w-full rounded-[11px] border border-dashed border-[#a6bbf7] bg-white px-3 py-2.5 text-sm text-slate-700 file:mr-3 file:rounded-md file:border-0 file:bg-[#e9efff] file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-[#1d3f95]"
        type="file"
        accept=".png,.jpg,.jpeg,.svg,image/png,image/jpeg,image/svg+xml"
        onChange={(event) => onFileChange(event.target.files?.[0] ?? null)}
      />
      <small className="text-xs text-slate-600">{hint}</small>
      {hasLogo ? (
        <button
          className="mt-1 rounded-xl bg-[#e9efff] px-3 py-2 text-sm font-semibold text-[#1d3f95] transition hover:bg-[#dbe6ff]"
          type="button"
          onClick={onRemove}
        >
          {removeLabel}
        </button>
      ) : null}
    </div>
  );
}
