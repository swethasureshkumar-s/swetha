import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";
import profile from "@/assets/profile.jpg";

const techs = ["React", "Node.js", "MongoDB"];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-brand py-28">
      {/* floating star decorations */}
      <Sparkle className="animate-pulse-star absolute left-[8%] top-16 h-8 w-8 text-black" />
      <Sparkle
        className="animate-pulse-star absolute right-[10%] top-40 h-6 w-6 text-black"
        style={{ animationDelay: "1.2s" }}
      />
      <Sparkle
        className="animate-pulse-star absolute bottom-40 left-[45%] h-5 w-5 text-black"
        style={{ animationDelay: "2.4s" }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-20 px-6 md:grid-cols-2">
        {/* hanging ID badge */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <div className="flex flex-col items-center">
            {/* lanyard strap */}
            <div className="h-32 w-3 rounded-full bg-black shadow-md" />
            {/* metal clip */}
            <div className="h-6 w-8 rounded-b-lg bg-neutral-500 shadow-inner" />
            {/* badge card */}
            <div className="w-64 -rotate-3 rounded-2xl bg-neutral-800 p-4 shadow-2xl shadow-black/50 transition-transform duration-500 hover:rotate-0 hover:scale-105">
              <div className="mx-auto mb-4 h-3 w-12 rounded-full bg-neutral-600" />
              <img
                src={profile}
                alt="Portrait of Leeshark, full stack developer"
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-square w-full rounded-xl object-cover"
              />
              <div className="mt-4 text-center">
                <p className="font-display text-lg font-bold uppercase tracking-wide text-white">
                  Leeshark
                </p>
                <p className="font-mono-alt mt-1 text-[10px] uppercase tracking-[0.3em] text-white/50">
                  Full Stack Developer
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* intro content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-6xl font-bold tracking-tight text-black md:text-8xl">
            Hello!
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-white">
            I'm <span className="font-bold uppercase text-black">Leeshark</span>
            , a Full Stack Developer passionate about creating modern web
            applications and digital experiences. I turn ideas into real
            products using HTML, CSS, JavaScript, React, Next.js, Tailwind CSS,
            Node.js, and MongoDB.
          </p>
          <p className="mt-5 leading-relaxed text-white/80">
            What started as curiosity grew into a passion for building clean,
            responsive, and user-friendly applications — from beautiful
            interfaces to scalable backend systems.
          </p>

          {/* tech logos */}
          <div className="mt-12 flex items-center gap-10">
            {techs.map((t, i) => (
              <motion.span
                key={t}
                className="animate-float-y cursor-default rounded-2xl border-2 border-black/20 px-6 py-4 font-display text-xl font-bold text-black/70 drop-shadow-lg transition-all duration-300 hover:scale-110 hover:border-black hover:text-black"
                style={{ animationDelay: `${i * 0.8}s` }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* torn paper divider */}
      <svg
        className="absolute bottom-0 left-0 w-full text-white"
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,70 L0,38 L48,44 L96,30 L160,46 L220,26 L300,42 L370,22 L440,40 L520,28 L600,48 L680,32 L760,44 L840,24 L920,42 L1000,30 L1080,46 L1160,28 L1240,44 L1320,32 L1380,42 L1440,34 L1440,70 Z"
        />
      </svg>
    </section>
  );
}
