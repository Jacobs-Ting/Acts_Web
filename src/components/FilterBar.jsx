export default function FilterBar({ filters, activeFilter, onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {filters.map((filter) => {
        const isActive = filter.id === activeFilter;

        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => onFilterChange(filter.id)}
            className={`rounded-full border px-4 py-2 text-sm tracking-[0.12em] transition-all duration-200 ${
              isActive
                ? "border-amber-300 bg-[linear-gradient(180deg,rgba(202,158,72,0.32),rgba(105,76,28,0.2))] text-amber-50 shadow-[0_0_18px_rgba(245,158,11,0.18)]"
                : "border-stone-200/15 bg-stone-950/35 text-stone-200 hover:-translate-y-0.5 hover:border-amber-200/40 hover:text-amber-50"
            }`}
            aria-pressed={isActive}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
