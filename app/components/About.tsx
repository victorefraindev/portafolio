import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import { profile } from "~/data/site";

const facts = [
  { label: "Rol", value: profile.role },
  { label: "Ubicación", value: profile.location },
  { label: "Correo", value: profile.email },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function About() {
  const reduce = useReducedMotion();

  return (
    <section id="sobre-mi" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
      <motion.div
        initial={reduce ? "show" : "hidden"}
        animate={reduce ? "show" : undefined}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true, amount: 0.35 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-20"
      >
        <motion.div variants={reveal}>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
            Sobre mí
          </h2>
          <div className="mt-8 space-y-5">
            {profile.about.map((p, i) => (
              <motion.p
                key={i}
                variants={reveal}
                className="max-w-prose text-lg leading-relaxed text-muted"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <motion.dl
          variants={reveal}
          className="h-fit border-t border-line md:border-l md:border-t-0 md:pl-10"
        >
          {facts.map((f) => (
            <div key={f.label} className="border-b border-line py-5">
              <dt className="font-mono text-sm text-faint">{f.label}</dt>
              <dd className="mt-1 text-fg">{f.value}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}