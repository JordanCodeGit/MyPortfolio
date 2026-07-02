"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";
import ThemeToggle from "./ThemeToggle";

/**
 * Sticky top nav. Desktop shows inline section links; mobile collapses them into
 * a hamburger dropdown. The theme toggle stays OUTSIDE the menu, persistently
 * visible at every breakpoint (always one tap away). Scroll-progress line +
 * active-section highlight. No horizontal overflow.
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
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  };

  const linkClass = (id: string) =>
    active === id
      ? "text-forest-floor"
      : "text-bark-brown transition-colors hover:text-botanical-ink";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-lichen bg-cream-paper/95">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-6 py-3">
        <a
          href="#"
          onClick={toTop}
          className="inline-flex min-h-[44px] items-center text-body-sm font-bold tracking-tight text-botanical-ink"
        >
          Jordan
        </a>

        <div className="flex items-center gap-3 sm:gap-6">
          {/* Desktop links */}
          <ul className="hidden items-center gap-6 font-mono text-micro uppercase sm:flex">
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className={linkClass(id)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme toggle — persistent at all breakpoints, outside the menu */}
          <ThemeToggle />

          {/* Hamburger — mobile only */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-lichen text-botanical-ink transition-colors hover:bg-sage-mist sm:hidden"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-lichen bg-cream-paper/95 sm:hidden"
        >
          <ul className="mx-auto flex max-w-[1200px] flex-col px-6 py-2 font-mono text-micro uppercase">
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`flex min-h-[44px] items-center ${linkClass(id)}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Scroll progress */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-0.5 origin-left bg-forest-floor"
      />
    </header>
  );
}
