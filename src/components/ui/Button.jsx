import { Link } from 'react-router-dom';
import { cn } from '@/lib/cn';

const VARIANTS = {
  primary:
    'bg-brand-500 text-white shadow-glow hover:bg-brand-600 hover:-translate-y-0.5 active:translate-y-0',
  secondary: 'bg-ink-900 text-white hover:bg-ink-800 hover:-translate-y-0.5 active:translate-y-0',
  ghost:
    'bg-transparent text-ink-900 ring-1 ring-inset ring-ink-200 hover:bg-ink-900 hover:text-white hover:ring-ink-900',
  light: 'bg-white text-ink-900 shadow-soft ring-1 ring-inset ring-ink-100 hover:-translate-y-0.5',
};

const SIZES = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-14 px-7 text-base',
};

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-smooth focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none';

export function Button(props) {
  const { variant = 'primary', size = 'md', className, children, ...rest } = props;
  const classes = cn(BASE, VARIANTS[variant], SIZES[size], className);

  if ('to' in props && props.to) {
    const { to, ...linkRest } = rest;
    return (
      <Link to={to} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
