import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, helperText, id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    return (
      <div className="relative w-full">
        <input
          type={type}
          id={inputId}
          className={cn(
            'peer flex h-12 w-full rounded-md border border-[var(--color-border)] bg-transparent px-3 py-2 text-sm placeholder:text-transparent focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
            error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
            className
          )}
          ref={ref}
          placeholder={label}
          {...props}
        />
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'absolute left-3 top-2.5 z-10 origin-[0] -translate-y-4 scale-75 transform bg-[var(--color-bg)] px-1 text-sm text-[var(--color-text-sub)] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[var(--color-accent)]',
              error && 'peer-focus:text-red-500 text-red-500'
            )}
          >
            {label}
          </label>
        )}
        {(error || helperText) && (
          <p
            className={cn(
              'mt-1 text-xs',
              error ? 'text-red-500' : 'text-[var(--color-text-sub)]'
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;

    return (
      <div className="relative w-full">
        <textarea
          id={textareaId}
          className={cn(
            'peer flex min-h-[120px] w-full rounded-md border border-[var(--color-border)] bg-transparent px-3 py-3 text-sm placeholder:text-transparent focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-50 transition-colors resize-y',
            error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
            className
          )}
          ref={ref}
          placeholder={label}
          {...props}
        />
        {label && (
          <label
            htmlFor={textareaId}
            className={cn(
              'absolute left-3 top-3 z-10 origin-[0] -translate-y-5 scale-75 transform bg-[var(--color-bg)] px-1 text-sm text-[var(--color-text-sub)] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:text-[var(--color-accent)]',
              error && 'peer-focus:text-red-500 text-red-500'
            )}
          >
            {label}
          </label>
        )}
        {(error || helperText) && (
          <p
            className={cn(
              'mt-1 text-xs',
              error ? 'text-red-500' : 'text-[var(--color-text-sub)]'
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: { value: string; label: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, id, options, ...props }, ref) => {
    const generatedId = React.useId();
    const selectId = id || generatedId;

    return (
      <div className="relative w-full">
        <select
          id={selectId}
          className={cn(
            'peer flex h-12 w-full rounded-md border border-[var(--color-border)] bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-50 transition-colors appearance-none',
            error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
            className
          )}
          ref={ref}
          {...props}
        >
          <option value="" disabled hidden></option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {label && (
          <label
            htmlFor={selectId}
            className={cn(
              'absolute left-3 top-2.5 z-10 origin-[0] -translate-y-4 scale-75 transform bg-[var(--color-bg)] px-1 text-sm text-[var(--color-text-sub)] duration-300 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[var(--color-accent)]',
              props.value ? '-translate-y-4 scale-75' : 'translate-y-0 scale-100',
              error && 'peer-focus:text-red-500 text-red-500'
            )}
          >
            {label}
          </label>
        )}
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center px-2 text-[var(--color-text-sub)]">
          <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
        {(error || helperText) && (
          <p
            className={cn(
              'mt-1 text-xs',
              error ? 'text-red-500' : 'text-[var(--color-text-sub)]'
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);
Select.displayName = 'Select';
