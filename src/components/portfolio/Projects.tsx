import { motion } from "motion/react";
import { PawPrint } from "lucide-react";

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
            Projects I'm building
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6">
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-brand/60 hover:bg-white/[0.08] md:p-12"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
                Doofy — Pet Care Ecosystem
              </h3>
              <PawPrint className="h-6 w-6 shrink-0 text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-brand" />
            </div>
            <p className="font-mono-alt mt-3 text-[11px] uppercase tracking-[0.2em] text-brand">
              Status: Currently Building
            </p>
            <p className="mt-6 max-w-3xl leading-relaxed text-white/60">
              Doofy is a connected pet care ecosystem designed to bring pet
              parents and pet care providers together on one platform. The goal
              is to simplify pet care management and create a more connected
              digital experience for pet owners and service providers.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
