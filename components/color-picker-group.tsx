type ColorPickerGroupProps = {
  foregroundLabel: string;
  backgroundLabel: string;
  foregroundColor: string;
  backgroundColor: string;
  onForegroundChange: (value: string) => void;
  onBackgroundChange: (value: string) => void;
};

export function ColorPickerGroup({
  foregroundLabel,
  backgroundLabel,
  foregroundColor,
  backgroundColor,
  onForegroundChange,
  onBackgroundChange
}: ColorPickerGroupProps) {
  return (
    <>
      <div className="flex items-center justify-between gap-3 text-sm text-slate-700">
        <span className="font-medium">{foregroundLabel}</span>
        <input
          className="h-10 w-14 cursor-pointer rounded-[10px] border border-blue-200 bg-white p-[2px]"
          type="color"
          value={foregroundColor}
          onChange={(event) => onForegroundChange(event.target.value)}
          aria-label={foregroundLabel}
        />
      </div>
      <div className="mt-2.5 flex items-center justify-between gap-3 text-sm text-slate-700">
        <span className="font-medium">{backgroundLabel}</span>
        <input
          className="h-10 w-14 cursor-pointer rounded-[10px] border border-blue-200 bg-white p-[2px]"
          type="color"
          value={backgroundColor}
          onChange={(event) => onBackgroundChange(event.target.value)}
          aria-label={backgroundLabel}
        />
      </div>
    </>
  );
}
