import { useState } from 'react';

interface Props {
  filterLabels: string[];
}

const CATEGORY_MAP: Record<string, string> = {
  rhythmic: 'Ρυθμική Γυμναστική',
  'gymnastics-for-all': 'Γυμναστική για Όλους',
};

function applyFilter(activeFilter: string) {
  const cards = document.querySelectorAll<HTMLElement>('[data-success-card]');
  const empty = document.getElementById('successes-empty');
  let visibleCount = 0;

  const categoryKey =
    activeFilter === 'Όλες'
      ? null
      : Object.entries(CATEGORY_MAP).find(([, label]) => label === activeFilter)?.[0];

  cards.forEach((card) => {
    const show = !categoryKey || card.dataset.successCategory === categoryKey;
    card.classList.toggle('hidden', !show);
    if (show) visibleCount += 1;
  });

  empty?.classList.toggle('hidden', visibleCount > 0);
}

export default function SuccessesFilterBar({ filterLabels }: Props) {
  const labels =
    filterLabels.length > 0 ? filterLabels : ['Όλες', 'Ρυθμική Γυμναστική', 'Γυμναστική για Όλους'];
  const [activeFilter, setActiveFilter] = useState(labels[0] ?? 'Όλες');

  function selectFilter(label: string) {
    setActiveFilter(label);
    applyFilter(label);
  }

  return (
    <section className="max-w-container-max-width mx-auto px-gutter mb-12">
      <div className="flex flex-wrap justify-center gap-3" role="group" aria-label="Φίλτρο κατηγορίας">
        {labels.map((label) => {
          const isActive = activeFilter === label;
          return (
            <button
              key={label}
              type="button"
              onClick={() => selectFilter(label)}
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
  );
}
