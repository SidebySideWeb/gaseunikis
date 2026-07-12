import { useRef, type InputHTMLAttributes } from 'react';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  id: string;
  inputClassName?: string;
}

function openDatePicker(input: HTMLInputElement | null) {
  if (!input) {
    return;
  }

  input.focus();

  if ('showPicker' in input && typeof input.showPicker === 'function') {
    try {
      input.showPicker();
    } catch {
      /* Some browsers require a direct user gesture. */
    }
  }
}

export default function DatePickerField({ label, id, inputClassName, className, ...props }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={className}>
      <label className="font-label-md text-on-surface-variant mb-2 block" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          id={id}
          type="date"
          lang="el-GR"
          className={`${inputClassName ?? ''} relative pr-12 cursor-pointer`.trim()}
          onClick={() => openDatePicker(inputRef.current)}
          {...props}
        />
        <button
          type="button"
          tabIndex={-1}
          aria-label="Άνοιγμα ημερολογίου"
          onClick={() => openDatePicker(inputRef.current)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-primary transition-colors hover:text-primary-light"
        >
          <span className="material-symbols-outlined pointer-events-none" aria-hidden="true">
            calendar_month
          </span>
        </button>
      </div>
    </div>
  );
}
