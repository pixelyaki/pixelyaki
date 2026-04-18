type TransparencyToggleProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export function TransparencyToggle({ label, checked, onChange }: TransparencyToggleProps) {
  return (
    <label className="flex items-center gap-2 text-sm text-slate-700">
      <input
        className="h-4 w-4 rounded border-slate-300 accent-[#2b6bff]"
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span>{label}</span>
    </label>
  );
}
