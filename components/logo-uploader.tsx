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
      <label className="text-xs font-medium text-gray-700 dark:text-gray-300" htmlFor="logo-upload">
        {label}
      </label>
      <input
        id="logo-upload"
        className="w-full rounded-md border border-dashed border-gray-200 bg-white p-2 text-xs text-gray-600 file:mr-3 file:rounded file:border-0 file:bg-gray-900 file:px-2.5 file:py-1 file:text-xs file:font-medium file:text-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:file:bg-white dark:file:text-black"
        type="file"
        accept=".png,.jpg,.jpeg,.svg,image/png,image/jpeg,image/svg+xml"
        onChange={(event) => onFileChange(event.target.files?.[0] ?? null)}
      />
      <small className="text-xs text-gray-400 dark:text-gray-500">{hint}</small>
      {hasLogo ? (
        <button
          className="mt-1 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          type="button"
          onClick={onRemove}
        >
          {removeLabel}
        </button>
      ) : null}
    </div>
  );
}
