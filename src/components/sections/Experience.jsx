import SectionHeader from "../common/SectionHeader";
import TimelineItem from "../common/TimelineItem";
import { experience, education } from "../../data/profile";

const Experience = () => (
  <section id="experience" data-section className="px-6 py-20">
    <div className="mx-auto max-w-5xl space-y-12">
      <SectionHeader
        eyebrow="Experience"
        title="Experience & Education"
        subtitle="Production-focused frontend experience at Boolmind plus academic foundations that support problem solving."
      />
      <div className="space-y-12">
        {experience.map((item) => (
          <TimelineItem key={`${item.company}-${item.role}`} item={item} />
        ))}
      </div>
      <div className="reveal rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl" data-animate>
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-sky-200/70">
          Education
        </p>
        <div className="mt-6 space-y-6">
          {education.map((item) => (
            <div key={item.institute} className="flex flex-col gap-1 text-slate-200 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-semibold text-white">{item.institute}</p>
                <p className="text-sm text-slate-300">{item.degree}</p>
              </div>
              <div className="text-sm text-slate-400 md:text-right">
                <p>{item.period}</p>
                <p>{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;

