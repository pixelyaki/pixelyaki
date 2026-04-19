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
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">{foregroundLabel}</span>
        <input
          className="h-8 w-12 cursor-pointer rounded border border-neutral-200 bg-white p-0.5 dark:border-neutral-700 dark:bg-neutral-800"
          type="color"
          value={foregroundColor}
          onChange={(event) => onForegroundChange(event.target.value)}
          aria-label={foregroundLabel}
        />
      </div>
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">{backgroundLabel}</span>
        <input
          className="h-8 w-12 cursor-pointer rounded border border-neutral-200 bg-white p-0.5 dark:border-neutral-700 dark:bg-neutral-800"
          type="color"
          value={backgroundColor}
          onChange={(event) => onBackgroundChange(event.target.value)}
          aria-label={backgroundLabel}
        />
      </div>
    </>
  );
}
