interface CheckboxFilterInterface {
  label: string;
  options: string[];
  selectedOptions: string[];
  onOptionsChange: (option: string) => void;
}

export default function CheckboxFilter({
  label,
  options,
  selectedOptions,
  onOptionsChange,
}: CheckboxFilterInterface) {
  return (
    <div>
      {label}
      {options.map((option) => (
        <div>
          <label>
            <input
              type="checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => onOptionsChange(option)}
            />
            {option}
          </label>
        </div>
      ))}
    </div>
  );
}
