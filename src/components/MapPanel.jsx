function Marker({ location, isSelected, isVisible, onSelect }) {
  return (
    <button
      type="button"
      aria-label={`選擇 ${location.chineseName}`}
      onClick={() => onSelect(location.id)}
      className={`group absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
        isVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      style={{ left: `${location.x}%`, top: `${location.y}%` }}
    >
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full border ${
          isSelected
            ? "border-amber-200 bg-amber-200 shadow-[0_0_0_5px_rgba(245,158,11,0.22),0_0_16px_rgba(245,158,11,0.45)]"
            : "border-stone-100/70 bg-stone-900/70 shadow-[0_0_0_4px_rgba(10,10,10,0.18)] group-hover:border-amber-100 group-hover:bg-amber-100"
        }`}
      >
        <span
          className={`h-2 w-2 rounded-full ${
            isSelected ? "bg-stone-950" : "bg-amber-100/90 group-hover:bg-stone-950"
          }`}
        />
      </span>
      <span
        className={`pointer-events-none mt-2 inline-block rounded-full border px-3 py-1 text-[10px] tracking-[0.18em] whitespace-nowrap sm:text-[11px] ${
          isSelected
            ? "border-amber-200/70 bg-stone-950/85 text-amber-50"
            : "border-stone-800/60 bg-stone-950/70 text-stone-100"
        }`}
      >
        {location.name}
      </span>
    </button>
  );
}

export default function MapPanel({
  locations,
  selectedLocationId,
  visibleLocationIds,
  onSelectLocation,
}) {
  const visibleCount = visibleLocationIds.length;

  return (
    <section className="rounded-[28px] border border-stone-900/50 bg-[#1c1711]/80 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.38)] backdrop-blur-sm">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 px-2 text-xs uppercase tracking-[0.28em] text-stone-400">
        <span>Ancient Mediterranean</span>
        <span>{visibleCount} Locations Visible</span>
      </div>

      <div className="relative overflow-hidden rounded-[24px] border border-amber-950/30 bg-[#2a2117]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,240,198,0.22),transparent_45%),linear-gradient(180deg,rgba(42,29,19,0.08),rgba(15,10,8,0.4))]" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(255,252,242,0.02),rgba(36,24,15,0.22))]" />

        {/* 可在這裡替換古地圖圖片路徑，例如改成 /images/acts-map.jpg */}
        <img
          src="/ancient-map-reference.png"
          alt="《使徒行傳》古地圖"
          className="aspect-[16/10] w-full object-cover object-center"
        />

        <div className="absolute inset-0 z-[2]">
          {locations.map((location) => (
            <Marker
              key={location.id}
              location={location}
              isSelected={location.id === selectedLocationId}
              isVisible={visibleLocationIds.includes(location.id)}
              onSelect={onSelectLocation}
            />
          ))}
        </div>

        <div className="absolute bottom-3 left-3 z-[3] rounded-2xl border border-stone-900/60 bg-[#17110b]/80 px-4 py-3 text-xs leading-6 text-stone-200 shadow-[0_16px_45px_rgba(0,0,0,0.28)] backdrop-blur-sm">
          <p className="uppercase tracking-[0.24em] text-amber-200/70">Map Notes</p>
          <p className="mt-1 max-w-xs text-stone-300/90">
            點選地圖標記切換城市；標記位置使用百分比座標，後續微調只需修改資料檔中的
            `x` / `y`。
          </p>
        </div>
      </div>
    </section>
  );
}
