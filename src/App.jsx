import { useEffect, useMemo, useState } from "react";
import FilterBar from "./components/FilterBar";
import InfoPanel from "./components/InfoPanel";
import MapPanel from "./components/MapPanel";
import { JOURNEY_FILTERS, JOURNEY_META, locations } from "./data/locations";

const DEFAULT_LOCATION_ID = "jerusalem";

function getVisibleLocations(activeFilter) {
  if (activeFilter === "all") {
    return locations;
  }

  return locations.filter((location) => location.journey === activeFilter);
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedLocationId, setSelectedLocationId] = useState(DEFAULT_LOCATION_ID);

  const visibleLocations = useMemo(() => getVisibleLocations(activeFilter), [activeFilter]);
  const visibleLocationIds = useMemo(
    () => visibleLocations.map((location) => location.id),
    [visibleLocations],
  );

  useEffect(() => {
    if (!visibleLocationIds.includes(selectedLocationId) && visibleLocationIds.length > 0) {
      setSelectedLocationId(visibleLocationIds[0]);
    }
  }, [selectedLocationId, visibleLocationIds]);

  const selectedLocation =
    locations.find((location) => location.id === selectedLocationId) ?? visibleLocations[0];
  const activeJourneyLabel = JOURNEY_META[selectedLocation?.journey] ?? "全部";

  return (
    <main className="min-h-screen overflow-hidden bg-[#120e0a] text-stone-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(157,114,40,0.22),transparent_30%),linear-gradient(180deg,#1a130d_0%,#120e0a_55%,#090705_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,240,214,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,240,214,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <header className="mb-6 rounded-[30px] border border-amber-800/25 bg-[linear-gradient(180deg,rgba(57,42,23,0.86),rgba(24,18,12,0.92))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm lg:p-8">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.34em] text-amber-200/70">
                Biblical Narrative Atlas
              </p>
              <h1 className="text-3xl font-semibold tracking-[0.08em] text-amber-50 sm:text-4xl">
                《使徒行傳》互動地圖
              </h1>
              <p className="mt-2 text-sm tracking-[0.22em] text-stone-300 sm:text-base">
                Acts of the Apostles Interactive Map
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-300/90">
                以古地圖探索《使徒行傳》的敘事路線，點選城市查看事件摘要、關鍵經文與
                教學意義，並依不同旅程切換地圖上的重點據點。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200/10 bg-black/15 px-4 py-3 text-sm text-stone-200/90">
              <p className="text-[11px] uppercase tracking-[0.28em] text-amber-200/70">
                Current Focus
              </p>
              <p className="mt-2 text-base tracking-[0.14em] text-amber-50">
                {selectedLocation?.chineseName} · {selectedLocation?.name}
              </p>
              <p className="mt-1 text-sm text-stone-300">
                目前旅程：{activeJourneyLabel} · 顯示 {visibleLocations.length} 個地點
              </p>
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-stone-400">
              Journey Filter
            </p>
            <div className="max-w-5xl">
              <FilterBar
                filters={JOURNEY_FILTERS}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
              />
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.65fr)_380px] xl:grid-cols-[minmax(0,1.8fr)_420px]">
          <MapPanel
            locations={locations}
            selectedLocationId={selectedLocation?.id}
            visibleLocationIds={visibleLocationIds}
            onSelectLocation={setSelectedLocationId}
          />

          <InfoPanel location={selectedLocation} journeyLabel={activeJourneyLabel} />
        </section>
      </div>
    </main>
  );
}
