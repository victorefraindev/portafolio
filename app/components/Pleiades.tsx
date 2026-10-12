import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import {
  PLEIADES_VIEWBOX,
  pleiadesById,
  pleiadesEdges,
  pleiadesStars,
} from "~/data/constellation";

type PleiadesProps = {
  variant?: "ornament" | "background";
  /** "mount" anima al cargar; "view" al entrar en el viewport. */
  trigger?: "mount" | "view";
  animate?: boolean;
  className?: string;
};

const lineVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeInOut" },
  },
};

const starVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.45 } },
};

export function Pleiades({
  variant = "ornament",
  trigger = "view",
  animate = true,
  className,
}: PleiadesProps) {
  const reduce = useReducedMotion();
  const play = animate && !reduce;

  const parent: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
  };

  const containerProps = play
    ? trigger === "mount"
      ? { initial: "hidden" as const, animate: "show" as const }
      : {
          initial: "hidden" as const,
          whileInView: "show" as const,
          viewport: { once: true, amount: 0.4 },
        }
    : { initial: false as const };

  const isBg = variant === "background";

  const lineColor = isBg ? "text-fg/25" : "text-violet/45";
  const starColor = isBg ? "text-fg/40" : "text-fg";
  const brightColor = isBg ? "text-fg/60" : "text-nova";

  return (
    <motion.svg
      viewBox={PLEIADES_VIEWBOX}
      role="img"
      aria-label="Constelación de las Pléyades"
      className={className}
      variants={parent}
      {...containerProps}
    >
      {pleiadesEdges.map(([a, b]) => {
        const s1 = pleiadesById[a];
        const s2 = pleiadesById[b];
        return (
          <motion.path
            key={`${a}-${b}`}
            d={`M ${s1.x} ${s1.y} L ${s2.x} ${s2.y}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={isBg ? 0.4 : 0.7}
            strokeLinecap="round"
            className={lineColor}
            variants={lineVariants}
          />
        );
      })}

      {pleiadesStars.map((s) => (
        <motion.circle
          key={s.id}
          cx={s.x}
          cy={s.y}
          r={s.r}
          fill="currentColor"
          className={s.bright ? brightColor : starColor}
          variants={starVariants}
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        />
      ))}
    </motion.svg>
  );
}