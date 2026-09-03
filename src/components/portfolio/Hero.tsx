import { motion } from "motion/react";
import { ChevronDown, Pause, Play } from "lucide-react";
import { useRef, useState } from "react";
import reelAsset from "@/assets/reel.mp4.asset.json";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
    } else {
      void video.play();
    }
    setPlaying(!playing);
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-black">
      {/* Reel video background */}
      <video
        ref={videoRef}
        src={reelAsset.url}
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
        aria-label="Showreel video"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pt-28 pb-20 md:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.h1
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            Hi, I'm a
            <span className="text-stroke-white block">Full Stack</span>
            <span className="text-stroke-white block">Developer</span>
          </motion.h1>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
          >
            I craft modern web applications with React.js, Node.js, and
            Tailwind CSS — turning ideas into fast, scalable, and beautifully
            designed digital experiences.
          </motion.p>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="glass rounded-full px-8 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hidden flex-col items-center gap-4 md:flex"
        >
          <button
            onClick={togglePlay}
            aria-label={playing ? "Pause reel" : "Play reel"}
            className="glass group flex h-32 w-32 items-center justify-center rounded-full transition-all duration-500 hover:scale-110 hover:shadow-[0_0_60px_-8px] hover:shadow-brand lg:h-40 lg:w-40"
          >
            {playing ? (
              <Pause className="h-10 w-10 fill-white text-white transition-transform group-hover:scale-110" />
            ) : (
              <Play className="ml-2 h-10 w-10 fill-white text-white transition-transform group-hover:scale-110" />
            )}
          </button>
          <span className="font-mono-alt text-[11px] uppercase tracking-[0.4em] text-white/60">
            {playing ? "Pause" : "Play Reel"}
          </span>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        aria-label="Scroll down"
      >
        <ChevronDown className="animate-bounce-soft h-7 w-7 text-white/60" />
      </motion.a>
    </section>
  );
}
