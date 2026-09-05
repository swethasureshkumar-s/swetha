import { useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Loader2, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const EMAIL = "swethasureshkumar56@gmail.com";

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

const links = [
  { label: EMAIL, href: `mailto:${EMAIL}`, Icon: Mail },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/swethasureshkumar-s",
    Icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/swethasureshkumar-s",
    Icon: Github,
  },
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const validate = () => {
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Please enter a valid email address.";
    if (form.subject.trim().length < 2) next.subject = "Please add a subject.";
    if (form.message.trim().length < 10)
      next.message = "Please write at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    const { error } = await supabase.from("contact_messages").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    });
    if (error) {
      setStatus("error");
      return;
    }
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const field =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/30 outline-none transition-colors duration-300 focus:border-brand";

  return (
    <section id="contact" className="bg-black py-28">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono-alt text-xs uppercase tracking-[0.35em] text-brand">
            Get In Touch
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
            Let's Connect
          </h2>
          <p className="mt-8 max-w-md leading-relaxed text-white/60">
            Have an idea, opportunity, or project in mind? Feel free to reach
            out. I'm always open to learning, collaborating, and connecting with
            new people.
          </p>
          <p className="font-mono-alt mt-6 text-[11px] uppercase tracking-[0.25em] text-white/40">
            Open to internships, collaborations, and learning opportunities
          </p>

          <ul className="mt-10 space-y-4">
            {links.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                  className="group inline-flex items-center gap-4 text-white/70 transition-colors hover:text-white"
                >
                  <span className="glass flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 group-hover:shadow-[0_0_30px_-5px] group-hover:shadow-brand/60">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          noValidate
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8"
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              className={field}
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && (
              <p className="mt-2 text-xs text-brand">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              className={field}
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && (
              <p className="mt-2 text-xs text-brand">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="subject" className="sr-only">
              Subject
            </label>
            <input
              id="subject"
              className={field}
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
            {errors.subject && (
              <p className="mt-2 text-xs text-brand">{errors.subject}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className={`${field} resize-none`}
              placeholder="Your message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            {errors.message && (
              <p className="mt-2 text-xs text-brand">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.02] disabled:opacity-60"
          >
            {status === "sending" && (
              <Loader2 className="h-4 w-4 animate-spin" />
            )}
            Send Message
          </button>

          <div aria-live="polite" className="min-h-[20px]">
            {status === "sent" && (
              <p className="text-sm text-white/70">
                Thank you — your message has been sent. I'll get back to you
                soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-brand">
                Something went wrong. Please email me directly at {EMAIL}.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
