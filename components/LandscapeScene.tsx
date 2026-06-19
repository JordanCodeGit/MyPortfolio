"use client";

import { motion } from "motion/react";

/**
 * Painterly park scene, inline SVG. Sky, hills, lake, pre-feathered mist (opacity
 * only — no blur filter), distant tree clusters, a lamppost, bushes, grass, birds,
 * a bench and two wind-shaped trees.
 *
 * Everything uses palette CSS variables so a future dark ("night park") theme can
 * re-skin the whole scene by swapping the variables. The lamppost has a warm halo
 * (subtle by day) ready to glow at night.
 *
 * `ambient` adds a gentle tree sway. Falling leaves are a separate FOREGROUND
 * overlay (see FallingLeaves) so they're never hidden behind the scene. The whole
 * scene is scaled/faded by the parent for the Hero -> Projects zoom-out.
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
          <stop offset="0%" stopColor="var(--color-sage-mist)" />
          <stop offset="55%" stopColor="var(--color-cream-paper)" />
          <stop offset="100%" stopColor="var(--color-cream-paper)" />
        </linearGradient>
        <linearGradient id="ls-lake" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-lichen)" />
          <stop offset="100%" stopColor="var(--color-sage-mist)" />
        </linearGradient>
        <radialGradient id="ls-mist" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-cream-paper)" stopOpacity="0.95" />
          <stop offset="60%" stopColor="var(--color-cream-paper)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--color-cream-paper)" stopOpacity="0" />
        </radialGradient>
        {/* Warm lantern glow — subtle by day, ready to intensify at night */}
        <radialGradient id="ls-lamp" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-moss-veil)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--color-moss-veil)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* SKY */}
      <rect x="0" y="0" width="1440" height="800" fill="url(#ls-sky)" />
      <ellipse cx="760" cy="320" rx="560" ry="150" fill="url(#ls-mist)" opacity="0.7" />

      {/* BIRDS — distant, in the upper sky */}
      <g
        stroke="var(--color-bark-brown)"
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
        fill="var(--color-eucalyptus)"
      />

      {/* MID HILLS */}
      <path
        d="M0 470 C 300 430, 520 470, 760 460 S 1180 440, 1440 478 L1440 800 L0 800 Z"
        fill="var(--color-forest-floor)"
        opacity="0.55"
      />

      {/* LAKE */}
      <path
        d="M0 560 C 360 540, 760 552, 1080 560 S 1320 572, 1440 566 L1440 800 L0 800 Z"
        fill="url(#ls-lake)"
      />
      <ellipse cx="520" cy="650" rx="220" ry="10" fill="var(--color-cream-paper)" opacity="0.35" />
      <ellipse cx="980" cy="700" rx="180" ry="8" fill="var(--color-cream-paper)" opacity="0.28" />

      {/* MIST */}
      <ellipse cx="430" cy="520" rx="420" ry="120" fill="url(#ls-mist)" />
      <ellipse cx="1020" cy="540" rx="480" ry="130" fill="url(#ls-mist)" />

      {/* BUSHES along the ground */}
      <g fill="var(--color-forest-floor)" opacity="0.7">
        <ellipse cx="90" cy="710" rx="120" ry="46" />
        <ellipse cx="1370" cy="700" rx="130" ry="50" />
        <ellipse cx="1300" cy="724" rx="80" ry="34" />
      </g>

      {/* LAMPPOST (center) — halo ready to glow at night */}
      <g>
        <ellipse cx="724" cy="556" rx="120" ry="120" fill="url(#ls-lamp)" />
        <rect x="720" y="566" width="8" height="206" rx="4" fill="var(--color-botanical-ink)" />
        <rect x="700" y="772" width="48" height="10" rx="4" fill="var(--color-botanical-ink)" />
        {/* lantern head */}
        <path
          d="M708 566 L740 566 L734 532 L714 532 Z"
          fill="var(--color-botanical-ink)"
        />
        <rect x="716" y="520" width="16" height="14" rx="3" fill="var(--color-botanical-ink)" />
        <circle cx="724" cy="550" r="7" fill="var(--color-moss-veil)" opacity="0.8" />
      </g>

      {/* BENCH (left-of-centre, in the open) */}
      <g
        stroke="var(--color-bark-brown)"
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

      {/* GRASS tufts along the foreground */}
      <g
        stroke="var(--color-forest-floor)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      >
        <path d="M150 786 l 0 -16 M156 786 l 4 -16 M144 786 l -4 -14" />
        <path d="M340 792 l 0 -16 M346 792 l 4 -16 M334 792 l -4 -14" />
        <path d="M880 792 l 0 -16 M886 792 l 4 -16 M874 792 l -4 -14" />
        <path d="M1120 788 l 0 -16 M1126 788 l 4 -16 M1114 788 l -4 -14" />
      </g>

      {/* WIND-SHAPED TREES (canopies sway when ambient) */}
      {/* right tree — shifted right so the portrait doesn't block it */}
      <rect x="1338" y="470" width="10" height="200" rx="5" fill="var(--color-botanical-ink)" />
      <motion.path
        d="M1343 470 C 1300 452, 1270 470, 1242 458 C 1290 476, 1260 500, 1220 496 C 1280 514, 1250 540, 1216 540 C 1300 556, 1360 520, 1390 470 C 1376 446, 1360 452, 1343 470 Z"
        fill="var(--color-botanical-ink)"
        {...sway("1343px 470px", 2.5, 6)}
      />
      {/* left tree */}
      <rect x="214" y="540" width="8" height="150" rx="4" fill="var(--color-bark-brown)" />
      <motion.path
        d="M218 540 C 188 528, 168 540, 150 532 C 184 546, 164 564, 138 562 C 186 580, 232 556, 252 524 C 242 508, 230 514, 218 540 Z"
        fill="var(--color-bark-brown)"
        {...sway("218px 540px", 3, 5, 0.8)}
      />
    </svg>
  );
}
