"use client";

import { cn } from "@/lib/utils";

type BaseProps = {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  className?: string;
};

const fieldBase =
  "w-full rounded-xs border bg-white px-4 py-3 text-[15px] text-ink-primary placeholder:text-ink-subtle transition-all duration-200 hover:border-blue-800/40 focus:outline-none focus:ring-2 focus:ring-orange-500/20";

function FieldWrapper({
  label,
  name,
  required,
  error,
  className,
  children,
}: BaseProps & { children: React.ReactNode }) {
  const errorId = `${name}-error`;
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={name} className="text-[13px] font-semibold text-ink-secondary">
        {label} {required && <span className="text-orange-600">*</span>}
      </label>
      {children}
      {error && (
        <span id={errorId} className="text-xs font-medium text-orange-700" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export function TextField({
  label,
  name,
  required,
  error,
  className,
  type = "text",
  placeholder,
  value,
  onChange,
}: BaseProps & {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <FieldWrapper label={label} name={name} required={required} error={error} className={className}>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          fieldBase,
          error ? "border-orange-500" : "border-hairline-medium focus:border-blue-800"
        )}
      />
    </FieldWrapper>
  );
}

export function TextAreaField({
  label,
  name,
  required,
  error,
  className,
  placeholder,
  value,
  onChange,
  rows = 4,
}: BaseProps & {
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  return (
    <FieldWrapper label={label} name={name} required={required} error={error} className={className}>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        rows={rows}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          fieldBase,
          "resize-none",
          error ? "border-orange-500" : "border-hairline-medium focus:border-blue-800"
        )}
      />
    </FieldWrapper>
  );
}

export function SelectField({
  label,
  name,
  required,
  error,
  className,
  value,
  onChange,
  options,
  placeholder = "Select",
}: BaseProps & {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <FieldWrapper label={label} name={name} required={required} error={error} className={className}>
      <select
        id={name}
        name={name}
        value={value}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          fieldBase,
          "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22><path d=%22M1 1l5 5 5-5%22 stroke=%22%236B7280%22 stroke-width=%221.5%22 fill=%22none%22/></svg>')] bg-[right_1rem_center] bg-no-repeat pr-10",
          error ? "border-orange-500" : "border-hairline-medium focus:border-blue-800"
        )}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
}

export function RadioField({
  label,
  name,
  required,
  error,
  className,
  value,
  onChange,
  options,
}: BaseProps & {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <span className="text-[13px] font-semibold text-ink-secondary" id={`${name}-label`}>
        {label} {required && <span className="text-orange-600">*</span>}
      </span>
      <div role="radiogroup" aria-labelledby={`${name}-label`} className="flex gap-2">
        {options.map((opt) => (
          <button
            type="button"
            role="radio"
            key={opt}
            aria-checked={value === opt}
            onClick={() => onChange(opt)}
            className={cn(
              "flex-1 rounded-xs border px-4 py-3 text-sm font-semibold transition-colors",
              value === opt
                ? "border-blue-900 bg-blue-900 text-white"
                : "border-hairline-medium bg-white text-ink-secondary hover:border-blue-800/50"
            )}
          >
            {opt}
          </button>
        ))}
      </div>
      {error && (
        <span className="text-xs font-medium text-orange-700" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
