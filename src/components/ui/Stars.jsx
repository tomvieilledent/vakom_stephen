import { useId } from 'react';

const STAR =
  'M12 2.5l2.94 6.2 6.56.8-4.85 4.55 1.28 6.7L12 17.5l-5.93 3.25 1.28-6.7L2.5 9.5l6.56-.8z';

/** Note sur 5 en étoiles pleines, demi-étoiles ou vides. */
export function Stars({ rating, className = 'h-5 w-5', label }) {
  const uid = useId();
  const value = Math.max(0, Math.min(5, Math.round(Number(rating) * 2) / 2));
  return (
    <span
      role="img"
      aria-label={label ?? `Note : ${String(value).replace('.', ',')} sur 5`}
      className="inline-flex items-center gap-0.5 text-amber-400"
    >
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = value >= i + 1 ? 1 : value >= i + 0.5 ? 0.5 : 0;
        const gid = `${uid}-${i}`;
        return (
          <svg key={i} viewBox="0 0 24 24" aria-hidden className={className}>
            <defs>
              <linearGradient id={gid}>
                <stop offset={`${fill * 100}%`} stopColor="currentColor" />
                <stop offset={`${fill * 100}%`} stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              d={STAR}
              fill={`url(#${gid})`}
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
        );
      })}
    </span>
  );
}
