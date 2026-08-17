import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FAQ } from '@/config/content';
import { cn } from '@/lib/cn';

export function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-ink-100 rounded-4xl border border-ink-100 bg-white px-6 shadow-soft sm:px-8">
      {FAQ.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const btnId = `faq-btn-${i}`;
        return (
          <div key={item.question} className="py-2">
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-display text-lg text-ink-900">{item.question}</span>
                <span
                  className={cn(
                    'relative h-6 w-6 shrink-0 rounded-full border border-ink-200 transition-colors',
                    isOpen && 'border-brand-500 bg-brand-500',
                  )}
                  aria-hidden
                >
                  <span
                    className={cn(
                      'absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-ink-700',
                      isOpen && 'bg-white',
                    )}
                  />
                  <span
                    className={cn(
                      'absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-ink-700 transition-transform duration-300',
                      isOpen ? 'scale-y-0 bg-white' : 'scale-y-100',
                    )}
                  />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-10 leading-relaxed text-ink-500">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
