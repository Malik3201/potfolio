import { profile } from "../../data/profile";

const Footer = () => (
  <footer className="mt-24 border-t border-white/5 py-10 text-sm text-slate-400">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-sky-200/70">Portfolio</p>
        <p className="mt-2 text-lg font-semibold text-white">{profile.name}</p>
        <p>{profile.role}</p>
      </div>
      <div className="flex items-center gap-4">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="text-white transition hover:text-sky-200"
        >
          GitHub
        </a>
        <span className="text-white/20">/</span>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-white transition hover:text-sky-200"
        >
          LinkedIn
        </a>
        <span className="text-white/20">/</span>
        <a href={`mailto:${profile.email}`} className="text-white transition hover:text-sky-200">
          Email
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;

