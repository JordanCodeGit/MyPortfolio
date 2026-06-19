"use client";

import { motion } from "motion/react";
import { projects, work, type Project } from "@/lib/content";
import ProjectCard from "./ProjectCard";

/**
 * The work section used on the STATIC path (reduced-motion / mobile): a normal
 * stacked section with a light fade-up. On the pinned desktop path the header +
 * first card are revealed by the camera-push instead (see HeroProjects), so this
 * component is not used there.
 */
export default function Projects({
  items = projects,
  animate = true,
  id = "work",
}: {
  items?: Project[];
  animate?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className="bg-sage-mist px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px]">
        <header className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-micro uppercase text-bark-brown">
            {work.eyebrow}
          </p>
          <h2 className="mt-4 text-heading font-normal text-botanical-ink text-balance">
            {work.heading}
          </h2>
        </header>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6">
          {items.map((project, i) =>
            animate ? (
              <motion.div
                key={project.name}
                // The first card gets the "arrival" beat — it emerges with a
                // touch of scale + a deeper rise + slower easing, as if you've
                // just passed through the horizon onto it. Later cards use the
                // quieter fade-up so the emphasis stays on the entrance.
                initial={
                  i === 0
                    ? { opacity: 0, y: 48, scale: 0.94 }
                    : { opacity: 0, y: 24 }
                }
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: i === 0 ? 0.3 : 0.2 }}
                transition={
                  i === 0
                    ? { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                    : { duration: 0.5, delay: 0.05, ease: "easeOut" }
                }
              >
                <ProjectCard project={project} />
              </motion.div>
            ) : (
              <ProjectCard key={project.name} project={project} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
