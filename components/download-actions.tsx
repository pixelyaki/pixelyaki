type DownloadActionsProps = {
  pngLabel: string;
  svgLabel: string;
  disabled: boolean;
  onDownloadPng: () => void;
  onDownloadSvg: () => void;
};

export function DownloadActions({
  pngLabel,
  svgLabel,
  disabled,
  onDownloadPng,
  onDownloadSvg
}: DownloadActionsProps) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-2">
      <button
        className="rounded-md bg-blue-700 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-40"
        type="button"
        disabled={disabled}
        onClick={onDownloadPng}
      >
        {pngLabel}
      </button>
      <button
        className="rounded-md border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
        type="button"
        disabled={disabled}
        onClick={onDownloadSvg}
      >
        {svgLabel}
      </button>
    </div>
  );
}
