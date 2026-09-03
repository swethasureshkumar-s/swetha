import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Commerce Platform",
    stack: "Next.js · Node.js · MongoDB",
    desc: "A scalable storefront with real-time inventory, secure checkout, and an admin dashboard.",
  },
  {
    title: "Analytics Dashboard",
    stack: "React · Tailwind · Express",
    desc: "Data-dense reporting interface with live charts, filters, and role-based access.",
  },
  {
    title: "Creator Portfolio CMS",
    stack: "React · Framer Motion",
    desc: "Cinematic portfolio template with a headless CMS and buttery scroll animations.",
  },
  {
    title: "Realtime Chat App",
    stack: "Node.js · Socket.IO · MongoDB",
    desc: "Low-latency messaging with presence, typing indicators, and message persistence.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-ink py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono-alt text-xs uppercase tracking-[0.35em] text-brand">
            Selected Work
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
            Projects I've built
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-brand/60 hover:bg-white/[0.08]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl font-bold text-white">
                  {p.title}
                </h3>
                <ArrowUpRight className="h-6 w-6 shrink-0 text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand" />
              </div>
              <p className="font-mono-alt mt-3 text-[11px] uppercase tracking-[0.2em] text-brand">
                {p.stack}
              </p>
              <p className="mt-5 leading-relaxed text-white/60">{p.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
