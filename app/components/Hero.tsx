import { useEffect, useRef, useState, Fragment } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { Transition, Variants } from "motion/react";
import { profile } from "~/data/site";
import { Pleiades } from "~/components/Pleiades";

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

/** Resalta palabras concretas del texto con un tono azul. */
function Accent({ children }: { children: React.ReactNode }) {
  return <span className="text-ocean">{children}</span>;
}

function SplitByPhrases({ text }: { text: string }) {
  const phrases = ["punta a punta", "código limpio", "infraestructura estable y observable"];
  let remaining: string = text;
  const parts: React.ReactNode[] = [];
  let key = 0;

  while (remaining.length > 0) {
    const next = phrases
      .map((p) => ({ p, i: remaining.toLowerCase().indexOf(p.toLowerCase()) }))
      .filter((x) => x.i !== -1)
      .sort((a, b) => a.i - b.i)[0];

    if (!next) {
      parts.push(<Fragment key={key++}>{remaining}</Fragment>);
      break;
    }

    if (next.i > 0) {
      parts.push(<Fragment key={key++}>{remaining.slice(0, next.i)}</Fragment>);
    }
    const matched = remaining.slice(next.i, next.i + next.p.length);
    parts.push(<Accent key={key++}>{matched}</Accent>);
    remaining = remaining.slice(next.i + next.p.length);
  }

  return <>{parts}</>;
}

export function Hero() {
  const reduce = useReducedMotion();
  const typed = useTypewriter(profile.name);

  // Región de apellidos: "Víctor Efraín <Armao Medina>"
  const nameWords = profile.name.split(" ");
  const surnameStart = nameWords[0].length + 1 + nameWords[1].length;
  const givenPart = typed.slice(0, surnameStart);
  const surnamePart = typed.slice(surnameStart);

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
      {/* Pléyades de fondo (detalle sutil) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-20 hidden w-48 opacity-90 md:block lg:right-10"
      >
        <Pleiades variant="background" trigger="mount" className="h-full w-full" />
      </div>

      <div className="relative grid min-h-[100svh] items-center gap-12 pt-20 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-20">
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
            <span className="sr-only">{profile.name}</span>
            <span aria-hidden="true">
              <span className="text-fg">{givenPart}</span>
              <span className="text-ocean">{surnamePart}</span>
            </span>
            <span
              aria-hidden="true"
              className={`ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.08em] bg-violet ${reduce ? "opacity-100" : "cursor-blink"}`}
            />
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            <SplitByPhrases text={profile.blurb} />
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
              href="#contacto"
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

        {/* Marco de identidad */}
        <motion.div
          variants={item}
          className="relative mx-auto w-56 lg:mx-0 lg:w-auto"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-8 rounded-[2rem] blur-2xl"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 45%, color-mix(in oklab, var(--violet) 22%, transparent) 0%, transparent 75%)",
            }}
          />
          <div className="relative overflow-hidden rounded-[1.25rem] border border-line bg-surface p-2.5">
            <img
              src={profile.avatar}
              alt={`Retrato de ${profile.shortName}`}
              width={660}
              height={660}
              decoding="async"
              className="aspect-square w-full rounded-[0.75rem] object-cover"
            />
          </div>
          <span
            aria-hidden="true"
            className="absolute -right-1.5 -top-1.5 inline-block h-3 w-3 rotate-45 border border-violet bg-bg"
          />
        </motion.div>
      </div>
    </section>
  );
}