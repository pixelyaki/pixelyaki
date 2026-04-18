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
        className="rounded-xl bg-[#2b6bff] px-3 py-2.5 text-sm font-bold text-white transition hover:bg-[#1e4ed8] disabled:cursor-not-allowed disabled:opacity-55"
        type="button"
        disabled={disabled}
        onClick={onDownloadPng}
      >
        {pngLabel}
      </button>
      <button
        className="rounded-xl bg-[#e9efff] px-3 py-2.5 text-sm font-bold text-[#1d3f95] transition hover:bg-[#dbe6ff] disabled:cursor-not-allowed disabled:opacity-55"
        type="button"
        disabled={disabled}
        onClick={onDownloadSvg}
      >
        {svgLabel}
      </button>
    </div>
  );
}
