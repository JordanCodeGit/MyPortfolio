import { identity, contact } from "@/lib/content";

/**
 * Site footer — always a dark fill in BOTH themes (uses fixed tokens that don't
 * flip), so it stays a consistent grounding band. Wayfinding + meta, not a second
 * contact card: wordmark + positioning, secondary nav, location, copyright,
 * back-to-top. Contact actions live in the Contact section.
 */

const FOOTER_LINKS = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink-fixed)] px-6 py-12 text-[var(--color-paper-fixed)]">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="text-body-sm font-bold tracking-tight">
              {identity.name}
            </p>
            <p className="mt-1 font-mono text-micro uppercase text-[var(--color-paper-fixed)]/60">
              {identity.role} · {identity.eyebrow}
            </p>
            <p className="mt-3 font-mono text-micro uppercase text-[var(--color-paper-fixed)]/60">
              {contact.location}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-micro uppercase">
              {FOOTER_LINKS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="inline-flex min-h-[44px] items-center underline-offset-2 transition-opacity hover:opacity-70"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-paper-fixed)]/15 pt-6 font-mono text-micro uppercase text-[var(--color-paper-fixed)]/60">
          <span>© 2026 {identity.name} · Built with Next.js, deployed on Vercel</span>
          <a
            href="#"
            className="inline-flex min-h-[44px] items-center text-[var(--color-paper-fixed)] underline-offset-2 transition-opacity hover:opacity-70"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
