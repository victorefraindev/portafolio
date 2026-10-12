import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type Point = { x: number; y: number };

/**
 * Capa SVG que conecta las estrellas (diamantes) de las tarjetas de proyecto
 * con una polilínea fina, como una constelación. Se mide en el cliente y
 * degrada con elegancia si no hay puntos. Solo se muestra en desktop.
 */
export function ConstellationLines({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLElement | null>;
}) {
  const [points, setPoints] = useState<Point[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measure = () => {
      const cRect = container.getBoundingClientRect();
      const cards = Array.from(
        container.querySelectorAll<HTMLElement>("[data-project-card]"),
      );
      const pts = cards.map((card) => {
        const star =
          card.querySelector<HTMLElement>("[data-project-star]") ?? card;
        const r = star.getBoundingClientRect();
        return {
          x: r.left + r.width / 2 - cRect.left,
          y: r.top + r.height / 2 - cRect.top,
        };
      });
      setPoints(pts);
      setSize({ w: cRect.width, h: cRect.height });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(container);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [containerRef]);

  if (points.length < 2 || size.w === 0) return null;

  const d = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full sm:block"
      viewBox={`0 0 ${size.w} ${size.h}`}
      preserveAspectRatio="none"
    >
      <motion.path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        className="text-violet/25"
        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
        whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
      {points.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={2}
          className="text-violet/50"
          fill="currentColor"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
        />
      ))}
    </svg>
  );
}