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
        className="rounded-md bg-blue-700 p-2 text-xs font-medium text-white transition-colors hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-40"
        type="button"
        disabled={disabled}
        onClick={onDownloadPng}
      >
        {pngLabel}
      </button>
      <button
        className="rounded-md border border-gray-200 bg-white p-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
        type="button"
        disabled={disabled}
        onClick={onDownloadSvg}
      >
        {svgLabel}
      </button>
    </div>
  );
}
