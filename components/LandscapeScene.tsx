"use client";

import { motion } from "motion/react";

/**
 * Painterly park scene, inline SVG. Reads every colour from `--scene-*` tokens
 * (defined per theme in globals.css), so it re-skins from a daytime park to a
 * moonlit night park when <html class="dark"> is set — without touching the UI
 * palette. Pre-feathered mist (opacity only, no blur filter).
 *
 * `ambient` adds quiet life — tree sway, drifting leaves (foreground, separate),
 * and fireflies that only show at night (their token is transparent by day).
 */
export default function LandscapeScene({
  preserveAspectRatio = "xMidYMid slice",
  ambient = false,
}: {
  preserveAspectRatio?: string;
  ambient?: boolean;
}) {
  const sway = (origin: string, amount: number, duration: number, delay = 0) =>
    ambient
      ? {
          style: { transformBox: "view-box" as const, transformOrigin: origin },
          animate: { rotate: [0, amount, 0] },
          transition: {
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        }
      : {};

  return (
    <svg
      viewBox="0 0 1440 800"
      preserveAspectRatio={preserveAspectRatio}
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ls-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--scene-sky-top)" />
          <stop offset="60%" stopColor="var(--scene-sky-bottom)" />
          <stop offset="100%" stopColor="var(--scene-sky-bottom)" />
        </linearGradient>
        <linearGradient id="ls-lake" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--scene-lake-top)" />
          <stop offset="100%" stopColor="var(--scene-lake-bottom)" />
        </linearGradient>
        <radialGradient id="ls-mist" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--scene-mist)" stopOpacity="0.9" />
          <stop offset="60%" stopColor="var(--scene-mist)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="var(--scene-mist)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ls-lamp" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--scene-lamp-glow)" stopOpacity="0.65" />
          <stop offset="100%" stopColor="var(--scene-lamp-glow)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ls-moon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--scene-moon)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--scene-moon)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* SKY */}
      <rect x="0" y="0" width="1440" height="800" fill="url(#ls-sky)" />

      {/* MOON (night only — token transparent by day) */}
      <ellipse cx="1180" cy="150" rx="150" ry="150" fill="url(#ls-moon)" />
      <circle cx="1180" cy="150" r="46" fill="var(--scene-moon)" />

      <ellipse cx="760" cy="320" rx="560" ry="150" fill="url(#ls-mist)" opacity="0.7" />

      {/* BIRDS */}
      <g
        stroke="var(--scene-bird)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      >
        <path d="M430 175 q 10 -8 20 0 q 10 -8 20 0" />
        <path d="M500 200 q 8 -6 16 0 q 8 -6 16 0" />
        <path d="M380 215 q 7 -5 14 0 q 7 -5 14 0" />
      </g>

      {/* FAR HILLS */}
      <path
        d="M0 400 C 240 350, 430 372, 640 388 S 1080 360, 1440 392 L1440 800 L0 800 Z"
        fill="var(--scene-hill-far)"
      />

      {/* MID HILLS */}
      <path
        d="M0 470 C 300 430, 520 470, 760 460 S 1180 440, 1440 478 L1440 800 L0 800 Z"
        fill="var(--scene-hill-mid)"
        opacity="0.55"
      />

      {/* LAKE */}
      <path
        d="M0 560 C 360 540, 760 552, 1080 560 S 1320 572, 1440 566 L1440 800 L0 800 Z"
        fill="url(#ls-lake)"
      />
      <ellipse cx="520" cy="650" rx="220" ry="10" fill="var(--scene-reflection)" opacity="0.35" />
      <ellipse cx="980" cy="700" rx="180" ry="8" fill="var(--scene-reflection)" opacity="0.28" />

      {/* MIST */}
      <ellipse cx="430" cy="520" rx="420" ry="120" fill="url(#ls-mist)" />
      <ellipse cx="1020" cy="540" rx="480" ry="130" fill="url(#ls-mist)" />

      {/* BUSHES */}
      <g fill="var(--scene-bush)" opacity="0.7">
        <ellipse cx="90" cy="710" rx="120" ry="46" />
        <ellipse cx="1370" cy="700" rx="130" ry="50" />
        <ellipse cx="1300" cy="724" rx="80" ry="34" />
      </g>

      {/* LAMPPOST — glows at night */}
      <g>
        <ellipse cx="724" cy="556" rx="150" ry="150" fill="url(#ls-lamp)" />
        <rect x="720" y="566" width="8" height="206" rx="4" fill="var(--scene-object)" />
        <rect x="700" y="772" width="48" height="10" rx="4" fill="var(--scene-object)" />
        <path d="M708 566 L740 566 L734 532 L714 532 Z" fill="var(--scene-object)" />
        <rect x="716" y="520" width="16" height="14" rx="3" fill="var(--scene-object)" />
        <circle cx="724" cy="550" r="7" fill="var(--scene-lamp-bulb)" />
      </g>

      {/* BENCH */}
      <g
        stroke="var(--scene-object-2)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      >
        <line x1="440" y1="712" x2="600" y2="712" />
        <line x1="440" y1="730" x2="600" y2="730" />
        <line x1="456" y1="712" x2="456" y2="766" />
        <line x1="584" y1="712" x2="584" y2="766" />
        <line x1="448" y1="692" x2="448" y2="712" />
        <line x1="592" y1="692" x2="592" y2="712" />
        <line x1="448" y1="692" x2="592" y2="692" />
      </g>

      {/* GRASS */}
      <g
        stroke="var(--scene-grass)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      >
        <path d="M150 786 l 0 -16 M156 786 l 4 -16 M144 786 l -4 -14" />
        <path d="M340 792 l 0 -16 M346 792 l 4 -16 M334 792 l -4 -14" />
        <path d="M880 792 l 0 -16 M886 792 l 4 -16 M874 792 l -4 -14" />
        <path d="M1120 788 l 0 -16 M1126 788 l 4 -16 M1114 788 l -4 -14" />
      </g>

      {/* TREES — rounded leafy canopies (clusters of ellipses) that sway when
          ambient. The crown is grouped so it sways from the trunk top. */}
      {/* right tree, near the portrait */}
      <rect x="1340" y="430" width="9" height="245" rx="4" fill="var(--scene-object)" />
      <motion.g fill="var(--scene-object)" {...sway("1344px 440px", 2.2, 6)}>
        <ellipse cx="1344" cy="425" rx="58" ry="50" />
        <ellipse cx="1308" cy="446" rx="36" ry="32" />
        <ellipse cx="1382" cy="444" rx="38" ry="34" />
        <ellipse cx="1344" cy="402" rx="40" ry="36" />
      </motion.g>
      {/* left tree, smaller */}
      <rect x="214" y="512" width="8" height="178" rx="4" fill="var(--scene-object-2)" />
      <motion.g fill="var(--scene-object-2)" {...sway("218px 520px", 2.6, 5, 0.8)}>
        <ellipse cx="218" cy="508" rx="44" ry="38" />
        <ellipse cx="190" cy="524" rx="28" ry="24" />
        <ellipse cx="248" cy="522" rx="30" ry="26" />
        <ellipse cx="218" cy="490" rx="30" ry="27" />
      </motion.g>

      {/* FIREFLIES (night only — token transparent by day) */}
      {ambient && (
        <g>
          {[
            { cx: 760, cy: 600, dur: 5, delay: 0 },
            { cx: 640, cy: 660, dur: 6.5, delay: 1.2 },
            { cx: 840, cy: 640, dur: 5.8, delay: 2.4 },
            { cx: 540, cy: 700, dur: 7, delay: 0.6 },
            { cx: 900, cy: 690, dur: 6, delay: 3 },
          ].map((f, i) => (
            <motion.circle
              key={i}
              cx={f.cx}
              cy={f.cy}
              r="3.5"
              fill="var(--scene-firefly)"
              animate={{
                x: [0, 25, -15, 10, 0],
                y: [0, -20, -8, -28, 0],
                opacity: [0.15, 1, 0.3, 0.9, 0.15],
              }}
              transition={{
                duration: f.dur,
                delay: f.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </g>
      )}
    </svg>
  );
}
