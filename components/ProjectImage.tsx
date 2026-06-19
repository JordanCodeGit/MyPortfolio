"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/**
 * Project screenshot with graceful degradation + a gentle scroll parallax (the
 * image drifts within its frame as the card moves through the viewport). This is
 * a subtle reveal, NOT a pinned/scroll-jacked moment. If the file is missing it
 * swaps to a neutral, labelled palette placeholder. Lazy-loaded, real alt text.
 */
export default function ProjectImage({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Image is overscanned 12% (see -inset-y-[12%]); drift stays within that.
  const yRange = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <div
      ref={ref}
      className="relative aspect-[16/10] overflow-hidden rounded-[8px] border border-lichen bg-sage-mist"
    >
      {failed ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-1 px-4 text-center">
          <span className="font-mono text-micro uppercase text-bark-brown">
            {label}
          </span>
          <span className="font-mono text-[0.6875rem] uppercase tracking-wide text-bark-brown/60">
            Screenshot coming
          </span>
        </div>
      ) : (
        <motion.div
          style={{ y: prefersReduced ? 0 : yRange }}
          className="absolute inset-x-0 -inset-y-[12%]"
        >
          <Image
            src={src}
            alt={alt}
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 40vw"
            onError={() => setFailed(true)}
            className="object-cover"
          />
        </motion.div>
      )}
    </div>
  );
}
