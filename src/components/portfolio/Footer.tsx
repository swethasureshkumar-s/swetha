import { motion } from "motion/react";

const services = [
  "Cinematic Production",
  "Motion Graphics",
  "Web Development",
  "UI/UX Design",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="flex min-h-[50vh] flex-col justify-between bg-[oklch(0.17_0_0)] px-6 py-20"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-3">
        <div>
          <ul className="font-mono-alt space-y-3 text-[11px] uppercase tracking-[0.25em] text-white/60">
            {services.map((s) => (
              <li key={s} className="transition-colors hover:text-white">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-2xl font-bold text-[#F4F4F4]">
            5+ Years of Experience
          </p>
          <a
            href="#projects"
            className="font-mono-alt mt-4 inline-block text-[11px] uppercase tracking-[0.25em] text-white/60 underline underline-offset-8 transition-colors hover:text-white"
          >
            View Work
          </a>
        </div>

        <div className="md:text-right">
          <p className="font-mono-alt text-[11px] uppercase tracking-[0.25em] text-white/60">
            Available Worldwide
          </p>
          <p className="font-mono-alt mt-3 text-[11px] uppercase tracking-[0.25em] text-white/40">
            {year}
          </p>
        </div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="my-20 text-center font-display text-[18vw] font-bold leading-none tracking-tighter text-[#D4D4D4] transition-colors duration-500 hover:text-white"
      >
        swetha
      </motion.h2>

      <div className="font-mono-alt mx-auto grid w-full max-w-6xl gap-6 text-[11px] uppercase tracking-[0.2em] text-white/50 md:grid-cols-3">
        <div className="space-y-2">
          <p>© {year} Swetha</p>
          <p className="text-white/35">Built with React</p>
        </div>
        <div className="md:text-center">
          <a
            href="mailto:hello@leeshark.dev"
            className="underline underline-offset-8 transition-colors hover:text-white"
          >
            hello@leeshark.dev
          </a>
        </div>
        <div className="md:text-right">
          <a href="#home" className="transition-colors hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
