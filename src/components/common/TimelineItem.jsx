const TimelineItem = ({ item }) => {
  if (!item) return null;

  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <span className="h-3 w-3 rounded-full border border-white/40 bg-sky-300/80" />
        <span className="mt-1 w-px flex-1 bg-gradient-to-b from-white/30 via-white/5 to-transparent" />
      </div>
      <div
        className="reveal w-full rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-lg transition hover:border-white/20"
        data-animate
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200/70">
              {item.company || item.institute}
            </p>
            <h3 className="mt-1 text-xl font-semibold text-white">
              {item.role || item.degree}
            </h3>
          </div>
          <div className="text-right text-sm text-slate-400">
            <p>{item.period}</p>
            {item.location && <p>{item.location}</p>}
          </div>
        </div>
        {item.type && (
          <p className="mt-3 inline-flex rounded-full border border-white/10 bg-slate-900/50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-200/90">
            {item.type}
          </p>
        )}
        {item.points && (
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {item.points.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-300/80" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;

