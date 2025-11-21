import Tag from "../common/Tag";
import { profile, skills } from "../../data/profile";

const Hero = () => {
  return (
    <section
      id="hero"
      data-section
      className="relative min-h-screen overflow-hidden px-6 pt-40 text-white md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-16 left-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-400/15 blur-[140px]" />
        <div className="absolute right-6 top-32 h-64 w-64 rounded-full bg-indigo-500/10 blur-[150px]" />
        <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-slate-500/10 blur-[140px]" />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-12 md:flex-row">
        <div className="reveal max-w-2xl space-y-6" data-animate>
          <p className="text-xs uppercase tracking-[0.6em] text-sky-200/70">
            Frontend • MERN • AI
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            {profile.headline}
          </h1>
          <p className="text-base text-slate-300">{profile.shortIntro}</p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            {skills.primary.slice(0, 3).map((skill) => (
              <Tag key={skill} label={skill} />
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-sky-400"
            >
              {profile.heroCTAPrimary}
            </button>
            <a
              href={profile.resume}
              download
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white/40 hover:bg-white/5"
            >
              {profile.heroCTASecondary}
            </a>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-sky-200/70">Location</p>
              <p>{profile.location}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-sky-200/70">Email</p>
              <a href={`mailto:${profile.email}`} className="text-white transition hover:text-sky-200">
                {profile.email}
              </a>
            </div>
          </div>
        </div>
        <div
  className="reveal relative h-[320px] w-[300px] max-w-sm overflow-hidden rounded-3xl border border-white/15 bg-slate-900/60 shadow-2xl md:h-[400px] md:max-w-md"
  data-animate
>
  {profile.heroImage ? (
    <img
      src={profile.heroImage}
      alt={`${profile.name} portrait`}
      className="h-full w-full object-cover object-top"
      loading="lazy"
    />
          ) : (
            <div className="flex h-full flex-col items-center justify-center text-center text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
              <span className="text-xs tracking-[0.6em] text-sky-200/70">Your</span>
              <span className="text-2xl text-white">Photo</span>
              <span className="text-xs tracking-[0.6em] text-sky-200/70">Here</span>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

