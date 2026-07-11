import { useState, useMemo } from 'react';
import type { Achievement } from '../../lib/types';

export type AchievementDisplay = Achievement & { imageUrl: string };

interface Props {
  items: AchievementDisplay[];
  filterLabels: string[];
}

const CATEGORY_MAP: Record<string, string> = {
  rhythmic: 'Ρυθμική Γυμναστική',
  'gymnastics-for-all': 'Γυμναστική για Όλους',
};

const CATEGORY_LABELS: Record<string, string> = {
  rhythmic: 'ΡΥΘΜΙΚΗ ΓΥΜΝΑΣΤΙΚΗ',
  'gymnastics-for-all': 'ΓΥΜΝΑΣΤΙΚΗ ΓΙΑ ΟΛΟΥΣ',
};

export default function SuccessesFilter({ items, filterLabels }: Props) {
  const labels = filterLabels.length > 0 ? filterLabels : ['Όλες', 'Ρυθμική Γυμναστική', 'Γυμναστική για Όλους'];
  const [activeFilter, setActiveFilter] = useState(labels[0] ?? 'Όλες');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'Όλες') return items;
    const categoryKey = Object.entries(CATEGORY_MAP).find(([, label]) => label === activeFilter)?.[0];
    if (!categoryKey) return items;
    return items.filter((item) => item.category === categoryKey);
  }, [activeFilter, items]);

  return (
    <>
      <section className="max-w-container-max-width mx-auto px-gutter mb-12">
        <div className="flex flex-wrap justify-center gap-3" role="group" aria-label="Φίλτρο κατηγορίας">
          {labels.map((label) => {
            const isActive = activeFilter === label;
            return (
              <button
                key={label}
                type="button"
                onClick={() => setActiveFilter(label)}
                aria-pressed={isActive}
                className={
                  isActive
                    ? 'bg-primary text-on-primary px-8 py-3 rounded-full font-bold shadow-md transition-all'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-high px-8 py-3 rounded-full font-bold transition-all'
                }
              >
                {label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="max-w-container-max-width mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <article
              key={item._id ?? item.slug?.current}
              className="bg-white border border-achievement/30 rounded-xl overflow-hidden flex flex-col shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="relative h-64 overflow-hidden bg-surface-container">
                <img
                  src={item.imageUrl}
                  alt={item.image?.alt ?? item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {item.year && (
                  <div className="absolute top-4 right-4 bg-achievement text-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.year}
                  </div>
                )}
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-display text-headline-md text-on-surface mb-3">{item.title}</h3>
                {item.description && (
                  <p className="text-body-md text-on-surface-variant mb-6 line-clamp-3">{item.description}</p>
                )}
                <div className="mt-auto pt-4 border-t border-achievement/20">
                  <span className="inline-block text-achievement text-[11px] font-bold uppercase tracking-wider">
                    {CATEGORY_LABELS[item.category] ?? item.category}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="text-center text-on-surface-variant py-12">Δεν βρέθηκαν επιτυχίες σε αυτή την κατηγορία.</p>
        )}
      </section>
    </>
  );
}
