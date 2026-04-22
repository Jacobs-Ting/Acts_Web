export default function InfoPanel({ location, journeyLabel }) {
  if (!location) {
    return null;
  }

  return (
    <aside className="rounded-[28px] border border-amber-900/30 bg-[linear-gradient(180deg,rgba(71,52,29,0.9),rgba(25,20,14,0.94))] p-6 text-stone-100 shadow-[0_28px_90px_rgba(0,0,0,0.35)] backdrop-blur-sm">
      <div className="border-b border-stone-200/10 pb-5">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Selected Location</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[0.08em] text-amber-50">
          {location.chineseName}
        </h2>
        <p className="mt-2 text-sm tracking-[0.2em] text-stone-300">{location.name}</p>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <div className="rounded-2xl border border-stone-200/10 bg-stone-950/20 p-4">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-400">章節範圍</p>
          <p className="mt-2 text-base text-stone-100">{location.chapters}</p>
        </div>
        <div className="rounded-2xl border border-stone-200/10 bg-stone-950/20 p-4">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-400">所屬旅程</p>
          <p className="mt-2 text-base text-stone-100">{journeyLabel}</p>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        <section className="rounded-2xl border border-stone-200/10 bg-black/15 p-4">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-400">事件摘要</p>
          <p className="mt-3 text-[15px] leading-7 text-stone-100">{location.summary}</p>
        </section>

        <section className="rounded-2xl border border-stone-200/10 bg-black/15 p-4">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-400">關鍵經文</p>
          <p className="mt-3 text-[15px] leading-7 text-amber-50/95">{location.verse}</p>
        </section>

        <section className="rounded-2xl border border-stone-200/10 bg-black/15 p-4">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-400">教學意義</p>
          <p className="mt-3 text-[15px] leading-7 text-stone-100">{location.insight}</p>
        </section>
      </div>

      <div className="mt-5 rounded-2xl border border-amber-300/10 bg-[rgba(236,214,170,0.06)] p-4">
        <p className="text-xs uppercase tracking-[0.25em] text-amber-200/75">MVP Notes</p>
        <p className="mt-3 text-sm leading-7 text-stone-300">
          目前版本以單頁互動、旅程篩選與城市資訊為主，後續若要加入時間軸、路線線段或章節全文，
          可以在此結構上逐步擴充。
        </p>
      </div>
    </aside>
  );
}
