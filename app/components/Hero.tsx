import { motion, useReducedMotion } from "motion/react";
import type { Transition, Variants } from "motion/react";
import { profile } from "~/data/site";

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.14, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as Transition["ease"] },
    },
  };

  return (
    <section
      id="inicio"
      className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 pb-24 pt-32 md:px-10"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl"
      >
        <motion.p
          variants={item}
          className="font-mono text-sm text-faint"
        >
          {profile.role}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-fg md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          {profile.blurb}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="#proyectos"
            className="group relative inline-flex items-center gap-2 text-base font-medium text-fg"
          >
            <span className="border-b border-violet pb-0.5 transition-colors group-hover:border-transparent">
              Ver proyectos
            </span>
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rotate-45 bg-nova" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-base text-muted transition-colors hover:text-violet"
          >
            Escríbeme
          </a>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-14 flex items-center gap-2 font-mono text-sm text-faint"
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full bg-nova"
            aria-hidden="true"
          />
          {profile.availability}
        </motion.p>
      </motion.div>
    </section>
  );
}