"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Foreground falling-leaves overlay for the hero. Rendered ABOVE the scene so the
 * leaves are always visible drifting across the park. Transform/opacity only;
 * renders nothing under prefers-reduced-motion. Configs are static (no Math.random)
 * to keep server and client markup identical.
 */

const LEAVES = [
  { left: "8%", size: 26, dur: 11, delay: 0, drift: 60, rot: 320, op: 0.85, color: "var(--color-bark-brown)" },
  { left: "18%", size: 20, dur: 14, delay: 3, drift: -50, rot: 280, op: 0.75, color: "var(--color-forest-floor)" },
  { left: "27%", size: 30, dur: 13, delay: 6.5, drift: 80, rot: 360, op: 0.8, color: "var(--color-botanical-ink)" },
  { left: "36%", size: 22, dur: 16, delay: 1.5, drift: -70, rot: 300, op: 0.7, color: "var(--color-bark-brown)" },
  { left: "45%", size: 24, dur: 12, delay: 8, drift: 55, rot: 340, op: 0.75, color: "var(--color-forest-floor)" },
  { left: "54%", size: 19, dur: 15, delay: 4.5, drift: -60, rot: 260, op: 0.7, color: "var(--color-botanical-ink)" },
  { left: "63%", size: 28, dur: 12.5, delay: 10, drift: 70, rot: 380, op: 0.8, color: "var(--color-bark-brown)" },
  { left: "72%", size: 21, dur: 14.5, delay: 2.5, drift: -55, rot: 300, op: 0.7, color: "var(--color-forest-floor)" },
  { left: "82%", size: 25, dur: 11.5, delay: 7, drift: 65, rot: 340, op: 0.75, color: "var(--color-bark-brown)" },
  { left: "90%", size: 20, dur: 16, delay: 5, drift: -45, rot: 280, op: 0.65, color: "var(--color-botanical-ink)" },
] as const;

function Leaf({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 1 C 4 8, 4 17, 12 23 C 20 17, 20 8, 12 1 Z" fill={color} />
      <path
        d="M12 3 L12 21"
        stroke="var(--color-cream-paper)"
        strokeWidth="1"
        opacity="0.35"
      />
    </svg>
  );
}

export default function FallingLeaves() {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {LEAVES.map((leaf, i) => (
        <motion.div
          key={i}
          className="absolute top-0"
          style={{ left: leaf.left }}
          initial={{ y: "-12%", opacity: 0 }}
          animate={{
            y: ["-12%", "112%"],
            x: [0, leaf.drift, leaf.drift * -0.4, leaf.drift, 0],
            rotate: [0, leaf.rot],
            opacity: [0, leaf.op, leaf.op, leaf.op, 0],
          }}
          transition={{
            duration: leaf.dur,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Leaf size={leaf.size} color={leaf.color} />
        </motion.div>
      ))}
    </div>
  );
}
