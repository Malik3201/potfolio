import SectionHeader from "../common/SectionHeader";
import { profile } from "../../data/profile";

const stats = [
  { label: "Years of Learning", value: "4+" },
  { label: "Main Stack", value: "React + MERN" },
  { label: "Current Role", value: "Frontend Intern @ Boolmind" },
];

const About = () => (
  <section id="about" data-section className="px-6 py-20">
    <div className="mx-auto max-w-5xl space-y-10">
      <SectionHeader
        eyebrow="About"
        title="About Abdulrehman"
        subtitle={profile.shortIntro}
      />
      <div className="reveal space-y-6 rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-slate-300 backdrop-blur-xl" data-animate>
        <p>
          I specialize in building component-driven, accessible interfaces with React.js and Tailwind CSS,
          backed by hands-on exposure to the MERN stack. I focus on turning product requirements into clean
          user flows, leveraging modern JavaScript patterns, Context API, and design systems to keep UI quality high.
        </p>
        <p>
          I care about cross-functional collaboration, pixel-perfect implementation, and continuously upskilling in backend
          foundations (Node.js, Express.js, MongoDB) to deliver complete experiences.
        </p>
        <div className="grid gap-4 rounded-2xl bg-slate-900/70 p-6 text-center text-white sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className="text-3xl font-semibold">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.4em] text-sky-200/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;

