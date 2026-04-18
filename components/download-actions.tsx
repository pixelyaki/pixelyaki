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
    <div className="mt-2 grid grid-cols-2 gap-2.5">
      <button
        className="rounded-xl bg-blue-700 px-3 py-2.5 text-sm font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-55"
        type="button"
        disabled={disabled}
        onClick={onDownloadPng}
      >
        {pngLabel}
      </button>
      <button
        className="rounded-xl bg-blue-100 px-3 py-2.5 text-sm font-bold text-blue-700 transition hover:bg-blue-200 disabled:cursor-not-allowed disabled:opacity-55"
        type="button"
        disabled={disabled}
        onClick={onDownloadSvg}
      >
        {svgLabel}
      </button>
    </div>
  );
}
