"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useReducedMotion } from "motion/react";
import ThemeToggle from "./ThemeToggle";

/**
 * Sticky top nav. Stays out of the way over the hero (the signature first
 * impression), then reveals once you scroll past it. Provides: name -> top,
 * jump links to each section, a scroll-progress line, and active-section
 * highlighting. Scroll-linked progress only — no scroll-jacking.
 */

const SECTIONS = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const prefersReduced = useReducedMotion();
  const [active, setActive] = useState("");

  // Track the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-lichen bg-cream-paper/95">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-3">
        <a
          href="#"
          onClick={toTop}
          className="text-body-sm font-bold tracking-tight text-botanical-ink"
        >
          Jordan
        </a>
        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="flex items-center gap-4 overflow-x-auto whitespace-nowrap font-mono text-micro uppercase sm:gap-6">
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={
                    active === id
                      ? "text-forest-floor"
                      : "text-bark-brown transition-colors hover:text-botanical-ink"
                  }
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
      {/* Scroll progress */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-0.5 origin-left bg-forest-floor"
      />
    </header>
  );
}
