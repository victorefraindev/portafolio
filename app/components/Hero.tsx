import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { Transition, Variants } from "motion/react";
import { profile } from "~/data/site";

function useTypewriter(text: string, speed = 75) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? text : "");
  const idx = useRef(0);

  useEffect(() => {
    if (reduce) {
      setDisplay(text);
      return;
    }
    setDisplay("");
    idx.current = 0;
    const timer = window.setInterval(() => {
      idx.current += 1;
      setDisplay(text.slice(0, idx.current));
      if (idx.current >= text.length) {
        window.clearInterval(timer);
      }
    }, speed);
    return () => window.clearInterval(timer);
  }, [text, speed, reduce]);

  return display;
}

export function Hero() {
  const reduce = useReducedMotion();
  const typed = useTypewriter(profile.name);

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.16, delayChildren: 0.1 },
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
      className="relative mx-auto max-w-6xl px-6 pb-24 pt-32 md:px-10"
    >
      {/* Fondo nebuloso azul/morado del hero */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 55% at 30% 38%, color-mix(in oklab, var(--nebula) 16%, transparent) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(45% 45% at 75% 20%, color-mix(in oklab, var(--violet) 12%, transparent) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--bg))",
          }}
        />
      </div>

      <div className="relative flex min-h-[100svh] max-w-3xl flex-col justify-center pt-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
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
            <span className="sr-only">{profile.name}</span>
            <span aria-hidden="true">{typed}</span>
            <span
              aria-hidden="true"
              className={`ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.08em] bg-violet ${reduce ? "opacity-100" : "cursor-blink"}`}
            />
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
      </div>
    </section>
  );
}