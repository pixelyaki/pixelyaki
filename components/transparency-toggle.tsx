type TransparencyToggleProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export function TransparencyToggle({ label, checked, onChange }: TransparencyToggleProps) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300">
      <input
        className="h-3.5 w-3.5 rounded-sm border-neutral-300 accent-neutral-900 dark:accent-white"
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span>{label}</span>
    </label>
  );
}
