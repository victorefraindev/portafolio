import { useId } from "react";
import type { ArtVariant } from "./content";

const ink = "#141414";
const accent = "#3f6ae8";
const blue = "#2457e6";
const muted = "#8b9196";
const line = "#262b2e";

type ProductArtProps = {
  variant: ArtVariant;
  className?: string;
};

export function ProductArt({ variant, className = "" }: ProductArtProps) {
  const uid = useId().replace(/:/g, "");

  if (variant === "chair") {
    return (
      <svg viewBox="0 0 200 250" className={className} aria-hidden="true">
        <rect x="58" y="28" width="84" height="105" rx="14" fill={ink} />
        <rect x="66" y="38" width="68" height="34" rx="8" fill={line} />
        <rect x="66" y="80" width="12" height="44" rx="6" fill={accent} />
        <rect x="122" y="80" width="12" height="44" rx="6" fill={muted} />
        <rect x="42" y="128" width="116" height="30" rx="8" fill={ink} />
        <rect x="54" y="134" width="92" height="6" rx="3" fill={line} />
        <rect x="36" y="110" width="12" height="46" rx="4" fill={line} />
        <rect x="152" y="110" width="12" height="46" rx="4" fill={line} />
        <rect x="95" y="158" width="10" height="30" fill={line} />
        <path d="M100 188 62 214M100 188l38 26M100 188v34M100 188 74 222M100 188l26 34" stroke={muted} strokeWidth="4" strokeLinecap="round" />
        <circle cx="60" cy="216" r="6" fill={ink} />
        <circle cx="140" cy="216" r="6" fill={ink} />
        <circle cx="100" cy="224" r="6" fill={ink} />
        <circle cx="72" cy="226" r="5" fill={ink} />
        <circle cx="128" cy="226" r="5" fill={ink} />
        <rect x="86" y="90" width="28" height="8" rx="4" fill={blue} />
      </svg>
    );
  }

  if (variant === "desk") {
    return (
      <svg viewBox="0 0 200 250" className={className} aria-hidden="true">
        <rect x="16" y="132" width="168" height="12" rx="2" fill={ink} />
        <rect x="28" y="144" width="8" height="86" fill={line} />
        <rect x="164" y="144" width="8" height="86" fill={line} />
        <rect x="44" y="218" width="112" height="4" fill={muted} opacity="0.5" />
        <rect x="42" y="44" width="116" height="68" rx="3" fill={ink} />
        <rect x="48" y="50" width="104" height="56" rx="1" fill={line} />
        <rect x="54" y="56" width="42" height="30" fill={muted} opacity="0.35" />
        <rect x="100" y="56" width="46" height="4" fill={muted} opacity="0.35" />
        <rect x="100" y="66" width="32" height="4" fill={muted} opacity="0.25" />
        <rect x="96" y="112" width="8" height="20" fill={line} />
        <rect x="82" y="130" width="36" height="4" fill={line} />
        <rect x="46" y="106" width="54" height="26" rx="2" fill={line} />
        <path d="M54 112h38M54 118h28M54 124h34" stroke={muted} strokeWidth="2" />
        <rect x="146" y="118" width="18" height="12" rx="2" fill={blue} />
        <path d="M155 130v10" stroke={blue} strokeWidth="2" />
      </svg>
    );
  }

  if (variant === "monitor") {
    return (
      <svg viewBox="0 0 200 250" className={className} aria-hidden="true">
        <rect x="18" y="42" width="164" height="102" rx="4" fill={ink} />
        <rect x="25" y="49" width="150" height="88" fill={line} />
        <rect x="33" y="57" width="74" height="48" fill={muted} opacity="0.25" />
        <rect x="115" y="57" width="52" height="4" fill={muted} opacity="0.4" />
        <rect x="115" y="67" width="36" height="4" fill={muted} opacity="0.3" />
        <rect x="115" y="77" width="44" height="4" fill={muted} opacity="0.2" />
        <circle cx="101" cy="38" r="2" fill={accent} />
        <rect x="94" y="144" width="12" height="34" fill={line} />
        <rect x="68" y="178" width="64" height="6" rx="2" fill={ink} />
        <path d="M76 184h48" stroke={blue} strokeWidth="2" />
      </svg>
    );
  }

  if (variant === "keyboard") {
    return (
      <svg viewBox="0 0 200 250" className={className} aria-hidden="true">
        <rect x="18" y="86" width="164" height="76" rx="4" fill={ink} />
        <rect x="24" y="92" width="152" height="64" fill={line} />
        {[0, 1, 2, 3].map((row) => (
          <g key={row}>
            {Array.from({ length: 11 }, (_, index) => (
              <rect
                key={index}
                x={30 + index * 13}
                y={98 + row * 14}
                width={10}
                height={10}
                fill={index === 9 && row === 2 ? accent : muted}
                opacity={index === 9 && row === 2 ? 1 : 0.35}
              />
            ))}
          </g>
        ))}
        <rect x="56" y="158" width="88" height="4" rx="2" fill={muted} opacity="0.3" />
        <path d="M182 134c14 0 10 18 10 30" stroke={blue} strokeWidth="2" fill="none" />
      </svg>
    );
  }

  if (variant === "mouse") {
    return (
      <svg viewBox="0 0 200 250" className={className} aria-hidden="true">
        <path d="M100 48c34 0 52 26 52 70v56c0 22-16 34-36 34H84c-20 0-36-12-36-34v-56c0-44 18-70 52-70Z" fill={ink} />
        <path d="M100 48v74" stroke={line} strokeWidth="3" />
        <rect x="93" y="70" width="14" height="32" rx="7" fill={accent} />
        <path d="M76 104c8-6 16-6 24-6M100 98c8 0 16 0 24 6" stroke={muted} strokeWidth="2" opacity="0.4" />
        <circle cx="100" cy="170" r="10" fill={line} />
        <circle cx="100" cy="170" r="4" fill={blue} />
        <path d="M136 48c10 0 16 8 18 18" stroke={muted} strokeWidth="2" fill="none" />
      </svg>
    );
  }

  if (variant === "headset") {
    return (
      <svg viewBox="0 0 200 250" className={className} aria-hidden="true">
        <path d="M48 140v-24c0-34 22-58 52-58s52 24 52 58v24" fill="none" stroke={ink} strokeWidth="14" strokeLinecap="round" />
        <rect x="30" y="128" width="36" height="62" rx="14" fill={ink} />
        <rect x="134" y="128" width="36" height="62" rx="14" fill={ink} />
        <rect x="38" y="136" width="20" height="46" rx="9" fill={line} />
        <rect x="142" y="136" width="20" height="46" rx="9" fill={line} />
        <rect x="42" y="144" width="12" height="30" rx="6" fill={accent} opacity="0.8" />
        <path d="M166 174c18 8 14 26 2 28" fill="none" stroke={line} strokeWidth="5" strokeLinecap="round" />
        <circle cx="168" cy="204" r="7" fill={blue} />
        <path d="M100 58v-8" stroke={accent} strokeWidth="3" />
      </svg>
    );
  }

  if (variant === "mousepad") {
    return (
      <svg viewBox="0 0 200 250" className={className} aria-hidden="true">
        <rect x="14" y="78" width="172" height="112" rx="6" fill={ink} />
        <rect x="20" y="84" width="160" height="100" rx="4" fill={line} />
        <path d="M20 94h160M20 174h160" stroke={muted} strokeWidth="1" opacity="0.3" />
        <path d="M88 118h24v10h-24Z" fill={accent} />
        <path d="M92 128v18M108 128v18" stroke={blue} strokeWidth="2" />
        <text x="100" y="162" textAnchor="middle" fill={muted} fontSize="9" fontFamily="Sora, sans-serif" letterSpacing="3">PULSO</text>
      </svg>
    );
  }

  if (variant === "led") {
    return (
      <svg viewBox="0 0 200 250" className={className} aria-hidden="true">
        <defs>
          <linearGradient id={`led-${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={accent} />
            <stop offset="50%" stopColor="#ffae1a" />
            <stop offset="100%" stopColor={blue} />
          </linearGradient>
        </defs>
        <path d="M22 192c34-10 54-68 88-82s48-30 68-34" fill="none" stroke={ink} strokeWidth="12" strokeLinecap="round" />
        <path d="M22 192c34-10 54-68 88-82s48-30 68-34" fill="none" stroke={`url(#led-${uid})`} strokeWidth="5" strokeLinecap="round" />
        <circle cx="178" cy="76" r="18" fill={accent} opacity="0.12" />
        <circle cx="178" cy="76" r="8" fill={accent} opacity="0.35" />
        <rect x="64" y="76" width="24" height="34" rx="4" fill={ink} />
        <circle cx="76" cy="88" r="4" fill={accent} />
        <path d="M70 98h12M70 104h8" stroke={muted} strokeWidth="2" />
      </svg>
    );
  }

  if (variant === "lamp") {
    return (
      <svg viewBox="0 0 200 250" className={className} aria-hidden="true">
        <rect x="62" y="216" width="76" height="8" rx="4" fill={ink} />
        <path d="M100 216v-56c0-38 22-58 48-64" fill="none" stroke={line} strokeWidth="8" strokeLinecap="round" />
        <path d="M148 96 116 72" fill="none" stroke={ink} strokeWidth="16" strokeLinecap="round" />
        <path d="M108 66 88 92l36 26 20-26Z" fill={ink} />
        <path d="M94 98 66 166" stroke={accent} strokeWidth="2" opacity="0.4" />
        <path d="M104 106 78 168" stroke={accent} strokeWidth="2" opacity="0.3" />
        <path d="M114 112 94 170" stroke={accent} strokeWidth="2" opacity="0.2" />
        <circle cx="104" cy="104" r="7" fill={accent} opacity="0.5" />
        <rect x="88" y="136" width="30" height="16" rx="4" fill={line} />
        <path d="M94 144h18" stroke={blue} strokeWidth="2" />
      </svg>
    );
  }

  if (variant === "pc") {
    return (
      <svg viewBox="0 0 200 250" className={className} aria-hidden="true">
        <rect x="52" y="28" width="96" height="194" rx="6" fill={ink} />
        <rect x="62" y="40" width="72" height="166" fill={line} />
        <rect x="70" y="48" width="56" height="80" fill={muted} opacity="0.12" />
        <circle cx="70" cy="62" r="12" fill="none" stroke={accent} strokeWidth="2" />
        <circle cx="70" cy="62" r="3" fill={accent} />
        <circle cx="70" cy="100" r="12" fill="none" stroke={muted} strokeWidth="2" />
        <circle cx="70" cy="100" r="3" fill={muted} />
        <circle cx="70" cy="138" r="12" fill="none" stroke={muted} strokeWidth="2" />
        <circle cx="70" cy="138" r="3" fill={muted} />
        <rect x="90" y="86" width="34" height="26" fill={blue} opacity="0.25" />
        <rect x="94" y="90" width="10" height="10" fill={accent} />
        <rect x="86" y="140" width="42" height="12" rx="2" fill={line} />
        <path d="M92 146h28" stroke={accent} strokeWidth="2" />
        <rect x="86" y="164" width="42" height="26" fill={muted} opacity="0.12" />
        <circle cx="136" cy="42" r="3" fill={accent} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 250" className={className} aria-hidden="true">
      <rect x="20" y="128" width="160" height="10" rx="2" fill={ink} />
      <rect x="32" y="138" width="6" height="70" fill={line} />
      <rect x="162" y="138" width="6" height="70" fill={line} />
      <rect x="58" y="52" width="84" height="56" rx="3" fill={ink} />
      <rect x="64" y="58" width="72" height="44" fill={line} />
      <rect x="70" y="64" width="28" height="20" fill={accent} opacity="0.3" />
      <rect x="106" y="64" width="24" height="3" fill={muted} opacity="0.4" />
      <rect x="106" y="71" width="18" height="3" fill={muted} opacity="0.3" />
      <rect x="92" y="108" width="8" height="14" fill={line} />
      <rect x="74" y="126" width="44" height="4" fill={line} />
      <rect x="44" y="160" width="44" height="6" rx="2" fill={line} />
      <path d="M48 166v20M84 166v20" stroke={muted} strokeWidth="3" />
      <rect x="126" y="146" width="30" height="38" rx="4" fill={ink} />
      <rect x="132" y="152" width="18" height="10" fill={blue} opacity="0.4" />
      <circle cx="141" cy="174" r="6" fill={line} />
      <circle cx="58" cy="212" r="6" fill={ink} />
      <circle cx="142" cy="212" r="6" fill={ink} />
    </svg>
  );
}
