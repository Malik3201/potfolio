const Tag = ({ label }) => {
  if (!label) return null;

  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-slate-900/40 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-100/90 transition hover:border-white/30 hover:bg-slate-800/60">
      {label}
    </span>
  );
};

export default Tag;

