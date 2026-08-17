import { PARTNERS } from '@/config/content';

/**
 * Bandeau défilant des secteurs accompagnés. Le défilement est purement
 * décoratif (aria-hidden sur la copie dupliquée) et se fige au survol.
 */
export function LogosMarquee() {
  const items = [...PARTNERS, ...PARTNERS];
  return (
    <div className="mask-fade-x group overflow-hidden">
      <ul className="flex w-max items-center gap-4 animate-marquee group-hover:[animation-play-state:paused]">
        {items.map((sector, i) => (
          <li
            key={`${sector}-${i}`}
            aria-hidden={i >= PARTNERS.length}
            className="flex items-center gap-3 whitespace-nowrap rounded-full border border-ink-100 bg-white px-5 py-2.5 text-sm font-medium text-ink-600 shadow-soft"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            {sector}
          </li>
        ))}
      </ul>
    </div>
  );
}
