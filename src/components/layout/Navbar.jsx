import { useEffect, useState } from "react";
import { profile } from "../../data/profile";

const navLinks = [
  { label: "Home", href: "hero" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Experience", href: "experience" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        isScrolled ? "backdrop-blur-xl" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 rounded-full border border-white/10 bg-slate-950/80 px-6 py-4 text-sm text-white shadow-lg shadow-black/30 transition">
        <button
          type="button"
          className="flex items-center gap-3 text-left"
          onClick={() => scrollTo("hero")}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-800 text-base font-bold text-sky-200">
            AM
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-sky-200/70">
              Portfolio
            </p>
            <p className="text-sm font-semibold">{profile.name}</p>
          </div>
        </button>
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                activeSection === link.href
                  ? "bg-white/10 text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="hidden md:flex">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/30 hover:bg-white/10"
          >
            Connect
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 7h8m0 0v8m0-8-9 9"
              />
            </svg>
          </a>
        </div>
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="mt-3 flex flex-col gap-2 rounded-3xl border border-white/10 bg-slate-950/90 p-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 shadow-2xl md:hidden">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`rounded-full px-4 py-2 ${
                activeSection === link.href
                  ? "bg-white/10 text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-white/10 px-4 py-2 text-white"
          >
            Email me
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;

