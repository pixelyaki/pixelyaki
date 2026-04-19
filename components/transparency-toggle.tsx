type TransparencyToggleProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export function TransparencyToggle({ label, checked, onChange }: TransparencyToggleProps) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
      <input
        className="h-3.5 w-3.5 rounded-sm border-gray-300 accent-gray-900 dark:accent-white"
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span>{label}</span>
    </label>
  );
}
