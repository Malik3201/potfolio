import { useMemo, useState } from "react";
import SectionHeader from "../common/SectionHeader";
import ProjectCard from "../common/ProjectCard";
import Tag from "../common/Tag";
import { projects, miniProjects } from "../../data/profile";

const tabs = [
  { key: "all", label: "All" },
  { key: "personal", label: "Personal" },
  { key: "team", label: "Team" },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = useMemo(() => {
    if (activeTab === "all") return projects;
    return projects.filter((project) =>
      activeTab === "personal" ? project.type.toLowerCase().includes("personal") : project.type.toLowerCase().includes("team")
    );
  }, [activeTab]);

  return (
    <section id="projects" data-section className="px-6 py-20">
      <div className="mx-auto max-w-6xl space-y-12">
        <SectionHeader
          eyebrow="Projects"
          title="Highlighted Work"
          subtitle="AI-infused MERN products and collaborative builds that emphasize performance, usability, and polish."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition ${
                activeTab === tab.key
                  ? "border-white/30 bg-white/10 text-white"
                  : "border-white/10 text-slate-300 hover:border-white/20 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
        <div className="reveal rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-center text-white backdrop-blur-xl" data-animate>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-sky-200/70">
            Mini Projects
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {miniProjects.map((project) => (
              <Tag key={project} label={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

