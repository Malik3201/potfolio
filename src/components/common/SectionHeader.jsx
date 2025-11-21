const SectionHeader = ({ eyebrow, title, subtitle }) => (
  <div className="reveal text-center" data-animate>
    {eyebrow && (
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-sky-200/70">
        {eyebrow}
      </p>
    )}
    {title && (
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
    )}
    {subtitle && (
      <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">{subtitle}</p>
    )}
  </div>
);

export default SectionHeader;

