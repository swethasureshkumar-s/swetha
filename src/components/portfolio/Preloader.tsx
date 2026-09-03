import { AnimatePresence, motion } from "motion/react";

export function Preloader({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-brand"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.9, ease: [0.83, 0, 0.17, 1] },
          }}
        >
          <div className="relative select-none">
            {/* background layer */}
            <span className="font-display text-5xl font-bold tracking-tight text-black/30 md:text-8xl">
              Leeshark.
            </span>
            {/* white fill layer */}
            <motion.span
              className="absolute inset-0 font-display text-5xl font-bold tracking-tight text-white md:text-8xl"
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
              exit={{ scale: 0.95, opacity: 0, transition: { duration: 0.4 } }}
            >
              Leeshark.
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
