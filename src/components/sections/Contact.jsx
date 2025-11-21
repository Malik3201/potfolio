import { useState } from "react";
import SectionHeader from "../common/SectionHeader";
import { contact } from "../../data/profile";

const initialForm = { name: "", email: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setStatus(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "Please fill in all fields before sending." });
      return;
    }
    setStatus({ type: "success", message: "Message ready! Connect via email to continue." });
    setForm(initialForm);
  };

  return (
    <section id="contact" data-section className="px-6 py-20">
      <div className="mx-auto max-w-4xl space-y-12">
        <SectionHeader
          eyebrow="Contact"
          title={contact.title}
          subtitle={contact.subtitle}
        />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="reveal space-y-4 rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-slate-200 backdrop-blur-xl" data-animate>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-sky-200/70">Email</p>
              <a href={`mailto:${contact.email}`} className="text-lg font-semibold text-white transition hover:text-sky-200">
                {contact.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-sky-200/70">Location</p>
              <p>{contact.location}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm text-slate-300">
              I respond fastest via email. Share your project idea, timeline, or opportunity and I’ll reply within 24 hours.
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="reveal space-y-4 rounded-3xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl"
            data-animate
          >
            {["name", "email"].map((field) => (
              <div key={field} className="space-y-2">
                <label className="text-xs uppercase tracking-[0.4em] text-sky-200/70">
                  {field === "name" ? "Full Name" : "Email"}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder={field === "name" ? "Your name" : "you@example.com"}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-300/70"
                />
              </div>
            ))}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.4em] text-sky-200/70">Message</label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-300/70"
              />
            </div>
            {status && (
              <p
                className={`text-sm ${
                  status.type === "error" ? "text-rose-300" : "text-sky-200"
                }`}
              >
                {status.message}
              </p>
            )}
            <button
              type="submit"
              className="w-full rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-sky-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

