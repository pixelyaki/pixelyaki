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
    <div className="mb-4 grid gap-1.5">
      <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300" htmlFor="logo-upload">
        {label}
      </label>
      <input
        id="logo-upload"
        className="w-full rounded-md border border-dashed border-neutral-200 bg-white p-2 text-xs text-neutral-600 file:mr-3 file:rounded file:border-0 file:bg-neutral-900 file:px-2.5 file:py-1 file:text-xs file:font-medium file:text-white dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:file:bg-white dark:file:text-black"
        type="file"
        accept=".png,.jpg,.jpeg,.svg,image/png,image/jpeg,image/svg+xml"
        onChange={(event) => onFileChange(event.target.files?.[0] ?? null)}
      />
      <small className="text-xs text-neutral-400 dark:text-neutral-500">{hint}</small>
      {hasLogo ? (
        <button
          className="mt-1 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
          type="button"
          onClick={onRemove}
        >
          {removeLabel}
        </button>
      ) : null}
    </div>
  );
}
