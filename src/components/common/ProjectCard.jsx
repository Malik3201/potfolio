import Tag from "./Tag";

const ProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <article
      className="group relative flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/30"
      data-animate
    >
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.3em] text-sky-200/70">
          {project.type}
        </p>
        {project.highlightTag && (
          <span className="rounded-full border border-white/10 bg-slate-800/70 px-3 py-1 text-xs font-semibold text-white/80">
            {project.highlightTag}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
        <p className="mt-3 text-sm text-slate-300">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.skills.map((skill) => (
          <Tag key={skill} label={skill} />
        ))}
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-sky-200 transition group-hover:text-sky-100"
        >
          Visit project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 16.5 16.5 7.5M16.5 7.5H9m7.5 0V15"
            />
          </svg>
        </a>
      )}
    </article>
  );
};

export default ProjectCard;

