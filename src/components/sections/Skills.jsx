import SectionHeader from "../common/SectionHeader";
import Tag from "../common/Tag";
import { skills } from "../../data/profile";

const groupConfig = [
  { key: "primary", title: "Primary Frontend" },
  { key: "backendBasic", title: "Backend Basics" },
  { key: "tools", title: "Tools & Workflows" },
];

const Skills = () => (
  <section id="skills" data-section className="px-6 py-20">
    <div className="mx-auto max-w-5xl space-y-12">
      <SectionHeader
        eyebrow="Skills"
        title="Stack & Capabilities"
        subtitle="Hands-on experience with modern frontend tooling, UI architecture, and foundational MERN concepts."
      />
      <div className="grid gap-8 md:grid-cols-3">
        {groupConfig.map((group) => (
          <div
            key={group.key}
            className="reveal rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl"
            data-animate
          >
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-sky-200/70">
              {group.title}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills[group.key].map((skill) => (
                <Tag key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

