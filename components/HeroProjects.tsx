"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import Hero from "./Hero";
import HeroText from "./HeroText";
import HeroPhoto from "./HeroPhoto";
import LandscapeScene from "./LandscapeScene";
import FallingLeaves from "./FallingLeaves";
import Projects from "./Projects";
import { projects } from "@/lib/content";
import { useMediaQuery } from "@/lib/useMediaQuery";

/**
 * Owns the ONE signature scroll moment: Hero -> Projects.
 *
 * On the first scroll out of the hero, the full-bleed painted park scene zooms
 * OUT and fades while the hero content (copy + portrait composed in the park)
 * fades, resolving into the Projects section. One useScroll progress value drives
 * everything; transform/opacity only; pin is ~120vh and never longer.
 *
 * Branches once:
 *   - static (reduced-motion OR < 768px): stacked hero -> projects, simple fade,
 *     NO pin, NO zoom, NO ambient; the landscape sits as a flow band under the copy.
 *   - enhanced (desktop, motion allowed): the full-bleed park zoom-out above.
 *
 * The branch is gated behind `mounted` so the server and first client render are
 * identical (the enhanced initial frame), avoiding hydration mismatch.
 */
export default function HeroProjects() {
  const targetRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 767px)");

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // NOTE: with a ~120vh pin (220vh section), the sticky child is only pinned for
  // progress 0 -> ~0.55; after that the section scrolls away to reveal Projects.
  // So the whole arc is mapped to COMPLETE by ~0.52, while still on screen.

  // Landscape recedes: zoom OUT (scale < 1, from the bottom) and fade away.
  const landscapeScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.82]);
  const landscapeOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Hero content leaves early.
  const heroOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.28], [0, -30]);
  const heroPointer = useTransform(heroOpacity, (v) =>
    v > 0.05 ? "auto" : "none",
  );

  // Resolve into the Projects section colour just before the pin releases, so the
  // hand-off into Projects is seamless.
  const curtainOpacity = useTransform(scrollYProgress, [0.32, 0.52], [0, 1]);

  const useStatic = mounted && (prefersReduced || isMobile);

  // ---------------------------------------------------------------------------
  // STATIC PATH — reduced-motion / mobile: stacked sections, no pin, no zoom.
  // ---------------------------------------------------------------------------
  if (useStatic) {
    return (
      <>
        <section className="relative flex min-h-screen flex-col bg-cream-paper">
          <div className="relative z-10 flex flex-1 items-center py-20">
            {prefersReduced ? (
              <Hero />
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full"
              >
                <Hero />
              </motion.div>
            )}
          </div>
          {/* Landscape as a flow band under the hero — no overlap with content */}
          <div className="pointer-events-none relative z-0 h-[32vh] w-full">
            <LandscapeScene preserveAspectRatio="xMidYMax slice" />
          </div>
        </section>
        <Projects items={projects} animate={!prefersReduced} />
      </>
    );
  }

  // ---------------------------------------------------------------------------
  // ENHANCED PATH — full-bleed park scene (also the SSR / first-render output).
  // The copy + portrait sit INSIDE the garden; on scroll the whole scene zooms
  // OUT and fades while the content leaves, resolving into Projects.
  // ---------------------------------------------------------------------------
  return (
    <>
      <section ref={targetRef} className="relative h-[220vh]">
        <div className="sticky top-0 h-screen overflow-hidden bg-cream-paper">
          {/* Full-bleed garden — zooms OUT + fades; ambient leaves + tree sway */}
          <motion.div
            aria-hidden="true"
            style={{
              scale: landscapeScale,
              opacity: landscapeOpacity,
              transformOrigin: "50% 60%",
            }}
            className="absolute inset-0 z-0"
          >
            <div
              className="anim-pop h-full w-full"
              style={{ "--anim-delay": "200ms" } as React.CSSProperties}
            >
              <LandscapeScene preserveAspectRatio="xMidYMax slice" ambient />
            </div>
          </motion.div>

          {/* Copy + portrait, composed in the park; leaves early on scroll */}
          <motion.div
            style={{ opacity: heroOpacity, y: heroY, pointerEvents: heroPointer }}
            className="absolute inset-0 z-10"
          >
            {/* Full-bleed soft wash (edge to edge — no container seam) so the copy
                stays legible while the park shows through on the right */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cream-paper/85 via-cream-paper/30 to-transparent"
            />

            {/* Copy + portrait in a responsive grid — copy left, portrait in the
                center-right column (never overlapping, scales with the viewport) */}
            <div className="relative mx-auto grid h-full max-w-[1200px] items-stretch gap-6 px-6 md:grid-cols-[6fr_5fr]">
              <div className="flex h-full flex-col justify-center pb-[6vh]">
                <HeroText align="left" />
              </div>
              <div className="flex h-full items-end justify-start">
                <div
                  className="anim-pop relative"
                  style={{ "--anim-delay": "400ms" } as React.CSSProperties}
                >
                  {/* backlight glow so the figure emerges from the scene */}
                  <div
                    aria-hidden="true"
                    className="figure-glow pointer-events-none absolute left-1/2 top-[8%] h-[74%] w-[130%] -translate-x-1/2 rounded-full blur-2xl"
                  />
                  {/* grounding shadow at the feet, on the scene's ground line */}
                  <div
                    aria-hidden="true"
                    className="figure-shadow pointer-events-none absolute -bottom-2 left-1/2 h-[26px] w-[80%] -translate-x-1/2 rounded-[50%] blur-md"
                  />
                  <HeroPhoto className="relative h-[82vh] max-h-[780px] w-auto max-w-[42vw]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Foreground falling leaves — drift in front of the scene */}
          <motion.div
            style={{ opacity: heroOpacity }}
            className="pointer-events-none absolute inset-0 z-30"
          >
            <FallingLeaves />
          </motion.div>

          {/* Resolve into the Projects section colour as the scene recedes */}
          <motion.div
            aria-hidden="true"
            style={{ opacity: curtainOpacity }}
            className="pointer-events-none absolute inset-0 z-40 bg-sage-mist"
          />
        </div>
      </section>

      {/* After the pin, scrolling is fully normal. Both projects live here. */}
      <Projects items={projects} animate id="work" />
    </>
  );
}
