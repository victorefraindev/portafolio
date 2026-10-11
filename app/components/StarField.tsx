import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  depth: number;
  phase: number;
  speed: number;
  tint: 0 | 1 | 2; // 0 estelar, 1 nova, 2 nebulosa
};

type Nebula = {
  x: number;
  y: number;
  radius: number;
  color: string;
  alpha: number;
  depth: number;
};

type Palette = {
  stars: string[];
  starBase: number;
  nebula: Nebula[];
};

function paletteFor(theme: "dark" | "light"): Palette {
  if (theme === "light") {
    return {
      stars: ["#3f4659", "#5b63c9", "#c27c1d"],
      starBase: 0.22,
      nebula: [
        { x: 0.22, y: 0.18, radius: 0.45, color: "#5b63c9", alpha: 0.06, depth: 0.3 },
        { x: 0.78, y: 0.6, radius: 0.5, color: "#c27c1d", alpha: 0.05, depth: 0.45 },
        { x: 0.5, y: 0.9, radius: 0.55, color: "#7c86e8", alpha: 0.05, depth: 0.2 },
      ],
    };
  }
  return {
    stars: ["#e9eaf3", "#f0a93b", "#7c86e8"],
    starBase: 0.5,
    nebula: [
      { x: 0.18, y: 0.15, radius: 0.5, color: "#7c86e8", alpha: 0.12, depth: 0.3 },
      { x: 0.8, y: 0.55, radius: 0.55, color: "#f0a93b", alpha: 0.07, depth: 0.45 },
      { x: 0.45, y: 0.9, radius: 0.6, color: "#4752a8", alpha: 0.1, depth: 0.2 },
    ],
  };
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let stars: Star[] = [];
    let raf = 0;
    let running = true;

    const getTheme = () =>
      (document.documentElement.getAttribute("data-theme") === "light"
        ? "light"
        : "dark") as "dark" | "light";

    const build = () => {
      palette = paletteFor(getTheme());
      const target = Math.min(Math.round((width * height) / 4200), 260);
      stars = Array.from({ length: target }, () => {
        const r = Math.random();
        return {
          x: Math.random(),
          y: Math.random(),
          r: r < 0.85 ? Math.random() * 0.9 + 0.35 : Math.random() * 1.6 + 1.2,
          depth: 0.35 + Math.random() * 0.65,
          phase: Math.random() * Math.PI * 2,
          speed: 0.15 + Math.random() * 0.7,
          tint: (Math.random() < 0.86 ? 0 : Math.random() < 0.5 ? 1 : 2) as 0 | 1 | 2,
        };
      });
    };

    let palette = paletteFor(getTheme());

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    };

    const themeObserver = new MutationObserver(() => {
      palette = paletteFor(getTheme());
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const draw = (time: number) => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      const scroll = window.scrollY;
      const t = time / 1000;

      // Nebulosas (una sola pasada de gradientes suaves)
      for (const n of palette.nebula) {
        const cx = n.x * width + scroll * n.depth * -0.02;
        const cy = n.y * height + scroll * n.depth * -0.03;
        const radius = n.radius * Math.max(width, height);
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        grad.addColorStop(0, hexToRgba(n.color, n.alpha));
        grad.addColorStop(1, hexToRgba(n.color, 0));
        ctx.fillStyle = grad;
        ctx.fillRect(cx - radius, cy - radius, radius * 2, radius * 2);
      }

      // Estrellas
      for (const s of stars) {
        const x = s.x * width;
        const y = s.y * height + scroll * (1 - s.depth) * 0.12;
        const twinkle = prefersReduced
          ? 0.8
          : 0.55 + 0.45 * Math.sin(t * s.speed + s.phase);
        const alpha = palette.starBase * twinkle;
        ctx.fillStyle = hexToRgba(palette.stars[s.tint], alpha);
        ctx.beginPath();
        ctx.arc(x, y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReduced) {
        raf = requestAnimationFrame(draw);
      }
    };

    const start = () => {
      if (prefersReduced) {
        draw(1000);
      } else {
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    start();

    window.addEventListener("resize", resize);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 h-full w-full"
      style={{ zIndex: 0 }}
    />
  );
}

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}