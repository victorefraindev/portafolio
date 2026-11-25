import type { PartVariant, TowerDetail } from "./content";

type PartArtProps = {
  variant: PartVariant;
  className?: string;
  detail?: TowerDetail;
};

export function PartArt({
  variant,
  className = "",
  detail = "gaming",
}: PartArtProps) {
  if (variant === "tower") {
    return (
      <svg
        viewBox="0 0 160 220"
        className={className}
        aria-hidden="true"
        role="presentation"
      >
        <rect
          x="34"
          y="8"
          width="92"
          height="204"
          rx="4"
          fill="var(--fj-art-body)"
          stroke="var(--fj-art-line)"
          strokeWidth="3"
        />
        <rect
          x="46"
          y="22"
          width="68"
          height="176"
          fill="none"
          stroke="var(--fj-art-line)"
          strokeWidth="1.5"
          opacity="0.4"
        />
        {detail === "studio" && (
          <g>
            <rect
              x="58"
              y="24"
              width="54"
              height="10"
              fill="var(--fj-art-line)"
              opacity="0.1"
            />
            <circle
              cx="72"
              cy="29"
              r="3"
              fill="none"
              stroke="var(--fj-art-accent)"
              strokeWidth="1.2"
            />
            <circle
              cx="98"
              cy="29"
              r="3"
              fill="none"
              stroke="var(--fj-art-accent)"
              strokeWidth="1.2"
            />
          </g>
        )}
        <circle
          cx="46"
          cy="58"
          r="15"
          fill="none"
          stroke="var(--fj-art-line)"
          strokeWidth="2"
        />
        <circle
          cx="46"
          cy="58"
          r="4"
          fill="var(--fj-art-accent)"
        />
        <circle
          cx="46"
          cy="102"
          r="15"
          fill="none"
          stroke="var(--fj-art-line)"
          strokeWidth="2"
        />
        <circle
          cx="46"
          cy="102"
          r="4"
          fill="var(--fj-art-muted)"
        />
        <circle
          cx="46"
          cy="146"
          r="15"
          fill="none"
          stroke="var(--fj-art-line)"
          strokeWidth="2"
        />
        <circle
          cx="46"
          cy="146"
          r="4"
          fill="var(--fj-art-muted)"
        />
        <path
          d="M46 43v30M46 87v30M46 131v30"
          stroke="var(--fj-art-muted)"
          strokeWidth="1.5"
        />

        <rect
          x="72"
          y="40"
          width="36"
          height="47"
          fill="var(--fj-art-line)"
          opacity="0.08"
        />
        <rect
          x="91"
          y="50"
          width="10"
          height="10"
          fill="var(--fj-art-accent)"
        />
        <rect
          x="75"
          y="66"
          width="6"
          height="16"
          fill="var(--fj-art-line)"
          opacity="0.45"
        />
        <rect
          x="84"
          y="66"
          width="6"
          height="16"
          fill="var(--fj-art-line)"
          opacity="0.45"
        />

        {detail !== "office" ? (
          <>
            <rect
              x="62"
              y="108"
              width="58"
              height={detail === "studio" ? 20 : 16}
              rx="1"
              fill="var(--fj-art-body)"
              stroke="var(--fj-art-line)"
              strokeWidth="2"
            />
            <path
              d="M68 112h18M68 118h12"
              stroke="var(--fj-art-accent)"
              strokeWidth="2"
            />
            <circle
              cx="108"
              cy="116"
              r="5"
              fill="none"
              stroke="var(--fj-art-line)"
              strokeWidth="1.5"
            />
          </>
        ) : (
          <path
            d="M62 116h58"
            stroke="var(--fj-art-line)"
            strokeWidth="1.5"
            opacity="0.25"
          />
        )}

        <rect
          x="62"
          y="140"
          width="58"
          height="20"
          fill="var(--fj-art-line)"
          opacity="0.08"
        />
        <path
          d="M70 150h26M70 156h18"
          stroke="var(--fj-art-line)"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <rect
          x="62"
          y="168"
          width="58"
          height="24"
          fill="var(--fj-art-line)"
          opacity="0.08"
        />

        <circle cx="112" cy="18" r="3" fill="var(--fj-art-accent)" />
        <path
          d="M50 198h60"
          stroke="var(--fj-art-muted)"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  if (variant === "gpu") {
    return (
      <svg
        viewBox="0 0 200 140"
        className={className}
        aria-hidden="true"
        role="presentation"
      >
        <rect
          x="14"
          y="42"
          width="172"
          height="58"
          rx="3"
          fill="var(--fj-art-body)"
          stroke="var(--fj-art-line)"
          strokeWidth="2"
        />
        <rect x="14" y="42" width="9" height="58" fill="var(--fj-art-accent)" />
        <circle
          cx="72"
          cy="71"
          r="21"
          fill="none"
          stroke="var(--fj-art-line)"
          strokeWidth="2"
        />
        <circle
          cx="72"
          cy="71"
          r="7"
          fill="var(--fj-art-line)"
          opacity="0.2"
        />
        <path
          d="M72 53v8M72 81v8M54 71h8M82 71h8M59 58l5 5M80 79l5 5M80 58l-5 5M64 79l-5 5"
          stroke="var(--fj-art-line)"
          strokeWidth="1.6"
          opacity="0.7"
        />
        <circle
          cx="132"
          cy="71"
          r="21"
          fill="none"
          stroke="var(--fj-art-line)"
          strokeWidth="2"
        />
        <circle
          cx="132"
          cy="71"
          r="7"
          fill="var(--fj-art-line)"
          opacity="0.2"
        />
        <path
          d="M132 53v8M132 81v8M114 71h8M142 71h8M119 58l5 5M140 79l5 5M140 58l-5 5M124 79l-5 5"
          stroke="var(--fj-art-line)"
          strokeWidth="1.6"
          opacity="0.7"
        />
        <path
          d="M22 100h158"
          stroke="var(--fj-art-line)"
          strokeWidth="3"
        />
        <path
          d="M30 103v7M42 103v7M54 103v7M66 103v7M78 103v7M90 103v7M102 103v7M114 103v7M126 103v7M138 103v7M150 103v7M162 103v7"
          stroke="var(--fj-art-accent)"
          strokeWidth="2"
          opacity="0.8"
        />
        <rect x="162" y="47" width="15" height="8" fill="var(--fj-art-accent)" />
        <path d="M24 49h140" stroke="var(--fj-art-line)" strokeWidth="1.5" opacity="0.4" />
      </svg>
    );
  }

  if (variant === "cpu") {
    return (
      <svg
        viewBox="0 0 200 140"
        className={className}
        aria-hidden="true"
        role="presentation"
      >
        <rect
          x="55"
          y="20"
          width="90"
          height="90"
          rx="4"
          fill="var(--fj-art-body)"
          stroke="var(--fj-art-line)"
          strokeWidth="2"
        />
        <path
          d="M55 20h90v90H55Z"
          fill="none"
          stroke="var(--fj-art-line)"
          strokeWidth="1"
          opacity="0.3"
        />
        <rect
          x="68"
          y="33"
          width="64"
          height="64"
          fill="none"
          stroke="var(--fj-art-line)"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <rect
          x="84"
          y="49"
          width="32"
          height="32"
          fill="var(--fj-art-accent)"
        />
        <rect
          x="92"
          y="57"
          width="16"
          height="16"
          fill="var(--fj-art-body)"
        />
        <circle cx="100" cy="65" r="3" fill="var(--fj-art-accent)" />
        <path
          d="M55 35h-9M55 50h-9M55 65h-9M55 80h-9M55 95h-9M145 35h9M145 50h9M145 65h9M145 80h9M145 95h9M70 20v-9M85 20v-9M100 20v-9M115 20v-9M130 20v-9M70 110v9M85 110v9M100 110v9M115 110v9M130 110v9"
          stroke="var(--fj-art-muted)"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (variant === "ram") {
    return (
      <svg
        viewBox="0 0 200 140"
        className={className}
        aria-hidden="true"
        role="presentation"
      >
        <rect
          x="54"
          y="18"
          width="38"
          height="104"
          fill="var(--fj-art-body)"
          stroke="var(--fj-art-line)"
          strokeWidth="2"
        />
        <rect
          x="108"
          y="18"
          width="38"
          height="104"
          fill="var(--fj-art-body)"
          stroke="var(--fj-art-line)"
          strokeWidth="2"
        />
        <path
          d="M54 30h38M108 30h38"
          stroke="var(--fj-art-accent)"
          strokeWidth="4"
        />
        <path
          d="M54 44h38M108 44h38"
          stroke="var(--fj-art-line)"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <rect x="62" y="56" width="22" height="12" fill="var(--fj-art-line)" opacity="0.12" />
        <rect x="116" y="56" width="22" height="12" fill="var(--fj-art-line)" opacity="0.12" />
        <path
          d="M54 110h38M108 110h38"
          stroke="var(--fj-art-accent)"
          strokeWidth="4"
          opacity="0.8"
        />
        <path
          d="M54 122h38M108 122h38"
          stroke="var(--fj-art-muted)"
          strokeWidth="3"
        />
      </svg>
    );
  }

  if (variant === "ssd") {
    return (
      <svg
        viewBox="0 0 200 140"
        className={className}
        aria-hidden="true"
        role="presentation"
      >
        <rect
          x="18"
          y="56"
          width="164"
          height="28"
          rx="2"
          fill="var(--fj-art-body)"
          stroke="var(--fj-art-line)"
          strokeWidth="2"
        />
        <rect x="30" y="62" width="28" height="15" fill="var(--fj-art-accent)" />
        <rect x="64" y="62" width="34" height="15" fill="var(--fj-art-line)" opacity="0.14" />
        <rect x="104" y="62" width="24" height="15" fill="var(--fj-art-line)" opacity="0.14" />
        <rect x="134" y="62" width="18" height="15" fill="var(--fj-art-line)" opacity="0.14" />
        <path d="M18 78h164" stroke="var(--fj-art-muted)" strokeWidth="4" />
        <path d="M28 80v6M38 80v6M48 80v6M58 80v6M68 80v6M78 80v6M88 80v6M98 80v6M108 80v6M118 80v6M128 80v6M138 80v6M148 80v6M158 80v6M168 80v6" stroke="var(--fj-art-line)" strokeWidth="1.2" opacity="0.6" />
        <path d="M158 56v28" stroke="var(--fj-art-accent)" strokeWidth="3" />
      </svg>
    );
  }

  if (variant === "psu") {
    return (
      <svg
        viewBox="0 0 200 140"
        className={className}
        aria-hidden="true"
        role="presentation"
      >
        <rect
          x="30"
          y="30"
          width="140"
          height="80"
          rx="3"
          fill="var(--fj-art-body)"
          stroke="var(--fj-art-line)"
          strokeWidth="2"
        />
        <circle
          cx="84"
          cy="70"
          r="26"
          fill="none"
          stroke="var(--fj-art-line)"
          strokeWidth="2"
        />
        <circle cx="84" cy="70" r="4" fill="var(--fj-art-accent)" />
        <path
          d="M84 46v8M84 86v8M60 70h8M100 70h8M67 53l6 6M95 81l6 6M95 53l-6 6M73 81l-6 6"
          stroke="var(--fj-art-line)"
          strokeWidth="1.6"
          opacity="0.7"
        />
        <rect x="132" y="40" width="22" height="10" fill="var(--fj-art-accent)" />
        <path d="M30 100h140" stroke="var(--fj-art-line)" strokeWidth="1.5" opacity="0.4" />
        <path d="M140 100v18M150 100v18M160 100v18" stroke="var(--fj-art-muted)" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 200 140"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      <rect
        x="62"
        y="12"
        width="88"
        height="110"
        rx="2"
        fill="var(--fj-art-body)"
        stroke="var(--fj-art-line)"
        strokeWidth="2"
      />
      <path
        d="M68 20h76M68 28h76M68 36h76M68 44h76M68 52h76M68 60h76M68 68h76M68 76h76M68 84h76M68 92h76M68 100h76M68 108h76"
        stroke="var(--fj-art-muted)"
        strokeWidth="1.4"
        opacity="0.6"
      />
      <rect x="40" y="34" width="18" height="68" fill="var(--fj-art-accent)" opacity="0.9" />
      <circle cx="49" cy="68" r="22" fill="none" stroke="var(--fj-art-line)" strokeWidth="2" />
      <circle cx="49" cy="68" r="5" fill="var(--fj-art-body)" />
      <path d="M49 46v8M49 82v8M27 68h8M63 68h8" stroke="var(--fj-art-line)" strokeWidth="1.5" opacity="0.7" />
      <rect x="72" y="122" width="68" height="8" fill="var(--fj-art-line)" opacity="0.18" />
    </svg>
  );
}
