import { forwardRef } from 'react';
import { cn } from '@/lib/cn';

const CONTROL =
  'w-full rounded-2xl border border-ink-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-300 shadow-sm transition-colors focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15 disabled:opacity-60';

export function FieldWrap({ label, htmlFor, error, required, optional, children, className }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink-800">
        {label}
        {required && <span className="ml-0.5 text-brand-600">*</span>}
        {optional && <span className="ml-1 text-xs font-normal text-ink-400">(facultatif)</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-sm text-brand-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export const TextInput = forwardRef(function TextInput({ className, ...props }, ref) {
  return <input ref={ref} className={cn(CONTROL, className)} {...props} />;
});

export const TextArea = forwardRef(function TextArea({ className, ...props }, ref) {
  return (
    <textarea ref={ref} className={cn(CONTROL, 'min-h-[140px] resize-y', className)} {...props} />
  );
});

export const Select = forwardRef(function Select({ className, children, ...props }, ref) {
  return (
    <select ref={ref} className={cn(CONTROL, 'appearance-none pr-10', className)} {...props}>
      {children}
    </select>
  );
});
