import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    title: "Define",
    desc: "We map goals, audience, and scope so every decision that follows has a clear reason behind it.",
    side: "right",
    rot: "2deg",
  },
  {
    n: "02",
    title: "Design",
    desc: "Wireframes turn into polished, responsive interfaces with a consistent visual language.",
    side: "left",
    rot: "-2.5deg",
  },
  {
    n: "03",
    title: "Build",
    desc: "Clean React front-ends wired to scalable Node.js and MongoDB back-ends, tested as we go.",
    side: "right",
    rot: "1.5deg",
  },
  {
    n: "04",
    title: "Launch",
    desc: "Performance tuning, deployment, and post-launch iteration to keep the product sharp.",
    side: "left",
    rot: "-2deg",
  },
];

function Card({ step, index }: { step: (typeof steps)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.45"],
  });
  const active = useTransform(scrollYProgress, (v) => v > 0.6);

  return (
    <div
      ref={ref}
      className={`flex ${step.side === "right" ? "md:justify-end" : "md:justify-start"} justify-center`}
    >
      <motion.div
        initial={{ opacity: 0, x: step.side === "right" ? 70 : -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 60, damping: 16 }}
        whileHover={{ scale: 1.04 }}
        style={{ rotate: step.rot }}
        className="group w-full max-w-sm"
      >
        <motion.div
          style={{
            backgroundColor: useTransform(active, (a) =>
              a ? "oklch(0.633 0.257 27.33)" : "oklch(1 0 0)",
            ),
            boxShadow: useTransform(active, (a) =>
              a
                ? "0 25px 60px -15px oklch(0.633 0.257 27.33 / 0.6)"
                : "0 20px 45px -20px oklch(0 0 0 / 0.25)",
            ),
          }}
          transition={{ duration: 0.5 }}
          className="rounded-[2rem] border border-black/10 p-8 pt-10"
        >
          {/* hole punch */}
          <div className="mx-auto mb-6 h-3 w-16 rounded-full bg-black/20" />
          <motion.p
            style={{
              color: useTransform(active, (a) =>
                a ? "oklch(1 0 0 / 0.7)" : "oklch(0.55 0.02 260)",
              ),
            }}
            className="font-serif text-4xl italic"
          >
            {step.n}
          </motion.p>
          <motion.h3
            style={{
              color: useTransform(active, (a) =>
                a ? "oklch(1 0 0)" : "oklch(0.18 0.01 260)",
              ),
            }}
            className="mt-3 font-display text-3xl font-bold tracking-tight"
          >
            {step.title}
          </motion.h3>
          <motion.p
            style={{
              color: useTransform(active, (a) =>
                a ? "oklch(1 0 0 / 0.85)" : "oklch(0.5 0.02 260)",
              ),
            }}
            className="mt-4 leading-relaxed"
          >
            {step.desc}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.8"],
  });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="bg-grid-light relative overflow-hidden bg-white py-28"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-border bg-white px-5 py-2 font-mono-alt text-xs uppercase tracking-[0.25em] text-muted-foreground shadow-sm">
            How we work
          </span>
          <h2 className="mt-8 font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
            Let me show you how I drive your brand to new heights
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
            A simple, transparent four-step workflow that takes an idea from a
            first conversation to a live, polished product.
          </p>
        </div>

        {/* curved dashed timeline */}
        <svg
          className="pointer-events-none absolute left-1/2 top-[380px] hidden h-[1500px] w-[600px] -translate-x-1/2 md:block"
          viewBox="0 0 600 1500"
          fill="none"
          aria-hidden="true"
        >
          <motion.path
            d="M300 0 C 520 200, 80 420, 300 640 C 520 860, 80 1080, 300 1300 L300 1500"
            stroke="oklch(0.18 0.01 260)"
            strokeWidth="2"
            strokeDasharray="10 12"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>

        <div className="relative mt-24 flex flex-col gap-28">
          {steps.map((s, i) => (
            <Card key={s.n} step={s} index={i} />
          ))}
        </div>

        <p className="mt-24 rotate-[-3deg] text-center font-serif text-3xl italic text-foreground">
          Ready to be delivered!
        </p>
      </div>
    </section>
  );
}
