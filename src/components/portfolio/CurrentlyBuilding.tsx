import { motion } from "motion/react";
import { PawPrint } from "lucide-react";

export function CurrentlyBuilding() {
  return (
    <section id="building" className="bg-black py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono-alt text-xs uppercase tracking-[0.35em] text-brand">
            Currently Building
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
            Doofy — A Smarter Pet Care Ecosystem
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors duration-500 hover:border-brand/60 md:p-12"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
            </span>
            <span className="font-mono-alt text-[11px] uppercase tracking-[0.25em] text-brand">
              Actively Building
            </span>
          </div>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/70">
            I'm currently building Doofy, a connected pet care ecosystem that
            brings pet parents and pet care providers together. Through this
            project, I'm exploring full-stack development, product design,
            scalable systems, and AI-powered development workflows.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <PawPrint className="h-7 w-7 text-brand" />
            <p className="font-mono-alt text-[11px] uppercase tracking-[0.25em] text-white/50">
              Open to internships, collaborations, and learning opportunities
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
